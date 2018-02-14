var heightHelp = {
  expand: function(node) {
    // Expand element, immediately get its width, and then close
    node.style.maxHeight = "none";

    // The detected height of element
    const nodeHeight = node.offsetHeight;

    // We can have some kind of race condition picking up the height (thanks, iOS). Skip the animation if so.
    if (nodeHeight > 0) {
      // Start the maxHeight at zero
      node.style.maxHeight = "0px";

      // Animate up (CSS transition)
      setTimeout(function() {
        node.style.maxHeight = nodeHeight + "px";
      }, 10);
    }
  },

  collapse: function(node) {
    node.style.maxHeight = "0px";
  }
};

module.exports = heightHelp;
