module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    G: () => s
  });
  var n = i(1432);
  const o = n.li.performance && "function" == typeof n.li.performance.now;
  class s {
    constructor(e) {
      ((this._highResolution = o && e), (this._startTime = this._now()), (this._stopTime = -1));
    }
    static create(e = !0) {
      return new s(e);
    }
    stop() {
      this._stopTime = this._now();
    }
    elapsed() {
      return -1 !== this._stopTime ? this._stopTime - this._startTime : this._now() - this._startTime;
    }
    _now() {
      return this._highResolution ? n.li.performance.now() : Date.now();
    }
  }
};