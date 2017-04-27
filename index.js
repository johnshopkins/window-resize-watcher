/* global vent: false */

var _ = require("./shims/underscore");

var WindowResizeWatcher = function (eventsObject) {
  this.vent = eventsObject;
};

WindowResizeWatcher.prototype.handleResize = _.throttle(function (e) {

  if (this.resizeId) clearTimeout(this.resizeId);

  var self = this;
  this.resizeId = setTimeout(function () {
    self.vent.trigger("winresize:done");
  }, 300);

}, 300);

module.exports = WindowResizeWatcher;

/**
 * Usage
 */
// $(function() {
//   var resizer = new WindowResizeWatcher(vent);
//   $(window).on("resize", resizer.handleResize.bind(resizer));
// });
