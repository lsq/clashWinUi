module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Id: () => h,
    Y9: () => g,
    z6: () => f
  });
  var n,
    o,
    s = i(97295);
  class r {
    constructor() {
      ((this._value = ""), (this._pos = 0));
    }
    reset(e) {
      return ((this._value = e), (this._pos = 0), this);
    }
    next() {
      return ((this._pos += 1), this);
    }
    hasNext() {
      return this._pos < this._value.length - 1;
    }
    cmp(e) {
      return e.charCodeAt(0) - this._value.charCodeAt(this._pos);
    }
    value() {
      return this._value[this._pos];
    }
  }
  class a {
    constructor(e = !0) {
      this._caseSensitive = e;
    }
    reset(e) {
      return ((this._value = e), (this._from = 0), (this._to = 0), this.next());
    }
    hasNext() {
      return this._to < this._value.length;
    }
    next() {
      this._from = this._to;
      let e = !0;
      for (; this._to < this._value.length; this._to++) {
        if (46 === this._value.charCodeAt(this._to)) {
          if (!e) break;
          this._from++;
        } else e = !1;
      }
      return this;
    }
    cmp(e) {
      return this._caseSensitive ? (0, s.TT)(e, this._value, 0, e.length, this._from, this._to) : (0, s.j_)(e, this._value, 0, e.length, this._from, this._to);
    }
    value() {
      return this._value.substring(this._from, this._to);
    }
  }
  class l {
    constructor(e = !0, t = !0) {
      ((this._splitOnBackslash = e), (this._caseSensitive = t));
    }
    reset(e) {
      return ((this._value = e.replace(/\\$|\/$/, "")), (this._from = 0), (this._to = 0), this.next());
    }
    hasNext() {
      return this._to < this._value.length;
    }
    next() {
      this._from = this._to;
      let e = !0;
      for (; this._to < this._value.length; this._to++) {
        const t = this._value.charCodeAt(this._to);
        if (47 === t || (this._splitOnBackslash && 92 === t)) {
          if (!e) break;
          this._from++;
        } else e = !1;
      }
      return this;
    }
    cmp(e) {
      return this._caseSensitive ? (0, s.TT)(e, this._value, 0, e.length, this._from, this._to) : (0, s.j_)(e, this._value, 0, e.length, this._from, this._to);
    }
    value() {
      return this._value.substring(this._from, this._to);
    }
  }
  class c {
    constructor(e) {
      ((this._ignorePathCasing = e), (this._states = []), (this._stateIdx = 0));
    }
    reset(e) {
      return ((this._value = e), (this._states = []), this._value.scheme && this._states.push(1), this._value.authority && this._states.push(2), this._value.path && ((this._pathIterator = new l(!1, !this._ignorePathCasing(e))), this._pathIterator.reset(e.path), this._pathIterator.value() && this._states.push(3)), this._value.query && this._states.push(4), this._value.fragment && this._states.push(5), (this._stateIdx = 0), this);
    }
    next() {
      return (3 === this._states[this._stateIdx] && this._pathIterator.hasNext() ? this._pathIterator.next() : (this._stateIdx += 1), this);
    }
    hasNext() {
      return ((3 === this._states[this._stateIdx] && this._pathIterator.hasNext()) || this._stateIdx < this._states.length - 1);
    }
    cmp(e) {
      if (1 === this._states[this._stateIdx]) return (0, s.zY)(e, this._value.scheme);
      if (2 === this._states[this._stateIdx]) return (0, s.zY)(e, this._value.authority);
      if (3 === this._states[this._stateIdx]) return this._pathIterator.cmp(e);
      if (4 === this._states[this._stateIdx]) return (0, s.qu)(e, this._value.query);
      if (5 === this._states[this._stateIdx]) return (0, s.qu)(e, this._value.fragment);
      throw new Error();
    }
    value() {
      if (1 === this._states[this._stateIdx]) return this._value.scheme;
      if (2 === this._states[this._stateIdx]) return this._value.authority;
      if (3 === this._states[this._stateIdx]) return this._pathIterator.value();
      if (4 === this._states[this._stateIdx]) return this._value.query;
      if (5 === this._states[this._stateIdx]) return this._value.fragment;
      throw new Error();
    }
  }
  class d {
    constructor() {
      this.height = 1;
    }
    rotateLeft() {
      const e = this.right;
      return ((this.right = e.left), (e.left = this), this.updateHeight(), e.updateHeight(), e);
    }
    rotateRight() {
      const e = this.left;
      return ((this.left = e.right), (e.right = this), this.updateHeight(), e.updateHeight(), e);
    }
    updateHeight() {
      this.height = 1 + Math.max(this.heightLeft, this.heightRight);
    }
    balanceFactor() {
      return this.heightRight - this.heightLeft;
    }
    get heightLeft() {
      var e, t;
      return null !== (t = null === (e = this.left) || void 0 === e ? void 0 : e.height) && void 0 !== t ? t : 0;
    }
    get heightRight() {
      var e, t;
      return null !== (t = null === (e = this.right) || void 0 === e ? void 0 : e.height) && void 0 !== t ? t : 0;
    }
  }
  class h {
    constructor(e) {
      this._iter = e;
    }
    static forUris(e = () => !1) {
      return new h(new c(e));
    }
    static forStrings() {
      return new h(new r());
    }
    static forConfigKeys() {
      return new h(new a());
    }
    clear() {
      this._root = void 0;
    }
    set(e, t) {
      const i = this._iter.reset(e);
      let n;
      this._root || ((this._root = new d()), (this._root.segment = i.value()));
      const o = [];
      for (n = this._root;;) {
        const e = i.cmp(n.segment);
        if (e > 0) (n.left || ((n.left = new d()), (n.left.segment = i.value())), o.push([-1, n]), (n = n.left));else if (e < 0) (n.right || ((n.right = new d()), (n.right.segment = i.value())), o.push([1, n]), (n = n.right));else {
          if (!i.hasNext()) break;
          (i.next(), n.mid || ((n.mid = new d()), (n.mid.segment = i.value())), o.push([0, n]), (n = n.mid));
        }
      }
      const s = n.value;
      ((n.value = t), (n.key = e));
      for (let e = o.length - 1; e >= 0; e--) {
        const t = o[e][1];
        t.updateHeight();
        const i = t.balanceFactor();
        if (i < -1 || i > 1) {
          const i = o[e][0],
            n = o[e + 1][0];
          if (1 === i && 1 === n) o[e][1] = t.rotateLeft();else if (-1 === i && -1 === n) o[e][1] = t.rotateRight();else if (1 === i && -1 === n) ((t.right = o[e + 1][1] = o[e + 1][1].rotateRight()), (o[e][1] = t.rotateLeft()));else {
            if (-1 !== i || 1 !== n) throw new Error();
            ((t.left = o[e + 1][1] = o[e + 1][1].rotateLeft()), (o[e][1] = t.rotateRight()));
          }
          if (e > 0) switch (o[e - 1][0]) {
            case -1:
              o[e - 1][1].left = o[e][1];
              break;
            case 1:
              o[e - 1][1].right = o[e][1];
              break;
            case 0:
              o[e - 1][1].mid = o[e][1];
          } else this._root = o[0][1];
        }
      }
      return s;
    }
    get(e) {
      var t;
      return null === (t = this._getNode(e)) || void 0 === t ? void 0 : t.value;
    }
    _getNode(e) {
      const t = this._iter.reset(e);
      let i = this._root;
      for (; i;) {
        const e = t.cmp(i.segment);
        if (e > 0) i = i.left;else if (e < 0) i = i.right;else {
          if (!t.hasNext()) break;
          (t.next(), (i = i.mid));
        }
      }
      return i;
    }
    has(e) {
      const t = this._getNode(e);
      return !(void 0 === (null == t ? void 0 : t.value) && void 0 === (null == t ? void 0 : t.mid));
    }
    delete(e) {
      return this._delete(e, !1);
    }
    deleteSuperstr(e) {
      return this._delete(e, !0);
    }
    _delete(e, t) {
      var i;
      const n = this._iter.reset(e),
        o = [];
      let s = this._root;
      for (; s;) {
        const e = n.cmp(s.segment);
        if (e > 0) (o.push([-1, s]), (s = s.left));else if (e < 0) (o.push([1, s]), (s = s.right));else {
          if (!n.hasNext()) break;
          (n.next(), o.push([0, s]), (s = s.mid));
        }
      }
      if (s) {
        if ((t ? ((s.left = void 0), (s.mid = void 0), (s.right = void 0), (s.height = 1)) : ((s.key = void 0), (s.value = void 0)), !s.mid && !s.value)) if (s.left && s.right) {
          const e = this._min(s.right),
            {
              key: t,
              value: i,
              segment: n
            } = e;
          (this._delete(e.key, !1), (s.key = t), (s.value = i), (s.segment = n));
        } else {
          const e = null !== (i = s.left) && void 0 !== i ? i : s.right;
          if (o.length > 0) {
            const [t, i] = o[o.length - 1];
            switch (t) {
              case -1:
                i.left = e;
                break;
              case 0:
                i.mid = e;
                break;
              case 1:
                i.right = e;
            }
          } else this._root = e;
        }
        for (let e = o.length - 1; e >= 0; e--) {
          const t = o[e][1];
          t.updateHeight();
          const i = t.balanceFactor();
          if ((i > 1 ? (t.right.balanceFactor() >= 0 || (t.right = o[e + 1][1] = o[e + 1][1].rotateRight()), (o[e][1] = t.rotateLeft())) : i < -1 && (t.left.balanceFactor() <= 0 || (t.left = o[e + 1][1] = o[e + 1][1].rotateLeft()), (o[e][1] = t.rotateRight())), e > 0)) switch (o[e - 1][0]) {
            case -1:
              o[e - 1][1].left = o[e][1];
              break;
            case 1:
              o[e - 1][1].right = o[e][1];
              break;
            case 0:
              o[e - 1][1].mid = o[e][1];
          } else this._root = o[0][1];
        }
      }
    }
    _min(e) {
      for (; e.left;) e = e.left;
      return e;
    }
    findSubstr(e) {
      const t = this._iter.reset(e);
      let i,
        n = this._root;
      for (; n;) {
        const e = t.cmp(n.segment);
        if (e > 0) n = n.left;else if (e < 0) n = n.right;else {
          if (!t.hasNext()) break;
          (t.next(), (i = n.value || i), (n = n.mid));
        }
      }
      return (n && n.value) || i;
    }
    findSuperstr(e) {
      const t = this._iter.reset(e);
      let i = this._root;
      for (; i;) {
        const e = t.cmp(i.segment);
        if (e > 0) i = i.left;else if (e < 0) i = i.right;else {
          if (!t.hasNext()) return i.mid ? this._entries(i.mid) : void 0;
          (t.next(), (i = i.mid));
        }
      }
    }
    forEach(e) {
      for (const [t, i] of this) e(i, t);
    }
    *[Symbol.iterator]() {
      yield* this._entries(this._root);
    }
    *_entries(e) {
      e && (e.left && (yield* this._entries(e.left)), e.value && (yield [e.key, e.value]), e.mid && (yield* this._entries(e.mid)), e.right && (yield* this._entries(e.right)));
    }
  }
  class u {
    constructor(e, t) {
      ((this.uri = e), (this.value = t));
    }
  }
  class g {
    constructor(e, t) {
      ((this[n] = "ResourceMap"), e instanceof g ? ((this.map = new Map(e.map)), (this.toKey = null != t ? t : g.defaultToKey)) : ((this.map = new Map()), (this.toKey = null != e ? e : g.defaultToKey)));
    }
    set(e, t) {
      return (this.map.set(this.toKey(e), new u(e, t)), this);
    }
    get(e) {
      var t;
      return null === (t = this.map.get(this.toKey(e))) || void 0 === t ? void 0 : t.value;
    }
    has(e) {
      return this.map.has(this.toKey(e));
    }
    get size() {
      return this.map.size;
    }
    clear() {
      this.map.clear();
    }
    delete(e) {
      return this.map.delete(this.toKey(e));
    }
    forEach(e, t) {
      void 0 !== t && (e = e.bind(t));
      for (let [t, i] of this.map) e(i.value, i.uri, this);
    }
    *values() {
      for (let e of this.map.values()) yield e.value;
    }
    *keys() {
      for (let e of this.map.values()) yield e.uri;
    }
    *entries() {
      for (let e of this.map.values()) yield [e.uri, e.value];
    }
    *[((n = Symbol.toStringTag), Symbol.iterator)]() {
      for (let [, e] of this.map) yield [e.uri, e.value];
    }
  }
  g.defaultToKey = e => e.toString();
  class p {
    constructor() {
      ((this[o] = "LinkedMap"), (this._map = new Map()), (this._head = void 0), (this._tail = void 0), (this._size = 0), (this._state = 0));
    }
    clear() {
      (this._map.clear(), (this._head = void 0), (this._tail = void 0), (this._size = 0), this._state++);
    }
    isEmpty() {
      return !this._head && !this._tail;
    }
    get size() {
      return this._size;
    }
    get first() {
      var e;
      return null === (e = this._head) || void 0 === e ? void 0 : e.value;
    }
    get last() {
      var e;
      return null === (e = this._tail) || void 0 === e ? void 0 : e.value;
    }
    has(e) {
      return this._map.has(e);
    }
    get(e, t = 0) {
      const i = this._map.get(e);
      if (i) return (0 !== t && this.touch(i, t), i.value);
    }
    set(e, t, i = 0) {
      let n = this._map.get(e);
      if (n) ((n.value = t), 0 !== i && this.touch(n, i));else {
        switch (((n = {
          key: e,
          value: t,
          next: void 0,
          previous: void 0
        }), i)) {
          case 0:
          case 2:
          default:
            this.addItemLast(n);
            break;
          case 1:
            this.addItemFirst(n);
        }
        (this._map.set(e, n), this._size++);
      }
      return this;
    }
    delete(e) {
      return !!this.remove(e);
    }
    remove(e) {
      const t = this._map.get(e);
      if (t) return (this._map.delete(e), this.removeItem(t), this._size--, t.value);
    }
    shift() {
      if (!this._head && !this._tail) return;
      if (!this._head || !this._tail) throw new Error("Invalid list");
      const e = this._head;
      return (this._map.delete(e.key), this.removeItem(e), this._size--, e.value);
    }
    forEach(e, t) {
      const i = this._state;
      let n = this._head;
      for (; n;) {
        if ((t ? e.bind(t)(n.value, n.key, this) : e(n.value, n.key, this), this._state !== i)) throw new Error("LinkedMap got modified during iteration.");
        n = n.next;
      }
    }
    keys() {
      const e = this,
        t = this._state;
      let i = this._head;
      const n = {
        [Symbol.iterator]: () => n,
        next() {
          if (e._state !== t) throw new Error("LinkedMap got modified during iteration.");
          if (i) {
            const e = {
              value: i.key,
              done: !1
            };
            return ((i = i.next), e);
          }
          return {
            value: void 0,
            done: !0
          };
        }
      };
      return n;
    }
    values() {
      const e = this,
        t = this._state;
      let i = this._head;
      const n = {
        [Symbol.iterator]: () => n,
        next() {
          if (e._state !== t) throw new Error("LinkedMap got modified during iteration.");
          if (i) {
            const e = {
              value: i.value,
              done: !1
            };
            return ((i = i.next), e);
          }
          return {
            value: void 0,
            done: !0
          };
        }
      };
      return n;
    }
    entries() {
      const e = this,
        t = this._state;
      let i = this._head;
      const n = {
        [Symbol.iterator]: () => n,
        next() {
          if (e._state !== t) throw new Error("LinkedMap got modified during iteration.");
          if (i) {
            const e = {
              value: [i.key, i.value],
              done: !1
            };
            return ((i = i.next), e);
          }
          return {
            value: void 0,
            done: !0
          };
        }
      };
      return n;
    }
    [((o = Symbol.toStringTag), Symbol.iterator)]() {
      return this.entries();
    }
    trimOld(e) {
      if (e >= this.size) return;
      if (0 === e) return void this.clear();
      let t = this._head,
        i = this.size;
      for (; t && i > e;) (this._map.delete(t.key), (t = t.next), i--);
      ((this._head = t), (this._size = i), t && (t.previous = void 0), this._state++);
    }
    addItemFirst(e) {
      if (this._head || this._tail) {
        if (!this._head) throw new Error("Invalid list");
        ((e.next = this._head), (this._head.previous = e));
      } else this._tail = e;
      ((this._head = e), this._state++);
    }
    addItemLast(e) {
      if (this._head || this._tail) {
        if (!this._tail) throw new Error("Invalid list");
        ((e.previous = this._tail), (this._tail.next = e));
      } else this._head = e;
      ((this._tail = e), this._state++);
    }
    removeItem(e) {
      if (e === this._head && e === this._tail) ((this._head = void 0), (this._tail = void 0));else if (e === this._head) {
        if (!e.next) throw new Error("Invalid list");
        ((e.next.previous = void 0), (this._head = e.next));
      } else if (e === this._tail) {
        if (!e.previous) throw new Error("Invalid list");
        ((e.previous.next = void 0), (this._tail = e.previous));
      } else {
        const t = e.next,
          i = e.previous;
        if (!t || !i) throw new Error("Invalid list");
        ((t.previous = i), (i.next = t));
      }
      ((e.next = void 0), (e.previous = void 0), this._state++);
    }
    touch(e, t) {
      if (!this._head || !this._tail) throw new Error("Invalid list");
      if (1 === t || 2 === t) if (1 === t) {
        if (e === this._head) return;
        const t = e.next,
          i = e.previous;
        (e === this._tail ? ((i.next = void 0), (this._tail = i)) : ((t.previous = i), (i.next = t)), (e.previous = void 0), (e.next = this._head), (this._head.previous = e), (this._head = e), this._state++);
      } else if (2 === t) {
        if (e === this._tail) return;
        const t = e.next,
          i = e.previous;
        (e === this._head ? ((t.previous = void 0), (this._head = t)) : ((t.previous = i), (i.next = t)), (e.next = void 0), (e.previous = this._tail), (this._tail.next = e), (this._tail = e), this._state++);
      }
    }
    toJSON() {
      const e = [];
      return (this.forEach((t, i) => {
        e.push([i, t]);
      }), e);
    }
    fromJSON(e) {
      this.clear();
      for (const [t, i] of e) this.set(t, i);
    }
  }
  class f extends p {
    constructor(e, t = 1) {
      (super(), (this._limit = e), (this._ratio = Math.min(Math.max(0, t), 1)));
    }
    get limit() {
      return this._limit;
    }
    set limit(e) {
      ((this._limit = e), this.checkTrim());
    }
    get(e, t = 2) {
      return super.get(e, t);
    }
    peek(e) {
      return super.get(e, 0);
    }
    set(e, t) {
      return (super.set(e, t, 2), this.checkTrim(), this);
    }
    checkTrim() {
      this.size > this._limit && this.trimOld(Math.round(this._limit * this._ratio));
    }
  }
};