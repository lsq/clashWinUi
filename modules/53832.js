module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    CodeLensContribution: () => Z
  }));
  var n = i(65321),
    o = i(15393),
    s = i(17301),
    r = i(89954),
    a = i(5976),
    l = i(39925),
    c = i(16830),
    d = i(64141),
    h = i(29102),
    u = i(44101),
    g = i(21036),
    p = i(71050),
    f = i(98401),
    m = i(70666),
    v = i(51200),
    _ = i(94565),
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
  class w {
    constructor() {
      ((this.lenses = []), (this._disposables = new a.SL()));
    }
    dispose() {
      this._disposables.dispose();
    }
    add(e, t) {
      this._disposables.add(e);
      for (const i of e.lenses) this.lenses.push({
        symbol: i,
        provider: t
      });
    }
  }
  function y(e, t) {
    return b(this, void 0, void 0, function* () {
      const i = u.He.ordered(e),
        n = new Map(),
        o = new w(),
        r = i.map((i, r) => b(this, void 0, void 0, function* () {
          n.set(i, r);
          try {
            const n = yield Promise.resolve(i.provideCodeLenses(e, t));
            n && o.add(n, i);
          } catch (e) {
            (0, s.Cp)(e);
          }
        }));
      return (yield Promise.all(r), (o.lenses = o.lenses.sort((e, t) => e.symbol.range.startLineNumber < t.symbol.range.startLineNumber ? -1 : e.symbol.range.startLineNumber > t.symbol.range.startLineNumber ? 1 : n.get(e.provider) < n.get(t.provider) ? -1 : n.get(e.provider) > n.get(t.provider) ? 1 : e.symbol.range.startColumn < t.symbol.range.startColumn ? -1 : e.symbol.range.startColumn > t.symbol.range.startColumn ? 1 : 0)), o);
    });
  }
  _.P.registerCommand("_executeCodeLensProvider", function (e, ...t) {
    let [i, n] = t;
    ((0, f.p_)(m.o.isUri(i)), (0, f.p_)("number" == typeof n || !n));
    const o = e.get(v.q).getModel(i);
    if (!o) throw (0, s.b1)();
    const r = [],
      l = new a.SL();
    return y(o, p.T.None).then(e => {
      l.add(e);
      let t = [];
      for (const i of e.lenses) null == n || Boolean(i.symbol.command) ? r.push(i.symbol) : n-- > 0 && i.provider.resolveCodeLens && t.push(Promise.resolve(i.provider.resolveCodeLens(o, i.symbol, p.T.None)).then(e => r.push(e || i.symbol)));
      return Promise.all(t);
    }).then(() => r).finally(() => {
      setTimeout(() => l.dispose(), 100);
    });
  });
  var C = i(88289),
    x = i(43702),
    S = i(24314),
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
  const E = (0, L.yh)("ICodeLensCache");
  class T {
    constructor(e, t) {
      ((this.lineCount = e), (this.data = t));
    }
  }
  let M = class {
    constructor(e) {
      ((this._fakeProvider = new (class {
        provideCodeLenses() {
          throw new Error("not supported");
        }
      })()), (this._cache = new x.z6(20, 0.75)));
      (0, o.To)(() => e.remove("codelens/cache", 1));
      const t = "codelens/cache2",
        i = e.get(t, 1, "{}");
      (this._deserialize(i), (0, C.I)(e.onWillSaveState)(i => {
        i.reason === N.fk.SHUTDOWN && e.store(t, this._serialize(), 1, 1);
      }));
    }
    put(e, t) {
      const i = t.lenses.map(e => {
          var t;
          return {
            range: e.symbol.range,
            command: e.symbol.command && {
              id: "",
              title: null === (t = e.symbol.command) || void 0 === t ? void 0 : t.title
            }
          };
        }),
        n = new w();
      n.add({
        lenses: i,
        dispose: () => {}
      }, this._fakeProvider);
      const o = new T(e.getLineCount(), n);
      this._cache.set(e.uri.toString(), o);
    }
    get(e) {
      const t = this._cache.get(e.uri.toString());
      return t && t.lineCount === e.getLineCount() ? t.data : void 0;
    }
    delete(e) {
      this._cache.delete(e.uri.toString());
    }
    _serialize() {
      const e = Object.create(null);
      for (const [t, i] of this._cache) {
        const n = new Set();
        for (const e of i.data.lenses) n.add(e.symbol.range.startLineNumber);
        e[t] = {
          lineCount: i.lineCount,
          lines: [...n.values()]
        };
      }
      return JSON.stringify(e);
    }
    _deserialize(e) {
      try {
        const t = JSON.parse(e);
        for (const e in t) {
          const i = t[e],
            n = [];
          for (const e of i.lines) n.push({
            range: new S.e(e, 1, e, 11)
          });
          const o = new w();
          (o.add({
            lenses: n,
            dispose() {}
          }, this._fakeProvider), this._cache.set(e, new T(i.lineCount, o)));
        }
      } catch (e) {}
    }
  };
  ((M = D([I(0, N.Uy)], M)), (0, k.z)(E, M));
  var A = i(56811),
    O = (i(26197), i(44174)),
    P = i(27869),
    R = i(73910),
    F = i(97781);
  class B {
    constructor(e, t, i) {
      ((this.afterLineNumber = e), (this.heightInPx = t), (this._onHeight = i), (this.suppressMouseDown = !0), (this.domNode = document.createElement("div")));
    }
    onComputedHeight(e) {
      void 0 === this._lastHeight ? (this._lastHeight = e) : this._lastHeight !== e && ((this._lastHeight = e), this._onHeight());
    }
    isVisible() {
      return (0 !== this._lastHeight && this.domNode.hasAttribute("monaco-visible-view-zone"));
    }
  }
  class V {
    constructor(e, t, i) {
      ((this.allowEditorOverflow = !1), (this.suppressMouseDown = !0), (this._commands = new Map()), (this._isEmpty = !0), (this._editor = e), (this._id = "codelens.widget-" + V._idPool++), this.updatePosition(i), (this._domNode = document.createElement("span")), (this._domNode.className = `codelens-decoration ${t}`));
    }
    withCommands(e, t) {
      this._commands.clear();
      let i = [],
        o = !1;
      for (let t = 0; t < e.length; t++) {
        const s = e[t];
        if (s && ((o = !0), s.command)) {
          const o = (0, A.T)(s.command.title.trim());
          (s.command.id ? (i.push(n.$("a", {
            id: String(t),
            title: s.command.tooltip
          }, ...o)), this._commands.set(String(t), s.command)) : i.push(n.$("span", {
            title: s.command.tooltip
          }, ...o)), t + 1 < e.length && i.push(n.$("span", void 0, " | ")));
        }
      }
      o ? (n.mc(this._domNode, ...i), this._isEmpty && t && this._domNode.classList.add("fadein"), (this._isEmpty = !1)) : n.mc(this._domNode, n.$("span", void 0, "no commands"));
    }
    getCommand(e) {
      return e.parentElement === this._domNode ? this._commands.get(e.id) : void 0;
    }
    getId() {
      return this._id;
    }
    getDomNode() {
      return this._domNode;
    }
    updatePosition(e) {
      const t = this._editor.getModel().getLineFirstNonWhitespaceColumn(e);
      this._widgetPosition = {
        position: {
          lineNumber: e,
          column: t
        },
        preference: [1]
      };
    }
    getPosition() {
      return this._widgetPosition || null;
    }
  }
  V._idPool = 0;
  class W {
    constructor() {
      ((this._removeDecorations = []), (this._addDecorations = []), (this._addDecorationsCallbacks = []));
    }
    addDecoration(e, t) {
      (this._addDecorations.push(e), this._addDecorationsCallbacks.push(t));
    }
    removeDecoration(e) {
      this._removeDecorations.push(e);
    }
    commit(e) {
      let t = e.deltaDecorations(this._removeDecorations, this._addDecorations);
      for (let e = 0, i = t.length; e < i; e++) this._addDecorationsCallbacks[e](t[e]);
    }
  }
  class H {
    constructor(e, t, i, n, o, s, r) {
      let a;
      ((this._isDisposed = !1), (this._editor = t), (this._className = i), (this._data = e), (this._decorationIds = []));
      let l = [];
      (this._data.forEach((e, t) => {
        (e.symbol.command && l.push(e.symbol), n.addDecoration({
          range: e.symbol.range,
          options: O.qx.EMPTY
        }, e => (this._decorationIds[t] = e)), (a = a ? S.e.plusRange(a, e.symbol.range) : S.e.lift(e.symbol.range)));
      }), (this._viewZone = new B(a.startLineNumber - 1, s, r)), (this._viewZoneId = o.addZone(this._viewZone)), l.length > 0 && (this._createContentWidgetIfNecessary(), this._contentWidget.withCommands(l, !1)));
    }
    _createContentWidgetIfNecessary() {
      this._contentWidget ? this._editor.layoutContentWidget(this._contentWidget) : ((this._contentWidget = new V(this._editor, this._className, this._viewZone.afterLineNumber + 1)), this._editor.addContentWidget(this._contentWidget));
    }
    dispose(e, t) {
      (this._decorationIds.forEach(e.removeDecoration, e), (this._decorationIds = []), t && t.removeZone(this._viewZoneId), this._contentWidget && (this._editor.removeContentWidget(this._contentWidget), (this._contentWidget = void 0)), (this._isDisposed = !0));
    }
    isDisposed() {
      return this._isDisposed;
    }
    isValid() {
      return this._decorationIds.some((e, t) => {
        const i = this._editor.getModel().getDecorationRange(e),
          n = this._data[t].symbol;
        return !(!i || S.e.isEmpty(n.range) !== i.isEmpty());
      });
    }
    updateCodeLensSymbols(e, t) {
      (this._decorationIds.forEach(t.removeDecoration, t), (this._decorationIds = []), (this._data = e), this._data.forEach((e, i) => {
        t.addDecoration({
          range: e.symbol.range,
          options: O.qx.EMPTY
        }, e => (this._decorationIds[i] = e));
      }));
    }
    updateHeight(e, t) {
      ((this._viewZone.heightInPx = e), t.layoutZone(this._viewZoneId), this._contentWidget && this._editor.layoutContentWidget(this._contentWidget));
    }
    computeIfNecessary(e) {
      if (!this._viewZone.isVisible()) return null;
      for (let t = 0; t < this._decorationIds.length; t++) {
        const i = e.getDecorationRange(this._decorationIds[t]);
        i && (this._data[t].symbol.range = i);
      }
      return this._data;
    }
    updateCommands(e) {
      (this._createContentWidgetIfNecessary(), this._contentWidget.withCommands(e, !0));
      for (let t = 0; t < this._data.length; t++) {
        const i = e[t];
        if (i) {
          const {
            symbol: e
          } = this._data[t];
          e.command = i.command || e.command;
        }
      }
    }
    getCommand(e) {
      var t;
      return null === (t = this._contentWidget) || void 0 === t ? void 0 : t.getCommand(e);
    }
    getLineNumber() {
      const e = this._editor.getModel().getDecorationRange(this._decorationIds[0]);
      return e ? e.startLineNumber : -1;
    }
    update(e) {
      if (this.isValid()) {
        const t = this._editor.getModel().getDecorationRange(this._decorationIds[0]);
        t && ((this._viewZone.afterLineNumber = t.startLineNumber - 1), e.layoutZone(this._viewZoneId), this._contentWidget && (this._contentWidget.updatePosition(t.startLineNumber), this._editor.layoutContentWidget(this._contentWidget)));
      }
    }
    getItems() {
      return this._data;
    }
  }
  (0, F.Ic)((e, t) => {
    const i = e.getColor(P.Yp);
    i && (t.addRule(`.monaco-editor .codelens-decoration { color: ${i}; }`), t.addRule(`.monaco-editor .codelens-decoration .codicon { color: ${i}; }`));
    const n = e.getColor(R._Y);
    n && (t.addRule(`.monaco-editor .codelens-decoration > a:hover { color: ${n} !important; }`), t.addRule(`.monaco-editor .codelens-decoration > a:hover .codicon { color: ${n} !important; }`));
  });
  var z = i(63580),
    j = i(59422),
    U = i(41157),
    $ = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    K = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    q = function (e, t, i, n) {
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
  let Z = class {
    constructor(e, t, i, s) {
      ((this._editor = e), (this._commandService = t), (this._notificationService = i), (this._codeLensCache = s), (this._disposables = new a.SL()), (this._localToDispose = new a.SL()), (this._lenses = []), (this._getCodeLensModelDelays = new g.Y(u.He, 250, 2500)), (this._oldCodeLensModels = new a.SL()), (this._resolveCodeLensesDelays = new g.Y(u.He, 250, 2500)), (this._resolveCodeLensesScheduler = new o.pY(() => this._resolveCodeLensesInViewport(), this._resolveCodeLensesDelays.min)), this._disposables.add(this._editor.onDidChangeModel(() => this._onModelChange())), this._disposables.add(this._editor.onDidChangeModelLanguage(() => this._onModelChange())), this._disposables.add(this._editor.onDidChangeConfiguration(e => {
        ((e.hasChanged(43) || e.hasChanged(16) || e.hasChanged(15)) && this._updateLensStyle(), e.hasChanged(14) && this._onModelChange());
      })), this._disposables.add(u.He.onDidChange(this._onModelChange, this)), this._onModelChange(), (this._styleClassName = "_" + (0, r.vp)(this._editor.getId()).toString(16)), (this._styleElement = n.dS(n.OO(this._editor.getContainerDomNode()) ? this._editor.getContainerDomNode() : void 0)), this._updateLensStyle());
    }
    dispose() {
      var e;
      (this._localDispose(), this._disposables.dispose(), this._oldCodeLensModels.dispose(), null === (e = this._currentCodeLensModel) || void 0 === e || e.dispose(), this._styleElement.remove());
    }
    _getLayoutInfo() {
      let e,
        t = this._editor.getOption(16);
      return (!t || t < 5 ? ((t = (0.9 * this._editor.getOption(45)) | 0), (e = this._editor.getOption(58))) : (e = (t * Math.max(1.3, this._editor.getOption(58) / this._editor.getOption(45))) | 0), {
        codeLensHeight: e,
        fontSize: t
      });
    }
    _updateLensStyle() {
      const {
          codeLensHeight: e,
          fontSize: t
        } = this._getLayoutInfo(),
        i = this._editor.getOption(15),
        n = this._editor.getOption(43),
        o = `--codelens-font-family${this._styleClassName}`,
        s = `--codelens-font-features${this._styleClassName}`;
      let r = `\n\t\t.monaco-editor .codelens-decoration.${this._styleClassName} { line-height: ${e}px; font-size: ${t}px; padding-right: ${Math.round(0.5 * t)}px; font-feature-settings: var(${s}) }\n\t\t.monaco-editor .codelens-decoration.${this._styleClassName} span.codicon { line-height: ${e}px; font-size: ${t}px; }\n\t\t`;
      (i && (r += `.monaco-editor .codelens-decoration.${this._styleClassName} { font-family: var(${o}), ${d.hL.fontFamily}}`), (this._styleElement.textContent = r), this._editor.getContainerDomNode().style.setProperty(o, null != i ? i : "inherit"), this._editor.getContainerDomNode().style.setProperty(s, n.fontFeatureSettings), this._editor.changeViewZones(t => {
        for (let i of this._lenses) i.updateHeight(e, t);
      }));
    }
    _localDispose() {
      var e, t, i;
      (null === (e = this._getCodeLensModelPromise) || void 0 === e || e.cancel(), (this._getCodeLensModelPromise = void 0), null === (t = this._resolveCodeLensesPromise) || void 0 === t || t.cancel(), (this._resolveCodeLensesPromise = void 0), this._localToDispose.clear(), this._oldCodeLensModels.clear(), null === (i = this._currentCodeLensModel) || void 0 === i || i.dispose());
    }
    _onModelChange() {
      this._localDispose();
      const e = this._editor.getModel();
      if (!e) return;
      if (!this._editor.getOption(14)) return;
      const t = this._codeLensCache.get(e);
      if ((t && this._renderCodeLensSymbols(t), !u.He.has(e))) return void (t && this._localToDispose.add((0, o.Vg)(() => {
        const i = this._codeLensCache.get(e);
        t === i && (this._codeLensCache.delete(e), this._onModelChange());
      }, 3e4)));
      for (const t of u.He.all(e)) if ("function" == typeof t.onDidChange) {
        let e = t.onDidChange(() => i.schedule());
        this._localToDispose.add(e);
      }
      const i = new o.pY(() => {
        var t;
        const n = Date.now();
        (null === (t = this._getCodeLensModelPromise) || void 0 === t || t.cancel(), (this._getCodeLensModelPromise = (0, o.PG)(t => y(e, t))), this._getCodeLensModelPromise.then(t => {
          (this._currentCodeLensModel && this._oldCodeLensModels.add(this._currentCodeLensModel), (this._currentCodeLensModel = t), this._codeLensCache.put(e, t));
          const o = this._getCodeLensModelDelays.update(e, Date.now() - n);
          ((i.delay = o), this._renderCodeLensSymbols(t), this._resolveCodeLensesInViewportSoon());
        }, s.dL));
      }, this._getCodeLensModelDelays.get(e));
      (this._localToDispose.add(i), this._localToDispose.add((0, a.OF)(() => this._resolveCodeLensesScheduler.cancel())), this._localToDispose.add(this._editor.onDidChangeModelContent(() => {
        (this._editor.changeDecorations(e => {
          this._editor.changeViewZones(t => {
            let i = [],
              n = -1;
            this._lenses.forEach(e => {
              e.isValid() && n !== e.getLineNumber() ? (e.update(t), (n = e.getLineNumber())) : i.push(e);
            });
            let o = new W();
            (i.forEach(e => {
              (e.dispose(o, t), this._lenses.splice(this._lenses.indexOf(e), 1));
            }), o.commit(e));
          });
        }), i.schedule());
      })), this._localToDispose.add(this._editor.onDidFocusEditorWidget(() => {
        i.schedule();
      })), this._localToDispose.add(this._editor.onDidScrollChange(e => {
        e.scrollTopChanged && this._lenses.length > 0 && this._resolveCodeLensesInViewportSoon();
      })), this._localToDispose.add(this._editor.onDidLayoutChange(() => {
        this._resolveCodeLensesInViewportSoon();
      })), this._localToDispose.add((0, a.OF)(() => {
        if (this._editor.getModel()) {
          const e = l.ZF.capture(this._editor);
          (this._editor.changeDecorations(e => {
            this._editor.changeViewZones(t => {
              this._disposeAllLenses(e, t);
            });
          }), e.restore(this._editor));
        } else this._disposeAllLenses(void 0, void 0);
      })), this._localToDispose.add(this._editor.onMouseDown(e => {
        if (9 !== e.target.type) return;
        let t = e.target.element;
        if (("SPAN" === (null == t ? void 0 : t.tagName) && (t = t.parentElement), "A" === (null == t ? void 0 : t.tagName))) for (const e of this._lenses) {
          let i = e.getCommand(t);
          if (i) {
            this._commandService.executeCommand(i.id, ...(i.arguments || [])).catch(e => this._notificationService.error(e));
            break;
          }
        }
      })), i.schedule());
    }
    _disposeAllLenses(e, t) {
      const i = new W();
      for (const e of this._lenses) e.dispose(i, t);
      (e && i.commit(e), (this._lenses.length = 0));
    }
    _renderCodeLensSymbols(e) {
      if (!this._editor.hasModel()) return;
      let t,
        i = this._editor.getModel().getLineCount(),
        n = [];
      for (let o of e.lenses) {
        let e = o.symbol.range.startLineNumber;
        e < 1 || e > i || (t && t[t.length - 1].symbol.range.startLineNumber === e ? t.push(o) : ((t = [o]), n.push(t)));
      }
      const o = l.ZF.capture(this._editor),
        s = this._getLayoutInfo();
      (this._editor.changeDecorations(e => {
        this._editor.changeViewZones(t => {
          const i = new W();
          let o = 0,
            r = 0;
          for (; r < n.length && o < this._lenses.length;) {
            let e = n[r][0].symbol.range.startLineNumber,
              a = this._lenses[o].getLineNumber();
            a < e ? (this._lenses[o].dispose(i, t), this._lenses.splice(o, 1)) : a === e ? (this._lenses[o].updateCodeLensSymbols(n[r], i), r++, o++) : (this._lenses.splice(o, 0, new H(n[r], this._editor, this._styleClassName, i, t, s.codeLensHeight, () => this._resolveCodeLensesInViewportSoon())), o++, r++);
          }
          for (; o < this._lenses.length;) (this._lenses[o].dispose(i, t), this._lenses.splice(o, 1));
          for (; r < n.length;) (this._lenses.push(new H(n[r], this._editor, this._styleClassName, i, t, s.codeLensHeight, () => this._resolveCodeLensesInViewportSoon())), r++);
          i.commit(e);
        });
      }), o.restore(this._editor));
    }
    _resolveCodeLensesInViewportSoon() {
      this._editor.getModel() && this._resolveCodeLensesScheduler.schedule();
    }
    _resolveCodeLensesInViewport() {
      var e;
      (null === (e = this._resolveCodeLensesPromise) || void 0 === e || e.cancel(), (this._resolveCodeLensesPromise = void 0));
      const t = this._editor.getModel();
      if (!t) return;
      const i = [],
        n = [];
      if ((this._lenses.forEach(e => {
        const o = e.computeIfNecessary(t);
        o && (i.push(o), n.push(e));
      }), 0 === i.length)) return;
      const r = Date.now(),
        a = (0, o.PG)(e => {
          const o = i.map((i, o) => {
            const r = new Array(i.length),
              a = i.map((i, n) => i.symbol.command || "function" != typeof i.provider.resolveCodeLens ? ((r[n] = i.symbol), Promise.resolve(void 0)) : Promise.resolve(i.provider.resolveCodeLens(t, i.symbol, e)).then(e => {
                r[n] = e;
              }, s.Cp));
            return Promise.all(a).then(() => {
              e.isCancellationRequested || n[o].isDisposed() || n[o].updateCommands(r);
            });
          });
          return Promise.all(o);
        });
      ((this._resolveCodeLensesPromise = a), this._resolveCodeLensesPromise.then(() => {
        const e = this._resolveCodeLensesDelays.update(t, Date.now() - r);
        ((this._resolveCodeLensesScheduler.delay = e), this._currentCodeLensModel && this._codeLensCache.put(t, this._currentCodeLensModel), this._oldCodeLensModels.clear(), a === this._resolveCodeLensesPromise && (this._resolveCodeLensesPromise = void 0));
      }, e => {
        ((0, s.dL)(e), a === this._resolveCodeLensesPromise && (this._resolveCodeLensesPromise = void 0));
      }));
    }
    getLenses() {
      return this._lenses;
    }
  };
  ((Z.ID = "css.editor.codeLens"), (Z = $([K(1, _.H), K(2, j.lT), K(3, E)], Z)), (0, c._K)(Z.ID, Z), (0, c.Qr)(class extends c.R6 {
    constructor() {
      super({
        id: "codelens.showLensesInCurrentLine",
        precondition: h.u.hasCodeLensProvider,
        label: (0, z.N)("showLensOnLine", "Show CodeLens Commands For Current Line"),
        alias: "Show CodeLens Commands For Current Line"
      });
    }
    run(e, t) {
      return q(this, void 0, void 0, function* () {
        if (!t.hasModel()) return;
        const i = e.get(U.eJ),
          n = e.get(_.H),
          o = e.get(j.lT),
          s = t.getSelection().positionLineNumber,
          r = t.getContribution(Z.ID),
          a = [];
        for (let e of r.getLenses()) if (e.getLineNumber() === s) for (let t of e.getItems()) {
          const {
            command: e
          } = t.symbol;
          e && a.push({
            label: e.title,
            command: e
          });
        }
        if (0 === a.length) return;
        const l = yield i.pick(a, {
          canPickMany: !1
        });
        if (l) try {
          yield n.executeCommand(l.command.id, ...(l.command.arguments || []));
        } catch (e) {
          o.error(e);
        }
      });
    }
  }));
};