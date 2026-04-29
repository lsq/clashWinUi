module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Gm: () => ao
  });
  var n = i(26479),
    o = i(16830),
    s = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    r = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let a = class {
    constructor(e, t) {}
    dispose() {}
  };
  ((a.ID = "editor.contrib.markerDecorations"), (a = s([r(1, n.i)], a)), (0, o._K)(a.ID, a));
  i(60081);
  var l = i(63580),
    c = i(65321),
    d = i(17301),
    h = i(4669),
    u = i(5976),
    g = i(66663),
    p = i(89052),
    f = i(11640),
    m = i(16268),
    v = i(3860),
    _ = i(38626),
    b = i(1432),
    w = i(10553),
    y = i(23938),
    C = i(15393),
    x = i(57974);
  class S {
    constructor(e, t) {
      ((this.x = e), (this.y = t), (this._pageCoordinatesBrand = void 0));
    }
    toClientCoordinates() {
      return new k(this.x - c.DI.scrollX, this.y - c.DI.scrollY);
    }
  }
  class k {
    constructor(e, t) {
      ((this.clientX = e), (this.clientY = t), (this._clientCoordinatesBrand = void 0));
    }
    toPageCoordinates() {
      return new S(this.clientX + c.DI.scrollX, this.clientY + c.DI.scrollY);
    }
  }
  class L {
    constructor(e, t, i, n) {
      ((this.x = e), (this.y = t), (this.width = i), (this.height = n), (this._editorPagePositionBrand = void 0));
    }
  }
  function N(e) {
    const t = c.i(e);
    return new L(t.left, t.top, t.width, t.height);
  }
  class D extends y.n {
    constructor(e, t) {
      (super(e), (this._editorMouseEventBrand = void 0), (this.pos = new S(this.posx, this.posy)), (this.editorPos = N(t)));
    }
  }
  class I {
    constructor(e) {
      this._editorViewDomNode = e;
    }
    _create(e) {
      return new D(e, this._editorViewDomNode);
    }
    onContextMenu(e, t) {
      return c.nm(e, "contextmenu", e => {
        t(this._create(e));
      });
    }
    onMouseUp(e, t) {
      return c.nm(e, "mouseup", e => {
        t(this._create(e));
      });
    }
    onMouseDown(e, t) {
      return c.nm(e, "mousedown", e => {
        t(this._create(e));
      });
    }
    onMouseLeave(e, t) {
      return c.j_(e, e => {
        t(this._create(e));
      });
    }
    onMouseMoveThrottled(e, t, i, n) {
      return c.Y_(e, "mousemove", t, (e, t) => i(e, this._create(t)), n);
    }
  }
  class E {
    constructor(e) {
      this._editorViewDomNode = e;
    }
    _create(e) {
      return new D(e, this._editorViewDomNode);
    }
    onPointerUp(e, t) {
      return c.nm(e, "pointerup", e => {
        t(this._create(e));
      });
    }
    onPointerDown(e, t) {
      return c.nm(e, "pointerdown", e => {
        t(this._create(e));
      });
    }
    onPointerLeave(e, t) {
      return c.RE(e, e => {
        t(this._create(e));
      });
    }
    onPointerMoveThrottled(e, t, i, n) {
      return c.Y_(e, "pointermove", t, (e, t) => i(e, this._create(t)), n);
    }
  }
  class T extends u.JT {
    constructor(e) {
      (super(), (this._editorViewDomNode = e), (this._globalMouseMoveMonitor = this._register(new x.Z())), (this._keydownListener = null));
    }
    startMonitoring(e, t, i, n, o) {
      this._keydownListener = c.mu(document, "keydown", e => {
        e.toKeybinding().isModifierKey() || this._globalMouseMoveMonitor.stopMonitoring(!0, e.browserEvent);
      }, !0);
      this._globalMouseMoveMonitor.startMonitoring(e, t, (e, t) => i(e, new D(t, this._editorViewDomNode)), n, e => {
        (this._keydownListener.dispose(), o(e));
      });
    }
    stopMonitoring() {
      this._globalMouseMoveMonitor.stopMonitoring(!0);
    }
  }
  class M extends u.JT {
    constructor() {
      (super(), (this._shouldRender = !0));
    }
    shouldRender() {
      return this._shouldRender;
    }
    forceShouldRender() {
      this._shouldRender = !0;
    }
    setShouldRender() {
      this._shouldRender = !0;
    }
    onDidRender() {
      this._shouldRender = !1;
    }
    onCompositionStart(e) {
      return !1;
    }
    onCompositionEnd(e) {
      return !1;
    }
    onConfigurationChanged(e) {
      return !1;
    }
    onCursorStateChanged(e) {
      return !1;
    }
    onDecorationsChanged(e) {
      return !1;
    }
    onFlushed(e) {
      return !1;
    }
    onFocusChanged(e) {
      return !1;
    }
    onLanguageConfigurationChanged(e) {
      return !1;
    }
    onLineMappingChanged(e) {
      return !1;
    }
    onLinesChanged(e) {
      return !1;
    }
    onLinesDeleted(e) {
      return !1;
    }
    onLinesInserted(e) {
      return !1;
    }
    onRevealRangeRequest(e) {
      return !1;
    }
    onScrollChanged(e) {
      return !1;
    }
    onThemeChanged(e) {
      return !1;
    }
    onTokensChanged(e) {
      return !1;
    }
    onTokensColorsChanged(e) {
      return !1;
    }
    onZonesChanged(e) {
      return !1;
    }
    handleEvents(e) {
      let t = !1;
      for (let i = 0, n = e.length; i < n; i++) {
        let n = e[i];
        switch (n.type) {
          case 0:
            this.onCompositionStart(n) && (t = !0);
            break;
          case 1:
            this.onCompositionEnd(n) && (t = !0);
            break;
          case 2:
            this.onConfigurationChanged(n) && (t = !0);
            break;
          case 3:
            this.onCursorStateChanged(n) && (t = !0);
            break;
          case 4:
            this.onDecorationsChanged(n) && (t = !0);
            break;
          case 5:
            this.onFlushed(n) && (t = !0);
            break;
          case 6:
            this.onFocusChanged(n) && (t = !0);
            break;
          case 7:
            this.onLanguageConfigurationChanged(n) && (t = !0);
            break;
          case 8:
            this.onLineMappingChanged(n) && (t = !0);
            break;
          case 9:
            this.onLinesChanged(n) && (t = !0);
            break;
          case 10:
            this.onLinesDeleted(n) && (t = !0);
            break;
          case 11:
            this.onLinesInserted(n) && (t = !0);
            break;
          case 12:
            this.onRevealRangeRequest(n) && (t = !0);
            break;
          case 13:
            this.onScrollChanged(n) && (t = !0);
            break;
          case 15:
            this.onTokensChanged(n) && (t = !0);
            break;
          case 14:
            this.onThemeChanged(n) && (t = !0);
            break;
          case 16:
            this.onTokensColorsChanged(n) && (t = !0);
            break;
          case 17:
            this.onZonesChanged(n) && (t = !0);
            break;
          default:
            (console.info("View received unknown event: "), console.info(n));
        }
      }
      t && (this._shouldRender = !0);
    }
  }
  class A extends M {
    constructor(e) {
      (super(), (this._context = e), this._context.addEventHandler(this));
    }
    dispose() {
      (this._context.removeEventHandler(this), super.dispose());
    }
  }
  class O {
    static write(e, t) {
      (_.Z, e.setAttribute("data-mprt", String(t)));
    }
    static read(e) {
      const t = e.getAttribute("data-mprt");
      return null === t ? 0 : parseInt(t, 10);
    }
    static collect(e, t) {
      let i = [],
        n = 0;
      for (; e && e !== document.body && e !== t;) (e.nodeType === e.ELEMENT_NODE && (i[n++] = this.read(e)), (e = e.parentElement));
      const o = new Uint8Array(n);
      for (let e = 0; e < n; e++) o[e] = i[n - e - 1];
      return o;
    }
  }
  class P {
    constructor(e, t) {
      ((this._restrictedRenderingContextBrand = void 0), (this._viewLayout = e), (this.viewportData = t), (this.scrollWidth = this._viewLayout.getScrollWidth()), (this.scrollHeight = this._viewLayout.getScrollHeight()), (this.visibleRange = this.viewportData.visibleRange), (this.bigNumbersDelta = this.viewportData.bigNumbersDelta));
      const i = this._viewLayout.getCurrentViewport();
      ((this.scrollTop = i.top), (this.scrollLeft = i.left), (this.viewportWidth = i.width), (this.viewportHeight = i.height));
    }
    getScrolledTopFromAbsoluteTop(e) {
      return e - this.scrollTop;
    }
    getVerticalOffsetForLineNumber(e) {
      return this._viewLayout.getVerticalOffsetForLineNumber(e);
    }
    getDecorationsInViewport() {
      return this.viewportData.getDecorationsInViewport();
    }
  }
  class R extends P {
    constructor(e, t, i) {
      (super(e, t), (this._renderingContextBrand = void 0), (this._viewLines = i));
    }
    linesVisibleRangesForRange(e, t) {
      return this._viewLines.linesVisibleRangesForRange(e, t);
    }
    visibleRangeForPosition(e) {
      return this._viewLines.visibleRangeForPosition(e);
    }
  }
  class F {
    constructor(e, t, i) {
      ((this.outsideRenderedLine = e), (this.lineNumber = t), (this.ranges = i));
    }
  }
  class B {
    constructor(e, t) {
      ((this._horizontalRangeBrand = void 0), (this.left = Math.round(e)), (this.width = Math.round(t)));
    }
    static from(e) {
      const t = new Array(e.length);
      for (let i = 0, n = e.length; i < n; i++) {
        const n = e[i];
        t[i] = new B(n.left, n.width);
      }
      return t;
    }
    toString() {
      return `[${this.left},${this.width}]`;
    }
  }
  class V {
    constructor(e, t) {
      ((this._floatHorizontalRangeBrand = void 0), (this.left = e), (this.width = t));
    }
    toString() {
      return `[${this.left},${this.width}]`;
    }
    static compare(e, t) {
      return e.left - t.left;
    }
  }
  class W {
    constructor(e, t) {
      ((this.outsideRenderedLine = e), (this.originalLeft = t), (this.left = Math.round(this.originalLeft)));
    }
  }
  class H {
    constructor(e, t) {
      ((this.outsideRenderedLine = e), (this.ranges = t));
    }
  }
  class z {
    static _createRange() {
      return (this._handyReadyRange || (this._handyReadyRange = document.createRange()), this._handyReadyRange);
    }
    static _detachRange(e, t) {
      e.selectNodeContents(t);
    }
    static _readClientRects(e, t, i, n, o) {
      const s = this._createRange();
      try {
        return (s.setStart(e, t), s.setEnd(i, n), s.getClientRects());
      } catch (e) {
        return null;
      } finally {
        this._detachRange(s, o);
      }
    }
    static _mergeAdjacentRanges(e) {
      if (1 === e.length) return e;
      e.sort(V.compare);
      let t = [],
        i = 0,
        n = e[0];
      for (let o = 1, s = e.length; o < s; o++) {
        const s = e[o];
        n.left + n.width + 0.9 >= s.left ? (n.width = Math.max(n.width, s.left + s.width - n.left)) : ((t[i++] = n), (n = s));
      }
      return ((t[i++] = n), t);
    }
    static _createHorizontalRangesFromClientRects(e, t) {
      if (!e || 0 === e.length) return null;
      const i = [];
      for (let n = 0, o = e.length; n < o; n++) {
        const o = e[n];
        i[n] = new V(Math.max(0, o.left - t), o.width);
      }
      return this._mergeAdjacentRanges(i);
    }
    static readHorizontalRanges(e, t, i, n, o, s, r) {
      const a = e.children.length - 1;
      if (0 > a) return null;
      if ((t = Math.min(a, Math.max(0, t))) === (n = Math.min(a, Math.max(0, n))) && i === o && 0 === i && !e.children[t].firstChild) {
        const i = e.children[t].getClientRects();
        return this._createHorizontalRangesFromClientRects(i, s);
      }
      t !== n && n > 0 && 0 === o && (n--, (o = 1073741824));
      let l = e.children[t].firstChild,
        c = e.children[n].firstChild;
      if (((l && c) || (!l && 0 === i && t > 0 && ((l = e.children[t - 1].firstChild), (i = 1073741824)), !c && 0 === o && n > 0 && ((c = e.children[n - 1].firstChild), (o = 1073741824))), !l || !c)) return null;
      ((i = Math.min(l.textContent.length, Math.max(0, i))), (o = Math.min(c.textContent.length, Math.max(0, o))));
      const d = this._readClientRects(l, i, c, o, r);
      return this._createHorizontalRangesFromClientRects(d, s);
    }
  }
  var j = i(92550),
    U = i(77736),
    $ = i(92321),
    K = i(64141);
  const q = !!b.tY || !(b.IJ || m.vU || m.G6);
  let Z = !0;
  class G {
    constructor(e, t) {
      ((this._domNode = e), (this._clientRectDeltaLeft = 0), (this._clientRectDeltaLeftRead = !1), (this.endNode = t));
    }
    get clientRectDeltaLeft() {
      return (this._clientRectDeltaLeftRead || ((this._clientRectDeltaLeftRead = !0), (this._clientRectDeltaLeft = this._domNode.getBoundingClientRect().left)), this._clientRectDeltaLeft);
    }
  }
  class Y {
    constructor(e, t) {
      this.themeType = t;
      const i = e.options,
        n = i.get(43);
      ((this.renderWhitespace = i.get(87)), (this.renderControlCharacters = i.get(82)), (this.spaceWidth = n.spaceWidth), (this.middotWidth = n.middotWidth), (this.wsmiddotWidth = n.wsmiddotWidth), (this.useMonospaceOptimizations = n.isMonospace && !i.get(29)), (this.canUseHalfwidthRightwardsArrow = n.canUseHalfwidthRightwardsArrow), (this.lineHeight = i.get(58)), (this.stopRenderingLineAfter = i.get(104)), (this.fontLigatures = i.get(44)));
    }
    equals(e) {
      return (this.themeType === e.themeType && this.renderWhitespace === e.renderWhitespace && this.renderControlCharacters === e.renderControlCharacters && this.spaceWidth === e.spaceWidth && this.middotWidth === e.middotWidth && this.wsmiddotWidth === e.wsmiddotWidth && this.useMonospaceOptimizations === e.useMonospaceOptimizations && this.canUseHalfwidthRightwardsArrow === e.canUseHalfwidthRightwardsArrow && this.lineHeight === e.lineHeight && this.stopRenderingLineAfter === e.stopRenderingLineAfter && this.fontLigatures === e.fontLigatures);
    }
  }
  class Q {
    constructor(e) {
      ((this._options = e), (this._isMaybeInvalid = !0), (this._renderedViewLine = null));
    }
    getDomNode() {
      return this._renderedViewLine && this._renderedViewLine.domNode ? this._renderedViewLine.domNode.domNode : null;
    }
    setDomNode(e) {
      if (!this._renderedViewLine) throw new Error("I have no rendered view line to set the dom node to...");
      this._renderedViewLine.domNode = (0, _.X)(e);
    }
    onContentChanged() {
      this._isMaybeInvalid = !0;
    }
    onTokensChanged() {
      this._isMaybeInvalid = !0;
    }
    onDecorationsChanged() {
      this._isMaybeInvalid = !0;
    }
    onOptionsChanged(e) {
      ((this._isMaybeInvalid = !0), (this._options = e));
    }
    onSelectionChanged() {
      return ((this._options.themeType === $.e.HIGH_CONTRAST || "selection" === this._options.renderWhitespace) && ((this._isMaybeInvalid = !0), !0));
    }
    renderLine(e, t, i, n) {
      if (!1 === this._isMaybeInvalid) return !1;
      this._isMaybeInvalid = !1;
      const o = i.getViewLineRenderingData(e),
        s = this._options,
        r = j.Kp.filter(o.inlineDecorations, e, o.minColumn, o.maxColumn);
      let a = null;
      if (s.themeType === $.e.HIGH_CONTRAST || "selection" === this._options.renderWhitespace) {
        const t = i.selections;
        for (const i of t) {
          if (i.endLineNumber < e || i.startLineNumber > e) continue;
          const t = i.startLineNumber === e ? i.startColumn : o.minColumn,
            n = i.endLineNumber === e ? i.endColumn : o.maxColumn;
          t < n && (s.themeType === $.e.HIGH_CONTRAST || "selection" !== this._options.renderWhitespace ? r.push(new j.Kp(t, n, "inline-selected-text", 0)) : (a || (a = []), a.push(new U.zG(t - 1, n - 1))));
        }
      }
      const l = new U.IJ(s.useMonospaceOptimizations, s.canUseHalfwidthRightwardsArrow, o.content, o.continuesWithWrappedLine, o.isBasicASCII, o.containsRTL, o.minColumn - 1, o.tokens, r, o.tabSize, o.startVisibleColumn, s.spaceWidth, s.middotWidth, s.wsmiddotWidth, s.stopRenderingLineAfter, s.renderWhitespace, s.renderControlCharacters, s.fontLigatures !== K.n0.OFF, a);
      if (this._renderedViewLine && this._renderedViewLine.input.equals(l)) return !1;
      (n.appendASCIIString('<div style="top:'), n.appendASCIIString(String(t)), n.appendASCIIString("px;height:"), n.appendASCIIString(String(this._options.lineHeight)), n.appendASCIIString('px;" class="'), n.appendASCIIString(Q.CLASS_NAME), n.appendASCIIString('">'));
      const c = (0, U.d1)(l, n);
      n.appendASCIIString("</div>");
      let d = null;
      return (Z && q && o.isBasicASCII && s.useMonospaceOptimizations && 0 === c.containsForeignElements && o.content.length < 300 && l.lineTokens.getCount() < 100 && (d = new X(this._renderedViewLine ? this._renderedViewLine.domNode : null, l, c.characterMapping)), d || (d = te(this._renderedViewLine ? this._renderedViewLine.domNode : null, l, c.characterMapping, c.containsRTL, c.containsForeignElements)), (this._renderedViewLine = d), !0);
    }
    layoutLine(e, t) {
      this._renderedViewLine && this._renderedViewLine.domNode && (this._renderedViewLine.domNode.setTop(t), this._renderedViewLine.domNode.setHeight(this._options.lineHeight));
    }
    getWidth() {
      return this._renderedViewLine ? this._renderedViewLine.getWidth() : 0;
    }
    getWidthIsFast() {
      return (!this._renderedViewLine || this._renderedViewLine.getWidthIsFast());
    }
    needsMonospaceFontCheck() {
      return !!this._renderedViewLine && this._renderedViewLine instanceof X;
    }
    monospaceAssumptionsAreValid() {
      return this._renderedViewLine && this._renderedViewLine instanceof X ? this._renderedViewLine.monospaceAssumptionsAreValid() : Z;
    }
    onMonospaceAssumptionsInvalidated() {
      this._renderedViewLine && this._renderedViewLine instanceof X && (this._renderedViewLine = this._renderedViewLine.toSlowRenderedLine());
    }
    getVisibleRangesForRange(e, t, i, n) {
      if (!this._renderedViewLine) return null;
      ((t |= 0), (i |= 0), (t = Math.min(this._renderedViewLine.input.lineContent.length + 1, Math.max(1, t))), (i = Math.min(this._renderedViewLine.input.lineContent.length + 1, Math.max(1, i))));
      const o = 0 | this._renderedViewLine.input.stopRenderingLineAfter;
      let s = !1;
      (-1 !== o && t > o + 1 && i > o + 1 && (s = !0), -1 !== o && t > o + 1 && (t = o + 1), -1 !== o && i > o + 1 && (i = o + 1));
      const r = this._renderedViewLine.getVisibleRangesForRange(e, t, i, n);
      return r && r.length > 0 ? new H(s, r) : null;
    }
    getColumnOfNodeOffset(e, t, i) {
      return this._renderedViewLine ? this._renderedViewLine.getColumnOfNodeOffset(e, t, i) : 1;
    }
  }
  Q.CLASS_NAME = "view-line";
  class X {
    constructor(e, t, i) {
      ((this.domNode = e), (this.input = t), (this._characterMapping = i), (this._charWidth = t.spaceWidth));
    }
    getWidth() {
      return Math.round(this._getCharPosition(this._characterMapping.length));
    }
    getWidthIsFast() {
      return !0;
    }
    monospaceAssumptionsAreValid() {
      if (!this.domNode) return Z;
      const e = this.getWidth(),
        t = this.domNode.domNode.firstChild.offsetWidth;
      return (Math.abs(e - t) >= 2 && (console.warn("monospace assumptions have been violated, therefore disabling monospace optimizations!"), (Z = !1)), Z);
    }
    toSlowRenderedLine() {
      return te(this.domNode, this.input, this._characterMapping, !1, 0);
    }
    getVisibleRangesForRange(e, t, i, n) {
      const o = this._getCharPosition(t),
        s = this._getCharPosition(i);
      return [new V(o, s - o)];
    }
    _getCharPosition(e) {
      const t = this._characterMapping.getAbsoluteOffset(e);
      return this._charWidth * t;
    }
    getColumnOfNodeOffset(e, t, i) {
      const n = t.textContent.length;
      let o = -1;
      for (; t;) ((t = t.previousSibling), o++);
      return this._characterMapping.getColumn(new U.Nd(o, i), n);
    }
  }
  class J {
    constructor(e, t, i, n, o) {
      if (((this.domNode = e), (this.input = t), (this._characterMapping = i), (this._isWhitespaceOnly = /^\s*$/.test(t.lineContent)), (this._containsForeignElements = o), (this._cachedWidth = -1), (this._pixelOffsetCache = null), !n || 0 === this._characterMapping.length)) {
        this._pixelOffsetCache = new Float32Array(Math.max(2, this._characterMapping.length + 1));
        for (let e = 0, t = this._characterMapping.length; e <= t; e++) this._pixelOffsetCache[e] = -1;
      }
    }
    _getReadingTarget(e) {
      return e.domNode.firstChild;
    }
    getWidth() {
      return this.domNode ? (-1 === this._cachedWidth && (this._cachedWidth = this._getReadingTarget(this.domNode).offsetWidth), this._cachedWidth) : 0;
    }
    getWidthIsFast() {
      return -1 !== this._cachedWidth;
    }
    getVisibleRangesForRange(e, t, i, n) {
      if (!this.domNode) return null;
      if (null !== this._pixelOffsetCache) {
        const o = this._readPixelOffset(this.domNode, e, t, n);
        if (-1 === o) return null;
        const s = this._readPixelOffset(this.domNode, e, i, n);
        return -1 === s ? null : [new V(o, s - o)];
      }
      return this._readVisibleRangesForRange(this.domNode, e, t, i, n);
    }
    _readVisibleRangesForRange(e, t, i, n, o) {
      if (i === n) {
        const n = this._readPixelOffset(e, t, i, o);
        return -1 === n ? null : [new V(n, 0)];
      }
      return this._readRawVisibleRangesForRange(e, i, n, o);
    }
    _readPixelOffset(e, t, i, n) {
      if (0 === this._characterMapping.length) {
        if (0 === this._containsForeignElements) return 0;
        if (2 === this._containsForeignElements) return 0;
        if (1 === this._containsForeignElements) return this.getWidth();
        const t = this._getReadingTarget(e);
        return t.firstChild ? t.firstChild.offsetWidth : 0;
      }
      if (null !== this._pixelOffsetCache) {
        const o = this._pixelOffsetCache[i];
        if (-1 !== o) return o;
        const s = this._actualReadPixelOffset(e, t, i, n);
        return ((this._pixelOffsetCache[i] = s), s);
      }
      return this._actualReadPixelOffset(e, t, i, n);
    }
    _actualReadPixelOffset(e, t, i, n) {
      if (0 === this._characterMapping.length) {
        const t = z.readHorizontalRanges(this._getReadingTarget(e), 0, 0, 0, 0, n.clientRectDeltaLeft, n.endNode);
        return t && 0 !== t.length ? t[0].left : -1;
      }
      if (i === this._characterMapping.length && this._isWhitespaceOnly && 0 === this._containsForeignElements) return this.getWidth();
      const o = this._characterMapping.getDomPosition(i),
        s = z.readHorizontalRanges(this._getReadingTarget(e), o.partIndex, o.charIndex, o.partIndex, o.charIndex, n.clientRectDeltaLeft, n.endNode);
      if (!s || 0 === s.length) return -1;
      const r = s[0].left;
      if (this.input.isBasicASCII) {
        const e = this._characterMapping.getAbsoluteOffset(i),
          t = Math.round(this.input.spaceWidth * e);
        if (Math.abs(t - r) <= 1) return t;
      }
      return r;
    }
    _readRawVisibleRangesForRange(e, t, i, n) {
      if (1 === t && i === this._characterMapping.length) return [new V(0, this.getWidth())];
      const o = this._characterMapping.getDomPosition(t),
        s = this._characterMapping.getDomPosition(i);
      return z.readHorizontalRanges(this._getReadingTarget(e), o.partIndex, o.charIndex, s.partIndex, s.charIndex, n.clientRectDeltaLeft, n.endNode);
    }
    getColumnOfNodeOffset(e, t, i) {
      const n = t.textContent.length;
      let o = -1;
      for (; t;) ((t = t.previousSibling), o++);
      return this._characterMapping.getColumn(new U.Nd(o, i), n);
    }
  }
  class ee extends J {
    _readVisibleRangesForRange(e, t, i, n, o) {
      const s = super._readVisibleRangesForRange(e, t, i, n, o);
      if (!s || 0 === s.length || i === n || (1 === i && n === this._characterMapping.length)) return s;
      if (!this.input.containsRTL) {
        const i = this._readPixelOffset(e, t, n, o);
        if (-1 !== i) {
          const e = s[s.length - 1];
          e.left < i && (e.width = i - e.left);
        }
      }
      return s;
    }
  }
  const te = m.Pf ? ie : ne;
  function ie(e, t, i, n, o) {
    return new ee(e, t, i, n, o);
  }
  function ne(e, t, i, n, o) {
    return new J(e, t, i, n, o);
  }
  var oe,
    se = i(50187),
    re = i(24314),
    ae = i(33181),
    le = i(3675);
  class ce {
    constructor(e = null) {
      ((this.hitTarget = e), (this.type = 0));
    }
  }
  class de {
    constructor(e, t, i) {
      ((this.position = e), (this.spanNode = t), (this.injectedText = i), (this.type = 1));
    }
  }
  !(function (e) {
    e.createFromDOMInfo = function (e, t, i) {
      const n = e.getPositionFromDOMInfo(t, i);
      return n ? new de(n, t, null) : new ce(t);
    };
  })(oe || (oe = {}));
  class he {
    constructor(e, t) {
      ((this.lastViewCursorsRenderData = e), (this.lastTextareaPosition = t));
    }
  }
  class ue {
    constructor(e, t, i = 0, n = null, o = null, s = null) {
      ((this.element = e), (this.type = t), (this.mouseColumn = i), (this.position = n), !o && n && (o = new re.e(n.lineNumber, n.column, n.lineNumber, n.column)), (this.range = o), (this.detail = s));
    }
    static _typeToString(e) {
      return 1 === e ? "TEXTAREA" : 2 === e ? "GUTTER_GLYPH_MARGIN" : 3 === e ? "GUTTER_LINE_NUMBERS" : 4 === e ? "GUTTER_LINE_DECORATIONS" : 5 === e ? "GUTTER_VIEW_ZONE" : 6 === e ? "CONTENT_TEXT" : 7 === e ? "CONTENT_EMPTY" : 8 === e ? "CONTENT_VIEW_ZONE" : 9 === e ? "CONTENT_WIDGET" : 10 === e ? "OVERVIEW_RULER" : 11 === e ? "SCROLLBAR" : 12 === e ? "OVERLAY_WIDGET" : "UNKNOWN";
    }
    static toString(e) {
      return (this._typeToString(e.type) + ": " + e.position + " - " + e.range + " - " + e.detail);
    }
    toString() {
      return ue.toString(this);
    }
  }
  class ge {
    static isTextArea(e) {
      return 2 === e.length && 3 === e[0] && 6 === e[1];
    }
    static isChildOfViewLines(e) {
      return e.length >= 4 && 3 === e[0] && 7 === e[3];
    }
    static isStrictChildOfViewLines(e) {
      return e.length > 4 && 3 === e[0] && 7 === e[3];
    }
    static isChildOfScrollableElement(e) {
      return e.length >= 2 && 3 === e[0] && 5 === e[1];
    }
    static isChildOfMinimap(e) {
      return e.length >= 2 && 3 === e[0] && 8 === e[1];
    }
    static isChildOfContentWidgets(e) {
      return e.length >= 4 && 3 === e[0] && 1 === e[3];
    }
    static isChildOfOverflowingContentWidgets(e) {
      return e.length >= 1 && 2 === e[0];
    }
    static isChildOfOverlayWidgets(e) {
      return e.length >= 2 && 3 === e[0] && 4 === e[1];
    }
  }
  class pe {
    constructor(e, t, i) {
      this.model = e.model;
      const n = e.configuration.options;
      ((this.layoutInfo = n.get(129)), (this.viewDomNode = t.viewDomNode), (this.lineHeight = n.get(58)), (this.stickyTabStops = n.get(103)), (this.typicalHalfwidthCharacterWidth = n.get(43).typicalHalfwidthCharacterWidth), (this.lastRenderData = i), (this._context = e), (this._viewHelper = t));
    }
    getZoneAtCoord(e) {
      return pe.getZoneAtCoord(this._context, e);
    }
    static getZoneAtCoord(e, t) {
      const i = e.viewLayout.getWhitespaceAtVerticalOffset(t);
      if (i) {
        const n = i.verticalOffset + i.height / 2,
          o = e.model.getLineCount();
        let s,
          r = null,
          a = null;
        return (i.afterLineNumber !== o && (a = new se.L(i.afterLineNumber + 1, 1)), i.afterLineNumber > 0 && (r = new se.L(i.afterLineNumber, e.model.getLineMaxColumn(i.afterLineNumber))), (s = null === a ? r : null === r ? a : t < n ? r : a), {
          viewZoneId: i.id,
          afterLineNumber: i.afterLineNumber,
          positionBefore: r,
          positionAfter: a,
          position: s
        });
      }
      return null;
    }
    getFullLineRangeAtCoord(e) {
      if (this._context.viewLayout.isAfterLines(e)) {
        const e = this._context.model.getLineCount(),
          t = this._context.model.getLineMaxColumn(e);
        return {
          range: new re.e(e, t, e, t),
          isAfterLines: !0
        };
      }
      const t = this._context.viewLayout.getLineNumberAtVerticalOffset(e),
        i = this._context.model.getLineMaxColumn(t);
      return {
        range: new re.e(t, 1, t, i),
        isAfterLines: !1
      };
    }
    getLineNumberAtVerticalOffset(e) {
      return this._context.viewLayout.getLineNumberAtVerticalOffset(e);
    }
    isAfterLines(e) {
      return this._context.viewLayout.isAfterLines(e);
    }
    isInTopPadding(e) {
      return this._context.viewLayout.isInTopPadding(e);
    }
    isInBottomPadding(e) {
      return this._context.viewLayout.isInBottomPadding(e);
    }
    getVerticalOffsetForLineNumber(e) {
      return this._context.viewLayout.getVerticalOffsetForLineNumber(e);
    }
    findAttribute(e, t) {
      return pe._findAttribute(e, t, this._viewHelper.viewDomNode);
    }
    static _findAttribute(e, t, i) {
      for (; e && e !== document.body;) {
        if (e.hasAttribute && e.hasAttribute(t)) return e.getAttribute(t);
        if (e === i) return null;
        e = e.parentNode;
      }
      return null;
    }
    getLineWidth(e) {
      return this._viewHelper.getLineWidth(e);
    }
    visibleRangeForPosition(e, t) {
      return this._viewHelper.visibleRangeForPosition(e, t);
    }
    getPositionFromDOMInfo(e, t) {
      return this._viewHelper.getPositionFromDOMInfo(e, t);
    }
    getCurrentScrollTop() {
      return this._context.viewLayout.getCurrentScrollTop();
    }
    getCurrentScrollLeft() {
      return this._context.viewLayout.getCurrentScrollLeft();
    }
  }
  class fe {
    constructor(e, t, i) {
      ((this.editorPos = t), (this.pos = i), (this.mouseVerticalOffset = Math.max(0, e.getCurrentScrollTop() + i.y - t.y)), (this.mouseContentHorizontalOffset = e.getCurrentScrollLeft() + i.x - t.x - e.layoutInfo.contentLeft), (this.isInMarginArea = i.x - t.x < e.layoutInfo.contentLeft && i.x - t.x >= e.layoutInfo.glyphMarginLeft), (this.isInContentArea = !this.isInMarginArea), (this.mouseColumn = Math.max(0, be._getMouseColumn(this.mouseContentHorizontalOffset, e.typicalHalfwidthCharacterWidth))));
    }
  }
  class me extends fe {
    constructor(e, t, i, n) {
      (super(e, t, i), (this._ctx = e), n ? ((this.target = n), (this.targetPath = O.collect(n, e.viewDomNode))) : ((this.target = null), (this.targetPath = new Uint8Array(0))));
    }
    toString() {
      return `pos(${this.pos.x},${this.pos.y}), editorPos(${this.editorPos.x},${this.editorPos.y}), mouseVerticalOffset: ${this.mouseVerticalOffset}, mouseContentHorizontalOffset: ${this.mouseContentHorizontalOffset}\n\ttarget: ${this.target ? this.target.outerHTML : null}`;
    }
    fulfill(e, t = null, i = null, n = null) {
      let o = this.mouseColumn;
      return (t && t.column < this._ctx.model.getLineMaxColumn(t.lineNumber) && (o = ae.io.visibleColumnFromColumn(this._ctx.model.getLineContent(t.lineNumber), t.column, this._ctx.model.getTextModelOptions().tabSize) + 1), new ue(this.target, e, o, t, i, n));
    }
    withTarget(e) {
      return new me(this._ctx, this.editorPos, this.pos, e);
    }
  }
  const ve = {
    isAfterLines: !0
  };
  function _e(e) {
    return {
      isAfterLines: !1,
      horizontalDistanceToText: e
    };
  }
  class be {
    constructor(e, t) {
      ((this._context = e), (this._viewHelper = t));
    }
    mouseTargetIsWidget(e) {
      const t = e.target,
        i = O.collect(t, this._viewHelper.viewDomNode);
      return (!(!ge.isChildOfContentWidgets(i) && !ge.isChildOfOverflowingContentWidgets(i)) || !!ge.isChildOfOverlayWidgets(i));
    }
    createMouseTarget(e, t, i, n) {
      const o = new pe(this._context, this._viewHelper, e),
        s = new me(o, t, i, n);
      try {
        return be._createMouseTarget(o, s, !1);
      } catch (e) {
        return s.fulfill(0);
      }
    }
    static _createMouseTarget(e, t, i) {
      if (null === t.target) {
        if (i) return t.fulfill(0);
        const n = be._doHitTest(e, t);
        return 1 === n.type ? be.createMouseTargetFromHitTestPosition(e, t, n.spanNode, n.position, n.injectedText) : this._createMouseTarget(e, t.withTarget(n.hitTarget), !0);
      }
      const n = t;
      let o = null;
      return ((o = o || be._hitTestContentWidget(e, n)), (o = o || be._hitTestOverlayWidget(e, n)), (o = o || be._hitTestMinimap(e, n)), (o = o || be._hitTestScrollbarSlider(e, n)), (o = o || be._hitTestViewZone(e, n)), (o = o || be._hitTestMargin(e, n)), (o = o || be._hitTestViewCursor(e, n)), (o = o || be._hitTestTextArea(e, n)), (o = o || be._hitTestViewLines(e, n, i)), (o = o || be._hitTestScrollbar(e, n)), o || t.fulfill(0));
    }
    static _hitTestContentWidget(e, t) {
      if (ge.isChildOfContentWidgets(t.targetPath) || ge.isChildOfOverflowingContentWidgets(t.targetPath)) {
        const i = e.findAttribute(t.target, "widgetId");
        return i ? t.fulfill(9, null, null, i) : t.fulfill(0);
      }
      return null;
    }
    static _hitTestOverlayWidget(e, t) {
      if (ge.isChildOfOverlayWidgets(t.targetPath)) {
        const i = e.findAttribute(t.target, "widgetId");
        return i ? t.fulfill(12, null, null, i) : t.fulfill(0);
      }
      return null;
    }
    static _hitTestViewCursor(e, t) {
      if (t.target) {
        const i = e.lastRenderData.lastViewCursorsRenderData;
        for (const e of i) if (t.target === e.domNode) return t.fulfill(6, e.position, null, {
          mightBeForeignElement: !1
        });
      }
      if (t.isInContentArea) {
        const i = e.lastRenderData.lastViewCursorsRenderData,
          n = t.mouseContentHorizontalOffset,
          o = t.mouseVerticalOffset;
        for (const s of i) {
          if (n < s.contentLeft) continue;
          if (n > s.contentLeft + s.width) continue;
          const i = e.getVerticalOffsetForLineNumber(s.position.lineNumber);
          if (i <= o && o <= i + s.height) return t.fulfill(6, s.position, null, {
            mightBeForeignElement: !1
          });
        }
      }
      return null;
    }
    static _hitTestViewZone(e, t) {
      const i = e.getZoneAtCoord(t.mouseVerticalOffset);
      if (i) {
        const e = t.isInContentArea ? 8 : 5;
        return t.fulfill(e, i.position, null, i);
      }
      return null;
    }
    static _hitTestTextArea(e, t) {
      return ge.isTextArea(t.targetPath) ? e.lastRenderData.lastTextareaPosition ? t.fulfill(6, e.lastRenderData.lastTextareaPosition, null, {
        mightBeForeignElement: !1
      }) : t.fulfill(1, e.lastRenderData.lastTextareaPosition) : null;
    }
    static _hitTestMargin(e, t) {
      if (t.isInMarginArea) {
        const i = e.getFullLineRangeAtCoord(t.mouseVerticalOffset),
          n = i.range.getStartPosition();
        let o = Math.abs(t.pos.x - t.editorPos.x);
        const s = {
          isAfterLines: i.isAfterLines,
          glyphMarginLeft: e.layoutInfo.glyphMarginLeft,
          glyphMarginWidth: e.layoutInfo.glyphMarginWidth,
          lineNumbersWidth: e.layoutInfo.lineNumbersWidth,
          offsetX: o
        };
        return ((o -= e.layoutInfo.glyphMarginLeft), o <= e.layoutInfo.glyphMarginWidth ? t.fulfill(2, n, i.range, s) : ((o -= e.layoutInfo.glyphMarginWidth), o <= e.layoutInfo.lineNumbersWidth ? t.fulfill(3, n, i.range, s) : ((o -= e.layoutInfo.lineNumbersWidth), t.fulfill(4, n, i.range, s))));
      }
      return null;
    }
    static _hitTestViewLines(e, t, i) {
      if (!ge.isChildOfViewLines(t.targetPath)) return null;
      if (e.isInTopPadding(t.mouseVerticalOffset)) return t.fulfill(7, new se.L(1, 1), null, ve);
      if (e.isAfterLines(t.mouseVerticalOffset) || e.isInBottomPadding(t.mouseVerticalOffset)) {
        const i = e.model.getLineCount(),
          n = e.model.getLineMaxColumn(i);
        return t.fulfill(7, new se.L(i, n), null, ve);
      }
      if (i) {
        if (ge.isStrictChildOfViewLines(t.targetPath)) {
          const i = e.getLineNumberAtVerticalOffset(t.mouseVerticalOffset);
          if (0 === e.model.getLineLength(i)) {
            const n = e.getLineWidth(i),
              o = _e(t.mouseContentHorizontalOffset - n);
            return t.fulfill(7, new se.L(i, 1), null, o);
          }
          const n = e.getLineWidth(i);
          if (t.mouseContentHorizontalOffset >= n) {
            const o = _e(t.mouseContentHorizontalOffset - n),
              s = new se.L(i, e.model.getLineMaxColumn(i));
            return t.fulfill(7, s, null, o);
          }
        }
        return t.fulfill(0);
      }
      const n = be._doHitTest(e, t);
      return 1 === n.type ? be.createMouseTargetFromHitTestPosition(e, t, n.spanNode, n.position, n.injectedText) : this._createMouseTarget(e, t.withTarget(n.hitTarget), !0);
    }
    static _hitTestMinimap(e, t) {
      if (ge.isChildOfMinimap(t.targetPath)) {
        const i = e.getLineNumberAtVerticalOffset(t.mouseVerticalOffset),
          n = e.model.getLineMaxColumn(i);
        return t.fulfill(11, new se.L(i, n));
      }
      return null;
    }
    static _hitTestScrollbarSlider(e, t) {
      if (ge.isChildOfScrollableElement(t.targetPath) && t.target && 1 === t.target.nodeType) {
        const i = t.target.className;
        if (i && /\b(slider|scrollbar)\b/.test(i)) {
          const i = e.getLineNumberAtVerticalOffset(t.mouseVerticalOffset),
            n = e.model.getLineMaxColumn(i);
          return t.fulfill(11, new se.L(i, n));
        }
      }
      return null;
    }
    static _hitTestScrollbar(e, t) {
      if (ge.isChildOfScrollableElement(t.targetPath)) {
        const i = e.getLineNumberAtVerticalOffset(t.mouseVerticalOffset),
          n = e.model.getLineMaxColumn(i);
        return t.fulfill(11, new se.L(i, n));
      }
      return null;
    }
    getMouseColumn(e, t) {
      const i = this._context.configuration.options,
        n = i.get(129),
        o = this._context.viewLayout.getCurrentScrollLeft() + t.x - e.x - n.contentLeft;
      return be._getMouseColumn(o, i.get(43).typicalHalfwidthCharacterWidth);
    }
    static _getMouseColumn(e, t) {
      if (e < 0) return 1;
      return Math.round(e / t) + 1;
    }
    static createMouseTargetFromHitTestPosition(e, t, i, n, o) {
      const s = n.lineNumber,
        r = n.column,
        a = e.getLineWidth(s);
      if (t.mouseContentHorizontalOffset > a) {
        const e = _e(t.mouseContentHorizontalOffset - a);
        return t.fulfill(7, n, null, e);
      }
      const l = e.visibleRangeForPosition(s, r);
      if (!l) return t.fulfill(0, n);
      const c = l.left;
      if (t.mouseContentHorizontalOffset === c) return t.fulfill(6, n, null, {
        mightBeForeignElement: !!o
      });
      const d = [];
      if ((d.push({
        offset: l.left,
        column: r
      }), r > 1)) {
        const t = e.visibleRangeForPosition(s, r - 1);
        t && d.push({
          offset: t.left,
          column: r - 1
        });
      }
      if (r < e.model.getLineMaxColumn(s)) {
        const t = e.visibleRangeForPosition(s, r + 1);
        t && d.push({
          offset: t.left,
          column: r + 1
        });
      }
      d.sort((e, t) => e.offset - t.offset);
      const h = t.pos.toClientCoordinates(),
        u = i.getBoundingClientRect(),
        g = u.left <= h.clientX && h.clientX <= u.right;
      for (let e = 1; e < d.length; e++) {
        const i = d[e - 1],
          r = d[e];
        if (i.offset <= t.mouseContentHorizontalOffset && t.mouseContentHorizontalOffset <= r.offset) {
          const e = new re.e(s, i.column, s, r.column);
          return t.fulfill(6, n, e, {
            mightBeForeignElement: !g || !!o
          });
        }
      }
      return t.fulfill(6, n, null, {
        mightBeForeignElement: !g || !!o
      });
    }
    static _doHitTestWithCaretRangeFromPoint(e, t) {
      const i = e.getLineNumberAtVerticalOffset(t.mouseVerticalOffset),
        n = e.getVerticalOffsetForLineNumber(i) + Math.floor(e.lineHeight / 2);
      let o = t.pos.y + (n - t.mouseVerticalOffset);
      (o <= t.editorPos.y && (o = t.editorPos.y + 1), o >= t.editorPos.y + e.layoutInfo.height && (o = t.editorPos.y + e.layoutInfo.height - 1));
      const s = new S(t.pos.x, o),
        r = this._actualDoHitTestWithCaretRangeFromPoint(e, s.toClientCoordinates());
      return 1 === r.type ? r : this._actualDoHitTestWithCaretRangeFromPoint(e, t.pos.toClientCoordinates());
    }
    static _actualDoHitTestWithCaretRangeFromPoint(e, t) {
      const i = c.Ay(e.viewDomNode);
      let n;
      if (((n = i ? void 0 === i.caretRangeFromPoint ? (function (e, t, i) {
        const n = document.createRange();
        let o = e.elementFromPoint(t, i);
        if (null !== o) {
          for (; o && o.firstChild && o.firstChild.nodeType !== o.firstChild.TEXT_NODE && o.lastChild && o.lastChild.firstChild;) o = o.lastChild;
          const e = o.getBoundingClientRect(),
            i = window.getComputedStyle(o, null).getPropertyValue("font"),
            s = o.innerText;
          let r,
            a = e.left,
            l = 0;
          if (t > e.left + e.width) l = s.length;else {
            const e = we.getInstance();
            for (let n = 0; n < s.length + 1; n++) {
              if (((r = e.getCharWidth(s.charAt(n), i) / 2), (a += r), t < a)) {
                l = n;
                break;
              }
              a += r;
            }
          }
          (n.setStart(o.firstChild, l), n.setEnd(o.firstChild, l));
        }
        return n;
      })(i, t.clientX, t.clientY) : i.caretRangeFromPoint(t.clientX, t.clientY) : document.caretRangeFromPoint(t.clientX, t.clientY)), !n || !n.startContainer)) return new ce();
      const o = n.startContainer;
      if (o.nodeType === o.TEXT_NODE) {
        const t = o.parentNode,
          i = t ? t.parentNode : null,
          s = i ? i.parentNode : null;
        return (s && s.nodeType === s.ELEMENT_NODE ? s.className : null) === Q.CLASS_NAME ? oe.createFromDOMInfo(e, t, n.startOffset) : new ce(o.parentNode);
      }
      if (o.nodeType === o.ELEMENT_NODE) {
        const t = o.parentNode,
          i = t ? t.parentNode : null;
        return (i && i.nodeType === i.ELEMENT_NODE ? i.className : null) === Q.CLASS_NAME ? oe.createFromDOMInfo(e, o, o.textContent.length) : new ce(o);
      }
      return new ce();
    }
    static _doHitTestWithCaretPositionFromPoint(e, t) {
      const i = document.caretPositionFromPoint(t.clientX, t.clientY);
      if (i.offsetNode.nodeType === i.offsetNode.TEXT_NODE) {
        const t = i.offsetNode.parentNode,
          n = t ? t.parentNode : null,
          o = n ? n.parentNode : null;
        return (o && o.nodeType === o.ELEMENT_NODE ? o.className : null) === Q.CLASS_NAME ? oe.createFromDOMInfo(e, i.offsetNode.parentNode, i.offset) : new ce(i.offsetNode.parentNode);
      }
      if (i.offsetNode.nodeType === i.offsetNode.ELEMENT_NODE) {
        const t = i.offsetNode.parentNode,
          n = t && t.nodeType === t.ELEMENT_NODE ? t.className : null,
          o = t ? t.parentNode : null,
          s = o && o.nodeType === o.ELEMENT_NODE ? o.className : null;
        if (n === Q.CLASS_NAME) {
          const t = i.offsetNode.childNodes[Math.min(i.offset, i.offsetNode.childNodes.length - 1)];
          if (t) return oe.createFromDOMInfo(e, t, 0);
        } else if (s === Q.CLASS_NAME) return oe.createFromDOMInfo(e, i.offsetNode, 0);
      }
      return new ce(i.offsetNode);
    }
    static _snapToSoftTabBoundary(e, t) {
      const i = t.getLineContent(e.lineNumber),
        {
          tabSize: n
        } = t.getTextModelOptions(),
        o = le.l.atomicPosition(i, e.column - 1, n, 2);
      return -1 !== o ? new se.L(e.lineNumber, o + 1) : e;
    }
    static _doHitTest(e, t) {
      let i = new ce();
      if (("function" == typeof document.caretRangeFromPoint ? (i = this._doHitTestWithCaretRangeFromPoint(e, t)) : document.caretPositionFromPoint && (i = this._doHitTestWithCaretPositionFromPoint(e, t.pos.toClientCoordinates())), 1 === i.type)) {
        const t = e.model.getInjectedTextAt(i.position),
          n = e.model.normalizePosition(i.position, 2);
        (!t && n.equals(i.position)) || (i = new de(n, i.spanNode, t));
      }
      return (1 === i.type && e.stickyTabStops && (i = new de(this._snapToSoftTabBoundary(i.position, e.model), i.spanNode, i.injectedText)), i);
    }
  }
  class we {
    constructor() {
      ((this._cache = {}), (this._canvas = document.createElement("canvas")));
    }
    static getInstance() {
      return (we._INSTANCE || (we._INSTANCE = new we()), we._INSTANCE);
    }
    getCharWidth(e, t) {
      const i = e + t;
      if (this._cache[i]) return this._cache[i];
      const n = this._canvas.getContext("2d");
      n.font = t;
      const o = n.measureText(e).width;
      return ((this._cache[i] = o), o);
    }
  }
  we._INSTANCE = null;
  var ye = i(82334);
  function Ce(e) {
    return function (t, i) {
      let n = !1;
      return (e && (n = e.mouseTargetIsWidget(i)), n || i.preventDefault(), i);
    };
  }
  class xe extends M {
    constructor(e, t, i) {
      (super(), (this._context = e), (this.viewController = t), (this.viewHelper = i), (this.mouseTargetFactory = new be(this._context, i)), (this._mouseDownOperation = this._register(new Se(this._context, this.viewController, this.viewHelper, (e, t) => this._createMouseTarget(e, t), e => this._getMouseColumn(e)))), (this.lastMouseLeaveTime = -1), (this._height = this._context.configuration.options.get(129).height));
      const n = new I(this.viewHelper.viewDomNode);
      (this._register(n.onContextMenu(this.viewHelper.viewDomNode, e => this._onContextMenu(e, !0))), this._register(n.onMouseMoveThrottled(this.viewHelper.viewDomNode, e => this._onMouseMove(e), Ce(this.mouseTargetFactory), xe.MOUSE_MOVE_MINIMUM_TIME)), this._register(n.onMouseUp(this.viewHelper.viewDomNode, e => this._onMouseUp(e))), this._register(n.onMouseLeave(this.viewHelper.viewDomNode, e => this._onMouseLeave(e))), this._register(n.onMouseDown(this.viewHelper.viewDomNode, e => this._onMouseDown(e))));
      (this._register(c.nm(this.viewHelper.viewDomNode, c.tw.MOUSE_WHEEL, e => {
        if ((this.viewController.emitMouseWheel(e), !this._context.configuration.options.get(67))) return;
        const t = new y.q(e);
        if (b.dz ? (e.metaKey || e.ctrlKey) && !e.shiftKey && !e.altKey : e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
          const e = ye.C.getZoomLevel(),
            i = t.deltaY > 0 ? 1 : -1;
          (ye.C.setZoomLevel(e + i), t.preventDefault(), t.stopPropagation());
        }
      }, {
        capture: !0,
        passive: !1
      })), this._context.addEventHandler(this));
    }
    dispose() {
      (this._context.removeEventHandler(this), super.dispose());
    }
    onConfigurationChanged(e) {
      if (e.hasChanged(129)) {
        const e = this._context.configuration.options.get(129).height;
        this._height !== e && ((this._height = e), this._mouseDownOperation.onHeightChanged());
      }
      return !1;
    }
    onCursorStateChanged(e) {
      return (this._mouseDownOperation.onCursorStateChanged(e), !1);
    }
    onFocusChanged(e) {
      return !1;
    }
    onScrollChanged(e) {
      return (this._mouseDownOperation.onScrollChanged(), !1);
    }
    getTargetAtClientPoint(e, t) {
      const i = new k(e, t).toPageCoordinates(),
        n = N(this.viewHelper.viewDomNode);
      return i.y < n.y || i.y > n.y + n.height || i.x < n.x || i.x > n.x + n.width ? null : this.mouseTargetFactory.createMouseTarget(this.viewHelper.getLastRenderData(), n, i, null);
    }
    _createMouseTarget(e, t) {
      let i = e.target;
      if (!this.viewHelper.viewDomNode.contains(i)) {
        const t = c.Ay(this.viewHelper.viewDomNode);
        t && (i = t.elementsFromPoint(e.posx, e.posy).find(e => this.viewHelper.viewDomNode.contains(e)));
      }
      return this.mouseTargetFactory.createMouseTarget(this.viewHelper.getLastRenderData(), e.editorPos, e.pos, t ? i : null);
    }
    _getMouseColumn(e) {
      return this.mouseTargetFactory.getMouseColumn(e.editorPos, e.pos);
    }
    _onContextMenu(e, t) {
      this.viewController.emitContextMenu({
        event: e,
        target: this._createMouseTarget(e, t)
      });
    }
    _onMouseMove(e) {
      if (this._mouseDownOperation.isActive()) return;
      e.timestamp < this.lastMouseLeaveTime || this.viewController.emitMouseMove({
        event: e,
        target: this._createMouseTarget(e, !0)
      });
    }
    _onMouseLeave(e) {
      ((this.lastMouseLeaveTime = new Date().getTime()), this.viewController.emitMouseLeave({
        event: e,
        target: null
      }));
    }
    _onMouseUp(e) {
      this.viewController.emitMouseUp({
        event: e,
        target: this._createMouseTarget(e, !0)
      });
    }
    _onMouseDown(e) {
      const t = this._createMouseTarget(e, !0),
        i = 6 === t.type || 7 === t.type,
        n = 2 === t.type || 3 === t.type || 4 === t.type,
        o = 3 === t.type,
        s = this._context.configuration.options.get(97),
        r = 8 === t.type || 5 === t.type,
        a = 9 === t.type;
      let l = e.leftButton || e.middleButton;
      b.dz && e.leftButton && e.ctrlKey && (l = !1);
      const c = () => {
        (e.preventDefault(), this.viewHelper.focusTextArea());
      };
      if (l && (i || (o && s))) (c(), this._mouseDownOperation.start(t.type, e));else if (n) e.preventDefault();else if (r) {
        const i = t.detail;
        this.viewHelper.shouldSuppressMouseDownOnViewZone(i.viewZoneId) && (c(), this._mouseDownOperation.start(t.type, e), e.preventDefault());
      } else a && this.viewHelper.shouldSuppressMouseDownOnWidget(t.detail) && (c(), e.preventDefault());
      this.viewController.emitMouseDown({
        event: e,
        target: t
      });
    }
  }
  xe.MOUSE_MOVE_MINIMUM_TIME = 100;
  class Se extends u.JT {
    constructor(e, t, i, n, o) {
      (super(), (this._context = e), (this._viewController = t), (this._viewHelper = i), (this._createMouseTarget = n), (this._getMouseColumn = o), (this._mouseMoveMonitor = this._register(new T(this._viewHelper.viewDomNode))), (this._onScrollTimeout = this._register(new C._F())), (this._mouseState = new ke()), (this._currentSelection = new v.Y(1, 1, 1, 1)), (this._isActive = !1), (this._lastMouseEvent = null));
    }
    dispose() {
      super.dispose();
    }
    isActive() {
      return this._isActive;
    }
    _onMouseDownThenMove(e) {
      ((this._lastMouseEvent = e), this._mouseState.setModifiers(e));
      const t = this._findMousePosition(e, !0);
      t && (this._mouseState.isDragAndDrop ? this._viewController.emitMouseDrag({
        event: e,
        target: t
      }) : this._dispatchMouse(t, !0));
    }
    start(e, t) {
      ((this._lastMouseEvent = t), this._mouseState.setStartedOnLineNumbers(3 === e), this._mouseState.setStartButtons(t), this._mouseState.setModifiers(t));
      const i = this._findMousePosition(t, !0);
      if (!i || !i.position) return;
      (this._mouseState.trySetCount(t.detail, i.position), (t.detail = this._mouseState.count));
      const n = this._context.configuration.options;
      if (!n.get(80) && n.get(31) && !n.get(18) && !this._mouseState.altKey && t.detail < 2 && !this._isActive && !this._currentSelection.isEmpty() && 6 === i.type && i.position && this._currentSelection.containsPosition(i.position)) return ((this._mouseState.isDragAndDrop = !0), (this._isActive = !0), void this._mouseMoveMonitor.startMonitoring(t.target, t.buttons, Ce(null), e => this._onMouseDownThenMove(e), e => {
        const t = this._findMousePosition(this._lastMouseEvent, !0);
        (e && e instanceof KeyboardEvent ? this._viewController.emitMouseDropCanceled() : this._viewController.emitMouseDrop({
          event: this._lastMouseEvent,
          target: t ? this._createMouseTarget(this._lastMouseEvent, !0) : null
        }), this._stop());
      }));
      ((this._mouseState.isDragAndDrop = !1), this._dispatchMouse(i, t.shiftKey), this._isActive || ((this._isActive = !0), this._mouseMoveMonitor.startMonitoring(t.target, t.buttons, Ce(null), e => this._onMouseDownThenMove(e), () => this._stop())));
    }
    _stop() {
      ((this._isActive = !1), this._onScrollTimeout.cancel());
    }
    onHeightChanged() {
      this._mouseMoveMonitor.stopMonitoring();
    }
    onScrollChanged() {
      this._isActive && this._onScrollTimeout.setIfNotSet(() => {
        if (!this._lastMouseEvent) return;
        const e = this._findMousePosition(this._lastMouseEvent, !1);
        e && (this._mouseState.isDragAndDrop || this._dispatchMouse(e, !0));
      }, 10);
    }
    onCursorStateChanged(e) {
      this._currentSelection = e.selections[0];
    }
    _getPositionOutsideEditor(e) {
      const t = e.editorPos,
        i = this._context.model,
        n = this._context.viewLayout,
        o = this._getMouseColumn(e);
      if (e.posy < t.y) {
        const i = Math.max(n.getCurrentScrollTop() - (t.y - e.posy), 0),
          s = pe.getZoneAtCoord(this._context, i);
        if (s) {
          const e = this._helpPositionJumpOverViewZone(s);
          if (e) return new ue(null, 13, o, e);
        }
        const r = n.getLineNumberAtVerticalOffset(i);
        return new ue(null, 13, o, new se.L(r, 1));
      }
      if (e.posy > t.y + t.height) {
        const s = n.getCurrentScrollTop() + (e.posy - t.y),
          r = pe.getZoneAtCoord(this._context, s);
        if (r) {
          const e = this._helpPositionJumpOverViewZone(r);
          if (e) return new ue(null, 13, o, e);
        }
        const a = n.getLineNumberAtVerticalOffset(s);
        return new ue(null, 13, o, new se.L(a, i.getLineMaxColumn(a)));
      }
      const s = n.getLineNumberAtVerticalOffset(n.getCurrentScrollTop() + (e.posy - t.y));
      return e.posx < t.x ? new ue(null, 13, o, new se.L(s, 1)) : e.posx > t.x + t.width ? new ue(null, 13, o, new se.L(s, i.getLineMaxColumn(s))) : null;
    }
    _findMousePosition(e, t) {
      const i = this._getPositionOutsideEditor(e);
      if (i) return i;
      const n = this._createMouseTarget(e, t);
      if (!n.position) return null;
      if (8 === n.type || 5 === n.type) {
        const e = this._helpPositionJumpOverViewZone(n.detail);
        if (e) return new ue(n.element, n.type, n.mouseColumn, e, null, n.detail);
      }
      return n;
    }
    _helpPositionJumpOverViewZone(e) {
      const t = new se.L(this._currentSelection.selectionStartLineNumber, this._currentSelection.selectionStartColumn),
        i = e.positionBefore,
        n = e.positionAfter;
      return i && n ? (i.isBefore(t) ? i : n) : null;
    }
    _dispatchMouse(e, t) {
      e.position && this._viewController.dispatchMouse({
        position: e.position,
        mouseColumn: e.mouseColumn,
        startedOnLineNumbers: this._mouseState.startedOnLineNumbers,
        inSelectionMode: t,
        mouseDownCount: this._mouseState.count,
        altKey: this._mouseState.altKey,
        ctrlKey: this._mouseState.ctrlKey,
        metaKey: this._mouseState.metaKey,
        shiftKey: this._mouseState.shiftKey,
        leftButton: this._mouseState.leftButton,
        middleButton: this._mouseState.middleButton
      });
    }
  }
  class ke {
    constructor() {
      ((this._altKey = !1), (this._ctrlKey = !1), (this._metaKey = !1), (this._shiftKey = !1), (this._leftButton = !1), (this._middleButton = !1), (this._startedOnLineNumbers = !1), (this._lastMouseDownPosition = null), (this._lastMouseDownPositionEqualCount = 0), (this._lastMouseDownCount = 0), (this._lastSetMouseDownCountTime = 0), (this.isDragAndDrop = !1));
    }
    get altKey() {
      return this._altKey;
    }
    get ctrlKey() {
      return this._ctrlKey;
    }
    get metaKey() {
      return this._metaKey;
    }
    get shiftKey() {
      return this._shiftKey;
    }
    get leftButton() {
      return this._leftButton;
    }
    get middleButton() {
      return this._middleButton;
    }
    get startedOnLineNumbers() {
      return this._startedOnLineNumbers;
    }
    get count() {
      return this._lastMouseDownCount;
    }
    setModifiers(e) {
      ((this._altKey = e.altKey), (this._ctrlKey = e.ctrlKey), (this._metaKey = e.metaKey), (this._shiftKey = e.shiftKey));
    }
    setStartButtons(e) {
      ((this._leftButton = e.leftButton), (this._middleButton = e.middleButton));
    }
    setStartedOnLineNumbers(e) {
      this._startedOnLineNumbers = e;
    }
    trySetCount(e, t) {
      const i = new Date().getTime();
      (i - this._lastSetMouseDownCountTime > ke.CLEAR_MOUSE_DOWN_COUNT_TIME && (e = 1), (this._lastSetMouseDownCountTime = i), e > this._lastMouseDownCount + 1 && (e = this._lastMouseDownCount + 1), this._lastMouseDownPosition && this._lastMouseDownPosition.equals(t) ? this._lastMouseDownPositionEqualCount++ : (this._lastMouseDownPositionEqualCount = 1), (this._lastMouseDownPosition = t), (this._lastMouseDownCount = Math.min(e, this._lastMouseDownPositionEqualCount)));
    }
  }
  ke.CLEAR_MOUSE_DOWN_COUNT_TIME = 400;
  var Le = i(10161),
    Ne = i(35715);
  class De extends xe {
    constructor(e, t, i) {
      (super(e, t, i), this._register(w.o.addTarget(this.viewHelper.linesContentDomNode)), this._register(c.nm(this.viewHelper.linesContentDomNode, w.t.Tap, e => this.onTap(e))), this._register(c.nm(this.viewHelper.linesContentDomNode, w.t.Change, e => this.onChange(e))), this._register(c.nm(this.viewHelper.linesContentDomNode, w.t.Contextmenu, e => this._onContextMenu(new D(e, this.viewHelper.viewDomNode), !1))), (this._lastPointerType = "mouse"), this._register(c.nm(this.viewHelper.linesContentDomNode, "pointerdown", e => {
        const t = e.pointerType;
        this._lastPointerType = "mouse" !== t ? ("touch" === t ? "touch" : "pen") : "mouse";
      })));
      const n = new E(this.viewHelper.viewDomNode);
      (this._register(n.onPointerMoveThrottled(this.viewHelper.viewDomNode, e => this._onMouseMove(e), Ce(this.mouseTargetFactory), xe.MOUSE_MOVE_MINIMUM_TIME)), this._register(n.onPointerUp(this.viewHelper.viewDomNode, e => this._onMouseUp(e))), this._register(n.onPointerLeave(this.viewHelper.viewDomNode, e => this._onMouseLeave(e))), this._register(n.onPointerDown(this.viewHelper.viewDomNode, e => this._onMouseDown(e))));
    }
    onTap(e) {
      if (!e.initialTarget || !this.viewHelper.linesContentDomNode.contains(e.initialTarget)) return;
      (e.preventDefault(), this.viewHelper.focusTextArea());
      const t = this._createMouseTarget(new D(e, this.viewHelper.viewDomNode), !1);
      t.position && this.viewController.dispatchMouse({
        position: t.position,
        mouseColumn: t.position.column,
        startedOnLineNumbers: !1,
        mouseDownCount: e.tapCount,
        inSelectionMode: !1,
        altKey: !1,
        ctrlKey: !1,
        metaKey: !1,
        shiftKey: !1,
        leftButton: !1,
        middleButton: !1
      });
    }
    onChange(e) {
      "touch" === this._lastPointerType && this._context.model.deltaScrollNow(-e.translationX, -e.translationY);
    }
    _onMouseDown(e) {
      "touch" !== e.browserEvent.pointerType && super._onMouseDown(e);
    }
  }
  class Ie extends xe {
    constructor(e, t, i) {
      (super(e, t, i), this._register(w.o.addTarget(this.viewHelper.linesContentDomNode)), this._register(c.nm(this.viewHelper.linesContentDomNode, w.t.Tap, e => this.onTap(e))), this._register(c.nm(this.viewHelper.linesContentDomNode, w.t.Change, e => this.onChange(e))), this._register(c.nm(this.viewHelper.linesContentDomNode, w.t.Contextmenu, e => this._onContextMenu(new D(e, this.viewHelper.viewDomNode), !1))));
    }
    onTap(e) {
      (e.preventDefault(), this.viewHelper.focusTextArea());
      const t = this._createMouseTarget(new D(e, this.viewHelper.viewDomNode), !1);
      if (t.position) {
        const e = document.createEvent("CustomEvent");
        (e.initEvent(Ne.pd.Tap, !1, !0), this.viewHelper.dispatchTextAreaEvent(e), this.viewController.moveTo(t.position));
      }
    }
    onChange(e) {
      this._context.model.deltaScrollNow(-e.translationX, -e.translationY);
    }
  }
  class Ee extends u.JT {
    constructor(e, t, i) {
      (super(), b.gn && Le.D.pointerEvents ? (this.handler = this._register(new De(e, t, i))) : window.TouchEvent ? (this.handler = this._register(new Ie(e, t, i))) : (this.handler = this._register(new xe(e, t, i))));
    }
    getTargetAtClientPoint(e, t) {
      return this.handler.getTargetAtClientPoint(e, t);
    }
  }
  i(67142);
  var Te = i(97295),
    Me = i(15887);
  i(91364);
  class Ae extends M {}
  var Oe = i(27869),
    Pe = i(97781);
  class Re extends Ae {
    constructor(e) {
      (super(), (this._context = e), this._readConfig(), (this._lastCursorModelPosition = new se.L(1, 1)), (this._renderResult = null), (this._activeLineNumber = 1), this._context.addEventHandler(this));
    }
    _readConfig() {
      const e = this._context.configuration.options;
      this._lineHeight = e.get(58);
      const t = e.get(59);
      ((this._renderLineNumbers = t.renderType), (this._renderCustomLineNumbers = t.renderFn), (this._renderFinalNewline = e.get(83)));
      const i = e.get(129);
      ((this._lineNumbersLeft = i.lineNumbersLeft), (this._lineNumbersWidth = i.lineNumbersWidth));
    }
    dispose() {
      (this._context.removeEventHandler(this), (this._renderResult = null), super.dispose());
    }
    onConfigurationChanged(e) {
      return (this._readConfig(), !0);
    }
    onCursorStateChanged(e) {
      const t = e.selections[0].getPosition();
      this._lastCursorModelPosition = this._context.model.coordinatesConverter.convertViewPositionToModelPosition(t);
      let i = !1;
      return (this._activeLineNumber !== t.lineNumber && ((this._activeLineNumber = t.lineNumber), (i = !0)), (2 !== this._renderLineNumbers && 3 !== this._renderLineNumbers) || (i = !0), i);
    }
    onFlushed(e) {
      return !0;
    }
    onLinesChanged(e) {
      return !0;
    }
    onLinesDeleted(e) {
      return !0;
    }
    onLinesInserted(e) {
      return !0;
    }
    onScrollChanged(e) {
      return e.scrollTopChanged;
    }
    onZonesChanged(e) {
      return !0;
    }
    _getLineRenderLineNumber(e) {
      const t = this._context.model.coordinatesConverter.convertViewPositionToModelPosition(new se.L(e, 1));
      if (1 !== t.column) return "";
      const i = t.lineNumber;
      if (this._renderCustomLineNumbers) return this._renderCustomLineNumbers(i);
      if (2 === this._renderLineNumbers) {
        const e = Math.abs(this._lastCursorModelPosition.lineNumber - i);
        return 0 === e ? '<span class="relative-current-line-number">' + i + "</span>" : String(e);
      }
      return 3 === this._renderLineNumbers ? this._lastCursorModelPosition.lineNumber === i || i % 10 == 0 ? String(i) : "" : String(i);
    }
    prepareRender(e) {
      if (0 === this._renderLineNumbers) return void (this._renderResult = null);
      const t = b.IJ ? this._lineHeight % 2 == 0 ? " lh-even" : " lh-odd" : "",
        i = e.visibleRange.startLineNumber,
        n = e.visibleRange.endLineNumber,
        o = '<div class="' + Re.CLASS_NAME + t + '" style="left:' + this._lineNumbersLeft + "px;width:" + this._lineNumbersWidth + 'px;">',
        s = this._context.model.getLineCount(),
        r = [];
      for (let e = i; e <= n; e++) {
        const n = e - i;
        if (!this._renderFinalNewline && e === s && 0 === this._context.model.getLineLength(e)) {
          r[n] = "";
          continue;
        }
        const a = this._getLineRenderLineNumber(e);
        a ? e === this._activeLineNumber ? (r[n] = '<div class="active-line-number ' + Re.CLASS_NAME + t + '" style="left:' + this._lineNumbersLeft + "px;width:" + this._lineNumbersWidth + 'px;">' + a + "</div>") : (r[n] = o + a + "</div>") : (r[n] = "");
      }
      this._renderResult = r;
    }
    render(e, t) {
      if (!this._renderResult) return "";
      const i = t - e;
      return i < 0 || i >= this._renderResult.length ? "" : this._renderResult[i];
    }
  }
  ((Re.CLASS_NAME = "line-numbers"), (0, Pe.Ic)((e, t) => {
    const i = e.getColor(Oe.hw);
    i && t.addRule(`.monaco-editor .line-numbers { color: ${i}; }`);
    const n = e.getColor(Oe.DD);
    n && t.addRule(`.monaco-editor .line-numbers.active-line-number { color: ${n}; }`);
  }));
  class Fe extends A {
    constructor(e) {
      super(e);
      const t = this._context.configuration.options,
        i = t.get(129);
      ((this._canUseLayerHinting = !t.get(28)), (this._contentLeft = i.contentLeft), (this._glyphMarginLeft = i.glyphMarginLeft), (this._glyphMarginWidth = i.glyphMarginWidth), (this._domNode = (0, _.X)(document.createElement("div"))), this._domNode.setClassName(Fe.OUTER_CLASS_NAME), this._domNode.setPosition("absolute"), this._domNode.setAttribute("role", "presentation"), this._domNode.setAttribute("aria-hidden", "true"), (this._glyphMarginBackgroundDomNode = (0, _.X)(document.createElement("div"))), this._glyphMarginBackgroundDomNode.setClassName(Fe.CLASS_NAME), this._domNode.appendChild(this._glyphMarginBackgroundDomNode));
    }
    dispose() {
      super.dispose();
    }
    getDomNode() {
      return this._domNode;
    }
    onConfigurationChanged(e) {
      const t = this._context.configuration.options,
        i = t.get(129);
      return ((this._canUseLayerHinting = !t.get(28)), (this._contentLeft = i.contentLeft), (this._glyphMarginLeft = i.glyphMarginLeft), (this._glyphMarginWidth = i.glyphMarginWidth), !0);
    }
    onScrollChanged(e) {
      return super.onScrollChanged(e) || e.scrollTopChanged;
    }
    prepareRender(e) {}
    render(e) {
      (this._domNode.setLayerHinting(this._canUseLayerHinting), this._domNode.setContain("strict"));
      const t = e.scrollTop - e.bigNumbersDelta;
      this._domNode.setTop(-t);
      const i = Math.min(e.scrollHeight, 1e6);
      (this._domNode.setHeight(i), this._domNode.setWidth(this._contentLeft), this._glyphMarginBackgroundDomNode.setLeft(this._glyphMarginLeft), this._glyphMarginBackgroundDomNode.setWidth(this._glyphMarginWidth), this._glyphMarginBackgroundDomNode.setHeight(i));
    }
  }
  ((Fe.CLASS_NAME = "glyph-margin"), (Fe.OUTER_CLASS_NAME = "margin"));
  var Be = i(59410),
    Ve = i(96542);
  class We {
    constructor(e, t, i) {
      ((this._visibleTextAreaBrand = void 0), (this.top = e), (this.left = t), (this.width = i));
    }
    setWidth(e) {
      return new We(this.top, this.left, e);
    }
  }
  const He = m.vU;
  class ze extends A {
    constructor(e, t, i) {
      (super(e), (this._primaryCursorPosition = new se.L(1, 1)), (this._primaryCursorVisibleRange = null), (this._viewController = t), (this._viewHelper = i), (this._scrollLeft = 0), (this._scrollTop = 0));
      const n = this._context.configuration.options,
        o = n.get(129);
      (this._setAccessibilityOptions(n), (this._contentLeft = o.contentLeft), (this._contentWidth = o.contentWidth), (this._contentHeight = o.height), (this._fontInfo = n.get(43)), (this._lineHeight = n.get(58)), (this._emptySelectionClipboard = n.get(32)), (this._copyWithSyntaxHighlighting = n.get(21)), (this._visibleTextArea = null), (this._selections = [new v.Y(1, 1, 1, 1)]), (this._modelSelections = [new v.Y(1, 1, 1, 1)]), (this._lastRenderPosition = null), (this.textArea = (0, _.X)(document.createElement("textarea"))), O.write(this.textArea, 6), this.textArea.setClassName(`inputarea ${Ve.S}`), this.textArea.setAttribute("wrap", "off"), this.textArea.setAttribute("autocorrect", "off"), this.textArea.setAttribute("autocapitalize", "off"), this.textArea.setAttribute("autocomplete", "off"), this.textArea.setAttribute("spellcheck", "false"), this.textArea.setAttribute("aria-label", this._getAriaLabel(n)), this.textArea.setAttribute("tabindex", String(n.get(111))), this.textArea.setAttribute("role", "textbox"), this.textArea.setAttribute("aria-roledescription", l.N("editor", "editor")), this.textArea.setAttribute("aria-multiline", "true"), this.textArea.setAttribute("aria-haspopup", "false"), this.textArea.setAttribute("aria-autocomplete", "both"), n.get(30) && n.get(80) && this.textArea.setAttribute("readonly", "true"), (this.textAreaCover = (0, _.X)(document.createElement("div"))), this.textAreaCover.setPosition("absolute"));
      const s = {
          getLineCount: () => this._context.model.getLineCount(),
          getLineMaxColumn: e => this._context.model.getLineMaxColumn(e),
          getValueInRange: (e, t) => this._context.model.getValueInRange(e, t)
        },
        r = {
          getDataToCopy: e => {
            const t = this._context.model.getPlainTextToCopy(this._modelSelections, this._emptySelectionClipboard, b.ED),
              i = this._context.model.getEOL(),
              n = this._emptySelectionClipboard && 1 === this._modelSelections.length && this._modelSelections[0].isEmpty(),
              o = Array.isArray(t) ? t : null,
              s = Array.isArray(t) ? t.join(i) : t;
            let r,
              a = null;
            if (e && (Ne.RA.forceCopyWithSyntaxHighlighting || (this._copyWithSyntaxHighlighting && s.length < 65536))) {
              const e = this._context.model.getRichTextToCopy(this._modelSelections, this._emptySelectionClipboard);
              e && ((r = e.html), (a = e.mode));
            }
            return {
              isFromEmptySelection: n,
              multicursorText: o,
              text: s,
              html: r,
              mode: a
            };
          },
          getScreenReaderContent: e => {
            if (1 === this._accessibilitySupport) {
              if (b.dz) {
                const e = this._selections[0];
                if (e.isEmpty()) {
                  const t = e.getStartPosition();
                  let i = this._getWordBeforePosition(t);
                  if ((0 === i.length && (i = this._getCharacterBeforePosition(t)), i.length > 0)) return new Me.un(i, i.length, i.length, t, t);
                }
              }
              return Me.un.EMPTY;
            }
            if (m.Dt) {
              const e = this._selections[0];
              if (e.isEmpty()) {
                const t = e.getStartPosition(),
                  [i, n] = this._getAndroidWordAtPosition(t);
                if (i.length > 0) return new Me.un(i, n, n, t, t);
              }
              return Me.un.EMPTY;
            }
            return Me.ee.fromEditorSelection(e, s, this._selections[0], this._accessibilityPageSize, 0 === this._accessibilitySupport);
          },
          deduceModelPosition: (e, t, i) => this._context.model.deduceModelPositionRelativeToViewPosition(e, t, i)
        };
      ((this._textAreaInput = this._register(new Ne.Fz(r, this.textArea))), this._register(this._textAreaInput.onKeyDown(e => {
        this._viewController.emitKeyDown(e);
      })), this._register(this._textAreaInput.onKeyUp(e => {
        this._viewController.emitKeyUp(e);
      })), this._register(this._textAreaInput.onPaste(e => {
        let t = !1,
          i = null,
          n = null;
        (e.metadata && ((t = this._emptySelectionClipboard && !!e.metadata.isFromEmptySelection), (i = void 0 !== e.metadata.multicursorText ? e.metadata.multicursorText : null), (n = e.metadata.mode)), this._viewController.paste(e.text, t, i, n));
      })), this._register(this._textAreaInput.onCut(() => {
        this._viewController.cut();
      })), this._register(this._textAreaInput.onType(e => {
        e.replacePrevCharCnt || e.replaceNextCharCnt || e.positionDelta ? (Me.al && console.log(` => compositionType: <<${e.text}>>, ${e.replacePrevCharCnt}, ${e.replaceNextCharCnt}, ${e.positionDelta}`), this._viewController.compositionType(e.text, e.replacePrevCharCnt, e.replaceNextCharCnt, e.positionDelta)) : (Me.al && console.log(` => type: <<${e.text}>>`), this._viewController.type(e.text));
      })), this._register(this._textAreaInput.onSelectionChangeRequest(e => {
        this._viewController.setSelection(e);
      })), this._register(this._textAreaInput.onCompositionStart(e => {
        const t = this._selections[0].startLineNumber,
          i = this._selections[0].startColumn + e.revealDeltaColumns;
        this._context.model.revealRange("keyboard", !0, new re.e(t, i, t, i), 0, 1);
        const n = this._viewHelper.visibleRangeForPositionRelativeToEditor(t, i);
        (n && ((this._visibleTextArea = new We(this._context.viewLayout.getVerticalOffsetForLineNumber(t), n.left, He ? 0 : 1)), this._render()), this.textArea.setClassName(`inputarea ${Ve.S} ime-input`), this._viewController.compositionStart(), this._context.model.onCompositionStart());
      })), this._register(this._textAreaInput.onCompositionUpdate(e => {
        this._visibleTextArea && ((this._visibleTextArea = this._visibleTextArea.setWidth((function (e, t) {
          const i = document.createElement("canvas").getContext("2d");
          i.font = ((n = t), (o = "normal"), (s = n.fontWeight), (r = n.fontSize), (a = n.lineHeight), (l = n.fontFamily), `${o} normal ${s} ${r}px / ${a}px ${l}`);
          var n, o, s, r, a, l;
          const c = i.measureText(e);
          return m.vU ? c.width + 2 : c.width;
        })(e.data, this._fontInfo))), this._render());
      })), this._register(this._textAreaInput.onCompositionEnd(() => {
        ((this._visibleTextArea = null), this._render(), this.textArea.setClassName(`inputarea ${Ve.S}`), this._viewController.compositionEnd(), this._context.model.onCompositionEnd());
      })), this._register(this._textAreaInput.onFocus(() => {
        this._context.model.setHasFocus(!0);
      })), this._register(this._textAreaInput.onBlur(() => {
        this._context.model.setHasFocus(!1);
      })));
    }
    dispose() {
      super.dispose();
    }
    _getAndroidWordAtPosition(e) {
      const t = this._context.model.getLineContent(e.lineNumber),
        i = (0, Be.u)('`~!@#$%^&*()-=+[{]}\\|;:",.<>/?');
      let n = !0,
        o = e.column,
        s = !0,
        r = e.column,
        a = 0;
      for (; a < 50 && (n || s);) {
        if ((n && o <= 1 && (n = !1), n)) {
          const e = t.charCodeAt(o - 2);
          0 !== i.get(e) ? (n = !1) : o--;
        }
        if ((s && r > t.length && (s = !1), s)) {
          const e = t.charCodeAt(r - 1);
          0 !== i.get(e) ? (s = !1) : r++;
        }
        a++;
      }
      return [t.substring(o - 1, r - 1), e.column - o];
    }
    _getWordBeforePosition(e) {
      const t = this._context.model.getLineContent(e.lineNumber),
        i = (0, Be.u)(this._context.configuration.options.get(115));
      let n = e.column,
        o = 0;
      for (; n > 1;) {
        const s = t.charCodeAt(n - 2);
        if (0 !== i.get(s) || o > 50) return t.substring(n - 1, e.column - 1);
        (o++, n--);
      }
      return t.substring(0, e.column - 1);
    }
    _getCharacterBeforePosition(e) {
      if (e.column > 1) {
        const t = this._context.model.getLineContent(e.lineNumber).charAt(e.column - 2);
        if (!Te.ZG(t.charCodeAt(0))) return t;
      }
      return "";
    }
    _getAriaLabel(e) {
      return 1 === e.get(2) ? l.N("accessibilityOffAriaLabel", "The editor is not accessible at this time. Press {0} for options.", b.IJ ? "Shift+Alt+F1" : "Alt+F1") : e.get(4);
    }
    _setAccessibilityOptions(e) {
      this._accessibilitySupport = e.get(2);
      const t = e.get(3);
      2 === this._accessibilitySupport && t === K.BH.accessibilityPageSize.defaultValue ? (this._accessibilityPageSize = 500) : (this._accessibilityPageSize = t);
    }
    onConfigurationChanged(e) {
      const t = this._context.configuration.options,
        i = t.get(129);
      return (this._setAccessibilityOptions(t), (this._contentLeft = i.contentLeft), (this._contentWidth = i.contentWidth), (this._contentHeight = i.height), (this._fontInfo = t.get(43)), (this._lineHeight = t.get(58)), (this._emptySelectionClipboard = t.get(32)), (this._copyWithSyntaxHighlighting = t.get(21)), this.textArea.setAttribute("aria-label", this._getAriaLabel(t)), this.textArea.setAttribute("tabindex", String(t.get(111))), (e.hasChanged(30) || e.hasChanged(80)) && (t.get(30) && t.get(80) ? this.textArea.setAttribute("readonly", "true") : this.textArea.removeAttribute("readonly")), e.hasChanged(2) && this._textAreaInput.writeScreenReaderContent("strategy changed"), !0);
    }
    onCursorStateChanged(e) {
      return ((this._selections = e.selections.slice(0)), (this._modelSelections = e.modelSelections.slice(0)), this._textAreaInput.writeScreenReaderContent("selection changed"), !0);
    }
    onDecorationsChanged(e) {
      return !0;
    }
    onFlushed(e) {
      return !0;
    }
    onLinesChanged(e) {
      return !0;
    }
    onLinesDeleted(e) {
      return !0;
    }
    onLinesInserted(e) {
      return !0;
    }
    onScrollChanged(e) {
      return ((this._scrollLeft = e.scrollLeft), (this._scrollTop = e.scrollTop), !0);
    }
    onZonesChanged(e) {
      return !0;
    }
    isFocused() {
      return this._textAreaInput.isFocused();
    }
    focusTextArea() {
      this._textAreaInput.focusTextArea();
    }
    getLastRenderData() {
      return this._lastRenderPosition;
    }
    setAriaOptions(e) {
      (e.activeDescendant ? (this.textArea.setAttribute("aria-haspopup", "true"), this.textArea.setAttribute("aria-autocomplete", "list"), this.textArea.setAttribute("aria-activedescendant", e.activeDescendant)) : (this.textArea.setAttribute("aria-haspopup", "false"), this.textArea.setAttribute("aria-autocomplete", "both"), this.textArea.removeAttribute("aria-activedescendant")), e.role && this.textArea.setAttribute("role", e.role));
    }
    prepareRender(e) {
      ((this._primaryCursorPosition = new se.L(this._selections[0].positionLineNumber, this._selections[0].positionColumn)), (this._primaryCursorVisibleRange = e.visibleRangeForPosition(this._primaryCursorPosition)));
    }
    render(e) {
      (this._textAreaInput.writeScreenReaderContent("render"), this._render());
    }
    _render() {
      if (this._visibleTextArea) return void this._renderInsideEditor(null, this._visibleTextArea.top - this._scrollTop, this._contentLeft + this._visibleTextArea.left - this._scrollLeft, this._visibleTextArea.width, this._lineHeight);
      if (!this._primaryCursorVisibleRange) return void this._renderAtTopLeft();
      const e = this._contentLeft + this._primaryCursorVisibleRange.left - this._scrollLeft;
      if (e < this._contentLeft || e > this._contentLeft + this._contentWidth) return void this._renderAtTopLeft();
      const t = this._context.viewLayout.getVerticalOffsetForLineNumber(this._selections[0].positionLineNumber) - this._scrollTop;
      t < 0 || t > this._contentHeight ? this._renderAtTopLeft() : b.dz ? this._renderInsideEditor(this._primaryCursorPosition, t, e, He ? 0 : 1, this._lineHeight) : this._renderInsideEditor(this._primaryCursorPosition, t, e, He ? 0 : 1, He ? 0 : 1);
    }
    _renderInsideEditor(e, t, i, n, o) {
      this._lastRenderPosition = e;
      const s = this.textArea,
        r = this.textAreaCover;
      (p.V.applyFontInfo(s, this._fontInfo), s.setTop(t), s.setLeft(i), s.setWidth(n), s.setHeight(o), r.setTop(0), r.setLeft(0), r.setWidth(0), r.setHeight(0));
    }
    _renderAtTopLeft() {
      this._lastRenderPosition = null;
      const e = this.textArea,
        t = this.textAreaCover;
      if ((p.V.applyFontInfo(e, this._fontInfo), e.setTop(0), e.setLeft(0), t.setTop(0), t.setLeft(0), He)) return (e.setWidth(0), e.setHeight(0), t.setWidth(0), void t.setHeight(0));
      (e.setWidth(1), e.setHeight(1), t.setWidth(1), t.setHeight(1));
      const i = this._context.configuration.options;
      i.get(49) ? t.setClassName("monaco-editor-background textAreaCover " + Fe.OUTER_CLASS_NAME) : 0 !== i.get(59).renderType ? t.setClassName("monaco-editor-background textAreaCover " + Re.CLASS_NAME) : t.setClassName("monaco-editor-background textAreaCover");
    }
  }
  var je = i(18728);
  class Ue {
    constructor(e, t, i, n) {
      ((this.configuration = e), (this.viewModel = t), (this.userInputEvents = i), (this.commandDelegate = n));
    }
    paste(e, t, i, n) {
      this.commandDelegate.paste(e, t, i, n);
    }
    type(e) {
      this.commandDelegate.type(e);
    }
    compositionType(e, t, i, n) {
      this.commandDelegate.compositionType(e, t, i, n);
    }
    compositionStart() {
      this.commandDelegate.startComposition();
    }
    compositionEnd() {
      this.commandDelegate.endComposition();
    }
    cut() {
      this.commandDelegate.cut();
    }
    setSelection(e) {
      je.CoreNavigationCommands.SetSelection.runCoreEditorCommand(this.viewModel, {
        source: "keyboard",
        selection: e
      });
    }
    _validateViewColumn(e) {
      const t = this.viewModel.getLineMinColumn(e.lineNumber);
      return e.column < t ? new se.L(e.lineNumber, t) : e;
    }
    _hasMulticursorModifier(e) {
      switch (this.configuration.options.get(69)) {
        case "altKey":
          return e.altKey;
        case "ctrlKey":
          return e.ctrlKey;
        case "metaKey":
          return e.metaKey;
        default:
          return !1;
      }
    }
    _hasNonMulticursorModifier(e) {
      switch (this.configuration.options.get(69)) {
        case "altKey":
          return e.ctrlKey || e.metaKey;
        case "ctrlKey":
          return e.altKey || e.metaKey;
        case "metaKey":
          return e.ctrlKey || e.altKey;
        default:
          return !1;
      }
    }
    dispatchMouse(e) {
      const t = this.configuration.options,
        i = b.IJ && t.get(95),
        n = t.get(18);
      e.middleButton && !i ? this._columnSelect(e.position, e.mouseColumn, e.inSelectionMode) : e.startedOnLineNumbers ? this._hasMulticursorModifier(e) ? e.inSelectionMode ? this._lastCursorLineSelect(e.position) : this._createCursor(e.position, !0) : e.inSelectionMode ? this._lineSelectDrag(e.position) : this._lineSelect(e.position) : e.mouseDownCount >= 4 ? this._selectAll() : 3 === e.mouseDownCount ? this._hasMulticursorModifier(e) ? e.inSelectionMode ? this._lastCursorLineSelectDrag(e.position) : this._lastCursorLineSelect(e.position) : e.inSelectionMode ? this._lineSelectDrag(e.position) : this._lineSelect(e.position) : 2 === e.mouseDownCount ? this._hasMulticursorModifier(e) ? this._lastCursorWordSelect(e.position) : e.inSelectionMode ? this._wordSelectDrag(e.position) : this._wordSelect(e.position) : this._hasMulticursorModifier(e) ? this._hasNonMulticursorModifier(e) || (e.shiftKey ? this._columnSelect(e.position, e.mouseColumn, !0) : e.inSelectionMode ? this._lastCursorMoveToSelect(e.position) : this._createCursor(e.position, !1)) : e.inSelectionMode ? e.altKey || n ? this._columnSelect(e.position, e.mouseColumn, !0) : this._moveToSelect(e.position) : this.moveTo(e.position);
    }
    _usualArgs(e) {
      return ((e = this._validateViewColumn(e)), {
        source: "mouse",
        position: this._convertViewToModelPosition(e),
        viewPosition: e
      });
    }
    moveTo(e) {
      je.CoreNavigationCommands.MoveTo.runCoreEditorCommand(this.viewModel, this._usualArgs(e));
    }
    _moveToSelect(e) {
      je.CoreNavigationCommands.MoveToSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(e));
    }
    _columnSelect(e, t, i) {
      ((e = this._validateViewColumn(e)), je.CoreNavigationCommands.ColumnSelect.runCoreEditorCommand(this.viewModel, {
        source: "mouse",
        position: this._convertViewToModelPosition(e),
        viewPosition: e,
        mouseColumn: t,
        doColumnSelect: i
      }));
    }
    _createCursor(e, t) {
      ((e = this._validateViewColumn(e)), je.CoreNavigationCommands.CreateCursor.runCoreEditorCommand(this.viewModel, {
        source: "mouse",
        position: this._convertViewToModelPosition(e),
        viewPosition: e,
        wholeLine: t
      }));
    }
    _lastCursorMoveToSelect(e) {
      je.CoreNavigationCommands.LastCursorMoveToSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(e));
    }
    _wordSelect(e) {
      je.CoreNavigationCommands.WordSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(e));
    }
    _wordSelectDrag(e) {
      je.CoreNavigationCommands.WordSelectDrag.runCoreEditorCommand(this.viewModel, this._usualArgs(e));
    }
    _lastCursorWordSelect(e) {
      je.CoreNavigationCommands.LastCursorWordSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(e));
    }
    _lineSelect(e) {
      je.CoreNavigationCommands.LineSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(e));
    }
    _lineSelectDrag(e) {
      je.CoreNavigationCommands.LineSelectDrag.runCoreEditorCommand(this.viewModel, this._usualArgs(e));
    }
    _lastCursorLineSelect(e) {
      je.CoreNavigationCommands.LastCursorLineSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(e));
    }
    _lastCursorLineSelectDrag(e) {
      je.CoreNavigationCommands.LastCursorLineSelectDrag.runCoreEditorCommand(this.viewModel, this._usualArgs(e));
    }
    _selectAll() {
      je.CoreNavigationCommands.SelectAll.runCoreEditorCommand(this.viewModel, {
        source: "mouse"
      });
    }
    _convertViewToModelPosition(e) {
      return this.viewModel.coordinatesConverter.convertViewPositionToModelPosition(e);
    }
    emitKeyDown(e) {
      this.userInputEvents.emitKeyDown(e);
    }
    emitKeyUp(e) {
      this.userInputEvents.emitKeyUp(e);
    }
    emitContextMenu(e) {
      this.userInputEvents.emitContextMenu(e);
    }
    emitMouseMove(e) {
      this.userInputEvents.emitMouseMove(e);
    }
    emitMouseLeave(e) {
      this.userInputEvents.emitMouseLeave(e);
    }
    emitMouseUp(e) {
      this.userInputEvents.emitMouseUp(e);
    }
    emitMouseDown(e) {
      this.userInputEvents.emitMouseDown(e);
    }
    emitMouseDrag(e) {
      this.userInputEvents.emitMouseDrag(e);
    }
    emitMouseDrop(e) {
      this.userInputEvents.emitMouseDrop(e);
    }
    emitMouseDropCanceled() {
      this.userInputEvents.emitMouseDropCanceled();
    }
    emitMouseWheel(e) {
      this.userInputEvents.emitMouseWheel(e);
    }
  }
  class $e {
    constructor(e) {
      ((this.onKeyDown = null), (this.onKeyUp = null), (this.onContextMenu = null), (this.onMouseMove = null), (this.onMouseLeave = null), (this.onMouseDown = null), (this.onMouseUp = null), (this.onMouseDrag = null), (this.onMouseDrop = null), (this.onMouseDropCanceled = null), (this.onMouseWheel = null), (this._coordinatesConverter = e));
    }
    emitKeyDown(e) {
      this.onKeyDown && this.onKeyDown(e);
    }
    emitKeyUp(e) {
      this.onKeyUp && this.onKeyUp(e);
    }
    emitContextMenu(e) {
      this.onContextMenu && this.onContextMenu(this._convertViewToModelMouseEvent(e));
    }
    emitMouseMove(e) {
      this.onMouseMove && this.onMouseMove(this._convertViewToModelMouseEvent(e));
    }
    emitMouseLeave(e) {
      this.onMouseLeave && this.onMouseLeave(this._convertViewToModelMouseEvent(e));
    }
    emitMouseDown(e) {
      this.onMouseDown && this.onMouseDown(this._convertViewToModelMouseEvent(e));
    }
    emitMouseUp(e) {
      this.onMouseUp && this.onMouseUp(this._convertViewToModelMouseEvent(e));
    }
    emitMouseDrag(e) {
      this.onMouseDrag && this.onMouseDrag(this._convertViewToModelMouseEvent(e));
    }
    emitMouseDrop(e) {
      this.onMouseDrop && this.onMouseDrop(this._convertViewToModelMouseEvent(e));
    }
    emitMouseDropCanceled() {
      this.onMouseDropCanceled && this.onMouseDropCanceled();
    }
    emitMouseWheel(e) {
      this.onMouseWheel && this.onMouseWheel(e);
    }
    _convertViewToModelMouseEvent(e) {
      return e.target ? {
        event: e.event,
        target: this._convertViewToModelMouseTarget(e.target)
      } : e;
    }
    _convertViewToModelMouseTarget(e) {
      return $e.convertViewToModelMouseTarget(e, this._coordinatesConverter);
    }
    static convertViewToModelMouseTarget(e, t) {
      return new Ke(e.element, e.type, e.mouseColumn, e.position ? t.convertViewPositionToModelPosition(e.position) : null, e.range ? t.convertViewRangeToModelRange(e.range) : null, e.detail);
    }
  }
  class Ke {
    constructor(e, t, i, n, o, s) {
      ((this.element = e), (this.type = t), (this.mouseColumn = i), (this.position = n), (this.range = o), (this.detail = s));
    }
    toString() {
      return ue.toString(this);
    }
  }
  var qe,
    Ze = i(50072);
  class Ge {
    constructor(e) {
      ((this._createLine = e), this._set(1, []));
    }
    flush() {
      this._set(1, []);
    }
    _set(e, t) {
      ((this._lines = t), (this._rendLineNumberStart = e));
    }
    _get() {
      return {
        rendLineNumberStart: this._rendLineNumberStart,
        lines: this._lines
      };
    }
    getStartLineNumber() {
      return this._rendLineNumberStart;
    }
    getEndLineNumber() {
      return this._rendLineNumberStart + this._lines.length - 1;
    }
    getCount() {
      return this._lines.length;
    }
    getLine(e) {
      const t = e - this._rendLineNumberStart;
      if (t < 0 || t >= this._lines.length) throw new Error("Illegal value for lineNumber");
      return this._lines[t];
    }
    onLinesDeleted(e, t) {
      if (0 === this.getCount()) return null;
      const i = this.getStartLineNumber(),
        n = this.getEndLineNumber();
      if (t < i) {
        const i = t - e + 1;
        return ((this._rendLineNumberStart -= i), null);
      }
      if (e > n) return null;
      let o = 0,
        s = 0;
      for (let r = i; r <= n; r++) {
        const i = r - this._rendLineNumberStart;
        e <= r && r <= t && (0 === s ? ((o = i), (s = 1)) : s++);
      }
      if (e < i) {
        let n = 0;
        ((n = t < i ? t - e + 1 : i - e), (this._rendLineNumberStart -= n));
      }
      return this._lines.splice(o, s);
    }
    onLinesChanged(e, t) {
      if (0 === this.getCount()) return !1;
      const i = this.getStartLineNumber(),
        n = this.getEndLineNumber();
      let o = !1;
      for (let s = e; s <= t; s++) s >= i && s <= n && (this._lines[s - this._rendLineNumberStart].onContentChanged(), (o = !0));
      return o;
    }
    onLinesInserted(e, t) {
      if (0 === this.getCount()) return null;
      const i = t - e + 1,
        n = this.getStartLineNumber(),
        o = this.getEndLineNumber();
      if (e <= n) return ((this._rendLineNumberStart += i), null);
      if (e > o) return null;
      if (i + e > o) {
        return this._lines.splice(e - this._rendLineNumberStart, o - e + 1);
      }
      const s = [];
      for (let e = 0; e < i; e++) s[e] = this._createLine();
      const r = e - this._rendLineNumberStart,
        a = this._lines.slice(0, r),
        l = this._lines.slice(r, this._lines.length - i),
        c = this._lines.slice(this._lines.length - i, this._lines.length);
      return ((this._lines = a.concat(s).concat(l)), c);
    }
    onTokensChanged(e) {
      if (0 === this.getCount()) return !1;
      const t = this.getStartLineNumber(),
        i = this.getEndLineNumber();
      let n = !1;
      for (let o = 0, s = e.length; o < s; o++) {
        const s = e[o];
        if (s.toLineNumber < t || s.fromLineNumber > i) continue;
        const r = Math.max(t, s.fromLineNumber),
          a = Math.min(i, s.toLineNumber);
        for (let e = r; e <= a; e++) {
          const t = e - this._rendLineNumberStart;
          (this._lines[t].onTokensChanged(), (n = !0));
        }
      }
      return n;
    }
  }
  class Ye {
    constructor(e) {
      ((this._host = e), (this.domNode = this._createDomNode()), (this._linesCollection = new Ge(() => this._host.createVisibleLine())));
    }
    _createDomNode() {
      const e = (0, _.X)(document.createElement("div"));
      return (e.setClassName("view-layer"), e.setPosition("absolute"), e.domNode.setAttribute("role", "presentation"), e.domNode.setAttribute("aria-hidden", "true"), e);
    }
    onConfigurationChanged(e) {
      return !!e.hasChanged(129);
    }
    onFlushed(e) {
      return (this._linesCollection.flush(), !0);
    }
    onLinesChanged(e) {
      return this._linesCollection.onLinesChanged(e.fromLineNumber, e.toLineNumber);
    }
    onLinesDeleted(e) {
      const t = this._linesCollection.onLinesDeleted(e.fromLineNumber, e.toLineNumber);
      if (t) for (let e = 0, i = t.length; e < i; e++) {
        const i = t[e].getDomNode();
        i && this.domNode.domNode.removeChild(i);
      }
      return !0;
    }
    onLinesInserted(e) {
      const t = this._linesCollection.onLinesInserted(e.fromLineNumber, e.toLineNumber);
      if (t) for (let e = 0, i = t.length; e < i; e++) {
        const i = t[e].getDomNode();
        i && this.domNode.domNode.removeChild(i);
      }
      return !0;
    }
    onScrollChanged(e) {
      return e.scrollTopChanged;
    }
    onTokensChanged(e) {
      return this._linesCollection.onTokensChanged(e.ranges);
    }
    onZonesChanged(e) {
      return !0;
    }
    getStartLineNumber() {
      return this._linesCollection.getStartLineNumber();
    }
    getEndLineNumber() {
      return this._linesCollection.getEndLineNumber();
    }
    getVisibleLine(e) {
      return this._linesCollection.getLine(e);
    }
    renderLines(e) {
      const t = this._linesCollection._get(),
        i = new Qe(this.domNode.domNode, this._host, e),
        n = {
          rendLineNumberStart: t.rendLineNumberStart,
          lines: t.lines,
          linesLength: t.lines.length
        },
        o = i.render(n, e.startLineNumber, e.endLineNumber, e.relativeVerticalOffset);
      this._linesCollection._set(o.rendLineNumberStart, o.lines);
    }
  }
  class Qe {
    constructor(e, t, i) {
      ((this.domNode = e), (this.host = t), (this.viewportData = i));
    }
    render(e, t, i, n) {
      const o = {
        rendLineNumberStart: e.rendLineNumberStart,
        lines: e.lines.slice(0),
        linesLength: e.linesLength
      };
      if (o.rendLineNumberStart + o.linesLength - 1 < t || i < o.rendLineNumberStart) {
        ((o.rendLineNumberStart = t), (o.linesLength = i - t + 1), (o.lines = []));
        for (let e = t; e <= i; e++) o.lines[e - t] = this.host.createVisibleLine();
        return (this._finishRendering(o, !0, n), o);
      }
      if ((this._renderUntouchedLines(o, Math.max(t - o.rendLineNumberStart, 0), Math.min(i - o.rendLineNumberStart, o.linesLength - 1), n, t), o.rendLineNumberStart > t)) {
        const e = t,
          s = Math.min(i, o.rendLineNumberStart - 1);
        e <= s && (this._insertLinesBefore(o, e, s, n, t), (o.linesLength += s - e + 1));
      } else if (o.rendLineNumberStart < t) {
        const e = Math.min(o.linesLength, t - o.rendLineNumberStart);
        e > 0 && (this._removeLinesBefore(o, e), (o.linesLength -= e));
      }
      if (((o.rendLineNumberStart = t), o.rendLineNumberStart + o.linesLength - 1 < i)) {
        const e = o.rendLineNumberStart + o.linesLength,
          s = i;
        e <= s && (this._insertLinesAfter(o, e, s, n, t), (o.linesLength += s - e + 1));
      } else if (o.rendLineNumberStart + o.linesLength - 1 > i) {
        const e = Math.max(0, i - o.rendLineNumberStart + 1),
          t = o.linesLength - 1 - e + 1;
        t > 0 && (this._removeLinesAfter(o, t), (o.linesLength -= t));
      }
      return (this._finishRendering(o, !1, n), o);
    }
    _renderUntouchedLines(e, t, i, n, o) {
      const s = e.rendLineNumberStart,
        r = e.lines;
      for (let e = t; e <= i; e++) {
        const t = s + e;
        r[e].layoutLine(t, n[t - o]);
      }
    }
    _insertLinesBefore(e, t, i, n, o) {
      const s = [];
      let r = 0;
      for (let e = t; e <= i; e++) s[r++] = this.host.createVisibleLine();
      e.lines = s.concat(e.lines);
    }
    _removeLinesBefore(e, t) {
      for (let i = 0; i < t; i++) {
        const t = e.lines[i].getDomNode();
        t && this.domNode.removeChild(t);
      }
      e.lines.splice(0, t);
    }
    _insertLinesAfter(e, t, i, n, o) {
      const s = [];
      let r = 0;
      for (let e = t; e <= i; e++) s[r++] = this.host.createVisibleLine();
      e.lines = e.lines.concat(s);
    }
    _removeLinesAfter(e, t) {
      const i = e.linesLength - t;
      for (let n = 0; n < t; n++) {
        const t = e.lines[i + n].getDomNode();
        t && this.domNode.removeChild(t);
      }
      e.lines.splice(i, t);
    }
    _finishRenderingNewLines(e, t, i, n) {
      Qe._ttPolicy && (i = Qe._ttPolicy.createHTML(i));
      const o = this.domNode.lastChild;
      t || !o ? (this.domNode.innerHTML = i) : o.insertAdjacentHTML("afterend", i);
      let s = this.domNode.lastChild;
      for (let t = e.linesLength - 1; t >= 0; t--) {
        const i = e.lines[t];
        n[t] && (i.setDomNode(s), (s = s.previousSibling));
      }
    }
    _finishRenderingInvalidLines(e, t, i) {
      const n = document.createElement("div");
      (Qe._ttPolicy && (t = Qe._ttPolicy.createHTML(t)), (n.innerHTML = t));
      for (let t = 0; t < e.linesLength; t++) {
        const o = e.lines[t];
        if (i[t]) {
          const e = n.firstChild,
            t = o.getDomNode();
          (t.parentNode.replaceChild(e, t), o.setDomNode(e));
        }
      }
    }
    _finishRendering(e, t, i) {
      const n = Qe._sb,
        o = e.linesLength,
        s = e.lines,
        r = e.rendLineNumberStart,
        a = [];
      {
        n.reset();
        let l = !1;
        for (let e = 0; e < o; e++) {
          const t = s[e];
          a[e] = !1;
          if (t.getDomNode()) continue;
          t.renderLine(e + r, i[e], this.viewportData, n) && ((a[e] = !0), (l = !0));
        }
        l && this._finishRenderingNewLines(e, t, n.build(), a);
      }
      {
        n.reset();
        let t = !1;
        const l = [];
        for (let e = 0; e < o; e++) {
          const o = s[e];
          if (((l[e] = !1), a[e])) continue;
          o.renderLine(e + r, i[e], this.viewportData, n) && ((l[e] = !0), (t = !0));
        }
        t && this._finishRenderingInvalidLines(e, n.build(), l);
      }
    }
  }
  ((Qe._ttPolicy = null === (qe = window.trustedTypes) || void 0 === qe ? void 0 : qe.createPolicy("editorViewLayer", {
    createHTML: e => e
  })), (Qe._sb = (0, Ze.l$)(1e5)));
  class Xe extends A {
    constructor(e) {
      (super(e), (this._visibleLines = new Ye(this)), (this.domNode = this._visibleLines.domNode), (this._dynamicOverlays = []), (this._isFocused = !1), this.domNode.setClassName("view-overlays"));
    }
    shouldRender() {
      if (super.shouldRender()) return !0;
      for (let e = 0, t = this._dynamicOverlays.length; e < t; e++) {
        if (this._dynamicOverlays[e].shouldRender()) return !0;
      }
      return !1;
    }
    dispose() {
      super.dispose();
      for (let e = 0, t = this._dynamicOverlays.length; e < t; e++) {
        this._dynamicOverlays[e].dispose();
      }
      this._dynamicOverlays = [];
    }
    getDomNode() {
      return this.domNode;
    }
    createVisibleLine() {
      return new Je(this._context.configuration, this._dynamicOverlays);
    }
    addDynamicOverlay(e) {
      this._dynamicOverlays.push(e);
    }
    onConfigurationChanged(e) {
      this._visibleLines.onConfigurationChanged(e);
      const t = this._visibleLines.getStartLineNumber(),
        i = this._visibleLines.getEndLineNumber();
      for (let n = t; n <= i; n++) {
        this._visibleLines.getVisibleLine(n).onConfigurationChanged(e);
      }
      return !0;
    }
    onFlushed(e) {
      return this._visibleLines.onFlushed(e);
    }
    onFocusChanged(e) {
      return ((this._isFocused = e.isFocused), !0);
    }
    onLinesChanged(e) {
      return this._visibleLines.onLinesChanged(e);
    }
    onLinesDeleted(e) {
      return this._visibleLines.onLinesDeleted(e);
    }
    onLinesInserted(e) {
      return this._visibleLines.onLinesInserted(e);
    }
    onScrollChanged(e) {
      return this._visibleLines.onScrollChanged(e) || !0;
    }
    onTokensChanged(e) {
      return this._visibleLines.onTokensChanged(e);
    }
    onZonesChanged(e) {
      return this._visibleLines.onZonesChanged(e);
    }
    prepareRender(e) {
      const t = this._dynamicOverlays.filter(e => e.shouldRender());
      for (let i = 0, n = t.length; i < n; i++) {
        const n = t[i];
        (n.prepareRender(e), n.onDidRender());
      }
    }
    render(e) {
      (this._viewOverlaysRender(e), this.domNode.toggleClassName("focused", this._isFocused));
    }
    _viewOverlaysRender(e) {
      this._visibleLines.renderLines(e.viewportData);
    }
  }
  class Je {
    constructor(e, t) {
      ((this._configuration = e), (this._lineHeight = this._configuration.options.get(58)), (this._dynamicOverlays = t), (this._domNode = null), (this._renderedContent = null));
    }
    getDomNode() {
      return this._domNode ? this._domNode.domNode : null;
    }
    setDomNode(e) {
      this._domNode = (0, _.X)(e);
    }
    onContentChanged() {}
    onTokensChanged() {}
    onConfigurationChanged(e) {
      this._lineHeight = this._configuration.options.get(58);
    }
    renderLine(e, t, i, n) {
      let o = "";
      for (let t = 0, n = this._dynamicOverlays.length; t < n; t++) {
        o += this._dynamicOverlays[t].render(i.startLineNumber, e);
      }
      return (this._renderedContent !== o && ((this._renderedContent = o), n.appendASCIIString('<div style="position:absolute;top:'), n.appendASCIIString(String(t)), n.appendASCIIString("px;width:100%;height:"), n.appendASCIIString(String(this._lineHeight)), n.appendASCIIString('px;">'), n.appendASCIIString(o), n.appendASCIIString("</div>"), !0));
    }
    layoutLine(e, t) {
      this._domNode && (this._domNode.setTop(t), this._domNode.setHeight(this._lineHeight));
    }
  }
  class et extends Xe {
    constructor(e) {
      super(e);
      const t = this._context.configuration.options.get(129);
      ((this._contentWidth = t.contentWidth), this.domNode.setHeight(0));
    }
    onConfigurationChanged(e) {
      const t = this._context.configuration.options.get(129);
      return ((this._contentWidth = t.contentWidth), super.onConfigurationChanged(e) || !0);
    }
    onScrollChanged(e) {
      return super.onScrollChanged(e) || e.scrollWidthChanged;
    }
    _viewOverlaysRender(e) {
      (super._viewOverlaysRender(e), this.domNode.setWidth(Math.max(e.scrollWidth, this._contentWidth)));
    }
  }
  class tt extends Xe {
    constructor(e) {
      super(e);
      const t = this._context.configuration.options,
        i = t.get(129);
      ((this._contentLeft = i.contentLeft), this.domNode.setClassName("margin-view-overlays"), this.domNode.setWidth(1), p.V.applyFontInfo(this.domNode, t.get(43)));
    }
    onConfigurationChanged(e) {
      const t = this._context.configuration.options;
      p.V.applyFontInfo(this.domNode, t.get(43));
      const i = t.get(129);
      return ((this._contentLeft = i.contentLeft), super.onConfigurationChanged(e) || !0);
    }
    onScrollChanged(e) {
      return super.onScrollChanged(e) || e.scrollHeightChanged;
    }
    _viewOverlaysRender(e) {
      super._viewOverlaysRender(e);
      const t = Math.min(e.scrollHeight, 1e6);
      (this.domNode.setHeight(t), this.domNode.setWidth(this._contentLeft));
    }
  }
  class it {
    constructor(e, t) {
      ((this._coordinateBrand = void 0), (this.top = e), (this.left = t));
    }
  }
  class nt extends A {
    constructor(e, t) {
      (super(e), (this._viewDomNode = t), (this._widgets = {}), (this.domNode = (0, _.X)(document.createElement("div"))), O.write(this.domNode, 1), this.domNode.setClassName("contentWidgets"), this.domNode.setPosition("absolute"), this.domNode.setTop(0), (this.overflowingContentWidgetsDomNode = (0, _.X)(document.createElement("div"))), O.write(this.overflowingContentWidgetsDomNode, 2), this.overflowingContentWidgetsDomNode.setClassName("overflowingContentWidgets"));
    }
    dispose() {
      (super.dispose(), (this._widgets = {}));
    }
    onConfigurationChanged(e) {
      const t = Object.keys(this._widgets);
      for (const i of t) this._widgets[i].onConfigurationChanged(e);
      return !0;
    }
    onDecorationsChanged(e) {
      return !0;
    }
    onFlushed(e) {
      return !0;
    }
    onLineMappingChanged(e) {
      const t = Object.keys(this._widgets);
      for (const i of t) this._widgets[i].onLineMappingChanged(e);
      return !0;
    }
    onLinesChanged(e) {
      return !0;
    }
    onLinesDeleted(e) {
      return !0;
    }
    onLinesInserted(e) {
      return !0;
    }
    onScrollChanged(e) {
      return !0;
    }
    onZonesChanged(e) {
      return !0;
    }
    addWidget(e) {
      const t = new ot(this._context, this._viewDomNode, e);
      ((this._widgets[t.id] = t), t.allowEditorOverflow ? this.overflowingContentWidgetsDomNode.appendChild(t.domNode) : this.domNode.appendChild(t.domNode), this.setShouldRender());
    }
    setWidgetPosition(e, t, i) {
      (this._widgets[e.getId()].setPosition(t, i), this.setShouldRender());
    }
    removeWidget(e) {
      const t = e.getId();
      if (this._widgets.hasOwnProperty(t)) {
        const e = this._widgets[t];
        delete this._widgets[t];
        const i = e.domNode.domNode;
        (i.parentNode.removeChild(i), i.removeAttribute("monaco-visible-content-widget"), this.setShouldRender());
      }
    }
    shouldSuppressMouseDownOnWidget(e) {
      return (!!this._widgets.hasOwnProperty(e) && this._widgets[e].suppressMouseDown);
    }
    onBeforeRender(e) {
      const t = Object.keys(this._widgets);
      for (const i of t) this._widgets[i].onBeforeRender(e);
    }
    prepareRender(e) {
      const t = Object.keys(this._widgets);
      for (const i of t) this._widgets[i].prepareRender(e);
    }
    render(e) {
      const t = Object.keys(this._widgets);
      for (const i of t) this._widgets[i].render(e);
    }
  }
  class ot {
    constructor(e, t, i) {
      ((this._context = e), (this._viewDomNode = t), (this._actual = i), (this.domNode = (0, _.X)(this._actual.getDomNode())), (this.id = this._actual.getId()), (this.allowEditorOverflow = this._actual.allowEditorOverflow || !1), (this.suppressMouseDown = this._actual.suppressMouseDown || !1));
      const n = this._context.configuration.options,
        o = n.get(129);
      ((this._fixedOverflowWidgets = n.get(36)), (this._contentWidth = o.contentWidth), (this._contentLeft = o.contentLeft), (this._lineHeight = n.get(58)), (this._range = null), (this._viewRange = null), (this._preference = []), (this._cachedDomNodeClientWidth = -1), (this._cachedDomNodeClientHeight = -1), (this._maxWidth = this._getMaxWidth()), (this._isVisible = !1), (this._renderData = null), this.domNode.setPosition(this._fixedOverflowWidgets && this.allowEditorOverflow ? "fixed" : "absolute"), this.domNode.setVisibility("hidden"), this.domNode.setAttribute("widgetId", this.id), this.domNode.setMaxWidth(this._maxWidth));
    }
    onConfigurationChanged(e) {
      const t = this._context.configuration.options;
      if (((this._lineHeight = t.get(58)), e.hasChanged(129))) {
        const e = t.get(129);
        ((this._contentLeft = e.contentLeft), (this._contentWidth = e.contentWidth), (this._maxWidth = this._getMaxWidth()));
      }
    }
    onLineMappingChanged(e) {
      this._setPosition(this._range);
    }
    _setPosition(e) {
      if (((this._range = e), (this._viewRange = null), this._range)) {
        const e = this._context.model.validateModelRange(this._range);
        (this._context.model.coordinatesConverter.modelPositionIsVisible(e.getStartPosition()) || this._context.model.coordinatesConverter.modelPositionIsVisible(e.getEndPosition())) && (this._viewRange = this._context.model.coordinatesConverter.convertModelRangeToViewRange(e));
      }
    }
    _getMaxWidth() {
      return this.allowEditorOverflow ? window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth : this._contentWidth;
    }
    setPosition(e, t) {
      (this._setPosition(e), (this._preference = t), (this._cachedDomNodeClientWidth = -1), (this._cachedDomNodeClientHeight = -1));
    }
    _layoutBoxInViewport(e, t, i, n, o) {
      const s = e.top,
        r = s,
        a = t.top + this._lineHeight,
        l = s - n,
        c = r >= n,
        d = a,
        h = o.viewportHeight - a >= n;
      let u = e.left,
        g = t.left;
      return (u + i > o.scrollLeft + o.viewportWidth && (u = o.scrollLeft + o.viewportWidth - i), g + i > o.scrollLeft + o.viewportWidth && (g = o.scrollLeft + o.viewportWidth - i), u < o.scrollLeft && (u = o.scrollLeft), g < o.scrollLeft && (g = o.scrollLeft), {
        fitsAbove: c,
        aboveTop: l,
        aboveLeft: u,
        fitsBelow: h,
        belowTop: d,
        belowLeft: g
      });
    }
    _layoutHorizontalSegmentInPage(e, t, i, n) {
      const o = Math.max(0, t.left - n),
        s = Math.min(t.left + t.width + n, e.width);
      let r = t.left + i - c.DI.scrollX;
      if (r + n > s) {
        const e = r - (s - n);
        ((r -= e), (i -= e));
      }
      if (r < o) {
        const e = r - o;
        ((r -= e), (i -= e));
      }
      return [i, r];
    }
    _layoutBoxInPage(e, t, i, n, o) {
      const s = e.top - n,
        r = t.top + this._lineHeight,
        a = c.i(this._viewDomNode.domNode),
        l = a.top + s - c.DI.scrollY,
        d = a.top + r - c.DI.scrollY,
        h = c.D6(document.body),
        [u, g] = this._layoutHorizontalSegmentInPage(h, a, e.left - o.scrollLeft + this._contentLeft, i),
        [p, f] = this._layoutHorizontalSegmentInPage(h, a, t.left - o.scrollLeft + this._contentLeft, i),
        m = l >= 22,
        v = d + n <= h.height - 22;
      return this._fixedOverflowWidgets ? {
        fitsAbove: m,
        aboveTop: Math.max(l, 22),
        aboveLeft: g,
        fitsBelow: v,
        belowTop: d,
        belowLeft: f
      } : {
        fitsAbove: m,
        aboveTop: s,
        aboveLeft: u,
        fitsBelow: v,
        belowTop: r,
        belowLeft: p
      };
    }
    _prepareRenderWidgetAtExactPositionOverflowing(e) {
      return new it(e.top, e.left + this._contentLeft);
    }
    _getTopAndBottomLeft(e) {
      if (!this._viewRange) return [null, null];
      const t = e.linesVisibleRangesForRange(this._viewRange, !1);
      if (!t || 0 === t.length) return [null, null];
      let i = t[0],
        n = t[0];
      for (const e of t) (e.lineNumber < i.lineNumber && (i = e), e.lineNumber > n.lineNumber && (n = e));
      let o = 1073741824;
      for (const e of i.ranges) e.left < o && (o = e.left);
      let s = 1073741824;
      for (const e of n.ranges) e.left < s && (s = e.left);
      const r = e.getVerticalOffsetForLineNumber(i.lineNumber) - e.scrollTop,
        a = new it(r, o),
        l = e.getVerticalOffsetForLineNumber(n.lineNumber) - e.scrollTop;
      return [a, new it(l, s)];
    }
    _prepareRenderWidget(e) {
      const [t, i] = this._getTopAndBottomLeft(e);
      if (!t || !i) return null;
      if (-1 === this._cachedDomNodeClientWidth || -1 === this._cachedDomNodeClientHeight) {
        let e = null;
        if (("function" == typeof this._actual.beforeRender && (e = st(this._actual.beforeRender, this._actual)), e)) ((this._cachedDomNodeClientWidth = e.width), (this._cachedDomNodeClientHeight = e.height));else {
          const e = this.domNode.domNode;
          ((this._cachedDomNodeClientWidth = e.clientWidth), (this._cachedDomNodeClientHeight = e.clientHeight));
        }
      }
      let n;
      if (((n = this.allowEditorOverflow ? this._layoutBoxInPage(t, i, this._cachedDomNodeClientWidth, this._cachedDomNodeClientHeight, e) : this._layoutBoxInViewport(t, i, this._cachedDomNodeClientWidth, this._cachedDomNodeClientHeight, e)), this._preference)) for (let e = 1; e <= 2; e++) for (const i of this._preference) if (1 === i) {
        if (!n) return null;
        if (2 === e || n.fitsAbove) return {
          coordinate: new it(n.aboveTop, n.aboveLeft),
          position: 1
        };
      } else {
        if (2 !== i) return this.allowEditorOverflow ? {
          coordinate: this._prepareRenderWidgetAtExactPositionOverflowing(t),
          position: 0
        } : {
          coordinate: t,
          position: 0
        };
        if (!n) return null;
        if (2 === e || n.fitsBelow) return {
          coordinate: new it(n.belowTop, n.belowLeft),
          position: 2
        };
      }
      return null;
    }
    onBeforeRender(e) {
      this._viewRange && this._preference && (this._viewRange.endLineNumber < e.startLineNumber || this._viewRange.startLineNumber > e.endLineNumber || this.domNode.setMaxWidth(this._maxWidth));
    }
    prepareRender(e) {
      this._renderData = this._prepareRenderWidget(e);
    }
    render(e) {
      if (!this._renderData) return (this._isVisible && (this.domNode.removeAttribute("monaco-visible-content-widget"), (this._isVisible = !1), this.domNode.setVisibility("hidden")), void ("function" == typeof this._actual.afterRender && st(this._actual.afterRender, this._actual, null)));
      (this.allowEditorOverflow ? (this.domNode.setTop(this._renderData.coordinate.top), this.domNode.setLeft(this._renderData.coordinate.left)) : (this.domNode.setTop(this._renderData.coordinate.top + e.scrollTop - e.bigNumbersDelta), this.domNode.setLeft(this._renderData.coordinate.left)), this._isVisible || (this.domNode.setVisibility("inherit"), this.domNode.setAttribute("monaco-visible-content-widget", "true"), (this._isVisible = !0)), "function" == typeof this._actual.afterRender && st(this._actual.afterRender, this._actual, this._renderData.position));
    }
  }
  function st(e, t, ...i) {
    try {
      return e.call(t, ...i);
    } catch (e) {
      return null;
    }
  }
  i(54175);
  var rt = i(9488);
  let at = !0;
  class lt extends Ae {
    constructor(e) {
      (super(), (this._context = e));
      const t = this._context.configuration.options,
        i = t.get(129);
      ((this._lineHeight = t.get(58)), (this._renderLineHighlight = t.get(84)), (this._renderLineHighlightOnlyWhenFocus = t.get(85)), (this._contentLeft = i.contentLeft), (this._contentWidth = i.contentWidth), (this._selectionIsEmpty = !0), (this._focused = !1), (this._cursorLineNumbers = [1]), (this._selections = [new v.Y(1, 1, 1, 1)]), (this._renderData = null), this._context.addEventHandler(this));
    }
    dispose() {
      (this._context.removeEventHandler(this), super.dispose());
    }
    _readFromSelections() {
      let e = !1;
      const t = at ? this._selections.slice(0, 1) : this._selections,
        i = t.map(e => e.positionLineNumber);
      (i.sort((e, t) => e - t), rt.fS(this._cursorLineNumbers, i) || ((this._cursorLineNumbers = i), (e = !0)));
      const n = t.every(e => e.isEmpty());
      return (this._selectionIsEmpty !== n && ((this._selectionIsEmpty = n), (e = !0)), e);
    }
    onThemeChanged(e) {
      return this._readFromSelections();
    }
    onConfigurationChanged(e) {
      const t = this._context.configuration.options,
        i = t.get(129);
      return ((this._lineHeight = t.get(58)), (this._renderLineHighlight = t.get(84)), (this._renderLineHighlightOnlyWhenFocus = t.get(85)), (this._contentLeft = i.contentLeft), (this._contentWidth = i.contentWidth), !0);
    }
    onCursorStateChanged(e) {
      return ((this._selections = e.selections), this._readFromSelections());
    }
    onFlushed(e) {
      return !0;
    }
    onLinesDeleted(e) {
      return !0;
    }
    onLinesInserted(e) {
      return !0;
    }
    onScrollChanged(e) {
      return e.scrollWidthChanged || e.scrollTopChanged;
    }
    onZonesChanged(e) {
      return !0;
    }
    onFocusChanged(e) {
      return (!!this._renderLineHighlightOnlyWhenFocus && ((this._focused = e.isFocused), !0));
    }
    prepareRender(e) {
      if (!this._shouldRenderThis()) return void (this._renderData = null);
      const t = this._renderOne(e),
        i = e.visibleRange.startLineNumber,
        n = e.visibleRange.endLineNumber,
        o = this._cursorLineNumbers.length;
      let s = 0;
      const r = [];
      for (let e = i; e <= n; e++) {
        const n = e - i;
        for (; s < o && this._cursorLineNumbers[s] < e;) s++;
        s < o && this._cursorLineNumbers[s] === e ? (r[n] = t) : (r[n] = "");
      }
      this._renderData = r;
    }
    render(e, t) {
      if (!this._renderData) return "";
      const i = t - e;
      return i >= this._renderData.length ? "" : this._renderData[i];
    }
  }
  class ct extends lt {
    _renderOne(e) {
      return `<div class="${"current-line" + (this._shouldRenderOther() ? " current-line-both" : "")}" style="width:${Math.max(e.scrollWidth, this._contentWidth)}px; height:${this._lineHeight}px;"></div>`;
    }
    _shouldRenderThis() {
      return (("line" === this._renderLineHighlight || "all" === this._renderLineHighlight) && this._selectionIsEmpty && (!this._renderLineHighlightOnlyWhenFocus || this._focused));
    }
    _shouldRenderOther() {
      return (("gutter" === this._renderLineHighlight || "all" === this._renderLineHighlight) && (!this._renderLineHighlightOnlyWhenFocus || this._focused));
    }
  }
  class dt extends lt {
    _renderOne(e) {
      return `<div class="${"current-line" + (this._shouldRenderMargin() ? " current-line-margin" : "") + (this._shouldRenderOther() ? " current-line-margin-both" : "")}" style="width:${this._contentLeft}px; height:${this._lineHeight}px;"></div>`;
    }
    _shouldRenderMargin() {
      return (("gutter" === this._renderLineHighlight || "all" === this._renderLineHighlight) && (!this._renderLineHighlightOnlyWhenFocus || this._focused));
    }
    _shouldRenderThis() {
      return !0;
    }
    _shouldRenderOther() {
      return (("line" === this._renderLineHighlight || "all" === this._renderLineHighlight) && this._selectionIsEmpty && (!this._renderLineHighlightOnlyWhenFocus || this._focused));
    }
  }
  (0, Pe.Ic)((e, t) => {
    at = !1;
    const i = e.getColor(Oe.Kh);
    if ((i && (t.addRule(`.monaco-editor .view-overlays .current-line { background-color: ${i}; }`), t.addRule(`.monaco-editor .margin-view-overlays .current-line-margin { background-color: ${i}; border: none; }`)), !i || i.isTransparent() || e.defines(Oe.Mm))) {
      const i = e.getColor(Oe.Mm);
      i && ((at = !0), t.addRule(`.monaco-editor .view-overlays .current-line { border: 2px solid ${i}; }`), t.addRule(`.monaco-editor .margin-view-overlays .current-line-margin { border: 2px solid ${i}; }`), "hc" === e.type && (t.addRule(".monaco-editor .view-overlays .current-line { border-width: 1px; }"), t.addRule(".monaco-editor .margin-view-overlays .current-line-margin { border-width: 1px; }")));
    }
  });
  i(74953);
  class ht extends Ae {
    constructor(e) {
      (super(), (this._context = e));
      const t = this._context.configuration.options;
      ((this._lineHeight = t.get(58)), (this._typicalHalfwidthCharacterWidth = t.get(43).typicalHalfwidthCharacterWidth), (this._renderResult = null), this._context.addEventHandler(this));
    }
    dispose() {
      (this._context.removeEventHandler(this), (this._renderResult = null), super.dispose());
    }
    onConfigurationChanged(e) {
      const t = this._context.configuration.options;
      return ((this._lineHeight = t.get(58)), (this._typicalHalfwidthCharacterWidth = t.get(43).typicalHalfwidthCharacterWidth), !0);
    }
    onDecorationsChanged(e) {
      return !0;
    }
    onFlushed(e) {
      return !0;
    }
    onLinesChanged(e) {
      return !0;
    }
    onLinesDeleted(e) {
      return !0;
    }
    onLinesInserted(e) {
      return !0;
    }
    onScrollChanged(e) {
      return e.scrollTopChanged || e.scrollWidthChanged;
    }
    onZonesChanged(e) {
      return !0;
    }
    prepareRender(e) {
      const t = e.getDecorationsInViewport();
      let i = [],
        n = 0;
      for (let e = 0, o = t.length; e < o; e++) {
        const o = t[e];
        o.options.className && (i[n++] = o);
      }
      i = i.sort((e, t) => {
        if (e.options.zIndex < t.options.zIndex) return -1;
        if (e.options.zIndex > t.options.zIndex) return 1;
        const i = e.options.className,
          n = t.options.className;
        return i < n ? -1 : i > n ? 1 : re.e.compareRangesUsingStarts(e.range, t.range);
      });
      const o = e.visibleRange.startLineNumber,
        s = e.visibleRange.endLineNumber,
        r = [];
      for (let e = o; e <= s; e++) {
        r[e - o] = "";
      }
      (this._renderWholeLineDecorations(e, i, r), this._renderNormalDecorations(e, i, r), (this._renderResult = r));
    }
    _renderWholeLineDecorations(e, t, i) {
      const n = String(this._lineHeight),
        o = e.visibleRange.startLineNumber,
        s = e.visibleRange.endLineNumber;
      for (let e = 0, r = t.length; e < r; e++) {
        const r = t[e];
        if (!r.options.isWholeLine) continue;
        const a = '<div class="cdr ' + r.options.className + '" style="left:0;width:100%;height:' + n + 'px;"></div>',
          l = Math.max(r.range.startLineNumber, o),
          c = Math.min(r.range.endLineNumber, s);
        for (let e = l; e <= c; e++) {
          i[e - o] += a;
        }
      }
    }
    _renderNormalDecorations(e, t, i) {
      const n = String(this._lineHeight),
        o = e.visibleRange.startLineNumber;
      let s = null,
        r = !1,
        a = null;
      for (let l = 0, c = t.length; l < c; l++) {
        const c = t[l];
        if (c.options.isWholeLine) continue;
        const d = c.options.className,
          h = Boolean(c.options.showIfCollapsed);
        let u = c.range;
        (h && 1 === u.endColumn && u.endLineNumber !== u.startLineNumber && (u = new re.e(u.startLineNumber, u.startColumn, u.endLineNumber - 1, this._context.model.getLineMaxColumn(u.endLineNumber - 1))), s === d && r === h && re.e.areIntersectingOrTouching(a, u) ? (a = re.e.plusRange(a, u)) : (null !== s && this._renderNormalDecoration(e, a, s, r, n, o, i), (s = d), (r = h), (a = u)));
      }
      null !== s && this._renderNormalDecoration(e, a, s, r, n, o, i);
    }
    _renderNormalDecoration(e, t, i, n, o, s, r) {
      const a = e.linesVisibleRangesForRange(t, "findMatch" === i);
      if (a) for (let e = 0, t = a.length; e < t; e++) {
        const t = a[e];
        if (t.outsideRenderedLine) continue;
        const l = t.lineNumber - s;
        if (n && 1 === t.ranges.length) {
          const e = t.ranges[0];
          0 === e.width && (t.ranges[0] = new B(e.left, this._typicalHalfwidthCharacterWidth));
        }
        for (let e = 0, n = t.ranges.length; e < n; e++) {
          const n = t.ranges[e],
            s = '<div class="cdr ' + i + '" style="left:' + String(n.left) + "px;width:" + String(n.width) + "px;height:" + o + 'px;"></div>';
          r[l] += s;
        }
      }
    }
    render(e, t) {
      if (!this._renderResult) return "";
      const i = t - e;
      return i < 0 || i >= this._renderResult.length ? "" : this._renderResult[i];
    }
  }
  var ut = i(9802),
    gt = i(73910);
  class pt extends A {
    constructor(e, t, i, n) {
      super(e);
      const o = this._context.configuration.options,
        s = o.get(91),
        r = o.get(66),
        a = o.get(34),
        l = o.get(94),
        d = {
          listenOnDomNode: i.domNode,
          className: "editor-scrollable " + (0, Pe.m6)(e.theme.type),
          useShadows: !1,
          lazyRender: !0,
          vertical: s.vertical,
          horizontal: s.horizontal,
          verticalHasArrows: s.verticalHasArrows,
          horizontalHasArrows: s.horizontalHasArrows,
          verticalScrollbarSize: s.verticalScrollbarSize,
          verticalSliderSize: s.verticalSliderSize,
          horizontalScrollbarSize: s.horizontalScrollbarSize,
          horizontalSliderSize: s.horizontalSliderSize,
          handleMouseWheel: s.handleMouseWheel,
          alwaysConsumeMouseWheel: s.alwaysConsumeMouseWheel,
          arrowSize: s.arrowSize,
          mouseWheelScrollSensitivity: r,
          fastScrollSensitivity: a,
          scrollPredominantAxis: l,
          scrollByPage: s.scrollByPage
        };
      ((this.scrollbar = this._register(new ut.$Z(t.domNode, d, this._context.viewLayout.getScrollable()))), O.write(this.scrollbar.getDomNode(), 5), (this.scrollbarDomNode = (0, _.X)(this.scrollbar.getDomNode())), this.scrollbarDomNode.setPosition("absolute"), this._setLayout());
      const h = (e, t, i) => {
        const n = {};
        if (t) {
          const t = e.scrollTop;
          t && ((n.scrollTop = this._context.viewLayout.getCurrentScrollTop() + t), (e.scrollTop = 0));
        }
        if (i) {
          const t = e.scrollLeft;
          t && ((n.scrollLeft = this._context.viewLayout.getCurrentScrollLeft() + t), (e.scrollLeft = 0));
        }
        this._context.model.setScrollPosition(n, 1);
      };
      (this._register(c.nm(i.domNode, "scroll", e => h(i.domNode, !0, !0))), this._register(c.nm(t.domNode, "scroll", e => h(t.domNode, !0, !1))), this._register(c.nm(n.domNode, "scroll", e => h(n.domNode, !0, !1))), this._register(c.nm(this.scrollbarDomNode.domNode, "scroll", e => h(this.scrollbarDomNode.domNode, !0, !1))));
    }
    dispose() {
      super.dispose();
    }
    _setLayout() {
      const e = this._context.configuration.options,
        t = e.get(129);
      this.scrollbarDomNode.setLeft(t.contentLeft);
      ("right" === e.get(64).side ? this.scrollbarDomNode.setWidth(t.contentWidth + t.minimap.minimapWidth) : this.scrollbarDomNode.setWidth(t.contentWidth), this.scrollbarDomNode.setHeight(t.height));
    }
    getOverviewRulerLayoutInfo() {
      return this.scrollbar.getOverviewRulerLayoutInfo();
    }
    getDomNode() {
      return this.scrollbarDomNode;
    }
    delegateVerticalScrollbarMouseDown(e) {
      this.scrollbar.delegateVerticalScrollbarMouseDown(e);
    }
    onConfigurationChanged(e) {
      if (e.hasChanged(91) || e.hasChanged(66) || e.hasChanged(34)) {
        const e = this._context.configuration.options,
          t = e.get(91),
          i = e.get(66),
          n = e.get(34),
          o = e.get(94),
          s = {
            vertical: t.vertical,
            horizontal: t.horizontal,
            verticalScrollbarSize: t.verticalScrollbarSize,
            horizontalScrollbarSize: t.horizontalScrollbarSize,
            scrollByPage: t.scrollByPage,
            handleMouseWheel: t.handleMouseWheel,
            mouseWheelScrollSensitivity: i,
            fastScrollSensitivity: n,
            scrollPredominantAxis: o
          };
        this.scrollbar.updateOptions(s);
      }
      return (e.hasChanged(129) && this._setLayout(), !0);
    }
    onScrollChanged(e) {
      return !0;
    }
    onThemeChanged(e) {
      return (this.scrollbar.updateClassName("editor-scrollable " + (0, Pe.m6)(this._context.theme.type)), !0);
    }
    prepareRender(e) {}
    render(e) {
      this.scrollbar.renderNow();
    }
  }
  (0, Pe.Ic)((e, t) => {
    const i = e.getColor(gt._w);
    i && t.addRule(`\n\t\t\t.monaco-scrollable-element > .shadow.top {\n\t\t\t\tbox-shadow: ${i} 0 6px 6px -6px inset;\n\t\t\t}\n\n\t\t\t.monaco-scrollable-element > .shadow.left {\n\t\t\t\tbox-shadow: ${i} 6px 0 6px -6px inset;\n\t\t\t}\n\n\t\t\t.monaco-scrollable-element > .shadow.top.left {\n\t\t\t\tbox-shadow: ${i} 6px 6px 6px -6px inset;\n\t\t\t}\n\t\t`);
    const n = e.getColor(gt.et);
    n && t.addRule(`\n\t\t\t.monaco-scrollable-element > .scrollbar > .slider {\n\t\t\t\tbackground: ${n};\n\t\t\t}\n\t\t`);
    const o = e.getColor(gt.AB);
    o && t.addRule(`\n\t\t\t.monaco-scrollable-element > .scrollbar > .slider:hover {\n\t\t\t\tbackground: ${o};\n\t\t\t}\n\t\t`);
    const s = e.getColor(gt.yn);
    s && t.addRule(`\n\t\t\t.monaco-scrollable-element > .scrollbar > .slider.active {\n\t\t\t\tbackground: ${s};\n\t\t\t}\n\t\t`);
  });
  i(15582);
  class ft {
    constructor(e, t, i) {
      ((this._decorationToRenderBrand = void 0), (this.startLineNumber = +e), (this.endLineNumber = +t), (this.className = String(i)));
    }
  }
  class mt extends Ae {
    _render(e, t, i) {
      const n = [];
      for (let i = e; i <= t; i++) {
        n[i - e] = [];
      }
      if (0 === i.length) return n;
      i.sort((e, t) => e.className === t.className ? e.startLineNumber === t.startLineNumber ? e.endLineNumber - t.endLineNumber : e.startLineNumber - t.startLineNumber : e.className < t.className ? -1 : 1);
      let o = null,
        s = 0;
      for (let r = 0, a = i.length; r < a; r++) {
        const a = i[r],
          l = a.className;
        let c = Math.max(a.startLineNumber, e) - e;
        const d = Math.min(a.endLineNumber, t) - e;
        o === l ? ((c = Math.max(s + 1, c)), (s = Math.max(s, d))) : ((o = l), (s = d));
        for (let e = c; e <= s; e++) n[e].push(o);
      }
      return n;
    }
  }
  class vt extends mt {
    constructor(e) {
      (super(), (this._context = e));
      const t = this._context.configuration.options,
        i = t.get(129);
      ((this._lineHeight = t.get(58)), (this._glyphMargin = t.get(49)), (this._glyphMarginLeft = i.glyphMarginLeft), (this._glyphMarginWidth = i.glyphMarginWidth), (this._renderResult = null), this._context.addEventHandler(this));
    }
    dispose() {
      (this._context.removeEventHandler(this), (this._renderResult = null), super.dispose());
    }
    onConfigurationChanged(e) {
      const t = this._context.configuration.options,
        i = t.get(129);
      return ((this._lineHeight = t.get(58)), (this._glyphMargin = t.get(49)), (this._glyphMarginLeft = i.glyphMarginLeft), (this._glyphMarginWidth = i.glyphMarginWidth), !0);
    }
    onDecorationsChanged(e) {
      return !0;
    }
    onFlushed(e) {
      return !0;
    }
    onLinesChanged(e) {
      return !0;
    }
    onLinesDeleted(e) {
      return !0;
    }
    onLinesInserted(e) {
      return !0;
    }
    onScrollChanged(e) {
      return e.scrollTopChanged;
    }
    onZonesChanged(e) {
      return !0;
    }
    _getDecorations(e) {
      const t = e.getDecorationsInViewport();
      let i = [],
        n = 0;
      for (let e = 0, o = t.length; e < o; e++) {
        const o = t[e],
          s = o.options.glyphMarginClassName;
        s && (i[n++] = new ft(o.range.startLineNumber, o.range.endLineNumber, s));
      }
      return i;
    }
    prepareRender(e) {
      if (!this._glyphMargin) return void (this._renderResult = null);
      const t = e.visibleRange.startLineNumber,
        i = e.visibleRange.endLineNumber,
        n = this._render(t, i, this._getDecorations(e)),
        o = this._lineHeight.toString(),
        s = '" style="left:' + this._glyphMarginLeft.toString() + "px;width:" + this._glyphMarginWidth.toString() + "px;height:" + o + 'px;"></div>',
        r = [];
      for (let e = t; e <= i; e++) {
        const i = e - t,
          o = n[i];
        0 === o.length ? (r[i] = "") : (r[i] = '<div class="cgmr codicon ' + o.join(" ") + s);
      }
      this._renderResult = r;
    }
    render(e, t) {
      if (!this._renderResult) return "";
      const i = t - e;
      return i < 0 || i >= this._renderResult.length ? "" : this._renderResult[i];
    }
  }
  i(28335);
  var _t = i(84973),
    bt = i(44174),
    wt = i(98401);
  class yt extends Ae {
    constructor(e) {
      (super(), (this._context = e), (this._primaryPosition = null));
      const t = this._context.configuration.options,
        i = t.get(130),
        n = t.get(43);
      ((this._lineHeight = t.get(58)), (this._spaceWidth = n.spaceWidth), (this._maxIndentLeft = -1 === i.wrappingColumn ? -1 : i.wrappingColumn * n.typicalHalfwidthCharacterWidth), (this._bracketPairGuideOptions = t.get(13)), (this._renderResult = null), this._context.addEventHandler(this));
    }
    dispose() {
      (this._context.removeEventHandler(this), (this._renderResult = null), super.dispose());
    }
    onConfigurationChanged(e) {
      const t = this._context.configuration.options,
        i = t.get(130),
        n = t.get(43);
      return ((this._lineHeight = t.get(58)), (this._spaceWidth = n.spaceWidth), (this._maxIndentLeft = -1 === i.wrappingColumn ? -1 : i.wrappingColumn * n.typicalHalfwidthCharacterWidth), (this._bracketPairGuideOptions = t.get(13)), !0);
    }
    onCursorStateChanged(e) {
      var t;
      const i = e.selections[0].getPosition();
      return (!(null === (t = this._primaryPosition) || void 0 === t ? void 0 : t.equals(i)) && ((this._primaryPosition = i), !0));
    }
    onDecorationsChanged(e) {
      return !0;
    }
    onFlushed(e) {
      return !0;
    }
    onLinesChanged(e) {
      return !0;
    }
    onLinesDeleted(e) {
      return !0;
    }
    onLinesInserted(e) {
      return !0;
    }
    onScrollChanged(e) {
      return e.scrollTopChanged;
    }
    onZonesChanged(e) {
      return !0;
    }
    onLanguageConfigurationChanged(e) {
      return !0;
    }
    prepareRender(e) {
      var t, i, n, o;
      if (!this._bracketPairGuideOptions.indentation && !1 === this._bracketPairGuideOptions.bracketPairs) return void (this._renderResult = null);
      const s = e.visibleRange.startLineNumber,
        r = e.visibleRange.endLineNumber,
        a = e.scrollWidth,
        l = this._lineHeight,
        c = this._primaryPosition,
        d = this.getGuidesByLine(s, r, c),
        h = [];
      for (let c = s; c <= r; c++) {
        const r = c - s,
          u = d[r];
        let g = "";
        const p = null !== (i = null === (t = e.visibleRangeForPosition(new se.L(c, 1))) || void 0 === t ? void 0 : t.left) && void 0 !== i ? i : 0;
        for (const t of u) {
          const i = p + (t.visibleColumn - 1) * this._spaceWidth;
          if (i > a || (this._maxIndentLeft > 0 && i > this._maxIndentLeft)) break;
          const s = t.horizontalLine ? t.horizontalLine.top ? "horizontal-top" : "horizontal-bottom" : "vertical",
            r = t.horizontalLine ? (null !== (o = null === (n = e.visibleRangeForPosition(new se.L(c, t.horizontalLine.endColumn))) || void 0 === n ? void 0 : n.left) && void 0 !== o ? o : i + this._spaceWidth) - i : this._spaceWidth;
          g += `<div class="core-guide ${t.className} ${s}" style="left:${i}px;height:${l}px;width:${r}px"></div>`;
        }
        h[r] = g;
      }
      this._renderResult = h;
    }
    getGuidesByLine(e, t, i) {
      const n = !1 !== this._bracketPairGuideOptions.bracketPairs ? this._context.model.getBracketGuidesInRangeByLine(e, t, i, {
          highlightActive: this._bracketPairGuideOptions.highlightActiveBracketPair,
          horizontalGuides: !0 === this._bracketPairGuideOptions.bracketPairsHorizontal ? _t.s6.Enabled : "active" === this._bracketPairGuideOptions.bracketPairsHorizontal ? _t.s6.EnabledForActive : _t.s6.Disabled,
          includeInactive: !0 === this._bracketPairGuideOptions.bracketPairs
        }) : null,
        o = this._bracketPairGuideOptions.indentation ? this._context.model.getLinesIndentGuides(e, t) : null;
      let s = 0,
        r = 0,
        a = 0;
      if (this._bracketPairGuideOptions.highlightActiveIndentation && i) {
        const n = this._context.model.getActiveIndentGuide(i.lineNumber, e, t);
        ((s = n.startLineNumber), (r = n.endLineNumber), (a = n.indent));
      }
      const {
          indentSize: l
        } = this._context.model.getTextModelOptions(),
        c = [];
      for (let i = e; i <= t; i++) {
        const t = new Array();
        c.push(t);
        const d = n ? n[i - e] : [],
          h = new rt.H9(d),
          u = o ? o[i - e] : [];
        for (let e = 1; e <= u; e++) {
          const n = (e - 1) * l + 1,
            o = 0 === d.length && s <= i && i <= r && e === a;
          t.push(...(h.takeWhile(e => e.visibleColumn < n) || []));
          const c = h.peek();
          (c && c.visibleColumn === n && !c.horizontalLine) || t.push(new _t.UO(n, o ? "core-guide-indent-active" : "core-guide-indent", null));
        }
        t.push(...(h.takeWhile(e => !0) || []));
      }
      return c;
    }
    render(e, t) {
      if (!this._renderResult) return "";
      const i = t - e;
      return i < 0 || i >= this._renderResult.length ? "" : this._renderResult[i];
    }
  }
  function Ct(e) {
    if (!e || !e.isTransparent()) return e;
  }
  (0, Pe.Ic)((e, t) => {
    const i = e.getColor(Oe.tR);
    i && t.addRule(`.monaco-editor .lines-content .core-guide-indent { box-shadow: 1px 0 0 0 ${i} inset; }`);
    const n = e.getColor(Oe.Ym) || i;
    n && t.addRule(`.monaco-editor .lines-content .core-guide-indent-active { box-shadow: 1px 0 0 0 ${n} inset; }`);
    const o = [{
        bracketColor: Oe.zJ,
        guideColor: Oe.oV,
        guideColorActive: Oe.Qb
      }, {
        bracketColor: Oe.Vs,
        guideColor: Oe.m$,
        guideColorActive: Oe.m3
      }, {
        bracketColor: Oe.CE,
        guideColor: Oe.DS,
        guideColorActive: Oe.To
      }, {
        bracketColor: Oe.UP,
        guideColor: Oe.lS,
        guideColorActive: Oe.L7
      }, {
        bracketColor: Oe.r0,
        guideColor: Oe.Jn,
        guideColorActive: Oe.HV
      }, {
        bracketColor: Oe.m1,
        guideColor: Oe.YF,
        guideColorActive: Oe.f9
      }],
      s = new bt.WE();
    let r = o.map(t => {
      var i, n;
      const o = e.getColor(t.bracketColor),
        s = e.getColor(t.guideColor),
        r = e.getColor(t.guideColorActive),
        a = Ct(null !== (i = Ct(s)) && void 0 !== i ? i : null == o ? void 0 : o.transparent(0.3)),
        l = Ct(null !== (n = Ct(r)) && void 0 !== n ? n : o);
      if (a && l) return {
        guideColor: a,
        guideColorActive: l
      };
    }).filter(wt.$K);
    if (r.length > 0) {
      for (let e = 0; e < 30; e++) {
        const i = r[e % r.length];
        t.addRule(`.monaco-editor .${s.getInlineClassNameOfLevel(e).replace(/ /g, ".")} { --guide-color: ${i.guideColor}; --guide-color-active: ${i.guideColorActive}; }`);
      }
      (t.addRule(".monaco-editor .vertical { box-shadow: 1px 0 0 0 var(--guide-color) inset; }"), t.addRule(".monaco-editor .horizontal-top { border-top: 1px solid var(--guide-color); }"), t.addRule(".monaco-editor .horizontal-bottom { border-bottom: 1px solid var(--guide-color); }"), t.addRule(`.monaco-editor .vertical.${s.activeClassName} { box-shadow: 1px 0 0 0 var(--guide-color-active) inset; }`), t.addRule(`.monaco-editor .horizontal-top.${s.activeClassName} { border-top: 1px solid var(--guide-color-active); }`), t.addRule(`.monaco-editor .horizontal-bottom.${s.activeClassName} { border-bottom: 1px solid var(--guide-color-active); }`));
    }
  });
  i(20357);
  class xt {
    constructor() {
      this._currentVisibleRange = new re.e(1, 1, 1, 1);
    }
    getCurrentVisibleRange() {
      return this._currentVisibleRange;
    }
    setCurrentVisibleRange(e) {
      this._currentVisibleRange = e;
    }
  }
  class St {
    constructor(e, t, i, n, o, s) {
      ((this.lineNumber = e), (this.startColumn = t), (this.endColumn = i), (this.startScrollTop = n), (this.stopScrollTop = o), (this.scrollType = s), (this.type = "range"), (this.minLineNumber = e), (this.maxLineNumber = e));
    }
  }
  class kt {
    constructor(e, t, i, n) {
      ((this.selections = e), (this.startScrollTop = t), (this.stopScrollTop = i), (this.scrollType = n), (this.type = "selections"));
      let o = e[0].startLineNumber,
        s = e[0].endLineNumber;
      for (let t = 1, i = e.length; t < i; t++) {
        const i = e[t];
        ((o = Math.min(o, i.startLineNumber)), (s = Math.max(s, i.endLineNumber)));
      }
      ((this.minLineNumber = o), (this.maxLineNumber = s));
    }
  }
  class Lt extends A {
    constructor(e, t) {
      (super(e), (this._linesContent = t), (this._textRangeRestingSpot = document.createElement("div")), (this._visibleLines = new Ye(this)), (this.domNode = this._visibleLines.domNode));
      const i = this._context.configuration,
        n = this._context.configuration.options,
        o = n.get(43),
        s = n.get(130);
      ((this._lineHeight = n.get(58)), (this._typicalHalfwidthCharacterWidth = o.typicalHalfwidthCharacterWidth), (this._isViewportWrapping = s.isViewportWrapping), (this._revealHorizontalRightPadding = n.get(88)), (this._cursorSurroundingLines = n.get(25)), (this._cursorSurroundingLinesStyle = n.get(26)), (this._canUseLayerHinting = !n.get(28)), (this._viewLineOptions = new Y(i, this._context.theme.type)), O.write(this.domNode, 7), this.domNode.setClassName(`view-lines ${Ve.S}`), p.V.applyFontInfo(this.domNode, o), (this._maxLineWidth = 0), (this._asyncUpdateLineWidths = new C.pY(() => {
        this._updateLineWidthsSlow();
      }, 200)), (this._asyncCheckMonospaceFontAssumptions = new C.pY(() => {
        this._checkMonospaceFontAssumptions();
      }, 2e3)), (this._lastRenderedData = new xt()), (this._horizontalRevealRequest = null));
    }
    dispose() {
      (this._asyncUpdateLineWidths.dispose(), this._asyncCheckMonospaceFontAssumptions.dispose(), super.dispose());
    }
    getDomNode() {
      return this.domNode;
    }
    createVisibleLine() {
      return new Q(this._viewLineOptions);
    }
    onConfigurationChanged(e) {
      (this._visibleLines.onConfigurationChanged(e), e.hasChanged(130) && (this._maxLineWidth = 0));
      const t = this._context.configuration.options,
        i = t.get(43),
        n = t.get(130);
      return ((this._lineHeight = t.get(58)), (this._typicalHalfwidthCharacterWidth = i.typicalHalfwidthCharacterWidth), (this._isViewportWrapping = n.isViewportWrapping), (this._revealHorizontalRightPadding = t.get(88)), (this._cursorSurroundingLines = t.get(25)), (this._cursorSurroundingLinesStyle = t.get(26)), (this._canUseLayerHinting = !t.get(28)), p.V.applyFontInfo(this.domNode, i), this._onOptionsMaybeChanged(), e.hasChanged(129) && (this._maxLineWidth = 0), !0);
    }
    _onOptionsMaybeChanged() {
      const e = this._context.configuration,
        t = new Y(e, this._context.theme.type);
      if (!this._viewLineOptions.equals(t)) {
        this._viewLineOptions = t;
        const e = this._visibleLines.getStartLineNumber(),
          i = this._visibleLines.getEndLineNumber();
        for (let t = e; t <= i; t++) {
          this._visibleLines.getVisibleLine(t).onOptionsChanged(this._viewLineOptions);
        }
        return !0;
      }
      return !1;
    }
    onCursorStateChanged(e) {
      const t = this._visibleLines.getStartLineNumber(),
        i = this._visibleLines.getEndLineNumber();
      let n = !1;
      for (let e = t; e <= i; e++) n = this._visibleLines.getVisibleLine(e).onSelectionChanged() || n;
      return n;
    }
    onDecorationsChanged(e) {
      {
        const e = this._visibleLines.getStartLineNumber(),
          t = this._visibleLines.getEndLineNumber();
        for (let i = e; i <= t; i++) this._visibleLines.getVisibleLine(i).onDecorationsChanged();
      }
      return !0;
    }
    onFlushed(e) {
      const t = this._visibleLines.onFlushed(e);
      return ((this._maxLineWidth = 0), t);
    }
    onLinesChanged(e) {
      return this._visibleLines.onLinesChanged(e);
    }
    onLinesDeleted(e) {
      return this._visibleLines.onLinesDeleted(e);
    }
    onLinesInserted(e) {
      return this._visibleLines.onLinesInserted(e);
    }
    onRevealRangeRequest(e) {
      const t = this._computeScrollTopToRevealRange(this._context.viewLayout.getFutureViewport(), e.source, e.range, e.selections, e.verticalType);
      if (-1 === t) return !1;
      let i = this._context.viewLayout.validateScrollPosition({
        scrollTop: t
      });
      e.revealHorizontal ? e.range && e.range.startLineNumber !== e.range.endLineNumber ? (i = {
        scrollTop: i.scrollTop,
        scrollLeft: 0
      }) : e.range ? (this._horizontalRevealRequest = new St(e.range.startLineNumber, e.range.startColumn, e.range.endColumn, this._context.viewLayout.getCurrentScrollTop(), i.scrollTop, e.scrollType)) : e.selections && e.selections.length > 0 && (this._horizontalRevealRequest = new kt(e.selections, this._context.viewLayout.getCurrentScrollTop(), i.scrollTop, e.scrollType)) : (this._horizontalRevealRequest = null);
      const n = Math.abs(this._context.viewLayout.getCurrentScrollTop() - i.scrollTop) <= this._lineHeight ? 1 : e.scrollType;
      return (this._context.model.setScrollPosition(i, n), !0);
    }
    onScrollChanged(e) {
      if ((this._horizontalRevealRequest && e.scrollLeftChanged && (this._horizontalRevealRequest = null), this._horizontalRevealRequest && e.scrollTopChanged)) {
        const t = Math.min(this._horizontalRevealRequest.startScrollTop, this._horizontalRevealRequest.stopScrollTop),
          i = Math.max(this._horizontalRevealRequest.startScrollTop, this._horizontalRevealRequest.stopScrollTop);
        (e.scrollTop < t || e.scrollTop > i) && (this._horizontalRevealRequest = null);
      }
      return (this.domNode.setWidth(e.scrollWidth), this._visibleLines.onScrollChanged(e) || !0);
    }
    onTokensChanged(e) {
      return this._visibleLines.onTokensChanged(e);
    }
    onZonesChanged(e) {
      return (this._context.model.setMaxLineWidth(this._maxLineWidth), this._visibleLines.onZonesChanged(e));
    }
    onThemeChanged(e) {
      return this._onOptionsMaybeChanged();
    }
    getPositionFromDOMInfo(e, t) {
      const i = this._getViewLineDomNode(e);
      if (null === i) return null;
      const n = this._getLineNumberFor(i);
      if (-1 === n) return null;
      if (n < 1 || n > this._context.model.getLineCount()) return null;
      if (1 === this._context.model.getLineMaxColumn(n)) return new se.L(n, 1);
      const o = this._visibleLines.getStartLineNumber(),
        s = this._visibleLines.getEndLineNumber();
      if (n < o || n > s) return null;
      let r = this._visibleLines.getVisibleLine(n).getColumnOfNodeOffset(n, e, t);
      const a = this._context.model.getLineMinColumn(n);
      return (r < a && (r = a), new se.L(n, r));
    }
    _getViewLineDomNode(e) {
      for (; e && 1 === e.nodeType;) {
        if (e.className === Q.CLASS_NAME) return e;
        e = e.parentElement;
      }
      return null;
    }
    _getLineNumberFor(e) {
      const t = this._visibleLines.getStartLineNumber(),
        i = this._visibleLines.getEndLineNumber();
      for (let n = t; n <= i; n++) {
        if (e === this._visibleLines.getVisibleLine(n).getDomNode()) return n;
      }
      return -1;
    }
    getLineWidth(e) {
      const t = this._visibleLines.getStartLineNumber(),
        i = this._visibleLines.getEndLineNumber();
      return e < t || e > i ? -1 : this._visibleLines.getVisibleLine(e).getWidth();
    }
    linesVisibleRangesForRange(e, t) {
      if (this.shouldRender()) return null;
      const i = e.endLineNumber,
        n = re.e.intersectRanges(e, this._lastRenderedData.getCurrentVisibleRange());
      if (!n) return null;
      let o = [],
        s = 0;
      const r = new G(this.domNode.domNode, this._textRangeRestingSpot);
      let a = 0;
      t && (a = this._context.model.coordinatesConverter.convertViewPositionToModelPosition(new se.L(n.startLineNumber, 1)).lineNumber);
      const l = this._visibleLines.getStartLineNumber(),
        c = this._visibleLines.getEndLineNumber();
      for (let e = n.startLineNumber; e <= n.endLineNumber; e++) {
        if (e < l || e > c) continue;
        const d = e === n.startLineNumber ? n.startColumn : 1,
          h = e === n.endLineNumber ? n.endColumn : this._context.model.getLineMaxColumn(e),
          u = this._visibleLines.getVisibleLine(e).getVisibleRangesForRange(e, d, h, r);
        if (u) {
          if (t && e < i) {
            const t = a;
            ((a = this._context.model.coordinatesConverter.convertViewPositionToModelPosition(new se.L(e + 1, 1)).lineNumber), t !== a && (u.ranges[u.ranges.length - 1].width += this._typicalHalfwidthCharacterWidth));
          }
          o[s++] = new F(u.outsideRenderedLine, e, B.from(u.ranges));
        }
      }
      return 0 === s ? null : o;
    }
    _visibleRangesForLineRange(e, t, i) {
      return this.shouldRender() || e < this._visibleLines.getStartLineNumber() || e > this._visibleLines.getEndLineNumber() ? null : this._visibleLines.getVisibleLine(e).getVisibleRangesForRange(e, t, i, new G(this.domNode.domNode, this._textRangeRestingSpot));
    }
    visibleRangeForPosition(e) {
      const t = this._visibleRangesForLineRange(e.lineNumber, e.column, e.column);
      return t ? new W(t.outsideRenderedLine, t.ranges[0].left) : null;
    }
    updateLineWidths() {
      this._updateLineWidths(!1);
    }
    _updateLineWidthsFast() {
      return this._updateLineWidths(!0);
    }
    _updateLineWidthsSlow() {
      this._updateLineWidths(!1);
    }
    _updateLineWidths(e) {
      const t = this._visibleLines.getStartLineNumber(),
        i = this._visibleLines.getEndLineNumber();
      let n = 1,
        o = !0;
      for (let s = t; s <= i; s++) {
        const t = this._visibleLines.getVisibleLine(s);
        !e || t.getWidthIsFast() ? (n = Math.max(n, t.getWidth())) : (o = !1);
      }
      return (o && 1 === t && i === this._context.model.getLineCount() && (this._maxLineWidth = 0), this._ensureMaxLineWidth(n), o);
    }
    _checkMonospaceFontAssumptions() {
      let e = -1,
        t = -1;
      const i = this._visibleLines.getStartLineNumber(),
        n = this._visibleLines.getEndLineNumber();
      for (let o = i; o <= n; o++) {
        const i = this._visibleLines.getVisibleLine(o);
        if (i.needsMonospaceFontCheck()) {
          const n = i.getWidth();
          n > t && ((t = n), (e = o));
        }
      }
      if (-1 !== e && !this._visibleLines.getVisibleLine(e).monospaceAssumptionsAreValid()) for (let e = i; e <= n; e++) {
        this._visibleLines.getVisibleLine(e).onMonospaceAssumptionsInvalidated();
      }
    }
    prepareRender() {
      throw new Error("Not supported");
    }
    render() {
      throw new Error("Not supported");
    }
    renderText(e) {
      if ((this._visibleLines.renderLines(e), this._lastRenderedData.setCurrentVisibleRange(e.visibleRange), this.domNode.setWidth(this._context.viewLayout.getScrollWidth()), this.domNode.setHeight(Math.min(this._context.viewLayout.getScrollHeight(), 1e6)), this._horizontalRevealRequest)) {
        const t = this._horizontalRevealRequest;
        if (e.startLineNumber <= t.minLineNumber && t.maxLineNumber <= e.endLineNumber) {
          ((this._horizontalRevealRequest = null), this.onDidRender());
          const e = this._computeScrollLeftToReveal(t);
          e && (this._isViewportWrapping || this._ensureMaxLineWidth(e.maxHorizontalOffset), this._context.model.setScrollPosition({
            scrollLeft: e.scrollLeft
          }, t.scrollType));
        }
      }
      if ((this._updateLineWidthsFast() || this._asyncUpdateLineWidths.schedule(), b.IJ && !this._asyncCheckMonospaceFontAssumptions.isScheduled())) {
        const e = this._visibleLines.getStartLineNumber(),
          t = this._visibleLines.getEndLineNumber();
        for (let i = e; i <= t; i++) {
          if (this._visibleLines.getVisibleLine(i).needsMonospaceFontCheck()) {
            this._asyncCheckMonospaceFontAssumptions.schedule();
            break;
          }
        }
      }
      (this._linesContent.setLayerHinting(this._canUseLayerHinting), this._linesContent.setContain("strict"));
      const t = this._context.viewLayout.getCurrentScrollTop() - e.bigNumbersDelta;
      (this._linesContent.setTop(-t), this._linesContent.setLeft(-this._context.viewLayout.getCurrentScrollLeft()));
    }
    _ensureMaxLineWidth(e) {
      const t = Math.ceil(e);
      this._maxLineWidth < t && ((this._maxLineWidth = t), this._context.model.setMaxLineWidth(this._maxLineWidth));
    }
    _computeScrollTopToRevealRange(e, t, i, n, o) {
      const s = e.top,
        r = e.height,
        a = s + r;
      let l, c, d;
      if (n && n.length > 0) {
        let e = n[0].startLineNumber,
          t = n[0].endLineNumber;
        for (let i = 1, o = n.length; i < o; i++) {
          const o = n[i];
          ((e = Math.min(e, o.startLineNumber)), (t = Math.max(t, o.endLineNumber)));
        }
        ((l = !1), (c = this._context.viewLayout.getVerticalOffsetForLineNumber(e)), (d = this._context.viewLayout.getVerticalOffsetForLineNumber(t) + this._lineHeight));
      } else {
        if (!i) return -1;
        ((l = !0), (c = this._context.viewLayout.getVerticalOffsetForLineNumber(i.startLineNumber)), (d = this._context.viewLayout.getVerticalOffsetForLineNumber(i.endLineNumber) + this._lineHeight));
      }
      if (!("mouse" === t && "default" === this._cursorSurroundingLinesStyle)) {
        const e = Math.min(r / this._lineHeight / 2, this._cursorSurroundingLines);
        ((c -= e * this._lineHeight), (d += Math.max(0, e - 1) * this._lineHeight));
      }
      let h;
      if (((0 !== o && 4 !== o) || (d += this._lineHeight), d - c > r)) {
        if (!l) return -1;
        h = c;
      } else if (5 === o || 6 === o) {
        if (6 === o && s <= c && d <= a) h = s;else {
          const e = c - Math.max(5 * this._lineHeight, 0.2 * r),
            t = d - r;
          h = Math.max(t, e);
        }
      } else if (1 === o || 2 === o) {
        if (2 === o && s <= c && d <= a) h = s;else {
          const e = (c + d) / 2;
          h = Math.max(0, e - r / 2);
        }
      } else h = this._computeMinimumScrolling(s, a, c, d, 3 === o, 4 === o);
      return h;
    }
    _computeScrollLeftToReveal(e) {
      const t = this._context.viewLayout.getCurrentViewport(),
        i = t.left,
        n = i + t.width;
      let o = 1073741824,
        s = 0;
      if ("range" === e.type) {
        const t = this._visibleRangesForLineRange(e.lineNumber, e.startColumn, e.endColumn);
        if (!t) return null;
        for (const e of t.ranges) ((o = Math.min(o, Math.round(e.left))), (s = Math.max(s, Math.round(e.left + e.width))));
      } else for (const t of e.selections) {
        if (t.startLineNumber !== t.endLineNumber) return null;
        const e = this._visibleRangesForLineRange(t.startLineNumber, t.startColumn, t.endColumn);
        if (!e) return null;
        for (const t of e.ranges) ((o = Math.min(o, Math.round(t.left))), (s = Math.max(s, Math.round(t.left + t.width))));
      }
      if (((o = Math.max(0, o - Lt.HORIZONTAL_EXTRA_PX)), (s += this._revealHorizontalRightPadding), "selections" === e.type && s - o > t.width)) return null;
      return {
        scrollLeft: this._computeMinimumScrolling(i, n, o, s),
        maxHorizontalOffset: s
      };
    }
    _computeMinimumScrolling(e, t, i, n, o, s) {
      ((o = !!o), (s = !!s));
      const r = (t |= 0) - (e |= 0);
      return (n |= 0) - (i |= 0) < r ? o ? i : s ? Math.max(0, n - r) : i < e ? i : n > t ? Math.max(0, n - r) : e : i;
    }
  }
  Lt.HORIZONTAL_EXTRA_PX = 30;
  i(84160);
  class Nt extends mt {
    constructor(e) {
      (super(), (this._context = e));
      const t = this._context.configuration.options.get(129);
      ((this._decorationsLeft = t.decorationsLeft), (this._decorationsWidth = t.decorationsWidth), (this._renderResult = null), this._context.addEventHandler(this));
    }
    dispose() {
      (this._context.removeEventHandler(this), (this._renderResult = null), super.dispose());
    }
    onConfigurationChanged(e) {
      const t = this._context.configuration.options.get(129);
      return ((this._decorationsLeft = t.decorationsLeft), (this._decorationsWidth = t.decorationsWidth), !0);
    }
    onDecorationsChanged(e) {
      return !0;
    }
    onFlushed(e) {
      return !0;
    }
    onLinesChanged(e) {
      return !0;
    }
    onLinesDeleted(e) {
      return !0;
    }
    onLinesInserted(e) {
      return !0;
    }
    onScrollChanged(e) {
      return e.scrollTopChanged;
    }
    onZonesChanged(e) {
      return !0;
    }
    _getDecorations(e) {
      const t = e.getDecorationsInViewport();
      let i = [],
        n = 0;
      for (let e = 0, o = t.length; e < o; e++) {
        const o = t[e],
          s = o.options.linesDecorationsClassName;
        s && (i[n++] = new ft(o.range.startLineNumber, o.range.endLineNumber, s));
        const r = o.options.firstLineDecorationClassName;
        r && (i[n++] = new ft(o.range.startLineNumber, o.range.startLineNumber, r));
      }
      return i;
    }
    prepareRender(e) {
      const t = e.visibleRange.startLineNumber,
        i = e.visibleRange.endLineNumber,
        n = this._render(t, i, this._getDecorations(e)),
        o = '" style="left:' + this._decorationsLeft.toString() + "px;width:" + this._decorationsWidth.toString() + 'px;"></div>',
        s = [];
      for (let e = t; e <= i; e++) {
        const i = e - t,
          r = n[i];
        let a = "";
        for (let e = 0, t = r.length; e < t; e++) a += '<div class="cldr ' + r[e] + o;
        s[i] = a;
      }
      this._renderResult = s;
    }
    render(e, t) {
      return this._renderResult ? this._renderResult[t - e] : "";
    }
  }
  i(76206);
  class Dt extends mt {
    constructor(e) {
      (super(), (this._context = e), (this._renderResult = null), this._context.addEventHandler(this));
    }
    dispose() {
      (this._context.removeEventHandler(this), (this._renderResult = null), super.dispose());
    }
    onConfigurationChanged(e) {
      return !0;
    }
    onDecorationsChanged(e) {
      return !0;
    }
    onFlushed(e) {
      return !0;
    }
    onLinesChanged(e) {
      return !0;
    }
    onLinesDeleted(e) {
      return !0;
    }
    onLinesInserted(e) {
      return !0;
    }
    onScrollChanged(e) {
      return e.scrollTopChanged;
    }
    onZonesChanged(e) {
      return !0;
    }
    _getDecorations(e) {
      const t = e.getDecorationsInViewport();
      let i = [],
        n = 0;
      for (let e = 0, o = t.length; e < o; e++) {
        const o = t[e],
          s = o.options.marginClassName;
        s && (i[n++] = new ft(o.range.startLineNumber, o.range.endLineNumber, s));
      }
      return i;
    }
    prepareRender(e) {
      const t = e.visibleRange.startLineNumber,
        i = e.visibleRange.endLineNumber,
        n = this._render(t, i, this._getDecorations(e)),
        o = [];
      for (let e = t; e <= i; e++) {
        const i = e - t,
          s = n[i];
        let r = "";
        for (let e = 0, t = s.length; e < t; e++) r += '<div class="cmdr ' + s[e] + '" style=""></div>';
        o[i] = r;
      }
      this._renderResult = o;
    }
    render(e, t) {
      return this._renderResult ? this._renderResult[t - e] : "";
    }
  }
  i(55229);
  class It {
    constructor(e, t, i, n) {
      ((this._rgba8Brand = void 0), (this.r = It._clamp(e)), (this.g = It._clamp(t)), (this.b = It._clamp(i)), (this.a = It._clamp(n)));
    }
    equals(e) {
      return (this.r === e.r && this.g === e.g && this.b === e.b && this.a === e.a);
    }
    static _clamp(e) {
      return e < 0 ? 0 : e > 255 ? 255 : 0 | e;
    }
  }
  It.Empty = new It(0, 0, 0, 0);
  var Et = i(44101);
  class Tt extends u.JT {
    constructor() {
      (super(), (this._onDidChange = new h.Q5()), (this.onDidChange = this._onDidChange.event), this._updateColorMap(), this._register(Et.RW.onDidChange(e => {
        e.changedColorMap && this._updateColorMap();
      })));
    }
    static getInstance() {
      return (this._INSTANCE || (this._INSTANCE = (0, u.dk)(new Tt())), this._INSTANCE);
    }
    _updateColorMap() {
      const e = Et.RW.getColorMap();
      if (!e) return ((this._colors = [It.Empty]), void (this._backgroundIsLight = !0));
      this._colors = [It.Empty];
      for (let t = 1; t < e.length; t++) {
        const i = e[t].rgba;
        this._colors[t] = new It(i.r, i.g, i.b, Math.round(255 * i.a));
      }
      let t = e[2].getRelativeLuminance();
      ((this._backgroundIsLight = t >= 0.5), this._onDidChange.fire(void 0));
    }
    getColor(e) {
      return ((e < 1 || e >= this._colors.length) && (e = 2), this._colors[e]);
    }
    backgroundIsLight() {
      return this._backgroundIsLight;
    }
  }
  Tt._INSTANCE = null;
  var Mt = i(13824);
  const At = (() => {
    const e = [];
    for (let t = 32; t <= 126; t++) e.push(t);
    return (e.push(65533), e);
  })();
  var Ot = i(85427);
  class Pt {
    constructor(e, t) {
      ((this.scale = t), (this._minimapCharRendererBrand = void 0), (this.charDataNormal = Pt.soften(e, 0.8)), (this.charDataLight = Pt.soften(e, 50 / 60)));
    }
    static soften(e, t) {
      let i = new Uint8ClampedArray(e.length);
      for (let n = 0, o = e.length; n < o; n++) i[n] = (0, Ot.K)(e[n] * t);
      return i;
    }
    renderChar(e, t, i, n, o, s, r, a, l, c, d) {
      const h = 1 * this.scale,
        u = 2 * this.scale,
        g = d ? 1 : u;
      if (t + h > e.width || i + g > e.height) return void console.warn("bad render request outside image data");
      const p = c ? this.charDataLight : this.charDataNormal,
        f = ((e, t) => (e -= 32) < 0 || e > 96 ? (t <= 2 ? (e + 96) % 96 : 95) : e)(n, l),
        m = 4 * e.width,
        v = r.r,
        _ = r.g,
        b = r.b,
        w = o.r - v,
        y = o.g - _,
        C = o.b - b,
        x = Math.max(s, a),
        S = e.data;
      let k = f * h * u,
        L = i * m + 4 * t;
      for (let e = 0; e < g; e++) {
        let e = L;
        for (let t = 0; t < h; t++) {
          const t = (p[k++] / 255) * (s / 255);
          ((S[e++] = v + w * t), (S[e++] = _ + y * t), (S[e++] = b + C * t), (S[e++] = x));
        }
        L += m;
      }
    }
    blockRenderChar(e, t, i, n, o, s, r, a) {
      const l = 1 * this.scale,
        c = 2 * this.scale,
        d = a ? 1 : c;
      if (t + l > e.width || i + d > e.height) return void console.warn("bad render request outside image data");
      const h = 4 * e.width,
        u = (o / 255) * 0.5,
        g = s.r,
        p = s.g,
        f = s.b,
        m = g + (n.r - g) * u,
        v = p + (n.g - p) * u,
        _ = f + (n.b - f) * u,
        b = Math.max(o, r),
        w = e.data;
      let y = i * h + 4 * t;
      for (let e = 0; e < d; e++) {
        let e = y;
        for (let t = 0; t < l; t++) ((w[e++] = m), (w[e++] = v), (w[e++] = _), (w[e++] = b));
        y += h;
      }
    }
  }
  var Rt = i(88289);
  const Ft = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15
    },
    Bt = e => {
      const t = new Uint8ClampedArray(e.length / 2);
      for (let i = 0; i < e.length; i += 2) t[i >> 1] = (Ft[e[i]] << 4) | (15 & Ft[e[i + 1]]);
      return t;
    },
    Vt = {
      1: (0, Rt.I)(() => Bt("0000511D6300CF609C709645A78432005642574171487021003C451900274D35D762755E8B629C5BA856AF57BA649530C167D1512A272A3F6038604460398526BCA2A968DB6F8957C768BE5FBE2FB467CF5D8D5B795DC7625B5DFF50DE64C466DB2FC47CD860A65E9A2EB96CB54CE06DA763AB2EA26860524D3763536601005116008177A8705E53AB738E6A982F88BAA35B5F5B626D9C636B449B737E5B7B678598869A662F6B5B8542706C704C80736A607578685B70594A49715A4522E792")),
      2: (0, Rt.I)(() => Bt("000000000000000055394F383D2800008B8B1F210002000081B1CBCBCC820000847AAF6B9AAF2119BE08B8881AD60000A44FD07DCCF107015338130C00000000385972265F390B406E2437634B4B48031B12B8A0847000001E15B29A402F0000000000004B33460B00007A752C2A0000000000004D3900000084394B82013400ABA5CFC7AD9C0302A45A3E5A98AB000089A43382D97900008BA54AA087A70A0248A6A7AE6DBE0000BF6F94987EA40A01A06DCFA7A7A9030496C32F77891D0000A99FB1A0AFA80603B29AB9CA75930D010C0948354D3900000C0948354F37460D0028BE673D8400000000AF9D7B6E00002B007AA8933400007AA642675C2700007984CFB9C3985B768772A8A6B7B20000CAAECAAFC4B700009F94A6009F840009D09F9BA4CA9C0000CC8FC76DC87F0000C991C472A2000000A894A48CA7B501079BA2C9C69BA20000B19A5D3FA89000005CA6009DA2960901B0A7F0669FB200009D009E00B7890000DAD0F5D092820000D294D4C48BD10000B5A7A4A3B1A50402CAB6CBA6A2000000B5A7A4A3B1A8044FCDADD19D9CB00000B7778F7B8AAE0803C9AB5D3F5D3F00009EA09EA0BAB006039EA0989A8C7900009B9EF4D6B7C00000A9A7816CACA80000ABAC84705D3F000096DA635CDC8C00006F486F266F263D4784006124097B00374F6D2D6D2D6D4A3A95872322000000030000000000008D8939130000000000002E22A5C9CBC70600AB25C0B5C9B400061A2DB04CA67001082AA6BEBEBFC606002321DACBC19E03087AA08B6768380000282FBAC0B8CA7A88AD25BBA5A29900004C396C5894A6000040485A6E356E9442A32CD17EADA70000B4237923628600003E2DE9C1D7B500002F25BBA5A2990000231DB6AFB4A804023025C0B5CAB588062B2CBDBEC0C706882435A75CA20000002326BD6A82A908048B4B9A5A668000002423A09CB4BB060025259C9D8A7900001C1FCAB2C7C700002A2A9387ABA200002626A4A47D6E9D14333163A0C87500004B6F9C2D643A257049364936493647358A34438355497F1A0000A24C1D590000D38DFFBDD4CD3126"))
    };
  class Wt {
    static create(e, t) {
      if (this.lastCreated && e === this.lastCreated.scale && t === this.lastFontFamily) return this.lastCreated;
      let i;
      return ((i = Vt[e] ? new Pt(Vt[e](), e) : Wt.createFromSampleData(Wt.createSampleData(t).data, e)), (this.lastFontFamily = t), (this.lastCreated = i), i);
    }
    static createSampleData(e) {
      const t = document.createElement("canvas"),
        i = t.getContext("2d");
      ((t.style.height = "16px"), (t.height = 16), (t.width = 960), (t.style.width = "960px"), (i.fillStyle = "#ffffff"), (i.font = `bold 16px ${e}`), (i.textBaseline = "middle"));
      let n = 0;
      for (const e of At) (i.fillText(String.fromCharCode(e), n, 8), (n += 10));
      return i.getImageData(0, 0, 960, 16);
    }
    static createFromSampleData(e, t) {
      if (61440 !== e.length) throw new Error("Unexpected source in MinimapCharRenderer");
      let i = Wt._downsample(e, t);
      return new Pt(i, t);
    }
    static _downsampleChar(e, t, i, n, o) {
      const s = 1 * o,
        r = 2 * o;
      let a = n,
        l = 0;
      for (let n = 0; n < r; n++) {
        const o = (n / r) * 16,
          c = ((n + 1) / r) * 16;
        for (let n = 0; n < s; n++) {
          const r = (n / s) * 10,
            d = ((n + 1) / s) * 10;
          let h = 0,
            u = 0;
          for (let i = o; i < c; i++) {
            const n = t + 3840 * Math.floor(i),
              o = 1 - (i - Math.floor(i));
            for (let t = r; t < d; t++) {
              const i = 1 - (t - Math.floor(t)),
                s = n + 4 * Math.floor(t),
                r = i * o;
              ((u += r), (h += ((e[s] * e[s + 3]) / 255) * r));
            }
          }
          const g = h / u;
          ((l = Math.max(l, g)), (i[a++] = (0, Ot.K)(g)));
        }
      }
      return l;
    }
    static _downsample(e, t) {
      const i = 2 * t * 1 * t,
        n = 96 * i,
        o = new Uint8ClampedArray(n);
      let s = 0,
        r = 0,
        a = 0;
      for (let n = 0; n < 96; n++) ((a = Math.max(a, this._downsampleChar(e, r, o, s, t))), (s += i), (r += 40));
      if (a > 0) {
        const e = 255 / a;
        for (let t = 0; t < n; t++) o[t] *= e;
      }
      return o;
    }
  }
  class Ht {
    constructor(e, t, i) {
      const n = e.options,
        o = n.get(127),
        s = n.get(129),
        r = s.minimap,
        a = n.get(43),
        l = n.get(64);
      ((this.renderMinimap = r.renderMinimap), (this.size = l.size), (this.minimapHeightIsEditorHeight = r.minimapHeightIsEditorHeight), (this.scrollBeyondLastLine = n.get(93)), (this.showSlider = l.showSlider), (this.pixelRatio = o), (this.typicalHalfwidthCharacterWidth = a.typicalHalfwidthCharacterWidth), (this.lineHeight = n.get(58)), (this.minimapLeft = r.minimapLeft), (this.minimapWidth = r.minimapWidth), (this.minimapHeight = s.height), (this.canvasInnerWidth = r.minimapCanvasInnerWidth), (this.canvasInnerHeight = r.minimapCanvasInnerHeight), (this.canvasOuterWidth = r.minimapCanvasOuterWidth), (this.canvasOuterHeight = r.minimapCanvasOuterHeight), (this.isSampling = r.minimapIsSampling), (this.editorHeight = s.height), (this.fontScale = r.minimapScale), (this.minimapLineHeight = r.minimapLineHeight), (this.minimapCharWidth = 1 * this.fontScale), (this.charRenderer = (0, Rt.I)(() => Wt.create(this.fontScale, a.fontFamily))), (this.defaultBackgroundColor = i.getColor(2)), (this.backgroundColor = Ht._getMinimapBackground(t, this.defaultBackgroundColor)), (this.foregroundAlpha = Ht._getMinimapForegroundOpacity(t)));
    }
    static _getMinimapBackground(e, t) {
      const i = e.getColor(gt.kV);
      return i ? new It(i.rgba.r, i.rgba.g, i.rgba.b, Math.round(255 * i.rgba.a)) : t;
    }
    static _getMinimapForegroundOpacity(e) {
      const t = e.getColor(gt.It);
      return t ? It._clamp(Math.round(255 * t.rgba.a)) : 255;
    }
    equals(e) {
      return (this.renderMinimap === e.renderMinimap && this.size === e.size && this.minimapHeightIsEditorHeight === e.minimapHeightIsEditorHeight && this.scrollBeyondLastLine === e.scrollBeyondLastLine && this.showSlider === e.showSlider && this.pixelRatio === e.pixelRatio && this.typicalHalfwidthCharacterWidth === e.typicalHalfwidthCharacterWidth && this.lineHeight === e.lineHeight && this.minimapLeft === e.minimapLeft && this.minimapWidth === e.minimapWidth && this.minimapHeight === e.minimapHeight && this.canvasInnerWidth === e.canvasInnerWidth && this.canvasInnerHeight === e.canvasInnerHeight && this.canvasOuterWidth === e.canvasOuterWidth && this.canvasOuterHeight === e.canvasOuterHeight && this.isSampling === e.isSampling && this.editorHeight === e.editorHeight && this.fontScale === e.fontScale && this.minimapLineHeight === e.minimapLineHeight && this.minimapCharWidth === e.minimapCharWidth && this.defaultBackgroundColor && this.defaultBackgroundColor.equals(e.defaultBackgroundColor) && this.backgroundColor && this.backgroundColor.equals(e.backgroundColor) && this.foregroundAlpha === e.foregroundAlpha);
    }
  }
  class zt {
    constructor(e, t, i, n, o, s, r, a) {
      ((this.scrollTop = e), (this.scrollHeight = t), (this.sliderNeeded = i), (this._computedSliderRatio = n), (this.sliderTop = o), (this.sliderHeight = s), (this.startLineNumber = r), (this.endLineNumber = a));
    }
    getDesiredScrollTopFromDelta(e) {
      return Math.round(this.scrollTop + e / this._computedSliderRatio);
    }
    getDesiredScrollTopFromTouchLocation(e) {
      return Math.round((e - this.sliderHeight / 2) / this._computedSliderRatio);
    }
    static create(e, t, i, n, o, s, r, a, l, c, d) {
      const h = e.pixelRatio,
        u = e.minimapLineHeight,
        g = Math.floor(e.canvasInnerHeight / u),
        p = e.lineHeight;
      if (e.minimapHeightIsEditorHeight) {
        const t = a * e.lineHeight + (e.scrollBeyondLastLine ? o - e.lineHeight : 0),
          i = Math.max(1, Math.floor((o * o) / t)),
          n = Math.max(0, e.minimapHeight - i),
          s = n / (c - o),
          d = l * s,
          h = n > 0,
          u = Math.floor(e.canvasInnerHeight / e.minimapLineHeight);
        return new zt(l, c, h, s, d, i, 1, Math.min(r, u));
      }
      let f, m;
      if (s && i !== r) {
        const e = i - t + 1;
        f = Math.floor((e * u) / h);
      } else {
        const e = o / p;
        f = Math.floor((e * u) / h);
      }
      ((m = e.scrollBeyondLastLine ? ((r - 1) * u) / h : Math.max(0, (r * u) / h - f)), (m = Math.min(e.minimapHeight - f, m)));
      const v = m / (c - o),
        _ = l * v;
      let b = 0;
      if (e.scrollBeyondLastLine) {
        b = o / p - 1;
      }
      if (g >= r + b) {
        return new zt(l, c, m > 0, v, _, f, 1, r);
      }
      {
        let e = Math.max(1, Math.floor(t - (_ * h) / u));
        d && d.scrollHeight === c && (d.scrollTop > l && (e = Math.min(e, d.startLineNumber)), d.scrollTop < l && (e = Math.max(e, d.startLineNumber)));
        const i = Math.min(r, e + g - 1);
        return new zt(l, c, !0, v, ((t - e + (l - n) / p) * u) / h, f, e, i);
      }
    }
  }
  class jt {
    constructor(e) {
      this.dy = e;
    }
    onContentChanged() {
      this.dy = -1;
    }
    onTokensChanged() {
      this.dy = -1;
    }
  }
  jt.INVALID = new jt(-1);
  class Ut {
    constructor(e, t, i) {
      ((this.renderedLayout = e), (this._imageData = t), (this._renderedLines = new Ge(() => jt.INVALID)), this._renderedLines._set(e.startLineNumber, i));
    }
    linesEquals(e) {
      if (!this.scrollEquals(e)) return !1;
      const t = this._renderedLines._get().lines;
      for (let e = 0, i = t.length; e < i; e++) if (-1 === t[e].dy) return !1;
      return !0;
    }
    scrollEquals(e) {
      return (this.renderedLayout.startLineNumber === e.startLineNumber && this.renderedLayout.endLineNumber === e.endLineNumber);
    }
    _get() {
      const e = this._renderedLines._get();
      return {
        imageData: this._imageData,
        rendLineNumberStart: e.rendLineNumberStart,
        lines: e.lines
      };
    }
    onLinesChanged(e, t) {
      return this._renderedLines.onLinesChanged(e, t);
    }
    onLinesDeleted(e, t) {
      this._renderedLines.onLinesDeleted(e, t);
    }
    onLinesInserted(e, t) {
      this._renderedLines.onLinesInserted(e, t);
    }
    onTokensChanged(e) {
      return this._renderedLines.onTokensChanged(e);
    }
  }
  class $t {
    constructor(e, t, i, n) {
      ((this._backgroundFillData = $t._createBackgroundFillData(t, i, n)), (this._buffers = [e.createImageData(t, i), e.createImageData(t, i)]), (this._lastUsedBuffer = 0));
    }
    getBuffer() {
      this._lastUsedBuffer = 1 - this._lastUsedBuffer;
      const e = this._buffers[this._lastUsedBuffer];
      return (e.data.set(this._backgroundFillData), e);
    }
    static _createBackgroundFillData(e, t, i) {
      const n = i.r,
        o = i.g,
        s = i.b,
        r = i.a,
        a = new Uint8ClampedArray(e * t * 4);
      let l = 0;
      for (let i = 0; i < t; i++) for (let t = 0; t < e; t++) ((a[l] = n), (a[l + 1] = o), (a[l + 2] = s), (a[l + 3] = r), (l += 4));
      return a;
    }
  }
  class Kt {
    constructor(e, t) {
      ((this.samplingRatio = e), (this.minimapLines = t));
    }
    static compute(e, t, i) {
      if (0 === e.renderMinimap || !e.isSampling) return [null, []];
      const n = e.pixelRatio,
        o = e.lineHeight,
        s = e.scrollBeyondLastLine,
        {
          minimapLineCount: r
        } = K.gk.computeContainedMinimapLineCount({
          viewLineCount: t,
          scrollBeyondLastLine: s,
          height: e.editorHeight,
          lineHeight: o,
          pixelRatio: n
        }),
        a = t / r,
        l = a / 2;
      if (!i || 0 === i.minimapLines.length) {
        let e = [];
        if (((e[0] = 1), r > 1)) {
          for (let t = 0, i = r - 1; t < i; t++) e[t] = Math.round(t * a + l);
          e[r - 1] = t;
        }
        return [new Kt(a, e), []];
      }
      const c = i.minimapLines,
        d = c.length;
      let h = [],
        u = 0,
        g = 0,
        p = 1;
      let f = [],
        m = null;
      for (let e = 0; e < r; e++) {
        const i = Math.max(p, Math.round(e * a)),
          n = Math.max(i, Math.round((e + 1) * a));
        for (; u < d && c[u] < i;) {
          if (f.length < 10) {
            const e = u + 1 + g;
            (m && "deleted" === m.type && m._oldIndex === u - 1 ? m.deleteToLineNumber++ : ((m = {
              type: "deleted",
              _oldIndex: u,
              deleteFromLineNumber: e,
              deleteToLineNumber: e
            }), f.push(m)), g--);
          }
          u++;
        }
        let o;
        if (u < d && c[u] <= n) ((o = c[u]), u++);else if (((o = 0 === e ? 1 : e + 1 === r ? t : Math.round(e * a + l)), f.length < 10)) {
          const t = u + 1 + g;
          (m && "inserted" === m.type && m._i === e - 1 ? m.insertToLineNumber++ : ((m = {
            type: "inserted",
            _i: e,
            insertFromLineNumber: t,
            insertToLineNumber: t
          }), f.push(m)), g++);
        }
        ((h[e] = o), (p = o));
      }
      if (f.length < 10) for (; u < d;) {
        const e = u + 1 + g;
        (m && "deleted" === m.type && m._oldIndex === u - 1 ? m.deleteToLineNumber++ : ((m = {
          type: "deleted",
          _oldIndex: u,
          deleteFromLineNumber: e,
          deleteToLineNumber: e
        }), f.push(m)), g--, u++);
      } else f = [{
        type: "flush"
      }];
      return [new Kt(a, h), f];
    }
    modelLineToMinimapLine(e) {
      return Math.min(this.minimapLines.length, Math.max(1, Math.round(e / this.samplingRatio)));
    }
    modelLineRangeToMinimapLineRange(e, t) {
      let i = this.modelLineToMinimapLine(e) - 1;
      for (; i > 0 && this.minimapLines[i - 1] >= e;) i--;
      let n = this.modelLineToMinimapLine(t) - 1;
      for (; n + 1 < this.minimapLines.length && this.minimapLines[n + 1] <= t;) n++;
      if (i === n) {
        const n = this.minimapLines[i];
        if (n < e || n > t) return null;
      }
      return [i + 1, n + 1];
    }
    decorationLineRangeToMinimapLineRange(e, t) {
      let i = this.modelLineToMinimapLine(e),
        n = this.modelLineToMinimapLine(t);
      return (e !== t && n === i && (n === this.minimapLines.length ? i > 1 && i-- : n++), [i, n]);
    }
    onLinesDeleted(e) {
      const t = e.toLineNumber - e.fromLineNumber + 1;
      let i = this.minimapLines.length,
        n = 0;
      for (let o = this.minimapLines.length - 1; o >= 0 && !(this.minimapLines[o] < e.fromLineNumber); o--) this.minimapLines[o] <= e.toLineNumber ? ((this.minimapLines[o] = Math.max(1, e.fromLineNumber - 1)), (i = Math.min(i, o)), (n = Math.max(n, o))) : (this.minimapLines[o] -= t);
      return [i, n];
    }
    onLinesInserted(e) {
      const t = e.toLineNumber - e.fromLineNumber + 1;
      for (let i = this.minimapLines.length - 1; i >= 0 && !(this.minimapLines[i] < e.fromLineNumber); i--) this.minimapLines[i] += t;
    }
  }
  class qt extends A {
    constructor(e) {
      (super(e), (this.tokensColorTracker = Tt.getInstance()), (this._selections = []), (this._minimapSelections = null), (this.options = new Ht(this._context.configuration, this._context.theme, this.tokensColorTracker)));
      const [t] = Kt.compute(this.options, this._context.model.getLineCount(), null);
      ((this._samplingState = t), (this._shouldCheckSampling = !1), (this._actual = new Zt(e.theme, this)));
    }
    dispose() {
      (this._actual.dispose(), super.dispose());
    }
    getDomNode() {
      return this._actual.getDomNode();
    }
    _onOptionsMaybeChanged() {
      const e = new Ht(this._context.configuration, this._context.theme, this.tokensColorTracker);
      return (!this.options.equals(e) && ((this.options = e), this._recreateLineSampling(), this._actual.onDidChangeOptions(), !0));
    }
    onConfigurationChanged(e) {
      return this._onOptionsMaybeChanged();
    }
    onCursorStateChanged(e) {
      return ((this._selections = e.selections), (this._minimapSelections = null), this._actual.onSelectionChanged());
    }
    onDecorationsChanged(e) {
      return !!e.affectsMinimap && this._actual.onDecorationsChanged();
    }
    onFlushed(e) {
      return (this._samplingState && (this._shouldCheckSampling = !0), this._actual.onFlushed());
    }
    onLinesChanged(e) {
      if (this._samplingState) {
        const t = this._samplingState.modelLineRangeToMinimapLineRange(e.fromLineNumber, e.toLineNumber);
        return !!t && this._actual.onLinesChanged(t[0], t[1]);
      }
      return this._actual.onLinesChanged(e.fromLineNumber, e.toLineNumber);
    }
    onLinesDeleted(e) {
      if (this._samplingState) {
        const [t, i] = this._samplingState.onLinesDeleted(e);
        return (t <= i && this._actual.onLinesChanged(t + 1, i + 1), (this._shouldCheckSampling = !0), !0);
      }
      return this._actual.onLinesDeleted(e.fromLineNumber, e.toLineNumber);
    }
    onLinesInserted(e) {
      return this._samplingState ? (this._samplingState.onLinesInserted(e), (this._shouldCheckSampling = !0), !0) : this._actual.onLinesInserted(e.fromLineNumber, e.toLineNumber);
    }
    onScrollChanged(e) {
      return this._actual.onScrollChanged();
    }
    onThemeChanged(e) {
      return (this._context.model.invalidateMinimapColorCache(), this._actual.onThemeChanged(), this._onOptionsMaybeChanged(), !0);
    }
    onTokensChanged(e) {
      if (this._samplingState) {
        let t = [];
        for (const i of e.ranges) {
          const e = this._samplingState.modelLineRangeToMinimapLineRange(i.fromLineNumber, i.toLineNumber);
          e && t.push({
            fromLineNumber: e[0],
            toLineNumber: e[1]
          });
        }
        return !!t.length && this._actual.onTokensChanged(t);
      }
      return this._actual.onTokensChanged(e.ranges);
    }
    onTokensColorsChanged(e) {
      return (this._onOptionsMaybeChanged(), this._actual.onTokensColorsChanged());
    }
    onZonesChanged(e) {
      return this._actual.onZonesChanged();
    }
    prepareRender(e) {
      this._shouldCheckSampling && ((this._shouldCheckSampling = !1), this._recreateLineSampling());
    }
    render(e) {
      let t = e.visibleRange.startLineNumber,
        i = e.visibleRange.endLineNumber;
      this._samplingState && ((t = this._samplingState.modelLineToMinimapLine(t)), (i = this._samplingState.modelLineToMinimapLine(i)));
      const n = {
        viewportContainsWhitespaceGaps: e.viewportData.whitespaceViewportData.length > 0,
        scrollWidth: e.scrollWidth,
        scrollHeight: e.scrollHeight,
        viewportStartLineNumber: t,
        viewportEndLineNumber: i,
        viewportStartLineNumberVerticalOffset: e.getVerticalOffsetForLineNumber(t),
        scrollTop: e.scrollTop,
        scrollLeft: e.scrollLeft,
        viewportWidth: e.viewportWidth,
        viewportHeight: e.viewportHeight
      };
      this._actual.render(n);
    }
    _recreateLineSampling() {
      this._minimapSelections = null;
      const e = Boolean(this._samplingState),
        [t, i] = Kt.compute(this.options, this._context.model.getLineCount(), this._samplingState);
      if (((this._samplingState = t), e && this._samplingState)) for (const e of i) switch (e.type) {
        case "deleted":
          this._actual.onLinesDeleted(e.deleteFromLineNumber, e.deleteToLineNumber);
          break;
        case "inserted":
          this._actual.onLinesInserted(e.insertFromLineNumber, e.insertToLineNumber);
          break;
        case "flush":
          this._actual.onFlushed();
      }
    }
    getLineCount() {
      return this._samplingState ? this._samplingState.minimapLines.length : this._context.model.getLineCount();
    }
    getRealLineCount() {
      return this._context.model.getLineCount();
    }
    getLineContent(e) {
      return this._samplingState ? this._context.model.getLineContent(this._samplingState.minimapLines[e - 1]) : this._context.model.getLineContent(e);
    }
    getLineMaxColumn(e) {
      return this._samplingState ? this._context.model.getLineMaxColumn(this._samplingState.minimapLines[e - 1]) : this._context.model.getLineMaxColumn(e);
    }
    getMinimapLinesRenderingData(e, t, i) {
      if (this._samplingState) {
        let n = [];
        for (let o = 0, s = t - e + 1; o < s; o++) i[o] ? (n[o] = this._context.model.getViewLineData(this._samplingState.minimapLines[e + o - 1])) : (n[o] = null);
        return n;
      }
      return this._context.model.getMinimapLinesRenderingData(e, t, i).data;
    }
    getSelections() {
      if (null === this._minimapSelections) if (this._samplingState) {
        this._minimapSelections = [];
        for (const e of this._selections) {
          const [t, i] = this._samplingState.decorationLineRangeToMinimapLineRange(e.startLineNumber, e.endLineNumber);
          this._minimapSelections.push(new v.Y(t, e.startColumn, i, e.endColumn));
        }
      } else this._minimapSelections = this._selections;
      return this._minimapSelections;
    }
    getMinimapDecorationsInViewport(e, t) {
      let i;
      if (this._samplingState) {
        const n = this._samplingState.minimapLines[e - 1],
          o = this._samplingState.minimapLines[t - 1];
        i = new re.e(n, 1, o, this._context.model.getLineMaxColumn(o));
      } else i = new re.e(e, 1, t, this._context.model.getLineMaxColumn(t));
      const n = this._context.model.getDecorationsInViewport(i);
      if (this._samplingState) {
        let e = [];
        for (const t of n) {
          if (!t.options.minimap) continue;
          const i = t.range,
            n = this._samplingState.modelLineToMinimapLine(i.startLineNumber),
            o = this._samplingState.modelLineToMinimapLine(i.endLineNumber);
          e.push(new Mt.$l(new re.e(n, i.startColumn, o, i.endColumn), t.options));
        }
        return e;
      }
      return n;
    }
    getOptions() {
      return this._context.model.getTextModelOptions();
    }
    revealLineNumber(e) {
      (this._samplingState && (e = this._samplingState.minimapLines[e - 1]), this._context.model.revealRange("mouse", !1, new re.e(e, 1, e, 1), 1, 0));
    }
    setScrollTop(e) {
      this._context.model.setScrollPosition({
        scrollTop: e
      }, 1);
    }
  }
  class Zt extends u.JT {
    constructor(e, t) {
      (super(), (this._renderDecorations = !1), (this._gestureInProgress = !1), (this._theme = e), (this._model = t), (this._lastRenderData = null), (this._buffers = null), (this._selectionColor = this._theme.getColor(gt.ov)), (this._domNode = (0, _.X)(document.createElement("div"))), O.write(this._domNode, 8), this._domNode.setClassName(this._getMinimapDomNodeClassName()), this._domNode.setPosition("absolute"), this._domNode.setAttribute("role", "presentation"), this._domNode.setAttribute("aria-hidden", "true"), (this._shadow = (0, _.X)(document.createElement("div"))), this._shadow.setClassName("minimap-shadow-hidden"), this._domNode.appendChild(this._shadow), (this._canvas = (0, _.X)(document.createElement("canvas"))), this._canvas.setPosition("absolute"), this._canvas.setLeft(0), this._domNode.appendChild(this._canvas), (this._decorationsCanvas = (0, _.X)(document.createElement("canvas"))), this._decorationsCanvas.setPosition("absolute"), this._decorationsCanvas.setClassName("minimap-decorations-layer"), this._decorationsCanvas.setLeft(0), this._domNode.appendChild(this._decorationsCanvas), (this._slider = (0, _.X)(document.createElement("div"))), this._slider.setPosition("absolute"), this._slider.setClassName("minimap-slider"), this._slider.setLayerHinting(!0), this._slider.setContain("strict"), this._domNode.appendChild(this._slider), (this._sliderHorizontal = (0, _.X)(document.createElement("div"))), this._sliderHorizontal.setPosition("absolute"), this._sliderHorizontal.setClassName("minimap-slider-horizontal"), this._slider.appendChild(this._sliderHorizontal), this._applyLayout(), (this._mouseDownListener = c.mu(this._domNode.domNode, "mousedown", e => {
        e.preventDefault();
        if (0 === this._model.options.renderMinimap) return;
        if (!this._lastRenderData) return;
        if ("proportional" !== this._model.options.size) {
          if (e.leftButton && this._lastRenderData) {
            const t = c.i(this._slider.domNode),
              i = t.top + t.height / 2;
            this._startSliderDragging(e.buttons, e.posx, i, e.posy, this._lastRenderData.renderedLayout);
          }
          return;
        }
        const t = this._model.options.minimapLineHeight,
          i = (this._model.options.canvasInnerHeight / this._model.options.canvasOuterHeight) * e.browserEvent.offsetY;
        let n = Math.floor(i / t) + this._lastRenderData.renderedLayout.startLineNumber;
        ((n = Math.min(n, this._model.getLineCount())), this._model.revealLineNumber(n));
      })), (this._sliderMouseMoveMonitor = new x.Z()), (this._sliderMouseDownListener = c.mu(this._slider.domNode, "mousedown", e => {
        (e.preventDefault(), e.stopPropagation(), e.leftButton && this._lastRenderData && this._startSliderDragging(e.buttons, e.posx, e.posy, e.posy, this._lastRenderData.renderedLayout));
      })), (this._gestureDisposable = w.o.addTarget(this._domNode.domNode)), (this._sliderTouchStartListener = c.nm(this._domNode.domNode, w.t.Start, e => {
        (e.preventDefault(), e.stopPropagation(), this._lastRenderData && (this._slider.toggleClassName("active", !0), (this._gestureInProgress = !0), this.scrollDueToTouchEvent(e)));
      }, {
        passive: !1
      })), (this._sliderTouchMoveListener = c.nm(this._domNode.domNode, w.t.Change, e => {
        (e.preventDefault(), e.stopPropagation(), this._lastRenderData && this._gestureInProgress && this.scrollDueToTouchEvent(e));
      }, {
        passive: !1
      })), (this._sliderTouchEndListener = c.mu(this._domNode.domNode, w.t.End, e => {
        (e.preventDefault(), e.stopPropagation(), (this._gestureInProgress = !1), this._slider.toggleClassName("active", !1));
      })));
    }
    _startSliderDragging(e, t, i, n, o) {
      this._slider.toggleClassName("active", !0);
      const s = (e, n) => {
        const s = Math.abs(n - t);
        if (b.ED && s > 140) return void this._model.setScrollTop(o.scrollTop);
        const r = e - i;
        this._model.setScrollTop(o.getDesiredScrollTopFromDelta(r));
      };
      (n !== i && s(n, t), this._sliderMouseMoveMonitor.startMonitoring(this._slider.domNode, e, x.e, e => s(e.posy, e.posx), () => {
        this._slider.toggleClassName("active", !1);
      }));
    }
    scrollDueToTouchEvent(e) {
      const t = this._domNode.domNode.getBoundingClientRect().top,
        i = this._lastRenderData.renderedLayout.getDesiredScrollTopFromTouchLocation(e.pageY - t);
      this._model.setScrollTop(i);
    }
    dispose() {
      (this._mouseDownListener.dispose(), this._sliderMouseMoveMonitor.dispose(), this._sliderMouseDownListener.dispose(), this._gestureDisposable.dispose(), this._sliderTouchStartListener.dispose(), this._sliderTouchMoveListener.dispose(), this._sliderTouchEndListener.dispose(), super.dispose());
    }
    _getMinimapDomNodeClassName() {
      return "always" === this._model.options.showSlider ? "minimap slider-always" : "minimap slider-mouseover";
    }
    getDomNode() {
      return this._domNode;
    }
    _applyLayout() {
      (this._domNode.setLeft(this._model.options.minimapLeft), this._domNode.setWidth(this._model.options.minimapWidth), this._domNode.setHeight(this._model.options.minimapHeight), this._shadow.setHeight(this._model.options.minimapHeight), this._canvas.setWidth(this._model.options.canvasOuterWidth), this._canvas.setHeight(this._model.options.canvasOuterHeight), (this._canvas.domNode.width = this._model.options.canvasInnerWidth), (this._canvas.domNode.height = this._model.options.canvasInnerHeight), this._decorationsCanvas.setWidth(this._model.options.canvasOuterWidth), this._decorationsCanvas.setHeight(this._model.options.canvasOuterHeight), (this._decorationsCanvas.domNode.width = this._model.options.canvasInnerWidth), (this._decorationsCanvas.domNode.height = this._model.options.canvasInnerHeight), this._slider.setWidth(this._model.options.minimapWidth));
    }
    _getBuffer() {
      return (this._buffers || (this._model.options.canvasInnerWidth > 0 && this._model.options.canvasInnerHeight > 0 && (this._buffers = new $t(this._canvas.domNode.getContext("2d"), this._model.options.canvasInnerWidth, this._model.options.canvasInnerHeight, this._model.options.backgroundColor))), this._buffers ? this._buffers.getBuffer() : null);
    }
    onDidChangeOptions() {
      ((this._lastRenderData = null), (this._buffers = null), this._applyLayout(), this._domNode.setClassName(this._getMinimapDomNodeClassName()));
    }
    onSelectionChanged() {
      return ((this._renderDecorations = !0), !0);
    }
    onDecorationsChanged() {
      return ((this._renderDecorations = !0), !0);
    }
    onFlushed() {
      return ((this._lastRenderData = null), !0);
    }
    onLinesChanged(e, t) {
      return (!!this._lastRenderData && this._lastRenderData.onLinesChanged(e, t));
    }
    onLinesDeleted(e, t) {
      return (this._lastRenderData && this._lastRenderData.onLinesDeleted(e, t), !0);
    }
    onLinesInserted(e, t) {
      return (this._lastRenderData && this._lastRenderData.onLinesInserted(e, t), !0);
    }
    onScrollChanged() {
      return ((this._renderDecorations = !0), !0);
    }
    onThemeChanged() {
      return ((this._selectionColor = this._theme.getColor(gt.ov)), (this._renderDecorations = !0), !0);
    }
    onTokensChanged(e) {
      return (!!this._lastRenderData && this._lastRenderData.onTokensChanged(e));
    }
    onTokensColorsChanged() {
      return ((this._lastRenderData = null), (this._buffers = null), !0);
    }
    onZonesChanged() {
      return ((this._lastRenderData = null), !0);
    }
    render(e) {
      if (0 === this._model.options.renderMinimap) return (this._shadow.setClassName("minimap-shadow-hidden"), this._sliderHorizontal.setWidth(0), void this._sliderHorizontal.setHeight(0));
      e.scrollLeft + e.viewportWidth >= e.scrollWidth ? this._shadow.setClassName("minimap-shadow-hidden") : this._shadow.setClassName("minimap-shadow-visible");
      const t = zt.create(this._model.options, e.viewportStartLineNumber, e.viewportEndLineNumber, e.viewportStartLineNumberVerticalOffset, e.viewportHeight, e.viewportContainsWhitespaceGaps, this._model.getLineCount(), this._model.getRealLineCount(), e.scrollTop, e.scrollHeight, this._lastRenderData ? this._lastRenderData.renderedLayout : null);
      (this._slider.setDisplay(t.sliderNeeded ? "block" : "none"), this._slider.setTop(t.sliderTop), this._slider.setHeight(t.sliderHeight), this._sliderHorizontal.setLeft(0), this._sliderHorizontal.setWidth(this._model.options.minimapWidth), this._sliderHorizontal.setTop(0), this._sliderHorizontal.setHeight(t.sliderHeight), this.renderDecorations(t), (this._lastRenderData = this.renderLines(t)));
    }
    renderDecorations(e) {
      if (this._renderDecorations) {
        this._renderDecorations = !1;
        const t = this._model.getSelections();
        t.sort(re.e.compareRangesUsingStarts);
        const i = this._model.getMinimapDecorationsInViewport(e.startLineNumber, e.endLineNumber);
        i.sort((e, t) => (e.options.zIndex || 0) - (t.options.zIndex || 0));
        const {
            canvasInnerWidth: n,
            canvasInnerHeight: o
          } = this._model.options,
          s = this._model.options.minimapLineHeight,
          r = this._model.options.minimapCharWidth,
          a = this._model.getOptions().tabSize,
          l = this._decorationsCanvas.domNode.getContext("2d");
        l.clearRect(0, 0, n, o);
        const c = new Gt(e.startLineNumber, e.endLineNumber, !1);
        (this._renderSelectionLineHighlights(l, t, c, e, s), this._renderDecorationsLineHighlights(l, i, c, e, s));
        const d = new Gt(e.startLineNumber, e.endLineNumber, null);
        (this._renderSelectionsHighlights(l, t, d, e, s, a, r, n), this._renderDecorationsHighlights(l, i, d, e, s, a, r, n));
      }
    }
    _renderSelectionLineHighlights(e, t, i, n, o) {
      if (!this._selectionColor || this._selectionColor.isTransparent()) return;
      e.fillStyle = this._selectionColor.transparent(0.5).toString();
      let s = 0,
        r = 0;
      for (const a of t) {
        const t = Math.max(n.startLineNumber, a.startLineNumber),
          l = Math.min(n.endLineNumber, a.endLineNumber);
        if (t > l) continue;
        for (let e = t; e <= l; e++) i.set(e, !0);
        const c = (t - n.startLineNumber) * o,
          d = (l - n.startLineNumber) * o + o;
        (r >= c || (r > s && e.fillRect(K.y0, s, e.canvas.width, r - s), (s = c)), (r = d));
      }
      r > s && e.fillRect(K.y0, s, e.canvas.width, r - s);
    }
    _renderDecorationsLineHighlights(e, t, i, n, o) {
      const s = new Map();
      for (let r = t.length - 1; r >= 0; r--) {
        const a = t[r],
          l = a.options.minimap;
        if (!l || l.position !== _t.F5.Inline) continue;
        const c = Math.max(n.startLineNumber, a.range.startLineNumber),
          d = Math.min(n.endLineNumber, a.range.endLineNumber);
        if (c > d) continue;
        const h = l.getColor(this._theme);
        if (!h || h.isTransparent()) continue;
        let u = s.get(h.toString());
        (u || ((u = h.transparent(0.5).toString()), s.set(h.toString(), u)), (e.fillStyle = u));
        for (let t = c; t <= d; t++) {
          if (i.has(t)) continue;
          i.set(t, !0);
          const s = (c - n.startLineNumber) * o;
          e.fillRect(K.y0, s, e.canvas.width, o);
        }
      }
    }
    _renderSelectionsHighlights(e, t, i, n, o, s, r, a) {
      if (this._selectionColor && !this._selectionColor.isTransparent()) for (const l of t) {
        const t = Math.max(n.startLineNumber, l.startLineNumber),
          c = Math.min(n.endLineNumber, l.endLineNumber);
        if (!(t > c)) for (let d = t; d <= c; d++) this.renderDecorationOnLine(e, i, l, this._selectionColor, n, d, o, o, s, r, a);
      }
    }
    _renderDecorationsHighlights(e, t, i, n, o, s, r, a) {
      for (const l of t) {
        const t = l.options.minimap;
        if (!t) continue;
        const c = Math.max(n.startLineNumber, l.range.startLineNumber),
          d = Math.min(n.endLineNumber, l.range.endLineNumber);
        if (c > d) continue;
        const h = t.getColor(this._theme);
        if (h && !h.isTransparent()) for (let u = c; u <= d; u++) switch (t.position) {
          case _t.F5.Inline:
            this.renderDecorationOnLine(e, i, l.range, h, n, u, o, o, s, r, a);
            continue;
          case _t.F5.Gutter:
            const t = (u - n.startLineNumber) * o,
              c = 2;
            this.renderDecoration(e, h, c, t, 2, o);
            continue;
        }
      }
    }
    renderDecorationOnLine(e, t, i, n, o, s, r, a, l, c, d) {
      const h = (s - o.startLineNumber) * a;
      if (h + r < 0 || h > this._model.options.canvasInnerHeight) return;
      const {
          startLineNumber: u,
          endLineNumber: g
        } = i,
        p = u === s ? i.startColumn : 1,
        f = g === s ? i.endColumn : this._model.getLineMaxColumn(s),
        m = this.getXOffsetForPosition(t, s, p, l, c, d),
        v = this.getXOffsetForPosition(t, s, f, l, c, d);
      this.renderDecoration(e, n, m, h, v - m, r);
    }
    getXOffsetForPosition(e, t, i, n, o, s) {
      if (1 === i) return K.y0;
      if ((i - 1) * o >= s) return s;
      let r = e.get(t);
      if (!r) {
        const i = this._model.getLineContent(t);
        r = [K.y0];
        let a = K.y0;
        for (let e = 1; e < i.length + 1; e++) {
          const t = i.charCodeAt(e - 1),
            l = a + (9 === t ? n * o : Te.K7(t) ? 2 * o : o);
          if (l >= s) {
            r[e] = s;
            break;
          }
          ((r[e] = l), (a = l));
        }
        e.set(t, r);
      }
      return i - 1 < r.length ? r[i - 1] : s;
    }
    renderDecoration(e, t, i, n, o, s) {
      ((e.fillStyle = (t && t.toString()) || ""), e.fillRect(i, n, o, s));
    }
    renderLines(e) {
      const t = e.startLineNumber,
        i = e.endLineNumber,
        n = this._model.options.minimapLineHeight;
      if (this._lastRenderData && this._lastRenderData.linesEquals(e)) {
        const t = this._lastRenderData._get();
        return new Ut(e, t.imageData, t.lines);
      }
      const o = this._getBuffer();
      if (!o) return null;
      let [s, r, a] = Zt._renderUntouchedLines(o, t, i, n, this._lastRenderData);
      const l = this._model.getMinimapLinesRenderingData(t, i, a),
        c = this._model.getOptions().tabSize,
        d = this._model.options.defaultBackgroundColor,
        h = this._model.options.backgroundColor,
        u = this._model.options.foregroundAlpha,
        g = this._model.tokensColorTracker,
        p = g.backgroundIsLight(),
        f = this._model.options.renderMinimap,
        m = this._model.options.charRenderer(),
        v = this._model.options.fontScale,
        _ = this._model.options.minimapCharWidth,
        b = (1 === f ? 2 : 3) * v,
        w = n > b ? Math.floor((n - b) / 2) : 0,
        y = h.a / 255,
        C = new It(Math.round((h.r - d.r) * y + d.r), Math.round((h.g - d.g) * y + d.g), Math.round((h.b - d.b) * y + d.b), 255);
      let x = 0;
      const S = [];
      for (let e = 0, s = i - t + 1; e < s; e++) (a[e] && Zt._renderLine(o, C, h.a, p, f, _, g, u, m, x, w, c, l[e], v, n), (S[e] = new jt(x)), (x += n));
      const k = -1 === s ? 0 : s,
        L = (-1 === r ? o.height : r) - k;
      return (this._canvas.domNode.getContext("2d").putImageData(o, 0, 0, 0, k, o.width, L), new Ut(e, o, S));
    }
    static _renderUntouchedLines(e, t, i, n, o) {
      const s = [];
      if (!o) {
        for (let e = 0, n = i - t + 1; e < n; e++) s[e] = !0;
        return [-1, -1, s];
      }
      const r = o._get(),
        a = r.imageData.data,
        l = r.rendLineNumberStart,
        c = r.lines,
        d = c.length,
        h = e.width,
        u = e.data,
        g = (i - t + 1) * n * h * 4;
      let p = -1,
        f = -1,
        m = -1,
        v = -1,
        _ = -1,
        b = -1,
        w = 0;
      for (let e = t; e <= i; e++) {
        const i = e - t,
          o = e - l,
          r = o >= 0 && o < d ? c[o].dy : -1;
        if (-1 === r) {
          ((s[i] = !0), (w += n));
          continue;
        }
        const y = r * h * 4,
          C = (r + n) * h * 4,
          x = w * h * 4,
          S = (w + n) * h * 4;
        (v === y && b === x ? ((v = C), (b = S)) : (-1 !== m && (u.set(a.subarray(m, v), _), -1 === p && 0 === m && m === _ && (p = v), -1 === f && v === g && m === _ && (f = m)), (m = y), (v = C), (_ = x), (b = S)), (s[i] = !1), (w += n));
      }
      -1 !== m && (u.set(a.subarray(m, v), _), -1 === p && 0 === m && m === _ && (p = v), -1 === f && v === g && m === _ && (f = m));
      return [-1 === p ? -1 : p / (4 * h), -1 === f ? -1 : f / (4 * h), s];
    }
    static _renderLine(e, t, i, n, o, s, r, a, l, c, d, h, u, g, p) {
      const f = u.content,
        m = u.tokens,
        v = e.width - s,
        _ = 1 === p;
      let b = K.y0,
        w = 0,
        y = 0;
      for (let u = 0, p = m.getCount(); u < p; u++) {
        const p = m.getEndOffset(u),
          C = m.getForeground(u),
          x = r.getColor(C);
        for (; w < p; w++) {
          if (b > v) return;
          const r = f.charCodeAt(w);
          if (9 === r) {
            const e = h - ((w + y) % h);
            ((y += e - 1), (b += e * s));
          } else if (32 === r) b += s;else {
            const h = Te.K7(r) ? 2 : 1;
            for (let u = 0; u < h; u++) if ((2 === o ? l.blockRenderChar(e, b, c + d, x, a, t, i, _) : l.renderChar(e, b, c + d, r, x, a, t, i, g, n, _), (b += s), b > v)) return;
          }
        }
      }
    }
  }
  class Gt {
    constructor(e, t, i) {
      ((this._startLineNumber = e), (this._endLineNumber = t), (this._defaultValue = i), (this._values = []));
      for (let e = 0, t = this._endLineNumber - this._startLineNumber + 1; e < t; e++) this._values[e] = i;
    }
    has(e) {
      return this.get(e) !== this._defaultValue;
    }
    set(e, t) {
      e < this._startLineNumber || e > this._endLineNumber || (this._values[e - this._startLineNumber] = t);
    }
    get(e) {
      return e < this._startLineNumber || e > this._endLineNumber ? this._defaultValue : this._values[e - this._startLineNumber];
    }
  }
  (0, Pe.Ic)((e, t) => {
    const i = e.getColor(gt.CA);
    i && t.addRule(`.monaco-editor .minimap-slider .minimap-slider-horizontal { background: ${i}; }`);
    const n = e.getColor(gt.Xy);
    n && t.addRule(`.monaco-editor .minimap-slider:hover .minimap-slider-horizontal { background: ${n}; }`);
    const o = e.getColor(gt.br);
    o && t.addRule(`.monaco-editor .minimap-slider.active .minimap-slider-horizontal { background: ${o}; }`);
    const s = e.getColor(gt._w);
    s && t.addRule(`.monaco-editor .minimap-shadow-visible { box-shadow: ${s} -6px 0 6px -6px inset; }`);
  });
  i(73300);
  class Yt extends A {
    constructor(e) {
      super(e);
      const t = this._context.configuration.options.get(129);
      ((this._widgets = {}), (this._verticalScrollbarWidth = t.verticalScrollbarWidth), (this._minimapWidth = t.minimap.minimapWidth), (this._horizontalScrollbarHeight = t.horizontalScrollbarHeight), (this._editorHeight = t.height), (this._editorWidth = t.width), (this._domNode = (0, _.X)(document.createElement("div"))), O.write(this._domNode, 4), this._domNode.setClassName("overlayWidgets"));
    }
    dispose() {
      (super.dispose(), (this._widgets = {}));
    }
    getDomNode() {
      return this._domNode;
    }
    onConfigurationChanged(e) {
      const t = this._context.configuration.options.get(129);
      return ((this._verticalScrollbarWidth = t.verticalScrollbarWidth), (this._minimapWidth = t.minimap.minimapWidth), (this._horizontalScrollbarHeight = t.horizontalScrollbarHeight), (this._editorHeight = t.height), (this._editorWidth = t.width), !0);
    }
    addWidget(e) {
      const t = (0, _.X)(e.getDomNode());
      ((this._widgets[e.getId()] = {
        widget: e,
        preference: null,
        domNode: t
      }), t.setPosition("absolute"), t.setAttribute("widgetId", e.getId()), this._domNode.appendChild(t), this.setShouldRender());
    }
    setWidgetPosition(e, t) {
      const i = this._widgets[e.getId()];
      return (i.preference !== t && ((i.preference = t), this.setShouldRender(), !0));
    }
    removeWidget(e) {
      const t = e.getId();
      if (this._widgets.hasOwnProperty(t)) {
        const e = this._widgets[t].domNode.domNode;
        (delete this._widgets[t], e.parentNode.removeChild(e), this.setShouldRender());
      }
    }
    _renderWidget(e) {
      const t = e.domNode;
      if (null !== e.preference) {
        if (0 === e.preference) (t.setTop(0), t.setRight(2 * this._verticalScrollbarWidth + this._minimapWidth));else if (1 === e.preference) {
          const e = t.domNode.clientHeight;
          (t.setTop(this._editorHeight - e - 2 * this._horizontalScrollbarHeight), t.setRight(2 * this._verticalScrollbarWidth + this._minimapWidth));
        } else 2 === e.preference && (t.setTop(0), (t.domNode.style.right = "50%"));
      } else t.unsetTop();
    }
    prepareRender(e) {}
    render(e) {
      this._domNode.setWidth(this._editorWidth);
      const t = Object.keys(this._widgets);
      for (let e = 0, i = t.length; e < i; e++) {
        const i = t[e];
        this._renderWidget(this._widgets[i]);
      }
    }
  }
  var Qt = i(41264);
  class Xt {
    constructor(e, t) {
      const i = e.options;
      ((this.lineHeight = i.get(58)), (this.pixelRatio = i.get(127)), (this.overviewRulerLanes = i.get(73)), (this.renderBorder = i.get(72)));
      const n = t.getColor(Oe.zw);
      ((this.borderColor = n ? n.toString() : null), (this.hideCursor = i.get(51)));
      const o = t.getColor(Oe.n0);
      ((this.cursorColor = o ? o.transparent(0.7).toString() : null), (this.themeType = t.type));
      const s = i.get(64),
        r = s.enabled,
        a = s.side,
        l = r ? t.getColor(Oe.e_) || Et.RW.getDefaultBackground() : null;
      this.backgroundColor = null === l || "left" === a ? null : Qt.Il.Format.CSS.formatHex(l);
      const c = i.get(129).overviewRuler;
      ((this.top = c.top), (this.right = c.right), (this.domWidth = c.width), (this.domHeight = c.height), 0 === this.overviewRulerLanes ? ((this.canvasWidth = 0), (this.canvasHeight = 0)) : ((this.canvasWidth = (this.domWidth * this.pixelRatio) | 0), (this.canvasHeight = (this.domHeight * this.pixelRatio) | 0)));
      const [d, h] = this._initLanes(1, this.canvasWidth, this.overviewRulerLanes);
      ((this.x = d), (this.w = h));
    }
    _initLanes(e, t, i) {
      const n = t - e;
      if (i >= 3) {
        const t = Math.floor(n / 3),
          i = Math.floor(n / 3),
          o = n - t - i,
          s = e + t;
        return [[0, e, s, e, e + t + o, e, s, e], [0, t, o, t + o, i, t + o + i, o + i, t + o + i]];
      }
      if (2 === i) {
        const t = Math.floor(n / 2),
          i = n - t;
        return [[0, e, e, e, e + t, e, e, e], [0, t, t, t, i, t + i, t + i, t + i]];
      }
      return [[0, e, e, e, e, e, e, e], [0, n, n, n, n, n, n, n]];
    }
    equals(e) {
      return (this.lineHeight === e.lineHeight && this.pixelRatio === e.pixelRatio && this.overviewRulerLanes === e.overviewRulerLanes && this.renderBorder === e.renderBorder && this.borderColor === e.borderColor && this.hideCursor === e.hideCursor && this.cursorColor === e.cursorColor && this.themeType === e.themeType && this.backgroundColor === e.backgroundColor && this.top === e.top && this.right === e.right && this.domWidth === e.domWidth && this.domHeight === e.domHeight && this.canvasWidth === e.canvasWidth && this.canvasHeight === e.canvasHeight);
    }
  }
  class Jt extends A {
    constructor(e) {
      (super(e), (this._domNode = (0, _.X)(document.createElement("canvas"))), this._domNode.setClassName("decorationsOverviewRuler"), this._domNode.setPosition("absolute"), this._domNode.setLayerHinting(!0), this._domNode.setContain("strict"), this._domNode.setAttribute("aria-hidden", "true"), this._updateSettings(!1), (this._tokensColorTrackerListener = Et.RW.onDidChange(e => {
        e.changedColorMap && this._updateSettings(!0);
      })), (this._cursorPositions = []));
    }
    dispose() {
      (super.dispose(), this._tokensColorTrackerListener.dispose());
    }
    _updateSettings(e) {
      const t = new Xt(this._context.configuration, this._context.theme);
      return ((!this._settings || !this._settings.equals(t)) && ((this._settings = t), this._domNode.setTop(this._settings.top), this._domNode.setRight(this._settings.right), this._domNode.setWidth(this._settings.domWidth), this._domNode.setHeight(this._settings.domHeight), (this._domNode.domNode.width = this._settings.canvasWidth), (this._domNode.domNode.height = this._settings.canvasHeight), e && this._render(), !0));
    }
    onConfigurationChanged(e) {
      return this._updateSettings(!1);
    }
    onCursorStateChanged(e) {
      this._cursorPositions = [];
      for (let t = 0, i = e.selections.length; t < i; t++) this._cursorPositions[t] = e.selections[t].getPosition();
      return (this._cursorPositions.sort(se.L.compare), !0);
    }
    onDecorationsChanged(e) {
      return !!e.affectsOverviewRuler;
    }
    onFlushed(e) {
      return !0;
    }
    onScrollChanged(e) {
      return e.scrollHeightChanged;
    }
    onZonesChanged(e) {
      return !0;
    }
    onThemeChanged(e) {
      return (this._context.model.invalidateOverviewRulerColorCache(), this._updateSettings(!1));
    }
    getDomNode() {
      return this._domNode.domNode;
    }
    prepareRender(e) {}
    render(e) {
      this._render();
    }
    _render() {
      if (0 === this._settings.overviewRulerLanes) return void this._domNode.setBackgroundColor(this._settings.backgroundColor ? this._settings.backgroundColor : "");
      const e = this._settings.canvasWidth,
        t = this._settings.canvasHeight,
        i = this._settings.lineHeight,
        n = this._context.viewLayout,
        o = t / this._context.viewLayout.getScrollHeight(),
        s = this._context.model.getAllOverviewRulerDecorations(this._context.theme),
        r = (6 * this._settings.pixelRatio) | 0,
        a = (r / 2) | 0,
        l = this._domNode.domNode.getContext("2d");
      null === this._settings.backgroundColor ? l.clearRect(0, 0, e, t) : ((l.fillStyle = this._settings.backgroundColor), l.fillRect(0, 0, e, t));
      const c = this._settings.x,
        d = this._settings.w;
      s.sort(Mt.SQ.cmp);
      for (const e of s) {
        const s = e.color,
          h = e.data;
        l.fillStyle = s;
        let u = 0,
          g = 0,
          p = 0;
        for (let e = 0, s = h.length / 3; e < s; e++) {
          const s = h[3 * e],
            f = h[3 * e + 1],
            m = h[3 * e + 2];
          let v = (n.getVerticalOffsetForLineNumber(f) * o) | 0,
            _ = ((n.getVerticalOffsetForLineNumber(m) + i) * o) | 0;
          if (_ - v < r) {
            let e = ((v + _) / 2) | 0;
            (e < a ? (e = a) : e + a > t && (e = t - a), (v = e - a), (_ = e + a));
          }
          v > p + 1 || s !== u ? (0 !== e && l.fillRect(c[u], g, d[u], p - g), (u = s), (g = v), (p = _)) : _ > p && (p = _);
        }
        l.fillRect(c[u], g, d[u], p - g);
      }
      if (!this._settings.hideCursor && this._settings.cursorColor) {
        const e = (2 * this._settings.pixelRatio) | 0,
          i = (e / 2) | 0,
          s = this._settings.x[7],
          r = this._settings.w[7];
        l.fillStyle = this._settings.cursorColor;
        let a = -100,
          c = -100;
        for (let d = 0, h = this._cursorPositions.length; d < h; d++) {
          const h = this._cursorPositions[d];
          let u = (n.getVerticalOffsetForLineNumber(h.lineNumber) * o) | 0;
          u < i ? (u = i) : u + i > t && (u = t - i);
          const g = u - i,
            p = g + e;
          g > c + 1 ? (0 !== d && l.fillRect(s, a, r, c - a), (a = g), (c = p)) : p > c && (c = p);
        }
        l.fillRect(s, a, r, c - a);
      }
      this._settings.renderBorder && this._settings.borderColor && this._settings.overviewRulerLanes > 0 && (l.beginPath(), (l.lineWidth = 1), (l.strokeStyle = this._settings.borderColor), l.moveTo(0, 0), l.lineTo(0, t), l.stroke(), l.moveTo(0, 0), l.lineTo(e, 0), l.stroke());
    }
  }
  var ei = i(92003);
  class ti extends M {
    constructor(e, t) {
      (super(), (this._context = e));
      const i = this._context.configuration.options;
      ((this._domNode = (0, _.X)(document.createElement("canvas"))), this._domNode.setClassName(t), this._domNode.setPosition("absolute"), this._domNode.setLayerHinting(!0), this._domNode.setContain("strict"), (this._zoneManager = new ei.Tj(e => this._context.viewLayout.getVerticalOffsetForLineNumber(e))), this._zoneManager.setDOMWidth(0), this._zoneManager.setDOMHeight(0), this._zoneManager.setOuterHeight(this._context.viewLayout.getScrollHeight()), this._zoneManager.setLineHeight(i.get(58)), this._zoneManager.setPixelRatio(i.get(127)), this._context.addEventHandler(this));
    }
    dispose() {
      (this._context.removeEventHandler(this), super.dispose());
    }
    onConfigurationChanged(e) {
      const t = this._context.configuration.options;
      return (e.hasChanged(58) && (this._zoneManager.setLineHeight(t.get(58)), this._render()), e.hasChanged(127) && (this._zoneManager.setPixelRatio(t.get(127)), this._domNode.setWidth(this._zoneManager.getDOMWidth()), this._domNode.setHeight(this._zoneManager.getDOMHeight()), (this._domNode.domNode.width = this._zoneManager.getCanvasWidth()), (this._domNode.domNode.height = this._zoneManager.getCanvasHeight()), this._render()), !0);
    }
    onFlushed(e) {
      return (this._render(), !0);
    }
    onScrollChanged(e) {
      return (e.scrollHeightChanged && (this._zoneManager.setOuterHeight(e.scrollHeight), this._render()), !0);
    }
    onZonesChanged(e) {
      return (this._render(), !0);
    }
    getDomNode() {
      return this._domNode.domNode;
    }
    setLayout(e) {
      (this._domNode.setTop(e.top), this._domNode.setRight(e.right));
      let t = !1;
      ((t = this._zoneManager.setDOMWidth(e.width) || t), (t = this._zoneManager.setDOMHeight(e.height) || t), t && (this._domNode.setWidth(this._zoneManager.getDOMWidth()), this._domNode.setHeight(this._zoneManager.getDOMHeight()), (this._domNode.domNode.width = this._zoneManager.getCanvasWidth()), (this._domNode.domNode.height = this._zoneManager.getCanvasHeight()), this._render()));
    }
    setZones(e) {
      (this._zoneManager.setZones(e), this._render());
    }
    _render() {
      if (0 === this._zoneManager.getOuterHeight()) return !1;
      const e = this._zoneManager.getCanvasWidth(),
        t = this._zoneManager.getCanvasHeight(),
        i = this._zoneManager.resolveColorZones(),
        n = this._zoneManager.getId2Color(),
        o = this._domNode.domNode.getContext("2d");
      return (o.clearRect(0, 0, e, t), i.length > 0 && this._renderOneLane(o, i, n, e), !0);
    }
    _renderOneLane(e, t, i, n) {
      let o = 0,
        s = 0,
        r = 0;
      for (const a of t) {
        const t = a.colorId,
          l = a.from,
          c = a.to;
        t !== o ? (e.fillRect(0, s, n, r - s), (o = t), (e.fillStyle = i[o]), (s = l), (r = c)) : r >= l ? (r = Math.max(r, c)) : (e.fillRect(0, s, n, r - s), (s = l), (r = c));
      }
      e.fillRect(0, s, n, r - s);
    }
  }
  i(63330);
  class ii extends A {
    constructor(e) {
      (super(e), (this.domNode = (0, _.X)(document.createElement("div"))), this.domNode.setAttribute("role", "presentation"), this.domNode.setAttribute("aria-hidden", "true"), this.domNode.setClassName("view-rulers"), (this._renderedRulers = []));
      const t = this._context.configuration.options;
      ((this._rulers = t.get(90)), (this._typicalHalfwidthCharacterWidth = t.get(43).typicalHalfwidthCharacterWidth));
    }
    dispose() {
      super.dispose();
    }
    onConfigurationChanged(e) {
      const t = this._context.configuration.options;
      return ((this._rulers = t.get(90)), (this._typicalHalfwidthCharacterWidth = t.get(43).typicalHalfwidthCharacterWidth), !0);
    }
    onScrollChanged(e) {
      return e.scrollHeightChanged;
    }
    prepareRender(e) {}
    _ensureRulersCount() {
      const e = this._renderedRulers.length,
        t = this._rulers.length;
      if (e === t) return;
      if (e < t) {
        const {
            tabSize: i
          } = this._context.model.getTextModelOptions(),
          n = i;
        let o = t - e;
        for (; o > 0;) {
          const e = (0, _.X)(document.createElement("div"));
          (e.setClassName("view-ruler"), e.setWidth(n), this.domNode.appendChild(e), this._renderedRulers.push(e), o--);
        }
        return;
      }
      let i = e - t;
      for (; i > 0;) {
        const e = this._renderedRulers.pop();
        (this.domNode.removeChild(e), i--);
      }
    }
    render(e) {
      this._ensureRulersCount();
      for (let t = 0, i = this._rulers.length; t < i; t++) {
        const i = this._renderedRulers[t],
          n = this._rulers[t];
        (i.setBoxShadow(n.color ? `1px 0 0 0 ${n.color} inset` : ""), i.setHeight(Math.min(e.scrollHeight, 1e6)), i.setLeft(n.column * this._typicalHalfwidthCharacterWidth));
      }
    }
  }
  (0, Pe.Ic)((e, t) => {
    const i = e.getColor(Oe.zk);
    i && t.addRule(`.monaco-editor .view-ruler { box-shadow: 1px 0 0 0 ${i} inset; }`);
  });
  i(68182);
  class ni extends A {
    constructor(e) {
      (super(e), (this._scrollTop = 0), (this._width = 0), this._updateWidth(), (this._shouldShow = !1));
      const t = this._context.configuration.options.get(91);
      ((this._useShadows = t.useShadows), (this._domNode = (0, _.X)(document.createElement("div"))), this._domNode.setAttribute("role", "presentation"), this._domNode.setAttribute("aria-hidden", "true"));
    }
    dispose() {
      super.dispose();
    }
    _updateShouldShow() {
      const e = this._useShadows && this._scrollTop > 0;
      return this._shouldShow !== e && ((this._shouldShow = e), !0);
    }
    getDomNode() {
      return this._domNode;
    }
    _updateWidth() {
      const e = this._context.configuration.options.get(129);
      0 === e.minimap.renderMinimap || (e.minimap.minimapWidth > 0 && 0 === e.minimap.minimapLeft) ? (this._width = e.width) : (this._width = e.width - e.minimap.minimapWidth - e.verticalScrollbarWidth);
    }
    onConfigurationChanged(e) {
      const t = this._context.configuration.options.get(91);
      return ((this._useShadows = t.useShadows), this._updateWidth(), this._updateShouldShow(), !0);
    }
    onScrollChanged(e) {
      return ((this._scrollTop = e.scrollTop), this._updateShouldShow());
    }
    prepareRender(e) {}
    render(e) {
      (this._domNode.setWidth(this._width), this._domNode.setClassName(this._shouldShow ? "scroll-decoration" : ""));
    }
  }
  (0, Pe.Ic)((e, t) => {
    const i = e.getColor(gt._w);
    i && t.addRule(`.monaco-editor .scroll-decoration { box-shadow: ${i} 0 6px 6px -6px inset; }`);
  });
  i(83254);
  class oi {
    constructor(e) {
      ((this.left = e.left), (this.width = e.width), (this.startStyle = null), (this.endStyle = null));
    }
  }
  class si {
    constructor(e, t) {
      ((this.lineNumber = e), (this.ranges = t));
    }
  }
  function ri(e) {
    return new oi(e);
  }
  function ai(e) {
    return new si(e.lineNumber, e.ranges.map(ri));
  }
  class li extends Ae {
    constructor(e) {
      (super(), (this._previousFrameVisibleRangesWithStyle = []), (this._context = e));
      const t = this._context.configuration.options;
      ((this._lineHeight = t.get(58)), (this._roundedSelection = t.get(89)), (this._typicalHalfwidthCharacterWidth = t.get(43).typicalHalfwidthCharacterWidth), (this._selections = []), (this._renderResult = null), this._context.addEventHandler(this));
    }
    dispose() {
      (this._context.removeEventHandler(this), (this._renderResult = null), super.dispose());
    }
    onConfigurationChanged(e) {
      const t = this._context.configuration.options;
      return ((this._lineHeight = t.get(58)), (this._roundedSelection = t.get(89)), (this._typicalHalfwidthCharacterWidth = t.get(43).typicalHalfwidthCharacterWidth), !0);
    }
    onCursorStateChanged(e) {
      return ((this._selections = e.selections.slice(0)), !0);
    }
    onDecorationsChanged(e) {
      return !0;
    }
    onFlushed(e) {
      return !0;
    }
    onLinesChanged(e) {
      return !0;
    }
    onLinesDeleted(e) {
      return !0;
    }
    onLinesInserted(e) {
      return !0;
    }
    onScrollChanged(e) {
      return e.scrollTopChanged;
    }
    onZonesChanged(e) {
      return !0;
    }
    _visibleRangesHaveGaps(e) {
      for (let t = 0, i = e.length; t < i; t++) {
        if (e[t].ranges.length > 1) return !0;
      }
      return !1;
    }
    _enrichVisibleRangesWithStyle(e, t, i) {
      const n = this._typicalHalfwidthCharacterWidth / 4;
      let o = null,
        s = null;
      if (i && i.length > 0 && t.length > 0) {
        const n = t[0].lineNumber;
        if (n === e.startLineNumber) for (let e = 0; !o && e < i.length; e++) i[e].lineNumber === n && (o = i[e].ranges[0]);
        const r = t[t.length - 1].lineNumber;
        if (r === e.endLineNumber) for (let e = i.length - 1; !s && e >= 0; e--) i[e].lineNumber === r && (s = i[e].ranges[0]);
        (o && !o.startStyle && (o = null), s && !s.startStyle && (s = null));
      }
      for (let e = 0, i = t.length; e < i; e++) {
        const r = t[e].ranges[0],
          a = r.left,
          l = r.left + r.width,
          c = {
            top: 0,
            bottom: 0
          },
          d = {
            top: 0,
            bottom: 0
          };
        if (e > 0) {
          const i = t[e - 1].ranges[0].left,
            o = t[e - 1].ranges[0].left + t[e - 1].ranges[0].width;
          (ci(a - i) < n ? (c.top = 2) : a > i && (c.top = 1), ci(l - o) < n ? (d.top = 2) : i < l && l < o && (d.top = 1));
        } else o && ((c.top = o.startStyle.top), (d.top = o.endStyle.top));
        if (e + 1 < i) {
          const i = t[e + 1].ranges[0].left,
            o = t[e + 1].ranges[0].left + t[e + 1].ranges[0].width;
          (ci(a - i) < n ? (c.bottom = 2) : i < a && a < o && (c.bottom = 1), ci(l - o) < n ? (d.bottom = 2) : l < o && (d.bottom = 1));
        } else s && ((c.bottom = s.startStyle.bottom), (d.bottom = s.endStyle.bottom));
        ((r.startStyle = c), (r.endStyle = d));
      }
    }
    _getVisibleRangesWithStyle(e, t, i) {
      const n = (t.linesVisibleRangesForRange(e, !0) || []).map(ai);
      return (!this._visibleRangesHaveGaps(n) && this._roundedSelection && this._enrichVisibleRangesWithStyle(t.visibleRange, n, i), n);
    }
    _createSelectionPiece(e, t, i, n, o) {
      return ('<div class="cslr ' + i + '" style="top:' + e.toString() + "px;left:" + n.toString() + "px;width:" + o.toString() + "px;height:" + t + 'px;"></div>');
    }
    _actualRenderOneSelection(e, t, i, n) {
      if (0 === n.length) return;
      const o = !!n[0].ranges[0].startStyle,
        s = this._lineHeight.toString(),
        r = (this._lineHeight - 1).toString(),
        a = n[0].lineNumber,
        l = n[n.length - 1].lineNumber;
      for (let c = 0, d = n.length; c < d; c++) {
        const d = n[c],
          h = d.lineNumber,
          u = h - t,
          g = i && (h === l || h === a) ? r : s,
          p = i && h === a ? 1 : 0;
        let f = "",
          m = "";
        for (let e = 0, t = d.ranges.length; e < t; e++) {
          const t = d.ranges[e];
          if (o) {
            const e = t.startStyle,
              i = t.endStyle;
            if (1 === e.top || 1 === e.bottom) {
              f += this._createSelectionPiece(p, g, li.SELECTION_CLASS_NAME, t.left - li.ROUNDED_PIECE_WIDTH, li.ROUNDED_PIECE_WIDTH);
              let i = li.EDITOR_BACKGROUND_CLASS_NAME;
              (1 === e.top && (i += " " + li.SELECTION_TOP_RIGHT), 1 === e.bottom && (i += " " + li.SELECTION_BOTTOM_RIGHT), (f += this._createSelectionPiece(p, g, i, t.left - li.ROUNDED_PIECE_WIDTH, li.ROUNDED_PIECE_WIDTH)));
            }
            if (1 === i.top || 1 === i.bottom) {
              f += this._createSelectionPiece(p, g, li.SELECTION_CLASS_NAME, t.left + t.width, li.ROUNDED_PIECE_WIDTH);
              let e = li.EDITOR_BACKGROUND_CLASS_NAME;
              (1 === i.top && (e += " " + li.SELECTION_TOP_LEFT), 1 === i.bottom && (e += " " + li.SELECTION_BOTTOM_LEFT), (f += this._createSelectionPiece(p, g, e, t.left + t.width, li.ROUNDED_PIECE_WIDTH)));
            }
          }
          let i = li.SELECTION_CLASS_NAME;
          if (o) {
            const e = t.startStyle,
              n = t.endStyle;
            (0 === e.top && (i += " " + li.SELECTION_TOP_LEFT), 0 === e.bottom && (i += " " + li.SELECTION_BOTTOM_LEFT), 0 === n.top && (i += " " + li.SELECTION_TOP_RIGHT), 0 === n.bottom && (i += " " + li.SELECTION_BOTTOM_RIGHT));
          }
          m += this._createSelectionPiece(p, g, i, t.left, t.width);
        }
        ((e[u][0] += f), (e[u][1] += m));
      }
    }
    prepareRender(e) {
      const t = [],
        i = e.visibleRange.startLineNumber,
        n = e.visibleRange.endLineNumber;
      for (let e = i; e <= n; e++) {
        t[e - i] = ["", ""];
      }
      const o = [];
      for (let n = 0, s = this._selections.length; n < s; n++) {
        const s = this._selections[n];
        if (s.isEmpty()) {
          o[n] = null;
          continue;
        }
        const r = this._getVisibleRangesWithStyle(s, e, this._previousFrameVisibleRangesWithStyle[n]);
        ((o[n] = r), this._actualRenderOneSelection(t, i, this._selections.length > 1, r));
      }
      ((this._previousFrameVisibleRangesWithStyle = o), (this._renderResult = t.map(([e, t]) => e + t)));
    }
    render(e, t) {
      if (!this._renderResult) return "";
      const i = t - e;
      return i < 0 || i >= this._renderResult.length ? "" : this._renderResult[i];
    }
  }
  function ci(e) {
    return e < 0 ? -e : e;
  }
  ((li.SELECTION_CLASS_NAME = "selected-text"), (li.SELECTION_TOP_LEFT = "top-left-radius"), (li.SELECTION_BOTTOM_LEFT = "bottom-left-radius"), (li.SELECTION_TOP_RIGHT = "top-right-radius"), (li.SELECTION_BOTTOM_RIGHT = "bottom-right-radius"), (li.EDITOR_BACKGROUND_CLASS_NAME = "monaco-editor-background"), (li.ROUNDED_PIECE_WIDTH = 10), (0, Pe.Ic)((e, t) => {
    const i = e.getColor(gt.hE);
    i && t.addRule(`.monaco-editor .focused .selected-text { background-color: ${i}; }`);
    const n = e.getColor(gt.ES);
    n && t.addRule(`.monaco-editor .selected-text { background-color: ${n}; }`);
    const o = e.getColor(gt.yb);
    o && !o.isTransparent() && t.addRule(`.monaco-editor .view-line span.inline-selected-text { color: ${o}; }`);
  }));
  i(17441);
  class di {
    constructor(e, t, i, n, o, s) {
      ((this.top = e), (this.left = t), (this.width = i), (this.height = n), (this.textContent = o), (this.textContentClassName = s));
    }
  }
  class hi {
    constructor(e) {
      this._context = e;
      const t = this._context.configuration.options,
        i = t.get(43);
      ((this._cursorStyle = t.get(24)), (this._lineHeight = t.get(58)), (this._typicalHalfwidthCharacterWidth = i.typicalHalfwidthCharacterWidth), (this._lineCursorWidth = Math.min(t.get(27), this._typicalHalfwidthCharacterWidth)), (this._isVisible = !0), (this._domNode = (0, _.X)(document.createElement("div"))), this._domNode.setClassName(`cursor ${Ve.S}`), this._domNode.setHeight(this._lineHeight), this._domNode.setTop(0), this._domNode.setLeft(0), p.V.applyFontInfo(this._domNode, i), this._domNode.setDisplay("none"), (this._position = new se.L(1, 1)), (this._lastRenderedContent = ""), (this._renderData = null));
    }
    getDomNode() {
      return this._domNode;
    }
    getPosition() {
      return this._position;
    }
    show() {
      this._isVisible || (this._domNode.setVisibility("inherit"), (this._isVisible = !0));
    }
    hide() {
      this._isVisible && (this._domNode.setVisibility("hidden"), (this._isVisible = !1));
    }
    onConfigurationChanged(e) {
      const t = this._context.configuration.options,
        i = t.get(43);
      return ((this._cursorStyle = t.get(24)), (this._lineHeight = t.get(58)), (this._typicalHalfwidthCharacterWidth = i.typicalHalfwidthCharacterWidth), (this._lineCursorWidth = Math.min(t.get(27), this._typicalHalfwidthCharacterWidth)), p.V.applyFontInfo(this._domNode, i), !0);
    }
    onCursorPositionChanged(e) {
      return ((this._position = e), !0);
    }
    _prepareRender(e) {
      let t = "";
      if (this._cursorStyle === K.d2.Line || this._cursorStyle === K.d2.LineThin) {
        const i = e.visibleRangeForPosition(this._position);
        if (!i || i.outsideRenderedLine) return null;
        let n;
        if (this._cursorStyle === K.d2.Line) {
          if (((n = c.Uh(this._lineCursorWidth > 0 ? this._lineCursorWidth : 2)), n > 2)) {
            const e = this._context.model.getLineContent(this._position.lineNumber),
              i = Te.vH(e, this._position.column - 1);
            t = e.substr(this._position.column - 1, i);
          }
        } else n = c.Uh(1);
        let o = i.left;
        n >= 2 && o >= 1 && (o -= 1);
        const s = e.getVerticalOffsetForLineNumber(this._position.lineNumber) - e.bigNumbersDelta;
        return new di(s, o, n, this._lineHeight, t, "");
      }
      const i = this._context.model.getLineContent(this._position.lineNumber),
        n = Te.vH(i, this._position.column - 1),
        o = e.linesVisibleRangesForRange(new re.e(this._position.lineNumber, this._position.column, this._position.lineNumber, this._position.column + n), !1);
      if (!o || 0 === o.length) return null;
      const s = o[0];
      if (s.outsideRenderedLine || 0 === s.ranges.length) return null;
      const r = s.ranges[0],
        a = r.width < 1 ? this._typicalHalfwidthCharacterWidth : r.width;
      let l = "";
      if (this._cursorStyle === K.d2.Block) {
        const e = this._context.model.getViewLineData(this._position.lineNumber);
        t = i.substr(this._position.column - 1, n);
        const o = e.tokens.findTokenIndexAtOffset(this._position.column - 1);
        l = e.tokens.getClassName(o);
      }
      let d = e.getVerticalOffsetForLineNumber(this._position.lineNumber) - e.bigNumbersDelta,
        h = this._lineHeight;
      return ((this._cursorStyle !== K.d2.Underline && this._cursorStyle !== K.d2.UnderlineThin) || ((d += this._lineHeight - 2), (h = 2)), new di(d, r.left, a, h, t, l));
    }
    prepareRender(e) {
      this._renderData = this._prepareRender(e);
    }
    render(e) {
      return this._renderData ? (this._lastRenderedContent !== this._renderData.textContent && ((this._lastRenderedContent = this._renderData.textContent), (this._domNode.domNode.textContent = this._lastRenderedContent)), this._domNode.setClassName(`cursor ${Ve.S} ${this._renderData.textContentClassName}`), this._domNode.setDisplay("block"), this._domNode.setTop(this._renderData.top), this._domNode.setLeft(this._renderData.left), this._domNode.setWidth(this._renderData.width), this._domNode.setLineHeight(this._renderData.height), this._domNode.setHeight(this._renderData.height), {
        domNode: this._domNode.domNode,
        position: this._position,
        contentLeft: this._renderData.left,
        height: this._renderData.height,
        width: 2
      }) : (this._domNode.setDisplay("none"), null);
    }
  }
  class ui extends A {
    constructor(e) {
      super(e);
      const t = this._context.configuration.options;
      ((this._readOnly = t.get(80)), (this._cursorBlinking = t.get(22)), (this._cursorStyle = t.get(24)), (this._cursorSmoothCaretAnimation = t.get(23)), (this._selectionIsEmpty = !0), (this._isComposingInput = !1), (this._isVisible = !1), (this._primaryCursor = new hi(this._context)), (this._secondaryCursors = []), (this._renderData = []), (this._domNode = (0, _.X)(document.createElement("div"))), this._domNode.setAttribute("role", "presentation"), this._domNode.setAttribute("aria-hidden", "true"), this._updateDomClassName(), this._domNode.appendChild(this._primaryCursor.getDomNode()), (this._startCursorBlinkAnimation = new C._F()), (this._cursorFlatBlinkInterval = new C.zh()), (this._blinkingEnabled = !1), (this._editorHasFocus = !1), this._updateBlinking());
    }
    dispose() {
      (super.dispose(), this._startCursorBlinkAnimation.dispose(), this._cursorFlatBlinkInterval.dispose());
    }
    getDomNode() {
      return this._domNode;
    }
    onCompositionStart(e) {
      return ((this._isComposingInput = !0), this._updateBlinking(), !0);
    }
    onCompositionEnd(e) {
      return ((this._isComposingInput = !1), this._updateBlinking(), !0);
    }
    onConfigurationChanged(e) {
      const t = this._context.configuration.options;
      ((this._readOnly = t.get(80)), (this._cursorBlinking = t.get(22)), (this._cursorStyle = t.get(24)), (this._cursorSmoothCaretAnimation = t.get(23)), this._updateBlinking(), this._updateDomClassName(), this._primaryCursor.onConfigurationChanged(e));
      for (let t = 0, i = this._secondaryCursors.length; t < i; t++) this._secondaryCursors[t].onConfigurationChanged(e);
      return !0;
    }
    _onCursorPositionChanged(e, t) {
      if ((this._primaryCursor.onCursorPositionChanged(e), this._updateBlinking(), this._secondaryCursors.length < t.length)) {
        const e = t.length - this._secondaryCursors.length;
        for (let t = 0; t < e; t++) {
          const e = new hi(this._context);
          (this._domNode.domNode.insertBefore(e.getDomNode().domNode, this._primaryCursor.getDomNode().domNode.nextSibling), this._secondaryCursors.push(e));
        }
      } else if (this._secondaryCursors.length > t.length) {
        const e = this._secondaryCursors.length - t.length;
        for (let t = 0; t < e; t++) (this._domNode.removeChild(this._secondaryCursors[0].getDomNode()), this._secondaryCursors.splice(0, 1));
      }
      for (let e = 0; e < t.length; e++) this._secondaryCursors[e].onCursorPositionChanged(t[e]);
    }
    onCursorStateChanged(e) {
      const t = [];
      for (let i = 0, n = e.selections.length; i < n; i++) t[i] = e.selections[i].getPosition();
      this._onCursorPositionChanged(t[0], t.slice(1));
      const i = e.selections[0].isEmpty();
      return (this._selectionIsEmpty !== i && ((this._selectionIsEmpty = i), this._updateDomClassName()), !0);
    }
    onDecorationsChanged(e) {
      return !0;
    }
    onFlushed(e) {
      return !0;
    }
    onFocusChanged(e) {
      return ((this._editorHasFocus = e.isFocused), this._updateBlinking(), !1);
    }
    onLinesChanged(e) {
      return !0;
    }
    onLinesDeleted(e) {
      return !0;
    }
    onLinesInserted(e) {
      return !0;
    }
    onScrollChanged(e) {
      return !0;
    }
    onTokensChanged(e) {
      const t = t => {
        for (let i = 0, n = e.ranges.length; i < n; i++) if (e.ranges[i].fromLineNumber <= t.lineNumber && t.lineNumber <= e.ranges[i].toLineNumber) return !0;
        return !1;
      };
      if (t(this._primaryCursor.getPosition())) return !0;
      for (const e of this._secondaryCursors) if (t(e.getPosition())) return !0;
      return !1;
    }
    onZonesChanged(e) {
      return !0;
    }
    _getCursorBlinking() {
      return this._isComposingInput ? 0 : this._editorHasFocus ? this._readOnly ? 5 : this._cursorBlinking : 0;
    }
    _updateBlinking() {
      (this._startCursorBlinkAnimation.cancel(), this._cursorFlatBlinkInterval.cancel());
      const e = this._getCursorBlinking(),
        t = 0 === e,
        i = 5 === e;
      (t ? this._hide() : this._show(), (this._blinkingEnabled = !1), this._updateDomClassName(), t || i || (1 === e ? this._cursorFlatBlinkInterval.cancelAndSet(() => {
        this._isVisible ? this._hide() : this._show();
      }, ui.BLINK_INTERVAL) : this._startCursorBlinkAnimation.setIfNotSet(() => {
        ((this._blinkingEnabled = !0), this._updateDomClassName());
      }, ui.BLINK_INTERVAL)));
    }
    _updateDomClassName() {
      this._domNode.setClassName(this._getClassName());
    }
    _getClassName() {
      let e = "cursors-layer";
      switch ((this._selectionIsEmpty || (e += " has-selection"), this._cursorStyle)) {
        case K.d2.Line:
          e += " cursor-line-style";
          break;
        case K.d2.Block:
          e += " cursor-block-style";
          break;
        case K.d2.Underline:
          e += " cursor-underline-style";
          break;
        case K.d2.LineThin:
          e += " cursor-line-thin-style";
          break;
        case K.d2.BlockOutline:
          e += " cursor-block-outline-style";
          break;
        case K.d2.UnderlineThin:
          e += " cursor-underline-thin-style";
          break;
        default:
          e += " cursor-line-style";
      }
      if (this._blinkingEnabled) switch (this._getCursorBlinking()) {
        case 1:
          e += " cursor-blink";
          break;
        case 2:
          e += " cursor-smooth";
          break;
        case 3:
          e += " cursor-phase";
          break;
        case 4:
          e += " cursor-expand";
          break;
        default:
          e += " cursor-solid";
      } else e += " cursor-solid";
      return (this._cursorSmoothCaretAnimation && (e += " cursor-smooth-caret-animation"), e);
    }
    _show() {
      this._primaryCursor.show();
      for (let e = 0, t = this._secondaryCursors.length; e < t; e++) this._secondaryCursors[e].show();
      this._isVisible = !0;
    }
    _hide() {
      this._primaryCursor.hide();
      for (let e = 0, t = this._secondaryCursors.length; e < t; e++) this._secondaryCursors[e].hide();
      this._isVisible = !1;
    }
    prepareRender(e) {
      this._primaryCursor.prepareRender(e);
      for (let t = 0, i = this._secondaryCursors.length; t < i; t++) this._secondaryCursors[t].prepareRender(e);
    }
    render(e) {
      let t = [],
        i = 0;
      const n = this._primaryCursor.render(e);
      n && (t[i++] = n);
      for (let n = 0, o = this._secondaryCursors.length; n < o; n++) {
        const o = this._secondaryCursors[n].render(e);
        o && (t[i++] = o);
      }
      this._renderData = t;
    }
    getLastRenderData() {
      return this._renderData;
    }
  }
  ((ui.BLINK_INTERVAL = 500), (0, Pe.Ic)((e, t) => {
    const i = e.getColor(Oe.n0);
    if (i) {
      let n = e.getColor(Oe.fY);
      (n || (n = i.opposite()), t.addRule(`.monaco-editor .cursors-layer .cursor { background-color: ${i}; border-color: ${i}; color: ${n}; }`), "hc" === e.type && t.addRule(`.monaco-editor .cursors-layer.has-selection .cursor { border-left: 1px solid ${n}; border-right: 1px solid ${n}; }`));
    }
  }));
  const gi = () => {
    throw new Error("Invalid change accessor");
  };
  class pi extends A {
    constructor(e) {
      super(e);
      const t = this._context.configuration.options,
        i = t.get(129);
      ((this._lineHeight = t.get(58)), (this._contentWidth = i.contentWidth), (this._contentLeft = i.contentLeft), (this.domNode = (0, _.X)(document.createElement("div"))), this.domNode.setClassName("view-zones"), this.domNode.setPosition("absolute"), this.domNode.setAttribute("role", "presentation"), this.domNode.setAttribute("aria-hidden", "true"), (this.marginDomNode = (0, _.X)(document.createElement("div"))), this.marginDomNode.setClassName("margin-view-zones"), this.marginDomNode.setPosition("absolute"), this.marginDomNode.setAttribute("role", "presentation"), this.marginDomNode.setAttribute("aria-hidden", "true"), (this._zones = {}));
    }
    dispose() {
      (super.dispose(), (this._zones = {}));
    }
    _recomputeWhitespacesProps() {
      const e = this._context.viewLayout.getWhitespaces(),
        t = new Map();
      for (const i of e) t.set(i.id, i);
      let i = !1;
      return (this._context.model.changeWhitespace(e => {
        const n = Object.keys(this._zones);
        for (let o = 0, s = n.length; o < s; o++) {
          const s = n[o],
            r = this._zones[s],
            a = this._computeWhitespaceProps(r.delegate);
          r.isInHiddenArea = a.isInHiddenArea;
          const l = t.get(s);
          !l || (l.afterLineNumber === a.afterViewLineNumber && l.height === a.heightInPx) || (e.changeOneWhitespace(s, a.afterViewLineNumber, a.heightInPx), this._safeCallOnComputedHeight(r.delegate, a.heightInPx), (i = !0));
        }
      }), i);
    }
    onConfigurationChanged(e) {
      const t = this._context.configuration.options,
        i = t.get(129);
      return ((this._lineHeight = t.get(58)), (this._contentWidth = i.contentWidth), (this._contentLeft = i.contentLeft), e.hasChanged(58) && this._recomputeWhitespacesProps(), !0);
    }
    onLineMappingChanged(e) {
      return this._recomputeWhitespacesProps();
    }
    onLinesDeleted(e) {
      return !0;
    }
    onScrollChanged(e) {
      return e.scrollTopChanged || e.scrollWidthChanged;
    }
    onZonesChanged(e) {
      return !0;
    }
    onLinesInserted(e) {
      return !0;
    }
    _getZoneOrdinal(e) {
      return void 0 !== e.afterColumn ? e.afterColumn : 1e4;
    }
    _computeWhitespaceProps(e) {
      if (0 === e.afterLineNumber) return {
        isInHiddenArea: !1,
        afterViewLineNumber: 0,
        heightInPx: this._heightInPixels(e),
        minWidthInPx: this._minWidthInPixels(e)
      };
      let t, i;
      if (void 0 !== e.afterColumn) t = this._context.model.validateModelPosition({
        lineNumber: e.afterLineNumber,
        column: e.afterColumn
      });else {
        const i = this._context.model.validateModelPosition({
          lineNumber: e.afterLineNumber,
          column: 1
        }).lineNumber;
        t = new se.L(i, this._context.model.getModelLineMaxColumn(i));
      }
      i = t.column === this._context.model.getModelLineMaxColumn(t.lineNumber) ? this._context.model.validateModelPosition({
        lineNumber: t.lineNumber + 1,
        column: 1
      }) : this._context.model.validateModelPosition({
        lineNumber: t.lineNumber,
        column: t.column + 1
      });
      const n = this._context.model.coordinatesConverter.convertModelPositionToViewPosition(t),
        o = this._context.model.coordinatesConverter.modelPositionIsVisible(i);
      return {
        isInHiddenArea: !o,
        afterViewLineNumber: n.lineNumber,
        heightInPx: o ? this._heightInPixels(e) : 0,
        minWidthInPx: this._minWidthInPixels(e)
      };
    }
    changeViewZones(e) {
      let t = !1;
      return (this._context.model.changeWhitespace(i => {
        const n = {
          addZone: e => ((t = !0), this._addZone(i, e)),
          removeZone: e => {
            e && (t = this._removeZone(i, e) || t);
          },
          layoutZone: e => {
            e && (t = this._layoutZone(i, e) || t);
          }
        };
        (!(function (e, t) {
          try {
            return e(t);
          } catch (e) {
            (0, d.dL)(e);
          }
        })(e, n), (n.addZone = gi), (n.removeZone = gi), (n.layoutZone = gi));
      }), t);
    }
    _addZone(e, t) {
      const i = this._computeWhitespaceProps(t),
        n = {
          whitespaceId: e.insertWhitespace(i.afterViewLineNumber, this._getZoneOrdinal(t), i.heightInPx, i.minWidthInPx),
          delegate: t,
          isInHiddenArea: i.isInHiddenArea,
          isVisible: !1,
          domNode: (0, _.X)(t.domNode),
          marginDomNode: t.marginDomNode ? (0, _.X)(t.marginDomNode) : null
        };
      return (this._safeCallOnComputedHeight(n.delegate, i.heightInPx), n.domNode.setPosition("absolute"), (n.domNode.domNode.style.width = "100%"), n.domNode.setDisplay("none"), n.domNode.setAttribute("monaco-view-zone", n.whitespaceId), this.domNode.appendChild(n.domNode), n.marginDomNode && (n.marginDomNode.setPosition("absolute"), (n.marginDomNode.domNode.style.width = "100%"), n.marginDomNode.setDisplay("none"), n.marginDomNode.setAttribute("monaco-view-zone", n.whitespaceId), this.marginDomNode.appendChild(n.marginDomNode)), (this._zones[n.whitespaceId] = n), this.setShouldRender(), n.whitespaceId);
    }
    _removeZone(e, t) {
      if (this._zones.hasOwnProperty(t)) {
        const i = this._zones[t];
        return (delete this._zones[t], e.removeWhitespace(i.whitespaceId), i.domNode.removeAttribute("monaco-visible-view-zone"), i.domNode.removeAttribute("monaco-view-zone"), i.domNode.domNode.parentNode.removeChild(i.domNode.domNode), i.marginDomNode && (i.marginDomNode.removeAttribute("monaco-visible-view-zone"), i.marginDomNode.removeAttribute("monaco-view-zone"), i.marginDomNode.domNode.parentNode.removeChild(i.marginDomNode.domNode)), this.setShouldRender(), !0);
      }
      return !1;
    }
    _layoutZone(e, t) {
      if (this._zones.hasOwnProperty(t)) {
        const i = this._zones[t],
          n = this._computeWhitespaceProps(i.delegate);
        return ((i.isInHiddenArea = n.isInHiddenArea), e.changeOneWhitespace(i.whitespaceId, n.afterViewLineNumber, n.heightInPx), this._safeCallOnComputedHeight(i.delegate, n.heightInPx), this.setShouldRender(), !0);
      }
      return !1;
    }
    shouldSuppressMouseDownOnViewZone(e) {
      if (this._zones.hasOwnProperty(e)) {
        const t = this._zones[e];
        return Boolean(t.delegate.suppressMouseDown);
      }
      return !1;
    }
    _heightInPixels(e) {
      return "number" == typeof e.heightInPx ? e.heightInPx : "number" == typeof e.heightInLines ? this._lineHeight * e.heightInLines : this._lineHeight;
    }
    _minWidthInPixels(e) {
      return "number" == typeof e.minWidthInPx ? e.minWidthInPx : 0;
    }
    _safeCallOnComputedHeight(e, t) {
      if ("function" == typeof e.onComputedHeight) try {
        e.onComputedHeight(t);
      } catch (e) {
        (0, d.dL)(e);
      }
    }
    _safeCallOnDomNodeTop(e, t) {
      if ("function" == typeof e.onDomNodeTop) try {
        e.onDomNodeTop(t);
      } catch (e) {
        (0, d.dL)(e);
      }
    }
    prepareRender(e) {}
    render(e) {
      const t = e.viewportData.whitespaceViewportData,
        i = {};
      let n = !1;
      for (const e of t) this._zones[e.id].isInHiddenArea || ((i[e.id] = e), (n = !0));
      const o = Object.keys(this._zones);
      for (let t = 0, n = o.length; t < n; t++) {
        const n = o[t],
          s = this._zones[n];
        let r = 0,
          a = 0,
          l = "none";
        (i.hasOwnProperty(n) ? ((r = i[n].verticalOffset - e.bigNumbersDelta), (a = i[n].height), (l = "block"), s.isVisible || (s.domNode.setAttribute("monaco-visible-view-zone", "true"), (s.isVisible = !0)), this._safeCallOnDomNodeTop(s.delegate, e.getScrolledTopFromAbsoluteTop(i[n].verticalOffset))) : (s.isVisible && (s.domNode.removeAttribute("monaco-visible-view-zone"), (s.isVisible = !1)), this._safeCallOnDomNodeTop(s.delegate, e.getScrolledTopFromAbsoluteTop(-1e6))), s.domNode.setTop(r), s.domNode.setHeight(a), s.domNode.setDisplay(l), s.marginDomNode && (s.marginDomNode.setTop(r), s.marginDomNode.setHeight(a), s.marginDomNode.setDisplay(l)));
      }
      n && (this.domNode.setWidth(Math.max(e.scrollWidth, this._contentWidth)), this.marginDomNode.setWidth(this._contentLeft));
    }
  }
  class fi {
    constructor(e) {
      this._theme = e;
    }
    get type() {
      return this._theme.type;
    }
    update(e) {
      this._theme = e;
    }
    getColor(e) {
      return this._theme.getColor(e);
    }
  }
  class mi {
    constructor(e, t, i) {
      ((this.configuration = e), (this.theme = new fi(t)), (this.model = i), (this.viewLayout = i.viewLayout));
    }
    addEventHandler(e) {
      this.model.addViewEventHandler(e);
    }
    removeEventHandler(e) {
      this.model.removeViewEventHandler(e);
    }
  }
  class vi {
    constructor(e, t, i, n) {
      ((this.selections = e), (this.startLineNumber = 0 | t.startLineNumber), (this.endLineNumber = 0 | t.endLineNumber), (this.relativeVerticalOffset = t.relativeVerticalOffset), (this.bigNumbersDelta = 0 | t.bigNumbersDelta), (this.whitespaceViewportData = i), (this._model = n), (this.visibleRange = new re.e(t.startLineNumber, this._model.getLineMinColumn(t.startLineNumber), t.endLineNumber, this._model.getLineMaxColumn(t.endLineNumber))));
    }
    getViewLineRenderingData(e) {
      return this._model.getViewLineRenderingData(this.visibleRange, e);
    }
    getDecorationsInViewport() {
      return this._model.getDecorationsInViewport(this.visibleRange);
    }
  }
  class _i extends M {
    constructor(e, t, i, n, o, s) {
      (super(), (this._selections = [new v.Y(1, 1, 1, 1)]), (this._renderAnimationFrame = null));
      const r = new Ue(t, n, o, e);
      ((this._context = new mi(t, i.getColorTheme(), n)), (this._configPixelRatio = this._context.configuration.options.get(127)), this._context.addEventHandler(this), this._register(i.onDidColorThemeChange(e => {
        (this._context.theme.update(e), this._context.model.onDidColorThemeChange(), this.render(!0, !1));
      })), (this._viewParts = []), (this._textAreaHandler = new ze(this._context, r, this._createTextAreaHandlerHelper())), this._viewParts.push(this._textAreaHandler), (this._linesContent = (0, _.X)(document.createElement("div"))), this._linesContent.setClassName("lines-content monaco-editor-background"), this._linesContent.setPosition("absolute"), (this.domNode = (0, _.X)(document.createElement("div"))), this.domNode.setClassName(this._getEditorClassName()), this.domNode.setAttribute("role", "code"), (this._overflowGuardContainer = (0, _.X)(document.createElement("div"))), O.write(this._overflowGuardContainer, 3), this._overflowGuardContainer.setClassName("overflow-guard"), (this._scrollbar = new pt(this._context, this._linesContent, this.domNode, this._overflowGuardContainer)), this._viewParts.push(this._scrollbar), (this._viewLines = new Lt(this._context, this._linesContent)), (this._viewZones = new pi(this._context)), this._viewParts.push(this._viewZones));
      const a = new Jt(this._context);
      this._viewParts.push(a);
      const l = new ni(this._context);
      this._viewParts.push(l);
      const c = new et(this._context);
      (this._viewParts.push(c), c.addDynamicOverlay(new ct(this._context)), c.addDynamicOverlay(new li(this._context)), c.addDynamicOverlay(new yt(this._context)), c.addDynamicOverlay(new ht(this._context)));
      const d = new tt(this._context);
      (this._viewParts.push(d), d.addDynamicOverlay(new dt(this._context)), d.addDynamicOverlay(new vt(this._context)), d.addDynamicOverlay(new Dt(this._context)), d.addDynamicOverlay(new Nt(this._context)), d.addDynamicOverlay(new Re(this._context)));
      const h = new Fe(this._context);
      (h.getDomNode().appendChild(this._viewZones.marginDomNode), h.getDomNode().appendChild(d.getDomNode()), this._viewParts.push(h), (this._contentWidgets = new nt(this._context, this.domNode)), this._viewParts.push(this._contentWidgets), (this._viewCursors = new ui(this._context)), this._viewParts.push(this._viewCursors), (this._overlayWidgets = new Yt(this._context)), this._viewParts.push(this._overlayWidgets));
      const u = new ii(this._context);
      this._viewParts.push(u);
      const g = new qt(this._context);
      if ((this._viewParts.push(g), a)) {
        const e = this._scrollbar.getOverviewRulerLayoutInfo();
        e.parent.insertBefore(a.getDomNode(), e.insertBefore);
      }
      (this._linesContent.appendChild(c.getDomNode()), this._linesContent.appendChild(u.domNode), this._linesContent.appendChild(this._viewZones.domNode), this._linesContent.appendChild(this._viewLines.getDomNode()), this._linesContent.appendChild(this._contentWidgets.domNode), this._linesContent.appendChild(this._viewCursors.getDomNode()), this._overflowGuardContainer.appendChild(h.getDomNode()), this._overflowGuardContainer.appendChild(this._scrollbar.getDomNode()), this._overflowGuardContainer.appendChild(l.getDomNode()), this._overflowGuardContainer.appendChild(this._textAreaHandler.textArea), this._overflowGuardContainer.appendChild(this._textAreaHandler.textAreaCover), this._overflowGuardContainer.appendChild(this._overlayWidgets.getDomNode()), this._overflowGuardContainer.appendChild(g.getDomNode()), this.domNode.appendChild(this._overflowGuardContainer), s ? s.appendChild(this._contentWidgets.overflowingContentWidgetsDomNode.domNode) : this.domNode.appendChild(this._contentWidgets.overflowingContentWidgetsDomNode), this._applyLayout(), (this._pointerHandler = this._register(new Ee(this._context, r, this._createPointerHandlerHelper()))));
    }
    _flushAccumulatedAndRenderNow() {
      this._renderNow();
    }
    _createPointerHandlerHelper() {
      return {
        viewDomNode: this.domNode.domNode,
        linesContentDomNode: this._linesContent.domNode,
        focusTextArea: () => {
          this.focus();
        },
        dispatchTextAreaEvent: e => {
          this._textAreaHandler.textArea.domNode.dispatchEvent(e);
        },
        getLastRenderData: () => {
          const e = this._viewCursors.getLastRenderData() || [],
            t = this._textAreaHandler.getLastRenderData();
          return new he(e, t);
        },
        shouldSuppressMouseDownOnViewZone: e => this._viewZones.shouldSuppressMouseDownOnViewZone(e),
        shouldSuppressMouseDownOnWidget: e => this._contentWidgets.shouldSuppressMouseDownOnWidget(e),
        getPositionFromDOMInfo: (e, t) => (this._flushAccumulatedAndRenderNow(), this._viewLines.getPositionFromDOMInfo(e, t)),
        visibleRangeForPosition: (e, t) => (this._flushAccumulatedAndRenderNow(), this._viewLines.visibleRangeForPosition(new se.L(e, t))),
        getLineWidth: e => (this._flushAccumulatedAndRenderNow(), this._viewLines.getLineWidth(e))
      };
    }
    _createTextAreaHandlerHelper() {
      return {
        visibleRangeForPositionRelativeToEditor: (e, t) => (this._flushAccumulatedAndRenderNow(), this._viewLines.visibleRangeForPosition(new se.L(e, t)))
      };
    }
    _applyLayout() {
      const e = this._context.configuration.options.get(129);
      (this.domNode.setWidth(e.width), this.domNode.setHeight(e.height), this._overflowGuardContainer.setWidth(e.width), this._overflowGuardContainer.setHeight(e.height), this._linesContent.setWidth(1e6), this._linesContent.setHeight(1e6));
    }
    _getEditorClassName() {
      const e = this._textAreaHandler.isFocused() ? " focused" : "";
      return (this._context.configuration.options.get(126) + " " + (0, Pe.m6)(this._context.theme.type) + e);
    }
    handleEvents(e) {
      (super.handleEvents(e), this._scheduleRender());
    }
    onConfigurationChanged(e) {
      return ((this._configPixelRatio = this._context.configuration.options.get(127)), this.domNode.setClassName(this._getEditorClassName()), this._applyLayout(), !1);
    }
    onCursorStateChanged(e) {
      return ((this._selections = e.selections), !1);
    }
    onFocusChanged(e) {
      return (this.domNode.setClassName(this._getEditorClassName()), !1);
    }
    onThemeChanged(e) {
      return (this.domNode.setClassName(this._getEditorClassName()), !1);
    }
    dispose() {
      (null !== this._renderAnimationFrame && (this._renderAnimationFrame.dispose(), (this._renderAnimationFrame = null)), this._contentWidgets.overflowingContentWidgetsDomNode.domNode.remove(), this._context.removeEventHandler(this), this._viewLines.dispose());
      for (const e of this._viewParts) e.dispose();
      super.dispose();
    }
    _scheduleRender() {
      null === this._renderAnimationFrame && (this._renderAnimationFrame = c.lI(this._onRenderScheduled.bind(this), 100));
    }
    _onRenderScheduled() {
      ((this._renderAnimationFrame = null), this._flushAccumulatedAndRenderNow());
    }
    _renderNow() {
      !(function (e) {
        try {
          return e();
        } catch (e) {
          (0, d.dL)(e);
        }
      })(() => this._actualRender());
    }
    _getViewPartsToRender() {
      let e = [],
        t = 0;
      for (const i of this._viewParts) i.shouldRender() && (e[t++] = i);
      return e;
    }
    _actualRender() {
      if (!c.Uw(this.domNode.domNode)) return;
      let e = this._getViewPartsToRender();
      if (!this._viewLines.shouldRender() && 0 === e.length) return;
      const t = this._context.viewLayout.getLinesViewportData();
      this._context.model.setViewport(t.startLineNumber, t.endLineNumber, t.centeredLineNumber);
      const i = new vi(this._selections, t, this._context.viewLayout.getWhitespaceViewportData(), this._context.model);
      (this._contentWidgets.shouldRender() && this._contentWidgets.onBeforeRender(i), this._viewLines.shouldRender() && (this._viewLines.renderText(i), this._viewLines.onDidRender(), (e = this._getViewPartsToRender())));
      const n = new R(this._context.viewLayout, i, this._viewLines);
      for (const t of e) t.prepareRender(n);
      for (const t of e) (t.render(n), t.onDidRender());
      Math.abs(m.mX() - this._configPixelRatio) > 0.001 && this._context.configuration.updatePixelRatio();
    }
    delegateVerticalScrollbarMouseDown(e) {
      this._scrollbar.delegateVerticalScrollbarMouseDown(e);
    }
    restoreState(e) {
      (this._context.model.setScrollPosition({
        scrollTop: e.scrollTop
      }, 1), this._context.model.tokenizeViewport(), this._renderNow(), this._viewLines.updateLineWidths(), this._context.model.setScrollPosition({
        scrollLeft: e.scrollLeft
      }, 1));
    }
    getOffsetForColumn(e, t) {
      const i = this._context.model.validateModelPosition({
          lineNumber: e,
          column: t
        }),
        n = this._context.model.coordinatesConverter.convertModelPositionToViewPosition(i);
      this._flushAccumulatedAndRenderNow();
      const o = this._viewLines.visibleRangeForPosition(new se.L(n.lineNumber, n.column));
      return o ? o.left : -1;
    }
    getTargetAtClientPoint(e, t) {
      const i = this._pointerHandler.getTargetAtClientPoint(e, t);
      return i ? $e.convertViewToModelMouseTarget(i, this._context.model.coordinatesConverter) : null;
    }
    createOverviewRuler(e) {
      return new ti(this._context, e);
    }
    change(e) {
      (this._viewZones.changeViewZones(e), this._scheduleRender());
    }
    render(e, t) {
      if (t) {
        this._viewLines.forceShouldRender();
        for (const e of this._viewParts) e.forceShouldRender();
      }
      e ? this._flushAccumulatedAndRenderNow() : this._scheduleRender();
    }
    focus() {
      this._textAreaHandler.focusTextArea();
    }
    isFocused() {
      return this._textAreaHandler.isFocused();
    }
    setAriaOptions(e) {
      this._textAreaHandler.setAriaOptions(e);
    }
    addContentWidget(e) {
      (this._contentWidgets.addWidget(e.widget), this.layoutContentWidget(e), this._scheduleRender());
    }
    layoutContentWidget(e) {
      let t = (e.position && e.position.range) || null;
      if (null === t) {
        const i = e.position ? e.position.position : null;
        null !== i && (t = new re.e(i.lineNumber, i.column, i.lineNumber, i.column));
      }
      const i = e.position ? e.position.preference : null;
      (this._contentWidgets.setWidgetPosition(e.widget, t, i), this._scheduleRender());
    }
    removeContentWidget(e) {
      (this._contentWidgets.removeWidget(e.widget), this._scheduleRender());
    }
    addOverlayWidget(e) {
      (this._overlayWidgets.addWidget(e.widget), this.layoutOverlayWidget(e), this._scheduleRender());
    }
    layoutOverlayWidget(e) {
      const t = e.position ? e.position.preference : null;
      this._overlayWidgets.setWidgetPosition(e.widget, t) && this._scheduleRender();
    }
    removeOverlayWidget(e) {
      (this._overlayWidgets.removeWidget(e.widget), this._scheduleRender());
    }
  }
  class bi {
    constructor(e) {
      ((this._selTrackedRange = null), (this._trackSelection = !0), this._setState(e, new ae.rS(new re.e(1, 1, 1, 1), 0, new se.L(1, 1), 0), new ae.rS(new re.e(1, 1, 1, 1), 0, new se.L(1, 1), 0)));
    }
    dispose(e) {
      this._removeTrackedRange(e);
    }
    startTrackingSelection(e) {
      ((this._trackSelection = !0), this._updateTrackedRange(e));
    }
    stopTrackingSelection(e) {
      ((this._trackSelection = !1), this._removeTrackedRange(e));
    }
    _updateTrackedRange(e) {
      this._trackSelection && (this._selTrackedRange = e.model._setTrackedRange(this._selTrackedRange, this.modelState.selection, 0));
    }
    _removeTrackedRange(e) {
      this._selTrackedRange = e.model._setTrackedRange(this._selTrackedRange, null, 0);
    }
    asCursorState() {
      return new ae.Vi(this.modelState, this.viewState);
    }
    readSelectionFromMarkers(e) {
      const t = e.model._getTrackedRange(this._selTrackedRange);
      return 0 === this.modelState.selection.getDirection() ? new v.Y(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : new v.Y(t.endLineNumber, t.endColumn, t.startLineNumber, t.startColumn);
    }
    ensureValidState(e) {
      this._setState(e, this.modelState, this.viewState);
    }
    setState(e, t, i) {
      this._setState(e, t, i);
    }
    static _validatePositionWithCache(e, t, i, n) {
      return t.equals(i) ? n : e.normalizePosition(t, 2);
    }
    static _validateViewState(e, t) {
      const i = t.position,
        n = t.selectionStart.getStartPosition(),
        o = t.selectionStart.getEndPosition(),
        s = e.normalizePosition(i, 2),
        r = this._validatePositionWithCache(e, n, i, s),
        a = this._validatePositionWithCache(e, o, n, r);
      return i.equals(s) && n.equals(r) && o.equals(a) ? t : new ae.rS(re.e.fromPositions(r, a), t.selectionStartLeftoverVisibleColumns + n.column - r.column, s, t.leftoverVisibleColumns + i.column - s.column);
    }
    _setState(e, t, i) {
      if ((i && (i = bi._validateViewState(e.viewModel, i)), t)) {
        const i = e.model.validateRange(t.selectionStart),
          n = t.selectionStart.equalsRange(i) ? t.selectionStartLeftoverVisibleColumns : 0,
          o = e.model.validatePosition(t.position),
          s = t.position.equals(o) ? t.leftoverVisibleColumns : 0;
        t = new ae.rS(i, n, o, s);
      } else {
        if (!i) return;
        const n = e.model.validateRange(e.coordinatesConverter.convertViewRangeToModelRange(i.selectionStart)),
          o = e.model.validatePosition(e.coordinatesConverter.convertViewPositionToModelPosition(i.position));
        t = new ae.rS(n, i.selectionStartLeftoverVisibleColumns, o, i.leftoverVisibleColumns);
      }
      if (i) {
        const n = e.coordinatesConverter.validateViewRange(i.selectionStart, t.selectionStart),
          o = e.coordinatesConverter.validateViewPosition(i.position, t.position);
        i = new ae.rS(n, t.selectionStartLeftoverVisibleColumns, o, t.leftoverVisibleColumns);
      } else {
        const n = e.coordinatesConverter.convertModelPositionToViewPosition(new se.L(t.selectionStart.startLineNumber, t.selectionStart.startColumn)),
          o = e.coordinatesConverter.convertModelPositionToViewPosition(new se.L(t.selectionStart.endLineNumber, t.selectionStart.endColumn)),
          s = new re.e(n.lineNumber, n.column, o.lineNumber, o.column),
          r = e.coordinatesConverter.convertModelPositionToViewPosition(t.position);
        i = new ae.rS(s, t.selectionStartLeftoverVisibleColumns, r, t.leftoverVisibleColumns);
      }
      ((this.modelState = t), (this.viewState = i), this._updateTrackedRange(e));
    }
  }
  class wi {
    constructor(e) {
      ((this.context = e), (this.primaryCursor = new bi(e)), (this.secondaryCursors = []), (this.lastAddedCursorIndex = 0));
    }
    dispose() {
      (this.primaryCursor.dispose(this.context), this.killSecondaryCursors());
    }
    startTrackingSelections() {
      this.primaryCursor.startTrackingSelection(this.context);
      for (let e = 0, t = this.secondaryCursors.length; e < t; e++) this.secondaryCursors[e].startTrackingSelection(this.context);
    }
    stopTrackingSelections() {
      this.primaryCursor.stopTrackingSelection(this.context);
      for (let e = 0, t = this.secondaryCursors.length; e < t; e++) this.secondaryCursors[e].stopTrackingSelection(this.context);
    }
    updateContext(e) {
      this.context = e;
    }
    ensureValidState() {
      this.primaryCursor.ensureValidState(this.context);
      for (let e = 0, t = this.secondaryCursors.length; e < t; e++) this.secondaryCursors[e].ensureValidState(this.context);
    }
    readSelectionFromMarkers() {
      let e = [];
      e[0] = this.primaryCursor.readSelectionFromMarkers(this.context);
      for (let t = 0, i = this.secondaryCursors.length; t < i; t++) e[t + 1] = this.secondaryCursors[t].readSelectionFromMarkers(this.context);
      return e;
    }
    getAll() {
      let e = [];
      e[0] = this.primaryCursor.asCursorState();
      for (let t = 0, i = this.secondaryCursors.length; t < i; t++) e[t + 1] = this.secondaryCursors[t].asCursorState();
      return e;
    }
    getViewPositions() {
      let e = [];
      e[0] = this.primaryCursor.viewState.position;
      for (let t = 0, i = this.secondaryCursors.length; t < i; t++) e[t + 1] = this.secondaryCursors[t].viewState.position;
      return e;
    }
    getTopMostViewPosition() {
      let e = this.primaryCursor.viewState.position;
      for (let t = 0, i = this.secondaryCursors.length; t < i; t++) {
        const i = this.secondaryCursors[t].viewState.position;
        i.isBefore(e) && (e = i);
      }
      return e;
    }
    getBottomMostViewPosition() {
      let e = this.primaryCursor.viewState.position;
      for (let t = 0, i = this.secondaryCursors.length; t < i; t++) {
        const i = this.secondaryCursors[t].viewState.position;
        e.isBeforeOrEqual(i) && (e = i);
      }
      return e;
    }
    getSelections() {
      let e = [];
      e[0] = this.primaryCursor.modelState.selection;
      for (let t = 0, i = this.secondaryCursors.length; t < i; t++) e[t + 1] = this.secondaryCursors[t].modelState.selection;
      return e;
    }
    getViewSelections() {
      let e = [];
      e[0] = this.primaryCursor.viewState.selection;
      for (let t = 0, i = this.secondaryCursors.length; t < i; t++) e[t + 1] = this.secondaryCursors[t].viewState.selection;
      return e;
    }
    setSelections(e) {
      this.setStates(ae.Vi.fromModelSelections(e));
    }
    getPrimaryCursor() {
      return this.primaryCursor.asCursorState();
    }
    setStates(e) {
      null !== e && (this.primaryCursor.setState(this.context, e[0].modelState, e[0].viewState), this._setSecondaryStates(e.slice(1)));
    }
    _setSecondaryStates(e) {
      const t = this.secondaryCursors.length,
        i = e.length;
      if (t < i) {
        let e = i - t;
        for (let t = 0; t < e; t++) this._addSecondaryCursor();
      } else if (t > i) {
        let e = t - i;
        for (let t = 0; t < e; t++) this._removeSecondaryCursor(this.secondaryCursors.length - 1);
      }
      for (let t = 0; t < i; t++) this.secondaryCursors[t].setState(this.context, e[t].modelState, e[t].viewState);
    }
    killSecondaryCursors() {
      this._setSecondaryStates([]);
    }
    _addSecondaryCursor() {
      (this.secondaryCursors.push(new bi(this.context)), (this.lastAddedCursorIndex = this.secondaryCursors.length));
    }
    getLastAddedCursorIndex() {
      return 0 === this.secondaryCursors.length || 0 === this.lastAddedCursorIndex ? 0 : this.lastAddedCursorIndex;
    }
    _removeSecondaryCursor(e) {
      (this.lastAddedCursorIndex >= e + 1 && this.lastAddedCursorIndex--, this.secondaryCursors[e].dispose(this.context), this.secondaryCursors.splice(e, 1));
    }
    _getAll() {
      let e = [];
      e[0] = this.primaryCursor;
      for (let t = 0, i = this.secondaryCursors.length; t < i; t++) e[t + 1] = this.secondaryCursors[t];
      return e;
    }
    normalize() {
      if (0 === this.secondaryCursors.length) return;
      let e = this._getAll(),
        t = [];
      for (let i = 0, n = e.length; i < n; i++) t.push({
        index: i,
        selection: e[i].modelState.selection
      });
      t.sort((e, t) => e.selection.startLineNumber === t.selection.startLineNumber ? e.selection.startColumn - t.selection.startColumn : e.selection.startLineNumber - t.selection.startLineNumber);
      for (let i = 0; i < t.length - 1; i++) {
        const n = t[i],
          o = t[i + 1],
          s = n.selection,
          r = o.selection;
        if (!this.context.cursorConfig.multiCursorMergeOverlapping) continue;
        let a;
        if (((a = r.isEmpty() || s.isEmpty() ? r.getStartPosition().isBeforeOrEqual(s.getEndPosition()) : r.getStartPosition().isBefore(s.getEndPosition())), a)) {
          const s = n.index < o.index ? i : i + 1,
            r = n.index < o.index ? i + 1 : i,
            a = t[r].index,
            l = t[s].index,
            c = t[r].selection,
            d = t[s].selection;
          if (!c.equalsSelection(d)) {
            const i = c.plusRange(d),
              n = c.selectionStartLineNumber === c.startLineNumber && c.selectionStartColumn === c.startColumn,
              o = d.selectionStartLineNumber === d.startLineNumber && d.selectionStartColumn === d.startColumn;
            let r, h;
            (a === this.lastAddedCursorIndex ? ((r = n), (this.lastAddedCursorIndex = l)) : (r = o), (h = r ? new v.Y(i.startLineNumber, i.startColumn, i.endLineNumber, i.endColumn) : new v.Y(i.endLineNumber, i.endColumn, i.startLineNumber, i.startColumn)), (t[s].selection = h));
            const u = ae.Vi.fromModelSelection(h);
            e[l].setState(this.context, u.modelState, u.viewState);
          }
          for (const e of t) e.index > a && e.index--;
          (e.splice(a, 1), t.splice(r, 1), this._removeSecondaryCursor(a - 1), i--);
        }
      }
    }
  }
  var yi = i(31380),
    Ci = i(23582),
    xi = i(83256);
  class Si {
    constructor() {
      this.type = 0;
    }
  }
  class ki {
    constructor() {
      this.type = 1;
    }
  }
  class Li {
    constructor(e) {
      ((this.type = 2), (this._source = e));
    }
    hasChanged(e) {
      return this._source.hasChanged(e);
    }
  }
  class Ni {
    constructor(e, t) {
      ((this.type = 3), (this.selections = e), (this.modelSelections = t));
    }
  }
  class Di {
    constructor(e) {
      ((this.type = 4), e ? ((this.affectsMinimap = e.affectsMinimap), (this.affectsOverviewRuler = e.affectsOverviewRuler)) : ((this.affectsMinimap = !0), (this.affectsOverviewRuler = !0)));
    }
  }
  class Ii {
    constructor() {
      this.type = 5;
    }
  }
  class Ei {
    constructor(e) {
      ((this.type = 6), (this.isFocused = e));
    }
  }
  class Ti {
    constructor() {
      this.type = 7;
    }
  }
  class Mi {
    constructor() {
      this.type = 8;
    }
  }
  class Ai {
    constructor(e, t) {
      ((this.type = 9), (this.fromLineNumber = e), (this.toLineNumber = t));
    }
  }
  class Oi {
    constructor(e, t) {
      ((this.type = 10), (this.fromLineNumber = e), (this.toLineNumber = t));
    }
  }
  class Pi {
    constructor(e, t) {
      ((this.type = 11), (this.fromLineNumber = e), (this.toLineNumber = t));
    }
  }
  class Ri {
    constructor(e, t, i, n, o, s) {
      ((this.type = 12), (this.source = e), (this.range = t), (this.selections = i), (this.verticalType = n), (this.revealHorizontal = o), (this.scrollType = s));
    }
  }
  class Fi {
    constructor(e) {
      ((this.type = 13), (this.scrollWidth = e.scrollWidth), (this.scrollLeft = e.scrollLeft), (this.scrollHeight = e.scrollHeight), (this.scrollTop = e.scrollTop), (this.scrollWidthChanged = e.scrollWidthChanged), (this.scrollLeftChanged = e.scrollLeftChanged), (this.scrollHeightChanged = e.scrollHeightChanged), (this.scrollTopChanged = e.scrollTopChanged));
    }
  }
  class Bi {
    constructor() {
      this.type = 14;
    }
  }
  class Vi {
    constructor(e) {
      ((this.type = 15), (this.ranges = e));
    }
  }
  class Wi {
    constructor() {
      this.type = 16;
    }
  }
  class Hi {
    constructor() {
      this.type = 17;
    }
  }
  class zi extends u.JT {
    constructor() {
      (super(), (this._onEvent = this._register(new h.Q5())), (this.onEvent = this._onEvent.event), (this._eventHandlers = []), (this._viewEventQueue = null), (this._isConsumingViewEventQueue = !1), (this._collector = null), (this._collectorCnt = 0), (this._outgoingEvents = []));
    }
    emitOutgoingEvent(e) {
      (this._addOutgoingEvent(e), this._emitOutgoingEvents());
    }
    _addOutgoingEvent(e) {
      for (let t = 0, i = this._outgoingEvents.length; t < i; t++) if (this._outgoingEvents[t].kind === e.kind) return void (this._outgoingEvents[t] = this._outgoingEvents[t].merge(e));
      this._outgoingEvents.push(e);
    }
    _emitOutgoingEvents() {
      for (; this._outgoingEvents.length > 0;) {
        if (this._collector || this._isConsumingViewEventQueue) return;
        const e = this._outgoingEvents.shift();
        e.isNoOp() || this._onEvent.fire(e);
      }
    }
    addViewEventHandler(e) {
      for (let t = 0, i = this._eventHandlers.length; t < i; t++) this._eventHandlers[t] === e && console.warn("Detected duplicate listener in ViewEventDispatcher", e);
      this._eventHandlers.push(e);
    }
    removeViewEventHandler(e) {
      for (let t = 0; t < this._eventHandlers.length; t++) if (this._eventHandlers[t] === e) {
        this._eventHandlers.splice(t, 1);
        break;
      }
    }
    beginEmitViewEvents() {
      return (this._collectorCnt++, 1 === this._collectorCnt && (this._collector = new ji()), this._collector);
    }
    endEmitViewEvents() {
      if ((this._collectorCnt--, 0 === this._collectorCnt)) {
        const e = this._collector.outgoingEvents,
          t = this._collector.viewEvents;
        this._collector = null;
        for (const t of e) this._addOutgoingEvent(t);
        t.length > 0 && this._emitMany(t);
      }
      this._emitOutgoingEvents();
    }
    emitSingleViewEvent(e) {
      try {
        this.beginEmitViewEvents().emitViewEvent(e);
      } finally {
        this.endEmitViewEvents();
      }
    }
    _emitMany(e) {
      (this._viewEventQueue ? (this._viewEventQueue = this._viewEventQueue.concat(e)) : (this._viewEventQueue = e), this._isConsumingViewEventQueue || this._consumeViewEventQueue());
    }
    _consumeViewEventQueue() {
      try {
        ((this._isConsumingViewEventQueue = !0), this._doConsumeQueue());
      } finally {
        this._isConsumingViewEventQueue = !1;
      }
    }
    _doConsumeQueue() {
      for (; this._viewEventQueue;) {
        const e = this._viewEventQueue;
        this._viewEventQueue = null;
        const t = this._eventHandlers.slice(0);
        for (const i of t) i.handleEvents(e);
      }
    }
  }
  class ji {
    constructor() {
      ((this.viewEvents = []), (this.outgoingEvents = []));
    }
    emitViewEvent(e) {
      this.viewEvents.push(e);
    }
    emitOutgoingEvent(e) {
      this.outgoingEvents.push(e);
    }
  }
  class Ui {
    constructor(e, t, i, n) {
      ((this.kind = 0), (this._oldContentWidth = e), (this._oldContentHeight = t), (this.contentWidth = i), (this.contentHeight = n), (this.contentWidthChanged = this._oldContentWidth !== this.contentWidth), (this.contentHeightChanged = this._oldContentHeight !== this.contentHeight));
    }
    isNoOp() {
      return !this.contentWidthChanged && !this.contentHeightChanged;
    }
    merge(e) {
      return 0 !== e.kind ? this : new Ui(this._oldContentWidth, this._oldContentHeight, e.contentWidth, e.contentHeight);
    }
  }
  class $i {
    constructor(e, t) {
      ((this.kind = 1), (this.oldHasFocus = e), (this.hasFocus = t));
    }
    isNoOp() {
      return this.oldHasFocus === this.hasFocus;
    }
    merge(e) {
      return 1 !== e.kind ? this : new $i(this.oldHasFocus, e.hasFocus);
    }
  }
  class Ki {
    constructor(e, t, i, n, o, s, r, a) {
      ((this.kind = 2), (this._oldScrollWidth = e), (this._oldScrollLeft = t), (this._oldScrollHeight = i), (this._oldScrollTop = n), (this.scrollWidth = o), (this.scrollLeft = s), (this.scrollHeight = r), (this.scrollTop = a), (this.scrollWidthChanged = this._oldScrollWidth !== this.scrollWidth), (this.scrollLeftChanged = this._oldScrollLeft !== this.scrollLeft), (this.scrollHeightChanged = this._oldScrollHeight !== this.scrollHeight), (this.scrollTopChanged = this._oldScrollTop !== this.scrollTop));
    }
    isNoOp() {
      return !(this.scrollWidthChanged || this.scrollLeftChanged || this.scrollHeightChanged || this.scrollTopChanged);
    }
    merge(e) {
      return 2 !== e.kind ? this : new Ki(this._oldScrollWidth, this._oldScrollLeft, this._oldScrollHeight, this._oldScrollTop, e.scrollWidth, e.scrollLeft, e.scrollHeight, e.scrollTop);
    }
  }
  class qi {
    constructor() {
      this.kind = 3;
    }
    isNoOp() {
      return !1;
    }
    merge(e) {
      return this;
    }
  }
  class Zi {
    constructor(e, t, i, n, o, s, r) {
      ((this.kind = 6), (this.oldSelections = e), (this.selections = t), (this.oldModelVersionId = i), (this.modelVersionId = n), (this.source = o), (this.reason = s), (this.reachedMaxCursorCount = r));
    }
    static _selectionsAreEqual(e, t) {
      if (!e && !t) return !0;
      if (!e || !t) return !1;
      const i = e.length;
      if (i !== t.length) return !1;
      for (let n = 0; n < i; n++) if (!e[n].equalsSelection(t[n])) return !1;
      return !0;
    }
    isNoOp() {
      return (Zi._selectionsAreEqual(this.oldSelections, this.selections) && this.oldModelVersionId === this.modelVersionId);
    }
    merge(e) {
      return 6 !== e.kind ? this : new Zi(this.oldSelections, e.selections, this.oldModelVersionId, e.modelVersionId, e.source, e.reason, this.reachedMaxCursorCount || e.reachedMaxCursorCount);
    }
  }
  class Gi {
    constructor() {
      this.kind = 5;
    }
    isNoOp() {
      return !1;
    }
    merge(e) {
      return this;
    }
  }
  class Yi {
    constructor(e, t) {
      ((this.modelVersionId = e.getVersionId()), (this.cursorState = t.getCursorStates()));
    }
    equals(e) {
      if (!e) return !1;
      if (this.modelVersionId !== e.modelVersionId) return !1;
      if (this.cursorState.length !== e.cursorState.length) return !1;
      for (let t = 0, i = this.cursorState.length; t < i; t++) if (!this.cursorState[t].equals(e.cursorState[t])) return !1;
      return !0;
    }
  }
  class Qi {
    constructor(e, t, i) {
      ((this._model = e), (this._autoClosedCharactersDecorations = t), (this._autoClosedEnclosingDecorations = i));
    }
    static getAllAutoClosedCharacters(e) {
      let t = [];
      for (const i of e) t = t.concat(i.getAutoClosedCharactersRanges());
      return t;
    }
    dispose() {
      ((this._autoClosedCharactersDecorations = this._model.deltaDecorations(this._autoClosedCharactersDecorations, [])), (this._autoClosedEnclosingDecorations = this._model.deltaDecorations(this._autoClosedEnclosingDecorations, [])));
    }
    getAutoClosedCharactersRanges() {
      let e = [];
      for (let t = 0; t < this._autoClosedCharactersDecorations.length; t++) {
        const i = this._model.getDecorationRange(this._autoClosedCharactersDecorations[t]);
        i && e.push(i);
      }
      return e;
    }
    isValid(e) {
      let t = [];
      for (let e = 0; e < this._autoClosedEnclosingDecorations.length; e++) {
        const i = this._model.getDecorationRange(this._autoClosedEnclosingDecorations[e]);
        if (i && (t.push(i), i.startLineNumber !== i.endLineNumber)) return !1;
      }
      (t.sort(re.e.compareRangesUsingStarts), e.sort(re.e.compareRangesUsingStarts));
      for (let i = 0; i < e.length; i++) {
        if (i >= t.length) return !1;
        if (!t[i].strictContainsRange(e[i])) return !1;
      }
      return !0;
    }
  }
  class Xi extends u.JT {
    constructor(e, t, i, n) {
      (super(), (this._model = e), (this._knownModelVersionId = this._model.getVersionId()), (this._viewModel = t), (this._coordinatesConverter = i), (this.context = new ae.zp(this._model, this._viewModel, this._coordinatesConverter, n)), (this._cursors = new wi(this.context)), (this._hasFocus = !1), (this._isHandling = !1), (this._isDoingComposition = !1), (this._selectionsWhenCompositionStarted = null), (this._columnSelectData = null), (this._autoClosedActions = []), (this._prevEditOperationType = 0));
    }
    dispose() {
      (this._cursors.dispose(), (this._autoClosedActions = (0, u.B9)(this._autoClosedActions)), super.dispose());
    }
    updateConfiguration(e) {
      ((this.context = new ae.zp(this._model, this._viewModel, this._coordinatesConverter, e)), this._cursors.updateContext(this.context));
    }
    onLineMappingChanged(e) {
      this._knownModelVersionId === this._model.getVersionId() && this.setStates(e, "viewModel", 0, this.getCursorStates());
    }
    setHasFocus(e) {
      this._hasFocus = e;
    }
    _validateAutoClosedActions() {
      if (this._autoClosedActions.length > 0) {
        let e = this._cursors.getSelections();
        for (let t = 0; t < this._autoClosedActions.length; t++) {
          const i = this._autoClosedActions[t];
          i.isValid(e) || (i.dispose(), this._autoClosedActions.splice(t, 1), t--);
        }
      }
    }
    getPrimaryCursorState() {
      return this._cursors.getPrimaryCursor();
    }
    getLastAddedCursorIndex() {
      return this._cursors.getLastAddedCursorIndex();
    }
    getCursorStates() {
      return this._cursors.getAll();
    }
    setStates(e, t, i, n) {
      let o = !1;
      null !== n && n.length > Xi.MAX_CURSOR_COUNT && ((n = n.slice(0, Xi.MAX_CURSOR_COUNT)), (o = !0));
      const s = new Yi(this._model, this);
      return (this._cursors.setStates(n), this._cursors.normalize(), (this._columnSelectData = null), this._validateAutoClosedActions(), this._emitStateChangedIfNecessary(e, t, i, s, o));
    }
    setCursorColumnSelectData(e) {
      this._columnSelectData = e;
    }
    revealPrimary(e, t, i, n) {
      const o = this._cursors.getViewPositions();
      if (o.length > 1) this._emitCursorRevealRange(e, t, null, this._cursors.getViewSelections(), 0, i, n);else {
        const s = o[0],
          r = new re.e(s.lineNumber, s.column, s.lineNumber, s.column);
        this._emitCursorRevealRange(e, t, r, null, 0, i, n);
      }
    }
    _revealPrimaryCursor(e, t, i, n, o) {
      const s = this._cursors.getViewPositions();
      if (s.length > 1) this._emitCursorRevealRange(e, t, null, this._cursors.getViewSelections(), i, n, o);else {
        const r = s[0],
          a = new re.e(r.lineNumber, r.column, r.lineNumber, r.column);
        this._emitCursorRevealRange(e, t, a, null, i, n, o);
      }
    }
    _emitCursorRevealRange(e, t, i, n, o, s, r) {
      e.emitViewEvent(new Ri(t, i, n, o, s, r));
    }
    saveState() {
      let e = [];
      const t = this._cursors.getSelections();
      for (let i = 0, n = t.length; i < n; i++) {
        const n = t[i];
        e.push({
          inSelectionMode: !n.isEmpty(),
          selectionStart: {
            lineNumber: n.selectionStartLineNumber,
            column: n.selectionStartColumn
          },
          position: {
            lineNumber: n.positionLineNumber,
            column: n.positionColumn
          }
        });
      }
      return e;
    }
    restoreState(e, t) {
      let i = [];
      for (let e = 0, n = t.length; e < n; e++) {
        const n = t[e];
        let o = 1,
          s = 1;
        (n.position && n.position.lineNumber && (o = n.position.lineNumber), n.position && n.position.column && (s = n.position.column));
        let r = o,
          a = s;
        (n.selectionStart && n.selectionStart.lineNumber && (r = n.selectionStart.lineNumber), n.selectionStart && n.selectionStart.column && (a = n.selectionStart.column), i.push({
          selectionStartLineNumber: r,
          selectionStartColumn: a,
          positionLineNumber: o,
          positionColumn: s
        }));
      }
      (this.setStates(e, "restoreState", 0, ae.Vi.fromModelSelections(i)), this.revealPrimary(e, "restoreState", !0, 1));
    }
    onModelContentChanged(e, t) {
      if (t instanceof xi.D8) {
        if (this._isHandling) return;
        this._isHandling = !0;
        try {
          this.setStates(e, "modelChange", 0, this.getCursorStates());
        } finally {
          this._isHandling = !1;
        }
      } else {
        if (((this._knownModelVersionId = t.versionId), this._isHandling)) return;
        const i = t.containsEvent(1);
        if (((this._prevEditOperationType = 0), i)) (this._cursors.dispose(), (this._cursors = new wi(this.context)), this._validateAutoClosedActions(), this._emitStateChangedIfNecessary(e, "model", 1, null, !1));else if (this._hasFocus && t.resultingSelection && t.resultingSelection.length > 0) {
          const i = ae.Vi.fromModelSelections(t.resultingSelection);
          this.setStates(e, "modelChange", t.isUndoing ? 5 : t.isRedoing ? 6 : 2, i) && this._revealPrimaryCursor(e, "modelChange", 0, !0, 0);
        } else {
          const t = this._cursors.readSelectionFromMarkers();
          this.setStates(e, "modelChange", 2, ae.Vi.fromModelSelections(t));
        }
      }
    }
    getSelection() {
      return this._cursors.getPrimaryCursor().modelState.selection;
    }
    getTopMostViewPosition() {
      return this._cursors.getTopMostViewPosition();
    }
    getBottomMostViewPosition() {
      return this._cursors.getBottomMostViewPosition();
    }
    getCursorColumnSelectData() {
      if (this._columnSelectData) return this._columnSelectData;
      const e = this._cursors.getPrimaryCursor(),
        t = e.viewState.selectionStart.getStartPosition(),
        i = e.viewState.position;
      return {
        isReal: !1,
        fromViewLineNumber: t.lineNumber,
        fromViewVisualColumn: ae.io.visibleColumnFromColumn2(this.context.cursorConfig, this._viewModel, t),
        toViewLineNumber: i.lineNumber,
        toViewVisualColumn: ae.io.visibleColumnFromColumn2(this.context.cursorConfig, this._viewModel, i)
      };
    }
    getSelections() {
      return this._cursors.getSelections();
    }
    setSelections(e, t, i, n) {
      this.setStates(e, t, n, ae.Vi.fromModelSelections(i));
    }
    getPrevEditOperationType() {
      return this._prevEditOperationType;
    }
    setPrevEditOperationType(e) {
      this._prevEditOperationType = e;
    }
    _pushAutoClosedAction(e, t) {
      let i = [],
        n = [];
      for (let o = 0, s = e.length; o < s; o++) (i.push({
        range: e[o],
        options: {
          description: "auto-closed-character",
          inlineClassName: "auto-closed-character",
          stickiness: 1
        }
      }), n.push({
        range: t[o],
        options: {
          description: "auto-closed-enclosing",
          stickiness: 1
        }
      }));
      const o = this._model.deltaDecorations([], i),
        s = this._model.deltaDecorations([], n);
      this._autoClosedActions.push(new Qi(this._model, o, s));
    }
    _executeEditOperation(e) {
      if (!e) return;
      e.shouldPushStackElementBefore && this._model.pushStackElement();
      const t = Ji.executeCommands(this._model, this._cursors.getSelections(), e.commands);
      if (t) {
        this._interpretCommandResult(t);
        let i = [],
          n = [];
        for (let t = 0; t < e.commands.length; t++) {
          const o = e.commands[t];
          o instanceof Ci.g && o.enclosingRange && o.closeCharacterRange && (i.push(o.closeCharacterRange), n.push(o.enclosingRange));
        }
        (i.length > 0 && this._pushAutoClosedAction(i, n), (this._prevEditOperationType = e.type));
      }
      e.shouldPushStackElementAfter && this._model.pushStackElement();
    }
    _interpretCommandResult(e) {
      ((e && 0 !== e.length) || (e = this._cursors.readSelectionFromMarkers()), (this._columnSelectData = null), this._cursors.setSelections(e), this._cursors.normalize());
    }
    _emitStateChangedIfNecessary(e, t, i, n, o) {
      const s = new Yi(this._model, this);
      if (s.equals(n)) return !1;
      const r = this._cursors.getSelections(),
        a = this._cursors.getViewSelections();
      if ((e.emitViewEvent(new Ni(a, r)), !n || n.cursorState.length !== s.cursorState.length || s.cursorState.some((e, t) => !e.modelState.equals(n.cursorState[t].modelState)))) {
        const a = n ? n.cursorState.map(e => e.modelState.selection) : null,
          l = n ? n.modelVersionId : 0;
        e.emitOutgoingEvent(new Zi(a, r, l, s.modelVersionId, t || "keyboard", i, o));
      }
      return !0;
    }
    _findAutoClosingPairs(e) {
      if (!e.length) return null;
      let t = [];
      for (let i = 0, n = e.length; i < n; i++) {
        const n = e[i];
        if (!n.text || n.text.indexOf("\n") >= 0) return null;
        const o = n.text.match(/([)\]}>'"`])([^)\]}>'"`]*)$/);
        if (!o) return null;
        const s = o[1],
          r = this.context.cursorConfig.autoClosingPairs.autoClosingPairsCloseSingleChar.get(s);
        if (!r || 1 !== r.length) return null;
        const a = r[0].open,
          l = n.text.length - o[2].length - 1,
          c = n.text.lastIndexOf(a, l - 1);
        if (-1 === c) return null;
        t.push([c, l]);
      }
      return t;
    }
    executeEdits(e, t, i, n) {
      let o = null;
      ("snippet" === t && (o = this._findAutoClosingPairs(i)), o && (i[0]._isTracked = !0));
      let s = [],
        r = [];
      const a = this._model.pushEditOperations(this.getSelections(), i, e => {
        if (o) for (let t = 0, i = o.length; t < i; t++) {
          const [i, n] = o[t],
            a = e[t],
            l = a.range.startLineNumber,
            c = a.range.startColumn - 1 + i,
            d = a.range.startColumn - 1 + n;
          (s.push(new re.e(l, d + 1, l, d + 2)), r.push(new re.e(l, c + 1, l, d + 2)));
        }
        const t = n(e);
        return (t && (this._isHandling = !0), t);
      });
      (a && ((this._isHandling = !1), this.setSelections(e, t, a, 0)), s.length > 0 && this._pushAutoClosedAction(s, r));
    }
    _executeEdit(e, t, i, n = 0) {
      if (this.context.cursorConfig.readOnly) return;
      const o = new Yi(this._model, this);
      (this._cursors.stopTrackingSelections(), (this._isHandling = !0));
      try {
        (this._cursors.ensureValidState(), e());
      } catch (e) {
        (0, d.dL)(e);
      }
      ((this._isHandling = !1), this._cursors.startTrackingSelections(), this._validateAutoClosedActions(), this._emitStateChangedIfNecessary(t, i, n, o, !1) && this._revealPrimaryCursor(t, i, 0, !0, 0));
    }
    setIsDoingComposition(e) {
      this._isDoingComposition = e;
    }
    getAutoClosedCharacters() {
      return Qi.getAllAutoClosedCharacters(this._autoClosedActions);
    }
    startComposition(e) {
      this._selectionsWhenCompositionStarted = this.getSelections().slice(0);
    }
    endComposition(e, t) {
      this._executeEdit(() => {
        "keyboard" === t && (this._executeEditOperation(Ci.u.compositionEndWithInterceptors(this._prevEditOperationType, this.context.cursorConfig, this._model, this._selectionsWhenCompositionStarted, this.getSelections(), this.getAutoClosedCharacters())), (this._selectionsWhenCompositionStarted = null));
      }, e, t);
    }
    type(e, t, i) {
      this._executeEdit(() => {
        if ("keyboard" === i) {
          const e = t.length;
          let i = 0;
          for (; i < e;) {
            const e = Te.vH(t, i),
              n = t.substr(i, e);
            (this._executeEditOperation(Ci.u.typeWithInterceptors(this._isDoingComposition, this._prevEditOperationType, this.context.cursorConfig, this._model, this.getSelections(), this.getAutoClosedCharacters(), n)), (i += e));
          }
        } else this._executeEditOperation(Ci.u.typeWithoutInterceptors(this._prevEditOperationType, this.context.cursorConfig, this._model, this.getSelections(), t));
      }, e, i);
    }
    compositionType(e, t, i, n, o, s) {
      if (0 !== t.length || 0 !== i || 0 !== n) this._executeEdit(() => {
        this._executeEditOperation(Ci.u.compositionType(this._prevEditOperationType, this.context.cursorConfig, this._model, this.getSelections(), t, i, n, o));
      }, e, s);else if (0 !== o) {
        const t = this.getSelections().map(e => {
          const t = e.getPosition();
          return new v.Y(t.lineNumber, t.column + o, t.lineNumber, t.column + o);
        });
        this.setSelections(e, s, t, 0);
      }
    }
    paste(e, t, i, n, o) {
      this._executeEdit(() => {
        this._executeEditOperation(Ci.u.paste(this.context.cursorConfig, this._model, this.getSelections(), t, i, n || []));
      }, e, o, 4);
    }
    cut(e, t) {
      this._executeEdit(() => {
        this._executeEditOperation(yi.A.cut(this.context.cursorConfig, this._model, this.getSelections()));
      }, e, t);
    }
    executeCommand(e, t, i) {
      this._executeEdit(() => {
        (this._cursors.killSecondaryCursors(), this._executeEditOperation(new ae.Tp(0, [t], {
          shouldPushStackElementBefore: !1,
          shouldPushStackElementAfter: !1
        })));
      }, e, i);
    }
    executeCommands(e, t, i) {
      this._executeEdit(() => {
        this._executeEditOperation(new ae.Tp(0, t, {
          shouldPushStackElementBefore: !1,
          shouldPushStackElementAfter: !1
        }));
      }, e, i);
    }
  }
  Xi.MAX_CURSOR_COUNT = 1e4;
  class Ji {
    static executeCommands(e, t, i) {
      const n = {
          model: e,
          selectionsBefore: t,
          trackedRanges: [],
          trackedRangesDirection: []
        },
        o = this._innerExecuteCommands(n, i);
      for (let e = 0, t = n.trackedRanges.length; e < t; e++) n.model._setTrackedRange(n.trackedRanges[e], null, 0);
      return o;
    }
    static _innerExecuteCommands(e, t) {
      if (this._arrayIsEmpty(t)) return null;
      const i = this._getEditOperations(e, t);
      if (0 === i.operations.length) return null;
      const n = i.operations,
        o = this._getLoserCursorMap(n);
      if (o.hasOwnProperty("0")) return (console.warn("Ignoring commands"), null);
      let s = [];
      for (let e = 0, t = n.length; e < t; e++) o.hasOwnProperty(n[e].identifier.major.toString()) || s.push(n[e]);
      i.hadTrackedEditOperation && s.length > 0 && (s[0]._isTracked = !0);
      let r = e.model.pushEditOperations(e.selectionsBefore, s, i => {
        let n = [];
        for (let t = 0; t < e.selectionsBefore.length; t++) n[t] = [];
        for (const e of i) e.identifier && n[e.identifier.major].push(e);
        const o = (e, t) => e.identifier.minor - t.identifier.minor;
        let s = [];
        for (let i = 0; i < e.selectionsBefore.length; i++) n[i].length > 0 ? (n[i].sort(o), (s[i] = t[i].computeCursorState(e.model, {
          getInverseEditOperations: () => n[i],
          getTrackedSelection: t => {
            const i = parseInt(t, 10),
              n = e.model._getTrackedRange(e.trackedRanges[i]);
            return 0 === e.trackedRangesDirection[i] ? new v.Y(n.startLineNumber, n.startColumn, n.endLineNumber, n.endColumn) : new v.Y(n.endLineNumber, n.endColumn, n.startLineNumber, n.startColumn);
          }
        }))) : (s[i] = e.selectionsBefore[i]);
        return s;
      });
      r || (r = e.selectionsBefore);
      let a = [];
      for (let e in o) o.hasOwnProperty(e) && a.push(parseInt(e, 10));
      a.sort((e, t) => t - e);
      for (const e of a) r.splice(e, 1);
      return r;
    }
    static _arrayIsEmpty(e) {
      for (let t = 0, i = e.length; t < i; t++) if (e[t]) return !1;
      return !0;
    }
    static _getEditOperations(e, t) {
      let i = [],
        n = !1;
      for (let o = 0, s = t.length; o < s; o++) {
        const s = t[o];
        if (s) {
          const t = this._getEditOperationsFromCommand(e, o, s);
          ((i = i.concat(t.operations)), (n = n || t.hadTrackedEditOperation));
        }
      }
      return {
        operations: i,
        hadTrackedEditOperation: n
      };
    }
    static _getEditOperationsFromCommand(e, t, i) {
      let n = [],
        o = 0;
      const s = (e, s, r = !1) => {
        (re.e.isEmpty(e) && "" === s) || n.push({
          identifier: {
            major: t,
            minor: o++
          },
          range: e,
          text: s,
          forceMoveMarkers: r,
          isAutoWhitespaceEdit: i.insertsAutoWhitespace
        });
      };
      let r = !1;
      const a = {
        addEditOperation: s,
        addTrackedEditOperation: (e, t, i) => {
          ((r = !0), s(e, t, i));
        },
        trackSelection: (t, i) => {
          const n = v.Y.liftSelection(t);
          let o;
          if (n.isEmpty()) {
            if ("boolean" == typeof i) o = i ? 2 : 3;else {
              const t = e.model.getLineMaxColumn(n.startLineNumber);
              o = n.startColumn === t ? 2 : 3;
            }
          } else o = 1;
          const s = e.trackedRanges.length,
            r = e.model._setTrackedRange(null, n, o);
          return ((e.trackedRanges[s] = r), (e.trackedRangesDirection[s] = n.getDirection()), s.toString());
        }
      };
      try {
        i.getEditOperations(e.model, a);
      } catch (e) {
        return ((0, d.dL)(e), {
          operations: [],
          hadTrackedEditOperation: !1
        });
      }
      return {
        operations: n,
        hadTrackedEditOperation: r
      };
    }
    static _getLoserCursorMap(e) {
      (e = e.slice(0)).sort((e, t) => -re.e.compareRangesUsingEnds(e.range, t.range));
      let t = {};
      for (let i = 1; i < e.length; i++) {
        const n = e[i - 1],
          o = e[i];
        if (re.e.getStartPosition(n.range).isBefore(re.e.getEndPosition(o.range))) {
          let s;
          ((s = n.identifier.major > o.identifier.major ? n.identifier.major : o.identifier.major), (t[s.toString()] = !0));
          for (let t = 0; t < e.length; t++) e[t].identifier.major === s && (e.splice(t, 1), t < i && i--, t--);
          i > 0 && i--;
        }
      }
      return t;
    }
  }
  var en = i(30653),
    tn = i(96518),
    nn = i(29102),
    on = i(55713),
    sn = i(76633);
  class rn {
    constructor() {
      ((this._hasPending = !1), (this._inserts = []), (this._changes = []), (this._removes = []));
    }
    insert(e) {
      ((this._hasPending = !0), this._inserts.push(e));
    }
    change(e) {
      ((this._hasPending = !0), this._changes.push(e));
    }
    remove(e) {
      ((this._hasPending = !0), this._removes.push(e));
    }
    mustCommit() {
      return this._hasPending;
    }
    commit(e) {
      if (!this._hasPending) return;
      const t = this._inserts,
        i = this._changes,
        n = this._removes;
      ((this._hasPending = !1), (this._inserts = []), (this._changes = []), (this._removes = []), e._commitPendingChanges(t, i, n));
    }
  }
  class an {
    constructor(e, t, i, n, o) {
      ((this.id = e), (this.afterLineNumber = t), (this.ordinal = i), (this.height = n), (this.minWidth = o), (this.prefixSum = 0));
    }
  }
  class ln {
    constructor(e, t, i, n) {
      ((this._instanceId = Te.PJ(++ln.INSTANCE_COUNT)), (this._pendingChanges = new rn()), (this._lastWhitespaceId = 0), (this._arr = []), (this._prefixSumValidIndex = -1), (this._minWidth = -1), (this._lineCount = e), (this._lineHeight = t), (this._paddingTop = i), (this._paddingBottom = n));
    }
    static findInsertionIndex(e, t, i) {
      let n = 0,
        o = e.length;
      for (; n < o;) {
        const s = (n + o) >>> 1;
        t === e[s].afterLineNumber ? i < e[s].ordinal ? (o = s) : (n = s + 1) : t < e[s].afterLineNumber ? (o = s) : (n = s + 1);
      }
      return n;
    }
    setLineHeight(e) {
      (this._checkPendingChanges(), (this._lineHeight = e));
    }
    setPadding(e, t) {
      ((this._paddingTop = e), (this._paddingBottom = t));
    }
    onFlushed(e) {
      (this._checkPendingChanges(), (this._lineCount = e));
    }
    changeWhitespace(e) {
      let t = !1;
      try {
        e({
          insertWhitespace: (e, i, n, o) => {
            ((t = !0), (e |= 0), (i |= 0), (n |= 0), (o |= 0));
            const s = this._instanceId + ++this._lastWhitespaceId;
            return (this._pendingChanges.insert(new an(s, e, i, n, o)), s);
          },
          changeOneWhitespace: (e, i, n) => {
            ((t = !0), (i |= 0), (n |= 0), this._pendingChanges.change({
              id: e,
              newAfterLineNumber: i,
              newHeight: n
            }));
          },
          removeWhitespace: e => {
            ((t = !0), this._pendingChanges.remove({
              id: e
            }));
          }
        });
      } finally {
        this._pendingChanges.commit(this);
      }
      return t;
    }
    _commitPendingChanges(e, t, i) {
      if (((e.length > 0 || i.length > 0) && (this._minWidth = -1), e.length + t.length + i.length <= 1)) {
        for (const t of e) this._insertWhitespace(t);
        for (const e of t) this._changeOneWhitespace(e.id, e.newAfterLineNumber, e.newHeight);
        for (const e of i) {
          const t = this._findWhitespaceIndex(e.id);
          -1 !== t && this._removeWhitespace(t);
        }
        return;
      }
      const n = new Set();
      for (const e of i) n.add(e.id);
      const o = new Map();
      for (const e of t) o.set(e.id, e);
      const s = e => {
          let t = [];
          for (const i of e) if (!n.has(i.id)) {
            if (o.has(i.id)) {
              const e = o.get(i.id);
              ((i.afterLineNumber = e.newAfterLineNumber), (i.height = e.newHeight));
            }
            t.push(i);
          }
          return t;
        },
        r = s(this._arr).concat(s(e));
      (r.sort((e, t) => e.afterLineNumber === t.afterLineNumber ? e.ordinal - t.ordinal : e.afterLineNumber - t.afterLineNumber), (this._arr = r), (this._prefixSumValidIndex = -1));
    }
    _checkPendingChanges() {
      this._pendingChanges.mustCommit() && this._pendingChanges.commit(this);
    }
    _insertWhitespace(e) {
      const t = ln.findInsertionIndex(this._arr, e.afterLineNumber, e.ordinal);
      (this._arr.splice(t, 0, e), (this._prefixSumValidIndex = Math.min(this._prefixSumValidIndex, t - 1)));
    }
    _findWhitespaceIndex(e) {
      const t = this._arr;
      for (let i = 0, n = t.length; i < n; i++) if (t[i].id === e) return i;
      return -1;
    }
    _changeOneWhitespace(e, t, i) {
      const n = this._findWhitespaceIndex(e);
      if (-1 !== n && (this._arr[n].height !== i && ((this._arr[n].height = i), (this._prefixSumValidIndex = Math.min(this._prefixSumValidIndex, n - 1))), this._arr[n].afterLineNumber !== t)) {
        const e = this._arr[n];
        (this._removeWhitespace(n), (e.afterLineNumber = t), this._insertWhitespace(e));
      }
    }
    _removeWhitespace(e) {
      (this._arr.splice(e, 1), (this._prefixSumValidIndex = Math.min(this._prefixSumValidIndex, e - 1)));
    }
    onLinesDeleted(e, t) {
      (this._checkPendingChanges(), (e |= 0), (t |= 0), (this._lineCount -= t - e + 1));
      for (let i = 0, n = this._arr.length; i < n; i++) {
        const n = this._arr[i].afterLineNumber;
        e <= n && n <= t ? (this._arr[i].afterLineNumber = e - 1) : n > t && (this._arr[i].afterLineNumber -= t - e + 1);
      }
    }
    onLinesInserted(e, t) {
      (this._checkPendingChanges(), (e |= 0), (t |= 0), (this._lineCount += t - e + 1));
      for (let i = 0, n = this._arr.length; i < n; i++) {
        e <= this._arr[i].afterLineNumber && (this._arr[i].afterLineNumber += t - e + 1);
      }
    }
    getWhitespacesTotalHeight() {
      return (this._checkPendingChanges(), 0 === this._arr.length ? 0 : this.getWhitespacesAccumulatedHeight(this._arr.length - 1));
    }
    getWhitespacesAccumulatedHeight(e) {
      (this._checkPendingChanges(), (e |= 0));
      let t = Math.max(0, this._prefixSumValidIndex + 1);
      0 === t && ((this._arr[0].prefixSum = this._arr[0].height), t++);
      for (let i = t; i <= e; i++) this._arr[i].prefixSum = this._arr[i - 1].prefixSum + this._arr[i].height;
      return ((this._prefixSumValidIndex = Math.max(this._prefixSumValidIndex, e)), this._arr[e].prefixSum);
    }
    getLinesTotalHeight() {
      this._checkPendingChanges();
      return (this._lineHeight * this._lineCount + this.getWhitespacesTotalHeight() + this._paddingTop + this._paddingBottom);
    }
    getWhitespaceAccumulatedHeightBeforeLineNumber(e) {
      (this._checkPendingChanges(), (e |= 0));
      const t = this._findLastWhitespaceBeforeLineNumber(e);
      return -1 === t ? 0 : this.getWhitespacesAccumulatedHeight(t);
    }
    _findLastWhitespaceBeforeLineNumber(e) {
      e |= 0;
      const t = this._arr;
      let i = 0,
        n = t.length - 1;
      for (; i <= n;) {
        const o = (i + ((((n - i) | 0) / 2) | 0)) | 0;
        if (t[o].afterLineNumber < e) {
          if (o + 1 >= t.length || t[o + 1].afterLineNumber >= e) return o;
          i = (o + 1) | 0;
        } else n = (o - 1) | 0;
      }
      return -1;
    }
    _findFirstWhitespaceAfterLineNumber(e) {
      e |= 0;
      const t = this._findLastWhitespaceBeforeLineNumber(e) + 1;
      return t < this._arr.length ? t : -1;
    }
    getFirstWhitespaceIndexAfterLineNumber(e) {
      return (this._checkPendingChanges(), (e |= 0), this._findFirstWhitespaceAfterLineNumber(e));
    }
    getVerticalOffsetForLineNumber(e) {
      let t;
      (this._checkPendingChanges(), (t = (e |= 0) > 1 ? this._lineHeight * (e - 1) : 0));
      return (t + this.getWhitespaceAccumulatedHeightBeforeLineNumber(e) + this._paddingTop);
    }
    getWhitespaceMinWidth() {
      if ((this._checkPendingChanges(), -1 === this._minWidth)) {
        let e = 0;
        for (let t = 0, i = this._arr.length; t < i; t++) e = Math.max(e, this._arr[t].minWidth);
        this._minWidth = e;
      }
      return this._minWidth;
    }
    isAfterLines(e) {
      this._checkPendingChanges();
      return e > this.getLinesTotalHeight();
    }
    isInTopPadding(e) {
      return (0 !== this._paddingTop && (this._checkPendingChanges(), e < this._paddingTop));
    }
    isInBottomPadding(e) {
      if (0 === this._paddingBottom) return !1;
      this._checkPendingChanges();
      return e >= this.getLinesTotalHeight() - this._paddingBottom;
    }
    getLineNumberAtOrAfterVerticalOffset(e) {
      if ((this._checkPendingChanges(), (e |= 0) < 0)) return 1;
      const t = 0 | this._lineCount,
        i = this._lineHeight;
      let n = 1,
        o = t;
      for (; n < o;) {
        const t = ((n + o) / 2) | 0,
          s = 0 | this.getVerticalOffsetForLineNumber(t);
        if (e >= s + i) n = t + 1;else {
          if (e >= s) return t;
          o = t;
        }
      }
      return n > t ? t : n;
    }
    getLinesViewportData(e, t) {
      (this._checkPendingChanges(), (e |= 0), (t |= 0));
      const i = this._lineHeight,
        n = 0 | this.getLineNumberAtOrAfterVerticalOffset(e),
        o = 0 | this.getVerticalOffsetForLineNumber(n);
      let s = 0 | this._lineCount,
        r = 0 | this.getFirstWhitespaceIndexAfterLineNumber(n);
      const a = 0 | this.getWhitespacesCount();
      let l, c;
      -1 === r ? ((r = a), (c = s + 1), (l = 0)) : ((c = 0 | this.getAfterLineNumberForWhitespaceIndex(r)), (l = 0 | this.getHeightForWhitespaceIndex(r)));
      let d = o,
        h = d;
      const u = 5e5;
      let g = 0;
      o >= u && ((g = Math.floor(o / u) * u), (g = Math.floor(g / i) * i), (h -= g));
      const p = [],
        f = e + (t - e) / 2;
      let m = -1;
      for (let e = n; e <= s; e++) {
        if (-1 === m) {
          ((d <= f && f < d + i) || d > f) && (m = e);
        }
        for (d += i, p[e - n] = h, h += i; c === e;) ((h += l), (d += l), r++, r >= a ? (c = s + 1) : ((c = 0 | this.getAfterLineNumberForWhitespaceIndex(r)), (l = 0 | this.getHeightForWhitespaceIndex(r))));
        if (d >= t) {
          s = e;
          break;
        }
      }
      -1 === m && (m = s);
      const v = 0 | this.getVerticalOffsetForLineNumber(s);
      let _ = n,
        b = s;
      return (_ < b && o < e && _++, _ < b && v + i > t && b--, {
        bigNumbersDelta: g,
        startLineNumber: n,
        endLineNumber: s,
        relativeVerticalOffset: p,
        centeredLineNumber: m,
        completelyVisibleStartLineNumber: _,
        completelyVisibleEndLineNumber: b
      });
    }
    getVerticalOffsetForWhitespaceIndex(e) {
      (this._checkPendingChanges(), (e |= 0));
      const t = this.getAfterLineNumberForWhitespaceIndex(e);
      let i, n;
      return ((i = t >= 1 ? this._lineHeight * t : 0), (n = e > 0 ? this.getWhitespacesAccumulatedHeight(e - 1) : 0), i + n + this._paddingTop);
    }
    getWhitespaceIndexAtOrAfterVerticallOffset(e) {
      (this._checkPendingChanges(), (e |= 0));
      let t = 0,
        i = this.getWhitespacesCount() - 1;
      if (i < 0) return -1;
      if (e >= this.getVerticalOffsetForWhitespaceIndex(i) + this.getHeightForWhitespaceIndex(i)) return -1;
      for (; t < i;) {
        const n = Math.floor((t + i) / 2),
          o = this.getVerticalOffsetForWhitespaceIndex(n);
        if (e >= o + this.getHeightForWhitespaceIndex(n)) t = n + 1;else {
          if (e >= o) return n;
          i = n;
        }
      }
      return t;
    }
    getWhitespaceAtVerticalOffset(e) {
      (this._checkPendingChanges(), (e |= 0));
      const t = this.getWhitespaceIndexAtOrAfterVerticallOffset(e);
      if (t < 0) return null;
      if (t >= this.getWhitespacesCount()) return null;
      const i = this.getVerticalOffsetForWhitespaceIndex(t);
      if (i > e) return null;
      const n = this.getHeightForWhitespaceIndex(t);
      return {
        id: this.getIdForWhitespaceIndex(t),
        afterLineNumber: this.getAfterLineNumberForWhitespaceIndex(t),
        verticalOffset: i,
        height: n
      };
    }
    getWhitespaceViewportData(e, t) {
      (this._checkPendingChanges(), (e |= 0), (t |= 0));
      const i = this.getWhitespaceIndexAtOrAfterVerticallOffset(e),
        n = this.getWhitespacesCount() - 1;
      if (i < 0) return [];
      let o = [];
      for (let e = i; e <= n; e++) {
        const i = this.getVerticalOffsetForWhitespaceIndex(e),
          n = this.getHeightForWhitespaceIndex(e);
        if (i >= t) break;
        o.push({
          id: this.getIdForWhitespaceIndex(e),
          afterLineNumber: this.getAfterLineNumberForWhitespaceIndex(e),
          verticalOffset: i,
          height: n
        });
      }
      return o;
    }
    getWhitespaces() {
      return (this._checkPendingChanges(), this._arr.slice(0));
    }
    getWhitespacesCount() {
      return (this._checkPendingChanges(), this._arr.length);
    }
    getIdForWhitespaceIndex(e) {
      return (this._checkPendingChanges(), (e |= 0), this._arr[e].id);
    }
    getAfterLineNumberForWhitespaceIndex(e) {
      return (this._checkPendingChanges(), (e |= 0), this._arr[e].afterLineNumber);
    }
    getHeightForWhitespaceIndex(e) {
      return (this._checkPendingChanges(), (e |= 0), this._arr[e].height);
    }
  }
  ln.INSTANCE_COUNT = 0;
  class cn {
    constructor(e, t, i, n) {
      ((e |= 0) < 0 && (e = 0), (t |= 0) < 0 && (t = 0), (i |= 0) < 0 && (i = 0), (n |= 0) < 0 && (n = 0), (this.width = e), (this.contentWidth = t), (this.scrollWidth = Math.max(e, t)), (this.height = i), (this.contentHeight = n), (this.scrollHeight = Math.max(i, n)));
    }
    equals(e) {
      return (this.width === e.width && this.contentWidth === e.contentWidth && this.height === e.height && this.contentHeight === e.contentHeight);
    }
  }
  class dn extends u.JT {
    constructor(e, t) {
      (super(), (this._onDidContentSizeChange = this._register(new h.Q5())), (this.onDidContentSizeChange = this._onDidContentSizeChange.event), (this._dimensions = new cn(0, 0, 0, 0)), (this._scrollable = this._register(new sn.Rm(e, t))), (this.onDidScroll = this._scrollable.onScroll));
    }
    getScrollable() {
      return this._scrollable;
    }
    setSmoothScrollDuration(e) {
      this._scrollable.setSmoothScrollDuration(e);
    }
    validateScrollPosition(e) {
      return this._scrollable.validateScrollPosition(e);
    }
    getScrollDimensions() {
      return this._dimensions;
    }
    setScrollDimensions(e) {
      if (this._dimensions.equals(e)) return;
      const t = this._dimensions;
      ((this._dimensions = e), this._scrollable.setScrollDimensions({
        width: e.width,
        scrollWidth: e.scrollWidth,
        height: e.height,
        scrollHeight: e.scrollHeight
      }, !0));
      const i = t.contentWidth !== e.contentWidth,
        n = t.contentHeight !== e.contentHeight;
      (i || n) && this._onDidContentSizeChange.fire(new Ui(t.contentWidth, t.contentHeight, e.contentWidth, e.contentHeight));
    }
    getFutureScrollPosition() {
      return this._scrollable.getFutureScrollPosition();
    }
    getCurrentScrollPosition() {
      return this._scrollable.getCurrentScrollPosition();
    }
    setScrollPositionNow(e) {
      this._scrollable.setScrollPositionNow(e);
    }
    setScrollPositionSmooth(e) {
      this._scrollable.setScrollPositionSmooth(e);
    }
  }
  class hn extends u.JT {
    constructor(e, t, i) {
      (super(), (this._configuration = e));
      const n = this._configuration.options,
        o = n.get(129),
        s = n.get(74);
      ((this._linesLayout = new ln(t, n.get(58), s.top, s.bottom)), (this._scrollable = this._register(new dn(0, i))), this._configureSmoothScrollDuration(), this._scrollable.setScrollDimensions(new cn(o.contentWidth, 0, o.height, 0)), (this.onDidScroll = this._scrollable.onDidScroll), (this.onDidContentSizeChange = this._scrollable.onDidContentSizeChange), this._updateHeight());
    }
    dispose() {
      super.dispose();
    }
    getScrollable() {
      return this._scrollable.getScrollable();
    }
    onHeightMaybeChanged() {
      this._updateHeight();
    }
    _configureSmoothScrollDuration() {
      this._scrollable.setSmoothScrollDuration(this._configuration.options.get(102) ? 125 : 0);
    }
    onConfigurationChanged(e) {
      const t = this._configuration.options;
      if ((e.hasChanged(58) && this._linesLayout.setLineHeight(t.get(58)), e.hasChanged(74))) {
        const e = t.get(74);
        this._linesLayout.setPadding(e.top, e.bottom);
      }
      if (e.hasChanged(129)) {
        const e = t.get(129),
          i = e.contentWidth,
          n = e.height,
          o = this._scrollable.getScrollDimensions(),
          s = o.contentWidth;
        this._scrollable.setScrollDimensions(new cn(i, o.contentWidth, n, this._getContentHeight(i, n, s)));
      } else this._updateHeight();
      e.hasChanged(102) && this._configureSmoothScrollDuration();
    }
    onFlushed(e) {
      this._linesLayout.onFlushed(e);
    }
    onLinesDeleted(e, t) {
      this._linesLayout.onLinesDeleted(e, t);
    }
    onLinesInserted(e, t) {
      this._linesLayout.onLinesInserted(e, t);
    }
    _getHorizontalScrollbarHeight(e, t) {
      const i = this._configuration.options.get(91);
      return 2 === i.horizontal || e >= t ? 0 : i.horizontalScrollbarSize;
    }
    _getContentHeight(e, t, i) {
      const n = this._configuration.options;
      let o = this._linesLayout.getLinesTotalHeight();
      return (n.get(93) ? (o += Math.max(0, t - n.get(58) - n.get(74).bottom)) : (o += this._getHorizontalScrollbarHeight(e, i)), o);
    }
    _updateHeight() {
      const e = this._scrollable.getScrollDimensions(),
        t = e.width,
        i = e.height,
        n = e.contentWidth;
      this._scrollable.setScrollDimensions(new cn(t, e.contentWidth, i, this._getContentHeight(t, i, n)));
    }
    getCurrentViewport() {
      const e = this._scrollable.getScrollDimensions(),
        t = this._scrollable.getCurrentScrollPosition();
      return new Mt.l_(t.scrollTop, t.scrollLeft, e.width, e.height);
    }
    getFutureViewport() {
      const e = this._scrollable.getScrollDimensions(),
        t = this._scrollable.getFutureScrollPosition();
      return new Mt.l_(t.scrollTop, t.scrollLeft, e.width, e.height);
    }
    _computeContentWidth(e) {
      const t = this._configuration.options,
        i = t.get(130),
        n = t.get(43);
      if (i.isViewportWrapping) {
        const i = t.get(129),
          o = t.get(64);
        return e > i.contentWidth + n.typicalHalfwidthCharacterWidth && o.enabled && "right" === o.side ? e + i.verticalScrollbarWidth : e;
      }
      {
        const i = t.get(92) * n.typicalHalfwidthCharacterWidth,
          o = this._linesLayout.getWhitespaceMinWidth();
        return Math.max(e + i, o);
      }
    }
    setMaxLineWidth(e) {
      const t = this._scrollable.getScrollDimensions();
      (this._scrollable.setScrollDimensions(new cn(t.width, this._computeContentWidth(e), t.height, t.contentHeight)), this._updateHeight());
    }
    saveState() {
      const e = this._scrollable.getFutureScrollPosition();
      let t = e.scrollTop,
        i = this._linesLayout.getLineNumberAtOrAfterVerticalOffset(t);
      return {
        scrollTop: t,
        scrollTopWithoutViewZones: t - this._linesLayout.getWhitespaceAccumulatedHeightBeforeLineNumber(i),
        scrollLeft: e.scrollLeft
      };
    }
    changeWhitespace(e) {
      const t = this._linesLayout.changeWhitespace(e);
      return (t && this.onHeightMaybeChanged(), t);
    }
    getVerticalOffsetForLineNumber(e) {
      return this._linesLayout.getVerticalOffsetForLineNumber(e);
    }
    isAfterLines(e) {
      return this._linesLayout.isAfterLines(e);
    }
    isInTopPadding(e) {
      return this._linesLayout.isInTopPadding(e);
    }
    isInBottomPadding(e) {
      return this._linesLayout.isInBottomPadding(e);
    }
    getLineNumberAtVerticalOffset(e) {
      return this._linesLayout.getLineNumberAtOrAfterVerticalOffset(e);
    }
    getWhitespaceAtVerticalOffset(e) {
      return this._linesLayout.getWhitespaceAtVerticalOffset(e);
    }
    getLinesViewportData() {
      const e = this.getCurrentViewport();
      return this._linesLayout.getLinesViewportData(e.top, e.top + e.height);
    }
    getLinesViewportDataAtScrollTop(e) {
      const t = this._scrollable.getScrollDimensions();
      return (e + t.height > t.scrollHeight && (e = t.scrollHeight - t.height), e < 0 && (e = 0), this._linesLayout.getLinesViewportData(e, e + t.height));
    }
    getWhitespaceViewportData() {
      const e = this.getCurrentViewport();
      return this._linesLayout.getWhitespaceViewportData(e.top, e.top + e.height);
    }
    getWhitespaces() {
      return this._linesLayout.getWhitespaces();
    }
    getContentWidth() {
      return this._scrollable.getScrollDimensions().contentWidth;
    }
    getScrollWidth() {
      return this._scrollable.getScrollDimensions().scrollWidth;
    }
    getContentHeight() {
      return this._scrollable.getScrollDimensions().contentHeight;
    }
    getScrollHeight() {
      return this._scrollable.getScrollDimensions().scrollHeight;
    }
    getCurrentScrollLeft() {
      return this._scrollable.getCurrentScrollPosition().scrollLeft;
    }
    getCurrentScrollTop() {
      return this._scrollable.getCurrentScrollPosition().scrollTop;
    }
    validateScrollPosition(e) {
      return this._scrollable.validateScrollPosition(e);
    }
    setScrollPosition(e, t) {
      1 === t ? this._scrollable.setScrollPositionNow(e) : this._scrollable.setScrollPositionSmooth(e);
    }
    deltaScrollNow(e, t) {
      const i = this._scrollable.getCurrentScrollPosition();
      this._scrollable.setScrollPositionNow({
        scrollLeft: i.scrollLeft + e,
        scrollTop: i.scrollTop + t
      });
    }
  }
  var un = i(78411),
    gn = i(3544);
  class pn {
    constructor(e) {
      this._lines = e;
    }
    convertViewPositionToModelPosition(e) {
      return this._lines.convertViewPositionToModelPosition(e.lineNumber, e.column);
    }
    convertViewRangeToModelRange(e) {
      return this._lines.convertViewRangeToModelRange(e);
    }
    validateViewPosition(e, t) {
      return this._lines.validateViewPosition(e.lineNumber, e.column, t);
    }
    validateViewRange(e, t) {
      return this._lines.validateViewRange(e, t);
    }
    convertModelPositionToViewPosition(e, t) {
      return this._lines.convertModelPositionToViewPosition(e.lineNumber, e.column, t);
    }
    convertModelRangeToViewRange(e, t) {
      return this._lines.convertModelRangeToViewRange(e, t);
    }
    modelPositionIsVisible(e) {
      return this._lines.modelPositionIsVisible(e.lineNumber, e.column);
    }
    getModelLineViewLineCount(e) {
      return this._lines.getModelLineViewLineCount(e);
    }
    getViewLineNumberOfModelPosition(e, t) {
      return this._lines.getViewLineNumberOfModelPosition(e, t);
    }
  }
  class fn {
    constructor(e) {
      ((this._counts = e), (this._isValid = !1), (this._validEndIndex = -1), (this._modelToView = []), (this._viewToModel = []));
    }
    _invalidate(e) {
      ((this._isValid = !1), (this._validEndIndex = Math.min(this._validEndIndex, e - 1)));
    }
    _ensureValid() {
      if (!this._isValid) {
        for (let e = this._validEndIndex + 1, t = this._counts.length; e < t; e++) {
          const t = this._counts[e],
            i = e > 0 ? this._modelToView[e - 1] : 0;
          this._modelToView[e] = i + t;
          for (let n = 0; n < t; n++) this._viewToModel[i + n] = e;
        }
        ((this._modelToView.length = this._counts.length), (this._viewToModel.length = this._modelToView[this._modelToView.length - 1]), (this._isValid = !0), (this._validEndIndex = this._counts.length - 1));
      }
    }
    changeValue(e, t) {
      this._counts[e] !== t && ((this._counts[e] = t), this._invalidate(e));
    }
    removeValues(e, t) {
      (this._counts.splice(e, t), this._invalidate(e));
    }
    insertValues(e, t) {
      ((this._counts = rt.Zv(this._counts, e, t)), this._invalidate(e));
    }
    getTotalValue() {
      return (this._ensureValid(), this._viewToModel.length);
    }
    getAccumulatedValue(e) {
      return (this._ensureValid(), this._modelToView[e]);
    }
    getIndexOf(e) {
      this._ensureValid();
      const t = this._viewToModel[e],
        i = t > 0 ? this._modelToView[t - 1] : 0;
      return new gn.T(t, e - i);
    }
  }
  class mn {
    constructor(e, t, i, n, o, s, r, a, l) {
      ((this._editorId = e), (this.model = t), (this._validModelVersionId = -1), (this._domLineBreaksComputerFactory = i), (this._monospaceLineBreaksComputerFactory = n), (this.fontInfo = o), (this.tabSize = s), (this.wrappingStrategy = r), (this.wrappingColumn = a), (this.wrappingIndent = l), this._constructLines(!0, null));
    }
    dispose() {
      this.hiddenAreasIds = this.model.deltaDecorations(this.hiddenAreasIds, []);
    }
    createCoordinatesConverter() {
      return new pn(this);
    }
    _constructLines(e, t) {
      ((this.lines = []), e && (this.hiddenAreasIds = []));
      const i = this.model.getLinesContent(),
        n = this.model.getInjectedTextDecorations(this._editorId),
        o = i.length,
        s = this.createLineBreaksComputer(),
        r = new rt.H9(xi.gk.fromDecorations(n));
      for (let e = 0; e < o; e++) {
        const n = r.takeWhile(t => t.lineNumber === e + 1);
        s.addRequest(i[e], n, t ? t[e] : null);
      }
      const a = s.finalize();
      let l = [],
        c = this.hiddenAreasIds.map(e => this.model.getDecorationRange(e)).sort(re.e.compareRangesUsingStarts),
        d = 1,
        h = 0,
        u = -1,
        g = u + 1 < c.length ? h + 1 : o + 2;
      for (let e = 0; e < o; e++) {
        let t = e + 1;
        t === g && (u++, (d = c[u].startLineNumber), (h = c[u].endLineNumber), (g = u + 1 < c.length ? h + 1 : o + 2));
        let i = t >= d && t <= h,
          n = kn(a[e], !i);
        ((l[e] = n.getViewLineCount()), (this.lines[e] = n));
      }
      ((this._validModelVersionId = this.model.getVersionId()), (this.prefixSumComputer = new fn(l)));
    }
    getHiddenAreas() {
      return this.hiddenAreasIds.map(e => this.model.getDecorationRange(e));
    }
    _reduceRanges(e) {
      if (0 === e.length) return [];
      let t = e.map(e => this.model.validateRange(e)).sort(re.e.compareRangesUsingStarts),
        i = [],
        n = t[0].startLineNumber,
        o = t[0].endLineNumber;
      for (let e = 1, s = t.length; e < s; e++) {
        let s = t[e];
        s.startLineNumber > o + 1 ? (i.push(new re.e(n, 1, o, 1)), (n = s.startLineNumber), (o = s.endLineNumber)) : s.endLineNumber > o && (o = s.endLineNumber);
      }
      return (i.push(new re.e(n, 1, o, 1)), i);
    }
    setHiddenAreas(e) {
      let t = this._reduceRanges(e),
        i = this.hiddenAreasIds.map(e => this.model.getDecorationRange(e)).sort(re.e.compareRangesUsingStarts);
      if (t.length === i.length) {
        let e = !1;
        for (let n = 0; n < t.length; n++) if (!t[n].equalsRange(i[n])) {
          e = !0;
          break;
        }
        if (!e) return !1;
      }
      let n = [];
      for (const e of t) n.push({
        range: e,
        options: bt.qx.EMPTY
      });
      this.hiddenAreasIds = this.model.deltaDecorations(this.hiddenAreasIds, n);
      let o = t,
        s = 1,
        r = 0,
        a = -1,
        l = a + 1 < o.length ? r + 1 : this.lines.length + 2,
        c = !1;
      for (let e = 0; e < this.lines.length; e++) {
        let t = e + 1;
        t === l && (a++, (s = o[a].startLineNumber), (r = o[a].endLineNumber), (l = a + 1 < o.length ? r + 1 : this.lines.length + 2));
        let i = !1;
        if ((t >= s && t <= r ? this.lines[e].isVisible() && ((this.lines[e] = this.lines[e].setVisible(!1)), (i = !0)) : ((c = !0), this.lines[e].isVisible() || ((this.lines[e] = this.lines[e].setVisible(!0)), (i = !0))), i)) {
          let t = this.lines[e].getViewLineCount();
          this.prefixSumComputer.changeValue(e, t);
        }
      }
      return (c || this.setHiddenAreas([]), !0);
    }
    modelPositionIsVisible(e, t) {
      return (!(e < 1 || e > this.lines.length) && this.lines[e - 1].isVisible());
    }
    getModelLineViewLineCount(e) {
      return e < 1 || e > this.lines.length ? 1 : this.lines[e - 1].getViewLineCount();
    }
    setTabSize(e) {
      return (this.tabSize !== e && ((this.tabSize = e), this._constructLines(!1, null), !0));
    }
    setWrappingSettings(e, t, i, n) {
      const o = this.fontInfo.equals(e),
        s = this.wrappingStrategy === t,
        r = this.wrappingColumn === i,
        a = this.wrappingIndent === n;
      if (o && s && r && a) return !1;
      const l = o && s && !r && a;
      ((this.fontInfo = e), (this.wrappingStrategy = t), (this.wrappingColumn = i), (this.wrappingIndent = n));
      let c = null;
      if (l) {
        c = [];
        for (let e = 0, t = this.lines.length; e < t; e++) c[e] = this.lines[e].getLineBreakData();
      }
      return (this._constructLines(!1, c), !0);
    }
    createLineBreaksComputer() {
      return ("advanced" === this.wrappingStrategy ? this._domLineBreaksComputerFactory : this._monospaceLineBreaksComputerFactory).createLineBreaksComputer(this.fontInfo, this.tabSize, this.wrappingColumn, this.wrappingIndent);
    }
    onModelFlushed() {
      this._constructLines(!0, null);
    }
    onModelLinesDeleted(e, t, i) {
      if (!e || e <= this._validModelVersionId) return null;
      let n = 1 === t ? 1 : this.prefixSumComputer.getAccumulatedValue(t - 2) + 1,
        o = this.prefixSumComputer.getAccumulatedValue(i - 1);
      return (this.lines.splice(t - 1, i - t + 1), this.prefixSumComputer.removeValues(t - 1, i - t + 1), new Oi(n, o));
    }
    onModelLinesInserted(e, t, i, n) {
      if (!e || e <= this._validModelVersionId) return null;
      const o = t > 2 && !this.lines[t - 2].isVisible();
      let s = 1 === t ? 1 : this.prefixSumComputer.getAccumulatedValue(t - 2) + 1,
        r = 0,
        a = [],
        l = [];
      for (let e = 0, t = n.length; e < t; e++) {
        let t = kn(n[e], !o);
        a.push(t);
        let i = t.getViewLineCount();
        ((r += i), (l[e] = i));
      }
      return ((this.lines = this.lines.slice(0, t - 1).concat(a).concat(this.lines.slice(t - 1))), this.prefixSumComputer.insertValues(t - 1, l), new Pi(s, s + r - 1));
    }
    onModelLineChanged(e, t, i) {
      if (null !== e && e <= this._validModelVersionId) return [!1, null, null, null];
      let n = t - 1,
        o = this.lines[n].getViewLineCount(),
        s = kn(i, this.lines[n].isVisible());
      this.lines[n] = s;
      let r = this.lines[n].getViewLineCount(),
        a = !1,
        l = 0,
        c = -1,
        d = 0,
        h = -1,
        u = 0,
        g = -1;
      (o > r ? ((l = 1 === t ? 1 : this.prefixSumComputer.getAccumulatedValue(t - 2) + 1), (c = l + r - 1), (u = c + 1), (g = u + (o - r) - 1), (a = !0)) : o < r ? ((l = 1 === t ? 1 : this.prefixSumComputer.getAccumulatedValue(t - 2) + 1), (c = l + o - 1), (d = c + 1), (h = d + (r - o) - 1), (a = !0)) : ((l = 1 === t ? 1 : this.prefixSumComputer.getAccumulatedValue(t - 2) + 1), (c = l + r - 1)), this.prefixSumComputer.changeValue(n, r));
      return [a, l <= c ? new Ai(l, c) : null, d <= h ? new Pi(d, h) : null, u <= g ? new Oi(u, g) : null];
    }
    acceptVersionId(e) {
      ((this._validModelVersionId = e), 1 !== this.lines.length || this.lines[0].isVisible() || this.setHiddenAreas([]));
    }
    getViewLineCount() {
      return this.prefixSumComputer.getTotalValue();
    }
    _toValidViewLineNumber(e) {
      if (e < 1) return 1;
      const t = this.getViewLineCount();
      return e > t ? t : 0 | e;
    }
    getActiveIndentGuide(e, t, i) {
      ((e = this._toValidViewLineNumber(e)), (t = this._toValidViewLineNumber(t)), (i = this._toValidViewLineNumber(i)));
      const n = this.convertViewPositionToModelPosition(e, this.getViewLineMinColumn(e)),
        o = this.convertViewPositionToModelPosition(t, this.getViewLineMinColumn(t)),
        s = this.convertViewPositionToModelPosition(i, this.getViewLineMinColumn(i)),
        r = this.model.getActiveIndentGuide(n.lineNumber, o.lineNumber, s.lineNumber),
        a = this.convertModelPositionToViewPosition(r.startLineNumber, 1),
        l = this.convertModelPositionToViewPosition(r.endLineNumber, this.model.getLineMaxColumn(r.endLineNumber));
      return {
        startLineNumber: a.lineNumber,
        endLineNumber: l.lineNumber,
        indent: r.indent
      };
    }
    getViewLineInfo(e) {
      e = this._toValidViewLineNumber(e);
      let t = this.prefixSumComputer.getIndexOf(e - 1),
        i = t.index,
        n = t.remainder;
      return new vn(i + 1, n);
    }
    getMinColumnOfViewLine(e) {
      return this.lines[e.modelLineNumber - 1].getViewLineMinColumn(this.model, e.modelLineNumber, e.modelLineWrappedLineIdx);
    }
    getModelStartPositionOfViewLine(e) {
      const t = this.lines[e.modelLineNumber - 1],
        i = t.getViewLineMinColumn(this.model, e.modelLineNumber, e.modelLineWrappedLineIdx),
        n = t.getModelColumnOfViewPosition(e.modelLineWrappedLineIdx, i);
      return new se.L(e.modelLineNumber, n);
    }
    getModelEndPositionOfViewLine(e) {
      const t = this.lines[e.modelLineNumber - 1],
        i = t.getViewLineMaxColumn(this.model, e.modelLineNumber, e.modelLineWrappedLineIdx),
        n = t.getModelColumnOfViewPosition(e.modelLineWrappedLineIdx, i);
      return new se.L(e.modelLineNumber, n);
    }
    getViewLineInfosGroupedByModelRanges(e, t) {
      const i = this.getViewLineInfo(e),
        n = this.getViewLineInfo(t),
        o = new Array();
      let s = this.getModelStartPositionOfViewLine(i),
        r = new Array();
      for (let e = i.modelLineNumber; e <= n.modelLineNumber; e++) {
        const t = this.lines[e - 1];
        if (t.isVisible()) {
          let o = e === i.modelLineNumber ? i.modelLineWrappedLineIdx : 0,
            s = e === n.modelLineNumber ? n.modelLineWrappedLineIdx + 1 : t.getViewLineCount();
          for (let t = o; t < s; t++) r.push(new vn(e, t));
        }
        if (!t.isVisible() && s) {
          const t = new se.L(e - 1, this.model.getLineMaxColumn(e - 1) + 1),
            i = re.e.fromPositions(s, t);
          (o.push(new _n(i, r)), (r = []), (s = null));
        } else t.isVisible() && !s && (s = new se.L(e, 1));
      }
      if (s) {
        const e = re.e.fromPositions(s, this.getModelEndPositionOfViewLine(n));
        o.push(new _n(e, r));
      }
      return o;
    }
    getViewLinesBracketGuides(e, t, i, n) {
      const o = i ? this.convertViewPositionToModelPosition(i.lineNumber, i.column) : null,
        s = [];
      for (const i of this.getViewLineInfosGroupedByModelRanges(e, t)) {
        const e = i.modelRange.startLineNumber,
          t = this.model.getLinesBracketGuides(e, i.modelRange.endLineNumber, o, n);
        for (const n of i.viewLines) if (n.isWrappedLineContinuation && 1 === this.getMinColumnOfViewLine(n)) s.push([]);else {
          let i = t[n.modelLineNumber - e];
          ((i = i.map(e => e.horizontalLine ? new _t.UO(e.visibleColumn, e.className, new _t.vW(e.horizontalLine.top, this.convertModelPositionToViewPosition(n.modelLineNumber, e.horizontalLine.endColumn).column)) : e)), s.push(i));
        }
      }
      return s;
    }
    getViewLinesIndentGuides(e, t) {
      ((e = this._toValidViewLineNumber(e)), (t = this._toValidViewLineNumber(t)));
      const i = this.convertViewPositionToModelPosition(e, this.getViewLineMinColumn(e)),
        n = this.convertViewPositionToModelPosition(t, this.getViewLineMaxColumn(t));
      let o = [],
        s = [],
        r = [];
      const a = i.lineNumber - 1,
        l = n.lineNumber - 1;
      let c = null;
      for (let e = a; e <= l; e++) {
        const t = this.lines[e];
        if (t.isVisible()) {
          let n = t.getViewLineNumberOfModelPosition(0, e === a ? i.column : 1),
            o = t.getViewLineNumberOfModelPosition(0, this.model.getLineMaxColumn(e + 1)),
            l = o - n + 1,
            d = 0;
          (l > 1 && 1 === t.getViewLineMinColumn(this.model, e + 1, o) && (d = 0 === n ? 1 : 2), s.push(l), r.push(d), null === c && (c = new se.L(e + 1, 0)));
        } else null !== c && ((o = o.concat(this.model.getLinesIndentGuides(c.lineNumber, e))), (c = null));
      }
      null !== c && ((o = o.concat(this.model.getLinesIndentGuides(c.lineNumber, n.lineNumber))), (c = null));
      const d = t - e + 1;
      let h = new Array(d),
        u = 0;
      for (let e = 0, t = o.length; e < t; e++) {
        let t,
          i = o[e],
          n = Math.min(d - u, s[e]),
          a = r[e];
        t = 2 === a ? 0 : 1 === a ? 1 : n;
        for (let e = 0; e < n; e++) (e === t && (i = 0), (h[u++] = i));
      }
      return h;
    }
    getViewLineContent(e) {
      e = this._toValidViewLineNumber(e);
      let t = this.prefixSumComputer.getIndexOf(e - 1),
        i = t.index,
        n = t.remainder;
      return this.lines[i].getViewLineContent(this.model, i + 1, n);
    }
    getViewLineLength(e) {
      e = this._toValidViewLineNumber(e);
      let t = this.prefixSumComputer.getIndexOf(e - 1),
        i = t.index,
        n = t.remainder;
      return this.lines[i].getViewLineLength(this.model, i + 1, n);
    }
    getViewLineMinColumn(e) {
      e = this._toValidViewLineNumber(e);
      let t = this.prefixSumComputer.getIndexOf(e - 1),
        i = t.index,
        n = t.remainder;
      return this.lines[i].getViewLineMinColumn(this.model, i + 1, n);
    }
    getViewLineMaxColumn(e) {
      e = this._toValidViewLineNumber(e);
      let t = this.prefixSumComputer.getIndexOf(e - 1),
        i = t.index,
        n = t.remainder;
      return this.lines[i].getViewLineMaxColumn(this.model, i + 1, n);
    }
    getViewLineData(e) {
      e = this._toValidViewLineNumber(e);
      let t = this.prefixSumComputer.getIndexOf(e - 1),
        i = t.index,
        n = t.remainder;
      return this.lines[i].getViewLineData(this.model, i + 1, n);
    }
    getViewLinesData(e, t, i) {
      ((e = this._toValidViewLineNumber(e)), (t = this._toValidViewLineNumber(t)));
      let n = this.prefixSumComputer.getIndexOf(e - 1),
        o = e,
        s = n.index,
        r = n.remainder,
        a = [];
      for (let n = s, l = this.model.getLineCount(); n < l; n++) {
        let l = this.lines[n];
        if (!l.isVisible()) continue;
        let c = n === s ? r : 0,
          d = l.getViewLineCount() - c,
          h = !1;
        o + d > t && ((h = !0), (d = t - o + 1));
        let u = c + d;
        if ((l.getViewLinesData(this.model, n + 1, c, u, o - e, i, a), (o += d), h)) break;
      }
      return a;
    }
    validateViewPosition(e, t, i) {
      e = this._toValidViewLineNumber(e);
      let n = this.prefixSumComputer.getIndexOf(e - 1),
        o = n.index,
        s = n.remainder,
        r = this.lines[o],
        a = r.getViewLineMinColumn(this.model, o + 1, s),
        l = r.getViewLineMaxColumn(this.model, o + 1, s);
      (t < a && (t = a), t > l && (t = l));
      let c = r.getModelColumnOfViewPosition(s, t);
      return this.model.validatePosition(new se.L(o + 1, c)).equals(i) ? new se.L(e, t) : this.convertModelPositionToViewPosition(i.lineNumber, i.column);
    }
    validateViewRange(e, t) {
      const i = this.validateViewPosition(e.startLineNumber, e.startColumn, t.getStartPosition()),
        n = this.validateViewPosition(e.endLineNumber, e.endColumn, t.getEndPosition());
      return new re.e(i.lineNumber, i.column, n.lineNumber, n.column);
    }
    convertViewPositionToModelPosition(e, t) {
      e = this._toValidViewLineNumber(e);
      let i = this.prefixSumComputer.getIndexOf(e - 1),
        n = i.index,
        o = i.remainder,
        s = this.lines[n].getModelColumnOfViewPosition(o, t);
      return this.model.validatePosition(new se.L(n + 1, s));
    }
    convertViewRangeToModelRange(e) {
      const t = this.convertViewPositionToModelPosition(e.startLineNumber, e.startColumn),
        i = this.convertViewPositionToModelPosition(e.endLineNumber, e.endColumn);
      return new re.e(t.lineNumber, t.column, i.lineNumber, i.column);
    }
    convertModelPositionToViewPosition(e, t, i = 2) {
      const n = this.model.validatePosition(new se.L(e, t)),
        o = n.lineNumber,
        s = n.column;
      let r = o - 1,
        a = !1;
      for (; r > 0 && !this.lines[r].isVisible();) (r--, (a = !0));
      if (0 === r && !this.lines[r].isVisible()) return new se.L(1, 1);
      const l = 1 + (0 === r ? 0 : this.prefixSumComputer.getAccumulatedValue(r - 1));
      let c;
      return ((c = a ? this.lines[r].getViewPositionOfModelPosition(l, this.model.getLineMaxColumn(r + 1), i) : this.lines[o - 1].getViewPositionOfModelPosition(l, s, i)), c);
    }
    convertModelRangeToViewRange(e, t = 0) {
      if (e.isEmpty()) {
        const i = this.convertModelPositionToViewPosition(e.startLineNumber, e.startColumn, t);
        return re.e.fromPositions(i);
      }
      {
        const t = this.convertModelPositionToViewPosition(e.startLineNumber, e.startColumn, 1),
          i = this.convertModelPositionToViewPosition(e.endLineNumber, e.endColumn, 0);
        return new re.e(t.lineNumber, t.column, i.lineNumber, i.column);
      }
    }
    getViewLineNumberOfModelPosition(e, t) {
      let i = e - 1;
      if (this.lines[i].isVisible()) {
        const e = 1 + (0 === i ? 0 : this.prefixSumComputer.getAccumulatedValue(i - 1));
        return this.lines[i].getViewLineNumberOfModelPosition(e, t);
      }
      for (; i > 0 && !this.lines[i].isVisible();) i--;
      if (0 === i && !this.lines[i].isVisible()) return 1;
      const n = 1 + (0 === i ? 0 : this.prefixSumComputer.getAccumulatedValue(i - 1));
      return this.lines[i].getViewLineNumberOfModelPosition(n, this.model.getLineMaxColumn(i + 1));
    }
    getDecorationsInRange(e, t, i) {
      const n = this.convertViewPositionToModelPosition(e.startLineNumber, e.startColumn),
        o = this.convertViewPositionToModelPosition(e.endLineNumber, e.endColumn);
      if (o.lineNumber - n.lineNumber <= e.endLineNumber - e.startLineNumber) return this.model.getDecorationsInRange(new re.e(n.lineNumber, 1, o.lineNumber, o.column), t, i);
      let s = [];
      const r = n.lineNumber - 1,
        a = o.lineNumber - 1;
      let l = null;
      for (let e = r; e <= a; e++) {
        if (this.lines[e].isVisible()) null === l && (l = new se.L(e + 1, e === r ? n.column : 1));else if (null !== l) {
          const n = this.model.getLineMaxColumn(e);
          ((s = s.concat(this.model.getDecorationsInRange(new re.e(l.lineNumber, l.column, e, n), t, i))), (l = null));
        }
      }
      (null !== l && ((s = s.concat(this.model.getDecorationsInRange(new re.e(l.lineNumber, l.column, o.lineNumber, o.column), t, i))), (l = null)), s.sort((e, t) => {
        const i = re.e.compareRangesUsingStarts(e.range, t.range);
        return 0 === i ? (e.id < t.id ? -1 : e.id > t.id ? 1 : 0) : i;
      }));
      let c = [],
        d = 0,
        h = null;
      for (const e of s) {
        const t = e.id;
        h !== t && ((h = t), (c[d++] = e));
      }
      return c;
    }
    getInjectedTextAt(e) {
      const t = this._toValidViewLineNumber(e.lineNumber),
        i = this.prefixSumComputer.getIndexOf(t - 1),
        n = i.index,
        o = i.remainder;
      return this.lines[n].getInjectedTextAt(o, e.column);
    }
    normalizePosition(e, t) {
      const i = this._toValidViewLineNumber(e.lineNumber),
        n = this.prefixSumComputer.getIndexOf(i - 1),
        o = n.index,
        s = n.remainder;
      return this.lines[o].normalizePosition(this.model, o + 1, s, e, t);
    }
    getLineIndentColumn(e) {
      const t = this._toValidViewLineNumber(e),
        i = this.prefixSumComputer.getIndexOf(t - 1),
        n = i.index;
      return 0 === i.remainder ? this.model.getLineIndentColumn(n + 1) : 0;
    }
  }
  class vn {
    constructor(e, t) {
      ((this.modelLineNumber = e), (this.modelLineWrappedLineIdx = t));
    }
    get isWrappedLineContinuation() {
      return this.modelLineWrappedLineIdx > 0;
    }
  }
  class _n {
    constructor(e, t) {
      ((this.modelRange = e), (this.viewLines = t));
    }
  }
  class bn {
    constructor() {}
    isVisible() {
      return !0;
    }
    setVisible(e) {
      return e ? this : wn.INSTANCE;
    }
    getLineBreakData() {
      return null;
    }
    getViewLineCount() {
      return 1;
    }
    getViewLineContent(e, t, i) {
      return e.getLineContent(t);
    }
    getViewLineLength(e, t, i) {
      return e.getLineLength(t);
    }
    getViewLineMinColumn(e, t, i) {
      return e.getLineMinColumn(t);
    }
    getViewLineMaxColumn(e, t, i) {
      return e.getLineMaxColumn(t);
    }
    getViewLineData(e, t, i) {
      let n = e.getLineTokens(t),
        o = n.getLineContent();
      return new Mt.IP(o, !1, 1, o.length + 1, 0, n.inflate(), null);
    }
    getViewLinesData(e, t, i, n, o, s, r) {
      s[o] ? (r[o] = this.getViewLineData(e, t, 0)) : (r[o] = null);
    }
    getModelColumnOfViewPosition(e, t) {
      return t;
    }
    getViewPositionOfModelPosition(e, t) {
      return new se.L(e, t);
    }
    getViewLineNumberOfModelPosition(e, t) {
      return e;
    }
    normalizePosition(e, t, i, n, o) {
      return n;
    }
    getInjectedTextAt(e, t) {
      return null;
    }
  }
  bn.INSTANCE = new bn();
  class wn {
    constructor() {}
    isVisible() {
      return !1;
    }
    setVisible(e) {
      return e ? bn.INSTANCE : this;
    }
    getLineBreakData() {
      return null;
    }
    getViewLineCount() {
      return 0;
    }
    getViewLineContent(e, t, i) {
      throw new Error("Not supported");
    }
    getViewLineLength(e, t, i) {
      throw new Error("Not supported");
    }
    getViewLineMinColumn(e, t, i) {
      throw new Error("Not supported");
    }
    getViewLineMaxColumn(e, t, i) {
      throw new Error("Not supported");
    }
    getViewLineData(e, t, i) {
      throw new Error("Not supported");
    }
    getViewLinesData(e, t, i, n, o, s, r) {
      throw new Error("Not supported");
    }
    getModelColumnOfViewPosition(e, t) {
      throw new Error("Not supported");
    }
    getViewPositionOfModelPosition(e, t) {
      throw new Error("Not supported");
    }
    getViewLineNumberOfModelPosition(e, t) {
      throw new Error("Not supported");
    }
    normalizePosition(e, t, i, n, o) {
      throw new Error("Not supported");
    }
    getInjectedTextAt(e, t) {
      throw new Error("Not supported");
    }
  }
  wn.INSTANCE = new wn();
  class yn {
    constructor(e, t) {
      ((this._lineBreakData = e), (this._isVisible = t));
    }
    isVisible() {
      return this._isVisible;
    }
    setVisible(e) {
      return ((this._isVisible = e), this);
    }
    getLineBreakData() {
      return this._lineBreakData;
    }
    getViewLineCount() {
      return this._isVisible ? this._lineBreakData.breakOffsets.length : 0;
    }
    getInputStartOffsetOfOutputLineIndex(e) {
      return this._lineBreakData.getInputOffsetOfOutputPosition(e, 0);
    }
    getInputEndOffsetOfOutputLineIndex(e, t, i) {
      return i + 1 === this._lineBreakData.breakOffsets.length ? e.getLineMaxColumn(t) - 1 : this._lineBreakData.getInputOffsetOfOutputPosition(i + 1, 0);
    }
    getViewLineContent(e, t, i) {
      if (!this._isVisible) throw new Error("Not supported");
      const n = i > 0 ? this._lineBreakData.breakOffsets[i - 1] : 0,
        o = i < this._lineBreakData.breakOffsets.length ? this._lineBreakData.breakOffsets[i] : this._lineBreakData.breakOffsets[this._lineBreakData.breakOffsets.length - 1];
      let s;
      if (null !== this._lineBreakData.injectionOffsets) {
        const i = this._lineBreakData.injectionOffsets.map((e, t) => new xi.gk(0, 0, e + 1, this._lineBreakData.injectionOptions[t], 0));
        s = xi.gk.applyInjectedText(e.getLineContent(t), i).substring(n, o);
      } else s = e.getValueInRange({
        startLineNumber: t,
        startColumn: n + 1,
        endLineNumber: t,
        endColumn: o + 1
      });
      return (i > 0 && (s = xn(this._lineBreakData.wrappedTextIndentLength) + s), s);
    }
    getViewLineLength(e, t, i) {
      if (!this._isVisible) throw new Error("Not supported");
      const n = i > 0 ? this._lineBreakData.breakOffsets[i - 1] : 0;
      let o = (i < this._lineBreakData.breakOffsets.length ? this._lineBreakData.breakOffsets[i] : this._lineBreakData.breakOffsets[this._lineBreakData.breakOffsets.length - 1]) - n;
      return (i > 0 && (o = this._lineBreakData.wrappedTextIndentLength + o), o);
    }
    getViewLineMinColumn(e, t, i) {
      if (!this._isVisible) throw new Error("Not supported");
      return this._getViewLineMinColumn(i);
    }
    _getViewLineMinColumn(e) {
      return e > 0 ? this._lineBreakData.wrappedTextIndentLength + 1 : 1;
    }
    getViewLineMaxColumn(e, t, i) {
      if (!this._isVisible) throw new Error("Not supported");
      return this.getViewLineLength(e, t, i) + 1;
    }
    getViewLineData(e, t, i) {
      if (!this._isVisible) throw new Error("Not supported");
      const n = this._lineBreakData,
        o = i > 0 ? n.wrappedTextIndentLength : 0,
        s = n.injectionOffsets,
        r = n.injectionOptions;
      let a, l, c;
      if (s) {
        const d = e.getLineTokens(t).withInserted(s.map((e, t) => ({
            offset: e,
            text: r[t].content,
            tokenMetadata: un.A.defaultTokenMetadata
          }))),
          h = i > 0 ? n.breakOffsets[i - 1] : 0,
          u = n.breakOffsets[i];
        ((a = d.getLineContent().substring(h, u)), (l = d.sliceAndInflate(h, u, o)), (c = new Array()));
        let g = 0;
        for (let e = 0; e < s.length; e++) {
          const t = r[e].content.length,
            o = s[e] + g,
            a = s[e] + g + t;
          if (o > u) break;
          if (h < a) {
            const t = r[e];
            if (t.inlineClassName) {
              const e = i > 0 ? n.wrappedTextIndentLength : 0,
                s = e + Math.max(o - h, 0),
                r = e + Math.min(a - h, u);
              s !== r && c.push(new Mt.Wx(s, r, t.inlineClassName, t.inlineClassNameAffectsLetterSpacing));
            }
          }
          g += t;
        }
      } else {
        const n = this.getInputStartOffsetOfOutputLineIndex(i),
          s = this.getInputEndOffsetOfOutputLineIndex(e, t, i),
          r = e.getLineTokens(t);
        ((a = e.getValueInRange({
          startLineNumber: t,
          startColumn: n + 1,
          endLineNumber: t,
          endColumn: s + 1
        })), (l = r.sliceAndInflate(n, s, o)), (c = null));
      }
      i > 0 && (a = xn(n.wrappedTextIndentLength) + a);
      const d = i > 0 ? n.wrappedTextIndentLength + 1 : 1,
        h = a.length + 1,
        u = i + 1 < this.getViewLineCount(),
        g = 0 === i ? 0 : n.breakOffsetsVisibleColumn[i - 1];
      return new Mt.IP(a, u, d, h, g, l, c);
    }
    getViewLinesData(e, t, i, n, o, s, r) {
      if (!this._isVisible) throw new Error("Not supported");
      for (let a = i; a < n; a++) {
        let n = o + a - i;
        s[n] ? (r[n] = this.getViewLineData(e, t, a)) : (r[n] = null);
      }
    }
    getModelColumnOfViewPosition(e, t) {
      if (!this._isVisible) throw new Error("Not supported");
      let i = t - 1;
      return (e > 0 && (i < this._lineBreakData.wrappedTextIndentLength ? (i = 0) : (i -= this._lineBreakData.wrappedTextIndentLength)), this._lineBreakData.getInputOffsetOfOutputPosition(e, i) + 1);
    }
    getViewPositionOfModelPosition(e, t, i = 2) {
      if (!this._isVisible) throw new Error("Not supported");
      let n = this._lineBreakData.getOutputPositionOfInputOffset(t - 1, i),
        o = n.outputLineIndex,
        s = n.outputOffset + 1;
      return (o > 0 && (s += this._lineBreakData.wrappedTextIndentLength), new se.L(e + o, s));
    }
    getViewLineNumberOfModelPosition(e, t) {
      if (!this._isVisible) throw new Error("Not supported");
      return (e + this._lineBreakData.getOutputPositionOfInputOffset(t - 1).outputLineIndex);
    }
    normalizePosition(e, t, i, n, o) {
      if (null !== this._lineBreakData.injectionOffsets) {
        const e = n.lineNumber - i,
          t = this._lineBreakData.outputPositionToOffsetInUnwrappedLine(i, n.column - 1),
          s = this._lineBreakData.normalizeOffsetAroundInjections(t, o);
        if (s !== t) return this._lineBreakData.getOutputPositionOfOffsetInUnwrappedLine(s, o).toPosition(e, this._lineBreakData.wrappedTextIndentLength);
      }
      if (0 === o) {
        if (i > 0 && n.column === this._getViewLineMinColumn(i)) return new se.L(n.lineNumber - 1, this.getViewLineMaxColumn(e, t, i - 1));
      } else if (1 === o) {
        if (i < this.getViewLineCount() - 1 && n.column === this.getViewLineMaxColumn(e, t, i)) return new se.L(n.lineNumber + 1, this._getViewLineMinColumn(i + 1));
      }
      return n;
    }
    getInjectedTextAt(e, t) {
      return this._lineBreakData.getInjectedText(e, t - 1);
    }
  }
  let Cn = [""];
  function xn(e) {
    if (e >= Cn.length) for (let t = 1; t <= e; t++) Cn[t] = Sn(t);
    return Cn[e];
  }
  function Sn(e) {
    return new Array(e + 1).join(" ");
  }
  function kn(e, t) {
    return null === e ? (t ? bn.INSTANCE : wn.INSTANCE) : new yn(e, t);
  }
  class Ln {
    constructor(e) {
      this._lines = e;
    }
    _validPosition(e) {
      return this._lines.model.validatePosition(e);
    }
    _validRange(e) {
      return this._lines.model.validateRange(e);
    }
    convertViewPositionToModelPosition(e) {
      return this._validPosition(e);
    }
    convertViewRangeToModelRange(e) {
      return this._validRange(e);
    }
    validateViewPosition(e, t) {
      return this._validPosition(t);
    }
    validateViewRange(e, t) {
      return this._validRange(t);
    }
    convertModelPositionToViewPosition(e) {
      return this._validPosition(e);
    }
    convertModelRangeToViewRange(e) {
      return this._validRange(e);
    }
    modelPositionIsVisible(e) {
      const t = this._lines.model.getLineCount();
      return !(e.lineNumber < 1 || e.lineNumber > t);
    }
    getModelLineViewLineCount(e) {
      return 1;
    }
    getViewLineNumberOfModelPosition(e, t) {
      return e;
    }
  }
  class Nn {
    constructor(e) {
      this.model = e;
    }
    dispose() {}
    createCoordinatesConverter() {
      return new Ln(this);
    }
    getHiddenAreas() {
      return [];
    }
    setHiddenAreas(e) {
      return !1;
    }
    setTabSize(e) {
      return !1;
    }
    setWrappingSettings(e, t, i, n) {
      return !1;
    }
    createLineBreaksComputer() {
      let e = [];
      return {
        addRequest: (t, i, n) => {
          e.push(null);
        },
        finalize: () => e
      };
    }
    onModelFlushed() {}
    onModelLinesDeleted(e, t, i) {
      return new Oi(t, i);
    }
    onModelLinesInserted(e, t, i, n) {
      return new Pi(t, i);
    }
    onModelLineChanged(e, t, i) {
      return [!1, new Ai(t, t), null, null];
    }
    acceptVersionId(e) {}
    getViewLineCount() {
      return this.model.getLineCount();
    }
    getActiveIndentGuide(e, t, i) {
      return {
        startLineNumber: e,
        endLineNumber: e,
        indent: 0
      };
    }
    getViewLinesBracketGuides(e, t, i) {
      return new Array(t - e + 1).fill([]);
    }
    getViewLinesIndentGuides(e, t) {
      const i = t - e + 1;
      let n = new Array(i);
      for (let e = 0; e < i; e++) n[e] = 0;
      return n;
    }
    getViewLineContent(e) {
      return this.model.getLineContent(e);
    }
    getViewLineLength(e) {
      return this.model.getLineLength(e);
    }
    getViewLineMinColumn(e) {
      return this.model.getLineMinColumn(e);
    }
    getViewLineMaxColumn(e) {
      return this.model.getLineMaxColumn(e);
    }
    getViewLineData(e) {
      let t = this.model.getLineTokens(e),
        i = t.getLineContent();
      return new Mt.IP(i, !1, 1, i.length + 1, 0, t.inflate(), null);
    }
    getViewLinesData(e, t, i) {
      const n = this.model.getLineCount();
      ((e = Math.min(Math.max(1, e), n)), (t = Math.min(Math.max(1, t), n)));
      let o = [];
      for (let n = e; n <= t; n++) {
        let t = n - e;
        (i[t] || (o[t] = null), (o[t] = this.getViewLineData(n)));
      }
      return o;
    }
    getDecorationsInRange(e, t, i) {
      return this.model.getDecorationsInRange(e, t, i);
    }
    normalizePosition(e, t) {
      return this.model.normalizePosition(e, t);
    }
    getLineIndentColumn(e) {
      return this.model.getLineIndentColumn(e);
    }
    getInjectedTextAt(e) {
      return null;
    }
  }
  class Dn {
    constructor(e, t, i, n, o) {
      ((this.editorId = e), (this.model = t), (this.configuration = i), (this._linesCollection = n), (this._coordinatesConverter = o), (this._decorationsCache = Object.create(null)), (this._cachedModelDecorationsResolver = null), (this._cachedModelDecorationsResolverViewRange = null));
    }
    _clearCachedModelDecorationsResolver() {
      ((this._cachedModelDecorationsResolver = null), (this._cachedModelDecorationsResolverViewRange = null));
    }
    dispose() {
      ((this._decorationsCache = Object.create(null)), this._clearCachedModelDecorationsResolver());
    }
    reset() {
      ((this._decorationsCache = Object.create(null)), this._clearCachedModelDecorationsResolver());
    }
    onModelDecorationsChanged() {
      ((this._decorationsCache = Object.create(null)), this._clearCachedModelDecorationsResolver());
    }
    onLineMappingChanged() {
      ((this._decorationsCache = Object.create(null)), this._clearCachedModelDecorationsResolver());
    }
    _getOrCreateViewModelDecoration(e) {
      const t = e.id;
      let i = this._decorationsCache[t];
      if (!i) {
        const n = e.range,
          o = e.options;
        let s;
        if (o.isWholeLine) {
          const e = this._coordinatesConverter.convertModelPositionToViewPosition(new se.L(n.startLineNumber, 1), 0),
            t = this._coordinatesConverter.convertModelPositionToViewPosition(new se.L(n.endLineNumber, this.model.getLineMaxColumn(n.endLineNumber)), 1);
          s = new re.e(e.lineNumber, e.column, t.lineNumber, t.column);
        } else s = this._coordinatesConverter.convertModelRangeToViewRange(n, 1);
        ((i = new Mt.$l(s, o)), (this._decorationsCache[t] = i));
      }
      return i;
    }
    getDecorationsViewportData(e) {
      let t = null !== this._cachedModelDecorationsResolver;
      return ((t = t && e.equalsRange(this._cachedModelDecorationsResolverViewRange)), t || ((this._cachedModelDecorationsResolver = this._getDecorationsViewportData(e)), (this._cachedModelDecorationsResolverViewRange = e)), this._cachedModelDecorationsResolver);
    }
    _getDecorationsViewportData(e) {
      const t = this._linesCollection.getDecorationsInRange(e, this.editorId, (0, K.$J)(this.configuration.options)),
        i = e.startLineNumber,
        n = e.endLineNumber;
      let o = [],
        s = 0,
        r = [];
      for (let e = i; e <= n; e++) r[e - i] = [];
      for (let e = 0, a = t.length; e < a; e++) {
        let a = t[e],
          l = a.options,
          c = this._getOrCreateViewModelDecoration(a),
          d = c.range;
        if (((o[s++] = c), l.inlineClassName)) {
          let e = new Mt.$t(d, l.inlineClassName, l.inlineClassNameAffectsLetterSpacing ? 3 : 0),
            t = Math.max(i, d.startLineNumber),
            o = Math.min(n, d.endLineNumber);
          for (let n = t; n <= o; n++) r[n - i].push(e);
        }
        if (l.beforeContentClassName && i <= d.startLineNumber && d.startLineNumber <= n) {
          let e = new Mt.$t(new re.e(d.startLineNumber, d.startColumn, d.startLineNumber, d.startColumn), l.beforeContentClassName, 1);
          r[d.startLineNumber - i].push(e);
        }
        if (l.afterContentClassName && i <= d.endLineNumber && d.endLineNumber <= n) {
          let e = new Mt.$t(new re.e(d.endLineNumber, d.endColumn, d.endLineNumber, d.endColumn), l.afterContentClassName, 2);
          r[d.endLineNumber - i].push(e);
        }
      }
      return {
        decorations: o,
        inlineDecorations: r
      };
    }
  }
  var In = i(71144);
  class En extends u.JT {
    constructor(e, t, i, n, o, s) {
      if ((super(), (this._editorId = e), (this._configuration = t), (this.model = i), (this._eventDispatcher = new zi()), (this.onEvent = this._eventDispatcher.onEvent), (this.cursorConfig = new ae.LM(this.model.getLanguageId(), this.model.getOptions(), this._configuration)), (this._tokenizeViewportSoon = this._register(new C.pY(() => this.tokenizeViewport(), 50))), (this._updateConfigurationViewLineCount = this._register(new C.pY(() => this._updateConfigurationViewLineCountNow(), 0))), (this._hasFocus = !1), (this._viewportStartLine = -1), (this._viewportStartLineTrackedRange = null), (this._viewportStartLineDelta = 0), this.model.isTooLargeForTokenization())) this._lines = new Nn(this.model);else {
        const e = this._configuration.options,
          t = e.get(43),
          i = e.get(123),
          s = e.get(130),
          r = e.get(122);
        this._lines = new mn(this._editorId, this.model, n, o, t, this.model.getOptions().tabSize, i, s.wrappingColumn, r);
      }
      ((this.coordinatesConverter = this._lines.createCoordinatesConverter()), (this._cursor = this._register(new Xi(i, this, this.coordinatesConverter, this.cursorConfig))), (this.viewLayout = this._register(new hn(this._configuration, this.getLineCount(), s))), this._register(this.viewLayout.onDidScroll(e => {
        (e.scrollTopChanged && this._tokenizeViewportSoon.schedule(), this._eventDispatcher.emitSingleViewEvent(new Fi(e)), this._eventDispatcher.emitOutgoingEvent(new Ki(e.oldScrollWidth, e.oldScrollLeft, e.oldScrollHeight, e.oldScrollTop, e.scrollWidth, e.scrollLeft, e.scrollHeight, e.scrollTop)));
      })), this._register(this.viewLayout.onDidContentSizeChange(e => {
        this._eventDispatcher.emitOutgoingEvent(e);
      })), (this._decorations = new Dn(this._editorId, this.model, this._configuration, this._lines, this.coordinatesConverter)), this._registerModelEvents(), this._register(this._configuration.onDidChangeFast(e => {
        try {
          const t = this._eventDispatcher.beginEmitViewEvents();
          this._onConfigurationChanged(t, e);
        } finally {
          this._eventDispatcher.endEmitViewEvents();
        }
      })), this._register(Tt.getInstance().onDidChange(() => {
        this._eventDispatcher.emitSingleViewEvent(new Wi());
      })), this._updateConfigurationViewLineCountNow());
    }
    dispose() {
      (super.dispose(), this._decorations.dispose(), this._lines.dispose(), this.invalidateMinimapColorCache(), (this._viewportStartLineTrackedRange = this.model._setTrackedRange(this._viewportStartLineTrackedRange, null, 1)), this._eventDispatcher.dispose());
    }
    createLineBreaksComputer() {
      return this._lines.createLineBreaksComputer();
    }
    addViewEventHandler(e) {
      this._eventDispatcher.addViewEventHandler(e);
    }
    removeViewEventHandler(e) {
      this._eventDispatcher.removeViewEventHandler(e);
    }
    _updateConfigurationViewLineCountNow() {
      this._configuration.setViewLineCount(this._lines.getViewLineCount());
    }
    tokenizeViewport() {
      const e = this.viewLayout.getLinesViewportData(),
        t = new re.e(e.startLineNumber, this.getLineMinColumn(e.startLineNumber), e.endLineNumber, this.getLineMaxColumn(e.endLineNumber)),
        i = this._toModelVisibleRanges(t);
      for (const e of i) this.model.tokenizeViewport(e.startLineNumber, e.endLineNumber);
    }
    setHasFocus(e) {
      ((this._hasFocus = e), this._cursor.setHasFocus(e), this._eventDispatcher.emitSingleViewEvent(new Ei(e)), this._eventDispatcher.emitOutgoingEvent(new $i(!e, e)));
    }
    onCompositionStart() {
      this._eventDispatcher.emitSingleViewEvent(new Si());
    }
    onCompositionEnd() {
      this._eventDispatcher.emitSingleViewEvent(new ki());
    }
    onDidColorThemeChange() {
      this._eventDispatcher.emitSingleViewEvent(new Bi());
    }
    _onConfigurationChanged(e, t) {
      let i = null;
      if (-1 !== this._viewportStartLine) {
        let e = new se.L(this._viewportStartLine, this.getLineMinColumn(this._viewportStartLine));
        i = this.coordinatesConverter.convertViewPositionToModelPosition(e);
      }
      let n = !1;
      const o = this._configuration.options,
        s = o.get(43),
        r = o.get(123),
        a = o.get(130),
        l = o.get(122);
      if ((this._lines.setWrappingSettings(s, r, a.wrappingColumn, l) && (e.emitViewEvent(new Ii()), e.emitViewEvent(new Mi()), e.emitViewEvent(new Di(null)), this._cursor.onLineMappingChanged(e), this._decorations.onLineMappingChanged(), this.viewLayout.onFlushed(this.getLineCount()), 0 !== this.viewLayout.getCurrentScrollTop() && (n = !0), this._updateConfigurationViewLineCount.schedule()), t.hasChanged(80) && (this._decorations.reset(), e.emitViewEvent(new Di(null))), e.emitViewEvent(new Li(t)), this.viewLayout.onConfigurationChanged(t), n && i)) {
        const e = this.coordinatesConverter.convertModelPositionToViewPosition(i),
          t = this.viewLayout.getVerticalOffsetForLineNumber(e.lineNumber);
        this.viewLayout.setScrollPosition({
          scrollTop: t + this._viewportStartLineDelta
        }, 1);
      }
      ae.LM.shouldRecreate(t) && ((this.cursorConfig = new ae.LM(this.model.getLanguageId(), this.model.getOptions(), this._configuration)), this._cursor.updateConfiguration(this.cursorConfig));
    }
    _registerModelEvents() {
      (this._register(this.model.onDidChangeContentOrInjectedText(e => {
        try {
          const t = this._eventDispatcher.beginEmitViewEvents();
          let i = !1,
            n = !1;
          const o = e.changes,
            s = e instanceof xi.dQ ? e.versionId : null,
            r = this._lines.createLineBreaksComputer();
          for (const e of o) switch (e.changeType) {
            case 4:
              for (let t = 0; t < e.detail.length; t++) {
                const i = e.detail[t];
                let n = e.injectedTexts[t];
                (n && (n = n.filter(e => !e.ownerId || e.ownerId === this._editorId)), r.addRequest(i, n, null));
              }
              break;
            case 2:
              {
                let t = null;
                (e.injectedText && (t = e.injectedText.filter(e => !e.ownerId || e.ownerId === this._editorId)), r.addRequest(e.detail, t, null));
                break;
              }
          }
          const a = r.finalize();
          let l = 0;
          for (const e of o) switch (e.changeType) {
            case 1:
              (this._lines.onModelFlushed(), t.emitViewEvent(new Ii()), this._decorations.reset(), this.viewLayout.onFlushed(this.getLineCount()), (i = !0));
              break;
            case 3:
              {
                const n = this._lines.onModelLinesDeleted(s, e.fromLineNumber, e.toLineNumber);
                (null !== n && (t.emitViewEvent(n), this.viewLayout.onLinesDeleted(n.fromLineNumber, n.toLineNumber)), (i = !0));
                break;
              }
            case 4:
              {
                const n = a.slice(l, l + e.detail.length);
                l += e.detail.length;
                const o = this._lines.onModelLinesInserted(s, e.fromLineNumber, e.toLineNumber, n);
                (null !== o && (t.emitViewEvent(o), this.viewLayout.onLinesInserted(o.fromLineNumber, o.toLineNumber)), (i = !0));
                break;
              }
            case 2:
              {
                const i = a[l];
                l++;
                const [o, r, c, d] = this._lines.onModelLineChanged(s, e.lineNumber, i);
                ((n = o), r && t.emitViewEvent(r), c && (t.emitViewEvent(c), this.viewLayout.onLinesInserted(c.fromLineNumber, c.toLineNumber)), d && (t.emitViewEvent(d), this.viewLayout.onLinesDeleted(d.fromLineNumber, d.toLineNumber)));
                break;
              }
          }
          (null !== s && this._lines.acceptVersionId(s), this.viewLayout.onHeightMaybeChanged(), !i && n && (t.emitViewEvent(new Mi()), t.emitViewEvent(new Di(null)), this._cursor.onLineMappingChanged(t), this._decorations.onLineMappingChanged()));
        } finally {
          this._eventDispatcher.endEmitViewEvents();
        }
        if (((this._viewportStartLine = -1), this._configuration.setMaxLineNumber(this.model.getLineCount()), this._updateConfigurationViewLineCountNow(), !this._hasFocus && this.model.getAttachedEditorCount() >= 2 && this._viewportStartLineTrackedRange)) {
          const e = this.model._getTrackedRange(this._viewportStartLineTrackedRange);
          if (e) {
            const t = this.coordinatesConverter.convertModelPositionToViewPosition(e.getStartPosition()),
              i = this.viewLayout.getVerticalOffsetForLineNumber(t.lineNumber);
            this.viewLayout.setScrollPosition({
              scrollTop: i + this._viewportStartLineDelta
            }, 1);
          }
        }
        try {
          const t = this._eventDispatcher.beginEmitViewEvents();
          this._cursor.onModelContentChanged(t, e);
        } finally {
          this._eventDispatcher.endEmitViewEvents();
        }
      })), this._register(this.model.onDidChangeTokens(e => {
        let t = [];
        for (let i = 0, n = e.ranges.length; i < n; i++) {
          const n = e.ranges[i],
            o = this.coordinatesConverter.convertModelPositionToViewPosition(new se.L(n.fromLineNumber, 1)).lineNumber,
            s = this.coordinatesConverter.convertModelPositionToViewPosition(new se.L(n.toLineNumber, this.model.getLineMaxColumn(n.toLineNumber))).lineNumber;
          t[i] = {
            fromLineNumber: o,
            toLineNumber: s
          };
        }
        (this._eventDispatcher.emitSingleViewEvent(new Vi(t)), e.tokenizationSupportChanged && this._tokenizeViewportSoon.schedule());
      })), this._register(this.model.onDidChangeLanguageConfiguration(e => {
        (this._eventDispatcher.emitSingleViewEvent(new Ti()), (this.cursorConfig = new ae.LM(this.model.getLanguageId(), this.model.getOptions(), this._configuration)), this._cursor.updateConfiguration(this.cursorConfig));
      })), this._register(this.model.onDidChangeLanguage(e => {
        ((this.cursorConfig = new ae.LM(this.model.getLanguageId(), this.model.getOptions(), this._configuration)), this._cursor.updateConfiguration(this.cursorConfig));
      })), this._register(this.model.onDidChangeOptions(e => {
        if (this._lines.setTabSize(this.model.getOptions().tabSize)) {
          try {
            const e = this._eventDispatcher.beginEmitViewEvents();
            (e.emitViewEvent(new Ii()), e.emitViewEvent(new Mi()), e.emitViewEvent(new Di(null)), this._cursor.onLineMappingChanged(e), this._decorations.onLineMappingChanged(), this.viewLayout.onFlushed(this.getLineCount()));
          } finally {
            this._eventDispatcher.endEmitViewEvents();
          }
          this._updateConfigurationViewLineCount.schedule();
        }
        ((this.cursorConfig = new ae.LM(this.model.getLanguageId(), this.model.getOptions(), this._configuration)), this._cursor.updateConfiguration(this.cursorConfig));
      })), this._register(this.model.onDidChangeDecorations(e => {
        (this._decorations.onModelDecorationsChanged(), this._eventDispatcher.emitSingleViewEvent(new Di(e)));
      })));
    }
    setHiddenAreas(e) {
      let t = !1;
      try {
        const i = this._eventDispatcher.beginEmitViewEvents();
        ((t = this._lines.setHiddenAreas(e)), t && (i.emitViewEvent(new Ii()), i.emitViewEvent(new Mi()), i.emitViewEvent(new Di(null)), this._cursor.onLineMappingChanged(i), this._decorations.onLineMappingChanged(), this.viewLayout.onFlushed(this.getLineCount()), this.viewLayout.onHeightMaybeChanged()));
      } finally {
        this._eventDispatcher.endEmitViewEvents();
      }
      (this._updateConfigurationViewLineCount.schedule(), t && this._eventDispatcher.emitOutgoingEvent(new qi()));
    }
    getVisibleRangesPlusViewportAboveBelow() {
      const e = this._configuration.options.get(129),
        t = this._configuration.options.get(58),
        i = Math.max(20, Math.round(e.height / t)),
        n = this.viewLayout.getLinesViewportData(),
        o = Math.max(1, n.completelyVisibleStartLineNumber - i),
        s = Math.min(this.getLineCount(), n.completelyVisibleEndLineNumber + i);
      return this._toModelVisibleRanges(new re.e(o, this.getLineMinColumn(o), s, this.getLineMaxColumn(s)));
    }
    getVisibleRanges() {
      const e = this.getCompletelyVisibleViewRange();
      return this._toModelVisibleRanges(e);
    }
    _toModelVisibleRanges(e) {
      const t = this.coordinatesConverter.convertViewRangeToModelRange(e),
        i = this._lines.getHiddenAreas();
      if (0 === i.length) return [t];
      let n = [],
        o = 0,
        s = t.startLineNumber,
        r = t.startColumn,
        a = t.endLineNumber,
        l = t.endColumn;
      for (let e = 0, t = i.length; e < t; e++) {
        const t = i[e].startLineNumber,
          l = i[e].endLineNumber;
        l < s || t > a || (s < t && (n[o++] = new re.e(s, r, t - 1, this.model.getLineMaxColumn(t - 1))), (s = l + 1), (r = 1));
      }
      return ((s < a || (s === a && r < l)) && (n[o++] = new re.e(s, r, a, l)), n);
    }
    getCompletelyVisibleViewRange() {
      const e = this.viewLayout.getLinesViewportData(),
        t = e.completelyVisibleStartLineNumber,
        i = e.completelyVisibleEndLineNumber;
      return new re.e(t, this.getLineMinColumn(t), i, this.getLineMaxColumn(i));
    }
    getCompletelyVisibleViewRangeAtScrollTop(e) {
      const t = this.viewLayout.getLinesViewportDataAtScrollTop(e),
        i = t.completelyVisibleStartLineNumber,
        n = t.completelyVisibleEndLineNumber;
      return new re.e(i, this.getLineMinColumn(i), n, this.getLineMaxColumn(n));
    }
    saveState() {
      const e = this.viewLayout.saveState(),
        t = e.scrollTop,
        i = this.viewLayout.getLineNumberAtVerticalOffset(t),
        n = this.coordinatesConverter.convertViewPositionToModelPosition(new se.L(i, this.getLineMinColumn(i))),
        o = this.viewLayout.getVerticalOffsetForLineNumber(i) - t;
      return {
        scrollLeft: e.scrollLeft,
        firstPosition: n,
        firstPositionDeltaTop: o
      };
    }
    reduceRestoreState(e) {
      if (void 0 === e.firstPosition) return this._reduceRestoreStateCompatibility(e);
      const t = this.model.validatePosition(e.firstPosition),
        i = this.coordinatesConverter.convertModelPositionToViewPosition(t),
        n = this.viewLayout.getVerticalOffsetForLineNumber(i.lineNumber) - e.firstPositionDeltaTop;
      return {
        scrollLeft: e.scrollLeft,
        scrollTop: n
      };
    }
    _reduceRestoreStateCompatibility(e) {
      return {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTopWithoutViewZones
      };
    }
    getTabSize() {
      return this.model.getOptions().tabSize;
    }
    getTextModelOptions() {
      return this.model.getOptions();
    }
    getLineCount() {
      return this._lines.getViewLineCount();
    }
    setViewport(e, t, i) {
      this._viewportStartLine = e;
      let n = this.coordinatesConverter.convertViewPositionToModelPosition(new se.L(e, this.getLineMinColumn(e)));
      this._viewportStartLineTrackedRange = this.model._setTrackedRange(this._viewportStartLineTrackedRange, new re.e(n.lineNumber, n.column, n.lineNumber, n.column), 1);
      const o = this.viewLayout.getVerticalOffsetForLineNumber(e),
        s = this.viewLayout.getCurrentScrollTop();
      this._viewportStartLineDelta = s - o;
    }
    getActiveIndentGuide(e, t, i) {
      return this._lines.getActiveIndentGuide(e, t, i);
    }
    getLinesIndentGuides(e, t) {
      return this._lines.getViewLinesIndentGuides(e, t);
    }
    getBracketGuidesInRangeByLine(e, t, i, n) {
      return this._lines.getViewLinesBracketGuides(e, t, i, n);
    }
    getLineContent(e) {
      return this._lines.getViewLineContent(e);
    }
    getLineLength(e) {
      return this._lines.getViewLineLength(e);
    }
    getLineMinColumn(e) {
      return this._lines.getViewLineMinColumn(e);
    }
    getLineMaxColumn(e) {
      return this._lines.getViewLineMaxColumn(e);
    }
    getLineFirstNonWhitespaceColumn(e) {
      const t = Te.LC(this.getLineContent(e));
      return -1 === t ? 0 : t + 1;
    }
    getLineLastNonWhitespaceColumn(e) {
      const t = Te.ow(this.getLineContent(e));
      return -1 === t ? 0 : t + 2;
    }
    getDecorationsInViewport(e) {
      return this._decorations.getDecorationsViewportData(e).decorations;
    }
    getInjectedTextAt(e) {
      return this._lines.getInjectedTextAt(e);
    }
    getViewLineRenderingData(e, t) {
      let i = this.model.mightContainRTL(),
        n = this.model.mightContainNonBasicASCII(),
        o = this.getTabSize(),
        s = this._lines.getViewLineData(t),
        r = this._decorations.getDecorationsViewportData(e).inlineDecorations[t - e.startLineNumber];
      return (s.inlineDecorations && (r = [...r, ...s.inlineDecorations.map(e => e.toInlineDecoration(t))]), new Mt.wA(s.minColumn, s.maxColumn, s.content, s.continuesWithWrappedLine, i, n, s.tokens, r, o, s.startVisibleColumn));
    }
    getViewLineData(e) {
      return this._lines.getViewLineData(e);
    }
    getMinimapLinesRenderingData(e, t, i) {
      let n = this._lines.getViewLinesData(e, t, i);
      return new Mt.ud(this.getTabSize(), n);
    }
    getAllOverviewRulerDecorations(e) {
      const t = this.model.getOverviewRulerDecorations(this._editorId, (0, K.$J)(this._configuration.options)),
        i = new Tn();
      for (const n of t) {
        const t = n.options,
          o = t.overviewRuler;
        if (!o) continue;
        const s = o.position;
        if (0 === s) continue;
        const r = o.getColor(e),
          a = this.coordinatesConverter.getViewLineNumberOfModelPosition(n.range.startLineNumber, n.range.startColumn),
          l = this.coordinatesConverter.getViewLineNumberOfModelPosition(n.range.endLineNumber, n.range.endColumn);
        i.accept(r, t.zIndex, a, l, s);
      }
      return i.asArray;
    }
    invalidateOverviewRulerColorCache() {
      const e = this.model.getOverviewRulerDecorations();
      for (const t of e) {
        const e = t.options.overviewRuler;
        e && e.invalidateCachedColor();
      }
    }
    invalidateMinimapColorCache() {
      const e = this.model.getAllDecorations();
      for (const t of e) {
        const e = t.options.minimap;
        e && e.invalidateCachedColor();
      }
    }
    getValueInRange(e, t) {
      const i = this.coordinatesConverter.convertViewRangeToModelRange(e);
      return this.model.getValueInRange(i, t);
    }
    getModelLineMaxColumn(e) {
      return this.model.getLineMaxColumn(e);
    }
    validateModelPosition(e) {
      return this.model.validatePosition(e);
    }
    validateModelRange(e) {
      return this.model.validateRange(e);
    }
    deduceModelPositionRelativeToViewPosition(e, t, i) {
      const n = this.coordinatesConverter.convertViewPositionToModelPosition(e);
      2 === this.model.getEOL().length && (t < 0 ? (t -= i) : (t += i));
      const o = this.model.getOffsetAt(n) + t;
      return this.model.getPositionAt(o);
    }
    getEOL() {
      return this.model.getEOL();
    }
    getPlainTextToCopy(e, t, i) {
      const n = i ? "\r\n" : this.model.getEOL();
      (e = e.slice(0)).sort(re.e.compareRangesUsingStarts);
      let o = !1,
        s = !1;
      for (const t of e) t.isEmpty() ? (o = !0) : (s = !0);
      if (!s) {
        if (!t) return "";
        const i = e.map(e => e.startLineNumber);
        let o = "";
        for (let e = 0; e < i.length; e++) (e > 0 && i[e - 1] === i[e]) || (o += this.model.getLineContent(i[e]) + n);
        return o;
      }
      if (o && t) {
        let t = [],
          n = 0;
        for (const o of e) {
          const e = o.startLineNumber;
          (o.isEmpty() ? e !== n && t.push(this.model.getLineContent(e)) : t.push(this.model.getValueInRange(o, i ? 2 : 0)), (n = e));
        }
        return 1 === t.length ? t[0] : t;
      }
      let r = [];
      for (const t of e) t.isEmpty() || r.push(this.model.getValueInRange(t, i ? 2 : 0));
      return 1 === r.length ? r[0] : r;
    }
    getRichTextToCopy(e, t) {
      const i = this.model.getLanguageId();
      if (i === In.XT) return null;
      if (1 !== e.length) return null;
      let n = e[0];
      if (n.isEmpty()) {
        if (!t) return null;
        const e = n.startLineNumber;
        n = new re.e(e, this.model.getLineMinColumn(e), e, this.model.getLineMaxColumn(e));
      }
      const o = this._configuration.options.get(43),
        s = this._getColorMap();
      let r;
      if (/[:;\\\/<>]/.test(o.fontFamily) || o.fontFamily === K.hL.fontFamily) r = K.hL.fontFamily;else {
        ((r = o.fontFamily), (r = r.replace(/"/g, "'")));
        if (!/[,']/.test(r)) {
          /[+ ]/.test(r) && (r = `'${r}'`);
        }
        r = `${r}, ${K.hL.fontFamily}`;
      }
      return {
        mode: i,
        html: `<div style="color: ${s[1]};background-color: ${s[2]};font-family: ${r};font-weight: ${o.fontWeight};font-size: ${o.fontSize}px;line-height: ${o.lineHeight}px;white-space: pre;">` + this._getHTMLToCopy(n, s) + "</div>"
      };
    }
    _getHTMLToCopy(e, t) {
      const i = e.startLineNumber,
        n = e.startColumn,
        o = e.endLineNumber,
        s = e.endColumn,
        r = this.getTabSize();
      let a = "";
      for (let e = i; e <= o; e++) {
        const l = this.model.getLineTokens(e),
          c = l.getLineContent(),
          d = e === i ? n - 1 : 0,
          h = e === o ? s - 1 : c.length;
        a += "" === c ? "<br>" : (0, on.F)(c, l.inflate(), t, d, h, r, b.ED);
      }
      return a;
    }
    _getColorMap() {
      let e = Et.RW.getColorMap(),
        t = ["#000000"];
      if (e) for (let i = 1, n = e.length; i < n; i++) t[i] = Qt.Il.Format.CSS.formatHex(e[i]);
      return t;
    }
    pushStackElement() {
      this.model.pushStackElement();
    }
    getPrimaryCursorState() {
      return this._cursor.getPrimaryCursorState();
    }
    getLastAddedCursorIndex() {
      return this._cursor.getLastAddedCursorIndex();
    }
    getCursorStates() {
      return this._cursor.getCursorStates();
    }
    setCursorStates(e, t, i) {
      this._withViewEventsCollector(n => this._cursor.setStates(n, e, t, i));
    }
    getCursorColumnSelectData() {
      return this._cursor.getCursorColumnSelectData();
    }
    getCursorAutoClosedCharacters() {
      return this._cursor.getAutoClosedCharacters();
    }
    setCursorColumnSelectData(e) {
      this._cursor.setCursorColumnSelectData(e);
    }
    getPrevEditOperationType() {
      return this._cursor.getPrevEditOperationType();
    }
    setPrevEditOperationType(e) {
      this._cursor.setPrevEditOperationType(e);
    }
    getSelection() {
      return this._cursor.getSelection();
    }
    getSelections() {
      return this._cursor.getSelections();
    }
    getPosition() {
      return this._cursor.getPrimaryCursorState().modelState.position;
    }
    setSelections(e, t, i = 0) {
      this._withViewEventsCollector(n => this._cursor.setSelections(n, e, t, i));
    }
    saveCursorState() {
      return this._cursor.saveState();
    }
    restoreCursorState(e) {
      this._withViewEventsCollector(t => this._cursor.restoreState(t, e));
    }
    _executeCursorEdit(e) {
      this._cursor.context.cursorConfig.readOnly ? this._eventDispatcher.emitOutgoingEvent(new Gi()) : this._withViewEventsCollector(e);
    }
    executeEdits(e, t, i) {
      this._executeCursorEdit(n => this._cursor.executeEdits(n, e, t, i));
    }
    startComposition() {
      (this._cursor.setIsDoingComposition(!0), this._executeCursorEdit(e => this._cursor.startComposition(e)));
    }
    endComposition(e) {
      (this._cursor.setIsDoingComposition(!1), this._executeCursorEdit(t => this._cursor.endComposition(t, e)));
    }
    type(e, t) {
      this._executeCursorEdit(i => this._cursor.type(i, e, t));
    }
    compositionType(e, t, i, n, o) {
      this._executeCursorEdit(s => this._cursor.compositionType(s, e, t, i, n, o));
    }
    paste(e, t, i, n) {
      this._executeCursorEdit(o => this._cursor.paste(o, e, t, i, n));
    }
    cut(e) {
      this._executeCursorEdit(t => this._cursor.cut(t, e));
    }
    executeCommand(e, t) {
      this._executeCursorEdit(i => this._cursor.executeCommand(i, e, t));
    }
    executeCommands(e, t) {
      this._executeCursorEdit(i => this._cursor.executeCommands(i, e, t));
    }
    revealPrimaryCursor(e, t) {
      this._withViewEventsCollector(i => this._cursor.revealPrimary(i, e, t, 0));
    }
    revealTopMostCursor(e) {
      const t = this._cursor.getTopMostViewPosition(),
        i = new re.e(t.lineNumber, t.column, t.lineNumber, t.column);
      this._withViewEventsCollector(t => t.emitViewEvent(new Ri(e, i, null, 0, !0, 0)));
    }
    revealBottomMostCursor(e) {
      const t = this._cursor.getBottomMostViewPosition(),
        i = new re.e(t.lineNumber, t.column, t.lineNumber, t.column);
      this._withViewEventsCollector(t => t.emitViewEvent(new Ri(e, i, null, 0, !0, 0)));
    }
    revealRange(e, t, i, n, o) {
      this._withViewEventsCollector(s => s.emitViewEvent(new Ri(e, i, null, n, t, o)));
    }
    getVerticalOffsetForLineNumber(e) {
      return this.viewLayout.getVerticalOffsetForLineNumber(e);
    }
    getScrollTop() {
      return this.viewLayout.getCurrentScrollTop();
    }
    setScrollTop(e, t) {
      this.viewLayout.setScrollPosition({
        scrollTop: e
      }, t);
    }
    setScrollPosition(e, t) {
      this.viewLayout.setScrollPosition(e, t);
    }
    deltaScrollNow(e, t) {
      this.viewLayout.deltaScrollNow(e, t);
    }
    changeWhitespace(e) {
      this.viewLayout.changeWhitespace(e) && (this._eventDispatcher.emitSingleViewEvent(new Hi()), this._eventDispatcher.emitOutgoingEvent(new qi()));
    }
    setMaxLineWidth(e) {
      this.viewLayout.setMaxLineWidth(e);
    }
    _withViewEventsCollector(e) {
      try {
        e(this._eventDispatcher.beginEmitViewEvents());
      } finally {
        this._eventDispatcher.endEmitViewEvents();
      }
    }
    normalizePosition(e, t) {
      return this._lines.normalizePosition(e, t);
    }
    getLineIndentColumn(e) {
      return this._lines.getLineIndentColumn(e);
    }
  }
  class Tn {
    constructor() {
      ((this._asMap = Object.create(null)), (this.asArray = []));
    }
    accept(e, t, i, n, o) {
      const s = this._asMap[e];
      if (s) {
        const e = s.data,
          t = e[e.length - 3],
          r = e[e.length - 1];
        if (t === o && r + 1 >= i) return void (n > r && (e[e.length - 1] = n));
        e.push(o, i, n);
      } else {
        const s = new Mt.SQ(e, t, [o, i, n]);
        ((this._asMap[e] = s), this.asArray.push(s));
      }
    }
  }
  var Mn = i(94565),
    An = i(38819),
    On = i(72065),
    Pn = i(60972),
    Rn = i(59422),
    Fn = i(31106),
    Bn = i(44906);
  class Vn extends Bn.N {
    constructor(e, t) {
      super(0);
      for (let t = 0; t < e.length; t++) this.set(e.charCodeAt(t), 1);
      for (let e = 0; e < t.length; e++) this.set(t.charCodeAt(e), 2);
    }
    get(e) {
      return e >= 0 && e < 256 ? this._asciiMap[e] : (e >= 12352 && e <= 12543) || (e >= 13312 && e <= 19903) || (e >= 19968 && e <= 40959) ? 3 : this._map.get(e) || this._defaultValue;
    }
  }
  let Wn = [],
    Hn = [];
  class zn {
    constructor(e, t) {
      this.classifier = new Vn(e, t);
    }
    static create(e) {
      return new zn(e.get(118), e.get(117));
    }
    createLineBreaksComputer(e, t, i, n) {
      ((t |= 0), (i = +i));
      const o = [],
        s = [],
        r = [];
      return {
        addRequest: (e, t, i) => {
          (o.push(e), s.push(t), r.push(i));
        },
        finalize: () => {
          const a = e.typicalFullwidthCharacterWidth / e.typicalHalfwidthCharacterWidth;
          let l = [];
          for (let e = 0, c = o.length; e < c; e++) {
            const c = s[e],
              d = r[e];
            !d || d.injectionOptions || c ? (l[e] = Un(this.classifier, o[e], c, t, i, a, n)) : (l[e] = jn(this.classifier, d, o[e], t, i, a, n));
          }
          return ((Wn.length = 0), (Hn.length = 0), l);
        }
      };
    }
  }
  function jn(e, t, i, n, o, s, r) {
    if (-1 === o) return null;
    const a = i.length;
    if (a <= 1) return null;
    const l = t.breakOffsets,
      c = t.breakOffsetsVisibleColumn,
      d = Zn(i, n, o, s, r),
      h = o - d;
    let u = Wn,
      g = Hn,
      p = 0,
      f = 0,
      m = 0,
      v = o;
    const _ = l.length;
    let b = 0;
    if (b >= 0) {
      let e = Math.abs(c[b] - v);
      for (; b + 1 < _;) {
        const t = Math.abs(c[b + 1] - v);
        if (t >= e) break;
        ((e = t), b++);
      }
    }
    for (; b < _;) {
      let t = b < 0 ? 0 : l[b],
        o = b < 0 ? 0 : c[b];
      f > t && ((t = f), (o = m));
      let r = 0,
        d = 0,
        w = 0,
        y = 0;
      if (o <= v) {
        let m = o,
          _ = 0 === t ? 0 : i.charCodeAt(t - 1),
          b = 0 === t ? 0 : e.get(_),
          C = !0;
        for (let o = t; o < a; o++) {
          const t = o,
            a = i.charCodeAt(o);
          let l, c;
          if ((Te.ZG(a) ? (o++, (l = 0), (c = 2)) : ((l = e.get(a)), (c = $n(a, m, n, s))), t > f && qn(_, b, a, l) && ((r = t), (d = m)), (m += c), m > v)) {
            (t > f ? ((w = t), (y = m - c)) : ((w = o + 1), (y = m)), m - d > h && (r = 0), (C = !1));
            break;
          }
          ((_ = a), (b = l));
        }
        if (C) {
          p > 0 && ((u[p] = l[l.length - 1]), (g[p] = c[l.length - 1]), p++);
          break;
        }
      }
      if (0 === r) {
        let a = o,
          l = i.charCodeAt(t),
          c = e.get(l),
          u = !1;
        for (let n = t - 1; n >= f; n--) {
          const t = n + 1,
            o = i.charCodeAt(n);
          if (9 === o) {
            u = !0;
            break;
          }
          let g, p;
          if ((Te.YK(o) ? (n--, (g = 0), (p = 2)) : ((g = e.get(o)), (p = Te.K7(o) ? s : 1)), a <= v)) {
            if ((0 === w && ((w = t), (y = a)), a <= v - h)) break;
            if (qn(o, g, l, c)) {
              ((r = t), (d = a));
              break;
            }
          }
          ((a -= p), (l = o), (c = g));
        }
        if (0 !== r) {
          const e = h - (y - d);
          if (e <= n) {
            const t = i.charCodeAt(w);
            let o;
            ((o = Te.ZG(t) ? 2 : $n(t, y, n, s)), e - o < 0 && (r = 0));
          }
        }
        if (u) {
          b--;
          continue;
        }
      }
      if ((0 === r && ((r = w), (d = y)), r <= f)) {
        const e = i.charCodeAt(f);
        Te.ZG(e) ? ((r = f + 2), (d = m + 2)) : ((r = f + 1), (d = m + $n(e, m, n, s)));
      }
      for (f = r, u[p] = r, m = d, g[p] = d, p++, v = d + h; b < 0 || (b < _ && c[b] < d);) b++;
      let C = Math.abs(c[b] - v);
      for (; b + 1 < _;) {
        const e = Math.abs(c[b + 1] - v);
        if (e >= C) break;
        ((C = e), b++);
      }
    }
    return 0 === p ? null : ((u.length = p), (g.length = p), (Wn = t.breakOffsets), (Hn = t.breakOffsetsVisibleColumn), (t.breakOffsets = u), (t.breakOffsetsVisibleColumn = g), (t.wrappedTextIndentLength = d), t);
  }
  function Un(e, t, i, n, o, s, r) {
    const a = xi.gk.applyInjectedText(t, i);
    let l, c;
    if ((i && i.length > 0 ? ((l = i.map(e => e.options)), (c = i.map(e => e.column - 1))) : ((l = null), (c = null)), -1 === o)) return l ? new Mt.le([a.length], [], 0, c, l) : null;
    const d = a.length;
    if (d <= 1) return l ? new Mt.le([a.length], [], 0, c, l) : null;
    const h = Zn(a, n, o, s, r),
      u = o - h;
    let g = [],
      p = [],
      f = 0,
      m = 0,
      v = 0,
      _ = o,
      b = a.charCodeAt(0),
      w = e.get(b),
      y = $n(b, 0, n, s),
      C = 1;
    Te.ZG(b) && ((y += 1), (b = a.charCodeAt(1)), (w = e.get(b)), C++);
    for (let t = C; t < d; t++) {
      const i = t,
        o = a.charCodeAt(t);
      let r, l;
      (Te.ZG(o) ? (t++, (r = 0), (l = 2)) : ((r = e.get(o)), (l = $n(o, y, n, s))), qn(b, w, o, r) && ((m = i), (v = y)), (y += l), y > _ && ((0 === m || y - v > u) && ((m = i), (v = y - l)), (g[f] = m), (p[f] = v), f++, (_ = v + u), (m = 0)), (b = o), (w = r));
    }
    return 0 !== f || (i && 0 !== i.length) ? ((g[f] = d), (p[f] = y), new Mt.le(g, p, h, c, l)) : null;
  }
  function $n(e, t, i, n) {
    return 9 === e ? i - (t % i) : Te.K7(e) || e < 32 ? n : 1;
  }
  function Kn(e, t) {
    return t - (e % t);
  }
  function qn(e, t, i, n) {
    return (32 !== i && (2 === t || (3 === t && 2 !== n) || 1 === n || (3 === n && 1 !== t)));
  }
  function Zn(e, t, i, n, o) {
    let s = 0;
    if (0 !== o) {
      const r = Te.LC(e);
      if (-1 !== r) {
        for (let i = 0; i < r; i++) {
          s += 9 === e.charCodeAt(i) ? Kn(s, t) : 1;
        }
        const a = 3 === o ? 2 : 2 === o ? 1 : 0;
        for (let e = 0; e < a; e++) {
          s += Kn(s, t);
        }
        s + n > i && (s = 0);
      }
    }
    return s;
  }
  var Gn;
  const Yn = null === (Gn = window.trustedTypes) || void 0 === Gn ? void 0 : Gn.createPolicy("domLineBreaksComputer", {
    createHTML: e => e
  });
  class Qn {
    static create() {
      return new Qn();
    }
    constructor() {}
    createLineBreaksComputer(e, t, i, n) {
      ((t |= 0), (i = +i));
      let o = [],
        s = [];
      return {
        addRequest: (e, t, i) => {
          (o.push(e), s.push(t));
        },
        finalize: () => (function (e, t, i, n, o, s) {
          var r;
          function a(t) {
            const i = s[t];
            if (i) {
              const n = xi.gk.applyInjectedText(e[t], i),
                o = i.map(e => e.options),
                s = i.map(e => e.column - 1);
              return new Mt.le([n.length], [], 0, s, o);
            }
            return null;
          }
          if (-1 === n) {
            const t = [];
            for (let i = 0, n = e.length; i < n; i++) t[i] = a(i);
            return t;
          }
          const l = Math.round(n * t.typicalHalfwidthCharacterWidth),
            c = 3 === o ? 2 : 2 === o ? 1 : 0,
            d = Math.round(i * c),
            h = Math.ceil(t.spaceWidth * d),
            u = document.createElement("div");
          p.V.applyFontInfoSlow(u, t);
          const g = (0, Ze.l$)(1e4),
            f = [],
            m = [],
            v = [],
            _ = [],
            b = [];
          for (let n = 0; n < e.length; n++) {
            const r = xi.gk.applyInjectedText(e[n], s[n]);
            let a = 0,
              c = 0,
              d = l;
            if (0 !== o) if (((a = Te.LC(r)), -1 === a)) a = 0;else {
              for (let e = 0; e < a; e++) {
                c += 9 === r.charCodeAt(e) ? i - (c % i) : 1;
              }
              const e = Math.ceil(t.spaceWidth * c);
              e + t.typicalFullwidthCharacterWidth > l ? ((a = 0), (c = 0)) : (d = l - e);
            }
            const u = r.substr(a),
              p = Xn(u, c, i, d, g, h);
            ((f[n] = a), (m[n] = c), (v[n] = u), (_[n] = p[0]), (b[n] = p[1]));
          }
          const w = g.build(),
            y = null !== (r = null == Yn ? void 0 : Yn.createHTML(w)) && void 0 !== r ? r : w;
          ((u.innerHTML = y), (u.style.position = "absolute"), (u.style.top = "10000"), (u.style.wordWrap = "break-word"), document.body.appendChild(u));
          let C = document.createRange();
          const x = Array.prototype.slice.call(u.children, 0);
          let S = [];
          for (let t = 0; t < e.length; t++) {
            const e = Jn(C, x[t], v[t], _[t]);
            if (null === e) {
              S[t] = a(t);
              continue;
            }
            const i = f[t],
              n = m[t] + d,
              o = b[t],
              r = [];
            for (let t = 0, i = e.length; t < i; t++) r[t] = o[e[t]];
            if (0 !== i) for (let t = 0, n = e.length; t < n; t++) e[t] += i;
            let l, c;
            const h = s[t];
            (h ? ((l = h.map(e => e.options)), (c = h.map(e => e.column - 1))) : ((l = null), (c = null)), (S[t] = new Mt.le(e, r, n, c, l)));
          }
          return (document.body.removeChild(u), S);
        })(o, e, t, i, n, s)
      };
    }
  }
  function Xn(e, t, i, n, o, s) {
    if (0 !== s) {
      let e = String(s);
      (o.appendASCIIString('<div style="text-indent: -'), o.appendASCIIString(e), o.appendASCIIString("px; padding-left: "), o.appendASCIIString(e), o.appendASCIIString("px; box-sizing: border-box; width:"));
    } else o.appendASCIIString('<div style="width:');
    (o.appendASCIIString(String(n)), o.appendASCIIString('px;">'));
    const r = e.length;
    let a = t,
      l = 0,
      c = [],
      d = [],
      h = 0 < r ? e.charCodeAt(0) : 0;
    o.appendASCIIString("<span>");
    for (let t = 0; t < r; t++) {
      (0 !== t && t % 16384 == 0 && o.appendASCIIString("</span><span>"), (c[t] = l), (d[t] = a));
      const n = h;
      h = t + 1 < r ? e.charCodeAt(t + 1) : 0;
      let s = 1,
        u = 1;
      switch (n) {
        case 9:
          ((s = i - (a % i)), (u = s));
          for (let e = 1; e <= s; e++) e < s ? o.write1(160) : o.appendASCII(32);
          break;
        case 32:
          32 === h ? o.write1(160) : o.appendASCII(32);
          break;
        case 60:
          o.appendASCIIString("&lt;");
          break;
        case 62:
          o.appendASCIIString("&gt;");
          break;
        case 38:
          o.appendASCIIString("&amp;");
          break;
        case 0:
          o.appendASCIIString("&#00;");
          break;
        case 65279:
        case 8232:
        case 8233:
        case 133:
          o.write1(65533);
          break;
        default:
          (Te.K7(n) && u++, n < 32 ? o.write1(9216 + n) : o.write1(n));
      }
      ((l += s), (a += u));
    }
    return (o.appendASCIIString("</span>"), (c[e.length] = l), (d[e.length] = a), o.appendASCIIString("</div>"), [c, d]);
  }
  function Jn(e, t, i, n) {
    if (i.length <= 1) return null;
    const o = Array.prototype.slice.call(t.children, 0),
      s = [];
    try {
      eo(e, o, n, 0, null, i.length - 1, null, s);
    } catch (e) {
      return (console.log(e), null);
    }
    return 0 === s.length ? null : (s.push(i.length), s);
  }
  function eo(e, t, i, n, o, s, r, a) {
    if (n === s) return;
    if (((o = o || to(e, t, i[n], i[n + 1])), (r = r || to(e, t, i[s], i[s + 1])), Math.abs(o[0].top - r[0].top) <= 0.1)) return;
    if (n + 1 === s) return void a.push(s);
    const l = (n + (s - n) / 2) | 0,
      c = to(e, t, i[l], i[l + 1]);
    (eo(e, t, i, n, o, l, c, a), eo(e, t, i, l, c, s, r, a));
  }
  function to(e, t, i, n) {
    return (e.setStart(t[(i / 16384) | 0].firstChild, i % 16384), e.setEnd(t[(n / 16384) | 0].firstChild, n % 16384), e.getClientRects());
  }
  var io = i(5795),
    no = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    oo = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let so = 0;
  class ro {
    constructor(e, t, i, n, o) {
      ((this.model = e), (this.viewModel = t), (this.view = i), (this.hasRealView = n), (this.listenersToRemove = o));
    }
    dispose() {
      ((0, u.B9)(this.listenersToRemove), this.model.onBeforeDetached(), this.hasRealView && this.view.dispose(), this.viewModel.dispose());
    }
  }
  let ao = class e extends u.JT {
    constructor(e, t, i, n, s, r, a, l, c, u) {
      (super(), (this._onDidDispose = this._register(new h.Q5())), (this.onDidDispose = this._onDidDispose.event), (this._onDidChangeModelContent = this._register(new h.Q5())), (this.onDidChangeModelContent = this._onDidChangeModelContent.event), (this._onDidChangeModelLanguage = this._register(new h.Q5())), (this.onDidChangeModelLanguage = this._onDidChangeModelLanguage.event), (this._onDidChangeModelLanguageConfiguration = this._register(new h.Q5())), (this.onDidChangeModelLanguageConfiguration = this._onDidChangeModelLanguageConfiguration.event), (this._onDidChangeModelOptions = this._register(new h.Q5())), (this.onDidChangeModelOptions = this._onDidChangeModelOptions.event), (this._onDidChangeModelDecorations = this._register(new h.Q5())), (this.onDidChangeModelDecorations = this._onDidChangeModelDecorations.event), (this._onDidChangeConfiguration = this._register(new h.Q5())), (this.onDidChangeConfiguration = this._onDidChangeConfiguration.event), (this._onDidChangeModel = this._register(new h.Q5())), (this.onDidChangeModel = this._onDidChangeModel.event), (this._onDidChangeCursorPosition = this._register(new h.Q5())), (this.onDidChangeCursorPosition = this._onDidChangeCursorPosition.event), (this._onDidChangeCursorSelection = this._register(new h.Q5())), (this.onDidChangeCursorSelection = this._onDidChangeCursorSelection.event), (this._onDidAttemptReadOnlyEdit = this._register(new h.Q5())), (this.onDidAttemptReadOnlyEdit = this._onDidAttemptReadOnlyEdit.event), (this._onDidLayoutChange = this._register(new h.Q5())), (this.onDidLayoutChange = this._onDidLayoutChange.event), (this._editorTextFocus = this._register(new lo())), (this.onDidFocusEditorText = this._editorTextFocus.onDidChangeToTrue), (this.onDidBlurEditorText = this._editorTextFocus.onDidChangeToFalse), (this._editorWidgetFocus = this._register(new lo())), (this.onDidFocusEditorWidget = this._editorWidgetFocus.onDidChangeToTrue), (this.onDidBlurEditorWidget = this._editorWidgetFocus.onDidChangeToFalse), (this._onWillType = this._register(new h.Q5())), (this.onWillType = this._onWillType.event), (this._onDidType = this._register(new h.Q5())), (this.onDidType = this._onDidType.event), (this._onDidCompositionStart = this._register(new h.Q5())), (this.onDidCompositionStart = this._onDidCompositionStart.event), (this._onDidCompositionEnd = this._register(new h.Q5())), (this.onDidCompositionEnd = this._onDidCompositionEnd.event), (this._onDidPaste = this._register(new h.Q5())), (this.onDidPaste = this._onDidPaste.event), (this._onMouseUp = this._register(new h.Q5())), (this.onMouseUp = this._onMouseUp.event), (this._onMouseDown = this._register(new h.Q5())), (this.onMouseDown = this._onMouseDown.event), (this._onMouseDrag = this._register(new h.Q5())), (this.onMouseDrag = this._onMouseDrag.event), (this._onMouseDrop = this._register(new h.Q5())), (this.onMouseDrop = this._onMouseDrop.event), (this._onMouseDropCanceled = this._register(new h.Q5())), (this.onMouseDropCanceled = this._onMouseDropCanceled.event), (this._onContextMenu = this._register(new h.Q5())), (this.onContextMenu = this._onContextMenu.event), (this._onMouseMove = this._register(new h.Q5())), (this.onMouseMove = this._onMouseMove.event), (this._onMouseLeave = this._register(new h.Q5())), (this.onMouseLeave = this._onMouseLeave.event), (this._onMouseWheel = this._register(new h.Q5())), (this.onMouseWheel = this._onMouseWheel.event), (this._onKeyUp = this._register(new h.Q5())), (this.onKeyUp = this._onKeyUp.event), (this._onKeyDown = this._register(new h.Q5())), (this.onKeyDown = this._onKeyDown.event), (this._onDidContentSizeChange = this._register(new h.Q5())), (this.onDidContentSizeChange = this._onDidContentSizeChange.event), (this._onDidScrollChange = this._register(new h.Q5())), (this.onDidScrollChange = this._onDidScrollChange.event), (this._onDidChangeViewZones = this._register(new h.Q5())), (this.onDidChangeViewZones = this._onDidChangeViewZones.event), (this._onDidChangeHiddenAreas = this._register(new h.Q5())), (this.onDidChangeHiddenAreas = this._onDidChangeHiddenAreas.event));
      const g = Object.assign({}, t);
      let p;
      ((this._domElement = e), (this._overflowWidgetsDomNode = g.overflowWidgetsDomNode), delete g.overflowWidgetsDomNode, (this._id = ++so), (this._decorationTypeKeysToIds = {}), (this._decorationTypeSubtypes = {}), (this.isSimpleWidget = i.isSimpleWidget || !1), (this._telemetryData = i.telemetryData), (this._configuration = this._register(this._createConfiguration(g, u))), this._register(this._configuration.onDidChange(e => {
        this._onDidChangeConfiguration.fire(e);
        const t = this._configuration.options;
        if (e.hasChanged(129)) {
          const e = t.get(129);
          this._onDidLayoutChange.fire(e);
        }
      })), (this._contextKeyService = this._register(a.createScoped(this._domElement))), (this._notificationService = c), (this._codeEditorService = s), (this._commandService = r), (this._themeService = l), this._register(new co(this, this._contextKeyService)), this._register(new ho(this, this._contextKeyService)), (this._instantiationService = n.createChild(new Pn.y([An.i6, this._contextKeyService]))), (this._modelData = null), (this._contributions = {}), (this._actions = {}), (this._focusTracker = new uo(e)), this._register(this._focusTracker.onChange(() => {
        this._editorWidgetFocus.setValue(this._focusTracker.hasFocus());
      })), (this._contentWidgets = {}), (this._overlayWidgets = {}), (p = Array.isArray(i.contributions) ? i.contributions : o.Uc.getEditorContributions()));
      for (const e of p) if (this._contributions[e.id]) (0, d.dL)(new Error(`Cannot have two contributions with the same id ${e.id}`));else try {
        const t = this._instantiationService.createInstance(e.ctor, this);
        this._contributions[e.id] = t;
      } catch (e) {
        (0, d.dL)(e);
      }
      (o.Uc.getEditorActions().forEach(e => {
        if (this._actions[e.id]) return void (0, d.dL)(new Error(`Cannot have two actions with the same id ${e.id}`));
        const t = new en.p(e.id, e.label, e.alias, (0, wt.f6)(e.precondition), () => this._instantiationService.invokeFunction(t => Promise.resolve(e.runEditorCommand(t, this, null))), this._contextKeyService);
        this._actions[t.id] = t;
      }), this._codeEditorService.addCodeEditor(this));
    }
    _createConfiguration(e, t) {
      return new p.V(this.isSimpleWidget, e, this._domElement, t);
    }
    getId() {
      return this.getEditorType() + ":" + this._id;
    }
    getEditorType() {
      return tn.g.ICodeEditor;
    }
    dispose() {
      (this._codeEditorService.removeCodeEditor(this), this._focusTracker.dispose());
      const e = Object.keys(this._contributions);
      for (let t = 0, i = e.length; t < i; t++) {
        const i = e[t];
        this._contributions[i].dispose();
      }
      ((this._contributions = {}), (this._actions = {}), (this._contentWidgets = {}), (this._overlayWidgets = {}), this._removeDecorationTypes(), this._postDetachModelCleanup(this._detachModel()), this._onDidDispose.fire(), super.dispose());
    }
    invokeWithinContext(e) {
      return this._instantiationService.invokeFunction(e);
    }
    updateOptions(e) {
      this._configuration.updateOptions(e);
    }
    getOptions() {
      return this._configuration.options;
    }
    getOption(e) {
      return this._configuration.options.get(e);
    }
    getRawOptions() {
      return this._configuration.getRawOptions();
    }
    getOverflowWidgetsDomNode() {
      return this._overflowWidgetsDomNode;
    }
    getConfiguredWordAtPosition(e) {
      return this._modelData ? io.w.getWordAtPosition(this._modelData.model, this._configuration.options.get(115), e) : null;
    }
    getValue(e = null) {
      if (!this._modelData) return "";
      const t = !(!e || !e.preserveBOM);
      let i = 0;
      return (e && e.lineEnding && "\n" === e.lineEnding ? (i = 1) : e && e.lineEnding && "\r\n" === e.lineEnding && (i = 2), this._modelData.model.getValue(i, t));
    }
    setValue(e) {
      this._modelData && this._modelData.model.setValue(e);
    }
    getModel() {
      return this._modelData ? this._modelData.model : null;
    }
    setModel(e = null) {
      const t = e;
      if (null === this._modelData && null === t) return;
      if (this._modelData && this._modelData.model === t) return;
      const i = this.hasTextFocus(),
        n = this._detachModel();
      (this._attachModel(t), i && this.hasModel() && this.focus());
      const o = {
        oldModelUrl: n ? n.uri : null,
        newModelUrl: t ? t.uri : null
      };
      (this._removeDecorationTypes(), this._onDidChangeModel.fire(o), this._postDetachModelCleanup(n));
    }
    _removeDecorationTypes() {
      if (((this._decorationTypeKeysToIds = {}), this._decorationTypeSubtypes)) {
        for (let e in this._decorationTypeSubtypes) {
          const t = this._decorationTypeSubtypes[e];
          for (let i in t) this._removeDecorationType(e + "-" + i);
        }
        this._decorationTypeSubtypes = {};
      }
    }
    getVisibleRanges() {
      return this._modelData ? this._modelData.viewModel.getVisibleRanges() : [];
    }
    getVisibleRangesPlusViewportAboveBelow() {
      return this._modelData ? this._modelData.viewModel.getVisibleRangesPlusViewportAboveBelow() : [];
    }
    getWhitespaces() {
      return this._modelData ? this._modelData.viewModel.viewLayout.getWhitespaces() : [];
    }
    static _getVerticalOffsetForPosition(e, t, i) {
      const n = e.model.validatePosition({
          lineNumber: t,
          column: i
        }),
        o = e.viewModel.coordinatesConverter.convertModelPositionToViewPosition(n);
      return e.viewModel.viewLayout.getVerticalOffsetForLineNumber(o.lineNumber);
    }
    getTopForLineNumber(t) {
      return this._modelData ? e._getVerticalOffsetForPosition(this._modelData, t, 1) : -1;
    }
    getTopForPosition(t, i) {
      return this._modelData ? e._getVerticalOffsetForPosition(this._modelData, t, i) : -1;
    }
    setHiddenAreas(e) {
      this._modelData && this._modelData.viewModel.setHiddenAreas(e.map(e => re.e.lift(e)));
    }
    getVisibleColumnFromPosition(e) {
      if (!this._modelData) return e.column;
      const t = this._modelData.model.validatePosition(e),
        i = this._modelData.model.getOptions().tabSize;
      return (ae.io.visibleColumnFromColumn(this._modelData.model.getLineContent(t.lineNumber), t.column, i) + 1);
    }
    getPosition() {
      return this._modelData ? this._modelData.viewModel.getPosition() : null;
    }
    setPosition(e) {
      if (this._modelData) {
        if (!se.L.isIPosition(e)) throw new Error("Invalid arguments");
        this._modelData.viewModel.setSelections("api", [{
          selectionStartLineNumber: e.lineNumber,
          selectionStartColumn: e.column,
          positionLineNumber: e.lineNumber,
          positionColumn: e.column
        }]);
      }
    }
    _sendRevealRange(e, t, i, n) {
      if (!this._modelData) return;
      if (!re.e.isIRange(e)) throw new Error("Invalid arguments");
      const o = this._modelData.model.validateRange(e),
        s = this._modelData.viewModel.coordinatesConverter.convertModelRangeToViewRange(o);
      this._modelData.viewModel.revealRange("api", i, s, t, n);
    }
    revealLine(e, t = 0) {
      this._revealLine(e, 0, t);
    }
    revealLineInCenter(e, t = 0) {
      this._revealLine(e, 1, t);
    }
    revealLineInCenterIfOutsideViewport(e, t = 0) {
      this._revealLine(e, 2, t);
    }
    revealLineNearTop(e, t = 0) {
      this._revealLine(e, 5, t);
    }
    _revealLine(e, t, i) {
      if ("number" != typeof e) throw new Error("Invalid arguments");
      this._sendRevealRange(new re.e(e, 1, e, 1), t, !1, i);
    }
    revealPosition(e, t = 0) {
      this._revealPosition(e, 0, !0, t);
    }
    revealPositionInCenter(e, t = 0) {
      this._revealPosition(e, 1, !0, t);
    }
    revealPositionInCenterIfOutsideViewport(e, t = 0) {
      this._revealPosition(e, 2, !0, t);
    }
    revealPositionNearTop(e, t = 0) {
      this._revealPosition(e, 5, !0, t);
    }
    _revealPosition(e, t, i, n) {
      if (!se.L.isIPosition(e)) throw new Error("Invalid arguments");
      this._sendRevealRange(new re.e(e.lineNumber, e.column, e.lineNumber, e.column), t, i, n);
    }
    getSelection() {
      return this._modelData ? this._modelData.viewModel.getSelection() : null;
    }
    getSelections() {
      return this._modelData ? this._modelData.viewModel.getSelections() : null;
    }
    setSelection(e) {
      const t = v.Y.isISelection(e),
        i = re.e.isIRange(e);
      if (!t && !i) throw new Error("Invalid arguments");
      if (t) this._setSelectionImpl(e);else if (i) {
        const t = {
          selectionStartLineNumber: e.startLineNumber,
          selectionStartColumn: e.startColumn,
          positionLineNumber: e.endLineNumber,
          positionColumn: e.endColumn
        };
        this._setSelectionImpl(t);
      }
    }
    _setSelectionImpl(e) {
      if (!this._modelData) return;
      const t = new v.Y(e.selectionStartLineNumber, e.selectionStartColumn, e.positionLineNumber, e.positionColumn);
      this._modelData.viewModel.setSelections("api", [t]);
    }
    revealLines(e, t, i = 0) {
      this._revealLines(e, t, 0, i);
    }
    revealLinesInCenter(e, t, i = 0) {
      this._revealLines(e, t, 1, i);
    }
    revealLinesInCenterIfOutsideViewport(e, t, i = 0) {
      this._revealLines(e, t, 2, i);
    }
    revealLinesNearTop(e, t, i = 0) {
      this._revealLines(e, t, 5, i);
    }
    _revealLines(e, t, i, n) {
      if ("number" != typeof e || "number" != typeof t) throw new Error("Invalid arguments");
      this._sendRevealRange(new re.e(e, 1, t, 1), i, !1, n);
    }
    revealRange(e, t = 0, i = !1, n = !0) {
      this._revealRange(e, i ? 1 : 0, n, t);
    }
    revealRangeInCenter(e, t = 0) {
      this._revealRange(e, 1, !0, t);
    }
    revealRangeInCenterIfOutsideViewport(e, t = 0) {
      this._revealRange(e, 2, !0, t);
    }
    revealRangeNearTop(e, t = 0) {
      this._revealRange(e, 5, !0, t);
    }
    revealRangeNearTopIfOutsideViewport(e, t = 0) {
      this._revealRange(e, 6, !0, t);
    }
    revealRangeAtTop(e, t = 0) {
      this._revealRange(e, 3, !0, t);
    }
    _revealRange(e, t, i, n) {
      if (!re.e.isIRange(e)) throw new Error("Invalid arguments");
      this._sendRevealRange(re.e.lift(e), t, i, n);
    }
    setSelections(e, t = "api", i = 0) {
      if (this._modelData) {
        if (!e || 0 === e.length) throw new Error("Invalid arguments");
        for (let t = 0, i = e.length; t < i; t++) if (!v.Y.isISelection(e[t])) throw new Error("Invalid arguments");
        this._modelData.viewModel.setSelections(t, e, i);
      }
    }
    getContentWidth() {
      return this._modelData ? this._modelData.viewModel.viewLayout.getContentWidth() : -1;
    }
    getScrollWidth() {
      return this._modelData ? this._modelData.viewModel.viewLayout.getScrollWidth() : -1;
    }
    getScrollLeft() {
      return this._modelData ? this._modelData.viewModel.viewLayout.getCurrentScrollLeft() : -1;
    }
    getContentHeight() {
      return this._modelData ? this._modelData.viewModel.viewLayout.getContentHeight() : -1;
    }
    getScrollHeight() {
      return this._modelData ? this._modelData.viewModel.viewLayout.getScrollHeight() : -1;
    }
    getScrollTop() {
      return this._modelData ? this._modelData.viewModel.viewLayout.getCurrentScrollTop() : -1;
    }
    setScrollLeft(e, t = 1) {
      if (this._modelData) {
        if ("number" != typeof e) throw new Error("Invalid arguments");
        this._modelData.viewModel.setScrollPosition({
          scrollLeft: e
        }, t);
      }
    }
    setScrollTop(e, t = 1) {
      if (this._modelData) {
        if ("number" != typeof e) throw new Error("Invalid arguments");
        this._modelData.viewModel.setScrollPosition({
          scrollTop: e
        }, t);
      }
    }
    setScrollPosition(e, t = 1) {
      this._modelData && this._modelData.viewModel.setScrollPosition(e, t);
    }
    saveViewState() {
      if (!this._modelData) return null;
      const e = {},
        t = Object.keys(this._contributions);
      for (const i of t) {
        const t = this._contributions[i];
        "function" == typeof t.saveViewState && (e[i] = t.saveViewState());
      }
      return {
        cursorState: this._modelData.viewModel.saveCursorState(),
        viewState: this._modelData.viewModel.saveState(),
        contributionsState: e
      };
    }
    restoreViewState(e) {
      if (!this._modelData || !this._modelData.hasRealView) return;
      const t = e;
      if (t && t.cursorState && t.viewState) {
        const e = t.cursorState;
        Array.isArray(e) ? this._modelData.viewModel.restoreCursorState(e) : this._modelData.viewModel.restoreCursorState([e]);
        const i = t.contributionsState || {},
          n = Object.keys(this._contributions);
        for (let e = 0, t = n.length; e < t; e++) {
          const t = n[e],
            o = this._contributions[t];
          "function" == typeof o.restoreViewState && o.restoreViewState(i[t]);
        }
        const o = this._modelData.viewModel.reduceRestoreState(t.viewState);
        this._modelData.view.restoreState(o);
      }
    }
    getContribution(e) {
      return this._contributions[e] || null;
    }
    getActions() {
      const e = [],
        t = Object.keys(this._actions);
      for (let i = 0, n = t.length; i < n; i++) {
        const n = t[i];
        e.push(this._actions[n]);
      }
      return e;
    }
    getSupportedActions() {
      let e = this.getActions();
      return ((e = e.filter(e => e.isSupported())), e);
    }
    getAction(e) {
      return this._actions[e] || null;
    }
    trigger(e, t, i) {
      switch (((i = i || {}), t)) {
        case "compositionStart":
          return void this._startComposition();
        case "compositionEnd":
          return void this._endComposition(e);
        case "type":
          {
            const t = i;
            return void this._type(e, t.text || "");
          }
        case "replacePreviousChar":
          {
            const t = i;
            return void this._compositionType(e, t.text || "", t.replaceCharCnt || 0, 0, 0);
          }
        case "compositionType":
          {
            const t = i;
            return void this._compositionType(e, t.text || "", t.replacePrevCharCnt || 0, t.replaceNextCharCnt || 0, t.positionDelta || 0);
          }
        case "paste":
          {
            const t = i;
            return void this._paste(e, t.text || "", t.pasteOnNewLine || !1, t.multicursorText || null, t.mode || null);
          }
        case "cut":
          return void this._cut(e);
      }
      const n = this.getAction(t);
      n ? Promise.resolve(n.run()).then(void 0, d.dL) : this._modelData && (this._triggerEditorCommand(e, t, i) || this._triggerCommand(t, i));
    }
    _triggerCommand(e, t) {
      this._commandService.executeCommand(e, t);
    }
    _startComposition() {
      this._modelData && (this._modelData.viewModel.startComposition(), this._onDidCompositionStart.fire());
    }
    _endComposition(e) {
      this._modelData && (this._modelData.viewModel.endComposition(e), this._onDidCompositionEnd.fire());
    }
    _type(e, t) {
      this._modelData && 0 !== t.length && ("keyboard" === e && this._onWillType.fire(t), this._modelData.viewModel.type(t, e), "keyboard" === e && this._onDidType.fire(t));
    }
    _compositionType(e, t, i, n, o) {
      this._modelData && this._modelData.viewModel.compositionType(t, i, n, o, e);
    }
    _paste(e, t, i, n, o) {
      if (!this._modelData || 0 === t.length) return;
      const s = this._modelData.viewModel.getSelection().getStartPosition();
      this._modelData.viewModel.paste(t, i, n, e);
      const r = this._modelData.viewModel.getSelection().getStartPosition();
      "keyboard" === e && this._onDidPaste.fire({
        range: new re.e(s.lineNumber, s.column, r.lineNumber, r.column),
        languageId: o
      });
    }
    _cut(e) {
      this._modelData && this._modelData.viewModel.cut(e);
    }
    _triggerEditorCommand(e, t, i) {
      const n = o.Uc.getEditorCommand(t);
      return (!!n && (((i = i || {}).source = e), this._instantiationService.invokeFunction(e => {
        Promise.resolve(n.runEditorCommand(e, this, i)).then(void 0, d.dL);
      }), !0));
    }
    _getViewModel() {
      return this._modelData ? this._modelData.viewModel : null;
    }
    pushUndoStop() {
      return (!!this._modelData && !this._configuration.options.get(80) && (this._modelData.model.pushStackElement(), !0));
    }
    popUndoStop() {
      return (!!this._modelData && !this._configuration.options.get(80) && (this._modelData.model.popStackElement(), !0));
    }
    executeEdits(e, t, i) {
      if (!this._modelData) return !1;
      if (this._configuration.options.get(80)) return !1;
      let n;
      return ((n = i ? (Array.isArray(i) ? () => i : i) : () => null), this._modelData.viewModel.executeEdits(e, t, n), !0);
    }
    executeCommand(e, t) {
      this._modelData && this._modelData.viewModel.executeCommand(t, e);
    }
    executeCommands(e, t) {
      this._modelData && this._modelData.viewModel.executeCommands(t, e);
    }
    changeDecorations(e) {
      return this._modelData ? this._modelData.model.changeDecorations(e, this._id) : null;
    }
    getLineDecorations(e) {
      return this._modelData ? this._modelData.model.getLineDecorations(e, this._id, (0, K.$J)(this._configuration.options)) : null;
    }
    deltaDecorations(e, t) {
      return this._modelData ? 0 === e.length && 0 === t.length ? e : this._modelData.model.deltaDecorations(e, t, this._id) : [];
    }
    removeDecorations(e) {
      const t = this._decorationTypeKeysToIds[e];
      (t && this.deltaDecorations(t, []), this._decorationTypeKeysToIds.hasOwnProperty(e) && delete this._decorationTypeKeysToIds[e], this._decorationTypeSubtypes.hasOwnProperty(e) && delete this._decorationTypeSubtypes[e]);
    }
    getLayoutInfo() {
      return this._configuration.options.get(129);
    }
    createOverviewRuler(e) {
      return this._modelData && this._modelData.hasRealView ? this._modelData.view.createOverviewRuler(e) : null;
    }
    getContainerDomNode() {
      return this._domElement;
    }
    getDomNode() {
      return this._modelData && this._modelData.hasRealView ? this._modelData.view.domNode.domNode : null;
    }
    delegateVerticalScrollbarMouseDown(e) {
      this._modelData && this._modelData.hasRealView && this._modelData.view.delegateVerticalScrollbarMouseDown(e);
    }
    layout(e) {
      (this._configuration.observeReferenceElement(e), this.render());
    }
    focus() {
      this._modelData && this._modelData.hasRealView && this._modelData.view.focus();
    }
    hasTextFocus() {
      return (!(!this._modelData || !this._modelData.hasRealView) && this._modelData.view.isFocused());
    }
    hasWidgetFocus() {
      return this._focusTracker && this._focusTracker.hasFocus();
    }
    addContentWidget(e) {
      const t = {
        widget: e,
        position: e.getPosition()
      };
      (this._contentWidgets.hasOwnProperty(e.getId()) && console.warn("Overwriting a content widget with the same id."), (this._contentWidgets[e.getId()] = t), this._modelData && this._modelData.hasRealView && this._modelData.view.addContentWidget(t));
    }
    layoutContentWidget(e) {
      const t = e.getId();
      if (this._contentWidgets.hasOwnProperty(t)) {
        const i = this._contentWidgets[t];
        ((i.position = e.getPosition()), this._modelData && this._modelData.hasRealView && this._modelData.view.layoutContentWidget(i));
      }
    }
    removeContentWidget(e) {
      const t = e.getId();
      if (this._contentWidgets.hasOwnProperty(t)) {
        const e = this._contentWidgets[t];
        (delete this._contentWidgets[t], this._modelData && this._modelData.hasRealView && this._modelData.view.removeContentWidget(e));
      }
    }
    addOverlayWidget(e) {
      const t = {
        widget: e,
        position: e.getPosition()
      };
      (this._overlayWidgets.hasOwnProperty(e.getId()) && console.warn("Overwriting an overlay widget with the same id."), (this._overlayWidgets[e.getId()] = t), this._modelData && this._modelData.hasRealView && this._modelData.view.addOverlayWidget(t));
    }
    layoutOverlayWidget(e) {
      const t = e.getId();
      if (this._overlayWidgets.hasOwnProperty(t)) {
        const i = this._overlayWidgets[t];
        ((i.position = e.getPosition()), this._modelData && this._modelData.hasRealView && this._modelData.view.layoutOverlayWidget(i));
      }
    }
    removeOverlayWidget(e) {
      const t = e.getId();
      if (this._overlayWidgets.hasOwnProperty(t)) {
        const e = this._overlayWidgets[t];
        (delete this._overlayWidgets[t], this._modelData && this._modelData.hasRealView && this._modelData.view.removeOverlayWidget(e));
      }
    }
    changeViewZones(e) {
      this._modelData && this._modelData.hasRealView && this._modelData.view.change(e);
    }
    getTargetAtClientPoint(e, t) {
      return this._modelData && this._modelData.hasRealView ? this._modelData.view.getTargetAtClientPoint(e, t) : null;
    }
    getScrolledVisiblePosition(t) {
      if (!this._modelData || !this._modelData.hasRealView) return null;
      const i = this._modelData.model.validatePosition(t),
        n = this._configuration.options,
        o = n.get(129);
      return {
        top: e._getVerticalOffsetForPosition(this._modelData, i.lineNumber, i.column) - this.getScrollTop(),
        left: this._modelData.view.getOffsetForColumn(i.lineNumber, i.column) + o.glyphMarginWidth + o.lineNumbersWidth + o.decorationsWidth - this.getScrollLeft(),
        height: n.get(58)
      };
    }
    getOffsetForColumn(e, t) {
      return this._modelData && this._modelData.hasRealView ? this._modelData.view.getOffsetForColumn(e, t) : -1;
    }
    render(e = !1) {
      this._modelData && this._modelData.hasRealView && this._modelData.view.render(!0, e);
    }
    setAriaOptions(e) {
      this._modelData && this._modelData.hasRealView && this._modelData.view.setAriaOptions(e);
    }
    applyFontInfo(e) {
      p.V.applyFontInfoSlow(e, this._configuration.options.get(43));
    }
    _attachModel(e) {
      if (!e) return void (this._modelData = null);
      const t = [];
      (this._domElement.setAttribute("data-mode-id", e.getLanguageId()), this._configuration.setIsDominatedByLongLines(e.isDominatedByLongLines()), this._configuration.setMaxLineNumber(e.getLineCount()), e.onBeforeAttached());
      const i = new En(this._id, this._configuration, e, Qn.create(), zn.create(this._configuration.options), e => c.jL(e));
      (t.push(e.onDidChangeDecorations(e => this._onDidChangeModelDecorations.fire(e))), t.push(e.onDidChangeLanguage(t => {
        (this._domElement.setAttribute("data-mode-id", e.getLanguageId()), this._onDidChangeModelLanguage.fire(t));
      })), t.push(e.onDidChangeLanguageConfiguration(e => this._onDidChangeModelLanguageConfiguration.fire(e))), t.push(e.onDidChangeContent(e => this._onDidChangeModelContent.fire(e))), t.push(e.onDidChangeOptions(e => this._onDidChangeModelOptions.fire(e))), t.push(e.onWillDispose(() => this.setModel(null))), t.push(i.onEvent(e => {
        switch (e.kind) {
          case 0:
            this._onDidContentSizeChange.fire(e);
            break;
          case 1:
            this._editorTextFocus.setValue(e.hasFocus);
            break;
          case 2:
            this._onDidScrollChange.fire(e);
            break;
          case 3:
            this._onDidChangeViewZones.fire();
            break;
          case 4:
            this._onDidChangeHiddenAreas.fire();
            break;
          case 5:
            this._onDidAttemptReadOnlyEdit.fire();
            break;
          case 6:
            {
              e.reachedMaxCursorCount && this._notificationService.warn(l.N("cursors.maximum", "The number of cursors has been limited to {0}.", Xi.MAX_CURSOR_COUNT));
              const t = [];
              for (let i = 0, n = e.selections.length; i < n; i++) t[i] = e.selections[i].getPosition();
              const i = {
                position: t[0],
                secondaryPositions: t.slice(1),
                reason: e.reason,
                source: e.source
              };
              this._onDidChangeCursorPosition.fire(i);
              const n = {
                selection: e.selections[0],
                secondarySelections: e.selections.slice(1),
                modelVersionId: e.modelVersionId,
                oldSelections: e.oldSelections,
                oldModelVersionId: e.oldModelVersionId,
                source: e.source,
                reason: e.reason
              };
              this._onDidChangeCursorSelection.fire(n);
              break;
            }
        }
      })));
      const [n, o] = this._createView(i);
      if (o) {
        this._domElement.appendChild(n.domNode.domNode);
        let t = Object.keys(this._contentWidgets);
        for (let e = 0, i = t.length; e < i; e++) {
          const i = t[e];
          n.addContentWidget(this._contentWidgets[i]);
        }
        t = Object.keys(this._overlayWidgets);
        for (let e = 0, i = t.length; e < i; e++) {
          const i = t[e];
          n.addOverlayWidget(this._overlayWidgets[i]);
        }
        (n.render(!1, !0), n.domNode.domNode.setAttribute("data-uri", e.uri.toString()));
      }
      this._modelData = new ro(e, i, n, o, t);
    }
    _createView(e) {
      let t;
      t = this.isSimpleWidget ? {
        paste: (e, t, i, n) => {
          this._paste("keyboard", e, t, i, n);
        },
        type: e => {
          this._type("keyboard", e);
        },
        compositionType: (e, t, i, n) => {
          this._compositionType("keyboard", e, t, i, n);
        },
        startComposition: () => {
          this._startComposition();
        },
        endComposition: () => {
          this._endComposition("keyboard");
        },
        cut: () => {
          this._cut("keyboard");
        }
      } : {
        paste: (e, t, i, n) => {
          const o = {
            text: e,
            pasteOnNewLine: t,
            multicursorText: i,
            mode: n
          };
          this._commandService.executeCommand("paste", o);
        },
        type: e => {
          const t = {
            text: e
          };
          this._commandService.executeCommand("type", t);
        },
        compositionType: (e, t, i, n) => {
          if (i || n) {
            const o = {
              text: e,
              replacePrevCharCnt: t,
              replaceNextCharCnt: i,
              positionDelta: n
            };
            this._commandService.executeCommand("compositionType", o);
          } else {
            const i = {
              text: e,
              replaceCharCnt: t
            };
            this._commandService.executeCommand("replacePreviousChar", i);
          }
        },
        startComposition: () => {
          this._commandService.executeCommand("compositionStart", {});
        },
        endComposition: () => {
          this._commandService.executeCommand("compositionEnd", {});
        },
        cut: () => {
          this._commandService.executeCommand("cut", {});
        }
      };
      const i = new $e(e.coordinatesConverter);
      ((i.onKeyDown = e => this._onKeyDown.fire(e)), (i.onKeyUp = e => this._onKeyUp.fire(e)), (i.onContextMenu = e => this._onContextMenu.fire(e)), (i.onMouseMove = e => this._onMouseMove.fire(e)), (i.onMouseLeave = e => this._onMouseLeave.fire(e)), (i.onMouseDown = e => this._onMouseDown.fire(e)), (i.onMouseUp = e => this._onMouseUp.fire(e)), (i.onMouseDrag = e => this._onMouseDrag.fire(e)), (i.onMouseDrop = e => this._onMouseDrop.fire(e)), (i.onMouseDropCanceled = e => this._onMouseDropCanceled.fire(e)), (i.onMouseWheel = e => this._onMouseWheel.fire(e)));
      return [new _i(t, this._configuration, this._themeService, e, i, this._overflowWidgetsDomNode), !0];
    }
    _postDetachModelCleanup(e) {
      e && e.removeAllDecorationsWithOwnerId(this._id);
    }
    _detachModel() {
      if (!this._modelData) return null;
      const e = this._modelData.model,
        t = this._modelData.hasRealView ? this._modelData.view.domNode.domNode : null;
      return (this._modelData.dispose(), (this._modelData = null), this._domElement.removeAttribute("data-mode-id"), t && this._domElement.contains(t) && this._domElement.removeChild(t), e);
    }
    _removeDecorationType(e) {
      this._codeEditorService.removeDecorationType(e);
    }
    hasModel() {
      return null !== this._modelData;
    }
  };
  ao = no([oo(3, On.TG), oo(4, f.$), oo(5, Mn.H), oo(6, An.i6), oo(7, Pe.XE), oo(8, Rn.lT), oo(9, Fn.F)], ao);
  class lo extends u.JT {
    constructor() {
      (super(), (this._onDidChangeToTrue = this._register(new h.Q5())), (this.onDidChangeToTrue = this._onDidChangeToTrue.event), (this._onDidChangeToFalse = this._register(new h.Q5())), (this.onDidChangeToFalse = this._onDidChangeToFalse.event), (this._value = 0));
    }
    setValue(e) {
      const t = e ? 2 : 1;
      this._value !== t && ((this._value = t), 2 === this._value ? this._onDidChangeToTrue.fire() : 1 === this._value && this._onDidChangeToFalse.fire());
    }
  }
  class co extends u.JT {
    constructor(e, t) {
      (super(), (this._editor = e), t.createKey("editorId", e.getId()), (this._editorSimpleInput = nn.u.editorSimpleInput.bindTo(t)), (this._editorFocus = nn.u.focus.bindTo(t)), (this._textInputFocus = nn.u.textInputFocus.bindTo(t)), (this._editorTextFocus = nn.u.editorTextFocus.bindTo(t)), (this._editorTabMovesFocus = nn.u.tabMovesFocus.bindTo(t)), (this._editorReadonly = nn.u.readOnly.bindTo(t)), (this._inDiffEditor = nn.u.inDiffEditor.bindTo(t)), (this._editorColumnSelection = nn.u.columnSelection.bindTo(t)), (this._hasMultipleSelections = nn.u.hasMultipleSelections.bindTo(t)), (this._hasNonEmptySelection = nn.u.hasNonEmptySelection.bindTo(t)), (this._canUndo = nn.u.canUndo.bindTo(t)), (this._canRedo = nn.u.canRedo.bindTo(t)), this._register(this._editor.onDidChangeConfiguration(() => this._updateFromConfig())), this._register(this._editor.onDidChangeCursorSelection(() => this._updateFromSelection())), this._register(this._editor.onDidFocusEditorWidget(() => this._updateFromFocus())), this._register(this._editor.onDidBlurEditorWidget(() => this._updateFromFocus())), this._register(this._editor.onDidFocusEditorText(() => this._updateFromFocus())), this._register(this._editor.onDidBlurEditorText(() => this._updateFromFocus())), this._register(this._editor.onDidChangeModel(() => this._updateFromModel())), this._register(this._editor.onDidChangeConfiguration(() => this._updateFromModel())), this._updateFromConfig(), this._updateFromSelection(), this._updateFromFocus(), this._updateFromModel(), this._editorSimpleInput.set(this._editor.isSimpleWidget));
    }
    _updateFromConfig() {
      const e = this._editor.getOptions();
      (this._editorTabMovesFocus.set(e.get(128)), this._editorReadonly.set(e.get(80)), this._inDiffEditor.set(e.get(53)), this._editorColumnSelection.set(e.get(18)));
    }
    _updateFromSelection() {
      const e = this._editor.getSelections();
      e ? (this._hasMultipleSelections.set(e.length > 1), this._hasNonEmptySelection.set(e.some(e => !e.isEmpty()))) : (this._hasMultipleSelections.reset(), this._hasNonEmptySelection.reset());
    }
    _updateFromFocus() {
      (this._editorFocus.set(this._editor.hasWidgetFocus() && !this._editor.isSimpleWidget), this._editorTextFocus.set(this._editor.hasTextFocus() && !this._editor.isSimpleWidget), this._textInputFocus.set(this._editor.hasTextFocus()));
    }
    _updateFromModel() {
      const e = this._editor.getModel();
      (this._canUndo.set(Boolean(e && e.canUndo())), this._canRedo.set(Boolean(e && e.canRedo())));
    }
  }
  class ho extends u.JT {
    constructor(e, t) {
      (super(), (this._editor = e), (this._contextKeyService = t), (this._langId = nn.u.languageId.bindTo(t)), (this._hasCompletionItemProvider = nn.u.hasCompletionItemProvider.bindTo(t)), (this._hasCodeActionsProvider = nn.u.hasCodeActionsProvider.bindTo(t)), (this._hasCodeLensProvider = nn.u.hasCodeLensProvider.bindTo(t)), (this._hasDefinitionProvider = nn.u.hasDefinitionProvider.bindTo(t)), (this._hasDeclarationProvider = nn.u.hasDeclarationProvider.bindTo(t)), (this._hasImplementationProvider = nn.u.hasImplementationProvider.bindTo(t)), (this._hasTypeDefinitionProvider = nn.u.hasTypeDefinitionProvider.bindTo(t)), (this._hasHoverProvider = nn.u.hasHoverProvider.bindTo(t)), (this._hasDocumentHighlightProvider = nn.u.hasDocumentHighlightProvider.bindTo(t)), (this._hasDocumentSymbolProvider = nn.u.hasDocumentSymbolProvider.bindTo(t)), (this._hasReferenceProvider = nn.u.hasReferenceProvider.bindTo(t)), (this._hasRenameProvider = nn.u.hasRenameProvider.bindTo(t)), (this._hasSignatureHelpProvider = nn.u.hasSignatureHelpProvider.bindTo(t)), (this._hasInlayHintsProvider = nn.u.hasInlayHintsProvider.bindTo(t)), (this._hasDocumentFormattingProvider = nn.u.hasDocumentFormattingProvider.bindTo(t)), (this._hasDocumentSelectionFormattingProvider = nn.u.hasDocumentSelectionFormattingProvider.bindTo(t)), (this._hasMultipleDocumentFormattingProvider = nn.u.hasMultipleDocumentFormattingProvider.bindTo(t)), (this._hasMultipleDocumentSelectionFormattingProvider = nn.u.hasMultipleDocumentSelectionFormattingProvider.bindTo(t)), (this._isInWalkThrough = nn.u.isInWalkThroughSnippet.bindTo(t)));
      const i = () => this._update();
      (this._register(e.onDidChangeModel(i)), this._register(e.onDidChangeModelLanguage(i)), this._register(Et.KZ.onDidChange(i)), this._register(Et.H9.onDidChange(i)), this._register(Et.He.onDidChange(i)), this._register(Et.Ct.onDidChange(i)), this._register(Et.RN.onDidChange(i)), this._register(Et.vI.onDidChange(i)), this._register(Et.tA.onDidChange(i)), this._register(Et.xp.onDidChange(i)), this._register(Et.vH.onDidChange(i)), this._register(Et.vJ.onDidChange(i)), this._register(Et.FL.onDidChange(i)), this._register(Et.G0.onDidChange(i)), this._register(Et.Az.onDidChange(i)), this._register(Et.vN.onDidChange(i)), this._register(Et.nD.onDidChange(i)), this._register(Et.mX.onDidChange(i)), i());
    }
    dispose() {
      super.dispose();
    }
    reset() {
      this._contextKeyService.bufferChangeEvents(() => {
        (this._langId.reset(), this._hasCompletionItemProvider.reset(), this._hasCodeActionsProvider.reset(), this._hasCodeLensProvider.reset(), this._hasDefinitionProvider.reset(), this._hasDeclarationProvider.reset(), this._hasImplementationProvider.reset(), this._hasTypeDefinitionProvider.reset(), this._hasHoverProvider.reset(), this._hasDocumentHighlightProvider.reset(), this._hasDocumentSymbolProvider.reset(), this._hasReferenceProvider.reset(), this._hasRenameProvider.reset(), this._hasDocumentFormattingProvider.reset(), this._hasDocumentSelectionFormattingProvider.reset(), this._hasSignatureHelpProvider.reset(), this._isInWalkThrough.reset());
      });
    }
    _update() {
      const e = this._editor.getModel();
      e ? this._contextKeyService.bufferChangeEvents(() => {
        (this._langId.set(e.getLanguageId()), this._hasCompletionItemProvider.set(Et.KZ.has(e)), this._hasCodeActionsProvider.set(Et.H9.has(e)), this._hasCodeLensProvider.set(Et.He.has(e)), this._hasDefinitionProvider.set(Et.Ct.has(e)), this._hasDeclarationProvider.set(Et.RN.has(e)), this._hasImplementationProvider.set(Et.vI.has(e)), this._hasTypeDefinitionProvider.set(Et.tA.has(e)), this._hasHoverProvider.set(Et.xp.has(e)), this._hasDocumentHighlightProvider.set(Et.vH.has(e)), this._hasDocumentSymbolProvider.set(Et.vJ.has(e)), this._hasReferenceProvider.set(Et.FL.has(e)), this._hasRenameProvider.set(Et.G0.has(e)), this._hasSignatureHelpProvider.set(Et.nD.has(e)), this._hasInlayHintsProvider.set(Et.mX.has(e)), this._hasDocumentFormattingProvider.set(Et.Az.has(e) || Et.vN.has(e)), this._hasDocumentSelectionFormattingProvider.set(Et.vN.has(e)), this._hasMultipleDocumentFormattingProvider.set(Et.Az.all(e).length + Et.vN.all(e).length > 1), this._hasMultipleDocumentSelectionFormattingProvider.set(Et.vN.all(e).length > 1), this._isInWalkThrough.set(e.uri.scheme === g.lg.walkThroughSnippet));
      }) : this.reset();
    }
  }
  class uo extends u.JT {
    constructor(e) {
      (super(), (this._onChange = this._register(new h.Q5())), (this.onChange = this._onChange.event), (this._hasFocus = !1), (this._domFocusTracker = this._register(c.go(e))), this._register(this._domFocusTracker.onDidFocus(() => {
        ((this._hasFocus = !0), this._onChange.fire(void 0));
      })), this._register(this._domFocusTracker.onDidBlur(() => {
        ((this._hasFocus = !1), this._onChange.fire(void 0));
      })));
    }
    hasFocus() {
      return this._hasFocus;
    }
  }
  const go = encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 6 3' enable-background='new 0 0 6 3' height='3' width='6'><g fill='"),
    po = encodeURIComponent("'><polygon points='5.5,0 2.5,3 1.1,3 4.1,0'/><polygon points='4,0 6,2 6,0.6 5.4,0'/><polygon points='0,2 1,3 2.4,3 0,0.6'/></g></svg>");
  function fo(e) {
    return go + encodeURIComponent(e.toString()) + po;
  }
  const mo = encodeURIComponent('<svg xmlns="https://www.w3.org/2000/svg" height="3" width="12"><g fill="'),
    vo = encodeURIComponent('"><circle cx="1" cy="1" r="1"/><circle cx="5" cy="1" r="1"/><circle cx="9" cy="1" r="1"/></g></svg>');
  (0, Pe.Ic)((e, t) => {
    const i = e.getColor(gt.b6);
    i && t.addRule(`.monaco-editor .squiggly-error { border-bottom: 4px double ${i}; }`);
    const n = e.getColor(gt.lX);
    n && t.addRule(`.monaco-editor .squiggly-error { background: url("data:image/svg+xml,${fo(n)}") repeat-x bottom left; }`);
    const o = e.getColor(gt.A2);
    o && t.addRule(`.monaco-editor .squiggly-error::before { display: block; content: ''; width: 100%; height: 100%; background: ${o}; }`);
    const s = e.getColor(gt.pW);
    s && t.addRule(`.monaco-editor .squiggly-warning { border-bottom: 4px double ${s}; }`);
    const r = e.getColor(gt.uo);
    r && t.addRule(`.monaco-editor .squiggly-warning { background: url("data:image/svg+xml,${fo(r)}") repeat-x bottom left; }`);
    const a = e.getColor(gt.gp);
    a && t.addRule(`.monaco-editor .squiggly-warning::before { display: block; content: ''; width: 100%; height: 100%; background: ${a}; }`);
    const l = e.getColor(gt.T8);
    l && t.addRule(`.monaco-editor .squiggly-info { border-bottom: 4px double ${l}; }`);
    const c = e.getColor(gt.c6);
    c && t.addRule(`.monaco-editor .squiggly-info { background: url("data:image/svg+xml,${fo(c)}") repeat-x bottom left; }`);
    const d = e.getColor(gt.fe);
    d && t.addRule(`.monaco-editor .squiggly-info::before { display: block; content: ''; width: 100%; height: 100%; background: ${d}; }`);
    const h = e.getColor(gt.fE);
    h && t.addRule(`.monaco-editor .squiggly-hint { border-bottom: 2px dotted ${h}; }`);
    const u = e.getColor(gt.Du);
    u && t.addRule(`.monaco-editor .squiggly-hint { background: url("data:image/svg+xml,${(function (e) {
      return mo + encodeURIComponent(e.toString()) + vo;
    })(u)}") no-repeat bottom left; }`);
    const g = e.getColor(Oe.zu);
    g && t.addRule(`.monaco-editor.showUnused .squiggly-inline-unnecessary { opacity: ${g.rgba.a}; }`);
    const p = e.getColor(Oe.kp);
    p && t.addRule(`.monaco-editor.showUnused .squiggly-unnecessary { border-bottom: 2px dashed ${p}; }`);
    const f = e.getColor(gt.NO) || "inherit";
    t.addRule(`.monaco-editor.showDeprecated .squiggly-inline-deprecated { text-decoration: line-through; text-decoration-color: ${f}}`);
  });
};