module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    ContextMenuController: () => v
  }));
  var n = i(65321),
    o = i(76033),
    s = i(74741),
    r = i(5976),
    a = i(1432),
    l = i(16830),
    c = i(29102),
    d = i(63580),
    h = i(84144),
    u = i(38819),
    g = i(5606),
    p = i(91847),
    f = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    m = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let v = class e {
    constructor(e, t, i, o, s, a) {
      ((this._contextMenuService = t), (this._contextViewService = i), (this._contextKeyService = o), (this._keybindingService = s), (this._menuService = a), (this._toDispose = new r.SL()), (this._contextMenuIsBeingShownCount = 0), (this._editor = e), this._toDispose.add(this._editor.onContextMenu(e => this._onContextMenu(e))), this._toDispose.add(this._editor.onMouseWheel(e => {
        if (this._contextMenuIsBeingShownCount > 0) {
          const t = this._contextViewService.getContextViewElement(),
            i = e.srcElement;
          (i.shadowRoot && n.Ay(t) === i.shadowRoot) || this._contextViewService.hideContextView();
        }
      })), this._toDispose.add(this._editor.onKeyDown(e => {
        58 === e.keyCode && (e.preventDefault(), e.stopPropagation(), this.showContextMenu());
      })));
    }
    static get(t) {
      return t.getContribution(e.ID);
    }
    _onContextMenu(e) {
      if (!this._editor.hasModel()) return;
      if (!this._editor.getOption(20)) return (this._editor.focus(), void (e.target.position && !this._editor.getSelection().containsPosition(e.target.position) && this._editor.setPosition(e.target.position)));
      if (12 === e.target.type) return;
      if ((e.event.preventDefault(), e.event.stopPropagation(), 6 !== e.target.type && 7 !== e.target.type && 1 !== e.target.type)) return;
      if ((this._editor.focus(), e.target.position)) {
        let t = !1;
        for (const i of this._editor.getSelections()) if (i.containsPosition(e.target.position)) {
          t = !0;
          break;
        }
        t || this._editor.setPosition(e.target.position);
      }
      let t = null;
      (1 !== e.target.type && (t = {
        x: e.event.posx - 1,
        width: 2,
        y: e.event.posy - 1,
        height: 2
      }), this.showContextMenu(t));
    }
    showContextMenu(e) {
      if (!this._editor.getOption(20)) return;
      if (!this._editor.hasModel()) return;
      if (!this._contextMenuService) return void this._editor.focus();
      const t = this._getMenuActions(this._editor.getModel(), this._editor.isSimpleWidget ? h.eH.SimpleEditorContext : h.eH.EditorContext);
      t.length > 0 && this._doShowContextMenu(t, e);
    }
    _getMenuActions(e, t) {
      const i = [],
        n = this._menuService.createMenu(t, this._contextKeyService),
        o = n.getActions({
          arg: e.uri
        });
      n.dispose();
      for (let t of o) {
        const [, n] = t;
        let o = 0;
        for (const t of n) if (t instanceof h.NZ) {
          const n = this._getMenuActions(e, t.item.submenu);
          n.length > 0 && (i.push(new s.wY(t.id, t.label, n)), o++);
        } else (i.push(t), o++);
        o && i.push(new s.Z0());
      }
      return (i.length && i.pop(), i);
    }
    _doShowContextMenu(e, t = null) {
      if (!this._editor.hasModel()) return;
      const i = this._editor.getOption(52);
      if ((this._editor.updateOptions({
        hover: {
          enabled: !1
        }
      }), !t)) {
        (this._editor.revealPosition(this._editor.getPosition(), 1), this._editor.render());
        const e = this._editor.getScrolledVisiblePosition(this._editor.getPosition()),
          i = n.i(this._editor.getDomNode()),
          o = i.left + e.left,
          s = i.top + e.top + e.height;
        t = {
          x: o,
          y: s
        };
      }
      const s = this._editor.getOption(113) && !a.gn;
      (this._contextMenuIsBeingShownCount++, this._contextMenuService.showContextMenu({
        domForShadowRoot: s ? this._editor.getDomNode() : void 0,
        getAnchor: () => t,
        getActions: () => e,
        getActionViewItem: e => {
          const t = this._keybindingFor(e);
          if (t) return new o.g(e, e, {
            label: !0,
            keybinding: t.getLabel(),
            isMenu: !0
          });
          const i = e;
          return "function" == typeof i.getActionViewItem ? i.getActionViewItem() : new o.g(e, e, {
            icon: !0,
            label: !0,
            isMenu: !0
          });
        },
        getKeyBinding: e => this._keybindingFor(e),
        onHide: e => {
          (this._contextMenuIsBeingShownCount--, this._editor.focus(), this._editor.updateOptions({
            hover: i
          }));
        }
      }));
    }
    _keybindingFor(e) {
      return this._keybindingService.lookupKeybinding(e.id);
    }
    dispose() {
      (this._contextMenuIsBeingShownCount > 0 && this._contextViewService.hideContextView(), this._toDispose.dispose());
    }
  };
  ((v.ID = "editor.contrib.contextmenu"), (v = f([m(1, g.i), m(2, g.u), m(3, u.i6), m(4, p.d), m(5, h.co)], v)));
  class _ extends l.R6 {
    constructor() {
      super({
        id: "editor.action.showContextMenu",
        label: d.N("action.showContextMenu.label", "Show Editor Context Menu"),
        alias: "Show Editor Context Menu",
        precondition: void 0,
        kbOpts: {
          kbExpr: c.u.textInputFocus,
          primary: 1092,
          weight: 100
        }
      });
    }
    run(e, t) {
      v.get(t).showContextMenu();
    }
  }
  ((0, l._K)(v.ID, v), (0, l.Qr)(_));
};