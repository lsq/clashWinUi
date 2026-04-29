module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Af: () => o,
    eq: () => s,
    t2: () => a,
    vu: () => n
  });
  const n = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
  const o = (function (e = "") {
    let t = "(-?\\d*\\.\\d\\w*)|([^";
    for (const i of n) e.indexOf(i) >= 0 || (t += "\\" + i);
    return ((t += "\\s]+)"), new RegExp(t, "g"));
  })();
  function s(e) {
    let t = o;
    if (e && e instanceof RegExp) if (e.global) t = e;else {
      let i = "g";
      (e.ignoreCase && (i += "i"), e.multiline && (i += "m"), e.unicode && (i += "u"), (t = new RegExp(e.source, i)));
    }
    return ((t.lastIndex = 0), t);
  }
  const r = {
    maxLen: 1e3,
    windowSize: 15,
    timeBudget: 150
  };
  function a(e, t, i, n, o = r) {
    if (i.length > o.maxLen) {
      let s = e - o.maxLen / 2;
      return (s < 0 ? (s = 0) : (n += s), a(e, t, (i = i.substring(s, e + o.maxLen / 2)), n, o));
    }
    const s = Date.now(),
      c = e - 1 - n;
    let d = -1,
      h = null;
    for (let e = 1; !(Date.now() - s >= o.timeBudget); e++) {
      const n = c - o.windowSize * e;
      t.lastIndex = Math.max(0, n);
      const s = l(t, i, c, d);
      if (!s && h) break;
      if (((h = s), n <= 0)) break;
      d = n;
    }
    if (h) {
      let e = {
        word: h[0],
        startColumn: n + 1 + h.index,
        endColumn: n + 1 + h.index + h[0].length
      };
      return ((t.lastIndex = 0), e);
    }
    return null;
  }
  function l(e, t, i, n) {
    let o;
    for (; (o = e.exec(t));) {
      const t = o.index || 0;
      if (t <= i && e.lastIndex >= i) return o;
      if (n > 0 && t > n) return null;
    }
    return null;
  }
};