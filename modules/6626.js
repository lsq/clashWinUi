module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    E: () => o,
    r: () => s
  });
  const n = Object.prototype.hasOwnProperty;
  function o(e, t) {
    for (let i in e) if (n.call(e, i)) {
      if (!1 === t({
        key: i,
        value: e[i]
      }, function () {
        delete e[i];
      })) return;
    }
  }
  class s {
    constructor() {
      this.map = new Map();
    }
    add(e, t) {
      let i = this.map.get(e);
      (i || ((i = new Set()), this.map.set(e, i)), i.add(t));
    }
    delete(e, t) {
      const i = this.map.get(e);
      i && (i.delete(t), 0 === i.size && this.map.delete(e));
    }
    forEach(e, t) {
      const i = this.map.get(e);
      i && i.forEach(t);
    }
  }
};