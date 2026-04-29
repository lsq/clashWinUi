const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    CommonFindController: () => Et,
    FindController: () => Tt,
    MatchFindAction: () => Ot,
    NextMatchFindAction: () => Pt,
    NextSelectionMatchFindAction: () => Bt,
    PreviousMatchFindAction: () => Rt,
    PreviousSelectionMatchFindAction: () => Vt,
    SelectionMatchFindAction: () => Ft,
    StartFindAction: () => Mt,
    StartFindReplaceAction: () => Wt,
    StartFindWithSelectionAction: () => At,
    getSelectionSearchString: () => It
  }));
  var n = i(15393),
    o = i(5976),
    s = i(97295),
    r = i(16830),
    a = i(29102),
    l = i(9488),
    c = i(61329),
    d = i(50187),
    h = i(24314),
    u = i(3860),
    g = i(77277),
    p = i(84973),
    f = i(44174),
    m = i(73910),
    v = i(97781);
  class _ {
    constructor(e) {
      ((this._editor = e), (this._decorations = []), (this._overviewRulerApproximateDecorations = []), (this._findScopeDecorationIds = []), (this._rangeHighlightDecorationId = null), (this._highlightedDecorationId = null), (this._startPosition = this._editor.getPosition()));
    }
    dispose() {
      (this._editor.deltaDecorations(this._allDecorations(), []), (this._decorations = []), (this._overviewRulerApproximateDecorations = []), (this._findScopeDecorationIds = []), (this._rangeHighlightDecorationId = null), (this._highlightedDecorationId = null));
    }
    reset() {
      ((this._decorations = []), (this._overviewRulerApproximateDecorations = []), (this._findScopeDecorationIds = []), (this._rangeHighlightDecorationId = null), (this._highlightedDecorationId = null));
    }
    getCount() {
      return this._decorations.length;
    }
    getFindScope() {
      return this._findScopeDecorationIds[0] ? this._editor.getModel().getDecorationRange(this._findScopeDecorationIds[0]) : null;
    }
    getFindScopes() {
      if (this._findScopeDecorationIds.length) {
        const e = this._findScopeDecorationIds.map(e => this._editor.getModel().getDecorationRange(e)).filter(e => !!e);
        if (e.length) return e;
      }
      return null;
    }
    getStartPosition() {
      return this._startPosition;
    }
    setStartPosition(e) {
      ((this._startPosition = e), this.setCurrentFindMatch(null));
    }
    _getDecorationIndex(e) {
      const t = this._decorations.indexOf(e);
      return t >= 0 ? t + 1 : 1;
    }
    getCurrentMatchesPosition(e) {
      let t = this._editor.getModel().getDecorationsInRange(e);
      for (const e of t) {
        const t = e.options;
        if (t === _._FIND_MATCH_DECORATION || t === _._CURRENT_FIND_MATCH_DECORATION) return this._getDecorationIndex(e.id);
      }
      return 0;
    }
    setCurrentFindMatch(e) {
      let t = null,
        i = 0;
      if (e) for (let n = 0, o = this._decorations.length; n < o; n++) {
        let o = this._editor.getModel().getDecorationRange(this._decorations[n]);
        if (e.equalsRange(o)) {
          ((t = this._decorations[n]), (i = n + 1));
          break;
        }
      }
      return ((null === this._highlightedDecorationId && null === t) || this._editor.changeDecorations(e => {
        if ((null !== this._highlightedDecorationId && (e.changeDecorationOptions(this._highlightedDecorationId, _._FIND_MATCH_DECORATION), (this._highlightedDecorationId = null)), null !== t && ((this._highlightedDecorationId = t), e.changeDecorationOptions(this._highlightedDecorationId, _._CURRENT_FIND_MATCH_DECORATION)), null !== this._rangeHighlightDecorationId && (e.removeDecoration(this._rangeHighlightDecorationId), (this._rangeHighlightDecorationId = null)), null !== t)) {
          let i = this._editor.getModel().getDecorationRange(t);
          if (i.startLineNumber !== i.endLineNumber && 1 === i.endColumn) {
            let e = i.endLineNumber - 1,
              t = this._editor.getModel().getLineMaxColumn(e);
            i = new h.e(i.startLineNumber, i.startColumn, e, t);
          }
          this._rangeHighlightDecorationId = e.addDecoration(i, _._RANGE_HIGHLIGHT_DECORATION);
        }
      }), i);
    }
    set(e, t) {
      this._editor.changeDecorations(i => {
        let n = _._FIND_MATCH_DECORATION,
          o = [];
        if (e.length > 1e3) {
          n = _._FIND_MATCH_NO_OVERVIEW_DECORATION;
          const t = this._editor.getModel().getLineCount(),
            i = this._editor.getLayoutInfo().height / t,
            s = Math.max(2, Math.ceil(3 / i));
          let r = e[0].range.startLineNumber,
            a = e[0].range.endLineNumber;
          for (let t = 1, i = e.length; t < i; t++) {
            const i = e[t].range;
            a + s >= i.startLineNumber ? i.endLineNumber > a && (a = i.endLineNumber) : (o.push({
              range: new h.e(r, 1, a, 1),
              options: _._FIND_MATCH_ONLY_OVERVIEW_DECORATION
            }), (r = i.startLineNumber), (a = i.endLineNumber));
          }
          o.push({
            range: new h.e(r, 1, a, 1),
            options: _._FIND_MATCH_ONLY_OVERVIEW_DECORATION
          });
        }
        let s = new Array(e.length);
        for (let t = 0, i = e.length; t < i; t++) s[t] = {
          range: e[t].range,
          options: n
        };
        ((this._decorations = i.deltaDecorations(this._decorations, s)), (this._overviewRulerApproximateDecorations = i.deltaDecorations(this._overviewRulerApproximateDecorations, o)), this._rangeHighlightDecorationId && (i.removeDecoration(this._rangeHighlightDecorationId), (this._rangeHighlightDecorationId = null)), this._findScopeDecorationIds.length && (this._findScopeDecorationIds.forEach(e => i.removeDecoration(e)), (this._findScopeDecorationIds = [])), (null == t ? void 0 : t.length) && (this._findScopeDecorationIds = t.map(e => i.addDecoration(e, _._FIND_SCOPE_DECORATION))));
      });
    }
    matchBeforePosition(e) {
      if (0 === this._decorations.length) return null;
      for (let t = this._decorations.length - 1; t >= 0; t--) {
        let i = this._decorations[t],
          n = this._editor.getModel().getDecorationRange(i);
        if (n && !(n.endLineNumber > e.lineNumber)) {
          if (n.endLineNumber < e.lineNumber) return n;
          if (!(n.endColumn > e.column)) return n;
        }
      }
      return this._editor.getModel().getDecorationRange(this._decorations[this._decorations.length - 1]);
    }
    matchAfterPosition(e) {
      if (0 === this._decorations.length) return null;
      for (let t = 0, i = this._decorations.length; t < i; t++) {
        let i = this._decorations[t],
          n = this._editor.getModel().getDecorationRange(i);
        if (n && !(n.startLineNumber < e.lineNumber)) {
          if (n.startLineNumber > e.lineNumber) return n;
          if (!(n.startColumn < e.column)) return n;
        }
      }
      return this._editor.getModel().getDecorationRange(this._decorations[0]);
    }
    _allDecorations() {
      let e = [];
      return ((e = e.concat(this._decorations)), (e = e.concat(this._overviewRulerApproximateDecorations)), this._findScopeDecorationIds.length && e.push(...this._findScopeDecorationIds), this._rangeHighlightDecorationId && e.push(this._rangeHighlightDecorationId), e);
    }
  }
  ((_._CURRENT_FIND_MATCH_DECORATION = f.qx.register({
    description: "current-find-match",
    stickiness: 1,
    zIndex: 13,
    className: "currentFindMatch",
    showIfCollapsed: !0,
    overviewRuler: {
      color: (0, v.EN)(m.Fm),
      position: p.sh.Center
    },
    minimap: {
      color: (0, v.EN)(m.KT),
      position: p.F5.Inline
    }
  })), (_._FIND_MATCH_DECORATION = f.qx.register({
    description: "find-match",
    stickiness: 1,
    zIndex: 10,
    className: "findMatch",
    showIfCollapsed: !0,
    overviewRuler: {
      color: (0, v.EN)(m.Fm),
      position: p.sh.Center
    },
    minimap: {
      color: (0, v.EN)(m.KT),
      position: p.F5.Inline
    }
  })), (_._FIND_MATCH_NO_OVERVIEW_DECORATION = f.qx.register({
    description: "find-match-no-overview",
    stickiness: 1,
    className: "findMatch",
    showIfCollapsed: !0
  })), (_._FIND_MATCH_ONLY_OVERVIEW_DECORATION = f.qx.register({
    description: "find-match-only-overview",
    stickiness: 1,
    overviewRuler: {
      color: (0, v.EN)(m.Fm),
      position: p.sh.Center
    }
  })), (_._RANGE_HIGHLIGHT_DECORATION = f.qx.register({
    description: "find-range-highlight",
    stickiness: 1,
    className: "rangeHighlight",
    isWholeLine: !0
  })), (_._FIND_SCOPE_DECORATION = f.qx.register({
    description: "find-scope",
    className: "findScope",
    isWholeLine: !0
  })));
  class b {
    constructor(e, t, i) {
      ((this._editorSelection = e), (this._ranges = t), (this._replaceStrings = i), (this._trackedEditorSelectionId = null));
    }
    getEditOperations(e, t) {
      if (this._ranges.length > 0) {
        let e = [];
        for (let t = 0; t < this._ranges.length; t++) e.push({
          range: this._ranges[t],
          text: this._replaceStrings[t]
        });
        e.sort((e, t) => h.e.compareRangesUsingStarts(e.range, t.range));
        let i = [],
          n = e[0];
        for (let t = 1; t < e.length; t++) n.range.endLineNumber === e[t].range.startLineNumber && n.range.endColumn === e[t].range.startColumn ? ((n.range = n.range.plusRange(e[t].range)), (n.text = n.text + e[t].text)) : (i.push(n), (n = e[t]));
        i.push(n);
        for (const e of i) t.addEditOperation(e.range, e.text);
      }
      this._trackedEditorSelectionId = t.trackSelection(this._editorSelection);
    }
    computeCursorState(e, t) {
      return t.getTrackedSelection(this._trackedEditorSelectionId);
    }
  }
  function w(e, t) {
    if (e && "" !== e[0]) {
      const i = y(e, t, "-"),
        n = y(e, t, "_");
      return i && !n ? C(e, t, "-") : !i && n ? C(e, t, "_") : e[0].toUpperCase() === e[0] ? t.toUpperCase() : e[0].toLowerCase() === e[0] ? t.toLowerCase() : s.Kw(e[0][0]) && t.length > 0 ? t[0].toUpperCase() + t.substr(1) : e[0][0].toUpperCase() !== e[0][0] && t.length > 0 ? t[0].toLowerCase() + t.substr(1) : t;
    }
    return t;
  }
  function y(e, t, i) {
    return (-1 !== e[0].indexOf(i) && -1 !== t.indexOf(i) && e[0].split(i).length === t.split(i).length);
  }
  function C(e, t, i) {
    const n = t.split(i),
      o = e[0].split(i);
    let s = "";
    return (n.forEach((e, t) => {
      s += w([o[t]], e) + i;
    }), s.slice(0, -1));
  }
  class x {
    constructor(e) {
      ((this.staticValue = e), (this.kind = 0));
    }
  }
  class S {
    constructor(e) {
      ((this.pieces = e), (this.kind = 1));
    }
  }
  class k {
    constructor(e) {
      e && 0 !== e.length ? 1 === e.length && null !== e[0].staticValue ? (this._state = new x(e[0].staticValue)) : (this._state = new S(e)) : (this._state = new x(""));
    }
    static fromStaticValue(e) {
      return new k([L.staticValue(e)]);
    }
    get hasReplacementPatterns() {
      return 1 === this._state.kind;
    }
    buildReplaceString(e, t) {
      if (0 === this._state.kind) return t ? w(e, this._state.staticValue) : this._state.staticValue;
      let i = "";
      for (let t = 0, n = this._state.pieces.length; t < n; t++) {
        let n = this._state.pieces[t];
        if (null !== n.staticValue) {
          i += n.staticValue;
          continue;
        }
        let o = k._substitute(n.matchIndex, e);
        if (null !== n.caseOps && n.caseOps.length > 0) {
          let e = [],
            t = n.caseOps.length,
            i = 0;
          for (let s = 0, r = o.length; s < r; s++) {
            if (i >= t) {
              e.push(o.slice(s));
              break;
            }
            switch (n.caseOps[i]) {
              case "U":
                e.push(o[s].toUpperCase());
                break;
              case "u":
                (e.push(o[s].toUpperCase()), i++);
                break;
              case "L":
                e.push(o[s].toLowerCase());
                break;
              case "l":
                (e.push(o[s].toLowerCase()), i++);
                break;
              default:
                e.push(o[s]);
            }
          }
          o = e.join("");
        }
        i += o;
      }
      return i;
    }
    static _substitute(e, t) {
      if (null === t) return "";
      if (0 === e) return t[0];
      let i = "";
      for (; e > 0;) {
        if (e < t.length) {
          return (t[e] || "") + i;
        }
        ((i = String(e % 10) + i), (e = Math.floor(e / 10)));
      }
      return "$" + i;
    }
  }
  class L {
    constructor(e, t, i) {
      ((this.staticValue = e), (this.matchIndex = t), i && 0 !== i.length ? (this.caseOps = i.slice(0)) : (this.caseOps = null));
    }
    static staticValue(e) {
      return new L(e, -1, null);
    }
    static caseOps(e, t) {
      return new L(null, e, t);
    }
  }
  class N {
    constructor(e) {
      ((this._source = e), (this._lastCharIndex = 0), (this._result = []), (this._resultLen = 0), (this._currentStaticPiece = ""));
    }
    emitUnchanged(e) {
      (this._emitStatic(this._source.substring(this._lastCharIndex, e)), (this._lastCharIndex = e));
    }
    emitStatic(e, t) {
      (this._emitStatic(e), (this._lastCharIndex = t));
    }
    _emitStatic(e) {
      0 !== e.length && (this._currentStaticPiece += e);
    }
    emitMatchIndex(e, t, i) {
      (0 !== this._currentStaticPiece.length && ((this._result[this._resultLen++] = L.staticValue(this._currentStaticPiece)), (this._currentStaticPiece = "")), (this._result[this._resultLen++] = L.caseOps(e, i)), (this._lastCharIndex = t));
    }
    finalize() {
      return (this.emitUnchanged(this._source.length), 0 !== this._currentStaticPiece.length && ((this._result[this._resultLen++] = L.staticValue(this._currentStaticPiece)), (this._currentStaticPiece = "")), new k(this._result));
    }
  }
  var D = i(38819);
  const I = new D.uy("findWidgetVisible", !1),
    E = new D.uy("findInputFocussed", !1),
    T = new D.uy("replaceInputFocussed", !1),
    M = {
      primary: 545,
      mac: {
        primary: 2593
      }
    },
    A = {
      primary: 565,
      mac: {
        primary: 2613
      }
    },
    O = {
      primary: 560,
      mac: {
        primary: 2608
      }
    },
    P = {
      primary: 554,
      mac: {
        primary: 2602
      }
    },
    R = {
      primary: 558,
      mac: {
        primary: 2606
      }
    },
    F = "actions.find",
    B = "actions.findWithSelection",
    V = "editor.action.nextMatchFindAction",
    W = "editor.action.previousMatchFindAction",
    H = "editor.action.nextSelectionMatchFindAction",
    z = "editor.action.previousSelectionMatchFindAction",
    j = "editor.action.startFindReplaceAction",
    U = "closeFindWidget",
    $ = "toggleFindCaseSensitive",
    K = "toggleFindWholeWord",
    q = "toggleFindRegex",
    Z = "toggleFindInSelection",
    G = "togglePreserveCase",
    Y = "editor.action.replaceOne",
    Q = "editor.action.replaceAll",
    X = "editor.action.selectAllMatches",
    J = 19999;
  class ee {
    constructor(e, t) {
      ((this._toDispose = new o.SL()), (this._editor = e), (this._state = t), (this._isDisposed = !1), (this._startSearchingTimer = new n._F()), (this._decorations = new _(e)), this._toDispose.add(this._decorations), (this._updateDecorationsScheduler = new n.pY(() => this.research(!1), 100)), this._toDispose.add(this._updateDecorationsScheduler), this._toDispose.add(this._editor.onDidChangeCursorPosition(e => {
        (3 !== e.reason && 5 !== e.reason && 6 !== e.reason) || this._decorations.setStartPosition(this._editor.getPosition());
      })), (this._ignoreModelContentChanged = !1), this._toDispose.add(this._editor.onDidChangeModelContent(e => {
        this._ignoreModelContentChanged || (e.isFlush && this._decorations.reset(), this._decorations.setStartPosition(this._editor.getPosition()), this._updateDecorationsScheduler.schedule());
      })), this._toDispose.add(this._state.onFindReplaceStateChange(e => this._onStateChanged(e))), this.research(!1, this._state.searchScope));
    }
    dispose() {
      ((this._isDisposed = !0), (0, o.B9)(this._startSearchingTimer), this._toDispose.dispose());
    }
    _onStateChanged(e) {
      if (!this._isDisposed && this._editor.hasModel() && (e.searchString || e.isReplaceRevealed || e.isRegex || e.wholeWord || e.matchCase || e.searchScope)) {
        this._editor.getModel().isTooLargeForSyncing() ? (this._startSearchingTimer.cancel(), this._startSearchingTimer.setIfNotSet(() => {
          e.searchScope ? this.research(e.moveCursor, this._state.searchScope) : this.research(e.moveCursor);
        }, 240)) : e.searchScope ? this.research(e.moveCursor, this._state.searchScope) : this.research(e.moveCursor);
      }
    }
    static _getSearchRange(e, t) {
      return t || e.getFullModelRange();
    }
    research(e, t) {
      let i = null;
      (void 0 !== t ? null !== t && (i = Array.isArray(t) ? t : [t]) : (i = this._decorations.getFindScopes()), null !== i && (i = i.map(e => {
        if (e.startLineNumber !== e.endLineNumber) {
          let t = e.endLineNumber;
          return (1 === e.endColumn && (t -= 1), new h.e(e.startLineNumber, 1, t, this._editor.getModel().getLineMaxColumn(t)));
        }
        return e;
      })));
      let n = this._findMatches(i, !1, J);
      this._decorations.set(n, i);
      const o = this._editor.getSelection();
      let s = this._decorations.getCurrentMatchesPosition(o);
      if (0 === s && n.length > 0) {
        const e = (0, l.lG)(n.map(e => e.range), e => h.e.compareRangesUsingStarts(e, o) >= 0);
        s = e > 0 ? e - 1 + 1 : s;
      }
      (this._state.changeMatchInfo(s, this._decorations.getCount(), void 0), e && this._editor.getOption(35).cursorMoveOnType && this._moveToNextMatch(this._decorations.getStartPosition()));
    }
    _hasMatches() {
      return this._state.matchesCount > 0;
    }
    _cannotFind() {
      if (!this._hasMatches()) {
        let e = this._decorations.getFindScope();
        return (e && this._editor.revealRangeInCenterIfOutsideViewport(e, 0), !0);
      }
      return !1;
    }
    _setCurrentFindMatch(e) {
      let t = this._decorations.setCurrentFindMatch(e);
      (this._state.changeMatchInfo(t, this._decorations.getCount(), e), this._editor.setSelection(e), this._editor.revealRangeInCenterIfOutsideViewport(e, 0));
    }
    _prevSearchPosition(e) {
      let t = this._state.isRegex && (this._state.searchString.indexOf("^") >= 0 || this._state.searchString.indexOf("$") >= 0),
        {
          lineNumber: i,
          column: n
        } = e,
        o = this._editor.getModel();
      return (t || 1 === n ? (1 === i ? (i = o.getLineCount()) : i--, (n = o.getLineMaxColumn(i))) : n--, new d.L(i, n));
    }
    _moveToPrevMatch(e, t = !1) {
      if (!this._state.canNavigateBack()) {
        const t = this._decorations.matchAfterPosition(e);
        return void (t && this._setCurrentFindMatch(t));
      }
      if (this._decorations.getCount() < J) {
        let t = this._decorations.matchBeforePosition(e);
        return (t && t.isEmpty() && t.getStartPosition().equals(e) && ((e = this._prevSearchPosition(e)), (t = this._decorations.matchBeforePosition(e))), void (t && this._setCurrentFindMatch(t)));
      }
      if (this._cannotFind()) return;
      let i = this._decorations.getFindScope(),
        n = ee._getSearchRange(this._editor.getModel(), i);
      (n.getEndPosition().isBefore(e) && (e = n.getEndPosition()), e.isBefore(n.getStartPosition()) && (e = n.getEndPosition()));
      let {
          lineNumber: o,
          column: s
        } = e,
        r = this._editor.getModel(),
        a = new d.L(o, s),
        l = r.findPreviousMatch(this._state.searchString, a, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(115) : null, !1);
      return (l && l.range.isEmpty() && l.range.getStartPosition().equals(a) && ((a = this._prevSearchPosition(a)), (l = r.findPreviousMatch(this._state.searchString, a, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(115) : null, !1))), l ? t || n.containsRange(l.range) ? void this._setCurrentFindMatch(l.range) : this._moveToPrevMatch(l.range.getStartPosition(), !0) : void 0);
    }
    moveToPrevMatch() {
      this._moveToPrevMatch(this._editor.getSelection().getStartPosition());
    }
    _nextSearchPosition(e) {
      let t = this._state.isRegex && (this._state.searchString.indexOf("^") >= 0 || this._state.searchString.indexOf("$") >= 0),
        {
          lineNumber: i,
          column: n
        } = e,
        o = this._editor.getModel();
      return (t || n === o.getLineMaxColumn(i) ? (i === o.getLineCount() ? (i = 1) : i++, (n = 1)) : n++, new d.L(i, n));
    }
    _moveToNextMatch(e) {
      if (!this._state.canNavigateForward()) {
        const t = this._decorations.matchBeforePosition(e);
        return void (t && this._setCurrentFindMatch(t));
      }
      if (this._decorations.getCount() < J) {
        let t = this._decorations.matchAfterPosition(e);
        return (t && t.isEmpty() && t.getStartPosition().equals(e) && ((e = this._nextSearchPosition(e)), (t = this._decorations.matchAfterPosition(e))), void (t && this._setCurrentFindMatch(t)));
      }
      let t = this._getNextMatch(e, !1, !0);
      t && this._setCurrentFindMatch(t.range);
    }
    _getNextMatch(e, t, i, n = !1) {
      if (this._cannotFind()) return null;
      let o = this._decorations.getFindScope(),
        s = ee._getSearchRange(this._editor.getModel(), o);
      (s.getEndPosition().isBefore(e) && (e = s.getStartPosition()), e.isBefore(s.getStartPosition()) && (e = s.getStartPosition()));
      let {
          lineNumber: r,
          column: a
        } = e,
        l = this._editor.getModel(),
        c = new d.L(r, a),
        h = l.findNextMatch(this._state.searchString, c, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(115) : null, t);
      return (i && h && h.range.isEmpty() && h.range.getStartPosition().equals(c) && ((c = this._nextSearchPosition(c)), (h = l.findNextMatch(this._state.searchString, c, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(115) : null, t))), h ? n || s.containsRange(h.range) ? h : this._getNextMatch(h.range.getEndPosition(), t, i, !0) : null);
    }
    moveToNextMatch() {
      this._moveToNextMatch(this._editor.getSelection().getEndPosition());
    }
    _getReplacePattern() {
      return this._state.isRegex ? (function (e) {
        if (!e || 0 === e.length) return new k(null);
        let t = [],
          i = new N(e);
        for (let n = 0, o = e.length; n < o; n++) {
          let s = e.charCodeAt(n);
          if (92 !== s) {
            if (36 === s) {
              if ((n++, n >= o)) break;
              let s = e.charCodeAt(n);
              if (36 === s) {
                (i.emitUnchanged(n - 1), i.emitStatic("$", n + 1));
                continue;
              }
              if (48 === s || 38 === s) {
                (i.emitUnchanged(n - 1), i.emitMatchIndex(0, n + 1, t), (t.length = 0));
                continue;
              }
              if (49 <= s && s <= 57) {
                let r = s - 48;
                if (n + 1 < o) {
                  let o = e.charCodeAt(n + 1);
                  if (48 <= o && o <= 57) {
                    (n++, (r = 10 * r + (o - 48)), i.emitUnchanged(n - 2), i.emitMatchIndex(r, n + 1, t), (t.length = 0));
                    continue;
                  }
                }
                (i.emitUnchanged(n - 1), i.emitMatchIndex(r, n + 1, t), (t.length = 0));
                continue;
              }
            }
          } else {
            if ((n++, n >= o)) break;
            let s = e.charCodeAt(n);
            switch (s) {
              case 92:
                (i.emitUnchanged(n - 1), i.emitStatic("\\", n + 1));
                break;
              case 110:
                (i.emitUnchanged(n - 1), i.emitStatic("\n", n + 1));
                break;
              case 116:
                (i.emitUnchanged(n - 1), i.emitStatic("\t", n + 1));
                break;
              case 117:
              case 85:
              case 108:
              case 76:
                (i.emitUnchanged(n - 1), i.emitStatic("", n + 1), t.push(String.fromCharCode(s)));
            }
          }
        }
        return i.finalize();
      })(this._state.replaceString) : k.fromStaticValue(this._state.replaceString);
    }
    replace() {
      if (!this._hasMatches()) return;
      let e = this._getReplacePattern(),
        t = this._editor.getSelection(),
        i = this._getNextMatch(t.getStartPosition(), !0, !1);
      if (i) if (t.equalsRange(i.range)) {
        let n = e.buildReplaceString(i.matches, this._state.preserveCase),
          o = new c.T4(t, n);
        (this._executeEditorCommand("replace", o), this._decorations.setStartPosition(new d.L(t.startLineNumber, t.startColumn + n.length)), this.research(!0));
      } else (this._decorations.setStartPosition(this._editor.getPosition()), this._setCurrentFindMatch(i.range));
    }
    _findMatches(e, t, i) {
      const n = (e || [null]).map(e => ee._getSearchRange(this._editor.getModel(), e));
      return this._editor.getModel().findMatches(this._state.searchString, n, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(115) : null, t, i);
    }
    replaceAll() {
      if (!this._hasMatches()) return;
      const e = this._decorations.getFindScopes();
      (null === e && this._state.matchesCount >= J ? this._largeReplaceAll() : this._regularReplaceAll(e), this.research(!1));
    }
    _largeReplaceAll() {
      const e = new g.bc(this._state.searchString, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(115) : null).parseSearchRequest();
      if (!e) return;
      let t = e.regex;
      if (!t.multiline) {
        let e = "mu";
        (t.ignoreCase && (e += "i"), t.global && (e += "g"), (t = new RegExp(t.source, e)));
      }
      const i = this._editor.getModel(),
        n = i.getValue(1),
        o = i.getFullModelRange(),
        s = this._getReplacePattern();
      let r;
      const a = this._state.preserveCase;
      r = s.hasReplacementPatterns || a ? n.replace(t, function () {
        return s.buildReplaceString(arguments, a);
      }) : n.replace(t, s.buildReplaceString(null, a));
      let l = new c.hP(o, r, this._editor.getSelection());
      this._executeEditorCommand("replaceAll", l);
    }
    _regularReplaceAll(e) {
      const t = this._getReplacePattern();
      let i = this._findMatches(e, t.hasReplacementPatterns || this._state.preserveCase, 1073741824),
        n = [];
      for (let e = 0, o = i.length; e < o; e++) n[e] = t.buildReplaceString(i[e].matches, this._state.preserveCase);
      let o = new b(this._editor.getSelection(), i.map(e => e.range), n);
      this._executeEditorCommand("replaceAll", o);
    }
    selectAllMatches() {
      if (!this._hasMatches()) return;
      let e = this._decorations.getFindScopes(),
        t = this._findMatches(e, !1, 1073741824).map(e => new u.Y(e.range.startLineNumber, e.range.startColumn, e.range.endLineNumber, e.range.endColumn)),
        i = this._editor.getSelection();
      for (let e = 0, n = t.length; e < n; e++) {
        if (t[e].equalsRange(i)) {
          t = [i].concat(t.slice(0, e)).concat(t.slice(e + 1));
          break;
        }
      }
      this._editor.setSelections(t);
    }
    _executeEditorCommand(e, t) {
      try {
        ((this._ignoreModelContentChanged = !0), this._editor.pushUndoStop(), this._editor.executeCommand(e, t), this._editor.pushUndoStop());
      } finally {
        this._ignoreModelContentChanged = !1;
      }
    }
  }
  var te = i(65321),
    ie = i(93794),
    ne = i(73046),
    oe = i(41264),
    se = i(4669);
  i(67633);
  const re = {
    inputActiveOptionBorder: oe.Il.fromHex("#007ACC00"),
    inputActiveOptionForeground: oe.Il.fromHex("#FFFFFF"),
    inputActiveOptionBackground: oe.Il.fromHex("#0E639C50")
  };
  class ae extends ie.$ {
    constructor(e) {
      (super(), (this._onChange = this._register(new se.Q5())), (this.onChange = this._onChange.event), (this._onKeyDown = this._register(new se.Q5())), (this.onKeyDown = this._onKeyDown.event), (this._opts = Object.assign(Object.assign({}, re), e)), (this._checked = this._opts.isChecked));
      const t = ["monaco-custom-checkbox"];
      (this._opts.icon && t.push(...ne.dT.asClassNameArray(this._opts.icon)), this._opts.actionClassName && t.push(...this._opts.actionClassName.split(" ")), this._checked && t.push("checked"), (this.domNode = document.createElement("div")), (this.domNode.title = this._opts.title), this.domNode.classList.add(...t), this._opts.notFocusable || (this.domNode.tabIndex = 0), this.domNode.setAttribute("role", "checkbox"), this.domNode.setAttribute("aria-checked", String(this._checked)), this.domNode.setAttribute("aria-label", this._opts.title), this.applyStyles(), this.onclick(this.domNode, e => {
        ((this.checked = !this._checked), this._onChange.fire(!1), e.preventDefault());
      }), this.ignoreGesture(this.domNode), this.onkeydown(this.domNode, e => {
        if (10 === e.keyCode || 3 === e.keyCode) return ((this.checked = !this._checked), this._onChange.fire(!0), void e.preventDefault());
        this._onKeyDown.fire(e);
      }));
    }
    get enabled() {
      return "true" !== this.domNode.getAttribute("aria-disabled");
    }
    focus() {
      this.domNode.focus();
    }
    get checked() {
      return this._checked;
    }
    set checked(e) {
      ((this._checked = e), this.domNode.setAttribute("aria-checked", String(this._checked)), this.domNode.classList.toggle("checked", this._checked), this.applyStyles());
    }
    width() {
      return 22;
    }
    style(e) {
      (e.inputActiveOptionBorder && (this._opts.inputActiveOptionBorder = e.inputActiveOptionBorder), e.inputActiveOptionForeground && (this._opts.inputActiveOptionForeground = e.inputActiveOptionForeground), e.inputActiveOptionBackground && (this._opts.inputActiveOptionBackground = e.inputActiveOptionBackground), this.applyStyles());
    }
    applyStyles() {
      this.domNode && ((this.domNode.style.borderColor = this._checked && this._opts.inputActiveOptionBorder ? this._opts.inputActiveOptionBorder.toString() : "transparent"), (this.domNode.style.color = this._checked && this._opts.inputActiveOptionForeground ? this._opts.inputActiveOptionForeground.toString() : "inherit"), (this.domNode.style.backgroundColor = this._checked && this._opts.inputActiveOptionBackground ? this._opts.inputActiveOptionBackground.toString() : "transparent"));
    }
    enable() {
      this.domNode.setAttribute("aria-disabled", String(!1));
    }
    disable() {
      this.domNode.setAttribute("aria-disabled", String(!0));
    }
  }
  var le = i(63580);
  const ce = le.N("caseDescription", new Language(modifyState.language).matchCase()),
    de = le.N("wordsDescription", new Language(modifyState.language).matchWholeWord()),
    he = le.N("regexDescription", new Language(modifyState.language).useRegularExpression());
  class ue extends ae {
    constructor(e) {
      super({
        icon: ne.lA.caseSensitive,
        title: ce + e.appendTitle,
        isChecked: e.isChecked,
        inputActiveOptionBorder: e.inputActiveOptionBorder,
        inputActiveOptionForeground: e.inputActiveOptionForeground,
        inputActiveOptionBackground: e.inputActiveOptionBackground
      });
    }
  }
  class ge extends ae {
    constructor(e) {
      super({
        icon: ne.lA.wholeWord,
        title: de + e.appendTitle,
        isChecked: e.isChecked,
        inputActiveOptionBorder: e.inputActiveOptionBorder,
        inputActiveOptionForeground: e.inputActiveOptionForeground,
        inputActiveOptionBackground: e.inputActiveOptionBackground
      });
    }
  }
  class pe extends ae {
    constructor(e) {
      super({
        icon: ne.lA.regex,
        title: he + e.appendTitle,
        isChecked: e.isChecked,
        inputActiveOptionBorder: e.inputActiveOptionBorder,
        inputActiveOptionForeground: e.inputActiveOptionForeground,
        inputActiveOptionBackground: e.inputActiveOptionBackground
      });
    }
  }
  class fe extends ie.$ {
    constructor(e, t, i, o) {
      (super(), (this._hideSoon = this._register(new n.pY(() => this._hide(), 2e3))), (this._isVisible = !1), (this._editor = e), (this._state = t), (this._keybindingService = i), (this._domNode = document.createElement("div")), (this._domNode.className = "findOptionsWidget"), (this._domNode.style.display = "none"), (this._domNode.style.top = "10px"), this._domNode.setAttribute("role", "presentation"), this._domNode.setAttribute("aria-hidden", "true"));
      const s = o.getColorTheme().getColor(m.PR),
        r = o.getColorTheme().getColor(m.Pv),
        a = o.getColorTheme().getColor(m.XE);
      ((this.caseSensitive = this._register(new ue({
        appendTitle: this._keybindingLabelFor($),
        isChecked: this._state.matchCase,
        inputActiveOptionBorder: s,
        inputActiveOptionForeground: r,
        inputActiveOptionBackground: a
      }))), this._domNode.appendChild(this.caseSensitive.domNode), this._register(this.caseSensitive.onChange(() => {
        this._state.change({
          matchCase: this.caseSensitive.checked
        }, !1);
      })), (this.wholeWords = this._register(new ge({
        appendTitle: this._keybindingLabelFor(K),
        isChecked: this._state.wholeWord,
        inputActiveOptionBorder: s,
        inputActiveOptionForeground: r,
        inputActiveOptionBackground: a
      }))), this._domNode.appendChild(this.wholeWords.domNode), this._register(this.wholeWords.onChange(() => {
        this._state.change({
          wholeWord: this.wholeWords.checked
        }, !1);
      })), (this.regex = this._register(new pe({
        appendTitle: this._keybindingLabelFor(q),
        isChecked: this._state.isRegex,
        inputActiveOptionBorder: s,
        inputActiveOptionForeground: r,
        inputActiveOptionBackground: a
      }))), this._domNode.appendChild(this.regex.domNode), this._register(this.regex.onChange(() => {
        this._state.change({
          isRegex: this.regex.checked
        }, !1);
      })), this._editor.addOverlayWidget(this), this._register(this._state.onFindReplaceStateChange(e => {
        let t = !1;
        (e.isRegex && ((this.regex.checked = this._state.isRegex), (t = !0)), e.wholeWord && ((this.wholeWords.checked = this._state.wholeWord), (t = !0)), e.matchCase && ((this.caseSensitive.checked = this._state.matchCase), (t = !0)), !this._state.isRevealed && t && this._revealTemporarily());
      })), this._register(te.j_(this._domNode, e => this._onMouseOut())), this._register(te.nm(this._domNode, "mouseover", e => this._onMouseOver())), this._applyTheme(o.getColorTheme()), this._register(o.onDidColorThemeChange(this._applyTheme.bind(this))));
    }
    _keybindingLabelFor(e) {
      let t = this._keybindingService.lookupKeybinding(e);
      return t ? ` (${t.getLabel()})` : "";
    }
    dispose() {
      (this._editor.removeOverlayWidget(this), super.dispose());
    }
    getId() {
      return fe.ID;
    }
    getDomNode() {
      return this._domNode;
    }
    getPosition() {
      return {
        preference: 0
      };
    }
    highlightFindOptions() {
      this._revealTemporarily();
    }
    _revealTemporarily() {
      (this._show(), this._hideSoon.schedule());
    }
    _onMouseOut() {
      this._hideSoon.schedule();
    }
    _onMouseOver() {
      this._hideSoon.cancel();
    }
    _show() {
      this._isVisible || ((this._isVisible = !0), (this._domNode.style.display = "block"));
    }
    _hide() {
      this._isVisible && ((this._isVisible = !1), (this._domNode.style.display = "none"));
    }
    _applyTheme(e) {
      let t = {
        inputActiveOptionBorder: e.getColor(m.PR),
        inputActiveOptionForeground: e.getColor(m.Pv),
        inputActiveOptionBackground: e.getColor(m.XE)
      };
      (this.caseSensitive.style(t), this.wholeWords.style(t), this.regex.style(t));
    }
  }
  function me(e, t) {
    return 1 === e || (2 !== e && t);
  }
  ((fe.ID = "editor.contrib.findOptionsWidget"), (0, v.Ic)((e, t) => {
    const i = e.getColor(m.D0);
    i && t.addRule(`.monaco-editor .findOptionsWidget { background-color: ${i}; }`);
    const n = e.getColor(m.Hf);
    n && t.addRule(`.monaco-editor .findOptionsWidget { color: ${n}; }`);
    const o = e.getColor(m.rh);
    o && t.addRule(`.monaco-editor .findOptionsWidget { box-shadow: 0 0 8px 2px ${o}; }`);
    const s = e.getColor(m.lR);
    s && t.addRule(`.monaco-editor .findOptionsWidget { border: 2px solid ${s}; }`);
  }));
  class ve extends o.JT {
    constructor() {
      (super(), (this._onFindReplaceStateChange = this._register(new se.Q5())), (this.onFindReplaceStateChange = this._onFindReplaceStateChange.event), (this._searchString = ""), (this._replaceString = ""), (this._isRevealed = !1), (this._isReplaceRevealed = !1), (this._isRegex = !1), (this._isRegexOverride = 0), (this._wholeWord = !1), (this._wholeWordOverride = 0), (this._matchCase = !1), (this._matchCaseOverride = 0), (this._preserveCase = !1), (this._preserveCaseOverride = 0), (this._searchScope = null), (this._matchesPosition = 0), (this._matchesCount = 0), (this._currentMatch = null), (this._loop = !0));
    }
    get searchString() {
      return this._searchString;
    }
    get replaceString() {
      return this._replaceString;
    }
    get isRevealed() {
      return this._isRevealed;
    }
    get isReplaceRevealed() {
      return this._isReplaceRevealed;
    }
    get isRegex() {
      return me(this._isRegexOverride, this._isRegex);
    }
    get wholeWord() {
      return me(this._wholeWordOverride, this._wholeWord);
    }
    get matchCase() {
      return me(this._matchCaseOverride, this._matchCase);
    }
    get preserveCase() {
      return me(this._preserveCaseOverride, this._preserveCase);
    }
    get actualIsRegex() {
      return this._isRegex;
    }
    get actualWholeWord() {
      return this._wholeWord;
    }
    get actualMatchCase() {
      return this._matchCase;
    }
    get actualPreserveCase() {
      return this._preserveCase;
    }
    get searchScope() {
      return this._searchScope;
    }
    get matchesPosition() {
      return this._matchesPosition;
    }
    get matchesCount() {
      return this._matchesCount;
    }
    get currentMatch() {
      return this._currentMatch;
    }
    changeMatchInfo(e, t, i) {
      let n = {
          moveCursor: !1,
          updateHistory: !1,
          searchString: !1,
          replaceString: !1,
          isRevealed: !1,
          isReplaceRevealed: !1,
          isRegex: !1,
          wholeWord: !1,
          matchCase: !1,
          preserveCase: !1,
          searchScope: !1,
          matchesPosition: !1,
          matchesCount: !1,
          currentMatch: !1,
          loop: !1
        },
        o = !1;
      (0 === t && (e = 0), e > t && (e = t), this._matchesPosition !== e && ((this._matchesPosition = e), (n.matchesPosition = !0), (o = !0)), this._matchesCount !== t && ((this._matchesCount = t), (n.matchesCount = !0), (o = !0)), void 0 !== i && (h.e.equalsRange(this._currentMatch, i) || ((this._currentMatch = i), (n.currentMatch = !0), (o = !0))), o && this._onFindReplaceStateChange.fire(n));
    }
    change(e, t, i = !0) {
      var n;
      let o = {
          moveCursor: t,
          updateHistory: i,
          searchString: !1,
          replaceString: !1,
          isRevealed: !1,
          isReplaceRevealed: !1,
          isRegex: !1,
          wholeWord: !1,
          matchCase: !1,
          preserveCase: !1,
          searchScope: !1,
          matchesPosition: !1,
          matchesCount: !1,
          currentMatch: !1,
          loop: !1
        },
        s = !1;
      const r = this.isRegex,
        a = this.wholeWord,
        l = this.matchCase,
        c = this.preserveCase;
      (void 0 !== e.searchString && this._searchString !== e.searchString && ((this._searchString = e.searchString), (o.searchString = !0), (s = !0)), void 0 !== e.replaceString && this._replaceString !== e.replaceString && ((this._replaceString = e.replaceString), (o.replaceString = !0), (s = !0)), void 0 !== e.isRevealed && this._isRevealed !== e.isRevealed && ((this._isRevealed = e.isRevealed), (o.isRevealed = !0), (s = !0)), void 0 !== e.isReplaceRevealed && this._isReplaceRevealed !== e.isReplaceRevealed && ((this._isReplaceRevealed = e.isReplaceRevealed), (o.isReplaceRevealed = !0), (s = !0)), void 0 !== e.isRegex && (this._isRegex = e.isRegex), void 0 !== e.wholeWord && (this._wholeWord = e.wholeWord), void 0 !== e.matchCase && (this._matchCase = e.matchCase), void 0 !== e.preserveCase && (this._preserveCase = e.preserveCase), void 0 !== e.searchScope && ((null === (n = e.searchScope) || void 0 === n ? void 0 : n.every(e => {
        var t;
        return null === (t = this._searchScope) || void 0 === t ? void 0 : t.some(t => !h.e.equalsRange(t, e));
      })) || ((this._searchScope = e.searchScope), (o.searchScope = !0), (s = !0))), void 0 !== e.loop && this._loop !== e.loop && ((this._loop = e.loop), (o.loop = !0), (s = !0)), (this._isRegexOverride = void 0 !== e.isRegexOverride ? e.isRegexOverride : 0), (this._wholeWordOverride = void 0 !== e.wholeWordOverride ? e.wholeWordOverride : 0), (this._matchCaseOverride = void 0 !== e.matchCaseOverride ? e.matchCaseOverride : 0), (this._preserveCaseOverride = void 0 !== e.preserveCaseOverride ? e.preserveCaseOverride : 0), r !== this.isRegex && ((s = !0), (o.isRegex = !0)), a !== this.wholeWord && ((s = !0), (o.wholeWord = !0)), l !== this.matchCase && ((s = !0), (o.matchCase = !0)), c !== this.preserveCase && ((s = !0), (o.preserveCase = !0)), s && this._onFindReplaceStateChange.fire(o));
    }
    canNavigateBack() {
      return this.canNavigateInLoop() || 1 !== this.matchesPosition;
    }
    canNavigateForward() {
      return (this.canNavigateInLoop() || this.matchesPosition < this.matchesCount);
    }
    canNavigateInLoop() {
      return this._loop || this.matchesCount >= J;
    }
  }
  var _e = i(85152),
    be = i(73098),
    we = i(17301),
    ye = i(1432),
    Ce = (i(80668), i(77927));
  i(31214);
  const xe = le.N("defaultLabel", "input");
  class Se extends ie.$ {
    constructor(e, t, i, n) {
      (super(), (this._showOptionButtons = i), (this.fixFocusOnOptionClickEnabled = !0), (this.imeSessionInProgress = !1), (this._onDidOptionChange = this._register(new se.Q5())), (this.onDidOptionChange = this._onDidOptionChange.event), (this._onKeyDown = this._register(new se.Q5())), (this.onKeyDown = this._onKeyDown.event), (this._onMouseDown = this._register(new se.Q5())), (this.onMouseDown = this._onMouseDown.event), (this._onInput = this._register(new se.Q5())), (this._onKeyUp = this._register(new se.Q5())), (this._onCaseSensitiveKeyDown = this._register(new se.Q5())), (this.onCaseSensitiveKeyDown = this._onCaseSensitiveKeyDown.event), (this._onRegexKeyDown = this._register(new se.Q5())), (this.onRegexKeyDown = this._onRegexKeyDown.event), (this._lastHighlightFindOptions = 0), (this.contextViewProvider = t), (this.placeholder = n.placeholder || ""), (this.validation = n.validation), (this.label = n.label || xe), (this.inputActiveOptionBorder = n.inputActiveOptionBorder), (this.inputActiveOptionForeground = n.inputActiveOptionForeground), (this.inputActiveOptionBackground = n.inputActiveOptionBackground), (this.inputBackground = n.inputBackground), (this.inputForeground = n.inputForeground), (this.inputBorder = n.inputBorder), (this.inputValidationInfoBorder = n.inputValidationInfoBorder), (this.inputValidationInfoBackground = n.inputValidationInfoBackground), (this.inputValidationInfoForeground = n.inputValidationInfoForeground), (this.inputValidationWarningBorder = n.inputValidationWarningBorder), (this.inputValidationWarningBackground = n.inputValidationWarningBackground), (this.inputValidationWarningForeground = n.inputValidationWarningForeground), (this.inputValidationErrorBorder = n.inputValidationErrorBorder), (this.inputValidationErrorBackground = n.inputValidationErrorBackground), (this.inputValidationErrorForeground = n.inputValidationErrorForeground));
      const o = n.appendCaseSensitiveLabel || "",
        s = n.appendWholeWordsLabel || "",
        r = n.appendRegexLabel || "",
        a = n.history || [],
        l = !!n.flexibleHeight,
        c = !!n.flexibleWidth,
        d = n.flexibleMaxHeight;
      ((this.domNode = document.createElement("div")), this.domNode.classList.add("monaco-findInput"), (this.inputBox = this._register(new Ce.p(this.domNode, this.contextViewProvider, {
        placeholder: this.placeholder || "",
        ariaLabel: this.label || "",
        validationOptions: {
          validation: this.validation
        },
        inputBackground: this.inputBackground,
        inputForeground: this.inputForeground,
        inputBorder: this.inputBorder,
        inputValidationInfoBackground: this.inputValidationInfoBackground,
        inputValidationInfoForeground: this.inputValidationInfoForeground,
        inputValidationInfoBorder: this.inputValidationInfoBorder,
        inputValidationWarningBackground: this.inputValidationWarningBackground,
        inputValidationWarningForeground: this.inputValidationWarningForeground,
        inputValidationWarningBorder: this.inputValidationWarningBorder,
        inputValidationErrorBackground: this.inputValidationErrorBackground,
        inputValidationErrorForeground: this.inputValidationErrorForeground,
        inputValidationErrorBorder: this.inputValidationErrorBorder,
        history: a,
        showHistoryHint: n.showHistoryHint,
        flexibleHeight: l,
        flexibleWidth: c,
        flexibleMaxHeight: d
      }))), (this.regex = this._register(new pe({
        appendTitle: r,
        isChecked: !1,
        inputActiveOptionBorder: this.inputActiveOptionBorder,
        inputActiveOptionForeground: this.inputActiveOptionForeground,
        inputActiveOptionBackground: this.inputActiveOptionBackground
      }))), this._register(this.regex.onChange(e => {
        (this._onDidOptionChange.fire(e), !e && this.fixFocusOnOptionClickEnabled && this.inputBox.focus(), this.validate());
      })), this._register(this.regex.onKeyDown(e => {
        this._onRegexKeyDown.fire(e);
      })), (this.wholeWords = this._register(new ge({
        appendTitle: s,
        isChecked: !1,
        inputActiveOptionBorder: this.inputActiveOptionBorder,
        inputActiveOptionForeground: this.inputActiveOptionForeground,
        inputActiveOptionBackground: this.inputActiveOptionBackground
      }))), this._register(this.wholeWords.onChange(e => {
        (this._onDidOptionChange.fire(e), !e && this.fixFocusOnOptionClickEnabled && this.inputBox.focus(), this.validate());
      })), (this.caseSensitive = this._register(new ue({
        appendTitle: o,
        isChecked: !1,
        inputActiveOptionBorder: this.inputActiveOptionBorder,
        inputActiveOptionForeground: this.inputActiveOptionForeground,
        inputActiveOptionBackground: this.inputActiveOptionBackground
      }))), this._register(this.caseSensitive.onChange(e => {
        (this._onDidOptionChange.fire(e), !e && this.fixFocusOnOptionClickEnabled && this.inputBox.focus(), this.validate());
      })), this._register(this.caseSensitive.onKeyDown(e => {
        this._onCaseSensitiveKeyDown.fire(e);
      })), this._showOptionButtons && (this.inputBox.paddingRight = this.caseSensitive.width() + this.wholeWords.width() + this.regex.width()));
      let h = [this.caseSensitive.domNode, this.wholeWords.domNode, this.regex.domNode];
      this.onkeydown(this.domNode, e => {
        if (e.equals(15) || e.equals(17) || e.equals(9)) {
          let t = h.indexOf(document.activeElement);
          if (t >= 0) {
            let i = -1;
            (e.equals(17) ? (i = (t + 1) % h.length) : e.equals(15) && (i = 0 === t ? h.length - 1 : t - 1), e.equals(9) ? (h[t].blur(), this.inputBox.focus()) : i >= 0 && h[i].focus(), te.zB.stop(e, !0));
          }
        }
      });
      let u = document.createElement("div");
      ((u.className = "controls"), (u.style.display = this._showOptionButtons ? "block" : "none"), u.appendChild(this.caseSensitive.domNode), u.appendChild(this.wholeWords.domNode), u.appendChild(this.regex.domNode), this.domNode.appendChild(u), e && e.appendChild(this.domNode), this._register(te.nm(this.inputBox.inputElement, "compositionstart", e => {
        this.imeSessionInProgress = !0;
      })), this._register(te.nm(this.inputBox.inputElement, "compositionend", e => {
        ((this.imeSessionInProgress = !1), this._onInput.fire());
      })), this.onkeydown(this.inputBox.inputElement, e => this._onKeyDown.fire(e)), this.onkeyup(this.inputBox.inputElement, e => this._onKeyUp.fire(e)), this.oninput(this.inputBox.inputElement, e => this._onInput.fire()), this.onmousedown(this.inputBox.inputElement, e => this._onMouseDown.fire(e)));
    }
    enable() {
      (this.domNode.classList.remove("disabled"), this.inputBox.enable(), this.regex.enable(), this.wholeWords.enable(), this.caseSensitive.enable());
    }
    disable() {
      (this.domNode.classList.add("disabled"), this.inputBox.disable(), this.regex.disable(), this.wholeWords.disable(), this.caseSensitive.disable());
    }
    setFocusInputOnOptionClick(e) {
      this.fixFocusOnOptionClickEnabled = e;
    }
    setEnabled(e) {
      e ? this.enable() : this.disable();
    }
    getValue() {
      return this.inputBox.value;
    }
    setValue(e) {
      this.inputBox.value !== e && (this.inputBox.value = e);
    }
    style(e) {
      ((this.inputActiveOptionBorder = e.inputActiveOptionBorder), (this.inputActiveOptionForeground = e.inputActiveOptionForeground), (this.inputActiveOptionBackground = e.inputActiveOptionBackground), (this.inputBackground = e.inputBackground), (this.inputForeground = e.inputForeground), (this.inputBorder = e.inputBorder), (this.inputValidationInfoBackground = e.inputValidationInfoBackground), (this.inputValidationInfoForeground = e.inputValidationInfoForeground), (this.inputValidationInfoBorder = e.inputValidationInfoBorder), (this.inputValidationWarningBackground = e.inputValidationWarningBackground), (this.inputValidationWarningForeground = e.inputValidationWarningForeground), (this.inputValidationWarningBorder = e.inputValidationWarningBorder), (this.inputValidationErrorBackground = e.inputValidationErrorBackground), (this.inputValidationErrorForeground = e.inputValidationErrorForeground), (this.inputValidationErrorBorder = e.inputValidationErrorBorder), this.applyStyles());
    }
    applyStyles() {
      if (this.domNode) {
        const e = {
          inputActiveOptionBorder: this.inputActiveOptionBorder,
          inputActiveOptionForeground: this.inputActiveOptionForeground,
          inputActiveOptionBackground: this.inputActiveOptionBackground
        };
        (this.regex.style(e), this.wholeWords.style(e), this.caseSensitive.style(e));
        const t = {
          inputBackground: this.inputBackground,
          inputForeground: this.inputForeground,
          inputBorder: this.inputBorder,
          inputValidationInfoBackground: this.inputValidationInfoBackground,
          inputValidationInfoForeground: this.inputValidationInfoForeground,
          inputValidationInfoBorder: this.inputValidationInfoBorder,
          inputValidationWarningBackground: this.inputValidationWarningBackground,
          inputValidationWarningForeground: this.inputValidationWarningForeground,
          inputValidationWarningBorder: this.inputValidationWarningBorder,
          inputValidationErrorBackground: this.inputValidationErrorBackground,
          inputValidationErrorForeground: this.inputValidationErrorForeground,
          inputValidationErrorBorder: this.inputValidationErrorBorder
        };
        this.inputBox.style(t);
      }
    }
    select() {
      this.inputBox.select();
    }
    focus() {
      this.inputBox.focus();
    }
    getCaseSensitive() {
      return this.caseSensitive.checked;
    }
    setCaseSensitive(e) {
      this.caseSensitive.checked = e;
    }
    getWholeWords() {
      return this.wholeWords.checked;
    }
    setWholeWords(e) {
      this.wholeWords.checked = e;
    }
    getRegex() {
      return this.regex.checked;
    }
    setRegex(e) {
      ((this.regex.checked = e), this.validate());
    }
    focusOnCaseSensitive() {
      this.caseSensitive.focus();
    }
    highlightFindOptions() {
      (this.domNode.classList.remove("highlight-" + this._lastHighlightFindOptions), (this._lastHighlightFindOptions = 1 - this._lastHighlightFindOptions), this.domNode.classList.add("highlight-" + this._lastHighlightFindOptions));
    }
    validate() {
      this.inputBox.validate();
    }
    clearMessage() {
      this.inputBox.hideMessage();
    }
  }
  const Lg = new Language(modifyState.language);
  const ke = le.N("defaultLabel", "input"),
    Le = le.N("label.preserveCaseCheckbox", Lg.preserveCase());
  class Ne extends ae {
    constructor(e) {
      super({
        icon: ne.lA.preserveCase,
        title: Le + e.appendTitle,
        isChecked: e.isChecked,
        inputActiveOptionBorder: e.inputActiveOptionBorder,
        inputActiveOptionForeground: e.inputActiveOptionForeground,
        inputActiveOptionBackground: e.inputActiveOptionBackground
      });
    }
  }
  class De extends ie.$ {
    constructor(e, t, i, n) {
      (super(), (this._showOptionButtons = i), (this.fixFocusOnOptionClickEnabled = !0), (this.cachedOptionsWidth = 0), (this._onDidOptionChange = this._register(new se.Q5())), (this.onDidOptionChange = this._onDidOptionChange.event), (this._onKeyDown = this._register(new se.Q5())), (this.onKeyDown = this._onKeyDown.event), (this._onMouseDown = this._register(new se.Q5())), (this._onInput = this._register(new se.Q5())), (this._onKeyUp = this._register(new se.Q5())), (this._onPreserveCaseKeyDown = this._register(new se.Q5())), (this.onPreserveCaseKeyDown = this._onPreserveCaseKeyDown.event), (this.contextViewProvider = t), (this.placeholder = n.placeholder || ""), (this.validation = n.validation), (this.label = n.label || ke), (this.inputActiveOptionBorder = n.inputActiveOptionBorder), (this.inputActiveOptionForeground = n.inputActiveOptionForeground), (this.inputActiveOptionBackground = n.inputActiveOptionBackground), (this.inputBackground = n.inputBackground), (this.inputForeground = n.inputForeground), (this.inputBorder = n.inputBorder), (this.inputValidationInfoBorder = n.inputValidationInfoBorder), (this.inputValidationInfoBackground = n.inputValidationInfoBackground), (this.inputValidationInfoForeground = n.inputValidationInfoForeground), (this.inputValidationWarningBorder = n.inputValidationWarningBorder), (this.inputValidationWarningBackground = n.inputValidationWarningBackground), (this.inputValidationWarningForeground = n.inputValidationWarningForeground), (this.inputValidationErrorBorder = n.inputValidationErrorBorder), (this.inputValidationErrorBackground = n.inputValidationErrorBackground), (this.inputValidationErrorForeground = n.inputValidationErrorForeground));
      const o = n.appendPreserveCaseLabel || "",
        s = n.history || [],
        r = !!n.flexibleHeight,
        a = !!n.flexibleWidth,
        l = n.flexibleMaxHeight;
      ((this.domNode = document.createElement("div")), this.domNode.classList.add("monaco-findInput"), (this.inputBox = this._register(new Ce.p(this.domNode, this.contextViewProvider, {
        ariaLabel: this.label || "",
        placeholder: this.placeholder || "",
        validationOptions: {
          validation: this.validation
        },
        inputBackground: this.inputBackground,
        inputForeground: this.inputForeground,
        inputBorder: this.inputBorder,
        inputValidationInfoBackground: this.inputValidationInfoBackground,
        inputValidationInfoForeground: this.inputValidationInfoForeground,
        inputValidationInfoBorder: this.inputValidationInfoBorder,
        inputValidationWarningBackground: this.inputValidationWarningBackground,
        inputValidationWarningForeground: this.inputValidationWarningForeground,
        inputValidationWarningBorder: this.inputValidationWarningBorder,
        inputValidationErrorBackground: this.inputValidationErrorBackground,
        inputValidationErrorForeground: this.inputValidationErrorForeground,
        inputValidationErrorBorder: this.inputValidationErrorBorder,
        history: s,
        showHistoryHint: n.showHistoryHint,
        flexibleHeight: r,
        flexibleWidth: a,
        flexibleMaxHeight: l
      }))), (this.preserveCase = this._register(new Ne({
        appendTitle: o,
        isChecked: !1,
        inputActiveOptionBorder: this.inputActiveOptionBorder,
        inputActiveOptionForeground: this.inputActiveOptionForeground,
        inputActiveOptionBackground: this.inputActiveOptionBackground
      }))), this._register(this.preserveCase.onChange(e => {
        (this._onDidOptionChange.fire(e), !e && this.fixFocusOnOptionClickEnabled && this.inputBox.focus(), this.validate());
      })), this._register(this.preserveCase.onKeyDown(e => {
        this._onPreserveCaseKeyDown.fire(e);
      })), this._showOptionButtons ? (this.cachedOptionsWidth = this.preserveCase.width()) : (this.cachedOptionsWidth = 0));
      let c = [this.preserveCase.domNode];
      this.onkeydown(this.domNode, e => {
        if (e.equals(15) || e.equals(17) || e.equals(9)) {
          let t = c.indexOf(document.activeElement);
          if (t >= 0) {
            let i = -1;
            (e.equals(17) ? (i = (t + 1) % c.length) : e.equals(15) && (i = 0 === t ? c.length - 1 : t - 1), e.equals(9) ? (c[t].blur(), this.inputBox.focus()) : i >= 0 && c[i].focus(), te.zB.stop(e, !0));
          }
        }
      });
      let d = document.createElement("div");
      ((d.className = "controls"), (d.style.display = this._showOptionButtons ? "block" : "none"), d.appendChild(this.preserveCase.domNode), this.domNode.appendChild(d), e && e.appendChild(this.domNode), this.onkeydown(this.inputBox.inputElement, e => this._onKeyDown.fire(e)), this.onkeyup(this.inputBox.inputElement, e => this._onKeyUp.fire(e)), this.oninput(this.inputBox.inputElement, e => this._onInput.fire()), this.onmousedown(this.inputBox.inputElement, e => this._onMouseDown.fire(e)));
    }
    enable() {
      (this.domNode.classList.remove("disabled"), this.inputBox.enable(), this.preserveCase.enable());
    }
    disable() {
      (this.domNode.classList.add("disabled"), this.inputBox.disable(), this.preserveCase.disable());
    }
    setEnabled(e) {
      e ? this.enable() : this.disable();
    }
    style(e) {
      ((this.inputActiveOptionBorder = e.inputActiveOptionBorder), (this.inputActiveOptionForeground = e.inputActiveOptionForeground), (this.inputActiveOptionBackground = e.inputActiveOptionBackground), (this.inputBackground = e.inputBackground), (this.inputForeground = e.inputForeground), (this.inputBorder = e.inputBorder), (this.inputValidationInfoBackground = e.inputValidationInfoBackground), (this.inputValidationInfoForeground = e.inputValidationInfoForeground), (this.inputValidationInfoBorder = e.inputValidationInfoBorder), (this.inputValidationWarningBackground = e.inputValidationWarningBackground), (this.inputValidationWarningForeground = e.inputValidationWarningForeground), (this.inputValidationWarningBorder = e.inputValidationWarningBorder), (this.inputValidationErrorBackground = e.inputValidationErrorBackground), (this.inputValidationErrorForeground = e.inputValidationErrorForeground), (this.inputValidationErrorBorder = e.inputValidationErrorBorder), this.applyStyles());
    }
    applyStyles() {
      if (this.domNode) {
        const e = {
          inputActiveOptionBorder: this.inputActiveOptionBorder,
          inputActiveOptionForeground: this.inputActiveOptionForeground,
          inputActiveOptionBackground: this.inputActiveOptionBackground
        };
        this.preserveCase.style(e);
        const t = {
          inputBackground: this.inputBackground,
          inputForeground: this.inputForeground,
          inputBorder: this.inputBorder,
          inputValidationInfoBackground: this.inputValidationInfoBackground,
          inputValidationInfoForeground: this.inputValidationInfoForeground,
          inputValidationInfoBorder: this.inputValidationInfoBorder,
          inputValidationWarningBackground: this.inputValidationWarningBackground,
          inputValidationWarningForeground: this.inputValidationWarningForeground,
          inputValidationWarningBorder: this.inputValidationWarningBorder,
          inputValidationErrorBackground: this.inputValidationErrorBackground,
          inputValidationErrorForeground: this.inputValidationErrorForeground,
          inputValidationErrorBorder: this.inputValidationErrorBorder
        };
        this.inputBox.style(t);
      }
    }
    select() {
      this.inputBox.select();
    }
    focus() {
      this.inputBox.focus();
    }
    getPreserveCase() {
      return this.preserveCase.checked;
    }
    setPreserveCase(e) {
      this.preserveCase.checked = e;
    }
    focusOnPreserve() {
      this.preserveCase.focus();
    }
    validate() {
      this.inputBox && this.inputBox.validate();
    }
    set width(e) {
      ((this.inputBox.paddingRight = this.cachedOptionsWidth), (this.inputBox.width = e), (this.domNode.style.width = e + "px"));
    }
    dispose() {
      super.dispose();
    }
  }
  var Ie = i(49989),
    Ee = i(79599),
    Te = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    Me = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  const Ae = "historyNavigationWidget",
    Oe = "historyNavigationForwardsEnabled",
    Pe = "historyNavigationBackwardsEnabled";
  function Re(e, t) {
    return e.getContext(document.activeElement).getValue(t);
  }
  function Fe(e, t) {
    const i = (function (e, t) {
      return e.createScoped(t.target);
    })(e, t);
    !(function (e, t, i) {
      new D.uy(i, t).bindTo(e);
    })(i, t, Ae);
    return {
      scopedContextKeyService: i,
      historyNavigationForwardsEnablement: new D.uy(Oe, !0).bindTo(i),
      historyNavigationBackwardsEnablement: new D.uy(Pe, !0).bindTo(i)
    };
  }
  let Be = class extends Se {
    constructor(e, t, i, n, o = !1) {
      (super(e, t, o, i), this._register(Fe(n, {
        target: this.inputBox.element,
        historyNavigator: this.inputBox
      }).scopedContextKeyService));
    }
  };
  Be = Te([Me(3, D.i6)], Be);
  let Ve = class extends De {
    constructor(e, t, i, n, o = !1) {
      (super(e, t, o, i), this._register(Fe(n, {
        target: this.inputBox.element,
        historyNavigator: this.inputBox
      }).scopedContextKeyService));
    }
  };
  function We(e) {
    var t, i;
    return ("Up" === (null === (t = e.lookupKeybinding("history.showPrevious")) || void 0 === t ? void 0 : t.getElectronAccelerator()) && "Down" === (null === (i = e.lookupKeybinding("history.showNext")) || void 0 === i ? void 0 : i.getElectronAccelerator()));
  }
  ((Ve = Te([Me(3, D.i6)], Ve)), Ie.W.registerCommandAndKeybindingRule({
    id: "history.showPrevious",
    weight: 200,
    when: D.Ao.and(D.Ao.has(Ae), D.Ao.equals(Pe, !0), Ee._y.Visible.isEqualTo(!1)),
    primary: 16,
    secondary: [528],
    handler: e => {
      const t = Re(e.get(D.i6), Ae);
      if (t) {
        t.historyNavigator.showPreviousValue();
      }
    }
  }), Ie.W.registerCommandAndKeybindingRule({
    id: "history.showNext",
    weight: 200,
    when: D.Ao.and(D.Ao.has(Ae), D.Ao.equals(Oe, !0), Ee._y.Visible.isEqualTo(!1)),
    primary: 18,
    secondary: [530],
    handler: e => {
      const t = Re(e.get(D.i6), Ae);
      if (t) {
        t.historyNavigator.showNextValue();
      }
    }
  }));
  var He = i(59554),
    ze = function (e, t, i, n) {
      return new (i || (i = Promise))(function (o, s) {
        function r(e) {
          try {
            l(n.next(e));
          } catch (e) {
            s(e);
          }
        }
        function a(e) {
          try {
            l(n.throw(e));
          } catch (e) {
            s(e);
          }
        }
        function l(e) {
          var t;
          e.done ? o(e.value) : ((t = e.value), t instanceof i ? t : new i(function (e) {
            e(t);
          })).then(r, a);
        }
        l((n = n.apply(e, t || [])).next());
      });
    };
  const je = (0, He.q5)("find-selection", ne.lA.selection, le.N("findSelectionIcon", "Icon for 'Find in Selection' in the editor find widget.")),
    Ue = (0, He.q5)("find-collapsed", ne.lA.chevronRight, le.N("findCollapsedIcon", "Icon to indicate that the editor find widget is collapsed.")),
    $e = (0, He.q5)("find-expanded", ne.lA.chevronDown, le.N("findExpandedIcon", "Icon to indicate that the editor find widget is expanded.")),
    Ke = (0, He.q5)("find-replace", ne.lA.replace, le.N("findReplaceIcon", "Icon for 'Replace' in the editor find widget.")),
    qe = (0, He.q5)("find-replace-all", ne.lA.replaceAll, le.N("findReplaceAllIcon", "Icon for 'Replace All' in the editor find widget.")),
    Ze = (0, He.q5)("find-previous-match", ne.lA.arrowUp, le.N("findPreviousMatchIcon", "Icon for 'Find Previous' in the editor find widget.")),
    Ge = (0, He.q5)("find-next-match", ne.lA.arrowDown, le.N("findNextMatchIcon", "Icon for 'Find Next' in the editor find widget.")),
    Ye = le.N("label.find", Lg.find()),
    Qe = le.N("placeholder.find", Lg.find()),
    Xe = le.N("label.previousMatchButton", Lg.previousMatch()),
    Je = le.N("label.nextMatchButton", Lg.nextMatch()),
    et = le.N("label.toggleSelectionFind", Lg.findinSelection()),
    tt = le.N("label.closeButton", Lg.close()),
    it = le.N("label.replace", Lg.replace()),
    nt = le.N("placeholder.replace", Lg.replace()),
    ot = le.N("label.replaceButton", Lg.replace()),
    st = le.N("label.replaceAllButton", Lg.replaceAll()),
    rt = le.N("label.toggleReplaceButton", Lg.toggleReplace()),
    at = le.N("title.matchesCountLimit", Lg.resultHighlighted(), J),
    lt = le.N("label.matchesLocation", Lg.numberOf()),
    ct = le.N("label.noResults", Lg.noResults()),
    dt = 419;
  let ht = 69;
  const ut = "ctrlEnterReplaceAll.windows.donotask",
    gt = ye.dz ? 256 : 2048;
  class pt {
    constructor(e) {
      ((this.afterLineNumber = e), (this.heightInPx = 33), (this.suppressMouseDown = !1), (this.domNode = document.createElement("div")), (this.domNode.className = "dock-find-viewzone"));
    }
  }
  function ft(e, t, i) {
    const n = !!t.match(/\n/);
    i && n && i.selectionStart > 0 && e.stopPropagation();
  }
  function mt(e, t, i) {
    const n = !!t.match(/\n/);
    i && n && i.selectionEnd < i.value.length && e.stopPropagation();
  }
  class vt extends ie.$ {
    constructor(e, t, i, s, r, a, l, c, d) {
      (super(), (this._cachedHeight = null), (this._revealTimeouts = []), (this._codeEditor = e), (this._controller = t), (this._state = i), (this._contextViewProvider = s), (this._keybindingService = r), (this._contextKeyService = a), (this._storageService = c), (this._notificationService = d), (this._ctrlEnterReplaceAllWarningPrompted = !!c.getBoolean(ut, 0)), (this._isVisible = !1), (this._isReplaceVisible = !1), (this._ignoreChangeEvent = !1), (this._updateHistoryDelayer = new n.vp(500)), this._register((0, o.OF)(() => this._updateHistoryDelayer.cancel())), this._register(this._state.onFindReplaceStateChange(e => this._onStateChanged(e))), this._buildDomNode(), this._updateButtons(), this._tryUpdateWidgetWidth(), this._findInput.inputBox.layout(), this._register(this._codeEditor.onDidChangeConfiguration(e => {
        if ((e.hasChanged(80) && (this._codeEditor.getOption(80) && this._state.change({
          isReplaceRevealed: !1
        }, !1), this._updateButtons()), e.hasChanged(129) && this._tryUpdateWidgetWidth(), e.hasChanged(2) && this.updateAccessibilitySupport(), e.hasChanged(35))) {
          const e = this._codeEditor.getOption(35).addExtraSpaceOnTop;
          (e && !this._viewZone && ((this._viewZone = new pt(0)), this._showViewZone()), !e && this._viewZone && this._removeViewZone());
        }
      })), this.updateAccessibilitySupport(), this._register(this._codeEditor.onDidChangeCursorSelection(() => {
        this._isVisible && this._updateToggleSelectionFindButton();
      })), this._register(this._codeEditor.onDidFocusEditorWidget(() => ze(this, void 0, void 0, function* () {
        if (this._isVisible) {
          let e = yield this._controller.getGlobalBufferTerm();
          e && e !== this._state.searchString && (this._state.change({
            searchString: e
          }, !1), this._findInput.select());
        }
      }))), (this._findInputFocused = E.bindTo(a)), (this._findFocusTracker = this._register(te.go(this._findInput.inputBox.inputElement))), this._register(this._findFocusTracker.onDidFocus(() => {
        (this._findInputFocused.set(!0), this._updateSearchScope());
      })), this._register(this._findFocusTracker.onDidBlur(() => {
        this._findInputFocused.set(!1);
      })), (this._replaceInputFocused = T.bindTo(a)), (this._replaceFocusTracker = this._register(te.go(this._replaceInput.inputBox.inputElement))), this._register(this._replaceFocusTracker.onDidFocus(() => {
        (this._replaceInputFocused.set(!0), this._updateSearchScope());
      })), this._register(this._replaceFocusTracker.onDidBlur(() => {
        this._replaceInputFocused.set(!1);
      })), this._codeEditor.addOverlayWidget(this), this._codeEditor.getOption(35).addExtraSpaceOnTop && (this._viewZone = new pt(0)), this._applyTheme(l.getColorTheme()), this._register(l.onDidColorThemeChange(this._applyTheme.bind(this))), this._register(this._codeEditor.onDidChangeModel(() => {
        this._isVisible && (this._viewZoneId = void 0);
      })), this._register(this._codeEditor.onDidScrollChange(e => {
        e.scrollTopChanged ? this._layoutViewZone() : setTimeout(() => {
          this._layoutViewZone();
        }, 0);
      })));
    }
    getId() {
      return vt.ID;
    }
    getDomNode() {
      return this._domNode;
    }
    getPosition() {
      return this._isVisible ? {
        preference: 0
      } : null;
    }
    _onStateChanged(e) {
      if (e.searchString) {
        try {
          ((this._ignoreChangeEvent = !0), this._findInput.setValue(this._state.searchString));
        } finally {
          this._ignoreChangeEvent = !1;
        }
        this._updateButtons();
      }
      if ((e.replaceString && (this._replaceInput.inputBox.value = this._state.replaceString), e.isRevealed && (this._state.isRevealed ? this._reveal() : this._hide(!0)), e.isReplaceRevealed && (this._state.isReplaceRevealed ? this._codeEditor.getOption(80) || this._isReplaceVisible || ((this._isReplaceVisible = !0), (this._replaceInput.width = te.w(this._findInput.domNode)), this._updateButtons(), this._replaceInput.inputBox.layout()) : this._isReplaceVisible && ((this._isReplaceVisible = !1), this._updateButtons())), (e.isRevealed || e.isReplaceRevealed) && (this._state.isRevealed || this._state.isReplaceRevealed) && this._tryUpdateHeight() && this._showViewZone(), e.isRegex && this._findInput.setRegex(this._state.isRegex), e.wholeWord && this._findInput.setWholeWords(this._state.wholeWord), e.matchCase && this._findInput.setCaseSensitive(this._state.matchCase), e.preserveCase && this._replaceInput.setPreserveCase(this._state.preserveCase), e.searchScope && (this._state.searchScope ? (this._toggleSelectionFind.checked = !0) : (this._toggleSelectionFind.checked = !1), this._updateToggleSelectionFindButton()), e.searchString || e.matchesCount || e.matchesPosition)) {
        let e = this._state.searchString.length > 0 && 0 === this._state.matchesCount;
        (this._domNode.classList.toggle("no-results", e), this._updateMatchesCount(), this._updateButtons());
      }
      ((e.searchString || e.currentMatch) && this._layoutViewZone(), e.updateHistory && this._delayedUpdateHistory(), e.loop && this._updateButtons());
    }
    _delayedUpdateHistory() {
      this._updateHistoryDelayer.trigger(this._updateHistory.bind(this)).then(void 0, we.dL);
    }
    _updateHistory() {
      (this._state.searchString && this._findInput.inputBox.addToHistory(), this._state.replaceString && this._replaceInput.inputBox.addToHistory());
    }
    _updateMatchesCount() {
      let e;
      if (((this._matchesCount.style.minWidth = ht + "px"), this._state.matchesCount >= J ? (this._matchesCount.title = at) : (this._matchesCount.title = ""), this._matchesCount.firstChild && this._matchesCount.removeChild(this._matchesCount.firstChild), this._state.matchesCount > 0)) {
        let t = String(this._state.matchesCount);
        this._state.matchesCount >= J && (t += "+");
        let i = String(this._state.matchesPosition);
        ("0" === i && (i = "?"), (e = s.WU(lt, i, t)));
      } else e = ct;
      (this._matchesCount.appendChild(document.createTextNode(e)), (0, _e.Z9)(this._getAriaLabel(e, this._state.currentMatch, this._state.searchString)), (ht = Math.max(ht, this._matchesCount.clientWidth)));
    }
    _getAriaLabel(e, t, i) {
      if (e === ct) return "" === i ? le.N("ariaSearchNoResultEmpty", "{0} found", e) : le.N("ariaSearchNoResult", "{0} found for '{1}'", e, i);
      if (t) {
        const n = le.N("ariaSearchNoResultWithLineNum", "{0} found for '{1}', at {2}", e, i, t.startLineNumber + ":" + t.startColumn),
          o = this._codeEditor.getModel();
        if (o && t.startLineNumber <= o.getLineCount() && t.startLineNumber >= 1) {
          return `${o.getLineContent(t.startLineNumber)}, ${n}`;
        }
        return n;
      }
      return le.N("ariaSearchNoResultWithLineNumNoCurrentMatch", "{0} found for '{1}'", e, i);
    }
    _updateToggleSelectionFindButton() {
      let e = this._codeEditor.getSelection(),
        t = !!e && (e.startLineNumber !== e.endLineNumber || e.startColumn !== e.endColumn),
        i = this._toggleSelectionFind.checked;
      this._isVisible && (i || t) ? this._toggleSelectionFind.enable() : this._toggleSelectionFind.disable();
    }
    _updateButtons() {
      (this._findInput.setEnabled(this._isVisible), this._replaceInput.setEnabled(this._isVisible && this._isReplaceVisible), this._updateToggleSelectionFindButton(), this._closeBtn.setEnabled(this._isVisible));
      let e = this._state.searchString.length > 0,
        t = !!this._state.matchesCount;
      (this._prevBtn.setEnabled(this._isVisible && e && t && this._state.canNavigateBack()), this._nextBtn.setEnabled(this._isVisible && e && t && this._state.canNavigateForward()), this._replaceBtn.setEnabled(this._isVisible && this._isReplaceVisible && e), this._replaceAllBtn.setEnabled(this._isVisible && this._isReplaceVisible && e), this._domNode.classList.toggle("replaceToggled", this._isReplaceVisible), this._toggleReplaceBtn.setExpanded(this._isReplaceVisible));
      let i = !this._codeEditor.getOption(80);
      this._toggleReplaceBtn.setEnabled(this._isVisible && i);
    }
    _reveal() {
      if ((this._revealTimeouts.forEach(e => {
        clearTimeout(e);
      }), (this._revealTimeouts = []), !this._isVisible)) {
        this._isVisible = !0;
        const e = this._codeEditor.getSelection();
        switch (this._codeEditor.getOption(35).autoFindInSelection) {
          case "always":
            this._toggleSelectionFind.checked = !0;
            break;
          case "never":
            this._toggleSelectionFind.checked = !1;
            break;
          case "multiline":
            const t = !!e && e.startLineNumber !== e.endLineNumber;
            this._toggleSelectionFind.checked = t;
        }
        (this._tryUpdateWidgetWidth(), this._updateButtons(), this._revealTimeouts.push(setTimeout(() => {
          (this._domNode.classList.add("visible"), this._domNode.setAttribute("aria-hidden", "false"));
        }, 0)), this._revealTimeouts.push(setTimeout(() => {
          this._findInput.validate();
        }, 200)), this._codeEditor.layoutOverlayWidget(this));
        let t = !0;
        if (this._codeEditor.getOption(35).seedSearchStringFromSelection && e) {
          const i = this._codeEditor.getDomNode();
          if (i) {
            const n = te.i(i),
              o = this._codeEditor.getScrolledVisiblePosition(e.getStartPosition()),
              s = n.left + (o ? o.left : 0),
              r = o ? o.top : 0;
            if (this._viewZone && r < this._viewZone.heightInPx) {
              e.endLineNumber > e.startLineNumber && (t = !1);
              const i = te.xQ(this._domNode).left;
              s > i && (t = !1);
              const o = this._codeEditor.getScrolledVisiblePosition(e.getEndPosition());
              n.left + (o ? o.left : 0) > i && (t = !1);
            }
          }
        }
        this._showViewZone(t);
      }
    }
    _hide(e) {
      (this._revealTimeouts.forEach(e => {
        clearTimeout(e);
      }), (this._revealTimeouts = []), this._isVisible && ((this._isVisible = !1), this._updateButtons(), this._domNode.classList.remove("visible"), this._domNode.setAttribute("aria-hidden", "true"), this._findInput.clearMessage(), e && this._codeEditor.focus(), this._codeEditor.layoutOverlayWidget(this), this._removeViewZone()));
    }
    _layoutViewZone(e) {
      if (!this._codeEditor.getOption(35).addExtraSpaceOnTop) return void this._removeViewZone();
      if (!this._isVisible) return;
      const t = this._viewZone;
      void 0 === this._viewZoneId && t && this._codeEditor.changeViewZones(i => {
        ((t.heightInPx = this._getHeight()), (this._viewZoneId = i.addZone(t)), this._codeEditor.setScrollTop(e || this._codeEditor.getScrollTop() + t.heightInPx));
      });
    }
    _showViewZone(e = !0) {
      if (!this._isVisible) return;
      if (!this._codeEditor.getOption(35).addExtraSpaceOnTop) return;
      void 0 === this._viewZone && (this._viewZone = new pt(0));
      const t = this._viewZone;
      this._codeEditor.changeViewZones(i => {
        if (void 0 !== this._viewZoneId) {
          const n = this._getHeight();
          if (n === t.heightInPx) return;
          let o = n - t.heightInPx;
          return ((t.heightInPx = n), i.layoutZone(this._viewZoneId), void (e && this._codeEditor.setScrollTop(this._codeEditor.getScrollTop() + o)));
        }
        {
          let n = this._getHeight();
          if (((n -= this._codeEditor.getOption(74).top), n <= 0)) return;
          ((t.heightInPx = n), (this._viewZoneId = i.addZone(t)), e && this._codeEditor.setScrollTop(this._codeEditor.getScrollTop() + n));
        }
      });
    }
    _removeViewZone() {
      this._codeEditor.changeViewZones(e => {
        void 0 !== this._viewZoneId && (e.removeZone(this._viewZoneId), (this._viewZoneId = void 0), this._viewZone && (this._codeEditor.setScrollTop(this._codeEditor.getScrollTop() - this._viewZone.heightInPx), (this._viewZone = void 0)));
      });
    }
    _applyTheme(e) {
      let t = {
        inputActiveOptionBorder: e.getColor(m.PR),
        inputActiveOptionBackground: e.getColor(m.XE),
        inputActiveOptionForeground: e.getColor(m.Pv),
        inputBackground: e.getColor(m.sE),
        inputForeground: e.getColor(m.zJ),
        inputBorder: e.getColor(m.dt),
        inputValidationInfoBackground: e.getColor(m._l),
        inputValidationInfoForeground: e.getColor(m.YI),
        inputValidationInfoBorder: e.getColor(m.EP),
        inputValidationWarningBackground: e.getColor(m.RV),
        inputValidationWarningForeground: e.getColor(m.SU),
        inputValidationWarningBorder: e.getColor(m.C3),
        inputValidationErrorBackground: e.getColor(m.p),
        inputValidationErrorForeground: e.getColor(m._t),
        inputValidationErrorBorder: e.getColor(m.OZ)
      };
      (this._findInput.style(t), this._replaceInput.style(t), this._toggleSelectionFind.style(t));
    }
    _tryUpdateWidgetWidth() {
      if (!this._isVisible) return;
      if (!te.Uw(this._domNode)) return;
      const e = this._codeEditor.getLayoutInfo();
      if (e.contentWidth <= 0) return void this._domNode.classList.add("hiddenEditor");
      this._domNode.classList.contains("hiddenEditor") && this._domNode.classList.remove("hiddenEditor");
      const t = e.width,
        i = e.minimap.minimapWidth;
      let n = !1,
        o = !1,
        s = !1;
      if (this._resized) {
        if (te.w(this._domNode) > dt) return ((this._domNode.style.maxWidth = t - 28 - i - 15 + "px"), void (this._replaceInput.width = te.w(this._findInput.domNode)));
      }
      if ((447 + i >= t && (o = !0), 447 + i - ht >= t && (s = !0), 447 + i - ht >= t + 50 && (n = !0), this._domNode.classList.toggle("collapsed-find-widget", n), this._domNode.classList.toggle("narrow-find-widget", s), this._domNode.classList.toggle("reduced-find-widget", o), s || n || (this._domNode.style.maxWidth = t - 28 - i - 15 + "px"), this._resized)) {
        this._findInput.inputBox.layout();
        let e = this._findInput.inputBox.element.clientWidth;
        e > 0 && (this._replaceInput.width = e);
      } else this._isReplaceVisible && (this._replaceInput.width = te.w(this._findInput.domNode));
    }
    _getHeight() {
      let e = 0;
      return ((e += 4), (e += this._findInput.inputBox.height + 2), this._isReplaceVisible && ((e += 4), (e += this._replaceInput.inputBox.height + 2)), (e += 4), e);
    }
    _tryUpdateHeight() {
      const e = this._getHeight();
      return ((null === this._cachedHeight || this._cachedHeight !== e) && ((this._cachedHeight = e), (this._domNode.style.height = `${e}px`), !0));
    }
    focusFindInput() {
      (this._findInput.select(), this._findInput.focus());
    }
    focusReplaceInput() {
      (this._replaceInput.select(), this._replaceInput.focus());
    }
    highlightFindOptions() {
      this._findInput.highlightFindOptions();
    }
    _updateSearchScope() {
      if (this._codeEditor.hasModel() && this._toggleSelectionFind.checked) {
        let e = this._codeEditor.getSelections();
        (e.map(e => {
          1 === e.endColumn && e.endLineNumber > e.startLineNumber && (e = e.setEndPosition(e.endLineNumber - 1, this._codeEditor.getModel().getLineMaxColumn(e.endLineNumber - 1)));
          const t = this._state.currentMatch;
          return e.startLineNumber === e.endLineNumber || h.e.equalsRange(e, t) ? null : e;
        }).filter(e => !!e), e.length && this._state.change({
          searchScope: e
        }, !0));
      }
    }
    _onFindInputMouseDown(e) {
      e.middleButton && e.stopPropagation();
    }
    _onFindInputKeyDown(e) {
      return e.equals(3 | gt) ? (this._keybindingService.dispatchEvent(e, e.target) || this._findInput.inputBox.insertAtCursor("\n"), void e.preventDefault()) : e.equals(2) ? (this._isReplaceVisible ? this._replaceInput.focus() : this._findInput.focusOnCaseSensitive(), void e.preventDefault()) : e.equals(2066) ? (this._codeEditor.focus(), void e.preventDefault()) : e.equals(16) ? ft(e, this._findInput.getValue(), this._findInput.domNode.querySelector("textarea")) : e.equals(18) ? mt(e, this._findInput.getValue(), this._findInput.domNode.querySelector("textarea")) : void 0;
    }
    _onReplaceInputKeyDown(e) {
      return e.equals(3 | gt) ? (this._keybindingService.dispatchEvent(e, e.target) || (ye.ED && ye.tY && !this._ctrlEnterReplaceAllWarningPrompted && (this._notificationService.info(le.N("ctrlEnter.keybindingChanged", "Ctrl+Enter now inserts line break instead of replacing all. You can modify the keybinding for editor.action.replaceAll to override this behavior.")), (this._ctrlEnterReplaceAllWarningPrompted = !0), this._storageService.store(ut, !0, 0, 0)), this._replaceInput.inputBox.insertAtCursor("\n")), void e.preventDefault()) : e.equals(2) ? (this._findInput.focusOnCaseSensitive(), void e.preventDefault()) : e.equals(1026) ? (this._findInput.focus(), void e.preventDefault()) : e.equals(2066) ? (this._codeEditor.focus(), void e.preventDefault()) : e.equals(16) ? ft(e, this._replaceInput.inputBox.value, this._replaceInput.inputBox.element.querySelector("textarea")) : e.equals(18) ? mt(e, this._replaceInput.inputBox.value, this._replaceInput.inputBox.element.querySelector("textarea")) : void 0;
    }
    getVerticalSashLeft(e) {
      return 0;
    }
    _keybindingLabelFor(e) {
      let t = this._keybindingService.lookupKeybinding(e);
      return t ? ` (${t.getLabel()})` : "";
    }
    _buildDomNode() {
      ((this._findInput = this._register(new Be(null, this._contextViewProvider, {
        width: 221,
        label: Ye,
        placeholder: Qe,
        appendCaseSensitiveLabel: this._keybindingLabelFor($),
        appendWholeWordsLabel: this._keybindingLabelFor(K),
        appendRegexLabel: this._keybindingLabelFor(q),
        validation: e => {
          if (0 === e.length || !this._findInput.getRegex()) return null;
          try {
            return (new RegExp(e, "gu"), null);
          } catch (e) {
            return {
              content: e.message
            };
          }
        },
        flexibleHeight: true,
        flexibleWidth: true,
        flexibleMaxHeight: 118,
        showHistoryHint: () => We(this._keybindingService)
      }, this._contextKeyService, !0))), this._findInput.setRegex(!!this._state.isRegex), this._findInput.setCaseSensitive(!!this._state.matchCase), this._findInput.setWholeWords(!!this._state.wholeWord), this._register(this._findInput.onKeyDown(e => this._onFindInputKeyDown(e))), this._register(this._findInput.inputBox.onDidChange(() => {
        this._ignoreChangeEvent || this._state.change({
          searchString: this._findInput.getValue()
        }, !0);
      })), this._register(this._findInput.onDidOptionChange(() => {
        this._state.change({
          isRegex: this._findInput.getRegex(),
          wholeWord: this._findInput.getWholeWords(),
          matchCase: this._findInput.getCaseSensitive()
        }, !0);
      })), this._register(this._findInput.onCaseSensitiveKeyDown(e => {
        e.equals(1026) && this._isReplaceVisible && (this._replaceInput.focus(), e.preventDefault());
      })), this._register(this._findInput.onRegexKeyDown(e => {
        e.equals(2) && this._isReplaceVisible && (this._replaceInput.focusOnPreserve(), e.preventDefault());
      })), this._register(this._findInput.inputBox.onDidHeightChange(e => {
        this._tryUpdateHeight() && this._showViewZone();
      })), ye.IJ && this._register(this._findInput.onMouseDown(e => this._onFindInputMouseDown(e))), (this._matchesCount = document.createElement("div")), (this._matchesCount.className = "matchesCount"), this._updateMatchesCount(), (this._prevBtn = this._register(new _t({
        label: Xe + this._keybindingLabelFor(W),
        icon: Ze,
        onTrigger: () => {
          this._codeEditor.getAction(W).run().then(void 0, we.dL);
        }
      }))), (this._nextBtn = this._register(new _t({
        label: Je + this._keybindingLabelFor(V),
        icon: Ge,
        onTrigger: () => {
          this._codeEditor.getAction(V).run().then(void 0, we.dL);
        }
      }))));
      let e = document.createElement("div");
      ((e.className = "find-part"), e.appendChild(this._findInput.domNode));
      const t = document.createElement("div");
      ((t.className = "find-actions"), e.appendChild(t), t.appendChild(this._matchesCount), t.appendChild(this._prevBtn.domNode), t.appendChild(this._nextBtn.domNode), (this._toggleSelectionFind = this._register(new ae({
        icon: je,
        title: et + this._keybindingLabelFor(Z),
        isChecked: !1
      }))), this._register(this._toggleSelectionFind.onChange(() => {
        if (this._toggleSelectionFind.checked) {
          if (this._codeEditor.hasModel()) {
            let e = this._codeEditor.getSelections();
            (e.map(e => (1 === e.endColumn && e.endLineNumber > e.startLineNumber && (e = e.setEndPosition(e.endLineNumber - 1, this._codeEditor.getModel().getLineMaxColumn(e.endLineNumber - 1))), e.isEmpty() ? null : e)).filter(e => !!e), e.length && this._state.change({
              searchScope: e
            }, !0));
          }
        } else this._state.change({
          searchScope: null
        }, !0);
      })), t.appendChild(this._toggleSelectionFind.domNode), (this._closeBtn = this._register(new _t({
        label: tt + this._keybindingLabelFor(U),
        icon: He.s_,
        onTrigger: () => {
          this._state.change({
            isRevealed: !1,
            searchScope: null
          }, !1);
        },
        onKeyDown: e => {
          e.equals(2) && this._isReplaceVisible && (this._replaceBtn.isEnabled() ? this._replaceBtn.focus() : this._codeEditor.focus(), e.preventDefault());
        }
      }))), t.appendChild(this._closeBtn.domNode), (this._replaceInput = this._register(new Ve(null, void 0, {
        label: it,
        placeholder: nt,
        appendPreserveCaseLabel: this._keybindingLabelFor(G),
        history: [],
        flexibleHeight: true,
        flexibleWidth: true,
        flexibleMaxHeight: 118,
        showHistoryHint: () => We(this._keybindingService)
      }, this._contextKeyService, !0))), this._replaceInput.setPreserveCase(!!this._state.preserveCase), this._register(this._replaceInput.onKeyDown(e => this._onReplaceInputKeyDown(e))), this._register(this._replaceInput.inputBox.onDidChange(() => {
        this._state.change({
          replaceString: this._replaceInput.inputBox.value
        }, !1);
      })), this._register(this._replaceInput.inputBox.onDidHeightChange(e => {
        this._isReplaceVisible && this._tryUpdateHeight() && this._showViewZone();
      })), this._register(this._replaceInput.onDidOptionChange(() => {
        this._state.change({
          preserveCase: this._replaceInput.getPreserveCase()
        }, !0);
      })), this._register(this._replaceInput.onPreserveCaseKeyDown(e => {
        e.equals(2) && (this._prevBtn.isEnabled() ? this._prevBtn.focus() : this._nextBtn.isEnabled() ? this._nextBtn.focus() : this._toggleSelectionFind.enabled ? this._toggleSelectionFind.focus() : this._closeBtn.isEnabled() && this._closeBtn.focus(), e.preventDefault());
      })), (this._replaceBtn = this._register(new _t({
        label: ot + this._keybindingLabelFor(Y),
        icon: Ke,
        onTrigger: () => {
          this._controller.replace();
        },
        onKeyDown: e => {
          e.equals(1026) && (this._closeBtn.focus(), e.preventDefault());
        }
      }))), (this._replaceAllBtn = this._register(new _t({
        label: st + this._keybindingLabelFor(Q),
        icon: qe,
        onTrigger: () => {
          this._controller.replaceAll();
        }
      }))));
      let i = document.createElement("div");
      ((i.className = "replace-part"), i.appendChild(this._replaceInput.domNode));
      const n = document.createElement("div");
      ((n.className = "replace-actions"), i.appendChild(n), n.appendChild(this._replaceBtn.domNode), n.appendChild(this._replaceAllBtn.domNode), (this._toggleReplaceBtn = this._register(new _t({
        label: rt,
        className: "codicon toggle left",
        onTrigger: () => {
          (this._state.change({
            isReplaceRevealed: !this._isReplaceVisible
          }, !1), this._isReplaceVisible && ((this._replaceInput.width = te.w(this._findInput.domNode)), this._replaceInput.inputBox.layout()), this._showViewZone());
        }
      }))), this._toggleReplaceBtn.setExpanded(this._isReplaceVisible), (this._domNode = document.createElement("div")), (this._domNode.className = "editor-widget find-widget"), this._domNode.setAttribute("aria-hidden", "true"), (this._domNode.style.width = "419px"), this._domNode.appendChild(this._toggleReplaceBtn.domNode), this._domNode.appendChild(e), this._domNode.appendChild(i), (this._resizeSash = new be.g(this._domNode, this, {
        orientation: 0,
        size: 2
      })), (this._resized = !1));
      let o = dt;
      (this._register(this._resizeSash.onDidStart(() => {
        o = te.w(this._domNode);
      })), this._register(this._resizeSash.onDidChange(e => {
        this._resized = !0;
        let t = o + e.startX - e.currentX;
        if (t < dt) return;
        t > (parseFloat(te.Dx(this._domNode).maxWidth) || 0) || ((this._domNode.style.width = `${t}px`), this._isReplaceVisible && (this._replaceInput.width = te.w(this._findInput.domNode)), this._findInput.inputBox.layout(), this._tryUpdateHeight());
      })), this._register(this._resizeSash.onDidReset(() => {
        const e = te.w(this._domNode);
        if (e < dt) return;
        let t = dt;
        if (!this._resized || e === dt) {
          const e = this._codeEditor.getLayoutInfo();
          ((t = e.width - 28 - e.minimap.minimapWidth - 15), (this._resized = !0));
        }
        ((this._domNode.style.width = `${t}px`), this._isReplaceVisible && (this._replaceInput.width = te.w(this._findInput.domNode)), this._findInput.inputBox.layout());
      })));
    }
    updateAccessibilitySupport() {
      const e = this._codeEditor.getOption(2);
      this._findInput.setFocusInputOnOptionClick(2 !== e);
    }
  }
  vt.ID = "editor.contrib.findWidget";
  class _t extends ie.$ {
    constructor(e) {
      (super(), (this._opts = e));
      let t = "button";
      (this._opts.className && (t = t + " " + this._opts.className), this._opts.icon && (t = t + " " + v.kS.asClassName(this._opts.icon)), (this._domNode = document.createElement("div")), (this._domNode.title = this._opts.label), (this._domNode.tabIndex = 0), (this._domNode.className = t), this._domNode.setAttribute("role", "button"), this._domNode.setAttribute("aria-label", this._opts.label), this.onclick(this._domNode, e => {
        (this._opts.onTrigger(), e.preventDefault());
      }), this.onkeydown(this._domNode, e => {
        if (e.equals(10) || e.equals(3)) return (this._opts.onTrigger(), void e.preventDefault());
        this._opts.onKeyDown && this._opts.onKeyDown(e);
      }));
    }
    get domNode() {
      return this._domNode;
    }
    isEnabled() {
      return this._domNode.tabIndex >= 0;
    }
    focus() {
      this._domNode.focus();
    }
    setEnabled(e) {
      (this._domNode.classList.toggle("disabled", !e), this._domNode.setAttribute("aria-disabled", String(!e)), (this._domNode.tabIndex = e ? 0 : -1));
    }
    setExpanded(e) {
      (this._domNode.setAttribute("aria-expanded", String(!!e)), e ? (this._domNode.classList.remove(...v.kS.asClassNameArray(Ue)), this._domNode.classList.add(...v.kS.asClassNameArray($e))) : (this._domNode.classList.remove(...v.kS.asClassNameArray($e)), this._domNode.classList.add(...v.kS.asClassNameArray(Ue))));
    }
  }
  (0, v.Ic)((e, t) => {
    const i = (e, i) => {
      i && t.addRule(`.monaco-editor ${e} { background-color: ${i}; }`);
    };
    (i(".findMatch", e.getColor(m.MU)), i(".currentFindMatch", e.getColor(m.ny)), i(".findScope", e.getColor(m.jU)));
    i(".find-widget", e.getColor(m.D0));
    const n = e.getColor(m.rh);
    n && t.addRule(`.monaco-editor .find-widget { box-shadow: 0 0 8px 2px ${n}; }`);
    const o = e.getColor(m.Ei);
    o && t.addRule(`.monaco-editor .findMatch { border: 1px ${"hc" === e.type ? "dotted" : "solid"} ${o}; box-sizing: border-box; }`);
    const s = e.getColor(m.pn);
    s && t.addRule(`.monaco-editor .currentFindMatch { border: 2px solid ${s}; padding: 1px; box-sizing: border-box; }`);
    const r = e.getColor(m.gk);
    r && t.addRule(`.monaco-editor .findScope { border: 1px ${"hc" === e.type ? "dashed" : "solid"} ${r}; }`);
    const a = e.getColor(m.lR);
    a && t.addRule(`.monaco-editor .find-widget { border: 1px solid ${a}; }`);
    const l = e.getColor(m.Hf);
    l && t.addRule(`.monaco-editor .find-widget { color: ${l}; }`);
    const c = e.getColor(m.Id);
    c && t.addRule(`.monaco-editor .find-widget.no-results .matchesCount { color: ${c}; }`);
    const d = e.getColor(m.Ng);
    if (d) t.addRule(`.monaco-editor .find-widget .monaco-sash { background-color: ${d}; }`);else {
      const i = e.getColor(m.D1);
      i && t.addRule(`.monaco-editor .find-widget .monaco-sash { background-color: ${i}; }`);
    }
    const h = e.getColor(m.lU);
    h && t.addRule(`\n\t\t.monaco-editor .find-widget .button:not(.disabled):hover,\n\t\t.monaco-editor .find-widget .codicon-find-selection:hover {\n\t\t\tbackground-color: ${h} !important;\n\t\t}\n\t`);
    const u = e.getColor(m.R8);
    u && t.addRule(`.monaco-editor .find-widget .monaco-inputbox.synthetic-focus { outline-color: ${u}; }`);
  });
  var bt = i(84144),
    wt = i(84972),
    yt = i(5606),
    Ct = i(91847),
    xt = i(59422),
    St = i(26904),
    kt = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    Lt = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    Nt = function (e, t, i, n) {
      return new (i || (i = Promise))(function (o, s) {
        function r(e) {
          try {
            l(n.next(e));
          } catch (e) {
            s(e);
          }
        }
        function a(e) {
          try {
            l(n.throw(e));
          } catch (e) {
            s(e);
          }
        }
        function l(e) {
          var t;
          e.done ? o(e.value) : ((t = e.value), t instanceof i ? t : new i(function (e) {
            e(t);
          })).then(r, a);
        }
        l((n = n.apply(e, t || [])).next());
      });
    };
  const Dt = 524288;
  function It(e, t = "single", i = !1) {
    if (!e.hasModel()) return null;
    const n = e.getSelection();
    if (("single" === t && n.startLineNumber === n.endLineNumber) || "multiple" === t) if (n.isEmpty()) {
      const t = e.getConfiguredWordAtPosition(n.getStartPosition());
      if (t && !1 === i) return t.word;
    } else if (e.getModel().getValueLengthInRange(n) < Dt) return e.getModel().getValueInRange(n);
    return null;
  }
  let Et = class e extends o.JT {
    constructor(e, t, i, o) {
      (super(), (this._editor = e), (this._findWidgetVisible = I.bindTo(t)), (this._contextKeyService = t), (this._storageService = i), (this._clipboardService = o), (this._updateHistoryDelayer = new n.vp(500)), (this._state = this._register(new ve())), this.loadQueryState(), this._register(this._state.onFindReplaceStateChange(e => this._onStateChanged(e))), (this._model = null), this._register(this._editor.onDidChangeModel(() => {
        let e = this._editor.getModel() && this._state.isRevealed;
        (this.disposeModel(), this._state.change({
          searchScope: null,
          matchCase: this._storageService.getBoolean("editor.matchCase", 1, !1),
          wholeWord: this._storageService.getBoolean("editor.wholeWord", 1, !1),
          isRegex: this._storageService.getBoolean("editor.isRegex", 1, !1),
          preserveCase: this._storageService.getBoolean("editor.preserveCase", 1, !1)
        }, !1), e && this._start({
          forceRevealReplace: !1,
          seedSearchStringFromSelection: "none",
          seedSearchStringFromNonEmptySelection: !1,
          seedSearchStringFromGlobalClipboard: !1,
          shouldFocus: 0,
          shouldAnimate: !1,
          updateSearchScope: !1,
          loop: this._editor.getOption(35).loop
        }));
      })));
    }
    get editor() {
      return this._editor;
    }
    static get(t) {
      return t.getContribution(e.ID);
    }
    dispose() {
      (this.disposeModel(), super.dispose());
    }
    disposeModel() {
      this._model && (this._model.dispose(), (this._model = null));
    }
    _onStateChanged(e) {
      (this.saveQueryState(e), e.isRevealed && (this._state.isRevealed ? this._findWidgetVisible.set(!0) : (this._findWidgetVisible.reset(), this.disposeModel())), e.searchString && this.setGlobalBufferTerm(this._state.searchString));
    }
    saveQueryState(e) {
      (e.isRegex && this._storageService.store("editor.isRegex", this._state.actualIsRegex, 1, 0), e.wholeWord && this._storageService.store("editor.wholeWord", this._state.actualWholeWord, 1, 0), e.matchCase && this._storageService.store("editor.matchCase", this._state.actualMatchCase, 1, 0), e.preserveCase && this._storageService.store("editor.preserveCase", this._state.actualPreserveCase, 1, 0));
    }
    loadQueryState() {
      this._state.change({
        matchCase: this._storageService.getBoolean("editor.matchCase", 1, this._state.matchCase),
        wholeWord: this._storageService.getBoolean("editor.wholeWord", 1, this._state.wholeWord),
        isRegex: this._storageService.getBoolean("editor.isRegex", 1, this._state.isRegex),
        preserveCase: this._storageService.getBoolean("editor.preserveCase", 1, this._state.preserveCase)
      }, !1);
    }
    isFindInputFocused() {
      return !!E.getValue(this._contextKeyService);
    }
    getState() {
      return this._state;
    }
    closeFindWidget() {
      (this._state.change({
        isRevealed: !1,
        searchScope: null
      }, !1), this._editor.focus());
    }
    toggleCaseSensitive() {
      (this._state.change({
        matchCase: !this._state.matchCase
      }, !1), this._state.isRevealed || this.highlightFindOptions());
    }
    toggleWholeWords() {
      (this._state.change({
        wholeWord: !this._state.wholeWord
      }, !1), this._state.isRevealed || this.highlightFindOptions());
    }
    toggleRegex() {
      (this._state.change({
        isRegex: !this._state.isRegex
      }, !1), this._state.isRevealed || this.highlightFindOptions());
    }
    togglePreserveCase() {
      (this._state.change({
        preserveCase: !this._state.preserveCase
      }, !1), this._state.isRevealed || this.highlightFindOptions());
    }
    toggleSearchScope() {
      if (this._state.searchScope) this._state.change({
        searchScope: null
      }, !0);else if (this._editor.hasModel()) {
        let e = this._editor.getSelections();
        (e.map(e => (1 === e.endColumn && e.endLineNumber > e.startLineNumber && (e = e.setEndPosition(e.endLineNumber - 1, this._editor.getModel().getLineMaxColumn(e.endLineNumber - 1))), e.isEmpty() ? null : e)).filter(e => !!e), e.length && this._state.change({
          searchScope: e
        }, !0));
      }
    }
    setSearchString(e) {
      (this._state.isRegex && (e = s.ec(e)), this._state.change({
        searchString: e
      }, !1));
    }
    highlightFindOptions(e = !1) {}
    _start(e) {
      return Nt(this, void 0, void 0, function* () {
        if ((this.disposeModel(), !this._editor.hasModel())) return;
        let t = {
          isRevealed: !0
        };
        if ("single" === e.seedSearchStringFromSelection) {
          let i = It(this._editor, e.seedSearchStringFromSelection, e.seedSearchStringFromNonEmptySelection);
          i && (this._state.isRegex ? (t.searchString = s.ec(i)) : (t.searchString = i));
        } else if ("multiple" === e.seedSearchStringFromSelection && !e.updateSearchScope) {
          let i = It(this._editor, e.seedSearchStringFromSelection);
          i && (t.searchString = i);
        }
        if (!t.searchString && e.seedSearchStringFromGlobalClipboard) {
          let e = yield this.getGlobalBufferTerm();
          if (!this._editor.hasModel()) return;
          e && (t.searchString = e);
        }
        if ((e.forceRevealReplace ? (t.isReplaceRevealed = !0) : this._findWidgetVisible.get() || (t.isReplaceRevealed = !1), e.updateSearchScope)) {
          let e = this._editor.getSelections();
          e.some(e => !e.isEmpty()) && (t.searchScope = e);
        }
        ((t.loop = e.loop), this._state.change(t, !1), this._model || (this._model = new ee(this._editor, this._state)));
      });
    }
    start(e) {
      return this._start(e);
    }
    moveToNextMatch() {
      return !!this._model && (this._model.moveToNextMatch(), !0);
    }
    moveToPrevMatch() {
      return !!this._model && (this._model.moveToPrevMatch(), !0);
    }
    replace() {
      return !!this._model && (this._model.replace(), !0);
    }
    replaceAll() {
      return !!this._model && (this._model.replaceAll(), !0);
    }
    selectAllMatches() {
      return (!!this._model && (this._model.selectAllMatches(), this._editor.focus(), !0));
    }
    getGlobalBufferTerm() {
      return Nt(this, void 0, void 0, function* () {
        return this._editor.getOption(35).globalFindClipboard && this._editor.hasModel() && !this._editor.getModel().isTooLargeForSyncing() ? this._clipboardService.readFindText() : "";
      });
    }
    setGlobalBufferTerm(e) {
      this._editor.getOption(35).globalFindClipboard && this._editor.hasModel() && !this._editor.getModel().isTooLargeForSyncing() && this._clipboardService.writeFindText(e);
    }
  };
  ((Et.ID = "editor.contrib.findController"), (Et = kt([Lt(1, D.i6), Lt(2, St.Uy), Lt(3, wt.p)], Et)));
  let Tt = class extends Et {
    constructor(e, t, i, n, o, s, r, a) {
      (super(e, i, r, a), (this._contextViewService = t), (this._keybindingService = n), (this._themeService = o), (this._notificationService = s), (this._widget = null), (this._findOptionsWidget = null));
    }
    _start(e) {
      const t = Object.create(null, {
        _start: {
          get: () => super._start
        }
      });
      return Nt(this, void 0, void 0, function* () {
        this._widget || this._createFindWidget();
        const i = this._editor.getSelection();
        let n = !1;
        switch (this._editor.getOption(35).autoFindInSelection) {
          case "always":
            n = !0;
            break;
          case "never":
            n = !1;
            break;
          case "multiline":
            n = !!i && i.startLineNumber !== i.endLineNumber;
        }
        ((e.updateSearchScope = n), yield t._start.call(this, e), this._widget && (2 === e.shouldFocus ? this._widget.focusReplaceInput() : 1 === e.shouldFocus && this._widget.focusFindInput()));
      });
    }
    highlightFindOptions(e = !1) {
      (this._widget || this._createFindWidget(), this._state.isRevealed && !e ? this._widget.highlightFindOptions() : this._findOptionsWidget.highlightFindOptions());
    }
    _createFindWidget() {
      ((this._widget = this._register(new vt(this._editor, this, this._state, this._contextViewService, this._keybindingService, this._contextKeyService, this._themeService, this._storageService, this._notificationService))), (this._findOptionsWidget = this._register(new fe(this._editor, this._state, this._keybindingService, this._themeService))));
    }
  };
  Tt = kt([Lt(1, yt.u), Lt(2, D.i6), Lt(3, Ct.d), Lt(4, v.XE), Lt(5, xt.lT), Lt(6, St.Uy), Lt(7, wt.p)], Tt);
  const Mt = (0, r.rn)(new r.jY({
    id: F,
    label: le.N("startFindAction", "Find"),
    alias: "Find",
    precondition: D.Ao.or(a.u.focus, D.Ao.has("editorIsOpen")),
    kbOpts: {
      kbExpr: null,
      primary: 2084,
      weight: 100
    },
    menuOpts: {
      menuId: bt.eH.MenubarEditMenu,
      group: "3_find",
      title: le.N({
        key: "miFind",
        comment: ["&& denotes a mnemonic"]
      }, "&&Find"),
      order: 1
    }
  }));
  Mt.addImplementation(0, (e, t, i) => {
    const n = Et.get(t);
    return (!!n && n.start({
      forceRevealReplace: !1,
      seedSearchStringFromSelection: "never" !== t.getOption(35).seedSearchStringFromSelection ? "single" : "none",
      seedSearchStringFromNonEmptySelection: "selection" === t.getOption(35).seedSearchStringFromSelection,
      seedSearchStringFromGlobalClipboard: t.getOption(35).globalFindClipboard,
      shouldFocus: 1,
      shouldAnimate: !0,
      updateSearchScope: !1,
      loop: t.getOption(35).loop
    }));
  });
  class At extends r.R6 {
    constructor() {
      super({
        id: B,
        label: le.N("startFindWithSelectionAction", "Find With Selection"),
        alias: "Find With Selection",
        precondition: void 0,
        kbOpts: {
          kbExpr: null,
          primary: 0,
          mac: {
            primary: 2083
          },
          weight: 100
        }
      });
    }
    run(e, t) {
      return Nt(this, void 0, void 0, function* () {
        let e = Et.get(t);
        e && (yield e.start({
          forceRevealReplace: !1,
          seedSearchStringFromSelection: "multiple",
          seedSearchStringFromNonEmptySelection: !1,
          seedSearchStringFromGlobalClipboard: !1,
          shouldFocus: 0,
          shouldAnimate: !0,
          updateSearchScope: !1,
          loop: t.getOption(35).loop
        }), e.setGlobalBufferTerm(e.getState().searchString));
      });
    }
  }
  class Ot extends r.R6 {
    run(e, t) {
      return Nt(this, void 0, void 0, function* () {
        let e = Et.get(t);
        e && !this._run(e) && (yield e.start({
          forceRevealReplace: !1,
          seedSearchStringFromSelection: 0 === e.getState().searchString.length && "never" !== t.getOption(35).seedSearchStringFromSelection ? "single" : "none",
          seedSearchStringFromNonEmptySelection: "selection" === t.getOption(35).seedSearchStringFromSelection,
          seedSearchStringFromGlobalClipboard: !0,
          shouldFocus: 0,
          shouldAnimate: !0,
          updateSearchScope: !1,
          loop: t.getOption(35).loop
        }), this._run(e));
      });
    }
  }
  class Pt extends Ot {
    constructor() {
      super({
        id: V,
        label: le.N("findNextMatchAction", "Find Next"),
        alias: "Find Next",
        precondition: void 0,
        kbOpts: [{
          kbExpr: a.u.focus,
          primary: 61,
          mac: {
            primary: 2085,
            secondary: [61]
          },
          weight: 100
        }, {
          kbExpr: D.Ao.and(a.u.focus, E),
          primary: 3,
          weight: 100
        }]
      });
    }
    _run(e) {
      return !!e.moveToNextMatch() && (e.editor.pushUndoStop(), !0);
    }
  }
  class Rt extends Ot {
    constructor() {
      super({
        id: W,
        label: le.N("findPreviousMatchAction", "Find Previous"),
        alias: "Find Previous",
        precondition: void 0,
        kbOpts: [{
          kbExpr: a.u.focus,
          primary: 1085,
          mac: {
            primary: 3109,
            secondary: [1085]
          },
          weight: 100
        }, {
          kbExpr: D.Ao.and(a.u.focus, E),
          primary: 1027,
          weight: 100
        }]
      });
    }
    _run(e) {
      return e.moveToPrevMatch();
    }
  }
  class Ft extends r.R6 {
    run(e, t) {
      return Nt(this, void 0, void 0, function* () {
        let e = Et.get(t);
        if (!e) return;
        const i = "selection" === t.getOption(35).seedSearchStringFromSelection;
        let n = null;
        ("never" !== t.getOption(35).seedSearchStringFromSelection && (n = It(t, "single", i)), n && e.setSearchString(n), this._run(e) || (yield e.start({
          forceRevealReplace: !1,
          seedSearchStringFromSelection: "never" !== t.getOption(35).seedSearchStringFromSelection ? "single" : "none",
          seedSearchStringFromNonEmptySelection: i,
          seedSearchStringFromGlobalClipboard: !1,
          shouldFocus: 0,
          shouldAnimate: !0,
          updateSearchScope: !1,
          loop: t.getOption(35).loop
        }), this._run(e)));
      });
    }
  }
  class Bt extends Ft {
    constructor() {
      super({
        id: H,
        label: le.N("nextSelectionMatchFindAction", "Find Next Selection"),
        alias: "Find Next Selection",
        precondition: void 0,
        kbOpts: {
          kbExpr: a.u.focus,
          primary: 2109,
          weight: 100
        }
      });
    }
    _run(e) {
      return e.moveToNextMatch();
    }
  }
  class Vt extends Ft {
    constructor() {
      super({
        id: z,
        label: le.N("previousSelectionMatchFindAction", "Find Previous Selection"),
        alias: "Find Previous Selection",
        precondition: void 0,
        kbOpts: {
          kbExpr: a.u.focus,
          primary: 3133,
          weight: 100
        }
      });
    }
    _run(e) {
      return e.moveToPrevMatch();
    }
  }
  const Wt = (0, r.rn)(new r.jY({
    id: j,
    label: le.N("startReplace", "Replace"),
    alias: "Replace",
    precondition: D.Ao.or(a.u.focus, D.Ao.has("editorIsOpen")),
    kbOpts: {
      kbExpr: null,
      primary: 2086,
      mac: {
        primary: 2596
      },
      weight: 100
    },
    menuOpts: {
      menuId: bt.eH.MenubarEditMenu,
      group: "3_find",
      title: le.N({
        key: "miReplace",
        comment: ["&& denotes a mnemonic"]
      }, "&&Replace"),
      order: 2
    }
  }));
  (Wt.addImplementation(0, (e, t, i) => {
    if (!t.hasModel() || t.getOption(80)) return !1;
    const n = Et.get(t);
    if (!n) return !1;
    const o = t.getSelection(),
      s = n.isFindInputFocused(),
      r = !o.isEmpty() && o.startLineNumber === o.endLineNumber && "never" !== t.getOption(35).seedSearchStringFromSelection && !s,
      a = s || r ? 2 : 1;
    return n.start({
      forceRevealReplace: !0,
      seedSearchStringFromSelection: r ? "single" : "none",
      seedSearchStringFromNonEmptySelection: "selection" === t.getOption(35).seedSearchStringFromSelection,
      seedSearchStringFromGlobalClipboard: "never" !== t.getOption(35).seedSearchStringFromSelection,
      shouldFocus: a,
      shouldAnimate: !0,
      updateSearchScope: !1,
      loop: t.getOption(35).loop
    });
  }), (0, r._K)(Et.ID, Tt), (0, r.Qr)(At), (0, r.Qr)(Pt), (0, r.Qr)(Rt), (0, r.Qr)(Bt), (0, r.Qr)(Vt));
  const Ht = r._l.bindToContribution(Et.get);
  ((0, r.fK)(new Ht({
    id: U,
    precondition: I,
    handler: e => e.closeFindWidget(),
    kbOpts: {
      weight: 105,
      kbExpr: D.Ao.and(a.u.focus, D.Ao.not("isComposing")),
      primary: 9,
      secondary: [1033]
    }
  })), (0, r.fK)(new Ht({
    id: $,
    precondition: void 0,
    handler: e => e.toggleCaseSensitive(),
    kbOpts: {
      weight: 105,
      kbExpr: a.u.focus,
      primary: M.primary,
      mac: M.mac,
      win: M.win,
      linux: M.linux
    }
  })), (0, r.fK)(new Ht({
    id: K,
    precondition: void 0,
    handler: e => e.toggleWholeWords(),
    kbOpts: {
      weight: 105,
      kbExpr: a.u.focus,
      primary: A.primary,
      mac: A.mac,
      win: A.win,
      linux: A.linux
    }
  })), (0, r.fK)(new Ht({
    id: q,
    precondition: void 0,
    handler: e => e.toggleRegex(),
    kbOpts: {
      weight: 105,
      kbExpr: a.u.focus,
      primary: O.primary,
      mac: O.mac,
      win: O.win,
      linux: O.linux
    }
  })), (0, r.fK)(new Ht({
    id: Z,
    precondition: void 0,
    handler: e => e.toggleSearchScope(),
    kbOpts: {
      weight: 105,
      kbExpr: a.u.focus,
      primary: P.primary,
      mac: P.mac,
      win: P.win,
      linux: P.linux
    }
  })), (0, r.fK)(new Ht({
    id: G,
    precondition: void 0,
    handler: e => e.togglePreserveCase(),
    kbOpts: {
      weight: 105,
      kbExpr: a.u.focus,
      primary: R.primary,
      mac: R.mac,
      win: R.win,
      linux: R.linux
    }
  })), (0, r.fK)(new Ht({
    id: Y,
    precondition: I,
    handler: e => e.replace(),
    kbOpts: {
      weight: 105,
      kbExpr: a.u.focus,
      primary: 3094
    }
  })), (0, r.fK)(new Ht({
    id: Y,
    precondition: I,
    handler: e => e.replace(),
    kbOpts: {
      weight: 105,
      kbExpr: D.Ao.and(a.u.focus, T),
      primary: 3
    }
  })), (0, r.fK)(new Ht({
    id: Q,
    precondition: I,
    handler: e => e.replaceAll(),
    kbOpts: {
      weight: 105,
      kbExpr: a.u.focus,
      primary: 2563
    }
  })), (0, r.fK)(new Ht({
    id: Q,
    precondition: I,
    handler: e => e.replaceAll(),
    kbOpts: {
      weight: 105,
      kbExpr: D.Ao.and(a.u.focus, T),
      primary: void 0,
      mac: {
        primary: 2051
      }
    }
  })), (0, r.fK)(new Ht({
    id: X,
    precondition: I,
    handler: e => e.selectAllMatches(),
    kbOpts: {
      weight: 105,
      kbExpr: a.u.focus,
      primary: 515
    }
  })));
};