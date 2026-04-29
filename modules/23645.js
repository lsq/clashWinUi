module.exports = e => {
  "use strict";

  e.exports = function (e) {
    var t = [];
    return ((t.toString = function () {
      return this.map(function (t) {
        var i = "",
          n = void 0 !== t[5];
        return (t[4] && (i += "@supports (".concat(t[4], ") {")), t[2] && (i += "@media ".concat(t[2], " {")), n && (i += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), (i += e(t)), n && (i += "}"), t[2] && (i += "}"), t[4] && (i += "}"), i);
      }).join("");
    }), (t.i = function (e, i, n, o, s) {
      "string" == typeof e && (e = [[null, e, void 0]]);
      var r = {};
      if (n) for (var a = 0; a < this.length; a++) {
        var l = this[a][0];
        null != l && (r[l] = !0);
      }
      for (var c = 0; c < e.length; c++) {
        var d = [].concat(e[c]);
        (n && r[d[0]]) || (void 0 !== s && (void 0 === d[5] || (d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}")), (d[5] = s)), i && (d[2] ? ((d[1] = "@media ".concat(d[2], " {").concat(d[1], "}")), (d[2] = i)) : (d[2] = i)), o && (d[4] ? ((d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}")), (d[4] = o)) : (d[4] = "".concat(o))), t.push(d));
      }
    }), t);
  };
};