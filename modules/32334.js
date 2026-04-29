module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    BR: () => A,
    e3: () => O,
    tw: () => P
  });
  var n = i(4669),
    o = i(5976),
    s = i(1432),
    r = i(17301),
    a = i(64141),
    l = i(44174),
    c = i(44101),
    d = i(71144),
    h = i(71531),
    u = i(33187),
    g = i(33108),
    p = i(15393),
    f = i(71050),
    m = i(97781),
    v = i(43557),
    _ = i(64862),
    b = i(89954),
    w = i(95215),
    y = i(66663),
    C = i(65072),
    x = i(89510),
    S = i(36248),
    k = i(83831),
    L = function (e, t, i, n) {
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
    };
  function D(e) {
    return e.toString();
  }
  function I(e) {
    const t = new b.yP(),
      i = e.createSnapshot();
    let n;
    for (; (n = i.read());) t.update(n);
    return t.digest();
  }
  class E {
    constructor(e, t, i) {
      ((this._modelEventListeners = new o.SL()), (this.model = e), (this._languageSelection = null), (this._languageSelectionListener = null), this._modelEventListeners.add(e.onWillDispose(() => t(e))), this._modelEventListeners.add(e.onDidChangeLanguage(t => i(e, t))));
    }
    _disposeLanguageSelection() {
      this._languageSelectionListener && (this._languageSelectionListener.dispose(), (this._languageSelectionListener = null));
    }
    dispose() {
      (this._modelEventListeners.dispose(), this._disposeLanguageSelection());
    }
    setLanguage(e) {
      (this._disposeLanguageSelection(), (this._languageSelection = e), (this._languageSelectionListener = this._languageSelection.onDidChange(() => this.model.setMode(e.languageId))), this.model.setMode(e.languageId));
    }
  }
  const T = s.IJ || s.dz ? 1 : 2;
  class M {
    constructor(e, t, i, n, o, s, r, a) {
      ((this.uri = e), (this.initialUndoRedoSnapshot = t), (this.time = i), (this.sharesUndoRedoStack = n), (this.heapSize = o), (this.sha1 = s), (this.versionId = r), (this.alternativeVersionId = a));
    }
  }
  let A = class e extends o.JT {
    constructor(e, t, i, o, s, r, a) {
      (super(), (this._configurationService = e), (this._resourcePropertiesService = t), (this._themeService = i), (this._logService = o), (this._undoRedoService = s), (this._modeService = r), (this._languageConfigurationService = a), (this._onModelAdded = this._register(new n.Q5())), (this.onModelAdded = this._onModelAdded.event), (this._onModelRemoved = this._register(new n.Q5())), (this.onModelRemoved = this._onModelRemoved.event), (this._onModelModeChanged = this._register(new n.Q5())), (this.onModelModeChanged = this._onModelModeChanged.event), (this._modelCreationOptionsByLanguageAndResource = Object.create(null)), (this._models = {}), (this._disposedModels = new Map()), (this._disposedModelsHeapSize = 0), (this._semanticStyling = this._register(new F(this._themeService, this._modeService, this._logService))), this._register(this._configurationService.onDidChangeConfiguration(() => this._updateModelOptions())), this._updateModelOptions(), this._register(new R(this, this._themeService, this._configurationService, this._semanticStyling)));
    }
    static _readModelOptions(e, t) {
      var i;
      let n = a.DB.tabSize;
      if (e.editor && void 0 !== e.editor.tabSize) {
        const t = parseInt(e.editor.tabSize, 10);
        (isNaN(t) || (n = t), n < 1 && (n = 1));
      }
      let o = n;
      if (e.editor && void 0 !== e.editor.indentSize && "tabSize" !== e.editor.indentSize) {
        const t = parseInt(e.editor.indentSize, 10);
        (isNaN(t) || (o = t), o < 1 && (o = 1));
      }
      let s = a.DB.insertSpaces;
      e.editor && void 0 !== e.editor.insertSpaces && (s = "false" !== e.editor.insertSpaces && Boolean(e.editor.insertSpaces));
      let r = T;
      const l = e.eol;
      "\r\n" === l ? (r = 2) : "\n" === l && (r = 1);
      let c = a.DB.trimAutoWhitespace;
      e.editor && void 0 !== e.editor.trimAutoWhitespace && (c = "false" !== e.editor.trimAutoWhitespace && Boolean(e.editor.trimAutoWhitespace));
      let d = a.DB.detectIndentation;
      e.editor && void 0 !== e.editor.detectIndentation && (d = "false" !== e.editor.detectIndentation && Boolean(e.editor.detectIndentation));
      let h = a.DB.largeFileOptimizations;
      e.editor && void 0 !== e.editor.largeFileOptimizations && (h = "false" !== e.editor.largeFileOptimizations && Boolean(e.editor.largeFileOptimizations));
      let u = a.DB.bracketPairColorizationOptions;
      return ((null === (i = e.editor) || void 0 === i ? void 0 : i.bracketPairColorization) && "object" == typeof e.editor.bracketPairColorization && (u = {
        enabled: !!e.editor.bracketPairColorization.enabled
      }), {
        isForSimpleWidget: t,
        tabSize: n,
        indentSize: o,
        insertSpaces: s,
        detectIndentation: d,
        defaultEOL: r,
        trimAutoWhitespace: c,
        largeFileOptimizations: h,
        bracketPairColorizationOptions: u
      });
    }
    _getEOL(e, t) {
      if (e) return this._resourcePropertiesService.getEOL(e, t);
      const i = this._configurationService.getValue("files.eol", {
        overrideIdentifier: t
      });
      return i && "string" == typeof i && "auto" !== i ? i : 3 === s.OS || 2 === s.OS ? "\n" : "\r\n";
    }
    _shouldRestoreUndoStack() {
      const e = this._configurationService.getValue("files.restoreUndoStack");
      return "boolean" != typeof e || e;
    }
    getCreationOptions(t, i, n) {
      let o = this._modelCreationOptionsByLanguageAndResource[t + i];
      if (!o) {
        const s = this._configurationService.getValue("editor", {
            overrideIdentifier: t,
            resource: i
          }),
          r = this._getEOL(i, t);
        ((o = e._readModelOptions({
          editor: s,
          eol: r
        }, n)), (this._modelCreationOptionsByLanguageAndResource[t + i] = o));
      }
      return o;
    }
    _updateModelOptions() {
      const t = this._modelCreationOptionsByLanguageAndResource;
      this._modelCreationOptionsByLanguageAndResource = Object.create(null);
      const i = Object.keys(this._models);
      for (let n = 0, o = i.length; n < o; n++) {
        const o = i[n],
          s = this._models[o],
          r = s.model.getLanguageId(),
          a = s.model.uri,
          l = t[r + a],
          c = this.getCreationOptions(r, a, s.model.isForSimpleWidget);
        e._setModelOptionsForModel(s.model, c, l);
      }
    }
    static _setModelOptionsForModel(e, t, i) {
      (i && i.defaultEOL !== t.defaultEOL && 1 === e.getLineCount() && e.setEOL(1 === t.defaultEOL ? 0 : 1), (i && i.detectIndentation === t.detectIndentation && i.insertSpaces === t.insertSpaces && i.tabSize === t.tabSize && i.indentSize === t.indentSize && i.trimAutoWhitespace === t.trimAutoWhitespace && (0, S.fS)(i.bracketPairColorizationOptions, t.bracketPairColorizationOptions)) || (t.detectIndentation ? (e.detectIndentation(t.insertSpaces, t.tabSize), e.updateOptions({
        trimAutoWhitespace: t.trimAutoWhitespace,
        bracketColorizationOptions: t.bracketPairColorizationOptions
      })) : e.updateOptions({
        insertSpaces: t.insertSpaces,
        tabSize: t.tabSize,
        indentSize: t.indentSize,
        trimAutoWhitespace: t.trimAutoWhitespace,
        bracketColorizationOptions: t.bracketPairColorizationOptions
      })));
    }
    _insertDisposedModel(e) {
      (this._disposedModels.set(D(e.uri), e), (this._disposedModelsHeapSize += e.heapSize));
    }
    _removeDisposedModel(e) {
      const t = this._disposedModels.get(D(e));
      return (t && (this._disposedModelsHeapSize -= t.heapSize), this._disposedModels.delete(D(e)), t);
    }
    _ensureDisposedModelsHeapSize(e) {
      if (this._disposedModelsHeapSize > e) {
        const t = [];
        for (this._disposedModels.forEach(e => {
          e.sharesUndoRedoStack || t.push(e);
        }), t.sort((e, t) => e.time - t.time); t.length > 0 && this._disposedModelsHeapSize > e;) {
          const e = t.shift();
          (this._removeDisposedModel(e.uri), null !== e.initialUndoRedoSnapshot && this._undoRedoService.restoreSnapshot(e.initialUndoRedoSnapshot));
        }
      }
    }
    _createModelData(e, t, i, n) {
      const o = this.getCreationOptions(t, i, n),
        s = new l.yO(e, o, t, i, this._undoRedoService, this._modeService, this._languageConfigurationService);
      if (i && this._disposedModels.has(D(i))) {
        const e = this._removeDisposedModel(i),
          t = this._undoRedoService.getElements(i),
          n = I(s) === e.sha1;
        if (n || e.sharesUndoRedoStack) {
          for (const e of t.past) (0, w.e9)(e) && e.matchesResource(i) && e.setModel(s);
          for (const e of t.future) (0, w.e9)(e) && e.matchesResource(i) && e.setModel(s);
          (this._undoRedoService.setElementsValidFlag(i, !0, e => (0, w.e9)(e) && e.matchesResource(i)), n && (s._overwriteVersionId(e.versionId), s._overwriteAlternativeVersionId(e.alternativeVersionId), s._overwriteInitialUndoRedoSnapshot(e.initialUndoRedoSnapshot)));
        } else null !== e.initialUndoRedoSnapshot && this._undoRedoService.restoreSnapshot(e.initialUndoRedoSnapshot);
      }
      const r = D(s.uri);
      if (this._models[r]) throw new Error("ModelService: Cannot add model because it already exists!");
      const a = new E(s, e => this._onWillDispose(e), (e, t) => this._onDidChangeLanguage(e, t));
      return ((this._models[r] = a), a);
    }
    createModel(e, t, i, n = !1) {
      let o;
      return (t ? ((o = this._createModelData(e, t.languageId, i, n)), this.setMode(o.model, t)) : (o = this._createModelData(e, d.XT, i, n)), this._onModelAdded.fire(o.model), o.model);
    }
    setMode(e, t) {
      if (!t) return;
      const i = this._models[D(e.uri)];
      i && i.setLanguage(t);
    }
    getModels() {
      const e = [],
        t = Object.keys(this._models);
      for (let i = 0, n = t.length; i < n; i++) {
        const n = t[i];
        e.push(this._models[n].model);
      }
      return e;
    }
    getModel(e) {
      const t = D(e),
        i = this._models[t];
      return i ? i.model : null;
    }
    getSemanticTokensProviderStyling(e) {
      return this._semanticStyling.get(e);
    }
    _schemaShouldMaintainUndoRedoElements(e) {
      return (e.scheme === y.lg.file || e.scheme === y.lg.vscodeRemote || e.scheme === y.lg.userData || e.scheme === y.lg.vscodeNotebookCell || "fake-fs" === e.scheme);
    }
    _onWillDispose(t) {
      const i = D(t.uri),
        n = this._models[i],
        o = this._undoRedoService.getUriComparisonKey(t.uri) !== t.uri.toString();
      let s = !1,
        r = 0;
      if (o || (this._shouldRestoreUndoStack() && this._schemaShouldMaintainUndoRedoElements(t.uri))) {
        const e = this._undoRedoService.getElements(t.uri);
        if (e.past.length > 0 || e.future.length > 0) {
          for (const i of e.past) (0, w.e9)(i) && i.matchesResource(t.uri) && ((s = !0), (r += i.heapSize(t.uri)), i.setModel(t.uri));
          for (const i of e.future) (0, w.e9)(i) && i.matchesResource(t.uri) && ((s = !0), (r += i.heapSize(t.uri)), i.setModel(t.uri));
        }
      }
      const a = e.MAX_MEMORY_FOR_CLOSED_FILES_UNDO_STACK;
      if (s) {
        if (!o && r > a) {
          const e = n.model.getInitialUndoRedoSnapshot();
          null !== e && this._undoRedoService.restoreSnapshot(e);
        } else (this._ensureDisposedModelsHeapSize(a - r), this._undoRedoService.setElementsValidFlag(t.uri, !1, e => (0, w.e9)(e) && e.matchesResource(t.uri)), this._insertDisposedModel(new M(t.uri, n.model.getInitialUndoRedoSnapshot(), Date.now(), o, r, I(t), t.getVersionId(), t.getAlternativeVersionId())));
      } else if (!o) {
        const e = n.model.getInitialUndoRedoSnapshot();
        null !== e && this._undoRedoService.restoreSnapshot(e);
      }
      (delete this._models[i], n.dispose(), delete this._modelCreationOptionsByLanguageAndResource[t.getLanguageId() + t.uri], this._onModelRemoved.fire(t));
    }
    _onDidChangeLanguage(t, i) {
      const n = i.oldLanguage,
        o = t.getLanguageId(),
        s = this.getCreationOptions(n, t.uri, t.isForSimpleWidget),
        r = this.getCreationOptions(o, t.uri, t.isForSimpleWidget);
      (e._setModelOptionsForModel(t, r, s), this._onModelModeChanged.fire({
        model: t,
        oldModeId: n
      }));
    }
  };
  ((A.MAX_MEMORY_FOR_CLOSED_FILES_UNDO_STACK = 20971520), (A = L([N(0, g.Ui), N(1, u.y), N(2, m.XE), N(3, v.VZ), N(4, _.tJ), N(5, h.h), N(6, k.c_)], A)));
  const O = "editor.semanticHighlighting";
  function P(e, t, i) {
    var n;
    const o = null === (n = i.getValue(O, {
      overrideIdentifier: e.getLanguageId(),
      resource: e.uri
    })) || void 0 === n ? void 0 : n.enabled;
    return "boolean" == typeof o ? o : t.getColorTheme().semanticHighlighting;
  }
  class R extends o.JT {
    constructor(e, t, i, n) {
      (super(), (this._watchers = Object.create(null)), (this._semanticStyling = n));
      const o = e => {
          this._watchers[e.uri.toString()] = new V(e, t, this._semanticStyling);
        },
        s = (e, t) => {
          (t.dispose(), delete this._watchers[e.uri.toString()]);
        },
        r = () => {
          for (let n of e.getModels()) {
            const e = this._watchers[n.uri.toString()];
            P(n, t, i) ? e || o(n) : e && s(n, e);
          }
        };
      (this._register(e.onModelAdded(e => {
        P(e, t, i) && o(e);
      })), this._register(e.onModelRemoved(e => {
        const t = this._watchers[e.uri.toString()];
        t && s(e, t);
      })), this._register(i.onDidChangeConfiguration(e => {
        e.affectsConfiguration(O) && r();
      })), this._register(t.onDidColorThemeChange(r)));
    }
  }
  class F extends o.JT {
    constructor(e, t, i) {
      (super(), (this._themeService = e), (this._modeService = t), (this._logService = i), (this._caches = new WeakMap()), this._register(this._themeService.onDidColorThemeChange(() => {
        this._caches = new WeakMap();
      })));
    }
    get(e) {
      return (this._caches.has(e) || this._caches.set(e, new C.$(e.getLegend(), this._themeService, this._modeService, this._logService)), this._caches.get(e));
    }
  }
  class B {
    constructor(e, t, i) {
      ((this.provider = e), (this.resultId = t), (this.data = i));
    }
    dispose() {
      this.provider.releaseDocumentSemanticTokens(this.resultId);
    }
  }
  class V extends o.JT {
    constructor(e, t, i) {
      (super(), (this._isDisposed = !1), (this._model = e), (this._semanticStyling = i), (this._fetchDocumentSemanticTokens = this._register(new p.pY(() => this._fetchDocumentSemanticTokensNow(), V.FETCH_DOCUMENT_SEMANTIC_TOKENS_DELAY))), (this._currentDocumentResponse = null), (this._currentDocumentRequestCancellationTokenSource = null), (this._documentProvidersChangeListeners = []), this._register(this._model.onDidChangeContent(() => {
        this._fetchDocumentSemanticTokens.isScheduled() || this._fetchDocumentSemanticTokens.schedule();
      })), this._register(this._model.onDidChangeLanguage(() => {
        (this._currentDocumentResponse && (this._currentDocumentResponse.dispose(), (this._currentDocumentResponse = null)), this._currentDocumentRequestCancellationTokenSource && (this._currentDocumentRequestCancellationTokenSource.cancel(), (this._currentDocumentRequestCancellationTokenSource = null)), this._setDocumentSemanticTokens(null, null, null, []), this._fetchDocumentSemanticTokens.schedule(0));
      })));
      const n = () => {
        ((0, o.B9)(this._documentProvidersChangeListeners), (this._documentProvidersChangeListeners = []));
        for (const t of c.wT.all(e)) "function" == typeof t.onDidChange && this._documentProvidersChangeListeners.push(t.onDidChange(() => this._fetchDocumentSemanticTokens.schedule(0)));
      };
      (n(), this._register(c.wT.onDidChange(() => {
        (n(), this._fetchDocumentSemanticTokens.schedule());
      })), this._register(t.onDidColorThemeChange(e => {
        (this._setDocumentSemanticTokens(null, null, null, []), this._fetchDocumentSemanticTokens.schedule());
      })), this._fetchDocumentSemanticTokens.schedule(0));
    }
    dispose() {
      (this._currentDocumentResponse && (this._currentDocumentResponse.dispose(), (this._currentDocumentResponse = null)), this._currentDocumentRequestCancellationTokenSource && (this._currentDocumentRequestCancellationTokenSource.cancel(), (this._currentDocumentRequestCancellationTokenSource = null)), this._setDocumentSemanticTokens(null, null, null, []), (this._isDisposed = !0), super.dispose());
    }
    _fetchDocumentSemanticTokensNow() {
      if (this._currentDocumentRequestCancellationTokenSource) return;
      if (!(0, x.Jc)(this._model)) return void (this._currentDocumentResponse && this._model.setSemanticTokens(null, !1));
      const e = new f.A(),
        t = this._currentDocumentResponse ? this._currentDocumentResponse.provider : null,
        i = (this._currentDocumentResponse && this._currentDocumentResponse.resultId) || null,
        n = (0, x.ML)(this._model, t, i, e.token);
      this._currentDocumentRequestCancellationTokenSource = e;
      const o = [],
        s = this._model.onDidChangeContent(e => {
          o.push(e);
        });
      n.then(e => {
        if (((this._currentDocumentRequestCancellationTokenSource = null), s.dispose(), e)) {
          const {
              provider: t,
              tokens: i
            } = e,
            n = this._semanticStyling.get(t);
          this._setDocumentSemanticTokens(t, i || null, n, o);
        } else this._setDocumentSemanticTokens(null, null, null, o);
      }, e => {
        ((e && (r.VV(e) || ("string" == typeof e.message && -1 !== e.message.indexOf("busy")))) || r.dL(e), (this._currentDocumentRequestCancellationTokenSource = null), s.dispose(), o.length > 0 && (this._fetchDocumentSemanticTokens.isScheduled() || this._fetchDocumentSemanticTokens.schedule()));
      });
    }
    static _copy(e, t, i, n, o) {
      for (let s = 0; s < o; s++) i[n + s] = e[t + s];
    }
    _setDocumentSemanticTokens(e, t, i, n) {
      const o = this._currentDocumentResponse,
        s = () => {
          n.length > 0 && !this._fetchDocumentSemanticTokens.isScheduled() && this._fetchDocumentSemanticTokens.schedule();
        };
      if ((this._currentDocumentResponse && (this._currentDocumentResponse.dispose(), (this._currentDocumentResponse = null)), this._isDisposed)) e && t && e.releaseDocumentSemanticTokens(t.resultId);else if (e && i) {
        if (!t) return (this._model.setSemanticTokens(null, !0), void s());
        if ((0, x.Vj)(t)) {
          if (!o) return void this._model.setSemanticTokens(null, !0);
          if (0 === t.edits.length) t = {
            resultId: t.resultId,
            data: o.data
          };else {
            let e = 0;
            for (const i of t.edits) e += (i.data ? i.data.length : 0) - i.deleteCount;
            const i = o.data,
              n = new Uint32Array(i.length + e);
            let s = i.length,
              r = n.length;
            for (let e = t.edits.length - 1; e >= 0; e--) {
              const o = t.edits[e],
                a = s - (o.start + o.deleteCount);
              (a > 0 && (V._copy(i, s - a, n, r - a, a), (r -= a)), o.data && (V._copy(o.data, 0, n, r - o.data.length, o.data.length), (r -= o.data.length)), (s = o.start));
            }
            (s > 0 && V._copy(i, 0, n, 0, s), (t = {
              resultId: t.resultId,
              data: n
            }));
          }
        }
        if ((0, x.Vl)(t)) {
          this._currentDocumentResponse = new B(e, t.resultId, t.data);
          const o = (0, C.h)(t, i, this._model.getLanguageId());
          if (n.length > 0) for (const e of n) for (const t of o) for (const i of e.changes) t.applyEdit(i.range, i.text);
          this._model.setSemanticTokens(o, !0);
        } else this._model.setSemanticTokens(null, !0);
        s();
      } else this._model.setSemanticTokens(null, !1);
    }
  }
  V.FETCH_DOCUMENT_SEMANTIC_TOKENS_DELAY = 300;
};