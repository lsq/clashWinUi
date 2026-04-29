module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    u: () => s
  });
  var n = i(44906);
  class o extends n.N {
    constructor(e) {
      super(0);
      for (let t = 0, i = e.length; t < i; t++) this.set(e.charCodeAt(t), 2);
      (this.set(32, 1), this.set(9, 1));
    }
  }
  const s = (function (e) {
    let t = {};
    return i => (t.hasOwnProperty(i) || (t[i] = e(i)), t[i]);
  })(e => new o(e));
};