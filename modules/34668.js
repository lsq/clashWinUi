module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    installService: () => A,
    needUpdate: () => R,
    status: () => S,
    statusService: () => M,
    uninstallService: () => O,
    updateService: () => F
  }));
  var n,
    o,
    s,
    r,
    a,
    l,
    c,
    d = i(48926),
    h = i.n(d),
    u = i(59713),
    g = i.n(u),
    p = i(87757),
    f = i.n(p),
    m = i(83566),
    v = i(59273),
    _ = i(54387),
    b = i.n(_),
    w = i(72378),
    y = i(71017),
    C = i(57147),
    x = i(8369),
    S = (i(11442), {
      Active: Symbol(),
      Inactive: Symbol(),
      NonExistent: Symbol(),
      Unknown: Symbol()
    }),
    k = process.env.ProgramW6432 || process.env.ProgramFiles || "C:\\Program Files",
    L = (0, y.join)(k, "Clash for Windows Service"),
    N = function (e) {
      return new Promise(function (t, i) {
        (0, w.exec)(e, {
          name: "ClashforWindows"
        }, function (e, n, o) {
          (e && i(e), o && i(o), n && t(n.toString()), t(""));
        });
      });
    },
    D = function () {
      var e,
        t = v.Z.getters.filesPath,
        i = ((e = {}), g()(e, m.Ap, "win/ia32/service"), g()(e, m.J4, "win/x64/service"), g()(e, m.Vm, "win/arm64/service"), e)[(0, m.$Q)()];
      return (0, y.join)(t, i);
    },
    I = ((n = h()(f().mark(function e() {
      var t,
        i,
        n,
        o,
        s,
        r,
        a,
        l,
        c,
        d = arguments;
      return f().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            if (((t = d.length > 0 && void 0 !== d[0] ? d[0] : []), (n = (i = d.length > 1 && void 0 !== d[1] ? d[1] : {}).runAfter), (o = void 0 === n ? "" : n), (s = i.runBefore), (r = void 0 === s ? "" : s), !(0, m.Kr)())) {
              e.next = 9;
              break;
            }
            return ((a = (0, y.join)(v.Z.state.app.clashPath, "service")), (l = t.map(function (e) {
              var t = e.cmd,
                i = e.options,
                n = void 0 === i ? [] : i;
              return '"'.concat((0, y.join)(a, "service.exe"), '" ').concat(t, " ").concat(n.join(" "));
            }).join(" & ")), (e.next = 7), N([r, l, o].filter(function (e) {
              return e;
            }).join(" & ")));
          case 7:
            return ((c = e.sent), e.abrupt("return", c));
          case 9:
            return e.abrupt("return", "");
          case 10:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function () {
      return n.apply(this, arguments);
    }),
    E = ((o = h()(f().mark(function e() {
      var t,
        i,
        n,
        o,
        s,
        r,
        a,
        l,
        c,
        d = arguments;
      return f().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            if (((t = d.length > 0 && void 0 !== d[0] ? d[0] : []), (n = (i = d.length > 1 && void 0 !== d[1] ? d[1] : {}).runAfter), (o = void 0 === n ? "" : n), (s = i.runBefore), (r = void 0 === s ? "" : s), !(0, m.Kr)())) {
              e.next = 9;
              break;
            }
            return ((a = L), (l = t.map(function (e) {
              var t = e.cmd,
                i = e.options,
                n = void 0 === i ? [] : i;
              return '"'.concat((0, y.join)(a, "service.exe"), '" ').concat(t, " ").concat(n.join(" "));
            }).join(" & ")), (e.next = 7), N([r, l].filter(function (e) {
              return e;
            }).join(" & ") + (o ? " && ".concat(o) : "")));
          case 7:
            return ((c = e.sent), e.abrupt("return", c));
          case 9:
            return e.abrupt("return", "");
          case 10:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function () {
      return o.apply(this, arguments);
    }),
    T = ((s = h()(f().mark(function e() {
      var t,
        i,
        n,
        o,
        s,
        r,
        a,
        l,
        c = arguments;
      return f().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            if (((t = c.length > 0 && void 0 !== c[0] ? c[0] : []), (n = (i = c.length > 1 && void 0 !== c[1] ? c[1] : {}).runAfter), (o = void 0 === n ? "" : n), (s = i.runBefore), (r = void 0 === s ? "" : s), !(0, m.Kr)())) {
              e.next = 8;
              break;
            }
            return ((a = t.map(function (e) {
              var t = e.cmd,
                i = e.options,
                n = void 0 === i ? [] : i;
              return "schtasks /".concat(t, ' /tn "Clash Core Service" ').concat(n.join(" "));
            }).join(" & ")), (e.next = 6), N([r, a].filter(function (e) {
              return e;
            }).join(" & ") + (o ? " && ".concat(o) : "")));
          case 6:
            return ((l = e.sent), e.abrupt("return", l));
          case 8:
            return e.abrupt("return", "");
          case 9:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function () {
      return s.apply(this, arguments);
    }),
    M = ((r = h()(f().mark(function e() {
      var t, i;
      return f().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            return ((e.prev = 0), (e.next = 3), b().get("http://127.0.0.1:53000/ping", {
              timeout: 5e3
            }));
          case 3:
            return ((t = e.sent), (i = t.status), e.abrupt("return", 200 === i ? S.Active : S.Inactive));
          case 8:
            ((e.prev = 8), (e.t0 = e.catch(0)));
          case 10:
            return e.abrupt("return", S.Unknown);
          case 11:
          case "end":
            return e.stop();
        }
      }, e, null, [[0, 8]]);
    }))), function () {
      return r.apply(this, arguments);
    }),
    A = ((a = h()(f().mark(function e() {
      var t,
        i,
        n = arguments;
      return f().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            if (((t = n.length > 0 && void 0 !== n[0] ? n[0] : 0), (i = {
              serviceExePath: (0, y.join)(D(), "clash-core-service.exe"),
              winswExePath: (0, y.join)(D(), "service.exe"),
              configPath: (0, y.join)(D(), "../../common/service.yml"),
              schtaskConfigPath: (0, y.join)(D(), "../../common/schtasks.xml")
            }), 0 !== t)) {
              e.next = 5;
              break;
            }
            return ((e.next = 5), T([{
              cmd: "create",
              options: ['/ru "SYSTEM"', '/xml "'.concat((0, y.join)(L, "schtasks.xml"), '"')]
            }, {
              cmd: "change",
              options: ['/tr "\\"'.concat((0, y.join)(L, "clash-core-service.exe"), '\\""')]
            }, {
              cmd: "run"
            }], {
              runBefore: 'mkdir "'.concat(L, '" & copy "').concat(i.serviceExePath, '" "').concat(L, '" /Y & copy "').concat(i.schtaskConfigPath, '" "').concat(L, '" /Y ')
            }));
          case 5:
            if (1 !== t) {
              e.next = 8;
              break;
            }
            return ((e.next = 8), E([{
              cmd: "install"
            }, {
              cmd: "start"
            }], {
              runBefore: 'mkdir "'.concat(L, '" & copy "').concat(i.serviceExePath, '" "').concat(L, '" /Y & copy "').concat(i.winswExePath, '" "').concat(L, '" /Y & copy "').concat(i.configPath, '" "').concat(L, '" /Y ')
            }));
          case 8:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function () {
      return a.apply(this, arguments);
    }),
    O = ((l = h()(f().mark(function e() {
      var t, i;
      return f().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            if (((t = {
              serviceExePath: (0, y.join)(D(), "clash-core-service.exe"),
              winswExePath: (0, y.join)(D(), "service.exe"),
              configPath: (0, y.join)(D(), "../../common/service.yml")
            }), (i = (0, y.join)(v.Z.state.app.clashPath, "service")), !P())) {
              e.next = 7;
              break;
            }
            return ((e.next = 5), I([{
              cmd: "stop"
            }, {
              cmd: "uninstall"
            }], {
              runAfter: 'icacls.exe "'.concat(i, '" /remove:d Everyone & rmdir /s /q "').concat(i, '"')
            }));
          case 5:
          case 10:
            e.next = 14;
            break;
          case 7:
            if (!(0, C.existsSync)((0, y.join)(L, "schtasks.xml"))) {
              e.next = 12;
              break;
            }
            return ((e.next = 10), T([{
              cmd: "end"
            }, {
              cmd: "delete",
              options: ["/F"]
            }], {
              runAfter: 'timeout /t 2 & rmdir "'.concat(L, '" /s /q')
            }));
          case 12:
            return ((e.next = 14), E([{
              cmd: "stop"
            }, {
              cmd: "uninstall"
            }], {
              runBefore: 'copy "'.concat(t.configPath, '" "').concat(L, '" /Y '),
              runAfter: 'timeout /t 2 & rmdir "'.concat(L, '" /s /q')
            }));
          case 14:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function () {
      return l.apply(this, arguments);
    }),
    P = function () {
      var e = (0, y.join)(v.Z.state.app.clashPath, "service"),
        t = (0, y.join)(e, "service.yml"),
        i = (0, y.join)(e, "service.exe");
      return ((0, C.existsSync)(e) && (0, C.existsSync)(t) && (0, C.existsSync)(i));
    },
    R = function () {
      if (P()) return !0;
      if (!(0, C.existsSync)(L)) return !1;
      var e = (0, y.join)(L, "clash-core-service.exe");
      if (!(0, C.existsSync)(e)) return !1;
      var t = (0, y.join)(D(), "clash-core-service.exe"),
        i = function (e) {
          return (0, x.Ll)((0, C.readFileSync)(e));
        };
      return i(e) !== i(t);
    },
    F = ((c = h()(f().mark(function e() {
      var t;
      return f().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            return ((t = (0, C.existsSync)((0, y.join)(L, "schtasks.xml")) ? 0 : 1), (e.next = 3), O());
          case 3:
            return ((e.next = 5), A(t));
          case 5:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function () {
      return c.apply(this, arguments);
    });
};