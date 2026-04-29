module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    S: () => c
  });
  var n = i(63038),
    o = i.n(n),
    s = i(32081),
    r = i(83566);
  function a(e, t) {
    var i = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (!i) {
      if (Array.isArray(e) || (i = (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return l(e, t);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === i && e.constructor && (i = e.constructor.name);
        if ("Map" === i || "Set" === i) return Array.from(e);
        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return l(e, t);
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
  function l(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
    return n;
  }
  var c = function () {
    if ((0, r.Kr)() || (0, r.V5)()) {
      var e,
        t = (0, r.Kr)() ? "chcp 65001 && netsh wlan show interfaces" : "/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport --getinfo",
        i = (0, s.execSync)(t).toString().split("\n"),
        n = [],
        l = {},
        c = a(i.entries());
      try {
        for (c.s(); !(e = c.n()).done;) {
          var d = o()(e.value, 2),
            h = d[0],
            u = d[1].split(": "),
            g = o()(u, 2),
            p = g[0],
            f = g[1];
          if (p && f) {
            var m = p.trim(),
              v = f.trim();
            if (!m || !v) continue;
            (m in l && (n.push(l), (l = {})), (l[m] = v));
          }
          h === i.length - 1 && (n.push(l), (l = {}));
        }
      } catch (e) {
        c.e(e);
      } finally {
        c.f();
      }
      return n;
    }
    return [];
  };
};