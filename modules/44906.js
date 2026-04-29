module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    N: () => o,
    q: () => s
  });
  var n = i(85427);
  class o {
    constructor(e) {
      let t = (0, n.K)(e);
      ((this._defaultValue = t), (this._asciiMap = o._createAsciiMap(t)), (this._map = new Map()));
    }
    static _createAsciiMap(e) {
      let t = new Uint8Array(256);
      for (let i = 0; i < 256; i++) t[i] = e;
      return t;
    }
    set(e, t) {
      let i = (0, n.K)(t);
      e >= 0 && e < 256 ? (this._asciiMap[e] = i) : this._map.set(e, i);
    }
    get(e) {
      return e >= 0 && e < 256 ? this._asciiMap[e] : this._map.get(e) || this._defaultValue;
    }
  }
  class s {
    constructor() {
      this._actual = new o(0);
    }
    add(e) {
      this._actual.set(e, 1);
    }
    has(e) {
      return 1 === this._actual.get(e);
    }
  }
};