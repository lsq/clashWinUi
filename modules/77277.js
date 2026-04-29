module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    bc: () => l,
    cM: () => g,
    iE: () => d,
    pM: () => u,
    sz: () => p
  });
  var n = i(97295),
    o = i(59410),
    s = i(50187),
    r = i(24314),
    a = i(84973);
  class l {
    constructor(e, t, i, n) {
      ((this.searchString = e), (this.isRegex = t), (this.matchCase = i), (this.wordSeparators = n));
    }
    parseSearchRequest() {
      if ("" === this.searchString) return null;
      let e;
      e = this.isRegex ? (function (e) {
        if (!e || 0 === e.length) return !1;
        for (let t = 0, i = e.length; t < i; t++) {
          if (92 === e.charCodeAt(t)) {
            if ((t++, t >= i)) break;
            const n = e.charCodeAt(t);
            if (110 === n || 114 === n || 87 === n) return !0;
          }
        }
        return !1;
      })(this.searchString) : this.searchString.indexOf("\n") >= 0;
      let t = null;
      try {
        t = n.GF(this.searchString, this.isRegex, {
          matchCase: this.matchCase,
          wholeWord: !1,
          multiline: e,
          global: !0,
          unicode: !0
        });
      } catch (e) {
        return null;
      }
      if (!t) return null;
      let i = !this.isRegex && !e;
      return (i && this.searchString.toLowerCase() !== this.searchString.toUpperCase() && (i = this.matchCase), new c(t, this.wordSeparators ? (0, o.u)(this.wordSeparators) : null, i ? this.searchString : null));
    }
  }
  class c {
    constructor(e, t, i) {
      ((this.regex = e), (this.wordSeparators = t), (this.simpleSearch = i));
    }
  }
  function d(e, t, i) {
    if (!i) return new a.tk(e, null);
    let n = [];
    for (let e = 0, i = t.length; e < i; e++) n[e] = t[e];
    return new a.tk(e, n);
  }
  class h {
    constructor(e) {
      let t = [],
        i = 0;
      for (let n = 0, o = e.length; n < o; n++) 10 === e.charCodeAt(n) && (t[i++] = n);
      this._lineFeedsOffsets = t;
    }
    findLineFeedCountBeforeOffset(e) {
      const t = this._lineFeedsOffsets;
      let i = 0,
        n = t.length - 1;
      if (-1 === n) return 0;
      if (e <= t[0]) return 0;
      for (; i < n;) {
        const o = i + (((n - i) / 2) >> 0);
        t[o] >= e ? (n = o - 1) : t[o + 1] >= e ? ((i = o), (n = o)) : (i = o + 1);
      }
      return i + 1;
    }
  }
  class u {
    static findMatches(e, t, i, n, o) {
      const s = t.parseSearchRequest();
      return s ? s.regex.multiline ? this._doFindMatchesMultiline(e, i, new p(s.wordSeparators, s.regex), n, o) : this._doFindMatchesLineByLine(e, i, s, n, o) : [];
    }
    static _getMultilineMatchRange(e, t, i, n, o, s) {
      let a,
        l,
        c = 0;
      if ((n ? ((c = n.findLineFeedCountBeforeOffset(o)), (a = t + o + c)) : (a = t + o), n)) {
        let e = n.findLineFeedCountBeforeOffset(o + s.length) - c;
        l = a + s.length + e;
      } else l = a + s.length;
      const d = e.getPositionAt(a),
        h = e.getPositionAt(l);
      return new r.e(d.lineNumber, d.column, h.lineNumber, h.column);
    }
    static _doFindMatchesMultiline(e, t, i, n, o) {
      const s = e.getOffsetAt(t.getStartPosition()),
        r = e.getValueInRange(t, 1),
        a = "\r\n" === e.getEOL() ? new h(r) : null,
        l = [];
      let c,
        u = 0;
      for (i.reset(0); (c = i.next(r));) if (((l[u++] = d(this._getMultilineMatchRange(e, s, r, a, c.index, c[0]), c, n)), u >= o)) return l;
      return l;
    }
    static _doFindMatchesLineByLine(e, t, i, n, o) {
      const s = [];
      let r = 0;
      if (t.startLineNumber === t.endLineNumber) {
        const a = e.getLineContent(t.startLineNumber).substring(t.startColumn - 1, t.endColumn - 1);
        return ((r = this._findMatchesInLine(i, a, t.startLineNumber, t.startColumn - 1, r, s, n, o)), s);
      }
      const a = e.getLineContent(t.startLineNumber).substring(t.startColumn - 1);
      r = this._findMatchesInLine(i, a, t.startLineNumber, t.startColumn - 1, r, s, n, o);
      for (let a = t.startLineNumber + 1; a < t.endLineNumber && r < o; a++) r = this._findMatchesInLine(i, e.getLineContent(a), a, 0, r, s, n, o);
      if (r < o) {
        const a = e.getLineContent(t.endLineNumber).substring(0, t.endColumn - 1);
        r = this._findMatchesInLine(i, a, t.endLineNumber, 0, r, s, n, o);
      }
      return s;
    }
    static _findMatchesInLine(e, t, i, n, o, s, l, c) {
      const h = e.wordSeparators;
      if (!l && e.simpleSearch) {
        const l = e.simpleSearch,
          d = l.length,
          u = t.length;
        let p = -d;
        for (; -1 !== (p = t.indexOf(l, p + d));) if ((!h || g(h, t, u, p, d)) && ((s[o++] = new a.tk(new r.e(i, p + 1 + n, i, p + 1 + d + n), null)), o >= c)) return o;
        return o;
      }
      const u = new p(e.wordSeparators, e.regex);
      let f;
      u.reset(0);
      do {
        if (((f = u.next(t)), f && ((s[o++] = d(new r.e(i, f.index + 1 + n, i, f.index + 1 + f[0].length + n), f, l)), o >= c))) return o;
      } while (f);
      return o;
    }
    static findNextMatch(e, t, i, n) {
      const o = t.parseSearchRequest();
      if (!o) return null;
      const s = new p(o.wordSeparators, o.regex);
      return o.regex.multiline ? this._doFindNextMatchMultiline(e, i, s, n) : this._doFindNextMatchLineByLine(e, i, s, n);
    }
    static _doFindNextMatchMultiline(e, t, i, n) {
      const o = new s.L(t.lineNumber, 1),
        a = e.getOffsetAt(o),
        l = e.getLineCount(),
        c = e.getValueInRange(new r.e(o.lineNumber, o.column, l, e.getLineMaxColumn(l)), 1),
        u = "\r\n" === e.getEOL() ? new h(c) : null;
      i.reset(t.column - 1);
      let g = i.next(c);
      return g ? d(this._getMultilineMatchRange(e, a, c, u, g.index, g[0]), g, n) : 1 !== t.lineNumber || 1 !== t.column ? this._doFindNextMatchMultiline(e, new s.L(1, 1), i, n) : null;
    }
    static _doFindNextMatchLineByLine(e, t, i, n) {
      const o = e.getLineCount(),
        s = t.lineNumber,
        r = e.getLineContent(s),
        a = this._findFirstMatchInLine(i, r, s, t.column, n);
      if (a) return a;
      for (let t = 1; t <= o; t++) {
        const r = (s + t - 1) % o,
          a = e.getLineContent(r + 1),
          l = this._findFirstMatchInLine(i, a, r + 1, 1, n);
        if (l) return l;
      }
      return null;
    }
    static _findFirstMatchInLine(e, t, i, n, o) {
      e.reset(n - 1);
      const s = e.next(t);
      return s ? d(new r.e(i, s.index + 1, i, s.index + 1 + s[0].length), s, o) : null;
    }
    static findPreviousMatch(e, t, i, n) {
      const o = t.parseSearchRequest();
      if (!o) return null;
      const s = new p(o.wordSeparators, o.regex);
      return o.regex.multiline ? this._doFindPreviousMatchMultiline(e, i, s, n) : this._doFindPreviousMatchLineByLine(e, i, s, n);
    }
    static _doFindPreviousMatchMultiline(e, t, i, n) {
      const o = this._doFindMatchesMultiline(e, new r.e(1, 1, t.lineNumber, t.column), i, n, 9990);
      if (o.length > 0) return o[o.length - 1];
      const a = e.getLineCount();
      return t.lineNumber !== a || t.column !== e.getLineMaxColumn(a) ? this._doFindPreviousMatchMultiline(e, new s.L(a, e.getLineMaxColumn(a)), i, n) : null;
    }
    static _doFindPreviousMatchLineByLine(e, t, i, n) {
      const o = e.getLineCount(),
        s = t.lineNumber,
        r = e.getLineContent(s).substring(0, t.column - 1),
        a = this._findLastMatchInLine(i, r, s, n);
      if (a) return a;
      for (let t = 1; t <= o; t++) {
        const r = (o + s - t - 1) % o,
          a = e.getLineContent(r + 1),
          l = this._findLastMatchInLine(i, a, r + 1, n);
        if (l) return l;
      }
      return null;
    }
    static _findLastMatchInLine(e, t, i, n) {
      let o,
        s = null;
      for (e.reset(0); (o = e.next(t));) s = d(new r.e(i, o.index + 1, i, o.index + 1 + o[0].length), o, n);
      return s;
    }
  }
  function g(e, t, i, n, o) {
    return ((function (e, t, i, n, o) {
      if (0 === n) return !0;
      const s = t.charCodeAt(n - 1);
      if (0 !== e.get(s)) return !0;
      if (13 === s || 10 === s) return !0;
      if (o > 0) {
        const i = t.charCodeAt(n);
        if (0 !== e.get(i)) return !0;
      }
      return !1;
    })(e, t, 0, n, o) && (function (e, t, i, n, o) {
      if (n + o === i) return !0;
      const s = t.charCodeAt(n + o);
      if (0 !== e.get(s)) return !0;
      if (13 === s || 10 === s) return !0;
      if (o > 0) {
        const i = t.charCodeAt(n + o - 1);
        if (0 !== e.get(i)) return !0;
      }
      return !1;
    })(e, t, i, n, o));
  }
  class p {
    constructor(e, t) {
      ((this._wordSeparators = e), (this._searchRegex = t), (this._prevMatchStartIndex = -1), (this._prevMatchLength = 0));
    }
    reset(e) {
      ((this._searchRegex.lastIndex = e), (this._prevMatchStartIndex = -1), (this._prevMatchLength = 0));
    }
    next(e) {
      const t = e.length;
      let i;
      do {
        if (this._prevMatchStartIndex + this._prevMatchLength === t) return null;
        if (((i = this._searchRegex.exec(e)), !i)) return null;
        const o = i.index,
          s = i[0].length;
        if (o === this._prevMatchStartIndex && s === this._prevMatchLength) {
          if (0 === s) {
            n.ZH(e, t, this._searchRegex.lastIndex) > 65535 ? (this._searchRegex.lastIndex += 2) : (this._searchRegex.lastIndex += 1);
            continue;
          }
          return null;
        }
        if (((this._prevMatchStartIndex = o), (this._prevMatchLength = s), !this._wordSeparators || g(this._wordSeparators, e, t, o, s))) return i;
      } while (i);
      return null;
    }
  }
};