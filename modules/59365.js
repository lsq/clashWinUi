module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    CP: () => r,
    Fr: () => a,
    W5: () => s,
    oR: () => l,
    v1: () => c
  });
  var n = i(17301),
    o = i(21212);
  class s {
    constructor(e = "", t = !1) {
      var i, o, s;
      if (((this.value = e), "string" != typeof this.value)) throw (0, n.b1)("value");
      "boolean" == typeof t ? ((this.isTrusted = t), (this.supportThemeIcons = !1), (this.supportHtml = !1)) : ((this.isTrusted = null !== (i = t.isTrusted) && void 0 !== i ? i : void 0), (this.supportThemeIcons = null !== (o = t.supportThemeIcons) && void 0 !== o && o), (this.supportHtml = null !== (s = t.supportHtml) && void 0 !== s && s));
    }
    appendText(e, t = 0) {
      var i;
      return ((this.value += ((i = this.supportThemeIcons ? (0, o.Qo)(e) : e), i.replace(/[\\`*_{}[\]()#+\-!]/g, "\\$&")).replace(/([ \t]+)/g, (e, t) => "&nbsp;".repeat(t.length)).replace(/\>/gm, "\\>").replace(/\n/g, 1 === t ? "\\\n" : "\n\n")), this);
    }
    appendMarkdown(e) {
      return ((this.value += e), this);
    }
    appendCodeblock(e, t) {
      return ((this.value += "\n```"), (this.value += e), (this.value += "\n"), (this.value += t), (this.value += "\n```\n"), this);
    }
  }
  function r(e) {
    return a(e) ? !e.value : !Array.isArray(e) || e.every(r);
  }
  function a(e) {
    return (e instanceof s || (!(!e || "object" != typeof e) && !("string" != typeof e.value || ("boolean" != typeof e.isTrusted && void 0 !== e.isTrusted) || ("boolean" != typeof e.supportThemeIcons && void 0 !== e.supportThemeIcons))));
  }
  function l(e) {
    return e ? e.replace(/\\([\\`*_{}[\]()#+\-.!])/g, "$1") : e;
  }
  function c(e) {
    const t = [],
      i = e.split("|").map(e => e.trim());
    e = i[0];
    const n = i[1];
    if (n) {
      const e = /height=(\d+)/.exec(n),
        i = /width=(\d+)/.exec(n),
        o = e ? e[1] : "",
        s = i ? i[1] : "",
        r = isFinite(parseInt(s)),
        a = isFinite(parseInt(o));
      (r && t.push(`width="${s}"`), a && t.push(`height="${o}"`));
    }
    return {
      href: e,
      dimensions: t
    };
  }
};