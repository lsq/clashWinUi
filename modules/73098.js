module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    g: () => _,
    l: () => u
  });
  var n = i(65321),
    o = i(4850),
    s = i(10553),
    r = i(15393),
    a = i(49898),
    l = i(4669),
    c = i(5976),
    d = i(1432),
    h = (i(44118), function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    });
  var u;
  !(function (e) {
    ((e.North = "north"), (e.South = "south"), (e.East = "east"), (e.West = "west"));
  })(u || (u = {}));
  const g = new l.Q5();
  const p = new l.Q5();
  class f {
    constructor() {
      this.disposables = new c.SL();
    }
    get onPointerMove() {
      return this.disposables.add(new o.Y(window, "mousemove")).event;
    }
    get onPointerUp() {
      return this.disposables.add(new o.Y(window, "mouseup")).event;
    }
    dispose() {
      this.disposables.dispose();
    }
  }
  (h([a.H], f.prototype, "onPointerMove", null), h([a.H], f.prototype, "onPointerUp", null));
  class m {
    constructor(e) {
      ((this.el = e), (this.disposables = new c.SL()));
    }
    get onPointerMove() {
      return this.disposables.add(new o.Y(this.el, s.t.Change)).event;
    }
    get onPointerUp() {
      return this.disposables.add(new o.Y(this.el, s.t.End)).event;
    }
    dispose() {
      this.disposables.dispose();
    }
  }
  (h([a.H], m.prototype, "onPointerMove", null), h([a.H], m.prototype, "onPointerUp", null));
  class v {
    constructor(e) {
      this.factory = e;
    }
    get onPointerMove() {
      return this.factory.onPointerMove;
    }
    get onPointerUp() {
      return this.factory.onPointerUp;
    }
    dispose() {}
  }
  (h([a.H], v.prototype, "onPointerMove", null), h([a.H], v.prototype, "onPointerUp", null));
  class _ extends c.JT {
    constructor(e, t, i) {
      (super(), (this.hoverDelay = 300), (this.hoverDelayer = this._register(new r.vp(this.hoverDelay))), (this._state = 3), (this._onDidEnablementChange = this._register(new l.Q5())), (this.onDidEnablementChange = this._onDidEnablementChange.event), (this._onDidStart = this._register(new l.Q5())), (this.onDidStart = this._onDidStart.event), (this._onDidChange = this._register(new l.Q5())), (this.onDidChange = this._onDidChange.event), (this._onDidReset = this._register(new l.Q5())), (this.onDidReset = this._onDidReset.event), (this._onDidEnd = this._register(new l.Q5())), (this.onDidEnd = this._onDidEnd.event), (this.linkedSash = void 0), (this.orthogonalStartSashDisposables = this._register(new c.SL())), (this.orthogonalStartDragHandleDisposables = this._register(new c.SL())), (this.orthogonalEndSashDisposables = this._register(new c.SL())), (this.orthogonalEndDragHandleDisposables = this._register(new c.SL())), (this.el = (0, n.R3)(e, (0, n.$)(".monaco-sash"))), i.orthogonalEdge && this.el.classList.add(`orthogonal-edge-${i.orthogonalEdge}`), d.dz && this.el.classList.add("mac"));
      const a = this._register(new o.Y(this.el, "mousedown")).event;
      this._register(a(e => this.onPointerStart(e, new f()), this));
      const h = this._register(new o.Y(this.el, "dblclick")).event;
      this._register(h(this.onPointerDoublePress, this));
      const u = this._register(new o.Y(this.el, "mouseenter")).event;
      this._register(u(() => _.onMouseEnter(this)));
      const v = this._register(new o.Y(this.el, "mouseleave")).event;
      (this._register(v(() => _.onMouseLeave(this))), this._register(s.o.addTarget(this.el)));
      const b = l.ju.map(this._register(new o.Y(this.el, s.t.Start)).event, e => {
        var t;
        return Object.assign(Object.assign({}, e), {
          target: null !== (t = e.initialTarget) && void 0 !== t ? t : null
        });
      });
      this._register(b(e => this.onPointerStart(e, new m(this.el)), this));
      const w = this._register(new o.Y(this.el, s.t.Tap)).event,
        y = l.ju.map(l.ju.filter(l.ju.debounce(w, (e, t) => {
          var i;
          return {
            event: t,
            count: (null !== (i = null == e ? void 0 : e.count) && void 0 !== i ? i : 0) + 1
          };
        }, 250), ({
          count: e
        }) => 2 === e), ({
          event: e
        }) => {
          var t;
          return Object.assign(Object.assign({}, e), {
            target: null !== (t = e.initialTarget) && void 0 !== t ? t : null
          });
        });
      (this._register(y(this.onPointerDoublePress, this)), "number" == typeof i.size ? ((this.size = i.size), 0 === i.orientation ? (this.el.style.width = `${this.size}px`) : (this.el.style.height = `${this.size}px`)) : ((this.size = 4), this._register(g.event(e => {
        ((this.size = e), this.layout());
      }))), this._register(p.event(e => (this.hoverDelay = e))), (this.hidden = !1), (this.layoutProvider = t), (this.orthogonalStartSash = i.orthogonalStartSash), (this.orthogonalEndSash = i.orthogonalEndSash), (this.orientation = i.orientation || 0), 1 === this.orientation ? (this.el.classList.add("horizontal"), this.el.classList.remove("vertical")) : (this.el.classList.remove("horizontal"), this.el.classList.add("vertical")), this.el.classList.toggle("debug", false), this.layout());
    }
    get state() {
      return this._state;
    }
    set state(e) {
      this._state !== e && (this.el.classList.toggle("disabled", 0 === e), this.el.classList.toggle("minimum", 1 === e), this.el.classList.toggle("maximum", 2 === e), (this._state = e), this._onDidEnablementChange.fire(e));
    }
    get orthogonalStartSash() {
      return this._orthogonalStartSash;
    }
    set orthogonalStartSash(e) {
      if ((this.orthogonalStartDragHandleDisposables.clear(), this.orthogonalStartSashDisposables.clear(), e)) {
        const t = t => {
          (this.orthogonalStartDragHandleDisposables.clear(), 0 !== t && ((this._orthogonalStartDragHandle = (0, n.R3)(this.el, (0, n.$)(".orthogonal-drag-handle.start"))), this.orthogonalStartDragHandleDisposables.add((0, c.OF)(() => this._orthogonalStartDragHandle.remove())), this.orthogonalStartDragHandleDisposables.add(new o.Y(this._orthogonalStartDragHandle, "mouseenter")).event(() => _.onMouseEnter(e), void 0, this.orthogonalStartDragHandleDisposables), this.orthogonalStartDragHandleDisposables.add(new o.Y(this._orthogonalStartDragHandle, "mouseleave")).event(() => _.onMouseLeave(e), void 0, this.orthogonalStartDragHandleDisposables)));
        };
        (this.orthogonalStartSashDisposables.add(e.onDidEnablementChange(t, this)), t(e.state));
      }
      this._orthogonalStartSash = e;
    }
    get orthogonalEndSash() {
      return this._orthogonalEndSash;
    }
    set orthogonalEndSash(e) {
      if ((this.orthogonalEndDragHandleDisposables.clear(), this.orthogonalEndSashDisposables.clear(), e)) {
        const t = t => {
          (this.orthogonalEndDragHandleDisposables.clear(), 0 !== t && ((this._orthogonalEndDragHandle = (0, n.R3)(this.el, (0, n.$)(".orthogonal-drag-handle.end"))), this.orthogonalEndDragHandleDisposables.add((0, c.OF)(() => this._orthogonalEndDragHandle.remove())), this.orthogonalEndDragHandleDisposables.add(new o.Y(this._orthogonalEndDragHandle, "mouseenter")).event(() => _.onMouseEnter(e), void 0, this.orthogonalEndDragHandleDisposables), this.orthogonalEndDragHandleDisposables.add(new o.Y(this._orthogonalEndDragHandle, "mouseleave")).event(() => _.onMouseLeave(e), void 0, this.orthogonalEndDragHandleDisposables)));
        };
        (this.orthogonalEndSashDisposables.add(e.onDidEnablementChange(t, this)), t(e.state));
      }
      this._orthogonalEndSash = e;
    }
    onPointerStart(e, t) {
      n.zB.stop(e);
      let i = !1;
      if (!e.__orthogonalSashEvent) {
        const n = this.getOrthogonalSash(e);
        n && ((i = !0), (e.__orthogonalSashEvent = !0), n.onPointerStart(e, new v(t)));
      }
      if ((this.linkedSash && !e.__linkedSashEvent && ((e.__linkedSashEvent = !0), this.linkedSash.onPointerStart(e, new v(t))), !this.state)) return;
      const o = (0, n.H$)("iframe");
      for (const e of o) e.style.pointerEvents = "none";
      const s = e.pageX,
        r = e.pageY,
        a = e.altKey,
        l = {
          startX: s,
          currentX: s,
          startY: r,
          currentY: r,
          altKey: a
        };
      (this.el.classList.add("active"), this._onDidStart.fire(l));
      const h = (0, n.dS)(this.el),
        u = () => {
          let e = "";
          ((e = i ? "all-scroll" : 1 === this.orientation ? 1 === this.state ? "s-resize" : 2 === this.state ? "n-resize" : d.dz ? "row-resize" : "ns-resize" : 1 === this.state ? "e-resize" : 2 === this.state ? "w-resize" : d.dz ? "col-resize" : "ew-resize"), (h.textContent = `* { cursor: ${e} !important; }`));
        },
        g = new c.SL();
      (u(), i || this.onDidEnablementChange(u, null, g));
      (t.onPointerMove(e => {
        n.zB.stop(e, !1);
        const t = {
          startX: s,
          currentX: e.pageX,
          startY: r,
          currentY: e.pageY,
          altKey: a
        };
        this._onDidChange.fire(t);
      }, null, g), t.onPointerUp(e => {
        (n.zB.stop(e, !1), this.el.removeChild(h), this.el.classList.remove("active"), this._onDidEnd.fire(), g.dispose());
        for (const e of o) e.style.pointerEvents = "auto";
      }, null, g), g.add(t));
    }
    onPointerDoublePress(e) {
      const t = this.getOrthogonalSash(e);
      (t && t._onDidReset.fire(), this.linkedSash && this.linkedSash._onDidReset.fire(), this._onDidReset.fire());
    }
    static onMouseEnter(e, t = !1) {
      (e.el.classList.contains("active") ? (e.hoverDelayer.cancel(), e.el.classList.add("hover")) : e.hoverDelayer.trigger(() => e.el.classList.add("hover"), e.hoverDelay).then(void 0, () => {}), !t && e.linkedSash && _.onMouseEnter(e.linkedSash, !0));
    }
    static onMouseLeave(e, t = !1) {
      (e.hoverDelayer.cancel(), e.el.classList.remove("hover"), !t && e.linkedSash && _.onMouseLeave(e.linkedSash, !0));
    }
    clearSashHoverState() {
      _.onMouseLeave(this);
    }
    layout() {
      if (0 === this.orientation) {
        const e = this.layoutProvider;
        ((this.el.style.left = e.getVerticalSashLeft(this) - this.size / 2 + "px"), e.getVerticalSashTop && (this.el.style.top = e.getVerticalSashTop(this) + "px"), e.getVerticalSashHeight && (this.el.style.height = e.getVerticalSashHeight(this) + "px"));
      } else {
        const e = this.layoutProvider;
        ((this.el.style.top = e.getHorizontalSashTop(this) - this.size / 2 + "px"), e.getHorizontalSashLeft && (this.el.style.left = e.getHorizontalSashLeft(this) + "px"), e.getHorizontalSashWidth && (this.el.style.width = e.getHorizontalSashWidth(this) + "px"));
      }
    }
    hide() {
      ((this.hidden = !0), (this.el.style.display = "none"), this.el.setAttribute("aria-hidden", "true"));
    }
    getOrthogonalSash(e) {
      if (e.target && e.target instanceof HTMLElement) return e.target.classList.contains("orthogonal-drag-handle") ? e.target.classList.contains("start") ? this.orthogonalStartSash : this.orthogonalEndSash : void 0;
    }
    dispose() {
      (super.dispose(), this.el.remove());
    }
  }
};