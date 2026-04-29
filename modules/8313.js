module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    BQ: () => l,
    QC: () => r,
    X_: () => a,
    f1: () => c,
    gm: () => o
  });
  var n = i(17301);
  function o(e, t) {
    if (0 === e) return null;
    const i = (65535 & e) >>> 0,
      n = (4294901760 & e) >>> 16;
    return new a(0 !== n ? [s(i, t), s(n, t)] : [s(i, t)]);
  }
  function s(e, t) {
    const i = !!(2048 & e),
      n = !!(256 & e);
    return new r(2 === t ? n : i, !!(1024 & e), !!(512 & e), 2 === t ? i : n, 255 & e);
  }
  class r {
    constructor(e, t, i, n, o) {
      ((this.ctrlKey = e), (this.shiftKey = t), (this.altKey = i), (this.metaKey = n), (this.keyCode = o));
    }
    equals(e) {
      return (this.ctrlKey === e.ctrlKey && this.shiftKey === e.shiftKey && this.altKey === e.altKey && this.metaKey === e.metaKey && this.keyCode === e.keyCode);
    }
    isModifierKey() {
      return (0 === this.keyCode || 5 === this.keyCode || 57 === this.keyCode || 6 === this.keyCode || 4 === this.keyCode);
    }
    toChord() {
      return new a([this]);
    }
    isDuplicateModifierCase() {
      return ((this.ctrlKey && 5 === this.keyCode) || (this.shiftKey && 4 === this.keyCode) || (this.altKey && 6 === this.keyCode) || (this.metaKey && 57 === this.keyCode));
    }
  }
  class a {
    constructor(e) {
      if (0 === e.length) throw (0, n.b1)("parts");
      this.parts = e;
    }
  }
  class l {
    constructor(e, t, i, n, o, s) {
      ((this.ctrlKey = e), (this.shiftKey = t), (this.altKey = i), (this.metaKey = n), (this.keyLabel = o), (this.keyAriaLabel = s));
    }
  }
  class c {}
};