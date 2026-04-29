module.exports = e => {
  var t = (function (e) {
    "use strict";

    var t,
      i = Object.prototype,
      n = i.hasOwnProperty,
      o = "function" == typeof Symbol ? Symbol : {},
      s = o.iterator || "@@iterator",
      r = o.asyncIterator || "@@asyncIterator",
      a = o.toStringTag || "@@toStringTag";
    function l(e, t, i) {
      return (Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), e[t]);
    }
    try {
      l({}, "");
    } catch (e) {
      l = function (e, t, i) {
        return (e[t] = i);
      };
    }
    function c(e, t, i, n) {
      var o = t && t.prototype instanceof m ? t : m,
        s = Object.create(o.prototype),
        r = new D(n || []);
      return ((s._invoke = (function (e, t, i) {
        var n = h;
        return function (o, s) {
          if (n === g) throw new Error("Generator is already running");
          if (n === p) {
            if ("throw" === o) throw s;
            return E();
          }
          for (i.method = o, i.arg = s;;) {
            var r = i.delegate;
            if (r) {
              var a = k(r, i);
              if (a) {
                if (a === f) continue;
                return a;
              }
            }
            if ("next" === i.method) i.sent = i._sent = i.arg;else if ("throw" === i.method) {
              if (n === h) throw ((n = p), i.arg);
              i.dispatchException(i.arg);
            } else "return" === i.method && i.abrupt("return", i.arg);
            n = g;
            var l = d(e, t, i);
            if ("normal" === l.type) {
              if (((n = i.done ? p : u), l.arg === f)) continue;
              return {
                value: l.arg,
                done: i.done
              };
            }
            "throw" === l.type && ((n = p), (i.method = "throw"), (i.arg = l.arg));
          }
        };
      })(e, i, r)), s);
    }
    function d(e, t, i) {
      try {
        return {
          type: "normal",
          arg: e.call(t, i)
        };
      } catch (e) {
        return {
          type: "throw",
          arg: e
        };
      }
    }
    e.wrap = c;
    var h = "suspendedStart",
      u = "suspendedYield",
      g = "executing",
      p = "completed",
      f = {};
    function m() {}
    function v() {}
    function _() {}
    var b = {};
    b[s] = function () {
      return this;
    };
    var w = Object.getPrototypeOf,
      y = w && w(w(I([])));
    y && y !== i && n.call(y, s) && (b = y);
    var C = (_.prototype = m.prototype = Object.create(b));
    function x(e) {
      ["next", "throw", "return"].forEach(function (t) {
        l(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function S(e, t) {
      function i(o, s, r, a) {
        var l = d(e[o], e, s);
        if ("throw" !== l.type) {
          var c = l.arg,
            h = c.value;
          return h && "object" == typeof h && n.call(h, "__await") ? t.resolve(h.__await).then(function (e) {
            i("next", e, r, a);
          }, function (e) {
            i("throw", e, r, a);
          }) : t.resolve(h).then(function (e) {
            ((c.value = e), r(c));
          }, function (e) {
            return i("throw", e, r, a);
          });
        }
        a(l.arg);
      }
      var o;
      this._invoke = function (e, n) {
        function s() {
          return new t(function (t, o) {
            i(e, n, t, o);
          });
        }
        return (o = o ? o.then(s, s) : s());
      };
    }
    function k(e, i) {
      var n = e.iterator[i.method];
      if (n === t) {
        if (((i.delegate = null), "throw" === i.method)) {
          if (e.iterator.return && ((i.method = "return"), (i.arg = t), k(e, i), "throw" === i.method)) return f;
          ((i.method = "throw"), (i.arg = new TypeError("The iterator does not provide a 'throw' method")));
        }
        return f;
      }
      var o = d(n, e.iterator, i.arg);
      if ("throw" === o.type) return ((i.method = "throw"), (i.arg = o.arg), (i.delegate = null), f);
      var s = o.arg;
      return s ? s.done ? ((i[e.resultName] = s.value), (i.next = e.nextLoc), "return" !== i.method && ((i.method = "next"), (i.arg = t)), (i.delegate = null), f) : s : ((i.method = "throw"), (i.arg = new TypeError("iterator result is not an object")), (i.delegate = null), f);
    }
    function L(e) {
      var t = {
        tryLoc: e[0]
      };
      (1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t));
    }
    function N(e) {
      var t = e.completion || {};
      ((t.type = "normal"), delete t.arg, (e.completion = t));
    }
    function D(e) {
      ((this.tryEntries = [{
        tryLoc: "root"
      }]), e.forEach(L, this), this.reset(!0));
    }
    function I(e) {
      if (e) {
        var i = e[s];
        if (i) return i.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            r = function i() {
              for (; ++o < e.length;) if (n.call(e, o)) return ((i.value = e[o]), (i.done = !1), i);
              return ((i.value = t), (i.done = !0), i);
            };
          return (r.next = r);
        }
      }
      return {
        next: E
      };
    }
    function E() {
      return {
        value: t,
        done: !0
      };
    }
    return ((v.prototype = C.constructor = _), (_.constructor = v), (v.displayName = l(_, a, "GeneratorFunction")), (e.isGeneratorFunction = function (e) {
      var t = "function" == typeof e && e.constructor;
      return (!!t && (t === v || "GeneratorFunction" === (t.displayName || t.name)));
    }), (e.mark = function (e) {
      return (Object.setPrototypeOf ? Object.setPrototypeOf(e, _) : ((e.__proto__ = _), l(e, a, "GeneratorFunction")), (e.prototype = Object.create(C)), e);
    }), (e.awrap = function (e) {
      return {
        __await: e
      };
    }), x(S.prototype), (S.prototype[r] = function () {
      return this;
    }), (e.AsyncIterator = S), (e.async = function (t, i, n, o, s) {
      void 0 === s && (s = Promise);
      var r = new S(c(t, i, n, o), s);
      return e.isGeneratorFunction(i) ? r : r.next().then(function (e) {
        return e.done ? e.value : r.next();
      });
    }), x(C), l(C, a, "Generator"), (C[s] = function () {
      return this;
    }), (C.toString = function () {
      return "[object Generator]";
    }), (e.keys = function (e) {
      var t = [];
      for (var i in e) t.push(i);
      return (t.reverse(), function i() {
        for (; t.length;) {
          var n = t.pop();
          if (n in e) return ((i.value = n), (i.done = !1), i);
        }
        return ((i.done = !0), i);
      });
    }), (e.values = I), (D.prototype = {
      constructor: D,
      reset: function (e) {
        if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(N), !e)) for (var i in this) "t" === i.charAt(0) && n.call(this, i) && !isNaN(+i.slice(1)) && (this[i] = t);
      },
      stop: function () {
        this.done = !0;
        var e = this.tryEntries[0].completion;
        if ("throw" === e.type) throw e.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var i = this;
        function o(n, o) {
          return ((a.type = "throw"), (a.arg = e), (i.next = n), o && ((i.method = "next"), (i.arg = t)), !!o);
        }
        for (var s = this.tryEntries.length - 1; s >= 0; --s) {
          var r = this.tryEntries[s],
            a = r.completion;
          if ("root" === r.tryLoc) return o("end");
          if (r.tryLoc <= this.prev) {
            var l = n.call(r, "catchLoc"),
              c = n.call(r, "finallyLoc");
            if (l && c) {
              if (this.prev < r.catchLoc) return o(r.catchLoc, !0);
              if (this.prev < r.finallyLoc) return o(r.finallyLoc);
            } else if (l) {
              if (this.prev < r.catchLoc) return o(r.catchLoc, !0);
            } else {
              if (!c) throw new Error("try statement without catch or finally");
              if (this.prev < r.finallyLoc) return o(r.finallyLoc);
            }
          }
        }
      },
      abrupt: function (e, t) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var o = this.tryEntries[i];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var s = o;
            break;
          }
        }
        s && ("break" === e || "continue" === e) && s.tryLoc <= t && t <= s.finallyLoc && (s = null);
        var r = s ? s.completion : {};
        return ((r.type = e), (r.arg = t), s ? ((this.method = "next"), (this.next = s.finallyLoc), f) : this.complete(r));
      },
      complete: function (e, t) {
        if ("throw" === e.type) throw e.arg;
        return ("break" === e.type || "continue" === e.type ? (this.next = e.arg) : "return" === e.type ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end")) : "normal" === e.type && t && (this.next = t), f);
      },
      finish: function (e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var i = this.tryEntries[t];
          if (i.finallyLoc === e) return (this.complete(i.completion, i.afterLoc), N(i), f);
        }
      },
      catch: function (e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var i = this.tryEntries[t];
          if (i.tryLoc === e) {
            var n = i.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              N(i);
            }
            return o;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (e, i, n) {
        return ((this.delegate = {
          iterator: I(e),
          resultName: i,
          nextLoc: n
        }), "next" === this.method && (this.arg = t), f);
      }
    }), e);
  })(e.exports);
  try {
    regeneratorRuntime = t;
  } catch (e) {
    Function("r", "regeneratorRuntime = r")(t);
  }
};