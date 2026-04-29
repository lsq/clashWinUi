module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    AutoIndentOnPaste: () => N,
    AutoIndentOnPasteCommand: () => L,
    ChangeIndentationSizeAction: () => w,
    DetectIndentation: () => x,
    IndentUsingSpaces: () => C,
    IndentUsingTabs: () => y,
    IndentationToSpacesAction: () => _,
    IndentationToSpacesCommand: () => I,
    IndentationToTabsAction: () => b,
    IndentationToTabsCommand: () => E,
    ReindentLinesAction: () => S,
    ReindentSelectedLinesAction: () => k,
    getReindentEditOperations: () => v
  }));
  var n = i(5976),
    o = i(97295),
    s = i(16830),
    r = i(10291),
    a = i(69386),
    l = i(24314),
    c = i(3860),
    d = i(29102),
    h = i(44174),
    u = i(83831),
    g = i(51200),
    p = i(51491),
    f = i(63580),
    m = i(41157);
  function v(e, t, i, n) {
    if (1 === e.getLineCount() && 1 === e.getLineMaxColumn(1)) return [];
    const s = u.zu.getIndentationRules(e.getLanguageId());
    if (!s) return [];
    for (i = Math.min(i, e.getLineCount()); t <= i && s.unIndentedLinePattern;) {
      let i = e.getLineContent(t);
      if (!s.unIndentedLinePattern.test(i)) break;
      t++;
    }
    if (t > i - 1) return [];
    const {
        tabSize: l,
        indentSize: d,
        insertSpaces: g
      } = e.getOptions(),
      p = (e, t) => ((t = t || 1), r.U.shiftIndent(e, e.length + t, l, d, g)),
      f = (e, t) => ((t = t || 1), r.U.unshiftIndent(e, e.length + t, l, d, g));
    let m,
      v = [],
      _ = e.getLineContent(t),
      b = _;
    if (null != n) {
      m = n;
      let e = o.V8(_);
      ((b = m + _.substring(e.length)), s.decreaseIndentPattern && s.decreaseIndentPattern.test(b) && ((m = f(m)), (b = m + _.substring(e.length))), _ !== b && v.push(a.h.replaceMove(new c.Y(t, 1, t, e.length + 1), h.yO.normalizeIndentation(m, d, g))));
    } else m = o.V8(_);
    let w = m;
    s.increaseIndentPattern && s.increaseIndentPattern.test(b) ? ((w = p(w)), (m = p(m))) : s.indentNextLinePattern && s.indentNextLinePattern.test(b) && (w = p(w));
    for (let n = ++t; n <= i; n++) {
      let t = e.getLineContent(n),
        i = o.V8(t),
        r = w + t.substring(i.length);
      (s.decreaseIndentPattern && s.decreaseIndentPattern.test(r) && ((w = f(w)), (m = f(m))), i !== w && v.push(a.h.replaceMove(new c.Y(n, 1, n, i.length + 1), h.yO.normalizeIndentation(w, d, g))), (s.unIndentedLinePattern && s.unIndentedLinePattern.test(t)) || (s.increaseIndentPattern && s.increaseIndentPattern.test(r) ? ((m = p(m)), (w = m)) : (w = s.indentNextLinePattern && s.indentNextLinePattern.test(r) ? p(w) : m)));
    }
    return v;
  }
  class _ extends s.R6 {
    constructor() {
      super({
        id: _.ID,
        label: f.N("indentationToSpaces", "Convert Indentation to Spaces"),
        alias: "Convert Indentation to Spaces",
        precondition: d.u.writable
      });
    }
    run(e, t) {
      let i = t.getModel();
      if (!i) return;
      let n = i.getOptions(),
        o = t.getSelection();
      if (!o) return;
      const s = new I(o, n.tabSize);
      (t.pushUndoStop(), t.executeCommands(this.id, [s]), t.pushUndoStop(), i.updateOptions({
        insertSpaces: !0
      }));
    }
  }
  _.ID = "editor.action.indentationToSpaces";
  class b extends s.R6 {
    constructor() {
      super({
        id: b.ID,
        label: f.N("indentationToTabs", "Convert Indentation to Tabs"),
        alias: "Convert Indentation to Tabs",
        precondition: d.u.writable
      });
    }
    run(e, t) {
      let i = t.getModel();
      if (!i) return;
      let n = i.getOptions(),
        o = t.getSelection();
      if (!o) return;
      const s = new E(o, n.tabSize);
      (t.pushUndoStop(), t.executeCommands(this.id, [s]), t.pushUndoStop(), i.updateOptions({
        insertSpaces: !1
      }));
    }
  }
  b.ID = "editor.action.indentationToTabs";
  class w extends s.R6 {
    constructor(e, t) {
      (super(t), (this.insertSpaces = e));
    }
    run(e, t) {
      const i = e.get(m.eJ),
        n = e.get(g.q);
      let o = t.getModel();
      if (!o) return;
      const s = n.getCreationOptions(o.getLanguageId(), o.uri, o.isForSimpleWidget),
        r = [1, 2, 3, 4, 5, 6, 7, 8].map(e => ({
          id: e.toString(),
          label: e.toString(),
          description: e === s.tabSize ? f.N("configuredTabSize", "Configured Tab Size") : void 0
        })),
        a = Math.min(o.getOptions().tabSize - 1, 7);
      setTimeout(() => {
        i.pick(r, {
          placeHolder: f.N({
            key: "selectTabWidth",
            comment: ["Tab corresponds to the tab key"]
          }, "Select Tab Size for Current File"),
          activeItem: r[a]
        }).then(e => {
          e && o && !o.isDisposed() && o.updateOptions({
            tabSize: parseInt(e.label, 10),
            insertSpaces: this.insertSpaces
          });
        });
      }, 50);
    }
  }
  class y extends w {
    constructor() {
      super(!1, {
        id: y.ID,
        label: f.N("indentUsingTabs", "Indent Using Tabs"),
        alias: "Indent Using Tabs",
        precondition: void 0
      });
    }
  }
  y.ID = "editor.action.indentUsingTabs";
  class C extends w {
    constructor() {
      super(!0, {
        id: C.ID,
        label: f.N("indentUsingSpaces", "Indent Using Spaces"),
        alias: "Indent Using Spaces",
        precondition: void 0
      });
    }
  }
  C.ID = "editor.action.indentUsingSpaces";
  class x extends s.R6 {
    constructor() {
      super({
        id: x.ID,
        label: f.N("detectIndentation", "Detect Indentation from Content"),
        alias: "Detect Indentation from Content",
        precondition: void 0
      });
    }
    run(e, t) {
      const i = e.get(g.q);
      let n = t.getModel();
      if (!n) return;
      const o = i.getCreationOptions(n.getLanguageId(), n.uri, n.isForSimpleWidget);
      n.detectIndentation(o.insertSpaces, o.tabSize);
    }
  }
  x.ID = "editor.action.detectIndentation";
  class S extends s.R6 {
    constructor() {
      super({
        id: "editor.action.reindentlines",
        label: f.N("editor.reindentlines", "Reindent Lines"),
        alias: "Reindent Lines",
        precondition: d.u.writable
      });
    }
    run(e, t) {
      let i = t.getModel();
      if (!i) return;
      let n = v(i, 1, i.getLineCount());
      n.length > 0 && (t.pushUndoStop(), t.executeEdits(this.id, n), t.pushUndoStop());
    }
  }
  class k extends s.R6 {
    constructor() {
      super({
        id: "editor.action.reindentselectedlines",
        label: f.N("editor.reindentselectedlines", "Reindent Selected Lines"),
        alias: "Reindent Selected Lines",
        precondition: d.u.writable
      });
    }
    run(e, t) {
      let i = t.getModel();
      if (!i) return;
      let n = t.getSelections();
      if (null === n) return;
      let o = [];
      for (let e of n) {
        let t = e.startLineNumber,
          n = e.endLineNumber;
        if ((t !== n && 1 === e.endColumn && n--, 1 === t)) {
          if (t === n) continue;
        } else t--;
        let s = v(i, t, n);
        o.push(...s);
      }
      o.length > 0 && (t.pushUndoStop(), t.executeEdits(this.id, o), t.pushUndoStop());
    }
  }
  class L {
    constructor(e, t) {
      ((this._initialSelection = t), (this._edits = []), (this._selectionId = null));
      for (let t of e) t.range && "string" == typeof t.text && this._edits.push(t);
    }
    getEditOperations(e, t) {
      for (let e of this._edits) t.addEditOperation(l.e.lift(e.range), e.text);
      let i = !1;
      (Array.isArray(this._edits) && 1 === this._edits.length && this._initialSelection.isEmpty() && (this._edits[0].range.startColumn === this._initialSelection.endColumn && this._edits[0].range.startLineNumber === this._initialSelection.endLineNumber ? ((i = !0), (this._selectionId = t.trackSelection(this._initialSelection, !0))) : this._edits[0].range.endColumn === this._initialSelection.startColumn && this._edits[0].range.endLineNumber === this._initialSelection.startLineNumber && ((i = !0), (this._selectionId = t.trackSelection(this._initialSelection, !1)))), i || (this._selectionId = t.trackSelection(this._initialSelection)));
    }
    computeCursorState(e, t) {
      return t.getTrackedSelection(this._selectionId);
    }
  }
  class N {
    constructor(e) {
      ((this.callOnDispose = new n.SL()), (this.callOnModel = new n.SL()), (this.editor = e), this.callOnDispose.add(e.onDidChangeConfiguration(() => this.update())), this.callOnDispose.add(e.onDidChangeModel(() => this.update())), this.callOnDispose.add(e.onDidChangeModelLanguage(() => this.update())));
    }
    update() {
      (this.callOnModel.clear(), this.editor.getOption(9) < 4 || this.editor.getOption(47) || (this.editor.hasModel() && this.callOnModel.add(this.editor.onDidPaste(({
        range: e
      }) => {
        this.trigger(e);
      }))));
    }
    trigger(e) {
      let t = this.editor.getSelections();
      if (null === t || t.length > 1) return;
      const i = this.editor.getModel();
      if (!i) return;
      if (!i.isCheapToTokenize(e.getStartPosition().lineNumber)) return;
      const n = this.editor.getOption(9),
        {
          tabSize: s,
          indentSize: a,
          insertSpaces: c
        } = i.getOptions();
      let d = [],
        h = {
          shiftIndent: e => r.U.shiftIndent(e, e.length + 1, s, a, c),
          unshiftIndent: e => r.U.unshiftIndent(e, e.length + 1, s, a, c)
        },
        g = e.startLineNumber;
      for (; g <= e.endLineNumber && this.shouldIgnoreLine(i, g);) g++;
      if (g > e.endLineNumber) return;
      let f = i.getLineContent(g);
      if (!/\S/.test(f.substring(0, e.startColumn - 1))) {
        const e = u.zu.getGoodIndentForLine(n, i, i.getLanguageId(), g, h);
        if (null !== e) {
          let t = o.V8(f),
            n = p.Y(e, s);
          if (n !== p.Y(t, s)) {
            let e = p.J(n, s, c);
            (d.push({
              range: new l.e(g, 1, g, t.length + 1),
              text: e
            }), (f = e + f.substr(t.length)));
          } else {
            let e = u.zu.getIndentMetadata(i, g);
            if (0 === e || 8 === e) return;
          }
        }
      }
      const m = g;
      for (; g < e.endLineNumber && !/\S/.test(i.getLineContent(g + 1));) g++;
      if (g !== e.endLineNumber) {
        let t = {
            getLineTokens: e => i.getLineTokens(e),
            getLanguageId: () => i.getLanguageId(),
            getLanguageIdAtPosition: (e, t) => i.getLanguageIdAtPosition(e, t),
            getLineContent: e => (e === m ? f : i.getLineContent(e))
          },
          r = u.zu.getGoodIndentForLine(n, t, i.getLanguageId(), g + 1, h);
        if (null !== r) {
          let t = p.Y(r, s),
            n = p.Y(o.V8(i.getLineContent(g + 1)), s);
          if (t !== n) {
            let r = t - n;
            for (let t = g + 1; t <= e.endLineNumber; t++) {
              let e = i.getLineContent(t),
                n = o.V8(e),
                a = p.Y(n, s) + r,
                h = p.J(a, s, c);
              h !== n && d.push({
                range: new l.e(t, 1, t, n.length + 1),
                text: h
              });
            }
          }
        }
      }
      if (d.length > 0) {
        this.editor.pushUndoStop();
        let e = new L(d, this.editor.getSelection());
        (this.editor.executeCommand("autoIndentOnPaste", e), this.editor.pushUndoStop());
      }
    }
    shouldIgnoreLine(e, t) {
      e.forceTokenization(t);
      let i = e.getLineFirstNonWhitespaceColumn(t);
      if (0 === i) return !0;
      let n = e.getLineTokens(t);
      if (n.getCount() > 0) {
        let e = n.findTokenIndexAtOffset(i);
        if (e >= 0 && 1 === n.getStandardTokenType(e)) return !0;
      }
      return !1;
    }
    dispose() {
      (this.callOnDispose.dispose(), this.callOnModel.dispose());
    }
  }
  function D(e, t, i, n) {
    if (1 === e.getLineCount() && 1 === e.getLineMaxColumn(1)) return;
    let o = "";
    for (let e = 0; e < i; e++) o += " ";
    let s = new RegExp(o, "gi");
    for (let i = 1, r = e.getLineCount(); i <= r; i++) {
      let r = e.getLineFirstNonWhitespaceColumn(i);
      if ((0 === r && (r = e.getLineMaxColumn(i)), 1 === r)) continue;
      const a = new l.e(i, 1, i, r),
        c = e.getValueInRange(a),
        d = n ? c.replace(/\t/gi, o) : c.replace(s, "\t");
      t.addEditOperation(a, d);
    }
  }
  N.ID = "editor.contrib.autoIndentOnPaste";
  class I {
    constructor(e, t) {
      ((this.selection = e), (this.tabSize = t), (this.selectionId = null));
    }
    getEditOperations(e, t) {
      ((this.selectionId = t.trackSelection(this.selection)), D(e, t, this.tabSize, !0));
    }
    computeCursorState(e, t) {
      return t.getTrackedSelection(this.selectionId);
    }
  }
  class E {
    constructor(e, t) {
      ((this.selection = e), (this.tabSize = t), (this.selectionId = null));
    }
    getEditOperations(e, t) {
      ((this.selectionId = t.trackSelection(this.selection)), D(e, t, this.tabSize, !1));
    }
    computeCursorState(e, t) {
      return t.getTrackedSelection(this.selectionId);
    }
  }
  ((0, s._K)(N.ID, N), (0, s.Qr)(_), (0, s.Qr)(b), (0, s.Qr)(y), (0, s.Qr)(C), (0, s.Qr)(x), (0, s.Qr)(S), (0, s.Qr)(k));
};