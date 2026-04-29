module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    $W: () => v,
    Dt: () => m,
    G6: () => p,
    MG: () => f,
    Pf: () => u,
    WP: () => r,
    fX: () => a,
    i7: () => g,
    ie: () => l,
    mX: () => c,
    px: () => s,
    vU: () => h
  });
  var n = i(4669);
  class o {
    constructor() {
      ((this._zoomLevel = 0), (this._lastZoomLevelChangeTime = 0), (this._onDidChangeZoomLevel = new n.Q5()), (this.onDidChangeZoomLevel = this._onDidChangeZoomLevel.event), (this._zoomFactor = 1));
    }
    getZoomLevel() {
      return this._zoomLevel;
    }
    getTimeSinceLastZoomLevelChanged() {
      return Date.now() - this._lastZoomLevelChangeTime;
    }
    getZoomFactor() {
      return this._zoomFactor;
    }
    getPixelRatio() {
      let e = document.createElement("canvas").getContext("2d");
      return ((window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1));
    }
  }
  function s() {
    return o.INSTANCE.getZoomLevel();
  }
  function r() {
    return o.INSTANCE.getTimeSinceLastZoomLevelChanged();
  }
  function a(e) {
    return o.INSTANCE.onDidChangeZoomLevel(e);
  }
  function l() {
    return o.INSTANCE.getZoomFactor();
  }
  function c() {
    return o.INSTANCE.getPixelRatio();
  }
  o.INSTANCE = new o();
  const d = navigator.userAgent,
    h = d.indexOf("Firefox") >= 0,
    u = d.indexOf("AppleWebKit") >= 0,
    g = d.indexOf("Chrome") >= 0,
    p = !g && d.indexOf("Safari") >= 0,
    f = !g && !p && u,
    m = d.indexOf("Android") >= 0,
    v = window.matchMedia && window.matchMedia("(display-mode: standalone)").matches;
};