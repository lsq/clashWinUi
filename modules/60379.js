module.exports = (e, t, i) => {
  var n = i(67228);
  ((e.exports = function (e, t) {
    if (e) {
      if ("string" == typeof e) return n(e, t);
      var i = Object.prototype.toString.call(e).slice(8, -1);
      return ("Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? n(e, t) : void 0);
    }
  }), (e.exports.default = e.exports), (e.exports.__esModule = !0));
};