module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    ZP: () => c
  });
  var n = i(24793),
    o = i(59273),
    s = [],
    r = function (e) {
      var t = s.find(function (t) {
        return t.id === e;
      });
      t && -1 !== t.intervalId && (clearInterval(t.intervalId), (s = s.filter(function (t) {
        return t.id !== e;
      })));
    },
    a = function (e) {
      var t = s.find(function (t) {
        return t.id === e;
      });
      t && (clearInterval(t.intervalId), (t.intervalId = -1));
    },
    l = function (e) {
      var t = s.find(function (t) {
        return t.id === e;
      });
      t && -1 === t.intervalId && (t.intervalId = setInterval(t.callback, t.interval));
    };
  const c = {
    add: function (e, t) {
      var i = (0, n.uniqueId)(),
        r = o.Z.state.app.isWindowShow ? setInterval(e, t) : -1;
      return (s.push({
        id: i,
        intervalId: r,
        callback: e,
        interval: t
      }), i);
    },
    stop: r,
    stopAll: function () {
      s.forEach(function (e) {
        return r(e.id);
      });
    },
    pause: a,
    pauseAll: function () {
      s.forEach(function (e) {
        return a(e.id);
      });
    },
    resume: l,
    resumeAll: function () {
      s.forEach(function (e) {
        return l(e.id);
      });
    },
    getAll: function () {
      return s;
    }
  };
};