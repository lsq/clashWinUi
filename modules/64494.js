module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    i: () => v
  });
  var n = i(15393),
    o = i(41264),
    s = i(17301),
    r = i(89954),
    a = i(5976),
    l = i(16830),
    c = i(11640),
    d = i(24314),
    h = i(44174),
    u = i(44101),
    g = i(83308),
    p = i(33108),
    f = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    m = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let v = class e extends a.JT {
    constructor(e, t, i) {
      (super(), (this._editor = e), (this._codeEditorService = t), (this._configurationService = i), (this._localToDispose = this._register(new a.SL())), (this._decorationsIds = []), (this._colorDatas = new Map()), (this._colorDecoratorIds = []), (this._decorationsTypes = new Set()), this._register(e.onDidChangeModel(() => {
        ((this._isEnabled = this.isEnabled()), this.onModelChanged());
      })), this._register(e.onDidChangeModelLanguage(() => this.onModelChanged())), this._register(u.OH.onDidChange(() => this.onModelChanged())), this._register(e.onDidChangeConfiguration(() => {
        let e = this._isEnabled;
        ((this._isEnabled = this.isEnabled()), e !== this._isEnabled && (this._isEnabled ? this.onModelChanged() : this.removeAllDecorations()));
      })), (this._timeoutTimer = null), (this._computePromise = null), (this._isEnabled = this.isEnabled()), this.onModelChanged());
    }
    isEnabled() {
      const e = this._editor.getModel();
      if (!e) return !1;
      const t = e.getLanguageId(),
        i = this._configurationService.getValue(t);
      if (i && "object" == typeof i) {
        const e = i.colorDecorators;
        if (e && void 0 !== e.enable && !e.enable) return e.enable;
      }
      return this._editor.getOption(17);
    }
    static get(e) {
      return e.getContribution(this.ID);
    }
    dispose() {
      (this.stop(), this.removeAllDecorations(), super.dispose());
    }
    onModelChanged() {
      if ((this.stop(), !this._isEnabled)) return;
      const t = this._editor.getModel();
      t && u.OH.has(t) && (this._localToDispose.add(this._editor.onDidChangeModelContent(() => {
        this._timeoutTimer || ((this._timeoutTimer = new n._F()), this._timeoutTimer.cancelAndSet(() => {
          ((this._timeoutTimer = null), this.beginCompute());
        }, e.RECOMPUTE_TIME));
      })), this.beginCompute());
    }
    beginCompute() {
      ((this._computePromise = (0, n.PG)(e => {
        const t = this._editor.getModel();
        return t ? (0, g.E)(t, e) : Promise.resolve([]);
      })), this._computePromise.then(e => {
        (this.updateDecorations(e), this.updateColorDecorators(e), (this._computePromise = null));
      }, s.dL));
    }
    stop() {
      (this._timeoutTimer && (this._timeoutTimer.cancel(), (this._timeoutTimer = null)), this._computePromise && (this._computePromise.cancel(), (this._computePromise = null)), this._localToDispose.clear());
    }
    updateDecorations(e) {
      const t = e.map(e => ({
        range: {
          startLineNumber: e.colorInfo.range.startLineNumber,
          startColumn: e.colorInfo.range.startColumn,
          endLineNumber: e.colorInfo.range.endLineNumber,
          endColumn: e.colorInfo.range.endColumn
        },
        options: h.qx.EMPTY
      }));
      ((this._decorationsIds = this._editor.deltaDecorations(this._decorationsIds, t)), (this._colorDatas = new Map()), this._decorationsIds.forEach((t, i) => this._colorDatas.set(t, e[i])));
    }
    updateColorDecorators(e) {
      let t = [],
        i = {};
      for (let n = 0; n < e.length && t.length < 500; n++) {
        const {
            red: s,
            green: a,
            blue: l,
            alpha: c
          } = e[n].colorInfo.color,
          d = new o.VS(Math.round(255 * s), Math.round(255 * a), Math.round(255 * l), c);
        let h = (0, r.vp)(`rgba(${d.r},${d.g},${d.b},${d.a})`).toString(16),
          u = `rgba(${d.r}, ${d.g}, ${d.b}, ${d.a})`,
          g = "colorBox-" + h;
        (this._decorationsTypes.has(g) || i[g] || this._codeEditorService.registerDecorationType("color-detector-color", g, {
          before: {
            contentText: " ",
            border: "solid 0.1em #000",
            margin: "0.1em 0.2em 0 0.2em",
            width: "0.8em",
            height: "0.8em",
            backgroundColor: u
          },
          dark: {
            before: {
              border: "solid 0.1em #eee"
            }
          }
        }, void 0, this._editor), (i[g] = !0), t.push({
          range: {
            startLineNumber: e[n].colorInfo.range.startLineNumber,
            startColumn: e[n].colorInfo.range.startColumn,
            endLineNumber: e[n].colorInfo.range.endLineNumber,
            endColumn: e[n].colorInfo.range.endColumn
          },
          options: this._codeEditorService.resolveDecorationOptions(g, !0)
        }));
      }
      (this._decorationsTypes.forEach(e => {
        i[e] || this._codeEditorService.removeDecorationType(e);
      }), (this._colorDecoratorIds = this._editor.deltaDecorations(this._colorDecoratorIds, t)));
    }
    removeAllDecorations() {
      ((this._decorationsIds = this._editor.deltaDecorations(this._decorationsIds, [])), (this._colorDecoratorIds = this._editor.deltaDecorations(this._colorDecoratorIds, [])), this._decorationsTypes.forEach(e => {
        this._codeEditorService.removeDecorationType(e);
      }));
    }
    getColorData(e) {
      const t = this._editor.getModel();
      if (!t) return null;
      const i = t.getDecorationsInRange(d.e.fromPositions(e, e)).filter(e => this._colorDatas.has(e.id));
      return 0 === i.length ? null : this._colorDatas.get(i[0].id);
    }
  };
  ((v.ID = "editor.contrib.colorDetector"), (v.RECOMPUTE_TIME = 1e3), (v = f([m(1, c.$), m(2, p.Ui)], v)), (0, l._K)(v.ID, v));
};