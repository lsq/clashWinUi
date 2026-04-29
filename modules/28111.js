module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Ri: () => r,
    TG: () => s,
    mh: () => a,
    nO: () => o
  });
  var n = i(85600);
  const o = new (class {
      clone() {
        return this;
      }
      equals(e) {
        return this === e;
      }
    })(),
    s = "vs.editor.nullMode";
  function r(e, t, i, o) {
    return new n.hG([new n.WU(o, "", e)], i);
  }
  function a(e, t, i, s) {
    let r = new Uint32Array(2);
    return ((r[0] = s), (r[1] = (16384 | (e << 0) | (2 << 23)) >>> 0), new n.Hi(r, null === i ? o : i));
  }
};