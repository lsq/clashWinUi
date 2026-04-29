module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    H: () => p
  });
  var n = i(36248),
    o = i(11640),
    s = i(32073),
    r = i(94565),
    a = i(38819),
    l = i(72065),
    c = i(59422),
    d = i(97781),
    h = i(31106),
    u = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    g = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let p = class extends s.Gm {
    constructor(e, t, i, n, o, s, r, a, l, c) {
      (super(e, Object.assign(Object.assign({}, i.getRawOptions()), {
        overflowWidgetsDomNode: i.getOverflowWidgetsDomNode()
      }), {}, n, o, s, r, a, l, c), (this._parentEditor = i), (this._overwriteOptions = t), super.updateOptions(this._overwriteOptions), this._register(i.onDidChangeConfiguration(e => this._onParentConfigurationChanged(e))));
    }
    getParentEditor() {
      return this._parentEditor;
    }
    _onParentConfigurationChanged(e) {
      (super.updateOptions(this._parentEditor.getRawOptions()), super.updateOptions(this._overwriteOptions));
    }
    updateOptions(e) {
      (n.jB(this._overwriteOptions, e, !0), super.updateOptions(this._overwriteOptions));
    }
  };
  p = u([g(3, l.TG), g(4, o.$), g(5, r.H), g(6, a.i6), g(7, d.XE), g(8, c.lT), g(9, h.F)], p);
};