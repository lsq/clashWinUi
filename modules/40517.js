module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    TriggerParameterHintsAction: () => G
  }));
  var n = i(5976),
    o = i(16830),
    s = i(29102),
    r = i(44101),
    a = i(71050),
    l = i(17301),
    c = i(98401),
    d = i(70666),
    h = i(50187),
    u = i(88216),
    g = i(94565),
    p = i(38819),
    f = function (e, t, i, n) {
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
  const m = {
    Visible: new p.uy("parameterHintsVisible", !1),
    MultipleSignatures: new p.uy("parameterHintsMultipleSignatures", !1)
  };
  function v(e, t, i, n) {
    return f(this, void 0, void 0, function* () {
      const o = r.nD.ordered(e);
      for (const s of o) try {
        const o = yield s.provideSignatureHelp(e, t, n, i);
        if (o) return o;
      } catch (e) {
        (0, l.Cp)(e);
      }
    });
  }
  g.P.registerCommand("_executeSignatureHelpProvider", (e, ...t) => f(void 0, void 0, void 0, function* () {
    const [i, n, o] = t;
    ((0, c.p_)(d.o.isUri(i)), (0, c.p_)(h.L.isIPosition(n)), (0, c.p_)("string" == typeof o || !o));
    const s = yield e.get(u.S).createModelReference(i);
    try {
      const e = yield v(s.object.textEditorModel, h.L.lift(n), {
        triggerKind: r.WW.Invoke,
        isRetrigger: !1,
        triggerCharacter: o
      }, a.T.None);
      if (!e) return;
      return (setTimeout(() => e.dispose(), 0), e.value);
    } finally {
      s.dispose();
    }
  }));
  var _,
    b = i(63580),
    w = i(72065),
    y = i(65321),
    C = i(85152),
    x = i(9802),
    S = i(73046),
    k = i(4669),
    L = i(97295),
    N = (i(44735), i(43256)),
    D = i(71531),
    I = i(15393),
    E = i(44906),
    T = function (e, t, i, n) {
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
  !(function (e) {
    e.Default = {
      type: 0
    };
    e.Pending = class {
      constructor(e, t) {
        ((this.request = e), (this.previouslyActiveHints = t), (this.type = 2));
      }
    };
    e.Active = class {
      constructor(e) {
        ((this.hints = e), (this.type = 1));
      }
    };
  })(_ || (_ = {}));
  class M extends n.JT {
    constructor(e, t = M.DEFAULT_DELAY) {
      (super(), (this._onChangedHints = this._register(new k.Q5())), (this.onChangedHints = this._onChangedHints.event), (this.triggerOnType = !1), (this._state = _.Default), (this._pendingTriggers = []), (this._lastSignatureHelpResult = this._register(new n.XK())), (this.triggerChars = new E.q()), (this.retriggerChars = new E.q()), (this.triggerId = 0), (this.editor = e), (this.throttledDelayer = new I.vp(t)), this._register(this.editor.onDidBlurEditorWidget(() => this.cancel())), this._register(this.editor.onDidChangeConfiguration(() => this.onEditorConfigurationChange())), this._register(this.editor.onDidChangeModel(e => this.onModelChanged())), this._register(this.editor.onDidChangeModelLanguage(e => this.onModelChanged())), this._register(this.editor.onDidChangeCursorSelection(e => this.onCursorChange(e))), this._register(this.editor.onDidChangeModelContent(e => this.onModelContentChange())), this._register(r.nD.onDidChange(this.onModelChanged, this)), this._register(this.editor.onDidType(e => this.onDidType(e))), this.onEditorConfigurationChange(), this.onModelChanged());
    }
    get state() {
      return this._state;
    }
    set state(e) {
      (2 === this._state.type && this._state.request.cancel(), (this._state = e));
    }
    cancel(e = !1) {
      ((this.state = _.Default), this.throttledDelayer.cancel(), e || this._onChangedHints.fire(void 0));
    }
    trigger(e, t) {
      const i = this.editor.getModel();
      if (!i || !r.nD.has(i)) return;
      const n = ++this.triggerId;
      (this._pendingTriggers.push(e), this.throttledDelayer.trigger(() => this.doTrigger(n), t).catch(l.dL));
    }
    next() {
      if (1 !== this.state.type) return;
      const e = this.state.hints.signatures.length,
        t = this.state.hints.activeSignature,
        i = t % e == e - 1,
        n = this.editor.getOption(75).cycle;
      !(e < 2 || i) || n ? this.updateActiveSignature(i && n ? 0 : t + 1) : this.cancel();
    }
    previous() {
      if (1 !== this.state.type) return;
      const e = this.state.hints.signatures.length,
        t = this.state.hints.activeSignature,
        i = 0 === t,
        n = this.editor.getOption(75).cycle;
      !(e < 2 || i) || n ? this.updateActiveSignature(i && n ? e - 1 : t - 1) : this.cancel();
    }
    updateActiveSignature(e) {
      1 === this.state.type && ((this.state = new _.Active(Object.assign(Object.assign({}, this.state.hints), {
        activeSignature: e
      }))), this._onChangedHints.fire(this.state.hints));
    }
    doTrigger(e) {
      return T(this, void 0, void 0, function* () {
        const t = 1 === this.state.type || 2 === this.state.type,
          i = this.getLastActiveHints();
        if ((this.cancel(!0), 0 === this._pendingTriggers.length)) return !1;
        const n = this._pendingTriggers.reduce(A);
        this._pendingTriggers = [];
        const o = {
          triggerKind: n.triggerKind,
          triggerCharacter: n.triggerCharacter,
          isRetrigger: t,
          activeSignatureHelp: i
        };
        if (!this.editor.hasModel()) return !1;
        const s = this.editor.getModel(),
          r = this.editor.getPosition();
        this.state = new _.Pending((0, I.PG)(e => v(s, r, o, e)), i);
        try {
          const t = yield this.state.request;
          return e !== this.triggerId ? (null == t || t.dispose(), !1) : t && t.value.signatures && 0 !== t.value.signatures.length ? ((this.state = new _.Active(t.value)), (this._lastSignatureHelpResult.value = t), this._onChangedHints.fire(this.state.hints), !0) : (null == t || t.dispose(), this._lastSignatureHelpResult.clear(), this.cancel(), !1);
        } catch (t) {
          return (e === this.triggerId && (this.state = _.Default), (0, l.dL)(t), !1);
        }
      });
    }
    getLastActiveHints() {
      switch (this.state.type) {
        case 1:
          return this.state.hints;
        case 2:
          return this.state.previouslyActiveHints;
        default:
          return;
      }
    }
    get isTriggered() {
      return (1 === this.state.type || 2 === this.state.type || this.throttledDelayer.isTriggered());
    }
    onModelChanged() {
      (this.cancel(), (this.triggerChars = new E.q()), (this.retriggerChars = new E.q()));
      const e = this.editor.getModel();
      if (e) for (const t of r.nD.ordered(e)) {
        for (const e of t.signatureHelpTriggerCharacters || []) (this.triggerChars.add(e.charCodeAt(0)), this.retriggerChars.add(e.charCodeAt(0)));
        for (const e of t.signatureHelpRetriggerCharacters || []) this.retriggerChars.add(e.charCodeAt(0));
      }
    }
    onDidType(e) {
      if (!this.triggerOnType) return;
      const t = e.length - 1,
        i = e.charCodeAt(t);
      (this.triggerChars.has(i) || (this.isTriggered && this.retriggerChars.has(i))) && this.trigger({
        triggerKind: r.WW.TriggerCharacter,
        triggerCharacter: e.charAt(t)
      });
    }
    onCursorChange(e) {
      "mouse" === e.source ? this.cancel() : this.isTriggered && this.trigger({
        triggerKind: r.WW.ContentChange
      });
    }
    onModelContentChange() {
      this.isTriggered && this.trigger({
        triggerKind: r.WW.ContentChange
      });
    }
    onEditorConfigurationChange() {
      ((this.triggerOnType = this.editor.getOption(75).enabled), this.triggerOnType || this.cancel());
    }
    dispose() {
      (this.cancel(!0), super.dispose());
    }
  }
  function A(e, t) {
    switch (t.triggerKind) {
      case r.WW.Invoke:
        return t;
      case r.WW.ContentChange:
        return e;
      case r.WW.TriggerCharacter:
      default:
        return t;
    }
  }
  M.DEFAULT_DELAY = 120;
  var O = i(50988),
    P = i(73910),
    R = i(59554),
    F = i(92321),
    B = i(97781),
    V = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    W = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  const H = y.$,
    z = (0, R.q5)("parameter-hints-next", S.lA.chevronDown, b.N("parameterHintsNextIcon", "Icon for show next parameter hint.")),
    j = (0, R.q5)("parameter-hints-previous", S.lA.chevronUp, b.N("parameterHintsPreviousIcon", "Icon for show previous parameter hint."));
  let U = class e extends n.JT {
    constructor(e, t, i, o) {
      (super(), (this.editor = e), (this.renderDisposeables = this._register(new n.SL())), (this.visible = !1), (this.announcedLabel = null), (this.allowEditorOverflow = !0), (this.markdownRenderer = this._register(new N.$({
        editor: e
      }, o, i))), (this.model = this._register(new M(e))), (this.keyVisible = m.Visible.bindTo(t)), (this.keyMultipleSignatures = m.MultipleSignatures.bindTo(t)), this._register(this.model.onChangedHints(e => {
        e ? (this.show(), this.render(e)) : this.hide();
      })));
    }
    createParameterHintDOMNodes() {
      const e = H(".editor-widget.parameter-hints-widget"),
        t = y.R3(e, H(".phwrapper"));
      t.tabIndex = -1;
      const i = y.R3(t, H(".controls")),
        n = y.R3(i, H(".button" + B.kS.asCSSSelector(j))),
        o = y.R3(i, H(".overloads")),
        s = y.R3(i, H(".button" + B.kS.asCSSSelector(z)));
      (this._register(y.nm(n, "click", e => {
        (y.zB.stop(e), this.previous());
      })), this._register(y.nm(s, "click", e => {
        (y.zB.stop(e), this.next());
      })));
      const r = H(".body"),
        a = new x.s$(r, {});
      (this._register(a), t.appendChild(a.getDomNode()));
      const l = y.R3(r, H(".signature")),
        c = y.R3(r, H(".docs"));
      ((e.style.userSelect = "text"), (this.domNodes = {
        element: e,
        signature: l,
        overloads: o,
        docs: c,
        scrollbar: a
      }), this.editor.addContentWidget(this), this.hide(), this._register(this.editor.onDidChangeCursorSelection(e => {
        this.visible && this.editor.layoutContentWidget(this);
      })));
      const d = () => {
        if (!this.domNodes) return;
        const e = this.editor.getOption(43);
        ((this.domNodes.element.style.fontSize = `${e.fontSize}px`), (this.domNodes.element.style.lineHeight = "" + e.lineHeight / e.fontSize));
      };
      (d(), this._register(k.ju.chain(this.editor.onDidChangeConfiguration.bind(this.editor)).filter(e => e.hasChanged(43)).on(d, null)), this._register(this.editor.onDidLayoutChange(e => this.updateMaxHeight())), this.updateMaxHeight());
    }
    show() {
      this.visible || (this.domNodes || this.createParameterHintDOMNodes(), this.keyVisible.set(!0), (this.visible = !0), setTimeout(() => {
        this.domNodes && this.domNodes.element.classList.add("visible");
      }, 100), this.editor.layoutContentWidget(this));
    }
    hide() {
      (this.renderDisposeables.clear(), this.visible && (this.keyVisible.reset(), (this.visible = !1), (this.announcedLabel = null), this.domNodes && this.domNodes.element.classList.remove("visible"), this.editor.layoutContentWidget(this)));
    }
    getPosition() {
      return this.visible ? {
        position: this.editor.getPosition(),
        preference: [1, 2]
      } : null;
    }
    render(e) {
      var t;
      if ((this.renderDisposeables.clear(), !this.domNodes)) return;
      const i = e.signatures.length > 1;
      (this.domNodes.element.classList.toggle("multiple", i), this.keyMultipleSignatures.set(i), (this.domNodes.signature.innerText = ""), (this.domNodes.docs.innerText = ""));
      const n = e.signatures[e.activeSignature];
      if (!n) return;
      const o = y.R3(this.domNodes.signature, H(".code")),
        s = this.editor.getOption(43);
      ((o.style.fontSize = `${s.fontSize}px`), (o.style.fontFamily = s.fontFamily));
      const r = n.parameters.length > 0,
        a = null !== (t = n.activeParameter) && void 0 !== t ? t : e.activeParameter;
      if (r) this.renderParameters(o, n, a);else {
        y.R3(o, H("span")).textContent = n.label;
      }
      const l = n.parameters[a];
      if (null == l ? void 0 : l.documentation) {
        const e = H("span.documentation");
        if ("string" == typeof l.documentation) e.textContent = l.documentation;else {
          const t = this.renderMarkdownDocs(l.documentation);
          e.appendChild(t.element);
        }
        y.R3(this.domNodes.docs, H("p", {}, e));
      }
      if (void 0 === n.documentation) ;else if ("string" == typeof n.documentation) y.R3(this.domNodes.docs, H("p", {}, n.documentation));else {
        const e = this.renderMarkdownDocs(n.documentation);
        y.R3(this.domNodes.docs, e.element);
      }
      const c = this.hasDocs(n, l);
      if ((this.domNodes.signature.classList.toggle("has-docs", c), this.domNodes.docs.classList.toggle("empty", !c), (this.domNodes.overloads.textContent = String(e.activeSignature + 1).padStart(e.signatures.length.toString().length, "0") + "/" + e.signatures.length), l)) {
        let e = "";
        const t = n.parameters[a];
        ((e = Array.isArray(t.label) ? n.label.substring(t.label[0], t.label[1]) : t.label), t.documentation && (e += "string" == typeof t.documentation ? `, ${t.documentation}` : `, ${t.documentation.value}`), n.documentation && (e += "string" == typeof n.documentation ? `, ${n.documentation}` : `, ${n.documentation.value}`), this.announcedLabel !== e && (C.Z9(b.N("hint", "{0}, hint", e)), (this.announcedLabel = e)));
      }
      (this.editor.layoutContentWidget(this), this.domNodes.scrollbar.scanDomNode());
    }
    renderMarkdownDocs(e) {
      const t = this.renderDisposeables.add(this.markdownRenderer.render(e, {
        asyncRenderCallback: () => {
          var e;
          null === (e = this.domNodes) || void 0 === e || e.scrollbar.scanDomNode();
        }
      }));
      return (t.element.classList.add("markdown-docs"), t);
    }
    hasDocs(e, t) {
      return (!!(t && "string" == typeof t.documentation && (0, c.cW)(t.documentation).length > 0) || !!(t && "object" == typeof t.documentation && (0, c.cW)(t.documentation).value.length > 0) || !!(e.documentation && "string" == typeof e.documentation && (0, c.cW)(e.documentation).length > 0) || !!(e.documentation && "object" == typeof e.documentation && (0, c.cW)(e.documentation.value).length > 0));
    }
    renderParameters(e, t, i) {
      const [n, o] = this.getParameterLabelOffsets(t, i),
        s = document.createElement("span");
      s.textContent = t.label.substring(0, n);
      const r = document.createElement("span");
      ((r.textContent = t.label.substring(n, o)), (r.className = "parameter active"));
      const a = document.createElement("span");
      ((a.textContent = t.label.substring(o)), y.R3(e, s, r, a));
    }
    getParameterLabelOffsets(e, t) {
      const i = e.parameters[t];
      if (i) {
        if (Array.isArray(i.label)) return i.label;
        if (i.label.length) {
          const t = new RegExp(`(\\W|^)${(0, L.ec)(i.label)}(?=\\W|$)`, "g");
          t.test(e.label);
          const n = t.lastIndex - i.label.length;
          return n >= 0 ? [n, t.lastIndex] : [0, 0];
        }
        return [0, 0];
      }
      return [0, 0];
    }
    next() {
      (this.editor.focus(), this.model.next());
    }
    previous() {
      (this.editor.focus(), this.model.previous());
    }
    cancel() {
      this.model.cancel();
    }
    getDomNode() {
      return (this.domNodes || this.createParameterHintDOMNodes(), this.domNodes.element);
    }
    getId() {
      return e.ID;
    }
    trigger(e) {
      this.model.trigger(e, 0);
    }
    updateMaxHeight() {
      if (!this.domNodes) return;
      const e = `${Math.max(this.editor.getLayoutInfo().height / 4, 250)}px`;
      this.domNodes.element.style.maxHeight = e;
      const t = this.domNodes.element.getElementsByClassName("phwrapper");
      t.length && (t[0].style.maxHeight = e);
    }
  };
  ((U.ID = "editor.widget.parameterHintsWidget"), (U = V([W(1, p.i6), W(2, O.v4), W(3, D.h)], U)));
  const $ = (0, P.P6)("editorHoverWidget.highlightForeground", {
    dark: P.Gw,
    light: P.Gw,
    hc: P.Gw
  }, b.N("editorHoverWidgetHighlightForeground", "Foreground color of the active item in the parameter hint."));
  (0, B.Ic)((e, t) => {
    const i = e.getColor(P.CN);
    if (i) {
      const n = e.type === F.e.HIGH_CONTRAST ? 2 : 1;
      (t.addRule(`.monaco-editor .parameter-hints-widget { border: ${n}px solid ${i}; }`), t.addRule(`.monaco-editor .parameter-hints-widget.multiple .body { border-left: 1px solid ${i.transparent(0.5)}; }`), t.addRule(`.monaco-editor .parameter-hints-widget .signature.has-docs { border-bottom: 1px solid ${i.transparent(0.5)}; }`));
    }
    const n = e.getColor(P.yJ);
    n && t.addRule(`.monaco-editor .parameter-hints-widget { background-color: ${n}; }`);
    const o = e.getColor(P.ur);
    o && t.addRule(`.monaco-editor .parameter-hints-widget a { color: ${o}; }`);
    const s = e.getColor(P.sg);
    s && t.addRule(`.monaco-editor .parameter-hints-widget a:hover { color: ${s}; }`);
    const r = e.getColor(P.Sb);
    r && t.addRule(`.monaco-editor .parameter-hints-widget { color: ${r}; }`);
    const a = e.getColor(P.Sw);
    a && t.addRule(`.monaco-editor .parameter-hints-widget code { background-color: ${a}; }`);
    const l = e.getColor($);
    l && t.addRule(`.monaco-editor .parameter-hints-widget .parameter.active { color: ${l}}`);
  });
  var K = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    q = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let Z = class e extends n.JT {
    constructor(e, t) {
      (super(), (this.editor = e), (this.widget = this._register(t.createInstance(U, this.editor))));
    }
    static get(t) {
      return t.getContribution(e.ID);
    }
    cancel() {
      this.widget.cancel();
    }
    previous() {
      this.widget.previous();
    }
    next() {
      this.widget.next();
    }
    trigger(e) {
      this.widget.trigger(e);
    }
  };
  ((Z.ID = "editor.controller.parameterHints"), (Z = K([q(1, w.TG)], Z)));
  class G extends o.R6 {
    constructor() {
      super({
        id: "editor.action.triggerParameterHints",
        label: b.N("parameterHints.trigger.label", "Trigger Parameter Hints"),
        alias: "Trigger Parameter Hints",
        precondition: s.u.hasSignatureHelpProvider,
        kbOpts: {
          kbExpr: s.u.editorTextFocus,
          primary: 3082,
          weight: 100
        }
      });
    }
    run(e, t) {
      const i = Z.get(t);
      i && i.trigger({
        triggerKind: r.WW.Invoke
      });
    }
  }
  ((0, o._K)(Z.ID, Z), (0, o.Qr)(G));
  const Y = o._l.bindToContribution(Z.get);
  ((0, o.fK)(new Y({
    id: "closeParameterHints",
    precondition: m.Visible,
    handler: e => e.cancel(),
    kbOpts: {
      weight: 175,
      kbExpr: s.u.focus,
      primary: 9,
      secondary: [1033]
    }
  })), (0, o.fK)(new Y({
    id: "showPrevParameterHint",
    precondition: p.Ao.and(m.Visible, m.MultipleSignatures),
    handler: e => e.previous(),
    kbOpts: {
      weight: 175,
      kbExpr: s.u.focus,
      primary: 16,
      secondary: [528],
      mac: {
        primary: 16,
        secondary: [528, 302]
      }
    }
  })), (0, o.fK)(new Y({
    id: "showNextParameterHint",
    precondition: p.Ao.and(m.Visible, m.MultipleSignatures),
    handler: e => e.next(),
    kbOpts: {
      weight: 175,
      kbExpr: s.u.focus,
      primary: 18,
      secondary: [530],
      mac: {
        primary: 18,
        secondary: [530, 300]
      }
    }
  })));
};