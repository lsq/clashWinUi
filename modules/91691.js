module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    L3: () => g,
    aA: () => p,
    f4: () => u,
    nD: () => d,
    zq: () => h
  });
  var n = i(71050),
    o = i(17301),
    s = i(16830),
    r = i(44101),
    a = i(71455),
    l = function (e, t, i, n) {
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
  function c(e, t, i, n) {
    const s = i.ordered(e).map(i => Promise.resolve(n(i, e, t)).then(void 0, e => {
      (0, o.Cp)(e);
    }));
    return Promise.all(s).then(e => {
      const t = [];
      for (let i of e) Array.isArray(i) ? t.push(...i) : i && t.push(i);
      return t;
    });
  }
  function d(e, t, i) {
    return c(e, t, r.Ct, (e, t, n) => e.provideDefinition(t, n, i));
  }
  function h(e, t, i) {
    return c(e, t, r.RN, (e, t, n) => e.provideDeclaration(t, n, i));
  }
  function u(e, t, i) {
    return c(e, t, r.vI, (e, t, n) => e.provideImplementation(t, n, i));
  }
  function g(e, t, i) {
    return c(e, t, r.tA, (e, t, n) => e.provideTypeDefinition(t, n, i));
  }
  function p(e, t, i, n) {
    return c(e, t, r.FL, (e, t, o) => l(this, void 0, void 0, function* () {
      const s = yield e.provideReferences(t, o, {
        includeDeclaration: !0
      }, n);
      if (!i || !s || 2 !== s.length) return s;
      const r = yield e.provideReferences(t, o, {
        includeDeclaration: !1
      }, n);
      return r && 1 === r.length ? r : s;
    }));
  }
  function f(e) {
    return l(this, void 0, void 0, function* () {
      const t = yield e(),
        i = new a.oQ(t, ""),
        n = i.references.map(e => e.link);
      return (i.dispose(), n);
    });
  }
  ((0, s.sb)("_executeDefinitionProvider", (e, t) => f(() => d(e, t, n.T.None))), (0, s.sb)("_executeDeclarationProvider", (e, t) => f(() => h(e, t, n.T.None))), (0, s.sb)("_executeImplementationProvider", (e, t) => f(() => u(e, t, n.T.None))), (0, s.sb)("_executeTypeDefinitionProvider", (e, t) => f(() => g(e, t, n.T.None))), (0, s.sb)("_executeReferenceProvider", (e, t) => f(() => p(e, t, !1, n.T.None))));
};