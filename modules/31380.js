module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    A: () => c
  });
  var n = i(97295),
    o = i(61329),
    s = i(33181),
    r = i(88784),
    a = i(24314),
    l = i(50187);
  class c {
    static deleteRight(e, t, i, n) {
      let s = [],
        l = 3 !== e;
      for (let e = 0, c = n.length; e < c; e++) {
        const c = n[e];
        let d = c;
        if (d.isEmpty()) {
          let e = c.getPosition(),
            n = r.o.right(t, i, e);
          d = new a.e(n.lineNumber, n.column, e.lineNumber, e.column);
        }
        d.isEmpty() ? (s[e] = null) : (d.startLineNumber !== d.endLineNumber && (l = !0), (s[e] = new o.T4(d, "")));
      }
      return [l, s];
    }
    static isAutoClosingPairDelete(e, t, i, n, o, r, a) {
      if ("never" === t && "never" === i) return !1;
      if ("never" === e) return !1;
      for (let l = 0, c = r.length; l < c; l++) {
        const c = r[l],
          d = c.getPosition();
        if (!c.isEmpty()) return !1;
        const h = o.getLineContent(d.lineNumber);
        if (d.column < 2 || d.column >= h.length + 1) return !1;
        const u = h.charAt(d.column - 2),
          g = n.get(u);
        if (!g) return !1;
        if ((0, s.LN)(u)) {
          if ("never" === i) return !1;
        } else if ("never" === t) return !1;
        const p = h.charAt(d.column - 1);
        let f = !1;
        for (const e of g) e.open === u && e.close === p && (f = !0);
        if (!f) return !1;
        if ("auto" === e) {
          let e = !1;
          for (let t = 0, i = a.length; t < i; t++) {
            const i = a[t];
            if (d.lineNumber === i.startLineNumber && d.column === i.startColumn) {
              e = !0;
              break;
            }
          }
          if (!e) return !1;
        }
      }
      return !0;
    }
    static _runAutoClosingPairDelete(e, t, i) {
      let n = [];
      for (let e = 0, t = i.length; e < t; e++) {
        const t = i[e].getPosition(),
          s = new a.e(t.lineNumber, t.column - 1, t.lineNumber, t.column + 1);
        n[e] = new o.T4(s, "");
      }
      return [!0, n];
    }
    static deleteLeft(e, t, i, n, s) {
      if (this.isAutoClosingPairDelete(t.autoClosingDelete, t.autoClosingBrackets, t.autoClosingQuotes, t.autoClosingPairs.autoClosingPairsOpenByEnd, i, n, s)) return this._runAutoClosingPairDelete(t, i, n);
      const r = [];
      let a = 2 !== e;
      for (let e = 0, s = n.length; e < s; e++) {
        let s = c.getDeleteRange(n[e], i, t);
        s.isEmpty() ? (r[e] = null) : (s.startLineNumber !== s.endLineNumber && (a = !0), (r[e] = new o.T4(s, "")));
      }
      return [a, r];
    }
    static getDeleteRange(e, t, i) {
      if (!e.isEmpty()) return e;
      const o = e.getPosition();
      if (i.useTabStops && o.column > 1) {
        const e = t.getLineContent(o.lineNumber),
          r = n.LC(e),
          l = -1 === r ? e.length + 1 : r + 1;
        if (o.column <= l) {
          const e = s.io.visibleColumnFromColumn2(i, t, o),
            n = s.io.prevIndentTabStop(e, i.indentSize),
            r = s.io.columnFromVisibleColumn2(i, t, o.lineNumber, n);
          return new a.e(o.lineNumber, r, o.lineNumber, o.column);
        }
      }
      return a.e.fromPositions(c.getPositionAfterDeleteLeft(o, t), o);
    }
    static getPositionAfterDeleteLeft(e, t) {
      if (e.column > 1) {
        const i = n.oH(e.column - 1, t.getLineContent(e.lineNumber));
        return e.with(void 0, i + 1);
      }
      if (e.lineNumber > 1) {
        const i = e.lineNumber - 1;
        return new l.L(i, t.getLineMaxColumn(i));
      }
      return e;
    }
    static cut(e, t, i) {
      let n = [],
        r = null;
      i.sort((e, t) => l.L.compare(e.getStartPosition(), t.getEndPosition()));
      for (let s = 0, l = i.length; s < l; s++) {
        const l = i[s];
        if (l.isEmpty()) {
          if (e.emptySelectionClipboard) {
            let e,
              i,
              c,
              d,
              h = l.getPosition();
            h.lineNumber < t.getLineCount() ? ((e = h.lineNumber), (i = 1), (c = h.lineNumber + 1), (d = 1)) : h.lineNumber > 1 && (null == r ? void 0 : r.endLineNumber) !== h.lineNumber ? ((e = h.lineNumber - 1), (i = t.getLineMaxColumn(h.lineNumber - 1)), (c = h.lineNumber), (d = t.getLineMaxColumn(h.lineNumber))) : ((e = h.lineNumber), (i = 1), (c = h.lineNumber), (d = t.getLineMaxColumn(h.lineNumber)));
            let u = new a.e(e, i, c, d);
            ((r = u), u.isEmpty() ? (n[s] = null) : (n[s] = new o.T4(u, "")));
          } else n[s] = null;
        } else n[s] = new o.T4(l, "");
      }
      return new s.Tp(0, n, {
        shouldPushStackElementBefore: !0,
        shouldPushStackElementAfter: !0
      });
    }
  }
};