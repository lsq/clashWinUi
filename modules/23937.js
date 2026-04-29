module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    M: () => _,
    z: () => b
  });
  var n = i(65321),
    o = i(73098),
    s = i(9802),
    r = i(9488),
    a = i(41264),
    l = i(4669),
    c = i(5976),
    d = i(59870),
    h = i(76633),
    u = i(98401);
  i(62466);
  const g = {
    separatorBorder: a.Il.transparent
  };
  class p {
    constructor(e, t, i, n) {
      ((this.container = e), (this.view = t), (this.disposable = n), (this._cachedVisibleSize = void 0), "number" == typeof i ? ((this._size = i), (this._cachedVisibleSize = void 0), e.classList.add("visible")) : ((this._size = 0), (this._cachedVisibleSize = i.cachedVisibleSize)));
    }
    set size(e) {
      this._size = e;
    }
    get size() {
      return this._size;
    }
    get visible() {
      return void 0 === this._cachedVisibleSize;
    }
    setVisible(e, t) {
      e !== this.visible && (e ? ((this.size = (0, d.u)(this._cachedVisibleSize, this.viewMinimumSize, this.viewMaximumSize)), (this._cachedVisibleSize = void 0)) : ((this._cachedVisibleSize = "number" == typeof t ? t : this.size), (this.size = 0)), this.container.classList.toggle("visible", e), this.view.setVisible && this.view.setVisible(e));
    }
    get minimumSize() {
      return this.visible ? this.view.minimumSize : 0;
    }
    get viewMinimumSize() {
      return this.view.minimumSize;
    }
    get maximumSize() {
      return this.visible ? this.view.maximumSize : 0;
    }
    get viewMaximumSize() {
      return this.view.maximumSize;
    }
    get priority() {
      return this.view.priority;
    }
    get snap() {
      return !!this.view.snap;
    }
    set enabled(e) {
      this.container.style.pointerEvents = e ? "" : "none";
    }
    layout(e, t) {
      (this.layoutContainer(e), this.view.layout(this.size, e, t));
    }
    dispose() {
      return (this.disposable.dispose(), this.view);
    }
  }
  class f extends p {
    layoutContainer(e) {
      ((this.container.style.top = `${e}px`), (this.container.style.height = `${this.size}px`));
    }
  }
  class m extends p {
    layoutContainer(e) {
      ((this.container.style.left = `${e}px`), (this.container.style.width = `${this.size}px`));
    }
  }
  var v, _;
  (!(function (e) {
    ((e[(e.Idle = 0)] = "Idle"), (e[(e.Busy = 1)] = "Busy"));
  })(v || (v = {})), (function (e) {
    ((e.Distribute = {
      type: "distribute"
    }), (e.Split = function (e) {
      return {
        type: "split",
        index: e
      };
    }), (e.Invisible = function (e) {
      return {
        type: "invisible",
        cachedVisibleSize: e
      };
    }));
  })(_ || (_ = {})));
  class b extends c.JT {
    constructor(e, t = {}) {
      var i, o;
      (super(), (this.size = 0), (this.contentSize = 0), (this.proportions = void 0), (this.viewItems = []), (this.sashItems = []), (this.state = v.Idle), (this._onDidSashChange = this._register(new l.Q5())), (this.onDidSashChange = this._onDidSashChange.event), (this._onDidSashReset = this._register(new l.Q5())), (this._startSnappingEnabled = !0), (this._endSnappingEnabled = !0), (this.orientation = u.o8(t.orientation) ? 0 : t.orientation), (this.inverseAltBehavior = !!t.inverseAltBehavior), (this.proportionalLayout = !!u.o8(t.proportionalLayout) || !!t.proportionalLayout), (this.getSashOrthogonalSize = t.getSashOrthogonalSize), (this.el = document.createElement("div")), this.el.classList.add("monaco-split-view2"), this.el.classList.add(0 === this.orientation ? "vertical" : "horizontal"), e.appendChild(this.el), (this.sashContainer = (0, n.R3)(this.el, (0, n.$)(".sash-container"))), (this.viewContainer = (0, n.$)(".split-view-container")), (this.scrollable = new h.Rm(125, n.jL)), (this.scrollableElement = this._register(new s.$Z(this.viewContainer, {
        vertical: 0 === this.orientation ? null !== (i = t.scrollbarVisibility) && void 0 !== i ? i : 1 : 2,
        horizontal: 1 === this.orientation ? null !== (o = t.scrollbarVisibility) && void 0 !== o ? o : 1 : 2
      }, this.scrollable))), (this.onDidScroll = this.scrollableElement.onScroll), this._register(this.onDidScroll(e => {
        ((this.viewContainer.scrollTop = e.scrollTop), (this.viewContainer.scrollLeft = e.scrollLeft));
      })), (0, n.R3)(this.el, this.scrollableElement.getDomNode()), this.style(t.styles || g), t.descriptor && ((this.size = t.descriptor.size), t.descriptor.views.forEach((e, t) => {
        const i = u.o8(e.visible) || e.visible ? e.size : {
            type: "invisible",
            cachedVisibleSize: e.size
          },
          n = e.view;
        this.doAddView(n, i, t, !0);
      }), (this.contentSize = this.viewItems.reduce((e, t) => e + t.size, 0)), this.saveProportions()));
    }
    get orthogonalStartSash() {
      return this._orthogonalStartSash;
    }
    set orthogonalStartSash(e) {
      for (const t of this.sashItems) t.sash.orthogonalStartSash = e;
      this._orthogonalStartSash = e;
    }
    get orthogonalEndSash() {
      return this._orthogonalEndSash;
    }
    set orthogonalEndSash(e) {
      for (const t of this.sashItems) t.sash.orthogonalEndSash = e;
      this._orthogonalEndSash = e;
    }
    get startSnappingEnabled() {
      return this._startSnappingEnabled;
    }
    set startSnappingEnabled(e) {
      this._startSnappingEnabled !== e && ((this._startSnappingEnabled = e), this.updateSashEnablement());
    }
    get endSnappingEnabled() {
      return this._endSnappingEnabled;
    }
    set endSnappingEnabled(e) {
      this._endSnappingEnabled !== e && ((this._endSnappingEnabled = e), this.updateSashEnablement());
    }
    style(e) {
      e.separatorBorder.isTransparent() ? (this.el.classList.remove("separator-border"), this.el.style.removeProperty("--separator-border")) : (this.el.classList.add("separator-border"), this.el.style.setProperty("--separator-border", e.separatorBorder.toString()));
    }
    addView(e, t, i = this.viewItems.length, n) {
      this.doAddView(e, t, i, n);
    }
    layout(e, t) {
      const i = Math.max(this.size, this.contentSize);
      if (((this.size = e), (this.layoutContext = t), this.proportions)) for (let t = 0; t < this.viewItems.length; t++) {
        const i = this.viewItems[t];
        i.size = (0, d.u)(Math.round(this.proportions[t] * e), i.minimumSize, i.maximumSize);
      } else {
        const t = (0, r.w6)(this.viewItems.length),
          n = t.filter(e => 1 === this.viewItems[e].priority),
          o = t.filter(e => 2 === this.viewItems[e].priority);
        this.resize(this.viewItems.length - 1, e - i, void 0, n, o);
      }
      (this.distributeEmptySpace(), this.layoutViews());
    }
    saveProportions() {
      this.proportionalLayout && this.contentSize > 0 && (this.proportions = this.viewItems.map(e => e.size / this.contentSize));
    }
    onSashStart({
      sash: e,
      start: t,
      alt: i
    }) {
      for (const e of this.viewItems) e.enabled = !1;
      const o = this.sashItems.findIndex(t => t.sash === e),
        s = (0, c.F8)((0, n.nm)(document.body, "keydown", e => a(this.sashDragState.current, e.altKey)), (0, n.nm)(document.body, "keyup", () => a(this.sashDragState.current, !1))),
        a = (e, t) => {
          const i = this.viewItems.map(e => e.size);
          let n,
            a,
            l = Number.NEGATIVE_INFINITY,
            c = Number.POSITIVE_INFINITY;
          if ((this.inverseAltBehavior && (t = !t), t)) {
            if (o === this.sashItems.length - 1) {
              const e = this.viewItems[o];
              ((l = (e.minimumSize - e.size) / 2), (c = (e.maximumSize - e.size) / 2));
            } else {
              const e = this.viewItems[o + 1];
              ((l = (e.size - e.maximumSize) / 2), (c = (e.size - e.minimumSize) / 2));
            }
          }
          if (!t) {
            const e = (0, r.w6)(o, -1),
              t = (0, r.w6)(o + 1, this.viewItems.length),
              s = e.reduce((e, t) => e + (this.viewItems[t].minimumSize - i[t]), 0),
              l = e.reduce((e, t) => e + (this.viewItems[t].viewMaximumSize - i[t]), 0),
              c = 0 === t.length ? Number.POSITIVE_INFINITY : t.reduce((e, t) => e + (i[t] - this.viewItems[t].minimumSize), 0),
              d = 0 === t.length ? Number.NEGATIVE_INFINITY : t.reduce((e, t) => e + (i[t] - this.viewItems[t].viewMaximumSize), 0),
              h = Math.max(s, d),
              u = Math.min(c, l),
              g = this.findFirstSnapIndex(e),
              p = this.findFirstSnapIndex(t);
            if ("number" == typeof g) {
              const e = this.viewItems[g],
                t = Math.floor(e.viewMinimumSize / 2);
              n = {
                index: g,
                limitDelta: e.visible ? h - t : h + t,
                size: e.size
              };
            }
            if ("number" == typeof p) {
              const e = this.viewItems[p],
                t = Math.floor(e.viewMinimumSize / 2);
              a = {
                index: p,
                limitDelta: e.visible ? u + t : u - t,
                size: e.size
              };
            }
          }
          this.sashDragState = {
            start: e,
            current: e,
            index: o,
            sizes: i,
            minDelta: l,
            maxDelta: c,
            alt: t,
            snapBefore: n,
            snapAfter: a,
            disposable: s
          };
        };
      a(t, i);
    }
    onSashChange({
      current: e
    }) {
      const {
        index: t,
        start: i,
        sizes: n,
        alt: o,
        minDelta: s,
        maxDelta: r,
        snapBefore: a,
        snapAfter: l
      } = this.sashDragState;
      this.sashDragState.current = e;
      const c = e - i,
        d = this.resize(t, c, n, void 0, void 0, s, r, a, l);
      if (o) {
        const e = t === this.sashItems.length - 1,
          i = this.viewItems.map(e => e.size),
          n = e ? t : t + 1,
          o = this.viewItems[n],
          s = o.size - o.maximumSize,
          r = o.size - o.minimumSize,
          a = e ? t - 1 : t + 1;
        this.resize(a, -d, i, void 0, void 0, s, r);
      }
      (this.distributeEmptySpace(), this.layoutViews());
    }
    onSashEnd(e) {
      (this._onDidSashChange.fire(e), this.sashDragState.disposable.dispose(), this.saveProportions());
      for (const e of this.viewItems) e.enabled = !0;
    }
    onViewChange(e, t) {
      const i = this.viewItems.indexOf(e);
      i < 0 || i >= this.viewItems.length || ((t = "number" == typeof t ? t : e.size), (t = (0, d.u)(t, e.minimumSize, e.maximumSize)), this.inverseAltBehavior && i > 0 ? (this.resize(i - 1, Math.floor((e.size - t) / 2)), this.distributeEmptySpace(), this.layoutViews()) : ((e.size = t), this.relayout([i], void 0)));
    }
    resizeView(e, t) {
      if (this.state !== v.Idle) throw new Error("Cant modify splitview");
      if (((this.state = v.Busy), e < 0 || e >= this.viewItems.length)) return;
      const i = (0, r.w6)(this.viewItems.length).filter(t => t !== e),
        n = [...i.filter(e => 1 === this.viewItems[e].priority), e],
        o = i.filter(e => 2 === this.viewItems[e].priority),
        s = this.viewItems[e];
      ((t = Math.round(t)), (t = (0, d.u)(t, s.minimumSize, Math.min(s.maximumSize, this.size))), (s.size = t), this.relayout(n, o), (this.state = v.Idle));
    }
    distributeViewSizes() {
      const e = [];
      let t = 0;
      for (const i of this.viewItems) i.maximumSize - i.minimumSize > 0 && (e.push(i), (t += i.size));
      const i = Math.floor(t / e.length);
      for (const t of e) t.size = (0, d.u)(i, t.minimumSize, t.maximumSize);
      const n = (0, r.w6)(this.viewItems.length),
        o = n.filter(e => 1 === this.viewItems[e].priority),
        s = n.filter(e => 2 === this.viewItems[e].priority);
      this.relayout(o, s);
    }
    getViewSize(e) {
      return e < 0 || e >= this.viewItems.length ? -1 : this.viewItems[e].size;
    }
    doAddView(e, t, i = this.viewItems.length, s) {
      if (this.state !== v.Idle) throw new Error("Cant modify splitview");
      this.state = v.Busy;
      const a = (0, n.$)(".split-view-view");
      i === this.viewItems.length ? this.viewContainer.appendChild(a) : this.viewContainer.insertBefore(a, this.viewContainer.children.item(i));
      const d = e.onDidChange(e => this.onViewChange(p, e)),
        h = (0, c.OF)(() => this.viewContainer.removeChild(a)),
        u = (0, c.F8)(d, h);
      let g;
      g = "number" == typeof t ? t : "split" === t.type ? this.getViewSize(t.index) / 2 : "invisible" === t.type ? {
        cachedVisibleSize: t.cachedVisibleSize
      } : e.minimumSize;
      const p = 0 === this.orientation ? new f(a, e, g, u) : new m(a, e, g, u);
      if ((this.viewItems.splice(i, 0, p), this.viewItems.length > 1)) {
        let e = {
          orthogonalStartSash: this.orthogonalStartSash,
          orthogonalEndSash: this.orthogonalEndSash
        };
        const t = 0 === this.orientation ? new o.g(this.sashContainer, {
            getHorizontalSashTop: e => this.getSashPosition(e),
            getHorizontalSashWidth: this.getSashOrthogonalSize
          }, Object.assign(Object.assign({}, e), {
            orientation: 1
          })) : new o.g(this.sashContainer, {
            getVerticalSashLeft: e => this.getSashPosition(e),
            getVerticalSashHeight: this.getSashOrthogonalSize
          }, Object.assign(Object.assign({}, e), {
            orientation: 0
          })),
          n = 0 === this.orientation ? e => ({
            sash: t,
            start: e.startY,
            current: e.currentY,
            alt: e.altKey
          }) : e => ({
            sash: t,
            start: e.startX,
            current: e.currentX,
            alt: e.altKey
          }),
          s = l.ju.map(t.onDidStart, n)(this.onSashStart, this),
          a = l.ju.map(t.onDidChange, n)(this.onSashChange, this),
          d = l.ju.map(t.onDidEnd, () => this.sashItems.findIndex(e => e.sash === t)),
          h = d(this.onSashEnd, this),
          u = t.onDidReset(() => {
            const e = this.sashItems.findIndex(e => e.sash === t),
              i = (0, r.w6)(e, -1),
              n = (0, r.w6)(e + 1, this.viewItems.length),
              o = this.findFirstSnapIndex(i),
              s = this.findFirstSnapIndex(n);
            ("number" != typeof o || this.viewItems[o].visible) && ("number" != typeof s || this.viewItems[s].visible) && this._onDidSashReset.fire(e);
          }),
          g = (0, c.F8)(s, a, h, u, t),
          p = {
            sash: t,
            disposable: g
          };
        this.sashItems.splice(i - 1, 0, p);
      }
      let _;
      (a.appendChild(e.element), "number" != typeof t && "split" === t.type && (_ = [t.index]), s || this.relayout([i], _), (this.state = v.Idle), s || "number" == typeof t || "distribute" !== t.type || this.distributeViewSizes());
    }
    relayout(e, t) {
      const i = this.viewItems.reduce((e, t) => e + t.size, 0);
      (this.resize(this.viewItems.length - 1, this.size - i, void 0, e, t), this.distributeEmptySpace(), this.layoutViews(), this.saveProportions());
    }
    resize(e, t, i = this.viewItems.map(e => e.size), n, o, s = Number.NEGATIVE_INFINITY, a = Number.POSITIVE_INFINITY, l, c) {
      if (e < 0 || e >= this.viewItems.length) return 0;
      const h = (0, r.w6)(e, -1),
        u = (0, r.w6)(e + 1, this.viewItems.length);
      if (o) for (const e of o) ((0, r.zI)(h, e), (0, r.zI)(u, e));
      if (n) for (const e of n) ((0, r.al)(h, e), (0, r.al)(u, e));
      const g = h.map(e => this.viewItems[e]),
        p = h.map(e => i[e]),
        f = u.map(e => this.viewItems[e]),
        m = u.map(e => i[e]),
        v = h.reduce((e, t) => e + (this.viewItems[t].minimumSize - i[t]), 0),
        _ = h.reduce((e, t) => e + (this.viewItems[t].maximumSize - i[t]), 0),
        b = 0 === u.length ? Number.POSITIVE_INFINITY : u.reduce((e, t) => e + (i[t] - this.viewItems[t].minimumSize), 0),
        w = 0 === u.length ? Number.NEGATIVE_INFINITY : u.reduce((e, t) => e + (i[t] - this.viewItems[t].maximumSize), 0),
        y = Math.max(v, w, s),
        C = Math.min(b, _, a);
      let x = !1;
      if (l) {
        const e = this.viewItems[l.index],
          i = t >= l.limitDelta;
        ((x = i !== e.visible), e.setVisible(i, l.size));
      }
      if (!x && c) {
        const e = this.viewItems[c.index],
          i = t < c.limitDelta;
        ((x = i !== e.visible), e.setVisible(i, c.size));
      }
      if (x) return this.resize(e, t, i, n, o, s, a);
      for (let e = 0, i = (t = (0, d.u)(t, y, C)); e < g.length; e++) {
        const t = g[e],
          n = (0, d.u)(p[e] + i, t.minimumSize, t.maximumSize);
        ((i -= n - p[e]), (t.size = n));
      }
      for (let e = 0, i = t; e < f.length; e++) {
        const t = f[e],
          n = (0, d.u)(m[e] - i, t.minimumSize, t.maximumSize);
        ((i += n - m[e]), (t.size = n));
      }
      return t;
    }
    distributeEmptySpace(e) {
      const t = this.viewItems.reduce((e, t) => e + t.size, 0);
      let i = this.size - t;
      const n = (0, r.w6)(this.viewItems.length - 1, -1),
        o = n.filter(e => 1 === this.viewItems[e].priority),
        s = n.filter(e => 2 === this.viewItems[e].priority);
      for (const e of s) (0, r.zI)(n, e);
      for (const e of o) (0, r.al)(n, e);
      "number" == typeof e && (0, r.al)(n, e);
      for (let e = 0; 0 !== i && e < n.length; e++) {
        const t = this.viewItems[n[e]],
          o = (0, d.u)(t.size + i, t.minimumSize, t.maximumSize);
        ((i -= o - t.size), (t.size = o));
      }
    }
    layoutViews() {
      this.contentSize = this.viewItems.reduce((e, t) => e + t.size, 0);
      let e = 0;
      for (const t of this.viewItems) (t.layout(e, this.layoutContext), (e += t.size));
      (this.sashItems.forEach(e => e.sash.layout()), this.updateSashEnablement(), this.updateScrollableElement());
    }
    updateScrollableElement() {
      0 === this.orientation ? this.scrollableElement.setScrollDimensions({
        height: this.size,
        scrollHeight: this.contentSize
      }) : this.scrollableElement.setScrollDimensions({
        width: this.size,
        scrollWidth: this.contentSize
      });
    }
    updateSashEnablement() {
      let e = !1;
      const t = this.viewItems.map(t => (e = t.size - t.minimumSize > 0 || e));
      e = !1;
      const i = this.viewItems.map(t => (e = t.maximumSize - t.size > 0 || e)),
        n = [...this.viewItems].reverse();
      e = !1;
      const o = n.map(t => (e = t.size - t.minimumSize > 0 || e)).reverse();
      e = !1;
      const s = n.map(t => (e = t.maximumSize - t.size > 0 || e)).reverse();
      let a = 0;
      for (let e = 0; e < this.sashItems.length; e++) {
        const {
          sash: n
        } = this.sashItems[e];
        a += this.viewItems[e].size;
        const l = !(t[e] && s[e + 1]),
          c = !(i[e] && o[e + 1]);
        if (l && c) {
          const i = (0, r.w6)(e, -1),
            s = (0, r.w6)(e + 1, this.viewItems.length),
            l = this.findFirstSnapIndex(i),
            c = this.findFirstSnapIndex(s),
            d = "number" == typeof l && !this.viewItems[l].visible,
            h = "number" == typeof c && !this.viewItems[c].visible;
          d && o[e] && (a > 0 || this.startSnappingEnabled) ? (n.state = 1) : h && t[e] && (a < this.contentSize || this.endSnappingEnabled) ? (n.state = 2) : (n.state = 0);
        } else n.state = l && !c ? 1 : !l && c ? 2 : 3;
      }
    }
    getSashPosition(e) {
      let t = 0;
      for (let i = 0; i < this.sashItems.length; i++) if (((t += this.viewItems[i].size), this.sashItems[i].sash === e)) return t;
      return 0;
    }
    findFirstSnapIndex(e) {
      for (const t of e) {
        const e = this.viewItems[t];
        if (e.visible && e.snap) return t;
      }
      for (const t of e) {
        const e = this.viewItems[t];
        if (e.visible && e.maximumSize - e.minimumSize > 0) return;
        if (!e.visible && e.snap) return t;
      }
    }
    dispose() {
      (super.dispose(), this.viewItems.forEach(e => e.dispose()), (this.viewItems = []), this.sashItems.forEach(e => e.disposable.dispose()), (this.sashItems = []));
    }
  }
};