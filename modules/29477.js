module.exports = (e, t, i) => {
  "use strict";

  i.r(t);
  i(74617);
  var n = i(65321),
    o = i(38626),
    s = i(48764),
    r = i(85152),
    a = i(93794),
    l = i(5976),
    c = i(1432),
    d = i(97295),
    h = i(70666),
    u = i(16830),
    g = i(29102),
    p = i(19720),
    f = i(38819),
    m = i(72065),
    v = i(91847),
    _ = i(50988),
    b = i(73910),
    w = i(97781),
    y = i(20913),
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
    };
  const S = new f.uy("accessibilityHelpWidgetVisible", !1);
  let k = class e extends l.JT {
    constructor(e, t) {
      (super(), (this._editor = e), (this._widget = this._register(t.createInstance(L, this._editor))));
    }
    static get(t) {
      return t.getContribution(e.ID);
    }
    show() {
      this._widget.show();
    }
    hide() {
      this._widget.hide();
    }
  };
  ((k.ID = "editor.contrib.accessibilityHelpController"), (k = C([x(1, m.TG)], k)));
  let L = class e extends a.$ {
    constructor(e, t, i, s) {
      (super(), (this._contextKeyService = t), (this._keybindingService = i), (this._openerService = s), (this._editor = e), (this._isVisibleKey = S.bindTo(this._contextKeyService)), (this._domNode = (0, o.X)(document.createElement("div"))), this._domNode.setClassName("accessibilityHelpWidget"), this._domNode.setDisplay("none"), this._domNode.setAttribute("role", "dialog"), this._domNode.setAttribute("aria-hidden", "true"), (this._contentDomNode = (0, o.X)(document.createElement("div"))), this._contentDomNode.setAttribute("role", "document"), this._domNode.appendChild(this._contentDomNode), (this._isVisible = !1), this._register(this._editor.onDidLayoutChange(() => {
        this._isVisible && this._layout();
      })), this._register(n.mu(this._contentDomNode.domNode, "keydown", e => {
        if (this._isVisible && (e.equals(2083) && ((0, r.Z9)(y.Oe.emergencyConfOn), this._editor.updateOptions({
          accessibilitySupport: "on"
        }), n.PO(this._contentDomNode.domNode), this._buildContent(), this._contentDomNode.domNode.focus(), e.preventDefault(), e.stopPropagation()), e.equals(2086))) {
          (0, r.Z9)(y.Oe.openingDocs);
          let t = this._editor.getRawOptions().accessibilityHelpUrl;
          (void 0 === t && (t = "https://go.microsoft.com/fwlink/?linkid=852450"), this._openerService.open(h.o.parse(t)), e.preventDefault(), e.stopPropagation());
        }
      })), this.onblur(this._contentDomNode.domNode, () => {
        this.hide();
      }), this._editor.addOverlayWidget(this));
    }
    dispose() {
      (this._editor.removeOverlayWidget(this), super.dispose());
    }
    getId() {
      return e.ID;
    }
    getDomNode() {
      return this._domNode.domNode;
    }
    getPosition() {
      return {
        preference: null
      };
    }
    show() {
      this._isVisible || ((this._isVisible = !0), this._isVisibleKey.set(!0), this._layout(), this._domNode.setDisplay("block"), this._domNode.setAttribute("aria-hidden", "false"), (this._contentDomNode.domNode.tabIndex = 0), this._buildContent(), this._contentDomNode.domNode.focus());
    }
    _descriptionForCommand(e, t, i) {
      let n = this._keybindingService.lookupKeybinding(e);
      return n ? d.WU(t, n.getAriaLabel()) : d.WU(i, e);
    }
    _buildContent() {
      const e = this._editor.getOptions(),
        t = this._editor.getSelections();
      let i = 0;
      if (t) {
        const e = this._editor.getModel();
        e && t.forEach(t => {
          i += e.getValueLengthInRange(t);
        });
      }
      let n = (function (e, t) {
        return e && 0 !== e.length ? 1 === e.length ? t ? d.WU(y.Oe.singleSelectionRange, e[0].positionLineNumber, e[0].positionColumn, t) : d.WU(y.Oe.singleSelection, e[0].positionLineNumber, e[0].positionColumn) : t ? d.WU(y.Oe.multiSelectionRange, e.length, t) : e.length > 0 ? d.WU(y.Oe.multiSelection, e.length) : "" : y.Oe.noSelection;
      })(t, i);
      e.get(53) ? e.get(80) ? (n += y.Oe.readonlyDiffEditor) : (n += y.Oe.editableDiffEditor) : e.get(80) ? (n += y.Oe.readonlyEditor) : (n += y.Oe.editableEditor);
      const o = c.dz ? y.Oe.changeConfigToOnMac : y.Oe.changeConfigToOnWinLinux;
      switch (e.get(2)) {
        case 0:
          n += "\n\n - " + o;
          break;
        case 2:
          n += "\n\n - " + y.Oe.auto_on;
          break;
        case 1:
          ((n += "\n\n - " + y.Oe.auto_off), (n += " " + o));
      }
      e.get(128) ? (n += "\n\n - " + this._descriptionForCommand(p.ToggleTabFocusModeAction.ID, y.Oe.tabFocusModeOnMsg, y.Oe.tabFocusModeOnMsgNoKb)) : (n += "\n\n - " + this._descriptionForCommand(p.ToggleTabFocusModeAction.ID, y.Oe.tabFocusModeOffMsg, y.Oe.tabFocusModeOffMsgNoKb));
      ((n += "\n\n - " + (c.dz ? y.Oe.openDocMac : y.Oe.openDocWinLinux)), (n += "\n\n" + y.Oe.outroMsg), this._contentDomNode.domNode.appendChild((0, s.BO)(n)), this._contentDomNode.domNode.setAttribute("aria-label", n));
    }
    hide() {
      this._isVisible && ((this._isVisible = !1), this._isVisibleKey.reset(), this._domNode.setDisplay("none"), this._domNode.setAttribute("aria-hidden", "true"), (this._contentDomNode.domNode.tabIndex = -1), n.PO(this._contentDomNode.domNode), this._editor.focus());
    }
    _layout() {
      let t = this._editor.getLayoutInfo(),
        i = Math.max(5, Math.min(e.WIDTH, t.width - 40)),
        n = Math.max(5, Math.min(e.HEIGHT, t.height - 40));
      (this._domNode.setWidth(i), this._domNode.setHeight(n));
      let o = Math.round((t.height - n) / 2);
      this._domNode.setTop(o);
      let s = Math.round((t.width - i) / 2);
      this._domNode.setLeft(s);
    }
  };
  ((L.ID = "editor.contrib.accessibilityHelpWidget"), (L.WIDTH = 500), (L.HEIGHT = 300), (L = C([x(1, f.i6), x(2, v.d), x(3, _.v4)], L)));
  class N extends u.R6 {
    constructor() {
      super({
        id: "editor.action.showAccessibilityHelp",
        label: y.Oe.showAccessibilityHelpAction,
        alias: "Show Accessibility Help",
        precondition: void 0,
        kbOpts: {
          primary: 571,
          weight: 100,
          linux: {
            primary: 1595,
            secondary: [571]
          }
        }
      });
    }
    run(e, t) {
      let i = k.get(t);
      i && i.show();
    }
  }
  ((0, u._K)(k.ID, k), (0, u.Qr)(N));
  const D = u._l.bindToContribution(k.get);
  ((0, u.fK)(new D({
    id: "closeAccessibilityHelp",
    precondition: S,
    handler: e => e.hide(),
    kbOpts: {
      weight: 200,
      kbExpr: g.u.focus,
      primary: 9,
      secondary: [1033]
    }
  })), (0, w.Ic)((e, t) => {
    const i = e.getColor(b.D0);
    i && t.addRule(`.monaco-editor .accessibilityHelpWidget { background-color: ${i}; }`);
    const n = e.getColor(b.Hf);
    n && t.addRule(`.monaco-editor .accessibilityHelpWidget { color: ${n}; }`);
    const o = e.getColor(b.rh);
    o && t.addRule(`.monaco-editor .accessibilityHelpWidget { box-shadow: 0 2px 8px ${o}; }`);
    const s = e.getColor(b.lR);
    s && t.addRule(`.monaco-editor .accessibilityHelpWidget { border: 2px solid ${s}; }`);
  }));
};