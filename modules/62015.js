const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    CopyAction: () => b,
    CutAction: () => _,
    PasteAction: () => w
  }));
  var n = i(16268),
    o = i(1432),
    s = i(35715),
    r = i(16830),
    a = i(11640),
    l = i(29102),
    c = i(63580),
    d = i(84144),
    h = i(84972),
    u = function (e, t, i, n) {
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
  const g = "9_cutcopypaste",
    p = o.tY || document.queryCommandSupported("cut"),
    f = o.tY || document.queryCommandSupported("copy"),
    m = (void 0 !== navigator.clipboard && !n.vU) || document.queryCommandSupported("paste");
  function v(e) {
    return (e.register(), e);
  }
  const Lg = new Language(modifyState.language);
  const _ = p ? v(new r.AJ({
      id: "editor.action.clipboardCutAction",
      precondition: void 0,
      kbOpts: o.tY ? {
        primary: 2102,
        win: {
          primary: 2102,
          secondary: [1044]
        },
        weight: 100
      } : void 0,
      menuOpts: [{
        menuId: d.eH.MenubarEditMenu,
        group: "2_ccp",
        title: c.N({
          key: "miCut",
          comment: ["&& denotes a mnemonic"]
        }, "Cu&&t"),
        order: 1
      }, {
        menuId: d.eH.EditorContext,
        group: g,
        title: c.N("actions.clipboard.cutLabel", Lg.cut()),
        when: l.u.writable,
        order: 1
      }, {
        menuId: d.eH.CommandPalette,
        group: "",
        title: c.N("actions.clipboard.cutLabel", Lg.cut()),
        order: 1
      }, {
        menuId: d.eH.SimpleEditorContext,
        group: g,
        title: c.N("actions.clipboard.cutLabel", Lg.cut()),
        when: l.u.writable,
        order: 1
      }]
    })) : void 0,
    b = f ? v(new r.AJ({
      id: "editor.action.clipboardCopyAction",
      precondition: void 0,
      kbOpts: o.tY ? {
        primary: 2081,
        win: {
          primary: 2081,
          secondary: [2067]
        },
        weight: 100
      } : void 0,
      menuOpts: [{
        menuId: d.eH.MenubarEditMenu,
        group: "2_ccp",
        title: c.N({
          key: "miCopy",
          comment: ["&& denotes a mnemonic"]
        }, "&&Copy"),
        order: 2
      }, {
        menuId: d.eH.EditorContext,
        group: g,
        title: c.N("actions.clipboard.copyLabel", Lg.copy()),
        order: 2
      }, {
        menuId: d.eH.CommandPalette,
        group: "",
        title: c.N("actions.clipboard.copyLabel", Lg.copy()),
        order: 1
      }, {
        menuId: d.eH.SimpleEditorContext,
        group: g,
        title: c.N("actions.clipboard.copyLabel", Lg.copy()),
        order: 2
      }]
    })) : void 0;
  (d.BH.appendMenuItem(d.eH.MenubarEditMenu, {
    submenu: d.eH.MenubarCopy,
    title: {
      value: c.N("copy as", "Copy As"),
      original: "Copy As"
    },
    group: "2_ccp",
    order: 3
  }), d.BH.appendMenuItem(d.eH.EditorContext, {
    submenu: d.eH.EditorContextCopy,
    title: {
      value: c.N("copy as", "Copy As"),
      original: "Copy As"
    },
    group: g,
    order: 3
  }));
  const w = m ? v(new r.AJ({
    id: "editor.action.clipboardPasteAction",
    precondition: void 0,
    kbOpts: o.tY ? {
      primary: 2100,
      win: {
        primary: 2100,
        secondary: [1043]
      },
      linux: {
        primary: 2100,
        secondary: [1043]
      },
      weight: 100
    } : void 0,
    menuOpts: [{
      menuId: d.eH.MenubarEditMenu,
      group: "2_ccp",
      title: c.N({
        key: "miPaste",
        comment: ["&& denotes a mnemonic"]
      }, "&&Paste"),
      order: 4
    }, {
      menuId: d.eH.EditorContext,
      group: g,
      title: c.N("actions.clipboard.pasteLabel", Lg.paste()),
      when: l.u.writable,
      order: 4
    }, {
      menuId: d.eH.CommandPalette,
      group: "",
      title: c.N("actions.clipboard.pasteLabel", Lg.paste()),
      order: 1
    }, {
      menuId: d.eH.SimpleEditorContext,
      group: g,
      title: c.N("actions.clipboard.pasteLabel", Lg.paste()),
      when: l.u.writable,
      order: 4
    }]
  })) : void 0;
  class y extends r.R6 {
    constructor() {
      super({
        id: "editor.action.clipboardCopyWithSyntaxHighlightingAction",
        label: c.N("actions.clipboard.copyWithSyntaxHighlightingLabel", "Copy With Syntax Highlighting"),
        alias: "Copy With Syntax Highlighting",
        precondition: void 0,
        kbOpts: {
          kbExpr: l.u.textInputFocus,
          primary: 0,
          weight: 100
        }
      });
    }
    run(e, t) {
      if (!t.hasModel()) return;
      (!t.getOption(32) && t.getSelection().isEmpty()) || ((s.RA.forceCopyWithSyntaxHighlighting = !0), t.focus(), document.execCommand("copy"), (s.RA.forceCopyWithSyntaxHighlighting = !1));
    }
  }
  function C(e, t) {
    e && (e.addImplementation(1e4, "code-editor", (e, i) => {
      const n = e.get(a.$).getFocusedCodeEditor();
      if (n && n.hasTextFocus()) {
        const e = n.getOption(32),
          i = n.getSelection();
        return ((i && i.isEmpty() && !e) || document.execCommand(t), !0);
      }
      return !1;
    }), e.addImplementation(0, "generic-dom", (e, i) => (document.execCommand(t), !0)));
  }
  (C(_, "cut"), C(b, "copy"), w && (w.addImplementation(1e4, "code-editor", (e, t) => {
    const i = e.get(a.$),
      n = e.get(h.p),
      r = i.getFocusedCodeEditor();
    if (r && r.hasTextFocus()) {
      return (!(!document.execCommand("paste") && o.$L) || u(void 0, void 0, void 0, function* () {
        const e = yield n.readText();
        if ("" !== e) {
          const t = s.Nl.INSTANCE.get(e);
          let i = !1,
            n = null,
            o = null;
          (t && ((i = r.getOption(32) && !!t.isFromEmptySelection), (n = void 0 !== t.multicursorText ? t.multicursorText : null), (o = t.mode)), r.trigger("keyboard", "paste", {
            text: e,
            pasteOnNewLine: i,
            multicursorText: n,
            mode: o
          }));
        }
      }));
    }
    return !1;
  }), w.addImplementation(0, "generic-dom", (e, t) => (document.execCommand("paste"), !0))), f && (0, r.Qr)(y));
};