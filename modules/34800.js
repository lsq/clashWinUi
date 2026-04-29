const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    LinkDetector: () => P
  }));
  var n = i(15393),
    o = i(71050),
    s = i(17301),
    r = i(59365),
    a = i(5976),
    l = i(66663),
    c = i(1432),
    d = i(95935),
    h = i(70666),
    u = (i(59072), i(16830)),
    g = i(44174),
    p = i(44101),
    f = i(69241),
    m = i(9488),
    v = i(98401),
    _ = i(24314),
    b = i(51200),
    w = i(94565),
    y = function (e, t, i, n) {
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
  class C {
    constructor(e, t) {
      ((this._link = e), (this._provider = t));
    }
    toJSON() {
      return {
        range: this.range,
        url: this.url,
        tooltip: this.tooltip
      };
    }
    get range() {
      return this._link.range;
    }
    get url() {
      return this._link.url;
    }
    get tooltip() {
      return this._link.tooltip;
    }
    resolve(e) {
      return y(this, void 0, void 0, function* () {
        return this._link.url ? this._link.url : "function" == typeof this._provider.resolveLink ? Promise.resolve(this._provider.resolveLink(this._link, e)).then(t => ((this._link = t || this._link), this._link.url ? this.resolve(e) : Promise.reject(new Error("missing")))) : Promise.reject(new Error("missing"));
      });
    }
  }
  class x {
    constructor(e) {
      this._disposables = new a.SL();
      let t = [];
      for (const [i, n] of e) {
        const e = i.links.map(e => new C(e, n));
        ((t = x._union(t, e)), (0, a.Wf)(i) && this._disposables.add(i));
      }
      this.links = t;
    }
    dispose() {
      (this._disposables.dispose(), (this.links.length = 0));
    }
    static _union(e, t) {
      let i,
        n,
        o,
        s,
        r = [];
      for (i = 0, o = 0, n = e.length, s = t.length; i < n && o < s;) {
        const n = e[i],
          s = t[o];
        if (_.e.areIntersectingOrTouching(n.range, s.range)) {
          i++;
          continue;
        }
        _.e.compareRangesUsingStarts(n.range, s.range) < 0 ? (r.push(n), i++) : (r.push(s), o++);
      }
      for (; i < n; i++) r.push(e[i]);
      for (; o < s; o++) r.push(t[o]);
      return r;
    }
  }
  function S(e, t) {
    const i = [],
      n = p.pM.ordered(e).reverse().map((n, o) => Promise.resolve(n.provideLinks(e, t)).then(e => {
        e && (i[o] = [e, n]);
      }, s.Cp));
    return Promise.all(n).then(() => {
      const e = new x((0, m.kX)(i));
      return t.isCancellationRequested ? (e.dispose(), new x([])) : e;
    });
  }
  w.P.registerCommand("_executeLinkProvider", (e, ...t) => y(void 0, void 0, void 0, function* () {
    let [i, n] = t;
    ((0, v.p_)(i instanceof h.o), "number" != typeof n && (n = 0));
    const s = e.get(b.q).getModel(i);
    if (!s) return [];
    const r = yield S(s, o.T.None);
    if (!r) return [];
    for (let e = 0; e < Math.min(n, r.links.length); e++) yield r.links[e].resolve(o.T.None);
    const a = r.links.slice(0);
    return (r.dispose(), a);
  }));
  var k = i(63580),
    L = i(59422),
    N = i(50988),
    D = i(73910),
    I = i(97781),
    E = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    T = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    M = function (e, t, i, n) {
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
  const A = {
    general: g.qx.register({
      description: "detected-link",
      stickiness: 1,
      collapseOnReplaceEdit: !0,
      inlineClassName: "detected-link"
    }),
    active: g.qx.register({
      description: "detected-link-active",
      stickiness: 1,
      collapseOnReplaceEdit: !0,
      inlineClassName: "detected-link-active"
    })
  };
  class O {
    constructor(e, t) {
      ((this.link = e), (this.decorationId = t));
    }
    static decoration(e, t) {
      return {
        range: e.range,
        options: O._getOptions(e, t, !1)
      };
    }
    static _getOptions(e, t, i) {
      const n = Object.assign({}, i ? A.active : A.general);
      const Lg = new Language(modifyState.language);
      return ((n.hoverMessage = (function (e, t) {
        const i = e.url && /^command:/i.test(e.url.toString()),
          n = e.tooltip ? e.tooltip : i ? k.N("links.navigate.executeCmd", Lg.executeCommand()) : k.N("links.navigate.follow", Lg.followLink()),
          o = t ? c.dz ? k.N("links.navigate.kb.meta.mac", "cmd + click") : k.N("links.navigate.kb.meta", "ctrl + click") : c.dz ? k.N("links.navigate.kb.alt.mac", "option + click") : k.N("links.navigate.kb.alt", "alt + click");
        if (e.url) {
          let t = "";
          if (/^command:/i.test(e.url.toString())) {
            const i = e.url.toString().match(/^command:([^?#]+)/);
            if (i) {
              const e = i[1];
              t = ` "${k.N("tooltip.explanation", "Execute command {0}", e)}"`;
            }
          }
          return new r.W5("", !0).appendMarkdown(`[${n}](${e.url.toString(!0).replace(/ /g, "%20")}${t}) (${o})`);
        }
        return new r.W5().appendText(`${n} (${o})`);
      })(e, t)), n);
    }
    activate(e, t) {
      e.changeDecorationOptions(this.decorationId, O._getOptions(this.link, t, !0));
    }
    deactivate(e, t) {
      e.changeDecorationOptions(this.decorationId, O._getOptions(this.link, t, !1));
    }
  }
  let P = class e {
    constructor(e, t, i) {
      ((this.listenersToRemove = new a.SL()), (this.editor = e), (this.openerService = t), (this.notificationService = i));
      let o = new f.yN(e);
      (this.listenersToRemove.add(o), this.listenersToRemove.add(o.onMouseMoveOrRelevantKeyDown(([e, t]) => {
        this._onEditorMouseMove(e, t);
      })), this.listenersToRemove.add(o.onExecute(e => {
        this.onEditorMouseUp(e);
      })), this.listenersToRemove.add(o.onCancel(e => {
        this.cleanUpActiveLinkDecoration();
      })), (this.enabled = e.getOption(62)), this.listenersToRemove.add(e.onDidChangeConfiguration(t => {
        const i = e.getOption(62);
        this.enabled !== i && ((this.enabled = i), this.updateDecorations([]), this.stop(), this.beginCompute());
      })), this.listenersToRemove.add(e.onDidChangeModelContent(e => this.onChange())), this.listenersToRemove.add(e.onDidChangeModel(e => this.onModelChanged())), this.listenersToRemove.add(e.onDidChangeModelLanguage(e => this.onModelModeChanged())), this.listenersToRemove.add(p.pM.onDidChange(e => this.onModelModeChanged())), (this.timeout = new n._F()), (this.computePromise = null), (this.activeLinksList = null), (this.currentOccurrences = {}), (this.activeLinkDecorationId = null), this.beginCompute());
    }
    static get(t) {
      return t.getContribution(e.ID);
    }
    onModelChanged() {
      ((this.currentOccurrences = {}), (this.activeLinkDecorationId = null), this.stop(), this.beginCompute());
    }
    onModelModeChanged() {
      (this.stop(), this.beginCompute());
    }
    onChange() {
      this.timeout.setIfNotSet(() => this.beginCompute(), e.RECOMPUTE_TIME);
    }
    beginCompute() {
      return M(this, void 0, void 0, function* () {
        if (!this.editor.hasModel() || !this.enabled) return;
        const e = this.editor.getModel();
        if (p.pM.has(e)) {
          (this.activeLinksList && (this.activeLinksList.dispose(), (this.activeLinksList = null)), (this.computePromise = n.PG(t => S(e, t))));
          try {
            ((this.activeLinksList = yield this.computePromise), this.updateDecorations(this.activeLinksList.links));
          } catch (e) {
            (0, s.dL)(e);
          } finally {
            this.computePromise = null;
          }
        }
      });
    }
    updateDecorations(e) {
      const t = "altKey" === this.editor.getOption(69);
      let i = [],
        n = Object.keys(this.currentOccurrences);
      for (let e = 0, t = n.length; e < t; e++) {
        let t = n[e],
          o = this.currentOccurrences[t];
        i.push(o.decorationId);
      }
      let o = [];
      if (e) for (const i of e) o.push(O.decoration(i, t));
      let s = this.editor.deltaDecorations(i, o);
      ((this.currentOccurrences = {}), (this.activeLinkDecorationId = null));
      for (let t = 0, i = s.length; t < i; t++) {
        let i = new O(e[t], s[t]);
        this.currentOccurrences[i.decorationId] = i;
      }
    }
    _onEditorMouseMove(e, t) {
      const i = "altKey" === this.editor.getOption(69);
      if (this.isEnabled(e, t)) {
        this.cleanUpActiveLinkDecoration();
        const t = this.getLinkOccurrence(e.target.position);
        t && this.editor.changeDecorations(e => {
          (t.activate(e, i), (this.activeLinkDecorationId = t.decorationId));
        });
      } else this.cleanUpActiveLinkDecoration();
    }
    cleanUpActiveLinkDecoration() {
      const e = "altKey" === this.editor.getOption(69);
      if (this.activeLinkDecorationId) {
        const t = this.currentOccurrences[this.activeLinkDecorationId];
        (t && this.editor.changeDecorations(i => {
          t.deactivate(i, e);
        }), (this.activeLinkDecorationId = null));
      }
    }
    onEditorMouseUp(e) {
      if (!this.isEnabled(e)) return;
      const t = this.getLinkOccurrence(e.target.position);
      t && this.openLinkOccurrence(t, e.hasSideBySideModifier, !0);
    }
    openLinkOccurrence(e, t, i = !1) {
      if (!this.openerService) return;
      const {
        link: n
      } = e;
      n.resolve(o.T.None).then(e => {
        if ("string" == typeof e && this.editor.hasModel()) {
          const t = this.editor.getModel().uri;
          if (t.scheme === l.lg.file && e.startsWith(`${l.lg.file}:`)) {
            const i = h.o.parse(e);
            if (i.scheme === l.lg.file) {
              const n = d.z_(i);
              let o = null;
              (n.startsWith("/./") ? (o = `.${n.substr(1)}`) : n.startsWith("//./") && (o = `.${n.substr(2)}`), o && (e = d.Vo(t, o)));
            }
          }
        }
        return this.openerService.open(e, {
          openToSide: t,
          fromUserGesture: i,
          allowContributedOpeners: !0,
          allowCommands: !0
        });
      }, e => {
        const t = e instanceof Error ? e.message : e;
        "invalid" === t ? this.notificationService.warn(k.N("invalid.url", "Failed to open this link because it is not well-formed: {0}", n.url.toString())) : "missing" === t ? this.notificationService.warn(k.N("missing.url", "Failed to open this link because its target is missing.")) : (0, s.dL)(e);
      });
    }
    getLinkOccurrence(e) {
      if (!this.editor.hasModel() || !e) return null;
      const t = this.editor.getModel().getDecorationsInRange({
        startLineNumber: e.lineNumber,
        startColumn: e.column,
        endLineNumber: e.lineNumber,
        endColumn: e.column
      }, 0, !0);
      for (const e of t) {
        const t = this.currentOccurrences[e.id];
        if (t) return t;
      }
      return null;
    }
    isEnabled(e, t) {
      return Boolean(6 === e.target.type && (e.hasTriggerModifier || (t && t.keyCodeIsTriggerKey)));
    }
    stop() {
      var e;
      (this.timeout.cancel(), this.activeLinksList && (null === (e = this.activeLinksList) || void 0 === e || e.dispose(), (this.activeLinksList = null)), this.computePromise && (this.computePromise.cancel(), (this.computePromise = null)));
    }
    dispose() {
      (this.listenersToRemove.dispose(), this.stop(), this.timeout.dispose());
    }
  };
  ((P.ID = "editor.linkDetector"), (P.RECOMPUTE_TIME = 1e3), (P = E([T(1, N.v4), T(2, L.lT)], P)));
  class R extends u.R6 {
    constructor() {
      super({
        id: "editor.action.openLink",
        label: k.N("label", "Open Link"),
        alias: "Open Link",
        precondition: void 0
      });
    }
    run(e, t) {
      let i = P.get(t);
      if (!i) return;
      if (!t.hasModel()) return;
      let n = t.getSelections();
      for (let e of n) {
        let t = i.getLinkOccurrence(e.getEndPosition());
        t && i.openLinkOccurrence(t, !1);
      }
    }
  }
  ((0, u._K)(P.ID, P), (0, u.Qr)(R), (0, I.Ic)((e, t) => {
    const i = e.getColor(D._Y);
    i && t.addRule(`.monaco-editor .detected-link-active { color: ${i} !important; }`);
  }));
};