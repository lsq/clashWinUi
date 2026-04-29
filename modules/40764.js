module.exports = (e, t, i) => {
  "use strict";

  function n(e, t) {
    let i = e.getCount(),
      n = e.findTokenIndexAtOffset(t),
      s = e.getLanguageId(n),
      r = n;
    for (; r + 1 < i && e.getLanguageId(r + 1) === s;) r++;
    let a = n;
    for (; a > 0 && e.getLanguageId(a - 1) === s;) a--;
    return new o(e, s, a, r + 1, e.getStartOffset(a), e.getEndOffset(r));
  }
  i.d(t, {
    Bu: () => s,
    wH: () => n
  });
  class o {
    constructor(e, t, i, n, o, s) {
      ((this._scopedLineTokensBrand = void 0), (this._actual = e), (this.languageId = t), (this._firstTokenIndex = i), (this._lastTokenIndex = n), (this.firstCharOffset = o), (this._lastCharOffset = s));
    }
    getLineContent() {
      return this._actual.getLineContent().substring(this.firstCharOffset, this._lastCharOffset);
    }
    getActualLineContentBefore(e) {
      return this._actual.getLineContent().substring(0, this.firstCharOffset + e);
    }
    getTokenCount() {
      return this._lastTokenIndex - this._firstTokenIndex;
    }
    findTokenIndexAtOffset(e) {
      return (this._actual.findTokenIndexAtOffset(e + this.firstCharOffset) - this._firstTokenIndex);
    }
    getStandardTokenType(e) {
      return this._actual.getStandardTokenType(e + this._firstTokenIndex);
    }
  }
  function s(e) {
    return 0 != (7 & e);
  }
};