module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Bb: () => _,
    MN: () => b,
    RB: () => v,
    TM: () => y,
    aI: () => k,
    bA: () => C,
    uH: () => w
  });
  var n = i(9488),
    o = i(71050),
    s = i(17301),
    r = i(5976),
    a = i(70666),
    l = i(39925),
    c = i(24314),
    d = i(3860),
    h = i(44101),
    u = i(51200),
    g = i(94565),
    p = i(90535),
    f = i(89532),
    m = function (e, t, i, n) {
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
  const v = "editor.action.codeAction",
    _ = "editor.action.refactor",
    b = "editor.action.sourceAction",
    w = "editor.action.organizeImports",
    y = "editor.action.fixAll";
  class C {
    constructor(e, t) {
      ((this.action = e), (this.provider = t));
    }
    resolve(e) {
      var t;
      return m(this, void 0, void 0, function* () {
        if ((null === (t = this.provider) || void 0 === t ? void 0 : t.resolveCodeAction) && !this.action.edit) {
          let t;
          try {
            t = yield this.provider.resolveCodeAction(this.action, e);
          } catch (e) {
            (0, s.Cp)(e);
          }
          t && (this.action.edit = t.edit);
        }
        return this;
      });
    }
  }
  class x extends r.JT {
    constructor(e, t, i) {
      (super(), (this.documentation = t), this._register(i), (this.allActions = [...e].sort(x.codeActionsComparator)), (this.validActions = this.allActions.filter(({
        action: e
      }) => !e.disabled)));
    }
    static codeActionsComparator({
      action: e
    }, {
      action: t
    }) {
      return e.isPreferred && !t.isPreferred ? -1 : !e.isPreferred && t.isPreferred ? 1 : (0, n.Of)(e.diagnostics) ? (0, n.Of)(t.diagnostics) ? e.diagnostics[0].message.localeCompare(t.diagnostics[0].message) : -1 : (0, n.Of)(t.diagnostics) ? 1 : 0;
    }
    get hasAutoFix() {
      return this.validActions.some(({
        action: e
      }) => !!e.kind && f.yN.QuickFix.contains(new f.yN(e.kind)) && !!e.isPreferred);
    }
  }
  const S = {
    actions: [],
    documentation: void 0
  };
  function k(e, t, i, o, a) {
    var c;
    const d = i.filter || {},
      u = {
        only: null === (c = d.include) || void 0 === c ? void 0 : c.value,
        trigger: i.type
      },
      g = new l.YQ(e, a),
      p = (function (e, t) {
        return h.H9.all(e).filter(e => !e.providedCodeActionKinds || e.providedCodeActionKinds.some(e => (0, f.EU)(t, new f.yN(e))));
      })(e, d),
      v = new r.SL(),
      _ = p.map(i => m(this, void 0, void 0, function* () {
        try {
          o.report(i);
          const n = yield i.provideCodeActions(e, t, u, g.token);
          if ((n && v.add(n), g.token.isCancellationRequested)) return S;
          const s = ((null == n ? void 0 : n.actions) || []).filter(e => e && (0, f.Yl)(d, e)),
            r = (function (e, t, i) {
              if (!e.documentation) return;
              const n = e.documentation.map(e => ({
                kind: new f.yN(e.kind),
                command: e.command
              }));
              if (i) {
                let e;
                for (const t of n) t.kind.contains(i) && (e ? e.kind.contains(t.kind) && (e = t) : (e = t));
                if (e) return null == e ? void 0 : e.command;
              }
              for (const e of t) if (e.kind) for (const t of n) if (t.kind.contains(new f.yN(e.kind))) return t.command;
              return;
            })(i, s, d.include);
          return {
            actions: s.map(e => new C(e, i)),
            documentation: r
          };
        } catch (e) {
          if ((0, s.VV)(e)) throw e;
          return ((0, s.Cp)(e), S);
        }
      })),
      b = h.H9.onDidChange(() => {
        const t = h.H9.all(e);
        (0, n.fS)(t, p) || g.cancel();
      });
    return Promise.all(_).then(e => {
      const t = (0, n.xH)(e.map(e => e.actions)),
        i = (0, n.kX)(e.map(e => e.documentation));
      return new x(t, i, v);
    }).finally(() => {
      (b.dispose(), g.dispose());
    });
  }
  g.P.registerCommand("_executeCodeActionProvider", function (e, t, i, n, r) {
    return m(this, void 0, void 0, function* () {
      if (!(t instanceof a.o)) throw (0, s.b1)();
      const l = e.get(u.q).getModel(t);
      if (!l) throw (0, s.b1)();
      const h = d.Y.isISelection(i) ? d.Y.liftSelection(i) : c.e.isIRange(i) ? l.validateRange(i) : void 0;
      if (!h) throw (0, s.b1)();
      const g = "string" == typeof n ? new f.yN(n) : void 0,
        m = yield k(l, h, {
          type: 1,
          filter: {
            includeSourceActions: !0,
            include: g
          }
        }, p.E.None, o.T.None),
        v = [],
        _ = Math.min(m.validActions.length, "number" == typeof r ? r : 0);
      for (let e = 0; e < _; e++) v.push(m.validActions[e].resolve(o.T.None));
      try {
        return (yield Promise.all(v), m.validActions.map(e => e.action));
      } finally {
        setTimeout(() => m.dispose(), 100);
      }
    });
  });
};