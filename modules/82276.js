const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    O: () => f
  });
  var n = i(85152),
    o = i(15393),
    s = i(5976),
    r = (i(27189), i(16830)),
    a = i(24314),
    l = i(63580),
    c = i(38819),
    d = i(73910),
    h = i(92321),
    u = i(97781),
    g = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    p = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  const Lg = new Language(modifyState.language);
  let f = class e {
    constructor(t, i) {
      ((this._messageWidget = new s.XK()), (this._messageListeners = new s.SL()), (this._editor = t), (this._visible = e.MESSAGE_VISIBLE.bindTo(i)), (this._editorListener = this._editor.onDidAttemptReadOnlyEdit(() => this._onDidAttemptReadOnlyEdit())));
    }
    static get(t) {
      return t.getContribution(e.ID);
    }
    dispose() {
      (this._editorListener.dispose(), this._messageListeners.dispose(), this._messageWidget.dispose(), this._visible.reset());
    }
    showMessage(e, t) {
      let i;
      ((0, n.Z9)(e), this._visible.set(!0), this._messageWidget.clear(), this._messageListeners.clear(), (this._messageWidget.value = new v(this._editor, t, e)), this._messageListeners.add(this._editor.onDidBlurEditorText(() => this.closeMessage())), this._messageListeners.add(this._editor.onDidChangeCursorPosition(() => this.closeMessage())), this._messageListeners.add(this._editor.onDidDispose(() => this.closeMessage())), this._messageListeners.add(this._editor.onDidChangeModel(() => this.closeMessage())), this._messageListeners.add(new o._F(() => this.closeMessage(), 3e3)), this._messageListeners.add(this._editor.onMouseMove(e => {
        e.target.position && (i ? i.containsPosition(e.target.position) || this.closeMessage() : (i = new a.e(t.lineNumber - 3, 1, e.target.position.lineNumber + 3, 1)));
      })));
    }
    closeMessage() {
      (this._visible.reset(), this._messageListeners.clear(), this._messageWidget.value && this._messageListeners.add(v.fadeOut(this._messageWidget.value)));
    }
    _onDidAttemptReadOnlyEdit() {
      this._editor.hasModel() && this.showMessage(l.N("editor.readonly", Lg.cannotEditReadOnlyEditor()), this._editor.getPosition());
    }
  };
  ((f.ID = "editor.contrib.messageController"), (f.MESSAGE_VISIBLE = new c.uy("messageVisible", !1, l.N("messageVisible", "Whether the editor is currently showing an inline message"))), (f = g([p(1, c.i6)], f)));
  const m = r._l.bindToContribution(f.get);
  (0, r.fK)(new m({
    id: "leaveEditorMessage",
    precondition: f.MESSAGE_VISIBLE,
    handler: e => e.closeMessage(),
    kbOpts: {
      weight: 130,
      primary: 9
    }
  }));
  class v {
    constructor(e, {
      lineNumber: t,
      column: i
    }, n) {
      ((this.allowEditorOverflow = !0), (this.suppressMouseDown = !1), (this._editor = e), this._editor.revealLinesInCenterIfOutsideViewport(t, t, 0), (this._position = {
        lineNumber: t,
        column: i - 1
      }), (this._domNode = document.createElement("div")), this._domNode.classList.add("monaco-editor-overlaymessage"));
      const o = document.createElement("div");
      (o.classList.add("anchor", "top"), this._domNode.appendChild(o));
      const s = document.createElement("div");
      (s.classList.add("message"), (s.textContent = n), this._domNode.appendChild(s));
      const r = document.createElement("div");
      (r.classList.add("anchor", "below"), this._domNode.appendChild(r), this._editor.addContentWidget(this), this._domNode.classList.add("fadeIn"));
    }
    static fadeOut(e) {
      let t;
      const i = () => {
        (e.dispose(), clearTimeout(t), e.getDomNode().removeEventListener("animationend", i));
      };
      return ((t = setTimeout(i, 110)), e.getDomNode().addEventListener("animationend", i), e.getDomNode().classList.add("fadeOut"), {
        dispose: i
      });
    }
    dispose() {
      this._editor.removeContentWidget(this);
    }
    getId() {
      return "messageoverlay";
    }
    getDomNode() {
      return this._domNode;
    }
    getPosition() {
      return {
        position: this._position,
        preference: [1, 2]
      };
    }
    afterRender(e) {
      this._domNode.classList.toggle("below", 2 === e);
    }
  }
  ((0, r._K)(f.ID, f), (0, u.Ic)((e, t) => {
    const i = e.getColor(d.EP);
    if (i) {
      let n = e.type === h.e.HIGH_CONTRAST ? 2 : 1;
      (t.addRule(`.monaco-editor .monaco-editor-overlaymessage .anchor.below { border-top-color: ${i}; }`), t.addRule(`.monaco-editor .monaco-editor-overlaymessage .anchor.top { border-bottom-color: ${i}; }`), t.addRule(`.monaco-editor .monaco-editor-overlaymessage .message { border: ${n}px solid ${i}; }`));
    }
    const n = e.getColor(d._l);
    n && t.addRule(`.monaco-editor .monaco-editor-overlaymessage .message { background-color: ${n}; }`);
    const o = e.getColor(d.YI);
    o && t.addRule(`.monaco-editor .monaco-editor-overlaymessage .message { color: ${o}; }`);
  }));
};