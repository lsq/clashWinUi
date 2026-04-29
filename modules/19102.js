module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    p: () => f
  });
  var n,
    o = i(59713),
    s = i.n(o),
    r = i(48926),
    a = i.n(r),
    l = i(87757),
    c = i.n(l),
    d = i(59273),
    h = i(83566),
    u = i(54387),
    g = i.n(u),
    p = i(71017),
    f = ((n = a()(c().mark(function e() {
      var t,
        i,
        n,
        o,
        r,
        a,
        l,
        u,
        f = arguments;
      return c().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            if (((i = f.length > 0 && void 0 !== f[0] ? f[0] : []), (0, h.V5)())) {
              e.next = 3;
              break;
            }
            return e.abrupt("return", !1);
          case 3:
            return ((n = d.Z.state.app.isDevMode ? (0, p.join)((0, p.resolve)("./"), "/static/files") : d.Z.getters.filesPath), (o = ((t = {}), s()(t, h.UD, "arm64"), s()(t, h.Ml, "x64"), t)[(0, h.Vk)()]), (r = (0, p.join)(n, "darwin", o)), (e.prev = 6), (e.next = 9), g().post("http://127.0.0.1:53000/command", {
              path: (0, p.join)(r, "sysproxy"),
              args: i
            }));
          case 9:
            return ((a = e.sent), (l = a.status), (u = a.data), e.abrupt("return", {
              success: 200 === l,
              output: u
            }));
          case 15:
            ((e.prev = 15), (e.t0 = e.catch(6)));
          case 17:
            return e.abrupt("return", {
              success: !1,
              data: ""
            });
          case 18:
          case "end":
            return e.stop();
        }
      }, e, null, [[6, 15]]);
    }))), function () {
      return n.apply(this, arguments);
    });
};