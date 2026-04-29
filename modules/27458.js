module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    A7: () => w,
    Kz: () => b,
    Qz: () => _
  });
  var n,
    o,
    s,
    r,
    a = i(48926),
    l = i.n(a),
    c = i(87757),
    d = i.n(c),
    h = i(72378),
    u = i(32081),
    g = (i(72298), i(57147)),
    p = (i(71017), i(83566)),
    f = i(59273),
    m = ((n = l()(d().mark(function e() {
      var t,
        i,
        n = arguments;
      return d().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            return ((t = n.length > 0 && void 0 !== n[0] && n[0]), (i = n.length > 1 ? n[1] : void 0), e.abrupt("return", new Promise(function (e, n) {
              var o = i.replace(/"/g, '\\"').replace(/\n/g, " "),
                s = 'powershell.exe -ExecutionPolicy Bypass -Command "'.concat(o, '"'),
                r = function (t, i, o) {
                  (t && n(t), e({
                    stderr: o.toString(),
                    stdout: i.toString()
                  }));
                };
              t ? (0, h.exec)(s, {}, r) : (0, u.exec)(s, r);
            })));
          case 3:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function () {
      return n.apply(this, arguments);
    }),
    v = "Work with Clash for Windows.",
    _ = ((o = l()(d().mark(function e() {
      var t, i, n, o, s, r;
      return d().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            if ((0, p.Kr)()) {
              e.next = 2;
              break;
            }
            return e.abrupt("return");
          case 2:
            return ((t = 'Get-NetFirewallRule -Description "'.concat(v, '" | ? {$_.Enabled -eq "True"} | Get-NetFirewallApplicationFilter')), (e.prev = 3), (e.next = 6), m(!1, t));
          case 6:
            return ((i = e.sent), (n = i.stderr), (o = i.stdout), (s = f.Z.getters.clashBinaryPath), (r = (0, g.realpathSync)(s)), e.abrupt("return", "" === n && (o.includes(s) || o.includes(r))));
          case 14:
            ((e.prev = 14), (e.t0 = e.catch(3)), console.error("get firewall rule status failed with error:", e.t0));
          case 17:
            return e.abrupt("return", !1);
          case 18:
          case "end":
            return e.stop();
        }
      }, e, null, [[3, 14]]);
    }))), function () {
      return o.apply(this, arguments);
    }),
    b = ((s = l()(d().mark(function e() {
      var t;
      return d().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            if ((0, p.Kr)()) {
              e.next = 2;
              break;
            }
            return e.abrupt("return");
          case 2:
            return ((t = '\nRemove-NetFirewallRule -Description "'.concat(v, '" -ErrorAction SilentlyContinue \n; \'TCP\', \'UDP\' | ForEach-Object {\n    New-NetFirewallRule\n        -DisplayName "Clash Core"\n        -Profile "Private, Public"\n        -Description "').concat(v, '"\n        -Direction Inbound\n        -Protocol $_\n        -Action Allow\n        -Program "').concat((0, g.realpathSync)(f.Z.getters.clashBinaryPath), '"\n        | Out-Null\n}')), (e.prev = 3), (e.next = 6), m(!0, t));
          case 6:
            e.next = 11;
            break;
          case 8:
            ((e.prev = 8), (e.t0 = e.catch(3)), console.error("add firewall rule failed with error:", e.t0));
          case 11:
          case "end":
            return e.stop();
        }
      }, e, null, [[3, 8]]);
    }))), function () {
      return s.apply(this, arguments);
    }),
    w = ((r = l()(d().mark(function e() {
      var t;
      return d().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            if ((0, p.Kr)()) {
              e.next = 2;
              break;
            }
            return e.abrupt("return");
          case 2:
            return ((t = 'Remove-NetFirewallRule -Description "'.concat(v, '" -ErrorAction SilentlyContinue')), (e.prev = 3), (e.next = 6), m(!0, t));
          case 6:
            e.next = 11;
            break;
          case 8:
            ((e.prev = 8), (e.t0 = e.catch(3)), console.error("remove firewall rule failed with error:", e.t0));
          case 11:
          case "end":
            return e.stop();
        }
      }, e, null, [[3, 8]]);
    }))), function () {
      return r.apply(this, arguments);
    });
};