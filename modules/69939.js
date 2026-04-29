module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    V: () => s
  });
  var n = i(69386),
    o = i(24314);
  class s {
    static _handleEolEdits(e, t) {
      let i,
        n = [];
      for (let e of t) ("number" == typeof e.eol && (i = e.eol), e.range && "string" == typeof e.text && n.push(e));
      return ("number" == typeof i && e.hasModel() && e.getModel().pushEOL(i), n);
    }
    static _isFullModelReplaceEdit(e, t) {
      if (!e.hasModel()) return !1;
      const i = e.getModel(),
        n = i.validateRange(t.range);
      return i.getFullModelRange().equalsRange(n);
    }
    static execute(e, t, i) {
      i && e.pushUndoStop();
      const r = s._handleEolEdits(e, t);
      (1 === r.length && s._isFullModelReplaceEdit(e, r[0]) ? e.executeEdits("formatEditsCommand", r.map(e => n.h.replace(o.e.lift(e.range), e.text))) : e.executeEdits("formatEditsCommand", r.map(e => n.h.replaceMove(o.e.lift(e.range), e.text))), i && e.pushUndoStop());
    }
  }
};