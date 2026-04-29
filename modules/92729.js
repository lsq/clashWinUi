module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    DefinitionAction: () => te
  }));
  var n = i(16268),
    o = i(85152),
    s = i(15393),
    r = i(22258),
    a = i(1432),
    l = i(98401),
    c = i(70666),
    d = i(39925),
    h = i(65520),
    u = i(16830),
    g = i(11640),
    p = i(84527),
    f = i(50187),
    m = i(24314),
    v = i(29102),
    _ = i(44101),
    b = i(44318),
    w = i(71455),
    y = i(4669),
    C = i(5976),
    x = i(95935),
    S = i(63580),
    k = i(38819),
    L = i(65026),
    N = i(72065),
    D = i(91847),
    I = i(49989),
    E = i(59422),
    T = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    M = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  const A = new k.uy("hasSymbols", !1, (0, S.N)("hasSymbols", "Whether there are symbol locations that can be navigated via keyboard-only.")),
    O = (0, N.yh)("ISymbolNavigationService");
  let P = class {
    constructor(e, t, i, n) {
      ((this._editorService = t), (this._notificationService = i), (this._keybindingService = n), (this._currentModel = void 0), (this._currentIdx = -1), (this._ignoreEditorChange = !1), (this._ctxHasSymbols = A.bindTo(e)));
    }
    reset() {
      var e, t;
      (this._ctxHasSymbols.reset(), null === (e = this._currentState) || void 0 === e || e.dispose(), null === (t = this._currentMessage) || void 0 === t || t.dispose(), (this._currentModel = void 0), (this._currentIdx = -1));
    }
    put(e) {
      const t = e.parent.parent;
      if (t.references.length <= 1) return void this.reset();
      ((this._currentModel = t), (this._currentIdx = t.references.indexOf(e)), this._ctxHasSymbols.set(!0), this._showMessage());
      const i = new R(this._editorService),
        n = i.onDidChange(e => {
          if (this._ignoreEditorChange) return;
          const i = this._editorService.getActiveCodeEditor();
          if (!i) return;
          const n = i.getModel(),
            o = i.getPosition();
          if (!n || !o) return;
          let s = !1,
            r = !1;
          for (const e of t.references) if ((0, x.Xy)(e.uri, n.uri)) ((s = !0), (r = r || m.e.containsPosition(e.range, o)));else if (s) break;
          (s && r) || this.reset();
        });
      this._currentState = (0, C.F8)(i, n);
    }
    revealNext(e) {
      if (!this._currentModel) return Promise.resolve();
      ((this._currentIdx += 1), (this._currentIdx %= this._currentModel.references.length));
      const t = this._currentModel.references[this._currentIdx];
      return (this._showMessage(), (this._ignoreEditorChange = !0), this._editorService.openCodeEditor({
        resource: t.uri,
        options: {
          selection: m.e.collapseToStart(t.range),
          selectionRevealType: 3
        }
      }, e).finally(() => {
        this._ignoreEditorChange = !1;
      }));
    }
    _showMessage() {
      var e;
      null === (e = this._currentMessage) || void 0 === e || e.dispose();
      const t = this._keybindingService.lookupKeybinding("editor.gotoNextSymbolFromResult"),
        i = t ? (0, S.N)("location.kb", "Symbol {0} of {1}, {2} for next", this._currentIdx + 1, this._currentModel.references.length, t.getLabel()) : (0, S.N)("location", "Symbol {0} of {1}", this._currentIdx + 1, this._currentModel.references.length);
      this._currentMessage = this._notificationService.status(i);
    }
  };
  ((P = T([M(0, k.i6), M(1, g.$), M(2, E.lT), M(3, D.d)], P)), (0, L.z)(O, P, !0), (0, u.fK)(new (class extends u._l {
    constructor() {
      super({
        id: "editor.gotoNextSymbolFromResult",
        precondition: A,
        kbOpts: {
          weight: 100,
          primary: 70
        }
      });
    }
    runEditorCommand(e, t) {
      return e.get(O).revealNext(t);
    }
  })()), I.W.registerCommandAndKeybindingRule({
    id: "editor.gotoNextSymbolFromResult.cancel",
    weight: 100,
    when: A,
    primary: 9,
    handler(e) {
      e.get(O).reset();
    }
  }));
  let R = class {
    constructor(e) {
      ((this._listener = new Map()), (this._disposables = new C.SL()), (this._onDidChange = new y.Q5()), (this.onDidChange = this._onDidChange.event), this._disposables.add(e.onCodeEditorRemove(this._onDidRemoveEditor, this)), this._disposables.add(e.onCodeEditorAdd(this._onDidAddEditor, this)), e.listCodeEditors().forEach(this._onDidAddEditor, this));
    }
    dispose() {
      (this._disposables.dispose(), this._onDidChange.dispose(), (0, C.B9)(this._listener.values()));
    }
    _onDidAddEditor(e) {
      this._listener.set(e, (0, C.F8)(e.onDidChangeCursorPosition(t => this._onDidChange.fire({
        editor: e
      })), e.onDidChangeModelContent(t => this._onDidChange.fire({
        editor: e
      }))));
    }
    _onDidRemoveEditor(e) {
      var t;
      (null === (t = this._listener.get(e)) || void 0 === t || t.dispose(), this._listener.delete(e));
    }
  };
  R = T([M(0, g.$)], R);
  var F,
    B,
    V,
    W,
    H,
    z,
    j,
    U,
    $ = i(82276),
    K = i(22043),
    q = i(84144),
    Z = i(94565),
    G = i(90535),
    Y = i(91691),
    Q = function (e, t, i, n) {
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
  q.BH.appendMenuItem(q.eH.EditorContext, {
    submenu: q.eH.EditorContextPeek,
    title: S.N("peek.submenu", "Peek"),
    group: "navigation",
    order: 100
  });
  const X = new Set();
  function J(e) {
    const t = new e();
    return ((0, u.QG)(t), X.add(t.id), t);
  }
  class ee extends u.R6 {
    constructor(e, t) {
      (super(t), (this._configuration = e));
    }
    run(e, t) {
      if (!t.hasModel()) return Promise.resolve(void 0);
      const i = e.get(E.lT),
        n = e.get(g.$),
        r = e.get(G.e),
        a = e.get(O),
        l = t.getModel(),
        c = t.getPosition(),
        h = new d.Dl(t, 5),
        u = (0, s.eP)(this._getLocationModel(l, c, h.token), h.token).then(e => Q(this, void 0, void 0, function* () {
          if (!e || h.token.isCancellationRequested) return;
          let i;
          if (((0, o.Z9)(e.ariaMessage), e.referenceAt(l.uri, c))) {
            const e = this._getAlternativeCommand(t);
            e !== this.id && X.has(e) && (i = t.getAction(e));
          }
          const s = e.references.length;
          if (0 === s) {
            if (!this._configuration.muteMessage) {
              const e = l.getWordAtPosition(c);
              $.O.get(t).showMessage(this._getNoResultFoundMessage(e), c);
            }
          } else {
            if (1 !== s || !i) return this._onResult(n, a, t, e);
            i.run();
          }
        }), e => {
          i.error(e);
        }).finally(() => {
          h.dispose();
        });
      return (r.showWhile(u, 250), u);
    }
    _onResult(e, t, i, n) {
      return Q(this, void 0, void 0, function* () {
        const o = this._getGoToPreference(i);
        if (i instanceof p.H || !(this._configuration.openInPeek || ("peek" === o && n.references.length > 1))) {
          const s = n.firstReference(),
            r = n.references.length > 1 && "gotoAndPeek" === o,
            a = yield this._openReference(i, e, s, this._configuration.openToSide, !r);
          (r && a ? this._openInPeek(a, n) : n.dispose(), "goto" === o && t.put(s));
        } else this._openInPeek(i, n);
      });
    }
    _openReference(e, t, i, n, o) {
      return Q(this, void 0, void 0, function* () {
        let s;
        if (((0, _.vx)(i) && (s = i.targetSelectionRange), s || (s = i.range), !s)) return;
        const r = yield t.openCodeEditor({
          resource: i.uri,
          options: {
            selection: m.e.collapseToStart(s),
            selectionRevealType: 3
          }
        }, e, n);
        if (r) {
          if (o) {
            const e = r.getModel(),
              t = r.deltaDecorations([], [{
                range: s,
                options: {
                  description: "symbol-navigate-action-highlight",
                  className: "symbolHighlight"
                }
              }]);
            setTimeout(() => {
              r.getModel() === e && r.deltaDecorations(t, []);
            }, 350);
          }
          return r;
        }
      });
    }
    _openInPeek(e, t) {
      let i = b.J.get(e);
      i && e.hasModel() ? i.toggleWidget(e.getSelection(), (0, s.PG)(e => Promise.resolve(t)), this._configuration.openInPeek) : t.dispose();
    }
  }
  class te extends ee {
    _getLocationModel(e, t, i) {
      return Q(this, void 0, void 0, function* () {
        return new w.oQ(yield (0, Y.nD)(e, t, i), S.N("def.title", "Definitions"));
      });
    }
    _getNoResultFoundMessage(e) {
      return e && e.word ? S.N("noResultWord", "No definition found for '{0}'", e.word) : S.N("generic.noResults", "No definition found");
    }
    _getAlternativeCommand(e) {
      return e.getOption(50).alternativeDefinitionCommand;
    }
    _getGoToPreference(e) {
      return e.getOption(50).multipleDefinitions;
    }
  }
  const ie = a.$L && !n.$W ? 2118 : 70;
  (J((((F = class e extends te {
    constructor() {
      (super({
        openToSide: !1,
        openInPeek: !1,
        muteMessage: !1
      }, {
        id: e.id,
        label: S.N("actions.goToDecl.label", "Go to Definition"),
        alias: "Go to Definition",
        precondition: k.Ao.and(v.u.hasDefinitionProvider, v.u.isInWalkThroughSnippet.toNegated()),
        kbOpts: {
          kbExpr: v.u.editorTextFocus,
          primary: ie,
          weight: 100
        },
        contextMenuOpts: {
          group: "navigation",
          order: 1.1
        }
      }), Z.P.registerCommandAlias("editor.action.goToDeclaration", e.id));
    }
  }).id = "editor.action.revealDefinition"), F)), J((((B = class e extends te {
    constructor() {
      (super({
        openToSide: !0,
        openInPeek: !1,
        muteMessage: !1
      }, {
        id: e.id,
        label: S.N("actions.goToDeclToSide.label", "Open Definition to the Side"),
        alias: "Open Definition to the Side",
        precondition: k.Ao.and(v.u.hasDefinitionProvider, v.u.isInWalkThroughSnippet.toNegated()),
        kbOpts: {
          kbExpr: v.u.editorTextFocus,
          primary: (0, r.gx)(2089, ie),
          weight: 100
        }
      }), Z.P.registerCommandAlias("editor.action.openDeclarationToTheSide", e.id));
    }
  }).id = "editor.action.revealDefinitionAside"), B)), J((((V = class e extends te {
    constructor() {
      (super({
        openToSide: !1,
        openInPeek: !0,
        muteMessage: !1
      }, {
        id: e.id,
        label: S.N("actions.previewDecl.label", "Peek Definition"),
        alias: "Peek Definition",
        precondition: k.Ao.and(v.u.hasDefinitionProvider, K.Jy.notInPeekEditor, v.u.isInWalkThroughSnippet.toNegated()),
        kbOpts: {
          kbExpr: v.u.editorTextFocus,
          primary: 582,
          linux: {
            primary: 3140
          },
          weight: 100
        },
        contextMenuOpts: {
          menuId: q.eH.EditorContextPeek,
          group: "peek",
          order: 2
        }
      }), Z.P.registerCommandAlias("editor.action.previewDeclaration", e.id));
    }
  }).id = "editor.action.peekDefinition"), V)));
  class ne extends ee {
    _getLocationModel(e, t, i) {
      return Q(this, void 0, void 0, function* () {
        return new w.oQ(yield (0, Y.zq)(e, t, i), S.N("decl.title", "Declarations"));
      });
    }
    _getNoResultFoundMessage(e) {
      return e && e.word ? S.N("decl.noResultWord", "No declaration found for '{0}'", e.word) : S.N("decl.generic.noResults", "No declaration found");
    }
    _getAlternativeCommand(e) {
      return e.getOption(50).alternativeDeclarationCommand;
    }
    _getGoToPreference(e) {
      return e.getOption(50).multipleDeclarations;
    }
  }
  (J((((W = class e extends ne {
    constructor() {
      super({
        openToSide: !1,
        openInPeek: !1,
        muteMessage: !1
      }, {
        id: e.id,
        label: S.N("actions.goToDeclaration.label", "Go to Declaration"),
        alias: "Go to Declaration",
        precondition: k.Ao.and(v.u.hasDeclarationProvider, v.u.isInWalkThroughSnippet.toNegated()),
        contextMenuOpts: {
          group: "navigation",
          order: 1.3
        }
      });
    }
    _getNoResultFoundMessage(e) {
      return e && e.word ? S.N("decl.noResultWord", "No declaration found for '{0}'", e.word) : S.N("decl.generic.noResults", "No declaration found");
    }
  }).id = "editor.action.revealDeclaration"), W)), J(class extends ne {
    constructor() {
      super({
        openToSide: !1,
        openInPeek: !0,
        muteMessage: !1
      }, {
        id: "editor.action.peekDeclaration",
        label: S.N("actions.peekDecl.label", "Peek Declaration"),
        alias: "Peek Declaration",
        precondition: k.Ao.and(v.u.hasDeclarationProvider, K.Jy.notInPeekEditor, v.u.isInWalkThroughSnippet.toNegated()),
        contextMenuOpts: {
          menuId: q.eH.EditorContextPeek,
          group: "peek",
          order: 3
        }
      });
    }
  }));
  class oe extends ee {
    _getLocationModel(e, t, i) {
      return Q(this, void 0, void 0, function* () {
        return new w.oQ(yield (0, Y.L3)(e, t, i), S.N("typedef.title", "Type Definitions"));
      });
    }
    _getNoResultFoundMessage(e) {
      return e && e.word ? S.N("goToTypeDefinition.noResultWord", "No type definition found for '{0}'", e.word) : S.N("goToTypeDefinition.generic.noResults", "No type definition found");
    }
    _getAlternativeCommand(e) {
      return e.getOption(50).alternativeTypeDefinitionCommand;
    }
    _getGoToPreference(e) {
      return e.getOption(50).multipleTypeDefinitions;
    }
  }
  (J((((H = class e extends oe {
    constructor() {
      super({
        openToSide: !1,
        openInPeek: !1,
        muteMessage: !1
      }, {
        id: e.ID,
        label: S.N("actions.goToTypeDefinition.label", "Go to Type Definition"),
        alias: "Go to Type Definition",
        precondition: k.Ao.and(v.u.hasTypeDefinitionProvider, v.u.isInWalkThroughSnippet.toNegated()),
        kbOpts: {
          kbExpr: v.u.editorTextFocus,
          primary: 0,
          weight: 100
        },
        contextMenuOpts: {
          group: "navigation",
          order: 1.4
        }
      });
    }
  }).ID = "editor.action.goToTypeDefinition"), H)), J((((z = class e extends oe {
    constructor() {
      super({
        openToSide: !1,
        openInPeek: !0,
        muteMessage: !1
      }, {
        id: e.ID,
        label: S.N("actions.peekTypeDefinition.label", "Peek Type Definition"),
        alias: "Peek Type Definition",
        precondition: k.Ao.and(v.u.hasTypeDefinitionProvider, K.Jy.notInPeekEditor, v.u.isInWalkThroughSnippet.toNegated()),
        contextMenuOpts: {
          menuId: q.eH.EditorContextPeek,
          group: "peek",
          order: 4
        }
      });
    }
  }).ID = "editor.action.peekTypeDefinition"), z)));
  class se extends ee {
    _getLocationModel(e, t, i) {
      return Q(this, void 0, void 0, function* () {
        return new w.oQ(yield (0, Y.f4)(e, t, i), S.N("impl.title", "Implementations"));
      });
    }
    _getNoResultFoundMessage(e) {
      return e && e.word ? S.N("goToImplementation.noResultWord", "No implementation found for '{0}'", e.word) : S.N("goToImplementation.generic.noResults", "No implementation found");
    }
    _getAlternativeCommand(e) {
      return e.getOption(50).alternativeImplementationCommand;
    }
    _getGoToPreference(e) {
      return e.getOption(50).multipleImplementations;
    }
  }
  (J((((j = class e extends se {
    constructor() {
      super({
        openToSide: !1,
        openInPeek: !1,
        muteMessage: !1
      }, {
        id: e.ID,
        label: S.N("actions.goToImplementation.label", "Go to Implementations"),
        alias: "Go to Implementations",
        precondition: k.Ao.and(v.u.hasImplementationProvider, v.u.isInWalkThroughSnippet.toNegated()),
        kbOpts: {
          kbExpr: v.u.editorTextFocus,
          primary: 2118,
          weight: 100
        },
        contextMenuOpts: {
          group: "navigation",
          order: 1.45
        }
      });
    }
  }).ID = "editor.action.goToImplementation"), j)), J((((U = class e extends se {
    constructor() {
      super({
        openToSide: !1,
        openInPeek: !0,
        muteMessage: !1
      }, {
        id: e.ID,
        label: S.N("actions.peekImplementation.label", "Peek Implementations"),
        alias: "Peek Implementations",
        precondition: k.Ao.and(v.u.hasImplementationProvider, K.Jy.notInPeekEditor, v.u.isInWalkThroughSnippet.toNegated()),
        kbOpts: {
          kbExpr: v.u.editorTextFocus,
          primary: 3142,
          weight: 100
        },
        contextMenuOpts: {
          menuId: q.eH.EditorContextPeek,
          group: "peek",
          order: 5
        }
      });
    }
  }).ID = "editor.action.peekImplementation"), U)));
  class re extends ee {
    _getNoResultFoundMessage(e) {
      return e ? S.N("references.no", "No references found for '{0}'", e.word) : S.N("references.noGeneric", "No references found");
    }
    _getAlternativeCommand(e) {
      return e.getOption(50).alternativeReferenceCommand;
    }
    _getGoToPreference(e) {
      return e.getOption(50).multipleReferences;
    }
  }
  (J(class extends re {
    constructor() {
      super({
        openToSide: !1,
        openInPeek: !1,
        muteMessage: !1
      }, {
        id: "editor.action.goToReferences",
        label: S.N("goToReferences.label", "Go to References"),
        alias: "Go to References",
        precondition: k.Ao.and(v.u.hasReferenceProvider, K.Jy.notInPeekEditor, v.u.isInWalkThroughSnippet.toNegated()),
        kbOpts: {
          kbExpr: v.u.editorTextFocus,
          primary: 1094,
          weight: 100
        },
        contextMenuOpts: {
          group: "navigation",
          order: 1.45
        }
      });
    }
    _getLocationModel(e, t, i) {
      return Q(this, void 0, void 0, function* () {
        return new w.oQ(yield (0, Y.aA)(e, t, !0, i), S.N("ref.title", "References"));
      });
    }
  }), J(class extends re {
    constructor() {
      super({
        openToSide: !1,
        openInPeek: !0,
        muteMessage: !1
      }, {
        id: "editor.action.referenceSearch.trigger",
        label: S.N("references.action.label", "Peek References"),
        alias: "Peek References",
        precondition: k.Ao.and(v.u.hasReferenceProvider, K.Jy.notInPeekEditor, v.u.isInWalkThroughSnippet.toNegated()),
        contextMenuOpts: {
          menuId: q.eH.EditorContextPeek,
          group: "peek",
          order: 6
        }
      });
    }
    _getLocationModel(e, t, i) {
      return Q(this, void 0, void 0, function* () {
        return new w.oQ(yield (0, Y.aA)(e, t, !1, i), S.N("ref.title", "References"));
      });
    }
  }));
  class ae extends ee {
    constructor(e, t, i) {
      (super(e, {
        id: "editor.action.goToLocation",
        label: S.N("label.generic", "Go to Any Symbol"),
        alias: "Go to Any Symbol",
        precondition: k.Ao.and(K.Jy.notInPeekEditor, v.u.isInWalkThroughSnippet.toNegated())
      }), (this._references = t), (this._gotoMultipleBehaviour = i));
    }
    _getLocationModel(e, t, i) {
      return Q(this, void 0, void 0, function* () {
        return new w.oQ(this._references, S.N("generic.title", "Locations"));
      });
    }
    _getNoResultFoundMessage(e) {
      return ((e && S.N("generic.noResult", "No results for '{0}'", e.word)) || "");
    }
    _getGoToPreference(e) {
      var t;
      return null !== (t = this._gotoMultipleBehaviour) && void 0 !== t ? t : e.getOption(50).multipleReferences;
    }
    _getAlternativeCommand() {
      return "";
    }
  }
  (Z.P.registerCommand({
    id: "editor.action.goToLocations",
    description: {
      description: "Go to locations from a position in a file",
      args: [{
        name: "uri",
        description: "The text document in which to start",
        constraint: c.o
      }, {
        name: "position",
        description: "The position at which to start",
        constraint: f.L.isIPosition
      }, {
        name: "locations",
        description: "An array of locations.",
        constraint: Array
      }, {
        name: "multiple",
        description: "Define what to do when having multiple results, either `peek`, `gotoAndPeek`, or `goto"
      }, {
        name: "noResultsMessage",
        description: "Human readable message that shows when locations is empty."
      }]
    },
    handler: (e, t, i, n, o, s, r) => Q(void 0, void 0, void 0, function* () {
      ((0, l.p_)(c.o.isUri(t)), (0, l.p_)(f.L.isIPosition(i)), (0, l.p_)(Array.isArray(n)), (0, l.p_)(void 0 === o || "string" == typeof o), (0, l.p_)(void 0 === r || "boolean" == typeof r));
      const a = e.get(g.$),
        d = yield a.openCodeEditor({
          resource: t
        }, a.getFocusedCodeEditor());
      if ((0, h.CL)(d)) return (d.setPosition(i), d.revealPositionInCenterIfOutsideViewport(i, 0), d.invokeWithinContext(e => {
        const t = new (class extends ae {
          _getNoResultFoundMessage(e) {
            return s || super._getNoResultFoundMessage(e);
          }
        })({
          muteMessage: !Boolean(s),
          openInPeek: Boolean(r),
          openToSide: !1
        }, n, o);
        e.get(N.TG).invokeFunction(t.run.bind(t), d);
      }));
    })
  }), Z.P.registerCommand({
    id: "editor.action.peekLocations",
    description: {
      description: "Peek locations from a position in a file",
      args: [{
        name: "uri",
        description: "The text document in which to start",
        constraint: c.o
      }, {
        name: "position",
        description: "The position at which to start",
        constraint: f.L.isIPosition
      }, {
        name: "locations",
        description: "An array of locations.",
        constraint: Array
      }, {
        name: "multiple",
        description: "Define what to do when having multiple results, either `peek`, `gotoAndPeek`, or `goto"
      }]
    },
    handler: (e, t, i, n, o) => Q(void 0, void 0, void 0, function* () {
      e.get(Z.H).executeCommand("editor.action.goToLocations", t, i, n, o, void 0, !0);
    })
  }), Z.P.registerCommand({
    id: "editor.action.findReferences",
    handler: (e, t, i) => {
      ((0, l.p_)(c.o.isUri(t)), (0, l.p_)(f.L.isIPosition(i)));
      const n = e.get(g.$);
      return n.openCodeEditor({
        resource: t
      }, n.getFocusedCodeEditor()).then(e => {
        if (!(0, h.CL)(e) || !e.hasModel()) return;
        const t = b.J.get(e);
        if (!t) return;
        const n = (0, s.PG)(t => (0, Y.aA)(e.getModel(), f.L.lift(i), !1, t).then(e => new w.oQ(e, S.N("ref.title", "References")))),
          o = new m.e(i.lineNumber, i.column, i.lineNumber, i.column);
        return Promise.resolve(t.toggleWidget(o, n, !1));
      });
    }
  }), Z.P.registerCommandAlias("editor.action.showReferences", "editor.action.peekLocations"), q.BH.appendMenuItems([{
    id: q.eH.MenubarGoMenu,
    item: {
      command: {
        id: "editor.action.revealDefinition",
        title: S.N({
          key: "miGotoDefinition",
          comment: ["&& denotes a mnemonic"]
        }, "Go to &&Definition")
      },
      group: "4_symbol_nav",
      order: 2
    }
  }, {
    id: q.eH.MenubarGoMenu,
    item: {
      command: {
        id: "editor.action.revealDeclaration",
        title: S.N({
          key: "miGotoDeclaration",
          comment: ["&& denotes a mnemonic"]
        }, "Go to &&Declaration")
      },
      group: "4_symbol_nav",
      order: 3
    }
  }, {
    id: q.eH.MenubarGoMenu,
    item: {
      command: {
        id: "editor.action.goToTypeDefinition",
        title: S.N({
          key: "miGotoTypeDefinition",
          comment: ["&& denotes a mnemonic"]
        }, "Go to &&Type Definition")
      },
      group: "4_symbol_nav",
      order: 3
    }
  }, {
    id: q.eH.MenubarGoMenu,
    item: {
      command: {
        id: "editor.action.goToImplementation",
        title: S.N({
          key: "miGotoImplementation",
          comment: ["&& denotes a mnemonic"]
        }, "Go to &&Implementations")
      },
      group: "4_symbol_nav",
      order: 4
    }
  }, {
    id: q.eH.MenubarGoMenu,
    item: {
      command: {
        id: "editor.action.goToReferences",
        title: S.N({
          key: "miGotoReference",
          comment: ["&& denotes a mnemonic"]
        }, "Go to &&References")
      },
      group: "4_symbol_nav",
      order: 5
    }
  }]));
};