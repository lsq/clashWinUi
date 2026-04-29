module.exports = e => {
  ((e.exports = function (e, t) {
    if (null == e) return {};
    var i,
      n,
      o = {},
      s = Object.keys(e);
    for (n = 0; n < s.length; n++) ((i = s[n]), t.indexOf(i) >= 0 || (o[i] = e[i]));
    return o;
  }), (e.exports.default = e.exports), (e.exports.__esModule = !0));
};