import domHelp from "./lib/dom-help";
import ClassBurger from "./class-burger";
import Accordions from "./accordions";
import DocumentationSidebar from "./docs-sidebar";
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

    });
  }
}

export default DocsTheme;
