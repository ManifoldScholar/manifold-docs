import {debounce} from 'lodash';
import ClassBurger from "./class-burger";
import ScrollLock from "./ScrollLock";
import {
  addClass,
  removeClass,
  hasClass,
  prefixedEvent
} from "./lib/dom-help.js";
import { expand, collapse } from "./lib/height-help.js";

class DocumentationSidebar {
  constructor(
    el,
    toggleSelector = '[data-sidebar-accordion-toggle]',
    revealSelector = '[data-sidebar-accordion-reveal]',
    onClass = 'open',
  ) {
    // Setup open/close, and scroll locking behavior for sidebar itself
    this.scrollLock = new ScrollLock();
    const debouncedScrollLock = debounce(this.maybeLockScroll, 200);

    if (el) {
      this.menu = el.querySelector('[data-sidebar-menu]');
      // Setup class burger to open and close sidebar
      const burger = new ClassBurger('sidebar', 'open', (toggle) => {
        // If sidebar is open, lock the scroll on mobile
        this.maybeLockScroll();
        // But keep checking scroll lock on resize
        window.addEventListener('resize', debouncedScrollLock);
      }, () => {
        // Always unlock scroll (and unbind) on close
        this.scrollLock.unlock(this.menu);
        window.removeEventListener('resize', debouncedScrollLock);
      });
    }

    const toggleAttr = toggleSelector.match(/\[(.*)\]/)[1];
    const revealAttr = revealSelector.match(/\[(.*)\]/)[1];
    const toggles = document.querySelectorAll(toggleSelector);

    for (const [index, toggle] of [...toggles].entries()) {
      const toggleId = toggle.getAttribute(toggleAttr);
      const reveal = document.querySelector(
        "[" + revealAttr + "=" + toggleId + "]"
      );
      const accordionTrigger = new AccordionTrigger(
        toggle,
        reveal,
        onClass
      );
    }
  }

  maybeLockScroll = () => {
    if (window.innerWidth <= 845) {
      this.scrollLock.lock(this.menu);
      console.log('lock!');
    } else {
      this.scrollLock.unlock(this.menu);
      console.log('unlock!');
    }
  }
}

class AccordionTrigger {
  constructor(triggerNode, revealNode, onClass) {
    this.trigger = triggerNode;
    this.reveal = revealNode;
    this.onClass = onClass;

    // Bind click handler
    this.bindTriggers();
  }

  resizeHandler = () => {
    debounce(this.close(), 500);
  }

  bindTriggers() {
    if (!this.trigger || !this.reveal) return;
    prefixedEvent(this.reveal, "TransitionEnd", this.resetHeightDefault);
    this.trigger.addEventListener("click", event => {
      this.updateReveal();
    });
  }

  resetHeightDefault = () => {
    if (hasClass(this.reveal, this.onClass)) {
      this.reveal.style.maxHeight = 'none';
    }
  }

  open() {
    addClass(this.trigger, this.onClass);
    addClass(this.reveal, this.onClass);
    expand(this.reveal);
  }

  hide() {
    removeClass(this.trigger, this.onClass);
    this.reveal.style.maxHeight = this.reveal.offsetHeight + 'px';
    setTimeout(() => {
      collapse(this.reveal);
      removeClass(this.reveal, this.onClass);
    }, 50);
  }

  updateReveal() {
    if (hasClass(this.trigger, this.onClass)) {
      this.hide();
    } else {
      this.open();
    }
  }

  close() {
    if (hasClass(this.reveal, this.onClass)) {
      this.hide();
    }
  }
}

module.exports = DocumentationSidebar;
