module.exports = (e, t, i) => {
  "use strict";

  i.r(t);
  var n = i(89872),
    o = i(90725),
    s = i(20913),
    r = i(5976),
    a = i(63580),
    l = i(41157),
    c = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    d = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let h = class e {
    constructor(e) {
      ((this.quickInputService = e), (this.registry = n.B.as(o.IP.Quickaccess)));
    }
    provide(t) {
      const i = new r.SL();
      (i.add(t.onDidAccept(() => {
        const [e] = t.selectedItems;
        e && this.quickInputService.quickAccess.show(e.prefix, {
          preserveValue: !0
        });
      })), i.add(t.onDidChangeValue(t => {
        const i = this.registry.getQuickAccessProvider(t.substr(e.PREFIX.length));
        i && i.prefix && i.prefix !== e.PREFIX && this.quickInputService.quickAccess.show(i.prefix, {
          preserveValue: !0
        });
      })));
      const {
        editorProviders: n,
        globalProviders: o
      } = this.getQuickAccessProviders();
      return ((t.items = 0 === n.length || 0 === o.length ? [...(0 === n.length ? o : n)] : [{
        label: (0, a.N)("globalCommands", "global commands"),
        type: "separator"
      }, ...o, {
        label: (0, a.N)("editorCommands", "editor commands"),
        type: "separator"
      }, ...n]), i);
    }
    getQuickAccessProviders() {
      const t = [],
        i = [];
      for (const n of this.registry.getQuickAccessProviders().sort((e, t) => e.prefix.localeCompare(t.prefix))) if (n.prefix !== e.PREFIX) for (const e of n.helpEntries) {
        const o = e.prefix || n.prefix,
          s = o || "…";
        (e.needsEditor ? i : t).push({
          prefix: o,
          label: s,
          ariaLabel: (0, a.N)("helpPickAriaLabel", "{0}, {1}", s, e.description),
          description: e.description
        });
      }
      return {
        editorProviders: i,
        globalProviders: t
      };
    }
  };
  ((h.PREFIX = "?"), (h = c([d(0, l.eJ)], h)), n.B.as(o.IP.Quickaccess).registerQuickAccessProvider({
    ctor: h,
    prefix: "",
    helpEntries: [{
      description: s.ld.helpQuickAccessActionLabel,
      needsEditor: !0
    }]
  }));
};