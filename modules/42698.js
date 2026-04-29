module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    MarkerController: () => oe,
    NextMarkerAction: () => re
  }));
  var n = i(73046),
    o = i(5976),
    s = i(16830),
    r = i(11640),
    a = i(50187),
    l = i(24314),
    c = i(29102),
    d = i(9488),
    h = i(4669),
    u = i(91741),
    g = i(97295),
    p = i(70666),
    f = i(65026),
    m = i(72065),
    v = i(98674),
    _ = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    b = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  class w {
    constructor(e, t, i) {
      ((this.marker = e), (this.index = t), (this.total = i));
    }
  }
  let y = class e {
    constructor(t, i) {
      ((this._markerService = i), (this._onDidChange = new h.Q5()), (this.onDidChange = this._onDidChange.event), (this._dispoables = new o.SL()), (this._markers = []), (this._nextIdx = -1), p.o.isUri(t) ? (this._resourceFilter = e => e.toString() === t.toString()) : t && (this._resourceFilter = t));
      const n = () => {
        ((this._markers = this._markerService.read({
          resource: p.o.isUri(t) ? t : void 0,
          severities: v.ZL.Error | v.ZL.Warning | v.ZL.Info
        })), "function" == typeof t && (this._markers = this._markers.filter(e => this._resourceFilter(e.resource))), this._markers.sort(e._compareMarker));
      };
      (n(), this._dispoables.add(i.onMarkerChanged(e => {
        (this._resourceFilter && !e.some(e => this._resourceFilter(e))) || (n(), (this._nextIdx = -1), this._onDidChange.fire());
      })));
    }
    dispose() {
      (this._dispoables.dispose(), this._onDidChange.dispose());
    }
    matches(e) {
      return ((!this._resourceFilter && !e) || (!(!this._resourceFilter || !e) && this._resourceFilter(e)));
    }
    get selected() {
      const e = this._markers[this._nextIdx];
      return e && new w(e, this._nextIdx + 1, this._markers.length);
    }
    _initIdx(e, t, i) {
      let n = !1,
        o = this._markers.findIndex(t => t.resource.toString() === e.uri.toString());
      o < 0 && ((o = (0, d.ry)(this._markers, {
        resource: e.uri
      }, (e, t) => (0, g.qu)(e.resource.toString(), t.resource.toString()))), o < 0 && (o = ~o));
      for (let i = o; i < this._markers.length; i++) {
        let o = l.e.lift(this._markers[i]);
        if (o.isEmpty()) {
          const t = e.getWordAtPosition(o.getStartPosition());
          t && (o = new l.e(o.startLineNumber, t.startColumn, o.startLineNumber, t.endColumn));
        }
        if (t && (o.containsPosition(t) || t.isBeforeOrEqual(o.getStartPosition()))) {
          ((this._nextIdx = i), (n = !0));
          break;
        }
        if (this._markers[i].resource.toString() !== e.uri.toString()) break;
      }
      (n || (this._nextIdx = i ? 0 : this._markers.length - 1), this._nextIdx < 0 && (this._nextIdx = this._markers.length - 1));
    }
    resetIndex() {
      this._nextIdx = -1;
    }
    move(e, t, i) {
      if (0 === this._markers.length) return !1;
      let n = this._nextIdx;
      return (-1 === this._nextIdx ? this._initIdx(t, i, e) : e ? (this._nextIdx = (this._nextIdx + 1) % this._markers.length) : e || (this._nextIdx = (this._nextIdx - 1 + this._markers.length) % this._markers.length), n !== this._nextIdx);
    }
    find(e, t) {
      let i = this._markers.findIndex(t => t.resource.toString() === e.toString());
      if (!(i < 0)) for (; i < this._markers.length; i++) if (l.e.containsPosition(this._markers[i], t)) return new w(this._markers[i], i + 1, this._markers.length);
    }
    static _compareMarker(e, t) {
      let i = (0, g.qu)(e.resource.toString(), t.resource.toString());
      return (0 === i && (i = v.ZL.compare(e.severity, t.severity)), 0 === i && (i = l.e.compareRangesUsingStarts(e, t)), i);
    }
  };
  y = _([b(1, v.lT)], y);
  const C = (0, m.yh)("IMarkerNavigationService");
  let x = class {
    constructor(e) {
      ((this._markerService = e), (this._provider = new u.S()));
    }
    getMarkerList(e) {
      for (let t of this._provider) {
        const i = t.getMarkerList(e);
        if (i) return i;
      }
      return new y(e, this._markerService);
    }
  };
  ((x = _([b(0, v.lT)], x)), (0, f.z)(C, x, !0));
  var S,
    k = i(63580),
    L = i(84144),
    N = i(38819),
    D = i(59554),
    I = i(65321),
    E = i(9802),
    T = i(41264),
    M = i(68843),
    A = i(95935),
    O = (i(81367), i(22043)),
    P = i(58335),
    R = i(44349),
    F = i(50988),
    B = i(14603),
    V = i(73910),
    W = i(97781);
  (!(function (e) {
    e.className = function (e) {
      switch (e) {
        case B.Z.Ignore:
          return "severity-ignore " + n.lA.info.classNames;
        case B.Z.Info:
          return n.lA.info.classNames;
        case B.Z.Warning:
          return n.lA.warning.classNames;
        case B.Z.Error:
          return n.lA.error.classNames;
        default:
          return "";
      }
    };
  })(S || (S = {})), (0, W.Ic)((e, t) => {
    const i = e.getColor(V.Jp);
    if (i) {
      const e = n.lA.error.cssSelector;
      t.addRule(`\n\t\t\t.monaco-editor .zone-widget ${e},\n\t\t\t.markers-panel .marker-icon${e},\n\t\t\t.text-search-provider-messages .providerMessage ${e},\n\t\t\t.extensions-viewlet > .extensions ${e} {\n\t\t\t\tcolor: ${i};\n\t\t\t}\n\t\t`);
    }
    const o = e.getColor(V.BO);
    if (o) {
      const e = n.lA.warning.cssSelector;
      t.addRule(`\n\t\t\t.monaco-editor .zone-widget ${e},\n\t\t\t.markers-panel .marker-icon${e},\n\t\t\t.extensions-viewlet > .extensions ${e},\n\t\t\t.extension-editor ${e},\n\t\t\t.text-search-provider-messages .providerMessage ${e},\n\t\t\t.preferences-editor ${e} {\n\t\t\t\tcolor: ${o};\n\t\t\t}\n\t\t`);
    }
    const s = e.getColor(V.OL);
    if (s) {
      const e = n.lA.info.cssSelector;
      t.addRule(`\n\t\t\t.monaco-editor .zone-widget ${e},\n\t\t\t.markers-panel .marker-icon${e},\n\t\t\t.extensions-viewlet > .extensions ${e},\n\t\t\t.text-search-provider-messages .providerMessage ${e},\n\t\t\t.extension-editor ${e} {\n\t\t\t\tcolor: ${s};\n\t\t\t}\n\t\t`);
    }
  }));
  var H = function (e, t, i, n) {
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
  class j {
    constructor(e, t, i, n, s) {
      ((this._openerService = n), (this._labelService = s), (this._lines = 0), (this._longestLineLength = 0), (this._relatedDiagnostics = new WeakMap()), (this._disposables = new o.SL()), (this._editor = t));
      const r = document.createElement("div");
      ((r.className = "descriptioncontainer"), (this._messageBlock = document.createElement("div")), this._messageBlock.classList.add("message"), this._messageBlock.setAttribute("aria-live", "assertive"), this._messageBlock.setAttribute("role", "alert"), r.appendChild(this._messageBlock), (this._relatedBlock = document.createElement("div")), r.appendChild(this._relatedBlock), this._disposables.add(I.mu(this._relatedBlock, "click", e => {
        e.preventDefault();
        const t = this._relatedDiagnostics.get(e.target);
        t && i(t);
      })), (this._scrollable = new E.NB(r, {
        horizontal: 1,
        vertical: 1,
        useShadows: !1,
        horizontalScrollbarSize: 3,
        verticalScrollbarSize: 3
      })), e.appendChild(this._scrollable.getDomNode()), this._disposables.add(this._scrollable.onScroll(e => {
        ((r.style.left = `-${e.scrollLeft}px`), (r.style.top = `-${e.scrollTop}px`));
      })), this._disposables.add(this._scrollable));
    }
    dispose() {
      (0, o.B9)(this._disposables);
    }
    update(e) {
      const {
        source: t,
        message: i,
        relatedInformation: n,
        code: o
      } = e;
      let s = ((null == t ? void 0 : t.length) || 0) + 2;
      o && (s += "string" == typeof o ? o.length : o.value.length);
      const r = (0, g.uq)(i);
      ((this._lines = r.length), (this._longestLineLength = 0));
      for (const e of r) this._longestLineLength = Math.max(e.length + s, this._longestLineLength);
      (I.PO(this._messageBlock), this._messageBlock.setAttribute("aria-label", this.getAriaLabel(e)), this._editor.applyFontInfo(this._messageBlock));
      let a = this._messageBlock;
      for (const e of r) ((a = document.createElement("div")), (a.innerText = e), "" === e && (a.style.height = this._messageBlock.style.lineHeight), this._messageBlock.appendChild(a));
      if (t || o) {
        const e = document.createElement("span");
        if ((e.classList.add("details"), a.appendChild(e), t)) {
          const i = document.createElement("span");
          ((i.innerText = t), i.classList.add("source"), e.appendChild(i));
        }
        if (o) if ("string" == typeof o) {
          const t = document.createElement("span");
          ((t.innerText = `(${o})`), t.classList.add("code"), e.appendChild(t));
        } else {
          ((this._codeLink = I.$("a.code-link")), this._codeLink.setAttribute("href", `${o.target.toString()}`), (this._codeLink.onclick = e => {
            (this._openerService.open(o.target, {
              allowCommands: !0
            }), e.preventDefault(), e.stopPropagation());
          }));
          ((I.R3(this._codeLink, I.$("span")).innerText = o.value), e.appendChild(this._codeLink));
        }
      }
      if ((I.PO(this._relatedBlock), this._editor.applyFontInfo(this._relatedBlock), (0, d.Of)(n))) {
        const e = this._relatedBlock.appendChild(document.createElement("div"));
        ((e.style.paddingTop = `${Math.floor(0.66 * this._editor.getOption(58))}px`), (this._lines += 1));
        for (const t of n) {
          let i = document.createElement("div"),
            n = document.createElement("a");
          (n.classList.add("filename"), (n.innerText = `${(0, M.p)(t.resource)}(${t.startLineNumber}, ${t.startColumn}): `), (n.title = this._labelService.getUriLabel(t.resource)), this._relatedDiagnostics.set(n, t));
          let o = document.createElement("span");
          ((o.innerText = t.message), i.appendChild(n), i.appendChild(o), (this._lines += 1), e.appendChild(i));
        }
      }
      const l = this._editor.getOption(43),
        c = Math.ceil(l.typicalFullwidthCharacterWidth * this._longestLineLength * 0.75),
        h = l.lineHeight * this._lines;
      this._scrollable.setScrollDimensions({
        scrollWidth: c,
        scrollHeight: h
      });
    }
    layout(e, t) {
      ((this._scrollable.getDomNode().style.height = `${e}px`), (this._scrollable.getDomNode().style.width = `${t}px`), this._scrollable.setScrollDimensions({
        width: t,
        height: e
      }));
    }
    getHeightInLines() {
      return Math.min(17, this._lines);
    }
    getAriaLabel(e) {
      let t = "";
      switch (e.severity) {
        case v.ZL.Error:
          t = k.N("错误", "错误");
          break;
        case v.ZL.Warning:
          t = k.N("Warning", "Warning");
          break;
        case v.ZL.Info:
          t = k.N("Info", "Info");
          break;
        case v.ZL.Hint:
          t = k.N("Hint", "Hint");
      }
      let i = k.N("marker aria", "{0} at {1}. ", t, e.startLineNumber + ":" + e.startColumn);
      const n = this._editor.getModel();
      if (n && e.startLineNumber <= n.getLineCount() && e.startLineNumber >= 1) {
        i = `${n.getLineContent(e.startLineNumber)}, ${i}`;
      }
      return i;
    }
  }
  let U = class e extends O.vk {
    constructor(e, t, i, n, s, r, a) {
      (super(e, {
        showArrow: !0,
        showFrame: !0,
        isAccessible: !0,
        frameWidth: 1
      }, s), (this._themeService = t), (this._openerService = i), (this._menuService = n), (this._contextKeyService = r), (this._labelService = a), (this._callOnDispose = new o.SL()), (this._onDidSelectRelatedInformation = new h.Q5()), (this.onDidSelectRelatedInformation = this._onDidSelectRelatedInformation.event), (this._severity = v.ZL.Warning), (this._backgroundColor = T.Il.white), this._applyTheme(t.getColorTheme()), this._callOnDispose.add(t.onDidColorThemeChange(this._applyTheme.bind(this))), this.create());
    }
    _applyTheme(e) {
      this._backgroundColor = e.getColor(ee);
      let t = Z,
        i = G;
      this._severity === v.ZL.Warning ? ((t = Y), (i = Q)) : this._severity === v.ZL.Info && ((t = X), (i = J));
      const n = e.getColor(t),
        o = e.getColor(i);
      this.style({
        arrowColor: n,
        frameColor: n,
        headerBackgroundColor: o,
        primaryHeadingColor: e.getColor(O.IH),
        secondaryHeadingColor: e.getColor(O.R7)
      });
    }
    _applyStyles() {
      (this._parentContainer && (this._parentContainer.style.backgroundColor = this._backgroundColor ? this._backgroundColor.toString() : ""), super._applyStyles());
    }
    dispose() {
      (this._callOnDispose.dispose(), super.dispose());
    }
    _fillHead(t) {
      (super._fillHead(t), this._disposables.add(this._actionbarWidget.actionRunner.onBeforeRun(e => this.editor.focus())));
      const i = [],
        n = this._menuService.createMenu(e.TitleMenu, this._contextKeyService);
      ((0, P.vr)(n, void 0, i), this._actionbarWidget.push(i, {
        label: !1,
        icon: !0,
        index: 0
      }), n.dispose());
    }
    _fillTitleIcon(e) {
      this._icon = I.R3(e, I.$(""));
    }
    _fillBody(e) {
      ((this._parentContainer = e), e.classList.add("marker-widget"), (this._parentContainer.tabIndex = 0), this._parentContainer.setAttribute("role", "tooltip"), (this._container = document.createElement("div")), e.appendChild(this._container), (this._message = new j(this._container, this.editor, e => this._onDidSelectRelatedInformation.fire(e), this._openerService, this._labelService)), this._disposables.add(this._message));
    }
    show() {
      throw new Error("call showAtMarker");
    }
    showAtMarker(e, t, i) {
      (this._container.classList.remove("stale"), this._message.update(e), (this._severity = e.severity), this._applyTheme(this._themeService.getColorTheme()));
      let n = l.e.lift(e);
      const o = this.editor.getPosition();
      let s = o && n.containsPosition(o) ? o : n.getStartPosition();
      super.show(s, this.computeRequiredHeight());
      const r = this.editor.getModel();
      if (r) {
        const e = i > 1 ? k.N("problems", "{0} of {1} problems", t, i) : k.N("change", "{0} of {1} problem", t, i);
        this.setTitle((0, A.EZ)(r.uri), e);
      }
      ((this._icon.className = `codicon ${S.className(v.ZL.toSeverity(this._severity))}`), this.editor.revealPositionNearTop(s, 0), this.editor.focus());
    }
    updateMarker(e) {
      (this._container.classList.remove("stale"), this._message.update(e));
    }
    showStale() {
      (this._container.classList.add("stale"), this._relayout());
    }
    _doLayoutBody(e, t) {
      (super._doLayoutBody(e, t), (this._heightInPixel = e), this._message.layout(e, t), (this._container.style.height = `${e}px`));
    }
    _onWidth(e) {
      this._message.layout(this._heightInPixel, e);
    }
    _relayout() {
      super._relayout(this.computeRequiredHeight());
    }
    computeRequiredHeight() {
      return 3 + this._message.getHeightInLines();
    }
  };
  ((U.TitleMenu = new L.eH("gotoErrorTitleMenu")), (U = H([z(1, W.XE), z(2, F.v4), z(3, L.co), z(4, m.TG), z(5, N.i6), z(6, R.e)], U)));
  let $ = (0, V.kw)(V.lX, V.b6),
    K = (0, V.kw)(V.uo, V.pW),
    q = (0, V.kw)(V.c6, V.T8);
  const Z = (0, V.P6)("editorMarkerNavigationError.background", {
      dark: $,
      light: $,
      hc: V.lR
    }, k.N("editorMarkerNavigationError", "Editor marker navigation widget error color.")),
    G = (0, V.P6)("editorMarkerNavigationError.headerBackground", {
      dark: (0, V.Zn)(Z, 0.1),
      light: (0, V.Zn)(Z, 0.1),
      hc: null
    }, k.N("editorMarkerNavigationErrorHeaderBackground", "Editor marker navigation widget error heading background.")),
    Y = (0, V.P6)("editorMarkerNavigationWarning.background", {
      dark: K,
      light: K,
      hc: V.lR
    }, k.N("editorMarkerNavigationWarning", "Editor marker navigation widget warning color.")),
    Q = (0, V.P6)("editorMarkerNavigationWarning.headerBackground", {
      dark: (0, V.Zn)(Y, 0.1),
      light: (0, V.Zn)(Y, 0.1),
      hc: "#0C141F"
    }, k.N("editorMarkerNavigationWarningBackground", "Editor marker navigation widget warning heading background.")),
    X = (0, V.P6)("editorMarkerNavigationInfo.background", {
      dark: q,
      light: q,
      hc: V.lR
    }, k.N("editorMarkerNavigationInfo", "Editor marker navigation widget info color.")),
    J = (0, V.P6)("editorMarkerNavigationInfo.headerBackground", {
      dark: (0, V.Zn)(X, 0.1),
      light: (0, V.Zn)(X, 0.1),
      hc: null
    }, k.N("editorMarkerNavigationInfoHeaderBackground", "Editor marker navigation widget info heading background.")),
    ee = (0, V.P6)("editorMarkerNavigation.background", {
      dark: V.cv,
      light: V.cv,
      hc: V.cv
    }, k.N("editorMarkerNavigationBackground", "Editor marker navigation widget background."));
  (0, W.Ic)((e, t) => {
    const i = e.getColor(V.ur);
    i && t.addRule(`.monaco-editor .marker-widget a.code-link span { color: ${i}; }`);
    const n = e.getColor(V.sg);
    n && t.addRule(`.monaco-editor .marker-widget a.code-link span:hover { color: ${n}; }`);
  });
  var te = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    ie = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    ne = function (e, t, i, n) {
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
  let oe = class e {
    constructor(e, t, i, n, s) {
      ((this._markerNavigationService = t), (this._contextKeyService = i), (this._editorService = n), (this._instantiationService = s), (this._sessionDispoables = new o.SL()), (this._editor = e), (this._widgetVisible = le.bindTo(this._contextKeyService)));
    }
    static get(t) {
      return t.getContribution(e.ID);
    }
    dispose() {
      (this._cleanUp(), this._sessionDispoables.dispose());
    }
    _cleanUp() {
      (this._widgetVisible.reset(), this._sessionDispoables.clear(), (this._widget = void 0), (this._model = void 0));
    }
    _getOrCreateModel(e) {
      if (this._model && this._model.matches(e)) return this._model;
      let t = !1;
      return (this._model && ((t = !0), this._cleanUp()), (this._model = this._markerNavigationService.getMarkerList(e)), t && this._model.move(!0, this._editor.getModel(), this._editor.getPosition()), (this._widget = this._instantiationService.createInstance(U, this._editor)), this._widget.onDidClose(() => this.close(), this, this._sessionDispoables), this._widgetVisible.set(!0), this._sessionDispoables.add(this._model), this._sessionDispoables.add(this._widget), this._sessionDispoables.add(this._editor.onDidChangeCursorPosition(e => {
        var t, i, n;
        ((null === (t = this._model) || void 0 === t ? void 0 : t.selected) && l.e.containsPosition(null === (i = this._model) || void 0 === i ? void 0 : i.selected.marker, e.position)) || null === (n = this._model) || void 0 === n || n.resetIndex();
      })), this._sessionDispoables.add(this._model.onDidChange(() => {
        if (!this._widget || !this._widget.position || !this._model) return;
        const e = this._model.find(this._editor.getModel().uri, this._widget.position);
        e ? this._widget.updateMarker(e.marker) : this._widget.showStale();
      })), this._sessionDispoables.add(this._widget.onDidSelectRelatedInformation(e => {
        (this._editorService.openCodeEditor({
          resource: e.resource,
          options: {
            pinned: !0,
            revealIfOpened: !0,
            selection: l.e.lift(e).collapseToStart()
          }
        }, this._editor), this.close(!1));
      })), this._sessionDispoables.add(this._editor.onDidChangeModel(() => this._cleanUp())), this._model);
    }
    close(e = !0) {
      (this._cleanUp(), e && this._editor.focus());
    }
    showAtMarker(e) {
      if (this._editor.hasModel()) {
        const t = this._getOrCreateModel(this._editor.getModel().uri);
        (t.resetIndex(), t.move(!0, this._editor.getModel(), new a.L(e.startLineNumber, e.startColumn)), t.selected && this._widget.showAtMarker(t.selected.marker, t.selected.index, t.selected.total));
      }
    }
    nagivate(t, i) {
      return ne(this, void 0, void 0, function* () {
        if (this._editor.hasModel()) {
          const n = this._getOrCreateModel(i ? void 0 : this._editor.getModel().uri);
          if ((n.move(t, this._editor.getModel(), this._editor.getPosition()), !n.selected)) return;
          if (n.selected.marker.resource.toString() !== this._editor.getModel().uri.toString()) {
            this._cleanUp();
            const o = yield this._editorService.openCodeEditor({
              resource: n.selected.marker.resource,
              options: {
                pinned: !1,
                revealIfOpened: !0,
                selectionRevealType: 2,
                selection: n.selected.marker
              }
            }, this._editor);
            o && (e.get(o).close(), e.get(o).nagivate(t, i));
          } else this._widget.showAtMarker(n.selected.marker, n.selected.index, n.selected.total);
        }
      });
    }
  };
  ((oe.ID = "editor.contrib.markerController"), (oe = te([ie(1, C), ie(2, N.i6), ie(3, r.$), ie(4, m.TG)], oe)));
  class se extends s.R6 {
    constructor(e, t, i) {
      (super(i), (this._next = e), (this._multiFile = t));
    }
    run(e, t) {
      return ne(this, void 0, void 0, function* () {
        t.hasModel() && oe.get(t).nagivate(this._next, this._multiFile);
      });
    }
  }
  class re extends se {
    constructor() {
      super(!0, !1, {
        id: re.ID,
        label: re.LABEL,
        alias: "Go to Next Problem (Error, Warning, Info)",
        precondition: void 0,
        kbOpts: {
          kbExpr: c.u.focus,
          primary: 578,
          weight: 100
        },
        menuOpts: {
          menuId: U.TitleMenu,
          title: re.LABEL,
          icon: (0, D.q5)("marker-navigation-next", n.lA.arrowDown, k.N("nextMarkerIcon", "Icon for goto next marker.")),
          group: "navigation",
          order: 1
        }
      });
    }
  }
  ((re.ID = "editor.action.marker.next"), (re.LABEL = k.N("markerAction.next.label", "Go to Next Problem (Error, Warning, Info)")));
  class ae extends se {
    constructor() {
      super(!1, !1, {
        id: ae.ID,
        label: ae.LABEL,
        alias: "Go to Previous Problem (Error, Warning, Info)",
        precondition: void 0,
        kbOpts: {
          kbExpr: c.u.focus,
          primary: 1602,
          weight: 100
        },
        menuOpts: {
          menuId: U.TitleMenu,
          title: re.LABEL,
          icon: (0, D.q5)("marker-navigation-previous", n.lA.arrowUp, k.N("previousMarkerIcon", "Icon for goto previous marker.")),
          group: "navigation",
          order: 2
        }
      });
    }
  }
  ((ae.ID = "editor.action.marker.prev"), (ae.LABEL = k.N("markerAction.previous.label", "Go to Previous Problem (Error, Warning, Info)")));
  ((0, s._K)(oe.ID, oe), (0, s.Qr)(re), (0, s.Qr)(ae), (0, s.Qr)(class extends se {
    constructor() {
      super(!0, !0, {
        id: "editor.action.marker.nextInFiles",
        label: k.N("markerAction.nextInFiles.label", "Go to Next Problem in Files (Error, Warning, Info)"),
        alias: "Go to Next Problem in Files (Error, Warning, Info)",
        precondition: void 0,
        kbOpts: {
          kbExpr: c.u.focus,
          primary: 66,
          weight: 100
        },
        menuOpts: {
          menuId: L.eH.MenubarGoMenu,
          title: k.N({
            key: "miGotoNextProblem",
            comment: ["&& denotes a mnemonic"]
          }, "Next &&Problem"),
          group: "6_problem_nav",
          order: 1
        }
      });
    }
  }), (0, s.Qr)(class extends se {
    constructor() {
      super(!1, !0, {
        id: "editor.action.marker.prevInFiles",
        label: k.N("markerAction.previousInFiles.label", "Go to Previous Problem in Files (Error, Warning, Info)"),
        alias: "Go to Previous Problem in Files (Error, Warning, Info)",
        precondition: void 0,
        kbOpts: {
          kbExpr: c.u.focus,
          primary: 1090,
          weight: 100
        },
        menuOpts: {
          menuId: L.eH.MenubarGoMenu,
          title: k.N({
            key: "miGotoPreviousProblem",
            comment: ["&& denotes a mnemonic"]
          }, "Previous &&Problem"),
          group: "6_problem_nav",
          order: 2
        }
      });
    }
  }));
  const le = new N.uy("markersNavigationVisible", !1),
    ce = s._l.bindToContribution(oe.get);
  (0, s.fK)(new ce({
    id: "closeMarkersNavigation",
    precondition: le,
    handler: e => e.close(),
    kbOpts: {
      weight: 150,
      kbExpr: c.u.focus,
      primary: 9,
      secondary: [1033]
    }
  }));
};