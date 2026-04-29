module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    S5: () => xe,
    dW: () => _e,
    Hv: () => Ce,
    o$: () => ye,
    E7: () => ve,
    pY: () => pe,
    Eb: () => be,
    VQ: () => we
  });
  var n = i(71050);
  class o {
    constructor(e) {
      ((this.executor = e), (this._didRun = !1));
    }
    getValue() {
      if (!this._didRun) try {
        this._value = this.executor();
      } catch (e) {
        this._error = e;
      } finally {
        this._didRun = !0;
      }
      if (this._error) throw this._error;
      return this._value;
    }
    get rawValue() {
      return this._value;
    }
  }
  var s = i(5976),
    r = i(97295),
    a = i(16830),
    l = i(66007),
    c = i(29102),
    d = i(31907),
    h = i(17301),
    u = i(82276),
    g = i(72065),
    p = i(65321),
    f = i(74741),
    m = i(50187),
    v = i(44101),
    _ = i(89532),
    b = i(5606),
    w = i(91847),
    y = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    C = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    x = function (e, t, i, n) {
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
  class S extends f.aU {
    constructor(e, t) {
      (super(e.command ? e.command.id : e.title, e.title.replace(/\r\n|\r|\n/g, " "), void 0, !e.disabled, t), (this.action = e));
    }
  }
  let k = class extends s.JT {
    constructor(e, t, i, n) {
      (super(), (this._editor = e), (this._delegate = t), (this._contextMenuService = i), (this._visible = !1), (this._showingActions = this._register(new s.XK())), (this._keybindingResolver = new L({
        getKeybindings: () => n.getKeybindings()
      })));
    }
    get isVisible() {
      return this._visible;
    }
    show(e, t, i, n) {
      return x(this, void 0, void 0, function* () {
        const o = n.includeDisabledActions ? t.allActions : t.validActions;
        if (!o.length) return void (this._visible = !1);
        if (!this._editor.getDomNode()) throw ((this._visible = !1), (0, h.F0)());
        ((this._visible = !0), (this._showingActions.value = t));
        const s = this.getMenuActions(e, o, t.documentation),
          r = m.L.isIPosition(i) ? this._toCoords(i) : i || {
            x: 0,
            y: 0
          },
          a = this._keybindingResolver.getResolver(),
          l = this._editor.getOption(113);
        this._contextMenuService.showContextMenu({
          domForShadowRoot: l ? this._editor.getDomNode() : void 0,
          getAnchor: () => r,
          getActions: () => s,
          onHide: () => {
            ((this._visible = !1), this._editor.focus());
          },
          autoSelectFirstItem: !0,
          getKeyBinding: e => (e instanceof S ? a(e.action) : void 0)
        });
      });
    }
    getMenuActions(e, t, i) {
      var n, o;
      const s = e => new S(e.action, () => this._delegate.onSelectCodeAction(e)),
        r = t.map(s),
        a = [...i],
        l = this._editor.getModel();
      if (l && r.length) for (const i of v.H9.all(l)) i._getAdditionalMenuItems && a.push(...i._getAdditionalMenuItems({
        trigger: e.type,
        only: null === (o = null === (n = e.filter) || void 0 === n ? void 0 : n.include) || void 0 === o ? void 0 : o.value
      }, t.map(e => e.action)));
      return (a.length && r.push(new f.Z0(), ...a.map(e => s(new d.bA({
        title: e.title,
        command: e
      }, void 0)))), r);
    }
    _toCoords(e) {
      if (!this._editor.hasModel()) return {
        x: 0,
        y: 0
      };
      (this._editor.revealPosition(e, 1), this._editor.render());
      const t = this._editor.getScrolledVisiblePosition(e),
        i = (0, p.i)(this._editor.getDomNode());
      return {
        x: i.left + t.left,
        y: i.top + t.top + t.height
      };
    }
  };
  k = y([C(2, b.i), C(3, w.d)], k);
  class L {
    constructor(e) {
      this._keybindingProvider = e;
    }
    getResolver() {
      const e = new o(() => this._keybindingProvider.getKeybindings().filter(e => L.codeActionCommands.indexOf(e.command) >= 0).filter(e => e.resolvedKeybinding).map(e => {
        let t = e.commandArgs;
        return (e.command === d.uH ? (t = {
          kind: _.yN.SourceOrganizeImports.value
        }) : e.command === d.TM && (t = {
          kind: _.yN.SourceFixAll.value
        }), Object.assign({
          resolvedKeybinding: e.resolvedKeybinding
        }, _.wZ.fromUser(t, {
          kind: _.yN.None,
          apply: "never"
        })));
      }));
      return t => {
        if (t.kind) {
          const i = this.bestKeybindingForCodeAction(t, e.getValue());
          return null == i ? void 0 : i.resolvedKeybinding;
        }
      };
    }
    bestKeybindingForCodeAction(e, t) {
      if (!e.kind) return;
      const i = new _.yN(e.kind);
      return t.filter(e => e.kind.contains(i)).filter(t => !t.preferred || e.isPreferred).reduceRight((e, t) => (e ? (e.kind.contains(t.kind) ? t : e) : t), void 0);
    }
  }
  L.codeActionCommands = [d.Bb, d.RB, d.MN, d.uH, d.TM];
  var N,
    D = i(57974),
    I = i(10553),
    E = i(73046),
    T = i(4669),
    M = (i(47283), i(44174)),
    A = i(63580),
    O = i(73910),
    P = i(97781),
    R = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    F = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  !(function (e) {
    e.Hidden = {
      type: 0
    };
    e.Showing = class {
      constructor(e, t, i, n) {
        ((this.actions = e), (this.trigger = t), (this.editorPosition = i), (this.widgetPosition = n), (this.type = 1));
      }
    };
  })(N || (N = {}));
  let B = class e extends s.JT {
    constructor(e, t, i, n) {
      (super(), (this._editor = e), (this._quickFixActionId = t), (this._preferredFixActionId = i), (this._keybindingService = n), (this._onClick = this._register(new T.Q5())), (this.onClick = this._onClick.event), (this._state = N.Hidden), (this._domNode = document.createElement("div")), (this._domNode.className = E.lA.lightBulb.classNames), this._editor.addContentWidget(this), this._register(this._editor.onDidChangeModelContent(e => {
        const t = this._editor.getModel();
        (1 !== this.state.type || !t || this.state.editorPosition.lineNumber >= t.getLineCount()) && this.hide();
      })), I.o.ignoreTarget(this._domNode), this._register(p.Gw(this._domNode, e => {
        if (1 !== this.state.type) return;
        (this._editor.focus(), e.preventDefault());
        const {
            top: t,
            height: i
          } = p.i(this._domNode),
          n = this._editor.getOption(58);
        let o = Math.floor(n / 3);
        (null !== this.state.widgetPosition.position && this.state.widgetPosition.position.lineNumber < this.state.editorPosition.lineNumber && (o += n), this._onClick.fire({
          x: e.posx,
          y: t + i + o,
          actions: this.state.actions,
          trigger: this.state.trigger
        }));
      })), this._register(p.nm(this._domNode, "mouseenter", e => {
        if (1 != (1 & e.buttons)) return;
        this.hide();
        const t = new D.Z();
        t.startMonitoring(e.target, e.buttons, D.e, () => {}, () => {
          t.dispose();
        });
      })), this._register(this._editor.onDidChangeConfiguration(e => {
        e.hasChanged(56) && !this._editor.getOption(56).enabled && this.hide();
      })), this._updateLightBulbTitleAndIcon(), this._register(this._keybindingService.onDidUpdateKeybindings(this._updateLightBulbTitleAndIcon, this)));
    }
    dispose() {
      (super.dispose(), this._editor.removeContentWidget(this));
    }
    getId() {
      return "LightBulbWidget";
    }
    getDomNode() {
      return this._domNode;
    }
    getPosition() {
      return 1 === this._state.type ? this._state.widgetPosition : null;
    }
    update(t, i, n) {
      if (t.validActions.length <= 0) return this.hide();
      const o = this._editor.getOptions();
      if (!o.get(56).enabled) return this.hide();
      const s = this._editor.getModel();
      if (!s) return this.hide();
      const {
          lineNumber: r,
          column: a
        } = s.validatePosition(n),
        l = s.getOptions().tabSize,
        c = o.get(43),
        d = s.getLineContent(r),
        h = M.yO.computeIndentLevel(d, l),
        u = e => e > 2 && this._editor.getTopForLineNumber(e) === this._editor.getTopForLineNumber(e - 1);
      let g = r;
      if (!(c.spaceWidth * h > 22)) if (r > 1 && !u(r - 1)) g -= 1;else if (u(r + 1)) {
        if (a * c.spaceWidth < 22) return this.hide();
      } else g += 1;
      ((this.state = new N.Showing(t, i, n, {
        position: {
          lineNumber: g,
          column: 1
        },
        preference: e._posPref
      })), this._editor.layoutContentWidget(this));
    }
    hide() {
      ((this.state = N.Hidden), this._editor.layoutContentWidget(this));
    }
    get state() {
      return this._state;
    }
    set state(e) {
      ((this._state = e), this._updateLightBulbTitleAndIcon());
    }
    _updateLightBulbTitleAndIcon() {
      if (1 === this.state.type && this.state.actions.hasAutoFix) {
        (this._domNode.classList.remove(...E.lA.lightBulb.classNamesArray), this._domNode.classList.add(...E.lA.lightbulbAutofix.classNamesArray));
        const e = this._keybindingService.lookupKeybinding(this._preferredFixActionId);
        if (e) return void (this.title = A.N("preferredcodeActionWithKb", "Show Code Actions. Preferred Quick Fix Available ({0})", e.getLabel()));
      }
      (this._domNode.classList.remove(...E.lA.lightbulbAutofix.classNamesArray), this._domNode.classList.add(...E.lA.lightBulb.classNamesArray));
      const e = this._keybindingService.lookupKeybinding(this._quickFixActionId);
      this.title = e ? A.N("codeActionWithKb", "Show Code Actions ({0})", e.getLabel()) : A.N("codeAction", "Show Code Actions");
    }
    set title(e) {
      this._domNode.title = e;
    }
  };
  ((B._posPref = [0]), (B = R([F(3, w.d)], B)), (0, P.Ic)((e, t) => {
    var i;
    const n = null === (i = e.getColor(O.cv)) || void 0 === i ? void 0 : i.transparent(0.7),
      o = e.getColor(O.Fu);
    o && t.addRule(`\n\t\t.monaco-editor .contentWidgets ${E.lA.lightBulb.cssSelector} {\n\t\t\tcolor: ${o};\n\t\t\tbackground-color: ${n};\n\t\t}`);
    const s = e.getColor(O.sK);
    s && t.addRule(`\n\t\t.monaco-editor .contentWidgets ${E.lA.lightbulbAutofix.cssSelector} {\n\t\t\tcolor: ${s};\n\t\t\tbackground-color: ${n};\n\t\t}`);
  }));
  var V,
    W = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    H = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    z = function (e, t, i, n) {
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
    },
    j = function (e, t, i, n, o) {
      if ("m" === n) throw new TypeError("Private method is not writable");
      if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return ("a" === n ? o.call(e, i) : o ? (o.value = i) : t.set(e, i), i);
    },
    U = function (e, t, i, n) {
      if ("a" === i && !n) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === i ? n : "a" === i ? n.call(e) : n ? n.value : t.get(e);
    };
  let $ = class extends s.JT {
    constructor(e, t, i, n, r) {
      (super(), (this._editor = e), (this.delegate = n), (this._activeCodeActions = this._register(new s.XK())), V.set(this, !1), (this._codeActionWidget = new o(() => this._register(r.createInstance(k, this._editor, {
        onSelectCodeAction: e => z(this, void 0, void 0, function* () {
          this.delegate.applyCodeAction(e, !0);
        })
      })))), (this._lightBulbWidget = new o(() => {
        const e = this._register(r.createInstance(B, this._editor, t, i));
        return (this._register(e.onClick(e => this.showCodeActionList(e.trigger, e.actions, e, {
          includeDisabledActions: !1
        }))), e);
      })));
    }
    dispose() {
      (j(this, V, !0, "f"), super.dispose());
    }
    update(e) {
      var t, i, n;
      return z(this, void 0, void 0, function* () {
        if (1 !== e.type) return void (null === (t = this._lightBulbWidget.rawValue) || void 0 === t || t.hide());
        let o;
        try {
          o = yield e.actions;
        } catch (e) {
          return void (0, h.dL)(e);
        }
        if (!U(this, V, "f")) if ((this._lightBulbWidget.getValue().update(o, e.trigger, e.position), 1 === e.trigger.type)) {
          if (null === (i = e.trigger.filter) || void 0 === i ? void 0 : i.include) {
            const t = this.tryGetValidActionToApply(e.trigger, o);
            if (t) {
              try {
                (this._lightBulbWidget.getValue().hide(), yield this.delegate.applyCodeAction(t, !1));
              } finally {
                o.dispose();
              }
              return;
            }
            if (e.trigger.context) {
              const t = this.getInvalidActionThatWouldHaveBeenApplied(e.trigger, o);
              if (t && t.action.disabled) return (u.O.get(this._editor).showMessage(t.action.disabled, e.trigger.context.position), void o.dispose());
            }
          }
          const t = !!(null === (n = e.trigger.filter) || void 0 === n ? void 0 : n.include);
          if (e.trigger.context && (!o.allActions.length || (!t && !o.validActions.length))) return (u.O.get(this._editor).showMessage(e.trigger.context.notAvailableMessage, e.trigger.context.position), (this._activeCodeActions.value = o), void o.dispose());
          ((this._activeCodeActions.value = o), this._codeActionWidget.getValue().show(e.trigger, o, e.position, {
            includeDisabledActions: t
          }));
        } else this._codeActionWidget.getValue().isVisible ? o.dispose() : (this._activeCodeActions.value = o);
      });
    }
    getInvalidActionThatWouldHaveBeenApplied(e, t) {
      if (t.allActions.length) return ("first" === e.autoApply && 0 === t.validActions.length) || ("ifSingle" === e.autoApply && 1 === t.allActions.length) ? t.allActions.find(({
        action: e
      }) => e.disabled) : void 0;
    }
    tryGetValidActionToApply(e, t) {
      if (t.validActions.length) return ("first" === e.autoApply && t.validActions.length > 0) || ("ifSingle" === e.autoApply && 1 === t.validActions.length) ? t.validActions[0] : void 0;
    }
    showCodeActionList(e, t, i, n) {
      return z(this, void 0, void 0, function* () {
        this._codeActionWidget.getValue().show(e, t, i, n);
      });
    }
  };
  ((V = new WeakMap()), ($ = W([H(4, g.TG)], $)));
  var K,
    q = i(94565),
    Z = i(38819),
    G = i(98674),
    Y = i(59422),
    Q = i(90535),
    X = i(10829),
    J = i(15393),
    ee = i(95935),
    te = i(24314),
    ie = function (e, t, i, n) {
      if ("a" === i && !n) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === i ? n : "a" === i ? n.call(e) : n ? n.value : t.get(e);
    },
    ne = function (e, t, i, n, o) {
      if ("m" === n) throw new TypeError("Private method is not writable");
      if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return ("a" === n ? o.call(e, i) : o ? (o.value = i) : t.set(e, i), i);
    };
  const oe = new Z.uy("supportedCodeAction", "");
  class se extends s.JT {
    constructor(e, t, i, n = 250) {
      (super(), (this._editor = e), (this._markerService = t), (this._signalChange = i), (this._delay = n), (this._autoTriggerTimer = this._register(new J._F())), this._register(this._markerService.onMarkerChanged(e => this._onMarkerChanges(e))), this._register(this._editor.onDidChangeCursorPosition(() => this._onCursorChange())));
    }
    trigger(e) {
      const t = this._getRangeOfSelectionUnlessWhitespaceEnclosed(e);
      return this._createEventAndSignalChange(e, t);
    }
    _onMarkerChanges(e) {
      const t = this._editor.getModel();
      t && e.some(e => (0, ee.Xy)(e, t.uri)) && this._autoTriggerTimer.cancelAndSet(() => {
        this.trigger({
          type: 2
        });
      }, this._delay);
    }
    _onCursorChange() {
      this._autoTriggerTimer.cancelAndSet(() => {
        this.trigger({
          type: 2
        });
      }, this._delay);
    }
    _getRangeOfMarker(e) {
      const t = this._editor.getModel();
      if (t) for (const i of this._markerService.read({
        resource: t.uri
      })) {
        const n = t.validateRange(i);
        if (te.e.intersectRanges(n, e)) return te.e.lift(n);
      }
    }
    _getRangeOfSelectionUnlessWhitespaceEnclosed(e) {
      if (!this._editor.hasModel()) return;
      const t = this._editor.getModel(),
        i = this._editor.getSelection();
      if (i.isEmpty() && 2 === e.type) {
        const {
            lineNumber: e,
            column: n
          } = i.getPosition(),
          o = t.getLineContent(e);
        if (0 === o.length) return;
        if (1 === n) {
          if (/\s/.test(o[0])) return;
        } else if (n === t.getLineMaxColumn(e)) {
          if (/\s/.test(o[o.length - 1])) return;
        } else if (/\s/.test(o[n - 2]) && /\s/.test(o[n - 1])) return;
      }
      return i;
    }
    _createEventAndSignalChange(e, t) {
      const i = this._editor.getModel();
      if (!t || !i) return void this._signalChange(void 0);
      const n = this._getRangeOfMarker(t),
        o = n ? n.getStartPosition() : t.getStartPosition(),
        s = {
          trigger: e,
          selection: t,
          position: o
        };
      return (this._signalChange(s), s);
    }
  }
  var re;
  !(function (e) {
    e.Empty = {
      type: 0
    };
    e.Triggered = class {
      constructor(e, t, i, n) {
        ((this.trigger = e), (this.rangeOrSelection = t), (this.position = i), (this._cancellablePromise = n), (this.type = 1), (this.actions = n.catch(e => {
          if ((0, h.VV)(e)) return ae;
          throw e;
        })));
      }
      cancel() {
        this._cancellablePromise.cancel();
      }
    };
  })(re || (re = {}));
  const ae = {
    allActions: [],
    validActions: [],
    dispose: () => {},
    documentation: [],
    hasAutoFix: !1
  };
  class le extends s.JT {
    constructor(e, t, i, n) {
      (super(), (this._editor = e), (this._markerService = t), (this._progressService = n), (this._codeActionOracle = this._register(new s.XK())), (this._state = re.Empty), (this._onDidChangeState = this._register(new T.Q5())), (this.onDidChangeState = this._onDidChangeState.event), K.set(this, !1), (this._supportedCodeActions = oe.bindTo(i)), this._register(this._editor.onDidChangeModel(() => this._update())), this._register(this._editor.onDidChangeModelLanguage(() => this._update())), this._register(v.H9.onDidChange(() => this._update())), this._update());
    }
    dispose() {
      ie(this, K, "f") || (ne(this, K, !0, "f"), super.dispose(), this.setState(re.Empty, !0));
    }
    _update() {
      if (ie(this, K, "f")) return;
      ((this._codeActionOracle.value = void 0), this.setState(re.Empty));
      const e = this._editor.getModel();
      if (e && v.H9.has(e) && !this._editor.getOption(80)) {
        const t = [];
        for (const i of v.H9.all(e)) Array.isArray(i.providedCodeActionKinds) && t.push(...i.providedCodeActionKinds);
        (this._supportedCodeActions.set(t.join(" ")), (this._codeActionOracle.value = new se(this._editor, this._markerService, t => {
          var i;
          if (!t) return void this.setState(re.Empty);
          const n = (0, J.PG)(i => (0, d.aI)(e, t.selection, t.trigger, Q.E.None, i));
          (1 === t.trigger.type && (null === (i = this._progressService) || void 0 === i || i.showWhile(n, 250)), this.setState(new re.Triggered(t.trigger, t.selection, t.position, n)));
        }, void 0)), this._codeActionOracle.value.trigger({
          type: 2
        }));
      } else this._supportedCodeActions.reset();
    }
    trigger(e) {
      this._codeActionOracle.value && this._codeActionOracle.value.trigger(e);
    }
    setState(e, t) {
      e !== this._state && (1 === this._state.type && this._state.cancel(), (this._state = e), t || ie(this, K, "f") || this._onDidChangeState.fire(e));
    }
  }
  K = new WeakMap();
  var ce = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    de = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    he = function (e, t, i, n) {
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
  function ue(e) {
    return Z.Ao.regex(oe.keys()[0], new RegExp("(\\s|^)" + (0, r.ec)(e.value) + "\\b"));
  }
  const ge = {
    type: "object",
    defaultSnippets: [{
      body: {
        kind: ""
      }
    }],
    properties: {
      kind: {
        type: "string",
        description: A.N("args.schema.kind", "Kind of the code action to run.")
      },
      apply: {
        type: "string",
        description: A.N("args.schema.apply", "Controls when the returned actions are applied."),
        default: "ifSingle",
        enum: ["first", "ifSingle", "never"],
        enumDescriptions: [A.N("args.schema.apply.first", "Always apply the first returned code action."), A.N("args.schema.apply.ifSingle", "Apply the first returned code action if it is the only one."), A.N("args.schema.apply.never", "Do not apply the returned code actions.")]
      },
      preferred: {
        type: "boolean",
        default: !1,
        description: A.N("args.schema.preferred", "Controls if only preferred code actions should be returned.")
      }
    }
  };
  let pe = class e extends s.JT {
    constructor(e, t, i, n, s) {
      (super(), (this._instantiationService = s), (this._editor = e), (this._model = this._register(new le(this._editor, t, i, n))), this._register(this._model.onDidChangeState(e => this.update(e))), (this._ui = new o(() => this._register(new $(e, ve.Id, xe.Id, {
        applyCodeAction: (e, t) => he(this, void 0, void 0, function* () {
          try {
            yield this._applyCodeAction(e);
          } finally {
            t && this._trigger({
              type: 2,
              filter: {}
            });
          }
        })
      }, this._instantiationService)))));
    }
    static get(t) {
      return t.getContribution(e.ID);
    }
    update(e) {
      this._ui.getValue().update(e);
    }
    showCodeActions(e, t, i) {
      return this._ui.getValue().showCodeActionList(e, t, i, {
        includeDisabledActions: !1
      });
    }
    manualTriggerAtCurrentPosition(e, t, i) {
      if (!this._editor.hasModel()) return;
      u.O.get(this._editor).closeMessage();
      const n = this._editor.getPosition();
      this._trigger({
        type: 1,
        filter: t,
        autoApply: i,
        context: {
          notAvailableMessage: e,
          position: n
        }
      });
    }
    _trigger(e) {
      return this._model.trigger(e);
    }
    _applyCodeAction(e) {
      return this._instantiationService.invokeFunction(fe, e, this._editor);
    }
  };
  function fe(e, t, i) {
    return he(this, void 0, void 0, function* () {
      const o = e.get(l.vu),
        s = e.get(q.H),
        r = e.get(X.b),
        a = e.get(Y.lT);
      if ((r.publicLog2("codeAction.applyCodeAction", {
        codeActionTitle: t.action.title,
        codeActionKind: t.action.kind,
        codeActionIsPreferred: !!t.action.isPreferred
      }), yield t.resolve(n.T.None), t.action.edit && (yield o.apply(l.fo.convert(t.action.edit), {
        editor: i,
        label: t.action.title
      })), t.action.command)) try {
        yield s.executeCommand(t.action.command.id, ...(t.action.command.arguments || []));
      } catch (e) {
        const t = (function (e) {
          return "string" == typeof e ? e : e instanceof Error && "string" == typeof e.message ? e.message : void 0;
        })(e);
        a.error("string" == typeof t ? t : A.N("applyCodeActionFailed", "An unknown error occurred while applying the code action"));
      }
    });
  }
  function me(e, t, i, n) {
    if (e.hasModel()) {
      const o = pe.get(e);
      o && o.manualTriggerAtCurrentPosition(t, i, n);
    }
  }
  ((pe.ID = "editor.contrib.quickFixController"), (pe = ce([de(1, G.lT), de(2, Z.i6), de(3, Q.e), de(4, g.TG)], pe)));
  class ve extends a.R6 {
    constructor() {
      super({
        id: ve.Id,
        label: A.N("quickfix.trigger.label", "Quick Fix..."),
        alias: "Quick Fix...",
        precondition: Z.Ao.and(c.u.writable, c.u.hasCodeActionsProvider),
        kbOpts: {
          kbExpr: c.u.editorTextFocus,
          primary: 2132,
          weight: 100
        }
      });
    }
    run(e, t) {
      return me(t, A.N("editor.action.quickFix.noneMessage", "No code actions available"), void 0, void 0);
    }
  }
  ve.Id = "editor.action.quickFix";
  class _e extends a._l {
    constructor() {
      super({
        id: d.RB,
        precondition: Z.Ao.and(c.u.writable, c.u.hasCodeActionsProvider),
        description: {
          description: "Trigger a code action",
          args: [{
            name: "args",
            schema: ge
          }]
        }
      });
    }
    runEditorCommand(e, t, i) {
      const n = _.wZ.fromUser(i, {
        kind: _.yN.Empty,
        apply: "ifSingle"
      });
      return me(t, "string" == typeof (null == i ? void 0 : i.kind) ? n.preferred ? A.N("editor.action.codeAction.noneMessage.preferred.kind", "No preferred code actions for '{0}' available", i.kind) : A.N("editor.action.codeAction.noneMessage.kind", "No code actions for '{0}' available", i.kind) : n.preferred ? A.N("editor.action.codeAction.noneMessage.preferred", "No preferred code actions available") : A.N("editor.action.codeAction.noneMessage", "No code actions available"), {
        include: n.kind,
        includeSourceActions: !0,
        onlyIncludePreferredActions: n.preferred
      }, n.apply);
    }
  }
  class be extends a.R6 {
    constructor() {
      super({
        id: d.Bb,
        label: A.N("refactor.label", "Refactor..."),
        alias: "Refactor...",
        precondition: Z.Ao.and(c.u.writable, c.u.hasCodeActionsProvider),
        kbOpts: {
          kbExpr: c.u.editorTextFocus,
          primary: 3120,
          mac: {
            primary: 1328
          },
          weight: 100
        },
        contextMenuOpts: {
          group: "1_modification",
          order: 2,
          when: Z.Ao.and(c.u.writable, ue(_.yN.Refactor))
        },
        description: {
          description: "Refactor...",
          args: [{
            name: "args",
            schema: ge
          }]
        }
      });
    }
    run(e, t, i) {
      const n = _.wZ.fromUser(i, {
        kind: _.yN.Refactor,
        apply: "never"
      });
      return me(t, "string" == typeof (null == i ? void 0 : i.kind) ? n.preferred ? A.N("editor.action.refactor.noneMessage.preferred.kind", "No preferred refactorings for '{0}' available", i.kind) : A.N("editor.action.refactor.noneMessage.kind", "No refactorings for '{0}' available", i.kind) : n.preferred ? A.N("editor.action.refactor.noneMessage.preferred", "No preferred refactorings available") : A.N("editor.action.refactor.noneMessage", "No refactorings available"), {
        include: _.yN.Refactor.contains(n.kind) ? n.kind : _.yN.None,
        onlyIncludePreferredActions: n.preferred
      }, n.apply);
    }
  }
  class we extends a.R6 {
    constructor() {
      super({
        id: d.MN,
        label: A.N("source.label", "Source Action..."),
        alias: "Source Action...",
        precondition: Z.Ao.and(c.u.writable, c.u.hasCodeActionsProvider),
        contextMenuOpts: {
          group: "1_modification",
          order: 2.1,
          when: Z.Ao.and(c.u.writable, ue(_.yN.Source))
        },
        description: {
          description: "Source Action...",
          args: [{
            name: "args",
            schema: ge
          }]
        }
      });
    }
    run(e, t, i) {
      const n = _.wZ.fromUser(i, {
        kind: _.yN.Source,
        apply: "never"
      });
      return me(t, "string" == typeof (null == i ? void 0 : i.kind) ? n.preferred ? A.N("editor.action.source.noneMessage.preferred.kind", "No preferred source actions for '{0}' available", i.kind) : A.N("editor.action.source.noneMessage.kind", "No source actions for '{0}' available", i.kind) : n.preferred ? A.N("editor.action.source.noneMessage.preferred", "No preferred source actions available") : A.N("editor.action.source.noneMessage", "No source actions available"), {
        include: _.yN.Source.contains(n.kind) ? n.kind : _.yN.None,
        includeSourceActions: !0,
        onlyIncludePreferredActions: n.preferred
      }, n.apply);
    }
  }
  class ye extends a.R6 {
    constructor() {
      super({
        id: d.uH,
        label: A.N("organizeImports.label", "Organize Imports"),
        alias: "Organize Imports",
        precondition: Z.Ao.and(c.u.writable, ue(_.yN.SourceOrganizeImports)),
        kbOpts: {
          kbExpr: c.u.editorTextFocus,
          primary: 1581,
          weight: 100
        }
      });
    }
    run(e, t) {
      return me(t, A.N("editor.action.organize.noneMessage", "No organize imports action available"), {
        include: _.yN.SourceOrganizeImports,
        includeSourceActions: !0
      }, "ifSingle");
    }
  }
  class Ce extends a.R6 {
    constructor() {
      super({
        id: d.TM,
        label: A.N("fixAll.label", "Fix All"),
        alias: "Fix All",
        precondition: Z.Ao.and(c.u.writable, ue(_.yN.SourceFixAll))
      });
    }
    run(e, t) {
      return me(t, A.N("fixAll.noneMessage", "No fix all action available"), {
        include: _.yN.SourceFixAll,
        includeSourceActions: !0
      }, "ifSingle");
    }
  }
  class xe extends a.R6 {
    constructor() {
      super({
        id: xe.Id,
        label: A.N("autoFix.label", "Auto Fix..."),
        alias: "Auto Fix...",
        precondition: Z.Ao.and(c.u.writable, ue(_.yN.QuickFix)),
        kbOpts: {
          kbExpr: c.u.editorTextFocus,
          primary: 1620,
          mac: {
            primary: 2644
          },
          weight: 100
        }
      });
    }
    run(e, t) {
      return me(t, A.N("editor.action.autoFix.noneMessage", "No auto fixes available"), {
        include: _.yN.QuickFix,
        onlyIncludePreferredActions: !0
      }, "ifSingle");
    }
  }
  xe.Id = "editor.action.autoFix";
};