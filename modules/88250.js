module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    SuggestController: () => _t,
    TriggerSuggestAction: () => wt
  }));
  var n = i(85152),
    o = i(9488),
    s = i(15393),
    r = i(71050),
    a = i(17301),
    l = i(4669),
    c = i(8313),
    d = i(5976),
    h = i(1432),
    u = i(84013),
    g = i(98401),
    p = i(39925),
    f = i(16830),
    m = i(69386),
    v = i(50187),
    _ = i(24314),
    b = i(29102),
    w = i(93379),
    y = i(63472),
    C = i(43702),
    x = i(44101),
    S = i(33108),
    k = i(65026),
    L = i(72065),
    N = i(26904),
    D = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    I = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  class E {
    constructor(e) {
      this.name = e;
    }
    select(e, t, i) {
      if (0 === i.length) return 0;
      let n = i[0].score[0];
      for (let e = 0; e < i.length; e++) {
        const {
          score: t,
          completion: o
        } = i[e];
        if (t[0] !== n) break;
        if (o.preselect) return e;
      }
      return 0;
    }
  }
  class T extends E {
    constructor() {
      super("first");
    }
    memorize(e, t, i) {}
    toJSON() {}
    fromJSON() {}
  }
  let M = class e {
    constructor(e, t) {
      ((this._storageService = e), (this._configService = t), (this._disposables = new d.SL()), (this._persistSoon = new s.pY(() => this._saveState(), 500)), this._disposables.add(e.onWillSaveState(e => {
        e.reason === N.fk.SHUTDOWN && this._saveState();
      })));
    }
    dispose() {
      (this._disposables.dispose(), this._persistSoon.dispose());
    }
    memorize(e, t, i) {
      (this._withStrategy(e, t).memorize(e, t, i), this._persistSoon.schedule());
    }
    select(e, t, i) {
      return this._withStrategy(e, t).select(e, t, i);
    }
    _withStrategy(t, i) {
      var n;
      const o = this._configService.getValue("editor.suggestSelection", {
        overrideIdentifier: t.getLanguageIdAtPosition(i.lineNumber, i.column),
        resource: t.uri
      });
      if ((null === (n = this._strategy) || void 0 === n ? void 0 : n.name) !== o) {
        this._saveState();
        const t = e._strategyCtors.get(o) || T;
        this._strategy = new t();
        try {
          const t = this._configService.getValue("editor.suggest.shareSuggestSelections") ? 0 : 1,
            i = this._storageService.get(`${e._storagePrefix}/${o}`, t);
          i && this._strategy.fromJSON(JSON.parse(i));
        } catch (e) {}
      }
      return this._strategy;
    }
    _saveState() {
      if (this._strategy) {
        const t = this._configService.getValue("editor.suggest.shareSuggestSelections") ? 0 : 1,
          i = JSON.stringify(this._strategy);
        this._storageService.store(`${e._storagePrefix}/${this._strategy.name}`, i, t, 1);
      }
    }
  };
  ((M._strategyCtors = new Map([["recentlyUsedByPrefix", class extends E {
    constructor() {
      (super("recentlyUsedByPrefix"), (this._trie = C.Id.forStrings()), (this._seq = 0));
    }
    memorize(e, t, i) {
      const {
          word: n
        } = e.getWordUntilPosition(t),
        o = `${e.getLanguageId()}/${n}`;
      this._trie.set(o, {
        type: i.completion.kind,
        insertText: i.completion.insertText,
        touch: this._seq++
      });
    }
    select(e, t, i) {
      let {
        word: n
      } = e.getWordUntilPosition(t);
      if (!n) return super.select(e, t, i);
      let o = `${e.getLanguageId()}/${n}`,
        s = this._trie.get(o);
      if ((s || (s = this._trie.findSubstr(o)), s)) for (let e = 0; e < i.length; e++) {
        let {
          kind: t,
          insertText: n
        } = i[e].completion;
        if (t === s.type && n === s.insertText) return e;
      }
      return super.select(e, t, i);
    }
    toJSON() {
      let e = [];
      return (this._trie.forEach((t, i) => e.push([i, t])), e.sort((e, t) => -(e[1].touch - t[1].touch)).forEach((e, t) => (e[1].touch = t)), e.slice(0, 200));
    }
    fromJSON(e) {
      if ((this._trie.clear(), e.length > 0)) {
        this._seq = e[0][1].touch + 1;
        for (const [t, i] of e) ((i.type = "number" == typeof i.type ? i.type : (0, x.jr)(i.type)), this._trie.set(t, i));
      }
    }
  }], ["recentlyUsed", class extends E {
    constructor() {
      (super("recentlyUsed"), (this._cache = new C.z6(300, 0.66)), (this._seq = 0));
    }
    memorize(e, t, i) {
      const n = `${e.getLanguageId()}/${i.textLabel}`;
      this._cache.set(n, {
        touch: this._seq++,
        type: i.completion.kind,
        insertText: i.completion.insertText
      });
    }
    select(e, t, i) {
      if (0 === i.length) return 0;
      const n = e.getLineContent(t.lineNumber).substr(t.column - 10, t.column - 1);
      if (/\s$/.test(n)) return super.select(e, t, i);
      let o = i[0].score[0],
        s = -1,
        r = -1,
        a = -1;
      for (let t = 0; t < i.length && i[t].score[0] === o; t++) {
        const n = `${e.getLanguageId()}/${i[t].textLabel}`,
          o = this._cache.peek(n);
        if ((o && o.touch > a && o.type === i[t].completion.kind && o.insertText === i[t].completion.insertText && ((a = o.touch), (r = t)), i[t].completion.preselect && -1 === s)) return t;
      }
      return -1 !== r ? r : -1 !== s ? s : 0;
    }
    toJSON() {
      return this._cache.toJSON();
    }
    fromJSON(e) {
      this._cache.clear();
      for (const [t, i] of e) ((i.touch = 0), (i.type = "number" == typeof i.type ? i.type : (0, x.jr)(i.type)), this._cache.set(t, i));
      this._seq = this._cache.size;
    }
  }], ["first", T]])), (M._storagePrefix = "suggest/memories"), (M = D([I(0, N.Uy), I(1, S.Ui)], M)));
  const A = (0, L.yh)("ISuggestMemories");
  (0, k.z)(A, M, !0);
  var O = i(38819),
    P = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    R = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let F = class e {
    constructor(t, i) {
      ((this._editor = t), (this._enabled = !1), (this._ckAtEnd = e.AtEnd.bindTo(i)), (this._configListener = this._editor.onDidChangeConfiguration(e => e.hasChanged(110) && this._update())), this._update());
    }
    dispose() {
      var e;
      (this._configListener.dispose(), null === (e = this._selectionListener) || void 0 === e || e.dispose(), this._ckAtEnd.reset());
    }
    _update() {
      const e = "on" === this._editor.getOption(110);
      if (this._enabled !== e) if (((this._enabled = e), this._enabled)) {
        const e = () => {
          if (!this._editor.hasModel()) return void this._ckAtEnd.set(!1);
          const e = this._editor.getModel(),
            t = this._editor.getSelection(),
            i = e.getWordAtPosition(t.getStartPosition());
          i ? this._ckAtEnd.set(i.endColumn === t.getStartPosition().column) : this._ckAtEnd.set(!1);
        };
        ((this._selectionListener = this._editor.onDidChangeCursorSelection(e)), e());
      } else this._selectionListener && (this._ckAtEnd.reset(), this._selectionListener.dispose(), (this._selectionListener = void 0));
    }
  };
  ((F.AtEnd = new O.uy("atEndOfWord", !1)), (F = P([R(1, O.i6)], F)));
  var B = i(63580),
    V = i(84144),
    W = i(94565),
    H = i(49989),
    z = i(43557),
    j = i(79599),
    U = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    $ = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let K = class e {
    constructor(t, i) {
      ((this._editor = t), (this._index = 0), (this._ckOtherSuggestions = e.OtherSuggestions.bindTo(i)));
    }
    dispose() {
      this.reset();
    }
    reset() {
      var e;
      (this._ckOtherSuggestions.reset(), null === (e = this._listener) || void 0 === e || e.dispose(), (this._model = void 0), (this._acceptNext = void 0), (this._ignore = !1));
    }
    set({
      model: t,
      index: i
    }, n) {
      if (0 === t.items.length) return void this.reset();
      e._moveIndex(!0, t, i) !== i ? ((this._acceptNext = n), (this._model = t), (this._index = i), (this._listener = this._editor.onDidChangeCursorPosition(() => {
        this._ignore || this.reset();
      })), this._ckOtherSuggestions.set(!0)) : this.reset();
    }
    static _moveIndex(e, t, i) {
      let n = i;
      for (; (n = (n + t.items.length + (e ? 1 : -1)) % t.items.length), n !== i && t.items[n].completion.additionalTextEdits;);
      return n;
    }
    next() {
      this._move(!0);
    }
    prev() {
      this._move(!1);
    }
    _move(t) {
      if (this._model) try {
        ((this._ignore = !0), (this._index = e._moveIndex(t, this._model, this._index)), this._acceptNext({
          index: this._index,
          item: this._model.items[this._index],
          model: this._model
        }));
      } finally {
        this._ignore = !1;
      }
    }
  };
  ((K.OtherSuggestions = new O.uy("hasOtherSuggestions", !1)), (K = U([$(1, O.i6)], K)));
  var q = i(44906);
  class Z {
    constructor(e, t, i) {
      ((this._disposables = new d.SL()), this._disposables.add(t.onDidShow(() => this._onItem(t.getFocusedItem()))), this._disposables.add(t.onDidFocus(this._onItem, this)), this._disposables.add(t.onDidHide(this.reset, this)), this._disposables.add(e.onWillType(n => {
        if (this._active && !t.isFrozen()) {
          const t = n.charCodeAt(n.length - 1);
          this._active.acceptCharacters.has(t) && e.getOption(0) && i(this._active.item);
        }
      })));
    }
    _onItem(e) {
      if (!e || !(0, o.Of)(e.item.completion.commitCharacters)) return void this.reset();
      if (this._active && this._active.item.item === e.item) return;
      const t = new q.q();
      for (const i of e.item.completion.commitCharacters) i.length > 0 && t.add(i.charCodeAt(0));
      this._active = {
        acceptCharacters: t,
        item: e
      };
    }
    reset() {
      this._active = void 0;
    }
    dispose() {
      this._disposables.dispose();
    }
  }
  var G = i(97295),
    Y = i(3860),
    Q = i(90469),
    X = i(80689),
    J = function (e, t, i, n) {
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
  class ee {
    static create(e, t) {
      return J(this, void 0, void 0, function* () {
        if (!t.getOption(105).localityBonus) return ee.None;
        if (!t.hasModel()) return ee.None;
        const i = t.getModel(),
          n = t.getPosition();
        if (!e.canComputeWordRanges(i.uri)) return ee.None;
        const [s] = yield new X.x().provideSelectionRanges(i, [n]);
        if (0 === s.length) return ee.None;
        const r = yield e.computeWordRanges(i.uri, s[0].range);
        if (!r) return ee.None;
        const a = i.getWordUntilPosition(n);
        return (delete r[a.word], new (class extends ee {
          distance(e, i) {
            if (!n.equals(t.getPosition())) return 0;
            if (17 === i.kind) return 2 << 20;
            let a = "string" == typeof i.label ? i.label : i.label.label,
              l = r[a];
            if ((0, o.XY)(l)) return 2 << 20;
            let c = (0, o.ry)(l, _.e.fromPositions(e), _.e.compareRangesUsingStarts),
              d = c >= 0 ? l[c] : l[Math.max(0, ~c - 1)],
              h = s.length;
            for (const e of s) {
              if (!_.e.containsRange(e.range, d)) break;
              h -= 1;
            }
            return h;
          }
        })());
      });
    }
  }
  ee.None = new (class extends ee {
    distance() {
      return 0;
    }
  })();
  var te = i(84972),
    ie = i(10829),
    ne = i(75392);
  class oe {
    constructor(e, t, i, n, o, s, r) {
      ((this.clipboardText = r), (this._snippetCompareFn = oe._compareCompletionItems), (this._items = e), (this._column = t), (this._wordDistance = n), (this._options = o), (this._refilterKind = 1), (this._lineContext = i), "top" === s ? (this._snippetCompareFn = oe._compareCompletionItemsSnippetsUp) : "bottom" === s && (this._snippetCompareFn = oe._compareCompletionItemsSnippetsDown));
    }
    get lineContext() {
      return this._lineContext;
    }
    set lineContext(e) {
      (this._lineContext.leadingLineContent === e.leadingLineContent && this._lineContext.characterCountDelta === e.characterCountDelta) || ((this._refilterKind = this._lineContext.characterCountDelta < e.characterCountDelta && this._filteredItems ? 2 : 1), (this._lineContext = e));
    }
    get items() {
      return (this._ensureCachedState(), this._filteredItems);
    }
    get allProvider() {
      return (this._ensureCachedState(), this._providerInfo.keys());
    }
    get incomplete() {
      this._ensureCachedState();
      const e = new Set();
      for (let [t, i] of this._providerInfo) i && e.add(t);
      return e;
    }
    adopt(e) {
      let t = [];
      for (let i = 0; i < this._items.length;) e.has(this._items[i].provider) ? i++ : (t.push(this._items[i]), (this._items[i] = this._items[this._items.length - 1]), this._items.pop());
      return ((this._refilterKind = 1), t);
    }
    get stats() {
      return (this._ensureCachedState(), this._stats);
    }
    _ensureCachedState() {
      0 !== this._refilterKind && this._createCachedState();
    }
    _createCachedState() {
      this._providerInfo = new Map();
      const e = [],
        {
          leadingLineContent: t,
          characterCountDelta: i
        } = this._lineContext;
      let n = "",
        s = "";
      const r = 1 === this._refilterKind ? this._items : this._filteredItems,
        a = [],
        l = !this._options.filterGraceful || r.length > 2e3 ? ne.EW : ne.l7;
      for (let o = 0; o < r.length; o++) {
        const c = r[o];
        if (c.isInvalid) continue;
        this._providerInfo.set(c.provider, Boolean(c.container.incomplete));
        const d = c.position.column - c.editStart.column,
          h = d + i - (c.position.column - this._column);
        if ((n.length !== h && ((n = 0 === h ? "" : t.slice(-h)), (s = n.toLowerCase())), (c.word = n), 0 === h)) c.score = ne.CL.Default;else {
          let e = 0;
          for (; e < d;) {
            const t = n.charCodeAt(e);
            if (32 !== t && 9 !== t) break;
            e += 1;
          }
          if (e >= h) c.score = ne.CL.Default;else if ("string" == typeof c.completion.filterText) {
            let t = l(n, s, e, c.completion.filterText, c.filterTextLow, 0, !1);
            if (!t) continue;
            0 === (0, G.zY)(c.completion.filterText, c.textLabel) ? (c.score = t) : ((c.score = (0, ne.jB)(n, s, e, c.textLabel, c.labelLow, 0)), (c.score[0] = t[0]));
          } else {
            let t = l(n, s, e, c.textLabel, c.labelLow, 0, !1);
            if (!t) continue;
            c.score = t;
          }
        }
        ((c.idx = o), (c.distance = this._wordDistance.distance(c.position, c.completion)), a.push(c), e.push(c.textLabel.length));
      }
      ((this._filteredItems = a.sort(this._snippetCompareFn)), (this._refilterKind = 0), (this._stats = {
        pLabelLen: e.length ? (0, o.HW)(e.length - 0.85, e, (e, t) => e - t) : 0
      }));
    }
    static _compareCompletionItems(e, t) {
      return e.score[0] > t.score[0] ? -1 : e.score[0] < t.score[0] ? 1 : e.distance < t.distance ? -1 : e.distance > t.distance ? 1 : e.idx < t.idx ? -1 : e.idx > t.idx ? 1 : 0;
    }
    static _compareCompletionItemsSnippetsDown(e, t) {
      if (e.completion.kind !== t.completion.kind) {
        if (27 === e.completion.kind) return 1;
        if (27 === t.completion.kind) return -1;
      }
      return oe._compareCompletionItems(e, t);
    }
    static _compareCompletionItemsSnippetsUp(e, t) {
      if (e.completion.kind !== t.completion.kind) {
        if (27 === e.completion.kind) return -1;
        if (27 === t.completion.kind) return 1;
      }
      return oe._compareCompletionItems(e, t);
    }
  }
  var se = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    re = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    ae = function (e, t, i, n) {
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
  class le {
    constructor(e, t, i, n) {
      ((this.leadingLineContent = e.getLineContent(t.lineNumber).substr(0, t.column - 1)), (this.leadingWord = e.getWordUntilPosition(t)), (this.lineNumber = t.lineNumber), (this.column = t.column), (this.auto = i), (this.shy = n));
    }
    static shouldAutoTrigger(e) {
      if (!e.hasModel()) return !1;
      const t = e.getModel(),
        i = e.getPosition();
      t.tokenizeIfCheap(i.lineNumber);
      const n = t.getWordAtPosition(i);
      return !!n && n.endColumn === i.column && !!isNaN(Number(n.word));
    }
  }
  let ce = class e {
    constructor(e, t, i, n, o, r, a) {
      ((this._editor = e), (this._editorWorkerService = t), (this._clipboardService = i), (this._telemetryService = n), (this._logService = o), (this._contextKeyService = r), (this._configurationService = a), (this._toDispose = new d.SL()), (this._quickSuggestDelay = 10), (this._triggerCharacterListener = new d.SL()), (this._triggerQuickSuggest = new s._F()), (this._state = 0), (this._completionDisposables = new d.SL()), (this._onDidCancel = new l.Q5()), (this._onDidTrigger = new l.Q5()), (this._onDidSuggest = new l.Q5()), (this.onDidCancel = this._onDidCancel.event), (this.onDidTrigger = this._onDidTrigger.event), (this.onDidSuggest = this._onDidSuggest.event), (this._telemetryGate = 0), (this._currentSelection = this._editor.getSelection() || new Y.Y(1, 1, 1, 1)), this._toDispose.add(this._editor.onDidChangeModel(() => {
        (this._updateTriggerCharacters(), this.cancel());
      })), this._toDispose.add(this._editor.onDidChangeModelLanguage(() => {
        (this._updateTriggerCharacters(), this.cancel());
      })), this._toDispose.add(this._editor.onDidChangeConfiguration(() => {
        (this._updateTriggerCharacters(), this._updateQuickSuggest());
      })), this._toDispose.add(x.KZ.onDidChange(() => {
        (this._updateTriggerCharacters(), this._updateActiveSuggestSession());
      })), this._toDispose.add(this._editor.onDidChangeCursorSelection(e => {
        this._onCursorChange(e);
      })));
      let c = !1;
      (this._toDispose.add(this._editor.onDidCompositionStart(() => {
        c = !0;
      })), this._toDispose.add(this._editor.onDidCompositionEnd(() => {
        ((c = !1), this._onCompositionEnd());
      })), this._toDispose.add(this._editor.onDidChangeModelContent(() => {
        c || this._refilterCompletionItems();
      })), this._updateTriggerCharacters(), this._updateQuickSuggest());
    }
    dispose() {
      ((0, d.B9)(this._triggerCharacterListener), (0, d.B9)([this._onDidCancel, this._onDidSuggest, this._onDidTrigger, this._triggerQuickSuggest]), this._toDispose.dispose(), this._completionDisposables.dispose(), this.cancel());
    }
    _updateQuickSuggest() {
      ((this._quickSuggestDelay = this._editor.getOption(79)), (isNaN(this._quickSuggestDelay) || (!this._quickSuggestDelay && 0 !== this._quickSuggestDelay) || this._quickSuggestDelay < 0) && (this._quickSuggestDelay = 10));
    }
    _updateTriggerCharacters() {
      if ((this._triggerCharacterListener.clear(), this._editor.getOption(80) || !this._editor.hasModel() || !this._editor.getOption(108))) return;
      const e = new Map();
      for (const t of x.KZ.all(this._editor.getModel())) for (const i of t.triggerCharacters || []) {
        let n = e.get(i);
        (n || ((n = new Set()), n.add((0, j.ZJ)()), e.set(i, n)), n.add(t));
      }
      const t = t => {
        if (!(function (e, t, i) {
          if (!Boolean(t.getContextKeyValue("inlineSuggestionVisible"))) return !0;
          const n = i.getValue("editor.inlineSuggest.allowSuggestOnTriggerCharacters");
          return void 0 !== n && Boolean(n);
        })(this._editor, this._contextKeyService, this._configurationService)) return;
        if (le.shouldAutoTrigger(this._editor)) return;
        if (!t) {
          const e = this._editor.getPosition();
          t = this._editor.getModel().getLineContent(e.lineNumber).substr(0, e.column - 1);
        }
        let i = "";
        (0, G.YK)(t.charCodeAt(t.length - 1)) ? (0, G.ZG)(t.charCodeAt(t.length - 2)) && (i = t.substr(t.length - 2)) : (i = t.charAt(t.length - 1));
        const n = e.get(i);
        if (n) {
          const e = this._completionModel ? {
            items: this._completionModel.adopt(n),
            clipboardText: this._completionModel.clipboardText
          } : void 0;
          this.trigger({
            auto: !0,
            shy: !1,
            triggerCharacter: i
          }, Boolean(this._completionModel), n, e);
        }
      };
      (this._triggerCharacterListener.add(this._editor.onDidType(t)), this._triggerCharacterListener.add(this._editor.onDidCompositionEnd(t)));
    }
    get state() {
      return this._state;
    }
    cancel(e = !1) {
      var t;
      0 !== this._state && (this._triggerQuickSuggest.cancel(), null === (t = this._requestToken) || void 0 === t || t.cancel(), (this._requestToken = void 0), (this._state = 0), (this._completionModel = void 0), (this._context = void 0), this._onDidCancel.fire({
        retrigger: e
      }));
    }
    clear() {
      this._completionDisposables.clear();
    }
    _updateActiveSuggestSession() {
      0 !== this._state && (this._editor.hasModel() && x.KZ.has(this._editor.getModel()) ? this.trigger({
        auto: 2 === this._state,
        shy: !1
      }, !0) : this.cancel());
    }
    _onCursorChange(e) {
      if (!this._editor.hasModel()) return;
      const t = this._currentSelection;
      ((this._currentSelection = this._editor.getSelection()), !e.selection.isEmpty() || (0 !== e.reason && 3 !== e.reason) || ("keyboard" !== e.source && "deleteLeft" !== e.source) ? this.cancel() : 0 === this._state && 0 === e.reason ? (t.containsRange(this._currentSelection) || t.getEndPosition().isBeforeOrEqual(this._currentSelection.getPosition())) && this._doTriggerQuickSuggest() : 0 !== this._state && 3 === e.reason && this._refilterCompletionItems());
    }
    _onCompositionEnd() {
      0 === this._state ? this._doTriggerQuickSuggest() : this._refilterCompletionItems();
    }
    _doTriggerQuickSuggest() {
      !1 !== this._editor.getOption(78) && ((this._editor.getOption(105).snippetsPreventQuickSuggestions && w.SnippetController2.get(this._editor).isInSnippet()) || (this.cancel(), this._triggerQuickSuggest.cancelAndSet(() => {
        if (0 !== this._state) return;
        if (!le.shouldAutoTrigger(this._editor)) return;
        if (!this._editor.hasModel()) return;
        const e = this._editor.getModel(),
          t = this._editor.getPosition(),
          i = this._editor.getOption(78);
        if (!1 !== i) {
          if (!0 === i) ;else {
            e.tokenizeIfCheap(t.lineNumber);
            const n = e.getLineTokens(t.lineNumber),
              o = n.getStandardTokenType(n.findTokenIndexAtOffset(Math.max(t.column - 1 - 1, 0)));
            if (!((i.other && 0 === o) || (i.comments && 1 === o) || (i.strings && 2 === o))) return;
          }
          (function (e, t, i) {
            if (!Boolean(t.getContextKeyValue("inlineSuggestionVisible"))) return !0;
            const n = i.getValue("editor.inlineSuggest.allowQuickSuggestions");
            return void 0 !== n && Boolean(n);
          })(this._editor, this._contextKeyService, this._configurationService) && x.KZ.has(e) && this.trigger({
            auto: !0,
            shy: !1
          });
        }
      }, this._quickSuggestDelay)));
    }
    _refilterCompletionItems() {
      Promise.resolve().then(() => {
        if (0 === this._state) return;
        if (!this._editor.hasModel()) return;
        const e = this._editor.getModel(),
          t = this._editor.getPosition(),
          i = new le(e, t, 2 === this._state, !1);
        this._onNewContext(i);
      });
    }
    trigger(t, i = !1, n, o) {
      var s;
      if (!this._editor.hasModel()) return;
      const l = this._editor.getModel(),
        c = t.auto,
        d = new le(l, this._editor.getPosition(), c, t.shy);
      (this.cancel(i), (this._state = c ? 2 : 1), this._onDidTrigger.fire({
        auto: c,
        shy: t.shy,
        position: this._editor.getPosition()
      }), (this._context = d));
      let h = {
        triggerKind: null !== (s = t.triggerKind) && void 0 !== s ? s : 0
      };
      (t.triggerCharacter && (h = {
        triggerKind: 1,
        triggerCharacter: t.triggerCharacter
      }), (this._requestToken = new r.A()));
      const u = this._editor.getOption(100);
      let g = 1;
      switch (u) {
        case "top":
          g = 0;
          break;
        case "bottom":
          g = 2;
      }
      const {
          itemKind: p,
          showDeprecated: f
        } = e._createSuggestFilter(this._editor),
        m = ee.create(this._editorWorkerService, this._editor),
        v = (0, j.kL)(l, this._editor.getPosition(), new j.A9(g, p, n, f), h, this._requestToken.token);
      Promise.all([v, m]).then(([e, i]) => ae(this, void 0, void 0, function* () {
        var n;
        if ((null === (n = this._requestToken) || void 0 === n || n.dispose(), !this._editor.hasModel())) return;
        let s = null == o ? void 0 : o.clipboardText;
        if ((!s && e.needsClipboard && (s = yield this._clipboardService.readText()), 0 === this._state)) return;
        const r = this._editor.getModel();
        let a = e.items;
        if (o) {
          const e = (0, j.wg)(g);
          a = a.concat(o.items).sort(e);
        }
        const l = new le(r, this._editor.getPosition(), c, t.shy);
        ((this._completionModel = new oe(a, this._context.column, {
          leadingLineContent: l.leadingLineContent,
          characterCountDelta: l.column - this._context.column
        }, i, this._editor.getOption(105), this._editor.getOption(100), s)), this._completionDisposables.add(e.disposable), this._onNewContext(l), this._reportDurationsTelemetry(e.durations));
      })).catch(a.dL);
    }
    _reportDurationsTelemetry(e) {
      this._telemetryGate++ % 230 == 0 && setTimeout(() => {
        (this._telemetryService.publicLog2("suggest.durations.json", {
          data: JSON.stringify(e)
        }), this._logService.debug("suggest.durations.json", e));
      });
    }
    static _createSuggestFilter(e) {
      const t = new Set();
      "none" === e.getOption(100) && t.add(27);
      const i = e.getOption(105);
      return (i.showMethods || t.add(0), i.showFunctions || t.add(1), i.showConstructors || t.add(2), i.showFields || t.add(3), i.showVariables || t.add(4), i.showClasses || t.add(5), i.showStructs || t.add(6), i.showInterfaces || t.add(7), i.showModules || t.add(8), i.showProperties || t.add(9), i.showEvents || t.add(10), i.showOperators || t.add(11), i.showUnits || t.add(12), i.showValues || t.add(13), i.showConstants || t.add(14), i.showEnums || t.add(15), i.showEnumMembers || t.add(16), i.showKeywords || t.add(17), i.showWords || t.add(18), i.showColors || t.add(19), i.showFiles || t.add(20), i.showReferences || t.add(21), i.showColors || t.add(22), i.showFolders || t.add(23), i.showTypeParameters || t.add(24), i.showSnippets || t.add(27), i.showUsers || t.add(25), i.showIssues || t.add(26), {
        itemKind: t,
        showDeprecated: i.showDeprecated
      });
    }
    _onNewContext(e) {
      if (this._context) if (e.lineNumber === this._context.lineNumber) {
        if ((0, G.V8)(e.leadingLineContent) === (0, G.V8)(this._context.leadingLineContent)) {
          if (e.column < this._context.column) e.leadingWord.word ? this.trigger({
            auto: this._context.auto,
            shy: !1
          }, !0) : this.cancel();else if (this._completionModel) if (0 !== e.leadingWord.word.length && e.leadingWord.startColumn > this._context.leadingWord.startColumn) {
            const e = new Set(x.KZ.all(this._editor.getModel()));
            for (let t of this._completionModel.allProvider) e.delete(t);
            const t = this._completionModel.adopt(new Set());
            this.trigger({
              auto: this._context.auto,
              shy: !1
            }, !0, e, {
              items: t,
              clipboardText: this._completionModel.clipboardText
            });
          } else if (e.column > this._context.column && this._completionModel.incomplete.size > 0 && 0 !== e.leadingWord.word.length) {
            const {
                incomplete: e
              } = this._completionModel,
              t = this._completionModel.adopt(e);
            this.trigger({
              auto: 2 === this._state,
              shy: !1,
              triggerKind: 2
            }, !0, e, {
              items: t,
              clipboardText: this._completionModel.clipboardText
            });
          } else {
            let t = this._completionModel.lineContext,
              i = !1;
            if (((this._completionModel.lineContext = {
              leadingLineContent: e.leadingLineContent,
              characterCountDelta: e.column - this._context.column
            }), 0 === this._completionModel.items.length)) {
              if (le.shouldAutoTrigger(this._editor) && this._context.leadingWord.endColumn < e.leadingWord.startColumn) return void this.trigger({
                auto: this._context.auto,
                shy: !1
              }, !0);
              if (this._context.auto) return void this.cancel();
              if (((this._completionModel.lineContext = t), (i = this._completionModel.items.length > 0), i && 0 === e.leadingWord.word.length)) return void this.cancel();
            }
            this._onDidSuggest.fire({
              completionModel: this._completionModel,
              auto: this._context.auto,
              shy: this._context.shy,
              isFrozen: i
            });
          }
        } else this.cancel();
      } else this.cancel();
    }
  };
  ce = se([re(1, Q.p), re(2, te.p), re(3, ie.b), re(4, z.VZ), re(5, O.i6), re(6, S.Ui)], ce);
  class de {
    constructor(e, t) {
      ((this._disposables = new d.SL()), (this._lastOvertyped = []), (this._empty = !0), this._disposables.add(e.onWillType(() => {
        if (!this._empty) return;
        if (!e.hasModel()) return;
        const t = e.getSelections(),
          i = t.length;
        let n = !1;
        for (let e = 0; e < i; e++) if (!t[e].isEmpty()) {
          n = !0;
          break;
        }
        if (!n) return;
        this._lastOvertyped = [];
        const o = e.getModel();
        for (let e = 0; e < i; e++) {
          const i = t[e];
          if (o.getValueLengthInRange(i) > de._maxSelectionLength) return;
          this._lastOvertyped[e] = {
            value: o.getValueInRange(i),
            multiline: i.startLineNumber !== i.endLineNumber
          };
        }
        this._empty = !1;
      })), this._disposables.add(t.onDidCancel(e => {
        this._empty || e.retrigger || (this._empty = !0);
      })));
    }
    getLastOvertypedInfo(e) {
      if (!this._empty && e >= 0 && e < this._lastOvertyped.length) return this._lastOvertyped[e];
    }
    dispose() {
      this._disposables.dispose();
    }
  }
  de._maxSelectionLength = 51200;
  var he = i(65321),
    ue = (i(28609), i(43799)),
    ge = i(59870),
    pe = (i(89401), i(84527)),
    fe = i(90317),
    me = i(58335),
    ve = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    _e = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  class be extends me.Mm {
    updateLabel() {
      const e = this._keybindingService.lookupKeybinding(this._action.id, this._contextKeyService);
      if (!e) return super.updateLabel();
      this.label && (this.label.textContent = (0, B.N)("ddd", "{0} ({1})", this._action.label, be.symbolPrintEnter(e)));
    }
    static symbolPrintEnter(e) {
      var t;
      return null === (t = e.getLabel()) || void 0 === t ? void 0 : t.replace(/\benter\b/gi, "⏎");
    }
  }
  let we = class {
    constructor(e, t, i, n) {
      ((this._menuService = i), (this._contextKeyService = n), (this._menuDisposables = new d.SL()), (this.element = he.R3(e, he.$(".suggest-status-bar"))));
      const o = e => e instanceof V.U8 ? t.createInstance(be, e, void 0) : void 0;
      ((this._leftActions = new fe.o(this.element, {
        actionViewItemProvider: o
      })), (this._rightActions = new fe.o(this.element, {
        actionViewItemProvider: o
      })), this._leftActions.domNode.classList.add("left"), this._rightActions.domNode.classList.add("right"));
    }
    dispose() {
      (this._menuDisposables.dispose(), this.element.remove());
    }
    show() {
      const e = this._menuService.createMenu(j.GI, this._contextKeyService),
        t = () => {
          const t = [],
            i = [];
          for (let [n, o] of e.getActions()) "left" === n ? t.push(...o) : i.push(...o);
          (this._leftActions.clear(), this._leftActions.push(t), this._rightActions.clear(), this._rightActions.push(i));
        };
      (this._menuDisposables.add(e.onDidChange(() => t())), this._menuDisposables.add(e));
    }
    hide() {
      this._menuDisposables.clear();
    }
  };
  we = ve([_e(1, L.TG), _e(2, V.co), _e(3, O.i6)], we);
  i(24954);
  var ye = i(73910),
    Ce = i(88810),
    xe = i(97781),
    Se = i(73098);
  class ke {
    constructor() {
      let e;
      ((this._onDidWillResize = new l.Q5()), (this.onDidWillResize = this._onDidWillResize.event), (this._onDidResize = new l.Q5()), (this.onDidResize = this._onDidResize.event), (this._sashListener = new d.SL()), (this._size = new he.Ro(0, 0)), (this._minSize = new he.Ro(0, 0)), (this._maxSize = new he.Ro(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)), (this.domNode = document.createElement("div")), (this._eastSash = new Se.g(this.domNode, {
        getVerticalSashLeft: () => this._size.width
      }, {
        orientation: 0
      })), (this._westSash = new Se.g(this.domNode, {
        getVerticalSashLeft: () => 0
      }, {
        orientation: 0
      })), (this._northSash = new Se.g(this.domNode, {
        getHorizontalSashTop: () => 0
      }, {
        orientation: 1,
        orthogonalEdge: Se.l.North
      })), (this._southSash = new Se.g(this.domNode, {
        getHorizontalSashTop: () => this._size.height
      }, {
        orientation: 1,
        orthogonalEdge: Se.l.South
      })), (this._northSash.orthogonalStartSash = this._westSash), (this._northSash.orthogonalEndSash = this._eastSash), (this._southSash.orthogonalStartSash = this._westSash), (this._southSash.orthogonalEndSash = this._eastSash));
      let t = 0,
        i = 0;
      (this._sashListener.add(l.ju.any(this._northSash.onDidStart, this._eastSash.onDidStart, this._southSash.onDidStart, this._westSash.onDidStart)(() => {
        void 0 === e && (this._onDidWillResize.fire(), (e = this._size), (t = 0), (i = 0));
      })), this._sashListener.add(l.ju.any(this._northSash.onDidEnd, this._eastSash.onDidEnd, this._southSash.onDidEnd, this._westSash.onDidEnd)(() => {
        void 0 !== e && ((e = void 0), (t = 0), (i = 0), this._onDidResize.fire({
          dimension: this._size,
          done: !0
        }));
      })), this._sashListener.add(this._eastSash.onDidChange(n => {
        e && ((i = n.currentX - n.startX), this.layout(e.height + t, e.width + i), this._onDidResize.fire({
          dimension: this._size,
          done: !1,
          east: !0
        }));
      })), this._sashListener.add(this._westSash.onDidChange(n => {
        e && ((i = -(n.currentX - n.startX)), this.layout(e.height + t, e.width + i), this._onDidResize.fire({
          dimension: this._size,
          done: !1,
          west: !0
        }));
      })), this._sashListener.add(this._northSash.onDidChange(n => {
        e && ((t = -(n.currentY - n.startY)), this.layout(e.height + t, e.width + i), this._onDidResize.fire({
          dimension: this._size,
          done: !1,
          north: !0
        }));
      })), this._sashListener.add(this._southSash.onDidChange(n => {
        e && ((t = n.currentY - n.startY), this.layout(e.height + t, e.width + i), this._onDidResize.fire({
          dimension: this._size,
          done: !1,
          south: !0
        }));
      })), this._sashListener.add(l.ju.any(this._eastSash.onDidReset, this._westSash.onDidReset)(e => {
        this._preferredSize && (this.layout(this._size.height, this._preferredSize.width), this._onDidResize.fire({
          dimension: this._size,
          done: !0
        }));
      })), this._sashListener.add(l.ju.any(this._northSash.onDidReset, this._southSash.onDidReset)(e => {
        this._preferredSize && (this.layout(this._preferredSize.height, this._size.width), this._onDidResize.fire({
          dimension: this._size,
          done: !0
        }));
      })));
    }
    dispose() {
      (this._northSash.dispose(), this._southSash.dispose(), this._eastSash.dispose(), this._westSash.dispose(), this._sashListener.dispose(), this._onDidResize.dispose(), this._onDidWillResize.dispose(), this.domNode.remove());
    }
    enableSashes(e, t, i, n) {
      ((this._northSash.state = e ? 3 : 0), (this._eastSash.state = t ? 3 : 0), (this._southSash.state = i ? 3 : 0), (this._westSash.state = n ? 3 : 0));
    }
    layout(e = this.size.height, t = this.size.width) {
      const {
          height: i,
          width: n
        } = this._minSize,
        {
          height: o,
          width: s
        } = this._maxSize;
      ((e = Math.max(i, Math.min(o, e))), (t = Math.max(n, Math.min(s, t))));
      const r = new he.Ro(t, e);
      he.Ro.equals(r, this._size) || ((this.domNode.style.height = e + "px"), (this.domNode.style.width = t + "px"), (this._size = r), this._northSash.layout(), this._eastSash.layout(), this._southSash.layout(), this._westSash.layout());
    }
    clearSashHoverState() {
      (this._eastSash.clearSashHoverState(), this._westSash.clearSashHoverState(), this._northSash.clearSashHoverState(), this._southSash.clearSashHoverState());
    }
    get size() {
      return this._size;
    }
    set maxSize(e) {
      this._maxSize = e;
    }
    get maxSize() {
      return this._maxSize;
    }
    set minSize(e) {
      this._minSize = e;
    }
    get minSize() {
      return this._minSize;
    }
    set preferredSize(e) {
      this._preferredSize = e;
    }
    get preferredSize() {
      return this._preferredSize;
    }
  }
  var Le = i(16268),
    Ne = i(9802),
    De = i(73046),
    Ie = i(59365),
    Ee = i(43256),
    Te = i(64141),
    Me = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    Ae = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  function Oe(e) {
    return (!!e && Boolean(e.completion.documentation || (e.completion.detail && e.completion.detail !== e.completion.label)));
  }
  let Pe = class {
    constructor(e, t) {
      ((this._editor = e), (this._onDidClose = new l.Q5()), (this.onDidClose = this._onDidClose.event), (this._onDidChangeContents = new l.Q5()), (this.onDidChangeContents = this._onDidChangeContents.event), (this._disposables = new d.SL()), (this._renderDisposeable = new d.SL()), (this._borderWidth = 1), (this._size = new he.Ro(330, 0)), (this.domNode = he.$(".suggest-details")), this.domNode.classList.add("no-docs"), (this._markdownRenderer = t.createInstance(Ee.$, {
        editor: e
      })), (this._body = he.$(".body")), (this._scrollbar = new Ne.s$(this._body, {})), he.R3(this.domNode, this._scrollbar.getDomNode()), this._disposables.add(this._scrollbar), (this._header = he.R3(this._body, he.$(".header"))), (this._close = he.R3(this._header, he.$("span" + De.lA.close.cssSelector))), (this._close.title = B.N("details.close", "Close")), (this._type = he.R3(this._header, he.$("p.type"))), (this._docs = he.R3(this._body, he.$("p.docs"))), this._configureFont(), this._disposables.add(this._editor.onDidChangeConfiguration(e => {
        e.hasChanged(43) && this._configureFont();
      })));
    }
    dispose() {
      (this._disposables.dispose(), this._renderDisposeable.dispose());
    }
    _configureFont() {
      const e = this._editor.getOptions(),
        t = e.get(43),
        i = t.getMassagedFontFamily(Le.G6 ? Te.hL.fontFamily : null),
        n = e.get(106) || t.fontSize,
        o = e.get(107) || t.lineHeight,
        s = t.fontWeight,
        r = `${n}px`,
        a = `${o}px`;
      ((this.domNode.style.fontSize = r), (this.domNode.style.lineHeight = "" + o / n), (this.domNode.style.fontWeight = s), (this.domNode.style.fontFeatureSettings = t.fontFeatureSettings), (this._type.style.fontFamily = i), (this._close.style.height = a), (this._close.style.width = a));
    }
    getLayoutInfo() {
      const e = this._editor.getOption(107) || this._editor.getOption(43).lineHeight,
        t = this._borderWidth;
      return {
        lineHeight: e,
        borderWidth: t,
        borderHeight: 2 * t,
        verticalPadding: 22,
        horizontalPadding: 14
      };
    }
    renderLoading() {
      ((this._type.textContent = B.N("loading", "正在加载...")), (this._docs.textContent = ""), this.domNode.classList.remove("no-docs", "no-type"), this.layout(this.size.width, 2 * this.getLayoutInfo().lineHeight), this._onDidChangeContents.fire(this));
    }
    renderItem(e, t) {
      var i, n;
      this._renderDisposeable.clear();
      let {
        detail: o,
        documentation: s
      } = e.completion;
      if (t) {
        let t = "";
        ((t += `score: ${e.score[0]}\n`), (t += `prefix: ${null !== (i = e.word) && void 0 !== i ? i : "(no prefix)"}\n`), (t += `word: ${e.completion.filterText ? e.completion.filterText + " (filterText)" : e.textLabel}\n`), (t += `distance: ${e.distance} (localityBonus-setting)\n`), (t += `index: ${e.idx}, based on ${(e.completion.sortText && `sortText: "${e.completion.sortText}"`) || "label"}\n`), (t += `commit_chars: ${null === (n = e.completion.commitCharacters) || void 0 === n ? void 0 : n.join("")}\n`), (s = new Ie.W5().appendCodeblock("empty", t)), (o = `Provider: ${e.provider._debugDisplayName}`));
      }
      if (t || Oe(e)) {
        if ((this.domNode.classList.remove("no-docs", "no-type"), o)) {
          const e = o.length > 1e5 ? `${o.substr(0, 1e5)}…` : o;
          ((this._type.textContent = e), (this._type.title = e), he.$Z(this._type), this._type.classList.toggle("auto-wrap", !/\r?\n^\s+/gim.test(e)));
        } else (he.PO(this._type), (this._type.title = ""), he.Cp(this._type), this.domNode.classList.add("no-type"));
        if ((he.PO(this._docs), "string" == typeof s)) (this._docs.classList.remove("markdown-docs"), (this._docs.textContent = s));else if (s) {
          (this._docs.classList.add("markdown-docs"), he.PO(this._docs));
          const e = this._markdownRenderer.render(s);
          (this._docs.appendChild(e.element), this._renderDisposeable.add(e), this._renderDisposeable.add(this._markdownRenderer.onDidRenderAsync(() => {
            (this.layout(this._size.width, this._type.clientHeight + this._docs.clientHeight), this._onDidChangeContents.fire(this));
          })));
        }
        ((this.domNode.style.userSelect = "text"), (this.domNode.tabIndex = -1), (this._close.onmousedown = e => {
          (e.preventDefault(), e.stopPropagation());
        }), (this._close.onclick = e => {
          (e.preventDefault(), e.stopPropagation(), this._onDidClose.fire());
        }), (this._body.scrollTop = 0), this.layout(this._size.width, this._type.clientHeight + this._docs.clientHeight), this._onDidChangeContents.fire(this));
      } else this.clearContents();
    }
    clearContents() {
      (this.domNode.classList.add("no-docs"), (this._type.textContent = ""), (this._docs.textContent = ""));
    }
    get size() {
      return this._size;
    }
    layout(e, t) {
      const i = new he.Ro(e, t);
      (he.Ro.equals(i, this._size) || ((this._size = i), he.dp(this.domNode, e, t)), this._scrollbar.scanDomNode());
    }
    scrollDown(e = 8) {
      this._body.scrollTop += e;
    }
    scrollUp(e = 8) {
      this._body.scrollTop -= e;
    }
    scrollTop() {
      this._body.scrollTop = 0;
    }
    scrollBottom() {
      this._body.scrollTop = this._body.scrollHeight;
    }
    pageDown() {
      this.scrollDown(80);
    }
    pageUp() {
      this.scrollUp(80);
    }
    set borderWidth(e) {
      this._borderWidth = e;
    }
    get borderWidth() {
      return this._borderWidth;
    }
  };
  Pe = Me([Ae(1, L.TG)], Pe);
  class Re {
    constructor(e, t) {
      let i, n;
      ((this.widget = e), (this._editor = t), (this._disposables = new d.SL()), (this._added = !1), (this._resizable = new ke()), this._resizable.domNode.classList.add("suggest-details-container"), this._resizable.domNode.appendChild(e.domNode), this._resizable.enableSashes(!1, !0, !0, !1));
      let o = 0,
        s = 0;
      (this._disposables.add(this._resizable.onDidWillResize(() => {
        ((i = this._topLeft), (n = this._resizable.size));
      })), this._disposables.add(this._resizable.onDidResize(e => {
        if (i && n) {
          this.widget.layout(e.dimension.width, e.dimension.height);
          let t = !1;
          (e.west && ((s = n.width - e.dimension.width), (t = !0)), e.north && ((o = n.height - e.dimension.height), (t = !0)), t && this._applyTopLeft({
            top: i.top + o,
            left: i.left + s
          }));
        }
        e.done && ((i = void 0), (n = void 0), (o = 0), (s = 0), (this._userSize = e.dimension));
      })), this._disposables.add(this.widget.onDidChangeContents(() => {
        var e;
        this._anchorBox && this._placeAtAnchor(this._anchorBox, null !== (e = this._userSize) && void 0 !== e ? e : this.widget.size);
      })));
    }
    dispose() {
      (this._resizable.dispose(), this._disposables.dispose(), this.hide());
    }
    getId() {
      return "suggest.details";
    }
    getDomNode() {
      return this._resizable.domNode;
    }
    getPosition() {
      return null;
    }
    show() {
      this._added || (this._editor.addOverlayWidget(this), (this.getDomNode().style.position = "fixed"), (this._added = !0));
    }
    hide(e = !1) {
      (this._resizable.clearSashHoverState(), this._added && (this._editor.removeOverlayWidget(this), (this._added = !1), (this._anchorBox = void 0), (this._topLeft = void 0)), e && ((this._userSize = void 0), this.widget.clearContents()));
    }
    placeAtAnchor(e) {
      var t;
      const i = he.i(e);
      ((this._anchorBox = i), this._placeAtAnchor(this._anchorBox, null !== (t = this._userSize) && void 0 !== t ? t : this.widget.size));
    }
    _placeAtAnchor(e, t) {
      var i;
      const n = he.D6(document.body),
        o = this.widget.getLayoutInfo(),
        s = new he.Ro(220, 2 * o.lineHeight),
        r = e.top,
        a = (function () {
          const i = n.width - (e.left + e.width + o.borderWidth + o.horizontalPadding),
            a = -o.borderWidth + e.left + e.width,
            l = new he.Ro(i, n.height - e.top - o.borderHeight - o.verticalPadding),
            c = l.with(void 0, e.top + e.height - o.borderHeight - o.verticalPadding);
          return {
            top: r,
            left: a,
            fit: i - t.width,
            maxSizeTop: l,
            maxSizeBottom: c,
            minSize: s.with(Math.min(i, s.width))
          };
        })(),
        l = [a, (function () {
          const i = e.left - o.borderWidth - o.horizontalPadding,
            a = Math.max(o.horizontalPadding, e.left - t.width - o.borderWidth),
            l = new he.Ro(i, n.height - e.top - o.borderHeight - o.verticalPadding),
            c = l.with(void 0, e.top + e.height - o.borderHeight - o.verticalPadding);
          return {
            top: r,
            left: a,
            fit: i - t.width,
            maxSizeTop: l,
            maxSizeBottom: c,
            minSize: s.with(Math.min(i, s.width))
          };
        })(), (function () {
          const i = e.left,
            r = -o.borderWidth + e.top + e.height,
            a = new he.Ro(e.width - o.borderHeight, n.height - e.top - e.height - o.verticalPadding);
          return {
            top: r,
            left: i,
            fit: a.height - t.height,
            maxSizeBottom: a,
            maxSizeTop: a,
            minSize: s.with(a.width)
          };
        })()],
        c = null !== (i = l.find(e => e.fit >= 0)) && void 0 !== i ? i : l.sort((e, t) => t.fit - e.fit)[0],
        d = e.top + e.height - o.borderHeight;
      let h,
        u = t.height;
      const g = Math.max(c.maxSizeTop.height, c.maxSizeBottom.height);
      let p;
      (u > g && (u = g), u <= c.maxSizeTop.height ? ((h = !0), (p = c.maxSizeTop)) : ((h = !1), (p = c.maxSizeBottom)), this._applyTopLeft({
        left: c.left,
        top: h ? c.top : d - u
      }), (this.getDomNode().style.position = "fixed"), this._resizable.enableSashes(!h, c === a, h, c !== a), (this._resizable.minSize = c.minSize), (this._resizable.maxSize = p), this._resizable.layout(u, Math.min(p.width, t.width)), this.widget.layout(this._resizable.size.width, this._resizable.size.height));
    }
    _applyTopLeft(e) {
      ((this._topLeft = e), (this.getDomNode().style.left = `${this._topLeft.left}px`), (this.getDomNode().style.top = `${this._topLeft.top}px`));
    }
  }
  var Fe,
    Be = i(48801),
    Ve = i(70666),
    We = i(66663),
    He = i(95935),
    ze = i(71144);
  function je(e, t, i, n) {
    const o = n === Fe.ROOT_FOLDER ? ["rootfolder-icon"] : n === Fe.FOLDER ? ["folder-icon"] : ["file-icon"];
    if (i) {
      let s;
      if (i.scheme === We.lg.data) {
        s = He.Vb.parseMetaData(i).get(He.Vb.META_DATA_LABEL);
      } else s = Ue((0, He.Hx)(i).toLowerCase());
      if (n === Fe.FOLDER) o.push(`${s}-name-folder-icon`);else {
        if (s) {
          if ((o.push(`${s}-name-file-icon`), s.length <= 255)) {
            const e = s.split(".");
            for (let t = 1; t < e.length; t++) o.push(`${e.slice(t).join(".")}-ext-file-icon`);
          }
          o.push("ext-file-icon");
        }
        const n = (function (e, t, i) {
          if (!i) return null;
          let n = null;
          if (i.scheme === We.lg.data) {
            const e = He.Vb.parseMetaData(i).get(He.Vb.META_DATA_MIME);
            e && (n = t.getModeId(e));
          } else {
            const t = e.getModel(i);
            t && (n = t.getLanguageId());
          }
          if (n && n !== ze.XT) return n;
          return t.getModeIdByFilepathOrFirstLine(i);
        })(e, t, i);
        n && o.push(`${Ue(n)}-lang-file-icon`);
      }
    }
    return o;
  }
  function Ue(e) {
    return e.replace(/[\11\12\14\15\40]/g, "/");
  }
  !(function (e) {
    ((e[(e.FILE = 0)] = "FILE"), (e[(e.FOLDER = 1)] = "FOLDER"), (e[(e.ROOT_FOLDER = 2)] = "ROOT_FOLDER"));
  })(Fe || (Fe = {}));
  var $e,
    Ke = i(51200),
    qe = i(71531),
    Ze = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    Ge = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  function Ye(e) {
    return `suggest-aria-id:${e}`;
  }
  const Qe = (0, i(59554).q5)("suggest-more-info", De.lA.chevronRight, B.N("suggestMoreInfoIcon", "Icon for more information in the suggest widget.")),
    Xe = new ((($e = class e {
      extract(t, i) {
        if (t.textLabel.match(e._regexStrict)) return ((i[0] = t.textLabel), !0);
        if (t.completion.detail && t.completion.detail.match(e._regexStrict)) return ((i[0] = t.completion.detail), !0);
        if ("string" == typeof t.completion.documentation) {
          const n = e._regexRelaxed.exec(t.completion.documentation);
          if (n && (0 === n.index || n.index + n[0].length === t.completion.documentation.length)) return ((i[0] = n[0]), !0);
        }
        return !1;
      }
    })._regexRelaxed = /(#([\da-fA-F]{3}){1,2}|(rgb|hsl)a\(\s*(\d{1,3}%?\s*,\s*){3}(1|0?\.\d+)\)|(rgb|hsl)\(\s*\d{1,3}%?(\s*,\s*\d{1,3}%?){2}\s*\))/), ($e._regexStrict = new RegExp(`^${$e._regexRelaxed.source}$`, "i")), $e)();
  let Je = class {
    constructor(e, t, i, n) {
      ((this._editor = e), (this._modelService = t), (this._modeService = i), (this._themeService = n), (this._onDidToggleDetails = new l.Q5()), (this.onDidToggleDetails = this._onDidToggleDetails.event), (this.templateId = "suggestion"));
    }
    dispose() {
      this._onDidToggleDetails.dispose();
    }
    renderTemplate(e) {
      const t = Object.create(null);
      ((t.disposables = new d.SL()), (t.root = e), t.root.classList.add("show-file-icons"), (t.icon = (0, he.R3)(e, (0, he.$)(".icon"))), (t.colorspan = (0, he.R3)(t.icon, (0, he.$)("span.colorspan"))));
      const i = (0, he.R3)(e, (0, he.$)(".contents")),
        n = (0, he.R3)(i, (0, he.$)(".main"));
      ((t.iconContainer = (0, he.R3)(n, (0, he.$)(".icon-label.codicon"))), (t.left = (0, he.R3)(n, (0, he.$)("span.left"))), (t.right = (0, he.R3)(n, (0, he.$)("span.right"))), (t.iconLabel = new Be.g(t.left, {
        supportHighlights: !0,
        supportIcons: !0
      })), t.disposables.add(t.iconLabel), (t.parametersLabel = (0, he.R3)(t.left, (0, he.$)("span.signature-label"))), (t.qualifierLabel = (0, he.R3)(t.left, (0, he.$)("span.qualifier-label"))), (t.detailsLabel = (0, he.R3)(t.right, (0, he.$)("span.details-label"))), (t.readMore = (0, he.R3)(t.right, (0, he.$)("span.readMore" + xe.kS.asCSSSelector(Qe)))), (t.readMore.title = B.N("readMore", "Read More")));
      const o = () => {
        const e = this._editor.getOptions(),
          i = e.get(43),
          o = i.getMassagedFontFamily(Le.G6 ? Te.hL.fontFamily : null),
          s = i.fontFeatureSettings,
          r = e.get(106) || i.fontSize,
          a = e.get(107) || i.lineHeight,
          l = i.fontWeight,
          c = `${r}px`,
          d = `${a}px`;
        ((t.root.style.fontSize = c), (t.root.style.fontWeight = l), (n.style.fontFamily = o), (n.style.fontFeatureSettings = s), (n.style.lineHeight = d), (t.icon.style.height = d), (t.icon.style.width = d), (t.readMore.style.height = d), (t.readMore.style.width = d));
      };
      return (o(), t.disposables.add(this._editor.onDidChangeConfiguration(e => {
        (e.hasChanged(43) || e.hasChanged(106) || e.hasChanged(107)) && o();
      })), t);
    }
    renderElement(e, t, i) {
      const {
        completion: n
      } = e;
      ((i.root.id = Ye(t)), (i.colorspan.style.backgroundColor = ""));
      const s = {
        labelEscapeNewLines: !0,
        matches: (0, ne.mB)(e.score)
      };
      let r = [];
      if (19 === n.kind && Xe.extract(e, r)) ((i.icon.className = "icon customcolor"), (i.iconContainer.className = "icon hide"), (i.colorspan.style.backgroundColor = r[0]));else if (20 === n.kind && this._themeService.getFileIconTheme().hasFileIcons) {
        ((i.icon.className = "icon hide"), (i.iconContainer.className = "icon hide"));
        const t = je(this._modelService, this._modeService, Ve.o.from({
            scheme: "fake",
            path: e.textLabel
          }), Fe.FILE),
          o = je(this._modelService, this._modeService, Ve.o.from({
            scheme: "fake",
            path: n.detail
          }), Fe.FILE);
        s.extraClasses = t.length > o.length ? t : o;
      } else 23 === n.kind && this._themeService.getFileIconTheme().hasFolderIcons ? ((i.icon.className = "icon hide"), (i.iconContainer.className = "icon hide"), (s.extraClasses = (0, o.xH)([je(this._modelService, this._modeService, Ve.o.from({
        scheme: "fake",
        path: e.textLabel
      }), Fe.FOLDER), je(this._modelService, this._modeService, Ve.o.from({
        scheme: "fake",
        path: n.detail
      }), Fe.FOLDER)]))) : ((i.icon.className = "icon hide"), (i.iconContainer.className = ""), i.iconContainer.classList.add("suggest-icon", ...(0, x.Sy)(n.kind).split(" ")));
      (n.tags && n.tags.indexOf(1) >= 0 && ((s.extraClasses = (s.extraClasses || []).concat(["deprecated"])), (s.matches = [])), i.iconLabel.setLabel(e.textLabel, void 0, s), "string" == typeof n.label ? ((i.parametersLabel.textContent = ""), (i.detailsLabel.textContent = et(n.detail || "")), i.root.classList.add("string-label")) : ((i.parametersLabel.textContent = et(n.label.detail || "")), (i.detailsLabel.textContent = et(n.label.description || "")), i.root.classList.remove("string-label")), this._editor.getOption(105).showInlineDetails ? (0, he.$Z)(i.detailsLabel) : (0, he.Cp)(i.detailsLabel), Oe(e) ? (i.right.classList.add("can-expand-details"), (0, he.$Z)(i.readMore), (i.readMore.onmousedown = e => {
        (e.stopPropagation(), e.preventDefault());
      }), (i.readMore.onclick = e => {
        (e.stopPropagation(), e.preventDefault(), this._onDidToggleDetails.fire());
      })) : (i.right.classList.remove("can-expand-details"), (0, he.Cp)(i.readMore), (i.readMore.onmousedown = null), (i.readMore.onclick = null)));
    }
    disposeTemplate(e) {
      e.disposables.dispose();
    }
  };
  function et(e) {
    return e.replace(/\r\n|\r|\n/g, "");
  }
  Je = Ze([Ge(1, Ke.q), Ge(2, qe.h), Ge(3, xe.XE)], Je);
  var tt = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    it = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    nt = function (e, t, i, n) {
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
  const ot = (0, ye.P6)("editorSuggestWidget.background", {
      dark: ye.D0,
      light: ye.D0,
      hc: ye.D0
    }, B.N("editorSuggestWidgetBackground", "Background color of the suggest widget.")),
    st = (0, ye.P6)("editorSuggestWidget.border", {
      dark: ye.D1,
      light: ye.D1,
      hc: ye.D1
    }, B.N("editorSuggestWidgetBorder", "Border color of the suggest widget.")),
    rt = (0, ye.P6)("editorSuggestWidget.foreground", {
      dark: ye.NO,
      light: ye.NO,
      hc: ye.NO
    }, B.N("editorSuggestWidgetForeground", "Foreground color of the suggest widget.")),
    at = (0, ye.P6)("editorSuggestWidget.selectedForeground", {
      dark: ye.NP,
      light: ye.NP,
      hc: ye.NP
    }, B.N("editorSuggestWidgetSelectedForeground", "Foreground color of the selected entry in the suggest widget.")),
    lt = (0, ye.P6)("editorSuggestWidget.selectedIconForeground", {
      dark: ye.cb,
      light: ye.cb,
      hc: ye.cb
    }, B.N("editorSuggestWidgetSelectedIconForeground", "Icon foreground color of the selected entry in the suggest widget.")),
    ct = (0, ye.P6)("editorSuggestWidget.selectedBackground", {
      dark: ye.Vq,
      light: ye.Vq,
      hc: ye.Vq
    }, B.N("editorSuggestWidgetSelectedBackground", "Background color of the selected entry in the suggest widget.")),
    dt = (0, ye.P6)("editorSuggestWidget.highlightForeground", {
      dark: ye.Gw,
      light: ye.Gw,
      hc: ye.Gw
    }, B.N("editorSuggestWidgetHighlightForeground", "Color of the match highlights in the suggest widget.")),
    ht = (0, ye.P6)("editorSuggestWidget.focusHighlightForeground", {
      dark: ye.PX,
      light: ye.PX,
      hc: ye.PX
    }, B.N("editorSuggestWidgetFocusHighlightForeground", "Color of the match highlights in the suggest widget when an item is focused."));
  class ut {
    constructor(e, t) {
      ((this._service = e), (this._key = `suggestWidget.size/${t.getEditorType()}/${t instanceof pe.H}`));
    }
    restore() {
      var e;
      const t = null !== (e = this._service.get(this._key, 0)) && void 0 !== e ? e : "";
      try {
        const e = JSON.parse(t);
        if (he.Ro.is(e)) return he.Ro.lift(e);
      } catch (e) {}
    }
    store(e) {
      this._service.store(this._key, JSON.stringify(e), 0, 1);
    }
    reset() {
      this._service.remove(this._key, 0);
    }
  }
  let gt = class e {
    constructor(e, t, i, n, o) {
      ((this.editor = e), (this._storageService = t), (this._state = 0), (this._isAuto = !1), (this._ignoreFocusEvents = !1), (this._forceRenderingAbove = !1), (this._explainMode = !1), (this._showTimeout = new s._F()), (this._disposables = new d.SL()), (this._onDidSelect = new l.Q5()), (this._onDidFocus = new l.Q5()), (this._onDidHide = new l.Q5()), (this._onDidShow = new l.Q5()), (this.onDidSelect = this._onDidSelect.event), (this.onDidFocus = this._onDidFocus.event), (this.onDidHide = this._onDidHide.event), (this.onDidShow = this._onDidShow.event), (this._onDetailsKeydown = new l.Q5()), (this.onDetailsKeyDown = this._onDetailsKeydown.event), (this.element = new ke()), this.element.domNode.classList.add("editor-widget", "suggest-widget"), (this._contentWidget = new pt(this, e)), (this._persistedSize = new ut(t, e)));
      class r {
        constructor(e, t, i = !1, n = !1) {
          ((this.persistedSize = e), (this.currentSize = t), (this.persistHeight = i), (this.persistWidth = n));
        }
      }
      let a;
      (this._disposables.add(this.element.onDidWillResize(() => {
        (this._contentWidget.lockPreference(), (a = new r(this._persistedSize.restore(), this.element.size)));
      })), this._disposables.add(this.element.onDidResize(e => {
        var t, i, n, o;
        if ((this._resize(e.dimension.width, e.dimension.height), a && ((a.persistHeight = a.persistHeight || !!e.north || !!e.south), (a.persistWidth = a.persistWidth || !!e.east || !!e.west)), e.done)) {
          if (a) {
            const {
                itemHeight: e,
                defaultSize: s
              } = this.getLayoutInfo(),
              r = Math.round(e / 2);
            let {
              width: l,
              height: c
            } = this.element.size;
            ((!a.persistHeight || Math.abs(a.currentSize.height - c) <= r) && (c = null !== (i = null === (t = a.persistedSize) || void 0 === t ? void 0 : t.height) && void 0 !== i ? i : s.height), (!a.persistWidth || Math.abs(a.currentSize.width - l) <= r) && (l = null !== (o = null === (n = a.persistedSize) || void 0 === n ? void 0 : n.width) && void 0 !== o ? o : s.width), this._persistedSize.store(new he.Ro(l, c)));
          }
          (this._contentWidget.unlockPreference(), (a = void 0));
        }
      })), (this._messageElement = he.R3(this.element.domNode, he.$(".message"))), (this._listElement = he.R3(this.element.domNode, he.$(".tree"))));
      const c = o.createInstance(Pe, this.editor);
      (c.onDidClose(this.toggleDetails, this, this._disposables), (this._details = new Re(c, this.editor)));
      const h = () => this.element.domNode.classList.toggle("no-icons", !this.editor.getOption(105).showIcons);
      h();
      const u = o.createInstance(Je, this.editor);
      (this._disposables.add(u), this._disposables.add(u.onDidToggleDetails(() => this.toggleDetails())), (this._list = new ue.aV("SuggestWidget", this._listElement, {
        getHeight: e => this.getLayoutInfo().itemHeight,
        getTemplateId: e => "suggestion"
      }, [u], {
        alwaysConsumeMouseWheel: !0,
        useShadows: !1,
        mouseSupport: !1,
        accessibilityProvider: {
          getRole: () => "option",
          getAriaLabel: e => {
            if (e.isResolved && this._isDetailsVisible()) {
              const {
                  documentation: t,
                  detail: i
                } = e.completion,
                n = G.WU("{0}{1}", i || "", t ? ("string" == typeof t ? t : t.value) : "");
              return B.N("ariaCurrenttSuggestionReadDetails", "{0}, docs: {1}", e.textLabel, n);
            }
            return e.textLabel;
          },
          getWidgetAriaLabel: () => B.N("suggest", "Suggest"),
          getWidgetRole: () => "listbox"
        }
      })), (this._status = o.createInstance(we, this.element.domNode)));
      const g = () => this.element.domNode.classList.toggle("with-status-bar", this.editor.getOption(105).showStatusBar);
      (g(), this._disposables.add((0, Ce.Jl)(this._list, n, {
        listInactiveFocusBackground: ct,
        listInactiveFocusOutline: ye.xL
      })), this._disposables.add(n.onDidColorThemeChange(e => this._onThemeChange(e))), this._onThemeChange(n.getColorTheme()), this._disposables.add(this._list.onMouseDown(e => this._onListMouseDownOrTap(e))), this._disposables.add(this._list.onTap(e => this._onListMouseDownOrTap(e))), this._disposables.add(this._list.onDidChangeSelection(e => this._onListSelection(e))), this._disposables.add(this._list.onDidChangeFocus(e => this._onListFocus(e))), this._disposables.add(this.editor.onDidChangeCursorSelection(() => this._onCursorSelectionChanged())), this._disposables.add(this.editor.onDidChangeConfiguration(e => {
        e.hasChanged(105) && (g(), h());
      })), (this._ctxSuggestWidgetVisible = j._y.Visible.bindTo(i)), (this._ctxSuggestWidgetDetailsVisible = j._y.DetailsVisible.bindTo(i)), (this._ctxSuggestWidgetMultipleSuggestions = j._y.MultipleSuggestions.bindTo(i)), this._disposables.add(he.mu(this._details.widget.domNode, "keydown", e => {
        this._onDetailsKeydown.fire(e);
      })), this._disposables.add(this.editor.onMouseDown(e => this._onEditorMouseDown(e))));
    }
    dispose() {
      var e;
      (this._details.widget.dispose(), this._details.dispose(), this._list.dispose(), this._status.dispose(), this._disposables.dispose(), null === (e = this._loadingTimeout) || void 0 === e || e.dispose(), this._showTimeout.dispose(), this._contentWidget.dispose(), this.element.dispose());
    }
    _onEditorMouseDown(e) {
      this._details.widget.domNode.contains(e.target.element) ? this._details.widget.domNode.focus() : this.element.domNode.contains(e.target.element) && this.editor.focus();
    }
    _onCursorSelectionChanged() {
      0 !== this._state && this._contentWidget.layout();
    }
    _onListMouseDownOrTap(e) {
      void 0 !== e.element && void 0 !== e.index && (e.browserEvent.preventDefault(), e.browserEvent.stopPropagation(), this._select(e.element, e.index));
    }
    _onListSelection(e) {
      e.elements.length && this._select(e.elements[0], e.indexes[0]);
    }
    _select(e, t) {
      const i = this._completionModel;
      i && (this._onDidSelect.fire({
        item: e,
        index: t,
        model: i
      }), this.editor.focus());
    }
    _onThemeChange(e) {
      const t = e.getColor(ot);
      t && ((this.element.domNode.style.backgroundColor = t.toString()), (this._messageElement.style.backgroundColor = t.toString()), (this._details.widget.domNode.style.backgroundColor = t.toString()));
      const i = e.getColor(st);
      i && ((this.element.domNode.style.borderColor = i.toString()), (this._messageElement.style.borderColor = i.toString()), (this._status.element.style.borderTopColor = i.toString()), (this._details.widget.domNode.style.borderColor = i.toString()), (this._detailsBorderColor = i.toString()));
      const n = e.getColor(ye.R8);
      (n && (this._detailsFocusBorderColor = n.toString()), (this._details.widget.borderWidth = "hc" === e.type ? 2 : 1));
    }
    _onListFocus(e) {
      var t;
      if (this._ignoreFocusEvents) return;
      if (!e.elements.length) return (this._currentSuggestionDetails && (this._currentSuggestionDetails.cancel(), (this._currentSuggestionDetails = void 0), (this._focusedItem = void 0)), void this.editor.setAriaOptions({
        activeDescendant: void 0
      }));
      if (!this._completionModel) return;
      const i = e.elements[0],
        n = e.indexes[0];
      (i !== this._focusedItem && (null === (t = this._currentSuggestionDetails) || void 0 === t || t.cancel(), (this._currentSuggestionDetails = void 0), (this._focusedItem = i), this._list.reveal(n), (this._currentSuggestionDetails = (0, s.PG)(e => nt(this, void 0, void 0, function* () {
        const t = (0, s.Vg)(() => {
          this._isDetailsVisible() && this.showDetails(!0);
        }, 250);
        e.onCancellationRequested(() => t.dispose());
        const n = yield i.resolve(e);
        return (t.dispose(), n);
      }))), this._currentSuggestionDetails.then(() => {
        n >= this._list.length || i !== this._list.element(n) || ((this._ignoreFocusEvents = !0), this._list.splice(n, 1, [i]), this._list.setFocus([n]), (this._ignoreFocusEvents = !1), this._isDetailsVisible() ? this.showDetails(!1) : this.element.domNode.classList.remove("docs-side"), this.editor.setAriaOptions({
          activeDescendant: Ye(n)
        }));
      }).catch(a.dL)), this._onDidFocus.fire({
        item: i,
        index: n,
        model: this._completionModel
      }));
    }
    _setState(t) {
      if (this._state !== t) switch (((this._state = t), this.element.domNode.classList.toggle("frozen", 4 === t), this.element.domNode.classList.remove("message"), t)) {
        case 0:
          (he.Cp(this._messageElement, this._listElement, this._status.element), this._details.hide(!0), this._status.hide(), this._contentWidget.hide(), this._ctxSuggestWidgetVisible.reset(), this._ctxSuggestWidgetMultipleSuggestions.reset(), this._showTimeout.cancel(), this.element.domNode.classList.remove("visible"), this._list.splice(0, this._list.length), (this._focusedItem = void 0), (this._cappedHeight = void 0), (this._explainMode = !1));
          break;
        case 1:
          (this.element.domNode.classList.add("message"), (this._messageElement.textContent = e.LOADING_MESSAGE), he.Cp(this._listElement, this._status.element), he.$Z(this._messageElement), this._details.hide(), this._show(), (this._focusedItem = void 0));
          break;
        case 2:
          (this.element.domNode.classList.add("message"), (this._messageElement.textContent = e.NO_SUGGESTIONS_MESSAGE), he.Cp(this._listElement, this._status.element), he.$Z(this._messageElement), this._details.hide(), this._show(), (this._focusedItem = void 0));
          break;
        case 3:
        case 4:
          (he.Cp(this._messageElement), he.$Z(this._listElement, this._status.element), this._show());
          break;
        case 5:
          (he.Cp(this._messageElement), he.$Z(this._listElement, this._status.element), this._details.show(), this._show());
      }
    }
    _show() {
      (this._status.show(), this._contentWidget.show(), this._layout(this._persistedSize.restore()), this._ctxSuggestWidgetVisible.set(!0), this._showTimeout.cancelAndSet(() => {
        (this.element.domNode.classList.add("visible"), this._onDidShow.fire(this));
      }, 100));
    }
    showTriggered(e, t) {
      0 === this._state && (this._contentWidget.setPosition(this.editor.getPosition()), (this._isAuto = !!e), this._isAuto || (this._loadingTimeout = (0, s.Vg)(() => this._setState(1), t)));
    }
    showSuggestions(e, t, i, n) {
      var o, s;
      if ((this._contentWidget.setPosition(this.editor.getPosition()), null === (o = this._loadingTimeout) || void 0 === o || o.dispose(), null === (s = this._currentSuggestionDetails) || void 0 === s || s.cancel(), (this._currentSuggestionDetails = void 0), this._completionModel !== e && (this._completionModel = e), i && 2 !== this._state && 0 !== this._state)) return void this._setState(4);
      const r = this._completionModel.items.length,
        a = 0 === r;
      if ((this._ctxSuggestWidgetMultipleSuggestions.set(r > 1), a)) return (this._setState(n ? 0 : 2), void (this._completionModel = void 0));
      ((this._focusedItem = void 0), this._list.splice(0, this._list.length, this._completionModel.items), this._setState(i ? 4 : 3), this._list.reveal(t, 0), this._list.setFocus([t]), this._layout(this.element.size), this._detailsBorderColor && (this._details.widget.domNode.style.borderColor = this._detailsBorderColor));
    }
    selectNextPage() {
      switch (this._state) {
        case 0:
          return !1;
        case 5:
          return (this._details.widget.pageDown(), !0);
        case 1:
          return !this._isAuto;
        default:
          return (this._list.focusNextPage(), !0);
      }
    }
    selectNext() {
      switch (this._state) {
        case 0:
          return !1;
        case 1:
          return !this._isAuto;
        default:
          return (this._list.focusNext(1, !0), !0);
      }
    }
    selectLast() {
      switch (this._state) {
        case 0:
          return !1;
        case 5:
          return (this._details.widget.scrollBottom(), !0);
        case 1:
          return !this._isAuto;
        default:
          return (this._list.focusLast(), !0);
      }
    }
    selectPreviousPage() {
      switch (this._state) {
        case 0:
          return !1;
        case 5:
          return (this._details.widget.pageUp(), !0);
        case 1:
          return !this._isAuto;
        default:
          return (this._list.focusPreviousPage(), !0);
      }
    }
    selectPrevious() {
      switch (this._state) {
        case 0:
          return !1;
        case 1:
          return !this._isAuto;
        default:
          return (this._list.focusPrevious(1, !0), !1);
      }
    }
    selectFirst() {
      switch (this._state) {
        case 0:
          return !1;
        case 5:
          return (this._details.widget.scrollTop(), !0);
        case 1:
          return !this._isAuto;
        default:
          return (this._list.focusFirst(), !0);
      }
    }
    getFocusedItem() {
      if (0 !== this._state && 2 !== this._state && 1 !== this._state && this._completionModel) return {
        item: this._list.getFocusedElements()[0],
        index: this._list.getFocus()[0],
        model: this._completionModel
      };
    }
    toggleDetailsFocus() {
      5 === this._state ? (this._setState(3), this._detailsBorderColor && (this._details.widget.domNode.style.borderColor = this._detailsBorderColor)) : 3 === this._state && this._isDetailsVisible() && (this._setState(5), this._detailsFocusBorderColor && (this._details.widget.domNode.style.borderColor = this._detailsFocusBorderColor));
    }
    toggleDetails() {
      this._isDetailsVisible() ? (this._ctxSuggestWidgetDetailsVisible.set(!1), this._setDetailsVisible(!1), this._details.hide(), this.element.domNode.classList.remove("shows-details")) : (!Oe(this._list.getFocusedElements()[0]) && !this._explainMode) || (3 !== this._state && 5 !== this._state && 4 !== this._state) || (this._ctxSuggestWidgetDetailsVisible.set(!0), this._setDetailsVisible(!0), this.showDetails(!1));
    }
    showDetails(e) {
      (this._details.show(), e ? this._details.widget.renderLoading() : this._details.widget.renderItem(this._list.getFocusedElements()[0], this._explainMode), this._positionDetails(), this.editor.focus(), this.element.domNode.classList.add("shows-details"));
    }
    toggleExplainMode() {
      this._list.getFocusedElements()[0] && ((this._explainMode = !this._explainMode), this._isDetailsVisible() ? this.showDetails(!1) : this.toggleDetails());
    }
    resetPersistedSize() {
      this._persistedSize.reset();
    }
    hideWidget() {
      var e;
      (null === (e = this._loadingTimeout) || void 0 === e || e.dispose(), this._setState(0), this._onDidHide.fire(this), this.element.clearSashHoverState());
      const t = this._persistedSize.restore(),
        i = Math.ceil(4.3 * this.getLayoutInfo().itemHeight);
      t && t.height < i && this._persistedSize.store(t.with(void 0, i));
    }
    isFrozen() {
      return 4 === this._state;
    }
    _afterRender(e) {
      null !== e ? 2 !== this._state && 1 !== this._state && (this._isDetailsVisible() && this._details.show(), this._positionDetails()) : this._isDetailsVisible() && this._details.hide();
    }
    _layout(e) {
      var t, i, n;
      if (!this.editor.hasModel()) return;
      if (!this.editor.getDomNode()) return;
      const o = he.D6(document.body),
        s = this.getLayoutInfo();
      e || (e = s.defaultSize);
      let r = e.height,
        a = e.width;
      if (((this._status.element.style.lineHeight = `${s.itemHeight}px`), 2 === this._state || 1 === this._state)) ((r = s.itemHeight + s.borderHeight), (a = s.defaultSize.width / 2), this.element.enableSashes(!1, !1, !1, !1), (this.element.minSize = this.element.maxSize = new he.Ro(a, r)), this._contentWidget.setPreference(2));else {
        const l = o.width - s.borderHeight - 2 * s.horizontalPadding;
        a > l && (a = l);
        const c = this._completionModel ? this._completionModel.stats.pLabelLen * s.typicalHalfwidthCharacterWidth : a,
          d = s.statusBarHeight + this._list.contentHeight + s.borderHeight,
          h = s.itemHeight + s.statusBarHeight,
          u = he.i(this.editor.getDomNode()),
          g = this.editor.getScrolledVisiblePosition(this.editor.getPosition()),
          p = u.top + g.top + g.height,
          f = Math.min(o.height - p - s.verticalPadding, d),
          m = u.top + g.top - s.verticalPadding,
          v = Math.min(m, d);
        let _ = Math.min(Math.max(v, f) + s.borderHeight, d);
        (r === (null === (t = this._cappedHeight) || void 0 === t ? void 0 : t.capped) && (r = this._cappedHeight.wanted), r < h && (r = h), r > _ && (r = _));
        const b = 150;
        (r > f || (this._forceRenderingAbove && m > b) ? (this._contentWidget.setPreference(1), this.element.enableSashes(!0, !0, !1, !1), (_ = v)) : (this._contentWidget.setPreference(2), this.element.enableSashes(!1, !0, !0, !1), (_ = f)), (this.element.preferredSize = new he.Ro(c, s.defaultSize.height)), (this.element.maxSize = new he.Ro(l, _)), (this.element.minSize = new he.Ro(220, h)), (this._cappedHeight = r === d ? {
          wanted: null !== (n = null === (i = this._cappedHeight) || void 0 === i ? void 0 : i.wanted) && void 0 !== n ? n : e.height,
          capped: r
        } : void 0));
      }
      this._resize(a, r);
    }
    _resize(e, t) {
      const {
        width: i,
        height: n
      } = this.element.maxSize;
      ((e = Math.min(i, e)), (t = Math.min(n, t)));
      const {
        statusBarHeight: o
      } = this.getLayoutInfo();
      (this._list.layout(t - o, e), (this._listElement.style.height = t - o + "px"), this.element.layout(t, e), this._contentWidget.layout(), this._positionDetails());
    }
    _positionDetails() {
      this._isDetailsVisible() && this._details.placeAtAnchor(this.element.domNode);
    }
    getLayoutInfo() {
      const e = this.editor.getOption(43),
        t = (0, ge.u)(this.editor.getOption(107) || e.lineHeight, 8, 1e3),
        i = this.editor.getOption(105).showStatusBar && 2 !== this._state && 1 !== this._state ? t : 0,
        n = this._details.widget.borderWidth,
        o = 2 * n;
      return {
        itemHeight: t,
        statusBarHeight: i,
        borderWidth: n,
        borderHeight: o,
        typicalHalfwidthCharacterWidth: e.typicalHalfwidthCharacterWidth,
        verticalPadding: 22,
        horizontalPadding: 14,
        defaultSize: new he.Ro(430, i + 12 * t + o)
      };
    }
    _isDetailsVisible() {
      return this._storageService.getBoolean("expandSuggestionDocs", 0, !1);
    }
    _setDetailsVisible(e) {
      this._storageService.store("expandSuggestionDocs", e, 0, 0);
    }
    forceRenderingAbove() {
      this._forceRenderingAbove || ((this._forceRenderingAbove = !0), this._layout(this._persistedSize.restore()));
    }
    stopForceRenderingAbove() {
      this._forceRenderingAbove = !1;
    }
  };
  ((gt.LOADING_MESSAGE = B.N("suggestWidget.loading", "正在加载...")), (gt.NO_SUGGESTIONS_MESSAGE = B.N("suggestWidget.noSuggestions", "No suggestions.")), (gt = tt([it(1, N.Uy), it(2, O.i6), it(3, xe.XE), it(4, L.TG)], gt)));
  class pt {
    constructor(e, t) {
      ((this._widget = e), (this._editor = t), (this.allowEditorOverflow = !0), (this.suppressMouseDown = !1), (this._preferenceLocked = !1), (this._added = !1), (this._hidden = !1));
    }
    dispose() {
      this._added && ((this._added = !1), this._editor.removeContentWidget(this));
    }
    getId() {
      return "editor.widget.suggestWidget";
    }
    getDomNode() {
      return this._widget.element.domNode;
    }
    show() {
      ((this._hidden = !1), this._added || ((this._added = !0), this._editor.addContentWidget(this)));
    }
    hide() {
      this._hidden || ((this._hidden = !0), this.layout());
    }
    layout() {
      this._editor.layoutContentWidget(this);
    }
    getPosition() {
      return !this._hidden && this._position && this._preference ? {
        position: this._position,
        preference: [this._preference]
      } : null;
    }
    beforeRender() {
      const {
          height: e,
          width: t
        } = this._widget.element.size,
        {
          borderWidth: i,
          horizontalPadding: n
        } = this._widget.getLayoutInfo();
      return new he.Ro(t + 2 * i + n, e + 2 * i);
    }
    afterRender(e) {
      this._widget._afterRender(e);
    }
    setPreference(e) {
      this._preferenceLocked || (this._preference = e);
    }
    lockPreference() {
      this._preferenceLocked = !0;
    }
    unlockPreference() {
      this._preferenceLocked = !1;
    }
    setPosition(e) {
      this._position = e;
    }
  }
  (0, xe.Ic)((e, t) => {
    const i = e.getColor(dt);
    i && t.addRule(`.monaco-editor .suggest-widget .monaco-list .monaco-list-row .monaco-highlighted-label .highlight { color: ${i}; }`);
    const n = e.getColor(ht);
    i && t.addRule(`.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused .monaco-highlighted-label .highlight { color: ${n}; }`);
    const o = e.getColor(rt);
    o && t.addRule(`.monaco-editor .suggest-widget, .monaco-editor .suggest-details { color: ${o}; }`);
    const s = e.getColor(at);
    s && t.addRule(`.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused { color: ${s}; }`);
    const r = e.getColor(lt);
    r && t.addRule(`.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused .codicon { color: ${r}; }`);
    const a = e.getColor(ye.ur);
    a && t.addRule(`.monaco-editor .suggest-details a { color: ${a}; }`);
    const l = e.getColor(ye.sg);
    l && t.addRule(`.monaco-editor .suggest-details a:hover { color: ${l}; }`);
    const c = e.getColor(ye.Sw);
    c && t.addRule(`.monaco-editor .suggest-details code { background-color: ${c}; }`);
  });
  var ft = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    mt = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  class vt {
    constructor(e, t) {
      ((this._model = e), (this._position = t));
      if (e.getLineMaxColumn(t.lineNumber) !== t.column) {
        const i = e.getOffsetAt(t),
          n = e.getPositionAt(i + 1);
        this._marker = e.deltaDecorations([], [{
          range: _.e.fromPositions(t, n),
          options: {
            description: "suggest-line-suffix",
            stickiness: 1
          }
        }]);
      }
    }
    dispose() {
      this._marker && !this._model.isDisposed() && this._model.deltaDecorations(this._marker, []);
    }
    delta(e) {
      if (this._model.isDisposed() || this._position.lineNumber !== e.lineNumber) return 0;
      if (this._marker) {
        const t = this._model.getDecorationRange(this._marker[0]);
        return (this._model.getOffsetAt(t.getStartPosition()) - this._model.getOffsetAt(e));
      }
      return this._model.getLineMaxColumn(e.lineNumber) - e.column;
    }
  }
  let _t = class e {
    constructor(e, t, i, n, o, r) {
      ((this._memoryService = t), (this._commandService = i), (this._contextKeyService = n), (this._instantiationService = o), (this._logService = r), (this._lineSuffix = new d.XK()), (this._toDispose = new d.SL()), (this._selectors = new bt(e => e.priority)), (this.editor = e), (this.model = o.createInstance(ce, this.editor)));
      const a = j._y.InsertMode.bindTo(n);
      (a.set(e.getOption(105).insertMode), this.model.onDidTrigger(() => a.set(e.getOption(105).insertMode)), (this.widget = this._toDispose.add(new s.Ue(() => {
        const e = this._instantiationService.createInstance(gt, this.editor);
        (this._toDispose.add(e), this._toDispose.add(e.onDidSelect(e => this._insertSuggestion(e, 0), this)));
        const t = new Z(this.editor, e, e => this._insertSuggestion(e, 2));
        (this._toDispose.add(t), this._toDispose.add(this.model.onDidSuggest(e => {
          0 === e.completionModel.items.length && t.reset();
        })));
        const i = j._y.MakesTextEdit.bindTo(this._contextKeyService),
          n = j._y.HasInsertAndReplaceRange.bindTo(this._contextKeyService),
          o = j._y.CanResolve.bindTo(this._contextKeyService);
        return (this._toDispose.add((0, d.OF)(() => {
          (i.reset(), n.reset(), o.reset());
        })), this._toDispose.add(e.onDidFocus(({
          item: e
        }) => {
          const t = this.editor.getPosition(),
            s = e.editStart.column,
            r = t.column;
          let a = !0;
          if (!("smart" !== this.editor.getOption(1) || 2 !== this.model.state || e.completion.additionalTextEdits || 4 & e.completion.insertTextRules || r - s !== e.completion.insertText.length)) {
            a = this.editor.getModel().getValueInRange({
              startLineNumber: t.lineNumber,
              startColumn: s,
              endLineNumber: t.lineNumber,
              endColumn: r
            }) !== e.completion.insertText;
          }
          (i.set(a), n.set(!v.L.equals(e.editInsertEnd, e.editReplaceEnd)), o.set(Boolean(e.provider.resolveCompletionItem) || Boolean(e.completion.documentation) || e.completion.detail !== e.completion.label));
        })), this._toDispose.add(e.onDetailsKeyDown(e => {
          e.toKeybinding().equals(new c.QC(!0, !1, !1, !1, 33)) || (h.dz && e.toKeybinding().equals(new c.QC(!1, !1, !1, !0, 33))) ? e.stopPropagation() : e.toKeybinding().isModifierKey() || this.editor.focus();
        })), e);
      }))), (this._overtypingCapturer = this._toDispose.add(new s.Ue(() => this._toDispose.add(new de(this.editor, this.model))))), (this._alternatives = this._toDispose.add(new s.Ue(() => this._toDispose.add(new K(this.editor, this._contextKeyService))))), this._toDispose.add(o.createInstance(F, e)), this._toDispose.add(this.model.onDidTrigger(e => {
        (this.widget.value.showTriggered(e.auto, e.shy ? 250 : 50), (this._lineSuffix.value = new vt(this.editor.getModel(), e.position)));
      })), this._toDispose.add(this.model.onDidSuggest(e => {
        if (!e.shy) {
          let t = -1;
          for (const i of this._selectors.itemsOrderedByPriorityDesc) if (((t = i.select(this.editor.getModel(), this.editor.getPosition(), e.completionModel.items)), -1 !== t)) break;
          (-1 === t && (t = this._memoryService.select(this.editor.getModel(), this.editor.getPosition(), e.completionModel.items)), this.widget.value.showSuggestions(e.completionModel, t, e.isFrozen, e.auto));
        }
      })), this._toDispose.add(this.model.onDidCancel(e => {
        e.retrigger || this.widget.value.hideWidget();
      })), this._toDispose.add(this.editor.onDidBlurEditorWidget(() => {
        (this.model.cancel(), this.model.clear());
      })));
      let l = j._y.AcceptSuggestionsOnEnter.bindTo(n),
        u = () => {
          const e = this.editor.getOption(1);
          l.set("on" === e || "smart" === e);
        };
      (this._toDispose.add(this.editor.onDidChangeConfiguration(() => u())), u());
    }
    static get(t) {
      return t.getContribution(e.ID);
    }
    dispose() {
      (this._alternatives.dispose(), this._toDispose.dispose(), this.widget.dispose(), this.model.dispose(), this._lineSuffix.dispose());
    }
    _insertSuggestion(e, t) {
      if (!e || !e.item) return (this._alternatives.value.reset(), this.model.cancel(), void this.model.clear());
      if (!this.editor.hasModel()) return;
      const i = this.editor.getModel(),
        n = i.getAlternativeVersionId(),
        {
          item: o
        } = e,
        s = [],
        l = new r.A();
      1 & t || this.editor.pushUndoStop();
      const c = this.getOverwriteInfo(o, Boolean(8 & t));
      if ((this._memoryService.memorize(i, this.editor.getPosition(), o), Array.isArray(o.completion.additionalTextEdits))) {
        const e = p.ZF.capture(this.editor);
        (this.editor.executeEdits("suggestController.additionalTextEdits.sync", o.completion.additionalTextEdits.map(e => m.h.replace(_.e.lift(e.range), e.text))), e.restoreRelativeVerticalPositionOfCursor(this.editor));
      } else if (!o.isResolved) {
        const e = new u.G(!0);
        let n;
        const r = i.onDidChangeContent(e => {
          if (e.isFlush) return (l.cancel(), void r.dispose());
          for (let t of e.changes) {
            const e = _.e.getEndPosition(t.range);
            (n && !v.L.isBefore(e, n)) || (n = e);
          }
        });
        let a = t;
        t |= 2;
        let c = !1,
          d = this.editor.onWillType(() => {
            (d.dispose(), (c = !0), 2 & a || this.editor.pushUndoStop());
          });
        s.push(o.resolve(l.token).then(() => {
          if (!o.completion.additionalTextEdits || l.token.isCancellationRequested) return !1;
          if (n && o.completion.additionalTextEdits.some(e => v.L.isBefore(n, _.e.getStartPosition(e.range)))) return !1;
          c && this.editor.pushUndoStop();
          const e = p.ZF.capture(this.editor);
          return (this.editor.executeEdits("suggestController.additionalTextEdits.async", o.completion.additionalTextEdits.map(e => m.h.replace(_.e.lift(e.range), e.text))), e.restoreRelativeVerticalPositionOfCursor(this.editor), (!c && 2 & a) || this.editor.pushUndoStop(), !0);
        }).then(t => {
          (this._logService.trace("[suggest] async resolving of edits DONE (ms, applied?)", e.elapsed(), t), r.dispose(), d.dispose());
        }));
      }
      let {
        insertText: d
      } = o.completion;
      (4 & o.completion.insertTextRules || (d = y.Yj.escape(d)), w.SnippetController2.get(this.editor).insert(d, {
        overwriteBefore: c.overwriteBefore,
        overwriteAfter: c.overwriteAfter,
        undoStopBefore: !1,
        undoStopAfter: !1,
        adjustWhitespace: !(1 & o.completion.insertTextRules),
        clipboardText: e.model.clipboardText,
        overtypingCapturer: this._overtypingCapturer.value
      }), 2 & t || this.editor.pushUndoStop(), o.completion.command ? o.completion.command.id === wt.id ? this.model.trigger({
        auto: !0,
        shy: !1
      }, !0) : (s.push(this._commandService.executeCommand(o.completion.command.id, ...(o.completion.command.arguments ? [...o.completion.command.arguments] : [])).catch(a.dL)), this.model.cancel()) : this.model.cancel(), 4 & t && this._alternatives.value.set(e, e => {
        for (l.cancel(); i.canUndo();) {
          (n !== i.getAlternativeVersionId() && i.undo(), this._insertSuggestion(e, 3 | (8 & t ? 8 : 0)));
          break;
        }
      }), this._alertCompletionItem(o), Promise.all(s).finally(() => {
        (this.model.clear(), l.dispose());
      }));
    }
    getOverwriteInfo(e, t) {
      (0, g.p_)(this.editor.hasModel());
      let i = "replace" === this.editor.getOption(105).insertMode;
      t && (i = !i);
      const n = e.position.column - e.editStart.column,
        o = (i ? e.editReplaceEnd.column : e.editInsertEnd.column) - e.position.column;
      return {
        overwriteBefore: n + (this.editor.getPosition().column - e.position.column),
        overwriteAfter: o + (this._lineSuffix.value ? this._lineSuffix.value.delta(this.editor.getPosition()) : 0)
      };
    }
    _alertCompletionItem(e) {
      if ((0, o.Of)(e.completion.additionalTextEdits)) {
        let t = B.N("aria.alert.snippet", "Accepting '{0}' made {1} additional edits", e.textLabel, e.completion.additionalTextEdits.length);
        (0, n.Z9)(t);
      }
    }
    triggerSuggest(e) {
      this.editor.hasModel() && (this.model.trigger({
        auto: !1,
        shy: !1
      }, !1, e), this.editor.revealPosition(this.editor.getPosition(), 0), this.editor.focus());
    }
    triggerSuggestAndAcceptBest(e) {
      if (!this.editor.hasModel()) return;
      const t = this.editor.getPosition(),
        i = () => {
          t.equals(this.editor.getPosition()) && this._commandService.executeCommand(e.fallback);
        },
        n = e => {
          if (4 & e.completion.insertTextRules || e.completion.additionalTextEdits) return !0;
          const t = this.editor.getPosition(),
            i = e.editStart.column,
            n = t.column;
          if (n - i !== e.completion.insertText.length) return !0;
          return (this.editor.getModel().getValueInRange({
            startLineNumber: t.lineNumber,
            startColumn: i,
            endLineNumber: t.lineNumber,
            endColumn: n
          }) !== e.completion.insertText);
        };
      (l.ju.once(this.model.onDidTrigger)(e => {
        let t = [];
        (l.ju.any(this.model.onDidTrigger, this.model.onDidCancel)(() => {
          ((0, d.B9)(t), i());
        }, void 0, t), this.model.onDidSuggest(({
          completionModel: e
        }) => {
          if (((0, d.B9)(t), 0 === e.items.length)) return void i();
          const o = this._memoryService.select(this.editor.getModel(), this.editor.getPosition(), e.items),
            s = e.items[o];
          n(s) ? (this.editor.pushUndoStop(), this._insertSuggestion({
            index: o,
            item: s,
            model: e
          }, 7)) : i();
        }, void 0, t));
      }), this.model.trigger({
        auto: !1,
        shy: !0
      }), this.editor.revealPosition(t, 0), this.editor.focus());
    }
    acceptSelectedSuggestion(e, t) {
      const i = this.widget.value.getFocusedItem();
      let n = 0;
      (e && (n |= 4), t && (n |= 8), this._insertSuggestion(i, n));
    }
    acceptNextSuggestion() {
      this._alternatives.value.next();
    }
    acceptPrevSuggestion() {
      this._alternatives.value.prev();
    }
    cancelSuggestWidget() {
      (this.model.cancel(), this.model.clear(), this.widget.value.hideWidget());
    }
    selectNextSuggestion() {
      this.widget.value.selectNext();
    }
    selectNextPageSuggestion() {
      this.widget.value.selectNextPage();
    }
    selectLastSuggestion() {
      this.widget.value.selectLast();
    }
    selectPrevSuggestion() {
      this.widget.value.selectPrevious();
    }
    selectPrevPageSuggestion() {
      this.widget.value.selectPreviousPage();
    }
    selectFirstSuggestion() {
      this.widget.value.selectFirst();
    }
    toggleSuggestionDetails() {
      this.widget.value.toggleDetails();
    }
    toggleExplainMode() {
      this.widget.value.toggleExplainMode();
    }
    toggleSuggestionFocus() {
      this.widget.value.toggleDetailsFocus();
    }
    resetWidgetSize() {
      this.widget.value.resetPersistedSize();
    }
    forceRenderingAbove() {
      this.widget.value.forceRenderingAbove();
    }
    stopForceRenderingAbove() {
      this.widget.isInitialized && this.widget.value.stopForceRenderingAbove();
    }
    registerSelector(e) {
      return this._selectors.register(e);
    }
  };
  ((_t.ID = "editor.contrib.suggestController"), (_t = ft([mt(1, A), mt(2, W.H), mt(3, O.i6), mt(4, L.TG), mt(5, z.VZ)], _t)));
  class bt {
    constructor(e) {
      ((this.prioritySelector = e), (this._items = new Array()));
    }
    register(e) {
      if (-1 !== this._items.indexOf(e)) throw new Error("Value is already registered");
      return (this._items.push(e), this._items.sort((e, t) => this.prioritySelector(t) - this.prioritySelector(e)), {
        dispose: () => {
          const t = this._items.indexOf(e);
          t >= 0 && this._items.splice(t, 1);
        }
      });
    }
    get itemsOrderedByPriorityDesc() {
      return this._items;
    }
  }
  class wt extends f.R6 {
    constructor() {
      super({
        id: wt.id,
        label: B.N("suggest.trigger.label", "Trigger Suggest"),
        alias: "Trigger Suggest",
        precondition: O.Ao.and(b.u.writable, b.u.hasCompletionItemProvider),
        kbOpts: {
          kbExpr: b.u.textInputFocus,
          primary: 2058,
          secondary: [2087],
          mac: {
            primary: 266,
            secondary: [521, 2087]
          },
          weight: 100
        }
      });
    }
    run(e, t) {
      const i = _t.get(t);
      i && i.triggerSuggest();
    }
  }
  ((wt.id = "editor.action.triggerSuggest"), (0, f._K)(_t.ID, _t), (0, f.Qr)(wt));
  const yt = 190,
    Ct = f._l.bindToContribution(_t.get);
  ((0, f.fK)(new Ct({
    id: "acceptSelectedSuggestion",
    precondition: j._y.Visible,
    handler(e) {
      e.acceptSelectedSuggestion(!0, !1);
    }
  })), H.W.registerKeybindingRule({
    id: "acceptSelectedSuggestion",
    when: O.Ao.and(j._y.Visible, b.u.textInputFocus),
    primary: 2,
    weight: yt
  }), H.W.registerKeybindingRule({
    id: "acceptSelectedSuggestion",
    when: O.Ao.and(j._y.Visible, b.u.textInputFocus, j._y.AcceptSuggestionsOnEnter, j._y.MakesTextEdit),
    primary: 3,
    weight: yt
  }), V.BH.appendMenuItem(j.GI, {
    command: {
      id: "acceptSelectedSuggestion",
      title: B.N("accept.insert", "Insert")
    },
    group: "left",
    order: 1,
    when: j._y.HasInsertAndReplaceRange.toNegated()
  }), V.BH.appendMenuItem(j.GI, {
    command: {
      id: "acceptSelectedSuggestion",
      title: B.N("accept.insert", "Insert")
    },
    group: "left",
    order: 1,
    when: O.Ao.and(j._y.HasInsertAndReplaceRange, j._y.InsertMode.isEqualTo("insert"))
  }), V.BH.appendMenuItem(j.GI, {
    command: {
      id: "acceptSelectedSuggestion",
      title: B.N("accept.replace", "替换")
    },
    group: "left",
    order: 1,
    when: O.Ao.and(j._y.HasInsertAndReplaceRange, j._y.InsertMode.isEqualTo("replace"))
  }), (0, f.fK)(new Ct({
    id: "acceptAlternativeSelectedSuggestion",
    precondition: O.Ao.and(j._y.Visible, b.u.textInputFocus),
    kbOpts: {
      weight: yt,
      kbExpr: b.u.textInputFocus,
      primary: 1027,
      secondary: [1026]
    },
    handler(e) {
      e.acceptSelectedSuggestion(!1, !0);
    },
    menuOpts: [{
      menuId: j.GI,
      group: "left",
      order: 2,
      when: O.Ao.and(j._y.HasInsertAndReplaceRange, j._y.InsertMode.isEqualTo("insert")),
      title: B.N("accept.replace", "替换")
    }, {
      menuId: j.GI,
      group: "left",
      order: 2,
      when: O.Ao.and(j._y.HasInsertAndReplaceRange, j._y.InsertMode.isEqualTo("replace")),
      title: B.N("accept.insert", "Insert")
    }]
  })), W.P.registerCommandAlias("acceptSelectedSuggestionOnEnter", "acceptSelectedSuggestion"), (0, f.fK)(new Ct({
    id: "hideSuggestWidget",
    precondition: j._y.Visible,
    handler: e => e.cancelSuggestWidget(),
    kbOpts: {
      weight: yt,
      kbExpr: b.u.textInputFocus,
      primary: 9,
      secondary: [1033]
    }
  })), (0, f.fK)(new Ct({
    id: "selectNextSuggestion",
    precondition: O.Ao.and(j._y.Visible, j._y.MultipleSuggestions),
    handler: e => e.selectNextSuggestion(),
    kbOpts: {
      weight: yt,
      kbExpr: b.u.textInputFocus,
      primary: 18,
      secondary: [2066],
      mac: {
        primary: 18,
        secondary: [2066, 300]
      }
    }
  })), (0, f.fK)(new Ct({
    id: "selectNextPageSuggestion",
    precondition: O.Ao.and(j._y.Visible, j._y.MultipleSuggestions),
    handler: e => e.selectNextPageSuggestion(),
    kbOpts: {
      weight: yt,
      kbExpr: b.u.textInputFocus,
      primary: 12,
      secondary: [2060]
    }
  })), (0, f.fK)(new Ct({
    id: "selectLastSuggestion",
    precondition: O.Ao.and(j._y.Visible, j._y.MultipleSuggestions),
    handler: e => e.selectLastSuggestion()
  })), (0, f.fK)(new Ct({
    id: "selectPrevSuggestion",
    precondition: O.Ao.and(j._y.Visible, j._y.MultipleSuggestions),
    handler: e => e.selectPrevSuggestion(),
    kbOpts: {
      weight: yt,
      kbExpr: b.u.textInputFocus,
      primary: 16,
      secondary: [2064],
      mac: {
        primary: 16,
        secondary: [2064, 302]
      }
    }
  })), (0, f.fK)(new Ct({
    id: "selectPrevPageSuggestion",
    precondition: O.Ao.and(j._y.Visible, j._y.MultipleSuggestions),
    handler: e => e.selectPrevPageSuggestion(),
    kbOpts: {
      weight: yt,
      kbExpr: b.u.textInputFocus,
      primary: 11,
      secondary: [2059]
    }
  })), (0, f.fK)(new Ct({
    id: "selectFirstSuggestion",
    precondition: O.Ao.and(j._y.Visible, j._y.MultipleSuggestions),
    handler: e => e.selectFirstSuggestion()
  })), (0, f.fK)(new Ct({
    id: "toggleSuggestionDetails",
    precondition: j._y.Visible,
    handler: e => e.toggleSuggestionDetails(),
    kbOpts: {
      weight: yt,
      kbExpr: b.u.textInputFocus,
      primary: 2058,
      secondary: [2087],
      mac: {
        primary: 266,
        secondary: [2087]
      }
    },
    menuOpts: [{
      menuId: j.GI,
      group: "right",
      order: 1,
      when: O.Ao.and(j._y.DetailsVisible, j._y.CanResolve),
      title: B.N("detail.more", "show less")
    }, {
      menuId: j.GI,
      group: "right",
      order: 1,
      when: O.Ao.and(j._y.DetailsVisible.toNegated(), j._y.CanResolve),
      title: B.N("detail.less", "show more")
    }]
  })), (0, f.fK)(new Ct({
    id: "toggleExplainMode",
    precondition: j._y.Visible,
    handler: e => e.toggleExplainMode(),
    kbOpts: {
      weight: 100,
      primary: 2133
    }
  })), (0, f.fK)(new Ct({
    id: "toggleSuggestionFocus",
    precondition: j._y.Visible,
    handler: e => e.toggleSuggestionFocus(),
    kbOpts: {
      weight: yt,
      kbExpr: b.u.textInputFocus,
      primary: 2570,
      mac: {
        primary: 778
      }
    }
  })), (0, f.fK)(new Ct({
    id: "insertBestCompletion",
    precondition: O.Ao.and(b.u.textInputFocus, O.Ao.equals("config.editor.tabCompletion", "on"), F.AtEnd, j._y.Visible.toNegated(), K.OtherSuggestions.toNegated(), w.SnippetController2.InSnippetMode.toNegated()),
    handler: (e, t) => {
      e.triggerSuggestAndAcceptBest((0, g.Kn)(t) ? Object.assign({
        fallback: "tab"
      }, t) : {
        fallback: "tab"
      });
    },
    kbOpts: {
      weight: yt,
      primary: 2
    }
  })), (0, f.fK)(new Ct({
    id: "insertNextSuggestion",
    precondition: O.Ao.and(b.u.textInputFocus, O.Ao.equals("config.editor.tabCompletion", "on"), K.OtherSuggestions, j._y.Visible.toNegated(), w.SnippetController2.InSnippetMode.toNegated()),
    handler: e => e.acceptNextSuggestion(),
    kbOpts: {
      weight: yt,
      kbExpr: b.u.textInputFocus,
      primary: 2
    }
  })), (0, f.fK)(new Ct({
    id: "insertPrevSuggestion",
    precondition: O.Ao.and(b.u.textInputFocus, O.Ao.equals("config.editor.tabCompletion", "on"), K.OtherSuggestions, j._y.Visible.toNegated(), w.SnippetController2.InSnippetMode.toNegated()),
    handler: e => e.acceptPrevSuggestion(),
    kbOpts: {
      weight: yt,
      kbExpr: b.u.textInputFocus,
      primary: 1026
    }
  })), (0, f.Qr)(class extends f.R6 {
    constructor() {
      super({
        id: "editor.action.resetSuggestSize",
        label: B.N("suggest.reset.label", "Reset Suggest Widget Size"),
        alias: "Reset Suggest Widget Size",
        precondition: void 0
      });
    }
    run(e, t) {
      _t.get(t).resetWidgetSize();
    }
  }));
};