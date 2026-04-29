module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    E: () => o,
    e: () => s
  });
  var n = i(72065);
  class o {
    constructor(e) {
      this.callback = e;
    }
    report(e) {
      ((this._value = e), this.callback(this._value));
    }
  }
  o.None = Object.freeze({
    report() {}
  });
  const s = (0, n.yh)("editorProgressService");
};