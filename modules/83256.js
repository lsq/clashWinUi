module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    CZ: () => l,
    D8: () => d,
    Jx: () => n,
    Tx: () => a,
    dQ: () => c,
    fV: () => h,
    gk: () => o,
    lN: () => r,
    rU: () => s
  });
  class n {
    constructor() {
      this.changeType = 1;
    }
  }
  class o {
    constructor(e, t, i, n, o) {
      ((this.ownerId = e), (this.lineNumber = t), (this.column = i), (this.options = n), (this.order = o));
    }
    static applyInjectedText(e, t) {
      if (!t || 0 === t.length) return e;
      let i = "",
        n = 0;
      for (const o of t) ((i += e.substring(n, o.column - 1)), (n = o.column - 1), (i += o.options.content));
      return ((i += e.substring(n)), i);
    }
    static fromDecorations(e) {
      const t = [];
      for (const i of e) (i.options.before && i.options.before.content.length > 0 && t.push(new o(i.ownerId, i.range.startLineNumber, i.range.startColumn, i.options.before, 0)), i.options.after && i.options.after.content.length > 0 && t.push(new o(i.ownerId, i.range.endLineNumber, i.range.endColumn, i.options.after, 1)));
      return (t.sort((e, t) => e.lineNumber === t.lineNumber ? e.column === t.column ? e.order - t.order : e.column - t.column : e.lineNumber - t.lineNumber), t);
    }
  }
  class s {
    constructor(e, t, i) {
      ((this.changeType = 2), (this.lineNumber = e), (this.detail = t), (this.injectedText = i));
    }
  }
  class r {
    constructor(e, t) {
      ((this.changeType = 3), (this.fromLineNumber = e), (this.toLineNumber = t));
    }
  }
  class a {
    constructor(e, t, i, n) {
      ((this.changeType = 4), (this.injectedTexts = n), (this.fromLineNumber = e), (this.toLineNumber = t), (this.detail = i));
    }
  }
  class l {
    constructor() {
      this.changeType = 5;
    }
  }
  class c {
    constructor(e, t, i, n) {
      ((this.changes = e), (this.versionId = t), (this.isUndoing = i), (this.isRedoing = n), (this.resultingSelection = null));
    }
    containsEvent(e) {
      for (let t = 0, i = this.changes.length; t < i; t++) {
        if (this.changes[t].changeType === e) return !0;
      }
      return !1;
    }
    static merge(e, t) {
      const i = [].concat(e.changes).concat(t.changes),
        n = t.versionId,
        o = e.isUndoing || t.isUndoing,
        s = e.isRedoing || t.isRedoing;
      return new c(i, n, o, s);
    }
  }
  class d {
    constructor(e) {
      this.changes = e;
    }
  }
  class h {
    constructor(e, t) {
      ((this.rawContentChangedEvent = e), (this.contentChangedEvent = t));
    }
    merge(e) {
      const t = c.merge(this.rawContentChangedEvent, e.rawContentChangedEvent),
        i = h._mergeChangeEvents(this.contentChangedEvent, e.contentChangedEvent);
      return new h(t, i);
    }
    static _mergeChangeEvents(e, t) {
      return {
        changes: [].concat(e.changes).concat(t.changes),
        eol: t.eol,
        versionId: t.versionId,
        isUndoing: e.isUndoing || t.isUndoing,
        isRedoing: e.isRedoing || t.isRedoing,
        isFlush: e.isFlush || t.isFlush
      };
    }
  }
};