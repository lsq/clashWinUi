module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    OG: () => x,
    ML: () => b,
    KO: () => y,
    Jc: () => _,
    Vl: () => f,
    Vj: () => m
  });
  var n = i(71050),
    o = i(17301),
    s = i(70666),
    r = i(44101),
    a = i(51200),
    l = i(94565),
    c = i(98401),
    d = i(53060),
    h = i(1432);
  function u(e) {
    const t = new Uint32Array((function (e) {
      let t = 0;
      if (((t += 2), "full" === e.type)) t += 1 + e.data.length;else {
        ((t += 1), (t += 3 * e.deltas.length));
        for (const i of e.deltas) i.data && (t += i.data.length);
      }
      return t;
    })(e));
    let i = 0;
    if (((t[i++] = e.id), "full" === e.type)) ((t[i++] = 1), (t[i++] = e.data.length), t.set(e.data, i), (i += e.data.length));else {
      ((t[i++] = 2), (t[i++] = e.deltas.length));
      for (const n of e.deltas) ((t[i++] = n.start), (t[i++] = n.deleteCount), n.data ? ((t[i++] = n.data.length), t.set(n.data, i), (i += n.data.length)) : (t[i++] = 0));
    }
    return (function (e) {
      const t = new Uint8Array(e.buffer, e.byteOffset, 4 * e.length);
      return (h.r() || (function (e) {
        for (let t = 0, i = e.length; t < i; t += 4) {
          const i = e[t + 0],
            n = e[t + 1],
            o = e[t + 2],
            s = e[t + 3];
          ((e[t + 0] = s), (e[t + 1] = o), (e[t + 2] = n), (e[t + 3] = i));
        }
      })(t), d.KN.wrap(t));
    })(t);
  }
  var g = i(24314),
    p = function (e, t, i, n) {
      return new (i || (i = Promise))(function (o, s) {
        function r(e) {
          try {
            l(n.next(e));
          } catch (e) {
            s(e);
          }
        }
        function a(e) {
          try {
            l(n.throw(e));
          } catch (e) {
            s(e);
          }
        }
        function l(e) {
          var t;
          e.done ? o(e.value) : ((t = e.value), t instanceof i ? t : new i(function (e) {
            e(t);
          })).then(r, a);
        }
        l((n = n.apply(e, t || [])).next());
      });
    };
  function f(e) {
    return e && !!e.data;
  }
  function m(e) {
    return e && Array.isArray(e.edits);
  }
  class v {
    constructor(e, t) {
      ((this.provider = e), (this.tokens = t));
    }
  }
  function _(e) {
    return r.wT.has(e);
  }
  function b(e, t, i, n) {
    return p(this, void 0, void 0, function* () {
      const s = (function (e) {
          const t = r.wT.orderedGroups(e);
          return t.length > 0 ? t[0] : [];
        })(e),
        a = yield Promise.all(s.map(s => p(this, void 0, void 0, function* () {
          let r;
          try {
            r = yield s.provideDocumentSemanticTokens(e, s === t ? i : null, n);
          } catch (e) {
            ((0, o.Cp)(e), (r = null));
          }
          return ((r && (f(r) || m(r))) || (r = null), new v(s, r));
        })));
      for (const e of a) if (e.tokens) return e;
      return a.length > 0 ? a[0] : null;
    });
  }
  class w {
    constructor(e, t) {
      ((this.provider = e), (this.tokens = t));
    }
  }
  function y(e) {
    return r.K7.has(e);
  }
  function C(e) {
    const t = r.K7.orderedGroups(e);
    return t.length > 0 ? t[0] : [];
  }
  function x(e, t, i) {
    return p(this, void 0, void 0, function* () {
      const n = C(e),
        s = yield Promise.all(n.map(n => p(this, void 0, void 0, function* () {
          let s;
          try {
            s = yield n.provideDocumentRangeSemanticTokens(e, t, i);
          } catch (e) {
            ((0, o.Cp)(e), (s = null));
          }
          return ((s && f(s)) || (s = null), new w(n, s));
        })));
      for (const e of s) if (e.tokens) return e;
      return s.length > 0 ? s[0] : null;
    });
  }
  (l.P.registerCommand("_provideDocumentSemanticTokensLegend", (e, ...t) => p(void 0, void 0, void 0, function* () {
    const [i] = t;
    (0, c.p_)(i instanceof s.o);
    const n = e.get(a.q).getModel(i);
    if (!n) return;
    const o = (function (e) {
      const t = r.wT.orderedGroups(e);
      return t.length > 0 ? t[0] : null;
    })(n);
    return o ? o[0].getLegend() : e.get(l.H).executeCommand("_provideDocumentRangeSemanticTokensLegend", i);
  })), l.P.registerCommand("_provideDocumentSemanticTokens", (e, ...t) => p(void 0, void 0, void 0, function* () {
    const [i] = t;
    (0, c.p_)(i instanceof s.o);
    const o = e.get(a.q).getModel(i);
    if (!o) return;
    if (!_(o)) return e.get(l.H).executeCommand("_provideDocumentRangeSemanticTokens", i, o.getFullModelRange());
    const r = yield b(o, null, null, n.T.None);
    if (!r) return;
    const {
      provider: d,
      tokens: h
    } = r;
    if (!h || !f(h)) return;
    const g = u({
      id: 0,
      type: "full",
      data: h.data
    });
    return (h.resultId && d.releaseDocumentSemanticTokens(h.resultId), g);
  })), l.P.registerCommand("_provideDocumentRangeSemanticTokensLegend", (e, ...t) => p(void 0, void 0, void 0, function* () {
    const [i, o] = t;
    (0, c.p_)(i instanceof s.o);
    const r = e.get(a.q).getModel(i);
    if (!r) return;
    const l = C(r);
    if (0 === l.length) return;
    if (1 === l.length) return l[0].getLegend();
    if (!o || !g.e.isIRange(o)) return (console.warn("provideDocumentRangeSemanticTokensLegend might be out-of-sync with provideDocumentRangeSemanticTokens unless a range argument is passed in"), l[0].getLegend());
    const d = yield x(r, g.e.lift(o), n.T.None);
    return d ? d.provider.getLegend() : void 0;
  })), l.P.registerCommand("_provideDocumentRangeSemanticTokens", (e, ...t) => p(void 0, void 0, void 0, function* () {
    const [i, o] = t;
    ((0, c.p_)(i instanceof s.o), (0, c.p_)(g.e.isIRange(o)));
    const r = e.get(a.q).getModel(i);
    if (!r) return;
    const l = yield x(r, g.e.lift(o), n.T.None);
    return l && l.tokens ? u({
      id: 0,
      type: "full",
      data: l.tokens.data
    }) : void 0;
  })));
};