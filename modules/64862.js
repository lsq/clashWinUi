module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Xt: () => s,
    YO: () => o,
    gJ: () => r,
    tJ: () => n
  });
  const n = (0, i(72065).yh)("undoRedoService");
  class o {
    constructor(e, t) {
      ((this.resource = e), (this.elements = t));
    }
  }
  class s {
    constructor() {
      ((this.id = s._ID++), (this.order = 1));
    }
    nextOrder() {
      return 0 === this.id ? 0 : this.order++;
    }
  }
  ((s._ID = 0), (s.None = new s()));
  class r {
    constructor() {
      ((this.id = r._ID++), (this.order = 1));
    }
    nextOrder() {
      return 0 === this.id ? 0 : this.order++;
    }
  }
  ((r._ID = 0), (r.None = new r()));
};