module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Hi: () => s,
    WU: () => n,
    hG: () => o
  });
  class n {
    constructor(e, t, i) {
      ((this._tokenBrand = void 0), (this.offset = 0 | e), (this.type = t), (this.language = i));
    }
    toString() {
      return "(" + this.offset + ", " + this.type + ")";
    }
  }
  class o {
    constructor(e, t) {
      ((this._tokenizationResultBrand = void 0), (this.tokens = e), (this.endState = t));
    }
  }
  class s {
    constructor(e, t) {
      ((this._tokenizationResult2Brand = void 0), (this.tokens = e), (this.endState = t));
    }
  }
};