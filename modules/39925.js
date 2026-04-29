module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    yy: () => m,
    Dl: () => v,
    ZF: () => b,
    YQ: () => _
  });
  var n = i(97295),
    o = i(24314),
    s = i(71050),
    r = i(5976),
    a = i(16830),
    l = i(38819),
    c = i(91741),
    d = i(72065),
    h = i(65026),
    u = i(63580);
  const g = (0, d.yh)("IEditorCancelService"),
    p = new l.uy("cancellableOperation", !1, (0, u.N)("cancellableOperation", "Whether the editor runs a cancellable operation, e.g. like 'Peek References'"));
  (0, h.z)(g, class {
    constructor() {
      this._tokens = new WeakMap();
    }
    add(e, t) {
      let i,
        n = this._tokens.get(e);
      return (n || ((n = e.invokeWithinContext(e => ({
        key: p.bindTo(e.get(l.i6)),
        tokens: new c.S()
      }))), this._tokens.set(e, n)), n.key.set(!0), (i = n.tokens.push(t)), () => {
        i && (i(), n.key.set(!n.tokens.isEmpty()), (i = void 0));
      });
    }
    cancel(e) {
      const t = this._tokens.get(e);
      if (!t) return;
      const i = t.tokens.pop();
      i && (i.cancel(), t.key.set(!t.tokens.isEmpty()));
    }
  }, !0);
  class f extends s.A {
    constructor(e, t) {
      (super(t), (this.editor = e), (this._unregister = e.invokeWithinContext(t => t.get(g).add(e, this))));
    }
    dispose() {
      (this._unregister(), super.dispose());
    }
  }
  (0, a.fK)(new (class extends a._l {
    constructor() {
      super({
        id: "editor.cancelOperation",
        kbOpts: {
          weight: 100,
          primary: 9
        },
        precondition: p
      });
    }
    runEditorCommand(e, t) {
      e.get(g).cancel(t);
    }
  })());
  class m {
    constructor(e, t) {
      if (((this.flags = t), 0 != (1 & this.flags))) {
        const t = e.getModel();
        this.modelVersionId = t ? n.WU("{0}#{1}", t.uri.toString(), t.getVersionId()) : null;
      } else this.modelVersionId = null;
      (0 != (4 & this.flags) ? (this.position = e.getPosition()) : (this.position = null), 0 != (2 & this.flags) ? (this.selection = e.getSelection()) : (this.selection = null), 0 != (8 & this.flags) ? ((this.scrollLeft = e.getScrollLeft()), (this.scrollTop = e.getScrollTop())) : ((this.scrollLeft = -1), (this.scrollTop = -1)));
    }
    _equals(e) {
      if (!(e instanceof m)) return !1;
      const t = e;
      return (this.modelVersionId === t.modelVersionId && this.scrollLeft === t.scrollLeft && this.scrollTop === t.scrollTop && !((!this.position && t.position) || (this.position && !t.position) || (this.position && t.position && !this.position.equals(t.position))) && !((!this.selection && t.selection) || (this.selection && !t.selection) || (this.selection && t.selection && !this.selection.equalsRange(t.selection))));
    }
    validate(e) {
      return this._equals(new m(e, this.flags));
    }
  }
  class v extends f {
    constructor(e, t, i, n) {
      (super(e, n), (this._listener = new r.SL()), 4 & t && this._listener.add(e.onDidChangeCursorPosition(e => {
        (i && o.e.containsPosition(i, e.position)) || this.cancel();
      })), 2 & t && this._listener.add(e.onDidChangeCursorSelection(e => {
        (i && o.e.containsRange(i, e.selection)) || this.cancel();
      })), 8 & t && this._listener.add(e.onDidScrollChange(e => this.cancel())), 1 & t && (this._listener.add(e.onDidChangeModel(e => this.cancel())), this._listener.add(e.onDidChangeModelContent(e => this.cancel()))));
    }
    dispose() {
      (this._listener.dispose(), super.dispose());
    }
  }
  class _ extends s.A {
    constructor(e, t) {
      (super(t), (this._listener = e.onDidChangeContent(() => this.cancel())));
    }
    dispose() {
      (this._listener.dispose(), super.dispose());
    }
  }
  class b {
    constructor(e, t, i) {
      ((this._visiblePosition = e), (this._visiblePositionScrollDelta = t), (this._cursorPosition = i));
    }
    static capture(e) {
      let t = null,
        i = 0;
      if (0 !== e.getScrollTop()) {
        const n = e.getVisibleRanges();
        if (n.length > 0) {
          t = n[0].getStartPosition();
          const o = e.getTopForPosition(t.lineNumber, t.column);
          i = e.getScrollTop() - o;
        }
      }
      return new b(t, i, e.getPosition());
    }
    restore(e) {
      if (this._visiblePosition) {
        const t = e.getTopForPosition(this._visiblePosition.lineNumber, this._visiblePosition.column);
        e.setScrollTop(t + this._visiblePositionScrollDelta);
      }
    }
    restoreRelativeVerticalPositionOfCursor(e) {
      const t = e.getPosition();
      if (!this._cursorPosition || !t) return;
      const i = e.getTopForLineNumber(t.lineNumber) - e.getTopForLineNumber(this._cursorPosition.lineNumber);
      e.setScrollTop(e.getScrollTop() + i);
    }
  }
};