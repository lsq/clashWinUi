module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    $: () => d,
    h: () => h
  });
  var n = i(44101),
    o = i(97781),
    s = i(43557),
    r = i(58409),
    a = i(71531),
    l = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    c = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let d = class {
    constructor(e, t, i, n) {
      ((this._legend = e), (this._themeService = t), (this._modeService = i), (this._logService = n), (this._hashTable = new g()), (this._hasWarnedOverlappingTokens = !1));
    }
    getMetadata(e, t, i) {
      const o = this._modeService.languageIdCodec.encodeLanguageId(i),
        r = this._hashTable.get(e, t, o);
      let a;
      if (r) ((a = r.metadata), this._logService.getLevel() === s.in.Trace && this._logService.trace(`SemanticTokensProviderStyling [CACHED] ${e} / ${t}: foreground ${n.NX.getForeground(a)}, fontStyle ${n.NX.getFontStyle(a).toString(2)}`));else {
        let r = this._legend.tokenTypes[e];
        const l = [];
        if (r) {
          let e = t;
          for (let t = 0; e > 0 && t < this._legend.tokenModifiers.length; t++) (1 & e && l.push(this._legend.tokenModifiers[t]), (e >>= 1));
          e > 0 && this._logService.getLevel() === s.in.Trace && (this._logService.trace(`SemanticTokensProviderStyling: unknown token modifier index: ${t.toString(2)} for legend: ${JSON.stringify(this._legend.tokenModifiers)}`), l.push("not-in-legend"));
          const n = this._themeService.getColorTheme().getTokenStyleMetadata(r, l, i);
          if (void 0 === n) a = 2147483647;else {
            if (((a = 0), void 0 !== n.italic)) {
              a |= 1 | ((n.italic ? 1 : 0) << 11);
            }
            if (void 0 !== n.bold) {
              a |= 2 | ((n.bold ? 2 : 0) << 11);
            }
            if (void 0 !== n.underline) {
              a |= 4 | ((n.underline ? 4 : 0) << 11);
            }
            if (n.foreground) {
              a |= 8 | (n.foreground << 14);
            }
            0 === a && (a = 2147483647);
          }
        } else (this._logService.getLevel() === s.in.Trace && this._logService.trace(`SemanticTokensProviderStyling: unknown token type index: ${e} for legend: ${JSON.stringify(this._legend.tokenTypes)}`), (a = 2147483647), (r = "not-in-legend"));
        (this._hashTable.add(e, t, o, a), this._logService.getLevel() === s.in.Trace && this._logService.trace(`SemanticTokensProviderStyling ${e} (${r}) / ${t} (${l.join(" ")}): foreground ${n.NX.getForeground(a)}, fontStyle ${n.NX.getFontStyle(a).toString(2)}`));
      }
      return a;
    }
    warnOverlappingSemanticTokens(e, t) {
      this._hasWarnedOverlappingTokens || ((this._hasWarnedOverlappingTokens = !0), console.warn(`Overlapping semantic tokens detected at lineNumber ${e}, column ${t}`));
    }
  };
  function h(e, t, i) {
    const n = e.data,
      o = (e.data.length / 5) | 0,
      s = Math.max(Math.ceil(o / 1024), 400),
      a = [];
    let l = 0,
      c = 1,
      d = 0;
    for (; l < o;) {
      const e = l;
      let h = Math.min(e + s, o);
      if (h < o) {
        let t = h;
        for (; t - 1 > e && 0 === n[5 * t];) t--;
        if (t - 1 === e) {
          let e = h;
          for (; e + 1 < o && 0 === n[5 * e];) e++;
          h = e;
        } else h = t;
      }
      let u = new Uint32Array(4 * (h - e)),
        g = 0,
        p = 0,
        f = 0,
        m = 0,
        v = 0;
      for (; l < h;) {
        const e = 5 * l,
          o = n[e],
          s = n[e + 1],
          r = (c + o) | 0,
          a = 0 === o ? (d + s) | 0 : s,
          h = n[e + 2],
          _ = n[e + 3],
          b = n[e + 4],
          w = t.getMetadata(_, b, i);
        (2147483647 !== w && (0 === p && (p = r), f === r && v > a && (t.warnOverlappingSemanticTokens(r, a + 1), m < a ? (u[g - 4 + 2] = a) : (g -= 4)), (u[g] = r - p), (u[g + 1] = a), (u[g + 2] = a + h), (u[g + 3] = w), (g += 4), (f = r), (m = a), (v = a + h)), (c = r), (d = a), l++);
      }
      g !== u.length && (u = u.subarray(0, g));
      const _ = new r.Wz(p, new r.OU(u));
      a.push(_);
    }
    return a;
  }
  d = l([c(1, o.XE), c(2, a.h), c(3, s.VZ)], d);
  class u {
    constructor(e, t, i, n) {
      ((this.tokenTypeIndex = e), (this.tokenModifierSet = t), (this.languageId = i), (this.metadata = n), (this.next = null));
    }
  }
  class g {
    constructor() {
      ((this._elementsCount = 0), (this._currentLengthIndex = 0), (this._currentLength = g._SIZES[this._currentLengthIndex]), (this._growCount = Math.round(this._currentLengthIndex + 1 < g._SIZES.length ? (2 / 3) * this._currentLength : 0)), (this._elements = []), g._nullOutEntries(this._elements, this._currentLength));
    }
    static _nullOutEntries(e, t) {
      for (let i = 0; i < t; i++) e[i] = null;
    }
    _hash2(e, t) {
      return ((e << 5) - e + t) | 0;
    }
    _hashFunc(e, t, i) {
      return this._hash2(this._hash2(e, t), i) % this._currentLength;
    }
    get(e, t, i) {
      const n = this._hashFunc(e, t, i);
      let o = this._elements[n];
      for (; o;) {
        if (o.tokenTypeIndex === e && o.tokenModifierSet === t && o.languageId === i) return o;
        o = o.next;
      }
      return null;
    }
    add(e, t, i, n) {
      if ((this._elementsCount++, 0 !== this._growCount && this._elementsCount >= this._growCount)) {
        const e = this._elements;
        (this._currentLengthIndex++, (this._currentLength = g._SIZES[this._currentLengthIndex]), (this._growCount = Math.round(this._currentLengthIndex + 1 < g._SIZES.length ? (2 / 3) * this._currentLength : 0)), (this._elements = []), g._nullOutEntries(this._elements, this._currentLength));
        for (const t of e) {
          let e = t;
          for (; e;) {
            const t = e.next;
            ((e.next = null), this._add(e), (e = t));
          }
        }
      }
      this._add(new u(e, t, i, n));
    }
    _add(e) {
      const t = this._hashFunc(e.tokenTypeIndex, e.tokenModifierSet, e.languageId);
      ((e.next = this._elements[t]), (this._elements[t] = e));
    }
  }
  g._SIZES = [3, 7, 13, 31, 61, 127, 251, 509, 1021, 2039, 4093, 8191, 16381, 32749, 65521, 131071, 262139, 524287, 1048573, 2097143];
};