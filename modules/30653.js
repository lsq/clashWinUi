module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    p: () => n
  });
  class n {
    constructor(e, t, i, n, o, s) {
      ((this.id = e), (this.label = t), (this.alias = i), (this._precondition = n), (this._run = o), (this._contextKeyService = s));
    }
    isSupported() {
      return this._contextKeyService.contextMatchesRules(this._precondition);
    }
    run() {
      return this.isSupported() ? this._run() : Promise.resolve(void 0);
    }
  }
};