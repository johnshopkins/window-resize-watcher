/* global vent: false */

var throttle = require('lodash.throttle');

var WindowResizeWatcher = function (eventsObject) {
  this.vent = eventsObject;
};

WindowResizeWatcher.prototype.handleResize = throttle(function (e) {

  if (this.resizeId) clearTimeout(this.resizeId);

  var self = this;
  this.resizeId = setTimeout(function () {
    self.vent.trigger("winresize:done");
  }, 300);

}, 300);

module.exports = WindowResizeWatcher;
