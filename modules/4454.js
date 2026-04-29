module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    RenameAction: () => H,
    rename: () => V
  }));
  var n = i(85152),
    o = i(15393),
    s = i(71050),
    r = i(17301),
    a = i(5976),
    l = i(98401),
    c = i(70666),
    d = i(39925),
    h = i(16830),
    u = i(66007),
    g = i(11640),
    p = i(50187),
    f = i(24314),
    m = i(29102),
    v = i(44101),
    _ = i(33187),
    b = i(82276),
    w = i(63580),
    y = i(23193),
    C = i(38819),
    x = i(72065),
    S = i(43557),
    k = i(59422),
    L = i(90535),
    N = i(89872),
    D = (i(36999), i(91847)),
    I = i(73910),
    E = i(97781),
    T = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    M = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  const A = new C.uy("renameInputVisible", !1, (0, w.N)("renameInputVisible", "Whether the rename input widget is visible"));
  let O = class {
    constructor(e, t, i, n, o) {
      ((this._editor = e), (this._acceptKeybindings = t), (this._themeService = i), (this._keybindingService = n), (this._disposables = new a.SL()), (this.allowEditorOverflow = !0), (this._visibleContextKey = A.bindTo(o)), this._editor.addContentWidget(this), this._disposables.add(this._editor.onDidChangeConfiguration(e => {
        e.hasChanged(43) && this._updateFont();
      })), this._disposables.add(i.onDidColorThemeChange(this._updateStyles, this)));
    }
    dispose() {
      (this._disposables.dispose(), this._editor.removeContentWidget(this));
    }
    getId() {
      return "__renameInputWidget";
    }
    getDomNode() {
      if (!this._domNode) {
        ((this._domNode = document.createElement("div")), (this._domNode.className = "monaco-editor rename-box"), (this._input = document.createElement("input")), (this._input.className = "rename-input"), (this._input.type = "text"), this._input.setAttribute("aria-label", (0, w.N)("renameAriaLabel", "Rename input. Type new name and press Enter to commit.")), this._domNode.appendChild(this._input), (this._label = document.createElement("div")), (this._label.className = "rename-label"), this._domNode.appendChild(this._label));
        const e = () => {
          var e, t;
          const [i, n] = this._acceptKeybindings;
          (this._keybindingService.lookupKeybinding(i), (this._label.innerText = (0, w.N)({
            key: "label",
            comment: ['placeholders are keybindings, e.g "F2 to Rename, Shift+F2 to Preview"']
          }, "{0} to Rename, {1} to Preview", null === (e = this._keybindingService.lookupKeybinding(i)) || void 0 === e ? void 0 : e.getLabel(), null === (t = this._keybindingService.lookupKeybinding(n)) || void 0 === t ? void 0 : t.getLabel())));
        };
        (e(), this._disposables.add(this._keybindingService.onDidUpdateKeybindings(e)), this._updateFont(), this._updateStyles(this._themeService.getColorTheme()));
      }
      return this._domNode;
    }
    _updateStyles(e) {
      var t, i, n, o;
      if (!this._input || !this._domNode) return;
      const s = e.getColor(I.rh);
      ((this._domNode.style.backgroundColor = String(null !== (t = e.getColor(I.D0)) && void 0 !== t ? t : "")), (this._domNode.style.boxShadow = s ? ` 0 0 8px 2px ${s}` : ""), (this._domNode.style.color = String(null !== (i = e.getColor(I.zJ)) && void 0 !== i ? i : "")), (this._input.style.backgroundColor = String(null !== (n = e.getColor(I.sE)) && void 0 !== n ? n : "")));
      const r = e.getColor(I.dt);
      ((this._input.style.borderWidth = r ? "1px" : "0px"), (this._input.style.borderStyle = r ? "solid" : "none"), (this._input.style.borderColor = null !== (o = null == r ? void 0 : r.toString()) && void 0 !== o ? o : "none"));
    }
    _updateFont() {
      if (!this._input || !this._label) return;
      const e = this._editor.getOption(43);
      ((this._input.style.fontFamily = e.fontFamily), (this._input.style.fontWeight = e.fontWeight), (this._input.style.fontSize = `${e.fontSize}px`), (this._label.style.fontSize = 0.8 * e.fontSize + "px"));
    }
    getPosition() {
      return this._visible ? {
        position: this._position,
        preference: [2, 1]
      } : null;
    }
    afterRender(e) {
      e || this.cancelInput(!0);
    }
    acceptInput(e) {
      this._currentAcceptInput && this._currentAcceptInput(e);
    }
    cancelInput(e) {
      this._currentCancelInput && this._currentCancelInput(e);
    }
    getInput(e, t, i, n, o, s) {
      (this._domNode.classList.toggle("preview", o), (this._position = new p.L(e.startLineNumber, e.startColumn)), (this._input.value = t), this._input.setAttribute("selectionStart", i.toString()), this._input.setAttribute("selectionEnd", n.toString()), (this._input.size = Math.max(1.1 * (e.endColumn - e.startColumn), 20)));
      const r = new a.SL();
      return new Promise(e => {
        ((this._currentCancelInput = t => ((this._currentAcceptInput = void 0), (this._currentCancelInput = void 0), e(t), !0)), (this._currentAcceptInput = i => {
          0 !== this._input.value.trim().length && this._input.value !== t ? ((this._currentAcceptInput = void 0), (this._currentCancelInput = void 0), e({
            newName: this._input.value,
            wantsPreview: o && i
          })) : this.cancelInput(!0);
        }), s.onCancellationRequested(() => this.cancelInput(!0)), r.add(this._editor.onDidBlurEditorWidget(() => this.cancelInput(!1))), this._show());
      }).finally(() => {
        (r.dispose(), this._hide());
      });
    }
    _show() {
      (this._editor.revealLineInCenterIfOutsideViewport(this._position.lineNumber, 0), (this._visible = !0), this._visibleContextKey.set(!0), this._editor.layoutContentWidget(this), setTimeout(() => {
        (this._input.focus(), this._input.setSelectionRange(parseInt(this._input.getAttribute("selectionStart")), parseInt(this._input.getAttribute("selectionEnd"))));
      }, 100));
    }
    _hide() {
      ((this._visible = !1), this._visibleContextKey.reset(), this._editor.layoutContentWidget(this));
    }
  };
  O = T([M(2, E.XE), M(3, D.d), M(4, C.i6)], O);
  var P = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    R = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    F = function (e, t, i, n) {
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
  class B {
    constructor(e, t) {
      ((this.model = e), (this.position = t), (this._providerRenameIdx = 0), (this._providers = v.G0.ordered(e)));
    }
    hasProvider() {
      return this._providers.length > 0;
    }
    resolveRenameLocation(e) {
      return F(this, void 0, void 0, function* () {
        const t = [];
        for (this._providerRenameIdx = 0; this._providerRenameIdx < this._providers.length; this._providerRenameIdx++) {
          const i = this._providers[this._providerRenameIdx];
          if (!i.resolveRenameLocation) break;
          let n = yield i.resolveRenameLocation(this.model, this.position, e);
          if (n) {
            if (!n.rejectReason) return n;
            t.push(n.rejectReason);
          }
        }
        const i = this.model.getWordAtPosition(this.position);
        return i ? {
          range: new f.e(this.position.lineNumber, i.startColumn, this.position.lineNumber, i.endColumn),
          text: i.word,
          rejectReason: t.length > 0 ? t.join("\n") : void 0
        } : {
          range: f.e.fromPositions(this.position),
          text: "",
          rejectReason: t.length > 0 ? t.join("\n") : void 0
        };
      });
    }
    provideRenameEdits(e, t) {
      return F(this, void 0, void 0, function* () {
        return this._provideRenameEdits(e, this._providerRenameIdx, [], t);
      });
    }
    _provideRenameEdits(e, t, i, n) {
      return F(this, void 0, void 0, function* () {
        const o = this._providers[t];
        if (!o) return {
          edits: [],
          rejectReason: i.join("\n")
        };
        const s = yield o.provideRenameEdits(this.model, this.position, e, n);
        return s ? s.rejectReason ? this._provideRenameEdits(e, t + 1, i.concat(s.rejectReason), n) : s : this._provideRenameEdits(e, t + 1, i.concat(w.N("no result", "No result.")), n);
      });
    }
  }
  function V(e, t, i) {
    return F(this, void 0, void 0, function* () {
      const n = new B(e, t),
        o = yield n.resolveRenameLocation(s.T.None);
      return (null == o ? void 0 : o.rejectReason) ? {
        edits: [],
        rejectReason: o.rejectReason
      } : n.provideRenameEdits(i, s.T.None);
    });
  }
  let W = class e {
    constructor(e, t, i, n, r, l, c) {
      ((this.editor = e), (this._instaService = t), (this._notificationService = i), (this._bulkEditService = n), (this._progressService = r), (this._logService = l), (this._configService = c), (this._dispoableStore = new a.SL()), (this._cts = new s.A()), (this._renameInputField = this._dispoableStore.add(new o.Ue(() => this._dispoableStore.add(this._instaService.createInstance(O, this.editor, ["acceptRenameInput", "acceptRenameInputWithPreview"]))))));
    }
    static get(t) {
      return t.getContribution(e.ID);
    }
    dispose() {
      (this._dispoableStore.dispose(), this._cts.dispose(!0));
    }
    run() {
      return F(this, void 0, void 0, function* () {
        if ((this._cts.dispose(!0), !this.editor.hasModel())) return;
        const e = this.editor.getPosition(),
          t = new B(this.editor.getModel(), e);
        if (!t.hasProvider()) return;
        let i;
        this._cts = new d.Dl(this.editor, 5);
        try {
          const e = t.resolveRenameLocation(this._cts.token);
          (this._progressService.showWhile(e, 250), (i = yield e));
        } catch (t) {
          return void b.O.get(this.editor).showMessage(t || w.N("resolveRenameLocationFailed", "An unknown error occurred while resolving rename location"), e);
        }
        if (!i) return;
        if (i.rejectReason) return void b.O.get(this.editor).showMessage(i.rejectReason, e);
        if (this._cts.token.isCancellationRequested) return;
        (this._cts.dispose(), (this._cts = new d.Dl(this.editor, 5, i.range)));
        let s = this.editor.getSelection(),
          r = 0,
          a = i.text.length;
        f.e.isEmpty(s) || f.e.spansMultipleLines(s) || !f.e.containsRange(i.range, s) || ((r = Math.max(0, s.startColumn - i.range.startColumn)), (a = Math.min(i.range.endColumn, s.endColumn) - i.range.startColumn));
        const l = this._bulkEditService.hasPreviewHandler() && this._configService.getValue(this.editor.getModel().uri, "editor.rename.enablePreview"),
          c = yield this._renameInputField.value.getInput(i.range, i.text, r, a, l, this._cts.token);
        if ("boolean" == typeof c) return void (c && this.editor.focus());
        this.editor.focus();
        const h = (0, o.eP)(t.provideRenameEdits(c.newName, this._cts.token), this._cts.token).then(e => F(this, void 0, void 0, function* () {
          e && this.editor.hasModel() && (e.rejectReason ? this._notificationService.info(e.rejectReason) : (this.editor.setSelection(f.e.fromPositions(this.editor.getSelection().getPosition())), this._bulkEditService.apply(u.fo.convert(e), {
            editor: this.editor,
            showPreview: c.wantsPreview,
            label: w.N("label", "Renaming '{0}'", null == i ? void 0 : i.text),
            quotableLabel: w.N("quotableLabel", "Renaming {0}", null == i ? void 0 : i.text)
          }).then(e => {
            e.ariaSummary && (0, n.Z9)(w.N("aria", "Successfully renamed '{0}' to '{1}'. Summary: {2}", i.text, c.newName, e.ariaSummary));
          }).catch(e => {
            (this._notificationService.error(w.N("rename.failedApply", "Rename failed to apply edits")), this._logService.error(e));
          })));
        }), e => {
          (this._notificationService.error(w.N("rename.failed", "Rename failed to compute edits")), this._logService.error(e));
        });
        return (this._progressService.showWhile(h, 250), h);
      });
    }
    acceptRenameInput(e) {
      this._renameInputField.value.acceptInput(e);
    }
    cancelRenameInput() {
      this._renameInputField.value.cancelInput(!0);
    }
  };
  ((W.ID = "editor.contrib.renameController"), (W = P([R(1, x.TG), R(2, k.lT), R(3, u.vu), R(4, L.e), R(5, S.VZ), R(6, _.V)], W)));
  class H extends h.R6 {
    constructor() {
      super({
        id: "editor.action.rename",
        label: w.N("rename.label", "Rename Symbol"),
        alias: "Rename Symbol",
        precondition: C.Ao.and(m.u.writable, m.u.hasRenameProvider),
        kbOpts: {
          kbExpr: m.u.editorTextFocus,
          primary: 60,
          weight: 100
        },
        contextMenuOpts: {
          group: "1_modification",
          order: 1.1
        }
      });
    }
    runCommand(e, t) {
      const i = e.get(g.$),
        [n, o] = (Array.isArray(t) && t) || [void 0, void 0];
      return c.o.isUri(n) && p.L.isIPosition(o) ? i.openCodeEditor({
        resource: n
      }, i.getActiveCodeEditor()).then(e => {
        e && (e.setPosition(o), e.invokeWithinContext(t => (this.reportTelemetry(t, e), this.run(t, e))));
      }, r.dL) : super.runCommand(e, t);
    }
    run(e, t) {
      const i = W.get(t);
      return i ? i.run() : Promise.resolve();
    }
  }
  ((0, h._K)(W.ID, W), (0, h.Qr)(H));
  const z = h._l.bindToContribution(W.get);
  ((0, h.fK)(new z({
    id: "acceptRenameInput",
    precondition: A,
    handler: e => e.acceptRenameInput(!1),
    kbOpts: {
      weight: 199,
      kbExpr: m.u.focus,
      primary: 3
    }
  })), (0, h.fK)(new z({
    id: "acceptRenameInputWithPreview",
    precondition: C.Ao.and(A, C.Ao.has("config.editor.rename.enablePreview")),
    handler: e => e.acceptRenameInput(!0),
    kbOpts: {
      weight: 199,
      kbExpr: m.u.focus,
      primary: 1027
    }
  })), (0, h.fK)(new z({
    id: "cancelRenameInput",
    precondition: A,
    handler: e => e.cancelRenameInput(),
    kbOpts: {
      weight: 199,
      kbExpr: m.u.focus,
      primary: 9,
      secondary: [1033]
    }
  })), (0, h.sb)("_executeDocumentRenameProvider", function (e, t, ...i) {
    const [n] = i;
    return ((0, l.p_)("string" == typeof n), V(e, t, n));
  }), (0, h.sb)("_executePrepareRename", function (e, t) {
    return F(this, void 0, void 0, function* () {
      const i = new B(e, t),
        n = yield i.resolveRenameLocation(s.T.None);
      if (null == n ? void 0 : n.rejectReason) throw new Error(n.rejectReason);
      return n;
    });
  }), N.B.as(y.IP.Configuration).registerConfiguration({
    id: "editor",
    properties: {
      "editor.rename.enablePreview": {
        scope: 5,
        description: w.N("enablePreview", "Enable/disable the ability to preview changes before renaming"),
        default: !0,
        type: "boolean"
      }
    }
  }));
};