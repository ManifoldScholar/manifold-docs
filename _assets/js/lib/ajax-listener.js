import smoothScroll from "./smooth-scroll";
const isMobile = require("./dom-help.js").isMobile;

var send = window.XMLHttpRequest.prototype.send;
var onReadyStateChange;

window.XMLHttpRequest.prototype.send = sendReplacement;

function sendReplacement(data) {
  if (this.onreadystatechange) {
    this._onreadystatechange = this.onreadystatechange;
  }
  this.onreadystatechange = onReadyStateChangeReplacement;

  return send.apply(this, arguments);
}

function onReadyStateChangeReplacement() {
  var response = {};

  if (this.readyState === 4) {
    try {
      response = JSON.parse(this.responseText);
    } catch (e) {
      response = {};
    }
  }

  if (response["contactform::errors"] && isMobile()) {
    var errors = document.getElementById("errors");
    var scroll =
      document.body.scrollTop + (errors.getBoundingClientRect().top - 45);
    smoothScroll(document.body, scroll, 1000);
  }

  if (this._onreadystatechange) {
    return this._onreadystatechange.apply(this, arguments);
  }
}
