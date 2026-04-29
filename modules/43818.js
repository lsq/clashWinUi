module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    ActiveGhostTextController: () => Ne,
    GhostTextController: () => ke,
    ShowNextInlineSuggestionAction: () => Ee,
    ShowPreviousInlineSuggestionAction: () => Te,
    TriggerInlineSuggestionAction: () => Me,
    commitInlineSuggestionAction: () => Ie
  }));
  var n = i(5976),
    o = i(97295),
    s = i(16830),
    r = i(47707),
    a = i(29102);
  const l = "editor.action.inlineSuggest.commit";
  var c = i(4669),
    d = i(50187),
    h = i(44101),
    u = i(15393),
    g = i(71050),
    p = i(17301),
    f = i(18728),
    m = i(69386),
    v = i(24314);
  class _ {
    constructor(e, t, i = 0) {
      ((this.lineNumber = e), (this.parts = t), (this.additionalReservedLineCount = i));
    }
    renderForScreenReader(e) {
      if (0 === this.parts.length) return "";
      const t = this.parts[this.parts.length - 1];
      return (function (e, t) {
        const i = new b(e),
          n = t.map(e => {
            const t = v.e.lift(e.range);
            return {
              startOffset: i.getOffset(t.getStartPosition()),
              endOffset: i.getOffset(t.getEndPosition()),
              text: e.text
            };
          });
        n.sort((e, t) => t.startOffset - e.startOffset);
        for (const t of n) e = e.substring(0, t.startOffset) + t.text + e.substring(t.endOffset);
        return e;
      })(e.substr(0, t.column - 1), this.parts.map(e => ({
        range: {
          startLineNumber: 1,
          endLineNumber: 1,
          startColumn: e.column,
          endColumn: e.column
        },
        text: e.lines.join("\n")
      }))).substring(this.parts[0].column - 1);
    }
  }
  class b {
    constructor(e) {
      ((this.lineStartOffsetByLineIdx = []), this.lineStartOffsetByLineIdx.push(0));
      for (let t = 0; t < e.length; t++) "\n" === e.charAt(t) && this.lineStartOffsetByLineIdx.push(t + 1);
    }
    getOffset(e) {
      return this.lineStartOffsetByLineIdx[e.lineNumber - 1] + e.column - 1;
    }
  }
  class w {
    constructor(e, t, i) {
      ((this.column = e), (this.lines = t), (this.preview = i));
    }
  }
  class y extends n.JT {
    constructor(e) {
      (super(), (this.editor = e), (this._expanded = void 0), (this.onDidChangeEmitter = new c.Q5()), (this.onDidChange = this.onDidChangeEmitter.event), this._register(e.onDidChangeConfiguration(e => {
        e.hasChanged(105) && void 0 === this._expanded && this.onDidChangeEmitter.fire();
      })));
    }
    setExpanded(e) {
      ((this._expanded = !0), this.onDidChangeEmitter.fire());
    }
  }
  var C = i(94565),
    x = i(2484);
  function S(e, t, i, n, s = 0) {
    if (e.range.startLineNumber !== e.range.endLineNumber) return;
    const r = t.getLineContent(e.range.startLineNumber),
      a = o.V8(r).length;
    if (e.range.startColumn - 1 <= a) {
      const t = o.V8(e.text).length,
        i = r.substring(e.range.startColumn - 1, a),
        n = v.e.fromPositions(e.range.getStartPosition().delta(0, i.length), e.range.getEndPosition()),
        s = e.text.startsWith(i) ? e.text.substring(i.length) : e.text.substring(t);
      e = {
        range: n,
        text: s,
        command: e.command
      };
    }
    const l = t.getValueInRange(e.range),
      c = (function (e, t) {
        if ((null == k ? void 0 : k.originalValue) === e && (null == k ? void 0 : k.newValue) === t) return null == k ? void 0 : k.changes;
        {
          const i = (function (e, t) {
            if (e.length > 5e3 || t.length > 5e3) return;
            function i(e) {
              let t = 0;
              for (let i = 0, n = e.length; i < n; i++) {
                const n = e.charCodeAt(i);
                n > t && (t = n);
              }
              return t;
            }
            const n = Math.max(i(e), i(t));
            function o(e) {
              if (e < 0) throw new Error("unexpected");
              return n + e + 1;
            }
            function s(e) {
              let t = 0,
                i = 0;
              const n = new Int32Array(e.length);
              for (let s = 0, r = e.length; s < r; s++) {
                const r = 100 * i + t;
                "(" === e[s] ? ((n[s] = o(2 * r)), t++) : ")" === e[s] ? ((n[s] = o(2 * r + 1)), 1 === t && i++, (t = Math.max(t - 1, 0))) : (n[s] = e.charCodeAt(s));
              }
              return n;
            }
            const r = s(e),
              a = s(t);
            return new x.Hs({
              getElements: () => r
            }, {
              getElements: () => a
            }).ComputeDiff(!1).changes;
          })(e, t);
          return ((k = {
            originalValue: e,
            newValue: t,
            changes: i
          }), i);
        }
      })(l, e.text);
    if (!c) return;
    const d = e.range.startLineNumber,
      h = new Array();
    if ("prefix" === i) {
      const e = c.filter(e => 0 === e.originalLength);
      if (e.length > 1 || (1 === e.length && e[0].originalStart !== l.length)) return;
    }
    const u = e.text.length - s;
    for (const t of c) {
      const s = e.range.startColumn + t.originalStart + t.originalLength;
      if ("subwordSmart" === i && n && n.lineNumber === e.range.startLineNumber && s < n.column) return;
      if (t.originalLength > 0) return;
      if (0 === t.modifiedLength) continue;
      const r = t.modifiedStart + t.modifiedLength,
        a = Math.max(t.modifiedStart, Math.min(r, u)),
        l = e.text.substring(t.modifiedStart, a),
        c = e.text.substring(a, Math.max(t.modifiedStart, r));
      if (l.length > 0) {
        const e = o.uq(l);
        h.push(new w(s, e, !1));
      }
      if (c.length > 0) {
        const e = o.uq(c);
        h.push(new w(s, e, !0));
      }
    }
    return new _(d, h, 0);
  }
  let k;
  var L = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    N = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    D = function (e, t, i, n) {
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
  let I = class extends n.JT {
    constructor(e, t, i) {
      (super(), (this.editor = e), (this.cache = t), (this.commandService = i), (this.onDidChangeEmitter = new c.Q5()), (this.onDidChange = this.onDidChangeEmitter.event), (this.completionSession = this._register(new n.XK())), (this.active = !1), (this.disposed = !1), this._register(i.onDidExecuteCommand(t => {
        new Set([s.n_.id, s.kz.id, f.CoreEditingCommands.Tab.id, f.CoreEditingCommands.DeleteLeft.id, f.CoreEditingCommands.DeleteRight.id, l, "acceptSelectedSuggestion"]).has(t.commandId) && e.hasTextFocus() && this.handleUserInput();
      })), this._register(this.editor.onDidType(e => {
        this.handleUserInput();
      })), this._register(this.editor.onDidChangeCursorPosition(e => {
        this.session && !this.session.isValid && this.hide();
      })), this._register((0, n.OF)(() => {
        this.disposed = !0;
      })), this._register(this.editor.onDidBlurEditorWidget(() => {
        this.hide();
      })));
    }
    handleUserInput() {
      (this.session && !this.session.isValid && this.hide(), setTimeout(() => {
        this.disposed || this.startSessionIfTriggered();
      }, 0));
    }
    get session() {
      return this.completionSession.value;
    }
    get ghostText() {
      var e;
      return null === (e = this.session) || void 0 === e ? void 0 : e.ghostText;
    }
    get minReservedLineCount() {
      return this.session ? this.session.minReservedLineCount : 0;
    }
    setExpanded(e) {
      var t;
      null === (t = this.session) || void 0 === t || t.setExpanded(e);
    }
    setActive(e) {
      var t;
      ((this.active = e), e && (null === (t = this.session) || void 0 === t || t.scheduleAutomaticUpdate()));
    }
    startSessionIfTriggered() {
      this.editor.getOption(54).enabled && ((this.session && this.session.isValid) || this.trigger(h.bw.Automatic));
    }
    trigger(e) {
      this.completionSession.value ? e === h.bw.Explicit && this.completionSession.value.ensureUpdateWithExplicitContext() : ((this.completionSession.value = new E(this.editor, this.editor.getPosition(), () => this.active, this.commandService, this.cache, e)), this.completionSession.value.takeOwnership(this.completionSession.value.onDidChange(() => {
        this.onDidChangeEmitter.fire();
      })));
    }
    hide() {
      (this.completionSession.clear(), this.onDidChangeEmitter.fire());
    }
    commitCurrentSuggestion() {
      var e;
      null === (e = this.session) || void 0 === e || e.commitCurrentCompletion();
    }
    showNext() {
      var e;
      null === (e = this.session) || void 0 === e || e.showNextInlineCompletion();
    }
    showPrevious() {
      var e;
      null === (e = this.session) || void 0 === e || e.showPreviousInlineCompletion();
    }
    hasMultipleInlineCompletions() {
      var e;
      return D(this, void 0, void 0, function* () {
        const t = yield null === (e = this.session) || void 0 === e ? void 0 : e.hasMultipleInlineCompletions();
        return void 0 !== t && t;
      });
    }
  };
  I = L([N(2, C.H)], I);
  class E extends y {
    constructor(e, t, i, o, s, r) {
      let a;
      (super(e), (this.triggerPosition = t), (this.shouldUpdate = i), (this.commandService = o), (this.cache = s), (this.initialTriggerKind = r), (this.minReservedLineCount = 0), (this.updateOperation = this._register(new n.XK())), (this.updateSoon = this._register(new u.pY(() => {
        let e = this.initialTriggerKind;
        return ((this.initialTriggerKind = h.bw.Automatic), this.update(e));
      }, 50))), (this.currentlySelectedCompletionId = void 0), this._register(this.onDidChange(() => {
        const e = this.currentCompletion;
        if (e && e.sourceInlineCompletion !== a) {
          a = e.sourceInlineCompletion;
          const t = e.sourceProvider;
          t.handleItemDidShow && t.handleItemDidShow(e.sourceInlineCompletions, a);
        }
      })), this._register((0, n.OF)(() => {
        this.cache.clear();
      })), this._register(this.editor.onDidChangeCursorPosition(e => {
        this.cache.value && this.onDidChangeEmitter.fire();
      })), this._register(this.editor.onDidChangeModelContent(e => {
        this.scheduleAutomaticUpdate();
      })), this._register(h.zu.onDidChange(() => {
        this.updateSoon.schedule();
      })), this.scheduleAutomaticUpdate());
    }
    fixAndGetIndexOfCurrentSelection() {
      if (!this.currentlySelectedCompletionId || !this.cache.value) return 0;
      if (0 === this.cache.value.completions.length) return 0;
      const e = this.cache.value.completions.findIndex(e => e.semanticId === this.currentlySelectedCompletionId);
      return -1 === e ? ((this.currentlySelectedCompletionId = void 0), 0) : e;
    }
    get currentCachedCompletion() {
      if (this.cache.value) return this.cache.value.completions[this.fixAndGetIndexOfCurrentSelection()];
    }
    showNextInlineCompletion() {
      var e;
      return D(this, void 0, void 0, function* () {
        yield this.ensureUpdateWithExplicitContext();
        const t = (null === (e = this.cache.value) || void 0 === e ? void 0 : e.completions) || [];
        if (t.length > 0) {
          const e = (this.fixAndGetIndexOfCurrentSelection() + 1) % t.length;
          this.currentlySelectedCompletionId = t[e].semanticId;
        } else this.currentlySelectedCompletionId = void 0;
        this.onDidChangeEmitter.fire();
      });
    }
    showPreviousInlineCompletion() {
      var e;
      return D(this, void 0, void 0, function* () {
        yield this.ensureUpdateWithExplicitContext();
        const t = (null === (e = this.cache.value) || void 0 === e ? void 0 : e.completions) || [];
        if (t.length > 0) {
          const e = (this.fixAndGetIndexOfCurrentSelection() + t.length - 1) % t.length;
          this.currentlySelectedCompletionId = t[e].semanticId;
        } else this.currentlySelectedCompletionId = void 0;
        this.onDidChangeEmitter.fire();
      });
    }
    ensureUpdateWithExplicitContext() {
      var e;
      return D(this, void 0, void 0, function* () {
        this.updateOperation.value ? this.updateOperation.value.triggerKind === h.bw.Explicit ? yield this.updateOperation.value.promise : yield this.update(h.bw.Explicit) : (null === (e = this.cache.value) || void 0 === e ? void 0 : e.triggerKind) !== h.bw.Explicit && (yield this.update(h.bw.Explicit));
      });
    }
    hasMultipleInlineCompletions() {
      var e;
      return D(this, void 0, void 0, function* () {
        return (yield this.ensureUpdateWithExplicitContext(), ((null === (e = this.cache.value) || void 0 === e ? void 0 : e.completions.length) || 0) > 1);
      });
    }
    get ghostText() {
      const e = this.currentCompletion,
        t = this.editor.getOptions().get(54).mode;
      return e ? S(e, this.editor.getModel(), t, this.editor.getPosition()) : void 0;
    }
    get currentCompletion() {
      const e = this.currentCachedCompletion;
      if (e) return e.toLiveInlineCompletion();
    }
    get isValid() {
      return (this.editor.getPosition().lineNumber === this.triggerPosition.lineNumber);
    }
    scheduleAutomaticUpdate() {
      (this.updateOperation.clear(), this.updateSoon.schedule());
    }
    update(e) {
      return D(this, void 0, void 0, function* () {
        if (!this.shouldUpdate()) return;
        const t = this.editor.getPosition(),
          i = (0, u.PG)(i => D(this, void 0, void 0, function* () {
            let n;
            try {
              n = yield O(t, this.editor.getModel(), {
                triggerKind: e,
                selectedSuggestionInfo: void 0
              }, i);
            } catch (e) {
              return void (0, p.dL)(e);
            }
            i.isCancellationRequested || (this.cache.setValue(this.editor, n, e), this.onDidChangeEmitter.fire());
          })),
          n = new T(i, e);
        ((this.updateOperation.value = n), yield i, this.updateOperation.value === n && this.updateOperation.clear());
      });
    }
    takeOwnership(e) {
      this._register(e);
    }
    commitCurrentCompletion() {
      if (!this.ghostText) return;
      const e = this.currentCompletion;
      e && this.commit(e);
    }
    commit(e) {
      const t = this.cache.clearAndLeak();
      (this.editor.executeEdits("inlineSuggestion.accept", [m.h.replaceMove(e.range, e.text)]), e.command ? this.commandService.executeCommand(e.command.id, ...(e.command.arguments || [])).finally(() => {
        null == t || t.dispose();
      }).then(void 0, p.Cp) : null == t || t.dispose(), this.onDidChangeEmitter.fire());
    }
  }
  class T {
    constructor(e, t) {
      ((this.promise = e), (this.triggerKind = t));
    }
    dispose() {
      this.promise.cancel();
    }
  }
  class M extends n.JT {
    constructor(e, t, i, o) {
      (super(), (this.triggerKind = o));
      const s = e.deltaDecorations([], t.items.map(e => ({
        range: e.range,
        options: {
          description: "inline-completion-tracking-range"
        }
      })));
      (this._register((0, n.OF)(() => {
        e.deltaDecorations(s, []);
      })), (this.completions = t.items.map((e, t) => new A(e, s[t]))), this._register(e.onDidChangeModelContent(() => {
        let t = !1;
        const n = e.getModel();
        for (const e of this.completions) {
          const i = n.getDecorationRange(e.decorationId);
          i ? e.synchronizedRange.equalsRange(i) || ((t = !0), (e.synchronizedRange = i)) : (0, p.dL)(new Error("Decoration has no range"));
        }
        t && i();
      })), this._register(t));
    }
  }
  class A {
    constructor(e, t) {
      ((this.inlineCompletion = e), (this.decorationId = t), (this.semanticId = JSON.stringify({
        text: this.inlineCompletion.text,
        startLine: this.inlineCompletion.range.startLineNumber,
        startColumn: this.inlineCompletion.range.startColumn,
        command: this.inlineCompletion.command
      })), (this.synchronizedRange = e.range));
    }
    toLiveInlineCompletion() {
      return {
        text: this.inlineCompletion.text,
        range: this.synchronizedRange,
        command: this.inlineCompletion.command,
        sourceProvider: this.inlineCompletion.sourceProvider,
        sourceInlineCompletions: this.inlineCompletion.sourceInlineCompletions,
        sourceInlineCompletion: this.inlineCompletion.sourceInlineCompletion
      };
    }
  }
  function O(e, t, i, n = g.T.None) {
    return D(this, void 0, void 0, function* () {
      const o = (function (e, t) {
          const i = t.getWordAtPosition(e),
            n = t.getLineMaxColumn(e.lineNumber);
          return i ? new v.e(e.lineNumber, i.startColumn, e.lineNumber, n) : v.e.fromPositions(e, e.with(void 0, n));
        })(e, t),
        s = h.zu.all(t),
        r = yield Promise.all(s.map(o => D(this, void 0, void 0, function* () {
          const s = yield o.provideInlineCompletions(t, e, i, n);
          return {
            completions: s,
            provider: o,
            dispose: () => {
              s && o.freeInlineCompletions(s);
            }
          };
        }))),
        a = new Map();
      for (const e of r) {
        const t = e.completions;
        if (t) for (const i of t.items.map(i => ({
          text: i.text,
          range: i.range ? v.e.lift(i.range) : o,
          command: i.command,
          sourceProvider: e.provider,
          sourceInlineCompletions: t,
          sourceInlineCompletion: i
        }))) i.range.startLineNumber === i.range.endLineNumber && a.set(JSON.stringify({
          text: i.text,
          range: i.range
        }), i);
      }
      return {
        items: [...a.values()],
        dispose: () => {
          for (const e of r) e.dispose();
        }
      };
    });
  }
  function P(e, t) {
    if (!t) return t;
    const i = e.getValueInRange(t.range),
      n = (0, o.Mh)(i, t.text),
      s = e.getOffsetAt(t.range.getStartPosition()) + n,
      r = e.getPositionAt(s),
      a = i.substr(n),
      l = (0, o.P1)(a, t.text),
      c = e.getPositionAt(Math.max(s, e.getOffsetAt(t.range.getEndPosition()) - l));
    return {
      range: v.e.fromPositions(r, c),
      text: t.text.substr(n, t.text.length - n - l)
    };
  }
  var R = i(63472),
    F = i(87548),
    B = i(88250);
  class V extends n.JT {
    constructor(e, t) {
      (super(), (this.editor = e), (this.suggestControllerPreselector = t), (this.isSuggestWidgetVisible = !1), (this.isShiftKeyPressed = !1), (this._isActive = !1), (this._currentInlineCompletion = void 0), (this.onDidChangeEmitter = new c.Q5()), (this.onDidChange = this.onDidChangeEmitter.event), (this.setInactiveDelayed = this._register(new u.pY(() => {
        this.isSuggestWidgetVisible || (this._isActive && ((this._isActive = !1), this.onDidChangeEmitter.fire()));
      }, 100))), this._register(e.onKeyDown(e => {
        e.shiftKey && !this.isShiftKeyPressed && ((this.isShiftKeyPressed = !0), this.update(this._isActive));
      })), this._register(e.onKeyUp(e => {
        e.shiftKey && this.isShiftKeyPressed && ((this.isShiftKeyPressed = !1), this.update(this._isActive));
      })));
      const i = B.SuggestController.get(this.editor);
      if (i) {
        this._register(i.registerSelector({
          priority: 100,
          select: (e, t, n) => {
            const o = this.editor.getModel(),
              s = P(o, this.suggestControllerPreselector());
            if (!s) return -1;
            const r = d.L.lift(t),
              a = (function (e, t) {
                let i;
                for (const n of e) (void 0 === i || t(n, i) > 0) && (i = n);
                return i;
              })(n.map((e, t) => {
                const n = W(i, r, e, this.isShiftKeyPressed),
                  a = P(o, n);
                if (!a) return;
                var l, c;
                return {
                  index: t,
                  valid: ((l = s.range), (c = a.range), l.startLineNumber === c.startLineNumber && l.startColumn === c.startColumn && (l.endLineNumber < c.endLineNumber || (l.endLineNumber === c.endLineNumber && l.endColumn <= c.endColumn)) && s.text.startsWith(a.text)),
                  prefixLength: a.text.length,
                  suggestItem: e
                };
              }).filter(e => e && e.valid), ((l = e => e.prefixLength), (c = (e, t) => e - t), (e, t) => c(l(e), l(t))));
            var l, c;
            return a ? a.index : -1;
          }
        }));
        let e = !1;
        const t = () => {
          e || ((e = !0), this._register(i.widget.value.onDidShow(() => {
            ((this.isSuggestWidgetVisible = !0), this.update(!0));
          })), this._register(i.widget.value.onDidHide(() => {
            ((this.isSuggestWidgetVisible = !1), this.setInactiveDelayed.schedule(), this.update(this._isActive));
          })), this._register(i.widget.value.onDidFocus(() => {
            ((this.isSuggestWidgetVisible = !0), this.update(!0));
          })));
        };
        this._register(c.ju.once(i.model.onDidTrigger)(e => {
          t();
        }));
      }
      this.update(this._isActive);
    }
    get state() {
      if (this._isActive) return {
        selectedItemAsInlineCompletion: this._currentInlineCompletion
      };
    }
    update(e) {
      const t = this.getInlineCompletion();
      let i = !1;
      var n, o;
      ((n = this._currentInlineCompletion) === (o = t) || (n && o && n.range.equalsRange(o.range) && n.text === o.text && n.command === o.command) || ((this._currentInlineCompletion = t), (i = !0)), this._isActive !== e && ((this._isActive = e), (i = !0)), i && this.onDidChangeEmitter.fire());
    }
    getInlineCompletion() {
      const e = B.SuggestController.get(this.editor);
      if (!e) return;
      if (!this.isSuggestWidgetVisible) return;
      const t = e.widget.value.getFocusedItem();
      return t ? W(e, this.editor.getPosition(), t.item, this.isShiftKeyPressed) : void 0;
    }
    stopForceRenderingAbove() {
      const e = B.SuggestController.get(this.editor);
      e && e.stopForceRenderingAbove();
    }
    forceRenderingAbove() {
      const e = B.SuggestController.get(this.editor);
      e && e.forceRenderingAbove();
    }
  }
  function W(e, t, i, n) {
    if (Array.isArray(i.completion.additionalTextEdits) && i.completion.additionalTextEdits.length > 0) return {
      text: "",
      range: v.e.fromPositions(t, t)
    };
    let {
      insertText: o
    } = i.completion;
    if (4 & i.completion.insertTextRules) {
      const i = new R.Yj().parse(o),
        n = e.editor.getModel();
      if (i.children.length > 100) return;
      (F.l.adjustWhitespace(n, t, i, !0, !0), (o = i.toString()));
    }
    const s = e.getOverwriteInfo(i, n);
    return {
      text: o,
      range: v.e.fromPositions(t.delta(0, -s.overwriteBefore), t.delta(0, Math.max(s.overwriteAfter, 0)))
    };
  }
  var H = function (e, t, i, n) {
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
  class z extends y {
    constructor(e, t) {
      (super(e), (this.cache = t), (this.suggestionInlineCompletionSource = this._register(new V(this.editor, () => {
        var e, t;
        return null === (t = null === (e = this.cache.value) || void 0 === e ? void 0 : e.completions[0]) || void 0 === t ? void 0 : t.toLiveInlineCompletion();
      }))), (this.updateOperation = this._register(new n.XK())), (this.updateCacheSoon = this._register(new u.pY(() => this.updateCache(), 50))), (this.minReservedLineCount = 0), this._register(this.suggestionInlineCompletionSource.onDidChange(() => {
        this.updateCacheSoon.schedule();
        this.suggestionInlineCompletionSource.state || (this.minReservedLineCount = 0);
        const e = this.ghostText;
        (e && (this.minReservedLineCount = Math.max(this.minReservedLineCount, e.parts.map(e => e.lines.length - 1).reduce((e, t) => e + t, 0))), this.minReservedLineCount >= 1 && this.isSuggestionPreviewEnabled() ? this.suggestionInlineCompletionSource.forceRenderingAbove() : this.suggestionInlineCompletionSource.stopForceRenderingAbove(), this.onDidChangeEmitter.fire());
      })), this._register(this.cache.onDidChange(() => {
        this.onDidChangeEmitter.fire();
      })), this._register(this.editor.onDidChangeCursorPosition(e => {
        this.isSuggestionPreviewEnabled() && ((this.minReservedLineCount = 0), this.updateCacheSoon.schedule(), this.onDidChangeEmitter.fire());
      })), this._register((0, n.OF)(() => this.suggestionInlineCompletionSource.stopForceRenderingAbove())));
    }
    get isActive() {
      return void 0 !== this.suggestionInlineCompletionSource.state;
    }
    isSuggestionPreviewEnabled() {
      return this.editor.getOption(105).preview;
    }
    updateCache() {
      return H(this, void 0, void 0, function* () {
        const e = this.suggestionInlineCompletionSource.state;
        if (!e || !e.selectedItemAsInlineCompletion) return;
        const t = {
            text: e.selectedItemAsInlineCompletion.text,
            range: e.selectedItemAsInlineCompletion.range
          },
          i = this.editor.getPosition(),
          n = (0, u.PG)(e => H(this, void 0, void 0, function* () {
            let n;
            try {
              n = yield O(i, this.editor.getModel(), {
                triggerKind: h.bw.Automatic,
                selectedSuggestionInfo: t
              }, e);
            } catch (e) {
              return void (0, p.dL)(e);
            }
            e.isCancellationRequested || (this.cache.setValue(this.editor, n, h.bw.Automatic), this.onDidChangeEmitter.fire());
          })),
          o = new T(n, h.bw.Automatic);
        ((this.updateOperation.value = o), yield n, this.updateOperation.value === o && this.updateOperation.clear());
      });
    }
    get ghostText() {
      var e, t;
      if (!this.isSuggestionPreviewEnabled()) return;
      const i = this.suggestionInlineCompletionSource.state,
        n = P(this.editor.getModel(), null == i ? void 0 : i.selectedItemAsInlineCompletion),
        o = P(this.editor.getModel(), null === (t = null === (e = this.cache.value) || void 0 === e ? void 0 : e.completions[0]) || void 0 === t ? void 0 : t.toLiveInlineCompletion()),
        s = o && n && o.text.startsWith(n.text) && o.range.equalsRange(n.range) ? o : n || o,
        r = n ? ((null == s ? void 0 : s.text.length) || 0) - n.text.length : 0;
      return (e => {
        const t = this.editor.getOptions().get(105).previewMode;
        return e ? S(e, this.editor.getModel(), t, this.editor.getPosition(), r) || new _(e.range.endLineNumber, [], this.minReservedLineCount) : void 0;
      })(s);
    }
  }
  var j = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    U = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    $ = function (e, t, i, n) {
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
  class K extends n.JT {
    constructor() {
      (super(...arguments), (this.onDidChangeEmitter = new c.Q5()), (this.onDidChange = this.onDidChangeEmitter.event), (this.hasCachedGhostText = !1), (this.currentModelRef = this._register(new n.XK())));
    }
    get targetModel() {
      var e;
      return null === (e = this.currentModelRef.value) || void 0 === e ? void 0 : e.object;
    }
    setTargetModel(e) {
      var t, i, n;
      (null === (t = this.currentModelRef.value) || void 0 === t ? void 0 : t.object) !== e && (this.currentModelRef.clear(), (this.currentModelRef.value = e ? ((i = e), (n = e.onDidChange(() => {
        ((this.hasCachedGhostText = !1), this.onDidChangeEmitter.fire());
      })), {
        object: i,
        dispose: () => (null == n ? void 0 : n.dispose())
      }) : void 0), (this.hasCachedGhostText = !1), this.onDidChangeEmitter.fire());
    }
    get ghostText() {
      var e, t;
      return (this.hasCachedGhostText || ((this.cachedGhostText = null === (t = null === (e = this.currentModelRef.value) || void 0 === e ? void 0 : e.object) || void 0 === t ? void 0 : t.ghostText), (this.hasCachedGhostText = !0)), this.cachedGhostText);
    }
    setExpanded(e) {
      var t;
      null === (t = this.targetModel) || void 0 === t || t.setExpanded(e);
    }
    get minReservedLineCount() {
      return this.targetModel ? this.targetModel.minReservedLineCount : 0;
    }
  }
  let q = class extends K {
    constructor(e, t) {
      (super(), (this.editor = e), (this.commandService = t), (this.sharedCache = this._register(new Z())), (this.suggestWidgetAdapterModel = this._register(new z(this.editor, this.sharedCache))), (this.inlineCompletionsModel = this._register(new I(this.editor, this.sharedCache, this.commandService))), this._register(this.suggestWidgetAdapterModel.onDidChange(() => {
        this.updateModel();
      })), this.updateModel());
    }
    get activeInlineCompletionsModel() {
      if (this.targetModel === this.inlineCompletionsModel) return this.inlineCompletionsModel;
    }
    updateModel() {
      (this.setTargetModel(this.suggestWidgetAdapterModel.isActive ? this.suggestWidgetAdapterModel : this.inlineCompletionsModel), this.inlineCompletionsModel.setActive(this.targetModel === this.inlineCompletionsModel));
    }
    shouldShowHoverAt(e) {
      var t;
      const i = null === (t = this.activeInlineCompletionsModel) || void 0 === t ? void 0 : t.ghostText;
      return (!!i && i.parts.some(t => e.containsPosition(new d.L(i.lineNumber, t.column))));
    }
    triggerInlineCompletion() {
      var e;
      null === (e = this.activeInlineCompletionsModel) || void 0 === e || e.trigger(h.bw.Explicit);
    }
    commitInlineCompletion() {
      var e;
      null === (e = this.activeInlineCompletionsModel) || void 0 === e || e.commitCurrentSuggestion();
    }
    hideInlineCompletion() {
      var e;
      null === (e = this.activeInlineCompletionsModel) || void 0 === e || e.hide();
    }
    showNextInlineCompletion() {
      var e;
      null === (e = this.activeInlineCompletionsModel) || void 0 === e || e.showNext();
    }
    showPreviousInlineCompletion() {
      var e;
      null === (e = this.activeInlineCompletionsModel) || void 0 === e || e.showPrevious();
    }
    hasMultipleInlineCompletions() {
      var e;
      return $(this, void 0, void 0, function* () {
        const t = yield null === (e = this.activeInlineCompletionsModel) || void 0 === e ? void 0 : e.hasMultipleInlineCompletions();
        return void 0 !== t && t;
      });
    }
  };
  q = j([U(1, C.H)], q);
  class Z extends n.JT {
    constructor() {
      (super(...arguments), (this.onDidChangeEmitter = new c.Q5()), (this.onDidChange = this.onDidChangeEmitter.event), (this.cache = this._register(new n.XK())));
    }
    get value() {
      return this.cache.value;
    }
    setValue(e, t, i) {
      this.cache.value = new M(e, t, () => this.onDidChangeEmitter.fire(), i);
    }
    clearAndLeak() {
      return this.cache.clearAndLeak();
    }
    clear() {
      this.cache.clear();
    }
  }
  var G,
    Y = i(65321),
    Q = i(41264),
    X = (i(80949), i(89052)),
    J = i(11640),
    ee = i(64141),
    te = i(33181),
    ie = i(78411),
    ne = i(50072),
    oe = i(71531),
    se = i(27869),
    re = i(92550),
    ae = i(77736),
    le = i(38819),
    ce = i(72065),
    de = i(97781),
    he = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    ue = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  const ge = null === (G = window.trustedTypes) || void 0 === G ? void 0 : G.createPolicy("editorGhostText", {
    createHTML: e => e
  });
  let pe = class extends n.JT {
    constructor(e, t, i, o) {
      (super(), (this.editor = e), (this.model = t), (this.instantiationService = i), (this.modeService = o), (this.disposed = !1), (this.partsWidget = this._register(this.instantiationService.createInstance(fe, this.editor))), (this.additionalLinesWidget = this._register(new ve(this.editor, this.modeService.languageIdCodec))), (this.viewMoreContentWidget = void 0), this._register(this.editor.onDidChangeConfiguration(e => {
        (e.hasChanged(29) || e.hasChanged(104) || e.hasChanged(87) || e.hasChanged(82) || e.hasChanged(44) || e.hasChanged(43) || e.hasChanged(58)) && this.update();
      })), this._register((0, n.OF)(() => {
        var e;
        ((this.disposed = !0), this.update(), null === (e = this.viewMoreContentWidget) || void 0 === e || e.dispose(), (this.viewMoreContentWidget = void 0));
      })), this._register(t.onDidChange(() => {
        this.update();
      })), this.update());
    }
    shouldShowHoverAtViewZone(e) {
      return this.additionalLinesWidget.viewZoneId === e;
    }
    update() {
      var e;
      const t = this.model.ghostText;
      if (!this.editor.hasModel() || !t || this.disposed) return (this.partsWidget.clear(), void this.additionalLinesWidget.clear());
      const i = new Array(),
        n = new Array();
      function o(e, t) {
        if (n.length > 0) {
          const i = n[n.length - 1];
          (t && i.decorations.push(new re.Kp(i.content.length + 1, i.content.length + 1 + e[0].length, t, 0)), (i.content += e[0]), (e = e.slice(1)));
        }
        for (const i of e) n.push({
          content: i,
          decorations: t ? [new re.Kp(1, i.length + 1, t, 0)] : []
        });
      }
      const s = this.editor.getModel().getLineContent(t.lineNumber);
      let r;
      this.editor.getModel().getLineTokens(t.lineNumber);
      let a = 0;
      for (const e of t.parts) {
        let t = e.lines;
        (void 0 === r ? (i.push({
          column: e.column,
          text: t[0],
          preview: e.preview
        }), (t = t.slice(1))) : o([s.substring(a, e.column - 1)], void 0), t.length > 0 && (o(t, "ghost-text"), void 0 === r && e.column <= s.length && (r = e.column)), (a = e.column - 1));
      }
      (void 0 !== r && o([s.substring(a)], void 0), this.partsWidget.setParts(t.lineNumber, i, void 0 !== r ? {
        column: r,
        length: s.length + 1 - r
      } : void 0), this.additionalLinesWidget.updateLines(t.lineNumber, n, t.additionalReservedLineCount), t.parts.some(e => e.lines.length < 0) ? (this.viewMoreContentWidget = this.renderViewMoreLines(new d.L(t.lineNumber, this.editor.getModel().getLineMaxColumn(t.lineNumber)), "", 0)) : (null === (e = this.viewMoreContentWidget) || void 0 === e || e.dispose(), (this.viewMoreContentWidget = void 0)));
    }
    renderViewMoreLines(e, t, i) {
      const o = this.editor.getOption(43),
        s = document.createElement("div");
      ((s.className = "suggest-preview-additional-widget"), X.V.applyFontInfoSlow(s, o));
      const r = document.createElement("span");
      ((r.className = "content-spacer"), r.append(t), s.append(r));
      const a = document.createElement("span");
      ((a.className = "content-newline suggest-preview-text"), a.append("⏎  "), s.append(a));
      const l = new n.SL(),
        c = document.createElement("div");
      return ((c.className = "button suggest-preview-text"), c.append(`+${i} lines…`), l.add(Y.mu(c, "mousedown", e => {
        var t;
        (null === (t = this.model) || void 0 === t || t.setExpanded(!0), e.preventDefault(), this.editor.focus());
      })), s.append(c), new be(this.editor, e, s, l));
    }
  };
  pe = he([ue(2, ce.TG), ue(3, oe.h)], pe);
  let fe = class {
    constructor(e, t, i, o) {
      ((this.editor = e), (this.codeEditorService = t), (this.themeService = i), (this.contextKeyService = o), (this.decorationIds = []), (this.disposableStore = new n.SL()));
    }
    dispose() {
      (this.clear(), this.disposableStore.dispose());
    }
    clear() {
      (this.editor.deltaDecorations(this.decorationIds, []), this.disposableStore.clear());
    }
    setParts(e, t, i) {
      this.disposableStore.clear();
      const n = this.themeService.getColorTheme(),
        o = n.getColor(se.N5);
      let s, r;
      o && ((s = String(o.rgba.a)), (r = Q.Il.Format.CSS.format(me(o))));
      const a = n.getColor(se.x3);
      let l;
      a && (l = `2px dashed ${a}`);
      const c = this.editor.getModel();
      if (!c) return;
      const {
          tabSize: h
        } = c.getOptions(),
        u = c.getLineContent(e) || "";
      let g = 0,
        p = "";
      const f = new Array();
      i && f.push({
        range: v.e.fromPositions(new d.L(e, i.column), new d.L(e, i.column + i.length)),
        options: {
          inlineClassName: "ghost-text-hidden",
          description: "ghost-text-hidden"
        }
      });
      const m = this.contextKeyService.getContextKeyValue("config.editor.useInjectedText"),
        _ = void 0 === m || !!m;
      this.decorationIds = this.editor.deltaDecorations(this.decorationIds, t.map(t => {
        ((p += u.substring(g, t.column - 1)), (g = t.column - 1));
        const i = _ ? t.text : this.renderSingleLineText(t.text, p, h, !1),
          n = this.disposableStore.add((function (e, t, i, n) {
            const o = i + _e++;
            return (e.registerDecorationType(t, o, n), {
              dispose() {
                e.removeDecorationType(o);
              },
              resolve: () => e.resolveDecorationOptions(o, !0)
            });
          })(this.codeEditorService, "ghost-text", "0-ghost-text-", {
            after: {
              contentText: i,
              opacity: s,
              color: r,
              border: l,
              fontWeight: t.preview ? "bold" : "normal"
            }
          }));
        return {
          range: v.e.fromPositions(new d.L(e, t.column)),
          options: _ ? {
            description: "ghost-text",
            after: {
              content: i,
              inlineClassName: t.preview ? "ghost-text-decoration-preview" : "ghost-text-decoration"
            },
            showIfCollapsed: !0
          } : Object.assign({}, n.resolve())
        };
      }).concat(f));
    }
    renderSingleLineText(e, t, i, n) {
      const o = t + e,
        s = te.io.visibleColumnsByColumns(o, i);
      let r = "",
        a = t.length + 1;
      for (const t of e) {
        if ("\t" === t) {
          const e = s[a + 1] - s[a];
          if (n) {
            r += "→";
            for (let t = 1; t < e; t++) r += " ";
          } else for (let t = 0; t < e; t++) r += " ";
        } else r += " " === t ? (n ? "·" : " ") : t;
        a += 1;
      }
      return r;
    }
  };
  function me(e) {
    const {
      r: t,
      b: i,
      g: n
    } = e.rgba;
    return new Q.Il(new Q.VS(t, n, i, 255));
  }
  fe = he([ue(1, J.$), ue(2, de.XE), ue(3, le.i6)], fe);
  class ve {
    constructor(e, t) {
      ((this.editor = e), (this.languageIdCodec = t), (this._viewZoneId = void 0));
    }
    get viewZoneId() {
      return this._viewZoneId;
    }
    dispose() {
      this.clear();
    }
    clear() {
      this.editor.changeViewZones(e => {
        this._viewZoneId && (e.removeZone(this._viewZoneId), (this._viewZoneId = void 0));
      });
    }
    updateLines(e, t, i) {
      const n = this.editor.getModel();
      if (!n) return;
      const {
        tabSize: s
      } = n.getOptions();
      this.editor.changeViewZones(n => {
        this._viewZoneId && (n.removeZone(this._viewZoneId), (this._viewZoneId = void 0));
        const r = Math.max(t.length, i);
        if (r > 0) {
          const i = document.createElement("div");
          (!(function (e, t, i, n, s) {
            const r = n.get(29),
              a = n.get(104),
              l = "none",
              c = n.get(82),
              d = n.get(44),
              h = n.get(43),
              u = n.get(58),
              g = (0, ne.l$)(1e4);
            g.appendASCIIString('<div class="suggest-preview-text">');
            for (let e = 0, n = i.length; e < n; e++) {
              const n = i[e],
                p = n.content;
              (g.appendASCIIString('<div class="view-line'), g.appendASCIIString('" style="top:'), g.appendASCIIString(String(e * u)), g.appendASCIIString('px;width:1000000px;">'));
              const f = o.$i(p),
                m = o.Ut(p),
                v = ie.A.createEmpty(p, s);
              ((0, ae.d1)(new ae.IJ(h.isMonospace && !r, h.canUseHalfwidthRightwardsArrow, p, !1, f, m, 0, v, n.decorations, t, 0, h.spaceWidth, h.middotWidth, h.wsmiddotWidth, a, l, c, d !== ee.n0.OFF, null), g), g.appendASCIIString("</div>"));
            }
            (g.appendASCIIString("</div>"), X.V.applyFontInfoSlow(e, h));
            const p = g.build(),
              f = ge ? ge.createHTML(p) : p;
            e.innerHTML = f;
          })(i, s, t, this.editor.getOptions(), this.languageIdCodec), (this._viewZoneId = n.addZone({
            afterLineNumber: e,
            heightInLines: r,
            domNode: i
          })));
        }
      });
    }
  }
  let _e = 0;
  class be extends n.JT {
    constructor(e, t, i, o) {
      (super(), (this.editor = e), (this.position = t), (this.domNode = i), (this.allowEditorOverflow = !1), (this.suppressMouseDown = !1), this._register(o), this._register((0, n.OF)(() => {
        this.editor.removeContentWidget(this);
      })), this.editor.addContentWidget(this));
    }
    getId() {
      return "editor.widget.viewMoreLinesWidget";
    }
    getDomNode() {
      return this.domNode;
    }
    getPosition() {
      return {
        position: this.position,
        preference: [0]
      };
    }
  }
  (0, de.Ic)((e, t) => {
    const i = e.getColor(se.N5);
    if (i) {
      const e = String(i.rgba.a),
        n = Q.Il.Format.CSS.format(me(i));
      (t.addRule(`.monaco-editor .ghost-text-decoration { opacity: ${e} !important; color: ${n} !important; }`), t.addRule(`.monaco-editor .ghost-text-decoration-preview { color: ${i.toString()} !important; }`), t.addRule(`.monaco-editor .suggest-preview-text .ghost-text { opacity: ${e} !important; color: ${n} !important; }`));
    }
    const n = e.getColor(se.x3);
    n && (t.addRule(`.monaco-editor .suggest-preview-text .ghost-text { border: 1px solid ${n}; }`), t.addRule(`.monaco-editor .ghost-text-decoration { border: 1px solid ${n}; }`), t.addRule(`.monaco-editor .ghost-text-decoration-preview { border: 1px solid ${n}; }`));
  });
  var we = i(63580),
    ye = i(49989),
    Ce = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    xe = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    Se = function (e, t, i, n) {
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
  let ke = class e extends n.JT {
    constructor(e, t) {
      (super(), (this.editor = e), (this.instantiationService = t), (this.triggeredExplicitly = !1), (this.activeController = this._register(new n.XK())), this._register(this.editor.onDidChangeModel(() => {
        this.updateModelController();
      })), this._register(this.editor.onDidChangeConfiguration(e => {
        (e.hasChanged(105) && this.updateModelController(), e.hasChanged(54) && this.updateModelController());
      })), this.updateModelController());
    }
    static get(t) {
      return t.getContribution(e.ID);
    }
    get activeModel() {
      var e;
      return null === (e = this.activeController.value) || void 0 === e ? void 0 : e.model;
    }
    updateModelController() {
      const e = this.editor.getOption(105),
        t = this.editor.getOption(54);
      ((this.activeController.value = void 0), (this.activeController.value = this.editor.hasModel() && (e.preview || t.enabled || this.triggeredExplicitly) ? this.instantiationService.createInstance(Ne, this.editor) : void 0));
    }
    shouldShowHoverAt(e) {
      var t;
      return ((null === (t = this.activeModel) || void 0 === t ? void 0 : t.shouldShowHoverAt(e)) || !1);
    }
    shouldShowHoverAtViewZone(e) {
      var t, i;
      return ((null === (i = null === (t = this.activeController.value) || void 0 === t ? void 0 : t.widget) || void 0 === i ? void 0 : i.shouldShowHoverAtViewZone(e)) || !1);
    }
    trigger() {
      var e;
      ((this.triggeredExplicitly = !0), this.activeController.value || this.updateModelController(), null === (e = this.activeModel) || void 0 === e || e.triggerInlineCompletion());
    }
    commit() {
      var e;
      null === (e = this.activeModel) || void 0 === e || e.commitInlineCompletion();
    }
    hide() {
      var e;
      null === (e = this.activeModel) || void 0 === e || e.hideInlineCompletion();
    }
    showNextInlineCompletion() {
      var e;
      null === (e = this.activeModel) || void 0 === e || e.showNextInlineCompletion();
    }
    showPreviousInlineCompletion() {
      var e;
      null === (e = this.activeModel) || void 0 === e || e.showPreviousInlineCompletion();
    }
    hasMultipleInlineCompletions() {
      var e;
      return Se(this, void 0, void 0, function* () {
        const t = yield null === (e = this.activeModel) || void 0 === e ? void 0 : e.hasMultipleInlineCompletions();
        return void 0 !== t && t;
      });
    }
  };
  ((ke.inlineSuggestionVisible = new le.uy("inlineSuggestionVisible", !1, we.N("inlineSuggestionVisible", "Whether an inline suggestion is visible"))), (ke.inlineSuggestionHasIndentation = new le.uy("inlineSuggestionHasIndentation", !1, we.N("inlineSuggestionHasIndentation", "Whether the inline suggestion starts with whitespace"))), (ke.inlineSuggestionHasIndentationLessThanTabSize = new le.uy("inlineSuggestionHasIndentationLessThanTabSize", !0, we.N("inlineSuggestionHasIndentationLessThanTabSize", "Whether the inline suggestion starts with whitespace that is less than what would be inserted by tab"))), (ke.ID = "editor.contrib.ghostTextController"), (ke = Ce([xe(1, ce.TG)], ke)));
  class Le {
    constructor(e) {
      ((this.contextKeyService = e), (this.inlineCompletionVisible = ke.inlineSuggestionVisible.bindTo(this.contextKeyService)), (this.inlineCompletionSuggestsIndentation = ke.inlineSuggestionHasIndentation.bindTo(this.contextKeyService)), (this.inlineCompletionSuggestsIndentationLessThanTabSize = ke.inlineSuggestionHasIndentationLessThanTabSize.bindTo(this.contextKeyService)));
    }
  }
  let Ne = class extends n.JT {
    constructor(e, t, i) {
      (super(), (this.editor = e), (this.instantiationService = t), (this.contextKeyService = i), (this.contextKeys = new Le(this.contextKeyService)), (this.model = this._register(this.instantiationService.createInstance(q, this.editor))), (this.widget = this._register(this.instantiationService.createInstance(pe, this.editor, this.model))), this._register((0, n.OF)(() => {
        (this.contextKeys.inlineCompletionVisible.set(!1), this.contextKeys.inlineCompletionSuggestsIndentation.set(!1), this.contextKeys.inlineCompletionSuggestsIndentationLessThanTabSize.set(!0));
      })), this._register(this.model.onDidChange(() => {
        this.updateContextKeys();
      })), this.updateContextKeys());
    }
    updateContextKeys() {
      var e;
      this.contextKeys.inlineCompletionVisible.set(void 0 !== (null === (e = this.model.activeInlineCompletionsModel) || void 0 === e ? void 0 : e.ghostText));
      let t = !1,
        i = !0;
      const n = this.model.inlineCompletionsModel.ghostText;
      if (this.model.activeInlineCompletionsModel && n && n.parts.length > 0) {
        const {
            column: e,
            lines: s
          } = n.parts[0],
          a = s[0];
        if (e <= this.editor.getModel().getLineIndentColumn(n.lineNumber)) {
          let e = (0, o.LC)(a);
          (-1 === e && (e = a.length - 1), (t = e > 0));
          const n = this.editor.getModel().getOptions().tabSize;
          i = r.i.visibleColumnFromColumn(a, e + 1, n) < n;
        }
      }
      (this.contextKeys.inlineCompletionSuggestsIndentation.set(t), this.contextKeys.inlineCompletionSuggestsIndentationLessThanTabSize.set(i));
    }
  };
  Ne = Ce([xe(1, ce.TG), xe(2, le.i6)], Ne);
  const De = s._l.bindToContribution(ke.get),
    Ie = new De({
      id: l,
      precondition: ke.inlineSuggestionVisible,
      handler(e) {
        (e.commit(), e.editor.focus());
      }
    });
  ((0, s.fK)(Ie), ye.W.registerKeybindingRule({
    primary: 2,
    weight: 200,
    id: Ie.id,
    when: le.Ao.and(Ie.precondition, a.u.tabMovesFocus.toNegated(), ke.inlineSuggestionHasIndentationLessThanTabSize)
  }), (0, s.fK)(new De({
    id: "editor.action.inlineSuggest.hide",
    precondition: ke.inlineSuggestionVisible,
    kbOpts: {
      weight: 100,
      primary: 9
    },
    handler(e) {
      e.hide();
    }
  })));
  class Ee extends s.R6 {
    constructor() {
      super({
        id: Ee.ID,
        label: we.N("action.inlineSuggest.showNext", "Show Next Inline Suggestion"),
        alias: "Show Next Inline Suggestion",
        precondition: le.Ao.and(a.u.writable, ke.inlineSuggestionVisible),
        kbOpts: {
          weight: 100,
          primary: 601
        }
      });
    }
    run(e, t) {
      return Se(this, void 0, void 0, function* () {
        const e = ke.get(t);
        e && (e.showNextInlineCompletion(), t.focus());
      });
    }
  }
  Ee.ID = "editor.action.inlineSuggest.showNext";
  class Te extends s.R6 {
    constructor() {
      super({
        id: Te.ID,
        label: we.N("action.inlineSuggest.showPrevious", "Show Previous Inline Suggestion"),
        alias: "Show Previous Inline Suggestion",
        precondition: le.Ao.and(a.u.writable, ke.inlineSuggestionVisible),
        kbOpts: {
          weight: 100,
          primary: 599
        }
      });
    }
    run(e, t) {
      return Se(this, void 0, void 0, function* () {
        const e = ke.get(t);
        e && (e.showPreviousInlineCompletion(), t.focus());
      });
    }
  }
  Te.ID = "editor.action.inlineSuggest.showPrevious";
  class Me extends s.R6 {
    constructor() {
      super({
        id: "editor.action.inlineSuggest.trigger",
        label: we.N("action.inlineSuggest.trigger", "Trigger Inline Suggestion"),
        alias: "Trigger Inline Suggestion",
        precondition: a.u.writable
      });
    }
    run(e, t) {
      return Se(this, void 0, void 0, function* () {
        const e = ke.get(t);
        e && e.trigger();
      });
    }
  }
  ((0, s._K)(ke.ID, ke), (0, s.Qr)(Me), (0, s.Qr)(Ee), (0, s.Qr)(Te));
};