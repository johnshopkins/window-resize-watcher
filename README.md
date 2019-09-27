# window resize window

A module to use in conjunction with Backbone. Fires `winresize:done` (or `namespace:winsize:done` if namespace argument is passed) event when the browser window has been resized.

### Dependencies

* Backbone
* Underscore

### Usage

```JavaScript

var WindowResizeWatcher = require('window-resize-watcher');

$(function() {

  var bbevents = _.extend({}, Backbone.Events);

  var resizer = new WindowResizeWatcher(bbevents, 'namespace');
  $(window).on('resize', resizer.handleResize.bind(resizer));

});
```
