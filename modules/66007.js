module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Gl: () => l,
    fo: () => a,
    vu: () => r
  });
  var n = i(72065),
    o = i(70666),
    s = i(98401);
  const r = (0, n.yh)("IWorkspaceEditService");
  class a {
    constructor(e) {
      this.metadata = e;
    }
    static convert(e) {
      return e.edits.map(e => {
        if (((t = e), (0, s.Kn)(t) && o.o.isUri(t.resource) && (0, s.Kn)(t.edit))) return new l(e.resource, e.edit, e.modelVersionId, e.metadata);
        var t;
        if ((function (e) {
          return (0, s.Kn)(e) && (Boolean(e.newUri) || Boolean(e.oldUri));
        })(e)) return new c(e.oldUri, e.newUri, e.options, e.metadata);
        throw new Error("Unsupported edit");
      });
    }
  }
  class l extends a {
    constructor(e, t, i, n) {
      (super(n), (this.resource = e), (this.textEdit = t), (this.versionId = i));
    }
  }
  class c extends a {
    constructor(e, t, i, n) {
      (super(n), (this.oldResource = e), (this.newResource = t), (this.options = i));
    }
  }
};