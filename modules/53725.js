module.exports = (e, t, i) => {
  "use strict";

  var n;
  (i.d(t, {
    $: () => n
  }), (function (e) {
    e.is = function (e) {
      return (e && "object" == typeof e && "function" == typeof e[Symbol.iterator]);
    };
    const t = Object.freeze([]);
    ((e.empty = function () {
      return t;
    }), (e.single = function* (e) {
      yield e;
    }), (e.from = function (e) {
      return e || t;
    }), (e.isEmpty = function (e) {
      return !e || !0 === e[Symbol.iterator]().next().done;
    }), (e.first = function (e) {
      return e[Symbol.iterator]().next().value;
    }), (e.some = function (e, t) {
      for (const i of e) if (t(i)) return !0;
      return !1;
    }), (e.find = function (e, t) {
      for (const i of e) if (t(i)) return i;
    }), (e.filter = function* (e, t) {
      for (const i of e) t(i) && (yield i);
    }), (e.map = function* (e, t) {
      let i = 0;
      for (const n of e) yield t(n, i++);
    }), (e.concat = function* (...e) {
      for (const t of e) for (const e of t) yield e;
    }), (e.concatNested = function* (e) {
      for (const t of e) for (const e of t) yield e;
    }), (e.reduce = function (e, t, i) {
      let n = i;
      for (const i of e) n = t(n, i);
      return n;
    }), (e.slice = function* (e, t, i = e.length) {
      for (t < 0 && (t += e.length), i < 0 ? (i += e.length) : i > e.length && (i = e.length); t < i; t++) yield e[t];
    }), (e.consume = function (t, i = Number.POSITIVE_INFINITY) {
      const n = [];
      if (0 === i) return [n, t];
      const o = t[Symbol.iterator]();
      for (let t = 0; t < i; t++) {
        const t = o.next();
        if (t.done) return [n, e.empty()];
        n.push(t.value);
      }
      return [n, {
        [Symbol.iterator]: () => o
      }];
    }), (e.equals = function (e, t, i = (e, t) => e === t) {
      const n = e[Symbol.iterator](),
        o = t[Symbol.iterator]();
      for (;;) {
        const e = n.next(),
          t = o.next();
        if (e.done !== t.done) return !1;
        if (e.done) return !0;
        if (!i(e.value, t.value)) return !1;
      }
    }));
  })(n || (n = {})));
};