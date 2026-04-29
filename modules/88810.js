module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Jl: () => a,
    O2: () => l,
    WZ: () => r,
    o: () => o,
    tj: () => d
  });
  var n = i(73910);
  function o(e, t) {
    const i = Object.create(null);
    for (let o in t) {
      const s = t[o];
      s && (i[o] = (0, n.Sn)(s, e));
    }
    return i;
  }
  function s(e, t, i) {
    function n() {
      const n = o(e.getColorTheme(), t);
      "function" == typeof i ? i(n) : i.style(n);
    }
    return (n(), e.onDidColorThemeChange(n));
  }
  function r(e, t, i) {
    return s(t, {
      badgeBackground: (null == i ? void 0 : i.badgeBackground) || n.g8,
      badgeForeground: (null == i ? void 0 : i.badgeForeground) || n.qe,
      badgeBorder: n.lR
    }, e);
  }
  function a(e, t, i) {
    return s(t, Object.assign(Object.assign({}, l), i || {}), e);
  }
  const l = {
      listFocusBackground: n._b,
      listFocusForeground: n._2,
      listFocusOutline: n.Oo,
      listActiveSelectionBackground: n.dC,
      listActiveSelectionForeground: n.M6,
      listActiveSelectionIconForeground: n.Tn,
      listFocusAndSelectionBackground: n.dC,
      listFocusAndSelectionForeground: n.M6,
      listInactiveSelectionBackground: n.rg,
      listInactiveSelectionIconForeground: n.kv,
      listInactiveSelectionForeground: n.yt,
      listInactiveFocusBackground: n.s$,
      listInactiveFocusOutline: n.F3,
      listHoverBackground: n.mV,
      listHoverForeground: n.$d,
      listDropBackground: n.AS,
      listSelectionOutline: n.xL,
      listHoverOutline: n.xL,
      listFilterWidgetBackground: n.vG,
      listFilterWidgetOutline: n.oS,
      listFilterWidgetNoMatchesOutline: n.S,
      listMatchesShadow: n.rh,
      treeIndentGuidesStroke: n.Un,
      tableColumnsBorder: n.ux
    },
    c = {
      shadowColor: n.rh,
      borderColor: n.Cd,
      foregroundColor: n.DE,
      backgroundColor: n.Hz,
      selectionForegroundColor: n.jb,
      selectionBackgroundColor: n.$D,
      selectionBorderColor: n.E3,
      separatorColor: n.ZG
    };
  function d(e, t, i) {
    return s(t, Object.assign(Object.assign({}, c), i), e);
  }
};