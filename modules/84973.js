module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    F5: () => o,
    Qi: () => h,
    UO: () => c,
    dJ: () => a,
    je: () => u,
    s6: () => s,
    sh: () => n,
    tk: () => l,
    vW: () => d
  });
  var n,
    o,
    s,
    r = i(36248);
  (!(function (e) {
    ((e[(e.Left = 1)] = "Left"), (e[(e.Center = 2)] = "Center"), (e[(e.Right = 4)] = "Right"), (e[(e.Full = 7)] = "Full"));
  })(n || (n = {})), (function (e) {
    ((e[(e.Inline = 1)] = "Inline"), (e[(e.Gutter = 2)] = "Gutter"));
  })(o || (o = {})));
  class a {
    constructor(e) {
      ((this._textModelResolvedOptionsBrand = void 0), (this.tabSize = Math.max(1, 0 | e.tabSize)), (this.indentSize = 0 | e.tabSize), (this.insertSpaces = Boolean(e.insertSpaces)), (this.defaultEOL = 0 | e.defaultEOL), (this.trimAutoWhitespace = Boolean(e.trimAutoWhitespace)), (this.bracketPairColorizationOptions = e.bracketPairColorizationOptions));
    }
    equals(e) {
      return (this.tabSize === e.tabSize && this.indentSize === e.indentSize && this.insertSpaces === e.insertSpaces && this.defaultEOL === e.defaultEOL && this.trimAutoWhitespace === e.trimAutoWhitespace && (0, r.fS)(this.bracketPairColorizationOptions, e.bracketPairColorizationOptions));
    }
    createChangeEvent(e) {
      return {
        tabSize: this.tabSize !== e.tabSize,
        indentSize: this.indentSize !== e.indentSize,
        insertSpaces: this.insertSpaces !== e.insertSpaces,
        trimAutoWhitespace: this.trimAutoWhitespace !== e.trimAutoWhitespace
      };
    }
  }
  class l {
    constructor(e, t) {
      ((this._findMatchBrand = void 0), (this.range = e), (this.matches = t));
    }
  }
  !(function (e) {
    ((e[(e.Disabled = 0)] = "Disabled"), (e[(e.EnabledForActive = 1)] = "EnabledForActive"), (e[(e.Enabled = 2)] = "Enabled"));
  })(s || (s = {}));
  class c {
    constructor(e, t, i) {
      ((this.visibleColumn = e), (this.className = t), (this.horizontalLine = i));
    }
  }
  class d {
    constructor(e, t) {
      ((this.top = e), (this.endColumn = t));
    }
  }
  class h {
    constructor(e, t, i, n, o, s) {
      ((this.identifier = e), (this.range = t), (this.text = i), (this.forceMoveMarkers = n), (this.isAutoWhitespaceEdit = o), (this._isTracked = s));
    }
  }
  class u {
    constructor(e, t, i) {
      ((this.reverseEdits = e), (this.changes = t), (this.trimAutoWhitespaceLineNumbers = i));
    }
  }
};