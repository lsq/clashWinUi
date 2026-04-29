module.exports = (e, t, i) => {
  "use strict";

  i.r(t);
  var n = i(22258),
    o = i(16830),
    s = i(24314),
    r = i(29102),
    a = i(69386),
    l = i(50187),
    c = i(3860),
    d = i(83831);
  class h {
    constructor(e, t) {
      ((this._selection = e), (this._insertSpace = t), (this._usedEndToken = null));
    }
    static _haystackHasNeedleAtOffset(e, t, i) {
      if (i < 0) return !1;
      const n = t.length;
      if (i + n > e.length) return !1;
      for (let o = 0; o < n; o++) {
        const n = e.charCodeAt(i + o),
          s = t.charCodeAt(o);
        if (n !== s && !((n >= 65 && n <= 90 && n + 32 === s) || (s >= 65 && s <= 90 && s + 32 === n))) return !1;
      }
      return !0;
    }
    _createOperationsForBlockComment(e, t, i, n, o, r) {
      const a = e.startLineNumber,
        l = e.startColumn,
        c = e.endLineNumber,
        d = e.endColumn,
        u = o.getLineContent(a),
        g = o.getLineContent(c);
      let p,
        f = u.lastIndexOf(t, l - 1 + t.length),
        m = g.indexOf(i, d - 1 - i.length);
      if (-1 !== f && -1 !== m) if (a === c) {
        u.substring(f + t.length, m).indexOf(i) >= 0 && ((f = -1), (m = -1));
      } else {
        const e = u.substring(f + t.length),
          n = g.substring(0, m);
        (e.indexOf(i) >= 0 || n.indexOf(i) >= 0) && ((f = -1), (m = -1));
      }
      -1 !== f && -1 !== m ? (n && f + t.length < u.length && 32 === u.charCodeAt(f + t.length) && (t += " "), n && m > 0 && 32 === g.charCodeAt(m - 1) && ((i = " " + i), (m -= 1)), (p = h._createRemoveBlockCommentOperations(new s.e(a, f + t.length + 1, c, m + 1), t, i))) : ((p = h._createAddBlockCommentOperations(e, t, i, this._insertSpace)), (this._usedEndToken = 1 === p.length ? i : null));
      for (const e of p) r.addTrackedEditOperation(e.range, e.text);
    }
    static _createRemoveBlockCommentOperations(e, t, i) {
      let n = [];
      return (s.e.isEmpty(e) ? n.push(a.h.delete(new s.e(e.startLineNumber, e.startColumn - t.length, e.endLineNumber, e.endColumn + i.length))) : (n.push(a.h.delete(new s.e(e.startLineNumber, e.startColumn - t.length, e.startLineNumber, e.startColumn))), n.push(a.h.delete(new s.e(e.endLineNumber, e.endColumn, e.endLineNumber, e.endColumn + i.length)))), n);
    }
    static _createAddBlockCommentOperations(e, t, i, n) {
      let o = [];
      return (s.e.isEmpty(e) ? o.push(a.h.replace(new s.e(e.startLineNumber, e.startColumn, e.endLineNumber, e.endColumn), t + "  " + i)) : (o.push(a.h.insert(new l.L(e.startLineNumber, e.startColumn), t + (n ? " " : ""))), o.push(a.h.insert(new l.L(e.endLineNumber, e.endColumn), (n ? " " : "") + i))), o);
    }
    getEditOperations(e, t) {
      const i = this._selection.startLineNumber,
        n = this._selection.startColumn;
      e.tokenizeIfCheap(i);
      const o = e.getLanguageIdAtPosition(i, n),
        s = d.zu.getComments(o);
      s && s.blockCommentStartToken && s.blockCommentEndToken && this._createOperationsForBlockComment(this._selection, s.blockCommentStartToken, s.blockCommentEndToken, this._insertSpace, e, t);
    }
    computeCursorState(e, t) {
      const i = t.getInverseEditOperations();
      if (2 === i.length) {
        const e = i[0],
          t = i[1];
        return new c.Y(e.range.endLineNumber, e.range.endColumn, t.range.startLineNumber, t.range.startColumn);
      }
      {
        const e = i[0].range,
          t = this._usedEndToken ? -this._usedEndToken.length - 1 : 0;
        return new c.Y(e.endLineNumber, e.endColumn + t, e.endLineNumber, e.endColumn + t);
      }
    }
  }
  var u = i(97295);
  class g {
    constructor(e, t, i, n, o, s) {
      ((this._selection = e), (this._tabSize = t), (this._type = i), (this._insertSpace = n), (this._selectionId = null), (this._deltaColumn = 0), (this._moveEndPositionDown = !1), (this._ignoreEmptyLines = o), (this._ignoreFirstLine = s || !1));
    }
    static _gatherPreflightCommentStrings(e, t, i) {
      e.tokenizeIfCheap(t);
      const n = e.getLanguageIdAtPosition(t, 1),
        o = d.zu.getComments(n),
        s = o ? o.lineCommentToken : null;
      if (!s) return null;
      let r = [];
      for (let e = 0, n = i - t + 1; e < n; e++) r[e] = {
        ignore: !1,
        commentStr: s,
        commentStrOffset: 0,
        commentStrLength: s.length
      };
      return r;
    }
    static _analyzeLines(e, t, i, n, o, s, r) {
      let a,
        l = !0;
      a = 0 === e || 1 !== e;
      for (let c = 0, d = n.length; c < d; c++) {
        const d = n[c],
          g = o + c;
        if (g === o && r) {
          d.ignore = !0;
          continue;
        }
        const p = i.getLineContent(g),
          f = u.LC(p);
        if (-1 !== f) {
          if (((l = !1), (d.ignore = !1), (d.commentStrOffset = f), a && !h._haystackHasNeedleAtOffset(p, d.commentStr, f) && (0 === e ? (a = !1) : 1 === e || (d.ignore = !0)), a && t)) {
            const e = f + d.commentStrLength;
            e < p.length && 32 === p.charCodeAt(e) && (d.commentStrLength += 1);
          }
        } else ((d.ignore = s), (d.commentStrOffset = p.length));
      }
      if (0 === e && l) {
        a = !1;
        for (let e = 0, t = n.length; e < t; e++) n[e].ignore = !1;
      }
      return {
        supported: !0,
        shouldRemoveComments: a,
        lines: n
      };
    }
    static _gatherPreflightData(e, t, i, n, o, s, r) {
      const a = g._gatherPreflightCommentStrings(i, n, o);
      return null === a ? {
        supported: !1
      } : g._analyzeLines(e, t, i, a, n, s, r);
    }
    _executeLineComments(e, t, i, n) {
      let o;
      i.shouldRemoveComments ? (o = g._createRemoveLineCommentsOperations(i.lines, n.startLineNumber)) : (g._normalizeInsertionPoint(e, i.lines, n.startLineNumber, this._tabSize), (o = this._createAddLineCommentsOperations(i.lines, n.startLineNumber)));
      const r = new l.L(n.positionLineNumber, n.positionColumn);
      for (let i = 0, n = o.length; i < n; i++) if ((t.addEditOperation(o[i].range, o[i].text), s.e.isEmpty(o[i].range) && s.e.getStartPosition(o[i].range).equals(r))) {
        e.getLineContent(r.lineNumber).length + 1 === r.column && (this._deltaColumn = (o[i].text || "").length);
      }
      this._selectionId = t.trackSelection(n);
    }
    _attemptRemoveBlockComment(e, t, i, n) {
      let o = t.startLineNumber,
        r = t.endLineNumber,
        a = n.length + Math.max(e.getLineFirstNonWhitespaceColumn(t.startLineNumber), t.startColumn),
        l = e.getLineContent(o).lastIndexOf(i, a - 1),
        c = e.getLineContent(r).indexOf(n, t.endColumn - 1 - i.length);
      return (-1 !== l && -1 === c && ((c = e.getLineContent(o).indexOf(n, l + i.length)), (r = o)), -1 === l && -1 !== c && ((l = e.getLineContent(r).lastIndexOf(i, c)), (o = r)), !t.isEmpty() || (-1 !== l && -1 !== c) || ((l = e.getLineContent(o).indexOf(i)), -1 !== l && (c = e.getLineContent(o).indexOf(n, l + i.length))), -1 !== l && 32 === e.getLineContent(o).charCodeAt(l + i.length) && (i += " "), -1 !== c && 32 === e.getLineContent(r).charCodeAt(c - 1) && ((n = " " + n), (c -= 1)), -1 !== l && -1 !== c ? h._createRemoveBlockCommentOperations(new s.e(o, l + i.length + 1, r, c + 1), i, n) : null);
    }
    _executeBlockComment(e, t, i) {
      e.tokenizeIfCheap(i.startLineNumber);
      let n = e.getLanguageIdAtPosition(i.startLineNumber, 1),
        o = d.zu.getComments(n);
      if (!o || !o.blockCommentStartToken || !o.blockCommentEndToken) return;
      const r = o.blockCommentStartToken,
        a = o.blockCommentEndToken;
      let l = this._attemptRemoveBlockComment(e, i, r, a);
      if (!l) {
        if (i.isEmpty()) {
          const t = e.getLineContent(i.startLineNumber);
          let n = u.LC(t);
          (-1 === n && (n = t.length), (l = h._createAddBlockCommentOperations(new s.e(i.startLineNumber, n + 1, i.startLineNumber, t.length + 1), r, a, this._insertSpace)));
        } else l = h._createAddBlockCommentOperations(new s.e(i.startLineNumber, e.getLineFirstNonWhitespaceColumn(i.startLineNumber), i.endLineNumber, e.getLineMaxColumn(i.endLineNumber)), r, a, this._insertSpace);
        1 === l.length && (this._deltaColumn = r.length + 1);
      }
      this._selectionId = t.trackSelection(i);
      for (const e of l) t.addEditOperation(e.range, e.text);
    }
    getEditOperations(e, t) {
      let i = this._selection;
      if (((this._moveEndPositionDown = !1), i.startLineNumber === i.endLineNumber && this._ignoreFirstLine)) return (t.addEditOperation(new s.e(i.startLineNumber, e.getLineMaxColumn(i.startLineNumber), i.startLineNumber + 1, 1), i.startLineNumber === e.getLineCount() ? "" : "\n"), void (this._selectionId = t.trackSelection(i)));
      i.startLineNumber < i.endLineNumber && 1 === i.endColumn && ((this._moveEndPositionDown = !0), (i = i.setEndPosition(i.endLineNumber - 1, e.getLineMaxColumn(i.endLineNumber - 1))));
      const n = g._gatherPreflightData(this._type, this._insertSpace, e, i.startLineNumber, i.endLineNumber, this._ignoreEmptyLines, this._ignoreFirstLine);
      return n.supported ? this._executeLineComments(e, t, n, i) : this._executeBlockComment(e, t, i);
    }
    computeCursorState(e, t) {
      let i = t.getTrackedSelection(this._selectionId);
      return (this._moveEndPositionDown && (i = i.setEndPosition(i.endLineNumber + 1, 1)), new c.Y(i.selectionStartLineNumber, i.selectionStartColumn + this._deltaColumn, i.positionLineNumber, i.positionColumn + this._deltaColumn));
    }
    static _createRemoveLineCommentsOperations(e, t) {
      let i = [];
      for (let n = 0, o = e.length; n < o; n++) {
        const o = e[n];
        o.ignore || i.push(a.h.delete(new s.e(t + n, o.commentStrOffset + 1, t + n, o.commentStrOffset + o.commentStrLength + 1)));
      }
      return i;
    }
    _createAddLineCommentsOperations(e, t) {
      let i = [];
      const n = this._insertSpace ? " " : "";
      for (let o = 0, s = e.length; o < s; o++) {
        const s = e[o];
        s.ignore || i.push(a.h.insert(new l.L(t + o, s.commentStrOffset + 1), s.commentStr + n));
      }
      return i;
    }
    static nextVisibleColumn(e, t, i, n) {
      return i ? e + (t - (e % t)) : e + n;
    }
    static _normalizeInsertionPoint(e, t, i, n) {
      let o,
        s,
        r = 1073741824;
      for (let o = 0, s = t.length; o < s; o++) {
        if (t[o].ignore) continue;
        const s = e.getLineContent(i + o);
        let a = 0;
        for (let e = 0, i = t[o].commentStrOffset; a < r && e < i; e++) a = g.nextVisibleColumn(a, n, 9 === s.charCodeAt(e), 1);
        a < r && (r = a);
      }
      r = Math.floor(r / n) * n;
      for (let a = 0, l = t.length; a < l; a++) {
        if (t[a].ignore) continue;
        const l = e.getLineContent(i + a);
        let c = 0;
        for (o = 0, s = t[a].commentStrOffset; c < r && o < s; o++) c = g.nextVisibleColumn(c, n, 9 === l.charCodeAt(o), 1);
        t[a].commentStrOffset = c > r ? o - 1 : o;
      }
    }
  }
  var p = i(63580),
    f = i(84144);
  class m extends o.R6 {
    constructor(e, t) {
      (super(t), (this._type = e));
    }
    run(e, t) {
      if (!t.hasModel()) return;
      const i = [],
        n = t.getModel().getOptions(),
        o = t.getOption(19),
        r = t.getSelections().map((e, t) => ({
          selection: e,
          index: t,
          ignoreFirstLine: !1
        }));
      r.sort((e, t) => s.e.compareRangesUsingStarts(e.selection, t.selection));
      let a = r[0];
      for (let e = 1; e < r.length; e++) {
        const t = r[e];
        a.selection.endLineNumber === t.selection.startLineNumber && (a.index < t.index ? (t.ignoreFirstLine = !0) : ((a.ignoreFirstLine = !0), (a = t)));
      }
      for (const e of r) i.push(new g(e.selection, n.tabSize, this._type, o.insertSpace, o.ignoreEmptyLines, e.ignoreFirstLine));
      (t.pushUndoStop(), t.executeCommands(this.id, i), t.pushUndoStop());
    }
  }
  class v extends o.R6 {
    constructor() {
      super({
        id: "editor.action.blockComment",
        label: p.N("comment.block", "Toggle Block Comment"),
        alias: "Toggle Block Comment",
        precondition: r.u.writable,
        kbOpts: {
          kbExpr: r.u.editorTextFocus,
          primary: 1567,
          linux: {
            primary: 3103
          },
          weight: 100
        },
        menuOpts: {
          menuId: f.eH.MenubarEditMenu,
          group: "5_insert",
          title: p.N({
            key: "miToggleBlockComment",
            comment: ["&& denotes a mnemonic"]
          }, "Toggle &&Block Comment"),
          order: 2
        }
      });
    }
    run(e, t) {
      if (!t.hasModel()) return;
      const i = t.getOption(19),
        n = [],
        o = t.getSelections();
      for (const e of o) n.push(new h(e, i.insertSpace));
      (t.pushUndoStop(), t.executeCommands(this.id, n), t.pushUndoStop());
    }
  }
  ((0, o.Qr)(class extends m {
    constructor() {
      super(0, {
        id: "editor.action.commentLine",
        label: p.N("comment.line", "Toggle Line Comment"),
        alias: "Toggle Line Comment",
        precondition: r.u.writable,
        kbOpts: {
          kbExpr: r.u.editorTextFocus,
          primary: 2133,
          weight: 100
        },
        menuOpts: {
          menuId: f.eH.MenubarEditMenu,
          group: "5_insert",
          title: p.N({
            key: "miToggleLineComment",
            comment: ["&& denotes a mnemonic"]
          }, "&&Toggle Line Comment"),
          order: 1
        }
      });
    }
  }), (0, o.Qr)(class extends m {
    constructor() {
      super(1, {
        id: "editor.action.addCommentLine",
        label: p.N("comment.line.add", "Add Line Comment"),
        alias: "Add Line Comment",
        precondition: r.u.writable,
        kbOpts: {
          kbExpr: r.u.editorTextFocus,
          primary: (0, n.gx)(2089, 2081),
          weight: 100
        }
      });
    }
  }), (0, o.Qr)(class extends m {
    constructor() {
      super(2, {
        id: "editor.action.removeCommentLine",
        label: p.N("comment.line.remove", "Remove Line Comment"),
        alias: "Remove Line Comment",
        precondition: r.u.writable,
        kbOpts: {
          kbExpr: r.u.editorTextFocus,
          primary: (0, n.gx)(2089, 2099),
          weight: 100
        }
      });
    }
  }), (0, o.Qr)(v));
};