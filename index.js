/**
 * IE pollyfill for CustomEvent constructor
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
 */
(function () {

  if ( typeof window.CustomEvent === "function" ) return false;

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: null };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  window.CustomEvent = CustomEvent;
})();


var throttle = require('lodash.throttle');

var WindowResizeWatcher = function (namespace) {

  var eventName = namespace ? namespace + ':winresize:done' : 'winresize:done';

  window.addEventListener('resize', throttle(function (e) {

    var event = new CustomEvent(eventName, e);
    event.initEvent(eventName, true, true);
    window.dispatchEvent(event);

  }, 300));

};

module.exports = WindowResizeWatcher;
