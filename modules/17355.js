module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    SelectionAnchorSet: () => p
  }));
  var n = i(85152),
    o = i(59365),
    s = i(22258),
    r = (i(21512), i(16830)),
    a = i(3860),
    l = i(29102),
    c = i(63580),
    d = i(38819),
    h = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    u = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    g = function (e, t, i, n) {
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
  const p = new d.uy("selectionAnchorSet", !1);
  let f = class e {
    constructor(e, t) {
      ((this.editor = e), (this.selectionAnchorSetContextKey = p.bindTo(t)), (this.modelChangeListener = e.onDidChangeModel(() => this.selectionAnchorSetContextKey.reset())));
    }
    static get(t) {
      return t.getContribution(e.ID);
    }
    setSelectionAnchor() {
      if (this.editor.hasModel()) {
        const e = this.editor.getPosition(),
          t = this.decorationId ? [this.decorationId] : [],
          i = this.editor.deltaDecorations(t, [{
            range: a.Y.fromPositions(e, e),
            options: {
              description: "selection-anchor",
              stickiness: 1,
              hoverMessage: new o.W5().appendText((0, c.N)("selectionAnchor", "Selection Anchor")),
              className: "selection-anchor"
            }
          }]);
        ((this.decorationId = i[0]), this.selectionAnchorSetContextKey.set(!!this.decorationId), (0, n.Z9)((0, c.N)("anchorSet", "Anchor set at {0}:{1}", e.lineNumber, e.column)));
      }
    }
    goToSelectionAnchor() {
      if (this.editor.hasModel() && this.decorationId) {
        const e = this.editor.getModel().getDecorationRange(this.decorationId);
        e && this.editor.setPosition(e.getStartPosition());
      }
    }
    selectFromAnchorToCursor() {
      if (this.editor.hasModel() && this.decorationId) {
        const e = this.editor.getModel().getDecorationRange(this.decorationId);
        if (e) {
          const t = this.editor.getPosition();
          (this.editor.setSelection(a.Y.fromPositions(e.getStartPosition(), t)), this.cancelSelectionAnchor());
        }
      }
    }
    cancelSelectionAnchor() {
      this.decorationId && (this.editor.deltaDecorations([this.decorationId], []), (this.decorationId = void 0), this.selectionAnchorSetContextKey.set(!1));
    }
    dispose() {
      (this.cancelSelectionAnchor(), this.modelChangeListener.dispose());
    }
  };
  ((f.ID = "editor.contrib.selectionAnchorController"), (f = h([u(1, d.i6)], f)));
  class m extends r.R6 {
    constructor() {
      super({
        id: "editor.action.setSelectionAnchor",
        label: (0, c.N)("setSelectionAnchor", "Set Selection Anchor"),
        alias: "Set Selection Anchor",
        precondition: void 0,
        kbOpts: {
          kbExpr: l.u.editorTextFocus,
          primary: (0, s.gx)(2089, 2080),
          weight: 100
        }
      });
    }
    run(e, t) {
      return g(this, void 0, void 0, function* () {
        f.get(t).setSelectionAnchor();
      });
    }
  }
  class v extends r.R6 {
    constructor() {
      super({
        id: "editor.action.goToSelectionAnchor",
        label: (0, c.N)("goToSelectionAnchor", "Go to Selection Anchor"),
        alias: "Go to Selection Anchor",
        precondition: p
      });
    }
    run(e, t) {
      return g(this, void 0, void 0, function* () {
        f.get(t).goToSelectionAnchor();
      });
    }
  }
  class _ extends r.R6 {
    constructor() {
      super({
        id: "editor.action.selectFromAnchorToCursor",
        label: (0, c.N)("selectFromAnchorToCursor", "Select from Anchor to Cursor"),
        alias: "Select from Anchor to Cursor",
        precondition: p,
        kbOpts: {
          kbExpr: l.u.editorTextFocus,
          primary: (0, s.gx)(2089, 2089),
          weight: 100
        }
      });
    }
    run(e, t) {
      return g(this, void 0, void 0, function* () {
        f.get(t).selectFromAnchorToCursor();
      });
    }
  }
  class b extends r.R6 {
    constructor() {
      super({
        id: "editor.action.cancelSelectionAnchor",
        label: (0, c.N)("cancelSelectionAnchor", "Cancel Selection Anchor"),
        alias: "Cancel Selection Anchor",
        precondition: p,
        kbOpts: {
          kbExpr: l.u.editorTextFocus,
          primary: 9,
          weight: 100
        }
      });
    }
    run(e, t) {
      return g(this, void 0, void 0, function* () {
        f.get(t).cancelSelectionAnchor();
      });
    }
  }
  ((0, r._K)(f.ID, f), (0, r.Qr)(m), (0, r.Qr)(v), (0, r.Qr)(_), (0, r.Qr)(b));
};