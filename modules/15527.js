module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    KM: () => a,
    fn: () => r,
    oP: () => c,
    vY: () => l
  });
  var n = i(88721),
    o = i(1432),
    s = i(97295);
  function r(e) {
    return (-1 === e.indexOf("/") && (e = (function (e) {
      return e.replace(/[\\/]/g, n.KR.sep);
    })(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e);
  }
  function a(e, t, i, o = n.ir) {
    if (e === t) return !0;
    if (!e || !t) return !1;
    if (t.length > e.length) return !1;
    if (i) {
      if (!(0, s.ok)(e, t)) return !1;
      if (t.length === e.length) return !0;
      let i = t.length;
      return (t.charAt(t.length - 1) === o && i--, e.charAt(i) === o);
    }
    return (t.charAt(t.length - 1) !== o && (t += o), 0 === e.indexOf(t));
  }
  function l(e) {
    const t = (0, n.Fv)(e);
    return o.ED ? !(e.length > 3) && c(t) && (2 === e.length || 92 === t.charCodeAt(2)) : t === n.KR.sep;
  }
  function c(e) {
    return (!!o.ED && (((t = e.charCodeAt(0)) >= 65 && t <= 90) || (t >= 97 && t <= 122)) && 58 === e.charCodeAt(1));
    var t;
  }
};