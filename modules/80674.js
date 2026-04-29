module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    CONTEXT_ONTYPE_RENAME_INPUT_VISIBLE: () => L,
    LinkedEditingAction: () => I,
    LinkedEditingContribution: () => D,
    editorLinkedEditingBackground: () => M
  }));
  var n = i(9488),
    o = i(15393),
    s = i(71050),
    r = i(41264),
    a = i(17301),
    l = i(5976),
    c = i(97295),
    d = i(70666),
    h = i(16830),
    u = i(11640),
    g = i(50187),
    p = i(24314),
    f = i(29102),
    m = i(44174),
    v = i(44101),
    _ = i(83831),
    b = i(63580),
    w = i(38819),
    y = i(73910),
    C = i(97781),
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
    },
    k = function (e, t, i, n) {
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
  const L = new w.uy("LinkedEditingInputVisible", !1),
    N = "linked-editing-decoration";
  let D = class e extends l.JT {
    constructor(e, t) {
      (super(), (this._debounceDuration = 200), (this._localToDispose = this._register(new l.SL())), (this._editor = e), (this._enabled = !1), (this._visibleContextKey = L.bindTo(t)), (this._currentDecorations = []), (this._languageWordPattern = null), (this._currentWordPattern = null), (this._ignoreChangeEvent = !1), (this._localToDispose = this._register(new l.SL())), (this._rangeUpdateTriggerPromise = null), (this._rangeSyncTriggerPromise = null), (this._currentRequest = null), (this._currentRequestPosition = null), (this._currentRequestModelVersion = null), this._register(this._editor.onDidChangeModel(() => this.reinitialize(!0))), this._register(this._editor.onDidChangeConfiguration(e => {
        (e.hasChanged(61) || e.hasChanged(81)) && this.reinitialize(!1);
      })), this._register(v.id.onDidChange(() => this.reinitialize(!1))), this._register(this._editor.onDidChangeModelLanguage(() => this.reinitialize(!0))), this.reinitialize(!0));
    }
    static get(t) {
      return t.getContribution(e.ID);
    }
    reinitialize(e) {
      const t = this._editor.getModel(),
        i = null !== t && (this._editor.getOption(61) || this._editor.getOption(81)) && v.id.has(t);
      if (i === this._enabled && !e) return;
      if (((this._enabled = i), this.clearRanges(), this._localToDispose.clear(), !i || null === t)) return;
      ((this._languageWordPattern = _.zu.getWordDefinition(t.getLanguageId())), this._localToDispose.add(t.onDidChangeLanguageConfiguration(() => {
        this._languageWordPattern = _.zu.getWordDefinition(t.getLanguageId());
      })));
      const n = new o.vp(this._debounceDuration),
        s = () => {
          this._rangeUpdateTriggerPromise = n.trigger(() => this.updateRanges(), this._debounceDuration);
        },
        r = new o.vp(0),
        a = e => {
          this._rangeSyncTriggerPromise = r.trigger(() => this._syncRanges(e));
        };
      (this._localToDispose.add(this._editor.onDidChangeCursorPosition(() => {
        s();
      })), this._localToDispose.add(this._editor.onDidChangeModelContent(e => {
        if (!this._ignoreChangeEvent && this._currentDecorations.length > 0) {
          const i = t.getDecorationRange(this._currentDecorations[0]);
          if (i && e.changes.every(e => i.intersectRanges(e.range))) return void a(this._currentDecorations);
        }
        s();
      })), this._localToDispose.add({
        dispose: () => {
          (n.cancel(), r.cancel());
        }
      }), this.updateRanges());
    }
    _syncRanges(e) {
      if (!this._editor.hasModel() || e !== this._currentDecorations || 0 === e.length) return;
      const t = this._editor.getModel(),
        i = t.getDecorationRange(e[0]);
      if (!i || i.startLineNumber !== i.endLineNumber) return this.clearRanges();
      const n = t.getValueInRange(i);
      if (this._currentWordPattern) {
        const e = n.match(this._currentWordPattern);
        if ((e ? e[0].length : 0) !== n.length) return this.clearRanges();
      }
      let o = [];
      for (let i = 1, s = e.length; i < s; i++) {
        const s = t.getDecorationRange(e[i]);
        if (s) if (s.startLineNumber !== s.endLineNumber) o.push({
          range: s,
          text: n
        });else {
          let e = t.getValueInRange(s),
            i = n,
            r = s.startColumn,
            a = s.endColumn;
          const l = c.Mh(e, i);
          ((r += l), (e = e.substr(l)), (i = i.substr(l)));
          const d = c.P1(e, i);
          ((a -= d), (e = e.substr(0, e.length - d)), (i = i.substr(0, i.length - d)), (r === a && 0 === i.length) || o.push({
            range: new p.e(s.startLineNumber, r, s.endLineNumber, a),
            text: i
          }));
        }
      }
      if (0 !== o.length) try {
        (this._editor.popUndoStop(), (this._ignoreChangeEvent = !0));
        const e = this._editor._getViewModel().getPrevEditOperationType();
        (this._editor.executeEdits("linkedEditing", o), this._editor._getViewModel().setPrevEditOperationType(e));
      } finally {
        this._ignoreChangeEvent = !1;
      }
    }
    dispose() {
      (this.clearRanges(), super.dispose());
    }
    clearRanges() {
      (this._visibleContextKey.set(!1), (this._currentDecorations = this._editor.deltaDecorations(this._currentDecorations, [])), this._currentRequest && (this._currentRequest.cancel(), (this._currentRequest = null), (this._currentRequestPosition = null)));
    }
    updateRanges(t = !1) {
      return k(this, void 0, void 0, function* () {
        if (!this._editor.hasModel()) return void this.clearRanges();
        const i = this._editor.getPosition();
        if ((!this._enabled && !t) || this._editor.getSelections().length > 1) return void this.clearRanges();
        const n = this._editor.getModel(),
          s = n.getVersionId();
        if (this._currentRequestPosition && this._currentRequestModelVersion === s) {
          if (i.equals(this._currentRequestPosition)) return;
          if (this._currentDecorations && this._currentDecorations.length > 0) {
            const e = n.getDecorationRange(this._currentDecorations[0]);
            if (e && e.containsPosition(i)) return;
          }
        }
        ((this._currentRequestPosition = i), (this._currentRequestModelVersion = s));
        const r = (0, o.PG)(t => k(this, void 0, void 0, function* () {
          try {
            const o = yield T(n, i, t);
            if (r !== this._currentRequest) return;
            if (((this._currentRequest = null), s !== n.getVersionId())) return;
            let a = [];
            ((null == o ? void 0 : o.ranges) && (a = o.ranges), (this._currentWordPattern = (null == o ? void 0 : o.wordPattern) || this._languageWordPattern));
            let l = !1;
            for (let e = 0, t = a.length; e < t; e++) if (p.e.containsPosition(a[e], i)) {
              if (((l = !0), 0 !== e)) {
                const t = a[e];
                (a.splice(e, 1), a.unshift(t));
              }
              break;
            }
            if (!l) return void this.clearRanges();
            const c = a.map(t => ({
              range: t,
              options: e.DECORATION
            }));
            (this._visibleContextKey.set(!0), (this._currentDecorations = this._editor.deltaDecorations(this._currentDecorations, c)));
          } catch (e) {
            ((0, a.VV)(e) || (0, a.dL)(e), (this._currentRequest !== r && this._currentRequest) || this.clearRanges());
          }
        }));
        return ((this._currentRequest = r), r);
      });
    }
  };
  ((D.ID = "editor.contrib.linkedEditing"), (D.DECORATION = m.qx.register({
    description: "linked-editing",
    stickiness: 0,
    className: N
  })), (D = x([S(1, w.i6)], D)));
  class I extends h.R6 {
    constructor() {
      super({
        id: "editor.action.linkedEditing",
        label: b.N("linkedEditing.label", "Start Linked Editing"),
        alias: "Start Linked Editing",
        precondition: w.Ao.and(f.u.writable, f.u.hasRenameProvider),
        kbOpts: {
          kbExpr: f.u.editorTextFocus,
          primary: 3132,
          weight: 100
        }
      });
    }
    runCommand(e, t) {
      const i = e.get(u.$),
        [n, o] = (Array.isArray(t) && t) || [void 0, void 0];
      return d.o.isUri(n) && g.L.isIPosition(o) ? i.openCodeEditor({
        resource: n
      }, i.getActiveCodeEditor()).then(e => {
        e && (e.setPosition(o), e.invokeWithinContext(t => (this.reportTelemetry(t, e), this.run(t, e))));
      }, a.dL) : super.runCommand(e, t);
    }
    run(e, t) {
      const i = D.get(t);
      return i ? Promise.resolve(i.updateRanges(!0)) : Promise.resolve();
    }
  }
  const E = h._l.bindToContribution(D.get);
  function T(e, t, i) {
    const s = v.id.ordered(e);
    return (0, o.Ps)(s.map(n => () => k(this, void 0, void 0, function* () {
      try {
        return yield n.provideLinkedEditingRanges(e, t, i);
      } catch (e) {
        return void (0, a.Cp)(e);
      }
    })), e => !!e && n.Of(null == e ? void 0 : e.ranges));
  }
  (0, h.fK)(new E({
    id: "cancelLinkedEditingInput",
    precondition: L,
    handler: e => e.clearRanges(),
    kbOpts: {
      kbExpr: f.u.editorTextFocus,
      weight: 199,
      primary: 9,
      secondary: [1033]
    }
  }));
  const M = (0, y.P6)("editor.linkedEditingBackground", {
    dark: r.Il.fromHex("#f00").transparent(0.3),
    light: r.Il.fromHex("#f00").transparent(0.3),
    hc: r.Il.fromHex("#f00").transparent(0.3)
  }, b.N("editorLinkedEditingBackground", "Background color when the editor auto renames on type."));
  ((0, C.Ic)((e, t) => {
    const i = e.getColor(M);
    i && t.addRule(`.monaco-editor .${N} { background: ${i}; border-left-color: ${i}; }`);
  }), (0, h.sb)("_executeLinkedEditingProvider", (e, t) => T(e, t, s.T.None)), (0, h._K)(D.ID, D), (0, h.Qr)(I));
};