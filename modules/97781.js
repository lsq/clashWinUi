module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    EN: () => u,
    IP: () => p,
    Ic: () => m,
    XE: () => c,
    bB: () => v,
    kS: () => h,
    m6: () => g
  });
  var n = i(73046),
    o = i(4669),
    s = i(5976),
    r = i(72065),
    a = i(89872),
    l = i(92321);
  const c = (0, r.yh)("themeService");
  var d, h;
  function u(e) {
    return {
      id: e
    };
  }
  function g(e) {
    switch (e) {
      case l.e.DARK:
        return "vs-dark";
      case l.e.HIGH_CONTRAST:
        return "hc-black";
      default:
        return "vs";
    }
  }
  (!(function (e) {
    e.isThemeColor = function (e) {
      return e && "object" == typeof e && "string" == typeof e.id;
    };
  })(d || (d = {})), (function (e) {
    e.isThemeIcon = function (e) {
      return (e && "object" == typeof e && "string" == typeof e.id && (void 0 === e.color || d.isThemeColor(e.color)));
    };
    const t = new RegExp(`^\\$\\((${n.dT.iconNameExpression}(?:${n.dT.iconModifierExpression})?)\\)$`);
    ((e.fromString = function (e) {
      const i = t.exec(e);
      if (!i) return;
      let [, n] = i;
      return {
        id: n
      };
    }), (e.modify = function (e, t) {
      let i = e.id;
      const n = i.lastIndexOf("~");
      return (-1 !== n && (i = i.substring(0, n)), t && (i = `${i}~${t}`), {
        id: i
      });
    }), (e.isEqual = function (e, t) {
      var i, n;
      return (e.id === t.id && (null === (i = e.color) || void 0 === i ? void 0 : i.id) === (null === (n = t.color) || void 0 === n ? void 0 : n.id));
    }), (e.asThemeIcon = function (e, t) {
      return {
        id: e.id,
        color: t ? u(t) : void 0
      };
    }), (e.asClassNameArray = n.dT.asClassNameArray), (e.asClassName = n.dT.asClassName), (e.asCSSSelector = n.dT.asCSSSelector));
  })(h || (h = {})));
  const p = {
    ThemingContribution: "base.contributions.theming"
  };
  let f = new (class {
    constructor() {
      ((this.themingParticipants = []), (this.themingParticipants = []), (this.onThemingParticipantAddedEmitter = new o.Q5()));
    }
    onColorThemeChange(e) {
      return (this.themingParticipants.push(e), this.onThemingParticipantAddedEmitter.fire(e), (0, s.OF)(() => {
        const t = this.themingParticipants.indexOf(e);
        this.themingParticipants.splice(t, 1);
      }));
    }
    getThemingParticipants() {
      return this.themingParticipants;
    }
  })();
  function m(e) {
    return f.onColorThemeChange(e);
  }
  a.B.add(p.ThemingContribution, f);
  class v extends s.JT {
    constructor(e) {
      (super(), (this.themeService = e), (this.theme = e.getColorTheme()), this._register(this.themeService.onDidColorThemeChange(e => this.onThemeChange(e))));
    }
    onThemeChange(e) {
      ((this.theme = e), this.updateStyles());
    }
    updateStyles() {}
  }
};