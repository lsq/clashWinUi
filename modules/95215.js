module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    NL: () => m,
    e9: () => f
  });
  var n = i(63580),
    o = i(17301),
    s = i(3860),
    r = i(70666),
    a = i(60962),
    l = i(53060),
    c = i(95935);
  function d(e) {
    return e.toString();
  }
  class h {
    constructor(e, t, i, n, o, s, r) {
      ((this.beforeVersionId = e), (this.afterVersionId = t), (this.beforeEOL = i), (this.afterEOL = n), (this.beforeCursorState = o), (this.afterCursorState = s), (this.changes = r));
    }
    static create(e, t) {
      const i = e.getAlternativeVersionId(),
        n = p(e);
      return new h(i, i, n, n, t, t, []);
    }
    append(e, t, i, n, o) {
      (t.length > 0 && (this.changes = (0, a.b)(this.changes, t)), (this.afterEOL = i), (this.afterVersionId = n), (this.afterCursorState = o));
    }
    static _writeSelectionsSize(e) {
      return 4 + 16 * (e ? e.length : 0);
    }
    static _writeSelections(e, t, i) {
      if ((l.T4(e, t ? t.length : 0, i), (i += 4), t)) for (const n of t) (l.T4(e, n.selectionStartLineNumber, i), (i += 4), l.T4(e, n.selectionStartColumn, i), (i += 4), l.T4(e, n.positionLineNumber, i), (i += 4), l.T4(e, n.positionColumn, i), (i += 4));
      return i;
    }
    static _readSelections(e, t, i) {
      const n = l.Ag(e, t);
      t += 4;
      for (let o = 0; o < n; o++) {
        const n = l.Ag(e, t);
        t += 4;
        const o = l.Ag(e, t);
        t += 4;
        const r = l.Ag(e, t);
        t += 4;
        const a = l.Ag(e, t);
        ((t += 4), i.push(new s.Y(n, o, r, a)));
      }
      return t;
    }
    serialize() {
      let e = 10 + h._writeSelectionsSize(this.beforeCursorState) + h._writeSelectionsSize(this.afterCursorState) + 4;
      for (const t of this.changes) e += t.writeSize();
      const t = new Uint8Array(e);
      let i = 0;
      (l.T4(t, this.beforeVersionId, i), (i += 4), l.T4(t, this.afterVersionId, i), (i += 4), l.Cg(t, this.beforeEOL, i), (i += 1), l.Cg(t, this.afterEOL, i), (i += 1), (i = h._writeSelections(t, this.beforeCursorState, i)), (i = h._writeSelections(t, this.afterCursorState, i)), l.T4(t, this.changes.length, i), (i += 4));
      for (const e of this.changes) i = e.write(t, i);
      return t.buffer;
    }
    static deserialize(e) {
      const t = new Uint8Array(e);
      let i = 0;
      const n = l.Ag(t, i);
      i += 4;
      const o = l.Ag(t, i);
      i += 4;
      const s = l.Q$(t, i);
      i += 1;
      const r = l.Q$(t, i);
      i += 1;
      const c = [];
      i = h._readSelections(t, i, c);
      const d = [];
      i = h._readSelections(t, i, d);
      const u = l.Ag(t, i);
      i += 4;
      const g = [];
      for (let e = 0; e < u; e++) i = a.q.read(t, i, g);
      return new h(n, o, s, r, c, d, g);
    }
  }
  class u {
    constructor(e, t) {
      ((this.model = e), (this._data = h.create(e, t)));
    }
    get type() {
      return 0;
    }
    get resource() {
      return r.o.isUri(this.model) ? this.model : this.model.uri;
    }
    get label() {
      return n.N("edit", "Typing");
    }
    toString() {
      return (this._data instanceof h ? this._data : h.deserialize(this._data)).changes.map(e => e.toString()).join(", ");
    }
    matchesResource(e) {
      return ((r.o.isUri(this.model) ? this.model : this.model.uri).toString() === e.toString());
    }
    setModel(e) {
      this.model = e;
    }
    canAppend(e) {
      return this.model === e && this._data instanceof h;
    }
    append(e, t, i, n, o) {
      this._data instanceof h && this._data.append(e, t, i, n, o);
    }
    close() {
      this._data instanceof h && (this._data = this._data.serialize());
    }
    open() {
      this._data instanceof h || (this._data = h.deserialize(this._data));
    }
    undo() {
      if (r.o.isUri(this.model)) throw new Error("Invalid SingleModelEditStackElement");
      this._data instanceof h && (this._data = this._data.serialize());
      const e = h.deserialize(this._data);
      this.model._applyUndo(e.changes, e.beforeEOL, e.beforeVersionId, e.beforeCursorState);
    }
    redo() {
      if (r.o.isUri(this.model)) throw new Error("Invalid SingleModelEditStackElement");
      this._data instanceof h && (this._data = this._data.serialize());
      const e = h.deserialize(this._data);
      this.model._applyRedo(e.changes, e.afterEOL, e.afterVersionId, e.afterCursorState);
    }
    heapSize() {
      return (this._data instanceof h && (this._data = this._data.serialize()), this._data.byteLength + 168);
    }
  }
  class g {
    constructor(e, t) {
      ((this.type = 1), (this.label = e), (this._isOpen = !0), (this._editStackElementsArr = t.slice(0)), (this._editStackElementsMap = new Map()));
      for (const e of this._editStackElementsArr) {
        const t = d(e.resource);
        this._editStackElementsMap.set(t, e);
      }
      this._delegate = null;
    }
    get resources() {
      return this._editStackElementsArr.map(e => e.resource);
    }
    prepareUndoRedo() {
      if (this._delegate) return this._delegate.prepareUndoRedo(this);
    }
    matchesResource(e) {
      const t = d(e);
      return this._editStackElementsMap.has(t);
    }
    setModel(e) {
      const t = d(r.o.isUri(e) ? e : e.uri);
      this._editStackElementsMap.has(t) && this._editStackElementsMap.get(t).setModel(e);
    }
    canAppend(e) {
      if (!this._isOpen) return !1;
      const t = d(e.uri);
      if (this._editStackElementsMap.has(t)) {
        return this._editStackElementsMap.get(t).canAppend(e);
      }
      return !1;
    }
    append(e, t, i, n, o) {
      const s = d(e.uri);
      this._editStackElementsMap.get(s).append(e, t, i, n, o);
    }
    close() {
      this._isOpen = !1;
    }
    open() {}
    undo() {
      this._isOpen = !1;
      for (const e of this._editStackElementsArr) e.undo();
    }
    redo() {
      for (const e of this._editStackElementsArr) e.redo();
    }
    heapSize(e) {
      const t = d(e);
      if (this._editStackElementsMap.has(t)) {
        return this._editStackElementsMap.get(t).heapSize();
      }
      return 0;
    }
    split() {
      return this._editStackElementsArr;
    }
    toString() {
      let e = [];
      for (const t of this._editStackElementsArr) e.push(`${(0, c.EZ)(t.resource)}: ${t}`);
      return `{${e.join(", ")}}`;
    }
  }
  function p(e) {
    return "\n" === e.getEOL() ? 0 : 1;
  }
  function f(e) {
    return !!e && (e instanceof u || e instanceof g);
  }
  class m {
    constructor(e, t) {
      ((this._model = e), (this._undoRedoService = t));
    }
    pushStackElement() {
      const e = this._undoRedoService.getLastElement(this._model.uri);
      f(e) && e.close();
    }
    popStackElement() {
      const e = this._undoRedoService.getLastElement(this._model.uri);
      f(e) && e.open();
    }
    clear() {
      this._undoRedoService.removeElements(this._model.uri);
    }
    _getOrCreateEditStackElement(e) {
      const t = this._undoRedoService.getLastElement(this._model.uri);
      if (f(t) && t.canAppend(this._model)) return t;
      const i = new u(this._model, e);
      return (this._undoRedoService.pushElement(i), i);
    }
    pushEOL(e) {
      const t = this._getOrCreateEditStackElement(null);
      (this._model.setEOL(e), t.append(this._model, [], p(this._model), this._model.getAlternativeVersionId(), null));
    }
    pushEditOperation(e, t, i) {
      const n = this._getOrCreateEditStackElement(e),
        o = this._model.applyEdits(t, !0),
        s = m._computeCursorState(i, o),
        r = o.map((e, t) => ({
          index: t,
          textChange: e.textChange
        }));
      return (r.sort((e, t) => e.textChange.oldPosition === t.textChange.oldPosition ? e.index - t.index : e.textChange.oldPosition - t.textChange.oldPosition), n.append(this._model, r.map(e => e.textChange), p(this._model), this._model.getAlternativeVersionId(), s), s);
    }
    static _computeCursorState(e, t) {
      try {
        return e ? e(t) : null;
      } catch (e) {
        return ((0, o.dL)(e), null);
      }
    }
  }
};