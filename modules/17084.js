module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    BracketMatchingController: () => y
  }));
  var n = i(15393),
    o = i(5976),
    s = (i(67382), i(16830)),
    r = i(50187),
    a = i(24314),
    l = i(3860),
    c = i(29102),
    d = i(84973),
    h = i(44174),
    u = i(27869),
    g = i(63580),
    p = i(84144),
    f = i(73910),
    m = i(97781);
  const v = (0, f.P6)("editorOverviewRuler.bracketMatchForeground", {
    dark: "#A0A0A0",
    light: "#A0A0A0",
    hc: "#A0A0A0"
  }, g.N("overviewRulerBracketMatchForeground", "Overview ruler marker color for matching brackets."));
  class _ extends s.R6 {
    constructor() {
      super({
        id: "editor.action.jumpToBracket",
        label: g.N("smartSelect.jumpBracket", "Go to Bracket"),
        alias: "Go to Bracket",
        precondition: void 0,
        kbOpts: {
          kbExpr: c.u.editorTextFocus,
          primary: 3160,
          weight: 100
        }
      });
    }
    run(e, t) {
      let i = y.get(t);
      i && i.jumpToBracket();
    }
  }
  class b extends s.R6 {
    constructor() {
      super({
        id: "editor.action.selectToBracket",
        label: g.N("smartSelect.selectToBracket", "Select to Bracket"),
        alias: "Select to Bracket",
        precondition: void 0,
        description: {
          description: "Select to Bracket",
          args: [{
            name: "args",
            schema: {
              type: "object",
              properties: {
                selectBrackets: {
                  type: "boolean",
                  default: !0
                }
              }
            }
          }]
        }
      });
    }
    run(e, t, i) {
      const n = y.get(t);
      if (!n) return;
      let o = !0;
      (i && !1 === i.selectBrackets && (o = !1), n.selectToBracket(o));
    }
  }
  class w {
    constructor(e, t, i) {
      ((this.position = e), (this.brackets = t), (this.options = i));
    }
  }
  class y extends o.JT {
    constructor(e) {
      (super(), (this._editor = e), (this._lastBracketsData = []), (this._lastVersionId = 0), (this._decorations = []), (this._updateBracketsSoon = this._register(new n.pY(() => this._updateBrackets(), 50))), (this._matchBrackets = this._editor.getOption(63)), this._updateBracketsSoon.schedule(), this._register(e.onDidChangeCursorPosition(e => {
        "never" !== this._matchBrackets && this._updateBracketsSoon.schedule();
      })), this._register(e.onDidChangeModelContent(e => {
        this._updateBracketsSoon.schedule();
      })), this._register(e.onDidChangeModel(e => {
        ((this._lastBracketsData = []), (this._decorations = []), this._updateBracketsSoon.schedule());
      })), this._register(e.onDidChangeModelLanguageConfiguration(e => {
        ((this._lastBracketsData = []), this._updateBracketsSoon.schedule());
      })), this._register(e.onDidChangeConfiguration(e => {
        e.hasChanged(63) && ((this._matchBrackets = this._editor.getOption(63)), (this._decorations = this._editor.deltaDecorations(this._decorations, [])), (this._lastBracketsData = []), (this._lastVersionId = 0), this._updateBracketsSoon.schedule());
      })), this._register(e.onDidBlurEditorWidget(() => {
        this._updateBracketsSoon.schedule();
      })), this._register(e.onDidFocusEditorWidget(() => {
        this._updateBracketsSoon.schedule();
      })));
    }
    static get(e) {
      return e.getContribution(y.ID);
    }
    jumpToBracket() {
      if (!this._editor.hasModel()) return;
      const e = this._editor.getModel(),
        t = this._editor.getSelections().map(t => {
          const i = t.getStartPosition(),
            n = e.matchBracket(i);
          let o = null;
          if (n) n[0].containsPosition(i) ? (o = n[1].getStartPosition()) : n[1].containsPosition(i) && (o = n[0].getStartPosition());else {
            const t = e.findEnclosingBrackets(i);
            if (t) o = t[0].getStartPosition();else {
              const t = e.findNextBracket(i);
              t && t.range && (o = t.range.getStartPosition());
            }
          }
          return o ? new l.Y(o.lineNumber, o.column, o.lineNumber, o.column) : new l.Y(i.lineNumber, i.column, i.lineNumber, i.column);
        });
      (this._editor.setSelections(t), this._editor.revealRange(t[0]));
    }
    selectToBracket(e) {
      if (!this._editor.hasModel()) return;
      const t = this._editor.getModel(),
        i = [];
      (this._editor.getSelections().forEach(n => {
        const o = n.getStartPosition();
        let s = t.matchBracket(o);
        if (!s && ((s = t.findEnclosingBrackets(o)), !s)) {
          const e = t.findNextBracket(o);
          e && e.range && (s = t.matchBracket(e.range.getStartPosition()));
        }
        let r = null,
          c = null;
        if (s) {
          s.sort(a.e.compareRangesUsingStarts);
          const [t, i] = s;
          if (((r = e ? t.getStartPosition() : t.getEndPosition()), (c = e ? i.getEndPosition() : i.getStartPosition()), i.containsPosition(o))) {
            const e = r;
            ((r = c), (c = e));
          }
        }
        r && c && i.push(new l.Y(r.lineNumber, r.column, c.lineNumber, c.column));
      }), i.length > 0 && (this._editor.setSelections(i), this._editor.revealRange(i[0])));
    }
    _updateBrackets() {
      if ("never" === this._matchBrackets) return;
      this._recomputeBrackets();
      let e = [],
        t = 0;
      for (const i of this._lastBracketsData) {
        let n = i.brackets;
        n && ((e[t++] = {
          range: n[0],
          options: i.options
        }), (e[t++] = {
          range: n[1],
          options: i.options
        }));
      }
      this._decorations = this._editor.deltaDecorations(this._decorations, e);
    }
    _recomputeBrackets() {
      if (!this._editor.hasModel() || !this._editor.hasWidgetFocus()) return ((this._lastBracketsData = []), void (this._lastVersionId = 0));
      const e = this._editor.getSelections();
      if (e.length > 100) return ((this._lastBracketsData = []), void (this._lastVersionId = 0));
      const t = this._editor.getModel(),
        i = t.getVersionId();
      let n = [];
      this._lastVersionId === i && (n = this._lastBracketsData);
      let o = [],
        s = 0;
      for (let t = 0, i = e.length; t < i; t++) {
        let i = e[t];
        i.isEmpty() && (o[s++] = i.getStartPosition());
      }
      o.length > 1 && o.sort(r.L.compare);
      let a = [],
        l = 0,
        c = 0,
        d = n.length;
      for (let e = 0, i = o.length; e < i; e++) {
        let i = o[e];
        for (; c < d && n[c].position.isBefore(i);) c++;
        if (c < d && n[c].position.equals(i)) a[l++] = n[c];else {
          let e = t.matchBracket(i),
            n = y._DECORATION_OPTIONS_WITH_OVERVIEW_RULER;
          (e || "always" !== this._matchBrackets || ((e = t.findEnclosingBrackets(i, 20)), (n = y._DECORATION_OPTIONS_WITHOUT_OVERVIEW_RULER)), (a[l++] = new w(i, e, n)));
        }
      }
      ((this._lastBracketsData = a), (this._lastVersionId = i));
    }
  }
  ((y.ID = "editor.contrib.bracketMatchingController"), (y._DECORATION_OPTIONS_WITH_OVERVIEW_RULER = h.qx.register({
    description: "bracket-match-overview",
    stickiness: 1,
    className: "bracket-match",
    overviewRuler: {
      color: (0, m.EN)(v),
      position: d.sh.Center
    }
  })), (y._DECORATION_OPTIONS_WITHOUT_OVERVIEW_RULER = h.qx.register({
    description: "bracket-match-no-overview",
    stickiness: 1,
    className: "bracket-match"
  })), (0, s._K)(y.ID, y), (0, s.Qr)(b), (0, s.Qr)(_), (0, m.Ic)((e, t) => {
    const i = e.getColor(u.TC);
    i && t.addRule(`.monaco-editor .bracket-match { background-color: ${i}; }`);
    const n = e.getColor(u.Dl);
    n && t.addRule(`.monaco-editor .bracket-match { border: 1px solid ${n}; }`);
  }), p.BH.appendMenuItem(p.eH.MenubarGoMenu, {
    group: "5_infile_nav",
    command: {
      id: "editor.action.jumpToBracket",
      title: g.N({
        key: "miGoToBracket",
        comment: ["&& denotes a mnemonic"]
      }, "Go to &&Bracket")
    },
    order: 2
  }));
};