module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    x: () => a
  });
  var n = i(91741),
    o = i(50187),
    s = i(24314),
    r = function (e, t, i, n) {
      return new (i || (i = Promise))(function (o, s) {
        function r(e) {
          try {
            l(n.next(e));
          } catch (e) {
            s(e);
          }
        }
        function a(e) {
          try {
            l(n.throw(e));
          } catch (e) {
            s(e);
          }
        }
        function l(e) {
          var t;
          e.done ? o(e.value) : ((t = e.value), t instanceof i ? t : new i(function (e) {
            e(t);
          })).then(r, a);
        }
        l((n = n.apply(e, t || [])).next());
      });
    };
  class a {
    provideSelectionRanges(e, t) {
      return r(this, void 0, void 0, function* () {
        const i = [];
        for (const n of t) {
          const t = [];
          i.push(t);
          const o = new Map();
          (yield new Promise(t => a._bracketsRightYield(t, 0, e, n, o)), yield new Promise(i => a._bracketsLeftYield(i, 0, e, n, o, t)));
        }
        return i;
      });
    }
    static _bracketsRightYield(e, t, i, o, s) {
      const r = new Map(),
        l = Date.now();
      for (;;) {
        if (t >= a._maxRounds) {
          e();
          break;
        }
        if (!o) {
          e();
          break;
        }
        let c = i.findNextBracket(o);
        if (!c) {
          e();
          break;
        }
        if (Date.now() - l > a._maxDuration) {
          setTimeout(() => a._bracketsRightYield(e, t + 1, i, o, s));
          break;
        }
        const d = c.close[0];
        if (c.isOpen) {
          let e = r.has(d) ? r.get(d) : 0;
          r.set(d, e + 1);
        } else {
          let e = r.has(d) ? r.get(d) : 0;
          if (((e -= 1), r.set(d, Math.max(0, e)), e < 0)) {
            let e = s.get(d);
            (e || ((e = new n.S()), s.set(d, e)), e.push(c.range));
          }
        }
        o = c.range.getEndPosition();
      }
    }
    static _bracketsLeftYield(e, t, i, n, o, r) {
      const l = new Map(),
        c = Date.now();
      for (;;) {
        if (t >= a._maxRounds && 0 === o.size) {
          e();
          break;
        }
        if (!n) {
          e();
          break;
        }
        let d = i.findPrevBracket(n);
        if (!d) {
          e();
          break;
        }
        if (Date.now() - c > a._maxDuration) {
          setTimeout(() => a._bracketsLeftYield(e, t + 1, i, n, o, r));
          break;
        }
        const h = d.close[0];
        if (d.isOpen) {
          let e = l.has(h) ? l.get(h) : 0;
          if (((e -= 1), l.set(h, Math.max(0, e)), e < 0)) {
            let e = o.get(h);
            if (e) {
              let t = e.shift();
              0 === e.size && o.delete(h);
              const n = s.e.fromPositions(d.range.getEndPosition(), t.getStartPosition()),
                l = s.e.fromPositions(d.range.getStartPosition(), t.getEndPosition());
              (r.push({
                range: n
              }), r.push({
                range: l
              }), a._addBracketLeading(i, l, r));
            }
          }
        } else {
          let e = l.has(h) ? l.get(h) : 0;
          l.set(h, e + 1);
        }
        n = d.range.getStartPosition();
      }
    }
    static _addBracketLeading(e, t, i) {
      if (t.startLineNumber === t.endLineNumber) return;
      const n = t.startLineNumber,
        r = e.getLineFirstNonWhitespaceColumn(n);
      0 !== r && r !== t.startColumn && (i.push({
        range: s.e.fromPositions(new o.L(n, r), t.getEndPosition())
      }), i.push({
        range: s.e.fromPositions(new o.L(n, 1), t.getEndPosition())
      }));
      const a = n - 1;
      if (a > 0) {
        const n = e.getLineFirstNonWhitespaceColumn(a);
        n === t.startColumn && n !== e.getLineLastNonWhitespaceColumn(a) && (i.push({
          range: s.e.fromPositions(new o.L(a, n), t.getEndPosition())
        }), i.push({
          range: s.e.fromPositions(new o.L(a, 1), t.getEndPosition())
        }));
      }
    }
  }
  ((a._maxDuration = 30), (a._maxRounds = 2));
};