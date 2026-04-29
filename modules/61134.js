module.exports = (e, t, i) => {
  "use strict";

  var n;
  (i.d(t, {
    e: () => n
  }), (function (e) {
    function t(e, t) {
      if (e.start >= t.end || t.start >= e.end) return {
        start: 0,
        end: 0
      };
      const i = Math.max(e.start, t.start),
        n = Math.min(e.end, t.end);
      return n - i <= 0 ? {
        start: 0,
        end: 0
      } : {
        start: i,
        end: n
      };
    }
    function i(e) {
      return e.end - e.start <= 0;
    }
    ((e.intersect = t), (e.isEmpty = i), (e.intersects = function (e, n) {
      return !i(t(e, n));
    }), (e.relativeComplement = function (e, t) {
      const n = [],
        o = {
          start: e.start,
          end: Math.min(t.start, e.end)
        },
        s = {
          start: Math.max(t.end, e.start),
          end: e.end
        };
      return (i(o) || n.push(o), i(s) || n.push(s), n);
    }));
  })(n || (n = {})));
};