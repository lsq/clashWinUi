module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    getOccurrencesAtPosition: () => D
  }));
  var n = i(85152),
    o = i(9488),
    s = i(15393),
    r = i(71050),
    a = i(17301),
    l = i(5976),
    c = i(16830),
    d = i(24314),
    h = i(29102),
    u = i(84973),
    g = i(44174),
    p = i(44101),
    f = i(63580),
    m = i(38819),
    v = i(73910),
    _ = i(97781),
    b = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    w = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  const y = (0, v.P6)("editor.wordHighlightBackground", {
      dark: "#575757B8",
      light: "#57575740",
      hc: null
    }, f.N("wordHighlight", "Background color of a symbol during read-access, like reading a variable. The color must not be opaque so as not to hide underlying decorations."), !0),
    C = (0, v.P6)("editor.wordHighlightStrongBackground", {
      dark: "#004972B8",
      light: "#0e639c40",
      hc: null
    }, f.N("wordHighlightStrong", "Background color of a symbol during write-access, like writing to a variable. The color must not be opaque so as not to hide underlying decorations."), !0),
    x = (0, v.P6)("editor.wordHighlightBorder", {
      light: null,
      dark: null,
      hc: v.xL
    }, f.N("wordHighlightBorder", "Border color of a symbol during read-access, like reading a variable.")),
    S = (0, v.P6)("editor.wordHighlightStrongBorder", {
      light: null,
      dark: null,
      hc: v.xL
    }, f.N("wordHighlightStrongBorder", "Border color of a symbol during write-access, like writing to a variable.")),
    k = (0, v.P6)("editorOverviewRuler.wordHighlightForeground", {
      dark: "#A0A0A0CC",
      light: "#A0A0A0CC",
      hc: "#A0A0A0CC"
    }, f.N("overviewRulerWordHighlightForeground", "Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations."), !0),
    L = (0, v.P6)("editorOverviewRuler.wordHighlightStrongForeground", {
      dark: "#C0A0C0CC",
      light: "#C0A0C0CC",
      hc: "#C0A0C0CC"
    }, f.N("overviewRulerWordHighlightStrongForeground", "Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations."), !0),
    N = new m.uy("hasWordHighlights", !1);
  function D(e, t, i) {
    const n = p.vH.ordered(e);
    return (0, s.Ps)(n.map(n => () => Promise.resolve(n.provideDocumentHighlights(e, t, i)).then(void 0, a.Cp)), o.Of);
  }
  class I {
    constructor(e, t, i) {
      ((this._wordRange = this._getCurrentWordRange(e, t)), (this.result = (0, s.PG)(n => this._compute(e, t, i, n))));
    }
    _getCurrentWordRange(e, t) {
      const i = e.getWordAtPosition(t.getPosition());
      return i ? new d.e(t.startLineNumber, i.startColumn, t.startLineNumber, i.endColumn) : null;
    }
    isValid(e, t, i) {
      const n = t.startLineNumber,
        o = t.startColumn,
        s = t.endColumn,
        r = this._getCurrentWordRange(e, t);
      let a = Boolean(this._wordRange && this._wordRange.equalsRange(r));
      for (let t = 0, r = i.length; !a && t < r; t++) {
        let r = e.getDecorationRange(i[t]);
        r && r.startLineNumber === n && r.startColumn <= o && r.endColumn >= s && (a = !0);
      }
      return a;
    }
    cancel() {
      this.result.cancel();
    }
  }
  class E extends I {
    _compute(e, t, i, n) {
      return D(e, t.getPosition(), n).then(e => e || []);
    }
  }
  class T extends I {
    constructor(e, t, i) {
      (super(e, t, i), (this._selectionIsEmpty = t.isEmpty()));
    }
    _compute(e, t, i, n) {
      return (0, s.Vs)(250, n).then(() => {
        if (!t.isEmpty()) return [];
        const n = e.getWordAtPosition(t.getPosition());
        if (!n || n.word.length > 1e3) return [];
        return e.findMatches(n.word, !0, !1, !0, i, !1).map(e => ({
          range: e.range,
          kind: p.MY.Text
        }));
      });
    }
    isValid(e, t, i) {
      const n = t.isEmpty();
      return this._selectionIsEmpty === n && super.isValid(e, t, i);
    }
  }
  (0, c.sb)("_executeDocumentHighlights", (e, t) => D(e, t, r.T.None));
  class M {
    constructor(e, t) {
      ((this.toUnhook = new l.SL()), (this.workerRequestTokenId = 0), (this.workerRequestCompleted = !1), (this.workerRequestValue = []), (this.lastCursorPositionChangeTime = 0), (this.renderDecorationsTimer = -1), (this.editor = e), (this._hasWordHighlights = N.bindTo(t)), (this._ignorePositionChangeEvent = !1), (this.occurrencesHighlight = this.editor.getOption(71)), (this.model = this.editor.getModel()), this.toUnhook.add(e.onDidChangeCursorPosition(e => {
        this._ignorePositionChangeEvent || (this.occurrencesHighlight && this._onPositionChanged(e));
      })), this.toUnhook.add(e.onDidChangeModelContent(e => {
        this._stopAll();
      })), this.toUnhook.add(e.onDidChangeConfiguration(e => {
        let t = this.editor.getOption(71);
        this.occurrencesHighlight !== t && ((this.occurrencesHighlight = t), this._stopAll());
      })), (this._decorationIds = []), (this.workerRequestTokenId = 0), (this.workerRequest = null), (this.workerRequestCompleted = !1), (this.lastCursorPositionChangeTime = 0), (this.renderDecorationsTimer = -1));
    }
    hasDecorations() {
      return this._decorationIds.length > 0;
    }
    restore() {
      this.occurrencesHighlight && this._run();
    }
    _getSortedHighlights() {
      return o.kX(this._decorationIds.map(e => this.model.getDecorationRange(e)).sort(d.e.compareRangesUsingStarts));
    }
    moveNext() {
      let e = this._getSortedHighlights(),
        t = (e.findIndex(e => e.containsPosition(this.editor.getPosition())) + 1) % e.length,
        i = e[t];
      try {
        ((this._ignorePositionChangeEvent = !0), this.editor.setPosition(i.getStartPosition()), this.editor.revealRangeInCenterIfOutsideViewport(i));
        const o = this._getWord();
        if (o) {
          const s = this.editor.getModel().getLineContent(i.startLineNumber);
          (0, n.Z9)(`${s}, ${t + 1} of ${e.length} for '${o.word}'`);
        }
      } finally {
        this._ignorePositionChangeEvent = !1;
      }
    }
    moveBack() {
      let e = this._getSortedHighlights(),
        t = (e.findIndex(e => e.containsPosition(this.editor.getPosition())) - 1 + e.length) % e.length,
        i = e[t];
      try {
        ((this._ignorePositionChangeEvent = !0), this.editor.setPosition(i.getStartPosition()), this.editor.revealRangeInCenterIfOutsideViewport(i));
        const o = this._getWord();
        if (o) {
          const s = this.editor.getModel().getLineContent(i.startLineNumber);
          (0, n.Z9)(`${s}, ${t + 1} of ${e.length} for '${o.word}'`);
        }
      } finally {
        this._ignorePositionChangeEvent = !1;
      }
    }
    _removeDecorations() {
      this._decorationIds.length > 0 && ((this._decorationIds = this.editor.deltaDecorations(this._decorationIds, [])), this._hasWordHighlights.set(!1));
    }
    _stopAll() {
      (this._removeDecorations(), -1 !== this.renderDecorationsTimer && (clearTimeout(this.renderDecorationsTimer), (this.renderDecorationsTimer = -1)), null !== this.workerRequest && (this.workerRequest.cancel(), (this.workerRequest = null)), this.workerRequestCompleted || (this.workerRequestTokenId++, (this.workerRequestCompleted = !0)));
    }
    _onPositionChanged(e) {
      this.occurrencesHighlight && 3 === e.reason ? this._run() : this._stopAll();
    }
    _getWord() {
      let e = this.editor.getSelection(),
        t = e.startLineNumber,
        i = e.startColumn;
      return this.model.getWordAtPosition({
        lineNumber: t,
        column: i
      });
    }
    _run() {
      let e = this.editor.getSelection();
      if (e.startLineNumber !== e.endLineNumber) return void this._stopAll();
      let t = e.startColumn,
        i = e.endColumn;
      const n = this._getWord();
      if (!n || n.startColumn > t || n.endColumn < i) return void this._stopAll();
      const o = this.workerRequest && this.workerRequest.isValid(this.model, e, this._decorationIds);
      if (((this.lastCursorPositionChangeTime = new Date().getTime()), o)) this.workerRequestCompleted && -1 !== this.renderDecorationsTimer && (clearTimeout(this.renderDecorationsTimer), (this.renderDecorationsTimer = -1), this._beginRenderDecorations());else {
        this._stopAll();
        let e = ++this.workerRequestTokenId;
        ((this.workerRequestCompleted = !1), (this.workerRequest = ((s = this.model), (r = this.editor.getSelection()), (l = this.editor.getOption(115)), p.vH.has(s) ? new E(s, r, l) : new T(s, r, l))), this.workerRequest.result.then(t => {
          e === this.workerRequestTokenId && ((this.workerRequestCompleted = !0), (this.workerRequestValue = t || []), this._beginRenderDecorations());
        }, a.dL));
      }
      var s, r, l;
    }
    _beginRenderDecorations() {
      let e = new Date().getTime(),
        t = this.lastCursorPositionChangeTime + 250;
      e >= t ? ((this.renderDecorationsTimer = -1), this.renderDecorations()) : (this.renderDecorationsTimer = setTimeout(() => {
        this.renderDecorations();
      }, t - e));
    }
    renderDecorations() {
      this.renderDecorationsTimer = -1;
      let e = [];
      for (const t of this.workerRequestValue) t.range && e.push({
        range: t.range,
        options: M._getDecorationOptions(t.kind)
      });
      ((this._decorationIds = this.editor.deltaDecorations(this._decorationIds, e)), this._hasWordHighlights.set(this.hasDecorations()));
    }
    static _getDecorationOptions(e) {
      return e === p.MY.Write ? this._WRITE_OPTIONS : e === p.MY.Text ? this._TEXT_OPTIONS : this._REGULAR_OPTIONS;
    }
    dispose() {
      (this._stopAll(), this.toUnhook.dispose());
    }
  }
  ((M._WRITE_OPTIONS = g.qx.register({
    description: "word-highlight-strong",
    stickiness: 1,
    className: "wordHighlightStrong",
    overviewRuler: {
      color: (0, _.EN)(L),
      position: u.sh.Center
    },
    minimap: {
      color: (0, _.EN)(v.IY),
      position: u.F5.Inline
    }
  })), (M._TEXT_OPTIONS = g.qx.register({
    description: "selection-highlight",
    stickiness: 1,
    className: "selectionHighlight",
    overviewRuler: {
      color: (0, _.EN)(v.SP),
      position: u.sh.Center
    },
    minimap: {
      color: (0, _.EN)(v.IY),
      position: u.F5.Inline
    }
  })), (M._REGULAR_OPTIONS = g.qx.register({
    description: "word-highlight",
    stickiness: 1,
    className: "wordHighlight",
    overviewRuler: {
      color: (0, _.EN)(k),
      position: u.sh.Center
    },
    minimap: {
      color: (0, _.EN)(v.IY),
      position: u.F5.Inline
    }
  })));
  let A = class e extends l.JT {
    constructor(e, t) {
      (super(), (this.wordHighlighter = null));
      const i = () => {
        e.hasModel() && (this.wordHighlighter = new M(e, t));
      };
      (this._register(e.onDidChangeModel(e => {
        (this.wordHighlighter && (this.wordHighlighter.dispose(), (this.wordHighlighter = null)), i());
      })), i());
    }
    static get(t) {
      return t.getContribution(e.ID);
    }
    saveViewState() {
      return !(!this.wordHighlighter || !this.wordHighlighter.hasDecorations());
    }
    moveNext() {
      this.wordHighlighter && this.wordHighlighter.moveNext();
    }
    moveBack() {
      this.wordHighlighter && this.wordHighlighter.moveBack();
    }
    restoreViewState(e) {
      this.wordHighlighter && e && this.wordHighlighter.restore();
    }
    dispose() {
      (this.wordHighlighter && (this.wordHighlighter.dispose(), (this.wordHighlighter = null)), super.dispose());
    }
  };
  ((A.ID = "editor.contrib.wordHighlighter"), (A = b([w(1, m.i6)], A)));
  class O extends c.R6 {
    constructor(e, t) {
      (super(t), (this._isNext = e));
    }
    run(e, t) {
      const i = A.get(t);
      i && (this._isNext ? i.moveNext() : i.moveBack());
    }
  }
  class P extends c.R6 {
    constructor() {
      super({
        id: "editor.action.wordHighlight.trigger",
        label: f.N("wordHighlight.trigger.label", "Trigger Symbol Highlight"),
        alias: "Trigger Symbol Highlight",
        precondition: N.toNegated(),
        kbOpts: {
          kbExpr: h.u.editorTextFocus,
          primary: 0,
          weight: 100
        }
      });
    }
    run(e, t, i) {
      const n = A.get(t);
      n && n.restoreViewState(!0);
    }
  }
  ((0, c._K)(A.ID, A), (0, c.Qr)(class extends O {
    constructor() {
      super(!0, {
        id: "editor.action.wordHighlight.next",
        label: f.N("wordHighlight.next.label", "Go to Next Symbol Highlight"),
        alias: "Go to Next Symbol Highlight",
        precondition: N,
        kbOpts: {
          kbExpr: h.u.editorTextFocus,
          primary: 65,
          weight: 100
        }
      });
    }
  }), (0, c.Qr)(class extends O {
    constructor() {
      super(!1, {
        id: "editor.action.wordHighlight.prev",
        label: f.N("wordHighlight.previous.label", "Go to Previous Symbol Highlight"),
        alias: "Go to Previous Symbol Highlight",
        precondition: N,
        kbOpts: {
          kbExpr: h.u.editorTextFocus,
          primary: 1089,
          weight: 100
        }
      });
    }
  }), (0, c.Qr)(P), (0, _.Ic)((e, t) => {
    const i = e.getColor(v.Rz);
    i && (t.addRule(`.monaco-editor .focused .selectionHighlight { background-color: ${i}; }`), t.addRule(`.monaco-editor .selectionHighlight { background-color: ${i.transparent(0.5)}; }`));
    const n = e.getColor(y);
    n && t.addRule(`.monaco-editor .wordHighlight { background-color: ${n}; }`);
    const o = e.getColor(C);
    o && t.addRule(`.monaco-editor .wordHighlightStrong { background-color: ${o}; }`);
    const s = e.getColor(v.g_);
    s && t.addRule(`.monaco-editor .selectionHighlight { border: 1px ${"hc" === e.type ? "dotted" : "solid"} ${s}; box-sizing: border-box; }`);
    const r = e.getColor(x);
    r && t.addRule(`.monaco-editor .wordHighlight { border: 1px ${"hc" === e.type ? "dashed" : "solid"} ${r}; box-sizing: border-box; }`);
    const a = e.getColor(S);
    a && t.addRule(`.monaco-editor .wordHighlightStrong { border: 1px ${"hc" === e.type ? "dashed" : "solid"} ${a}; box-sizing: border-box; }`);
  }));
};