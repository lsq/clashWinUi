module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    ec: () => n,
    md: () => o
  });
  i(43702);
  const n = (0, i(72065).yh)("contextService");
  class o {
    constructor(e, t) {
      ((this.raw = t), (this.uri = e.uri), (this.index = e.index), (this.name = e.name));
    }
    toJSON() {
      return {
        uri: this.uri,
        name: this.name,
        index: this.index
      };
    }
  }
};