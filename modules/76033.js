module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Y: () => u,
    g: () => g
  });
  var n = i(16268),
    o = i(23547),
    s = i(65321),
    r = i(10553),
    a = i(74741),
    l = i(5976),
    c = i(1432),
    d = i(98401),
    h = (i(82016), i(63580));
  class u extends l.JT {
    constructor(e, t, i = {}) {
      (super(), (this.options = i), (this._context = e || this), (this._action = t), t instanceof a.aU && this._register(t.onDidChange(e => {
        this.element && this.handleActionChangeEvent(e);
      })));
    }
    handleActionChangeEvent(e) {
      (void 0 !== e.enabled && this.updateEnabled(), void 0 !== e.checked && this.updateChecked(), void 0 !== e.class && this.updateClass(), void 0 !== e.label && (this.updateLabel(), this.updateTooltip()), void 0 !== e.tooltip && this.updateTooltip());
    }
    get actionRunner() {
      return (this._actionRunner || (this._actionRunner = this._register(new a.Wi())), this._actionRunner);
    }
    set actionRunner(e) {
      this._actionRunner = e;
    }
    getAction() {
      return this._action;
    }
    isEnabled() {
      return this._action.enabled;
    }
    setActionContext(e) {
      this._context = e;
    }
    render(e) {
      const t = (this.element = e);
      this._register(r.o.addTarget(e));
      const i = this.options && this.options.draggable;
      (i && ((e.draggable = !0), n.vU && this._register((0, s.nm)(e, s.tw.DRAG_START, e => {
        var t;
        return null === (t = e.dataTransfer) || void 0 === t ? void 0 : t.setData(o.go.TEXT, this._action.label);
      }))), this._register((0, s.nm)(t, r.t.Tap, e => this.onClick(e, !0))), this._register((0, s.nm)(t, s.tw.MOUSE_DOWN, e => {
        (i || s.zB.stop(e, !0), this._action.enabled && 0 === e.button && t.classList.add("active"));
      })), c.dz && this._register((0, s.nm)(t, s.tw.CONTEXT_MENU, e => {
        0 === e.button && !0 === e.ctrlKey && this.onClick(e);
      })), this._register((0, s.nm)(t, s.tw.CLICK, e => {
        (s.zB.stop(e, !0), (this.options && this.options.isMenu) || this.onClick(e));
      })), this._register((0, s.nm)(t, s.tw.DBLCLICK, e => {
        s.zB.stop(e, !0);
      })), [s.tw.MOUSE_UP, s.tw.MOUSE_OUT].forEach(e => {
        this._register((0, s.nm)(t, e, e => {
          (s.zB.stop(e), t.classList.remove("active"));
        }));
      }));
    }
    onClick(e, t = !1) {
      var i;
      s.zB.stop(e, !0);
      const n = d.Jp(this._context) ? (null === (i = this.options) || void 0 === i ? void 0 : i.useEventAsContext) ? e : {
        preserveFocus: t
      } : this._context;
      this.actionRunner.run(this._action, n);
    }
    focus() {
      this.element && ((this.element.tabIndex = 0), this.element.focus(), this.element.classList.add("focused"));
    }
    blur() {
      this.element && (this.element.blur(), (this.element.tabIndex = -1), this.element.classList.remove("focused"));
    }
    setFocusable(e) {
      this.element && (this.element.tabIndex = e ? 0 : -1);
    }
    get trapsArrowNavigation() {
      return !1;
    }
    updateEnabled() {}
    updateLabel() {}
    updateTooltip() {}
    updateClass() {}
    updateChecked() {}
    dispose() {
      (this.element && (this.element.remove(), (this.element = void 0)), super.dispose());
    }
  }
  class g extends u {
    constructor(e, t, i = {}) {
      (super(e, t, i), (this.options = i), (this.options.icon = void 0 !== i.icon && i.icon), (this.options.label = void 0 === i.label || i.label), (this.cssClass = ""));
    }
    render(e) {
      (super.render(e), this.element && (this.label = (0, s.R3)(this.element, (0, s.$)("a.action-label"))), this.label && (this._action.id === a.Z0.ID ? this.label.setAttribute("role", "presentation") : this.options.isMenu ? this.label.setAttribute("role", "menuitem") : this.label.setAttribute("role", "button")), this.options.label && this.options.keybinding && this.element && ((0, s.R3)(this.element, (0, s.$)("span.keybinding")).textContent = this.options.keybinding), this.updateClass(), this.updateLabel(), this.updateTooltip(), this.updateEnabled(), this.updateChecked());
    }
    focus() {
      this.label && ((this.label.tabIndex = 0), this.label.focus());
    }
    blur() {
      this.label && (this.label.tabIndex = -1);
    }
    setFocusable(e) {
      this.label && (this.label.tabIndex = e ? 0 : -1);
    }
    updateLabel() {
      this.options.label && this.label && (this.label.textContent = this.getAction().label);
    }
    updateTooltip() {
      let e = null;
      (this.getAction().tooltip ? (e = this.getAction().tooltip) : !this.options.label && this.getAction().label && this.options.icon && ((e = this.getAction().label), this.options.keybinding && (e = h.N({
        key: "titleLabel",
        comment: ["action title", "action keybinding"]
      }, "{0} ({1})", e, this.options.keybinding))), e && this.label && (this.label.title = e));
    }
    updateClass() {
      (this.cssClass && this.label && this.label.classList.remove(...this.cssClass.split(" ")), this.options.icon ? ((this.cssClass = this.getAction().class), this.label && (this.label.classList.add("codicon"), this.cssClass && this.label.classList.add(...this.cssClass.split(" "))), this.updateEnabled()) : this.label && this.label.classList.remove("codicon"));
    }
    updateEnabled() {
      this.getAction().enabled ? (this.label && (this.label.removeAttribute("aria-disabled"), this.label.classList.remove("disabled")), this.element && this.element.classList.remove("disabled")) : (this.label && (this.label.setAttribute("aria-disabled", "true"), this.label.classList.add("disabled")), this.element && this.element.classList.add("disabled"));
    }
    updateChecked() {
      this.label && (this.getAction().checked ? this.label.classList.add("checked") : this.label.classList.remove("checked"));
    }
  }
};