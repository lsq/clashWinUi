module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    getDocumentSymbols: () => h
  }));
  var n = i(71050),
    o = i(98401),
    s = i(70666),
    r = i(51200),
    a = i(88216),
    l = i(86895),
    c = i(94565),
    d = function (e, t, i, n) {
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
  function h(e, t, i) {
    return d(this, void 0, void 0, function* () {
      const n = yield l.C3.create(e, i);
      return t ? n.asListOfDocumentSymbols() : n.getTopLevelSymbols();
    });
  }
  c.P.registerCommand("_executeDocumentSymbolProvider", function (e, ...t) {
    return d(this, void 0, void 0, function* () {
      const [i] = t;
      (0, o.p_)(s.o.isUri(i));
      const l = e.get(r.q).getModel(i);
      if (l) return h(l, !1, n.T.None);
      const c = yield e.get(a.S).createModelReference(i);
      try {
        return yield h(c.object.textEditorModel, !1, n.T.None);
      } finally {
        c.dispose();
      }
    });
  });
};