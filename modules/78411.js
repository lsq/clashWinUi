module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    A: () => o
  });
  var n = i(44101);
  class o {
    constructor(e, t, i) {
      ((this._lineTokensBrand = void 0), (this._tokens = e), (this._tokensCount = this._tokens.length >>> 1), (this._text = t), (this._languageIdCodec = i));
    }
    static createEmpty(e, t) {
      const i = o.defaultTokenMetadata,
        n = new Uint32Array(2);
      return ((n[0] = e.length), (n[1] = i), new o(n, e, t));
    }
    equals(e) {
      return e instanceof o && this.slicedEquals(e, 0, this._tokensCount);
    }
    slicedEquals(e, t, i) {
      if (this._text !== e._text) return !1;
      if (this._tokensCount !== e._tokensCount) return !1;
      const n = t << 1,
        o = n + (i << 1);
      for (let t = n; t < o; t++) if (this._tokens[t] !== e._tokens[t]) return !1;
      return !0;
    }
    getLineContent() {
      return this._text;
    }
    getCount() {
      return this._tokensCount;
    }
    getStartOffset(e) {
      return e > 0 ? this._tokens[(e - 1) << 1] : 0;
    }
    getMetadata(e) {
      return this._tokens[1 + (e << 1)];
    }
    getLanguageId(e) {
      const t = this._tokens[1 + (e << 1)],
        i = n.NX.getLanguageId(t);
      return this._languageIdCodec.decodeLanguageId(i);
    }
    getStandardTokenType(e) {
      const t = this._tokens[1 + (e << 1)];
      return n.NX.getTokenType(t);
    }
    getForeground(e) {
      const t = this._tokens[1 + (e << 1)];
      return n.NX.getForeground(t);
    }
    getClassName(e) {
      const t = this._tokens[1 + (e << 1)];
      return n.NX.getClassNameFromMetadata(t);
    }
    getInlineStyle(e, t) {
      const i = this._tokens[1 + (e << 1)];
      return n.NX.getInlineStyleFromMetadata(i, t);
    }
    getEndOffset(e) {
      return this._tokens[e << 1];
    }
    findTokenIndexAtOffset(e) {
      return o.findIndexInTokensArray(this._tokens, e);
    }
    inflate() {
      return this;
    }
    sliceAndInflate(e, t, i) {
      return new s(this, e, t, i);
    }
    static convertToEndOffset(e, t) {
      const i = (e.length >>> 1) - 1;
      for (let t = 0; t < i; t++) e[t << 1] = e[(t + 1) << 1];
      e[i << 1] = t;
    }
    static findIndexInTokensArray(e, t) {
      if (e.length <= 2) return 0;
      let i = 0,
        n = (e.length >>> 1) - 1;
      for (; i < n;) {
        const o = i + Math.floor((n - i) / 2),
          s = e[o << 1];
        if (s === t) return o + 1;
        s < t ? (i = o + 1) : s > t && (n = o);
      }
      return i;
    }
    withInserted(e) {
      if (0 === e.length) return this;
      let t = 0,
        i = 0,
        n = "";
      const s = new Array();
      let r = 0;
      for (;;) {
        let o = t < this._tokensCount ? this._tokens[t << 1] : -1,
          a = i < e.length ? e[i] : null;
        if (-1 !== o && (null === a || o <= a.offset)) {
          n += this._text.substring(r, o);
          const e = this._tokens[1 + (t << 1)];
          (s.push(n.length, e), t++, (r = o));
        } else {
          if (!a) break;
          if (a.offset > r) {
            n += this._text.substring(r, a.offset);
            const e = this._tokens[1 + (t << 1)];
            (s.push(n.length, e), (r = a.offset));
          }
          ((n += a.text), s.push(n.length, a.tokenMetadata), i++);
        }
      }
      return new o(new Uint32Array(s), n, this._languageIdCodec);
    }
  }
  o.defaultTokenMetadata = 16793600;
  class s {
    constructor(e, t, i, n) {
      ((this._source = e), (this._startOffset = t), (this._endOffset = i), (this._deltaOffset = n), (this._firstTokenIndex = e.findTokenIndexAtOffset(t)), (this._tokensCount = 0));
      for (let t = this._firstTokenIndex, n = e.getCount(); t < n; t++) {
        if (e.getStartOffset(t) >= i) break;
        this._tokensCount++;
      }
    }
    equals(e) {
      return (e instanceof s && this._startOffset === e._startOffset && this._endOffset === e._endOffset && this._deltaOffset === e._deltaOffset && this._source.slicedEquals(e._source, this._firstTokenIndex, this._tokensCount));
    }
    getCount() {
      return this._tokensCount;
    }
    getForeground(e) {
      return this._source.getForeground(this._firstTokenIndex + e);
    }
    getEndOffset(e) {
      const t = this._source.getEndOffset(this._firstTokenIndex + e);
      return (Math.min(this._endOffset, t) - this._startOffset + this._deltaOffset);
    }
    getClassName(e) {
      return this._source.getClassName(this._firstTokenIndex + e);
    }
    getInlineStyle(e, t) {
      return this._source.getInlineStyle(this._firstTokenIndex + e, t);
    }
    findTokenIndexAtOffset(e) {
      return (this._source.findTokenIndexAtOffset(e + this._startOffset - this._deltaOffset) - this._firstTokenIndex);
    }
  }
};