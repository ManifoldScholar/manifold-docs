import { addClass, removeClass, addEscListener } from "./lib/dom-help.js";

class ClassBurger {
  constructor(
    label = 'hamburger',
    onClass = "open",
    onCb = function() {
      return true;
    },
    offCb = null
  ) {
    // Use the same callback if an "off callback" isn't defined
    if (!offCb) offCb = onCb;
    // Track state to either on or off (on: true; off: false;)
    this.state = false;
    const toggleSelector = "[data-hamburger-togglable=" + label + "]";
    const triggerSelector = "[data-hamburger-toggle=" + label + "]";
    const dataToggles = document.querySelectorAll(toggleSelector);
    const dataTriggers = document.querySelectorAll(triggerSelector);
    if (dataToggles.length > 0 && dataTriggers.length > 0) {
      // Bind toggle trigger
      this.bindTrigger(dataToggles, dataTriggers, label, onClass, onCb, offCb);
    }
  }

  open(items, className) {
    items.forEach((item) => {
      addClass(item, className);
    });
    // Set state for later
    this.state = true;
  }

  close(items, className) {
    items.forEach((item) => {
      removeClass(item, className);
    });
    // Set state for later
    this.state = false;
  }

  bindTrigger(nodes, triggers, label, onClass, onCb, offCb) {
    const toggleables = [...triggers].concat([...nodes]);
    function onEscHandler(event) {
      if (event.keyCode === 27) {
        [...triggers].forEach(trigger => {
          removeClass(trigger, onClass);
        });

        [...nodes].forEach(toggle => {
          removeClass(toggle, onClass);
          offCb(toggle);
        });

        document.removeEventListener("keyup", onEscHandler);
      }
    };

    function onClickHandler(event) {
      let parenting = true;
      let parent = event.target;
      let shouldClose = true;

      while (parenting) {
        if (parent === null || parent === document) {
          shouldClose = true;
          parenting = false;
          break;
        } else if (parent.hasAttribute('data-hamburger-togglable') ||
            parent.hasAttribute('data-hamburger-toggle')) {
          shouldClose = false;
          parenting = false;
          break;
        }

        parent = parent.parentNode;
      }

      if (shouldClose) {
        this.close(toggleables, onClass);
      }
    };

    if (triggers.length > 0) {
      // Bind click handler
      [...triggers].forEach(trigger => {
        trigger.addEventListener("click", () => {
          if (!this.state) {
            // Hamburger is closed, so open it!
            this.open(toggleables, onClass);
            [...nodes].forEach((toggle) => {
              onCb(toggle);
            });
            document.addEventListener("keyup", onEscHandler);
            document.addEventListener("click", onClickHandler);
          } else {
            // Hamburger is open, so close it!
            this.close(toggleables, onClass);
            [...nodes].forEach((toggle) => {
              offCb(toggle);
            });
            document.removeEventListener("keyup", onEscHandler);
            document.removeEventListener("click", onClickHandler);
          }
        });
      });
    } else {
      console.log("Trigger " + label + " does not exist");
    }
  }
}

module.exports = ClassBurger;
