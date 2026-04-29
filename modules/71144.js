module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    XT: () => c,
    dQ: () => l
  });
  var n = i(63580),
    o = i(4669),
    s = i(83831),
    r = i(89872),
    a = i(81170);
  const l = new (class {
    constructor() {
      ((this._onDidChangeLanguages = new o.Q5()), (this.onDidChangeLanguages = this._onDidChangeLanguages.event), (this._languages = []), (this._dynamicLanguages = []));
    }
    registerLanguage(e) {
      return (this._languages.push(e), this._onDidChangeLanguages.fire(void 0), {
        dispose: () => {
          for (let t = 0, i = this._languages.length; t < i; t++) if (this._languages[t] === e) return void this._languages.splice(t, 1);
        }
      });
    }
    getLanguages() {
      return [].concat(this._languages).concat(this._dynamicLanguages);
    }
  })();
  r.B.add("editor.modesRegistry", l);
  const c = "plaintext";
  (l.registerLanguage({
    id: c,
    extensions: [".txt"],
    aliases: [n.N("plainText.alias", "Plain Text"), "text"],
    mimetypes: [a.vW.text]
  }), s.zu.register(c, {
    brackets: [["(", ")"], ["[", "]"], ["{", "}"]],
    surroundingPairs: [{
      open: "{",
      close: "}"
    }, {
      open: "[",
      close: "]"
    }, {
      open: "(",
      close: ")"
    }, {
      open: "<",
      close: ">"
    }, {
      open: '"',
      close: '"'
    }, {
      open: "'",
      close: "'"
    }, {
      open: "`",
      close: "`"
    }],
    colorizedBracketPairs: [],
    folding: {
      offSide: !0
    }
  }, 0));
};