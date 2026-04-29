module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    IPadShowKeyboard: () => a
  }));
  i(77203);
  var n = i(65321),
    o = i(5976),
    s = i(16830),
    r = i(1432);
  class a extends o.JT {
    constructor(e) {
      (super(), (this.editor = e), (this.widget = null), r.gn && (this._register(e.onDidChangeConfiguration(() => this.update())), this.update()));
    }
    update() {
      const e = !this.editor.getOption(80);
      !this.widget && e ? (this.widget = new l(this.editor)) : this.widget && !e && (this.widget.dispose(), (this.widget = null));
    }
    dispose() {
      (super.dispose(), this.widget && (this.widget.dispose(), (this.widget = null)));
    }
  }
  a.ID = "editor.contrib.iPadShowKeyboard";
  class l extends o.JT {
    constructor(e) {
      (super(), (this.editor = e), (this._domNode = document.createElement("textarea")), (this._domNode.className = "iPadShowKeyboard"), this._register(n.nm(this._domNode, "touchstart", e => {
        this.editor.focus();
      })), this._register(n.nm(this._domNode, "focus", e => {
        this.editor.focus();
      })), this.editor.addOverlayWidget(this));
    }
    dispose() {
      (this.editor.removeOverlayWidget(this), super.dispose());
    }
    getId() {
      return l.ID;
    }
    getDomNode() {
      return this._domNode;
    }
    getPosition() {
      return {
        preference: 1
      };
    }
  }
  ((l.ID = "editor.contrib.ShowKeyboardWidget"), (0, s._K)(a.ID, a));
};