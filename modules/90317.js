module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    o: () => h
  });
  var n = i(65321),
    o = i(59069),
    s = i(76033),
    r = i(74741),
    a = i(4669),
    l = i(5976),
    c = i(98401),
    d = (i(82016), function (e, t, i, n) {
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
    });
  class h extends l.JT {
    constructor(e, t = {}) {
      var i, l, c, d, h, u;
      let g, p;
      switch ((super(), (this.triggerKeyDown = !1), (this.focusable = !0), (this._onDidBlur = this._register(new a.Q5())), (this.onDidBlur = this._onDidBlur.event), (this._onDidCancel = this._register(new a.Q5({
        onFirstListenerAdd: () => (this.cancelHasListener = !0)
      }))), (this.onDidCancel = this._onDidCancel.event), (this.cancelHasListener = !1), (this._onDidRun = this._register(new a.Q5())), (this.onDidRun = this._onDidRun.event), (this._onBeforeRun = this._register(new a.Q5())), (this.onBeforeRun = this._onBeforeRun.event), (this.options = t), (this._context = null !== (i = t.context) && void 0 !== i ? i : null), (this._orientation = null !== (l = this.options.orientation) && void 0 !== l ? l : 0), (this._triggerKeys = {
        keyDown: null !== (d = null === (c = this.options.triggerKeys) || void 0 === c ? void 0 : c.keyDown) && void 0 !== d && d,
        keys: null !== (u = null === (h = this.options.triggerKeys) || void 0 === h ? void 0 : h.keys) && void 0 !== u ? u : [3, 10]
      }), this.options.actionRunner ? (this._actionRunner = this.options.actionRunner) : ((this._actionRunner = new r.Wi()), this._register(this._actionRunner)), this._register(this._actionRunner.onDidRun(e => this._onDidRun.fire(e))), this._register(this._actionRunner.onBeforeRun(e => this._onBeforeRun.fire(e))), (this._actionIds = []), (this.viewItems = []), (this.focusedItem = void 0), (this.domNode = document.createElement("div")), (this.domNode.className = "monaco-action-bar"), !1 !== t.animated && this.domNode.classList.add("animated"), this._orientation)) {
        case 0:
          ((g = [15]), (p = [17]));
          break;
        case 1:
          ((g = [16]), (p = [18]), (this.domNode.className += " vertical"));
      }
      (this._register(n.nm(this.domNode, n.tw.KEY_DOWN, e => {
        const t = new o.y(e);
        let i = !0;
        const n = "number" == typeof this.focusedItem ? this.viewItems[this.focusedItem] : void 0;
        (g && (t.equals(g[0]) || t.equals(g[1])) ? (i = this.focusPrevious()) : p && (t.equals(p[0]) || t.equals(p[1])) ? (i = this.focusNext()) : t.equals(9) && this.cancelHasListener ? this._onDidCancel.fire() : t.equals(14) ? (i = this.focusFirst()) : t.equals(13) ? (i = this.focusLast()) : t.equals(2) && n instanceof s.Y && n.trapsArrowNavigation ? (i = this.focusNext()) : this.isTriggerKeyEvent(t) ? this._triggerKeys.keyDown ? this.doTrigger(t) : (this.triggerKeyDown = !0) : (i = !1), i && (t.preventDefault(), t.stopPropagation()));
      })), this._register(n.nm(this.domNode, n.tw.KEY_UP, e => {
        const t = new o.y(e);
        this.isTriggerKeyEvent(t) ? (!this._triggerKeys.keyDown && this.triggerKeyDown && ((this.triggerKeyDown = !1), this.doTrigger(t)), t.preventDefault(), t.stopPropagation()) : (t.equals(2) || t.equals(1026)) && this.updateFocusedItem();
      })), (this.focusTracker = this._register(n.go(this.domNode))), this._register(this.focusTracker.onDidBlur(() => {
        (n.vY() !== this.domNode && n.jg(n.vY(), this.domNode)) || (this._onDidBlur.fire(), (this.focusedItem = void 0), (this.triggerKeyDown = !1));
      })), this._register(this.focusTracker.onDidFocus(() => this.updateFocusedItem())), (this.actionsList = document.createElement("ul")), (this.actionsList.className = "actions-container"), this.actionsList.setAttribute("role", "toolbar"), this.options.ariaLabel && this.actionsList.setAttribute("aria-label", this.options.ariaLabel), this.domNode.appendChild(this.actionsList), e.appendChild(this.domNode));
    }
    isTriggerKeyEvent(e) {
      let t = !1;
      return (this._triggerKeys.keys.forEach(i => {
        t = t || e.equals(i);
      }), t);
    }
    updateFocusedItem() {
      for (let e = 0; e < this.actionsList.children.length; e++) {
        const t = this.actionsList.children[e];
        if (n.jg(n.vY(), t)) {
          this.focusedItem = e;
          break;
        }
      }
    }
    get context() {
      return this._context;
    }
    set context(e) {
      ((this._context = e), this.viewItems.forEach(t => t.setActionContext(e)));
    }
    get actionRunner() {
      return this._actionRunner;
    }
    set actionRunner(e) {
      e && ((this._actionRunner = e), this.viewItems.forEach(t => (t.actionRunner = e)));
    }
    getContainer() {
      return this.domNode;
    }
    push(e, t = {}) {
      const i = Array.isArray(e) ? e : [e];
      let o = c.hj(t.index) ? t.index : null;
      (i.forEach(e => {
        const i = document.createElement("li");
        let r;
        ((i.className = "action-item"), i.setAttribute("role", "presentation"), this.options.allowContextMenu || this._register(n.nm(i, n.tw.CONTEXT_MENU, e => {
          n.zB.stop(e, !0);
        })), this.options.actionViewItemProvider && (r = this.options.actionViewItemProvider(e)), r || (r = new s.g(this.context, e, t)), (r.actionRunner = this._actionRunner), r.setActionContext(this.context), r.render(i), this.focusable && r instanceof s.Y && 0 === this.viewItems.length && r.setFocusable(!0), null === o || o < 0 || o >= this.actionsList.children.length ? (this.actionsList.appendChild(i), this.viewItems.push(r), this._actionIds.push(e.id)) : (this.actionsList.insertBefore(i, this.actionsList.children[o]), this.viewItems.splice(o, 0, r), this._actionIds.splice(o, 0, e.id), o++));
      }), "number" == typeof this.focusedItem && this.focus(this.focusedItem));
    }
    clear() {
      ((0, l.B9)(this.viewItems), (this.viewItems = []), (this._actionIds = []), n.PO(this.actionsList));
    }
    length() {
      return this.viewItems.length;
    }
    focus(e) {
      let t,
        i = !1;
      if ((void 0 === e ? (i = !0) : "number" == typeof e ? (t = e) : "boolean" == typeof e && (i = e), i && void 0 === this.focusedItem)) {
        const e = this.viewItems.findIndex(e => e.isEnabled());
        ((this.focusedItem = -1 === e ? void 0 : e), this.updateFocus());
      } else (void 0 !== t && (this.focusedItem = t), this.updateFocus());
    }
    focusFirst() {
      return ((this.focusedItem = this.length() > 1 ? 1 : 0), this.focusPrevious());
    }
    focusLast() {
      return ((this.focusedItem = this.length() < 2 ? 0 : this.length() - 2), this.focusNext());
    }
    focusNext() {
      if (void 0 === this.focusedItem) this.focusedItem = this.viewItems.length - 1;else if (this.viewItems.length <= 1) return !1;
      const e = this.focusedItem;
      let t;
      do {
        if (this.options.preventLoopNavigation && this.focusedItem + 1 >= this.viewItems.length) return ((this.focusedItem = e), !1);
        ((this.focusedItem = (this.focusedItem + 1) % this.viewItems.length), (t = this.viewItems[this.focusedItem]));
      } while (this.focusedItem !== e && this.options.focusOnlyEnabledItems && !t.isEnabled());
      return (this.updateFocus(), !0);
    }
    focusPrevious() {
      if (void 0 === this.focusedItem) this.focusedItem = 0;else if (this.viewItems.length <= 1) return !1;
      const e = this.focusedItem;
      let t;
      do {
        if (((this.focusedItem = this.focusedItem - 1), this.focusedItem < 0)) {
          if (this.options.preventLoopNavigation) return ((this.focusedItem = e), !1);
          this.focusedItem = this.viewItems.length - 1;
        }
        t = this.viewItems[this.focusedItem];
      } while (this.focusedItem !== e && this.options.focusOnlyEnabledItems && !t.isEnabled());
      return (this.updateFocus(!0), !0);
    }
    updateFocus(e, t) {
      void 0 === this.focusedItem && this.actionsList.focus({
        preventScroll: t
      });
      for (let i = 0; i < this.viewItems.length; i++) {
        const n = this.viewItems[i],
          o = n;
        if (i === this.focusedItem) {
          let i = !0;
          (c.mf(o.focus) || (i = !1), this.options.focusOnlyEnabledItems && c.mf(n.isEnabled) && !n.isEnabled() && (i = !1), i ? o.focus(e) : this.actionsList.focus({
            preventScroll: t
          }));
        } else c.mf(o.blur) && o.blur();
      }
    }
    doTrigger(e) {
      if (void 0 === this.focusedItem) return;
      const t = this.viewItems[this.focusedItem];
      if (t instanceof s.Y) {
        const i = null === t._context || void 0 === t._context ? e : t._context;
        this.run(t._action, i);
      }
    }
    run(e, t) {
      return d(this, void 0, void 0, function* () {
        yield this._actionRunner.run(e, t);
      });
    }
    dispose() {
      ((0, l.B9)(this.viewItems), (this.viewItems = []), (this._actionIds = []), this.getContainer().remove(), super.dispose());
    }
  }
};