module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    L: () => d,
    w: () => c
  });
  var n = i(97295),
    o = i(33181),
    s = i(31380),
    r = i(59410),
    a = i(50187),
    l = i(24314);
  class c {
    static _createWord(e, t, i, n, o) {
      return {
        start: n,
        end: o,
        wordType: t,
        nextCharClass: i
      };
    }
    static _findPreviousWordOnLine(e, t, i) {
      let n = t.getLineContent(i.lineNumber);
      return this._doFindPreviousWordOnLine(n, e, i);
    }
    static _doFindPreviousWordOnLine(e, t, i) {
      let n = 0;
      for (let o = i.column - 2; o >= 0; o--) {
        let i = e.charCodeAt(o),
          s = t.get(i);
        if (0 === s) {
          if (2 === n) return this._createWord(e, n, s, o + 1, this._findEndOfWord(e, t, n, o + 1));
          n = 1;
        } else if (2 === s) {
          if (1 === n) return this._createWord(e, n, s, o + 1, this._findEndOfWord(e, t, n, o + 1));
          n = 2;
        } else if (1 === s && 0 !== n) return this._createWord(e, n, s, o + 1, this._findEndOfWord(e, t, n, o + 1));
      }
      return 0 !== n ? this._createWord(e, n, 1, 0, this._findEndOfWord(e, t, n, 0)) : null;
    }
    static _findEndOfWord(e, t, i, n) {
      let o = e.length;
      for (let s = n; s < o; s++) {
        let n = e.charCodeAt(s),
          o = t.get(n);
        if (1 === o) return s;
        if (1 === i && 2 === o) return s;
        if (2 === i && 0 === o) return s;
      }
      return o;
    }
    static _findNextWordOnLine(e, t, i) {
      let n = t.getLineContent(i.lineNumber);
      return this._doFindNextWordOnLine(n, e, i);
    }
    static _doFindNextWordOnLine(e, t, i) {
      let n = 0,
        o = e.length;
      for (let s = i.column - 1; s < o; s++) {
        let i = e.charCodeAt(s),
          o = t.get(i);
        if (0 === o) {
          if (2 === n) return this._createWord(e, n, o, this._findStartOfWord(e, t, n, s - 1), s);
          n = 1;
        } else if (2 === o) {
          if (1 === n) return this._createWord(e, n, o, this._findStartOfWord(e, t, n, s - 1), s);
          n = 2;
        } else if (1 === o && 0 !== n) return this._createWord(e, n, o, this._findStartOfWord(e, t, n, s - 1), s);
      }
      return 0 !== n ? this._createWord(e, n, 1, this._findStartOfWord(e, t, n, o - 1), o) : null;
    }
    static _findStartOfWord(e, t, i, n) {
      for (let o = n; o >= 0; o--) {
        let n = e.charCodeAt(o),
          s = t.get(n);
        if (1 === s) return o + 1;
        if (1 === i && 2 === s) return o + 1;
        if (2 === i && 0 === s) return o + 1;
      }
      return 0;
    }
    static moveWordLeft(e, t, i, n) {
      let o = i.lineNumber,
        s = i.column;
      1 === s && o > 1 && ((o -= 1), (s = t.getLineMaxColumn(o)));
      let r = c._findPreviousWordOnLine(e, t, new a.L(o, s));
      if (0 === n) return new a.L(o, r ? r.start + 1 : 1);
      if (1 === n) return (r && 2 === r.wordType && r.end - r.start == 1 && 0 === r.nextCharClass && (r = c._findPreviousWordOnLine(e, t, new a.L(o, r.start + 1))), new a.L(o, r ? r.start + 1 : 1));
      if (3 === n) {
        for (; r && 2 === r.wordType;) r = c._findPreviousWordOnLine(e, t, new a.L(o, r.start + 1));
        return new a.L(o, r ? r.start + 1 : 1);
      }
      return (r && s <= r.end + 1 && (r = c._findPreviousWordOnLine(e, t, new a.L(o, r.start + 1))), new a.L(o, r ? r.end + 1 : 1));
    }
    static _moveWordPartLeft(e, t) {
      const i = t.lineNumber,
        o = e.getLineMaxColumn(i);
      if (1 === t.column) return i > 1 ? new a.L(i - 1, e.getLineMaxColumn(i - 1)) : t;
      const s = e.getLineContent(i);
      for (let e = t.column - 1; e > 1; e--) {
        const t = s.charCodeAt(e - 2),
          r = s.charCodeAt(e - 1);
        if (95 === t && 95 !== r) return new a.L(i, e);
        if (n.mK(t) && n.df(r)) return new a.L(i, e);
        if (n.df(t) && n.df(r) && e + 1 < o) {
          const t = s.charCodeAt(e);
          if (n.mK(t)) return new a.L(i, e);
        }
      }
      return new a.L(i, 1);
    }
    static moveWordRight(e, t, i, n) {
      let o = i.lineNumber,
        s = i.column,
        r = !1;
      s === t.getLineMaxColumn(o) && o < t.getLineCount() && ((r = !0), (o += 1), (s = 1));
      let l = c._findNextWordOnLine(e, t, new a.L(o, s));
      if (2 === n) (l && 2 === l.wordType && l.end - l.start == 1 && 0 === l.nextCharClass && (l = c._findNextWordOnLine(e, t, new a.L(o, l.end + 1))), (s = l ? l.end + 1 : t.getLineMaxColumn(o)));else if (3 === n) {
        for (r && (s = 0); l && (2 === l.wordType || l.start + 1 <= s);) l = c._findNextWordOnLine(e, t, new a.L(o, l.end + 1));
        s = l ? l.start + 1 : t.getLineMaxColumn(o);
      } else (l && !r && s >= l.start + 1 && (l = c._findNextWordOnLine(e, t, new a.L(o, l.end + 1))), (s = l ? l.start + 1 : t.getLineMaxColumn(o)));
      return new a.L(o, s);
    }
    static _moveWordPartRight(e, t) {
      const i = t.lineNumber,
        o = e.getLineMaxColumn(i);
      if (t.column === o) return i < e.getLineCount() ? new a.L(i + 1, 1) : t;
      const s = e.getLineContent(i);
      for (let e = t.column + 1; e < o; e++) {
        const t = s.charCodeAt(e - 2),
          r = s.charCodeAt(e - 1);
        if (95 !== t && 95 === r) return new a.L(i, e);
        if (n.mK(t) && n.df(r)) return new a.L(i, e);
        if (n.df(t) && n.df(r) && e + 1 < o) {
          const t = s.charCodeAt(e);
          if (n.mK(t)) return new a.L(i, e);
        }
      }
      return new a.L(i, o);
    }
    static _deleteWordLeftWhitespace(e, t) {
      const i = e.getLineContent(t.lineNumber),
        o = t.column - 2,
        s = n.ow(i, o);
      return s + 1 < o ? new l.e(t.lineNumber, s + 2, t.lineNumber, t.column) : null;
    }
    static deleteWordLeft(e, t) {
      const i = e.wordSeparators,
        n = e.model,
        o = e.selection,
        r = e.whitespaceHeuristics;
      if (!o.isEmpty()) return o;
      if (s.A.isAutoClosingPairDelete(e.autoClosingDelete, e.autoClosingBrackets, e.autoClosingQuotes, e.autoClosingPairs.autoClosingPairsOpenByEnd, e.model, [e.selection], e.autoClosedCharacters)) {
        const t = e.selection.getPosition();
        return new l.e(t.lineNumber, t.column - 1, t.lineNumber, t.column + 1);
      }
      const d = new a.L(o.positionLineNumber, o.positionColumn);
      let h = d.lineNumber,
        u = d.column;
      if (1 === h && 1 === u) return null;
      if (r) {
        let e = this._deleteWordLeftWhitespace(n, d);
        if (e) return e;
      }
      let g = c._findPreviousWordOnLine(i, n, d);
      return (0 === t ? g ? (u = g.start + 1) : u > 1 ? (u = 1) : (h--, (u = n.getLineMaxColumn(h))) : (g && u <= g.end + 1 && (g = c._findPreviousWordOnLine(i, n, new a.L(h, g.start + 1))), g ? (u = g.end + 1) : u > 1 ? (u = 1) : (h--, (u = n.getLineMaxColumn(h)))), new l.e(h, u, d.lineNumber, d.column));
    }
    static deleteInsideWord(e, t, i) {
      if (!i.isEmpty()) return i;
      const n = new a.L(i.positionLineNumber, i.positionColumn);
      let o = this._deleteInsideWordWhitespace(t, n);
      return o || this._deleteInsideWordDetermineDeleteRange(e, t, n);
    }
    static _charAtIsWhitespace(e, t) {
      const i = e.charCodeAt(t);
      return 32 === i || 9 === i;
    }
    static _deleteInsideWordWhitespace(e, t) {
      const i = e.getLineContent(t.lineNumber),
        n = i.length;
      if (0 === n) return null;
      let o = Math.max(t.column - 2, 0);
      if (!this._charAtIsWhitespace(i, o)) return null;
      let s = Math.min(t.column - 1, n - 1);
      if (!this._charAtIsWhitespace(i, s)) return null;
      for (; o > 0 && this._charAtIsWhitespace(i, o - 1);) o--;
      for (; s + 1 < n && this._charAtIsWhitespace(i, s + 1);) s++;
      return new l.e(t.lineNumber, o + 1, t.lineNumber, s + 2);
    }
    static _deleteInsideWordDetermineDeleteRange(e, t, i) {
      const n = t.getLineContent(i.lineNumber),
        o = n.length;
      if (0 === o) return i.lineNumber > 1 ? new l.e(i.lineNumber - 1, t.getLineMaxColumn(i.lineNumber - 1), i.lineNumber, 1) : i.lineNumber < t.getLineCount() ? new l.e(i.lineNumber, 1, i.lineNumber + 1, 1) : new l.e(i.lineNumber, 1, i.lineNumber, 1);
      const s = e => e.start + 1 <= i.column && i.column <= e.end + 1,
        r = (e, t) => ((e = Math.min(e, i.column)), (t = Math.max(t, i.column)), new l.e(i.lineNumber, e, i.lineNumber, t)),
        a = e => {
          let t = e.start + 1,
            i = e.end + 1,
            s = !1;
          for (; i - 1 < o && this._charAtIsWhitespace(n, i - 1);) ((s = !0), i++);
          if (!s) for (; t > 1 && this._charAtIsWhitespace(n, t - 2);) t--;
          return r(t, i);
        },
        d = c._findPreviousWordOnLine(e, t, i);
      if (d && s(d)) return a(d);
      const h = c._findNextWordOnLine(e, t, i);
      return h && s(h) ? a(h) : d && h ? r(d.end + 1, h.start + 1) : d ? r(d.start + 1, d.end + 1) : h ? r(h.start + 1, h.end + 1) : r(1, o + 1);
    }
    static _deleteWordPartLeft(e, t) {
      if (!t.isEmpty()) return t;
      const i = t.getPosition(),
        n = c._moveWordPartLeft(e, i);
      return new l.e(i.lineNumber, i.column, n.lineNumber, n.column);
    }
    static _findFirstNonWhitespaceChar(e, t) {
      let i = e.length;
      for (let n = t; n < i; n++) {
        let t = e.charAt(n);
        if (" " !== t && "\t" !== t) return n;
      }
      return i;
    }
    static _deleteWordRightWhitespace(e, t) {
      const i = e.getLineContent(t.lineNumber),
        n = t.column - 1,
        o = this._findFirstNonWhitespaceChar(i, n);
      return n + 1 < o ? new l.e(t.lineNumber, t.column, t.lineNumber, o + 1) : null;
    }
    static deleteWordRight(e, t) {
      const i = e.wordSeparators,
        n = e.model,
        o = e.selection,
        s = e.whitespaceHeuristics;
      if (!o.isEmpty()) return o;
      const r = new a.L(o.positionLineNumber, o.positionColumn);
      let d = r.lineNumber,
        h = r.column;
      const u = n.getLineCount(),
        g = n.getLineMaxColumn(d);
      if (d === u && h === g) return null;
      if (s) {
        let e = this._deleteWordRightWhitespace(n, r);
        if (e) return e;
      }
      let p = c._findNextWordOnLine(i, n, r);
      return (2 === t ? p ? (h = p.end + 1) : h < g || d === u ? (h = g) : (d++, (p = c._findNextWordOnLine(i, n, new a.L(d, 1))), (h = p ? p.start + 1 : n.getLineMaxColumn(d))) : (p && h >= p.start + 1 && (p = c._findNextWordOnLine(i, n, new a.L(d, p.end + 1))), p ? (h = p.start + 1) : h < g || d === u ? (h = g) : (d++, (p = c._findNextWordOnLine(i, n, new a.L(d, 1))), (h = p ? p.start + 1 : n.getLineMaxColumn(d)))), new l.e(d, h, r.lineNumber, r.column));
    }
    static _deleteWordPartRight(e, t) {
      if (!t.isEmpty()) return t;
      const i = t.getPosition(),
        n = c._moveWordPartRight(e, i);
      return new l.e(i.lineNumber, i.column, n.lineNumber, n.column);
    }
    static _createWordAtPosition(e, t, i) {
      const n = new l.e(t, i.start + 1, t, i.end + 1);
      return {
        word: e.getValueInRange(n),
        startColumn: n.startColumn,
        endColumn: n.endColumn
      };
    }
    static getWordAtPosition(e, t, i) {
      const n = (0, r.u)(t),
        o = c._findPreviousWordOnLine(n, e, i);
      if (o && 1 === o.wordType && o.start <= i.column - 1 && i.column - 1 <= o.end) return c._createWordAtPosition(e, i.lineNumber, o);
      const s = c._findNextWordOnLine(n, e, i);
      return s && 1 === s.wordType && s.start <= i.column - 1 && i.column - 1 <= s.end ? c._createWordAtPosition(e, i.lineNumber, s) : null;
    }
    static word(e, t, i, n, s) {
      const d = (0, r.u)(e.wordSeparators);
      let h,
        u,
        g = c._findPreviousWordOnLine(d, t, s),
        p = c._findNextWordOnLine(d, t, s);
      if (!n) {
        let e, i;
        return (g && 1 === g.wordType && g.start <= s.column - 1 && s.column - 1 <= g.end ? ((e = g.start + 1), (i = g.end + 1)) : p && 1 === p.wordType && p.start <= s.column - 1 && s.column - 1 <= p.end ? ((e = p.start + 1), (i = p.end + 1)) : ((e = g ? g.end + 1 : 1), (i = p ? p.start + 1 : t.getLineMaxColumn(s.lineNumber))), new o.rS(new l.e(s.lineNumber, e, s.lineNumber, i), 0, new a.L(s.lineNumber, i), 0));
      }
      g && 1 === g.wordType && g.start < s.column - 1 && s.column - 1 < g.end ? ((h = g.start + 1), (u = g.end + 1)) : p && 1 === p.wordType && p.start < s.column - 1 && s.column - 1 < p.end ? ((h = p.start + 1), (u = p.end + 1)) : ((h = s.column), (u = s.column));
      let f,
        m = s.lineNumber;
      if (i.selectionStart.containsPosition(s)) f = i.selectionStart.endColumn;else if (s.isBeforeOrEqual(i.selectionStart.getStartPosition())) {
        f = h;
        let e = new a.L(m, f);
        i.selectionStart.containsPosition(e) && (f = i.selectionStart.endColumn);
      } else {
        f = u;
        let e = new a.L(m, f);
        i.selectionStart.containsPosition(e) && (f = i.selectionStart.startColumn);
      }
      return i.move(!0, m, f, 0);
    }
  }
  class d extends c {
    static deleteWordPartLeft(e) {
      const t = h([c.deleteWordLeft(e, 0), c.deleteWordLeft(e, 2), c._deleteWordPartLeft(e.model, e.selection)]);
      return (t.sort(l.e.compareRangesUsingEnds), t[2]);
    }
    static deleteWordPartRight(e) {
      const t = h([c.deleteWordRight(e, 0), c.deleteWordRight(e, 2), c._deleteWordPartRight(e.model, e.selection)]);
      return (t.sort(l.e.compareRangesUsingStarts), t[0]);
    }
    static moveWordPartLeft(e, t, i) {
      const n = h([c.moveWordLeft(e, t, i, 0), c.moveWordLeft(e, t, i, 2), c._moveWordPartLeft(t, i)]);
      return (n.sort(a.L.compare), n[2]);
    }
    static moveWordPartRight(e, t, i) {
      const n = h([c.moveWordRight(e, t, i, 0), c.moveWordRight(e, t, i, 2), c._moveWordPartRight(t, i)]);
      return (n.sort(a.L.compare), n[0]);
    }
  }
  function h(e) {
    return e.filter(e => Boolean(e));
  }
};