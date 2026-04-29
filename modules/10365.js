module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    GotoDefinitionAtPositionEditorContribution: () => k
  }));
  var n = i(15393),
    o = i(17301),
    s = i(59365),
    r = i(5976),
    a = i(98401),
    l = (i(96394), i(39925)),
    c = i(16830),
    d = i(50187),
    h = i(24314),
    u = i(44101),
    g = i(71531),
    p = i(88216),
    f = i(69241),
    m = i(22043),
    v = i(63580),
    _ = i(38819),
    b = i(73910),
    w = i(97781),
    y = i(92729),
    C = i(91691),
    x = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    S = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let k = class e {
    constructor(e, t, i) {
      ((this.textModelResolverService = t), (this.modeService = i), (this.toUnhook = new r.SL()), (this.toUnhookForKeyboard = new r.SL()), (this.linkDecorations = []), (this.currentWordAtPosition = null), (this.previousPromise = null), (this.editor = e));
      let n = new f.yN(e);
      (this.toUnhook.add(n), this.toUnhook.add(n.onMouseMoveOrRelevantKeyDown(([e, t]) => {
        this.startFindDefinitionFromMouse(e, (0, a.f6)(t));
      })), this.toUnhook.add(n.onExecute(e => {
        this.isEnabled(e) && this.gotoDefinition(e.target.position, e.hasSideBySideModifier).then(() => {
          this.removeLinkDecorations();
        }, e => {
          (this.removeLinkDecorations(), (0, o.dL)(e));
        });
      })), this.toUnhook.add(n.onCancel(() => {
        (this.removeLinkDecorations(), (this.currentWordAtPosition = null));
      })));
    }
    static get(t) {
      return t.getContribution(e.ID);
    }
    startFindDefinitionFromCursor(e) {
      return this.startFindDefinition(e).then(() => {
        (this.toUnhookForKeyboard.add(this.editor.onDidChangeCursorPosition(() => {
          ((this.currentWordAtPosition = null), this.removeLinkDecorations(), this.toUnhookForKeyboard.clear());
        })), this.toUnhookForKeyboard.add(this.editor.onKeyDown(e => {
          e && ((this.currentWordAtPosition = null), this.removeLinkDecorations(), this.toUnhookForKeyboard.clear());
        })));
      });
    }
    startFindDefinitionFromMouse(e, t) {
      if (9 === e.target.type && this.linkDecorations.length > 0) return;
      if (!this.editor.hasModel() || !this.isEnabled(e, t)) return ((this.currentWordAtPosition = null), void this.removeLinkDecorations());
      const i = e.target.position;
      this.startFindDefinition(i);
    }
    startFindDefinition(e) {
      var t;
      this.toUnhookForKeyboard.clear();
      const i = e ? null === (t = this.editor.getModel()) || void 0 === t ? void 0 : t.getWordAtPosition(e) : null;
      if (!i) return ((this.currentWordAtPosition = null), this.removeLinkDecorations(), Promise.resolve(0));
      if (this.currentWordAtPosition && this.currentWordAtPosition.startColumn === i.startColumn && this.currentWordAtPosition.endColumn === i.endColumn && this.currentWordAtPosition.word === i.word) return Promise.resolve(0);
      this.currentWordAtPosition = i;
      let r = new l.yy(this.editor, 15);
      return (this.previousPromise && (this.previousPromise.cancel(), (this.previousPromise = null)), (this.previousPromise = (0, n.PG)(t => this.findDefinition(e, t))), this.previousPromise.then(t => {
        if (t && t.length && r.validate(this.editor)) {
          if (t.length > 1) this.addDecoration(new h.e(e.lineNumber, i.startColumn, e.lineNumber, i.endColumn), new s.W5().appendText(v.N("multipleResults", "Click to show {0} definitions.", t.length)));else {
            let n = t[0];
            if (!n.uri) return;
            this.textModelResolverService.createModelReference(n.uri).then(t => {
              if (!t.object || !t.object.textEditorModel) return void t.dispose();
              const {
                  object: {
                    textEditorModel: o
                  }
                } = t,
                {
                  startLineNumber: r
                } = n.range;
              if (r < 1 || r > o.getLineCount()) return void t.dispose();
              const a = this.getPreviewValue(o, r, n);
              let l;
              l = n.originSelectionRange ? h.e.lift(n.originSelectionRange) : new h.e(e.lineNumber, i.startColumn, e.lineNumber, i.endColumn);
              const c = this.modeService.getModeIdByFilepathOrFirstLine(o.uri);
              (this.addDecoration(l, new s.W5().appendCodeblock(c || "", a)), t.dispose());
            });
          }
        } else this.removeLinkDecorations();
      }).then(void 0, o.dL));
    }
    getPreviewValue(t, i, n) {
      let o = n.targetSelectionRange ? n.range : this.getPreviewRangeBasedOnBrackets(t, i);
      o.endLineNumber - o.startLineNumber >= e.MAX_SOURCE_PREVIEW_LINES && (o = this.getPreviewRangeBasedOnIndentation(t, i));
      return this.stripIndentationFromPreviewRange(t, i, o);
    }
    stripIndentationFromPreviewRange(e, t, i) {
      let n = e.getLineFirstNonWhitespaceColumn(t);
      for (let o = t + 1; o < i.endLineNumber; o++) {
        const t = e.getLineFirstNonWhitespaceColumn(o);
        n = Math.min(n, t);
      }
      return e.getValueInRange(i).replace(new RegExp(`^\\s{${n - 1}}`, "gm"), "").trim();
    }
    getPreviewRangeBasedOnIndentation(t, i) {
      const n = t.getLineFirstNonWhitespaceColumn(i),
        o = Math.min(t.getLineCount(), i + e.MAX_SOURCE_PREVIEW_LINES);
      let s = i + 1;
      for (; s < o; s++) {
        if (n === t.getLineFirstNonWhitespaceColumn(s)) break;
      }
      return new h.e(i, 1, s + 1, 1);
    }
    getPreviewRangeBasedOnBrackets(t, i) {
      const n = Math.min(t.getLineCount(), i + e.MAX_SOURCE_PREVIEW_LINES),
        o = [];
      let s = !0,
        r = t.findNextBracket(new d.L(i, 1));
      for (; null !== r;) {
        if (0 === o.length) o.push(r);else {
          const e = o[o.length - 1];
          if ((e.open[0] === r.open[0] && e.isOpen && !r.isOpen ? o.pop() : o.push(r), 0 === o.length)) {
            if (!s) return new h.e(i, 1, r.range.endLineNumber + 1, 1);
            s = !1;
          }
        }
        const e = t.getLineMaxColumn(i);
        let a = r.range.endLineNumber,
          l = r.range.endColumn;
        if ((e === r.range.endColumn && (a++, (l = 1)), a > n)) return new h.e(i, 1, n + 1, 1);
        r = t.findNextBracket(new d.L(a, l));
      }
      return new h.e(i, 1, n + 1, 1);
    }
    addDecoration(e, t) {
      const i = {
        range: e,
        options: {
          description: "goto-definition-link",
          inlineClassName: "goto-definition-link",
          hoverMessage: t
        }
      };
      this.linkDecorations = this.editor.deltaDecorations(this.linkDecorations, [i]);
    }
    removeLinkDecorations() {
      this.linkDecorations.length > 0 && (this.linkDecorations = this.editor.deltaDecorations(this.linkDecorations, []));
    }
    isEnabled(e, t) {
      return (this.editor.hasModel() && e.isNoneOrSingleMouseDown && 6 === e.target.type && (e.hasTriggerModifier || (!!t && t.keyCodeIsTriggerKey)) && u.Ct.has(this.editor.getModel()));
    }
    findDefinition(e, t) {
      const i = this.editor.getModel();
      return i ? (0, C.nD)(i, e, t) : Promise.resolve(null);
    }
    gotoDefinition(e, t) {
      return (this.editor.setPosition(e), this.editor.invokeWithinContext(e => {
        const i = !t && this.editor.getOption(77) && !this.isInPeekEditor(e);
        return new y.DefinitionAction({
          openToSide: t,
          openInPeek: i,
          muteMessage: !0
        }, {
          alias: "",
          label: "",
          id: "",
          precondition: void 0
        }).run(e, this.editor);
      }));
    }
    isInPeekEditor(e) {
      const t = e.get(_.i6);
      return m.Jy.inPeekEditor.getValue(t);
    }
    dispose() {
      this.toUnhook.dispose();
    }
  };
  ((k.ID = "editor.contrib.gotodefinitionatposition"), (k.MAX_SOURCE_PREVIEW_LINES = 8), (k = x([S(1, p.S), S(2, g.h)], k)), (0, c._K)(k.ID, k), (0, w.Ic)((e, t) => {
    const i = e.getColor(b._Y);
    i && t.addRule(`.monaco-editor .goto-definition-link { color: ${i} !important; }`);
  }));
};