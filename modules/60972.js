module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    y: () => n
  });
  class n {
    constructor(...e) {
      this._entries = new Map();
      for (let [t, i] of e) this.set(t, i);
    }
    set(e, t) {
      const i = this._entries.get(e);
      return (this._entries.set(e, t), i);
    }
    has(e) {
      return this._entries.has(e);
    }
    get(e) {
      return this._entries.get(e);
    }
  }
};