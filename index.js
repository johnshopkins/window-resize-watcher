require('custom-event-polyfill');
var throttle = require('lodash.throttle');

var WindowResizeWatcher = function (namespace) {

  var eventName = namespace ? namespace + ':winresize:done' : 'winresize:done';

  window.addEventListener('resize', throttle(function (e) {

    var event = new CustomEvent(eventName, e);
    window.dispatchEvent(event);

  }, 300));

};

module.exports = WindowResizeWatcher;
