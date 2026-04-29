module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    h: () => o
  });
  var n = i(24314);
  class o {
    static insert(e, t) {
      return {
        range: new n.e(e.lineNumber, e.column, e.lineNumber, e.column),
        text: t,
        forceMoveMarkers: !0
      };
    }
    static delete(e) {
      return {
        range: e,
        text: null
      };
    }
    static replace(e, t) {
      return {
        range: e,
        text: t
      };
    }
    static replaceMove(e, t) {
      return {
        range: e,
        text: t,
        forceMoveMarkers: !0
      };
    }
  }
};