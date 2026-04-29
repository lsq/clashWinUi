module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    IJ: () => l,
    Nd: () => c,
    d1: () => u,
    tF: () => p,
    zG: () => a
  });
  var n = i(97295),
    o = i(50072),
    s = i(92550);
  class r {
    constructor(e, t, i) {
      ((this._linePartBrand = void 0), (this.endIndex = e), (this.type = t), (this.metadata = i));
    }
    isWhitespace() {
      return !!(1 & this.metadata);
    }
    isPseudoAfter() {
      return !!(4 & this.metadata);
    }
  }
  class a {
    constructor(e, t) {
      ((this.startOffset = e), (this.endOffset = t));
    }
    equals(e) {
      return (this.startOffset === e.startOffset && this.endOffset === e.endOffset);
    }
  }
  class l {
    constructor(e, t, i, n, o, r, a, l, c, d, h, u, g, p, f, m, v, _, b) {
      ((this.useMonospaceOptimizations = e), (this.canUseHalfwidthRightwardsArrow = t), (this.lineContent = i), (this.continuesWithWrappedLine = n), (this.isBasicASCII = o), (this.containsRTL = r), (this.fauxIndentLength = a), (this.lineTokens = l), (this.lineDecorations = c.sort(s.Kp.compare)), (this.tabSize = d), (this.startVisibleColumn = h), (this.spaceWidth = u), (this.stopRenderingLineAfter = f), (this.renderWhitespace = "all" === m ? 4 : "boundary" === m ? 1 : "selection" === m ? 2 : "trailing" === m ? 3 : 0), (this.renderControlCharacters = v), (this.fontLigatures = _), (this.selectionsOnLine = b && b.sort((e, t) => (e.startOffset < t.startOffset ? -1 : 1))));
      Math.abs(p - u) < Math.abs(g - u) ? ((this.renderSpaceWidth = p), (this.renderSpaceCharCode = 11825)) : ((this.renderSpaceWidth = g), (this.renderSpaceCharCode = 183));
    }
    sameSelection(e) {
      if (null === this.selectionsOnLine) return null === e;
      if (null === e) return !1;
      if (e.length !== this.selectionsOnLine.length) return !1;
      for (let t = 0; t < this.selectionsOnLine.length; t++) if (!this.selectionsOnLine[t].equals(e[t])) return !1;
      return !0;
    }
    equals(e) {
      return (this.useMonospaceOptimizations === e.useMonospaceOptimizations && this.canUseHalfwidthRightwardsArrow === e.canUseHalfwidthRightwardsArrow && this.lineContent === e.lineContent && this.continuesWithWrappedLine === e.continuesWithWrappedLine && this.isBasicASCII === e.isBasicASCII && this.containsRTL === e.containsRTL && this.fauxIndentLength === e.fauxIndentLength && this.tabSize === e.tabSize && this.startVisibleColumn === e.startVisibleColumn && this.spaceWidth === e.spaceWidth && this.renderSpaceWidth === e.renderSpaceWidth && this.renderSpaceCharCode === e.renderSpaceCharCode && this.stopRenderingLineAfter === e.stopRenderingLineAfter && this.renderWhitespace === e.renderWhitespace && this.renderControlCharacters === e.renderControlCharacters && this.fontLigatures === e.fontLigatures && s.Kp.equalsArr(this.lineDecorations, e.lineDecorations) && this.lineTokens.equals(e.lineTokens) && this.sameSelection(e.selectionsOnLine));
    }
  }
  class c {
    constructor(e, t) {
      ((this.partIndex = e), (this.charIndex = t));
    }
  }
  class d {
    constructor(e, t) {
      ((this.length = e), (this._data = new Uint32Array(this.length)), (this._absoluteOffsets = new Uint32Array(this.length)));
    }
    static getPartIndex(e) {
      return (4294901760 & e) >>> 16;
    }
    static getCharIndex(e) {
      return (65535 & e) >>> 0;
    }
    setColumnInfo(e, t, i, n) {
      const o = ((t << 16) | (i << 0)) >>> 0;
      ((this._data[e - 1] = o), (this._absoluteOffsets[e - 1] = n + i));
    }
    getAbsoluteOffset(e) {
      return 0 === this._absoluteOffsets.length ? 0 : this._absoluteOffsets[e - 1];
    }
    charOffsetToPartData(e) {
      return 0 === this.length ? 0 : e < 0 ? this._data[0] : e >= this.length ? this._data[this.length - 1] : this._data[e];
    }
    getDomPosition(e) {
      const t = this.charOffsetToPartData(e - 1),
        i = d.getPartIndex(t),
        n = d.getCharIndex(t);
      return new c(i, n);
    }
    getColumn(e, t) {
      return this.partDataToCharOffset(e.partIndex, t, e.charIndex) + 1;
    }
    partDataToCharOffset(e, t, i) {
      if (0 === this.length) return 0;
      let n = ((e << 16) | (i << 0)) >>> 0,
        o = 0,
        s = this.length - 1;
      for (; o + 1 < s;) {
        let e = (o + s) >>> 1,
          t = this._data[e];
        if (t === n) return e;
        t > n ? (s = e) : (o = e);
      }
      if (o === s) return o;
      let r = this._data[o],
        a = this._data[s];
      if (r === n) return o;
      if (a === n) return s;
      let l,
        c = d.getPartIndex(r),
        h = d.getCharIndex(r);
      return ((l = c !== d.getPartIndex(a) ? t : d.getCharIndex(a)), i - h <= l - i ? o : s);
    }
  }
  class h {
    constructor(e, t, i) {
      ((this._renderLineOutputBrand = void 0), (this.characterMapping = e), (this.containsRTL = t), (this.containsForeignElements = i));
    }
  }
  function u(e, t) {
    if (0 === e.lineContent.length) {
      if (e.lineDecorations.length > 0) {
        t.appendASCIIString("<span>");
        let i = 0,
          n = 0,
          o = 0;
        for (const s of e.lineDecorations) (1 !== s.type && 2 !== s.type) || (t.appendASCIIString('<span class="'), t.appendASCIIString(s.className), t.appendASCIIString('"></span>'), 1 === s.type && ((o |= 1), i++), 2 === s.type && ((o |= 2), n++));
        t.appendASCIIString("</span>");
        const s = new d(1, i + n);
        return (s.setColumnInfo(1, i, 0, 0), new h(s, !1, o));
      }
      return (t.appendASCIIString("<span><span></span></span>"), new h(new d(0, 0), !1, 0));
    }
    return (function (e, t) {
      const i = e.fontIsMonospace,
        o = e.canUseHalfwidthRightwardsArrow,
        s = e.containsForeignElements,
        r = e.lineContent,
        a = e.len,
        l = e.isOverflowing,
        c = e.parts,
        u = e.fauxIndentLength,
        g = e.tabSize,
        p = e.startVisibleColumn,
        f = e.containsRTL,
        _ = e.spaceWidth,
        b = e.renderSpaceCharCode,
        w = e.renderWhitespace,
        y = e.renderControlCharacters,
        C = new d(a + 1, c.length);
      let x = !1,
        S = 0,
        k = p,
        L = 0,
        N = 0,
        D = 0,
        I = 0;
      f ? t.appendASCIIString('<span dir="ltr">') : t.appendASCIIString("<span>");
      for (let e = 0, l = c.length; e < l; e++) {
        I += D;
        const l = c[e],
          d = l.endIndex,
          h = l.type,
          p = 0 !== w && l.isWhitespace(),
          f = p && !i && ("mtkw" === h || !s),
          E = S === d && l.isPseudoAfter();
        if (((L = 0), t.appendASCIIString('<span class="'), t.appendASCIIString(f ? "mtkz" : h), t.appendASCII(34), p)) {
          let i = 0;
          {
            let e = S,
              t = k;
            for (; e < d; e++) {
              const n = 0 | (9 === r.charCodeAt(e) ? g - (t % g) : 1);
              ((i += n), e >= u && (t += n));
            }
          }
          for (f && (t.appendASCIIString(' style="width:'), t.appendASCIIString(String(_ * i)), t.appendASCIIString('px"')), t.appendASCII(62); S < d; S++) {
            (C.setColumnInfo(S + 1, e - N, L, I), (N = 0));
            let i;
            if (9 === r.charCodeAt(S)) {
              ((i = (g - (k % g)) | 0), !o || i > 1 ? t.write1(8594) : t.write1(65515));
              for (let e = 2; e <= i; e++) t.write1(160);
            } else ((i = 1), t.write1(b));
            ((L += i), S >= u && (k += i));
          }
          D = i;
        } else {
          let i = 0;
          for (t.appendASCII(62); S < d; S++) {
            (C.setColumnInfo(S + 1, e - N, L, I), (N = 0));
            const o = r.charCodeAt(S);
            let s = 1,
              a = 1;
            switch (o) {
              case 9:
                ((s = g - (k % g)), (a = s));
                for (let e = 1; e <= s; e++) t.write1(160);
                break;
              case 32:
                t.write1(160);
                break;
              case 60:
                t.appendASCIIString("&lt;");
                break;
              case 62:
                t.appendASCIIString("&gt;");
                break;
              case 38:
                t.appendASCIIString("&amp;");
                break;
              case 0:
                y ? t.write1(9216) : t.appendASCIIString("&#00;");
                break;
              case 65279:
              case 8232:
              case 8233:
              case 133:
                t.write1(65533);
                break;
              default:
                (n.K7(o) && a++, y && o < 32 ? t.write1(9216 + o) : y && 127 === o ? t.write1(9249) : y && m(o) ? (t.appendASCIIString("[U+"), t.appendASCIIString(v(o)), t.appendASCIIString("]"), (s = 8)) : t.write1(o));
            }
            ((L += s), (i += s), S >= u && (k += a));
          }
          D = i;
        }
        (E ? N++ : (N = 0), S >= a && !x && l.isPseudoAfter() && ((x = !0), C.setColumnInfo(S + 1, e, L, I)), t.appendASCIIString("</span>"));
      }
      x || C.setColumnInfo(a + 1, c.length - 1, L, I);
      l && t.appendASCIIString("<span>&hellip;</span>");
      return (t.appendASCIIString("</span>"), new h(C, f, s));
    })((function (e) {
      const t = e.lineContent;
      let i, o;
      -1 !== e.stopRenderingLineAfter && e.stopRenderingLineAfter < t.length ? ((i = !0), (o = e.stopRenderingLineAfter)) : ((i = !1), (o = t.length));
      let a = (function (e, t, i) {
        let n = [],
          o = 0;
        t > 0 && (n[o++] = new r(t, "", 0));
        for (let s = 0, a = e.getCount(); s < a; s++) {
          const a = e.getEndOffset(s);
          if (a <= t) continue;
          const l = e.getClassName(s);
          if (a >= i) {
            n[o++] = new r(i, l, 0);
            break;
          }
          n[o++] = new r(a, l, 0);
        }
        return n;
      })(e.lineTokens, e.fauxIndentLength, o);
      (4 === e.renderWhitespace || 1 === e.renderWhitespace || (2 === e.renderWhitespace && e.selectionsOnLine) || 3 === e.renderWhitespace) && (a = (function (e, t, i, o) {
        const s = e.continuesWithWrappedLine,
          a = e.fauxIndentLength,
          l = e.tabSize,
          c = e.startVisibleColumn,
          d = e.useMonospaceOptimizations,
          h = e.selectionsOnLine,
          u = 1 === e.renderWhitespace,
          g = 3 === e.renderWhitespace,
          p = e.renderSpaceWidth !== e.spaceWidth;
        let f = [],
          m = 0,
          v = 0,
          _ = o[v].type,
          b = o[v].endIndex;
        const w = o.length;
        let y,
          C = !1,
          x = n.LC(t);
        -1 === x ? ((C = !0), (x = i), (y = i)) : (y = n.ow(t));
        let S = !1,
          k = 0,
          L = h && h[k],
          N = c % l;
        for (let e = a; e < i; e++) {
          const s = t.charCodeAt(e);
          let c;
          if ((L && e >= L.endOffset && (k++, (L = h && h[k])), e < x || e > y)) c = !0;else if (9 === s) c = !0;else if (32 === s) {
            if (u) {
              if (S) c = !0;else {
                const n = e + 1 < i ? t.charCodeAt(e + 1) : 0;
                c = 32 === n || 9 === n;
              }
            } else c = !0;
          } else c = !1;
          if ((c && h && (c = !!L && L.startOffset <= e && L.endOffset > e), c && g && (c = C || e > y), S)) {
            if (!c || (!d && N >= l)) {
              if (p) {
                for (let t = (m > 0 ? f[m - 1].endIndex : a) + 1; t <= e; t++) f[m++] = new r(t, "mtkw", 1);
              } else f[m++] = new r(e, "mtkw", 1);
              N %= l;
            }
          } else (e === b || (c && e > a)) && ((f[m++] = new r(e, _, 0)), (N %= l));
          for (9 === s ? (N = l) : n.K7(s) ? (N += 2) : N++, S = c; e === b && (v++, v < w);) ((_ = o[v].type), (b = o[v].endIndex));
        }
        let D = !1;
        if (S) if (s && u) {
          let e = i > 0 ? t.charCodeAt(i - 1) : 0,
            n = i > 1 ? t.charCodeAt(i - 2) : 0;
          (32 === e && 32 !== n && 9 !== n) || (D = !0);
        } else D = !0;
        if (D) {
          if (p) {
            for (let e = (m > 0 ? f[m - 1].endIndex : a) + 1; e <= i; e++) f[m++] = new r(e, "mtkw", 1);
          } else f[m++] = new r(i, "mtkw", 1);
        } else f[m++] = new r(i, _, 0);
        return f;
      })(e, t, o, a));
      let l = 0;
      if (e.lineDecorations.length > 0) {
        for (let t = 0, i = e.lineDecorations.length; t < i; t++) {
          const i = e.lineDecorations[t];
          3 === i.type || 1 === i.type ? (l |= 1) : 2 === i.type && (l |= 2);
        }
        a = (function (e, t, i, n) {
          n.sort(s.Kp.compare);
          const o = s.k.normalize(e, n),
            a = o.length;
          let l = 0,
            c = [],
            d = 0,
            h = 0;
          for (let e = 0, t = i.length; e < t; e++) {
            const t = i[e],
              n = t.endIndex,
              s = t.type,
              u = t.metadata;
            for (; l < a && o[l].startOffset < n;) {
              const e = o[l];
              if ((e.startOffset > h && ((h = e.startOffset), (c[d++] = new r(h, s, u))), !(e.endOffset + 1 <= n))) {
                ((h = n), (c[d++] = new r(h, s + " " + e.className, u | e.metadata)));
                break;
              }
              ((h = e.endOffset + 1), (c[d++] = new r(h, s + " " + e.className, u | e.metadata)), l++);
            }
            n > h && ((h = n), (c[d++] = new r(h, s, u)));
          }
          const u = i[i.length - 1].endIndex;
          if (l < a && o[l].startOffset === u) for (; l < a && o[l].startOffset === u;) {
            const e = o[l];
            ((c[d++] = new r(h, e.className, e.metadata)), l++);
          }
          return c;
        })(t, 0, a, e.lineDecorations);
      }
      e.containsRTL || (a = (function (e, t, i) {
        let n = 0,
          o = [],
          s = 0;
        if (i) for (let i = 0, a = t.length; i < a; i++) {
          const a = t[i],
            l = a.endIndex;
          if (n + 50 < l) {
            const t = a.type,
              i = a.metadata;
            let c = -1,
              d = n;
            for (let a = n; a < l; a++) (32 === e.charCodeAt(a) && (c = a), -1 !== c && a - d >= 50 && ((o[s++] = new r(c + 1, t, i)), (d = c + 1), (c = -1)));
            d !== l && (o[s++] = new r(l, t, i));
          } else o[s++] = a;
          n = l;
        } else for (let e = 0, i = t.length; e < i; e++) {
          const i = t[e],
            a = i.endIndex;
          let l = a - n;
          if (l > 50) {
            const e = i.type,
              t = i.metadata,
              c = Math.ceil(l / 50);
            for (let i = 1; i < c; i++) {
              let a = n + 50 * i;
              o[s++] = new r(a, e, t);
            }
            o[s++] = new r(a, e, t);
          } else o[s++] = i;
          n = a;
        }
        return o;
      })(t, a, !e.isBasicASCII || e.fontLigatures));
      e.renderControlCharacters && !e.isBasicASCII && (a = (function (e, t) {
        let i = [],
          n = new r(0, "", 0),
          o = 0;
        for (const s of t) {
          const t = s.endIndex;
          for (; o < t; o++) {
            m(e.charCodeAt(o)) && (o > n.endIndex && ((n = new r(o, s.type, s.metadata)), i.push(n)), (n = new r(o + 1, "mtkcontrol", s.metadata)), i.push(n));
          }
          o > n.endIndex && ((n = new r(t, s.type, s.metadata)), i.push(n));
        }
        return i;
      })(t, a));
      return new f(e.useMonospaceOptimizations, e.canUseHalfwidthRightwardsArrow, t, o, i, a, l, e.fauxIndentLength, e.tabSize, e.startVisibleColumn, e.containsRTL, e.spaceWidth, e.renderSpaceCharCode, e.renderWhitespace, e.renderControlCharacters);
    })(e), t);
  }
  class g {
    constructor(e, t, i, n) {
      ((this.characterMapping = e), (this.html = t), (this.containsRTL = i), (this.containsForeignElements = n));
    }
  }
  function p(e) {
    let t = (0, o.l$)(1e4),
      i = u(e, t);
    return new g(i.characterMapping, t.build(), i.containsRTL, i.containsForeignElements);
  }
  class f {
    constructor(e, t, i, n, o, s, r, a, l, c, d, h, u, g, p) {
      ((this.fontIsMonospace = e), (this.canUseHalfwidthRightwardsArrow = t), (this.lineContent = i), (this.len = n), (this.isOverflowing = o), (this.parts = s), (this.containsForeignElements = r), (this.fauxIndentLength = a), (this.tabSize = l), (this.startVisibleColumn = c), (this.containsRTL = d), (this.spaceWidth = h), (this.renderSpaceCharCode = u), (this.renderWhitespace = g), (this.renderControlCharacters = p));
    }
  }
  function m(e) {
    return e < 32 ? 9 !== e : 127 === e || (e >= 8234 && e <= 8238) || (e >= 8294 && e <= 8297) || (e >= 8206 && e <= 8207) || 1564 === e;
  }
  function v(e) {
    return e.toString(16).toUpperCase().padStart(4, "0");
  }
};