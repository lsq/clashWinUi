module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    I: () => s
  });
  var n = i(4669),
    o = i(89872);
  const s = {
    JSONContribution: "base.contributions.json"
  };
  const r = new (class {
    constructor() {
      ((this._onDidChangeSchema = new n.Q5()), (this.schemasById = {}));
    }
    registerSchema(e, t) {
      var i;
      ((this.schemasById[((i = e), i.length > 0 && "#" === i.charAt(i.length - 1) ? i.substring(0, i.length - 1) : i)] = t), this._onDidChangeSchema.fire(e));
    }
    notifySchemaChanged(e) {
      this._onDidChangeSchema.fire(e);
    }
  })();
  o.B.add(s.JSONContribution, r);
};