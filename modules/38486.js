module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    AddSelectionToNextFindMatchAction: () => T,
    AddSelectionToPreviousFindMatchAction: () => M,
    CompatChangeAll: () => R,
    InsertCursorAbove: () => C,
    InsertCursorBelow: () => x,
    MoveSelectionToNextFindMatchAction: () => A,
    MoveSelectionToPreviousFindMatchAction: () => O,
    MultiCursorSelectionController: () => I,
    MultiCursorSelectionControllerAction: () => E,
    MultiCursorSession: () => D,
    MultiCursorSessionResult: () => N,
    SelectHighlightsAction: () => P,
    SelectionHighlighter: () => B
  }));
  var n = i(85152),
    o = i(15393),
    s = i(22258),
    r = i(5976),
    a = i(16830),
    l = i(83814),
    c = i(24314),
    d = i(3860),
    h = i(29102),
    u = i(84973),
    g = i(44174),
    p = i(44101),
    f = i(92142),
    m = i(63580),
    v = i(84144),
    _ = i(38819),
    b = i(73910),
    w = i(97781);
  function y(e, t) {
    const i = t.filter(t => !e.find(e => e.equals(t)));
    if (i.length >= 1) {
      const e = i.map(e => `line ${e.viewState.position.lineNumber} column ${e.viewState.position.column}`).join(", "),
        t = 1 === i.length ? m.N("cursorAdded", "Cursor added: {0}", e) : m.N("cursorsAdded", "Cursors added: {0}", e);
      (0, n.i7)(t);
    }
  }
  class C extends a.R6 {
    constructor() {
      super({
        id: "editor.action.insertCursorAbove",
        label: m.N("mutlicursor.insertAbove", "Add Cursor Above"),
        alias: "Add Cursor Above",
        precondition: void 0,
        kbOpts: {
          kbExpr: h.u.editorTextFocus,
          primary: 2576,
          linux: {
            primary: 1552,
            secondary: [3088]
          },
          weight: 100
        },
        menuOpts: {
          menuId: v.eH.MenubarSelectionMenu,
          group: "3_multi",
          title: m.N({
            key: "miInsertCursorAbove",
            comment: ["&& denotes a mnemonic"]
          }, "&&Add Cursor Above"),
          order: 2
        }
      });
    }
    run(e, t, i) {
      if (!t.hasModel()) return;
      let n = !0;
      i && !1 === i.logicalLine && (n = !1);
      const o = t._getViewModel();
      if (o.cursorConfig.readOnly) return;
      o.pushStackElement();
      const s = o.getCursorStates();
      (o.setCursorStates(i.source, 3, l.P.addCursorUp(o, s, n)), o.revealTopMostCursor(i.source), y(s, o.getCursorStates()));
    }
  }
  class x extends a.R6 {
    constructor() {
      super({
        id: "editor.action.insertCursorBelow",
        label: m.N("mutlicursor.insertBelow", "Add Cursor Below"),
        alias: "Add Cursor Below",
        precondition: void 0,
        kbOpts: {
          kbExpr: h.u.editorTextFocus,
          primary: 2578,
          linux: {
            primary: 1554,
            secondary: [3090]
          },
          weight: 100
        },
        menuOpts: {
          menuId: v.eH.MenubarSelectionMenu,
          group: "3_multi",
          title: m.N({
            key: "miInsertCursorBelow",
            comment: ["&& denotes a mnemonic"]
          }, "A&&dd Cursor Below"),
          order: 3
        }
      });
    }
    run(e, t, i) {
      if (!t.hasModel()) return;
      let n = !0;
      i && !1 === i.logicalLine && (n = !1);
      const o = t._getViewModel();
      if (o.cursorConfig.readOnly) return;
      o.pushStackElement();
      const s = o.getCursorStates();
      (o.setCursorStates(i.source, 3, l.P.addCursorDown(o, s, n)), o.revealBottomMostCursor(i.source), y(s, o.getCursorStates()));
    }
  }
  class S extends a.R6 {
    constructor() {
      super({
        id: "editor.action.insertCursorAtEndOfEachLineSelected",
        label: m.N("mutlicursor.insertAtEndOfEachLineSelected", "Add Cursors to Line Ends"),
        alias: "Add Cursors to Line Ends",
        precondition: void 0,
        kbOpts: {
          kbExpr: h.u.editorTextFocus,
          primary: 1575,
          weight: 100
        },
        menuOpts: {
          menuId: v.eH.MenubarSelectionMenu,
          group: "3_multi",
          title: m.N({
            key: "miInsertCursorAtEndOfEachLineSelected",
            comment: ["&& denotes a mnemonic"]
          }, "Add C&&ursors to Line Ends"),
          order: 4
        }
      });
    }
    getCursorsForSelection(e, t, i) {
      if (!e.isEmpty()) {
        for (let n = e.startLineNumber; n < e.endLineNumber; n++) {
          let e = t.getLineMaxColumn(n);
          i.push(new d.Y(n, e, n, e));
        }
        e.endColumn > 1 && i.push(new d.Y(e.endLineNumber, e.endColumn, e.endLineNumber, e.endColumn));
      }
    }
    run(e, t) {
      if (!t.hasModel()) return;
      const i = t.getModel(),
        n = t.getSelections(),
        o = t._getViewModel(),
        s = o.getCursorStates();
      let r = [];
      (n.forEach(e => this.getCursorsForSelection(e, i, r)), r.length > 0 && t.setSelections(r), y(s, o.getCursorStates()));
    }
  }
  class k extends a.R6 {
    constructor() {
      super({
        id: "editor.action.addCursorsToBottom",
        label: m.N("mutlicursor.addCursorsToBottom", "Add Cursors To Bottom"),
        alias: "Add Cursors To Bottom",
        precondition: void 0
      });
    }
    run(e, t) {
      if (!t.hasModel()) return;
      const i = t.getSelections(),
        n = t.getModel().getLineCount();
      let o = [];
      for (let e = i[0].startLineNumber; e <= n; e++) o.push(new d.Y(e, i[0].startColumn, e, i[0].endColumn));
      const s = t._getViewModel(),
        r = s.getCursorStates();
      (o.length > 0 && t.setSelections(o), y(r, s.getCursorStates()));
    }
  }
  class L extends a.R6 {
    constructor() {
      super({
        id: "editor.action.addCursorsToTop",
        label: m.N("mutlicursor.addCursorsToTop", "Add Cursors To Top"),
        alias: "Add Cursors To Top",
        precondition: void 0
      });
    }
    run(e, t) {
      if (!t.hasModel()) return;
      const i = t.getSelections();
      let n = [];
      for (let e = i[0].startLineNumber; e >= 1; e--) n.push(new d.Y(e, i[0].startColumn, e, i[0].endColumn));
      const o = t._getViewModel(),
        s = o.getCursorStates();
      (n.length > 0 && t.setSelections(n), y(s, o.getCursorStates()));
    }
  }
  class N {
    constructor(e, t, i) {
      ((this.selections = e), (this.revealRange = t), (this.revealScrollType = i));
    }
  }
  class D {
    constructor(e, t, i, n, o, s, r) {
      ((this._editor = e), (this.findController = t), (this.isDisconnectedFromFindController = i), (this.searchText = n), (this.wholeWord = o), (this.matchCase = s), (this.currentMatch = r));
    }
    static create(e, t) {
      if (!e.hasModel()) return null;
      const i = t.getState();
      if (!e.hasTextFocus() && i.isRevealed && i.searchString.length > 0) return new D(e, t, !1, i.searchString, i.wholeWord, i.matchCase, null);
      let n,
        o,
        s = !1;
      const r = e.getSelections();
      1 === r.length && r[0].isEmpty() ? ((s = !0), (n = !0), (o = !0)) : ((n = i.wholeWord), (o = i.matchCase));
      const a = e.getSelection();
      let l,
        c = null;
      if (a.isEmpty()) {
        const t = e.getConfiguredWordAtPosition(a.getStartPosition());
        if (!t) return null;
        ((l = t.word), (c = new d.Y(a.startLineNumber, t.startColumn, a.startLineNumber, t.endColumn)));
      } else l = e.getModel().getValueInRange(a).replace(/\r\n/g, "\n");
      return new D(e, t, s, l, n, o, c);
    }
    addSelectionToNextFindMatch() {
      if (!this._editor.hasModel()) return null;
      const e = this._getNextMatch();
      if (!e) return null;
      const t = this._editor.getSelections();
      return new N(t.concat(e), e, 0);
    }
    moveSelectionToNextFindMatch() {
      if (!this._editor.hasModel()) return null;
      const e = this._getNextMatch();
      if (!e) return null;
      const t = this._editor.getSelections();
      return new N(t.slice(0, t.length - 1).concat(e), e, 0);
    }
    _getNextMatch() {
      if (!this._editor.hasModel()) return null;
      if (this.currentMatch) {
        const e = this.currentMatch;
        return ((this.currentMatch = null), e);
      }
      this.findController.highlightFindOptions();
      const e = this._editor.getSelections(),
        t = e[e.length - 1],
        i = this._editor.getModel().findNextMatch(this.searchText, t.getEndPosition(), !1, this.matchCase, this.wholeWord ? this._editor.getOption(115) : null, !1);
      return i ? new d.Y(i.range.startLineNumber, i.range.startColumn, i.range.endLineNumber, i.range.endColumn) : null;
    }
    addSelectionToPreviousFindMatch() {
      if (!this._editor.hasModel()) return null;
      const e = this._getPreviousMatch();
      if (!e) return null;
      const t = this._editor.getSelections();
      return new N(t.concat(e), e, 0);
    }
    moveSelectionToPreviousFindMatch() {
      if (!this._editor.hasModel()) return null;
      const e = this._getPreviousMatch();
      if (!e) return null;
      const t = this._editor.getSelections();
      return new N(t.slice(0, t.length - 1).concat(e), e, 0);
    }
    _getPreviousMatch() {
      if (!this._editor.hasModel()) return null;
      if (this.currentMatch) {
        const e = this.currentMatch;
        return ((this.currentMatch = null), e);
      }
      this.findController.highlightFindOptions();
      const e = this._editor.getSelections(),
        t = e[e.length - 1],
        i = this._editor.getModel().findPreviousMatch(this.searchText, t.getStartPosition(), !1, this.matchCase, this.wholeWord ? this._editor.getOption(115) : null, !1);
      return i ? new d.Y(i.range.startLineNumber, i.range.startColumn, i.range.endLineNumber, i.range.endColumn) : null;
    }
    selectAll() {
      return this._editor.hasModel() ? (this.findController.highlightFindOptions(), this._editor.getModel().findMatches(this.searchText, !0, !1, this.matchCase, this.wholeWord ? this._editor.getOption(115) : null, !1, 1073741824)) : [];
    }
  }
  class I extends r.JT {
    constructor(e) {
      (super(), (this._sessionDispose = this._register(new r.SL())), (this._editor = e), (this._ignoreSelectionChange = !1), (this._session = null));
    }
    static get(e) {
      return e.getContribution(I.ID);
    }
    dispose() {
      (this._endSession(), super.dispose());
    }
    _beginSessionIfNeeded(e) {
      if (!this._session) {
        const t = D.create(this._editor, e);
        if (!t) return;
        this._session = t;
        const i = {
          searchString: this._session.searchText
        };
        (this._session.isDisconnectedFromFindController && ((i.wholeWordOverride = 1), (i.matchCaseOverride = 1), (i.isRegexOverride = 2)), e.getState().change(i, !1), this._sessionDispose.add(this._editor.onDidChangeCursorSelection(e => {
          this._ignoreSelectionChange || this._endSession();
        })), this._sessionDispose.add(this._editor.onDidBlurEditorText(() => {
          this._endSession();
        })), this._sessionDispose.add(e.getState().onFindReplaceStateChange(e => {
          (e.matchCase || e.wholeWord) && this._endSession();
        })));
      }
    }
    _endSession() {
      if ((this._sessionDispose.clear(), this._session && this._session.isDisconnectedFromFindController)) {
        const e = {
          wholeWordOverride: 0,
          matchCaseOverride: 0,
          isRegexOverride: 0
        };
        this._session.findController.getState().change(e, !1);
      }
      this._session = null;
    }
    _setSelections(e) {
      ((this._ignoreSelectionChange = !0), this._editor.setSelections(e), (this._ignoreSelectionChange = !1));
    }
    _expandEmptyToWord(e, t) {
      if (!t.isEmpty()) return t;
      const i = this._editor.getConfiguredWordAtPosition(t.getStartPosition());
      return i ? new d.Y(t.startLineNumber, i.startColumn, t.startLineNumber, i.endColumn) : t;
    }
    _applySessionResult(e) {
      e && (this._setSelections(e.selections), e.revealRange && this._editor.revealRangeInCenterIfOutsideViewport(e.revealRange, e.revealScrollType));
    }
    getSession(e) {
      return this._session;
    }
    addSelectionToNextFindMatch(e) {
      if (this._editor.hasModel()) {
        if (!this._session) {
          const t = this._editor.getSelections();
          if (t.length > 1) {
            const i = e.getState().matchCase;
            if (!V(this._editor.getModel(), t, i)) {
              const e = this._editor.getModel();
              let i = [];
              for (let n = 0, o = t.length; n < o; n++) i[n] = this._expandEmptyToWord(e, t[n]);
              return void this._editor.setSelections(i);
            }
          }
        }
        (this._beginSessionIfNeeded(e), this._session && this._applySessionResult(this._session.addSelectionToNextFindMatch()));
      }
    }
    addSelectionToPreviousFindMatch(e) {
      (this._beginSessionIfNeeded(e), this._session && this._applySessionResult(this._session.addSelectionToPreviousFindMatch()));
    }
    moveSelectionToNextFindMatch(e) {
      (this._beginSessionIfNeeded(e), this._session && this._applySessionResult(this._session.moveSelectionToNextFindMatch()));
    }
    moveSelectionToPreviousFindMatch(e) {
      (this._beginSessionIfNeeded(e), this._session && this._applySessionResult(this._session.moveSelectionToPreviousFindMatch()));
    }
    selectAll(e) {
      if (!this._editor.hasModel()) return;
      let t = null;
      const i = e.getState();
      if (i.isRevealed && i.searchString.length > 0 && i.isRegex) t = this._editor.getModel().findMatches(i.searchString, !0, i.isRegex, i.matchCase, i.wholeWord ? this._editor.getOption(115) : null, !1, 1073741824);else {
        if ((this._beginSessionIfNeeded(e), !this._session)) return;
        t = this._session.selectAll();
      }
      if (i.searchScope) {
        const e = i.searchScope;
        let n = [];
        (t.forEach(t => {
          e.forEach(e => {
            t.range.endLineNumber <= e.endLineNumber && t.range.startLineNumber >= e.startLineNumber && n.push(t);
          });
        }), (t = n));
      }
      if (t.length > 0) {
        const e = this._editor.getSelection();
        for (let i = 0, n = t.length; i < n; i++) {
          const n = t[i];
          if (n.range.intersectRanges(e)) {
            ((t[i] = t[0]), (t[0] = n));
            break;
          }
        }
        this._setSelections(t.map(e => new d.Y(e.range.startLineNumber, e.range.startColumn, e.range.endLineNumber, e.range.endColumn)));
      }
    }
  }
  I.ID = "editor.contrib.multiCursorController";
  class E extends a.R6 {
    run(e, t) {
      const i = I.get(t);
      if (!i) return;
      const n = f.CommonFindController.get(t);
      if (!n) return;
      const o = t._getViewModel();
      if (o) {
        const e = o.getCursorStates();
        (this._run(i, n), y(e, o.getCursorStates()));
      }
    }
  }
  class T extends E {
    constructor() {
      super({
        id: "editor.action.addSelectionToNextFindMatch",
        label: m.N("addSelectionToNextFindMatch", "Add Selection To Next Find Match"),
        alias: "Add Selection To Next Find Match",
        precondition: void 0,
        kbOpts: {
          kbExpr: h.u.focus,
          primary: 2082,
          weight: 100
        },
        menuOpts: {
          menuId: v.eH.MenubarSelectionMenu,
          group: "3_multi",
          title: m.N({
            key: "miAddSelectionToNextFindMatch",
            comment: ["&& denotes a mnemonic"]
          }, "Add &&Next Occurrence"),
          order: 5
        }
      });
    }
    _run(e, t) {
      e.addSelectionToNextFindMatch(t);
    }
  }
  class M extends E {
    constructor() {
      super({
        id: "editor.action.addSelectionToPreviousFindMatch",
        label: m.N("addSelectionToPreviousFindMatch", "Add Selection To Previous Find Match"),
        alias: "Add Selection To Previous Find Match",
        precondition: void 0,
        menuOpts: {
          menuId: v.eH.MenubarSelectionMenu,
          group: "3_multi",
          title: m.N({
            key: "miAddSelectionToPreviousFindMatch",
            comment: ["&& denotes a mnemonic"]
          }, "Add P&&revious Occurrence"),
          order: 6
        }
      });
    }
    _run(e, t) {
      e.addSelectionToPreviousFindMatch(t);
    }
  }
  class A extends E {
    constructor() {
      super({
        id: "editor.action.moveSelectionToNextFindMatch",
        label: m.N("moveSelectionToNextFindMatch", "Move Last Selection To Next Find Match"),
        alias: "Move Last Selection To Next Find Match",
        precondition: void 0,
        kbOpts: {
          kbExpr: h.u.focus,
          primary: (0, s.gx)(2089, 2082),
          weight: 100
        }
      });
    }
    _run(e, t) {
      e.moveSelectionToNextFindMatch(t);
    }
  }
  class O extends E {
    constructor() {
      super({
        id: "editor.action.moveSelectionToPreviousFindMatch",
        label: m.N("moveSelectionToPreviousFindMatch", "Move Last Selection To Previous Find Match"),
        alias: "Move Last Selection To Previous Find Match",
        precondition: void 0
      });
    }
    _run(e, t) {
      e.moveSelectionToPreviousFindMatch(t);
    }
  }
  class P extends E {
    constructor() {
      super({
        id: "editor.action.selectHighlights",
        label: m.N("selectAllOccurrencesOfFindMatch", "Select All Occurrences of Find Match"),
        alias: "Select All Occurrences of Find Match",
        precondition: void 0,
        kbOpts: {
          kbExpr: h.u.focus,
          primary: 3114,
          weight: 100
        },
        menuOpts: {
          menuId: v.eH.MenubarSelectionMenu,
          group: "3_multi",
          title: m.N({
            key: "miSelectHighlights",
            comment: ["&& denotes a mnemonic"]
          }, "Select All &&Occurrences"),
          order: 7
        }
      });
    }
    _run(e, t) {
      e.selectAll(t);
    }
  }
  class R extends E {
    constructor() {
      super({
        id: "editor.action.changeAll",
        label: m.N("changeAll.label", "Change All Occurrences"),
        alias: "Change All Occurrences",
        precondition: _.Ao.and(h.u.writable, h.u.editorTextFocus),
        kbOpts: {
          kbExpr: h.u.editorTextFocus,
          primary: 2108,
          weight: 100
        },
        contextMenuOpts: {
          group: "1_modification",
          order: 1.2
        }
      });
    }
    _run(e, t) {
      e.selectAll(t);
    }
  }
  class F {
    constructor(e, t, i, n) {
      ((this.searchText = e), (this.matchCase = t), (this.wordSeparators = i), (this.modelVersionId = n));
    }
    static softEquals(e, t) {
      return ((!e && !t) || (!(!e || !t) && e.searchText === t.searchText && e.matchCase === t.matchCase && e.wordSeparators === t.wordSeparators && e.modelVersionId === t.modelVersionId));
    }
  }
  class B extends r.JT {
    constructor(e) {
      (super(), (this.editor = e), (this._isEnabled = e.getOption(96)), (this.decorations = []), (this.updateSoon = this._register(new o.pY(() => this._update(), 300))), (this.state = null), this._register(e.onDidChangeConfiguration(t => {
        this._isEnabled = e.getOption(96);
      })), this._register(e.onDidChangeCursorSelection(e => {
        this._isEnabled && (e.selection.isEmpty() ? 3 === e.reason ? (this.state && this._setState(null), this.updateSoon.schedule()) : this._setState(null) : this._update());
      })), this._register(e.onDidChangeModel(e => {
        this._setState(null);
      })), this._register(e.onDidChangeModelContent(e => {
        this._isEnabled && this.updateSoon.schedule();
      })), this._register(f.CommonFindController.get(e).getState().onFindReplaceStateChange(e => {
        this._update();
      })));
    }
    _update() {
      this._setState(B._createState(this._isEnabled, this.editor));
    }
    static _createState(e, t) {
      if (!e) return null;
      if (!t.hasModel()) return null;
      const i = t.getSelection();
      if (i.startLineNumber !== i.endLineNumber) return null;
      const n = I.get(t);
      if (!n) return null;
      const o = f.CommonFindController.get(t);
      if (!o) return null;
      let s = n.getSession(o);
      if (!s) {
        const e = t.getSelections();
        if (e.length > 1) {
          const i = o.getState().matchCase;
          if (!V(t.getModel(), e, i)) return null;
        }
        s = D.create(t, o);
      }
      if (!s) return null;
      if (s.currentMatch) return null;
      if (/^[ \t]+$/.test(s.searchText)) return null;
      if (s.searchText.length > 200) return null;
      const r = o.getState(),
        a = r.matchCase;
      if (r.isRevealed) {
        let e = r.searchString;
        a || (e = e.toLowerCase());
        let t = s.searchText;
        if ((a || (t = t.toLowerCase()), e === t && s.matchCase === r.matchCase && s.wholeWord === r.wholeWord && !r.isRegex)) return null;
      }
      return new F(s.searchText, s.matchCase, s.wholeWord ? t.getOption(115) : null, t.getModel().getVersionId());
    }
    _setState(e) {
      if (F.softEquals(this.state, e)) return void (this.state = e);
      if (((this.state = e), !this.state)) return void (this.decorations = this.editor.deltaDecorations(this.decorations, []));
      if (!this.editor.hasModel()) return;
      const t = this.editor.getModel();
      if (t.isTooLargeForTokenization()) return;
      const i = p.vH.has(t) && this.editor.getOption(71);
      let n = t.findMatches(this.state.searchText, !0, !1, this.state.matchCase, this.state.wordSeparators, !1).map(e => e.range);
      n.sort(c.e.compareRangesUsingStarts);
      let o = this.editor.getSelections();
      o.sort(c.e.compareRangesUsingStarts);
      let s = [];
      for (let e = 0, t = 0, i = n.length, r = o.length; e < i;) {
        const i = n[e];
        if (t >= r) (s.push(i), e++);else {
          const n = c.e.compareRangesUsingStarts(i, o[t]);
          n < 0 ? ((!o[t].isEmpty() && c.e.areIntersecting(i, o[t])) || s.push(i), e++) : (n > 0 || e++, t++);
        }
      }
      const r = s.map(e => ({
        range: e,
        options: i ? B._SELECTION_HIGHLIGHT : B._SELECTION_HIGHLIGHT_OVERVIEW
      }));
      this.decorations = this.editor.deltaDecorations(this.decorations, r);
    }
    dispose() {
      (this._setState(null), super.dispose());
    }
  }
  function V(e, t, i) {
    const n = W(e, t[0], !i);
    for (let o = 1, s = t.length; o < s; o++) {
      const s = t[o];
      if (s.isEmpty()) return !1;
      if (n !== W(e, s, !i)) return !1;
    }
    return !0;
  }
  function W(e, t, i) {
    const n = e.getValueInRange(t);
    return i ? n.toLowerCase() : n;
  }
  ((B.ID = "editor.contrib.selectionHighlighter"), (B._SELECTION_HIGHLIGHT_OVERVIEW = g.qx.register({
    description: "selection-highlight-overview",
    stickiness: 1,
    className: "selectionHighlight",
    minimap: {
      color: (0, w.EN)(b.IY),
      position: u.F5.Inline
    },
    overviewRuler: {
      color: (0, w.EN)(b.SP),
      position: u.sh.Center
    }
  })), (B._SELECTION_HIGHLIGHT = g.qx.register({
    description: "selection-highlight",
    stickiness: 1,
    className: "selectionHighlight"
  })), (0, a._K)(I.ID, I), (0, a._K)(B.ID, B), (0, a.Qr)(C), (0, a.Qr)(x), (0, a.Qr)(S), (0, a.Qr)(T), (0, a.Qr)(M), (0, a.Qr)(A), (0, a.Qr)(O), (0, a.Qr)(P), (0, a.Qr)(R), (0, a.Qr)(k), (0, a.Qr)(L));
};