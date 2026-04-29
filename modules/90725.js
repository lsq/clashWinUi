module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    IP: () => a,
    Ry: () => n
  });
  var n,
    o = i(9488),
    s = i(5976),
    r = i(89872);
  !(function (e) {
    ((e[(e.PRESERVE = 0)] = "PRESERVE"), (e[(e.LAST = 1)] = "LAST"));
  })(n || (n = {}));
  const a = {
    Quickaccess: "workbench.contributions.quickaccess"
  };
  r.B.add(a.Quickaccess, new (class {
    constructor() {
      ((this.providers = []), (this.defaultProvider = void 0));
    }
    registerQuickAccessProvider(e) {
      return (0 === e.prefix.length ? (this.defaultProvider = e) : this.providers.push(e), this.providers.sort((e, t) => t.prefix.length - e.prefix.length), (0, s.OF)(() => {
        (this.providers.splice(this.providers.indexOf(e), 1), this.defaultProvider === e && (this.defaultProvider = void 0));
      }));
    }
    getQuickAccessProviders() {
      return (0, o.kX)([this.defaultProvider, ...this.providers]);
    }
    getQuickAccessProvider(e) {
      return ((e && this.providers.find(t => e.startsWith(t.prefix))) || void 0 || this.defaultProvider);
    }
  })());
};