module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    GotoLineAction: () => w,
    StandaloneGotoLineQuickAccessProvider: () => b
  }));
  var n = i(5976),
    o = i(65520),
    s = i(98275),
    r = i(63580);
  class a extends s.X {
    constructor() {
      super({
        canAcceptInBackground: !0
      });
    }
    provideWithoutTextEditor(e) {
      const t = (0, r.N)("cannotRunGotoLine", "Open a text editor first to go to a line.");
      return ((e.items = [{
        label: t
      }]), (e.ariaLabel = t), n.JT.None);
    }
    provideWithTextEditor(e, t, i) {
      const s = e.editor,
        r = new n.SL();
      r.add(t.onDidAccept(i => {
        const [n] = t.selectedItems;
        if (n) {
          if (!this.isValidLineNumber(s, n.lineNumber)) return;
          (this.gotoLocation(e, {
            range: this.toRange(n.lineNumber, n.column),
            keyMods: t.keyMods,
            preserveFocus: i.inBackground
          }), i.inBackground || t.hide());
        }
      }));
      const l = () => {
        const e = this.parsePosition(s, t.value.trim().substr(a.PREFIX.length)),
          i = this.getPickLabel(s, e.lineNumber, e.column);
        if (((t.items = [{
          lineNumber: e.lineNumber,
          column: e.column,
          label: i
        }]), (t.ariaLabel = i), !this.isValidLineNumber(s, e.lineNumber))) return void this.clearDecorations(s);
        const n = this.toRange(e.lineNumber, e.column);
        (s.revealRangeInCenter(n, 0), this.addDecorations(s, n));
      };
      (l(), r.add(t.onDidChangeValue(() => l())));
      const c = (0, o.Pi)(s);
      if (c) {
        2 === c.getOptions().get(59).renderType && (c.updateOptions({
          lineNumbers: "on"
        }), r.add((0, n.OF)(() => c.updateOptions({
          lineNumbers: "relative"
        }))));
      }
      return r;
    }
    toRange(e = 1, t = 1) {
      return {
        startLineNumber: e,
        startColumn: t,
        endLineNumber: e,
        endColumn: t
      };
    }
    parsePosition(e, t) {
      const i = t.split(/,|:|#/).map(e => parseInt(e, 10)).filter(e => !isNaN(e)),
        n = this.lineCount(e) + 1;
      return {
        lineNumber: i[0] > 0 ? i[0] : n + i[0],
        column: i[1]
      };
    }
    getPickLabel(e, t, i) {
      if (this.isValidLineNumber(e, t)) return this.isValidColumn(e, t, i) ? (0, r.N)("gotoLineColumnLabel", "Go to line {0} and character {1}.", t, i) : (0, r.N)("gotoLineLabel", "Go to line {0}.", t);
      const n = e.getPosition() || {
          lineNumber: 1,
          column: 1
        },
        o = this.lineCount(e);
      return o > 1 ? (0, r.N)("gotoLineLabelEmptyWithLimit", "Current Line: {0}, Character: {1}. Type a line number between 1 and {2} to navigate to.", n.lineNumber, n.column, o) : (0, r.N)("gotoLineLabelEmpty", "Current Line: {0}, Character: {1}. Type a line number to navigate to.", n.lineNumber, n.column);
    }
    isValidLineNumber(e, t) {
      return !(!t || "number" != typeof t) && t > 0 && t <= this.lineCount(e);
    }
    isValidColumn(e, t, i) {
      if (!i || "number" != typeof i) return !1;
      const n = this.getModel(e);
      if (!n) return !1;
      const o = {
        lineNumber: t,
        column: i
      };
      return n.validatePosition(o).equals(o);
    }
    lineCount(e) {
      var t, i;
      return null !== (i = null === (t = this.getModel(e)) || void 0 === t ? void 0 : t.getLineCount()) && void 0 !== i ? i : 0;
    }
  }
  a.PREFIX = ":";
  var l = i(89872),
    c = i(90725),
    d = i(11640),
    h = i(98401),
    u = i(20913),
    g = i(4669),
    p = i(16830),
    f = i(29102),
    m = i(41157),
    v = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    _ = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let b = class extends a {
    constructor(e) {
      (super(), (this.editorService = e), (this.onDidActiveTextEditorControlChange = g.ju.None));
    }
    get activeTextEditorControl() {
      return (0, h.f6)(this.editorService.getFocusedCodeEditor());
    }
  };
  ((b = v([_(0, d.$)], b)), l.B.as(c.IP.Quickaccess).registerQuickAccessProvider({
    ctor: b,
    prefix: b.PREFIX,
    helpEntries: [{
      description: u.qq.gotoLineActionLabel,
      needsEditor: !0
    }]
  }));
  class w extends p.R6 {
    constructor() {
      super({
        id: "editor.action.gotoLine",
        label: u.qq.gotoLineActionLabel,
        alias: "Go to Line/Column...",
        precondition: void 0,
        kbOpts: {
          kbExpr: f.u.focus,
          primary: 2085,
          mac: {
            primary: 293
          },
          weight: 100
        }
      });
    }
    run(e) {
      e.get(m.eJ).quickAccess.show(b.PREFIX);
    }
  }
  (0, p.Qr)(w);
};