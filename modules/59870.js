module.exports = (e, t, i) => {
  "use strict";

  function n(e, t, i) {
    return Math.min(Math.max(e, t), i);
  }
  i.d(t, {
    n: () => o,
    u: () => n
  });
  class o {
    constructor() {
      ((this._n = 1), (this._val = 0));
    }
    update(e) {
      return ((this._val = this._val + (e - this._val) / this._n), (this._n += 1), this);
    }
    get value() {
      return this._val;
    }
  }
};