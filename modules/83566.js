module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    $Q: () => g,
    Ap: () => o,
    IJ: () => m,
    J4: () => n,
    Kr: () => p,
    Ml: () => a,
    UD: () => l,
    V5: () => f,
    Vk: () => u,
    Vm: () => r,
    bV: () => c,
    tU: () => d
  });
  var n = Symbol(),
    o = Symbol(),
    s = Symbol(),
    r = Symbol(),
    a = Symbol(),
    l = Symbol(),
    c = Symbol(),
    d = Symbol(),
    h = Symbol(),
    u = function () {
      if ("win32" === process.platform) {
        if ("x64" === process.arch) return n;
        if ("ia32" === process.arch) return o;
        if ("arm" === process.arch) return s;
        if ("arm64" === process.arch) return r;
      }
      if ("darwin" === process.platform) {
        if ("x64" === process.arch) return a;
        if ("arm64" === process.arch) return l;
      }
      if ("linux" === process.platform) {
        if ("x64" === process.arch) return c;
        if ("arm64" === process.arch) return d;
      }
      return h;
    },
    g = function () {
      var e = u();
      return [o, s].includes(e) ? o : e;
    },
    p = function () {
      return [s, r, o, n].includes(u());
    },
    f = function () {
      return [a, l].includes(u());
    },
    m = function () {
      return [c, d].includes(u());
    };
};