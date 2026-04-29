module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    installService: () => N,
    needUpdate: () => I,
    status: () => C,
    statusService: () => L,
    uninstallService: () => D,
    updateService: () => E
  }));
  var n = i(48926),
    o = i.n(n),
    s = i(59713),
    r = i.n(s),
    a = i(87757),
    l = i.n(a),
    c = i(83566),
    d = i(59273),
    h = i(72378),
    u = i(71017),
    g = i(57147),
    p = i(8369),
    f = (i(11442), i(54387)),
    m = i(72298);
  require("fs-extra");
  var v,
    _,
    b,
    w,
    y,
    C = {
      Active: Symbol(),
      Inactive: Symbol(),
      NonExistent: Symbol(),
      Unknown: Symbol()
    },
    x = function (e) {
      return new Promise(function (t, i) {
        (0, h.exec)(e, {
          name: "Clash for Windows"
        }, function (e, n, o) {
          (e && i(e), o && i(o), n && t(n.toString()), t(""));
        });
      });
    },
    S = function () {
      var e,
        t = d.Z.getters.filesPath,
        i = ((e = {}), r()(e, c.bV, "linux/x64/service"), r()(e, c.tU, "linux/arm64/service"), e)[(0, c.$Q)()];
      return (0, u.join)(t, i);
    },
    k = ((v = o()(l().mark(function e() {
      return l().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            return ((e.next = 2), m.ipcRenderer.invoke("app", "getPath", "temp"));
          case 2:
            return e.abrupt("return", e.sent);
          case 3:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function () {
      return v.apply(this, arguments);
    }),
    L = ((_ = o()(l().mark(function e() {
      var t, i, n, o;
      return l().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            if (((e.prev = 0), (t = d.Z.state.app.clashPath), "" === (i = void 0 === t ? "" : t) || (0, g.existsSync)((0, u.join)(i, "service")))) {
              e.next = 4;
              break;
            }
            return e.abrupt("return", C.Inactive);
          case 4:
            return ((e.next = 6), f.get("http://127.0.0.1:53000/ping", {
              timeout: 5e3
            }));
          case 6:
            return ((n = e.sent), (o = n.status), e.abrupt("return", 200 === o ? C.Active : C.Inactive));
          case 11:
            ((e.prev = 11), (e.t0 = e.catch(0)));
          case 13:
            return e.abrupt("return", C.Unknown);
          case 14:
          case "end":
            return e.stop();
        }
      }, e, null, [[0, 11]]);
    }))), function () {
      return _.apply(this, arguments);
    }),
    N = ((b = o()(l().mark(function e() {
      var t, i, n, o;
      return l().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            return ((t = d.Z.state.app.clashPath), (i = (0, u.join)(t, "service")), (0, g.existsSync)(i) || (0, g.mkdirSync)(i), (n = (0, u.join)(t, "service", "clash-core-service")), (o = (0, u.join)("/usr/lib/systemd/system", "clash-core-service.service")), (e.next = 7), x('cp "'.concat((0, u.join)(S(), "clash-core-service"), '" "').concat((0, u.join)(n), '" ; chmod 655 "').concat((0, u.join)(n), '" ; chown root "').concat((0, u.join)(n), '" ; echo "').concat("[Unit]\nDescription=Clash core service created by Clash for Windows\nAfter=network-online.target nftables.service iptables.service\n\n[Service]\nType=simple\nExecStart=helperPath\nRestart=always\nRestartSec=5\n\n[Install]\nWantedBy=multi-user.target".replace("helperPath", n), '" > ').concat(o, " ; systemctl enable clash-core-service; systemctl start clash-core-service")));
          case 7:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function () {
      return b.apply(this, arguments);
    }),
    D = ((w = o()(l().mark(function e() {
      var t, i, n, o;
      return l().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            return ((e.prev = 0), (e.t0 = u.join), (e.next = 4), k());
          case 4:
            if (((e.t1 = e.sent), (t = (0, e.t0)(e.t1, "cfw-clash-service-installer")), !(0, g.existsSync)(t))) {
              e.next = 10;
              break;
            }
            return ((e.next = 9), x("".concat(t, "/installer.sh uninstall")));
          case 9:
            (0, g.existsSync)(t) && (0, p.uR)(t);
          case 10:
            e.next = 14;
            break;
          case 12:
            ((e.prev = 12), (e.t2 = e.catch(0)));
          case 14:
            return ((i = (0, u.join)("/usr/lib/systemd/system", "clash-core-service.service")), (n = d.Z.state.app.clashPath), (o = (0, u.join)(n, "service")), (e.next = 19), x("systemctl stop clash-core-service; systemctl disable clash-core-service; rm -rf ".concat(i) + ((0, g.existsSync)(o) ? " ; rm -rf ".concat(o) : "")));
          case 19:
          case "end":
            return e.stop();
        }
      }, e, null, [[0, 12]]);
    }))), function () {
      return w.apply(this, arguments);
    }),
    I = function () {
      var e = d.Z.state.app.clashPath,
        t = (0, u.join)(e, "service");
      if (!(0, g.existsSync)(t)) return !1;
      var i = (0, u.join)(e, "service", "clash-core-service");
      if (!(0, g.existsSync)(i)) return !1;
      var n = (0, u.join)(S(), "clash-core-service"),
        o = function (e) {
          return (0, p.Ll)((0, g.readFileSync)(e));
        };
      return o(i) !== o(n);
    },
    E = ((y = o()(l().mark(function e() {
      return l().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            return ((e.next = 2), D());
          case 2:
            return ((e.next = 4), N());
          case 4:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function () {
      return y.apply(this, arguments);
    });
};