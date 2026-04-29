module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    provideSelectionRanges: () => y
  }));
  var n = i(9488),
    o = i(71050),
    s = i(17301),
    r = i(16830),
    a = i(50187),
    l = i(24314),
    c = i(3860),
    d = i(29102),
    h = i(44101),
    u = i(80689),
    g = i(97295);
  var p = i(63580),
    f = i(84144),
    m = i(94565),
    v = function (e, t, i, n) {
      return new (i || (i = Promise))(function (o, s) {
        function r(e) {
          try {
            l(n.next(e));
          } catch (e) {
            s(e);
          }
        }
        function a(e) {
          try {
            l(n.throw(e));
          } catch (e) {
            s(e);
          }
        }
        function l(e) {
          var t;
          e.done ? o(e.value) : ((t = e.value), t instanceof i ? t : new i(function (e) {
            e(t);
          })).then(r, a);
        }
        l((n = n.apply(e, t || [])).next());
      });
    };
  class _ {
    constructor(e, t) {
      ((this.index = e), (this.ranges = t));
    }
    mov(e) {
      let t = this.index + (e ? 1 : -1);
      if (t < 0 || t >= this.ranges.length) return this;
      const i = new _(t, this.ranges);
      return i.ranges[t].equalsRange(this.ranges[this.index]) ? i.mov(e) : i;
    }
  }
  class b {
    constructor(e) {
      ((this._editor = e), (this._ignoreSelection = !1));
    }
    static get(e) {
      return e.getContribution(b.ID);
    }
    dispose() {
      var e;
      null === (e = this._selectionListener) || void 0 === e || e.dispose();
    }
    run(e) {
      return v(this, void 0, void 0, function* () {
        if (!this._editor.hasModel()) return;
        const t = this._editor.getSelections(),
          i = this._editor.getModel();
        if (!h.AC.has(i)) return;
        if ((this._state || (yield y(i, t.map(e => e.getPosition()), this._editor.getOption(101), o.T.None).then(e => {
          var i;
          if (n.Of(e) && e.length === t.length && this._editor.hasModel() && n.fS(this._editor.getSelections(), t, (e, t) => e.equalsSelection(t))) {
            for (let i = 0; i < e.length; i++) ((e[i] = e[i].filter(e => e.containsPosition(t[i].getStartPosition()) && e.containsPosition(t[i].getEndPosition()))), e[i].unshift(t[i]));
            ((this._state = e.map(e => new _(0, e))), null === (i = this._selectionListener) || void 0 === i || i.dispose(), (this._selectionListener = this._editor.onDidChangeCursorPosition(() => {
              var e;
              this._ignoreSelection || (null === (e = this._selectionListener) || void 0 === e || e.dispose(), (this._state = void 0));
            })));
          }
        })), !this._state)) return;
        this._state = this._state.map(t => t.mov(e));
        const s = this._state.map(e => c.Y.fromPositions(e.ranges[e.index].getStartPosition(), e.ranges[e.index].getEndPosition()));
        this._ignoreSelection = !0;
        try {
          this._editor.setSelections(s);
        } finally {
          this._ignoreSelection = !1;
        }
      });
    }
  }
  b.ID = "editor.contrib.smartSelectController";
  class w extends r.R6 {
    constructor(e, t) {
      (super(t), (this._forward = e));
    }
    run(e, t) {
      return v(this, void 0, void 0, function* () {
        let e = b.get(t);
        e && (yield e.run(this._forward));
      });
    }
  }
  m.P.registerCommandAlias("editor.action.smartSelect.grow", "editor.action.smartSelect.expand");
  function y(e, t, i, o) {
    return v(this, void 0, void 0, function* () {
      const r = h.AC.all(e);
      1 === r.length && r.unshift(new u.x());
      let c = [],
        d = [];
      for (const i of r) c.push(Promise.resolve(i.provideSelectionRanges(e, t, o)).then(e => {
        if (n.Of(e) && e.length === t.length) for (let i = 0; i < t.length; i++) {
          d[i] || (d[i] = []);
          for (const n of e[i]) l.e.isIRange(n.range) && l.e.containsPosition(n.range, t[i]) && d[i].push(l.e.lift(n.range));
        }
      }, s.Cp));
      return (yield Promise.all(c), d.map(t => {
        if (0 === t.length) return [];
        t.sort((e, t) => a.L.isBefore(e.getStartPosition(), t.getStartPosition()) ? 1 : a.L.isBefore(t.getStartPosition(), e.getStartPosition()) || a.L.isBefore(e.getEndPosition(), t.getEndPosition()) ? -1 : a.L.isBefore(t.getEndPosition(), e.getEndPosition()) ? 1 : 0);
        let n,
          o = [];
        for (const e of t) (!n || (l.e.containsRange(e, n) && !l.e.equalsRange(e, n))) && (o.push(e), (n = e));
        if (!i.selectLeadingAndTrailingWhitespace) return o;
        let s = [o[0]];
        for (let t = 1; t < o.length; t++) {
          const i = o[t - 1],
            n = o[t];
          if (n.startLineNumber !== i.startLineNumber || n.endLineNumber !== i.endLineNumber) {
            const t = new l.e(i.startLineNumber, e.getLineFirstNonWhitespaceColumn(i.startLineNumber), i.endLineNumber, e.getLineLastNonWhitespaceColumn(i.endLineNumber));
            t.containsRange(i) && !t.equalsRange(i) && n.containsRange(t) && !n.equalsRange(t) && s.push(t);
            const o = new l.e(i.startLineNumber, 1, i.endLineNumber, e.getLineMaxColumn(i.endLineNumber));
            o.containsRange(i) && !o.equalsRange(t) && n.containsRange(o) && !n.equalsRange(o) && s.push(o);
          }
          s.push(n);
        }
        return s;
      }));
    });
  }
  ((0, r._K)(b.ID, b), (0, r.Qr)(class extends w {
    constructor() {
      super(!0, {
        id: "editor.action.smartSelect.expand",
        label: p.N("smartSelect.expand", "Expand Selection"),
        alias: "Expand Selection",
        precondition: void 0,
        kbOpts: {
          kbExpr: d.u.editorTextFocus,
          primary: 1553,
          mac: {
            primary: 3345,
            secondary: [1297]
          },
          weight: 100
        },
        menuOpts: {
          menuId: f.eH.MenubarSelectionMenu,
          group: "1_basic",
          title: p.N({
            key: "miSmartSelectGrow",
            comment: ["&& denotes a mnemonic"]
          }, "&&Expand Selection"),
          order: 2
        }
      });
    }
  }), (0, r.Qr)(class extends w {
    constructor() {
      super(!1, {
        id: "editor.action.smartSelect.shrink",
        label: p.N("smartSelect.shrink", "Shrink Selection"),
        alias: "Shrink Selection",
        precondition: void 0,
        kbOpts: {
          kbExpr: d.u.editorTextFocus,
          primary: 1551,
          mac: {
            primary: 3343,
            secondary: [1295]
          },
          weight: 100
        },
        menuOpts: {
          menuId: f.eH.MenubarSelectionMenu,
          group: "1_basic",
          title: p.N({
            key: "miSmartSelectShrink",
            comment: ["&& denotes a mnemonic"]
          }, "&&Shrink Selection"),
          order: 3
        }
      });
    }
  }), h.AC.register("*", new (class {
    provideSelectionRanges(e, t) {
      const i = [];
      for (const n of t) {
        const t = [];
        (i.push(t), this._addInWordRanges(t, e, n), this._addWordRanges(t, e, n), this._addWhitespaceLine(t, e, n), t.push({
          range: e.getFullModelRange()
        }));
      }
      return i;
    }
    _addInWordRanges(e, t, i) {
      const n = t.getWordAtPosition(i);
      if (!n) return;
      let {
          word: o,
          startColumn: s
        } = n,
        r = i.column - s,
        a = r,
        c = r,
        d = 0;
      for (; a >= 0; a--) {
        let e = o.charCodeAt(a);
        if (a !== r && (95 === e || 45 === e)) break;
        if ((0, g.mK)(e) && (0, g.df)(d)) break;
        d = e;
      }
      for (a += 1; c < o.length; c++) {
        let e = o.charCodeAt(c);
        if ((0, g.df)(e) && (0, g.mK)(d)) break;
        if (95 === e || 45 === e) break;
        d = e;
      }
      a < c && e.push({
        range: new l.e(i.lineNumber, s + a, i.lineNumber, s + c)
      });
    }
    _addWordRanges(e, t, i) {
      const n = t.getWordAtPosition(i);
      n && e.push({
        range: new l.e(i.lineNumber, n.startColumn, i.lineNumber, n.endColumn)
      });
    }
    _addWhitespaceLine(e, t, i) {
      t.getLineLength(i.lineNumber) > 0 && 0 === t.getLineFirstNonWhitespaceColumn(i.lineNumber) && 0 === t.getLineLastNonWhitespaceColumn(i.lineNumber) && e.push({
        range: new l.e(i.lineNumber, 1, i.lineNumber, t.getLineMaxColumn(i.lineNumber))
      });
    }
  })()), (0, r.f)("_executeSelectionRangeProvider", function (e, ...t) {
    const [i] = t;
    return y(e, i, {
      selectLeadingAndTrailingWhitespace: !0
    }, o.T.None);
  }));
};