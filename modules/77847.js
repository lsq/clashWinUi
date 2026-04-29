module.exports = (e, t, i) => {
  "use strict";

  i.r(t);
  var n = i(16830),
    o = i(61329),
    s = i(88784),
    r = i(24314),
    a = i(29102),
    l = i(63580);
  class c extends n.R6 {
    constructor() {
      super({
        id: "editor.action.transposeLetters",
        label: l.N("transposeLetters.label", "Transpose Letters"),
        alias: "Transpose Letters",
        precondition: a.u.writable,
        kbOpts: {
          kbExpr: a.u.textInputFocus,
          primary: 0,
          mac: {
            primary: 306
          },
          weight: 100
        }
      });
    }
    run(e, t) {
      if (!t.hasModel()) return;
      let i = t.getModel(),
        n = [],
        a = t.getSelections();
      for (let e of a) {
        if (!e.isEmpty()) continue;
        let t = e.startLineNumber,
          a = e.startColumn,
          l = i.getLineMaxColumn(t);
        if (1 === t && (1 === a || (2 === a && 2 === l))) continue;
        let c = a === l ? e.getPosition() : s.o.rightPosition(i, e.getPosition().lineNumber, e.getPosition().column),
          d = s.o.leftPosition(i, c),
          h = s.o.leftPosition(i, d),
          u = i.getValueInRange(r.e.fromPositions(h, d)),
          g = i.getValueInRange(r.e.fromPositions(d, c)),
          p = r.e.fromPositions(h, c);
        n.push(new o.T4(p, g + u));
      }
      n.length > 0 && (t.pushUndoStop(), t.executeCommands(this.id, n), t.pushUndoStop());
    }
  }
  (0, n.Qr)(c);
};