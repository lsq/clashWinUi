module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    $l: () => p,
    $t: () => u,
    IP: () => d,
    SQ: () => f,
    Wx: () => g,
    l_: () => r,
    le: () => l,
    ud: () => c,
    wA: () => h
  });
  var n = i(97295),
    o = i(50187),
    s = i(24314);
  class r {
    constructor(e, t, i, n) {
      ((this._viewportBrand = void 0), (this.top = 0 | e), (this.left = 0 | t), (this.width = 0 | i), (this.height = 0 | n));
    }
  }
  class a {
    constructor(e, t) {
      ((this.outputLineIndex = e), (this.outputOffset = t));
    }
    toString() {
      return `${this.outputLineIndex}:${this.outputOffset}`;
    }
    toPosition(e, t) {
      const i = this.outputLineIndex > 0 ? t : 0;
      return new o.L(e + this.outputLineIndex, i + this.outputOffset + 1);
    }
  }
  class l {
    constructor(e, t, i, n, o) {
      ((this.breakOffsets = e), (this.breakOffsetsVisibleColumn = t), (this.wrappedTextIndentLength = i), (this.injectionOffsets = n), (this.injectionOptions = o));
    }
    getInputOffsetOfOutputPosition(e, t) {
      let i = 0;
      if (((i = 0 === e ? t : this.breakOffsets[e - 1] + t), null !== this.injectionOffsets)) for (let e = 0; e < this.injectionOffsets.length && i > this.injectionOffsets[e]; e++) i < this.injectionOffsets[e] + this.injectionOptions[e].content.length ? (i = this.injectionOffsets[e]) : (i -= this.injectionOptions[e].content.length);
      return i;
    }
    getOutputPositionOfInputOffset(e, t = 2) {
      let i = 0;
      if (null !== this.injectionOffsets) for (let n = 0; n < this.injectionOffsets.length && !(e < this.injectionOffsets[n]) && (1 === t || e !== this.injectionOffsets[n]); n++) i += this.injectionOptions[n].content.length;
      return ((e += i), this.getOutputPositionOfOffsetInUnwrappedLine(e, t));
    }
    getOutputPositionOfOffsetInUnwrappedLine(e, t = 2) {
      let i = 0,
        n = this.breakOffsets.length - 1,
        o = 0,
        s = 0;
      for (; i <= n;) {
        o = (i + (n - i) / 2) | 0;
        const r = this.breakOffsets[o];
        if (((s = o > 0 ? this.breakOffsets[o - 1] : 0), 0 === t)) {
          if (e <= s) n = o - 1;else {
            if (!(e > r)) break;
            i = o + 1;
          }
        } else if (e < s) n = o - 1;else {
          if (!(e >= r)) break;
          i = o + 1;
        }
      }
      return new a(o, e - s);
    }
    outputPositionToOffsetInUnwrappedLine(e, t) {
      let i = (e > 0 ? this.breakOffsets[e - 1] : 0) + t;
      return (e > 0 && (i -= this.wrappedTextIndentLength), i);
    }
    normalizeOffsetAroundInjections(e, t) {
      const i = this.getInjectedTextAtOffset(e);
      if (!i) return e;
      if (2 === t) return e === i.offsetInUnwrappedLine + i.length ? i.offsetInUnwrappedLine + i.length : i.offsetInUnwrappedLine;
      if (1 === t) {
        let e = i.offsetInUnwrappedLine + i.length,
          t = i.injectedTextIndex;
        for (; t + 1 < this.injectionOffsets.length && this.injectionOffsets[t + 1] === this.injectionOffsets[t];) ((e += this.injectionOptions[t + 1].content.length), t++);
        return e;
      }
      let n = i.offsetInUnwrappedLine,
        o = i.injectedTextIndex;
      for (; o - 1 >= 0 && this.injectionOffsets[o - 1] === this.injectionOffsets[o];) ((n -= this.injectionOptions[o - 1].content.length), o++);
      return n;
    }
    getInjectedText(e, t) {
      const i = this.outputPositionToOffsetInUnwrappedLine(e, t),
        n = this.getInjectedTextAtOffset(i);
      return n ? {
        options: this.injectionOptions[n.injectedTextIndex]
      } : null;
    }
    getInjectedTextAtOffset(e) {
      const t = this.injectionOffsets,
        i = this.injectionOptions;
      if (null !== t) {
        let n = 0;
        for (let o = 0; o < t.length; o++) {
          const s = i[o].content.length,
            r = t[o] + n,
            a = t[o] + n + s;
          if (r > e) break;
          if (e <= a) return {
            injectedTextIndex: o,
            offsetInUnwrappedLine: r,
            length: s
          };
          n += s;
        }
      }
    }
  }
  class c {
    constructor(e, t) {
      ((this.tabSize = e), (this.data = t));
    }
  }
  class d {
    constructor(e, t, i, n, o, s, r) {
      ((this._viewLineDataBrand = void 0), (this.content = e), (this.continuesWithWrappedLine = t), (this.minColumn = i), (this.maxColumn = n), (this.startVisibleColumn = o), (this.tokens = s), (this.inlineDecorations = r));
    }
  }
  class h {
    constructor(e, t, i, n, o, s, r, a, l, c) {
      ((this.minColumn = e), (this.maxColumn = t), (this.content = i), (this.continuesWithWrappedLine = n), (this.isBasicASCII = h.isBasicASCII(i, s)), (this.containsRTL = h.containsRTL(i, this.isBasicASCII, o)), (this.tokens = r), (this.inlineDecorations = a), (this.tabSize = l), (this.startVisibleColumn = c));
    }
    static isBasicASCII(e, t) {
      return !t || n.$i(e);
    }
    static containsRTL(e, t, i) {
      return !(t || !i) && n.Ut(e);
    }
  }
  class u {
    constructor(e, t, i) {
      ((this.range = e), (this.inlineClassName = t), (this.type = i));
    }
  }
  class g {
    constructor(e, t, i, n) {
      ((this.startOffset = e), (this.endOffset = t), (this.inlineClassName = i), (this.inlineClassNameAffectsLetterSpacing = n));
    }
    toInlineDecoration(e) {
      return new u(new s.e(e, this.startOffset + 1, e, this.endOffset + 1), this.inlineClassName, this.inlineClassNameAffectsLetterSpacing ? 3 : 0);
    }
  }
  class p {
    constructor(e, t) {
      ((this._viewModelDecorationBrand = void 0), (this.range = e), (this.options = t));
    }
  }
  class f {
    constructor(e, t, i) {
      ((this.color = e), (this.zIndex = t), (this.data = i));
    }
    static cmp(e, t) {
      return e.zIndex === t.zIndex ? e.color < t.color ? -1 : e.color > t.color ? 1 : 0 : e.zIndex - t.zIndex;
    }
  }
};