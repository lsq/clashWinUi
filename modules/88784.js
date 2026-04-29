module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    o: () => c
  });
  var n = i(33181),
    o = i(50187),
    s = i(24314),
    r = i(97295),
    a = i(3675);
  class l {
    constructor(e, t, i) {
      ((this._cursorPositionBrand = void 0), (this.lineNumber = e), (this.column = t), (this.leftoverVisibleColumns = i));
    }
  }
  class c {
    static leftPosition(e, t) {
      if (t.column > e.getLineMinColumn(t.lineNumber)) return t.delta(void 0, -r.HO(e.getLineContent(t.lineNumber), t.column - 1));
      if (t.lineNumber > 1) {
        const i = t.lineNumber - 1;
        return new o.L(i, e.getLineMaxColumn(i));
      }
      return t;
    }
    static leftPositionAtomicSoftTabs(e, t, i) {
      if (t.column <= e.getLineIndentColumn(t.lineNumber)) {
        const n = e.getLineMinColumn(t.lineNumber),
          s = e.getLineContent(t.lineNumber),
          r = a.l.atomicPosition(s, t.column - 1, i, 0);
        if (-1 !== r && r + 1 >= n) return new o.L(t.lineNumber, r + 1);
      }
      return this.leftPosition(e, t);
    }
    static left(e, t, i) {
      const n = e.stickyTabStops ? c.leftPositionAtomicSoftTabs(t, i, e.tabSize) : c.leftPosition(t, i);
      return new l(n.lineNumber, n.column, 0);
    }
    static moveLeft(e, t, i, n, o) {
      let s, r;
      if (i.hasSelection() && !n) ((s = i.selection.startLineNumber), (r = i.selection.startColumn));else {
        const n = i.position.delta(void 0, -(o - 1)),
          a = t.normalizePosition(c.clipPositionColumn(n, t), 0),
          l = c.left(e, t, a);
        ((s = l.lineNumber), (r = l.column));
      }
      return i.move(n, s, r, 0);
    }
    static clipPositionColumn(e, t) {
      return new o.L(e.lineNumber, c.clipRange(e.column, t.getLineMinColumn(e.lineNumber), t.getLineMaxColumn(e.lineNumber)));
    }
    static clipRange(e, t, i) {
      return e < t ? t : e > i ? i : e;
    }
    static rightPosition(e, t, i) {
      return (i < e.getLineMaxColumn(t) ? (i += r.vH(e.getLineContent(t), i - 1)) : t < e.getLineCount() && ((t += 1), (i = e.getLineMinColumn(t))), new o.L(t, i));
    }
    static rightPositionAtomicSoftTabs(e, t, i, n, s) {
      if (i < e.getLineIndentColumn(t)) {
        const s = e.getLineContent(t),
          r = a.l.atomicPosition(s, i - 1, n, 1);
        if (-1 !== r) return new o.L(t, r + 1);
      }
      return this.rightPosition(e, t, i);
    }
    static right(e, t, i) {
      const n = e.stickyTabStops ? c.rightPositionAtomicSoftTabs(t, i.lineNumber, i.column, e.tabSize, e.indentSize) : c.rightPosition(t, i.lineNumber, i.column);
      return new l(n.lineNumber, n.column, 0);
    }
    static moveRight(e, t, i, n, o) {
      let s, r;
      if (i.hasSelection() && !n) ((s = i.selection.endLineNumber), (r = i.selection.endColumn));else {
        const n = i.position.delta(void 0, o - 1),
          a = t.normalizePosition(c.clipPositionColumn(n, t), 1),
          l = c.right(e, t, a);
        ((s = l.lineNumber), (r = l.column));
      }
      return i.move(n, s, r, 0);
    }
    static vertical(e, t, i, o, s, r, a) {
      const c = n.io.visibleColumnFromColumn(t.getLineContent(i), o, e.tabSize) + s,
        d = t.getLineCount(),
        h = 1 === i && 1 === o,
        u = i === d && o === t.getLineMaxColumn(i),
        g = r < i ? h : u;
      return ((i = r) < 1 ? ((i = 1), (o = a ? t.getLineMinColumn(i) : Math.min(t.getLineMaxColumn(i), o))) : i > d ? ((i = d), (o = a ? t.getLineMaxColumn(i) : Math.min(t.getLineMaxColumn(i), o))) : (o = n.io.columnFromVisibleColumn2(e, t, i, c)), (s = g ? 0 : c - n.io.visibleColumnFromColumn(t.getLineContent(i), o, e.tabSize)), new l(i, o, s));
    }
    static down(e, t, i, n, o, s, r) {
      return this.vertical(e, t, i, n, o, i + s, r);
    }
    static moveDown(e, t, i, n, o) {
      let s, r;
      i.hasSelection() && !n ? ((s = i.selection.endLineNumber), (r = i.selection.endColumn)) : ((s = i.position.lineNumber), (r = i.position.column));
      let a = c.down(e, t, s, r, i.leftoverVisibleColumns, o, !0);
      return i.move(n, a.lineNumber, a.column, a.leftoverVisibleColumns);
    }
    static translateDown(e, t, i) {
      let r = i.selection,
        a = c.down(e, t, r.selectionStartLineNumber, r.selectionStartColumn, i.selectionStartLeftoverVisibleColumns, 1, !1),
        l = c.down(e, t, r.positionLineNumber, r.positionColumn, i.leftoverVisibleColumns, 1, !1);
      return new n.rS(new s.e(a.lineNumber, a.column, a.lineNumber, a.column), a.leftoverVisibleColumns, new o.L(l.lineNumber, l.column), l.leftoverVisibleColumns);
    }
    static up(e, t, i, n, o, s, r) {
      return this.vertical(e, t, i, n, o, i - s, r);
    }
    static moveUp(e, t, i, n, o) {
      let s, r;
      i.hasSelection() && !n ? ((s = i.selection.startLineNumber), (r = i.selection.startColumn)) : ((s = i.position.lineNumber), (r = i.position.column));
      let a = c.up(e, t, s, r, i.leftoverVisibleColumns, o, !0);
      return i.move(n, a.lineNumber, a.column, a.leftoverVisibleColumns);
    }
    static translateUp(e, t, i) {
      let r = i.selection,
        a = c.up(e, t, r.selectionStartLineNumber, r.selectionStartColumn, i.selectionStartLeftoverVisibleColumns, 1, !1),
        l = c.up(e, t, r.positionLineNumber, r.positionColumn, i.leftoverVisibleColumns, 1, !1);
      return new n.rS(new s.e(a.lineNumber, a.column, a.lineNumber, a.column), a.leftoverVisibleColumns, new o.L(l.lineNumber, l.column), l.leftoverVisibleColumns);
    }
    static _isBlankLine(e, t) {
      return 0 === e.getLineFirstNonWhitespaceColumn(t);
    }
    static moveToPrevBlankLine(e, t, i, n) {
      let o = i.position.lineNumber;
      for (; o > 1 && this._isBlankLine(t, o);) o--;
      for (; o > 1 && !this._isBlankLine(t, o);) o--;
      return i.move(n, o, t.getLineMinColumn(o), 0);
    }
    static moveToNextBlankLine(e, t, i, n) {
      const o = t.getLineCount();
      let s = i.position.lineNumber;
      for (; s < o && this._isBlankLine(t, s);) s++;
      for (; s < o && !this._isBlankLine(t, s);) s++;
      return i.move(n, s, t.getLineMinColumn(s), 0);
    }
    static moveToBeginningOfLine(e, t, i, n) {
      let o,
        s = i.position.lineNumber,
        r = t.getLineMinColumn(s),
        a = t.getLineFirstNonWhitespaceColumn(s) || r;
      return ((o = i.position.column === a ? r : a), i.move(n, s, o, 0));
    }
    static moveToEndOfLine(e, t, i, n, o) {
      let s = i.position.lineNumber,
        r = t.getLineMaxColumn(s);
      return i.move(n, s, r, o ? 1073741824 - r : 0);
    }
    static moveToBeginningOfBuffer(e, t, i, n) {
      return i.move(n, 1, 1, 0);
    }
    static moveToEndOfBuffer(e, t, i, n) {
      let o = t.getLineCount(),
        s = t.getLineMaxColumn(o);
      return i.move(n, o, s, 0);
    }
  }
};