module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    SnippetController2: () => m
  }));
  var n = i(5976),
    o = i(16830),
    s = i(24314),
    r = i(3860),
    a = i(29102),
    l = i(79599),
    c = i(63580),
    d = i(38819),
    h = i(43557),
    u = i(87548),
    g = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    p = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  const f = {
    overwriteBefore: 0,
    overwriteAfter: 0,
    undoStopBefore: !0,
    undoStopAfter: !0,
    adjustWhitespace: !0,
    clipboardText: void 0,
    overtypingCapturer: void 0
  };
  let m = class e {
    constructor(t, i, o) {
      ((this._editor = t), (this._logService = i), (this._snippetListener = new n.SL()), (this._modelVersionId = -1), (this._inSnippet = e.InSnippetMode.bindTo(o)), (this._hasNextTabstop = e.HasNextTabstop.bindTo(o)), (this._hasPrevTabstop = e.HasPrevTabstop.bindTo(o)));
    }
    static get(t) {
      return t.getContribution(e.ID);
    }
    dispose() {
      var e;
      (this._inSnippet.reset(), this._hasPrevTabstop.reset(), this._hasNextTabstop.reset(), null === (e = this._session) || void 0 === e || e.dispose(), this._snippetListener.dispose());
    }
    insert(e, t) {
      try {
        this._doInsert(e, void 0 === t ? f : Object.assign(Object.assign({}, f), t));
      } catch (t) {
        (this.cancel(), this._logService.error(t), this._logService.error("snippet_error"), this._logService.error("insert_template=", e), this._logService.error("existing_template=", this._session ? this._session._logInfo() : "<no_session>"));
      }
    }
    _doInsert(e, t) {
      this._editor.hasModel() && (this._snippetListener.clear(), t.undoStopBefore && this._editor.getModel().pushStackElement(), this._session ? this._session.merge(e, t) : ((this._modelVersionId = this._editor.getModel().getAlternativeVersionId()), (this._session = new u.l(this._editor, e, t)), this._session.insert()), t.undoStopAfter && this._editor.getModel().pushStackElement(), this._updateState(), this._snippetListener.add(this._editor.onDidChangeModelContent(e => e.isFlush && this.cancel())), this._snippetListener.add(this._editor.onDidChangeModel(() => this.cancel())), this._snippetListener.add(this._editor.onDidChangeCursorSelection(() => this._updateState())));
    }
    _updateState() {
      if (this._session && this._editor.hasModel()) {
        if (this._modelVersionId === this._editor.getModel().getAlternativeVersionId()) return this.cancel();
        if (!this._session.hasPlaceholder) return this.cancel();
        if (this._session.isAtLastPlaceholder || !this._session.isSelectionWithinPlaceholders()) return this.cancel();
        (this._inSnippet.set(!0), this._hasPrevTabstop.set(!this._session.isAtFirstPlaceholder), this._hasNextTabstop.set(!this._session.isAtLastPlaceholder), this._handleChoice());
      }
    }
    _handleChoice() {
      if (!this._session || !this._editor.hasModel()) return void (this._currentChoice = void 0);
      const {
        choice: e
      } = this._session;
      if (e) {
        if (this._currentChoice !== e) {
          ((this._currentChoice = e), this._editor.setSelections(this._editor.getSelections().map(e => r.Y.fromPositions(e.getStartPosition()))));
          const [t] = e.options;
          (0, l.i5)(this._editor, e.options.map((e, i) => ({
            kind: 13,
            label: e.value,
            insertText: e.value,
            sortText: "a".repeat(i + 1),
            range: s.e.fromPositions(this._editor.getPosition(), this._editor.getPosition().delta(0, t.value.length))
          })));
        }
      } else this._currentChoice = void 0;
    }
    finish() {
      for (; this._inSnippet.get();) this.next();
    }
    cancel(e = !1) {
      var t;
      (this._inSnippet.reset(), this._hasPrevTabstop.reset(), this._hasNextTabstop.reset(), this._snippetListener.clear(), null === (t = this._session) || void 0 === t || t.dispose(), (this._session = void 0), (this._modelVersionId = -1), e && this._editor.setSelections([this._editor.getSelection()]));
    }
    prev() {
      (this._session && this._session.prev(), this._updateState());
    }
    next() {
      (this._session && this._session.next(), this._updateState());
    }
    isInSnippet() {
      return Boolean(this._inSnippet.get());
    }
  };
  ((m.ID = "snippetController2"), (m.InSnippetMode = new d.uy("inSnippetMode", !1, (0, c.N)("inSnippetMode", "Whether the editor in current in snippet mode"))), (m.HasNextTabstop = new d.uy("hasNextTabstop", !1, (0, c.N)("hasNextTabstop", "Whether there is a next tab stop when in snippet mode"))), (m.HasPrevTabstop = new d.uy("hasPrevTabstop", !1, (0, c.N)("hasPrevTabstop", "Whether there is a previous tab stop when in snippet mode"))), (m = g([p(1, h.VZ), p(2, d.i6)], m)), (0, o._K)(m.ID, m));
  const v = o._l.bindToContribution(m.get);
  ((0, o.fK)(new v({
    id: "jumpToNextSnippetPlaceholder",
    precondition: d.Ao.and(m.InSnippetMode, m.HasNextTabstop),
    handler: e => e.next(),
    kbOpts: {
      weight: 130,
      kbExpr: a.u.editorTextFocus,
      primary: 2
    }
  })), (0, o.fK)(new v({
    id: "jumpToPrevSnippetPlaceholder",
    precondition: d.Ao.and(m.InSnippetMode, m.HasPrevTabstop),
    handler: e => e.prev(),
    kbOpts: {
      weight: 130,
      kbExpr: a.u.editorTextFocus,
      primary: 1026
    }
  })), (0, o.fK)(new v({
    id: "leaveSnippet",
    precondition: m.InSnippetMode,
    handler: e => e.cancel(!0),
    kbOpts: {
      weight: 130,
      kbExpr: a.u.editorTextFocus,
      primary: 9,
      secondary: [1033]
    }
  })), (0, o.fK)(new v({
    id: "acceptSnippet",
    precondition: m.InSnippetMode,
    handler: e => e.finish()
  })));
};