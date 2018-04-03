// Plain JS class converted from react component here:
// https://github.com/orteth01/react-scroll-lock-component/

const upKeys = [
  33, // pageUp
  38  // arrowUp
];
const downKeys = [
  32, // space
  34, // pageDown
  40  // arrowDown
];

export default class ScrollLock {
  lock(el) {
    this.scrollingElement = el;
    this.listenToScrollEvents(this.scrollingElement);
  }

  unlock(el) {
    this.stopListeningToScrollEvents(this.scrollingElement);
  }

  only(el) {
    this.scrollingElement = el;
    this.listenToScrollEvents(this.scrollingElement, true);
  }

  any(el) {
    this.stopListeningToScrollEvents(this.scrollingElement, true);
  }

  handleEventDelta = (e, delta) => {
    const isDeltaPositive = delta > 0;
    const elem = this.scrollingElement;
    const { scrollTop, scrollHeight, clientHeight } = elem;

    let shouldCancelScroll = false;
    if (isDeltaPositive && delta > scrollHeight - clientHeight - scrollTop) {
      // bottom limit
      elem.scrollTop = scrollHeight;
      shouldCancelScroll = true;
    } else if (!isDeltaPositive && -delta > scrollTop) {
      // top limit
      elem.scrollTop = 0;
      shouldCancelScroll = true;
    }

    if (shouldCancelScroll) {
      this.cancelScrollEvent(e);
    }
  };

  onWheelHandler = (e) => {
    this.handleEventDelta(e, e.deltaY);
  };

  onTouchStartHandler = (e) => {
    // set touch start so we can calculate touchmove delta
    this.touchStart = e.changedTouches[0].clientY;
  };

  onTouchMoveHandler = (e) => {
    const delta = this.touchStart - e.changedTouches[0].clientY;
    this.handleEventDelta(e, delta);
  }

  onKeyDownHandler = (e) => {
    if (e.target !== this.scrollingElement) {
      return;
    }

    if (upKeys.indexOf(e.keyCode) >= 0) {
      this.handleEventDelta(e, -1);
    } else if (downKeys.indexOf(e.keyCode) >= 0) {
      this.handleEventDelta(e, 1);
    }
  }

  preventOutside = (e) => {
    const elem = this.scrollingElement;
    if(!elem.contains(e.target)) {
      this.cancelScrollEvent(e);
    }
  }

  cancelScrollEvent = (e) => {
    e.stopImmediatePropagation();
    e.preventDefault();
    return false;
  }

  listenToScrollEvents(el, only) {
    if (only) {
      window.addEventListener('wheel', this.preventOutside);
      el.addEventListener('touchstart', this.preventOutside);
      el.addEventListener('touchmove', this.preventOutside);
    }
    el.addEventListener('wheel', this.onWheelHandler, false);
    el.addEventListener('touchstart', this.onTouchStartHandler, false);
    el.addEventListener('touchmove', this.onTouchMoveHandler, false);
    el.addEventListener('keydown', this.onKeyDownHandler, false);
  }

  stopListeningToScrollEvents(el, any) {
    if (any) {
      window.removeEventListener('wheel', this.preventOutside);
      el.removeEventListener('touchstart', this.preventOutside);
      el.removeEventListener('touchmove', this.preventOutside);
    }
    el.removeEventListener('wheel', this.onWheelHandler, false);
    el.removeEventListener('touchstart', this.onTouchStartHandler, false);
    el.removeEventListener('touchmove', this.onTouchMoveHandler, false);
    el.removeEventListener('keydown', this.onKeyDownHandler, false);
  }
}
