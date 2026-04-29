module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    GotoLineAction: () => H,
    StandaloneGotoSymbolQuickAccessProvider: () => W
  }));
  (i(28609), i(24954));
  var n = i(71050),
    o = i(73046),
    s = i(75392),
    r = i(88721),
    a = i(1432),
    l = i(97295);
  const c = [void 0, []];
  function d(e, t, i = 0, n = 0) {
    const o = t;
    return o.values && o.values.length > 1 ? (function (e, t, i, n) {
      let o = 0;
      const s = [];
      for (const r of t) {
        const [t, a] = h(e, r, i, n);
        if ("number" != typeof t) return c;
        ((o += t), s.push(...a));
      }
      return [o, u(s)];
    })(e, o.values, i, n) : h(e, t, i, n);
  }
  function h(e, t, i, n) {
    const o = (0, s.EW)(t.original, t.originalLowercase, i, e, e.toLowerCase(), n, !0);
    return o ? [o[0], (0, s.mB)(o)] : c;
  }
  function u(e) {
    const t = e.sort((e, t) => e.start - t.start),
      i = [];
    let n;
    for (const e of t) n && g(n, e) ? ((n.start = Math.min(n.start, e.start)), (n.end = Math.max(n.end, e.end))) : ((n = e), i.push(e));
    return i;
  }
  function g(e, t) {
    return !(e.end < t.start) && !(t.end < e.start);
  }
  function p(e) {
    return e.startsWith('"') && e.endsWith('"');
  }
  const f = " ";
  function m(e) {
    "string" != typeof e && (e = "");
    const t = e.toLowerCase(),
      {
        pathNormalized: i,
        normalized: n,
        normalizedLowercase: o
      } = v(e),
      s = i.indexOf(r.ir) >= 0,
      a = p(e);
    let l;
    const c = e.split(f);
    if (c.length > 1) for (const e of c) {
      const t = p(e),
        {
          pathNormalized: i,
          normalized: n,
          normalizedLowercase: o
        } = v(e);
      n && (l || (l = []), l.push({
        original: e,
        originalLowercase: e.toLowerCase(),
        pathNormalized: i,
        normalized: n,
        normalizedLowercase: o,
        expectContiguousMatch: t
      }));
    }
    return {
      original: e,
      originalLowercase: t,
      pathNormalized: i,
      normalized: n,
      normalizedLowercase: o,
      values: l,
      containsPathSeparator: s,
      expectContiguousMatch: a
    };
  }
  function v(e) {
    let t;
    t = a.ED ? e.replace(/\//g, r.ir) : e.replace(/\\/g, r.ir);
    const i = (0, l.R1)(t).replace(/\s|"/g, "");
    return {
      pathNormalized: t,
      normalized: i,
      normalizedLowercase: i.toLowerCase()
    };
  }
  function _(e) {
    return Array.isArray(e) ? m(e.map(e => e.original).join(f)) : m(e.original);
  }
  var b = i(5976),
    w = i(24314),
    y = i(44101),
    C = i(86895),
    x = i(98275),
    S = i(63580),
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
  class L extends x.X {
    constructor(e = Object.create(null)) {
      (super(e), (this.options = e), (this.options.canAcceptInBackground = !0));
    }
    provideWithoutTextEditor(e) {
      return (this.provideLabelPick(e, (0, S.N)("cannotRunGotoSymbolWithoutEditor", "To go to a symbol, first open a text editor with symbol information.")), b.JT.None);
    }
    provideWithTextEditor(e, t, i) {
      const n = e.editor,
        o = this.getModel(n);
      return o ? y.vJ.has(o) ? this.doProvideWithEditorSymbols(e, o, t, i) : this.doProvideWithoutEditorSymbols(e, o, t, i) : b.JT.None;
    }
    doProvideWithoutEditorSymbols(e, t, i, n) {
      const o = new b.SL();
      return (this.provideLabelPick(i, (0, S.N)("cannotRunGotoSymbolWithoutSymbolProvider", "The active text editor does not provide symbol information.")), (() => {
        k(this, void 0, void 0, function* () {
          (yield this.waitForLanguageSymbolRegistry(t, o)) && !n.isCancellationRequested && o.add(this.doProvideWithEditorSymbols(e, t, i, n));
        });
      })(), o);
    }
    provideLabelPick(e, t) {
      ((e.items = [{
        label: t,
        index: 0,
        kind: 14
      }]), (e.ariaLabel = t));
    }
    waitForLanguageSymbolRegistry(e, t) {
      return k(this, void 0, void 0, function* () {
        if (y.vJ.has(e)) return !0;
        let i;
        const n = new Promise(e => (i = e)),
          o = t.add(y.vJ.onDidChange(() => {
            y.vJ.has(e) && (o.dispose(), i(!0));
          }));
        return (t.add((0, b.OF)(() => i(!1))), n);
      });
    }
    doProvideWithEditorSymbols(e, t, i, o) {
      const s = e.editor,
        r = new b.SL();
      (r.add(i.onDidAccept(t => {
        const [n] = i.selectedItems;
        n && n.range && (this.gotoLocation(e, {
          range: n.range.selection,
          keyMods: i.keyMods,
          preserveFocus: t.inBackground
        }), t.inBackground || i.hide());
      })), r.add(i.onDidTriggerItemButton(({
        item: t
      }) => {
        t && t.range && (this.gotoLocation(e, {
          range: t.range.selection,
          keyMods: i.keyMods,
          forceSideBySide: !0
        }), i.hide());
      })));
      const a = this.getDocumentSymbols(t, o);
      let l;
      const c = () => k(this, void 0, void 0, function* () {
        (null == l || l.dispose(!0), (i.busy = !1), (l = new n.A(o)), (i.busy = !0));
        try {
          const e = m(i.value.substr(L.PREFIX.length).trim()),
            t = yield this.doGetSymbolPicks(a, e, void 0, l.token);
          if (o.isCancellationRequested) return;
          t.length > 0 ? (i.items = t) : e.original.length > 0 ? this.provideLabelPick(i, (0, S.N)("noMatchingSymbolResults", "No matching editor symbols")) : this.provideLabelPick(i, (0, S.N)("noSymbolResults", "No editor symbols"));
        } finally {
          o.isCancellationRequested || (i.busy = !1);
        }
      });
      (r.add(i.onDidChangeValue(() => c())), c());
      let d = !0;
      return (r.add(i.onDidChangeActive(() => {
        const [e] = i.activeItems;
        if (e && e.range) {
          if (d) return void (d = !1);
          (s.revealRangeInCenter(e.range.selection, 0), this.addDecorations(s, e.range.decoration));
        }
      })), r);
    }
    doGetSymbolPicks(e, t, i, n) {
      return k(this, void 0, void 0, function* () {
        const s = yield e;
        if (n.isCancellationRequested) return [];
        const r = 0 === t.original.indexOf(L.SCOPE_PREFIX),
          a = r ? 1 : 0;
        let c, h;
        t.values && t.values.length > 1 ? ((c = _(t.values[0])), (h = _(t.values.slice(1)))) : (c = t);
        const u = [];
        for (let f = 0; f < s.length; f++) {
          const m = s[f],
            v = (0, l.fy)(m.name),
            b = `$(symbol-${y.uZ.toString(m.kind) || "property"}) ${v}`,
            C = b.length - v.length;
          let x,
            k,
            I,
            E,
            T = m.containerName;
          if (((null == i ? void 0 : i.extraContainerLabel) && (T = T ? `${i.extraContainerLabel} • ${T}` : i.extraContainerLabel), t.original.length > a)) {
            let A = !1;
            if ((c !== t && (([x, k] = d(b, Object.assign(Object.assign({}, t), {
              values: void 0
            }), a, C)), "number" == typeof x && (A = !0)), "number" != typeof x && (([x, k] = d(b, c, a, C)), "number" != typeof x))) continue;
            if (!A && h) {
              if ((T && h.original.length > 0 && ([I, E] = d(T, h)), "number" != typeof I)) continue;
              "number" == typeof x && (x += I);
            }
          }
          const M = m.tags && m.tags.indexOf(1) >= 0;
          u.push({
            index: f,
            kind: m.kind,
            score: x,
            label: b,
            ariaLabel: v,
            description: T,
            highlights: M ? void 0 : {
              label: k,
              description: E
            },
            range: {
              selection: w.e.collapseToStart(m.selectionRange),
              decoration: m.range
            },
            strikethrough: M,
            buttons: (() => {
              var e, t;
              const i = (null === (e = this.options) || void 0 === e ? void 0 : e.openSideBySideDirection) ? null === (t = this.options) || void 0 === t ? void 0 : t.openSideBySideDirection() : void 0;
              if (i) return [{
                iconClass: "right" === i ? o.lA.splitHorizontal.classNames : o.lA.splitVertical.classNames,
                tooltip: "right" === i ? (0, S.N)("openToSide", "Open to the Side") : (0, S.N)("openToBottom", "Open to the Bottom")
              }];
            })()
          });
        }
        const g = u.sort((e, t) => r ? this.compareByKindAndScore(e, t) : this.compareByScore(e, t));
        let p = [];
        if (r) {
          let O,
            P,
            R = 0;
          function F() {
            P && "number" == typeof O && R > 0 && (P.label = (0, l.WU)(D[O] || N, R));
          }
          for (const B of g) (O !== B.kind ? (F(), (O = B.kind), (R = 1), (P = {
            type: "separator"
          }), p.push(P)) : R++, p.push(B));
          F();
        } else g.length > 0 && (p = [{
          label: (0, S.N)("symbols", "symbols ({0})", u.length),
          type: "separator"
        }, ...g]);
        return p;
      });
    }
    compareByScore(e, t) {
      if ("number" != typeof e.score && "number" == typeof t.score) return 1;
      if ("number" == typeof e.score && "number" != typeof t.score) return -1;
      if ("number" == typeof e.score && "number" == typeof t.score) {
        if (e.score > t.score) return -1;
        if (e.score < t.score) return 1;
      }
      return e.index < t.index ? -1 : e.index > t.index ? 1 : 0;
    }
    compareByKindAndScore(e, t) {
      const i = D[e.kind] || N,
        n = D[t.kind] || N,
        o = i.localeCompare(n);
      return 0 === o ? this.compareByScore(e, t) : o;
    }
    getDocumentSymbols(e, t) {
      return k(this, void 0, void 0, function* () {
        const i = yield C.C3.create(e, t);
        return t.isCancellationRequested ? [] : i.asListOfDocumentSymbols();
      });
    }
  }
  ((L.PREFIX = "@"), (L.SCOPE_PREFIX = ":"), (L.PREFIX_BY_CATEGORY = `${L.PREFIX}${L.SCOPE_PREFIX}`));
  const N = (0, S.N)("property", "properties ({0})"),
    D = {
      5: (0, S.N)("method", "methods ({0})"),
      11: (0, S.N)("function", "functions ({0})"),
      8: (0, S.N)("_constructor", "constructors ({0})"),
      12: (0, S.N)("variable", "variables ({0})"),
      4: (0, S.N)("class", "classes ({0})"),
      22: (0, S.N)("struct", "structs ({0})"),
      23: (0, S.N)("event", "events ({0})"),
      24: (0, S.N)("operator", "operators ({0})"),
      10: (0, S.N)("interface", "interfaces ({0})"),
      2: (0, S.N)("namespace", "namespaces ({0})"),
      3: (0, S.N)("package", "packages ({0})"),
      25: (0, S.N)("typeParameter", "type parameters ({0})"),
      1: (0, S.N)("modules", "modules ({0})"),
      6: (0, S.N)("property", "properties ({0})"),
      9: (0, S.N)("enum", "enumerations ({0})"),
      21: (0, S.N)("enumMember", "enumeration members ({0})"),
      14: (0, S.N)("string", "strings ({0})"),
      0: (0, S.N)("file", "files ({0})"),
      17: (0, S.N)("array", "arrays ({0})"),
      15: (0, S.N)("number", "numbers ({0})"),
      16: (0, S.N)("boolean", "booleans ({0})"),
      18: (0, S.N)("object", "objects ({0})"),
      19: (0, S.N)("key", "keys ({0})"),
      7: (0, S.N)("field", "fields ({0})"),
      13: (0, S.N)("constant", "constants ({0})")
    };
  var I = i(89872),
    E = i(90725),
    T = i(11640),
    M = i(98401),
    A = i(20913),
    O = i(4669),
    P = i(16830),
    R = i(29102),
    F = i(41157),
    B = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    V = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let W = class extends L {
    constructor(e) {
      (super(), (this.editorService = e), (this.onDidActiveTextEditorControlChange = O.ju.None));
    }
    get activeTextEditorControl() {
      return (0, M.f6)(this.editorService.getFocusedCodeEditor());
    }
  };
  ((W = B([V(0, T.$)], W)), I.B.as(E.IP.Quickaccess).registerQuickAccessProvider({
    ctor: W,
    prefix: L.PREFIX,
    helpEntries: [{
      description: A.aq.quickOutlineActionLabel,
      prefix: L.PREFIX,
      needsEditor: !0
    }, {
      description: A.aq.quickOutlineByCategoryActionLabel,
      prefix: L.PREFIX_BY_CATEGORY,
      needsEditor: !0
    }]
  }));
  class H extends P.R6 {
    constructor() {
      super({
        id: "editor.action.quickOutline",
        label: A.aq.quickOutlineActionLabel,
        alias: "Go to Symbol...",
        precondition: R.u.hasDocumentSymbolProvider,
        kbOpts: {
          kbExpr: R.u.focus,
          primary: 3117,
          weight: 100
        },
        contextMenuOpts: {
          group: "navigation",
          order: 3
        }
      });
    }
    run(e) {
      e.get(F.eJ).quickAccess.show(L.PREFIX);
    }
  }
  (0, P.Qr)(H);
};