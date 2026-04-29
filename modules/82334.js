module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    C: () => o
  });
  var n = i(4669);
  const o = new (class {
    constructor() {
      ((this._zoomLevel = 0), (this._onDidChangeZoomLevel = new n.Q5()), (this.onDidChangeZoomLevel = this._onDidChangeZoomLevel.event));
    }
    getZoomLevel() {
      return this._zoomLevel;
    }
    setZoomLevel(e) {
      ((e = Math.min(Math.max(-5, e), 20)), this._zoomLevel !== e && ((this._zoomLevel = e), this._onDidChangeZoomLevel.fire(this._zoomLevel)));
    }
  })();
};