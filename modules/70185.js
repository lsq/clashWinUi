module.exports = (e, t, i) => {
  "use strict";

  i.r(t);
  var n = i(15393),
    o = i(5976),
    s = i(16830),
    r = i(44101),
    a = i(89510),
    l = i(51200),
    c = i(32334),
    d = i(65072),
    h = i(33108),
    u = i(97781),
    g = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    p = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let f = class extends o.JT {
    constructor(e, t, i, o) {
      (super(), (this._modelService = t), (this._themeService = i), (this._configurationService = o), (this._editor = e), (this._tokenizeViewport = new n.pY(() => this._tokenizeViewportNow(), 100)), (this._outstandingRequests = []), this._register(this._editor.onDidScrollChange(() => {
        this._tokenizeViewport.schedule();
      })), this._register(this._editor.onDidChangeModel(() => {
        (this._cancelAll(), this._tokenizeViewport.schedule());
      })), this._register(this._editor.onDidChangeModelContent(e => {
        (this._cancelAll(), this._tokenizeViewport.schedule());
      })), this._register(r.K7.onDidChange(() => {
        (this._cancelAll(), this._tokenizeViewport.schedule());
      })), this._register(this._configurationService.onDidChangeConfiguration(e => {
        e.affectsConfiguration(c.e3) && (this._cancelAll(), this._tokenizeViewport.schedule());
      })), this._register(this._themeService.onDidColorThemeChange(() => {
        (this._cancelAll(), this._tokenizeViewport.schedule());
      })));
    }
    _cancelAll() {
      for (const e of this._outstandingRequests) e.cancel();
      this._outstandingRequests = [];
    }
    _removeOutstandingRequest(e) {
      for (let t = 0, i = this._outstandingRequests.length; t < i; t++) if (this._outstandingRequests[t] === e) return void this._outstandingRequests.splice(t, 1);
    }
    _tokenizeViewportNow() {
      if (!this._editor.hasModel()) return;
      const e = this._editor.getModel();
      if (e.hasCompleteSemanticTokens()) return;
      if (!(0, c.tw)(e, this._themeService, this._configurationService)) return void (e.hasSomeSemanticTokens() && e.setSemanticTokens(null, !1));
      if (!(0, a.KO)(e)) return void (e.hasSomeSemanticTokens() && e.setSemanticTokens(null, !1));
      const t = this._editor.getVisibleRangesPlusViewportAboveBelow();
      this._outstandingRequests = this._outstandingRequests.concat(t.map(t => this._requestRange(e, t)));
    }
    _requestRange(e, t) {
      const i = e.getVersionId(),
        o = (0, n.PG)(i => Promise.resolve((0, a.OG)(e, t, i)));
      return (o.then(n => {
        if (!n || !n.tokens || e.isDisposed() || e.getVersionId() !== i) return;
        const {
            provider: o,
            tokens: s
          } = n,
          r = this._modelService.getSemanticTokensProviderStyling(o);
        e.setPartialSemanticTokens(t, (0, d.h)(s, r, e.getLanguageId()));
      }).then(() => this._removeOutstandingRequest(o), () => this._removeOutstandingRequest(o)), o);
    }
  };
  ((f.ID = "editor.contrib.viewportSemanticTokens"), (f = g([p(1, l.q), p(2, u.XE), p(3, h.Ui)], f)), (0, s._K)(f.ID, f));
};