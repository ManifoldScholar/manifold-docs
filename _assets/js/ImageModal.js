import { debounce } from "lodash";
import ScrollLock from "./ScrollLock";

export default class ImageModal {
  constructor(element) {
    // Create modal markup add it after current element and
    // get markup elements to pass to other functions
    const [overlay, image] = this.getMarkup(element);

    // Save crucial elements on the class
    // this.element = element;
    this.overlay = overlay;
    this.image = image;
    this.scrollLock = new ScrollLock();

    // On load, check if image display is larger than natural size,
    // and bind click events if so
    this.image.addEventListener('load', () => {
      this.maybeBindClick(element);
    });

    // Then subsequently check on resize
    const debouncedMaybe = debounce(() => {
      this.maybeBindClick(element);
    }, 200);

    window.addEventListener('resize', debouncedMaybe);
  }

  getMarkup(element) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    // Create close button
    const close = document.createElement('span');
    close.appendChild(document.createTextNode('close'));
    close.classList.add('close');

    // Create overlay container and image wrapper
    const container = document.createElement('figure');
    const wrapper = document.createElement('span');
    wrapper.classList.add('image-wrapper');

    const image = document.createElement('img');
    image.setAttribute('src', element.src);

    // Put everything in the overlay div
    overlay.appendChild(close);
    wrapper.appendChild(image);
    container.appendChild(wrapper);
    overlay.appendChild(container);

    // Insert markup after image
    element.parentNode.appendChild(overlay);

    return [overlay, image];
  }

  maybeBindClick(element) {
    if (this.image.offsetWidth - element.offsetWidth > 50) {
      element.classList.add('clickable');
      element.addEventListener('click', this.handleOpen);
    } else {
      element.classList.remove('clickable');
      element.removeEventListener('click', this.handleOpen);
    }
  }

  handleOpen = (event) => {
    this.overlay.classList.add('visible');
    this.overlay.addEventListener('click', this.handleClose);
    this.scrollLock.lock(this.overlay);
  }

  handleClose = (event) => {
    if (event.target !== this.image) {
      this.scrollLock.unlock(this.overlay);
      this.overlay.classList.remove('visible');
      this.overlay.removeEventListener('click', this.handleClose);
    }
  }
}
