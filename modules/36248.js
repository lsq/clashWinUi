module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    CJ: () => h,
    I8: () => o,
    _A: () => s,
    fS: () => d,
    jB: () => c,
    rs: () => a
  });
  var n = i(98401);
  function o(e) {
    if (!e || "object" != typeof e) return e;
    if (e instanceof RegExp) return e;
    const t = Array.isArray(e) ? [] : {};
    return (Object.keys(e).forEach(i => {
      e[i] && "object" == typeof e[i] ? (t[i] = o(e[i])) : (t[i] = e[i]);
    }), t);
  }
  function s(e) {
    if (!e || "object" != typeof e) return e;
    const t = [e];
    for (; t.length > 0;) {
      const e = t.shift();
      Object.freeze(e);
      for (const i in e) if (r.call(e, i)) {
        const n = e[i];
        "object" != typeof n || Object.isFrozen(n) || t.push(n);
      }
    }
    return e;
  }
  const r = Object.prototype.hasOwnProperty;
  function a(e, t) {
    return l(e, t, new Set());
  }
  function l(e, t, i) {
    if ((0, n.Jp)(e)) return e;
    const o = t(e);
    if (void 0 !== o) return o;
    if ((0, n.kJ)(e)) {
      const n = [];
      for (const o of e) n.push(l(o, t, i));
      return n;
    }
    if ((0, n.Kn)(e)) {
      if (i.has(e)) throw new Error("Cannot clone recursive data-structure");
      i.add(e);
      const n = {};
      for (let o in e) r.call(e, o) && (n[o] = l(e[o], t, i));
      return (i.delete(e), n);
    }
    return e;
  }
  function c(e, t, i = !0) {
    return (0, n.Kn)(e) ? ((0, n.Kn)(t) && Object.keys(t).forEach(o => {
      o in e ? i && ((0, n.Kn)(e[o]) && (0, n.Kn)(t[o]) ? c(e[o], t[o], i) : (e[o] = t[o])) : (e[o] = t[o]);
    }), e) : t;
  }
  function d(e, t) {
    if (e === t) return !0;
    if (null == e || null == t) return !1;
    if (typeof e != typeof t) return !1;
    if ("object" != typeof e) return !1;
    if (Array.isArray(e) !== Array.isArray(t)) return !1;
    let i, n;
    if (Array.isArray(e)) {
      if (e.length !== t.length) return !1;
      for (i = 0; i < e.length; i++) if (!d(e[i], t[i])) return !1;
    } else {
      const o = [];
      for (n in e) o.push(n);
      o.sort();
      const s = [];
      for (n in t) s.push(n);
      if ((s.sort(), !d(o, s))) return !1;
      for (i = 0; i < o.length; i++) if (!d(e[o[i]], t[o[i]])) return !1;
    }
    return !0;
  }
  function h(e, t, i) {
    const n = t(e);
    return void 0 === n ? i : n;
  }
};