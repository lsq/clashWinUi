module.exports = (e, t, i) => {
  "use strict";

  i.r(t);
  var n = i(15393),
    o = i(17301),
    s = i(39925),
    r = i(16830),
    a = i(24314),
    l = i(3860),
    c = i(29102),
    d = i(44174),
    h = i(90469),
    u = i(27869),
    g = i(63580),
    p = i(97781);
  class f {
    constructor(e, t, i) {
      ((this._editRange = e), (this._originalSelection = t), (this._text = i));
    }
    getEditOperations(e, t) {
      t.addTrackedEditOperation(this._editRange, this._text);
    }
    computeCursorState(e, t) {
      const i = t.getInverseEditOperations()[0].range;
      return this._originalSelection.isEmpty() ? new l.Y(i.endLineNumber, Math.min(this._originalSelection.positionColumn, i.endColumn), i.endLineNumber, Math.min(this._originalSelection.positionColumn, i.endColumn)) : new l.Y(i.endLineNumber, i.endColumn - this._text.length, i.endLineNumber, i.endColumn);
    }
  }
  var m = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    v = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let _ = class e {
    constructor(e, t) {
      ((this.decorationIds = []), (this.editor = e), (this.editorWorkerService = t));
    }
    static get(t) {
      return t.getContribution(e.ID);
    }
    dispose() {}
    run(t, i) {
      this.currentRequest && this.currentRequest.cancel();
      const r = this.editor.getSelection(),
        c = this.editor.getModel();
      if (!c || !r) return;
      let d = r;
      if (d.startLineNumber !== d.endLineNumber) return;
      const h = new s.yy(this.editor, 5),
        u = c.uri;
      return this.editorWorkerService.canNavigateValueSet(u) ? ((this.currentRequest = (0, n.PG)(e => this.editorWorkerService.navigateValueSet(u, d, i))), this.currentRequest.then(i => {
        if (!i || !i.range || !i.value) return;
        if (!h.validate(this.editor)) return;
        let s = a.e.lift(i.range),
          r = i.range,
          c = i.value.length - (d.endColumn - d.startColumn);
        ((r = {
          startLineNumber: r.startLineNumber,
          startColumn: r.startColumn,
          endLineNumber: r.endLineNumber,
          endColumn: r.startColumn + i.value.length
        }), c > 1 && (d = new l.Y(d.startLineNumber, d.startColumn, d.endLineNumber, d.endColumn + c - 1)));
        const u = new f(s, d, i.value);
        (this.editor.pushUndoStop(), this.editor.executeCommand(t, u), this.editor.pushUndoStop(), (this.decorationIds = this.editor.deltaDecorations(this.decorationIds, [{
          range: r,
          options: e.DECORATION
        }])), this.decorationRemover && this.decorationRemover.cancel(), (this.decorationRemover = (0, n.Vs)(350)), this.decorationRemover.then(() => (this.decorationIds = this.editor.deltaDecorations(this.decorationIds, []))).catch(o.dL));
      }).catch(o.dL)) : Promise.resolve(void 0);
    }
  };
  ((_.ID = "editor.contrib.inPlaceReplaceController"), (_.DECORATION = d.qx.register({
    description: "in-place-replace",
    className: "valueSetReplacement"
  })), (_ = m([v(1, h.p)], _)));
  class b extends r.R6 {
    constructor() {
      super({
        id: "editor.action.inPlaceReplace.up",
        label: g.N("InPlaceReplaceAction.previous.label", "Replace with Previous Value"),
        alias: "Replace with Previous Value",
        precondition: c.u.writable,
        kbOpts: {
          kbExpr: c.u.editorTextFocus,
          primary: 3154,
          weight: 100
        }
      });
    }
    run(e, t) {
      const i = _.get(t);
      return i ? i.run(this.id, !0) : Promise.resolve(void 0);
    }
  }
  class w extends r.R6 {
    constructor() {
      super({
        id: "editor.action.inPlaceReplace.down",
        label: g.N("InPlaceReplaceAction.next.label", "Replace with Next Value"),
        alias: "Replace with Next Value",
        precondition: c.u.writable,
        kbOpts: {
          kbExpr: c.u.editorTextFocus,
          primary: 3156,
          weight: 100
        }
      });
    }
    run(e, t) {
      const i = _.get(t);
      return i ? i.run(this.id, !1) : Promise.resolve(void 0);
    }
  }
  ((0, r._K)(_.ID, _), (0, r.Qr)(b), (0, r.Qr)(w), (0, p.Ic)((e, t) => {
    const i = e.getColor(u.Dl);
    i && t.addRule(`.monaco-editor.vs .valueSetReplacement { outline: solid 2px ${i}; }`);
  }));
};