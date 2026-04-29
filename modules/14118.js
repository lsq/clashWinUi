module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    EQ: () => I,
    Qc: () => E
  });
  var n = i(15393),
    o = i(15527),
    s = i(43702),
    r = i(88721),
    a = i(97295);
  const l = "**",
    c = "/",
    d = "[/\\\\]",
    h = "[^/\\\\]",
    u = /\//g;
  function g(e) {
    switch (e) {
      case 0:
        return "";
      case 1:
        return `${h}*?`;
      default:
        return `(?:${d}|${h}+${d}|${d}${h}+)*?`;
    }
  }
  function p(e, t) {
    if (!e) return [];
    const i = [];
    let n = !1,
      o = !1,
      s = "";
    for (const r of e) {
      switch (r) {
        case t:
          if (!n && !o) {
            (i.push(s), (s = ""));
            continue;
          }
          break;
        case "{":
          n = !0;
          break;
        case "}":
          n = !1;
          break;
        case "[":
          o = !0;
          break;
        case "]":
          o = !1;
      }
      s += r;
    }
    return (s && i.push(s), i);
  }
  function f(e) {
    if (!e) return "";
    let t = "";
    const i = p(e, c);
    if (i.every(e => e === l)) t = ".*";else {
      let e = !1;
      i.forEach((n, o) => {
        if (n === l) return void (e || ((t += g(2)), (e = !0)));
        let s = !1,
          r = "",
          u = !1,
          m = "";
        for (const e of n) if ("}" !== e && s) r += e;else if (!u || ("]" === e && m)) switch (e) {
          case "{":
            s = !0;
            continue;
          case "[":
            u = !0;
            continue;
          case "}":
            const i = `(?:${p(r, ",").map(e => f(e)).join("|")})`;
            ((t += i), (s = !1), (r = ""));
            break;
          case "]":
            ((t += "[" + m + "]"), (u = !1), (m = ""));
            break;
          case "?":
            t += h;
            continue;
          case "*":
            t += g(1);
            continue;
          default:
            t += a.ec(e);
        } else {
          let t;
          ((t = "-" === e ? e : ("^" !== e && "!" !== e) || m ? e === c ? "" : a.ec(e) : "^"), (m += t));
        }
        (o < i.length - 1 && (i[o + 1] !== l || o + 2 < i.length) && (t += d), (e = !1));
      });
    }
    return t;
  }
  const m = /^\*\*\/\*\.[\w\.-]+$/,
    v = /^\*\*\/([\w\.-]+)\/?$/,
    _ = /^{\*\*\/[\*\.]?[\w\.-]+\/?(,\*\*\/[\*\.]?[\w\.-]+\/?)*}$/,
    b = /^{\*\*\/[\*\.]?[\w\.-]+(\/(\*\*)?)?(,\*\*\/[\*\.]?[\w\.-]+(\/(\*\*)?)?)*}$/,
    w = /^\*\*((\/[\w\.-]+)+)\/?$/,
    y = /^([\w\.-]+(\/[\w\.-]+)*)\/?$/,
    C = new s.z6(1e4),
    x = function () {
      return !1;
    },
    S = function () {
      return null;
    };
  function k(e, t) {
    if (!e) return S;
    let i;
    ((i = "string" != typeof e ? e.pattern : e), (i = i.trim()));
    const n = `${i}_${!!t.trimForExclusions}`;
    let o,
      s = C.get(n);
    if (s) return L(s, e);
    if (m.test(i)) {
      const e = i.substr(4);
      s = function (t, n) {
        return "string" == typeof t && t.endsWith(e) ? i : null;
      };
    } else s = (o = v.exec(N(i, t))) ? (function (e, t) {
      const i = `/${e}`,
        n = `\\${e}`,
        o = function (o, s) {
          return "string" != typeof o ? null : s ? s === e ? t : null : o === e || o.endsWith(i) || o.endsWith(n) ? t : null;
        },
        s = [e];
      return ((o.basenames = s), (o.patterns = [t]), (o.allBasenames = s), o);
    })(o[1], i) : (t.trimForExclusions ? b : _).test(i) ? (function (e, t) {
      const i = T(e.slice(1, -1).split(",").map(e => k(e, t)).filter(e => e !== S), e),
        n = i.length;
      if (!n) return S;
      if (1 === n) return i[0];
      const o = function (t, n) {
          for (let o = 0, s = i.length; o < s; o++) if (i[o](t, n)) return e;
          return null;
        },
        s = i.find(e => !!e.allBasenames);
      s && (o.allBasenames = s.allBasenames);
      const r = i.reduce((e, t) => (t.allPaths ? e.concat(t.allPaths) : e), []);
      r.length && (o.allPaths = r);
      return o;
    })(i, t) : (o = w.exec(N(i, t))) ? D(o[1].substr(1), i, !0) : (o = y.exec(N(i, t))) ? D(o[1], i, !1) : (function (e) {
      try {
        const t = new RegExp(`^${f(e)}$`);
        return function (i) {
          return ((t.lastIndex = 0), "string" == typeof i && t.test(i) ? e : null);
        };
      } catch (e) {
        return S;
      }
    })(i);
    return (C.set(n, s), L(s, e));
  }
  function L(e, t) {
    return "string" == typeof t ? e : function (i, n) {
      return o.KM(i, t.base) ? e(r.Gf(t.base, i), n) : null;
    };
  }
  function N(e, t) {
    return t.trimForExclusions && e.endsWith("/**") ? e.substr(0, e.length - 2) : e;
  }
  function D(e, t, i) {
    const n = r.ir === r.KR.sep,
      o = n ? e : e.replace(u, r.ir),
      s = r.ir + o,
      a = r.KR.sep + e,
      l = i ? function (i, r) {
        return "string" != typeof i || (i !== o && !i.endsWith(s) && (n || (i !== e && !i.endsWith(a)))) ? null : t;
      } : function (i, s) {
        return "string" != typeof i || (i !== o && (n || i !== e)) ? null : t;
      };
    return ((l.allPaths = [(i ? "*/" : "./") + e]), l);
  }
  function I(e, t, i) {
    return !(!e || "string" != typeof t) && E(e)(t, void 0, i);
  }
  function E(e, t = {}) {
    if (!e) return x;
    if ("string" == typeof e || (function (e) {
      const t = e;
      return t && "string" == typeof t.base && "string" == typeof t.pattern;
    })(e)) {
      const i = k(e, t);
      if (i === S) return x;
      const n = function (e, t) {
        return !!i(e, t);
      };
      return (i.allBasenames && (n.allBasenames = i.allBasenames), i.allPaths && (n.allPaths = i.allPaths), n);
    }
    return (function (e, t) {
      const i = T(Object.getOwnPropertyNames(e).map(i => (function (e, t, i) {
          if (!1 === t) return S;
          const o = k(e, i);
          if (o === S) return S;
          if ("boolean" == typeof t) return o;
          if (t) {
            const i = t.when;
            if ("string" == typeof i) {
              const t = (t, s, r, a) => {
                if (!a || !o(t, s)) return null;
                const l = a(i.replace("$(basename)", r));
                return (0, n.J8)(l) ? l.then(t => (t ? e : null)) : l ? e : null;
              };
              return ((t.requiresSiblings = !0), t);
            }
          }
          return o;
        })(i, e[i], t)).filter(e => e !== S)),
        o = i.length;
      if (!o) return S;
      if (!i.some(e => !!e.requiresSiblings)) {
        if (1 === o) return i[0];
        const e = function (e, t) {
            for (let n = 0, o = i.length; n < o; n++) {
              const o = i[n](e, t);
              if (o) return o;
            }
            return null;
          },
          t = i.find(e => !!e.allBasenames);
        t && (e.allBasenames = t.allBasenames);
        const n = i.reduce((e, t) => (t.allPaths ? e.concat(t.allPaths) : e), []);
        return (n.length && (e.allPaths = n), e);
      }
      const s = function (e, t, n) {
          let o;
          for (let s = 0, a = i.length; s < a; s++) {
            const a = i[s];
            a.requiresSiblings && n && (t || (t = r.EZ(e)), o || (o = t.substr(0, t.length - r.DZ(e).length)));
            const l = a(e, t, o, n);
            if (l) return l;
          }
          return null;
        },
        a = i.find(e => !!e.allBasenames);
      a && (s.allBasenames = a.allBasenames);
      const l = i.reduce((e, t) => (t.allPaths ? e.concat(t.allPaths) : e), []);
      l.length && (s.allPaths = l);
      return s;
    })(e, t);
  }
  function T(e, t) {
    const i = e.filter(e => !!e.basenames);
    if (i.length < 2) return e;
    const n = i.reduce((e, t) => {
      const i = t.basenames;
      return i ? e.concat(i) : e;
    }, []);
    let o;
    if (t) {
      o = [];
      for (let e = 0, i = n.length; e < i; e++) o.push(t);
    } else o = i.reduce((e, t) => {
      const i = t.patterns;
      return i ? e.concat(i) : e;
    }, []);
    const s = function (e, t) {
      if ("string" != typeof e) return null;
      if (!t) {
        let i;
        for (i = e.length; i > 0; i--) {
          const t = e.charCodeAt(i - 1);
          if (47 === t || 92 === t) break;
        }
        t = e.substr(i);
      }
      const i = n.indexOf(t);
      return -1 !== i ? o[i] : null;
    };
    ((s.basenames = n), (s.patterns = o), (s.allBasenames = n));
    const r = e.filter(e => !e.basenames);
    return (r.push(s), r);
  }
};