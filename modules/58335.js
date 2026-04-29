module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Mm: () => D,
    Id: () => T,
    vr: () => N
  });
  var n = i(65321),
    o = i(59069),
    s = i(76033),
    r = i(10553),
    a = i(74741),
    l = i(4669);
  i(84843);
  class c extends a.Wi {
    constructor(e, t) {
      (super(), (this._onDidChangeVisibility = this._register(new l.Q5())), (this.onDidChangeVisibility = this._onDidChangeVisibility.event), (this._element = (0, n.R3)(e, (0, n.$)(".monaco-dropdown"))), (this._label = (0, n.R3)(this._element, (0, n.$)(".dropdown-label"))));
      let i = t.labelRenderer;
      i || (i = e => ((e.textContent = t.label || ""), null));
      for (const e of [n.tw.CLICK, n.tw.MOUSE_DOWN, r.t.Tap]) this._register((0, n.nm)(this.element, e, e => n.zB.stop(e, !0)));
      for (const e of [n.tw.MOUSE_DOWN, r.t.Tap]) this._register((0, n.nm)(this._label, e, e => {
        (e instanceof MouseEvent && e.detail > 1) || (this.visible ? this.hide() : this.show());
      }));
      this._register((0, n.nm)(this._label, n.tw.KEY_UP, e => {
        const t = new o.y(e);
        (t.equals(3) || t.equals(10)) && (n.zB.stop(e, !0), this.visible ? this.hide() : this.show());
      }));
      const s = i(this._label);
      (s && this._register(s), this._register(r.o.addTarget(this._label)));
    }
    get element() {
      return this._element;
    }
    show() {
      this.visible || ((this.visible = !0), this._onDidChangeVisibility.fire(!0));
    }
    hide() {
      this.visible && ((this.visible = !1), this._onDidChangeVisibility.fire(!1));
    }
    dispose() {
      (super.dispose(), this.hide(), this.boxContainer && (this.boxContainer.remove(), (this.boxContainer = void 0)), this.contents && (this.contents.remove(), (this.contents = void 0)), this._label && (this._label.remove(), (this._label = void 0)));
    }
  }
  class d extends c {
    constructor(e, t) {
      (super(e, t), (this._actions = []), (this._contextMenuProvider = t.contextMenuProvider), (this.actions = t.actions || []), (this.actionProvider = t.actionProvider), (this.menuClassName = t.menuClassName || ""), (this.menuAsChild = !!t.menuAsChild));
    }
    set menuOptions(e) {
      this._menuOptions = e;
    }
    get menuOptions() {
      return this._menuOptions;
    }
    get actions() {
      return this.actionProvider ? this.actionProvider.getActions() : this._actions;
    }
    set actions(e) {
      this._actions = e;
    }
    show() {
      (super.show(), this.element.classList.add("active"), this._contextMenuProvider.showContextMenu({
        getAnchor: () => this.element,
        getActions: () => this.actions,
        getActionsContext: () => this.menuOptions ? this.menuOptions.context : null,
        getActionViewItem: e => this.menuOptions && this.menuOptions.actionViewItemProvider ? this.menuOptions.actionViewItemProvider(e) : void 0,
        getKeyBinding: e => this.menuOptions && this.menuOptions.getKeyBinding ? this.menuOptions.getKeyBinding(e) : void 0,
        getMenuClassName: () => this.menuClassName,
        onHide: () => this.onHide(),
        actionRunner: this.menuOptions ? this.menuOptions.actionRunner : void 0,
        anchorAlignment: this.menuOptions ? this.menuOptions.anchorAlignment : 0,
        domForShadowRoot: this.menuAsChild ? this.element : void 0
      }));
    }
    hide() {
      super.hide();
    }
    onHide() {
      (this.hide(), this.element.classList.remove("active"));
    }
  }
  class h extends s.Y {
    constructor(e, t, i, n = Object.create(null)) {
      (super(null, e, n), (this.actionItem = null), (this._onDidChangeVisibility = this._register(new l.Q5())), (this.menuActionsOrProvider = t), (this.contextMenuProvider = i), (this.options = n), this.options.actionRunner && (this.actionRunner = this.options.actionRunner));
    }
    render(e) {
      this.actionItem = e;
      const t = Array.isArray(this.menuActionsOrProvider),
        i = {
          contextMenuProvider: this.contextMenuProvider,
          labelRenderer: e => {
            this.element = (0, n.R3)(e, (0, n.$)("a.action-label"));
            let t = [];
            return ("string" == typeof this.options.classNames ? (t = this.options.classNames.split(/\s+/g).filter(e => !!e)) : this.options.classNames && (t = this.options.classNames), t.find(e => "icon" === e) || t.push("codicon"), this.element.classList.add(...t), this.element.setAttribute("role", "button"), this.element.setAttribute("aria-haspopup", "true"), this.element.setAttribute("aria-expanded", "false"), (this.element.title = this._action.label || ""), null);
          },
          menuAsChild: this.options.menuAsChild,
          actions: t ? this.menuActionsOrProvider : void 0,
          actionProvider: t ? void 0 : this.menuActionsOrProvider
        };
      if (((this.dropdownMenu = this._register(new d(e, i))), this._register(this.dropdownMenu.onDidChangeVisibility(e => {
        var t;
        (null === (t = this.element) || void 0 === t || t.setAttribute("aria-expanded", `${e}`), this._onDidChangeVisibility.fire(e));
      })), (this.dropdownMenu.menuOptions = {
        actionViewItemProvider: this.options.actionViewItemProvider,
        actionRunner: this.actionRunner,
        getKeyBinding: this.options.keybindingProvider,
        context: this._context
      }), this.options.anchorAlignmentProvider)) {
        const e = this;
        this.dropdownMenu.menuOptions = Object.assign(Object.assign({}, this.dropdownMenu.menuOptions), {
          get anchorAlignment() {
            return e.options.anchorAlignmentProvider();
          }
        });
      }
      this.updateEnabled();
    }
    setActionContext(e) {
      (super.setActionContext(e), this.dropdownMenu && (this.dropdownMenu.menuOptions ? (this.dropdownMenu.menuOptions.context = e) : (this.dropdownMenu.menuOptions = {
        context: e
      })));
    }
    updateEnabled() {
      var e, t;
      const i = !this.getAction().enabled;
      (null === (e = this.actionItem) || void 0 === e || e.classList.toggle("disabled", i), null === (t = this.element) || void 0 === t || t.classList.toggle("disabled", i));
    }
  }
  var u = i(8030),
    g = i(5976),
    p = i(1432),
    f = (i(38453), i(63580)),
    m = i(84144),
    v = i(38819),
    _ = i(5606),
    b = i(72065),
    w = i(91847),
    y = i(59422),
    C = i(26904),
    x = i(97781),
    S = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    k = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    L = function (e, t, i, n) {
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
  function N(e, t, i, n, o, s, r) {
    const l = e.getActions(t);
    return ((function (e, t, i, n = e => "navigation" === e, o = Number.MAX_SAFE_INTEGER, s = () => !1, r = !1) {
      let l, c;
      Array.isArray(t) ? ((l = t), (c = t)) : ((l = t.primary), (c = t.secondary));
      const d = new Set();
      for (const [t, o] of e) {
        let e;
        n(t) ? ((e = l), e.length > 0 && r && e.push(new a.Z0())) : ((e = c), e.length > 0 && e.push(new a.Z0()));
        for (let n of o) {
          i && (n = n instanceof m.U8 && n.alt ? n.alt : n);
          const o = e.push(n);
          n instanceof a.wY && d.add({
            group: t,
            action: n,
            index: o - 1
          });
        }
      }
      for (const {
        group: e,
        action: t,
        index: i
      } of d) {
        const r = n(e) ? l : c,
          a = t.actions;
        (a.length <= 1 || r.length + a.length - 2 <= o) && s(t, e, r.length) && r.splice(i, 1, ...a);
      }
      if (l !== c && l.length > o) {
        const e = l.splice(o, l.length - o);
        c.unshift(...e, new a.Z0());
      }
    })(l, i, !1, "string" == typeof n ? e => e === n : n, o, s, r), (function (e) {
      const t = new g.SL();
      for (const [, i] of e) for (const e of i) t.add(e);
      return t;
    })(l));
  }
  let D = class extends s.g {
    constructor(e, t, i, o, s) {
      (super(void 0, e, {
        icon: !(!e.class && !e.item.icon),
        label: !e.class && !e.item.icon,
        draggable: null == t ? void 0 : t.draggable
      }), (this._keybindingService = i), (this._notificationService = o), (this._contextKeyService = s), (this._wantsAltCommand = !1), (this._itemClassDispose = this._register(new g.XK())), (this._altKey = n._q.getInstance()));
    }
    get _menuItemAction() {
      return this._action;
    }
    get _commandAction() {
      return ((this._wantsAltCommand && this._menuItemAction.alt) || this._menuItemAction);
    }
    onClick(e) {
      return L(this, void 0, void 0, function* () {
        (e.preventDefault(), e.stopPropagation());
        try {
          yield this.actionRunner.run(this._commandAction, this._context);
        } catch (e) {
          this._notificationService.error(e);
        }
      });
    }
    render(e) {
      (super.render(e), e.classList.add("menu-entry"), this._updateItemClass(this._menuItemAction.item));
      let t = !1,
        i = this._altKey.keyStatus.altKey || ((p.ED || p.IJ) && this._altKey.keyStatus.shiftKey);
      const o = () => {
        const e = t && i;
        e !== this._wantsAltCommand && ((this._wantsAltCommand = e), this.updateLabel(), this.updateTooltip(), this.updateClass());
      };
      (this._menuItemAction.alt && this._register(this._altKey.event(e => {
        ((i = e.altKey || ((p.ED || p.IJ) && e.shiftKey)), o());
      })), this._register((0, n.nm)(e, "mouseleave", e => {
        ((t = !1), o());
      })), this._register((0, n.nm)(e, "mouseenter", e => {
        ((t = !0), o());
      })));
    }
    updateLabel() {
      this.options.label && this.label && (this.label.textContent = this._commandAction.label);
    }
    updateTooltip() {
      if (this.label) {
        const e = this._keybindingService.lookupKeybinding(this._commandAction.id, this._contextKeyService),
          t = e && e.getLabel(),
          i = this._commandAction.tooltip || this._commandAction.label;
        let n = t ? (0, f.N)("titleAndKb", "{0} ({1})", i, t) : i;
        if (!this._wantsAltCommand && this._menuItemAction.alt) {
          const e = this._menuItemAction.alt.tooltip || this._menuItemAction.alt.label,
            t = this._keybindingService.lookupKeybinding(this._menuItemAction.alt.id, this._contextKeyService),
            i = t && t.getLabel(),
            o = i ? (0, f.N)("titleAndKb", "{0} ({1})", e, i) : e;
          n += `\n[${u.xo.modifierLabels[p.OS].altKey}] ${o}`;
        }
        this.label.title = n;
      }
    }
    updateClass() {
      this.options.icon && (this._commandAction !== this._menuItemAction ? this._menuItemAction.alt && this._updateItemClass(this._menuItemAction.alt.item) : this._menuItemAction.alt && this._updateItemClass(this._menuItemAction.item));
    }
    _updateItemClass(e) {
      var t;
      this._itemClassDispose.value = void 0;
      const {
        element: i,
        label: o
      } = this;
      if (!i || !o) return;
      const s = this._commandAction.checked && (null === (t = e.toggled) || void 0 === t ? void 0 : t.icon) ? e.toggled.icon : e.icon;
      if (s) if (x.kS.isThemeIcon(s)) {
        const e = x.kS.asClassNameArray(s);
        (o.classList.add(...e), (this._itemClassDispose.value = (0, g.OF)(() => {
          o.classList.remove(...e);
        })));
      } else (s.light && o.style.setProperty("--menu-entry-icon-light", (0, n.wY)(s.light)), s.dark && o.style.setProperty("--menu-entry-icon-dark", (0, n.wY)(s.dark)), o.classList.add("icon"), (this._itemClassDispose.value = (0, g.OF)(() => {
        (o.classList.remove("icon"), o.style.removeProperty("--menu-entry-icon-light"), o.style.removeProperty("--menu-entry-icon-dark"));
      })));
    }
  };
  D = S([k(2, w.d), k(3, y.lT), k(4, v.i6)], D);
  let I = class extends h {
    constructor(e, t, i) {
      var n, o;
      const s = Object.assign({}, null != t ? t : Object.create(null), {
        menuAsChild: null !== (n = null == t ? void 0 : t.menuAsChild) && void 0 !== n && n,
        classNames: null !== (o = null == t ? void 0 : t.classNames) && void 0 !== o ? o : x.kS.isThemeIcon(e.item.icon) ? x.kS.asClassName(e.item.icon) : void 0
      });
      super(e, {
        getActions: () => e.actions
      }, i, s);
    }
    render(e) {
      if ((super.render(e), this.element)) {
        e.classList.add("menu-entry");
        const {
          icon: t
        } = this._action.item;
        t && !x.kS.isThemeIcon(t) && (this.element.classList.add("icon"), t.light && this.element.style.setProperty("--menu-entry-icon-light", (0, n.wY)(t.light)), t.dark && this.element.style.setProperty("--menu-entry-icon-dark", (0, n.wY)(t.dark)));
      }
    }
  };
  I = S([k(2, _.i)], I);
  let E = class extends s.Y {
    constructor(e, t, i, n, o, s, r, l) {
      var c, d, u;
      let g;
      (super(null, e), (this._keybindingService = i), (this._notificationService = n), (this._contextMenuService = o), (this._menuService = s), (this._instaService = r), (this._storageService = l), (this._container = null), (this._storageKey = `${e.item.submenu._debugName}_lastActionId`));
      let p = l.get(this._storageKey, 1);
      (p && (g = e.actions.find(e => p === e.id)), g || (g = e.actions[0]), (this._defaultAction = this._instaService.createInstance(D, g, void 0)));
      const f = Object.assign({}, null != t ? t : Object.create(null), {
        menuAsChild: null === (c = null == t ? void 0 : t.menuAsChild) || void 0 === c || c,
        classNames: null !== (d = null == t ? void 0 : t.classNames) && void 0 !== d ? d : ["codicon", "codicon-chevron-down"],
        actionRunner: null !== (u = null == t ? void 0 : t.actionRunner) && void 0 !== u ? u : new a.Wi()
      });
      ((this._dropdown = new h(e, e.actions, this._contextMenuService, f)), this._dropdown.actionRunner.onDidRun(e => {
        e.action instanceof m.U8 && this.update(e.action);
      }));
    }
    update(e) {
      (this._storageService.store(this._storageKey, e.id, 1, 0), this._defaultAction.dispose(), (this._defaultAction = this._instaService.createInstance(D, e, void 0)), (this._defaultAction.actionRunner = new (class extends a.Wi {
        runAction(e, t) {
          return L(this, void 0, void 0, function* () {
            yield e.run(void 0);
          });
        }
      })()), this._container && this._defaultAction.render((0, n.Ce)(this._container, (0, n.$)(".action-container"))));
    }
    setActionContext(e) {
      (super.setActionContext(e), this._defaultAction.setActionContext(e), this._dropdown.setActionContext(e));
    }
    render(e) {
      ((this._container = e), super.render(this._container), this._container.classList.add("monaco-dropdown-with-default"));
      const t = (0, n.$)(".action-container");
      (this._defaultAction.render((0, n.R3)(this._container, t)), this._register((0, n.nm)(t, n.tw.KEY_DOWN, e => {
        const t = new o.y(e);
        t.equals(17) && ((this._defaultAction.element.tabIndex = -1), this._dropdown.focus(), t.stopPropagation());
      })));
      const i = (0, n.$)(".dropdown-action-container");
      (this._dropdown.render((0, n.R3)(this._container, i)), this._register((0, n.nm)(i, n.tw.KEY_DOWN, e => {
        var t;
        const i = new o.y(e);
        i.equals(15) && ((this._defaultAction.element.tabIndex = 0), this._dropdown.setFocusable(!1), null === (t = this._defaultAction.element) || void 0 === t || t.focus(), i.stopPropagation());
      })));
    }
    focus(e) {
      e ? this._dropdown.focus() : ((this._defaultAction.element.tabIndex = 0), this._defaultAction.element.focus());
    }
    blur() {
      ((this._defaultAction.element.tabIndex = -1), this._dropdown.blur(), this._container.blur());
    }
    setFocusable(e) {
      e ? (this._defaultAction.element.tabIndex = 0) : ((this._defaultAction.element.tabIndex = -1), this._dropdown.setFocusable(!1));
    }
    dispose() {
      (this._defaultAction.dispose(), this._dropdown.dispose(), super.dispose());
    }
  };
  function T(e, t, i) {
    return t instanceof m.U8 ? e.createInstance(D, t, void 0) : t instanceof m.NZ ? t.item.rememberDefaultAction ? e.createInstance(E, t, i) : e.createInstance(I, t, i) : void 0;
  }
  E = S([k(2, w.d), k(3, y.lT), k(4, _.i), k(5, m.co), k(6, b.TG), k(7, C.Uy)], E);
};