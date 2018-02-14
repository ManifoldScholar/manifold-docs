import { debounce, hasClass, addClass, removeClass } from "./lib/dom-help.js";

class ScrollTarget {
  constructor(el, onClass = 'active') {
    this.target = el;
    this.onClass = onClass

    window.addEventListener('scroll', this.scrollHandler);
  }

  posCheck() {
    const pos = this.target.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (pos > 0 && pos <= viewportHeight) {
      if (!hasClass(this.target, this.onClass)) {
        addClass(this.target, this.onClass);
      }
    } else if (pos <= -this.target.offsetHeight || pos > viewportHeight) {
      removeClass(this.target, this.onClass);
    }

  }

  scrollHandler = () => {
    debounce(this.posCheck(), 400);
  }
}

module.exports = ScrollTarget;
