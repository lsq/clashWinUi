module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    GotoLineAction: () => K,
    StandaloneCommandsQuickAccessProvider: () => $
  }));
  var n = i(89872),
    o = i(90725),
    s = i(20913),
    r = i(11640),
    a = i(21212),
    l = i(9488),
    c = i(98401),
    d = i(63580);
  function h(e, t) {
    return t && (e.stack || e.stacktrace) ? d.N("stackTrace.format", "{0}: {1}", g(e), u(e.stack) || u(e.stacktrace)) : g(e);
  }
  function u(e) {
    return Array.isArray(e) ? e.join("\n") : e;
  }
  function g(e) {
    return "string" == typeof e.code && "number" == typeof e.errno && "string" == typeof e.syscall ? d.N("nodeExceptionMessage", "A system error occurred ({0})", e.message) : e.message || d.N("error.defaultMessage", "An unknown error occurred. Please consult the log for more details.");
  }
  function p(e = null, t = !1) {
    if (!e) return d.N("error.defaultMessage", "An unknown error occurred. Please consult the log for more details.");
    if (Array.isArray(e)) {
      const i = l.kX(e),
        n = p(i[0], t);
      return i.length > 1 ? d.N("error.moreErrors", "{0} ({1} errors in total)", n, i.length) : n;
    }
    if (c.HD(e)) return e;
    if (e.detail) {
      const i = e.detail;
      if (i.error) return h(i.error, t);
      if (i.exception) return h(i.exception, t);
    }
    return e.stack ? h(e, t) : e.message ? e.message : d.N("error.defaultMessage", "An unknown error occurred. Please consult the log for more details.");
  }
  var f,
    m = i(17301),
    v = i(75392),
    _ = i(5976),
    b = i(43702),
    w = i(14603),
    y = i(94565),
    C = i(33108),
    x = i(28820),
    S = i(72065),
    k = i(91847),
    L = i(15393),
    N = i(71050),
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
  function I(e) {
    const t = e;
    return Array.isArray(t.items);
  }
  !(function (e) {
    ((e[(e.NO_ACTION = 0)] = "NO_ACTION"), (e[(e.CLOSE_PICKER = 1)] = "CLOSE_PICKER"), (e[(e.REFRESH_PICKER = 2)] = "REFRESH_PICKER"), (e[(e.REMOVE_ITEM = 3)] = "REMOVE_ITEM"));
  })(f || (f = {}));
  class E extends _.JT {
    constructor(e, t) {
      (super(), (this.prefix = e), (this.options = t));
    }
    provide(e, t) {
      var i;
      const n = new _.SL();
      let o;
      ((e.canAcceptInBackground = !!(null === (i = this.options) || void 0 === i ? void 0 : i.canAcceptInBackground)), (e.matchOnLabel = e.matchOnDescription = e.matchOnDetail = e.sortByLabel = !1));
      const s = n.add(new _.XK()),
        r = () => D(this, void 0, void 0, function* () {
          const i = (s.value = new _.SL());
          (null == o || o.dispose(!0), (e.busy = !1), (o = new N.A(t)));
          const n = o.token,
            r = e.value.substr(this.prefix.length).trim(),
            a = this._getPicks(r, i, n),
            l = (t, i) => {
              var n;
              let o, s;
              if ((I(t) ? ((o = t.items), (s = t.active)) : (o = t), 0 === o.length)) {
                if (i) return !1;
                r.length > 0 && (null === (n = this.options) || void 0 === n ? void 0 : n.noResultsPick) && (o = [this.options.noResultsPick]);
              }
              return ((e.items = o), s && (e.activeItems = [s]), !0);
            };
          if (null === a) ;else if ((function (e) {
            const t = e;
            return !!t.picks && t.additionalPicks instanceof Promise;
          })(a)) {
            let t = !1,
              i = !1;
            yield Promise.all([(() => D(this, void 0, void 0, function* () {
              (yield (0, L.Vs)(E.FAST_PICKS_RACE_DELAY), n.isCancellationRequested || i || (t = l(a.picks, !0)));
            }))(), (() => D(this, void 0, void 0, function* () {
              e.busy = !0;
              try {
                const i = yield a.additionalPicks;
                if (n.isCancellationRequested) return;
                let o, s, r, c;
                if ((I(a.picks) ? ((o = a.picks.items), (s = a.picks.active)) : (o = a.picks), I(i) ? ((r = i.items), (c = i.active)) : (r = i), r.length > 0 || !t)) {
                  let t;
                  if (!s && !c) {
                    const i = e.activeItems[0];
                    i && -1 !== o.indexOf(i) && (t = i);
                  }
                  l({
                    items: [...o, ...r],
                    active: s || c || t
                  });
                }
              } finally {
                (n.isCancellationRequested || (e.busy = !1), (i = !0));
              }
            }))()]);
          } else if (a instanceof Promise) {
            e.busy = !0;
            try {
              const e = yield a;
              if (n.isCancellationRequested) return;
              l(e);
            } finally {
              n.isCancellationRequested || (e.busy = !1);
            }
          } else l(a);
        });
      return (n.add(e.onDidChangeValue(() => r())), r(), n.add(e.onDidAccept(t => {
        const [i] = e.selectedItems;
        "function" == typeof (null == i ? void 0 : i.accept) && (t.inBackground || e.hide(), i.accept(e.keyMods, t));
      })), n.add(e.onDidTriggerItemButton(({
        button: i,
        item: n
      }) => D(this, void 0, void 0, function* () {
        var o, s;
        if ("function" == typeof n.trigger) {
          const a = null !== (s = null === (o = n.buttons) || void 0 === o ? void 0 : o.indexOf(i)) && void 0 !== s ? s : -1;
          if (a >= 0) {
            const i = n.trigger(a, e.keyMods),
              o = "number" == typeof i ? i : yield i;
            if (t.isCancellationRequested) return;
            switch (o) {
              case f.NO_ACTION:
                break;
              case f.CLOSE_PICKER:
                e.hide();
                break;
              case f.REFRESH_PICKER:
                r();
                break;
              case f.REMOVE_ITEM:
                const t = e.items.indexOf(n);
                if (-1 !== t) {
                  const i = e.items.slice(),
                    n = i.splice(t, 1),
                    o = e.activeItems.filter(e => e !== n[0]),
                    s = e.keepScrollPosition;
                  ((e.keepScrollPosition = !0), (e.items = i), o && (e.activeItems = o), (e.keepScrollPosition = s));
                }
            }
          }
        }
      }))), n);
    }
  }
  E.FAST_PICKS_RACE_DELAY = 200;
  var T = i(26904),
    M = i(10829),
    A = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    O = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    P = function (e, t, i, n) {
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
  let R = class e extends E {
    constructor(t, i, n, o, s, r) {
      (super(e.PREFIX, t), (this.instantiationService = i), (this.keybindingService = n), (this.commandService = o), (this.telemetryService = s), (this.dialogService = r), (this.commandsHistory = this._register(this.instantiationService.createInstance(F))), (this.options = t));
    }
    _getPicks(t, i, n) {
      return P(this, void 0, void 0, function* () {
        const o = yield this.getCommandPicks(i, n);
        if (n.isCancellationRequested) return [];
        const s = [];
        for (const i of o) {
          const n = (0, c.f6)(e.WORD_FILTER(t, i.label)),
            o = i.commandAlias ? (0, c.f6)(e.WORD_FILTER(t, i.commandAlias)) : void 0;
          n || o ? ((i.highlights = {
            label: n,
            detail: this.options.showAlias ? o : void 0
          }), s.push(i)) : t === i.commandId && s.push(i);
        }
        const r = new Map();
        for (const e of s) {
          const t = r.get(e.label);
          t ? ((e.description = e.commandId), (t.description = t.commandId)) : r.set(e.label, e);
        }
        s.sort((e, t) => {
          const i = this.commandsHistory.peek(e.commandId),
            n = this.commandsHistory.peek(t.commandId);
          return i && n ? i > n ? -1 : 1 : i ? -1 : n ? 1 : e.label.localeCompare(t.label);
        });
        const a = [];
        let l = !1;
        for (let e = 0; e < s.length; e++) {
          const t = s[e],
            i = this.keybindingService.lookupKeybinding(t.commandId),
            n = i ? (0, d.N)("commandPickAriaLabelWithKeybinding", "{0}, {1}", t.label, i.getAriaLabel()) : t.label;
          (0 === e && this.commandsHistory.peek(t.commandId) && (a.push({
            type: "separator",
            label: (0, d.N)("recentlyUsed", "recently used")
          }), (l = !0)), 0 !== e && l && !this.commandsHistory.peek(t.commandId) && (a.push({
            type: "separator",
            label: (0, d.N)("morecCommands", "other commands")
          }), (l = !1)), a.push(Object.assign(Object.assign({}, t), {
            ariaLabel: n,
            detail: this.options.showAlias && t.commandAlias !== t.label ? t.commandAlias : void 0,
            keybinding: i,
            accept: () => P(this, void 0, void 0, function* () {
              (this.commandsHistory.push(t.commandId), this.telemetryService.publicLog2("workbenchActionExecuted", {
                id: t.commandId,
                from: "quick open"
              }));
              try {
                yield this.commandService.executeCommand(t.commandId);
              } catch (e) {
                (0, m.VV)(e) || this.dialogService.show(w.Z.Error, (0, d.N)("canNotRun", "Command '{0}' resulted in an error ({1})", t.label, p(e)));
              }
            })
          })));
        }
        return a;
      });
    }
  };
  ((R.PREFIX = ">"), (R.WORD_FILTER = (0, v.or)(v.Ji, v.KZ, v.ir)), (R = A([O(1, S.TG), O(2, k.d), O(3, y.H), O(4, M.b), O(5, x.S)], R)));
  let F = class e extends _.JT {
    constructor(e, t) {
      (super(), (this.storageService = e), (this.configurationService = t), (this.configuredCommandsHistoryLength = 0), this.updateConfiguration(), this.load(), this.registerListeners());
    }
    registerListeners() {
      this._register(this.configurationService.onDidChangeConfiguration(() => this.updateConfiguration()));
    }
    updateConfiguration() {
      ((this.configuredCommandsHistoryLength = e.getConfiguredCommandHistoryLength(this.configurationService)), e.cache && e.cache.limit !== this.configuredCommandsHistoryLength && ((e.cache.limit = this.configuredCommandsHistoryLength), e.saveState(this.storageService)));
    }
    load() {
      const t = this.storageService.get(e.PREF_KEY_CACHE, 0);
      let i;
      if (t) try {
        i = JSON.parse(t);
      } catch (e) {}
      const n = (e.cache = new b.z6(this.configuredCommandsHistoryLength, 1));
      if (i) {
        let e;
        ((e = i.usesLRU ? i.entries : i.entries.sort((e, t) => e.value - t.value)), e.forEach(e => n.set(e.key, e.value)));
      }
      e.counter = this.storageService.getNumber(e.PREF_KEY_COUNTER, 0, e.counter);
    }
    push(t) {
      e.cache && (e.cache.set(t, e.counter++), e.saveState(this.storageService));
    }
    peek(t) {
      var i;
      return null === (i = e.cache) || void 0 === i ? void 0 : i.peek(t);
    }
    static saveState(t) {
      if (!e.cache) return;
      const i = {
        usesLRU: !0,
        entries: []
      };
      (e.cache.forEach((e, t) => i.entries.push({
        key: t,
        value: e
      })), t.store(e.PREF_KEY_CACHE, JSON.stringify(i), 0, 0), t.store(e.PREF_KEY_COUNTER, e.counter, 0, 0));
    }
    static getConfiguredCommandHistoryLength(t) {
      var i, n;
      const o = null === (n = null === (i = t.getValue().workbench) || void 0 === i ? void 0 : i.commandPalette) || void 0 === n ? void 0 : n.history;
      return "number" == typeof o ? o : e.DEFAULT_COMMANDS_HISTORY_LENGTH;
    }
  };
  ((F.DEFAULT_COMMANDS_HISTORY_LENGTH = 50), (F.PREF_KEY_CACHE = "commandPalette.mru.cache"), (F.PREF_KEY_COUNTER = "commandPalette.mru.counter"), (F.counter = 1), (F = A([O(0, T.Uy), O(1, C.Ui)], F)));
  class B extends R {
    constructor(e, t, i, n, o, s) {
      super(e, t, i, n, o, s);
    }
    getCodeEditorCommandPicks() {
      const e = this.activeTextEditorControl;
      if (!e) return [];
      const t = [];
      for (const i of e.getSupportedActions()) t.push({
        commandId: i.id,
        commandAlias: i.alias,
        label: (0, a.x$)(i.label) || i.id
      });
      return t;
    }
  }
  var V = i(16830),
    W = i(29102),
    H = i(41157),
    z = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    j = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    U = function (e, t, i, n) {
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
  let $ = class extends B {
    constructor(e, t, i, n, o, s) {
      (super({
        showAlias: !1
      }, e, i, n, o, s), (this.codeEditorService = t));
    }
    get activeTextEditorControl() {
      return (0, c.f6)(this.codeEditorService.getFocusedCodeEditor());
    }
    getCommandPicks() {
      return U(this, void 0, void 0, function* () {
        return this.getCodeEditorCommandPicks();
      });
    }
  };
  (($ = z([j(0, S.TG), j(1, r.$), j(2, k.d), j(3, y.H), j(4, M.b), j(5, x.S)], $)), n.B.as(o.IP.Quickaccess).registerQuickAccessProvider({
    ctor: $,
    prefix: $.PREFIX,
    helpEntries: [{
      description: s.UX.quickCommandHelp,
      needsEditor: !0
    }]
  }));
  class K extends V.R6 {
    constructor() {
      super({
        id: "editor.action.quickCommand",
        label: s.UX.quickCommandActionLabel,
        alias: "Command Palette",
        precondition: void 0,
        kbOpts: {
          kbExpr: W.u.focus,
          primary: 59,
          weight: 100
        },
        contextMenuOpts: {
          group: "z_commands",
          order: 1
        }
      });
    }
    run(e) {
      e.get(H.eJ).quickAccess.show($.PREFIX);
    }
  }
  (0, V.Qr)(K);
};