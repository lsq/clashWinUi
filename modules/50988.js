module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    SW: () => c,
    v4: () => l,
    xn: () => d
  });
  var n = i(5976),
    o = i(97295),
    s = i(70666),
    r = i(72065),
    a = function (e, t, i, n) {
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
  const l = (0, r.yh)("openerService"),
    c = Object.freeze({
      _serviceBrand: void 0,
      registerOpener: () => n.JT.None,
      registerValidator: () => n.JT.None,
      registerExternalUriResolver: () => n.JT.None,
      setDefaultExternalOpener() {},
      registerExternalOpener: () => n.JT.None,
      open() {
        return a(this, void 0, void 0, function* () {
          return !1;
        });
      },
      resolveExternalUri(e) {
        return a(this, void 0, void 0, function* () {
          return {
            resolved: e,
            dispose() {}
          };
        });
      }
    });
  function d(e, t) {
    return s.o.isUri(e) ? (0, o.qq)(e.scheme, t) : (0, o.ok)(e, t + ":");
  }
};