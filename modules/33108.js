module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    KV: () => l,
    MR: () => u,
    Mt: () => h,
    O4: () => g,
    Od: () => a,
    Ui: () => r,
    xL: () => c
  });
  var n = i(23193),
    o = i(72065),
    s = i(89872);
  const r = (0, o.yh)("configurationService");
  function a(e, t) {
    const i = Object.create(null);
    for (let n in e) l(i, n, e[n], t);
    return i;
  }
  function l(e, t, i, n) {
    const o = t.split("."),
      s = o.pop();
    let r = e;
    for (let e = 0; e < o.length; e++) {
      let i = o[e],
        s = r[i];
      switch (typeof s) {
        case "undefined":
          s = r[i] = Object.create(null);
          break;
        case "object":
          break;
        default:
          return void n(`Ignoring ${t} as ${o.slice(0, e + 1).join(".")} is ${JSON.stringify(s)}`);
      }
      r = s;
    }
    if ("object" == typeof r && null !== r) try {
      r[s] = i;
    } catch (e) {
      n(`Ignoring ${t} as ${o.join(".")} is ${JSON.stringify(r)}`);
    } else n(`Ignoring ${t} as ${o.join(".")} is ${JSON.stringify(r)}`);
  }
  function c(e, t) {
    d(e, t.split("."));
  }
  function d(e, t) {
    const i = t.shift();
    if (0 !== t.length) {
      if (-1 !== Object.keys(e).indexOf(i)) {
        const n = e[i];
        "object" != typeof n || Array.isArray(n) || (d(n, t), 0 === Object.keys(n).length && delete e[i]);
      }
    } else delete e[i];
  }
  function h(e, t, i) {
    const n = (function (e, t) {
      let i = e;
      for (const e of t) {
        if ("object" != typeof i || null === i) return;
        i = i[e];
      }
      return i;
    })(e, t.split("."));
    return void 0 === n ? i : n;
  }
  function u() {
    const e = s.B.as(n.IP.Configuration).getConfigurationProperties();
    return Object.keys(e);
  }
  function g() {
    const e = Object.create(null),
      t = s.B.as(n.IP.Configuration).getConfigurationProperties();
    for (let i in t) {
      l(e, i, t[i].default, e => console.error(`Conflict in default settings: ${e}`));
    }
    return e;
  }
};