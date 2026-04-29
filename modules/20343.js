module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Lw: () => qe,
    XN: () => Ze,
    ls: () => It,
    ev: () => _t,
    CQ: () => Qe
  });
  var n = i(65321),
    o = i(9488),
    s = i(71050),
    r = i(4669),
    a = i(5976),
    l = (i(60408), i(43799));
  class c {
    constructor(e, t) {
      ((this.renderer = e), (this.modelProvider = t));
    }
    get templateId() {
      return this.renderer.templateId;
    }
    renderTemplate(e) {
      return {
        data: this.renderer.renderTemplate(e),
        disposable: a.JT.None
      };
    }
    renderElement(e, t, i, n) {
      if ((i.disposable && i.disposable.dispose(), !i.data)) return;
      const o = this.modelProvider();
      if (o.isResolved(e)) return this.renderer.renderElement(o.get(e), e, i.data, n);
      const r = new s.A(),
        a = o.resolve(e, r.token);
      ((i.disposable = {
        dispose: () => r.cancel()
      }), this.renderer.renderPlaceholder(e, i.data), a.then(t => this.renderer.renderElement(t, e, i.data, n)));
    }
    disposeTemplate(e) {
      (e.disposable && (e.disposable.dispose(), (e.disposable = void 0)), e.data && (this.renderer.disposeTemplate(e.data), (e.data = void 0)));
    }
  }
  class d {
    constructor(e, t) {
      ((this.modelProvider = e), (this.accessibilityProvider = t));
    }
    getWidgetAriaLabel() {
      return this.accessibilityProvider.getWidgetAriaLabel();
    }
    getAriaLabel(e) {
      const t = this.modelProvider();
      return t.isResolved(e) ? this.accessibilityProvider.getAriaLabel(t.get(e)) : null;
    }
  }
  class h {
    constructor(e, t, i, n, o = {}) {
      const s = () => this.model,
        r = n.map(e => new c(e, s));
      this.list = new l.aV(e, t, i, r, (function (e, t) {
        return Object.assign(Object.assign({}, t), {
          accessibilityProvider: t.accessibilityProvider && new d(e, t.accessibilityProvider)
        });
      })(s, o));
    }
    updateOptions(e) {
      this.list.updateOptions(e);
    }
    getHTMLElement() {
      return this.list.getHTMLElement();
    }
    get onDidFocus() {
      return this.list.onDidFocus;
    }
    get onDidDispose() {
      return this.list.onDidDispose;
    }
    get onMouseDblClick() {
      return r.ju.map(this.list.onMouseDblClick, ({
        element: e,
        index: t,
        browserEvent: i
      }) => ({
        element: void 0 === e ? void 0 : this._model.get(e),
        index: t,
        browserEvent: i
      }));
    }
    get onPointer() {
      return r.ju.map(this.list.onPointer, ({
        element: e,
        index: t,
        browserEvent: i
      }) => ({
        element: void 0 === e ? void 0 : this._model.get(e),
        index: t,
        browserEvent: i
      }));
    }
    get onDidChangeSelection() {
      return r.ju.map(this.list.onDidChangeSelection, ({
        elements: e,
        indexes: t,
        browserEvent: i
      }) => ({
        elements: e.map(e => this._model.get(e)),
        indexes: t,
        browserEvent: i
      }));
    }
    get model() {
      return this._model;
    }
    set model(e) {
      ((this._model = e), this.list.splice(0, this.list.length, (0, o.w6)(e.length)));
    }
    getFocus() {
      return this.list.getFocus();
    }
    getSelection() {
      return this.list.getSelection();
    }
    getSelectedElements() {
      return this.getSelection().map(e => this.model.get(e));
    }
    style(e) {
      this.list.style(e);
    }
    dispose() {
      this.list.dispose();
    }
  }
  var u = i(23937);
  i(87868);
  class g {
    constructor(e, t, i) {
      ((this.columns = e), (this.getColumnSize = i), (this.templateId = g.TemplateId), (this.renderedTemplates = new Set()));
      const n = new Map(t.map(e => [e.templateId, e]));
      this.renderers = [];
      for (const t of e) {
        const e = n.get(t.templateId);
        if (!e) throw new Error(`Table cell renderer for template id ${t.templateId} not found.`);
        this.renderers.push(e);
      }
    }
    renderTemplate(e) {
      const t = (0, n.R3)(e, (0, n.$)(".monaco-table-tr")),
        i = [],
        o = [];
      for (let e = 0; e < this.columns.length; e++) {
        const s = this.renderers[e],
          r = (0, n.R3)(t, (0, n.$)(".monaco-table-td", {
            "data-col-index": e
          }));
        ((r.style.width = `${this.getColumnSize(e)}px`), i.push(r), o.push(s.renderTemplate(r)));
      }
      const s = {
        container: e,
        cellContainers: i,
        cellTemplateData: o
      };
      return (this.renderedTemplates.add(s), s);
    }
    renderElement(e, t, i, n) {
      for (let o = 0; o < this.columns.length; o++) {
        const s = this.columns[o].project(e);
        this.renderers[o].renderElement(s, t, i.cellTemplateData[o], n);
      }
    }
    disposeElement(e, t, i, n) {
      for (let o = 0; o < this.columns.length; o++) {
        const s = this.renderers[o];
        if (s.disposeElement) {
          const r = this.columns[o].project(e);
          s.disposeElement(r, t, i.cellTemplateData[o], n);
        }
      }
    }
    disposeTemplate(e) {
      for (let t = 0; t < this.columns.length; t++) {
        this.renderers[t].disposeTemplate(e.cellTemplateData[t]);
      }
      ((0, n.PO)(e.container), this.renderedTemplates.delete(e));
    }
    layoutColumn(e, t) {
      for (const {
        cellContainers: i
      } of this.renderedTemplates) i[e].style.width = `${t}px`;
    }
  }
  g.TemplateId = "row";
  class p {
    constructor(e, t) {
      ((this.column = e), (this.index = t), (this._onDidLayout = new r.Q5()), (this.onDidLayout = this._onDidLayout.event), (this.element = (0, n.$)(".monaco-table-th", {
        "data-col-index": t,
        title: e.tooltip
      }, e.label)));
    }
    get minimumSize() {
      var e;
      return null !== (e = this.column.minimumWidth) && void 0 !== e ? e : 120;
    }
    get maximumSize() {
      var e;
      return null !== (e = this.column.maximumWidth) && void 0 !== e ? e : Number.POSITIVE_INFINITY;
    }
    get onDidChange() {
      var e;
      return null !== (e = this.column.onDidChangeWidthConstraints) && void 0 !== e ? e : r.ju.None;
    }
    layout(e) {
      this._onDidLayout.fire([this.index, e]);
    }
  }
  class f {
    constructor(e, t, i, o, s, a) {
      ((this.virtualDelegate = i), (this.domId = "table_id_" + ++f.InstanceCount), (this.cachedHeight = 0), (this.domNode = (0, n.R3)(t, (0, n.$)(`.monaco-table.${this.domId}`))));
      const c = o.map((e, t) => new p(e, t)),
        d = {
          size: c.reduce((e, t) => e + t.column.weight, 0),
          views: c.map(e => ({
            size: e.column.weight,
            view: e
          }))
        };
      ((this.splitview = new u.z(this.domNode, {
        orientation: 1,
        scrollbarVisibility: 2,
        getSashOrthogonalSize: () => this.cachedHeight,
        descriptor: d
      })), (this.splitview.el.style.height = `${i.headerRowHeight}px`), (this.splitview.el.style.lineHeight = `${i.headerRowHeight}px`));
      const h = new g(o, s, e => this.splitview.getViewSize(e));
      var m;
      ((this.list = new l.aV(e, this.domNode, ((m = i), {
        getHeight: e => m.getHeight(e),
        getTemplateId: () => g.TemplateId
      }), [h], a)), (this.columnLayoutDisposable = r.ju.any(...c.map(e => e.onDidLayout))(([e, t]) => h.layoutColumn(e, t))), (this.styleElement = (0, n.dS)(this.domNode)), this.style({}));
    }
    get onDidChangeFocus() {
      return this.list.onDidChangeFocus;
    }
    get onDidChangeSelection() {
      return this.list.onDidChangeSelection;
    }
    get onMouseDblClick() {
      return this.list.onMouseDblClick;
    }
    get onPointer() {
      return this.list.onPointer;
    }
    get onDidFocus() {
      return this.list.onDidFocus;
    }
    get onDidDispose() {
      return this.list.onDidDispose;
    }
    updateOptions(e) {
      this.list.updateOptions(e);
    }
    splice(e, t, i = []) {
      this.list.splice(e, t, i);
    }
    getHTMLElement() {
      return this.domNode;
    }
    style(e) {
      const t = [];
      (t.push(`.monaco-table.${this.domId} > .monaco-split-view2 .monaco-sash.vertical::before {\n\t\t\ttop: ${this.virtualDelegate.headerRowHeight + 1}px;\n\t\t\theight: calc(100% - ${this.virtualDelegate.headerRowHeight}px);\n\t\t}`), (this.styleElement.textContent = t.join("\n")), this.list.style(e));
    }
    getSelectedElements() {
      return this.list.getSelectedElements();
    }
    getSelection() {
      return this.list.getSelection();
    }
    getFocus() {
      return this.list.getFocus();
    }
    dispose() {
      (this.splitview.dispose(), this.list.dispose(), this.columnLayoutDisposable.dispose());
    }
  }
  f.InstanceCount = 0;
  var m,
    v = i(25707),
    _ = i(23547),
    b = i(4850),
    w = i(59069);
  !(function (e) {
    ((e[(e.Unknown = 0)] = "Unknown"), (e[(e.Twistie = 1)] = "Twistie"), (e[(e.Element = 2)] = "Element"));
  })(m || (m = {}));
  class y extends Error {
    constructor(e, t) {
      super(`TreeError [${e}] ${t}`);
    }
  }
  class C {
    constructor(e) {
      ((this.fn = e), (this._map = new WeakMap()));
    }
    map(e) {
      let t = this._map.get(e);
      return (t || ((t = this.fn(e)), this._map.set(e, t)), t);
    }
  }
  var x = i(2484),
    S = i(53725);
  function k(e) {
    return "object" == typeof e && "visibility" in e && "data" in e;
  }
  function L(e) {
    switch (e) {
      case !0:
        return 1;
      case !1:
        return 0;
      default:
        return e;
    }
  }
  function N(e) {
    return "boolean" == typeof e.collapsible;
  }
  class D {
    constructor(e, t, i, n = {}) {
      ((this.user = e), (this.list = t), (this.rootRef = []), (this.eventBufferer = new r.E7()), (this._onDidChangeCollapseState = new r.Q5()), (this.onDidChangeCollapseState = this.eventBufferer.wrapEvent(this._onDidChangeCollapseState.event)), (this._onDidChangeRenderNodeCount = new r.Q5()), (this.onDidChangeRenderNodeCount = this.eventBufferer.wrapEvent(this._onDidChangeRenderNodeCount.event)), (this._onDidSplice = new r.Q5()), (this.onDidSplice = this._onDidSplice.event), (this.collapseByDefault = void 0 !== n.collapseByDefault && n.collapseByDefault), (this.filter = n.filter), (this.autoExpandSingleChildren = void 0 !== n.autoExpandSingleChildren && n.autoExpandSingleChildren), (this.root = {
        parent: void 0,
        element: i,
        children: [],
        depth: 0,
        visibleChildrenCount: 0,
        visibleChildIndex: -1,
        collapsible: !1,
        collapsed: !1,
        renderNodeCount: 0,
        visibility: 1,
        visible: !0,
        filterData: void 0
      }));
    }
    splice(e, t, i = S.$.empty(), n = {}) {
      if (0 === e.length) throw new y(this.user, "Invalid tree location");
      n.diffIdentityProvider ? this.spliceSmart(n.diffIdentityProvider, e, t, i, n) : this.spliceSimple(e, t, i, n);
    }
    spliceSmart(e, t, i, n, o, s) {
      var r;
      (void 0 === n && (n = S.$.empty()), void 0 === s && (s = null !== (r = o.diffDepth) && void 0 !== r ? r : 0));
      const {
        parentNode: a
      } = this.getParentNodeWithListIndex(t);
      if (!a.lastDiffIds) return this.spliceSimple(t, i, n, o);
      const l = [...n],
        c = t[t.length - 1],
        d = new x.Hs({
          getElements: () => a.lastDiffIds
        }, {
          getElements: () => [...a.children.slice(0, c), ...l, ...a.children.slice(c + i)].map(t => e.getId(t.element).toString())
        }).ComputeDiff(!1);
      if (d.quitEarly) return ((a.lastDiffIds = void 0), this.spliceSimple(t, i, l, o));
      const h = t.slice(0, -1),
        u = (t, i, n) => {
          if (s > 0) for (let r = 0; r < n; r++) (t--, i--, this.spliceSmart(e, [...h, t, 0], Number.MAX_SAFE_INTEGER, l[i].children, o, s - 1));
        };
      let g = Math.min(a.children.length, c + i),
        p = l.length;
      for (const e of d.changes.sort((e, t) => t.originalStart - e.originalStart)) (u(g, p, g - (e.originalStart + e.originalLength)), (g = e.originalStart), (p = e.modifiedStart - c), this.spliceSimple([...h, g], e.originalLength, S.$.slice(l, p, p + e.modifiedLength), o));
      u(g, p, g);
    }
    spliceSimple(e, t, i = S.$.empty(), {
      onDidCreateNode: n,
      onDidDeleteNode: s,
      diffIdentityProvider: r
    }) {
      const {
          parentNode: a,
          listIndex: l,
          revealed: c,
          visible: d
        } = this.getParentNodeWithListIndex(e),
        h = [],
        u = S.$.map(i, e => this.createTreeNode(e, a, a.visible ? 1 : 0, c, h, n)),
        g = e[e.length - 1],
        p = a.children.length > 0;
      let f = 0;
      for (let e = g; e >= 0 && e < a.children.length; e--) {
        const t = a.children[e];
        if (t.visible) {
          f = t.visibleChildIndex;
          break;
        }
      }
      const m = [];
      let v = 0,
        _ = 0;
      for (const e of u) (m.push(e), (_ += e.renderNodeCount), e.visible && (e.visibleChildIndex = f + v++));
      const b = (0, o.db)(a.children, g, t, m);
      r ? a.lastDiffIds ? (0, o.db)(a.lastDiffIds, g, t, m.map(e => r.getId(e.element).toString())) : (a.lastDiffIds = a.children.map(e => r.getId(e.element).toString())) : (a.lastDiffIds = void 0);
      let w = 0;
      for (const e of b) e.visible && w++;
      if (0 !== w) for (let e = g + m.length; e < a.children.length; e++) {
        const t = a.children[e];
        t.visible && (t.visibleChildIndex -= w);
      }
      if (((a.visibleChildrenCount += v - w), c && d)) {
        const e = b.reduce((e, t) => e + (t.visible ? t.renderNodeCount : 0), 0);
        (this._updateAncestorsRenderNodeCount(a, _ - e), this.list.splice(l, e, h));
      }
      if (b.length > 0 && s) {
        const e = t => {
          (s(t), t.children.forEach(e));
        };
        b.forEach(e);
      }
      const y = a.children.length > 0;
      (p !== y && this.setCollapsible(e.slice(0, -1), y), this._onDidSplice.fire({
        insertedNodes: m,
        deletedNodes: b
      }));
      let C = a;
      for (; C;) {
        if (2 === C.visibility) {
          this.refilter();
          break;
        }
        C = C.parent;
      }
    }
    rerender(e) {
      if (0 === e.length) throw new y(this.user, "Invalid tree location");
      const {
        node: t,
        listIndex: i,
        revealed: n
      } = this.getTreeNodeWithListIndex(e);
      t.visible && n && this.list.splice(i, 1, [t]);
    }
    has(e) {
      return this.hasTreeNode(e);
    }
    getListIndex(e) {
      const {
        listIndex: t,
        visible: i,
        revealed: n
      } = this.getTreeNodeWithListIndex(e);
      return i && n ? t : -1;
    }
    getListRenderCount(e) {
      return this.getTreeNode(e).renderNodeCount;
    }
    isCollapsible(e) {
      return this.getTreeNode(e).collapsible;
    }
    setCollapsible(e, t) {
      const i = this.getTreeNode(e);
      void 0 === t && (t = !i.collapsible);
      const n = {
        collapsible: t
      };
      return this.eventBufferer.bufferEvents(() => this._setCollapseState(e, n));
    }
    isCollapsed(e) {
      return this.getTreeNode(e).collapsed;
    }
    setCollapsed(e, t, i) {
      const n = this.getTreeNode(e);
      void 0 === t && (t = !n.collapsed);
      const o = {
        collapsed: t,
        recursive: i || !1
      };
      return this.eventBufferer.bufferEvents(() => this._setCollapseState(e, o));
    }
    _setCollapseState(e, t) {
      const {
          node: i,
          listIndex: n,
          revealed: o
        } = this.getTreeNodeWithListIndex(e),
        s = this._setListNodeCollapseState(i, n, o, t);
      if (i !== this.root && this.autoExpandSingleChildren && s && !N(t) && i.collapsible && !i.collapsed && !t.recursive) {
        let n = -1;
        for (let e = 0; e < i.children.length; e++) {
          if (i.children[e].visible) {
            if (n > -1) {
              n = -1;
              break;
            }
            n = e;
          }
        }
        n > -1 && this._setCollapseState([...e, n], t);
      }
      return s;
    }
    _setListNodeCollapseState(e, t, i, n) {
      const o = this._setNodeCollapseState(e, n, !1);
      if (!i || !e.visible || !o) return o;
      const s = e.renderNodeCount,
        r = this.updateNodeAfterCollapseChange(e),
        a = s - (-1 === t ? 0 : 1);
      return (this.list.splice(t + 1, a, r.slice(1)), o);
    }
    _setNodeCollapseState(e, t, i) {
      let n;
      if ((e === this.root ? (n = !1) : (N(t) ? ((n = e.collapsible !== t.collapsible), (e.collapsible = t.collapsible)) : e.collapsible ? ((n = e.collapsed !== t.collapsed), (e.collapsed = t.collapsed)) : (n = !1), n && this._onDidChangeCollapseState.fire({
        node: e,
        deep: i
      })), !N(t) && t.recursive)) for (const i of e.children) n = this._setNodeCollapseState(i, t, !0) || n;
      return n;
    }
    expandTo(e) {
      this.eventBufferer.bufferEvents(() => {
        let t = this.getTreeNode(e);
        for (; t.parent;) ((t = t.parent), (e = e.slice(0, e.length - 1)), t.collapsed && this._setCollapseState(e, {
          collapsed: !1,
          recursive: !1
        }));
      });
    }
    refilter() {
      const e = this.root.renderNodeCount,
        t = this.updateNodeAfterFilterChange(this.root);
      this.list.splice(0, e, t);
    }
    createTreeNode(e, t, i, n, o, s) {
      const r = {
          parent: t,
          element: e.element,
          children: [],
          depth: t.depth + 1,
          visibleChildrenCount: 0,
          visibleChildIndex: -1,
          collapsible: "boolean" == typeof e.collapsible ? e.collapsible : void 0 !== e.collapsed,
          collapsed: void 0 === e.collapsed ? this.collapseByDefault : e.collapsed,
          renderNodeCount: 1,
          visibility: 1,
          visible: !0,
          filterData: void 0
        },
        a = this._filterNode(r, i);
      ((r.visibility = a), n && o.push(r));
      const l = e.children || S.$.empty(),
        c = n && 0 !== a && !r.collapsed,
        d = S.$.map(l, e => this.createTreeNode(e, r, a, c, o, s));
      let h = 0,
        u = 1;
      for (const e of d) (r.children.push(e), (u += e.renderNodeCount), e.visible && (e.visibleChildIndex = h++));
      return ((r.collapsible = r.collapsible || r.children.length > 0), (r.visibleChildrenCount = h), (r.visible = 2 === a ? h > 0 : 1 === a), r.visible ? r.collapsed || (r.renderNodeCount = u) : ((r.renderNodeCount = 0), n && o.pop()), s && s(r), r);
    }
    updateNodeAfterCollapseChange(e) {
      const t = e.renderNodeCount,
        i = [];
      return (this._updateNodeAfterCollapseChange(e, i), this._updateAncestorsRenderNodeCount(e.parent, i.length - t), i);
    }
    _updateNodeAfterCollapseChange(e, t) {
      if (!1 === e.visible) return 0;
      if ((t.push(e), (e.renderNodeCount = 1), !e.collapsed)) for (const i of e.children) e.renderNodeCount += this._updateNodeAfterCollapseChange(i, t);
      return (this._onDidChangeRenderNodeCount.fire(e), e.renderNodeCount);
    }
    updateNodeAfterFilterChange(e) {
      const t = e.renderNodeCount,
        i = [];
      return (this._updateNodeAfterFilterChange(e, e.visible ? 1 : 0, i), this._updateAncestorsRenderNodeCount(e.parent, i.length - t), i);
    }
    _updateNodeAfterFilterChange(e, t, i, n = !0) {
      let o;
      if (e !== this.root) {
        if (((o = this._filterNode(e, t)), 0 === o)) return ((e.visible = !1), (e.renderNodeCount = 0), !1);
        n && i.push(e);
      }
      const s = i.length;
      e.renderNodeCount = e === this.root ? 0 : 1;
      let r = !1;
      if (e.collapsed && 0 === o) e.visibleChildrenCount = 0;else {
        let t = 0;
        for (const s of e.children) ((r = this._updateNodeAfterFilterChange(s, o, i, n && !e.collapsed) || r), s.visible && (s.visibleChildIndex = t++));
        e.visibleChildrenCount = t;
      }
      return (e !== this.root && ((e.visible = 2 === o ? r : 1 === o), (e.visibility = o)), e.visible ? e.collapsed || (e.renderNodeCount += i.length - s) : ((e.renderNodeCount = 0), n && i.pop()), this._onDidChangeRenderNodeCount.fire(e), e.visible);
    }
    _updateAncestorsRenderNodeCount(e, t) {
      if (0 !== t) for (; e;) ((e.renderNodeCount += t), this._onDidChangeRenderNodeCount.fire(e), (e = e.parent));
    }
    _filterNode(e, t) {
      const i = this.filter ? this.filter.filter(e.element, t) : 1;
      return "boolean" == typeof i ? ((e.filterData = void 0), i ? 1 : 0) : k(i) ? ((e.filterData = i.data), L(i.visibility)) : ((e.filterData = void 0), L(i));
    }
    hasTreeNode(e, t = this.root) {
      if (!e || 0 === e.length) return !0;
      const [i, ...n] = e;
      return (!(i < 0 || i > t.children.length) && this.hasTreeNode(n, t.children[i]));
    }
    getTreeNode(e, t = this.root) {
      if (!e || 0 === e.length) return t;
      const [i, ...n] = e;
      if (i < 0 || i > t.children.length) throw new y(this.user, "Invalid tree location");
      return this.getTreeNode(n, t.children[i]);
    }
    getTreeNodeWithListIndex(e) {
      if (0 === e.length) return {
        node: this.root,
        listIndex: -1,
        revealed: !0,
        visible: !1
      };
      const {
          parentNode: t,
          listIndex: i,
          revealed: n,
          visible: o
        } = this.getParentNodeWithListIndex(e),
        s = e[e.length - 1];
      if (s < 0 || s > t.children.length) throw new y(this.user, "Invalid tree location");
      const r = t.children[s];
      return {
        node: r,
        listIndex: i,
        revealed: n,
        visible: o && r.visible
      };
    }
    getParentNodeWithListIndex(e, t = this.root, i = 0, n = !0, o = !0) {
      const [s, ...r] = e;
      if (s < 0 || s > t.children.length) throw new y(this.user, "Invalid tree location");
      for (let e = 0; e < s; e++) i += t.children[e].renderNodeCount;
      return ((n = n && !t.collapsed), (o = o && t.visible), 0 === r.length ? {
        parentNode: t,
        listIndex: i,
        revealed: n,
        visible: o
      } : this.getParentNodeWithListIndex(r, t.children[s], i + 1, n, o));
    }
    getNode(e = []) {
      return this.getTreeNode(e);
    }
    getNodeLocation(e) {
      const t = [];
      let i = e;
      for (; i.parent;) (t.push(i.parent.children.indexOf(i)), (i = i.parent));
      return t.reverse();
    }
    getParentNodeLocation(e) {
      return 0 === e.length ? void 0 : 1 === e.length ? [] : (0, o.JH)(e)[0];
    }
  }
  var I = i(73046);
  const E = (0, I.CM)("tree-item-expanded", I.lA.chevronDown),
    T = (0, I.CM)("tree-filter-on-type-on", I.lA.listFilter),
    M = (0, I.CM)("tree-filter-on-type-off", I.lA.listSelection),
    A = (0, I.CM)("tree-filter-clear", I.lA.close),
    O = (0, I.CM)("tree-item-loading", I.lA.loading);
  var P,
    R = i(15393),
    F = i(6626),
    B = i(75392),
    V = i(59870),
    W = i(1432),
    H = (i(12812), i(63580));
  class z extends v.kX {
    constructor(e) {
      (super(e.elements.map(e => e.element)), (this.data = e));
    }
  }
  function j(e) {
    return e instanceof v.kX ? new z(e) : e;
  }
  class U {
    constructor(e, t) {
      ((this.modelProvider = e), (this.dnd = t), (this.autoExpandDisposable = a.JT.None));
    }
    getDragURI(e) {
      return this.dnd.getDragURI(e.element);
    }
    getDragLabel(e, t) {
      if (this.dnd.getDragLabel) return this.dnd.getDragLabel(e.map(e => e.element), t);
    }
    onDragStart(e, t) {
      this.dnd.onDragStart && this.dnd.onDragStart(j(e), t);
    }
    onDragOver(e, t, i, n, s = !0) {
      const r = this.dnd.onDragOver(j(e), t && t.element, i, n),
        a = this.autoExpandNode !== t;
      if ((a && (this.autoExpandDisposable.dispose(), (this.autoExpandNode = t)), void 0 === t)) return r;
      if ((a && "boolean" != typeof r && r.autoExpand && (this.autoExpandDisposable = (0, R.Vg)(() => {
        const e = this.modelProvider(),
          i = e.getNodeLocation(t);
        (e.isCollapsed(i) && e.setCollapsed(i, !1), (this.autoExpandNode = void 0));
      }, 500)), "boolean" == typeof r || !r.accept || void 0 === r.bubble || r.feedback)) {
        if (!s) {
          return {
            accept: "boolean" == typeof r ? r : r.accept,
            effect: "boolean" == typeof r ? void 0 : r.effect,
            feedback: [i]
          };
        }
        return r;
      }
      if (1 === r.bubble) {
        const i = this.modelProvider(),
          o = i.getNodeLocation(t),
          s = i.getParentNodeLocation(o),
          r = i.getNode(s),
          a = s && i.getListIndex(s);
        return this.onDragOver(e, r, a, n, !1);
      }
      const l = this.modelProvider(),
        c = l.getNodeLocation(t),
        d = l.getListIndex(c),
        h = l.getListRenderCount(c);
      return Object.assign(Object.assign({}, r), {
        feedback: (0, o.w6)(d, d + h)
      });
    }
    drop(e, t, i, n) {
      (this.autoExpandDisposable.dispose(), (this.autoExpandNode = void 0), this.dnd.drop(j(e), t && t.element, i, n));
    }
    onDragEnd(e) {
      this.dnd.onDragEnd && this.dnd.onDragEnd(e);
    }
  }
  class $ {
    constructor(e) {
      this.delegate = e;
    }
    getHeight(e) {
      return this.delegate.getHeight(e.element);
    }
    getTemplateId(e) {
      return this.delegate.getTemplateId(e.element);
    }
    hasDynamicHeight(e) {
      return (!!this.delegate.hasDynamicHeight && this.delegate.hasDynamicHeight(e.element));
    }
    setDynamicHeight(e, t) {
      this.delegate.setDynamicHeight && this.delegate.setDynamicHeight(e.element, t);
    }
  }
  !(function (e) {
    ((e.None = "none"), (e.OnHover = "onHover"), (e.Always = "always"));
  })(P || (P = {}));
  class K {
    constructor(e, t = []) {
      ((this._elements = t), (this.onDidChange = r.ju.forEach(e, e => (this._elements = e))));
    }
    get elements() {
      return this._elements;
    }
  }
  class q {
    constructor(e, t, i, n, o = {}) {
      ((this.renderer = e), (this.modelProvider = t), (this.activeNodes = n), (this.renderedElements = new Map()), (this.renderedNodes = new Map()), (this.indent = q.DefaultIndent), (this.hideTwistiesOfChildlessElements = !1), (this.shouldRenderIndentGuides = !1), (this.renderedIndentGuides = new F.r()), (this.activeIndentNodes = new Set()), (this.indentGuidesDisposable = a.JT.None), (this.disposables = new a.SL()), (this.templateId = e.templateId), this.updateOptions(o), r.ju.map(i, e => e.node)(this.onDidChangeNodeTwistieState, this, this.disposables), e.onDidChangeTwistieState && e.onDidChangeTwistieState(this.onDidChangeTwistieState, this, this.disposables));
    }
    updateOptions(e = {}) {
      if ((void 0 !== e.indent && (this.indent = (0, V.u)(e.indent, 0, 40)), void 0 !== e.renderIndentGuides)) {
        const t = e.renderIndentGuides !== P.None;
        if (t !== this.shouldRenderIndentGuides && ((this.shouldRenderIndentGuides = t), this.indentGuidesDisposable.dispose(), t)) {
          const e = new a.SL();
          (this.activeNodes.onDidChange(this._onDidChangeActiveNodes, this, e), (this.indentGuidesDisposable = e), this._onDidChangeActiveNodes(this.activeNodes.elements));
        }
      }
      void 0 !== e.hideTwistiesOfChildlessElements && (this.hideTwistiesOfChildlessElements = e.hideTwistiesOfChildlessElements);
    }
    renderTemplate(e) {
      const t = (0, n.R3)(e, (0, n.$)(".monaco-tl-row")),
        i = (0, n.R3)(t, (0, n.$)(".monaco-tl-indent")),
        o = (0, n.R3)(t, (0, n.$)(".monaco-tl-twistie")),
        s = (0, n.R3)(t, (0, n.$)(".monaco-tl-contents")),
        r = this.renderer.renderTemplate(s);
      return {
        container: e,
        indent: i,
        twistie: o,
        indentGuidesDisposable: a.JT.None,
        templateData: r
      };
    }
    renderElement(e, t, i, n) {
      "number" == typeof n && (this.renderedNodes.set(e, {
        templateData: i,
        height: n
      }), this.renderedElements.set(e.element, e));
      const o = q.DefaultIndent + (e.depth - 1) * this.indent;
      ((i.twistie.style.paddingLeft = `${o}px`), (i.indent.style.width = o + this.indent - 16 + "px"), this.renderTwistie(e, i), "number" == typeof n && this.renderIndentGuides(e, i), this.renderer.renderElement(e, t, i.templateData, n));
    }
    disposeElement(e, t, i, n) {
      (i.indentGuidesDisposable.dispose(), this.renderer.disposeElement && this.renderer.disposeElement(e, t, i.templateData, n), "number" == typeof n && (this.renderedNodes.delete(e), this.renderedElements.delete(e.element)));
    }
    disposeTemplate(e) {
      this.renderer.disposeTemplate(e.templateData);
    }
    onDidChangeTwistieState(e) {
      const t = this.renderedElements.get(e);
      t && this.onDidChangeNodeTwistieState(t);
    }
    onDidChangeNodeTwistieState(e) {
      const t = this.renderedNodes.get(e);
      t && (this.renderTwistie(e, t.templateData), this._onDidChangeActiveNodes(this.activeNodes.elements), this.renderIndentGuides(e, t.templateData));
    }
    renderTwistie(e, t) {
      t.twistie.classList.remove(...E.classNamesArray);
      let i = !1;
      (this.renderer.renderTwistie && (i = this.renderer.renderTwistie(e.element, t.twistie)), e.collapsible && (!this.hideTwistiesOfChildlessElements || e.visibleChildrenCount > 0) ? (i || t.twistie.classList.add(...E.classNamesArray), t.twistie.classList.add("collapsible"), t.twistie.classList.toggle("collapsed", e.collapsed)) : t.twistie.classList.remove("collapsible", "collapsed"), e.collapsible ? t.container.setAttribute("aria-expanded", String(!e.collapsed)) : t.container.removeAttribute("aria-expanded"));
    }
    renderIndentGuides(e, t) {
      if (((0, n.PO)(t.indent), t.indentGuidesDisposable.dispose(), !this.shouldRenderIndentGuides)) return;
      const i = new a.SL(),
        o = this.modelProvider();
      let s = e;
      for (;;) {
        const e = o.getNodeLocation(s),
          r = o.getParentNodeLocation(e);
        if (!r) break;
        const l = o.getNode(r),
          c = (0, n.$)(".indent-guide", {
            style: `width: ${this.indent}px`
          });
        (this.activeIndentNodes.has(l) && c.classList.add("active"), 0 === t.indent.childElementCount ? t.indent.appendChild(c) : t.indent.insertBefore(c, t.indent.firstElementChild), this.renderedIndentGuides.add(l, c), i.add((0, a.OF)(() => this.renderedIndentGuides.delete(l, c))), (s = l));
      }
      t.indentGuidesDisposable = i;
    }
    _onDidChangeActiveNodes(e) {
      if (!this.shouldRenderIndentGuides) return;
      const t = new Set(),
        i = this.modelProvider();
      (e.forEach(e => {
        const n = i.getNodeLocation(e);
        try {
          const o = i.getParentNodeLocation(n);
          e.collapsible && e.children.length > 0 && !e.collapsed ? t.add(e) : o && t.add(i.getNode(o));
        } catch (e) {}
      }), this.activeIndentNodes.forEach(e => {
        t.has(e) || this.renderedIndentGuides.forEach(e, e => e.classList.remove("active"));
      }), t.forEach(e => {
        this.activeIndentNodes.has(e) || this.renderedIndentGuides.forEach(e, e => e.classList.add("active"));
      }), (this.activeIndentNodes = t));
    }
    dispose() {
      (this.renderedNodes.clear(), this.renderedElements.clear(), this.indentGuidesDisposable.dispose(), (0, a.B9)(this.disposables));
    }
  }
  q.DefaultIndent = 8;
  class Z {
    constructor(e, t, i) {
      ((this.tree = e), (this.keyboardNavigationLabelProvider = t), (this._filter = i), (this._totalCount = 0), (this._matchCount = 0), (this._pattern = ""), (this._lowercasePattern = ""), (this.disposables = new a.SL()), e.onWillRefilter(this.reset, this, this.disposables));
    }
    get totalCount() {
      return this._totalCount;
    }
    get matchCount() {
      return this._matchCount;
    }
    set pattern(e) {
      ((this._pattern = e), (this._lowercasePattern = e.toLowerCase()));
    }
    filter(e, t) {
      if (this._filter) {
        const i = this._filter.filter(e, t);
        if (this.tree.options.simpleKeyboardNavigation) return i;
        let n;
        if (((n = "boolean" == typeof i ? (i ? 1 : 0) : k(i) ? L(i.visibility) : i), 0 === n)) return !1;
      }
      if ((this._totalCount++, this.tree.options.simpleKeyboardNavigation || !this._pattern)) return (this._matchCount++, {
        data: B.CL.Default,
        visibility: !0
      });
      const i = this.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(e),
        n = Array.isArray(i) ? i : [i];
      for (const e of n) {
        const t = e && e.toString();
        if (void 0 === t) return {
          data: B.CL.Default,
          visibility: !0
        };
        const i = (0, B.EW)(this._pattern, this._lowercasePattern, 0, t, t.toLowerCase(), 0, !0);
        if (i) return (this._matchCount++, 1 === n.length ? {
          data: i,
          visibility: !0
        } : {
          data: {
            label: t,
            score: i
          },
          visibility: !0
        });
      }
      return this.tree.options.filterOnType ? 2 : {
        data: B.CL.Default,
        visibility: !0
      };
    }
    reset() {
      ((this._totalCount = 0), (this._matchCount = 0));
    }
    dispose() {
      (0, a.B9)(this.disposables);
    }
  }
  class G {
    constructor(e, t, i, o, s) {
      ((this.tree = e), (this.view = i), (this.filter = o), (this.keyboardNavigationDelegate = s), (this._enabled = !1), (this._pattern = ""), (this._empty = !1), (this._onDidChangeEmptyState = new r.Q5()), (this.positionClassName = "ne"), (this.automaticKeyboardNavigation = !0), (this.triggered = !1), (this._onDidChangePattern = new r.Q5()), (this.enabledDisposables = new a.SL()), (this.disposables = new a.SL()), (this.domNode = (0, n.$)(`.monaco-list-type-filter.${this.positionClassName}`)), (this.domNode.draggable = !0), this.disposables.add((0, n.nm)(this.domNode, "dragstart", () => this.onDragStart())), (this.messageDomNode = (0, n.R3)(i.getHTMLElement(), (0, n.$)(".monaco-list-type-filter-message"))), (this.labelDomNode = (0, n.R3)(this.domNode, (0, n.$)("span.label"))));
      const l = (0, n.R3)(this.domNode, (0, n.$)(".controls"));
      ((this._filterOnType = !!e.options.filterOnType), (this.filterOnTypeDomNode = (0, n.R3)(l, (0, n.$)("input.filter"))), (this.filterOnTypeDomNode.type = "checkbox"), (this.filterOnTypeDomNode.checked = this._filterOnType), (this.filterOnTypeDomNode.tabIndex = -1), this.updateFilterOnTypeTitleAndIcon(), this.disposables.add((0, n.nm)(this.filterOnTypeDomNode, "input", () => this.onDidChangeFilterOnType())), (this.clearDomNode = (0, n.R3)(l, (0, n.$)("button.clear" + A.cssSelector))), (this.clearDomNode.tabIndex = -1), (this.clearDomNode.title = (0, H.N)("clear", "Clear")), (this.keyboardNavigationEventFilter = e.options.keyboardNavigationEventFilter), t.onDidSplice(this.onDidSpliceModel, this, this.disposables), this.updateOptions(e.options));
    }
    get enabled() {
      return this._enabled;
    }
    get pattern() {
      return this._pattern;
    }
    get filterOnType() {
      return this._filterOnType;
    }
    updateOptions(e) {
      (e.simpleKeyboardNavigation ? this.disable() : this.enable(), void 0 !== e.filterOnType && ((this._filterOnType = !!e.filterOnType), (this.filterOnTypeDomNode.checked = this._filterOnType), this.updateFilterOnTypeTitleAndIcon()), void 0 !== e.automaticKeyboardNavigation && (this.automaticKeyboardNavigation = e.automaticKeyboardNavigation), this.tree.refilter(), this.render(), this.automaticKeyboardNavigation || this.onEventOrInput(""));
    }
    enable() {
      if (this._enabled) return;
      const e = this.enabledDisposables.add(new b.Y(this.view.getHTMLElement(), "keydown")),
        t = r.ju.chain(e.event).filter(e => !(0, l.cK)(e.target) || e.target === this.filterOnTypeDomNode).filter(e => "Dead" !== e.key && !/^Media/.test(e.key)).map(e => new w.y(e)).filter(this.keyboardNavigationEventFilter || (() => !0)).filter(() => this.automaticKeyboardNavigation || this.triggered).filter(e => (this.keyboardNavigationDelegate.mightProducePrintableCharacter(e) && !(18 === e.keyCode || 16 === e.keyCode || 15 === e.keyCode || 17 === e.keyCode)) || ((this.pattern.length > 0 || this.triggered) && (9 === e.keyCode || 1 === e.keyCode) && !e.altKey && !e.ctrlKey && !e.metaKey) || (1 === e.keyCode && (W.dz ? e.altKey && !e.metaKey : e.ctrlKey) && !e.shiftKey)).forEach(e => {
          (e.stopPropagation(), e.preventDefault());
        }).event,
        i = this.enabledDisposables.add(new b.Y(this.clearDomNode, "click"));
      (r.ju.chain(r.ju.any(t, i.event)).event(this.onEventOrInput, this, this.enabledDisposables), (this.filter.pattern = ""), this.tree.refilter(), this.render(), (this._enabled = !0), (this.triggered = !1));
    }
    disable() {
      this._enabled && (this.domNode.remove(), this.enabledDisposables.clear(), this.tree.refilter(), this.render(), (this._enabled = !1), (this.triggered = !1));
    }
    onEventOrInput(e) {
      "string" == typeof e ? this.onInput(e) : e instanceof MouseEvent || 9 === e.keyCode || (1 === e.keyCode && (W.dz ? e.altKey : e.ctrlKey)) ? this.onInput("") : 1 === e.keyCode ? this.onInput(0 === this.pattern.length ? "" : this.pattern.substr(0, this.pattern.length - 1)) : this.onInput(this.pattern + e.browserEvent.key);
    }
    onInput(e) {
      const t = this.view.getHTMLElement();
      (e && !this.domNode.parentElement ? t.append(this.domNode) : !e && this.domNode.parentElement && (this.domNode.remove(), this.tree.domFocus()), (this._pattern = e), this._onDidChangePattern.fire(e), (this.filter.pattern = e), this.tree.refilter(), e && this.tree.focusNext(0, !0, void 0, e => !B.CL.isDefault(e.filterData)));
      const i = this.tree.getFocus();
      if (i.length > 0) {
        const e = i[0];
        null === this.tree.getRelativeTop(e) && this.tree.reveal(e, 0.5);
      }
      (this.render(), e || (this.triggered = !1));
    }
    onDragStart() {
      const e = this.view.getHTMLElement(),
        {
          left: t
        } = (0, n.i)(e),
        i = e.clientWidth,
        o = i / 2,
        s = this.domNode.clientWidth,
        r = new a.SL();
      let l = this.positionClassName;
      const c = () => {
          switch (l) {
            case "nw":
              ((this.domNode.style.top = "4px"), (this.domNode.style.left = "4px"));
              break;
            case "ne":
              ((this.domNode.style.top = "4px"), (this.domNode.style.left = i - s - 6 + "px"));
          }
        },
        d = () => {
          ((this.positionClassName = l), (this.domNode.className = `monaco-list-type-filter ${this.positionClassName}`), (this.domNode.style.top = ""), (this.domNode.style.left = ""), (0, a.B9)(r));
        };
      (c(), this.domNode.classList.remove(l), this.domNode.classList.add("dragging"), r.add((0, a.OF)(() => this.domNode.classList.remove("dragging"))), r.add((0, n.nm)(document, "dragover", e => (e => {
        e.preventDefault();
        const i = e.clientX - t;
        (e.dataTransfer && (e.dataTransfer.dropEffect = "none"), (l = i < o ? "nw" : "ne"), c());
      })(e))), r.add((0, n.nm)(this.domNode, "dragend", () => d())), (_.P$.CurrentDragAndDropData = new _.TN("vscode-ui")), r.add((0, a.OF)(() => (_.P$.CurrentDragAndDropData = void 0))));
    }
    onDidSpliceModel() {
      this._enabled && 0 !== this.pattern.length && (this.tree.refilter(), this.render());
    }
    onDidChangeFilterOnType() {
      (this.tree.updateOptions({
        filterOnType: this.filterOnTypeDomNode.checked
      }), this.tree.refilter(), this.tree.domFocus(), this.render(), this.updateFilterOnTypeTitleAndIcon());
    }
    updateFilterOnTypeTitleAndIcon() {
      this.filterOnType ? (this.filterOnTypeDomNode.classList.remove(...M.classNamesArray), this.filterOnTypeDomNode.classList.add(...T.classNamesArray), (this.filterOnTypeDomNode.title = (0, H.N)("disable filter on type", "Disable Filter on Type"))) : (this.filterOnTypeDomNode.classList.remove(...T.classNamesArray), this.filterOnTypeDomNode.classList.add(...M.classNamesArray), (this.filterOnTypeDomNode.title = (0, H.N)("enable filter on type", "Enable Filter on Type")));
    }
    render() {
      const e = this.filter.totalCount > 0 && 0 === this.filter.matchCount;
      (this.pattern && this.tree.options.filterOnType && e ? ((this.messageDomNode.textContent = (0, H.N)("empty", "No elements found")), (this._empty = !0)) : ((this.messageDomNode.innerText = ""), (this._empty = !1)), this.domNode.classList.toggle("no-matches", e), (this.domNode.title = (0, H.N)("found", "Matched {0} out of {1} elements", this.filter.matchCount, this.filter.totalCount)), (this.labelDomNode.textContent = this.pattern.length > 16 ? "…" + this.pattern.substr(this.pattern.length - 16) : this.pattern), this._onDidChangeEmptyState.fire(this._empty));
    }
    shouldAllowFocus(e) {
      return (!(this.enabled && this.pattern && !this.filterOnType) || (this.filter.totalCount > 0 && this.filter.matchCount <= 1) || !B.CL.isDefault(e.filterData));
    }
    dispose() {
      (this._enabled && (this.domNode.remove(), this.enabledDisposables.dispose(), (this._enabled = !1), (this.triggered = !1)), this._onDidChangePattern.dispose(), (0, a.B9)(this.disposables));
    }
  }
  function Y(e) {
    let t = m.Unknown;
    return ((0, n.uU)(e.browserEvent.target, "monaco-tl-twistie", "monaco-tl-row") ? (t = m.Twistie) : (0, n.uU)(e.browserEvent.target, "monaco-tl-contents", "monaco-tl-row") && (t = m.Element), {
      browserEvent: e.browserEvent,
      element: e.element ? e.element.element : null,
      target: t
    });
  }
  function Q(e, t) {
    (t(e), e.children.forEach(e => Q(e, t)));
  }
  class X {
    constructor(e, t) {
      ((this.getFirstViewElementWithTrait = e), (this.identityProvider = t), (this.nodes = []), (this._onDidChange = new r.Q5()), (this.onDidChange = this._onDidChange.event));
    }
    get nodeSet() {
      return (this._nodeSet || (this._nodeSet = this.createNodeSet()), this._nodeSet);
    }
    set(e, t) {
      var i;
      (!(null === (i = t) || void 0 === i ? void 0 : i.__forceEvent) && (0, o.fS)(this.nodes, e)) || this._set(e, !1, t);
    }
    _set(e, t, i) {
      if (((this.nodes = [...e]), (this.elements = void 0), (this._nodeSet = void 0), !t)) {
        const e = this;
        this._onDidChange.fire({
          get elements() {
            return e.get();
          },
          browserEvent: i
        });
      }
    }
    get() {
      return (this.elements || (this.elements = this.nodes.map(e => e.element)), [...this.elements]);
    }
    getNodes() {
      return this.nodes;
    }
    has(e) {
      return this.nodeSet.has(e);
    }
    onDidModelSplice({
      insertedNodes: e,
      deletedNodes: t
    }) {
      if (!this.identityProvider) {
        const e = this.createNodeSet(),
          i = t => e.delete(t);
        return (t.forEach(e => Q(e, i)), void this.set([...e.values()]));
      }
      const i = new Set(),
        n = e => i.add(this.identityProvider.getId(e.element).toString());
      t.forEach(e => Q(e, n));
      const o = new Map(),
        s = e => o.set(this.identityProvider.getId(e.element).toString(), e);
      e.forEach(e => Q(e, s));
      const r = [];
      for (const e of this.nodes) {
        const t = this.identityProvider.getId(e.element).toString();
        if (i.has(t)) {
          const e = o.get(t);
          e && r.push(e);
        } else r.push(e);
      }
      if (this.nodes.length > 0 && 0 === r.length) {
        const e = this.getFirstViewElementWithTrait();
        e && r.push(e);
      }
      this._set(r, !0);
    }
    createNodeSet() {
      const e = new Set();
      for (const t of this.nodes) e.add(t);
      return e;
    }
  }
  class J extends l.sx {
    constructor(e, t) {
      (super(e), (this.tree = t));
    }
    onViewPointer(e) {
      if ((0, l.cK)(e.browserEvent.target) || (0, l.hD)(e.browserEvent.target)) return;
      const t = e.element;
      if (!t) return super.onViewPointer(e);
      if (this.isSelectionRangeChangeEvent(e) || this.isSelectionSingleChangeEvent(e)) return super.onViewPointer(e);
      const i = e.browserEvent.target,
        n = i.classList.contains("monaco-tl-twistie") || (i.classList.contains("monaco-icon-label") && i.classList.contains("folder-icon") && e.browserEvent.offsetX < 16);
      let o = !1;
      if (((o = "function" == typeof this.tree.expandOnlyOnTwistieClick ? this.tree.expandOnlyOnTwistieClick(t.element) : !!this.tree.expandOnlyOnTwistieClick), o && !n && 2 !== e.browserEvent.detail)) return super.onViewPointer(e);
      if (!this.tree.expandOnDoubleClick && 2 === e.browserEvent.detail) return super.onViewPointer(e);
      if (t.collapsible) {
        const i = this.tree.model,
          s = i.getNodeLocation(t),
          r = e.browserEvent.altKey;
        if ((this.tree.setFocus([s]), i.setCollapsed(s, void 0, r), o && n)) return;
      }
      super.onViewPointer(e);
    }
    onDoubleClick(e) {
      !e.browserEvent.target.classList.contains("monaco-tl-twistie") && this.tree.expandOnDoubleClick && super.onDoubleClick(e);
    }
  }
  class ee extends l.aV {
    constructor(e, t, i, n, o, s, r, a) {
      (super(e, t, i, n, a), (this.focusTrait = o), (this.selectionTrait = s), (this.anchorTrait = r));
    }
    createMouseController(e) {
      return new J(this, e.tree);
    }
    splice(e, t, i = []) {
      if ((super.splice(e, t, i), 0 === i.length)) return;
      const n = [],
        s = [];
      let r;
      (i.forEach((t, i) => {
        (this.focusTrait.has(t) && n.push(e + i), this.selectionTrait.has(t) && s.push(e + i), this.anchorTrait.has(t) && (r = e + i));
      }), n.length > 0 && super.setFocus((0, o.EB)([...super.getFocus(), ...n])), s.length > 0 && super.setSelection((0, o.EB)([...super.getSelection(), ...s])), "number" == typeof r && super.setAnchor(r));
    }
    setFocus(e, t, i = !1) {
      (super.setFocus(e, t), i || this.focusTrait.set(e.map(e => this.element(e)), t));
    }
    setSelection(e, t, i = !1) {
      (super.setSelection(e, t), i || this.selectionTrait.set(e.map(e => this.element(e)), t));
    }
    setAnchor(e, t = !1) {
      (super.setAnchor(e), t || (void 0 === e ? this.anchorTrait.set([]) : this.anchorTrait.set([this.element(e)])));
    }
  }
  class te {
    constructor(e, t, i, o, s = {}) {
      ((this._options = s), (this.eventBufferer = new r.E7()), (this.disposables = new a.SL()), (this._onWillRefilter = new r.Q5()), (this.onWillRefilter = this._onWillRefilter.event), (this._onDidUpdateOptions = new r.Q5()));
      const c = new $(i),
        d = new r.ZD(),
        h = new r.ZD(),
        u = new K(h.event);
      this.renderers = o.map(e => new q(e, () => this.model, d.event, u, s));
      for (let e of this.renderers) this.disposables.add(e);
      let g;
      var p, f;
      (s.keyboardNavigationLabelProvider && ((g = new Z(this, s.keyboardNavigationLabelProvider, s.filter)), (s = Object.assign(Object.assign({}, s), {
        filter: g
      })), this.disposables.add(g)), (this.focus = new X(() => this.view.getFocusedElements()[0], s.identityProvider)), (this.selection = new X(() => this.view.getSelectedElements()[0], s.identityProvider)), (this.anchor = new X(() => this.view.getAnchorElement(), s.identityProvider)), (this.view = new ee(e, t, c, this.renderers, this.focus, this.selection, this.anchor, Object.assign(Object.assign({}, ((p = () => this.model), (f = s) && Object.assign(Object.assign({}, f), {
        identityProvider: f.identityProvider && {
          getId: e => f.identityProvider.getId(e.element)
        },
        dnd: f.dnd && new U(p, f.dnd),
        multipleSelectionController: f.multipleSelectionController && {
          isSelectionSingleChangeEvent: e => f.multipleSelectionController.isSelectionSingleChangeEvent(Object.assign(Object.assign({}, e), {
            element: e.element
          })),
          isSelectionRangeChangeEvent: e => f.multipleSelectionController.isSelectionRangeChangeEvent(Object.assign(Object.assign({}, e), {
            element: e.element
          }))
        },
        accessibilityProvider: f.accessibilityProvider && Object.assign(Object.assign({}, f.accessibilityProvider), {
          getSetSize(e) {
            const t = p(),
              i = t.getNodeLocation(e),
              n = t.getParentNodeLocation(i);
            return t.getNode(n).visibleChildrenCount;
          },
          getPosInSet: e => e.visibleChildIndex + 1,
          isChecked: f.accessibilityProvider && f.accessibilityProvider.isChecked ? e => f.accessibilityProvider.isChecked(e.element) : void 0,
          getRole: f.accessibilityProvider && f.accessibilityProvider.getRole ? e => f.accessibilityProvider.getRole(e.element) : () => "treeitem",
          getAriaLabel: e => f.accessibilityProvider.getAriaLabel(e.element),
          getWidgetAriaLabel: () => f.accessibilityProvider.getWidgetAriaLabel(),
          getWidgetRole: f.accessibilityProvider && f.accessibilityProvider.getWidgetRole ? () => f.accessibilityProvider.getWidgetRole() : () => "tree",
          getAriaLevel: f.accessibilityProvider && f.accessibilityProvider.getAriaLevel ? e => f.accessibilityProvider.getAriaLevel(e.element) : e => e.depth,
          getActiveDescendantId: f.accessibilityProvider.getActiveDescendantId && (e => f.accessibilityProvider.getActiveDescendantId(e.element))
        }),
        keyboardNavigationLabelProvider: f.keyboardNavigationLabelProvider && Object.assign(Object.assign({}, f.keyboardNavigationLabelProvider), {
          getKeyboardNavigationLabel: e => f.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(e.element)
        }),
        enableKeyboardNavigation: f.simpleKeyboardNavigation
      }))), {
        tree: this
      }))), (this.model = this.createModel(e, this.view, s)), (d.input = this.model.onDidChangeCollapseState));
      const m = r.ju.forEach(this.model.onDidSplice, e => {
        this.eventBufferer.bufferEvents(() => {
          (this.focus.onDidModelSplice(e), this.selection.onDidModelSplice(e));
        });
      });
      if ((m(() => null, null, this.disposables), (h.input = r.ju.chain(r.ju.any(m, this.focus.onDidChange, this.selection.onDidChange)).debounce(() => null, 0).map(() => {
        const e = new Set();
        for (const t of this.focus.getNodes()) e.add(t);
        for (const t of this.selection.getNodes()) e.add(t);
        return [...e.values()];
      }).event), !1 !== s.keyboardSupport)) {
        const e = r.ju.chain(this.view.onKeyDown).filter(e => !(0, l.cK)(e.target)).map(e => new w.y(e));
        (e.filter(e => 15 === e.keyCode).on(this.onLeftArrow, this, this.disposables), e.filter(e => 17 === e.keyCode).on(this.onRightArrow, this, this.disposables), e.filter(e => 10 === e.keyCode).on(this.onSpace, this, this.disposables));
      }
      if (s.keyboardNavigationLabelProvider) {
        const e = s.keyboardNavigationDelegate || l.WK;
        ((this.typeFilterController = new G(this, this.model, this.view, g, e)), (this.focusNavigationFilter = e => this.typeFilterController.shouldAllowFocus(e)), this.disposables.add(this.typeFilterController));
      }
      ((this.styleElement = (0, n.dS)(this.view.getHTMLElement())), this.getHTMLElement().classList.toggle("always", this._options.renderIndentGuides === P.Always));
    }
    get onDidChangeFocus() {
      return this.eventBufferer.wrapEvent(this.focus.onDidChange);
    }
    get onDidChangeSelection() {
      return this.eventBufferer.wrapEvent(this.selection.onDidChange);
    }
    get onMouseDblClick() {
      return r.ju.map(this.view.onMouseDblClick, Y);
    }
    get onPointer() {
      return r.ju.map(this.view.onPointer, Y);
    }
    get onDidFocus() {
      return this.view.onDidFocus;
    }
    get onDidChangeCollapseState() {
      return this.model.onDidChangeCollapseState;
    }
    get expandOnDoubleClick() {
      return (void 0 === this._options.expandOnDoubleClick || this._options.expandOnDoubleClick);
    }
    get expandOnlyOnTwistieClick() {
      return (void 0 === this._options.expandOnlyOnTwistieClick || this._options.expandOnlyOnTwistieClick);
    }
    get onDidDispose() {
      return this.view.onDidDispose;
    }
    updateOptions(e = {}) {
      this._options = Object.assign(Object.assign({}, this._options), e);
      for (const t of this.renderers) t.updateOptions(e);
      (this.view.updateOptions(Object.assign(Object.assign({}, this._options), {
        enableKeyboardNavigation: this._options.simpleKeyboardNavigation
      })), this.typeFilterController && this.typeFilterController.updateOptions(this._options), this._onDidUpdateOptions.fire(this._options), this.getHTMLElement().classList.toggle("always", this._options.renderIndentGuides === P.Always));
    }
    get options() {
      return this._options;
    }
    getHTMLElement() {
      return this.view.getHTMLElement();
    }
    get scrollTop() {
      return this.view.scrollTop;
    }
    set scrollTop(e) {
      this.view.scrollTop = e;
    }
    domFocus() {
      this.view.domFocus();
    }
    layout(e, t) {
      this.view.layout(e, t);
    }
    style(e) {
      const t = `.${this.view.domId}`,
        i = [];
      (e.treeIndentGuidesStroke && (i.push(`.monaco-list${t}:hover .monaco-tl-indent > .indent-guide, .monaco-list${t}.always .monaco-tl-indent > .indent-guide  { border-color: ${e.treeIndentGuidesStroke.transparent(0.4)}; }`), i.push(`.monaco-list${t} .monaco-tl-indent > .indent-guide.active { border-color: ${e.treeIndentGuidesStroke}; }`)), (this.styleElement.textContent = i.join("\n")), this.view.style(e));
    }
    collapse(e, t = !1) {
      return this.model.setCollapsed(e, !0, t);
    }
    expand(e, t = !1) {
      return this.model.setCollapsed(e, !1, t);
    }
    isCollapsible(e) {
      return this.model.isCollapsible(e);
    }
    setCollapsible(e, t) {
      return this.model.setCollapsible(e, t);
    }
    isCollapsed(e) {
      return this.model.isCollapsed(e);
    }
    refilter() {
      (this._onWillRefilter.fire(void 0), this.model.refilter());
    }
    setSelection(e, t) {
      const i = e.map(e => this.model.getNode(e));
      this.selection.set(i, t);
      const n = e.map(e => this.model.getListIndex(e)).filter(e => e > -1);
      this.view.setSelection(n, t, !0);
    }
    getSelection() {
      return this.selection.get();
    }
    setFocus(e, t) {
      const i = e.map(e => this.model.getNode(e));
      this.focus.set(i, t);
      const n = e.map(e => this.model.getListIndex(e)).filter(e => e > -1);
      this.view.setFocus(n, t, !0);
    }
    focusNext(e = 1, t = !1, i, n = this.focusNavigationFilter) {
      this.view.focusNext(e, t, i, n);
    }
    getFocus() {
      return this.focus.get();
    }
    reveal(e, t) {
      this.model.expandTo(e);
      const i = this.model.getListIndex(e);
      -1 !== i && this.view.reveal(i, t);
    }
    getRelativeTop(e) {
      const t = this.model.getListIndex(e);
      return -1 === t ? null : this.view.getRelativeTop(t);
    }
    onLeftArrow(e) {
      (e.preventDefault(), e.stopPropagation());
      const t = this.view.getFocusedElements();
      if (0 === t.length) return;
      const i = t[0],
        n = this.model.getNodeLocation(i);
      if (!this.model.setCollapsed(n, !0)) {
        const e = this.model.getParentNodeLocation(n);
        if (!e) return;
        const t = this.model.getListIndex(e);
        (this.view.reveal(t), this.view.setFocus([t]));
      }
    }
    onRightArrow(e) {
      (e.preventDefault(), e.stopPropagation());
      const t = this.view.getFocusedElements();
      if (0 === t.length) return;
      const i = t[0],
        n = this.model.getNodeLocation(i);
      if (!this.model.setCollapsed(n, !1)) {
        if (!i.children.some(e => e.visible)) return;
        const [e] = this.view.getFocus(),
          t = e + 1;
        (this.view.reveal(t), this.view.setFocus([t]));
      }
    }
    onSpace(e) {
      (e.preventDefault(), e.stopPropagation());
      const t = this.view.getFocusedElements();
      if (0 === t.length) return;
      const i = t[0],
        n = this.model.getNodeLocation(i),
        o = e.browserEvent.altKey;
      this.model.setCollapsed(n, void 0, o);
    }
    dispose() {
      ((0, a.B9)(this.disposables), this.view.dispose());
    }
  }
  class ie {
    constructor(e, t, i = {}) {
      ((this.user = e), (this.rootRef = null), (this.nodes = new Map()), (this.nodesByIdentity = new Map()), (this.model = new D(e, t, null, i)), (this.onDidSplice = this.model.onDidSplice), (this.onDidChangeCollapseState = this.model.onDidChangeCollapseState), (this.onDidChangeRenderNodeCount = this.model.onDidChangeRenderNodeCount), i.sorter && (this.sorter = {
        compare: (e, t) => i.sorter.compare(e.element, t.element)
      }), (this.identityProvider = i.identityProvider));
    }
    setChildren(e, t = S.$.empty(), i = {}) {
      const n = this.getElementLocation(e);
      this._setChildren(n, this.preserveCollapseState(t), i);
    }
    _setChildren(e, t = S.$.empty(), i) {
      const n = new Set(),
        o = new Set();
      this.model.splice([...e, 0], Number.MAX_VALUE, t, Object.assign(Object.assign({}, i), {
        onDidCreateNode: e => {
          var t;
          if (null === e.element) return;
          const s = e;
          if ((n.add(s.element), this.nodes.set(s.element, s), this.identityProvider)) {
            const e = this.identityProvider.getId(s.element).toString();
            (o.add(e), this.nodesByIdentity.set(e, s));
          }
          null === (t = i.onDidCreateNode) || void 0 === t || t.call(i, s);
        },
        onDidDeleteNode: e => {
          var t;
          if (null === e.element) return;
          const s = e;
          if ((n.has(s.element) || this.nodes.delete(s.element), this.identityProvider)) {
            const e = this.identityProvider.getId(s.element).toString();
            o.has(e) || this.nodesByIdentity.delete(e);
          }
          null === (t = i.onDidDeleteNode) || void 0 === t || t.call(i, s);
        }
      }));
    }
    preserveCollapseState(e = S.$.empty()) {
      return (this.sorter && (e = [...e].sort(this.sorter.compare.bind(this.sorter))), S.$.map(e, e => {
        let t = this.nodes.get(e.element);
        if (!t && this.identityProvider) {
          const i = this.identityProvider.getId(e.element).toString();
          t = this.nodesByIdentity.get(i);
        }
        if (!t) return Object.assign(Object.assign({}, e), {
          children: this.preserveCollapseState(e.children)
        });
        const i = "boolean" == typeof e.collapsible ? e.collapsible : t.collapsible,
          n = void 0 !== e.collapsed ? e.collapsed : t.collapsed;
        return Object.assign(Object.assign({}, e), {
          collapsible: i,
          collapsed: n,
          children: this.preserveCollapseState(e.children)
        });
      }));
    }
    rerender(e) {
      const t = this.getElementLocation(e);
      this.model.rerender(t);
    }
    has(e) {
      return this.nodes.has(e);
    }
    getListIndex(e) {
      const t = this.getElementLocation(e);
      return this.model.getListIndex(t);
    }
    getListRenderCount(e) {
      const t = this.getElementLocation(e);
      return this.model.getListRenderCount(t);
    }
    isCollapsible(e) {
      const t = this.getElementLocation(e);
      return this.model.isCollapsible(t);
    }
    setCollapsible(e, t) {
      const i = this.getElementLocation(e);
      return this.model.setCollapsible(i, t);
    }
    isCollapsed(e) {
      const t = this.getElementLocation(e);
      return this.model.isCollapsed(t);
    }
    setCollapsed(e, t, i) {
      const n = this.getElementLocation(e);
      return this.model.setCollapsed(n, t, i);
    }
    expandTo(e) {
      const t = this.getElementLocation(e);
      this.model.expandTo(t);
    }
    refilter() {
      this.model.refilter();
    }
    getNode(e = null) {
      if (null === e) return this.model.getNode(this.model.rootRef);
      const t = this.nodes.get(e);
      if (!t) throw new y(this.user, `Tree element not found: ${e}`);
      return t;
    }
    getNodeLocation(e) {
      return e.element;
    }
    getParentNodeLocation(e) {
      if (null === e) throw new y(this.user, "Invalid getParentNodeLocation call");
      const t = this.nodes.get(e);
      if (!t) throw new y(this.user, `Tree element not found: ${e}`);
      const i = this.model.getNodeLocation(t),
        n = this.model.getParentNodeLocation(i);
      return this.model.getNode(n).element;
    }
    getElementLocation(e) {
      if (null === e) return [];
      const t = this.nodes.get(e);
      if (!t) throw new y(this.user, `Tree element not found: ${e}`);
      return this.model.getNodeLocation(t);
    }
  }
  function ne(e) {
    return {
      element: {
        elements: [e.element],
        incompressible: e.incompressible || !1
      },
      children: S.$.map(S.$.from(e.children), ne),
      collapsible: e.collapsible,
      collapsed: e.collapsed
    };
  }
  function oe(e) {
    const t = [e.element],
      i = e.incompressible || !1;
    let n, o;
    for (; ([o, n] = S.$.consume(S.$.from(e.children), 2)), 1 === o.length && !o[0].incompressible;) ((e = o[0]), t.push(e.element));
    return {
      element: {
        elements: t,
        incompressible: i
      },
      children: S.$.map(S.$.concat(o, n), oe),
      collapsible: e.collapsible,
      collapsed: e.collapsed
    };
  }
  function se(e, t = 0) {
    let i;
    return ((i = t < e.element.elements.length - 1 ? [se(e, t + 1)] : S.$.map(S.$.from(e.children), e => se(e, 0))), 0 === t && e.element.incompressible ? {
      element: e.element.elements[t],
      children: i,
      incompressible: !0,
      collapsible: e.collapsible,
      collapsed: e.collapsed
    } : {
      element: e.element.elements[t],
      children: i,
      collapsible: e.collapsible,
      collapsed: e.collapsed
    });
  }
  function re(e) {
    return se(e, 0);
  }
  function ae(e, t, i) {
    return e.element === t ? Object.assign(Object.assign({}, e), {
      children: i
    }) : Object.assign(Object.assign({}, e), {
      children: S.$.map(S.$.from(e.children), e => ae(e, t, i))
    });
  }
  class le {
    constructor(e, t, i = {}) {
      ((this.user = e), (this.rootRef = null), (this.nodes = new Map()), (this.model = new ie(e, t, i)), (this.enabled = void 0 === i.compressionEnabled || i.compressionEnabled), (this.identityProvider = i.identityProvider));
    }
    get onDidSplice() {
      return this.model.onDidSplice;
    }
    get onDidChangeCollapseState() {
      return this.model.onDidChangeCollapseState;
    }
    get onDidChangeRenderNodeCount() {
      return this.model.onDidChangeRenderNodeCount;
    }
    setChildren(e, t = S.$.empty(), i) {
      const n = i.diffIdentityProvider && ((o = i.diffIdentityProvider), {
        getId: e => e.elements.map(e => o.getId(e).toString()).join("\0")
      });
      var o;
      if (null === e) {
        const e = S.$.map(t, this.enabled ? oe : ne);
        return void this._setChildren(null, e, {
          diffIdentityProvider: n,
          diffDepth: 1 / 0
        });
      }
      const s = this.nodes.get(e);
      if (!s) throw new Error("Unknown compressed tree node");
      const r = this.model.getNode(s),
        a = this.model.getParentNodeLocation(s),
        l = this.model.getNode(a),
        c = ae(re(r), e, t),
        d = (this.enabled ? oe : ne)(c),
        h = l.children.map(e => (e === r ? d : e));
      this._setChildren(l.element, h, {
        diffIdentityProvider: n,
        diffDepth: r.depth - l.depth
      });
    }
    setCompressionEnabled(e) {
      if (e === this.enabled) return;
      this.enabled = e;
      const t = this.model.getNode().children,
        i = S.$.map(t, re),
        n = S.$.map(i, e ? oe : ne);
      this._setChildren(null, n, {
        diffIdentityProvider: this.identityProvider,
        diffDepth: 1 / 0
      });
    }
    _setChildren(e, t, i) {
      const n = new Set();
      this.model.setChildren(e, t, Object.assign(Object.assign({}, i), {
        onDidCreateNode: e => {
          for (const t of e.element.elements) (n.add(t), this.nodes.set(t, e.element));
        },
        onDidDeleteNode: e => {
          for (const t of e.element.elements) n.has(t) || this.nodes.delete(t);
        }
      }));
    }
    has(e) {
      return this.nodes.has(e);
    }
    getListIndex(e) {
      const t = this.getCompressedNode(e);
      return this.model.getListIndex(t);
    }
    getListRenderCount(e) {
      const t = this.getCompressedNode(e);
      return this.model.getListRenderCount(t);
    }
    getNode(e) {
      if (void 0 === e) return this.model.getNode();
      const t = this.getCompressedNode(e);
      return this.model.getNode(t);
    }
    getNodeLocation(e) {
      const t = this.model.getNodeLocation(e);
      return null === t ? null : t.elements[t.elements.length - 1];
    }
    getParentNodeLocation(e) {
      const t = this.getCompressedNode(e),
        i = this.model.getParentNodeLocation(t);
      return null === i ? null : i.elements[i.elements.length - 1];
    }
    isCollapsible(e) {
      const t = this.getCompressedNode(e);
      return this.model.isCollapsible(t);
    }
    setCollapsible(e, t) {
      const i = this.getCompressedNode(e);
      return this.model.setCollapsible(i, t);
    }
    isCollapsed(e) {
      const t = this.getCompressedNode(e);
      return this.model.isCollapsed(t);
    }
    setCollapsed(e, t, i) {
      const n = this.getCompressedNode(e);
      return this.model.setCollapsed(n, t, i);
    }
    expandTo(e) {
      const t = this.getCompressedNode(e);
      this.model.expandTo(t);
    }
    rerender(e) {
      const t = this.getCompressedNode(e);
      this.model.rerender(t);
    }
    refilter() {
      this.model.refilter();
    }
    getCompressedNode(e) {
      if (null === e) return null;
      const t = this.nodes.get(e);
      if (!t) throw new y(this.user, `Tree element not found: ${e}`);
      return t;
    }
  }
  const ce = e => e[e.length - 1];
  class de {
    constructor(e, t) {
      ((this.unwrapper = e), (this.node = t));
    }
    get element() {
      return null === this.node.element ? null : this.unwrapper(this.node.element);
    }
    get children() {
      return this.node.children.map(e => new de(this.unwrapper, e));
    }
    get depth() {
      return this.node.depth;
    }
    get visibleChildrenCount() {
      return this.node.visibleChildrenCount;
    }
    get visibleChildIndex() {
      return this.node.visibleChildIndex;
    }
    get collapsible() {
      return this.node.collapsible;
    }
    get collapsed() {
      return this.node.collapsed;
    }
    get visible() {
      return this.node.visible;
    }
    get filterData() {
      return this.node.filterData;
    }
  }
  class he {
    constructor(e, t, i = {}) {
      ((this.rootRef = null), (this.elementMapper = i.elementMapper || ce));
      const n = e => this.elementMapper(e.elements);
      ((this.nodeMapper = new C(e => new de(n, e))), (this.model = new le(e, (function (e, t) {
        return {
          splice(i, n, o) {
            t.splice(i, n, o.map(t => e.map(t)));
          },
          updateElementHeight(e, i) {
            t.updateElementHeight(e, i);
          }
        };
      })(this.nodeMapper, t), (function (e, t) {
        return Object.assign(Object.assign({}, t), {
          identityProvider: t.identityProvider && {
            getId: i => t.identityProvider.getId(e(i))
          },
          sorter: t.sorter && {
            compare: (e, i) => t.sorter.compare(e.elements[0], i.elements[0])
          },
          filter: t.filter && {
            filter: (i, n) => t.filter.filter(e(i), n)
          }
        });
      })(n, i))));
    }
    get onDidSplice() {
      return r.ju.map(this.model.onDidSplice, ({
        insertedNodes: e,
        deletedNodes: t
      }) => ({
        insertedNodes: e.map(e => this.nodeMapper.map(e)),
        deletedNodes: t.map(e => this.nodeMapper.map(e))
      }));
    }
    get onDidChangeCollapseState() {
      return r.ju.map(this.model.onDidChangeCollapseState, ({
        node: e,
        deep: t
      }) => ({
        node: this.nodeMapper.map(e),
        deep: t
      }));
    }
    get onDidChangeRenderNodeCount() {
      return r.ju.map(this.model.onDidChangeRenderNodeCount, e => this.nodeMapper.map(e));
    }
    setChildren(e, t = S.$.empty(), i = {}) {
      this.model.setChildren(e, t, i);
    }
    setCompressionEnabled(e) {
      this.model.setCompressionEnabled(e);
    }
    has(e) {
      return this.model.has(e);
    }
    getListIndex(e) {
      return this.model.getListIndex(e);
    }
    getListRenderCount(e) {
      return this.model.getListRenderCount(e);
    }
    getNode(e) {
      return this.nodeMapper.map(this.model.getNode(e));
    }
    getNodeLocation(e) {
      return e.element;
    }
    getParentNodeLocation(e) {
      return this.model.getParentNodeLocation(e);
    }
    isCollapsible(e) {
      return this.model.isCollapsible(e);
    }
    setCollapsible(e, t) {
      return this.model.setCollapsible(e, t);
    }
    isCollapsed(e) {
      return this.model.isCollapsed(e);
    }
    setCollapsed(e, t, i) {
      return this.model.setCollapsed(e, t, i);
    }
    expandTo(e) {
      return this.model.expandTo(e);
    }
    rerender(e) {
      return this.model.rerender(e);
    }
    refilter() {
      return this.model.refilter();
    }
    getCompressedTreeNode(e = null) {
      return this.model.getNode(e);
    }
  }
  var ue = i(49898),
    ge = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    };
  class pe extends te {
    constructor(e, t, i, n, o = {}) {
      super(e, t, i, n, o);
    }
    get onDidChangeCollapseState() {
      return this.model.onDidChangeCollapseState;
    }
    setChildren(e, t = S.$.empty(), i) {
      this.model.setChildren(e, t, i);
    }
    rerender(e) {
      void 0 !== e ? this.model.rerender(e) : this.view.rerender();
    }
    hasElement(e) {
      return this.model.has(e);
    }
    createModel(e, t, i) {
      return new ie(e, t, i);
    }
  }
  class fe {
    constructor(e, t) {
      ((this._compressedTreeNodeProvider = e), (this.renderer = t), (this.templateId = t.templateId), t.onDidChangeTwistieState && (this.onDidChangeTwistieState = t.onDidChangeTwistieState));
    }
    get compressedTreeNodeProvider() {
      return this._compressedTreeNodeProvider();
    }
    renderTemplate(e) {
      return {
        compressedTreeNode: void 0,
        data: this.renderer.renderTemplate(e)
      };
    }
    renderElement(e, t, i, n) {
      const o = this.compressedTreeNodeProvider.getCompressedTreeNode(e.element);
      1 === o.element.elements.length ? ((i.compressedTreeNode = void 0), this.renderer.renderElement(e, t, i.data, n)) : ((i.compressedTreeNode = o), this.renderer.renderCompressedElements(o, t, i.data, n));
    }
    disposeElement(e, t, i, n) {
      i.compressedTreeNode ? this.renderer.disposeCompressedElements && this.renderer.disposeCompressedElements(i.compressedTreeNode, t, i.data, n) : this.renderer.disposeElement && this.renderer.disposeElement(e, t, i.data, n);
    }
    disposeTemplate(e) {
      this.renderer.disposeTemplate(e.data);
    }
    renderTwistie(e, t) {
      return (!!this.renderer.renderTwistie && this.renderer.renderTwistie(e, t));
    }
  }
  ge([ue.H], fe.prototype, "compressedTreeNodeProvider", null);
  class me extends pe {
    constructor(e, t, i, n, o = {}) {
      const s = () => this;
      super(e, t, i, n.map(e => new fe(s, e)), (function (e, t) {
        return (t && Object.assign(Object.assign({}, t), {
          keyboardNavigationLabelProvider: t.keyboardNavigationLabelProvider && {
            getKeyboardNavigationLabel(i) {
              let n;
              try {
                n = e().getCompressedTreeNode(i);
              } catch (e) {
                return t.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(i);
              }
              return 1 === n.element.elements.length ? t.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(i) : t.keyboardNavigationLabelProvider.getCompressedNodeKeyboardNavigationLabel(n.element.elements);
            }
          }
        }));
      })(s, o));
    }
    setChildren(e, t = S.$.empty(), i) {
      this.model.setChildren(e, t, i);
    }
    createModel(e, t, i) {
      return new he(e, t, i);
    }
    updateOptions(e = {}) {
      (super.updateOptions(e), void 0 !== e.compressionEnabled && this.model.setCompressionEnabled(e.compressionEnabled));
    }
    getCompressedTreeNode(e = null) {
      return this.model.getCompressedTreeNode(e);
    }
  }
  var ve = i(17301),
    _e = function (e, t, i, n) {
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
  function be(e) {
    return Object.assign(Object.assign({}, e), {
      children: [],
      refreshPromise: void 0,
      stale: !0,
      slow: !1,
      collapsedByDefault: void 0
    });
  }
  function we(e, t) {
    return !!t.parent && (t.parent === e || we(e, t.parent));
  }
  class ye {
    constructor(e) {
      this.node = e;
    }
    get element() {
      return this.node.element.element;
    }
    get children() {
      return this.node.children.map(e => new ye(e));
    }
    get depth() {
      return this.node.depth;
    }
    get visibleChildrenCount() {
      return this.node.visibleChildrenCount;
    }
    get visibleChildIndex() {
      return this.node.visibleChildIndex;
    }
    get collapsible() {
      return this.node.collapsible;
    }
    get collapsed() {
      return this.node.collapsed;
    }
    get visible() {
      return this.node.visible;
    }
    get filterData() {
      return this.node.filterData;
    }
  }
  class Ce {
    constructor(e, t, i) {
      ((this.renderer = e), (this.nodeMapper = t), (this.onDidChangeTwistieState = i), (this.renderedNodes = new Map()), (this.templateId = e.templateId));
    }
    renderTemplate(e) {
      return {
        templateData: this.renderer.renderTemplate(e)
      };
    }
    renderElement(e, t, i, n) {
      this.renderer.renderElement(this.nodeMapper.map(e), t, i.templateData, n);
    }
    renderTwistie(e, t) {
      return e.slow ? (t.classList.add(...O.classNamesArray), !0) : (t.classList.remove(...O.classNamesArray), !1);
    }
    disposeElement(e, t, i, n) {
      this.renderer.disposeElement && this.renderer.disposeElement(this.nodeMapper.map(e), t, i.templateData, n);
    }
    disposeTemplate(e) {
      this.renderer.disposeTemplate(e.templateData);
    }
    dispose() {
      this.renderedNodes.clear();
    }
  }
  function xe(e) {
    return {
      browserEvent: e.browserEvent,
      elements: e.elements.map(e => e.element)
    };
  }
  function Se(e) {
    return {
      browserEvent: e.browserEvent,
      element: e.element && e.element.element,
      target: e.target
    };
  }
  class ke extends v.kX {
    constructor(e) {
      (super(e.elements.map(e => e.element)), (this.data = e));
    }
  }
  function Le(e) {
    return e instanceof v.kX ? new ke(e) : e;
  }
  class Ne {
    constructor(e) {
      this.dnd = e;
    }
    getDragURI(e) {
      return this.dnd.getDragURI(e.element);
    }
    getDragLabel(e, t) {
      if (this.dnd.getDragLabel) return this.dnd.getDragLabel(e.map(e => e.element), t);
    }
    onDragStart(e, t) {
      this.dnd.onDragStart && this.dnd.onDragStart(Le(e), t);
    }
    onDragOver(e, t, i, n, o = !0) {
      return this.dnd.onDragOver(Le(e), t && t.element, i, n);
    }
    drop(e, t, i, n) {
      this.dnd.drop(Le(e), t && t.element, i, n);
    }
    onDragEnd(e) {
      this.dnd.onDragEnd && this.dnd.onDragEnd(e);
    }
  }
  function De(e) {
    return (e && Object.assign(Object.assign({}, e), {
      collapseByDefault: !0,
      identityProvider: e.identityProvider && {
        getId: t => e.identityProvider.getId(t.element)
      },
      dnd: e.dnd && new Ne(e.dnd),
      multipleSelectionController: e.multipleSelectionController && {
        isSelectionSingleChangeEvent: t => e.multipleSelectionController.isSelectionSingleChangeEvent(Object.assign(Object.assign({}, t), {
          element: t.element
        })),
        isSelectionRangeChangeEvent: t => e.multipleSelectionController.isSelectionRangeChangeEvent(Object.assign(Object.assign({}, t), {
          element: t.element
        }))
      },
      accessibilityProvider: e.accessibilityProvider && Object.assign(Object.assign({}, e.accessibilityProvider), {
        getPosInSet: void 0,
        getSetSize: void 0,
        getRole: e.accessibilityProvider.getRole ? t => e.accessibilityProvider.getRole(t.element) : () => "treeitem",
        isChecked: e.accessibilityProvider.isChecked ? t => {
          var i;
          return !!(null === (i = e.accessibilityProvider) || void 0 === i ? void 0 : i.isChecked(t.element));
        } : void 0,
        getAriaLabel: t => e.accessibilityProvider.getAriaLabel(t.element),
        getWidgetAriaLabel: () => e.accessibilityProvider.getWidgetAriaLabel(),
        getWidgetRole: e.accessibilityProvider.getWidgetRole ? () => e.accessibilityProvider.getWidgetRole() : () => "tree",
        getAriaLevel: e.accessibilityProvider.getAriaLevel && (t => e.accessibilityProvider.getAriaLevel(t.element)),
        getActiveDescendantId: e.accessibilityProvider.getActiveDescendantId && (t => e.accessibilityProvider.getActiveDescendantId(t.element))
      }),
      filter: e.filter && {
        filter: (t, i) => e.filter.filter(t.element, i)
      },
      keyboardNavigationLabelProvider: e.keyboardNavigationLabelProvider && Object.assign(Object.assign({}, e.keyboardNavigationLabelProvider), {
        getKeyboardNavigationLabel: t => e.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(t.element)
      }),
      sorter: void 0,
      expandOnlyOnTwistieClick: void 0 === e.expandOnlyOnTwistieClick ? void 0 : "function" != typeof e.expandOnlyOnTwistieClick ? e.expandOnlyOnTwistieClick : t => e.expandOnlyOnTwistieClick(t.element),
      additionalScrollHeight: e.additionalScrollHeight
    }));
  }
  function Ie(e, t) {
    (t(e), e.children.forEach(e => Ie(e, t)));
  }
  class Ee {
    constructor(e, t, i, n, o, s = {}) {
      ((this.user = e), (this.dataSource = o), (this.nodes = new Map()), (this.subTreeRefreshPromises = new Map()), (this.refreshPromises = new Map()), (this._onDidRender = new r.Q5()), (this._onDidChangeNodeSlowState = new r.Q5()), (this.nodeMapper = new C(e => new ye(e))), (this.disposables = new a.SL()), (this.identityProvider = s.identityProvider), (this.autoExpandSingleChildren = void 0 !== s.autoExpandSingleChildren && s.autoExpandSingleChildren), (this.sorter = s.sorter), (this.collapseByDefault = s.collapseByDefault), (this.tree = this.createTree(e, t, i, n, s)), (this.root = be({
        element: void 0,
        parent: null,
        hasChildren: !0
      })), this.identityProvider && (this.root = Object.assign(Object.assign({}, this.root), {
        id: null
      })), this.nodes.set(null, this.root), this.tree.onDidChangeCollapseState(this._onDidChangeCollapseState, this, this.disposables));
    }
    get onDidChangeFocus() {
      return r.ju.map(this.tree.onDidChangeFocus, xe);
    }
    get onDidChangeSelection() {
      return r.ju.map(this.tree.onDidChangeSelection, xe);
    }
    get onMouseDblClick() {
      return r.ju.map(this.tree.onMouseDblClick, Se);
    }
    get onPointer() {
      return r.ju.map(this.tree.onPointer, Se);
    }
    get onDidFocus() {
      return this.tree.onDidFocus;
    }
    get onDidDispose() {
      return this.tree.onDidDispose;
    }
    createTree(e, t, i, n, o) {
      const s = new $(i),
        r = n.map(e => new Ce(e, this.nodeMapper, this._onDidChangeNodeSlowState.event)),
        a = De(o) || {};
      return new pe(e, t, s, r, a);
    }
    updateOptions(e = {}) {
      this.tree.updateOptions(e);
    }
    getHTMLElement() {
      return this.tree.getHTMLElement();
    }
    get scrollTop() {
      return this.tree.scrollTop;
    }
    set scrollTop(e) {
      this.tree.scrollTop = e;
    }
    domFocus() {
      this.tree.domFocus();
    }
    layout(e, t) {
      this.tree.layout(e, t);
    }
    style(e) {
      this.tree.style(e);
    }
    getInput() {
      return this.root.element;
    }
    setInput(e, t) {
      return _e(this, void 0, void 0, function* () {
        (this.refreshPromises.forEach(e => e.cancel()), this.refreshPromises.clear(), (this.root.element = e));
        const i = t && {
          viewState: t,
          focus: [],
          selection: []
        };
        (yield this._updateChildren(e, !0, !1, i), i && (this.tree.setFocus(i.focus), this.tree.setSelection(i.selection)), t && "number" == typeof t.scrollTop && (this.scrollTop = t.scrollTop));
      });
    }
    _updateChildren(e = this.root.element, t = !0, i = !1, n, o) {
      return _e(this, void 0, void 0, function* () {
        if (void 0 === this.root.element) throw new y(this.user, "Tree input not set");
        this.root.refreshPromise && (yield this.root.refreshPromise, yield r.ju.toPromise(this._onDidRender.event));
        const s = this.getDataNode(e);
        if ((yield this.refreshAndRenderNode(s, t, n, o), i)) try {
          this.tree.rerender(s);
        } catch (e) {}
      });
    }
    rerender(e) {
      if (void 0 === e || e === this.root.element) return void this.tree.rerender();
      const t = this.getDataNode(e);
      this.tree.rerender(t);
    }
    collapse(e, t = !1) {
      const i = this.getDataNode(e);
      return this.tree.collapse(i === this.root ? null : i, t);
    }
    expand(e, t = !1) {
      return _e(this, void 0, void 0, function* () {
        if (void 0 === this.root.element) throw new y(this.user, "Tree input not set");
        this.root.refreshPromise && (yield this.root.refreshPromise, yield r.ju.toPromise(this._onDidRender.event));
        const i = this.getDataNode(e);
        if (this.tree.hasElement(i) && !this.tree.isCollapsible(i)) return !1;
        if ((i.refreshPromise && (yield this.root.refreshPromise, yield r.ju.toPromise(this._onDidRender.event)), i !== this.root && !i.refreshPromise && !this.tree.isCollapsed(i))) return !1;
        const n = this.tree.expand(i === this.root ? null : i, t);
        return (i.refreshPromise && (yield this.root.refreshPromise, yield r.ju.toPromise(this._onDidRender.event)), n);
      });
    }
    setSelection(e, t) {
      const i = e.map(e => this.getDataNode(e));
      this.tree.setSelection(i, t);
    }
    getSelection() {
      return this.tree.getSelection().map(e => e.element);
    }
    setFocus(e, t) {
      const i = e.map(e => this.getDataNode(e));
      this.tree.setFocus(i, t);
    }
    getFocus() {
      return this.tree.getFocus().map(e => e.element);
    }
    reveal(e, t) {
      this.tree.reveal(this.getDataNode(e), t);
    }
    getDataNode(e) {
      const t = this.nodes.get(e === this.root.element ? null : e);
      if (!t) throw new y(this.user, `Data tree node not found: ${e}`);
      return t;
    }
    refreshAndRenderNode(e, t, i, n) {
      return _e(this, void 0, void 0, function* () {
        (yield this.refreshNode(e, t, i), this.render(e, i, n));
      });
    }
    refreshNode(e, t, i) {
      return _e(this, void 0, void 0, function* () {
        let n;
        return (this.subTreeRefreshPromises.forEach((o, s) => {
          !n && (function (e, t) {
            return e === t || we(e, t) || we(t, e);
          })(s, e) && (n = o.then(() => this.refreshNode(e, t, i)));
        }), n || this.doRefreshSubTree(e, t, i));
      });
    }
    doRefreshSubTree(e, t, i) {
      return _e(this, void 0, void 0, function* () {
        let n;
        ((e.refreshPromise = new Promise(e => (n = e))), this.subTreeRefreshPromises.set(e, e.refreshPromise), e.refreshPromise.finally(() => {
          ((e.refreshPromise = void 0), this.subTreeRefreshPromises.delete(e));
        }));
        try {
          const n = yield this.doRefreshNode(e, t, i);
          ((e.stale = !1), yield R.jT.settled(n.map(e => this.doRefreshSubTree(e, t, i))));
        } finally {
          n();
        }
      });
    }
    doRefreshNode(e, t, i) {
      return _e(this, void 0, void 0, function* () {
        let n;
        if (((e.hasChildren = !!this.dataSource.hasChildren(e.element)), e.hasChildren)) {
          const t = (0, R.Vs)(800);
          (t.then(() => {
            ((e.slow = !0), this._onDidChangeNodeSlowState.fire(e));
          }, e => null), (n = this.doGetChildren(e).finally(() => t.cancel())));
        } else n = Promise.resolve(S.$.empty());
        try {
          const o = yield n;
          return this.setChildren(e, o, t, i);
        } catch (t) {
          if ((e !== this.root && this.tree.hasElement(e) && this.tree.collapse(e), (0, ve.VV)(t))) return [];
          throw t;
        } finally {
          e.slow && ((e.slow = !1), this._onDidChangeNodeSlowState.fire(e));
        }
      });
    }
    doGetChildren(e) {
      let t = this.refreshPromises.get(e);
      return (t || ((t = (0, R.PG)(() => _e(this, void 0, void 0, function* () {
        const t = yield this.dataSource.getChildren(e.element);
        return this.processChildren(t);
      }))), this.refreshPromises.set(e, t), t.finally(() => {
        this.refreshPromises.delete(e);
      })));
    }
    _onDidChangeCollapseState({
      node: e,
      deep: t
    }) {
      null !== e.element && !e.collapsed && e.element.stale && (t ? this.collapse(e.element.element) : this.refreshAndRenderNode(e.element, !1).catch(ve.dL));
    }
    setChildren(e, t, i, n) {
      const o = [...t];
      if (0 === e.children.length && 0 === o.length) return [];
      const s = new Map(),
        r = new Map();
      for (const t of e.children) if ((s.set(t.element, t), this.identityProvider)) {
        const e = this.tree.isCollapsed(t);
        r.set(t.id, {
          node: t,
          collapsed: e
        });
      }
      const a = [],
        l = o.map(t => {
          const o = !!this.dataSource.hasChildren(t);
          if (!this.identityProvider) {
            const i = be({
              element: t,
              parent: e,
              hasChildren: o
            });
            return (o && this.collapseByDefault && !this.collapseByDefault(t) && ((i.collapsedByDefault = !1), a.push(i)), i);
          }
          const l = this.identityProvider.getId(t).toString(),
            c = r.get(l);
          if (c) {
            const e = c.node;
            return (s.delete(e.element), this.nodes.delete(e.element), this.nodes.set(t, e), (e.element = t), (e.hasChildren = o), i ? c.collapsed ? (e.children.forEach(e => Ie(e, e => this.nodes.delete(e.element))), e.children.splice(0, e.children.length), (e.stale = !0)) : a.push(e) : o && this.collapseByDefault && !this.collapseByDefault(t) && ((e.collapsedByDefault = !1), a.push(e)), e);
          }
          const d = be({
            element: t,
            parent: e,
            id: l,
            hasChildren: o
          });
          return (n && n.viewState.focus && n.viewState.focus.indexOf(l) > -1 && n.focus.push(d), n && n.viewState.selection && n.viewState.selection.indexOf(l) > -1 && n.selection.push(d), n && n.viewState.expanded && n.viewState.expanded.indexOf(l) > -1 ? a.push(d) : o && this.collapseByDefault && !this.collapseByDefault(t) && ((d.collapsedByDefault = !1), a.push(d)), d);
        });
      for (const e of s.values()) Ie(e, e => this.nodes.delete(e.element));
      for (const e of l) this.nodes.set(e.element, e);
      return (e.children.splice(0, e.children.length, ...l), e !== this.root && this.autoExpandSingleChildren && 1 === l.length && 0 === a.length && ((l[0].collapsedByDefault = !1), a.push(l[0])), a);
    }
    render(e, t, i) {
      const n = e.children.map(e => this.asTreeElement(e, t)),
        o = i && Object.assign(Object.assign({}, i), {
          diffIdentityProvider: i.diffIdentityProvider && {
            getId: e => i.diffIdentityProvider.getId(e.element)
          }
        });
      (this.tree.setChildren(e === this.root ? null : e, n, o), e !== this.root && this.tree.setCollapsible(e, e.hasChildren), this._onDidRender.fire());
    }
    asTreeElement(e, t) {
      if (e.stale) return {
        element: e,
        collapsible: e.hasChildren,
        collapsed: !0
      };
      let i;
      return ((i = !(t && t.viewState.expanded && e.id && t.viewState.expanded.indexOf(e.id) > -1) && e.collapsedByDefault), (e.collapsedByDefault = void 0), {
        element: e,
        children: e.hasChildren ? S.$.map(e.children, e => this.asTreeElement(e, t)) : [],
        collapsible: e.hasChildren,
        collapsed: i
      });
    }
    processChildren(e) {
      return (this.sorter && (e = [...e].sort(this.sorter.compare.bind(this.sorter))), e);
    }
    dispose() {
      this.disposables.dispose();
    }
  }
  class Te {
    constructor(e) {
      this.node = e;
    }
    get element() {
      return {
        elements: this.node.element.elements.map(e => e.element),
        incompressible: this.node.element.incompressible
      };
    }
    get children() {
      return this.node.children.map(e => new Te(e));
    }
    get depth() {
      return this.node.depth;
    }
    get visibleChildrenCount() {
      return this.node.visibleChildrenCount;
    }
    get visibleChildIndex() {
      return this.node.visibleChildIndex;
    }
    get collapsible() {
      return this.node.collapsible;
    }
    get collapsed() {
      return this.node.collapsed;
    }
    get visible() {
      return this.node.visible;
    }
    get filterData() {
      return this.node.filterData;
    }
  }
  class Me {
    constructor(e, t, i, n) {
      ((this.renderer = e), (this.nodeMapper = t), (this.compressibleNodeMapperProvider = i), (this.onDidChangeTwistieState = n), (this.renderedNodes = new Map()), (this.disposables = []), (this.templateId = e.templateId));
    }
    renderTemplate(e) {
      return {
        templateData: this.renderer.renderTemplate(e)
      };
    }
    renderElement(e, t, i, n) {
      this.renderer.renderElement(this.nodeMapper.map(e), t, i.templateData, n);
    }
    renderCompressedElements(e, t, i, n) {
      this.renderer.renderCompressedElements(this.compressibleNodeMapperProvider().map(e), t, i.templateData, n);
    }
    renderTwistie(e, t) {
      return e.slow ? (t.classList.add(...O.classNamesArray), !0) : (t.classList.remove(...O.classNamesArray), !1);
    }
    disposeElement(e, t, i, n) {
      this.renderer.disposeElement && this.renderer.disposeElement(this.nodeMapper.map(e), t, i.templateData, n);
    }
    disposeCompressedElements(e, t, i, n) {
      this.renderer.disposeCompressedElements && this.renderer.disposeCompressedElements(this.compressibleNodeMapperProvider().map(e), t, i.templateData, n);
    }
    disposeTemplate(e) {
      this.renderer.disposeTemplate(e.templateData);
    }
    dispose() {
      (this.renderedNodes.clear(), (this.disposables = (0, a.B9)(this.disposables)));
    }
  }
  class Ae extends Ee {
    constructor(e, t, i, n, o, s, r = {}) {
      (super(e, t, i, o, s, r), (this.compressionDelegate = n), (this.compressibleNodeMapper = new C(e => new Te(e))), (this.filter = r.filter));
    }
    createTree(e, t, i, n, o) {
      const s = new $(i),
        r = n.map(e => new Me(e, this.nodeMapper, () => this.compressibleNodeMapper, this._onDidChangeNodeSlowState.event)),
        a = (function (e) {
          const t = e && De(e);
          return (t && Object.assign(Object.assign({}, t), {
            keyboardNavigationLabelProvider: t.keyboardNavigationLabelProvider && Object.assign(Object.assign({}, t.keyboardNavigationLabelProvider), {
              getCompressedNodeKeyboardNavigationLabel: t => e.keyboardNavigationLabelProvider.getCompressedNodeKeyboardNavigationLabel(t.map(e => e.element))
            })
          }));
        })(o) || {};
      return new me(e, t, s, r, a);
    }
    asTreeElement(e, t) {
      return Object.assign({
        incompressible: this.compressionDelegate.isIncompressible(e.element)
      }, super.asTreeElement(e, t));
    }
    updateOptions(e = {}) {
      this.tree.updateOptions(e);
    }
    render(e, t) {
      if (!this.identityProvider) return super.render(e, t);
      const i = e => this.identityProvider.getId(e).toString(),
        n = e => {
          const t = new Set();
          for (const n of e) {
            const e = this.tree.getCompressedTreeNode(n === this.root ? null : n);
            if (e.element) for (const n of e.element.elements) t.add(i(n.element));
          }
          return t;
        },
        o = n(this.tree.getSelection()),
        s = n(this.tree.getFocus());
      super.render(e, t);
      const r = this.getSelection();
      let a = !1;
      const l = this.getFocus();
      let c = !1;
      const d = e => {
        const t = e.element;
        if (t) for (let e = 0; e < t.elements.length; e++) {
          const n = i(t.elements[e].element),
            d = t.elements[t.elements.length - 1].element;
          (o.has(n) && -1 === r.indexOf(d) && (r.push(d), (a = !0)), s.has(n) && -1 === l.indexOf(d) && (l.push(d), (c = !0)));
        }
        e.children.forEach(d);
      };
      (d(this.tree.getCompressedTreeNode(e === this.root ? null : e)), a && this.setSelection(r), c && this.setFocus(l));
    }
    processChildren(e) {
      return (this.filter && (e = S.$.filter(e, e => {
        const t = this.filter.filter(e, 1),
          i = "boolean" == typeof (n = t) ? n ? 1 : 0 : k(n) ? L(n.visibility) : L(n);
        var n;
        if (2 === i) throw new Error("Recursive tree visibility not supported in async data compressed trees");
        return 1 === i;
      })), super.processChildren(e));
    }
  }
  class Oe extends te {
    constructor(e, t, i, n, o, s = {}) {
      (super(e, t, i, n, s), (this.user = e), (this.dataSource = o), (this.identityProvider = s.identityProvider));
    }
    createModel(e, t, i) {
      return new ie(e, t, i);
    }
  }
  var Pe = i(31106),
    Re = i(33108),
    Fe = i(23193),
    Be = i(38819),
    Ve = i(39282),
    We = i(72065),
    He = i(91847),
    ze = i(89872),
    je = i(88810),
    Ue = i(97781),
    $e = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    Ke = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  const qe = (0, We.yh)("listService");
  let Ze = class {
    constructor(e) {
      ((this._themeService = e), (this.disposables = new a.SL()), (this.lists = []), (this._lastFocusedWidget = void 0), (this._hasCreatedStyleController = !1));
    }
    get lastFocusedList() {
      return this._lastFocusedWidget;
    }
    register(e, t) {
      if (!this._hasCreatedStyleController) {
        this._hasCreatedStyleController = !0;
        const e = new l.wD((0, n.dS)(), "");
        this.disposables.add((0, je.Jl)(e, this._themeService));
      }
      if (this.lists.some(t => t.widget === e)) throw new Error("Cannot register the same widget multiple times");
      const i = {
        widget: e,
        extraContextKeys: t
      };
      return (this.lists.push(i), e.getHTMLElement() === document.activeElement && (this._lastFocusedWidget = e), (0, a.F8)(e.onDidFocus(() => (this._lastFocusedWidget = e)), (0, a.OF)(() => this.lists.splice(this.lists.indexOf(i), 1)), e.onDidDispose(() => {
        ((this.lists = this.lists.filter(e => e !== i)), this._lastFocusedWidget === e && (this._lastFocusedWidget = void 0));
      })));
    }
    dispose() {
      this.disposables.dispose();
    }
  };
  Ze = $e([Ke(0, Ue.XE)], Ze);
  const Ge = new Be.uy("listFocus", !0),
    Ye = new Be.uy("listSupportsMultiselect", !0),
    Qe = Be.Ao.and(Ge, Be.Ao.not(Ve.d)),
    Xe = new Be.uy("listHasSelectionOrFocus", !1),
    Je = new Be.uy("listDoubleSelection", !1),
    et = new Be.uy("listMultiSelection", !1),
    tt = new Be.uy("listSelectionNavigation", !1),
    it = "listAutomaticKeyboardNavigation";
  function nt(e, t) {
    const i = e.createScoped(t.getHTMLElement());
    return (Ge.bindTo(i), i);
  }
  const ot = "workbench.list.multiSelectModifier",
    st = "workbench.list.openMode",
    rt = "workbench.list.horizontalScrolling",
    at = "workbench.list.keyboardNavigation",
    lt = "workbench.list.automaticKeyboardNavigation",
    ct = "workbench.tree.indent",
    dt = "workbench.tree.renderIndentGuides",
    ht = "workbench.list.smoothScrolling",
    ut = "workbench.list.mouseWheelScrollSensitivity",
    gt = "workbench.list.fastScrollSensitivity",
    pt = "workbench.tree.expandMode";
  function ft(e) {
    return "alt" === e.getValue(ot);
  }
  class mt extends a.JT {
    constructor(e) {
      (super(), (this.configurationService = e), (this.useAltAsMultipleSelectionModifier = ft(e)), this.registerListeners());
    }
    registerListeners() {
      this._register(this.configurationService.onDidChangeConfiguration(e => {
        e.affectsConfiguration(ot) && (this.useAltAsMultipleSelectionModifier = ft(this.configurationService));
      }));
    }
    isSelectionSingleChangeEvent(e) {
      return this.useAltAsMultipleSelectionModifier ? e.browserEvent.altKey : (0, l.Zo)(e);
    }
    isSelectionRangeChangeEvent(e) {
      return (0, l.wn)(e);
    }
  }
  function vt(e, t, i) {
    var n;
    const o = new a.SL();
    return [Object.assign(Object.assign({}, e), {
      keyboardNavigationDelegate: {
        mightProducePrintableCharacter: e => i.mightProducePrintableCharacter(e)
      },
      smoothScrolling: Boolean(t.getValue(ht)),
      mouseWheelScrollSensitivity: t.getValue(ut),
      fastScrollSensitivity: t.getValue(gt),
      multipleSelectionController: null !== (n = e.multipleSelectionController) && void 0 !== n ? n : o.add(new mt(t))
    }), o];
  }
  let _t = class extends l.aV {
    constructor(e, t, i, n, o, s, r, a, l, c) {
      const d = void 0 !== o.horizontalScrolling ? o.horizontalScrolling : Boolean(l.getValue(rt)),
        [h, u] = vt(o, l, c);
      (super(e, t, i, n, Object.assign(Object.assign(Object.assign({
        keyboardSupport: !1
      }, (0, je.o)(a.getColorTheme(), je.O2)), h), {
        horizontalScrolling: d
      })), this.disposables.add(u), (this.contextKeyService = nt(s, this)), (this.themeService = a), (this.listSupportsMultiSelect = Ye.bindTo(this.contextKeyService)), this.listSupportsMultiSelect.set(!1 !== o.multipleSelectionSupport));
      (tt.bindTo(this.contextKeyService).set(Boolean(o.selectionNavigation)), (this.listHasSelectionOrFocus = Xe.bindTo(this.contextKeyService)), (this.listDoubleSelection = Je.bindTo(this.contextKeyService)), (this.listMultiSelection = et.bindTo(this.contextKeyService)), (this.horizontalScrolling = o.horizontalScrolling), (this._useAltAsMultipleSelectionModifier = ft(l)), this.disposables.add(this.contextKeyService), this.disposables.add(r.register(this)), o.overrideStyles && this.updateStyles(o.overrideStyles), this.disposables.add(this.onDidChangeSelection(() => {
        const e = this.getSelection(),
          t = this.getFocus();
        this.contextKeyService.bufferChangeEvents(() => {
          (this.listHasSelectionOrFocus.set(e.length > 0 || t.length > 0), this.listMultiSelection.set(e.length > 1), this.listDoubleSelection.set(2 === e.length));
        });
      })), this.disposables.add(this.onDidChangeFocus(() => {
        const e = this.getSelection(),
          t = this.getFocus();
        this.listHasSelectionOrFocus.set(e.length > 0 || t.length > 0);
      })), this.disposables.add(l.onDidChangeConfiguration(e => {
        e.affectsConfiguration(ot) && (this._useAltAsMultipleSelectionModifier = ft(l));
        let t = {};
        if (e.affectsConfiguration(rt) && void 0 === this.horizontalScrolling) {
          const e = Boolean(l.getValue(rt));
          t = Object.assign(Object.assign({}, t), {
            horizontalScrolling: e
          });
        }
        if (e.affectsConfiguration(ht)) {
          const e = Boolean(l.getValue(ht));
          t = Object.assign(Object.assign({}, t), {
            smoothScrolling: e
          });
        }
        if (e.affectsConfiguration(ut)) {
          const e = l.getValue(ut);
          t = Object.assign(Object.assign({}, t), {
            mouseWheelScrollSensitivity: e
          });
        }
        if (e.affectsConfiguration(gt)) {
          const e = l.getValue(gt);
          t = Object.assign(Object.assign({}, t), {
            fastScrollSensitivity: e
          });
        }
        Object.keys(t).length > 0 && this.updateOptions(t);
      })), (this.navigator = new Ct(this, Object.assign({
        configurationService: l
      }, o))), this.disposables.add(this.navigator));
    }
    updateOptions(e) {
      (super.updateOptions(e), e.overrideStyles && this.updateStyles(e.overrideStyles), void 0 !== e.multipleSelectionSupport && this.listSupportsMultiSelect.set(!!e.multipleSelectionSupport));
    }
    updateStyles(e) {
      var t;
      (null === (t = this._styler) || void 0 === t || t.dispose(), (this._styler = (0, je.Jl)(this, this.themeService, e)));
    }
    dispose() {
      var e;
      (null === (e = this._styler) || void 0 === e || e.dispose(), super.dispose());
    }
  };
  _t = $e([Ke(5, Be.i6), Ke(6, qe), Ke(7, Ue.XE), Ke(8, Re.Ui), Ke(9, He.d)], _t);
  let bt = class extends h {
    constructor(e, t, i, n, o, s, r, l, c, d) {
      const h = void 0 !== o.horizontalScrolling ? o.horizontalScrolling : Boolean(c.getValue(rt)),
        [u, g] = vt(o, c, d);
      (super(e, t, i, n, Object.assign(Object.assign(Object.assign({
        keyboardSupport: !1
      }, (0, je.o)(l.getColorTheme(), je.O2)), u), {
        horizontalScrolling: h
      })), (this.disposables = new a.SL()), this.disposables.add(g), (this.contextKeyService = nt(s, this)), (this.themeService = l), (this.horizontalScrolling = o.horizontalScrolling), (this.listSupportsMultiSelect = Ye.bindTo(this.contextKeyService)), this.listSupportsMultiSelect.set(!1 !== o.multipleSelectionSupport));
      (tt.bindTo(this.contextKeyService).set(Boolean(o.selectionNavigation)), (this._useAltAsMultipleSelectionModifier = ft(c)), this.disposables.add(this.contextKeyService), this.disposables.add(r.register(this)), o.overrideStyles && this.updateStyles(o.overrideStyles), o.overrideStyles && this.disposables.add((0, je.Jl)(this, l, o.overrideStyles)), this.disposables.add(c.onDidChangeConfiguration(e => {
        e.affectsConfiguration(ot) && (this._useAltAsMultipleSelectionModifier = ft(c));
        let t = {};
        if (e.affectsConfiguration(rt) && void 0 === this.horizontalScrolling) {
          const e = Boolean(c.getValue(rt));
          t = Object.assign(Object.assign({}, t), {
            horizontalScrolling: e
          });
        }
        if (e.affectsConfiguration(ht)) {
          const e = Boolean(c.getValue(ht));
          t = Object.assign(Object.assign({}, t), {
            smoothScrolling: e
          });
        }
        if (e.affectsConfiguration(ut)) {
          const e = c.getValue(ut);
          t = Object.assign(Object.assign({}, t), {
            mouseWheelScrollSensitivity: e
          });
        }
        if (e.affectsConfiguration(gt)) {
          const e = c.getValue(gt);
          t = Object.assign(Object.assign({}, t), {
            fastScrollSensitivity: e
          });
        }
        Object.keys(t).length > 0 && this.updateOptions(t);
      })), (this.navigator = new Ct(this, Object.assign({
        configurationService: c
      }, o))), this.disposables.add(this.navigator));
    }
    updateOptions(e) {
      (super.updateOptions(e), e.overrideStyles && this.updateStyles(e.overrideStyles), void 0 !== e.multipleSelectionSupport && this.listSupportsMultiSelect.set(!!e.multipleSelectionSupport));
    }
    updateStyles(e) {
      var t;
      (null === (t = this._styler) || void 0 === t || t.dispose(), (this._styler = (0, je.Jl)(this, this.themeService, e)));
    }
    dispose() {
      var e;
      (null === (e = this._styler) || void 0 === e || e.dispose(), this.disposables.dispose(), super.dispose());
    }
  };
  bt = $e([Ke(5, Be.i6), Ke(6, qe), Ke(7, Ue.XE), Ke(8, Re.Ui), Ke(9, He.d)], bt);
  let wt = class extends f {
    constructor(e, t, i, n, o, s, r, l, c, d, h) {
      const u = void 0 !== s.horizontalScrolling ? s.horizontalScrolling : Boolean(d.getValue(rt)),
        [g, p] = vt(s, d, h);
      (super(e, t, i, n, o, Object.assign(Object.assign(Object.assign({
        keyboardSupport: !1
      }, (0, je.o)(c.getColorTheme(), je.O2)), g), {
        horizontalScrolling: u
      })), (this.disposables = new a.SL()), this.disposables.add(p), (this.contextKeyService = nt(r, this)), (this.themeService = c), (this.listSupportsMultiSelect = Ye.bindTo(this.contextKeyService)), this.listSupportsMultiSelect.set(!1 !== s.multipleSelectionSupport));
      (tt.bindTo(this.contextKeyService).set(Boolean(s.selectionNavigation)), (this.listHasSelectionOrFocus = Xe.bindTo(this.contextKeyService)), (this.listDoubleSelection = Je.bindTo(this.contextKeyService)), (this.listMultiSelection = et.bindTo(this.contextKeyService)), (this.horizontalScrolling = s.horizontalScrolling), (this._useAltAsMultipleSelectionModifier = ft(d)), this.disposables.add(this.contextKeyService), this.disposables.add(l.register(this)), s.overrideStyles && this.updateStyles(s.overrideStyles), this.disposables.add(this.onDidChangeSelection(() => {
        const e = this.getSelection(),
          t = this.getFocus();
        this.contextKeyService.bufferChangeEvents(() => {
          (this.listHasSelectionOrFocus.set(e.length > 0 || t.length > 0), this.listMultiSelection.set(e.length > 1), this.listDoubleSelection.set(2 === e.length));
        });
      })), this.disposables.add(this.onDidChangeFocus(() => {
        const e = this.getSelection(),
          t = this.getFocus();
        this.listHasSelectionOrFocus.set(e.length > 0 || t.length > 0);
      })), this.disposables.add(d.onDidChangeConfiguration(e => {
        e.affectsConfiguration(ot) && (this._useAltAsMultipleSelectionModifier = ft(d));
        let t = {};
        if (e.affectsConfiguration(rt) && void 0 === this.horizontalScrolling) {
          const e = Boolean(d.getValue(rt));
          t = Object.assign(Object.assign({}, t), {
            horizontalScrolling: e
          });
        }
        if (e.affectsConfiguration(ht)) {
          const e = Boolean(d.getValue(ht));
          t = Object.assign(Object.assign({}, t), {
            smoothScrolling: e
          });
        }
        if (e.affectsConfiguration(ut)) {
          const e = d.getValue(ut);
          t = Object.assign(Object.assign({}, t), {
            mouseWheelScrollSensitivity: e
          });
        }
        if (e.affectsConfiguration(gt)) {
          const e = d.getValue(gt);
          t = Object.assign(Object.assign({}, t), {
            fastScrollSensitivity: e
          });
        }
        Object.keys(t).length > 0 && this.updateOptions(t);
      })), (this.navigator = new xt(this, Object.assign({
        configurationService: d
      }, s))), this.disposables.add(this.navigator));
    }
    updateOptions(e) {
      (super.updateOptions(e), e.overrideStyles && this.updateStyles(e.overrideStyles), void 0 !== e.multipleSelectionSupport && this.listSupportsMultiSelect.set(!!e.multipleSelectionSupport));
    }
    updateStyles(e) {
      var t;
      (null === (t = this._styler) || void 0 === t || t.dispose(), (this._styler = (0, je.Jl)(this, this.themeService, e)));
    }
    dispose() {
      var e;
      (null === (e = this._styler) || void 0 === e || e.dispose(), this.disposables.dispose(), super.dispose());
    }
  };
  wt = $e([Ke(6, Be.i6), Ke(7, qe), Ke(8, Ue.XE), Ke(9, Re.Ui), Ke(10, He.d)], wt);
  class yt extends a.JT {
    constructor(e, t) {
      var i;
      (super(), (this.widget = e), (this._onDidOpen = this._register(new r.Q5())), (this.onDidOpen = this._onDidOpen.event), this._register(r.ju.filter(this.widget.onDidChangeSelection, e => e.browserEvent instanceof KeyboardEvent)(e => this.onSelectionFromKeyboard(e))), this._register(this.widget.onPointer(e => this.onPointer(e.element, e.browserEvent))), this._register(this.widget.onMouseDblClick(e => this.onMouseDblClick(e.element, e.browserEvent))), "boolean" != typeof (null == t ? void 0 : t.openOnSingleClick) && (null == t ? void 0 : t.configurationService) ? ((this.openOnSingleClick = "doubleClick" !== (null == t ? void 0 : t.configurationService.getValue(st))), this._register(null == t ? void 0 : t.configurationService.onDidChangeConfiguration(() => {
        this.openOnSingleClick = "doubleClick" !== (null == t ? void 0 : t.configurationService.getValue(st));
      }))) : (this.openOnSingleClick = null === (i = null == t ? void 0 : t.openOnSingleClick) || void 0 === i || i));
    }
    onSelectionFromKeyboard(e) {
      if (1 !== e.elements.length) return;
      const t = e.browserEvent,
        i = "boolean" != typeof t.preserveFocus || t.preserveFocus,
        n = "boolean" == typeof t.pinned ? t.pinned : !i;
      this._open(this.getSelectedElement(), i, n, !1, e.browserEvent);
    }
    onPointer(e, t) {
      if (!this.openOnSingleClick) return;
      if (2 === t.detail) return;
      const i = 1 === t.button,
        n = t.ctrlKey || t.metaKey || t.altKey;
      this._open(e, !0, i, n, t);
    }
    onMouseDblClick(e, t) {
      if (!t) return;
      const i = t.target;
      if (i.classList.contains("monaco-tl-twistie") || (i.classList.contains("monaco-icon-label") && i.classList.contains("folder-icon") && t.offsetX < 16)) return;
      const n = t.ctrlKey || t.metaKey || t.altKey;
      this._open(e, !1, !0, n, t);
    }
    _open(e, t, i, n, o) {
      e && this._onDidOpen.fire({
        editorOptions: {
          preserveFocus: t,
          pinned: i,
          revealIfVisible: !0
        },
        sideBySide: n,
        element: e,
        browserEvent: o
      });
    }
  }
  class Ct extends yt {
    constructor(e, t) {
      (super(e, t), (this.widget = e));
    }
    getSelectedElement() {
      return this.widget.getSelectedElements()[0];
    }
  }
  class xt extends yt {
    constructor(e, t) {
      super(e, t);
    }
    getSelectedElement() {
      return this.widget.getSelectedElements()[0];
    }
  }
  class St extends yt {
    constructor(e, t) {
      super(e, t);
    }
    getSelectedElement() {
      var e;
      return null !== (e = this.widget.getSelection()[0]) && void 0 !== e ? e : void 0;
    }
  }
  function kt(e, t) {
    let i = !1;
    return n => {
      if (i) return ((i = !1), !1);
      const o = t.softDispatch(n, e);
      return o && o.enterChord ? ((i = !0), !1) : ((i = !1), !0);
    };
  }
  let Lt = class extends pe {
    constructor(e, t, i, n, o, s, r, a, l, c, d) {
      const {
        options: h,
        getAutomaticKeyboardNavigation: u,
        disposable: g
      } = Tt(t, o, s, l, c, d);
      (super(e, t, i, n, h), this.disposables.add(g), (this.internals = new Mt(this, o, u, o.overrideStyles, s, r, a, l, d)), this.disposables.add(this.internals));
    }
    updateOptions(e) {
      (super.updateOptions(e), this.internals.updateOptions(e));
    }
  };
  Lt = $e([Ke(5, Be.i6), Ke(6, qe), Ke(7, Ue.XE), Ke(8, Re.Ui), Ke(9, He.d), Ke(10, Pe.F)], Lt);
  let Nt = class extends me {
    constructor(e, t, i, n, o, s, r, a, l, c, d) {
      const {
        options: h,
        getAutomaticKeyboardNavigation: u,
        disposable: g
      } = Tt(t, o, s, l, c, d);
      (super(e, t, i, n, h), this.disposables.add(g), (this.internals = new Mt(this, o, u, o.overrideStyles, s, r, a, l, d)), this.disposables.add(this.internals));
    }
    updateOptions(e = {}) {
      (super.updateOptions(e), e.overrideStyles && this.internals.updateStyleOverrides(e.overrideStyles), this.internals.updateOptions(e));
    }
  };
  Nt = $e([Ke(5, Be.i6), Ke(6, qe), Ke(7, Ue.XE), Ke(8, Re.Ui), Ke(9, He.d), Ke(10, Pe.F)], Nt);
  let Dt = class extends Oe {
    constructor(e, t, i, n, o, s, r, a, l, c, d, h) {
      const {
        options: u,
        getAutomaticKeyboardNavigation: g,
        disposable: p
      } = Tt(t, s, r, c, d, h);
      (super(e, t, i, n, o, u), this.disposables.add(p), (this.internals = new Mt(this, s, g, s.overrideStyles, r, a, l, c, h)), this.disposables.add(this.internals));
    }
    updateOptions(e = {}) {
      (super.updateOptions(e), e.overrideStyles && this.internals.updateStyleOverrides(e.overrideStyles), this.internals.updateOptions(e));
    }
  };
  Dt = $e([Ke(6, Be.i6), Ke(7, qe), Ke(8, Ue.XE), Ke(9, Re.Ui), Ke(10, He.d), Ke(11, Pe.F)], Dt);
  let It = class extends Ee {
    constructor(e, t, i, n, o, s, r, a, l, c, d, h) {
      const {
        options: u,
        getAutomaticKeyboardNavigation: g,
        disposable: p
      } = Tt(t, s, r, c, d, h);
      (super(e, t, i, n, o, u), this.disposables.add(p), (this.internals = new Mt(this, s, g, s.overrideStyles, r, a, l, c, h)), this.disposables.add(this.internals));
    }
    get onDidOpen() {
      return this.internals.onDidOpen;
    }
    updateOptions(e = {}) {
      (super.updateOptions(e), e.overrideStyles && this.internals.updateStyleOverrides(e.overrideStyles), this.internals.updateOptions(e));
    }
  };
  It = $e([Ke(6, Be.i6), Ke(7, qe), Ke(8, Ue.XE), Ke(9, Re.Ui), Ke(10, He.d), Ke(11, Pe.F)], It);
  let Et = class extends Ae {
    constructor(e, t, i, n, o, s, r, a, l, c, d, h, u) {
      const {
        options: g,
        getAutomaticKeyboardNavigation: p,
        disposable: f
      } = Tt(t, r, a, d, h, u);
      (super(e, t, i, n, o, s, g), this.disposables.add(f), (this.internals = new Mt(this, r, p, r.overrideStyles, a, l, c, d, u)), this.disposables.add(this.internals));
    }
    updateOptions(e) {
      (super.updateOptions(e), this.internals.updateOptions(e));
    }
  };
  function Tt(e, t, i, n, o, s) {
    var r;
    const a = () => {
        let e = Boolean(i.getContextKeyValue(it));
        return (e && (e = Boolean(n.getValue(lt))), e);
      },
      l = s.isScreenReaderOptimized(),
      c = t.simpleKeyboardNavigation || l ? "simple" : n.getValue(at),
      d = void 0 !== t.horizontalScrolling ? t.horizontalScrolling : Boolean(n.getValue(rt)),
      [h, u] = vt(t, n, o),
      g = t.additionalScrollHeight;
    return {
      getAutomaticKeyboardNavigation: a,
      disposable: u,
      options: Object.assign(Object.assign({
        keyboardSupport: !1
      }, h), {
        indent: "number" == typeof n.getValue(ct) ? n.getValue(ct) : void 0,
        renderIndentGuides: n.getValue(dt),
        smoothScrolling: Boolean(n.getValue(ht)),
        automaticKeyboardNavigation: a(),
        simpleKeyboardNavigation: "simple" === c,
        filterOnType: "filter" === c,
        horizontalScrolling: d,
        keyboardNavigationEventFilter: kt(e, o),
        additionalScrollHeight: g,
        hideTwistiesOfChildlessElements: t.hideTwistiesOfChildlessElements,
        expandOnlyOnTwistieClick: null !== (r = t.expandOnlyOnTwistieClick) && void 0 !== r ? r : "doubleClick" === n.getValue(pt)
      })
    };
  }
  Et = $e([Ke(7, Be.i6), Ke(8, qe), Ke(9, Ue.XE), Ke(10, Re.Ui), Ke(11, He.d), Ke(12, Pe.F)], Et);
  let Mt = class {
    constructor(e, t, i, n, o, s, r, a, l) {
      ((this.tree = e), (this.themeService = r), (this.disposables = []), (this.contextKeyService = nt(o, e)), (this.listSupportsMultiSelect = Ye.bindTo(this.contextKeyService)), this.listSupportsMultiSelect.set(!1 !== t.multipleSelectionSupport));
      (tt.bindTo(this.contextKeyService).set(Boolean(t.selectionNavigation)), (this.hasSelectionOrFocus = Xe.bindTo(this.contextKeyService)), (this.hasDoubleSelection = Je.bindTo(this.contextKeyService)), (this.hasMultiSelection = et.bindTo(this.contextKeyService)), (this._useAltAsMultipleSelectionModifier = ft(a)));
      const c = new Set();
      c.add(it);
      const d = () => {
        const t = l.isScreenReaderOptimized() ? "simple" : a.getValue(at);
        e.updateOptions({
          simpleKeyboardNavigation: "simple" === t,
          filterOnType: "filter" === t
        });
      };
      (this.updateStyleOverrides(n), this.disposables.push(this.contextKeyService, s.register(e), e.onDidChangeSelection(() => {
        const t = e.getSelection(),
          i = e.getFocus();
        this.contextKeyService.bufferChangeEvents(() => {
          (this.hasSelectionOrFocus.set(t.length > 0 || i.length > 0), this.hasMultiSelection.set(t.length > 1), this.hasDoubleSelection.set(2 === t.length));
        });
      }), e.onDidChangeFocus(() => {
        const t = e.getSelection(),
          i = e.getFocus();
        this.hasSelectionOrFocus.set(t.length > 0 || i.length > 0);
      }), a.onDidChangeConfiguration(n => {
        let o = {};
        if ((n.affectsConfiguration(ot) && (this._useAltAsMultipleSelectionModifier = ft(a)), n.affectsConfiguration(ct))) {
          const e = a.getValue(ct);
          o = Object.assign(Object.assign({}, o), {
            indent: e
          });
        }
        if (n.affectsConfiguration(dt)) {
          const e = a.getValue(dt);
          o = Object.assign(Object.assign({}, o), {
            renderIndentGuides: e
          });
        }
        if (n.affectsConfiguration(ht)) {
          const e = Boolean(a.getValue(ht));
          o = Object.assign(Object.assign({}, o), {
            smoothScrolling: e
          });
        }
        if ((n.affectsConfiguration(at) && d(), n.affectsConfiguration(lt) && (o = Object.assign(Object.assign({}, o), {
          automaticKeyboardNavigation: i()
        })), n.affectsConfiguration(rt) && void 0 === t.horizontalScrolling)) {
          const e = Boolean(a.getValue(rt));
          o = Object.assign(Object.assign({}, o), {
            horizontalScrolling: e
          });
        }
        if ((n.affectsConfiguration(pt) && void 0 === t.expandOnlyOnTwistieClick && (o = Object.assign(Object.assign({}, o), {
          expandOnlyOnTwistieClick: "doubleClick" === a.getValue(pt)
        })), n.affectsConfiguration(ut))) {
          const e = a.getValue(ut);
          o = Object.assign(Object.assign({}, o), {
            mouseWheelScrollSensitivity: e
          });
        }
        if (n.affectsConfiguration(gt)) {
          const e = a.getValue(gt);
          o = Object.assign(Object.assign({}, o), {
            fastScrollSensitivity: e
          });
        }
        Object.keys(o).length > 0 && e.updateOptions(o);
      }), this.contextKeyService.onDidChangeContext(t => {
        t.affectsSome(c) && e.updateOptions({
          automaticKeyboardNavigation: i()
        });
      }), l.onDidChangeScreenReaderOptimized(() => d())), (this.navigator = new St(e, Object.assign({
        configurationService: a
      }, t))), this.disposables.push(this.navigator));
    }
    get onDidOpen() {
      return this.navigator.onDidOpen;
    }
    updateOptions(e) {
      void 0 !== e.multipleSelectionSupport && this.listSupportsMultiSelect.set(!!e.multipleSelectionSupport);
    }
    updateStyleOverrides(e) {
      ((0, a.B9)(this.styler), (this.styler = e ? (0, je.Jl)(this.tree, this.themeService, e) : a.JT.None));
    }
    dispose() {
      ((this.disposables = (0, a.B9)(this.disposables)), (0, a.B9)(this.styler), (this.styler = void 0));
    }
  };
  Mt = $e([Ke(4, Be.i6), Ke(5, qe), Ke(6, Ue.XE), Ke(7, Re.Ui), Ke(8, Pe.F)], Mt);
  ze.B.as(Fe.IP.Configuration).registerConfiguration({
    id: "workbench",
    order: 7,
    title: (0, H.N)("workbenchConfigurationTitle", "Workbench"),
    type: "object",
    properties: {
      [ot]: {
        type: "string",
        enum: ["ctrlCmd", "alt"],
        enumDescriptions: [(0, H.N)("multiSelectModifier.ctrlCmd", "Maps to `Control` on Windows and Linux and to `Command` on macOS."), (0, H.N)("multiSelectModifier.alt", "Maps to `Alt` on Windows and Linux and to `Option` on macOS.")],
        default: "ctrlCmd",
        description: (0, H.N)({
          key: "multiSelectModifier",
          comment: ["- `ctrlCmd` refers to a value the setting can take and should not be localized.", "- `Control` and `Command` refer to the modifier keys Ctrl or Cmd on the keyboard and can be localized."]
        }, "The modifier to be used to add an item in trees and lists to a multi-selection with the mouse (for example in the explorer, open editors and scm view). The 'Open to Side' mouse gestures - if supported - will adapt such that they do not conflict with the multiselect modifier.")
      },
      [st]: {
        type: "string",
        enum: ["singleClick", "doubleClick"],
        default: "singleClick",
        description: (0, H.N)({
          key: "openModeModifier",
          comment: ["`singleClick` and `doubleClick` refers to a value the setting can take and should not be localized."]
        }, "Controls how to open items in trees and lists using the mouse (if supported). Note that some trees and lists might choose to ignore this setting if it is not applicable.")
      },
      [rt]: {
        type: "boolean",
        default: !1,
        description: (0, H.N)("horizontalScrolling setting", "Controls whether lists and trees support horizontal scrolling in the workbench. Warning: turning on this setting has a performance implication.")
      },
      [ct]: {
        type: "number",
        default: 8,
        minimum: 0,
        maximum: 40,
        description: (0, H.N)("tree indent setting", "Controls tree indentation in pixels.")
      },
      [dt]: {
        type: "string",
        enum: ["none", "onHover", "always"],
        default: "onHover",
        description: (0, H.N)("render tree indent guides", "Controls whether the tree should render indent guides.")
      },
      [ht]: {
        type: "boolean",
        default: !1,
        description: (0, H.N)("list smoothScrolling setting", "Controls whether lists and trees have smooth scrolling.")
      },
      [ut]: {
        type: "number",
        default: 1,
        description: (0, H.N)("Mouse Wheel Scroll Sensitivity", "A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events.")
      },
      [gt]: {
        type: "number",
        default: 5,
        description: (0, H.N)("Fast Scroll Sensitivity", "Scrolling speed multiplier when pressing `Alt`.")
      },
      [at]: {
        type: "string",
        enum: ["simple", "highlight", "filter"],
        enumDescriptions: [(0, H.N)("keyboardNavigationSettingKey.simple", "Simple keyboard navigation focuses elements which match the keyboard input. Matching is done only on prefixes."), (0, H.N)("keyboardNavigationSettingKey.highlight", "Highlight keyboard navigation highlights elements which match the keyboard input. Further up and down navigation will traverse only the highlighted elements."), (0, H.N)("keyboardNavigationSettingKey.filter", "Filter keyboard navigation will filter out and hide all the elements which do not match the keyboard input.")],
        default: "highlight",
        description: (0, H.N)("keyboardNavigationSettingKey", "Controls the keyboard navigation style for lists and trees in the workbench. Can be simple, highlight and filter.")
      },
      [lt]: {
        type: "boolean",
        default: !0,
        markdownDescription: (0, H.N)("automatic keyboard navigation setting", "Controls whether keyboard navigation in lists and trees is automatically triggered simply by typing. If set to `false`, keyboard navigation is only triggered when executing the `list.toggleKeyboardNavigation` command, for which you can assign a keyboard shortcut.")
      },
      [pt]: {
        type: "string",
        enum: ["singleClick", "doubleClick"],
        default: "singleClick",
        description: (0, H.N)("expand mode", "Controls how tree folders are expanded when clicking the folder names. Note that some trees and lists might choose to ignore this setting if it is not applicable.")
      }
    }
  });
};