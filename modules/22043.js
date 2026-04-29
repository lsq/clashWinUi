module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Fw: () => M,
    Jy: () => A,
    vk: () => F,
    rc: () => P,
    SC: () => H,
    RX: () => q,
    sH: () => Z,
    WL: () => Y,
    xH: () => Q,
    M8: () => z,
    a7: () => U,
    xk: () => j,
    F8: () => G,
    Zj: () => $,
    IY: () => K,
    KY: () => B,
    IH: () => V,
    R7: () => W
  });
  var n = i(65321),
    o = i(90317),
    s = i(74741),
    r = i(73046),
    a = i(41264),
    l = i(4669),
    c = i(36248),
    d = (i(42048), i(16830)),
    h = i(11640),
    u = i(84527),
    g = i(73098),
    p = i(44742),
    f = i(5976),
    m = (i(82132), i(24314)),
    v = i(44174);
  const _ = new a.Il(new a.VS(0, 122, 204)),
    b = {
      showArrow: !0,
      showFrame: !0,
      className: "",
      frameColor: _,
      arrowColor: _,
      keepEditorSelection: !1
    };
  class w {
    constructor(e, t, i, n, o, s) {
      ((this.id = ""), (this.domNode = e), (this.afterLineNumber = t), (this.afterColumn = i), (this.heightInLines = n), (this._onDomNodeTop = o), (this._onComputedHeight = s));
    }
    onDomNodeTop(e) {
      this._onDomNodeTop(e);
    }
    onComputedHeight(e) {
      this._onComputedHeight(e);
    }
  }
  class y {
    constructor(e, t) {
      ((this._id = e), (this._domNode = t));
    }
    getId() {
      return this._id;
    }
    getDomNode() {
      return this._domNode;
    }
    getPosition() {
      return null;
    }
  }
  class C {
    constructor(e) {
      ((this._editor = e), (this._ruleName = C._IdGenerator.nextId()), (this._decorations = []), (this._color = null), (this._height = -1));
    }
    dispose() {
      (this.hide(), n.uN(this._ruleName));
    }
    set color(e) {
      this._color !== e && ((this._color = e), this._updateStyle());
    }
    set height(e) {
      this._height !== e && ((this._height = e), this._updateStyle());
    }
    _updateStyle() {
      (n.uN(this._ruleName), n.fk(`.monaco-editor ${this._ruleName}`, `border-style: solid; border-color: transparent; border-bottom-color: ${this._color}; border-width: ${this._height}px; bottom: -${this._height}px; margin-left: -${this._height}px; `));
    }
    show(e) {
      this._decorations = this._editor.deltaDecorations(this._decorations, [{
        range: m.e.fromPositions(e),
        options: {
          description: "zone-widget-arrow",
          className: this._ruleName,
          stickiness: 1
        }
      }]);
    }
    hide() {
      this._editor.deltaDecorations(this._decorations, []);
    }
  }
  C._IdGenerator = new p.R(".arrow-decoration-");
  class x {
    constructor(e, t = {}) {
      ((this._arrow = null), (this._overlayWidget = null), (this._resizeSash = null), (this._positionMarkerId = []), (this._viewZone = null), (this._disposables = new f.SL()), (this.container = null), (this._isShowing = !1), (this.editor = e), (this.options = c.I8(t)), c.jB(this.options, b, !1), (this.domNode = document.createElement("div")), this.options.isAccessible || (this.domNode.setAttribute("aria-hidden", "true"), this.domNode.setAttribute("role", "presentation")), this._disposables.add(this.editor.onDidLayoutChange(e => {
        const t = this._getWidth(e);
        ((this.domNode.style.width = t + "px"), (this.domNode.style.left = this._getLeft(e) + "px"), this._onWidth(t));
      })));
    }
    dispose() {
      (this._overlayWidget && (this.editor.removeOverlayWidget(this._overlayWidget), (this._overlayWidget = null)), this._viewZone && this.editor.changeViewZones(e => {
        (this._viewZone && e.removeZone(this._viewZone.id), (this._viewZone = null));
      }), this.editor.deltaDecorations(this._positionMarkerId, []), (this._positionMarkerId = []), this._disposables.dispose());
    }
    create() {
      (this.domNode.classList.add("zone-widget"), this.options.className && this.domNode.classList.add(this.options.className), (this.container = document.createElement("div")), this.container.classList.add("zone-widget-container"), this.domNode.appendChild(this.container), this.options.showArrow && ((this._arrow = new C(this.editor)), this._disposables.add(this._arrow)), this._fillContainer(this.container), this._initSash(), this._applyStyles());
    }
    style(e) {
      (e.frameColor && (this.options.frameColor = e.frameColor), e.arrowColor && (this.options.arrowColor = e.arrowColor), this._applyStyles());
    }
    _applyStyles() {
      if (this.container && this.options.frameColor) {
        let e = this.options.frameColor.toString();
        ((this.container.style.borderTopColor = e), (this.container.style.borderBottomColor = e));
      }
      if (this._arrow && this.options.arrowColor) {
        let e = this.options.arrowColor.toString();
        this._arrow.color = e;
      }
    }
    _getWidth(e) {
      return e.width - e.minimap.minimapWidth - e.verticalScrollbarWidth;
    }
    _getLeft(e) {
      return e.minimap.minimapWidth > 0 && 0 === e.minimap.minimapLeft ? e.minimap.minimapWidth : 0;
    }
    _onViewZoneTop(e) {
      this.domNode.style.top = e + "px";
    }
    _onViewZoneHeight(e) {
      if (((this.domNode.style.height = `${e}px`), this.container)) {
        let t = e - this._decoratingElementsHeight();
        this.container.style.height = `${t}px`;
        const i = this.editor.getLayoutInfo();
        this._doLayout(t, this._getWidth(i));
      }
      this._resizeSash && this._resizeSash.layout();
    }
    get position() {
      const [e] = this._positionMarkerId;
      if (!e) return;
      const t = this.editor.getModel();
      if (!t) return;
      const i = t.getDecorationRange(e);
      return i ? i.getStartPosition() : void 0;
    }
    show(e, t) {
      const i = m.e.isIRange(e) ? m.e.lift(e) : m.e.fromPositions(e);
      ((this._isShowing = !0), this._showImpl(i, t), (this._isShowing = !1), (this._positionMarkerId = this.editor.deltaDecorations(this._positionMarkerId, [{
        range: i,
        options: v.qx.EMPTY
      }])));
    }
    hide() {
      (this._viewZone && (this.editor.changeViewZones(e => {
        this._viewZone && e.removeZone(this._viewZone.id);
      }), (this._viewZone = null)), this._overlayWidget && (this.editor.removeOverlayWidget(this._overlayWidget), (this._overlayWidget = null)), this._arrow && this._arrow.hide());
    }
    _decoratingElementsHeight() {
      let e = this.editor.getOption(58),
        t = 0;
      if (this.options.showArrow) {
        t += 2 * Math.round(e / 3);
      }
      if (this.options.showFrame) {
        t += 2 * Math.round(e / 9);
      }
      return t;
    }
    _showImpl(e, t) {
      const i = e.getStartPosition(),
        n = this.editor.getLayoutInfo(),
        o = this._getWidth(n);
      ((this.domNode.style.width = `${o}px`), (this.domNode.style.left = this._getLeft(n) + "px"));
      const s = document.createElement("div");
      s.style.overflow = "hidden";
      const r = this.editor.getOption(58),
        a = Math.max(12, (this.editor.getLayoutInfo().height / r) * 0.8);
      t = Math.min(t, a);
      let l = 0,
        c = 0;
      if ((this._arrow && this.options.showArrow && ((l = Math.round(r / 3)), (this._arrow.height = l), this._arrow.show(i)), this.options.showFrame && (c = Math.round(r / 9)), this.editor.changeViewZones(e => {
        (this._viewZone && e.removeZone(this._viewZone.id), this._overlayWidget && (this.editor.removeOverlayWidget(this._overlayWidget), (this._overlayWidget = null)), (this.domNode.style.top = "-1000px"), (this._viewZone = new w(s, i.lineNumber, i.column, t, e => this._onViewZoneTop(e), e => this._onViewZoneHeight(e))), (this._viewZone.id = e.addZone(this._viewZone)), (this._overlayWidget = new y("vs.editor.contrib.zoneWidget" + this._viewZone.id, this.domNode)), this.editor.addOverlayWidget(this._overlayWidget));
      }), this.container && this.options.showFrame)) {
        const e = this.options.frameWidth ? this.options.frameWidth : c;
        ((this.container.style.borderTopWidth = e + "px"), (this.container.style.borderBottomWidth = e + "px"));
      }
      let d = t * r - this._decoratingElementsHeight();
      (this.container && ((this.container.style.top = l + "px"), (this.container.style.height = d + "px"), (this.container.style.overflow = "hidden")), this._doLayout(d, o), this.options.keepEditorSelection || this.editor.setSelection(e));
      const h = this.editor.getModel();
      if (h) {
        const t = e.endLineNumber + 1;
        t <= h.getLineCount() ? this.revealLine(t, !1) : this.revealLine(h.getLineCount(), !0);
      }
    }
    revealLine(e, t) {
      t ? this.editor.revealLineInCenter(e, 0) : this.editor.revealLine(e, 0);
    }
    setCssClass(e, t) {
      this.container && (t && this.container.classList.remove(t), this.container.classList.add(e));
    }
    _onWidth(e) {}
    _doLayout(e, t) {}
    _relayout(e) {
      this._viewZone && this._viewZone.heightInLines !== e && this.editor.changeViewZones(t => {
        this._viewZone && ((this._viewZone.heightInLines = e), t.layoutZone(this._viewZone.id));
      });
    }
    _initSash() {
      if (this._resizeSash) return;
      let e;
      ((this._resizeSash = this._disposables.add(new g.g(this.domNode, this, {
        orientation: 1
      }))), this.options.isResizeable || (this._resizeSash.hide(), (this._resizeSash.state = 0)), this._disposables.add(this._resizeSash.onDidStart(t => {
        this._viewZone && (e = {
          startY: t.startY,
          heightInLines: this._viewZone.heightInLines
        });
      })), this._disposables.add(this._resizeSash.onDidEnd(() => {
        e = void 0;
      })), this._disposables.add(this._resizeSash.onDidChange(t => {
        if (e) {
          let i = (t.currentY - e.startY) / this.editor.getOption(58),
            n = i < 0 ? Math.ceil(i) : Math.floor(i),
            o = e.heightInLines + n;
          o > 5 && o < 35 && this._relayout(o);
        }
      })));
    }
    getHorizontalSashLeft() {
      return 0;
    }
    getHorizontalSashTop() {
      return ((null === this.domNode.style.height ? 0 : parseInt(this.domNode.style.height)) - this._decoratingElementsHeight() / 2);
    }
    getHorizontalSashWidth() {
      const e = this.editor.getLayoutInfo();
      return e.width - e.minimap.minimapWidth;
    }
  }
  var S = i(63580),
    k = i(58335),
    L = i(38819),
    N = i(65026),
    D = i(72065),
    I = i(73910),
    E = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    T = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  const M = (0, D.yh)("IPeekViewService");
  var A;
  ((0, N.z)(M, class {
    constructor() {
      this._widgets = new Map();
    }
    addExclusiveWidget(e, t) {
      const i = this._widgets.get(e);
      i && (i.listener.dispose(), i.widget.dispose());
      this._widgets.set(e, {
        widget: t,
        listener: t.onDidClose(() => {
          const i = this._widgets.get(e);
          i && i.widget === t && (i.listener.dispose(), this._widgets.delete(e));
        })
      });
    }
  }), (function (e) {
    ((e.inPeekEditor = new L.uy("inReferenceSearchEditor", !0, S.N("inReferenceSearchEditor", "Whether the current code editor is embedded inside peek"))), (e.notInPeekEditor = e.inPeekEditor.toNegated()));
  })(A || (A = {})));
  let O = class {
    constructor(e, t) {
      e instanceof u.H && A.inPeekEditor.bindTo(t);
    }
    dispose() {}
  };
  function P(e) {
    let t = e.get(h.$).getFocusedCodeEditor();
    return t instanceof u.H ? t.getParentEditor() : t;
  }
  ((O.ID = "editor.contrib.referenceController"), (O = E([T(1, L.i6)], O)), (0, d._K)(O.ID, O));
  const R = {
    headerBackgroundColor: a.Il.white,
    primaryHeadingColor: a.Il.fromHex("#333333"),
    secondaryHeadingColor: a.Il.fromHex("#6c6c6cb3")
  };
  let F = class extends x {
    constructor(e, t, i) {
      (super(e, t), (this.instantiationService = i), (this._onDidClose = new l.Q5()), (this.onDidClose = this._onDidClose.event), c.jB(this.options, R, !1));
    }
    dispose() {
      this.disposed || ((this.disposed = !0), super.dispose(), this._onDidClose.fire(this));
    }
    style(e) {
      let t = this.options;
      (e.headerBackgroundColor && (t.headerBackgroundColor = e.headerBackgroundColor), e.primaryHeadingColor && (t.primaryHeadingColor = e.primaryHeadingColor), e.secondaryHeadingColor && (t.secondaryHeadingColor = e.secondaryHeadingColor), super.style(e));
    }
    _applyStyles() {
      super._applyStyles();
      let e = this.options;
      (this._headElement && e.headerBackgroundColor && (this._headElement.style.backgroundColor = e.headerBackgroundColor.toString()), this._primaryHeading && e.primaryHeadingColor && (this._primaryHeading.style.color = e.primaryHeadingColor.toString()), this._secondaryHeading && e.secondaryHeadingColor && (this._secondaryHeading.style.color = e.secondaryHeadingColor.toString()), this._bodyElement && e.frameColor && (this._bodyElement.style.borderColor = e.frameColor.toString()));
    }
    _fillContainer(e) {
      (this.setCssClass("peekview-widget"), (this._headElement = n.$(".head")), (this._bodyElement = n.$(".body")), this._fillHead(this._headElement), this._fillBody(this._bodyElement), e.appendChild(this._headElement), e.appendChild(this._bodyElement));
    }
    _fillHead(e, t) {
      const i = n.$(".peekview-title");
      (this.options.supportOnTitleClick && (i.classList.add("clickable"), n.mu(i, "click", e => this._onTitleClick(e))), n.R3(this._headElement, i), this._fillTitleIcon(i), (this._primaryHeading = n.$("span.filename")), (this._secondaryHeading = n.$("span.dirname")), (this._metaHeading = n.$("span.meta")), n.R3(i, this._primaryHeading, this._secondaryHeading, this._metaHeading));
      const a = n.$(".peekview-actions");
      n.R3(this._headElement, a);
      const l = this._getActionBarOptions();
      ((this._actionbarWidget = new o.o(a, l)), this._disposables.add(this._actionbarWidget), t || this._actionbarWidget.push(new s.aU("peekview.close", S.N("label.close", "Close"), r.lA.close.classNames, !0, () => (this.dispose(), Promise.resolve())), {
        label: !1,
        icon: !0
      }));
    }
    _fillTitleIcon(e) {}
    _getActionBarOptions() {
      return {
        actionViewItemProvider: k.Id.bind(void 0, this.instantiationService),
        orientation: 0
      };
    }
    _onTitleClick(e) {}
    setTitle(e, t) {
      this._primaryHeading && this._secondaryHeading && ((this._primaryHeading.innerText = e), this._primaryHeading.setAttribute("title", e), t ? (this._secondaryHeading.innerText = t) : n.PO(this._secondaryHeading));
    }
    setMetaTitle(e) {
      this._metaHeading && (e ? ((this._metaHeading.innerText = e), n.$Z(this._metaHeading)) : n.Cp(this._metaHeading));
    }
    _doLayout(e, t) {
      if (!this._isShowing && e < 0) return void this.dispose();
      const i = Math.ceil(1.2 * this.editor.getOption(58)),
        n = Math.round(e - (i + 2));
      (this._doLayoutHead(i, t), this._doLayoutBody(n, t));
    }
    _doLayoutHead(e, t) {
      this._headElement && ((this._headElement.style.height = `${e}px`), (this._headElement.style.lineHeight = this._headElement.style.height));
    }
    _doLayoutBody(e, t) {
      this._bodyElement && (this._bodyElement.style.height = `${e}px`);
    }
  };
  F = E([T(2, D.TG)], F);
  const B = (0, I.P6)("peekViewTitle.background", {
      dark: (0, I.Zn)(I.c6, 0.1),
      light: (0, I.Zn)(I.c6, 0.1),
      hc: null
    }, S.N("peekViewTitleBackground", "Background color of the peek view title area.")),
    V = (0, I.P6)("peekViewTitleLabel.foreground", {
      dark: a.Il.white,
      light: a.Il.black,
      hc: a.Il.white
    }, S.N("peekViewTitleForeground", "Color of the peek view title.")),
    W = (0, I.P6)("peekViewTitleDescription.foreground", {
      dark: "#ccccccb3",
      light: "#616161",
      hc: "#FFFFFF99"
    }, S.N("peekViewTitleInfoForeground", "Color of the peek view title info.")),
    H = (0, I.P6)("peekView.border", {
      dark: I.c6,
      light: I.c6,
      hc: I.lR
    }, S.N("peekViewBorder", "Color of the peek view borders and arrow.")),
    z = (0, I.P6)("peekViewResult.background", {
      dark: "#252526",
      light: "#F3F3F3",
      hc: a.Il.black
    }, S.N("peekViewResultsBackground", "Background color of the peek view result list.")),
    j = (0, I.P6)("peekViewResult.lineForeground", {
      dark: "#bbbbbb",
      light: "#646465",
      hc: a.Il.white
    }, S.N("peekViewResultsMatchForeground", "Foreground color for line nodes in the peek view result list.")),
    U = (0, I.P6)("peekViewResult.fileForeground", {
      dark: a.Il.white,
      light: "#1E1E1E",
      hc: a.Il.white
    }, S.N("peekViewResultsFileForeground", "Foreground color for file nodes in the peek view result list.")),
    $ = (0, I.P6)("peekViewResult.selectionBackground", {
      dark: "#3399ff33",
      light: "#3399ff33",
      hc: null
    }, S.N("peekViewResultsSelectionBackground", "Background color of the selected entry in the peek view result list.")),
    K = (0, I.P6)("peekViewResult.selectionForeground", {
      dark: a.Il.white,
      light: "#6C6C6C",
      hc: a.Il.white
    }, S.N("peekViewResultsSelectionForeground", "Foreground color of the selected entry in the peek view result list.")),
    q = (0, I.P6)("peekViewEditor.background", {
      dark: "#001F33",
      light: "#F2F8FC",
      hc: a.Il.black
    }, S.N("peekViewEditorBackground", "Background color of the peek view editor.")),
    Z = (0, I.P6)("peekViewEditorGutter.background", {
      dark: q,
      light: q,
      hc: q
    }, S.N("peekViewEditorGutterBackground", "Background color of the gutter in the peek view editor.")),
    G = (0, I.P6)("peekViewResult.matchHighlightBackground", {
      dark: "#ea5c004d",
      light: "#ea5c004d",
      hc: null
    }, S.N("peekViewResultsMatchHighlight", "Match highlight color in the peek view result list.")),
    Y = (0, I.P6)("peekViewEditor.matchHighlightBackground", {
      dark: "#ff8f0099",
      light: "#f5d802de",
      hc: null
    }, S.N("peekViewEditorMatchHighlight", "Match highlight color in the peek view editor.")),
    Q = (0, I.P6)("peekViewEditor.matchHighlightBorder", {
      dark: null,
      light: null,
      hc: I.xL
    }, S.N("peekViewEditorMatchHighlightBorder", "Match highlight border in the peek view editor."));
};