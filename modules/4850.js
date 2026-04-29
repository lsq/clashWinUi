module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Y: () => o,
    p: () => s
  });
  var n = i(4669);
  class o {
    constructor(e, t, i) {
      const o = e => this.emitter.fire(e);
      this.emitter = new n.Q5({
        onFirstListenerAdd: () => e.addEventListener(t, o, i),
        onLastListenerRemove: () => e.removeEventListener(t, o, i)
      });
    }
    get event() {
      return this.emitter.event;
    }
    dispose() {
      this.emitter.dispose();
    }
  }
  function s(e) {
    return (e.preventDefault(), e.stopPropagation(), e);
  }
};