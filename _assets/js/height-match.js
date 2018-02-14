import { debounce } from "./lib/dom-help.js";

class HeightMatch {
  constructor(selector = '[data-mh]') {
    this.selector = selector;
    this.sameHeights(this.selector);
    window.addEventListener('resize', this.resizeHandler);
  }

  sameHeights(selector) {
    const query = document.querySelectorAll(selector);
    let elements = query.length;
    let max = 0;

    if (elements) {
      while (elements--) {
        const element = query[elements];
        const height = element.clientHeight;
        element.style.height = 'auto';

        if (element.clientHeight > max) {
          max = element.clientHeight;
        }

        element.style.height = height;
      }

      elements = query.length;

      while (elements--) {
        const element = query[elements];
        element.style.height = max + 'px';
      }
    }
  }

  resizeHandler = () => {
    debounce(this.sameHeights(this.selector), 300);
  }
}

module.exports = HeightMatch;
