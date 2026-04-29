module.exports = e => {
  ((e.exports = function (e, t) {
    var i = e && (("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"]);
    if (null != i) {
      var n,
        o,
        s = [],
        r = !0,
        a = !1;
      try {
        for (i = i.call(e); !(r = (n = i.next()).done) && (s.push(n.value), !t || s.length !== t); r = !0);
      } catch (e) {
        ((a = !0), (o = e));
      } finally {
        try {
          r || null == i.return || i.return();
        } finally {
          if (a) throw o;
        }
      }
      return s;
    }
  }), (e.exports.default = e.exports), (e.exports.__esModule = !0));
};