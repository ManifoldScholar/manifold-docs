import { hasClass, addClass, removeClass } from "./lib/dom-help.js";

class Tabs {
  constructor(count, node) {
    this.count = count;
    this.min = 0;
    this.max = count - 1;
    this.node = node;
    // this.nav = this.node.querySelector('[data-slider-nav]');
    this.element = this.node.querySelector('[data-element]');
    this.element.style.width = (this.count * 100) + 'vw';
    this.tabs = this.element.querySelectorAll('[data-tab]');
    this.autoplay = node.dataset.autoplay;
    this.autoplayTimer = null;

    // Keep track of slides in current
    this.current = 0;
    this.initOrdinals();
    this.initPagers();
    this.updateOrdinals();
    this.setActiveTab(this.current);
    this.autoAdvance();

    node.addEventListener('custom_swipe', (event) => {
      switch(event.detail) {
        case 'left':
          this.pageLeft();
          break;
        case 'right':
          this.pageRight();
          break;
        default:
          return null;
      }
    });
  }

  initOrdinals() {
    const ordinals = this.node.querySelectorAll('[data-pager-ordinal]');
    this.ordinals = Array.from(ordinals);

    this.ordinals.forEach((ordinal) => {
      ordinal.addEventListener('click', ()=> {
        this.current = parseInt(ordinal.getAttribute('data-pager-ordinal')) - 1;
        this.updatePosition();
        this.updateOrdinals();
      })
    })
  }

  initPagers() {
    const pagersLeft = this.node.querySelectorAll('[data-pager="left"]');
    const pagersRight = this.node.querySelectorAll('[data-pager="right"]');

    Array.from(pagersLeft).forEach((pager) => {
      pager.addEventListener('click', () => {
        this.pageLeft();
      });
    });

    Array.from(pagersRight).forEach((pager) => {
      pager.addEventListener('click', () => {
        this.pageRight();
      });
    });
  }

  pageLeft() {
    if (this.current > this.min) {
      this.current -= 1;
      this.updatePosition();
      this.updateOrdinals();
    } else {
      this.current = this.max;
      this.updatePosition();
      this.updateOrdinals();
    }

    this.autoAdvance();
  }

  pageRight() {
    if (this.current < this.max) {
      this.current += 1;
      this.updatePosition();
      this.updateOrdinals();
    } else {
      this.current = this.min;
      this.updatePosition();
      this.updateOrdinals();
    }

    this.autoAdvance();
  }

  autoAdvance() {
    clearTimeout(this.autoplayTimer);
    if (this.autoplay) {
      this.autoplayTimer = setTimeout(() => {
        this.pageRight();
      }, 10000);
    }
  }

  updateOrdinals() {
    this.ordinals.forEach((ordinal) => {
      const next = this.current + 1 + '';
      if (hasClass(ordinal, 'active')) {
        removeClass(ordinal, 'active');
      }

      if (ordinal.getAttribute('data-pager-ordinal') === next) {
        addClass(ordinal, 'active');
      }
    });
  }

  setActiveTab() {
    const current = this.current + 1;
    const tabs = this.tabs;

    [...tabs].forEach(tab => {
      if (parseInt(tab.dataset.tab) === current) {
        removeClass(tab, 'inactive');
      } else {
        addClass(tab, 'inactive');
      }
    });
  }

  updatePosition() {
    const translation = 'translateX(-' + (this.current * 100) + 'vw)';
    this.element.style.transform = translation;
    this.setActiveTab();
  }
}

module.exports = Tabs;
