/* global vent: false */

var throttle = require('lodash.throttle');

var WindowResizeWatcher = function (eventsObject, namespace) {
  this.vent = eventsObject;
  this.eventName = namespace ? namespace + ':winresize:done' : 'winresize:done';
};

WindowResizeWatcher.prototype.handleResize = throttle(function () {

  if (this.resizeId) {
    clearTimeout(this.resizeId);
  }

  this.resizeId = setTimeout(() => this.vent.trigger(this.eventName), 300);

}, 300);

module.exports = WindowResizeWatcher;
