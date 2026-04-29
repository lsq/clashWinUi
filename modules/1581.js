module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    lJ: () => m,
    ay: () => f,
    TX: () => v
  });
  var n = i(48926),
    o = i.n(n),
    s = i(87757),
    r = i.n(s),
    a = i(8369),
    l = i(59273);
  const c = require("original-fs");
  var d,
    h = i(11442),
    u = i(75110),
    g = i.n(u),
    p = i(96206),
    f = Symbol(),
    m = Symbol(),
    v = ((d = o()(r().mark(function e(t, n) {
      var o, s, d, u, v, _, b, w;
      return r().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            return ((e.t0 = i(54387)), (e.t1 = i(11442)), (e.t2 = l.Z.state.app.clashPath), (e.t3 = p.Console), (e.t4 = c.createWriteStream), (e.next = 7), l.Z.dispatch("getScriptLogPath"));
          case 7:
            if (((e.t5 = e.sent), (e.t6 = (0, e.t4)(e.t5)), (e.t7 = new e.t3(e.t6)), (e.t8 = a.c0), (e.t9 = a.vC), (e.t10 = a.e8), (o = {
              axios: e.t0,
              yaml: e.t1,
              homeDir: e.t2,
              console: e.t7,
              notify: e.t8,
              dialog: e.t9,
              resolveHost: e.t10
            }), (s = l.Z.state.app.settings.scriptsText), (d = {}), s)) try {
              ((u = (0, h.parse)(s)), (v = u.scripts), (d = v || {}));
            } catch (e) {}
            ((_ = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = (null == e ? void 0 : e.code) || "",
                i = (null == e ? void 0 : e.file) || "";
              if (t) return g()("'use strict';\n".concat(t)).run;
              if (i) {
                var n = (0, c.readFileSync)(i, "utf8");
                return g()("'use strict';\n".concat(n), i).run;
              }
              return function () {
                return "";
              };
            }), (e.t11 = n), (e.next = e.t11 === f ? 21 : e.t11 === m ? 24 : 27));
            break;
          case 21:
            return ((b = d.proxy), _(b)(t, o), e.abrupt("break", 27));
          case 24:
            return ((w = d.profile), _(w)(t, o), e.abrupt("break", 27));
          case 27:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function (e, t) {
      return d.apply(this, arguments);
    });
};