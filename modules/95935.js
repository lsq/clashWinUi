module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    AH: () => f,
    EZ: () => u,
    Hx: () => h,
    SF: () => c,
    Vb: () => v,
    Vo: () => p,
    XX: () => g,
    Xy: () => d,
    i3: () => m,
    z_: () => l
  });
  var n = i(15527),
    o = i(66663),
    s = i(88721),
    r = i(97295),
    a = i(70666);
  function l(e) {
    return (0, a.q)(e, !0);
  }
  const c = new (class {
      constructor(e) {
        this._ignorePathCasing = e;
      }
      compare(e, t, i = !1) {
        return e === t ? 0 : (0, r.qu)(this.getComparisonKey(e, i), this.getComparisonKey(t, i));
      }
      isEqual(e, t, i = !1) {
        return (e === t || (!(!e || !t) && this.getComparisonKey(e, i) === this.getComparisonKey(t, i)));
      }
      getComparisonKey(e, t = !1) {
        return e.with({
          path: this._ignorePathCasing(e) ? e.path.toLowerCase() : void 0,
          fragment: t ? null : void 0
        }).toString();
      }
      joinPath(e, ...t) {
        return a.o.joinPath(e, ...t);
      }
      basenameOrAuthority(e) {
        return u(e) || e.authority;
      }
      basename(e) {
        return s.KR.basename(e.path);
      }
      dirname(e) {
        if (0 === e.path.length) return e;
        let t;
        return (e.scheme === o.lg.file ? (t = a.o.file(s.XX(l(e))).path) : ((t = s.KR.dirname(e.path)), e.authority && t.length && 47 !== t.charCodeAt(0) && (console.error(`dirname("${e.toString})) resulted in a relative path`), (t = "/"))), e.with({
          path: t
        }));
      }
      normalizePath(e) {
        if (!e.path.length) return e;
        let t;
        return ((t = e.scheme === o.lg.file ? a.o.file(s.Fv(l(e))).path : s.KR.normalize(e.path)), e.with({
          path: t
        }));
      }
      resolvePath(e, t) {
        if (e.scheme === o.lg.file) {
          const i = a.o.file(s.DB(l(e), t));
          return e.with({
            authority: i.authority,
            path: i.path
          });
        }
        return ((t = n.fn(t)), e.with({
          path: s.KR.resolve(e.path, t)
        }));
      }
    })(() => !1),
    d = c.isEqual.bind(c),
    h = c.basenameOrAuthority.bind(c),
    u = c.basename.bind(c),
    g = c.dirname.bind(c),
    p = c.joinPath.bind(c),
    f = c.normalizePath.bind(c),
    m = c.resolvePath.bind(c);
  var v;
  !(function (e) {
    ((e.META_DATA_LABEL = "label"), (e.META_DATA_DESCRIPTION = "description"), (e.META_DATA_SIZE = "size"), (e.META_DATA_MIME = "mime"), (e.parseMetaData = function (t) {
      const i = new Map();
      t.path.substring(t.path.indexOf(";") + 1, t.path.lastIndexOf(";")).split(";").forEach(e => {
        const [t, n] = e.split(":");
        t && n && i.set(t, n);
      });
      const n = t.path.substring(0, t.path.indexOf(";"));
      return (n && i.set(e.META_DATA_MIME, n), i);
    }));
  })(v || (v = {}));
};