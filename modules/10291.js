module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    U: () => d
  });
  var n = i(97295),
    o = i(33181),
    s = i(24314),
    r = i(3860),
    a = i(83831);
  const l = Object.create(null);
  function c(e, t) {
    if (t <= 0) return "";
    l[e] || (l[e] = ["", e]);
    const i = l[e];
    for (let n = i.length; n <= t; n++) i[n] = i[n - 1] + e;
    return i[t];
  }
  class d {
    constructor(e, t) {
      ((this._opts = t), (this._selection = e), (this._selectionId = null), (this._useLastEditRangeForCursorEndPosition = !1), (this._selectionStartColumnStaysPut = !1));
    }
    static unshiftIndent(e, t, i, n, s) {
      const r = o.io.visibleColumnFromColumn(e, t, i);
      if (s) {
        const e = c(" ", n);
        return c(e, o.io.prevIndentTabStop(r, n) / n);
      }
      return c("\t", o.io.prevRenderTabStop(r, i) / i);
    }
    static shiftIndent(e, t, i, n, s) {
      const r = o.io.visibleColumnFromColumn(e, t, i);
      if (s) {
        const e = c(" ", n);
        return c(e, o.io.nextIndentTabStop(r, n) / n);
      }
      return c("\t", o.io.nextRenderTabStop(r, i) / i);
    }
    _addEditOperation(e, t, i) {
      this._useLastEditRangeForCursorEndPosition ? e.addTrackedEditOperation(t, i) : e.addEditOperation(t, i);
    }
    getEditOperations(e, t) {
      const i = this._selection.startLineNumber;
      let r = this._selection.endLineNumber;
      1 === this._selection.endColumn && i !== r && (r -= 1);
      const {
          tabSize: l,
          indentSize: h,
          insertSpaces: u
        } = this._opts,
        g = i === r;
      if (this._opts.useTabStops) {
        this._selection.isEmpty() && /^\s*$/.test(e.getLineContent(i)) && (this._useLastEditRangeForCursorEndPosition = !0);
        let c = 0,
          p = 0;
        for (let f = i; f <= r; f++, c = p) {
          p = 0;
          let r,
            m = e.getLineContent(f),
            v = n.LC(m);
          if ((!this._opts.isUnshift || (0 !== m.length && 0 !== v)) && (g || this._opts.isUnshift || 0 !== m.length)) {
            if ((-1 === v && (v = m.length), f > 1)) {
              if (o.io.visibleColumnFromColumn(m, v + 1, l) % h != 0 && e.isCheapToTokenize(f - 1)) {
                let t = a.zu.getEnterAction(this._opts.autoIndent, e, new s.e(f - 1, e.getLineMaxColumn(f - 1), f - 1, e.getLineMaxColumn(f - 1)));
                if (t) {
                  if (((p = c), t.appendText)) for (let e = 0, i = t.appendText.length; e < i && p < h && 32 === t.appendText.charCodeAt(e); e++) p++;
                  t.removeText && (p = Math.max(0, p - t.removeText));
                  for (let e = 0; e < p && 0 !== v && 32 === m.charCodeAt(v - 1); e++) v--;
                }
              }
            }
            (this._opts.isUnshift && 0 === v) || ((r = this._opts.isUnshift ? d.unshiftIndent(m, v + 1, l, h, u) : d.shiftIndent(m, v + 1, l, h, u)), this._addEditOperation(t, new s.e(f, 1, f, v + 1), r), f !== i || this._selection.isEmpty() || (this._selectionStartColumnStaysPut = this._selection.startColumn <= v + 1));
          }
        }
      } else {
        !this._opts.isUnshift && this._selection.isEmpty() && 0 === e.getLineLength(i) && (this._useLastEditRangeForCursorEndPosition = !0);
        const o = u ? c(" ", h) : "\t";
        for (let a = i; a <= r; a++) {
          const r = e.getLineContent(a);
          let l = n.LC(r);
          if ((!this._opts.isUnshift || (0 !== r.length && 0 !== l)) && (g || this._opts.isUnshift || 0 !== r.length) && (-1 === l && (l = r.length), !this._opts.isUnshift || 0 !== l)) if (this._opts.isUnshift) {
            l = Math.min(l, h);
            for (let e = 0; e < l; e++) {
              if (9 === r.charCodeAt(e)) {
                l = e + 1;
                break;
              }
            }
            this._addEditOperation(t, new s.e(a, 1, a, l + 1), "");
          } else (this._addEditOperation(t, new s.e(a, 1, a, 1), o), a !== i || this._selection.isEmpty() || (this._selectionStartColumnStaysPut = 1 === this._selection.startColumn));
        }
      }
      this._selectionId = t.trackSelection(this._selection);
    }
    computeCursorState(e, t) {
      if (this._useLastEditRangeForCursorEndPosition) {
        let e = t.getInverseEditOperations()[0];
        return new r.Y(e.range.endLineNumber, e.range.endColumn, e.range.endLineNumber, e.range.endColumn);
      }
      const i = t.getTrackedSelection(this._selectionId);
      if (this._selectionStartColumnStaysPut) {
        let e = this._selection.startColumn;
        return i.startColumn <= e ? i : 0 === i.getDirection() ? new r.Y(i.startLineNumber, e, i.endLineNumber, i.endColumn) : new r.Y(i.endLineNumber, i.endColumn, i.startLineNumber, e);
      }
      return i;
    }
  }
};