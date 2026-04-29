const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    uR: () => P,
    uQ: () => U,
    wi: () => q,
    Ll: () => O,
    EP: () => W,
    fl: () => V,
    Mf: () => K,
    Sr: () => $,
    e8: () => Z,
    XW: () => z,
    vC: () => B,
    c0: () => F,
    nM: () => H,
    F0: () => R,
    Dc: () => A
  });
  var n = i(50008),
    o = i.n(n),
    s = i(319),
    r = i.n(s),
    a = i(59713),
    l = i.n(a),
    c = i(48926),
    d = i.n(c),
    h = i(87757),
    u = i.n(h);
  const g = require("crypto");
  var p = i(57147),
    f = i(71017);
  require("http");
  var m = i(11442),
    v = i.n(m),
    _ = i(59273),
    b = i(72298),
    w = (i(10605), i(24883)),
    y = i(81518),
    C = i(83566);
  const x = require("bignumber.js");
  var S = i.n(x);
  function k(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  function L(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? k(Object(i), !0).forEach(function (t) {
        l()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : k(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  var N,
    D,
    I,
    E,
    T,
    M,
    A = function (e) {
      return new Promise(function (t) {
        return setTimeout(t, e);
      });
    },
    O = function (e) {
      return (0, g.createHash)("md5").update(e).digest("hex");
    },
    P = function e(t) {
      p.existsSync(t) && (p.readdirSync(t).forEach(function (i, n) {
        var o = f.join(t, i);
        p.lstatSync(o).isDirectory() ? e(o) : p.unlinkSync(o);
      }), p.rmdirSync(t));
    },
    R = ((N = d()(u().mark(function e(t, i, n) {
      var o, s;
      return u().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            ((o = p.readFileSync(t).toString()), (s = v().parseDocument(o)).set(i, n), p.writeFileSync(t, s.toString()));
          case 4:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function (e, t, i) {
      return N.apply(this, arguments);
    }),
    F = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () {},
        o = _.Z.state.app.settings.showNotifications;
      void 0 !== o && o && (new Notification(e, L({
        body: t,
        silent: !0
      }, i)).onclick = function () {
        (!0 !== (null == i ? void 0 : i.hideWindowOnClick) && b.ipcRenderer.invoke("window-control", "show"), n());
      });
    },
    B = ((D = d()(u().mark(function e(t) {
      return u().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            return ((e.next = 2), b.ipcRenderer.invoke("dialog", "showMessageBox", L({
              title: "Clash for Windows"
            }, t)));
          case 2:
            return e.abrupt("return", e.sent);
          case 3:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function (e) {
      return D.apply(this, arguments);
    }),
    V = ((I = d()(u().mark(function e(t) {
      const Lg = new Language(modifyState.language);
      return u().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            return ((e.next = 2), B({
              type: "question",
              buttons: [Lg.no(), Lg.yes()],
              message: Lg.askOpenURL(),
              detail: t
            }));
          case 2:
            1 === e.sent.response && b.shell.openExternal(t);
          case 5:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function (e) {
      return I.apply(this, arguments);
    }),
    W = function (e) {
      return JSON.parse(JSON.stringify(e));
    },
    H = function (e) {
      for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], n = ["B", "KB", "MB", "GB", "TB", "PB", "EB"], o = 0; S()(e).dividedBy(1024).isGreaterThan(1) && o < n.length;) ((e = S()(e).dividedBy(1024)), o++);
      return "".concat(e.toFixed(t)).concat(i ? " " : "").concat(n[o]);
    },
    z = ((E = d()(u().mark(function e(t) {
      var i, n, o, s, a, l, c;
      return u().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            ((i = t.method), (n = t.target), (o = t.checkTimes), (s = void 0 === o ? 10 : o), (a = t.ags), (l = void 0 === a ? [] : a), (c = 0));
          case 2:
            return ((e.next = 5), i.apply(void 0, r()(l)));
          case 5:
            if (((e.t0 = e.sent), (e.t1 = n), e.t0 !== e.t1)) {
              e.next = 9;
              break;
            }
            return e.abrupt("return");
          case 9:
            return ((e.next = 11), A(1e3));
          case 11:
            if (!((c += 1) >= s)) {
              e.next = 14;
              break;
            }
            return e.abrupt("return");
          case 14:
            e.next = 2;
            break;
          case 16:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function (e, t) {
      if (e.length <= t) return e;
      var i = parseInt(t / 2),
        n = t - i;
      return e.slice(0, i) + "..." + e.slice(-n);
    }),
    j = null,
    U = ((T = d()(u().mark(function e() {
      var t;
      return u().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            return ((e.next = 2), b.ipcRenderer.invoke("app", "getVersion"));
          case 2:
            return ((t = e.sent), null === j && ((j = w.Z.get(y.Z.LAST_VERSION_CODE) || ""), w.Z.put(y.Z.LAST_VERSION_CODE, t)), e.abrupt("return", j !== t));
          case 5:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function () {
      return T.apply(this, arguments);
    }),
    $ = function (e) {
      var t = e || {},
        i = t.ipv6,
        n = void 0 !== i && i,
        o = t.nameServers,
        s = void 0 === o ? ["8.8.8.8", "1.1.1.1", "94.140.14.14"] : o,
        a = t.fallbackServers,
        l = void 0 === a ? [] : a,
        c = t.defaultNameservers,
        d = void 0 === c ? [] : c,
        h = t.fakeIPFilters,
        u = t.nameserverPolicy,
        g = void 0 === u ? {} : u,
        p = t.stackType,
        f = void 0 === p ? 0 : p,
        m = t.interfaceName,
        v = void 0 === m ? "" : m,
        _ = t.isAutoDetectInterface,
        b = void 0 === _ || _,
        w = t.dnsHijacks,
        y = void 0 === w ? [] : w,
        x = t.isAutoRedir,
        S = t.isAutoRedirAutoRoute,
        k = {
          dns: {
            enable: !0,
            ipv6: n,
            "enhanced-mode": "fake-ip",
            "default-nameserver": d,
            nameserver: s,
            fallback: l,
            "nameserver-policy": g
          },
          tun: {
            enable: !0,
            stack: ["gvisor", "system"][f],
            "auto-route": !0
          }
        };
      return ((k.dns["fake-ip-filter"] = void 0 === h ? ["+.stun.*.*", "+.stun.*.*.*", "+.stun.*.*.*.*", "+.stun.*.*.*.*.*", "*.n.n.srv.nintendo.net", "+.stun.playstation.net", "xbox.*.*.microsoft.com", "*.*.xboxlive.com"].concat(r()((0, C.Kr)() ? ["*.msftncsi.com", "*.msftconnecttest.com", "WORKGROUP"] : (0, C.V5)() ? ["apps.apple.com"] : [])) : h), b ? (k.tun["auto-detect-interface"] = !0) : (k["interface-name"] = v), (k.tun["dns-hijack"] = y), (0, C.IJ)() && (k["auto-redir"] = {
        enable: x,
        "auto-route": S
      }), 0 === d.length && delete k.dns["default-nameserver"], k);
    },
    K = function e(t) {
      return Object.values(t).map(function (t) {
        return "object" === o()(t) ? e(t) : t;
      }).join("\n");
    },
    q = function (e) {
      return e > 0 && e < 65536;
    },
    Z = ((M = d()(u().mark(function e(t, i) {
      var n, o, s;
      return u().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            if ((s = null === _.Z || void 0 === _.Z || null === (n = _.Z.getters) || void 0 === n ? void 0 : n.clashAxiosClient)) {
              e.next = 3;
              break;
            }
            throw new Error("Clash Core is not ready");
          case 3:
            return ((e.next = 5), s.get("/dns/query", {
              params: {
                name: t,
                type: i
              }
            }));
          case 5:
            if (((e.t1 = o = e.sent), (e.t0 = null === e.t1), e.t0)) {
              e.next = 9;
              break;
            }
            e.t0 = void 0 === o;
          case 9:
            if (!e.t0) {
              e.next = 13;
              break;
            }
            ((e.t2 = void 0), (e.next = 14));
            break;
          case 13:
            e.t2 = o.data;
          case 14:
            return e.abrupt("return", e.t2);
          case 15:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function (e, t) {
      return M.apply(this, arguments);
    });
};