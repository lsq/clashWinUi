module.exports = (e, t, i) => {
  "use strict";

  function n(e, t) {
    let i = 0;
    for (let n = 0; n < e.length; n++) "\t" === e.charAt(n) ? (i += t) : i++;
    return i;
  }
  function o(e, t, i) {
    e = e < 0 ? 0 : e;
    let n = "";
    if (!i) {
      let i = Math.floor(e / t);
      e %= t;
      for (let e = 0; e < i; e++) n += "\t";
    }
    for (let t = 0; t < e; t++) n += " ";
    return n;
  }
  i.d(t, {
    J: () => o,
    Y: () => n
  });
};