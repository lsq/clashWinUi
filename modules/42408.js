module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    AbstractCaseAction: () => j,
    AbstractDeleteAllToBoundaryAction: () => B,
    AbstractSortLinesAction: () => D,
    DeleteAllLeftAction: () => V,
    DeleteAllRightAction: () => W,
    DeleteDuplicateLinesAction: () => T,
    DeleteLinesAction: () => A,
    DuplicateSelectionAction: () => L,
    IndentLinesAction: () => O,
    InsertLineAfterAction: () => F,
    InsertLineBeforeAction: () => R,
    JoinLinesAction: () => H,
    LowerCaseAction: () => $,
    SnakeCaseAction: () => Z,
    SortLinesAscendingAction: () => I,
    SortLinesDescendingAction: () => E,
    TitleCaseAction: () => q,
    TransposeAction: () => z,
    TrimTrailingWhitespaceAction: () => M,
    UpperCaseAction: () => U
  }));
  var n = i(22258),
    o = i(18728),
    s = i(16830),
    r = i(61329),
    a = i(97295),
    l = i(69386),
    c = i(24314);
  class d {
    constructor(e, t) {
      ((this._selection = e), (this._cursors = t), (this._selectionId = null));
    }
    getEditOperations(e, t) {
      let i = (function (e, t) {
        t.sort((e, t) => e.lineNumber === t.lineNumber ? e.column - t.column : e.lineNumber - t.lineNumber);
        for (let e = t.length - 2; e >= 0; e--) t[e].lineNumber === t[e + 1].lineNumber && t.splice(e, 1);
        let i = [],
          n = 0,
          o = 0,
          s = t.length;
        for (let r = 1, d = e.getLineCount(); r <= d; r++) {
          let d = e.getLineContent(r),
            h = d.length + 1,
            u = 0;
          if (o < s && t[o].lineNumber === r && ((u = t[o].column), o++, u === h)) continue;
          if (0 === d.length) continue;
          let g = a.ow(d),
            p = 0;
          if (-1 === g) p = 1;else {
            if (g === d.length - 1) continue;
            p = g + 2;
          }
          ((p = Math.max(u, p)), (i[n++] = l.h.delete(new c.e(r, p, r, h))));
        }
        return i;
      })(e, this._cursors);
      for (let e = 0, n = i.length; e < n; e++) {
        let n = i[e];
        t.addEditOperation(n.range, n.text);
      }
      this._selectionId = t.trackSelection(this._selection);
    }
    computeCursorState(e, t) {
      return t.getTrackedSelection(this._selectionId);
    }
  }
  var h = i(23582),
    u = i(50187),
    g = i(3860),
    p = i(29102);
  class f {
    constructor(e, t, i) {
      ((this._selection = e), (this._isCopyingDown = t), (this._noop = i || !1), (this._selectionDirection = 0), (this._selectionId = null), (this._startLineNumberDelta = 0), (this._endLineNumberDelta = 0));
    }
    getEditOperations(e, t) {
      let i = this._selection;
      ((this._startLineNumberDelta = 0), (this._endLineNumberDelta = 0), i.startLineNumber < i.endLineNumber && 1 === i.endColumn && ((this._endLineNumberDelta = 1), (i = i.setEndPosition(i.endLineNumber - 1, e.getLineMaxColumn(i.endLineNumber - 1)))));
      let n = [];
      for (let t = i.startLineNumber; t <= i.endLineNumber; t++) n.push(e.getLineContent(t));
      const o = n.join("\n");
      ("" === o && this._isCopyingDown && (this._startLineNumberDelta++, this._endLineNumberDelta++), this._noop ? t.addEditOperation(new c.e(i.endLineNumber, e.getLineMaxColumn(i.endLineNumber), i.endLineNumber + 1, 1), i.endLineNumber === e.getLineCount() ? "" : "\n") : this._isCopyingDown ? t.addEditOperation(new c.e(i.startLineNumber, 1, i.startLineNumber, 1), o + "\n") : t.addEditOperation(new c.e(i.endLineNumber, e.getLineMaxColumn(i.endLineNumber), i.endLineNumber, e.getLineMaxColumn(i.endLineNumber)), "\n" + o), (this._selectionId = t.trackSelection(i)), (this._selectionDirection = this._selection.getDirection()));
    }
    computeCursorState(e, t) {
      let i = t.getTrackedSelection(this._selectionId);
      if (0 !== this._startLineNumberDelta || 0 !== this._endLineNumberDelta) {
        let e = i.startLineNumber,
          t = i.startColumn,
          n = i.endLineNumber,
          o = i.endColumn;
        (0 !== this._startLineNumberDelta && ((e += this._startLineNumberDelta), (t = 1)), 0 !== this._endLineNumberDelta && ((n += this._endLineNumberDelta), (o = 1)), (i = g.Y.createWithDirection(e, t, n, o, this._selectionDirection)));
      }
      return i;
    }
  }
  var m = i(10291),
    v = i(97354),
    _ = i(83831),
    b = i(51491);
  class w {
    constructor(e, t, i) {
      ((this._selection = e), (this._isMovingDown = t), (this._autoIndent = i), (this._selectionId = null), (this._moveEndLineSelectionShrink = !1));
    }
    getEditOperations(e, t) {
      let i = e.getLineCount();
      if (this._isMovingDown && this._selection.endLineNumber === i) return void (this._selectionId = t.trackSelection(this._selection));
      if (!this._isMovingDown && 1 === this._selection.startLineNumber) return void (this._selectionId = t.trackSelection(this._selection));
      this._moveEndPositionDown = !1;
      let n = this._selection;
      n.startLineNumber < n.endLineNumber && 1 === n.endColumn && ((this._moveEndPositionDown = !0), (n = n.setEndPosition(n.endLineNumber - 1, e.getLineMaxColumn(n.endLineNumber - 1))));
      const {
        tabSize: o,
        indentSize: s,
        insertSpaces: r
      } = e.getOptions();
      let l = this.buildIndentConverter(o, s, r),
        d = {
          getLineTokens: t => e.getLineTokens(t),
          getLanguageId: () => e.getLanguageId(),
          getLanguageIdAtPosition: (t, i) => e.getLanguageIdAtPosition(t, i),
          getLineContent: null
        };
      if (n.startLineNumber === n.endLineNumber && 1 === e.getLineMaxColumn(n.startLineNumber)) {
        let i = n.startLineNumber,
          o = this._isMovingDown ? i + 1 : i - 1;
        (1 === e.getLineMaxColumn(o) ? t.addEditOperation(new c.e(1, 1, 1, 1), null) : (t.addEditOperation(new c.e(i, 1, i, 1), e.getLineContent(o)), t.addEditOperation(new c.e(o, 1, o, e.getLineMaxColumn(o)), null)), (n = new g.Y(o, 1, o, 1)));
      } else {
        let i, s;
        if (this._isMovingDown) {
          ((i = n.endLineNumber + 1), (s = e.getLineContent(i)), t.addEditOperation(new c.e(i - 1, e.getLineMaxColumn(i - 1), i, e.getLineMaxColumn(i)), null));
          let h = s;
          if (this.shouldAutoIndent(e, n)) {
            let u = this.matchEnterRule(e, l, o, i, n.startLineNumber - 1);
            if (null !== u) {
              let t = a.V8(e.getLineContent(i)),
                n = u + b.Y(t, o),
                l = b.J(n, o, r);
              h = l + this.trimLeft(s);
            } else {
              d.getLineContent = t => t === n.startLineNumber ? e.getLineContent(i) : e.getLineContent(t);
              let t = _.zu.getGoodIndentForLine(this._autoIndent, d, e.getLanguageIdAtPosition(i, 1), n.startLineNumber, l);
              if (null !== t) {
                let n = a.V8(e.getLineContent(i)),
                  l = b.Y(t, o);
                if (l !== b.Y(n, o)) {
                  let e = b.J(l, o, r);
                  h = e + this.trimLeft(s);
                }
              }
            }
            t.addEditOperation(new c.e(n.startLineNumber, 1, n.startLineNumber, 1), h + "\n");
            let g = this.matchEnterRuleMovingDown(e, l, o, n.startLineNumber, i, h);
            if (null !== g) 0 !== g && this.getIndentEditsOfMovingBlock(e, t, n, o, r, g);else {
              d.getLineContent = t => t === n.startLineNumber ? h : t >= n.startLineNumber + 1 && t <= n.endLineNumber + 1 ? e.getLineContent(t - 1) : e.getLineContent(t);
              let s = _.zu.getGoodIndentForLine(this._autoIndent, d, e.getLanguageIdAtPosition(i, 1), n.startLineNumber + 1, l);
              if (null !== s) {
                const i = a.V8(e.getLineContent(n.startLineNumber)),
                  l = b.Y(s, o),
                  c = b.Y(i, o);
                if (l !== c) {
                  const i = l - c;
                  this.getIndentEditsOfMovingBlock(e, t, n, o, r, i);
                }
              }
            }
          } else t.addEditOperation(new c.e(n.startLineNumber, 1, n.startLineNumber, 1), h + "\n");
        } else if (((i = n.startLineNumber - 1), (s = e.getLineContent(i)), t.addEditOperation(new c.e(i, 1, i + 1, 1), null), t.addEditOperation(new c.e(n.endLineNumber, e.getLineMaxColumn(n.endLineNumber), n.endLineNumber, e.getLineMaxColumn(n.endLineNumber)), "\n" + s), this.shouldAutoIndent(e, n))) {
          d.getLineContent = t => t === i ? e.getLineContent(n.startLineNumber) : e.getLineContent(t);
          let s = this.matchEnterRule(e, l, o, n.startLineNumber, n.startLineNumber - 2);
          if (null !== s) 0 !== s && this.getIndentEditsOfMovingBlock(e, t, n, o, r, s);else {
            let s = _.zu.getGoodIndentForLine(this._autoIndent, d, e.getLanguageIdAtPosition(n.startLineNumber, 1), i, l);
            if (null !== s) {
              let i = a.V8(e.getLineContent(n.startLineNumber)),
                l = b.Y(s, o),
                c = b.Y(i, o);
              if (l !== c) {
                let i = l - c;
                this.getIndentEditsOfMovingBlock(e, t, n, o, r, i);
              }
            }
          }
        }
      }
      this._selectionId = t.trackSelection(n);
    }
    buildIndentConverter(e, t, i) {
      return {
        shiftIndent: n => m.U.shiftIndent(n, n.length + 1, e, t, i),
        unshiftIndent: n => m.U.unshiftIndent(n, n.length + 1, e, t, i)
      };
    }
    parseEnterResult(e, t, i, n, o) {
      if (o) {
        let s = o.indentation;
        o.indentAction === v.wU.None || o.indentAction === v.wU.Indent ? (s = o.indentation + o.appendText) : o.indentAction === v.wU.IndentOutdent ? (s = o.indentation) : o.indentAction === v.wU.Outdent && (s = t.unshiftIndent(o.indentation) + o.appendText);
        let r = e.getLineContent(n);
        if (this.trimLeft(r).indexOf(this.trimLeft(s)) >= 0) {
          let o = a.V8(e.getLineContent(n)),
            r = a.V8(s),
            l = _.zu.getIndentMetadata(e, n);
          return (null !== l && 2 & l && (r = t.unshiftIndent(r)), b.Y(r, i) - b.Y(o, i));
        }
      }
      return null;
    }
    matchEnterRuleMovingDown(e, t, i, n, o, s) {
      if (a.ow(s) >= 0) {
        let s = e.getLineMaxColumn(o),
          r = _.zu.getEnterAction(this._autoIndent, e, new c.e(o, s, o, s));
        return this.parseEnterResult(e, t, i, n, r);
      }
      {
        let o = n - 1;
        for (; o >= 1;) {
          let t = e.getLineContent(o);
          if (a.ow(t) >= 0) break;
          o--;
        }
        if (o < 1 || n > e.getLineCount()) return null;
        let s = e.getLineMaxColumn(o),
          r = _.zu.getEnterAction(this._autoIndent, e, new c.e(o, s, o, s));
        return this.parseEnterResult(e, t, i, n, r);
      }
    }
    matchEnterRule(e, t, i, n, o, s) {
      let r = o;
      for (; r >= 1;) {
        let t;
        if (((t = r === o && void 0 !== s ? s : e.getLineContent(r)), a.ow(t) >= 0)) break;
        r--;
      }
      if (r < 1 || n > e.getLineCount()) return null;
      let l = e.getLineMaxColumn(r),
        d = _.zu.getEnterAction(this._autoIndent, e, new c.e(r, l, r, l));
      return this.parseEnterResult(e, t, i, n, d);
    }
    trimLeft(e) {
      return e.replace(/^\s+/, "");
    }
    shouldAutoIndent(e, t) {
      if (this._autoIndent < 4) return !1;
      if (!e.isCheapToTokenize(t.startLineNumber)) return !1;
      let i = e.getLanguageIdAtPosition(t.startLineNumber, 1);
      return (i === e.getLanguageIdAtPosition(t.endLineNumber, 1) && null !== _.zu.getIndentRulesSupport(i));
    }
    getIndentEditsOfMovingBlock(e, t, i, n, o, s) {
      for (let r = i.startLineNumber; r <= i.endLineNumber; r++) {
        let l = e.getLineContent(r),
          d = a.V8(l),
          h = b.Y(d, n) + s,
          u = b.J(h, n, o);
        u !== d && (t.addEditOperation(new c.e(r, 1, r, d.length + 1), u), r === i.endLineNumber && i.endColumn <= d.length + 1 && "" === u && (this._moveEndLineSelectionShrink = !0));
      }
    }
    computeCursorState(e, t) {
      let i = t.getTrackedSelection(this._selectionId);
      return (this._moveEndPositionDown && (i = i.setEndPosition(i.endLineNumber + 1, 1)), this._moveEndLineSelectionShrink && i.startLineNumber < i.endLineNumber && (i = i.setEndPosition(i.endLineNumber, 2)), i);
    }
  }
  class y {
    constructor(e, t) {
      ((this.selection = e), (this.descending = t), (this.selectionId = null));
    }
    static getCollator() {
      return (y._COLLATOR || (y._COLLATOR = new Intl.Collator()), y._COLLATOR);
    }
    getEditOperations(e, t) {
      let i = (function (e, t, i) {
        let n = C(e, t, i);
        if (!n) return null;
        return l.h.replace(new c.e(n.startLineNumber, 1, n.endLineNumber, e.getLineMaxColumn(n.endLineNumber)), n.after.join("\n"));
      })(e, this.selection, this.descending);
      (i && t.addEditOperation(i.range, i.text), (this.selectionId = t.trackSelection(this.selection)));
    }
    computeCursorState(e, t) {
      return t.getTrackedSelection(this.selectionId);
    }
    static canRun(e, t, i) {
      if (null === e) return !1;
      let n = C(e, t, i);
      if (!n) return !1;
      for (let e = 0, t = n.before.length; e < t; e++) if (n.before[e] !== n.after[e]) return !0;
      return !1;
    }
  }
  function C(e, t, i) {
    let n = t.startLineNumber,
      o = t.endLineNumber;
    if ((1 === t.endColumn && o--, n >= o)) return null;
    let s = [];
    for (let t = n; t <= o; t++) s.push(e.getLineContent(t));
    let r = s.slice(0);
    return (r.sort(y.getCollator().compare), !0 === i && (r = r.reverse()), {
      startLineNumber: n,
      endLineNumber: o,
      before: s,
      after: r
    });
  }
  y._COLLATOR = null;
  var x = i(63580),
    S = i(84144);
  class k extends s.R6 {
    constructor(e, t) {
      (super(t), (this.down = e));
    }
    run(e, t) {
      if (!t.hasModel()) return;
      const i = t.getSelections().map((e, t) => ({
        selection: e,
        index: t,
        ignore: !1
      }));
      i.sort((e, t) => c.e.compareRangesUsingStarts(e.selection, t.selection));
      let n = i[0];
      for (let e = 1; e < i.length; e++) {
        const t = i[e];
        n.selection.endLineNumber === t.selection.startLineNumber && (n.index < t.index ? (t.ignore = !0) : ((n.ignore = !0), (n = t)));
      }
      const o = [];
      for (const e of i) o.push(new f(e.selection, this.down, e.ignore));
      (t.pushUndoStop(), t.executeCommands(this.id, o), t.pushUndoStop());
    }
  }
  class L extends s.R6 {
    constructor() {
      super({
        id: "editor.action.duplicateSelection",
        label: x.N("duplicateSelection", "Duplicate Selection"),
        alias: "Duplicate Selection",
        precondition: p.u.writable,
        menuOpts: {
          menuId: S.eH.MenubarSelectionMenu,
          group: "2_line",
          title: x.N({
            key: "miDuplicateSelection",
            comment: ["&& denotes a mnemonic"]
          }, "&&Duplicate Selection"),
          order: 5
        }
      });
    }
    run(e, t, i) {
      if (!t.hasModel()) return;
      const n = [],
        o = t.getSelections(),
        s = t.getModel();
      for (const e of o) if (e.isEmpty()) n.push(new f(e, !0));else {
        const t = new g.Y(e.endLineNumber, e.endColumn, e.endLineNumber, e.endColumn);
        n.push(new r.OY(t, s.getValueInRange(e)));
      }
      (t.pushUndoStop(), t.executeCommands(this.id, n), t.pushUndoStop());
    }
  }
  class N extends s.R6 {
    constructor(e, t) {
      (super(t), (this.down = e));
    }
    run(e, t) {
      let i = [],
        n = t.getSelections() || [];
      const o = t.getOption(9);
      for (const e of n) i.push(new w(e, this.down, o));
      (t.pushUndoStop(), t.executeCommands(this.id, i), t.pushUndoStop());
    }
  }
  class D extends s.R6 {
    constructor(e, t) {
      (super(t), (this.descending = e));
    }
    run(e, t) {
      const i = t.getSelections() || [];
      for (const e of i) if (!y.canRun(t.getModel(), e, this.descending)) return;
      let n = [];
      for (let e = 0, t = i.length; e < t; e++) n[e] = new y(i[e], this.descending);
      (t.pushUndoStop(), t.executeCommands(this.id, n), t.pushUndoStop());
    }
  }
  class I extends D {
    constructor() {
      super(!1, {
        id: "editor.action.sortLinesAscending",
        label: x.N("lines.sortAscending", "Sort Lines Ascending"),
        alias: "Sort Lines Ascending",
        precondition: p.u.writable
      });
    }
  }
  class E extends D {
    constructor() {
      super(!0, {
        id: "editor.action.sortLinesDescending",
        label: x.N("lines.sortDescending", "Sort Lines Descending"),
        alias: "Sort Lines Descending",
        precondition: p.u.writable
      });
    }
  }
  class T extends s.R6 {
    constructor() {
      super({
        id: "editor.action.removeDuplicateLines",
        label: x.N("lines.deleteDuplicates", "Delete Duplicate Lines"),
        alias: "Delete Duplicate Lines",
        precondition: p.u.writable
      });
    }
    run(e, t) {
      if (!t.hasModel()) return;
      let i = t.getModel();
      if (1 === i.getLineCount() && 1 === i.getLineMaxColumn(1)) return;
      let n = [],
        o = [],
        s = 0;
      for (let e of t.getSelections()) {
        let t = new Set(),
          r = [];
        for (let n = e.startLineNumber; n <= e.endLineNumber; n++) {
          let e = i.getLineContent(n);
          t.has(e) || (r.push(e), t.add(e));
        }
        let a = new g.Y(e.startLineNumber, 1, e.endLineNumber, i.getLineMaxColumn(e.endLineNumber)),
          c = e.startLineNumber - s,
          d = new g.Y(c, 1, c + r.length - 1, r[r.length - 1].length);
        (n.push(l.h.replace(a, r.join("\n"))), o.push(d), (s += e.endLineNumber - e.startLineNumber + 1 - r.length));
      }
      (t.pushUndoStop(), t.executeEdits(this.id, n, o), t.pushUndoStop());
    }
  }
  class M extends s.R6 {
    constructor() {
      super({
        id: M.ID,
        label: x.N("lines.trimTrailingWhitespace", "Trim Trailing Whitespace"),
        alias: "Trim Trailing Whitespace",
        precondition: p.u.writable,
        kbOpts: {
          kbExpr: p.u.editorTextFocus,
          primary: (0, n.gx)(2089, 2102),
          weight: 100
        }
      });
    }
    run(e, t, i) {
      let n = [];
      "auto-save" === i.reason && (n = (t.getSelections() || []).map(e => new u.L(e.positionLineNumber, e.positionColumn)));
      let o = t.getSelection();
      if (null === o) return;
      let s = new d(o, n);
      (t.pushUndoStop(), t.executeCommands(this.id, [s]), t.pushUndoStop());
    }
  }
  M.ID = "editor.action.trimTrailingWhitespace";
  class A extends s.R6 {
    constructor() {
      super({
        id: "editor.action.deleteLines",
        label: x.N("lines.delete", "Delete Line"),
        alias: "Delete Line",
        precondition: p.u.writable,
        kbOpts: {
          kbExpr: p.u.textInputFocus,
          primary: 3113,
          weight: 100
        }
      });
    }
    run(e, t) {
      if (!t.hasModel()) return;
      let i = this._getLinesToRemove(t),
        n = t.getModel();
      if (1 === n.getLineCount() && 1 === n.getLineMaxColumn(1)) return;
      let o = 0,
        s = [],
        r = [];
      for (let e = 0, t = i.length; e < t; e++) {
        const t = i[e];
        let a = t.startLineNumber,
          c = t.endLineNumber,
          d = 1,
          h = n.getLineMaxColumn(c);
        (c < n.getLineCount() ? ((c += 1), (h = 1)) : a > 1 && ((a -= 1), (d = n.getLineMaxColumn(a))), s.push(l.h.replace(new g.Y(a, d, c, h), "")), r.push(new g.Y(a - o, t.positionColumn, a - o, t.positionColumn)), (o += t.endLineNumber - t.startLineNumber + 1));
      }
      (t.pushUndoStop(), t.executeEdits(this.id, s, r), t.pushUndoStop());
    }
    _getLinesToRemove(e) {
      let t = e.getSelections().map(e => {
        let t = e.endLineNumber;
        return (e.startLineNumber < e.endLineNumber && 1 === e.endColumn && (t -= 1), {
          startLineNumber: e.startLineNumber,
          selectionStartColumn: e.selectionStartColumn,
          endLineNumber: t,
          positionColumn: e.positionColumn
        });
      });
      t.sort((e, t) => e.startLineNumber === t.startLineNumber ? e.endLineNumber - t.endLineNumber : e.startLineNumber - t.startLineNumber);
      let i = [],
        n = t[0];
      for (let e = 1; e < t.length; e++) n.endLineNumber + 1 >= t[e].startLineNumber ? (n.endLineNumber = t[e].endLineNumber) : (i.push(n), (n = t[e]));
      return (i.push(n), i);
    }
  }
  class O extends s.R6 {
    constructor() {
      super({
        id: "editor.action.indentLines",
        label: x.N("lines.indent", "Indent Line"),
        alias: "Indent Line",
        precondition: p.u.writable,
        kbOpts: {
          kbExpr: p.u.editorTextFocus,
          primary: 2137,
          weight: 100
        }
      });
    }
    run(e, t) {
      const i = t._getViewModel();
      i && (t.pushUndoStop(), t.executeCommands(this.id, h.u.indent(i.cursorConfig, t.getModel(), t.getSelections())), t.pushUndoStop());
    }
  }
  class P extends s.R6 {
    constructor() {
      super({
        id: "editor.action.outdentLines",
        label: x.N("lines.outdent", "Outdent Line"),
        alias: "Outdent Line",
        precondition: p.u.writable,
        kbOpts: {
          kbExpr: p.u.editorTextFocus,
          primary: 2135,
          weight: 100
        }
      });
    }
    run(e, t) {
      o.CoreEditingCommands.Outdent.runEditorCommand(e, t, null);
    }
  }
  class R extends s.R6 {
    constructor() {
      super({
        id: "editor.action.insertLineBefore",
        label: x.N("lines.insertBefore", "Insert Line Above"),
        alias: "Insert Line Above",
        precondition: p.u.writable,
        kbOpts: {
          kbExpr: p.u.editorTextFocus,
          primary: 3075,
          weight: 100
        }
      });
    }
    run(e, t) {
      const i = t._getViewModel();
      i && (t.pushUndoStop(), t.executeCommands(this.id, h.u.lineInsertBefore(i.cursorConfig, t.getModel(), t.getSelections())));
    }
  }
  class F extends s.R6 {
    constructor() {
      super({
        id: "editor.action.insertLineAfter",
        label: x.N("lines.insertAfter", "Insert Line Below"),
        alias: "Insert Line Below",
        precondition: p.u.writable,
        kbOpts: {
          kbExpr: p.u.editorTextFocus,
          primary: 2051,
          weight: 100
        }
      });
    }
    run(e, t) {
      const i = t._getViewModel();
      i && (t.pushUndoStop(), t.executeCommands(this.id, h.u.lineInsertAfter(i.cursorConfig, t.getModel(), t.getSelections())));
    }
  }
  class B extends s.R6 {
    run(e, t) {
      if (!t.hasModel()) return;
      const i = t.getSelection();
      let n = this._getRangesToDelete(t),
        o = [];
      for (let e = 0, t = n.length - 1; e < t; e++) {
        let t = n[e],
          i = n[e + 1];
        null === c.e.intersectRanges(t, i) ? o.push(t) : (n[e + 1] = c.e.plusRange(t, i));
      }
      o.push(n[n.length - 1]);
      let s = this._getEndCursorState(i, o),
        r = o.map(e => l.h.replace(e, ""));
      (t.pushUndoStop(), t.executeEdits(this.id, r, s), t.pushUndoStop());
    }
  }
  class V extends B {
    constructor() {
      super({
        id: "deleteAllLeft",
        label: x.N("lines.deleteAllLeft", "Delete All Left"),
        alias: "Delete All Left",
        precondition: p.u.writable,
        kbOpts: {
          kbExpr: p.u.textInputFocus,
          primary: 0,
          mac: {
            primary: 2049
          },
          weight: 100
        }
      });
    }
    _getEndCursorState(e, t) {
      let i = null,
        n = [],
        o = 0;
      return (t.forEach(t => {
        let s;
        if (1 === t.endColumn && o > 0) {
          let e = t.startLineNumber - o;
          s = new g.Y(e, t.startColumn, e, t.startColumn);
        } else s = new g.Y(t.startLineNumber, t.startColumn, t.startLineNumber, t.startColumn);
        ((o += t.endLineNumber - t.startLineNumber), t.intersectRanges(e) ? (i = s) : n.push(s));
      }), i && n.unshift(i), n);
    }
    _getRangesToDelete(e) {
      let t = e.getSelections();
      if (null === t) return [];
      let i = t,
        n = e.getModel();
      return null === n ? [] : (i.sort(c.e.compareRangesUsingStarts), (i = i.map(e => {
        if (e.isEmpty()) {
          if (1 === e.startColumn) {
            let t = Math.max(1, e.startLineNumber - 1),
              i = 1 === e.startLineNumber ? 1 : n.getLineContent(t).length + 1;
            return new c.e(t, i, e.startLineNumber, 1);
          }
          return new c.e(e.startLineNumber, 1, e.startLineNumber, e.startColumn);
        }
        return new c.e(e.startLineNumber, 1, e.endLineNumber, e.endColumn);
      })), i);
    }
  }
  class W extends B {
    constructor() {
      super({
        id: "deleteAllRight",
        label: x.N("lines.deleteAllRight", "Delete All Right"),
        alias: "Delete All Right",
        precondition: p.u.writable,
        kbOpts: {
          kbExpr: p.u.textInputFocus,
          primary: 0,
          mac: {
            primary: 297,
            secondary: [2068]
          },
          weight: 100
        }
      });
    }
    _getEndCursorState(e, t) {
      let i = null,
        n = [];
      for (let o = 0, s = t.length, r = 0; o < s; o++) {
        let s = t[o],
          a = new g.Y(s.startLineNumber - r, s.startColumn, s.startLineNumber - r, s.startColumn);
        s.intersectRanges(e) ? (i = a) : n.push(a);
      }
      return (i && n.unshift(i), n);
    }
    _getRangesToDelete(e) {
      let t = e.getModel();
      if (null === t) return [];
      let i = e.getSelections();
      if (null === i) return [];
      let n = i.map(e => {
        if (e.isEmpty()) {
          const i = t.getLineMaxColumn(e.startLineNumber);
          return e.startColumn === i ? new c.e(e.startLineNumber, e.startColumn, e.startLineNumber + 1, 1) : new c.e(e.startLineNumber, e.startColumn, e.startLineNumber, i);
        }
        return e;
      });
      return (n.sort(c.e.compareRangesUsingStarts), n);
    }
  }
  class H extends s.R6 {
    constructor() {
      super({
        id: "editor.action.joinLines",
        label: x.N("lines.joinLines", "Join Lines"),
        alias: "Join Lines",
        precondition: p.u.writable,
        kbOpts: {
          kbExpr: p.u.editorTextFocus,
          primary: 0,
          mac: {
            primary: 296
          },
          weight: 100
        }
      });
    }
    run(e, t) {
      let i = t.getSelections();
      if (null === i) return;
      let n = t.getSelection();
      if (null === n) return;
      i.sort(c.e.compareRangesUsingStarts);
      let o = [],
        s = i.reduce((e, t) => e.isEmpty() ? e.endLineNumber === t.startLineNumber ? (n.equalsSelection(e) && (n = t), t) : t.startLineNumber > e.endLineNumber + 1 ? (o.push(e), t) : new g.Y(e.startLineNumber, e.startColumn, t.endLineNumber, t.endColumn) : t.startLineNumber > e.endLineNumber ? (o.push(e), t) : new g.Y(e.startLineNumber, e.startColumn, t.endLineNumber, t.endColumn));
      o.push(s);
      let r = t.getModel();
      if (null === r) return;
      let a = [],
        d = [],
        h = n,
        u = 0;
      for (let e = 0, t = o.length; e < t; e++) {
        let t,
          i,
          s = o[e],
          p = s.startLineNumber,
          f = 1,
          m = 0,
          v = r.getLineContent(s.endLineNumber).length - s.endColumn;
        if (s.isEmpty() || s.startLineNumber === s.endLineNumber) {
          let e = s.getStartPosition();
          e.lineNumber < r.getLineCount() ? ((t = p + 1), (i = r.getLineMaxColumn(t))) : ((t = e.lineNumber), (i = r.getLineMaxColumn(e.lineNumber)));
        } else ((t = s.endLineNumber), (i = r.getLineMaxColumn(t)));
        let _ = r.getLineContent(p);
        for (let e = p + 1; e <= t; e++) {
          let t = r.getLineContent(e),
            i = r.getLineFirstNonWhitespaceColumn(e);
          if (i >= 1) {
            let e = !0;
            ("" === _ && (e = !1), !e || (" " !== _.charAt(_.length - 1) && "\t" !== _.charAt(_.length - 1)) || ((e = !1), (_ = _.replace(/[\s\uFEFF\xA0]+$/g, " "))));
            let n = t.substr(i - 1);
            ((_ += (e ? " " : "") + n), (m = e ? n.length + 1 : n.length));
          } else m = 0;
        }
        let b = new c.e(p, f, t, i);
        if (!b.isEmpty()) {
          let e;
          (s.isEmpty() ? (a.push(l.h.replace(b, _)), (e = new g.Y(b.startLineNumber - u, _.length - m + 1, p - u, _.length - m + 1))) : s.startLineNumber === s.endLineNumber ? (a.push(l.h.replace(b, _)), (e = new g.Y(s.startLineNumber - u, s.startColumn, s.endLineNumber - u, s.endColumn))) : (a.push(l.h.replace(b, _)), (e = new g.Y(s.startLineNumber - u, s.startColumn, s.startLineNumber - u, _.length - v))), null !== c.e.intersectRanges(b, n) ? (h = e) : d.push(e));
        }
        u += b.endLineNumber - b.startLineNumber;
      }
      (d.unshift(h), t.pushUndoStop(), t.executeEdits(this.id, a, d), t.pushUndoStop());
    }
  }
  class z extends s.R6 {
    constructor() {
      super({
        id: "editor.action.transpose",
        label: x.N("editor.transpose", "Transpose characters around the cursor"),
        alias: "Transpose characters around the cursor",
        precondition: p.u.writable
      });
    }
    run(e, t) {
      let i = t.getSelections();
      if (null === i) return;
      let n = t.getModel();
      if (null === n) return;
      let o = [];
      for (let e = 0, t = i.length; e < t; e++) {
        let t = i[e];
        if (!t.isEmpty()) continue;
        let s = t.getStartPosition(),
          a = n.getLineMaxColumn(s.lineNumber);
        if (s.column >= a) {
          if (s.lineNumber === n.getLineCount()) continue;
          let e = new c.e(s.lineNumber, Math.max(1, s.column - 1), s.lineNumber + 1, 1),
            t = n.getValueInRange(e).split("").reverse().join("");
          o.push(new r.T4(new g.Y(s.lineNumber, Math.max(1, s.column - 1), s.lineNumber + 1, 1), t));
        } else {
          let e = new c.e(s.lineNumber, Math.max(1, s.column - 1), s.lineNumber, s.column + 1),
            t = n.getValueInRange(e).split("").reverse().join("");
          o.push(new r.hP(e, t, new g.Y(s.lineNumber, s.column + 1, s.lineNumber, s.column + 1)));
        }
      }
      (t.pushUndoStop(), t.executeCommands(this.id, o), t.pushUndoStop());
    }
  }
  class j extends s.R6 {
    run(e, t) {
      const i = t.getSelections();
      if (null === i) return;
      const n = t.getModel();
      if (null === n) return;
      const o = t.getOption(115),
        s = [];
      for (const e of i) if (e.isEmpty()) {
        const i = e.getStartPosition(),
          r = t.getConfiguredWordAtPosition(i);
        if (!r) continue;
        const a = new c.e(i.lineNumber, r.startColumn, i.lineNumber, r.endColumn),
          d = n.getValueInRange(a);
        s.push(l.h.replace(a, this._modifyText(d, o)));
      } else {
        const t = n.getValueInRange(e);
        s.push(l.h.replace(e, this._modifyText(t, o)));
      }
      (t.pushUndoStop(), t.executeEdits(this.id, s), t.pushUndoStop());
    }
  }
  class U extends j {
    constructor() {
      super({
        id: "editor.action.transformToUppercase",
        label: x.N("editor.transformToUppercase", "Transform to Uppercase"),
        alias: "Transform to Uppercase",
        precondition: p.u.writable
      });
    }
    _modifyText(e, t) {
      return e.toLocaleUpperCase();
    }
  }
  class $ extends j {
    constructor() {
      super({
        id: "editor.action.transformToLowercase",
        label: x.N("editor.transformToLowercase", "Transform to Lowercase"),
        alias: "Transform to Lowercase",
        precondition: p.u.writable
      });
    }
    _modifyText(e, t) {
      return e.toLocaleLowerCase();
    }
  }
  class K {
    constructor(e, t) {
      ((this._pattern = e), (this._flags = t), (this._actual = null), (this._evaluated = !1));
    }
    get() {
      if (!this._evaluated) {
        this._evaluated = !0;
        try {
          this._actual = new RegExp(this._pattern, this._flags);
        } catch (e) {}
      }
      return this._actual;
    }
    isSupported() {
      return null !== this.get();
    }
  }
  class q extends j {
    constructor() {
      super({
        id: "editor.action.transformToTitlecase",
        label: x.N("editor.transformToTitlecase", "Transform to Title Case"),
        alias: "Transform to Title Case",
        precondition: p.u.writable
      });
    }
    _modifyText(e, t) {
      const i = q.titleBoundary.get();
      return i ? e.toLocaleLowerCase().replace(i, e => e.toLocaleUpperCase()) : e;
    }
  }
  q.titleBoundary = new K("(^|[^\\p{L}\\p{N}']|((^|\\P{L})'))\\p{L}", "gmu");
  class Z extends j {
    constructor() {
      super({
        id: "editor.action.transformToSnakecase",
        label: x.N("editor.transformToSnakecase", "Transform to Snake Case"),
        alias: "Transform to Snake Case",
        precondition: p.u.writable
      });
    }
    _modifyText(e, t) {
      const i = Z.caseBoundary.get(),
        n = Z.singleLetters.get();
      return i && n ? e.replace(i, "$1_$2").replace(n, "$1_$2$3").toLocaleLowerCase() : e;
    }
  }
  ((Z.caseBoundary = new K("(\\p{Ll})(\\p{Lu})", "gmu")), (Z.singleLetters = new K("(\\p{Lu}|\\p{N})(\\p{Lu})(\\p{Ll})", "gmu")), (0, s.Qr)(class extends k {
    constructor() {
      super(!1, {
        id: "editor.action.copyLinesUpAction",
        label: x.N("lines.copyUp", "Copy Line Up"),
        alias: "Copy Line Up",
        precondition: p.u.writable,
        kbOpts: {
          kbExpr: p.u.editorTextFocus,
          primary: 1552,
          linux: {
            primary: 3600
          },
          weight: 100
        },
        menuOpts: {
          menuId: S.eH.MenubarSelectionMenu,
          group: "2_line",
          title: x.N({
            key: "miCopyLinesUp",
            comment: ["&& denotes a mnemonic"]
          }, "&&Copy Line Up"),
          order: 1
        }
      });
    }
  }), (0, s.Qr)(class extends k {
    constructor() {
      super(!0, {
        id: "editor.action.copyLinesDownAction",
        label: x.N("lines.copyDown", "Copy Line Down"),
        alias: "Copy Line Down",
        precondition: p.u.writable,
        kbOpts: {
          kbExpr: p.u.editorTextFocus,
          primary: 1554,
          linux: {
            primary: 3602
          },
          weight: 100
        },
        menuOpts: {
          menuId: S.eH.MenubarSelectionMenu,
          group: "2_line",
          title: x.N({
            key: "miCopyLinesDown",
            comment: ["&& denotes a mnemonic"]
          }, "Co&&py Line Down"),
          order: 2
        }
      });
    }
  }), (0, s.Qr)(L), (0, s.Qr)(class extends N {
    constructor() {
      super(!1, {
        id: "editor.action.moveLinesUpAction",
        label: x.N("lines.moveUp", "Move Line Up"),
        alias: "Move Line Up",
        precondition: p.u.writable,
        kbOpts: {
          kbExpr: p.u.editorTextFocus,
          primary: 528,
          linux: {
            primary: 528
          },
          weight: 100
        },
        menuOpts: {
          menuId: S.eH.MenubarSelectionMenu,
          group: "2_line",
          title: x.N({
            key: "miMoveLinesUp",
            comment: ["&& denotes a mnemonic"]
          }, "Mo&&ve Line Up"),
          order: 3
        }
      });
    }
  }), (0, s.Qr)(class extends N {
    constructor() {
      super(!0, {
        id: "editor.action.moveLinesDownAction",
        label: x.N("lines.moveDown", "Move Line Down"),
        alias: "Move Line Down",
        precondition: p.u.writable,
        kbOpts: {
          kbExpr: p.u.editorTextFocus,
          primary: 530,
          linux: {
            primary: 530
          },
          weight: 100
        },
        menuOpts: {
          menuId: S.eH.MenubarSelectionMenu,
          group: "2_line",
          title: x.N({
            key: "miMoveLinesDown",
            comment: ["&& denotes a mnemonic"]
          }, "Move &&Line Down"),
          order: 4
        }
      });
    }
  }), (0, s.Qr)(I), (0, s.Qr)(E), (0, s.Qr)(T), (0, s.Qr)(M), (0, s.Qr)(A), (0, s.Qr)(O), (0, s.Qr)(P), (0, s.Qr)(R), (0, s.Qr)(F), (0, s.Qr)(V), (0, s.Qr)(W), (0, s.Qr)(H), (0, s.Qr)(z), (0, s.Qr)(U), (0, s.Qr)($), Z.caseBoundary.isSupported() && Z.singleLetters.isSupported() && (0, s.Qr)(Z), q.titleBoundary.isSupported() && (0, s.Qr)(q));
};