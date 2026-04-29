module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    LM: () => g,
    LN: () => w,
    Tp: () => b,
    Vi: () => _,
    io: () => c.i,
    rS: () => p,
    zp: () => f
  });
  var n = i(17301),
    o = i(50187),
    s = i(24314),
    r = i(3860),
    a = i(44174),
    l = i(83831),
    c = i(47707);
  const d = () => !0,
    h = () => !1,
    u = e => " " === e || "\t" === e;
  class g {
    constructor(e, t, i) {
      ((this._cursorMoveConfigurationBrand = void 0), (this._languageId = e));
      const n = i.options,
        o = n.get(129);
      ((this.readOnly = n.get(80)), (this.tabSize = t.tabSize), (this.indentSize = t.indentSize), (this.insertSpaces = t.insertSpaces), (this.stickyTabStops = n.get(103)), (this.lineHeight = n.get(58)), (this.pageSize = Math.max(1, Math.floor(o.height / this.lineHeight) - 2)), (this.useTabStops = n.get(114)), (this.wordSeparators = n.get(115)), (this.emptySelectionClipboard = n.get(32)), (this.copyWithSyntaxHighlighting = n.get(21)), (this.multiCursorMergeOverlapping = n.get(68)), (this.multiCursorPaste = n.get(70)), (this.autoClosingBrackets = n.get(5)), (this.autoClosingQuotes = n.get(8)), (this.autoClosingDelete = n.get(6)), (this.autoClosingOvertype = n.get(7)), (this.autoSurround = n.get(11)), (this.autoIndent = n.get(9)), (this.surroundingPairs = {}), (this._electricChars = null), (this.shouldAutoCloseBefore = {
        quote: g._getShouldAutoClose(e, this.autoClosingQuotes),
        bracket: g._getShouldAutoClose(e, this.autoClosingBrackets)
      }), (this.autoClosingPairs = l.zu.getAutoClosingPairs(e)));
      let s = g._getSurroundingPairs(e);
      if (s) for (const e of s) this.surroundingPairs[e.open] = e.close;
    }
    static shouldRecreate(e) {
      return (e.hasChanged(129) || e.hasChanged(115) || e.hasChanged(32) || e.hasChanged(68) || e.hasChanged(70) || e.hasChanged(5) || e.hasChanged(8) || e.hasChanged(6) || e.hasChanged(7) || e.hasChanged(11) || e.hasChanged(114) || e.hasChanged(58) || e.hasChanged(80));
    }
    get electricChars() {
      if (!this._electricChars) {
        this._electricChars = {};
        let e = g._getElectricCharacters(this._languageId);
        if (e) for (const t of e) this._electricChars[t] = !0;
      }
      return this._electricChars;
    }
    normalizeIndentation(e) {
      return a.yO.normalizeIndentation(e, this.indentSize, this.insertSpaces);
    }
    static _getElectricCharacters(e) {
      try {
        return l.zu.getElectricCharacters(e);
      } catch (e) {
        return ((0, n.dL)(e), null);
      }
    }
    static _getShouldAutoClose(e, t) {
      switch (t) {
        case "beforeWhitespace":
          return u;
        case "languageDefined":
          return g._getLanguageDefinedShouldAutoClose(e);
        case "always":
          return d;
        case "never":
          return h;
      }
    }
    static _getLanguageDefinedShouldAutoClose(e) {
      try {
        const t = l.zu.getAutoCloseBeforeSet(e);
        return e => -1 !== t.indexOf(e);
      } catch (e) {
        return ((0, n.dL)(e), h);
      }
    }
    static _getSurroundingPairs(e) {
      try {
        return l.zu.getSurroundingPairs(e);
      } catch (e) {
        return ((0, n.dL)(e), null);
      }
    }
  }
  class p {
    constructor(e, t, i, n) {
      ((this._singleCursorStateBrand = void 0), (this.selectionStart = e), (this.selectionStartLeftoverVisibleColumns = t), (this.position = i), (this.leftoverVisibleColumns = n), (this.selection = p._computeSelection(this.selectionStart, this.position)));
    }
    equals(e) {
      return (this.selectionStartLeftoverVisibleColumns === e.selectionStartLeftoverVisibleColumns && this.leftoverVisibleColumns === e.leftoverVisibleColumns && this.position.equals(e.position) && this.selectionStart.equalsRange(e.selectionStart));
    }
    hasSelection() {
      return !this.selection.isEmpty() || !this.selectionStart.isEmpty();
    }
    move(e, t, i, n) {
      return e ? new p(this.selectionStart, this.selectionStartLeftoverVisibleColumns, new o.L(t, i), n) : new p(new s.e(t, i, t, i), n, new o.L(t, i), n);
    }
    static _computeSelection(e, t) {
      let i, n, o, s;
      return (e.isEmpty() ? ((i = e.startLineNumber), (n = e.startColumn), (o = t.lineNumber), (s = t.column)) : t.isBeforeOrEqual(e.getStartPosition()) ? ((i = e.endLineNumber), (n = e.endColumn), (o = t.lineNumber), (s = t.column)) : ((i = e.startLineNumber), (n = e.startColumn), (o = t.lineNumber), (s = t.column)), new r.Y(i, n, o, s));
    }
  }
  class f {
    constructor(e, t, i, n) {
      ((this._cursorContextBrand = void 0), (this.model = e), (this.viewModel = t), (this.coordinatesConverter = i), (this.cursorConfig = n));
    }
  }
  class m {
    constructor(e) {
      ((this.modelState = e), (this.viewState = null));
    }
  }
  class v {
    constructor(e) {
      ((this.modelState = null), (this.viewState = e));
    }
  }
  class _ {
    constructor(e, t) {
      ((this._cursorStateBrand = void 0), (this.modelState = e), (this.viewState = t));
    }
    static fromModelState(e) {
      return new m(e);
    }
    static fromViewState(e) {
      return new v(e);
    }
    static fromModelSelection(e) {
      const t = e.selectionStartLineNumber,
        i = e.selectionStartColumn,
        n = e.positionLineNumber,
        r = e.positionColumn,
        a = new p(new s.e(t, i, t, i), 0, new o.L(n, r), 0);
      return _.fromModelState(a);
    }
    static fromModelSelections(e) {
      let t = [];
      for (let i = 0, n = e.length; i < n; i++) t[i] = this.fromModelSelection(e[i]);
      return t;
    }
    equals(e) {
      return (this.viewState.equals(e.viewState) && this.modelState.equals(e.modelState));
    }
  }
  class b {
    constructor(e, t, i) {
      ((this._editOperationResultBrand = void 0), (this.type = e), (this.commands = t), (this.shouldPushStackElementBefore = i.shouldPushStackElementBefore), (this.shouldPushStackElementAfter = i.shouldPushStackElementAfter));
    }
  }
  function w(e) {
    return "'" === e || '"' === e || "`" === e;
  }
};