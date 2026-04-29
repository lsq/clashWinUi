module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    A9: () => x,
    GI: () => y,
    ZJ: () => k,
    _y: () => w,
    i5: () => M,
    kL: () => N,
    wg: () => E
  });
  var n = i(71050),
    o = i(17301),
    s = i(75392),
    r = i(5976),
    a = i(84013),
    l = i(98401),
    c = i(70666),
    d = i(50187),
    h = i(24314),
    u = i(44101),
    g = i(88216),
    p = i(63472),
    f = i(63580),
    m = i(84144),
    v = i(94565),
    _ = i(38819),
    b = function (e, t, i, n) {
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
  const w = {
      Visible: new _.uy("suggestWidgetVisible", !1, (0, f.N)("suggestWidgetVisible", "Whether suggestion are visible")),
      DetailsVisible: new _.uy("suggestWidgetDetailsVisible", !1, (0, f.N)("suggestWidgetDetailsVisible", "Whether suggestion details are visible")),
      MultipleSuggestions: new _.uy("suggestWidgetMultipleSuggestions", !1, (0, f.N)("suggestWidgetMultipleSuggestions", "Whether there are multiple suggestions to pick from")),
      MakesTextEdit: new _.uy("suggestionMakesTextEdit", !0, (0, f.N)("suggestionMakesTextEdit", "Whether inserting the current suggestion yields in a change or has everything already been typed")),
      AcceptSuggestionsOnEnter: new _.uy("acceptSuggestionOnEnter", !0, (0, f.N)("acceptSuggestionOnEnter", "Whether suggestions are inserted when pressing Enter")),
      HasInsertAndReplaceRange: new _.uy("suggestionHasInsertAndReplaceRange", !1, (0, f.N)("suggestionHasInsertAndReplaceRange", "Whether the current suggestion has insert and replace behaviour")),
      InsertMode: new _.uy("suggestionInsertMode", void 0, {
        type: "string",
        description: (0, f.N)("suggestionInsertMode", "Whether the default behaviour is to insert or replace")
      }),
      CanResolve: new _.uy("suggestionCanResolve", !1, (0, f.N)("suggestionCanResolve", "Whether the current suggestion supports to resolve further details"))
    },
    y = new m.eH("suggestWidgetStatusBar");
  class C {
    constructor(e, t, i, n) {
      ((this.position = e), (this.completion = t), (this.container = i), (this.provider = n), (this.isInvalid = !1), (this.score = s.CL.Default), (this.distance = 0), (this.textLabel = "string" == typeof t.label ? t.label : t.label.label), (this.labelLow = this.textLabel.toLowerCase()), (this.isInvalid = !this.textLabel), (this.sortTextLow = t.sortText && t.sortText.toLowerCase()), (this.filterTextLow = t.filterText && t.filterText.toLowerCase()), h.e.isIRange(t.range) ? ((this.editStart = new d.L(t.range.startLineNumber, t.range.startColumn)), (this.editInsertEnd = new d.L(t.range.endLineNumber, t.range.endColumn)), (this.editReplaceEnd = new d.L(t.range.endLineNumber, t.range.endColumn)), (this.isInvalid = this.isInvalid || h.e.spansMultipleLines(t.range) || t.range.startLineNumber !== e.lineNumber)) : ((this.editStart = new d.L(t.range.insert.startLineNumber, t.range.insert.startColumn)), (this.editInsertEnd = new d.L(t.range.insert.endLineNumber, t.range.insert.endColumn)), (this.editReplaceEnd = new d.L(t.range.replace.endLineNumber, t.range.replace.endColumn)), (this.isInvalid = this.isInvalid || h.e.spansMultipleLines(t.range.insert) || h.e.spansMultipleLines(t.range.replace) || t.range.insert.startLineNumber !== e.lineNumber || t.range.replace.startLineNumber !== e.lineNumber || t.range.insert.startColumn !== t.range.replace.startColumn)), "function" != typeof n.resolveCompletionItem && ((this._resolveCache = Promise.resolve()), (this._isResolved = !0)));
    }
    get isResolved() {
      return !!this._isResolved;
    }
    resolve(e) {
      return b(this, void 0, void 0, function* () {
        if (!this._resolveCache) {
          const t = e.onCancellationRequested(() => {
            ((this._resolveCache = void 0), (this._isResolved = !1));
          });
          this._resolveCache = Promise.resolve(this.provider.resolveCompletionItem(this.completion, e)).then(e => {
            (Object.assign(this.completion, e), (this._isResolved = !0), t.dispose());
          }, e => {
            (0, o.VV)(e) && ((this._resolveCache = void 0), (this._isResolved = !1));
          });
        }
        return this._resolveCache;
      });
    }
  }
  class x {
    constructor(e = 2, t = new Set(), i = new Set(), n = !0) {
      ((this.snippetSortOrder = e), (this.kindFilter = t), (this.providerFilter = i), (this.showDeprecated = n));
    }
  }
  let S;
  function k() {
    return S;
  }
  x.default = new x();
  class L {
    constructor(e, t, i, n) {
      ((this.items = e), (this.needsClipboard = t), (this.durations = i), (this.disposable = n));
    }
  }
  function N(e, t, i = x.default, s = {
    triggerKind: 0
  }, l = n.T.None) {
    return b(this, void 0, void 0, function* () {
      const n = new a.G(!0);
      t = t.clone();
      const c = e.getWordAtPosition(t),
        d = c ? new h.e(t.lineNumber, c.startColumn, t.lineNumber, c.endColumn) : h.e.fromPositions(t),
        g = {
          replace: d,
          insert: d.setEndPosition(t.lineNumber, t.column)
        },
        f = [],
        m = new r.SL(),
        v = [];
      let _ = !1;
      const w = (e, n, o) => {
          var s, a, l;
          if (n) {
            for (let o of n.suggestions) if (!i.kindFilter.has(o.kind)) {
              if (!i.showDeprecated && (null === (s = null == o ? void 0 : o.tags) || void 0 === s ? void 0 : s.includes(1))) continue;
              (o.range || (o.range = g), o.sortText || (o.sortText = "string" == typeof o.label ? o.label : o.label.label), !_ && o.insertTextRules && 4 & o.insertTextRules && (_ = p.Yj.guessNeedsClipboard(o.insertText)), f.push(new C(t, o, n, e)));
            }
            ((0, r.Wf)(n) && m.add(n), v.push({
              providerName: null !== (a = e._debugDisplayName) && void 0 !== a ? a : "unkown_provider",
              elapsedProvider: null !== (l = n.duration) && void 0 !== l ? l : -1,
              elapsedOverall: o.elapsed()
            }));
          }
        },
        y = (() => b(this, void 0, void 0, function* () {
          if (!S || i.kindFilter.has(27)) return;
          if (i.providerFilter.size > 0 && !i.providerFilter.has(S)) return;
          const n = new a.G(!0),
            o = yield S.provideCompletionItems(e, t, s, l);
          w(S, o, n);
        }))();
      for (let n of u.KZ.orderedGroups(e)) {
        let r = f.length;
        if ((yield Promise.all(n.map(n => b(this, void 0, void 0, function* () {
          if (!(i.providerFilter.size > 0) || i.providerFilter.has(n)) try {
            const i = new a.G(!0),
              o = yield n.provideCompletionItems(e, t, s, l);
            w(n, o, i);
          } catch (e) {
            (0, o.Cp)(e);
          }
        }))), r !== f.length || l.isCancellationRequested)) break;
      }
      return (yield y, l.isCancellationRequested ? (m.dispose(), Promise.reject((0, o.F0)())) : new L(f.sort(E(i.snippetSortOrder)), _, {
        entries: v,
        elapsed: n.elapsed()
      }, m));
    });
  }
  function D(e, t) {
    if (e.sortTextLow && t.sortTextLow) {
      if (e.sortTextLow < t.sortTextLow) return -1;
      if (e.sortTextLow > t.sortTextLow) return 1;
    }
    return e.completion.label < t.completion.label ? -1 : e.completion.label > t.completion.label ? 1 : e.completion.kind - t.completion.kind;
  }
  const I = new Map();
  function E(e) {
    return I.get(e);
  }
  (I.set(0, function (e, t) {
    if (e.completion.kind !== t.completion.kind) {
      if (27 === e.completion.kind) return -1;
      if (27 === t.completion.kind) return 1;
    }
    return D(e, t);
  }), I.set(2, function (e, t) {
    if (e.completion.kind !== t.completion.kind) {
      if (27 === e.completion.kind) return 1;
      if (27 === t.completion.kind) return -1;
    }
    return D(e, t);
  }), I.set(1, D), v.P.registerCommand("_executeCompletionItemProvider", (e, ...t) => b(void 0, void 0, void 0, function* () {
    const [i, o, s, r] = t;
    ((0, l.p_)(c.o.isUri(i)), (0, l.p_)(d.L.isIPosition(o)), (0, l.p_)("string" == typeof s || !s), (0, l.p_)("number" == typeof r || !r));
    const a = yield e.get(g.S).createModelReference(i);
    try {
      const e = {
          incomplete: !1,
          suggestions: []
        },
        t = [],
        i = yield N(a.object.textEditorModel, d.L.lift(o), void 0, {
          triggerCharacter: s,
          triggerKind: s ? 1 : 0
        });
      for (const o of i.items) (t.length < (null != r ? r : 0) && t.push(o.resolve(n.T.None)), (e.incomplete = e.incomplete || o.container.incomplete), e.suggestions.push(o.completion));
      try {
        return (yield Promise.all(t), e);
      } finally {
        setTimeout(() => i.disposable.dispose(), 100);
      }
    } finally {
      a.dispose();
    }
  })));
  const T = new (class {
    constructor() {
      this.onlyOnceSuggestions = [];
    }
    provideCompletionItems() {
      let e = {
        suggestions: this.onlyOnceSuggestions.slice(0)
      };
      return ((this.onlyOnceSuggestions.length = 0), e);
    }
  })();
  function M(e, t) {
    setTimeout(() => {
      (T.onlyOnceSuggestions.push(...t), e.getContribution("editor.contrib.suggestController").triggerSuggest(new Set().add(T)));
    }, 0);
  }
  u.KZ.register("*", T);
};