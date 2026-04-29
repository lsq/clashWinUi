module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    kH: () => g,
    l$: () => u,
    lZ: () => h,
    oe: () => d
  });
  var n = i(97295),
    o = i(1432),
    s = i(53060);
  let r, a, l;
  function c() {
    return (r || (r = new TextDecoder("UTF-16LE")), r);
  }
  function d() {
    return (l || (l = o.r() ? c() : (a || (a = new TextDecoder("UTF-16BE")), a)), l);
  }
  const h = "undefined" != typeof TextDecoder;
  let u, g;
  function p(e, t, i) {
    let n = [],
      o = 0;
    for (let r = 0; r < i; r++) {
      const i = s.mP(e, t);
      ((t += 2), (n[o++] = String.fromCharCode(i)));
    }
    return n.join("");
  }
  h ? ((u = e => new f(e)), (g = function (e, t, i) {
    const n = new Uint16Array(e.buffer, t, i);
    if (i > 0 && (65279 === n[0] || 65534 === n[0])) return p(e, t, i);
    return c().decode(n);
  })) : ((u = e => new m()), (g = p));
  class f {
    constructor(e) {
      ((this._capacity = 0 | e), (this._buffer = new Uint16Array(this._capacity)), (this._completedStrings = null), (this._bufferLength = 0));
    }
    reset() {
      ((this._completedStrings = null), (this._bufferLength = 0));
    }
    build() {
      return null !== this._completedStrings ? (this._flushBuffer(), this._completedStrings.join("")) : this._buildBuffer();
    }
    _buildBuffer() {
      if (0 === this._bufferLength) return "";
      const e = new Uint16Array(this._buffer.buffer, 0, this._bufferLength);
      return d().decode(e);
    }
    _flushBuffer() {
      const e = this._buildBuffer();
      ((this._bufferLength = 0), null === this._completedStrings ? (this._completedStrings = [e]) : (this._completedStrings[this._completedStrings.length] = e));
    }
    write1(e) {
      const t = this._capacity - this._bufferLength;
      (t <= 1 && (0 === t || n.ZG(e)) && this._flushBuffer(), (this._buffer[this._bufferLength++] = e));
    }
    appendASCII(e) {
      (this._bufferLength === this._capacity && this._flushBuffer(), (this._buffer[this._bufferLength++] = e));
    }
    appendASCIIString(e) {
      const t = e.length;
      if (this._bufferLength + t >= this._capacity) return (this._flushBuffer(), void (this._completedStrings[this._completedStrings.length] = e));
      for (let i = 0; i < t; i++) this._buffer[this._bufferLength++] = e.charCodeAt(i);
    }
  }
  class m {
    constructor() {
      ((this._pieces = []), (this._piecesLen = 0));
    }
    reset() {
      ((this._pieces = []), (this._piecesLen = 0));
    }
    build() {
      return this._pieces.join("");
    }
    write1(e) {
      this._pieces[this._piecesLen++] = String.fromCharCode(e);
    }
    appendASCII(e) {
      this._pieces[this._piecesLen++] = String.fromCharCode(e);
    }
    appendASCIIString(e) {
      this._pieces[this._piecesLen++] = e;
    }
  }
};