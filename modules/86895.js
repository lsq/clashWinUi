module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    C3: () => p
  });
  var n = i(9488),
    o = i(71050),
    s = i(17301),
    r = i(53725),
    a = i(43702),
    l = i(24314),
    c = i(44101),
    d = i(21036);
  class h {
    remove() {
      this.parent && this.parent.children.delete(this.id);
    }
    static findId(e, t) {
      let i;
      "string" == typeof e ? (i = `${t.id}/${e}`) : ((i = `${t.id}/${e.name}`), void 0 !== t.children.get(i) && (i = `${t.id}/${e.name}_${e.range.startLineNumber}_${e.range.startColumn}`));
      let n = i;
      for (let e = 0; void 0 !== t.children.get(n); e++) n = `${i}_${e}`;
      return n;
    }
    static empty(e) {
      return 0 === e.children.size;
    }
  }
  class u extends h {
    constructor(e, t, i) {
      (super(), (this.id = e), (this.parent = t), (this.symbol = i), (this.children = new Map()));
    }
  }
  class g extends h {
    constructor(e, t, i, n) {
      (super(), (this.id = e), (this.parent = t), (this.label = i), (this.order = n), (this.children = new Map()));
    }
  }
  class p extends h {
    constructor(e) {
      (super(), (this.uri = e), (this.id = "root"), (this.parent = void 0), (this._groups = new Map()), (this.children = new Map()), (this.id = "root"), (this.parent = void 0));
    }
    static create(e, t) {
      let i = this._keys.for(e, !0),
        n = p._requests.get(i);
      if (!n) {
        let t = new o.A();
        ((n = {
          promiseCnt: 0,
          source: t,
          promise: p._create(e, t.token),
          model: void 0
        }), p._requests.set(i, n));
        const s = Date.now();
        n.promise.then(() => {
          this._requestDurations.update(e, Date.now() - s);
        });
      }
      return n.model ? Promise.resolve(n.model) : ((n.promiseCnt += 1), t.onCancellationRequested(() => {
        0 == --n.promiseCnt && (n.source.cancel(), p._requests.delete(i));
      }), new Promise((e, t) => {
        n.promise.then(t => {
          ((n.model = t), e(t));
        }, e => {
          (p._requests.delete(i), t(e));
        });
      }));
    }
    static _create(e, t) {
      const i = new o.A(t),
        r = new p(e.uri),
        a = c.vJ.ordered(e),
        l = a.map((t, n) => {
          var o;
          let a = h.findId(`provider_${n}`, r),
            l = new g(a, r, null !== (o = t.displayName) && void 0 !== o ? o : "Unknown Outline Provider", n);
          return Promise.resolve(t.provideDocumentSymbols(e, i.token)).then(e => {
            for (const t of e || []) p._makeOutlineElement(t, l);
            return l;
          }, e => ((0, s.Cp)(e), l)).then(e => {
            h.empty(e) ? e.remove() : r._groups.set(a, e);
          });
        }),
        d = c.vJ.onDidChange(() => {
          const t = c.vJ.ordered(e);
          (0, n.fS)(t, a) || i.cancel();
        });
      return Promise.all(l).then(() => i.token.isCancellationRequested && !t.isCancellationRequested ? p._create(e, t) : r._compact()).finally(() => {
        d.dispose();
      });
    }
    static _makeOutlineElement(e, t) {
      let i = h.findId(e, t),
        n = new u(i, t, e);
      if (e.children) for (const t of e.children) p._makeOutlineElement(t, n);
      t.children.set(n.id, n);
    }
    _compact() {
      let e = 0;
      for (const [t, i] of this._groups) 0 === i.children.size ? this._groups.delete(t) : (e += 1);
      if (1 !== e) this.children = this._groups;else {
        let e = r.$.first(this._groups.values());
        for (let [, t] of e.children) ((t.parent = this), this.children.set(t.id, t));
      }
      return this;
    }
    getTopLevelSymbols() {
      const e = [];
      for (const t of this.children.values()) t instanceof u ? e.push(t.symbol) : e.push(...r.$.map(t.children.values(), e => e.symbol));
      return e.sort((e, t) => l.e.compareRangesUsingStarts(e.range, t.range));
    }
    asListOfDocumentSymbols() {
      const e = this.getTopLevelSymbols(),
        t = [];
      return (p._flattenDocumentSymbols(t, e, ""), t.sort((e, t) => l.e.compareRangesUsingStarts(e.range, t.range)));
    }
    static _flattenDocumentSymbols(e, t, i) {
      for (const n of t) (e.push({
        kind: n.kind,
        tags: n.tags,
        name: n.name,
        detail: n.detail,
        containerName: n.containerName || i,
        range: n.range,
        selectionRange: n.selectionRange,
        children: void 0
      }), n.children && p._flattenDocumentSymbols(e, n.children, n.name));
    }
  }
  ((p._requestDurations = new d.Y(c.vJ, 350)), (p._requests = new a.z6(9, 0.75)), (p._keys = new (class {
    constructor() {
      ((this._counter = 1), (this._data = new WeakMap()));
    }
    for(e, t) {
      return `${e.id}/${t ? e.getVersionId() : ""}/${this._hash(c.vJ.all(e))}`;
    }
    _hash(e) {
      let t = "";
      for (const i of e) {
        let e = this._data.get(i);
        (void 0 === e && ((e = this._counter++), this._data.set(i, e)), (t += e));
      }
      return t;
    }
  })()));
};