module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    installService: () => k,
    needUpdate: () => N,
    status: () => y,
    statusService: () => S,
    uninstallService: () => L,
    updateService: () => D
  }));
  var n,
    o,
    s,
    r,
    a = i(48926),
    l = i.n(a),
    c = i(59713),
    d = i.n(c),
    h = i(87757),
    u = i.n(h),
    g = i(83566),
    p = i(59273),
    f = i(72378),
    m = i(71017),
    v = i(57147),
    _ = i(8369),
    b = (i(11442), i(54387)),
    w = '<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "https://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n    <dict>\n        <key>Label</key>\n        <string>com.lbyczf.cfw.helper</string>\n        <key>Program</key>\n        <string>helperPath</string>\n        <key>RunAtLoad</key>\n        <true/>\n        <key>KeepAlive</key>\n        <true/>\n        <key>HardResourceLimits</key>\n        <dict>\n            <key>NumberOfFiles</key>\n            <integer>10240</integer>\n        </dict>\n        <key>SoftResourceLimits</key>\n        <dict>\n            <key>NumberOfFiles</key>\n            <integer>10240</integer>\n        </dict>\n    </dict>\n</plist>',
    y = {
      Active: Symbol(),
      Inactive: Symbol(),
      NonExistent: Symbol(),
      Unknown: Symbol()
    },
    C = function (e) {
      return new Promise(function (t, i) {
        (0, f.exec)(e, {
          name: "Clash for Windows"
        }, function (e, n, o) {
          (e && i(e), o && i(o), n && t(n.toString()), t(""));
        });
      });
    },
    x = function () {
      var e,
        t = p.Z.getters.filesPath,
        i = ((e = {}), d()(e, g.Ml, "darwin/x64/service"), d()(e, g.UD, "darwin/arm64/service"), e)[(0, g.$Q)()];
      return (0, m.join)(t, i);
    },
    S = ((n = l()(u().mark(function e() {
      var t, i, n, o;
      return u().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            if (((e.prev = 0), (t = p.Z.state.app.clashPath), "" === (i = void 0 === t ? "" : t) || (0, v.existsSync)((0, m.join)(i, "service")))) {
              e.next = 4;
              break;
            }
            return e.abrupt("return", y.Inactive);
          case 4:
            return ((e.next = 6), b.get("http://127.0.0.1:53000/ping", {
              timeout: 5e3
            }));
          case 6:
            return ((n = e.sent), (o = n.status), e.abrupt("return", 200 === o ? y.Active : y.Inactive));
          case 11:
            ((e.prev = 11), (e.t0 = e.catch(0)));
          case 13:
            return e.abrupt("return", y.Unknown);
          case 14:
          case "end":
            return e.stop();
        }
      }, e, null, [[0, 11]]);
    }))), function () {
      return n.apply(this, arguments);
    }),
    k = ((o = l()(u().mark(function e() {
      var t, i, n, o;
      return u().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            return ((t = p.Z.state.app.clashPath), (i = (0, m.join)(t, "service")), (0, v.existsSync)(i) || (0, v.mkdirSync)(i), (n = (0, m.join)(t, "service", "clash-core-service")), (o = "/Library/LaunchDaemons/com.lbyczf.cfw.helper.plist"), (e.next = 7), C('cp "'.concat((0, m.join)(x(), "clash-core-service"), '" "').concat((0, m.join)(n), '" ; chmod 655 "').concat(n, '" ; chown root:wheel "').concat(n, '" ;  echo "').concat(w.replace("helperPath", n), '" > ').concat(o, " ; launchctl load -w ").concat(o)));
          case 7:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function () {
      return o.apply(this, arguments);
    }),
    L = ((s = l()(u().mark(function e() {
      var t, i;
      return u().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            return ((t = "/Library/LaunchDaemons/com.lbyczf.cfw.helper.plist"), (i = (0, m.join)(p.Z.state.app.clashPath, "service")), (e.next = 4), C("launchctl unload ".concat(t, " ; rm ").concat(t) + ((0, v.existsSync)(i) ? " ; rm -rf ".concat(i) : "")));
          case 4:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function () {
      return s.apply(this, arguments);
    }),
    N = function () {
      var e = p.Z.state.app.clashPath,
        t = (0, m.join)(e, "service");
      if (!(0, v.existsSync)(t)) return !1;
      var i = (0, m.join)(e, "service", "clash-core-service");
      if (!(0, v.existsSync)(i)) return !1;
      var n = (0, m.join)(x(), "clash-core-service"),
        o = function (e) {
          return (0, _.Ll)((0, v.readFileSync)(e));
        };
      return o(i) !== o(n);
    },
    D = ((r = l()(u().mark(function e() {
      var t, i, n, o;
      return u().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            return ((t = p.Z.state.app.clashPath), (i = (0, m.join)(t, "service")), (0, v.existsSync)(i) || (0, v.mkdirSync)(i), (n = (0, m.join)(t, "service", "clash-core-service")), (o = "/Library/LaunchDaemons/com.lbyczf.cfw.helper.plist"), (e.next = 7), C('cp "'.concat((0, m.join)(x(), "clash-core-service"), '" "').concat((0, m.join)(n), '" ; chmod 611 "').concat(n, '" ; chown root:wheel "').concat(n, '" ; launchctl unload ').concat(o, ' ; echo "').concat(w.replace("helperPath", n), '" > ').concat(o, " ; launchctl load -w ").concat(o)));
          case 7:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function () {
      return r.apply(this, arguments);
    });
};