var domHelp = {
  hasClass: function(el, className) {
    if (el.classList) {
      return el.classList.contains(className);
    } else {
      return !!el.className.match(
        new RegExp("(\\s|^)" + className + "(\\s|$)")
      );
    }
  },

  addClass: function(el, className) {
    if (el.classList) {
      el.classList.add(className);
    } else if (!this.hasClass(el, className)) {
      el.className += " " + className;
    }
  },

  removeClass: function(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else if (this.hasClass(el, className)) {
      var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
      el.className = el.className.replace(reg, " ");
    }
  },

  toggleClass: function(el, className) {
    if (el.classList) {
      el.classList.toggle(className);
    } else {
      var classes = el.className.split(" ");
      var existingIndex = classes.indexOf(className);

      if (existingIndex >= 0) classes.splice(existingIndex, 1);
      else classes.push(className);

      el.className = classes.join(" ");
    }
  },

  extend: function(src, props) {
    props = props || {};
    var p;
    for (p in src) {
      if (src.hasOwnProperty(p)) {
        if (!props.hasOwnProperty(p)) {
          props[p] = src[p];
        }
      }
    }
    return props;
  },

  debounce: function(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  },

  isMobile: function() {
    if (
      /Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(
        navigator.userAgent
      )
    ) {
      // eslint-disable-line max-len
      return true;
    }
  },

  ready: function(f) {
    if (document.readyState !== "loading") {
      f();
    } else {
      document.addEventListener("DOMContentLoaded", f);
    }
  },

  prefixedEvent: function(element, type, callback) {
    const prefixes = ["webkit", "moz", "MS", "o", ""];

    for (var p = 0; p < prefixes.length; p++) {
      if (!prefixes[p]) type = type.toLowerCase();
      element.addEventListener(prefixes[p]+type, callback);
    }
  }
};

module.exports = domHelp;
