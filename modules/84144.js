module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    BH: () => _,
    NZ: () => b,
    U8: () => w,
    co: () => v,
    eH: () => m,
    vr: () => f
  });
  var n = i(74741),
    o = i(73046),
    s = i(4669),
    r = i(53725),
    a = i(5976),
    l = i(91741),
    c = i(94565),
    d = i(38819),
    h = i(72065),
    u = i(97781),
    g = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    p = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  function f(e) {
    return void 0 !== e.command;
  }
  class m {
    constructor(e) {
      ((this.id = m._idPool++), (this._debugName = e));
    }
  }
  ((m._idPool = 0), (m.CommandPalette = new m("CommandPalette")), (m.EditorContext = new m("EditorContext")), (m.SimpleEditorContext = new m("SimpleEditorContext")), (m.EditorContextCopy = new m("EditorContextCopy")), (m.EditorContextPeek = new m("EditorContextPeek")), (m.MenubarEditMenu = new m("MenubarEditMenu")), (m.MenubarCopy = new m("MenubarCopy")), (m.MenubarGoMenu = new m("MenubarGoMenu")), (m.MenubarSelectionMenu = new m("MenubarSelectionMenu")), (m.InlineCompletionsActions = new m("InlineCompletionsActions")));
  const v = (0, h.yh)("menuService"),
    _ = new (class {
      constructor() {
        ((this._commands = new Map()), (this._menuItems = new Map()), (this._onDidChangeMenu = new s.Q5()), (this.onDidChangeMenu = this._onDidChangeMenu.event), (this._commandPaletteChangeEvent = {
          has: e => e === m.CommandPalette
        }));
      }
      addCommand(e) {
        return this.addCommands(r.$.single(e));
      }
      addCommands(e) {
        for (const t of e) this._commands.set(t.id, t);
        return (this._onDidChangeMenu.fire(this._commandPaletteChangeEvent), (0, a.OF)(() => {
          let t = !1;
          for (const i of e) t = this._commands.delete(i.id) || t;
          t && this._onDidChangeMenu.fire(this._commandPaletteChangeEvent);
        }));
      }
      getCommand(e) {
        return this._commands.get(e);
      }
      getCommands() {
        const e = new Map();
        return (this._commands.forEach((t, i) => e.set(i, t)), e);
      }
      appendMenuItem(e, t) {
        return this.appendMenuItems(r.$.single({
          id: e,
          item: t
        }));
      }
      appendMenuItems(e) {
        const t = new Set(),
          i = new l.S();
        for (const {
          id: n,
          item: o
        } of e) {
          let e = this._menuItems.get(n);
          (e || ((e = new l.S()), this._menuItems.set(n, e)), i.push(e.push(o)), t.add(n));
        }
        return (this._onDidChangeMenu.fire(t), (0, a.OF)(() => {
          if (i.size > 0) {
            for (let e of i) e();
            (this._onDidChangeMenu.fire(t), i.clear());
          }
        }));
      }
      getMenuItems(e) {
        let t;
        return ((t = this._menuItems.has(e) ? [...this._menuItems.get(e)] : []), e === m.CommandPalette && this._appendImplicitItems(t), t);
      }
      _appendImplicitItems(e) {
        const t = new Set();
        for (const i of e) f(i) && (t.add(i.command.id), i.alt && t.add(i.alt.id));
        this._commands.forEach((i, n) => {
          t.has(n) || e.push({
            command: i
          });
        });
      }
    })();
  class b extends n.wY {
    constructor(e, t, i, n) {
      (super(`submenuitem.${e.submenu.id}`, "string" == typeof e.title ? e.title : e.title.value, [], "submenu"), (this.item = e), (this._menuService = t), (this._contextKeyService = i), (this._options = n));
    }
    get actions() {
      const e = [],
        t = this._menuService.createMenu(this.item.submenu, this._contextKeyService),
        i = t.getActions(this._options);
      t.dispose();
      for (const [, t] of i) t.length > 0 && (e.push(...t), e.push(new n.Z0()));
      return (e.length && e.pop(), e);
    }
  }
  let w = class e {
    constructor(t, i, n, s, r) {
      var a, l;
      if (((this._commandService = r), (this.id = t.id), (this.label = (null == n ? void 0 : n.renderShortTitle) && t.shortTitle ? "string" == typeof t.shortTitle ? t.shortTitle : t.shortTitle.value : "string" == typeof t.title ? t.title : t.title.value), (this.tooltip = null !== (l = "string" == typeof t.tooltip ? t.tooltip : null === (a = t.tooltip) || void 0 === a ? void 0 : a.value) && void 0 !== l ? l : ""), (this.enabled = !t.precondition || s.contextMatchesRules(t.precondition)), (this.checked = void 0), t.toggled)) {
        const e = t.toggled.condition ? t.toggled : {
          condition: t.toggled
        };
        ((this.checked = s.contextMatchesRules(e.condition)), this.checked && e.tooltip && (this.tooltip = "string" == typeof e.tooltip ? e.tooltip : e.tooltip.value), e.title && (this.label = "string" == typeof e.title ? e.title : e.title.value));
      }
      ((this.item = t), (this.alt = i ? new e(i, void 0, n, s, r) : void 0), (this._options = n), u.kS.isThemeIcon(t.icon) && (this.class = o.dT.asClassName(t.icon)));
    }
    dispose() {}
    run(...e) {
      var t, i;
      let n = [];
      return ((null === (t = this._options) || void 0 === t ? void 0 : t.arg) && (n = [...n, this._options.arg]), (null === (i = this._options) || void 0 === i ? void 0 : i.shouldForwardArgs) && (n = [...n, ...e]), this._commandService.executeCommand(this.id, ...n));
    }
  };
  w = g([p(3, d.i6), p(4, c.H)], w);
};