module.exports = (e, t, i) => {
  "use strict";

  i.r(t);
  var n = i(9488),
    o = i(71050),
    s = i(17301),
    r = i(22258),
    a = i(5976),
    l = i(16830),
    c = i(11640),
    d = i(44906),
    h = i(24314),
    u = i(29102),
    g = i(44101),
    p = i(90469),
    f = i(23606),
    m = i(69939),
    v = i(63580),
    _ = i(94565),
    b = i(38819),
    w = i(72065),
    y = i(90535),
    C = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    x = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    S = function (e, t, i, n) {
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
  let k = class {
    constructor(e, t) {
      ((this._workerService = t), (this._callOnDispose = new a.SL()), (this._callOnModel = new a.SL()), (this._editor = e), this._callOnDispose.add(e.onDidChangeConfiguration(() => this._update())), this._callOnDispose.add(e.onDidChangeModel(() => this._update())), this._callOnDispose.add(e.onDidChangeModelLanguage(() => this._update())), this._callOnDispose.add(g.ln.onDidChange(this._update, this)));
    }
    dispose() {
      (this._callOnDispose.dispose(), this._callOnModel.dispose());
    }
    _update() {
      if ((this._callOnModel.clear(), !this._editor.getOption(48))) return;
      if (!this._editor.hasModel()) return;
      const e = this._editor.getModel(),
        [t] = g.ln.ordered(e);
      if (!t || !t.autoFormatTriggerCharacters) return;
      let i = new d.q();
      for (let e of t.autoFormatTriggerCharacters) i.add(e.charCodeAt(0));
      this._callOnModel.add(this._editor.onDidType(e => {
        let t = e.charCodeAt(e.length - 1);
        i.has(t) && this._trigger(String.fromCharCode(t));
      }));
    }
    _trigger(e) {
      if (!this._editor.hasModel()) return;
      if (this._editor.getSelections().length > 1 || !this._editor.getSelection().isEmpty()) return;
      const t = this._editor.getModel(),
        i = this._editor.getPosition();
      let o = !1;
      const s = this._editor.onDidChangeModelContent(e => {
        if (e.isFlush) return ((o = !0), void s.dispose());
        for (let t = 0, n = e.changes.length; t < n; t++) {
          if (e.changes[t].range.endLineNumber <= i.lineNumber) return ((o = !0), void s.dispose());
        }
      });
      (0, f.Qs)(this._workerService, t, i, e, t.getFormattingOptions()).then(e => {
        (s.dispose(), o || ((0, n.Of)(e) && (m.V.execute(this._editor, e, !0), (0, f.Zg)(e))));
      }, e => {
        throw (s.dispose(), e);
      });
    }
  };
  ((k.ID = "editor.contrib.autoFormat"), (k = C([x(1, p.p)], k)));
  let L = class {
    constructor(e, t) {
      ((this.editor = e), (this._instantiationService = t), (this._callOnDispose = new a.SL()), (this._callOnModel = new a.SL()), this._callOnDispose.add(e.onDidChangeConfiguration(() => this._update())), this._callOnDispose.add(e.onDidChangeModel(() => this._update())), this._callOnDispose.add(e.onDidChangeModelLanguage(() => this._update())), this._callOnDispose.add(g.vN.onDidChange(this._update, this)));
    }
    dispose() {
      (this._callOnDispose.dispose(), this._callOnModel.dispose());
    }
    _update() {
      (this._callOnModel.clear(), this.editor.getOption(47) && this.editor.hasModel() && g.vN.has(this.editor.getModel()) && this._callOnModel.add(this.editor.onDidPaste(({
        range: e
      }) => this._trigger(e))));
    }
    _trigger(e) {
      this.editor.hasModel() && (this.editor.getSelections().length > 1 || this._instantiationService.invokeFunction(f.x$, this.editor, e, 2, y.E.None, o.T.None).catch(s.dL));
    }
  };
  ((L.ID = "editor.contrib.formatOnPaste"), (L = C([x(1, w.TG)], L)));
  class N extends l.R6 {
    constructor() {
      super({
        id: "editor.action.formatDocument",
        label: v.N("formatDocument.label", "Format Document"),
        alias: "Format Document",
        precondition: b.Ao.and(u.u.notInCompositeEditor, u.u.writable, u.u.hasDocumentFormattingProvider),
        kbOpts: {
          kbExpr: u.u.editorTextFocus,
          primary: 1572,
          linux: {
            primary: 3111
          },
          weight: 100
        },
        contextMenuOpts: {
          group: "1_modification",
          order: 1.3
        }
      });
    }
    run(e, t) {
      return S(this, void 0, void 0, function* () {
        if (t.hasModel()) {
          const i = e.get(w.TG),
            n = e.get(y.e);
          yield n.showWhile(i.invokeFunction(f.Qq, t, 1, y.E.None, o.T.None), 250);
        }
      });
    }
  }
  class D extends l.R6 {
    constructor() {
      super({
        id: "editor.action.formatSelection",
        label: v.N("formatSelection.label", "Format Selection"),
        alias: "Format Selection",
        precondition: b.Ao.and(u.u.writable, u.u.hasDocumentSelectionFormattingProvider),
        kbOpts: {
          kbExpr: u.u.editorTextFocus,
          primary: (0, r.gx)(2089, 2084),
          weight: 100
        },
        contextMenuOpts: {
          when: u.u.hasNonEmptySelection,
          group: "1_modification",
          order: 1.31
        }
      });
    }
    run(e, t) {
      return S(this, void 0, void 0, function* () {
        if (!t.hasModel()) return;
        const i = e.get(w.TG),
          n = t.getModel(),
          s = t.getSelections().map(e => e.isEmpty() ? new h.e(e.startLineNumber, 1, e.startLineNumber, n.getLineMaxColumn(e.startLineNumber)) : e),
          r = e.get(y.e);
        yield r.showWhile(i.invokeFunction(f.x$, t, s, 1, y.E.None, o.T.None), 250);
      });
    }
  }
  ((0, l._K)(k.ID, k), (0, l._K)(L.ID, L), (0, l.Qr)(N), (0, l.Qr)(D), _.P.registerCommand("editor.action.format", e => S(void 0, void 0, void 0, function* () {
    const t = e.get(c.$).getFocusedCodeEditor();
    if (!t || !t.hasModel()) return;
    const i = e.get(_.H);
    t.getSelection().isEmpty() ? yield i.executeCommand("editor.action.formatDocument") : yield i.executeCommand("editor.action.formatSelection");
  })));
};