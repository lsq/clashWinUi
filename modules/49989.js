module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    W: () => l
  });
  var n = i(8313),
    o = i(1432),
    s = i(94565),
    r = i(89872);
  class a {
    constructor() {
      ((this._coreKeybindings = []), (this._extensionKeybindings = []), (this._cachedMergedKeybindings = null));
    }
    static bindToCurrentPlatform(e) {
      if (1 === o.OS) {
        if (e && e.win) return e.win;
      } else if (2 === o.OS) {
        if (e && e.mac) return e.mac;
      } else if (e && e.linux) return e.linux;
      return e;
    }
    registerKeybindingRule(e) {
      const t = a.bindToCurrentPlatform(e);
      if (t && t.primary) {
        const i = (0, n.gm)(t.primary, o.OS);
        i && this._registerDefaultKeybinding(i, e.id, e.args, e.weight, 0, e.when);
      }
      if (t && Array.isArray(t.secondary)) for (let i = 0, s = t.secondary.length; i < s; i++) {
        const s = t.secondary[i],
          r = (0, n.gm)(s, o.OS);
        r && this._registerDefaultKeybinding(r, e.id, e.args, e.weight, -i - 1, e.when);
      }
    }
    registerCommandAndKeybindingRule(e) {
      (this.registerKeybindingRule(e), s.P.registerCommand(e));
    }
    static _mightProduceChar(e) {
      return ((e >= 21 && e <= 30) || (e >= 31 && e <= 56) || 80 === e || 81 === e || 82 === e || 83 === e || 84 === e || 85 === e || 86 === e || 110 === e || 111 === e || 87 === e || 88 === e || 89 === e || 90 === e || 91 === e || 92 === e);
    }
    _assertNoCtrlAlt(e, t) {
      e.ctrlKey && e.altKey && !e.metaKey && a._mightProduceChar(e.keyCode) && console.warn("Ctrl+Alt+ keybindings should not be used by default under Windows. Offender: ", e, " for ", t);
    }
    _registerDefaultKeybinding(e, t, i, n, s, r) {
      (1 === o.OS && this._assertNoCtrlAlt(e.parts[0], t), this._coreKeybindings.push({
        keybinding: e.parts,
        command: t,
        commandArgs: i,
        when: r,
        weight1: n,
        weight2: s,
        extensionId: null,
        isBuiltinExtension: !1
      }), (this._cachedMergedKeybindings = null));
    }
    getDefaultKeybindings() {
      return (this._cachedMergedKeybindings || ((this._cachedMergedKeybindings = [].concat(this._coreKeybindings).concat(this._extensionKeybindings)), this._cachedMergedKeybindings.sort(c)), this._cachedMergedKeybindings.slice(0));
    }
  }
  const l = new a();
  function c(e, t) {
    return e.weight1 !== t.weight1 ? e.weight1 - t.weight1 : e.command < t.command ? -1 : e.command > t.command ? 1 : e.weight2 - t.weight2;
  }
  r.B.add("platform.keybindingsRegistry", l);
};