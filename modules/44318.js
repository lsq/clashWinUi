const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    J: () => he
  });
  var n = i(15393),
    o = i(17301),
    s = i(22258),
    r = i(5976),
    a = i(11640),
    l = i(50187),
    c = i(24314),
    d = i(22043),
    h = i(63580),
    u = i(94565),
    g = i(33108),
    p = i(38819),
    f = i(72065),
    m = i(49989),
    v = i(20343),
    _ = i(59422),
    b = i(26904),
    w = i(71455),
    y = i(65321),
    C = i(23937),
    x = i(41264),
    S = i(4669),
    k = i(66663),
    L = i(95935),
    N = (i(67055), i(84527)),
    D = i(44174),
    I = i(83831),
    E = i(71531),
    T = i(88216),
    M = i(67488),
    A = i(34650),
    O = i(48801),
    P = i(75392),
    R = i(68843),
    F = i(91847),
    B = i(44349),
    V = i(88810),
    W = i(97781),
    H = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    z = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let j = class {
    constructor(e) {
      this._resolverService = e;
    }
    hasChildren(e) {
      return e instanceof w.oQ || e instanceof w.F2;
    }
    getChildren(e) {
      if (e instanceof w.oQ) return e.groups;
      if (e instanceof w.F2) return e.resolve(this._resolverService).then(e => e.children);
      throw new Error("bad tree");
    }
  };
  j = H([z(0, T.S)], j);
  class U {
    getHeight() {
      return 23;
    }
    getTemplateId(e) {
      return e instanceof w.F2 ? Z.id : Y.id;
    }
  }
  let $ = class {
    constructor(e) {
      this._keybindingService = e;
    }
    getKeyboardNavigationLabel(e) {
      var t;
      if (e instanceof w.WX) {
        const i = null === (t = e.parent.getPreview(e)) || void 0 === t ? void 0 : t.preview(e.range);
        if (i) return i.value;
      }
      return (0, L.EZ)(e.uri);
    }
  };
  $ = H([z(0, F.d)], $);
  class K {
    getId(e) {
      return e instanceof w.WX ? e.id : e.uri;
    }
  }
  let q = class extends r.JT {
    constructor(e, t, i) {
      (super(), (this._uriLabel = t));
      const n = document.createElement("div");
      (n.classList.add("reference-file"), (this.file = this._register(new O.g(n, {
        supportHighlights: !0
      }))), (this.badge = new M.Z(y.R3(n, y.$(".count")))), this._register((0, V.WZ)(this.badge, i)), e.appendChild(n));
    }
    set(e, t) {
      let i = (0, L.XX)(e.uri);
      this.file.setLabel((0, R.p)(e.uri), this._uriLabel.getUriLabel(i, {
        relative: !0
      }), {
        title: this._uriLabel.getUriLabel(e.uri),
        matches: t
      });
      const n = e.children.length;
      (this.badge.setCount(n), n > 1 ? this.badge.setTitleFormat((0, h.N)("referencesCount", "{0} references", n)) : this.badge.setTitleFormat((0, h.N)("referenceCount", "{0} reference", n)));
    }
  };
  q = H([z(1, B.e), z(2, W.XE)], q);
  let Z = class e {
    constructor(t) {
      ((this._instantiationService = t), (this.templateId = e.id));
    }
    renderTemplate(e) {
      return this._instantiationService.createInstance(q, e);
    }
    renderElement(e, t, i) {
      i.set(e.element, (0, P.mB)(e.filterData));
    }
    disposeTemplate(e) {
      e.dispose();
    }
  };
  ((Z.id = "FileReferencesRenderer"), (Z = H([z(0, f.TG)], Z)));
  class G {
    constructor(e) {
      this.label = new A.q(e, !1);
    }
    set(e, t) {
      var i;
      const n = null === (i = e.parent.getPreview(e)) || void 0 === i ? void 0 : i.preview(e.range);
      if (n && n.value) {
        const {
          value: e,
          highlight: i
        } = n;
        t && !P.CL.isDefault(t) ? (this.label.element.classList.toggle("referenceMatch", !1), this.label.set(e, (0, P.mB)(t))) : (this.label.element.classList.toggle("referenceMatch", !0), this.label.set(e, [i]));
      } else this.label.set(`${(0, L.EZ)(e.uri)}:${e.range.startLineNumber + 1}:${e.range.startColumn + 1}`);
    }
  }
  class Y {
    constructor() {
      this.templateId = Y.id;
    }
    renderTemplate(e) {
      return new G(e);
    }
    renderElement(e, t, i) {
      i.set(e.element, e.filterData);
    }
    disposeTemplate() {}
  }
  Y.id = "OneReferenceRenderer";
  class Q {
    getWidgetAriaLabel() {
      return (0, h.N)("treeAriaLabel", "References");
    }
    getAriaLabel(e) {
      return e.ariaMessage;
    }
  }
  var X = i(73910),
    J = i(64862),
    ee = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    te = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    ie = function (e, t, i, n) {
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
  class ne {
    constructor(e, t) {
      ((this._editor = e), (this._model = t), (this._decorations = new Map()), (this._decorationIgnoreSet = new Set()), (this._callOnDispose = new r.SL()), (this._callOnModelChange = new r.SL()), this._callOnDispose.add(this._editor.onDidChangeModel(() => this._onModelChanged())), this._onModelChanged());
    }
    dispose() {
      (this._callOnModelChange.dispose(), this._callOnDispose.dispose(), this.removeDecorations());
    }
    _onModelChanged() {
      this._callOnModelChange.clear();
      const e = this._editor.getModel();
      if (e) for (let t of this._model.references) if (t.uri.toString() === e.uri.toString()) return void this._addDecorations(t.parent);
    }
    _addDecorations(e) {
      if (!this._editor.hasModel()) return;
      this._callOnModelChange.add(this._editor.getModel().onDidChangeDecorations(() => this._onDecorationChanged()));
      const t = [],
        i = [];
      for (let n = 0, o = e.children.length; n < o; n++) {
        let o = e.children[n];
        this._decorationIgnoreSet.has(o.id) || (o.uri.toString() === this._editor.getModel().uri.toString() && (t.push({
          range: o.range,
          options: ne.DecorationOptions
        }), i.push(n)));
      }
      const n = this._editor.deltaDecorations([], t);
      for (let t = 0; t < n.length; t++) this._decorations.set(n[t], e.children[i[t]]);
    }
    _onDecorationChanged() {
      const e = [],
        t = this._editor.getModel();
      if (t) {
        for (let [i, n] of this._decorations) {
          const o = t.getDecorationRange(i);
          if (!o) continue;
          let s = !1;
          if (!c.e.equalsRange(o, n.range)) {
            if (c.e.spansMultipleLines(o)) s = !0;else {
              n.range.endColumn - n.range.startColumn !== o.endColumn - o.startColumn && (s = !0);
            }
            s ? (this._decorationIgnoreSet.add(n.id), e.push(i)) : (n.range = o);
          }
        }
        for (let t = 0, i = e.length; t < i; t++) this._decorations.delete(e[t]);
        this._editor.deltaDecorations(e, []);
      }
    }
    removeDecorations() {
      (this._editor.deltaDecorations([...this._decorations.keys()], []), this._decorations.clear());
    }
  }
  ne.DecorationOptions = D.qx.register({
    description: "reference-decoration",
    stickiness: 1,
    className: "reference-decoration"
  });
  class oe {
    constructor() {
      ((this.ratio = 0.7), (this.heightInLines = 18));
    }
    static fromJSON(e) {
      let t, i;
      try {
        const n = JSON.parse(e);
        ((t = n.ratio), (i = n.heightInLines));
      } catch (e) {}
      return {
        ratio: t || 0.7,
        heightInLines: i || 18
      };
    }
  }
  class se extends v.ls {}
  let re = class extends d.vk {
    constructor(e, t, i, n, o, s, a, l, c, d, h, u) {
      (super(e, {
        showFrame: !1,
        showArrow: !0,
        isResizeable: !0,
        isAccessible: !0,
        supportOnTitleClick: !0
      }, s), (this._defaultTreeKeyboardSupport = t), (this.layoutData = i), (this._textModelResolverService = o), (this._instantiationService = s), (this._peekViewService = a), (this._uriLabel = l), (this._undoRedoService = c), (this._keybindingService = d), (this._modeService = h), (this._languageConfigurationService = u), (this._disposeOnNewModel = new r.SL()), (this._callOnDispose = new r.SL()), (this._onDidSelectReference = new S.Q5()), (this.onDidSelectReference = this._onDidSelectReference.event), (this._dim = new y.Ro(0, 0)), this._applyTheme(n.getColorTheme()), this._callOnDispose.add(n.onDidColorThemeChange(this._applyTheme.bind(this))), this._peekViewService.addExclusiveWidget(e, this), this.create());
    }
    dispose() {
      (this.setModel(void 0), this._callOnDispose.dispose(), this._disposeOnNewModel.dispose(), (0, r.B9)(this._preview), (0, r.B9)(this._previewNotAvailableMessage), (0, r.B9)(this._tree), (0, r.B9)(this._previewModelReference), this._splitView.dispose(), super.dispose());
    }
    _applyTheme(e) {
      const t = e.getColor(d.SC) || x.Il.transparent;
      this.style({
        arrowColor: t,
        frameColor: t,
        headerBackgroundColor: e.getColor(d.KY) || x.Il.transparent,
        primaryHeadingColor: e.getColor(d.IH),
        secondaryHeadingColor: e.getColor(d.R7)
      });
    }
    show(e) {
      (this.editor.revealRangeInCenterIfOutsideViewport(e, 0), super.show(e, this.layoutData.heightInLines || 18));
    }
    focusOnReferenceTree() {
      this._tree.domFocus();
    }
    focusOnPreviewEditor() {
      this._preview.focus();
    }
    isPreviewEditorFocused() {
      return this._preview.hasTextFocus();
    }
    _onTitleClick(e) {
      this._preview && this._preview.getModel() && this._onDidSelectReference.fire({
        element: this._getFocusedReference(),
        kind: e.ctrlKey || e.metaKey || e.altKey ? "side" : "open",
        source: "title"
      });
    }
    _fillBody(e) {
      (this.setCssClass("reference-zone-widget"), (this._messageContainer = y.R3(e, y.$("div.messages"))), y.Cp(this._messageContainer), (this._splitView = new C.z(e, {
        orientation: 1
      })), (this._previewContainer = y.R3(e, y.$("div.preview.inline"))));
      ((this._preview = this._instantiationService.createInstance(N.H, this._previewContainer, {
        scrollBeyondLastLine: !1,
        scrollbar: {
          verticalScrollbarSize: 14,
          horizontal: "auto",
          useShadows: !0,
          verticalHasArrows: !1,
          horizontalHasArrows: !1,
          alwaysConsumeMouseWheel: !1
        },
        overviewRulerLanes: 2,
        fixedOverflowWidgets: !0,
        minimap: {
          enabled: !1
        }
      }, this.editor)), y.Cp(this._previewContainer), (this._previewNotAvailableMessage = new D.yO(h.N("missingPreviewMessage", "no preview available"), D.yO.DEFAULT_CREATION_OPTIONS, null, null, this._undoRedoService, this._modeService, this._languageConfigurationService)), (this._treeContainer = y.R3(e, y.$("div.ref-tree.inline"))));
      const t = {
        keyboardSupport: this._defaultTreeKeyboardSupport,
        accessibilityProvider: new Q(),
        keyboardNavigationLabelProvider: this._instantiationService.createInstance($),
        identityProvider: new K(),
        openOnSingleClick: !0,
        selectionNavigation: !0,
        overrideStyles: {
          listBackground: d.M8
        }
      };
      (this._defaultTreeKeyboardSupport && this._callOnDispose.add(y.mu(this._treeContainer, "keydown", e => {
        e.equals(9) && (this._keybindingService.dispatchEvent(e, e.target), e.stopPropagation());
      }, !0)), (this._tree = this._instantiationService.createInstance(se, "ReferencesWidget", this._treeContainer, new U(), [this._instantiationService.createInstance(Z), this._instantiationService.createInstance(Y)], this._instantiationService.createInstance(j), t)), this._splitView.addView({
        onDidChange: S.ju.None,
        element: this._previewContainer,
        minimumSize: 200,
        maximumSize: Number.MAX_VALUE,
        layout: e => {
          this._preview.layout({
            height: this._dim.height,
            width: e
          });
        }
      }, C.M.Distribute), this._splitView.addView({
        onDidChange: S.ju.None,
        element: this._treeContainer,
        minimumSize: 100,
        maximumSize: Number.MAX_VALUE,
        layout: e => {
          ((this._treeContainer.style.height = `${this._dim.height}px`), (this._treeContainer.style.width = `${e}px`), this._tree.layout(this._dim.height, e));
        }
      }, C.M.Distribute), this._disposables.add(this._splitView.onDidSashChange(() => {
        this._dim.width && (this.layoutData.ratio = this._splitView.getViewSize(0) / this._dim.width);
      }, void 0)));
      let i = (e, t) => {
        e instanceof w.WX && ("show" === t && this._revealReference(e, !1), this._onDidSelectReference.fire({
          element: e,
          kind: t,
          source: "tree"
        }));
      };
      (this._tree.onDidOpen(e => {
        e.sideBySide ? i(e.element, "side") : e.editorOptions.pinned ? i(e.element, "goto") : i(e.element, "show");
      }), y.Cp(this._treeContainer));
    }
    _onWidth(e) {
      this._dim && this._doLayoutBody(this._dim.height, e);
    }
    _doLayoutBody(e, t) {
      (super._doLayoutBody(e, t), (this._dim = new y.Ro(t, e)), (this.layoutData.heightInLines = this._viewZone ? this._viewZone.heightInLines : this.layoutData.heightInLines), this._splitView.layout(t), this._splitView.resizeView(0, t * this.layoutData.ratio));
    }
    setSelection(e) {
      return this._revealReference(e, !0).then(() => {
        this._model && (this._tree.setSelection([e]), this._tree.setFocus([e]));
      });
    }
    setModel(e) {
      return (this._disposeOnNewModel.clear(), (this._model = e), this._model ? this._onNewModel() : Promise.resolve());
    }
    _onNewModel() {
      const Lg = new Language(modifyState.language);
      return this._model ? this._model.isEmpty ? (this.setTitle(""), (this._messageContainer.innerText = h.N("noResults", Lg.noResults())), y.$Z(this._messageContainer), Promise.resolve(void 0)) : (y.Cp(this._messageContainer), (this._decorationsManager = new ne(this._preview, this._model)), this._disposeOnNewModel.add(this._decorationsManager), this._disposeOnNewModel.add(this._model.onDidChangeReferenceRange(e => this._tree.rerender(e))), this._disposeOnNewModel.add(this._preview.onMouseDown(e => {
        const {
          event: t,
          target: i
        } = e;
        if (2 !== t.detail) return;
        const n = this._getFocusedReference();
        n && this._onDidSelectReference.fire({
          element: {
            uri: n.uri,
            range: i.range
          },
          kind: t.ctrlKey || t.metaKey || t.altKey ? "side" : "open",
          source: "editor"
        });
      })), this.container.classList.add("results-loaded"), y.$Z(this._treeContainer), y.$Z(this._previewContainer), this._splitView.layout(this._dim.width), this.focusOnReferenceTree(), this._tree.setInput(1 === this._model.groups.length ? this._model.groups[0] : this._model)) : Promise.resolve(void 0);
    }
    _getFocusedReference() {
      const [e] = this._tree.getFocus();
      return e instanceof w.WX ? e : e instanceof w.F2 && e.children.length > 0 ? e.children[0] : void 0;
    }
    revealReference(e) {
      return ie(this, void 0, void 0, function* () {
        (yield this._revealReference(e, !1), this._onDidSelectReference.fire({
          element: e,
          kind: "goto",
          source: "tree"
        }));
      });
    }
    _revealReference(e, t) {
      return ie(this, void 0, void 0, function* () {
        if (this._revealedReference === e) return;
        ((this._revealedReference = e), e.uri.scheme !== k.lg.inMemory ? this.setTitle((0, L.Hx)(e.uri), this._uriLabel.getUriLabel((0, L.XX)(e.uri))) : this.setTitle(h.N("peekView.alternateTitle", "References")));
        const i = this._textModelResolverService.createModelReference(e.uri);
        (this._tree.getInput() === e.parent || (t && this._tree.reveal(e.parent), yield this._tree.expand(e.parent)), this._tree.reveal(e));
        const n = yield i;
        if (!this._model) return void n.dispose();
        (0, r.B9)(this._previewModelReference);
        const o = n.object;
        if (o) {
          const t = this._preview.getModel() === o.textEditorModel ? 0 : 1,
            i = c.e.lift(e.range).collapseToStart();
          ((this._previewModelReference = n), this._preview.setModel(o.textEditorModel), this._preview.setSelection(i), this._preview.revealRangeInCenter(i, t));
        } else (this._preview.setModel(this._previewNotAvailableMessage), n.dispose());
      });
    }
  };
  ((re = ee([te(3, W.XE), te(4, T.S), te(5, f.TG), te(6, d.Fw), te(7, B.e), te(8, J.tJ), te(9, F.d), te(10, E.h), te(11, I.c_)], re)), (0, W.Ic)((e, t) => {
    const i = e.getColor(d.F8);
    i && t.addRule(`.monaco-editor .reference-zone-widget .ref-tree .referenceMatch .highlight { background-color: ${i}; }`);
    const n = e.getColor(d.WL);
    n && t.addRule(`.monaco-editor .reference-zone-widget .preview .reference-decoration { background-color: ${n}; }`);
    const o = e.getColor(d.xH);
    o && t.addRule(`.monaco-editor .reference-zone-widget .preview .reference-decoration { border: 2px solid ${o}; box-sizing: border-box; }`);
    const s = e.getColor(X.xL);
    s && t.addRule(`.monaco-editor .reference-zone-widget .ref-tree .referenceMatch .highlight { border: 1px dotted ${s}; box-sizing: border-box; }`);
    const r = e.getColor(d.M8);
    r && t.addRule(`.monaco-editor .reference-zone-widget .ref-tree { background-color: ${r}; }`);
    const a = e.getColor(d.xk);
    a && t.addRule(`.monaco-editor .reference-zone-widget .ref-tree { color: ${a}; }`);
    const l = e.getColor(d.a7);
    l && t.addRule(`.monaco-editor .reference-zone-widget .ref-tree .reference-file { color: ${l}; }`);
    const c = e.getColor(d.Zj);
    c && t.addRule(`.monaco-editor .reference-zone-widget .ref-tree .monaco-list:focus .monaco-list-rows > .monaco-list-row.selected:not(.highlighted) { background-color: ${c}; }`);
    const h = e.getColor(d.IY);
    h && t.addRule(`.monaco-editor .reference-zone-widget .ref-tree .monaco-list:focus .monaco-list-rows > .monaco-list-row.selected:not(.highlighted) { color: ${h} !important; }`);
    const u = e.getColor(d.RX);
    u && t.addRule(`.monaco-editor .reference-zone-widget .preview .monaco-editor .monaco-editor-background,.monaco-editor .reference-zone-widget .preview .monaco-editor .inputarea.ime-input {\tbackground-color: ${u};}`);
    const g = e.getColor(d.sH);
    g && t.addRule(`.monaco-editor .reference-zone-widget .preview .monaco-editor .margin {\tbackground-color: ${g};}`);
  }));
  var ae = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    le = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    ce = function (e, t, i, n) {
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
  const de = new p.uy("referenceSearchVisible", !1, h.N("referenceSearchVisible", "Whether reference peek is visible, like 'Peek References' or 'Peek Definition'"));
  let he = class e {
    constructor(e, t, i, n, o, s, a, l) {
      ((this._defaultTreeKeyboardSupport = e), (this._editor = t), (this._editorService = n), (this._notificationService = o), (this._instantiationService = s), (this._storageService = a), (this._configurationService = l), (this._disposables = new r.SL()), (this._requestIdPool = 0), (this._ignoreModelChangeEvent = !1), (this._referenceSearchVisible = de.bindTo(i)));
    }
    static get(t) {
      return t.getContribution(e.ID);
    }
    dispose() {
      var e, t;
      (this._referenceSearchVisible.reset(), this._disposables.dispose(), null === (e = this._widget) || void 0 === e || e.dispose(), null === (t = this._model) || void 0 === t || t.dispose(), (this._widget = void 0), (this._model = void 0));
    }
    toggleWidget(e, t, i) {
      let n;
      if ((this._widget && (n = this._widget.position), this.closeWidget(), n && e.containsPosition(n))) return;
      ((this._peekMode = i), this._referenceSearchVisible.set(!0), this._disposables.add(this._editor.onDidChangeModelLanguage(() => {
        this.closeWidget();
      })), this._disposables.add(this._editor.onDidChangeModel(() => {
        this._ignoreModelChangeEvent || this.closeWidget();
      })));
      const o = "peekViewLayout",
        s = oe.fromJSON(this._storageService.get(o, 0, "{}"));
      ((this._widget = this._instantiationService.createInstance(re, this._editor, this._defaultTreeKeyboardSupport, s)), this._widget.setTitle(h.N("labelLoading", "正在加载...")), this._widget.show(e), this._disposables.add(this._widget.onDidClose(() => {
        (t.cancel(), this._widget && (this._storageService.store(o, JSON.stringify(this._widget.layoutData), 0, 1), (this._widget = void 0)), this.closeWidget());
      })), this._disposables.add(this._widget.onDidSelectReference(e => {
        let {
          element: t,
          kind: n
        } = e;
        if (t) switch (n) {
          case "open":
            ("editor" === e.source && this._configurationService.getValue("editor.stablePeek")) || this.openReference(t, !1, !1);
            break;
          case "side":
            this.openReference(t, !0, !1);
            break;
          case "goto":
            i ? this._gotoReference(t) : this.openReference(t, !1, !0);
        }
      })));
      const r = ++this._requestIdPool;
      t.then(t => {
        var i;
        if (r === this._requestIdPool && this._widget) return (null === (i = this._model) || void 0 === i || i.dispose(), (this._model = t), this._widget.setModel(this._model).then(() => {
          if (this._widget && this._model && this._editor.hasModel()) {
            this._model.isEmpty ? this._widget.setMetaTitle("") : this._widget.setMetaTitle(h.N("metaTitle.N", "{0} ({1})", this._model.title, this._model.references.length));
            let t = this._editor.getModel().uri,
              i = new l.L(e.startLineNumber, e.startColumn),
              n = this._model.nearestReference(t, i);
            if (n) return this._widget.setSelection(n).then(() => {
              this._widget && "editor" === this._editor.getOption(76) && this._widget.focusOnPreviewEditor();
            });
          }
        }));
        t.dispose();
      }, e => {
        this._notificationService.error(e);
      });
    }
    changeFocusBetweenPreviewAndReferences() {
      this._widget && (this._widget.isPreviewEditorFocused() ? this._widget.focusOnReferenceTree() : this._widget.focusOnPreviewEditor());
    }
    goToNextOrPreviousReference(e) {
      return ce(this, void 0, void 0, function* () {
        if (!this._editor.hasModel() || !this._model || !this._widget) return;
        const t = this._widget.position;
        if (!t) return;
        const i = this._model.nearestReference(this._editor.getModel().uri, t);
        if (!i) return;
        const n = this._model.nextOrPreviousReference(i, e),
          o = this._editor.hasTextFocus(),
          s = this._widget.isPreviewEditorFocused();
        (yield this._widget.setSelection(n), yield this._gotoReference(n), o ? this._editor.focus() : this._widget && s && this._widget.focusOnPreviewEditor());
      });
    }
    revealReference(e) {
      return ce(this, void 0, void 0, function* () {
        this._editor.hasModel() && this._model && this._widget && (yield this._widget.revealReference(e));
      });
    }
    closeWidget(e = !0) {
      var t, i;
      (null === (t = this._widget) || void 0 === t || t.dispose(), null === (i = this._model) || void 0 === i || i.dispose(), this._referenceSearchVisible.reset(), this._disposables.clear(), (this._widget = void 0), (this._model = void 0), e && this._editor.focus(), (this._requestIdPool += 1));
    }
    _gotoReference(t) {
      (this._widget && this._widget.hide(), (this._ignoreModelChangeEvent = !0));
      const i = c.e.lift(t.range).collapseToStart();
      return this._editorService.openCodeEditor({
        resource: t.uri,
        options: {
          selection: i
        }
      }, this._editor).then(t => {
        var o;
        if (((this._ignoreModelChangeEvent = !1), t && this._widget)) {
          if (this._editor === t) (this._widget.show(i), this._widget.focusOnReferenceTree());else {
            const s = e.get(t),
              r = this._model.clone();
            (this.closeWidget(), t.focus(), s.toggleWidget(i, (0, n.PG)(e => Promise.resolve(r)), null !== (o = this._peekMode) && void 0 !== o && o));
          }
        } else this.closeWidget();
      }, e => {
        ((this._ignoreModelChangeEvent = !1), (0, o.dL)(e));
      });
    }
    openReference(e, t, i) {
      t || this.closeWidget();
      const {
        uri: n,
        range: o
      } = e;
      this._editorService.openCodeEditor({
        resource: n,
        options: {
          selection: o,
          pinned: i
        }
      }, this._editor, t);
    }
  };
  function ue(e, t) {
    const i = (0, d.rc)(e);
    if (!i) return;
    let n = he.get(i);
    n && t(n);
  }
  ((he.ID = "editor.contrib.referencesController"), (he = ae([le(2, p.i6), le(3, a.$), le(4, _.lT), le(5, f.TG), le(6, b.Uy), le(7, g.Ui)], he)), m.W.registerCommandAndKeybindingRule({
    id: "togglePeekWidgetFocus",
    weight: 100,
    primary: (0, s.gx)(2089, 60),
    when: p.Ao.or(de, d.Jy.inPeekEditor),
    handler(e) {
      ue(e, e => {
        e.changeFocusBetweenPreviewAndReferences();
      });
    }
  }), m.W.registerCommandAndKeybindingRule({
    id: "goToNextReference",
    weight: 90,
    primary: 62,
    secondary: [70],
    when: p.Ao.or(de, d.Jy.inPeekEditor),
    handler(e) {
      ue(e, e => {
        e.goToNextOrPreviousReference(!0);
      });
    }
  }), m.W.registerCommandAndKeybindingRule({
    id: "goToPreviousReference",
    weight: 90,
    primary: 1086,
    secondary: [1094],
    when: p.Ao.or(de, d.Jy.inPeekEditor),
    handler(e) {
      ue(e, e => {
        e.goToNextOrPreviousReference(!1);
      });
    }
  }), u.P.registerCommandAlias("goToNextReferenceFromEmbeddedEditor", "goToNextReference"), u.P.registerCommandAlias("goToPreviousReferenceFromEmbeddedEditor", "goToPreviousReference"), u.P.registerCommandAlias("closeReferenceSearchEditor", "closeReferenceSearch"), u.P.registerCommand("closeReferenceSearch", e => ue(e, e => e.closeWidget())), m.W.registerKeybindingRule({
    id: "closeReferenceSearch",
    weight: -1,
    primary: 9,
    secondary: [1033],
    when: p.Ao.and(d.Jy.inPeekEditor, p.Ao.not("config.editor.stablePeek"))
  }), m.W.registerKeybindingRule({
    id: "closeReferenceSearch",
    weight: 250,
    primary: 9,
    secondary: [1033],
    when: p.Ao.and(de, p.Ao.not("config.editor.stablePeek"))
  }), m.W.registerCommandAndKeybindingRule({
    id: "revealReference",
    weight: 200,
    primary: 3,
    mac: {
      primary: 3,
      secondary: [2066]
    },
    when: p.Ao.and(de, v.CQ),
    handler(e) {
      var t;
      const i = null === (t = e.get(v.Lw).lastFocusedList) || void 0 === t ? void 0 : t.getFocus();
      Array.isArray(i) && i[0] instanceof w.WX && ue(e, e => e.revealReference(i[0]));
    }
  }), m.W.registerCommandAndKeybindingRule({
    id: "openReferenceToSide",
    weight: 100,
    primary: 2051,
    mac: {
      primary: 259
    },
    when: p.Ao.and(de, v.CQ),
    handler(e) {
      var t;
      const i = null === (t = e.get(v.Lw).lastFocusedList) || void 0 === t ? void 0 : t.getFocus();
      Array.isArray(i) && i[0] instanceof w.WX && ue(e, e => e.openReference(i[0], !0, !0));
    }
  }), u.P.registerCommand("openReference", e => {
    var t;
    const i = null === (t = e.get(v.Lw).lastFocusedList) || void 0 === t ? void 0 : t.getFocus();
    Array.isArray(i) && i[0] instanceof w.WX && ue(e, e => e.openReference(i[0], !1, !0));
  }));
};