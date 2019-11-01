# window resize window

Fires `winresize:done` (or `namespace:winsize:done` if namespace argument is passed) window event when the browser window has been resized.

### Usage

```JavaScript
const WindowResizeWatcher = require('window-resize-watcher');

new WindowResizeWatcher('mynamespace');

window.addEventListener('mynamespace:winresize:done', (e) => {
  console.log('window resized');
});

```
