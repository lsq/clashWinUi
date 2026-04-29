module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    EZ: () => k,
    XX: () => S,
    DZ: () => L,
    Fv: () => y,
    KR: () => w,
    Gf: () => x,
    DB: () => C,
    ir: () => N,
    Ku: () => b
  });
  var n = i(1432);
  let o;
  if (void 0 !== n.li.vscode && void 0 !== n.li.vscode.process) {
    const e = n.li.vscode.process;
    o = {
      get platform() {
        return e.platform;
      },
      get arch() {
        return e.arch;
      },
      get env() {
        return e.env;
      },
      cwd: () => e.cwd(),
      nextTick: e => (0, n.xS)(e)
    };
  } else o = "undefined" != typeof process ? {
    get platform() {
      return process.platform;
    },
    get arch() {
      return process.arch;
    },
    get env() {
      return process.env;
    },
    cwd: () => process.env.VSCODE_CWD || process.cwd(),
    nextTick: e => process.nextTick(e)
  } : {
    get platform() {
      return n.ED ? "win32" : n.dz ? "darwin" : "linux";
    },
    get arch() {},
    nextTick: e => (0, n.xS)(e),
    get env() {
      return {};
    },
    cwd: () => "/"
  };
  const s = o.cwd,
    r = o.env,
    a = o.platform,
    l = 46,
    c = 47,
    d = 92,
    h = 58;
  class u extends Error {
    constructor(e, t, i) {
      let n;
      "string" == typeof t && 0 === t.indexOf("not ") ? ((n = "must not be"), (t = t.replace(/^not /, ""))) : (n = "must be");
      const o = -1 !== e.indexOf(".") ? "property" : "argument";
      let s = `The "${e}" ${o} ${n} of type ${t}`;
      ((s += ". Received type " + typeof i), super(s), (this.code = "ERR_INVALID_ARG_TYPE"));
    }
  }
  function g(e, t) {
    if ("string" != typeof e) throw new u(t, "string", e);
  }
  function p(e) {
    return e === c || e === d;
  }
  function f(e) {
    return e === c;
  }
  function m(e) {
    return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
  }
  function v(e, t, i, n) {
    let o = "",
      s = 0,
      r = -1,
      a = 0,
      d = 0;
    for (let h = 0; h <= e.length; ++h) {
      if (h < e.length) d = e.charCodeAt(h);else {
        if (n(d)) break;
        d = c;
      }
      if (n(d)) {
        if (r === h - 1 || 1 === a) ;else if (2 === a) {
          if (o.length < 2 || 2 !== s || o.charCodeAt(o.length - 1) !== l || o.charCodeAt(o.length - 2) !== l) {
            if (o.length > 2) {
              const e = o.lastIndexOf(i);
              (-1 === e ? ((o = ""), (s = 0)) : ((o = o.slice(0, e)), (s = o.length - 1 - o.lastIndexOf(i))), (r = h), (a = 0));
              continue;
            }
            if (0 !== o.length) {
              ((o = ""), (s = 0), (r = h), (a = 0));
              continue;
            }
          }
          t && ((o += o.length > 0 ? `${i}..` : ".."), (s = 2));
        } else (o.length > 0 ? (o += `${i}${e.slice(r + 1, h)}`) : (o = e.slice(r + 1, h)), (s = h - r - 1));
        ((r = h), (a = 0));
      } else d === l && -1 !== a ? ++a : (a = -1);
    }
    return o;
  }
  function _(e, t) {
    if (null === t || "object" != typeof t) throw new u("pathObject", "Object", t);
    const i = t.dir || t.root,
      n = t.base || `${t.name || ""}${t.ext || ""}`;
    return i ? (i === t.root ? `${i}${n}` : `${i}${e}${n}`) : n;
  }
  const b = {
      resolve(...e) {
        let t = "",
          i = "",
          n = !1;
        for (let o = e.length - 1; o >= -1; o--) {
          let a;
          if (o >= 0) {
            if (((a = e[o]), g(a, "path"), 0 === a.length)) continue;
          } else 0 === t.length ? (a = s()) : ((a = r[`=${t}`] || s()), (void 0 === a || (a.slice(0, 2).toLowerCase() !== t.toLowerCase() && a.charCodeAt(2) === d)) && (a = `${t}\\`));
          const l = a.length;
          let c = 0,
            u = "",
            f = !1;
          const v = a.charCodeAt(0);
          if (1 === l) p(v) && ((c = 1), (f = !0));else if (p(v)) {
            if (((f = !0), p(a.charCodeAt(1)))) {
              let e = 2,
                t = e;
              for (; e < l && !p(a.charCodeAt(e));) e++;
              if (e < l && e !== t) {
                const i = a.slice(t, e);
                for (t = e; e < l && p(a.charCodeAt(e));) e++;
                if (e < l && e !== t) {
                  for (t = e; e < l && !p(a.charCodeAt(e));) e++;
                  (e !== l && e === t) || ((u = `\\\\${i}\\${a.slice(t, e)}`), (c = e));
                }
              }
            } else c = 1;
          } else m(v) && a.charCodeAt(1) === h && ((u = a.slice(0, 2)), (c = 2), l > 2 && p(a.charCodeAt(2)) && ((f = !0), (c = 3)));
          if (u.length > 0) if (t.length > 0) {
            if (u.toLowerCase() !== t.toLowerCase()) continue;
          } else t = u;
          if (n) {
            if (t.length > 0) break;
          } else if (((i = `${a.slice(c)}\\${i}`), (n = f), f && t.length > 0)) break;
        }
        return ((i = v(i, !n, "\\", p)), n ? `${t}\\${i}` : `${t}${i}` || ".");
      },
      normalize(e) {
        g(e, "path");
        const t = e.length;
        if (0 === t) return ".";
        let i,
          n = 0,
          o = !1;
        const s = e.charCodeAt(0);
        if (1 === t) return f(s) ? "\\" : e;
        if (p(s)) {
          if (((o = !0), p(e.charCodeAt(1)))) {
            let o = 2,
              s = o;
            for (; o < t && !p(e.charCodeAt(o));) o++;
            if (o < t && o !== s) {
              const r = e.slice(s, o);
              for (s = o; o < t && p(e.charCodeAt(o));) o++;
              if (o < t && o !== s) {
                for (s = o; o < t && !p(e.charCodeAt(o));) o++;
                if (o === t) return `\\\\${r}\\${e.slice(s)}\\`;
                o !== s && ((i = `\\\\${r}\\${e.slice(s, o)}`), (n = o));
              }
            }
          } else n = 1;
        } else m(s) && e.charCodeAt(1) === h && ((i = e.slice(0, 2)), (n = 2), t > 2 && p(e.charCodeAt(2)) && ((o = !0), (n = 3)));
        let r = n < t ? v(e.slice(n), !o, "\\", p) : "";
        return (0 !== r.length || o || (r = "."), r.length > 0 && p(e.charCodeAt(t - 1)) && (r += "\\"), void 0 === i ? (o ? `\\${r}` : r) : o ? `${i}\\${r}` : `${i}${r}`);
      },
      isAbsolute(e) {
        g(e, "path");
        const t = e.length;
        if (0 === t) return !1;
        const i = e.charCodeAt(0);
        return (p(i) || (t > 2 && m(i) && e.charCodeAt(1) === h && p(e.charCodeAt(2))));
      },
      join(...e) {
        if (0 === e.length) return ".";
        let t, i;
        for (let n = 0; n < e.length; ++n) {
          const o = e[n];
          (g(o, "path"), o.length > 0 && (void 0 === t ? (t = i = o) : (t += `\\${o}`)));
        }
        if (void 0 === t) return ".";
        let n = !0,
          o = 0;
        if ("string" == typeof i && p(i.charCodeAt(0))) {
          ++o;
          const e = i.length;
          e > 1 && p(i.charCodeAt(1)) && (++o, e > 2 && (p(i.charCodeAt(2)) ? ++o : (n = !1)));
        }
        if (n) {
          for (; o < t.length && p(t.charCodeAt(o));) o++;
          o >= 2 && (t = `\\${t.slice(o)}`);
        }
        return b.normalize(t);
      },
      relative(e, t) {
        if ((g(e, "from"), g(t, "to"), e === t)) return "";
        const i = b.resolve(e),
          n = b.resolve(t);
        if (i === n) return "";
        if ((e = i.toLowerCase()) === (t = n.toLowerCase())) return "";
        let o = 0;
        for (; o < e.length && e.charCodeAt(o) === d;) o++;
        let s = e.length;
        for (; s - 1 > o && e.charCodeAt(s - 1) === d;) s--;
        const r = s - o;
        let a = 0;
        for (; a < t.length && t.charCodeAt(a) === d;) a++;
        let l = t.length;
        for (; l - 1 > a && t.charCodeAt(l - 1) === d;) l--;
        const c = l - a,
          h = r < c ? r : c;
        let u = -1,
          p = 0;
        for (; p < h; p++) {
          const i = e.charCodeAt(o + p);
          if (i !== t.charCodeAt(a + p)) break;
          i === d && (u = p);
        }
        if (p !== h) {
          if (-1 === u) return n;
        } else {
          if (c > h) {
            if (t.charCodeAt(a + p) === d) return n.slice(a + p + 1);
            if (2 === p) return n.slice(a + p);
          }
          (r > h && (e.charCodeAt(o + p) === d ? (u = p) : 2 === p && (u = 3)), -1 === u && (u = 0));
        }
        let f = "";
        for (p = o + u + 1; p <= s; ++p) (p !== s && e.charCodeAt(p) !== d) || (f += 0 === f.length ? ".." : "\\..");
        return ((a += u), f.length > 0 ? `${f}${n.slice(a, l)}` : (n.charCodeAt(a) === d && ++a, n.slice(a, l)));
      },
      toNamespacedPath(e) {
        if ("string" != typeof e) return e;
        if (0 === e.length) return "";
        const t = b.resolve(e);
        if (t.length <= 2) return e;
        if (t.charCodeAt(0) === d) {
          if (t.charCodeAt(1) === d) {
            const e = t.charCodeAt(2);
            if (63 !== e && e !== l) return `\\\\?\\UNC\\${t.slice(2)}`;
          }
        } else if (m(t.charCodeAt(0)) && t.charCodeAt(1) === h && t.charCodeAt(2) === d) return `\\\\?\\${t}`;
        return e;
      },
      dirname(e) {
        g(e, "path");
        const t = e.length;
        if (0 === t) return ".";
        let i = -1,
          n = 0;
        const o = e.charCodeAt(0);
        if (1 === t) return p(o) ? e : ".";
        if (p(o)) {
          if (((i = n = 1), p(e.charCodeAt(1)))) {
            let o = 2,
              s = o;
            for (; o < t && !p(e.charCodeAt(o));) o++;
            if (o < t && o !== s) {
              for (s = o; o < t && p(e.charCodeAt(o));) o++;
              if (o < t && o !== s) {
                for (s = o; o < t && !p(e.charCodeAt(o));) o++;
                if (o === t) return e;
                o !== s && (i = n = o + 1);
              }
            }
          }
        } else m(o) && e.charCodeAt(1) === h && ((i = t > 2 && p(e.charCodeAt(2)) ? 3 : 2), (n = i));
        let s = -1,
          r = !0;
        for (let i = t - 1; i >= n; --i) if (p(e.charCodeAt(i))) {
          if (!r) {
            s = i;
            break;
          }
        } else r = !1;
        if (-1 === s) {
          if (-1 === i) return ".";
          s = i;
        }
        return e.slice(0, s);
      },
      basename(e, t) {
        (void 0 !== t && g(t, "ext"), g(e, "path"));
        let i,
          n = 0,
          o = -1,
          s = !0;
        if ((e.length >= 2 && m(e.charCodeAt(0)) && e.charCodeAt(1) === h && (n = 2), void 0 !== t && t.length > 0 && t.length <= e.length)) {
          if (t === e) return "";
          let r = t.length - 1,
            a = -1;
          for (i = e.length - 1; i >= n; --i) {
            const l = e.charCodeAt(i);
            if (p(l)) {
              if (!s) {
                n = i + 1;
                break;
              }
            } else (-1 === a && ((s = !1), (a = i + 1)), r >= 0 && (l === t.charCodeAt(r) ? -1 == --r && (o = i) : ((r = -1), (o = a))));
          }
          return (n === o ? (o = a) : -1 === o && (o = e.length), e.slice(n, o));
        }
        for (i = e.length - 1; i >= n; --i) if (p(e.charCodeAt(i))) {
          if (!s) {
            n = i + 1;
            break;
          }
        } else -1 === o && ((s = !1), (o = i + 1));
        return -1 === o ? "" : e.slice(n, o);
      },
      extname(e) {
        g(e, "path");
        let t = 0,
          i = -1,
          n = 0,
          o = -1,
          s = !0,
          r = 0;
        e.length >= 2 && e.charCodeAt(1) === h && m(e.charCodeAt(0)) && (t = n = 2);
        for (let a = e.length - 1; a >= t; --a) {
          const t = e.charCodeAt(a);
          if (p(t)) {
            if (!s) {
              n = a + 1;
              break;
            }
          } else (-1 === o && ((s = !1), (o = a + 1)), t === l ? -1 === i ? (i = a) : 1 !== r && (r = 1) : -1 !== i && (r = -1));
        }
        return -1 === i || -1 === o || 0 === r || (1 === r && i === o - 1 && i === n + 1) ? "" : e.slice(i, o);
      },
      format: _.bind(null, "\\"),
      parse(e) {
        g(e, "path");
        const t = {
          root: "",
          dir: "",
          base: "",
          ext: "",
          name: ""
        };
        if (0 === e.length) return t;
        const i = e.length;
        let n = 0,
          o = e.charCodeAt(0);
        if (1 === i) return p(o) ? ((t.root = t.dir = e), t) : ((t.base = t.name = e), t);
        if (p(o)) {
          if (((n = 1), p(e.charCodeAt(1)))) {
            let t = 2,
              o = t;
            for (; t < i && !p(e.charCodeAt(t));) t++;
            if (t < i && t !== o) {
              for (o = t; t < i && p(e.charCodeAt(t));) t++;
              if (t < i && t !== o) {
                for (o = t; t < i && !p(e.charCodeAt(t));) t++;
                t === i ? (n = t) : t !== o && (n = t + 1);
              }
            }
          }
        } else if (m(o) && e.charCodeAt(1) === h) {
          if (i <= 2) return ((t.root = t.dir = e), t);
          if (((n = 2), p(e.charCodeAt(2)))) {
            if (3 === i) return ((t.root = t.dir = e), t);
            n = 3;
          }
        }
        n > 0 && (t.root = e.slice(0, n));
        let s = -1,
          r = n,
          a = -1,
          c = !0,
          d = e.length - 1,
          u = 0;
        for (; d >= n; --d) if (((o = e.charCodeAt(d)), p(o))) {
          if (!c) {
            r = d + 1;
            break;
          }
        } else (-1 === a && ((c = !1), (a = d + 1)), o === l ? -1 === s ? (s = d) : 1 !== u && (u = 1) : -1 !== s && (u = -1));
        return (-1 !== a && (-1 === s || 0 === u || (1 === u && s === a - 1 && s === r + 1) ? (t.base = t.name = e.slice(r, a)) : ((t.name = e.slice(r, s)), (t.base = e.slice(r, a)), (t.ext = e.slice(s, a)))), (t.dir = r > 0 && r !== n ? e.slice(0, r - 1) : t.root), t);
      },
      sep: "\\",
      delimiter: ";",
      win32: null,
      posix: null
    },
    w = {
      resolve(...e) {
        let t = "",
          i = !1;
        for (let n = e.length - 1; n >= -1 && !i; n--) {
          const o = n >= 0 ? e[n] : s();
          (g(o, "path"), 0 !== o.length && ((t = `${o}/${t}`), (i = o.charCodeAt(0) === c)));
        }
        return ((t = v(t, !i, "/", f)), i ? `/${t}` : t.length > 0 ? t : ".");
      },
      normalize(e) {
        if ((g(e, "path"), 0 === e.length)) return ".";
        const t = e.charCodeAt(0) === c,
          i = e.charCodeAt(e.length - 1) === c;
        return 0 === (e = v(e, !t, "/", f)).length ? t ? "/" : i ? "./" : "." : (i && (e += "/"), t ? `/${e}` : e);
      },
      isAbsolute: e => (g(e, "path"), e.length > 0 && e.charCodeAt(0) === c),
      join(...e) {
        if (0 === e.length) return ".";
        let t;
        for (let i = 0; i < e.length; ++i) {
          const n = e[i];
          (g(n, "path"), n.length > 0 && (void 0 === t ? (t = n) : (t += `/${n}`)));
        }
        return void 0 === t ? "." : w.normalize(t);
      },
      relative(e, t) {
        if ((g(e, "from"), g(t, "to"), e === t)) return "";
        if ((e = w.resolve(e)) === (t = w.resolve(t))) return "";
        const i = e.length,
          n = i - 1,
          o = t.length - 1,
          s = n < o ? n : o;
        let r = -1,
          a = 0;
        for (; a < s; a++) {
          const i = e.charCodeAt(1 + a);
          if (i !== t.charCodeAt(1 + a)) break;
          i === c && (r = a);
        }
        if (a === s) if (o > s) {
          if (t.charCodeAt(1 + a) === c) return t.slice(1 + a + 1);
          if (0 === a) return t.slice(1 + a);
        } else n > s && (e.charCodeAt(1 + a) === c ? (r = a) : 0 === a && (r = 0));
        let l = "";
        for (a = 1 + r + 1; a <= i; ++a) (a !== i && e.charCodeAt(a) !== c) || (l += 0 === l.length ? ".." : "/..");
        return `${l}${t.slice(1 + r)}`;
      },
      toNamespacedPath: e => e,
      dirname(e) {
        if ((g(e, "path"), 0 === e.length)) return ".";
        const t = e.charCodeAt(0) === c;
        let i = -1,
          n = !0;
        for (let t = e.length - 1; t >= 1; --t) if (e.charCodeAt(t) === c) {
          if (!n) {
            i = t;
            break;
          }
        } else n = !1;
        return -1 === i ? t ? "/" : "." : t && 1 === i ? "//" : e.slice(0, i);
      },
      basename(e, t) {
        (void 0 !== t && g(t, "ext"), g(e, "path"));
        let i,
          n = 0,
          o = -1,
          s = !0;
        if (void 0 !== t && t.length > 0 && t.length <= e.length) {
          if (t === e) return "";
          let r = t.length - 1,
            a = -1;
          for (i = e.length - 1; i >= 0; --i) {
            const l = e.charCodeAt(i);
            if (l === c) {
              if (!s) {
                n = i + 1;
                break;
              }
            } else (-1 === a && ((s = !1), (a = i + 1)), r >= 0 && (l === t.charCodeAt(r) ? -1 == --r && (o = i) : ((r = -1), (o = a))));
          }
          return (n === o ? (o = a) : -1 === o && (o = e.length), e.slice(n, o));
        }
        for (i = e.length - 1; i >= 0; --i) if (e.charCodeAt(i) === c) {
          if (!s) {
            n = i + 1;
            break;
          }
        } else -1 === o && ((s = !1), (o = i + 1));
        return -1 === o ? "" : e.slice(n, o);
      },
      extname(e) {
        g(e, "path");
        let t = -1,
          i = 0,
          n = -1,
          o = !0,
          s = 0;
        for (let r = e.length - 1; r >= 0; --r) {
          const a = e.charCodeAt(r);
          if (a !== c) (-1 === n && ((o = !1), (n = r + 1)), a === l ? -1 === t ? (t = r) : 1 !== s && (s = 1) : -1 !== t && (s = -1));else if (!o) {
            i = r + 1;
            break;
          }
        }
        return -1 === t || -1 === n || 0 === s || (1 === s && t === n - 1 && t === i + 1) ? "" : e.slice(t, n);
      },
      format: _.bind(null, "/"),
      parse(e) {
        g(e, "path");
        const t = {
          root: "",
          dir: "",
          base: "",
          ext: "",
          name: ""
        };
        if (0 === e.length) return t;
        const i = e.charCodeAt(0) === c;
        let n;
        i ? ((t.root = "/"), (n = 1)) : (n = 0);
        let o = -1,
          s = 0,
          r = -1,
          a = !0,
          d = e.length - 1,
          h = 0;
        for (; d >= n; --d) {
          const t = e.charCodeAt(d);
          if (t !== c) (-1 === r && ((a = !1), (r = d + 1)), t === l ? -1 === o ? (o = d) : 1 !== h && (h = 1) : -1 !== o && (h = -1));else if (!a) {
            s = d + 1;
            break;
          }
        }
        if (-1 !== r) {
          const n = 0 === s && i ? 1 : s;
          -1 === o || 0 === h || (1 === h && o === r - 1 && o === s + 1) ? (t.base = t.name = e.slice(n, r)) : ((t.name = e.slice(n, o)), (t.base = e.slice(n, r)), (t.ext = e.slice(o, r)));
        }
        return (s > 0 ? (t.dir = e.slice(0, s - 1)) : i && (t.dir = "/"), t);
      },
      sep: "/",
      delimiter: ":",
      win32: null,
      posix: null
    };
  ((w.win32 = b.win32 = b), (w.posix = b.posix = w));
  const y = "win32" === a ? b.normalize : w.normalize,
    C = "win32" === a ? b.resolve : w.resolve,
    x = "win32" === a ? b.relative : w.relative,
    S = "win32" === a ? b.dirname : w.dirname,
    k = "win32" === a ? b.basename : w.basename,
    L = "win32" === a ? b.extname : w.extname,
    N = "win32" === a ? b.sep : w.sep;
};