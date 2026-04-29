module.exports = (e, t, i) => {
  "use strict";

  var n;
  (i.d(t, {
    V6: () => o,
    c$: () => s,
    wU: () => n
  }), (function (e) {
    ((e[(e.None = 0)] = "None"), (e[(e.Indent = 1)] = "Indent"), (e[(e.IndentOutdent = 2)] = "IndentOutdent"), (e[(e.Outdent = 3)] = "Outdent"));
  })(n || (n = {})));
  class o {
    constructor(e) {
      if (((this._standardAutoClosingPairConditionalBrand = void 0), (this.open = e.open), (this.close = e.close), (this._standardTokenMask = 0), Array.isArray(e.notIn))) for (let t = 0, i = e.notIn.length; t < i; t++) {
        switch (e.notIn[t]) {
          case "string":
            this._standardTokenMask |= 2;
            break;
          case "comment":
            this._standardTokenMask |= 1;
            break;
          case "regex":
            this._standardTokenMask |= 4;
        }
      }
    }
    isOK(e) {
      return 0 == (this._standardTokenMask & e);
    }
  }
  class s {
    constructor(e) {
      ((this.autoClosingPairsOpenByStart = new Map()), (this.autoClosingPairsOpenByEnd = new Map()), (this.autoClosingPairsCloseByStart = new Map()), (this.autoClosingPairsCloseByEnd = new Map()), (this.autoClosingPairsCloseSingleChar = new Map()));
      for (const t of e) (r(this.autoClosingPairsOpenByStart, t.open.charAt(0), t), r(this.autoClosingPairsOpenByEnd, t.open.charAt(t.open.length - 1), t), r(this.autoClosingPairsCloseByStart, t.close.charAt(0), t), r(this.autoClosingPairsCloseByEnd, t.close.charAt(t.close.length - 1), t), 1 === t.close.length && 1 === t.open.length && r(this.autoClosingPairsCloseSingleChar, t.close, t));
    }
  }
  function r(e, t, i) {
    e.has(t) ? e.get(t).push(i) : e.set(t, [i]);
  }
};