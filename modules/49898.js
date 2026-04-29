module.exports = (e, t, i) => {
  "use strict";

  function n(e, t, i) {
    let n = null,
      o = null;
    if (("function" == typeof i.value ? ((n = "value"), (o = i.value), 0 !== o.length && console.warn("Memoize should only be used in functions with zero parameters")) : "function" == typeof i.get && ((n = "get"), (o = i.get)), !o)) throw new Error("not supported");
    const s = `$memoize$${t}`;
    i[n] = function (...e) {
      return (this.hasOwnProperty(s) || Object.defineProperty(this, s, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o.apply(this, e)
      }), this[s]);
    };
  }
  i.d(t, {
    H: () => n
  });
};