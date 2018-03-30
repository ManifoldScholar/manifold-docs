import domHelp from "./lib/dom-help";
import Accordions from "./accordions";
import ClassBurger from "./class-burger";
import DocumentationSidebar from "./docs-sidebar";
import ImageModal from "./ImageModal";
import ScrollLock from "./ScrollLock";

class DocsTheme {
  init() {
    domHelp.ready(()=> {
      // Instantiate scroll lock for use with hamburgers
      const scrollLock = new ScrollLock();

      // Initialize Overlay Burgers
      const hamburgerOverlay = new ClassBurger('hamburger', 'open', (el) => {
        scrollLock.lock(el);
      }, function(el) {
        scrollLock.unlock(el);
      });

      // Initialize Accordions
      const accordions = new Accordions();

      // Initialize Mobile Documentation Sidebar
      if (document.querySelector('[data-hamburger-togglable=sidebar]')) {
        const mobileDocSidebar = new ClassBurger('sidebar', 'open');
      }

      // Initialize Documentation Sidebar Accordions
      const docSidebar = new DocumentationSidebar();

      // Setup image modals
      const hasModals = document.querySelectorAll('[data-image-modals]');
      [...hasModals].forEach((wrapper) => {
        const images = wrapper.getElementsByTagName('img');
        [...images].forEach((image) => {
          const imageModal = new ImageModal(image);
        })
      })
    });
  }
}

export default DocsTheme;
