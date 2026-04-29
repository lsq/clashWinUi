module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    UnusualLineTerminatorsDetector: () => g
  }));
  var n = i(5976),
    o = i(95935),
    s = i(16830),
    r = i(11640),
    a = i(63580),
    l = i(28820),
    c = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    d = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    h = function (e, t, i, n) {
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
  const u = "ignoreUnusualLineTerminators";
  let g = class extends n.JT {
    constructor(e, t, i) {
      (super(), (this._editor = e), (this._dialogService = t), (this._codeEditorService = i), (this._config = this._editor.getOption(112)), this._register(this._editor.onDidChangeConfiguration(e => {
        e.hasChanged(112) && ((this._config = this._editor.getOption(112)), this._checkForUnusualLineTerminators());
      })), this._register(this._editor.onDidChangeModel(() => {
        this._checkForUnusualLineTerminators();
      })), this._register(this._editor.onDidChangeModelContent(e => {
        e.isUndoing || this._checkForUnusualLineTerminators();
      })));
    }
    _checkForUnusualLineTerminators() {
      return h(this, void 0, void 0, function* () {
        if ("off" === this._config) return;
        if (!this._editor.hasModel()) return;
        const e = this._editor.getModel();
        if (!e.mightContainUnusualLineTerminators()) return;
        const t = (function (e, t) {
          return e.getModelProperty(t.uri, u);
        })(this._codeEditorService, e);
        if (!0 === t) return;
        if (this._editor.getOption(80)) return;
        if ("auto" === this._config) return void e.removeUnusualLineTerminators(this._editor.getSelections());
        (yield this._dialogService.confirm({
          title: a.N("unusualLineTerminators.title", "Unusual Line Terminators"),
          message: a.N("unusualLineTerminators.message", "Detected unusual line terminators"),
          detail: a.N("unusualLineTerminators.detail", "The file '{0}' contains one or more unusual line terminator characters, like Line Separator (LS) or Paragraph Separator (PS).\n\nIt is recommended to remove them from the file. This can be configured via `editor.unusualLineTerminators`.", (0, o.EZ)(e.uri)),
          primaryButton: a.N("unusualLineTerminators.fix", "Remove Unusual Line Terminators"),
          secondaryButton: a.N("unusualLineTerminators.ignore", "Ignore")
        })).confirmed ? e.removeUnusualLineTerminators(this._editor.getSelections()) : (function (e, t, i) {
          e.setModelProperty(t.uri, u, i);
        })(this._codeEditorService, e, !0);
      });
    }
  };
  ((g.ID = "editor.contrib.unusualLineTerminatorsDetector"), (g = c([d(1, l.S), d(2, r.$)], g)), (0, s._K)(g.ID, g));
};