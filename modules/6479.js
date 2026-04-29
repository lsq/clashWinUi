module.exports = (e, t, i) => {
  var n = i(37316);
  ((e.exports = function (e, t) {
    if (null == e) return {};
    var i,
      o,
      s = n(e, t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (o = 0; o < r.length; o++) ((i = r[o]), t.indexOf(i) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i])));
    }
    return s;
  }), (e.exports.default = e.exports), (e.exports.__esModule = !0));
};