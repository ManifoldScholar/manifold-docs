import { debounce, addClass, removeClass, hasClass } from "./lib/dom-help.js";
import { expand, collapse } from "./lib/height-help.js";

// Accordions are a special case of height-reveal toggles+reveals;
// They behave the same as height-reveal elements but utilize the
// "dataGroup" data attribute to handle closing the starting element
// when revealing the 'accordioned' element and clicking on an open
// accordion's toggle collapses it )i.e. returns it to its start state
class AccordionGroup {
  constructor(
    dataToggle = "[data-accordion-toggle]",
    dataReveal = "[data-accordion]",
    onClass = "open",
    dataGroup = "[data-accordion-group]"
  ) {
    // console.log(dataToggle, dataReveal, onClass, dataGroup);
    // Get attribute names for each selector
    const toggleAttr = dataToggle.match(/\[(.*)\]/)[1];
    const revealAttr = dataReveal.match(/\[(.*)\]/)[1];
    // group attribute which the nodes share
    const groupAttr = dataGroup.match(/\[(.*)\]/)[1];

    // Find all elements with toggle data attribute
    const toggles = document.querySelectorAll(dataToggle);

    for (const toggle of [...toggles]) {
      // Get all of the reveal elements that match each trigger and
      // create a class for it
      const toggleId = toggle.getAttribute(toggleAttr);
      const reveals = document.querySelectorAll(
        "[" + revealAttr + "=" + toggleId + "]"
      );

      // Create a class with the height trigger, a node list of its reveals,
      // and the reveal and group attributes
      const accordionTrigger = new AccordionTrigger(
        toggle,
        reveals,
        onClass,
        revealAttr,
        groupAttr
      );
    }
  }
}

class AccordionTrigger {
  constructor(triggerNode, revealNodes, onClass, revealAttr, groupAttr) {
    this.trigger = triggerNode;
    this.reveals = revealNodes;
    this.onClass = onClass;
    // Group to which the nodes belong
    this.revealSelector = revealAttr;
    // Find all members of the group
    this.groupAccordions = document.querySelectorAll(
      "[" + groupAttr + "=" + this.trigger.getAttribute(groupAttr) + "]"
    );

    // Bind click handler
    this.bindTrigger();
    window.addEventListener('resize', this.resizeHandler);
  }

  resizeHandler = () => {
    debounce(this.collapseAll(), 500);
  }

  bindTrigger() {
    if (!this.trigger) return;
    this.trigger.addEventListener("click", event => {
      event.preventDefault();

      // Loop through group members
      this.updateGroups();

      // Loop through all of this trigger's reveals, expand/collapse them
      // and add the onClass
      this.updateReveals();
    });
  }

  updateGroups() {
    for (const group of [...this.groupAccordions]) {
      if (group === this.trigger) {
        // Toggle onClass on group member if it's the reveals' trigger
        if (!hasClass(this.trigger, this.onClass)) {
          addClass(this.trigger, this.onClass);
        } else {
          removeClass(this.trigger, this.onClass);
        }
        // If it's not the trigger remove onClass
      } else {
        removeClass(group, this.onClass);
        // If it's also a 'reveal' node collapse it
        if (group.getAttribute(this.revealSelector)) {
          collapse(group);
        }
      }
    }
  }

  updateReveals() {
    for (const reveal of [...this.reveals]) {
      // Element needs to be opened;
      if (!hasClass(this.trigger, this.onClass)) {
        // Already handled class removal above
        collapse(reveal);
      } else {
        addClass(reveal, this.onClass);
        expand(reveal);
      }
    }
  }

  collapseGroups() {
    for (const group of [...this.groupAccordions]) {
      if (group === this.trigger) {
        // Toggle onClass on group member if it's the reveals' trigger
        if (hasClass(this.trigger, this.onClass)) {
          removeClass(this.trigger, this.onClass);
        }

        if (group.getAttribute(this.revealSelector)) {
          removeClass(this.group, this.onClass);
          collapse(group);
        }
      }
    }
  }

  collapseReveals() {
    for (const reveal of [...this.reveals]) {
      if (hasClass(reveal, this.onClass)) {
        removeClass(reveal, this.onClass);
        collapse(reveal);
      }
    }
  }

  collapseAll() {
    this.collapseGroups();
    this.collapseReveals();
  }
}

module.exports = AccordionGroup;
