module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Ag: () => l,
    Cg: () => h,
    KN: () => s,
    Q$: () => d,
    T4: () => c,
    mP: () => r,
    oq: () => a
  });
  const n = "undefined" != typeof Buffer;
  let o;
  class s {
    constructor(e) {
      ((this.buffer = e), (this.byteLength = this.buffer.byteLength));
    }
    static wrap(e) {
      return (n && !Buffer.isBuffer(e) && (e = Buffer.from(e.buffer, e.byteOffset, e.byteLength)), new s(e));
    }
    toString() {
      return n ? this.buffer.toString() : (o || (o = new TextDecoder()), o.decode(this.buffer));
    }
  }
  function r(e, t) {
    return ((e[t + 0] << 0) >>> 0) | ((e[t + 1] << 8) >>> 0);
  }
  function a(e, t, i) {
    ((e[i + 0] = 255 & t), (t >>>= 8), (e[i + 1] = 255 & t));
  }
  function l(e, t) {
    return (e[t] * Math.pow(2, 24) + e[t + 1] * Math.pow(2, 16) + e[t + 2] * Math.pow(2, 8) + e[t + 3]);
  }
  function c(e, t, i) {
    ((e[i + 3] = t), (t >>>= 8), (e[i + 2] = t), (t >>>= 8), (e[i + 1] = t), (t >>>= 8), (e[i] = t));
  }
  function d(e, t) {
    return e[t];
  }
  function h(e, t, i) {
    e[i] = t;
  }
};