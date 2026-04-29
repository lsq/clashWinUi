module.exports = (e, t, i) => {
  "use strict";

  var n;
  i.d(t, {
    $L: () => S,
    ED: () => w,
    IJ: () => C,
    OS: () => D,
    WE: () => L,
    dz: () => y,
    gn: () => k,
    li: () => m,
    r: () => T,
    tY: () => x,
    xS: () => N
  });
  const o = "en";
  let s,
    r,
    a = !1,
    l = !1,
    c = !1,
    d = !1,
    h = !1,
    u = !1,
    g = !1,
    p = null,
    f = null;
  const m = "object" == typeof self ? self : "object" == typeof global ? global : {};
  let v;
  void 0 !== m.vscode && void 0 !== m.vscode.process ? (v = m.vscode.process) : "undefined" != typeof process && (v = process);
  const _ = "string" == typeof (null === (n = null == v ? void 0 : v.versions) || void 0 === n ? void 0 : n.electron) && "renderer" === v.type;
  if ("object" != typeof navigator || _) {
    if ("object" == typeof v) {
      ((a = "win32" === v.platform), (l = "darwin" === v.platform), (c = "linux" === v.platform), (d = c && !!v.env.SNAP && !!v.env.SNAP_REVISION), (s = o), (p = o));
      const e = v.env.VSCODE_NLS_CONFIG;
      if (e) try {
        const t = JSON.parse(e),
          i = t.availableLanguages["*"];
        ((s = t.locale), (p = i || o), (f = t._translationsConfigFile));
      } catch (e) {}
      h = !0;
    } else console.error("Unable to resolve platform.");
  } else ((r = navigator.userAgent), (a = r.indexOf("Windows") >= 0), (l = r.indexOf("Macintosh") >= 0), (g = (r.indexOf("Macintosh") >= 0 || r.indexOf("iPad") >= 0 || r.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0), (c = r.indexOf("Linux") >= 0), (u = !0), (s = navigator.language), (p = s));
  let b = 0;
  l ? (b = 1) : a ? (b = 3) : c && (b = 2);
  const w = a,
    y = l,
    C = c,
    x = h,
    S = u,
    k = g,
    L = r,
    N = (function () {
      if (m.setImmediate) return m.setImmediate.bind(m);
      if ("function" == typeof m.postMessage && !m.importScripts) {
        let e = [];
        m.addEventListener("message", t => {
          if (t.data && t.data.vscodeSetImmediateId) for (let i = 0, n = e.length; i < n; i++) {
            const n = e[i];
            if (n.id === t.data.vscodeSetImmediateId) return (e.splice(i, 1), void n.callback());
          }
        });
        let t = 0;
        return i => {
          const n = ++t;
          (e.push({
            id: n,
            callback: i
          }), m.postMessage({
            vscodeSetImmediateId: n
          }, "*"));
        };
      }
      if ("function" == typeof (null == v ? void 0 : v.nextTick)) return v.nextTick.bind(v);
      const e = Promise.resolve();
      return t => e.then(t);
    })(),
    D = l || g ? 2 : a ? 1 : 3;
  let I = !0,
    E = !1;
  function T() {
    if (!E) {
      E = !0;
      const e = new Uint8Array(2);
      ((e[0] = 1), (e[1] = 2));
      const t = new Uint16Array(e.buffer);
      I = 513 === t[0];
    }
    return I;
  }
};