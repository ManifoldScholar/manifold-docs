import domHelp from "./lib/dom-help";
import ClassBurger from "./class-burger";
import ScrollLock from "./ScrollLock";
import VimeoPlayer from "@vimeo/player";

export default class VideoOverlay {
  constructor(selector) {
    const el = document.querySelector(selector);
    if (el) {
      // Instantiate video player
      this.initPlayer(el);
    }
    // Don't do anything if selector doesn't match any elements
  }

  initPlayer(el) {
    // Instantiate scroll lock for use with hamburgers
    const scrollLock = new ScrollLock();

    const videoPlayer = new VimeoPlayer(el);

    // Build overlay hamburger with play/pause from Vimeo API
    const videoOverlay = new ClassBurger('video', 'open', (overlay) => {
      scrollLock.lock(overlay);
      domHelp.addClass(document.body, 'of-hidden-y');
      videoPlayer.play();
    }, function(overlay) {
      scrollLock.unlock(overlay);
      domHelp.removeClass(document.body, 'of-hidden-y');
      videoPlayer.pause();
    });
  }
}
