module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    kX: () => x,
    Bv: () => N
  });
  var n = i(16268),
    o = i(23547),
    s = i(65321),
    r = i(4850),
    a = i(10553),
    l = i(9802),
    c = i(9488),
    d = i(15393),
    h = i(49898),
    u = i(4669),
    g = i(5976),
    p = i(36248),
    f = i(61134),
    m = i(76633);
  function v(e, t) {
    const i = [];
    for (let n of t) {
      if (e.start >= n.range.end) continue;
      if (e.end < n.range.start) break;
      const t = f.e.intersect(e, n.range);
      f.e.isEmpty(t) || i.push({
        range: t,
        size: n.size
      });
    }
    return i;
  }
  function _({
    start: e,
    end: t
  }, i) {
    return {
      start: e + i,
      end: t + i
    };
  }
  class b {
    constructor() {
      ((this.groups = []), (this._size = 0));
    }
    splice(e, t, i = []) {
      const n = i.length - t,
        o = v({
          start: 0,
          end: e
        }, this.groups),
        s = v({
          start: e + t,
          end: Number.POSITIVE_INFINITY
        }, this.groups).map(e => ({
          range: _(e.range, n),
          size: e.size
        })),
        r = i.map((t, i) => ({
          range: {
            start: e + i,
            end: e + i + 1
          },
          size: t.size
        }));
      ((this.groups = (function (...e) {
        return (function (e) {
          const t = [];
          let i = null;
          for (let n of e) {
            const e = n.range.start,
              o = n.range.end,
              s = n.size;
            i && s === i.size ? (i.range.end = o) : ((i = {
              range: {
                start: e,
                end: o
              },
              size: s
            }), t.push(i));
          }
          return t;
        })(e.reduce((e, t) => e.concat(t), []));
      })(o, r, s)), (this._size = this.groups.reduce((e, t) => e + t.size * (t.range.end - t.range.start), 0)));
    }
    get count() {
      const e = this.groups.length;
      return e ? this.groups[e - 1].range.end : 0;
    }
    get size() {
      return this._size;
    }
    indexAt(e) {
      if (e < 0) return -1;
      let t = 0,
        i = 0;
      for (let n of this.groups) {
        const o = n.range.end - n.range.start,
          s = i + o * n.size;
        if (e < s) return t + Math.floor((e - i) / n.size);
        ((t += o), (i = s));
      }
      return t;
    }
    indexAfter(e) {
      return Math.min(this.indexAt(e) + 1, this.count);
    }
    positionAt(e) {
      if (e < 0) return -1;
      let t = 0,
        i = 0;
      for (let n of this.groups) {
        const o = n.range.end - n.range.start,
          s = i + o;
        if (e < s) return t + (e - i) * n.size;
        ((t += o * n.size), (i = s));
      }
      return -1;
    }
  }
  class w {
    constructor(e) {
      ((this.renderers = e), (this.cache = new Map()));
    }
    alloc(e) {
      let t = this.getTemplateCache(e).pop();
      if (!t) {
        const i = (0, s.$)(".monaco-list-row");
        t = {
          domNode: i,
          templateId: e,
          templateData: this.getRenderer(e).renderTemplate(i)
        };
      }
      return t;
    }
    release(e) {
      e && this.releaseRow(e);
    }
    releaseRow(e) {
      const {
        domNode: t,
        templateId: i
      } = e;
      t && (t.classList.remove("scrolling"), (function (e) {
        try {
          e.parentElement && e.parentElement.removeChild(e);
        } catch (e) {}
      })(t));
      this.getTemplateCache(i).push(e);
    }
    getTemplateCache(e) {
      let t = this.cache.get(e);
      return (t || ((t = []), this.cache.set(e, t)), t);
    }
    dispose() {
      (this.cache.forEach((e, t) => {
        for (const i of e) {
          (this.getRenderer(t).disposeTemplate(i.templateData), (i.templateData = null));
        }
      }), this.cache.clear());
    }
    getRenderer(e) {
      const t = this.renderers.get(e);
      if (!t) throw new Error(`No renderer found for ${e}`);
      return t;
    }
  }
  var y = function (e, t, i, n) {
    var o,
      s = arguments.length,
      r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
    return (s > 3 && r && Object.defineProperty(t, i, r), r);
  };
  const C = {
    useShadows: !0,
    verticalScrollMode: 1,
    setRowLineHeight: !0,
    setRowHeight: !0,
    supportDynamicHeights: !1,
    dnd: {
      getDragElements: e => [e],
      getDragURI: () => null,
      onDragStart() {},
      onDragOver: () => !1,
      drop() {}
    },
    horizontalScrolling: !1,
    transformOptimization: !0,
    alwaysConsumeMouseWheel: !0
  };
  class x {
    constructor(e) {
      this.elements = e;
    }
    update() {}
    getData() {
      return this.elements;
    }
  }
  class S {
    constructor(e) {
      this.elements = e;
    }
    update() {}
    getData() {
      return this.elements;
    }
  }
  class k {
    constructor() {
      ((this.types = []), (this.files = []));
    }
    update(e) {
      if ((e.types && this.types.splice(0, this.types.length, ...e.types), e.files)) {
        this.files.splice(0, this.files.length);
        for (let t = 0; t < e.files.length; t++) {
          const i = e.files.item(t);
          i && (i.size || i.type) && this.files.push(i);
        }
      }
    }
    getData() {
      return {
        types: this.types,
        files: this.files
      };
    }
  }
  class L {
    constructor(e) {
      ((null == e ? void 0 : e.getSetSize) ? (this.getSetSize = e.getSetSize.bind(e)) : (this.getSetSize = (e, t, i) => i), (null == e ? void 0 : e.getPosInSet) ? (this.getPosInSet = e.getPosInSet.bind(e)) : (this.getPosInSet = (e, t) => t + 1), (null == e ? void 0 : e.getRole) ? (this.getRole = e.getRole.bind(e)) : (this.getRole = e => "listitem"), (null == e ? void 0 : e.isChecked) ? (this.isChecked = e.isChecked.bind(e)) : (this.isChecked = e => {}));
    }
  }
  class N {
    constructor(e, t, i, n = C) {
      if (((this.virtualDelegate = t), (this.domId = "list_id_" + ++N.InstanceCount), (this.renderers = new Map()), (this.renderWidth = 0), (this._scrollHeight = 0), (this.scrollableElementUpdateDisposable = null), (this.scrollableElementWidthDelayer = new d.vp(50)), (this.splicing = !1), (this.dragOverAnimationStopDisposable = g.JT.None), (this.dragOverMouseY = 0), (this.canDrop = !1), (this.currentDragFeedbackDisposable = g.JT.None), (this.onDragLeaveTimeout = g.JT.None), (this.disposables = new g.SL()), (this._onDidChangeContentHeight = new u.Q5()), (this._horizontalScrolling = !1), n.horizontalScrolling && n.supportDynamicHeights)) throw new Error("Horizontal scrolling and dynamic heights not supported simultaneously");
      ((this.items = []), (this.itemId = 0), (this.rangeMap = new b()));
      for (const e of i) this.renderers.set(e.templateId, e);
      ((this.cache = this.disposables.add(new w(this.renderers))), (this.lastRenderTop = 0), (this.lastRenderHeight = 0), (this.domNode = document.createElement("div")), (this.domNode.className = "monaco-list"), this.domNode.classList.add(this.domId), (this.domNode.tabIndex = 0), this.domNode.classList.toggle("mouse-support", "boolean" != typeof n.mouseSupport || n.mouseSupport), (this._horizontalScrolling = (0, p.CJ)(n, e => e.horizontalScrolling, C.horizontalScrolling)), this.domNode.classList.toggle("horizontal-scrolling", this._horizontalScrolling), (this.additionalScrollHeight = void 0 === n.additionalScrollHeight ? 0 : n.additionalScrollHeight), (this.accessibilityProvider = new L(n.accessibilityProvider)), (this.rowsContainer = document.createElement("div")), (this.rowsContainer.className = "monaco-list-rows"));
      ((0, p.CJ)(n, e => e.transformOptimization, C.transformOptimization) && (this.rowsContainer.style.transform = "translate3d(0px, 0px, 0px)"), this.disposables.add(a.o.addTarget(this.rowsContainer)), (this.scrollable = new m.Rm((0, p.CJ)(n, e => e.smoothScrolling, !1) ? 125 : 0, e => (0, s.jL)(e))), (this.scrollableElement = this.disposables.add(new l.$Z(this.rowsContainer, {
        alwaysConsumeMouseWheel: (0, p.CJ)(n, e => e.alwaysConsumeMouseWheel, C.alwaysConsumeMouseWheel),
        horizontal: 1,
        vertical: (0, p.CJ)(n, e => e.verticalScrollMode, C.verticalScrollMode),
        useShadows: (0, p.CJ)(n, e => e.useShadows, C.useShadows),
        mouseWheelScrollSensitivity: n.mouseWheelScrollSensitivity,
        fastScrollSensitivity: n.fastScrollSensitivity
      }, this.scrollable))), this.domNode.appendChild(this.scrollableElement.getDomNode()), e.appendChild(this.domNode), this.scrollableElement.onScroll(this.onScroll, this, this.disposables), this.disposables.add((0, s.nm)(this.rowsContainer, a.t.Change, e => this.onTouchChange(e))), this.disposables.add((0, s.nm)(this.scrollableElement.getDomNode(), "scroll", e => (e.target.scrollTop = 0))), this.disposables.add((0, s.nm)(this.domNode, "dragover", e => this.onDragOver(this.toDragEvent(e)))), this.disposables.add((0, s.nm)(this.domNode, "drop", e => this.onDrop(this.toDragEvent(e)))), this.disposables.add((0, s.nm)(this.domNode, "dragleave", e => this.onDragLeave(this.toDragEvent(e)))), this.disposables.add((0, s.nm)(this.domNode, "dragend", e => this.onDragEnd(e))), (this.setRowLineHeight = (0, p.CJ)(n, e => e.setRowLineHeight, C.setRowLineHeight)), (this.setRowHeight = (0, p.CJ)(n, e => e.setRowHeight, C.setRowHeight)), (this.supportDynamicHeights = (0, p.CJ)(n, e => e.supportDynamicHeights, C.supportDynamicHeights)), (this.dnd = (0, p.CJ)(n, e => e.dnd, C.dnd)), this.layout());
    }
    get contentHeight() {
      return this.rangeMap.size;
    }
    get horizontalScrolling() {
      return this._horizontalScrolling;
    }
    set horizontalScrolling(e) {
      if (e !== this._horizontalScrolling) {
        if (e && this.supportDynamicHeights) throw new Error("Horizontal scrolling and dynamic heights not supported simultaneously");
        if (((this._horizontalScrolling = e), this.domNode.classList.toggle("horizontal-scrolling", this._horizontalScrolling), this._horizontalScrolling)) {
          for (const e of this.items) this.measureItemWidth(e);
          (this.updateScrollWidth(), this.scrollableElement.setScrollDimensions({
            width: (0, s.FK)(this.domNode)
          }), (this.rowsContainer.style.width = `${Math.max(this.scrollWidth || 0, this.renderWidth)}px`));
        } else (this.scrollableElementWidthDelayer.cancel(), this.scrollableElement.setScrollDimensions({
          width: this.renderWidth,
          scrollWidth: this.renderWidth
        }), (this.rowsContainer.style.width = ""));
      }
    }
    updateOptions(e) {
      (void 0 !== e.additionalScrollHeight && ((this.additionalScrollHeight = e.additionalScrollHeight), this.scrollableElement.setScrollDimensions({
        scrollHeight: this.scrollHeight
      })), void 0 !== e.smoothScrolling && this.scrollable.setSmoothScrollDuration(e.smoothScrolling ? 125 : 0), void 0 !== e.horizontalScrolling && (this.horizontalScrolling = e.horizontalScrolling), void 0 !== e.mouseWheelScrollSensitivity && this.scrollableElement.updateOptions({
        mouseWheelScrollSensitivity: e.mouseWheelScrollSensitivity
      }), void 0 !== e.fastScrollSensitivity && this.scrollableElement.updateOptions({
        fastScrollSensitivity: e.fastScrollSensitivity
      }));
    }
    splice(e, t, i = []) {
      if (this.splicing) throw new Error("Can't run recursive splices.");
      this.splicing = !0;
      try {
        return this._splice(e, t, i);
      } finally {
        ((this.splicing = !1), this._onDidChangeContentHeight.fire(this.contentHeight));
      }
    }
    _splice(e, t, i = []) {
      const n = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight),
        o = {
          start: e,
          end: e + t
        },
        s = f.e.intersect(n, o),
        r = new Map();
      for (let e = s.start; e < s.end; e++) {
        const t = this.items[e];
        if ((t.dragStartDisposable.dispose(), t.row)) {
          let i = r.get(t.templateId);
          i || ((i = []), r.set(t.templateId, i));
          const n = this.renderers.get(t.templateId);
          (n && n.disposeElement && n.disposeElement(t.element, e, t.row.templateData, t.size), i.push(t.row));
        }
        t.row = null;
      }
      const a = {
          start: e + t,
          end: this.items.length
        },
        l = f.e.intersect(a, n),
        c = f.e.relativeComplement(a, n),
        d = i.map(e => ({
          id: String(this.itemId++),
          element: e,
          templateId: this.virtualDelegate.getTemplateId(e),
          size: this.virtualDelegate.getHeight(e),
          width: void 0,
          hasDynamicHeight: !!this.virtualDelegate.hasDynamicHeight && this.virtualDelegate.hasDynamicHeight(e),
          lastDynamicHeightWidth: void 0,
          row: null,
          uri: void 0,
          dropTarget: !1,
          dragStartDisposable: g.JT.None
        }));
      let h;
      0 === e && t >= this.items.length ? ((this.rangeMap = new b()), this.rangeMap.splice(0, 0, d), (h = this.items), (this.items = d)) : (this.rangeMap.splice(e, t, d), (h = this.items.splice(e, t, ...d)));
      const u = i.length - t,
        p = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight),
        m = _(l, u),
        v = f.e.intersect(p, m);
      for (let e = v.start; e < v.end; e++) this.updateItemInDOM(this.items[e], e);
      const w = f.e.relativeComplement(m, p);
      for (const e of w) for (let t = e.start; t < e.end; t++) this.removeItemFromDOM(t);
      const y = c.map(e => _(e, u)),
        C = [{
          start: e,
          end: e + i.length
        }, ...y].map(e => f.e.intersect(p, e)),
        x = this.getNextToLastElement(C);
      for (const e of C) for (let t = e.start; t < e.end; t++) {
        const e = this.items[t],
          i = r.get(e.templateId),
          n = null == i ? void 0 : i.pop();
        this.insertItemInDOM(t, x, n);
      }
      for (const e of r.values()) for (const t of e) this.cache.release(t);
      return (this.eventuallyUpdateScrollDimensions(), this.supportDynamicHeights && this._rerender(this.scrollTop, this.renderHeight), h.map(e => e.element));
    }
    eventuallyUpdateScrollDimensions() {
      ((this._scrollHeight = this.contentHeight), (this.rowsContainer.style.height = `${this._scrollHeight}px`), this.scrollableElementUpdateDisposable || (this.scrollableElementUpdateDisposable = (0, s.jL)(() => {
        (this.scrollableElement.setScrollDimensions({
          scrollHeight: this.scrollHeight
        }), this.updateScrollWidth(), (this.scrollableElementUpdateDisposable = null));
      })));
    }
    eventuallyUpdateScrollWidth() {
      this.horizontalScrolling ? this.scrollableElementWidthDelayer.trigger(() => this.updateScrollWidth()) : this.scrollableElementWidthDelayer.cancel();
    }
    updateScrollWidth() {
      if (!this.horizontalScrolling) return;
      let e = 0;
      for (const t of this.items) void 0 !== t.width && (e = Math.max(e, t.width));
      ((this.scrollWidth = e), this.scrollableElement.setScrollDimensions({
        scrollWidth: 0 === e ? 0 : e + 10
      }));
    }
    rerender() {
      if (this.supportDynamicHeights) {
        for (const e of this.items) e.lastDynamicHeightWidth = void 0;
        this._rerender(this.lastRenderTop, this.lastRenderHeight);
      }
    }
    get length() {
      return this.items.length;
    }
    get renderHeight() {
      return this.scrollableElement.getScrollDimensions().height;
    }
    element(e) {
      return this.items[e].element;
    }
    domElement(e) {
      const t = this.items[e].row;
      return t && t.domNode;
    }
    elementHeight(e) {
      return this.items[e].size;
    }
    elementTop(e) {
      return this.rangeMap.positionAt(e);
    }
    indexAt(e) {
      return this.rangeMap.indexAt(e);
    }
    indexAfter(e) {
      return this.rangeMap.indexAfter(e);
    }
    layout(e, t) {
      let i = {
        height: "number" == typeof e ? e : (0, s.If)(this.domNode)
      };
      (this.scrollableElementUpdateDisposable && (this.scrollableElementUpdateDisposable.dispose(), (this.scrollableElementUpdateDisposable = null), (i.scrollHeight = this.scrollHeight)), this.scrollableElement.setScrollDimensions(i), void 0 !== t && ((this.renderWidth = t), this.supportDynamicHeights && this._rerender(this.scrollTop, this.renderHeight)), this.horizontalScrolling && this.scrollableElement.setScrollDimensions({
        width: "number" == typeof t ? t : (0, s.FK)(this.domNode)
      }));
    }
    render(e, t, i, n, o, s = !1) {
      const r = this.getRenderRange(t, i),
        a = f.e.relativeComplement(r, e),
        l = f.e.relativeComplement(e, r),
        c = this.getNextToLastElement(a);
      if (s) {
        const t = f.e.intersect(e, r);
        for (let e = t.start; e < t.end; e++) this.updateItemInDOM(this.items[e], e);
      }
      for (const e of a) for (let t = e.start; t < e.end; t++) this.insertItemInDOM(t, c);
      for (const e of l) for (let t = e.start; t < e.end; t++) this.removeItemFromDOM(t);
      (void 0 !== n && (this.rowsContainer.style.left = `-${n}px`), (this.rowsContainer.style.top = `-${t}px`), this.horizontalScrolling && void 0 !== o && (this.rowsContainer.style.width = `${Math.max(o, this.renderWidth)}px`), (this.lastRenderTop = t), (this.lastRenderHeight = i));
    }
    insertItemInDOM(e, t, i) {
      const n = this.items[e];
      n.row || (n.row = null != i ? i : this.cache.alloc(n.templateId));
      const o = this.accessibilityProvider.getRole(n.element) || "listitem";
      n.row.domNode.setAttribute("role", o);
      const r = this.accessibilityProvider.isChecked(n.element);
      (void 0 !== r && n.row.domNode.setAttribute("aria-checked", String(!!r)), n.row.domNode.parentElement || (t ? this.rowsContainer.insertBefore(n.row.domNode, t) : this.rowsContainer.appendChild(n.row.domNode)), this.updateItemInDOM(n, e));
      const a = this.renderers.get(n.templateId);
      if (!a) throw new Error(`No renderer found for template id ${n.templateId}`);
      a && a.renderElement(n.element, e, n.row.templateData, n.size);
      const l = this.dnd.getDragURI(n.element);
      (n.dragStartDisposable.dispose(), (n.row.domNode.draggable = !!l), l && (n.dragStartDisposable = (0, s.nm)(n.row.domNode, "dragstart", e => this.onDragStart(n.element, l, e))), this.horizontalScrolling && (this.measureItemWidth(n), this.eventuallyUpdateScrollWidth()));
    }
    measureItemWidth(e) {
      if (!e.row || !e.row.domNode) return;
      ((e.row.domNode.style.width = n.vU ? "-moz-fit-content" : "fit-content"), (e.width = (0, s.FK)(e.row.domNode)));
      const t = window.getComputedStyle(e.row.domNode);
      (t.paddingLeft && (e.width += parseFloat(t.paddingLeft)), t.paddingRight && (e.width += parseFloat(t.paddingRight)), (e.row.domNode.style.width = ""));
    }
    updateItemInDOM(e, t) {
      ((e.row.domNode.style.top = `${this.elementTop(t)}px`), this.setRowHeight && (e.row.domNode.style.height = `${e.size}px`), this.setRowLineHeight && (e.row.domNode.style.lineHeight = `${e.size}px`), e.row.domNode.setAttribute("data-index", `${t}`), e.row.domNode.setAttribute("data-last-element", t === this.length - 1 ? "true" : "false"), e.row.domNode.setAttribute("data-parity", t % 2 == 0 ? "even" : "odd"), e.row.domNode.setAttribute("aria-setsize", String(this.accessibilityProvider.getSetSize(e.element, t, this.length))), e.row.domNode.setAttribute("aria-posinset", String(this.accessibilityProvider.getPosInSet(e.element, t))), e.row.domNode.setAttribute("id", this.getElementDomId(t)), e.row.domNode.classList.toggle("drop-target", e.dropTarget));
    }
    removeItemFromDOM(e) {
      const t = this.items[e];
      if ((t.dragStartDisposable.dispose(), t.row)) {
        const i = this.renderers.get(t.templateId);
        (i && i.disposeElement && i.disposeElement(t.element, e, t.row.templateData, t.size), this.cache.release(t.row), (t.row = null));
      }
      this.horizontalScrolling && this.eventuallyUpdateScrollWidth();
    }
    getScrollTop() {
      return this.scrollableElement.getScrollPosition().scrollTop;
    }
    setScrollTop(e, t) {
      (this.scrollableElementUpdateDisposable && (this.scrollableElementUpdateDisposable.dispose(), (this.scrollableElementUpdateDisposable = null), this.scrollableElement.setScrollDimensions({
        scrollHeight: this.scrollHeight
      })), this.scrollableElement.setScrollPosition({
        scrollTop: e,
        reuseAnimation: t
      }));
    }
    get scrollTop() {
      return this.getScrollTop();
    }
    set scrollTop(e) {
      this.setScrollTop(e);
    }
    get scrollHeight() {
      return (this._scrollHeight + (this.horizontalScrolling ? 10 : 0) + this.additionalScrollHeight);
    }
    get onMouseClick() {
      return u.ju.map(this.disposables.add(new r.Y(this.domNode, "click")).event, e => this.toMouseEvent(e));
    }
    get onMouseDblClick() {
      return u.ju.map(this.disposables.add(new r.Y(this.domNode, "dblclick")).event, e => this.toMouseEvent(e));
    }
    get onMouseMiddleClick() {
      return u.ju.filter(u.ju.map(this.disposables.add(new r.Y(this.domNode, "auxclick")).event, e => this.toMouseEvent(e)), e => 1 === e.browserEvent.button);
    }
    get onMouseDown() {
      return u.ju.map(this.disposables.add(new r.Y(this.domNode, "mousedown")).event, e => this.toMouseEvent(e));
    }
    get onContextMenu() {
      return u.ju.any(u.ju.map(this.disposables.add(new r.Y(this.domNode, "contextmenu")).event, e => this.toMouseEvent(e)), u.ju.map(this.disposables.add(new r.Y(this.domNode, a.t.Contextmenu)).event, e => this.toGestureEvent(e)));
    }
    get onTouchStart() {
      return u.ju.map(this.disposables.add(new r.Y(this.domNode, "touchstart")).event, e => this.toTouchEvent(e));
    }
    get onTap() {
      return u.ju.map(this.disposables.add(new r.Y(this.rowsContainer, a.t.Tap)).event, e => this.toGestureEvent(e));
    }
    toMouseEvent(e) {
      const t = this.getItemIndexFromEventTarget(e.target || null),
        i = void 0 === t ? void 0 : this.items[t];
      return {
        browserEvent: e,
        index: t,
        element: i && i.element
      };
    }
    toTouchEvent(e) {
      const t = this.getItemIndexFromEventTarget(e.target || null),
        i = void 0 === t ? void 0 : this.items[t];
      return {
        browserEvent: e,
        index: t,
        element: i && i.element
      };
    }
    toGestureEvent(e) {
      const t = this.getItemIndexFromEventTarget(e.initialTarget || null),
        i = void 0 === t ? void 0 : this.items[t];
      return {
        browserEvent: e,
        index: t,
        element: i && i.element
      };
    }
    toDragEvent(e) {
      const t = this.getItemIndexFromEventTarget(e.target || null),
        i = void 0 === t ? void 0 : this.items[t];
      return {
        browserEvent: e,
        index: t,
        element: i && i.element
      };
    }
    onScroll(e) {
      try {
        const t = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
        (this.render(t, e.scrollTop, e.height, e.scrollLeft, e.scrollWidth), this.supportDynamicHeights && this._rerender(e.scrollTop, e.height, e.inSmoothScrolling));
      } catch (t) {
        throw (console.error("Got bad scroll event:", e), t);
      }
    }
    onTouchChange(e) {
      (e.preventDefault(), e.stopPropagation(), (this.scrollTop -= e.translationY));
    }
    onDragStart(e, t, i) {
      if (!i.dataTransfer) return;
      const n = this.dnd.getDragElements(e);
      if (((i.dataTransfer.effectAllowed = "copyMove"), i.dataTransfer.setData(o.go.TEXT, t), i.dataTransfer.setDragImage)) {
        let e;
        (this.dnd.getDragLabel && (e = this.dnd.getDragLabel(n, i)), void 0 === e && (e = String(n.length)));
        const t = (0, s.$)(".monaco-drag-image");
        ((t.textContent = e), document.body.appendChild(t), i.dataTransfer.setDragImage(t, -10, -10), setTimeout(() => document.body.removeChild(t), 0));
      }
      ((this.currentDragData = new x(n)), (o.P$.CurrentDragAndDropData = new S(n)), this.dnd.onDragStart && this.dnd.onDragStart(this.currentDragData, i));
    }
    onDragOver(e) {
      if ((e.browserEvent.preventDefault(), this.onDragLeaveTimeout.dispose(), o.P$.CurrentDragAndDropData && "vscode-ui" === o.P$.CurrentDragAndDropData.getData())) return !1;
      if ((this.setupDragAndDropScrollTopAnimation(e.browserEvent), !e.browserEvent.dataTransfer)) return !1;
      if (!this.currentDragData) if (o.P$.CurrentDragAndDropData) this.currentDragData = o.P$.CurrentDragAndDropData;else {
        if (!e.browserEvent.dataTransfer.types) return !1;
        this.currentDragData = new k();
      }
      const t = this.dnd.onDragOver(this.currentDragData, e.element, e.index, e.browserEvent);
      if (((this.canDrop = "boolean" == typeof t ? t : t.accept), !this.canDrop)) return ((this.currentDragFeedback = void 0), this.currentDragFeedbackDisposable.dispose(), !1);
      let i;
      if (((e.browserEvent.dataTransfer.dropEffect = "boolean" != typeof t && 0 === t.effect ? "copy" : "move"), (i = "boolean" != typeof t && t.feedback ? t.feedback : void 0 === e.index ? [-1] : [e.index]), (i = (0, c.EB)(i).filter(e => e >= -1 && e < this.length).sort((e, t) => e - t)), (i = -1 === i[0] ? [-1] : i), (n = this.currentDragFeedback), (s = i), Array.isArray(n) && Array.isArray(s) ? (0, c.fS)(n, s) : n === s)) return !0;
      var n, s;
      if (((this.currentDragFeedback = i), this.currentDragFeedbackDisposable.dispose(), -1 === i[0])) (this.domNode.classList.add("drop-target"), this.rowsContainer.classList.add("drop-target"), (this.currentDragFeedbackDisposable = (0, g.OF)(() => {
        (this.domNode.classList.remove("drop-target"), this.rowsContainer.classList.remove("drop-target"));
      })));else {
        for (const e of i) {
          const t = this.items[e];
          ((t.dropTarget = !0), t.row && t.row.domNode.classList.add("drop-target"));
        }
        this.currentDragFeedbackDisposable = (0, g.OF)(() => {
          for (const e of i) {
            const t = this.items[e];
            ((t.dropTarget = !1), t.row && t.row.domNode.classList.remove("drop-target"));
          }
        });
      }
      return !0;
    }
    onDragLeave(e) {
      var t, i;
      (this.onDragLeaveTimeout.dispose(), (this.onDragLeaveTimeout = (0, d.Vg)(() => this.clearDragOverFeedback(), 100)), this.currentDragData && (null === (i = (t = this.dnd).onDragLeave) || void 0 === i || i.call(t, this.currentDragData, e.element, e.index, e.browserEvent)));
    }
    onDrop(e) {
      if (!this.canDrop) return;
      const t = this.currentDragData;
      (this.teardownDragAndDropScrollTopAnimation(), this.clearDragOverFeedback(), (this.currentDragData = void 0), (o.P$.CurrentDragAndDropData = void 0), t && e.browserEvent.dataTransfer && (e.browserEvent.preventDefault(), t.update(e.browserEvent.dataTransfer), this.dnd.drop(t, e.element, e.index, e.browserEvent)));
    }
    onDragEnd(e) {
      ((this.canDrop = !1), this.teardownDragAndDropScrollTopAnimation(), this.clearDragOverFeedback(), (this.currentDragData = void 0), (o.P$.CurrentDragAndDropData = void 0), this.dnd.onDragEnd && this.dnd.onDragEnd(e));
    }
    clearDragOverFeedback() {
      ((this.currentDragFeedback = void 0), this.currentDragFeedbackDisposable.dispose(), (this.currentDragFeedbackDisposable = g.JT.None));
    }
    setupDragAndDropScrollTopAnimation(e) {
      if (!this.dragOverAnimationDisposable) {
        const e = (0, s.xQ)(this.domNode).top;
        this.dragOverAnimationDisposable = (0, s.jt)(this.animateDragAndDropScrollTop.bind(this, e));
      }
      (this.dragOverAnimationStopDisposable.dispose(), (this.dragOverAnimationStopDisposable = (0, d.Vg)(() => {
        this.dragOverAnimationDisposable && (this.dragOverAnimationDisposable.dispose(), (this.dragOverAnimationDisposable = void 0));
      }, 1e3)), (this.dragOverMouseY = e.pageY));
    }
    animateDragAndDropScrollTop(e) {
      if (void 0 === this.dragOverMouseY) return;
      const t = this.dragOverMouseY - e,
        i = this.renderHeight - 35;
      t < 35 ? (this.scrollTop += Math.max(-14, Math.floor(0.3 * (t - 35)))) : t > i && (this.scrollTop += Math.min(14, Math.floor(0.3 * (t - i))));
    }
    teardownDragAndDropScrollTopAnimation() {
      (this.dragOverAnimationStopDisposable.dispose(), this.dragOverAnimationDisposable && (this.dragOverAnimationDisposable.dispose(), (this.dragOverAnimationDisposable = void 0)));
    }
    getItemIndexFromEventTarget(e) {
      const t = this.scrollableElement.getDomNode();
      let i = e;
      for (; i instanceof HTMLElement && i !== this.rowsContainer && t.contains(i);) {
        const e = i.getAttribute("data-index");
        if (e) {
          const t = Number(e);
          if (!isNaN(t)) return t;
        }
        i = i.parentElement;
      }
    }
    getRenderRange(e, t) {
      return {
        start: this.rangeMap.indexAt(e),
        end: this.rangeMap.indexAfter(e + t - 1)
      };
    }
    _rerender(e, t, i) {
      const n = this.getRenderRange(e, t);
      let o, s;
      e === this.elementTop(n.start) ? ((o = n.start), (s = 0)) : n.end - n.start > 1 && ((o = n.start + 1), (s = this.elementTop(o) - e));
      let r = 0;
      for (;;) {
        const a = this.getRenderRange(e, t);
        let l = !1;
        for (let e = a.start; e < a.end; e++) {
          const t = this.probeDynamicHeight(e);
          (0 !== t && this.rangeMap.splice(e, 1, [this.items[e]]), (r += t), (l = l || 0 !== t));
        }
        if (!l) {
          0 !== r && this.eventuallyUpdateScrollDimensions();
          const t = f.e.relativeComplement(n, a);
          for (const e of t) for (let t = e.start; t < e.end; t++) this.items[t].row && this.removeItemFromDOM(t);
          const l = f.e.relativeComplement(a, n);
          for (const e of l) for (let t = e.start; t < e.end; t++) {
            const e = t + 1,
              i = e < this.items.length ? this.items[e].row : null,
              n = i ? i.domNode : null;
            this.insertItemInDOM(t, n);
          }
          for (let e = a.start; e < a.end; e++) this.items[e].row && this.updateItemInDOM(this.items[e], e);
          if ("number" == typeof o) {
            const t = this.scrollable.getFutureScrollPosition().scrollTop - e,
              n = this.elementTop(o) - s + t;
            this.setScrollTop(n, i);
          }
          return void this._onDidChangeContentHeight.fire(this.contentHeight);
        }
      }
    }
    probeDynamicHeight(e) {
      const t = this.items[e];
      if (this.virtualDelegate.getDynamicHeight) {
        const e = this.virtualDelegate.getDynamicHeight(t.element);
        if (null !== e) {
          const i = t.size;
          return ((t.size = e), (t.lastDynamicHeightWidth = this.renderWidth), e - i);
        }
      }
      if (!t.hasDynamicHeight || t.lastDynamicHeightWidth === this.renderWidth) return 0;
      if (this.virtualDelegate.hasDynamicHeight && !this.virtualDelegate.hasDynamicHeight(t.element)) return 0;
      const i = t.size;
      if (!this.setRowHeight && t.row) {
        let e = t.row.domNode.offsetHeight;
        return ((t.size = e), (t.lastDynamicHeightWidth = this.renderWidth), e - i);
      }
      const n = this.cache.alloc(t.templateId);
      ((n.domNode.style.height = ""), this.rowsContainer.appendChild(n.domNode));
      const o = this.renderers.get(t.templateId);
      return (o && (o.renderElement(t.element, e, n.templateData, void 0), o.disposeElement && o.disposeElement(t.element, e, n.templateData, void 0)), (t.size = n.domNode.offsetHeight), this.virtualDelegate.setDynamicHeight && this.virtualDelegate.setDynamicHeight(t.element, t.size), (t.lastDynamicHeightWidth = this.renderWidth), this.rowsContainer.removeChild(n.domNode), this.cache.release(n), t.size - i);
    }
    getNextToLastElement(e) {
      const t = e[e.length - 1];
      if (!t) return null;
      const i = this.items[t.end];
      return i && i.row ? i.row.domNode : null;
    }
    getElementDomId(e) {
      return `${this.domId}_${e}`;
    }
    dispose() {
      if (this.items) {
        for (const e of this.items) if (e.row) {
          const t = this.renderers.get(e.row.templateId);
          t && (t.disposeElement && t.disposeElement(e.element, -1, e.row.templateData, void 0), t.disposeTemplate(e.row.templateData));
        }
        this.items = [];
      }
      (this.domNode && this.domNode.parentNode && this.domNode.parentNode.removeChild(this.domNode), (0, g.B9)(this.disposables));
    }
  }
  ((N.InstanceCount = 0), y([h.H], N.prototype, "onMouseClick", null), y([h.H], N.prototype, "onMouseDblClick", null), y([h.H], N.prototype, "onMouseMiddleClick", null), y([h.H], N.prototype, "onMouseDown", null), y([h.H], N.prototype, "onContextMenu", null), y([h.H], N.prototype, "onTouchStart", null), y([h.H], N.prototype, "onTap", null));
};