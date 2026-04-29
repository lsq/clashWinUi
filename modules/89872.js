module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    B: () => s
  });
  var n = i(35146),
    o = i(98401);
  const s = new (class {
    constructor() {
      this.data = new Map();
    }
    add(e, t) {
      (n.ok(o.HD(e)), n.ok(o.Kn(t)), n.ok(!this.data.has(e), "There is already an extension with this id"), this.data.set(e, t));
    }
    as(e) {
      return this.data.get(e) || null;
    }
  })();
};