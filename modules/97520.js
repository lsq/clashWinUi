module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z: () => u,
    r: () => h
  });
  var n = i(50008),
    o = i.n(n),
    s = i(32081),
    r = i(22037),
    a = i(41808),
    l = i(83566);
  function c(e, t) {
    var i = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (!i) {
      if (Array.isArray(e) || (i = (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return d(e, t);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === i && e.constructor && (i = e.constructor.name);
        if ("Map" === i || "Set" === i) return Array.from(e);
        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return d(e, t);
      })(e)) || (t && e && "number" == typeof e.length)) {
        i && (e = i);
        var n = 0,
          o = function () {};
        return {
          s: o,
          n: function () {
            return n >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[n++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: o
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var s,
      r = !0,
      a = !1;
    return {
      s: function () {
        i = i.call(e);
      },
      n: function () {
        var e = i.next();
        return ((r = e.done), e);
      },
      e: function (e) {
        ((a = !0), (s = e));
      },
      f: function () {
        try {
          r || null == i.return || i.return();
        } finally {
          if (a) throw s;
        }
      }
    };
  }
  function d(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
    return n;
  }
  var h = function () {
    var e = [],
      t = (0, r.networkInterfaces)();
    return (Object.keys(t).forEach(function (i) {
      t[i].forEach(function (t) {
        !0 !== t.internal && "IPv6" !== t.family && e.push({
          name: i,
          address: t.address
        });
      });
    }), e);
  };
  const u = function () {
    if ((0, l.V5)()) {
      var e = (0, s.execSync)("netstat -nr | grep default ").toString().split("\n").map(function (e) {
          return e.split(/\s+/).filter(function (e) {
            return e;
          });
        }).filter(function (e) {
          return 4 === e.length && (0, a.isIPv4)(e[1]);
        }),
        t = (0, r.networkInterfaces)();
      if (e.length > 0) {
        var i,
          n = c(e);
        try {
          for (n.s(); !(i = n.n()).done;) {
            var d = i.value[3];
            if (Object.keys(t).includes(d)) return d;
          }
        } catch (e) {
          n.e(e);
        } finally {
          n.f();
        }
      }
      if (Object.keys(t).includes("en0")) return "en0";
    } else if ((0, l.Kr)()) {
      var h = (0, s.execSync)("route print 0.0.0.0 mask 0.0.0.0", {
          windowsHide: !0
        }).toString().split("\n").map(function (e) {
          return e.split(/\s+/).filter(function (e) {
            return e;
          });
        }).filter(function (e) {
          return (5 === e.length && e.slice(0, 4).every(function (e) {
            return (0, a.isIP)(e);
          }) && NaN !== parseInt(e[4]));
        }),
        u = (0, r.networkInterfaces)();
      if ((delete u["cfw-tap"], h.length > 0)) {
        var g,
          p = c(h.sort(function (e, t) {
            return parseInt(e[4]) - parseInt(t[4]);
          }));
        try {
          var f = function () {
            for (var e = g.value[3], t = 0, i = Object.keys(u); t < i.length; t++) {
              var n = i[t];
              if (u[n].find(function (t) {
                return t.address === e;
              })) return {
                v: n
              };
            }
          };
          for (p.s(); !(g = p.n()).done;) {
            var m = f();
            if ("object" === o()(m)) return m.v;
          }
        } catch (e) {
          p.e(e);
        } finally {
          p.f();
        }
      }
      if (Object.keys(u).includes("以太网")) return "以太网";
      if (Object.keys(u).includes("WLAN")) return "WLAN";
    }
    return null;
  };
};