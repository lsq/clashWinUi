module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    R: () => n,
    a: () => o
  });
  class n {
    constructor(e) {
      ((this._prefix = e), (this._lastId = 0));
    }
    nextId() {
      return this._prefix + ++this._lastId;
    }
  }
  const o = new n("id#");
};