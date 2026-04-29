module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Gt: () => f,
    Ho: () => p,
    Qo: () => c,
    f$: () => h,
    x$: () => g
  });
  var n = i(73046),
    o = i(75392),
    s = i(97295);
  const r = "$(",
    a = new RegExp(`\\$\\(${n.dT.iconNameExpression}(?:${n.dT.iconModifierExpression})?\\)`, "g"),
    l = new RegExp(`(\\\\)?${a.source}`, "g");
  function c(e) {
    return e.replace(l, (e, t) => (t ? e : `\\${e}`));
  }
  const d = new RegExp(`\\\\${a.source}`, "g");
  function h(e) {
    return e.replace(d, e => `\\${e}`);
  }
  const u = new RegExp(`(\\s)?(\\\\)?${a.source}(\\s)?`, "g");
  function g(e) {
    return -1 === e.indexOf(r) ? e : e.replace(u, (e, t, i, n) => (i ? e : t || n || ""));
  }
  function p(e) {
    const t = e.indexOf(r);
    return -1 === t ? {
      text: e
    } : (function (e, t) {
      const i = [];
      let n = "";
      function o(e) {
        if (e) {
          n += e;
          for (const t of e) i.push(d);
        }
      }
      let s,
        a,
        l = -1,
        c = "",
        d = 0,
        h = t;
      const u = e.length;
      o(e.substr(0, t));
      for (; h < u;) {
        if (((s = e[h]), (a = e[h + 1]), s === r[0] && a === r[1])) ((l = h), o(c), (c = r), h++);else if (")" === s && -1 !== l) {
          ((d += h - l + 1), (l = -1), (c = ""));
        } else -1 !== l ? /^[a-z0-9\-]$/i.test(s) ? (c += s) : (o(c), (l = -1), (c = "")) : o(s);
        h++;
      }
      return (o(c), {
        text: n,
        iconOffsets: i
      });
    })(e, t);
  }
  function f(e, t, i = !1) {
    const {
      text: n,
      iconOffsets: r
    } = t;
    if (!r || 0 === r.length) return (0, o.Oh)(e, n, i);
    const a = (0, s.j3)(n, " "),
      l = n.length - a.length,
      c = (0, o.Oh)(e, a, i);
    if (c) for (const e of c) {
      const t = r[e.start + l] + l;
      ((e.start += t), (e.end += t));
    }
    return c;
  }
};