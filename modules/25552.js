module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    H: () => a
  });
  var n = i(89587),
    o = {},
    s = {},
    r = (function () {
      function e(e) {
        var t = this;
        ((this._languageId = e), (this._loadingTriggered = !1), (this._lazyLoadPromise = new Promise(function (e, i) {
          ((t._lazyLoadPromiseResolve = e), (t._lazyLoadPromiseReject = i));
        })));
      }
      return ((e.getOrCreate = function (t) {
        return (s[t] || (s[t] = new e(t)), s[t]);
      }), (e.prototype.whenLoaded = function () {
        return this._lazyLoadPromise;
      }), (e.prototype.load = function () {
        var e = this;
        return (this._loadingTriggered || ((this._loadingTriggered = !0), o[this._languageId].loader().then(function (t) {
          return e._lazyLoadPromiseResolve(t);
        }, function (t) {
          return e._lazyLoadPromiseReject(t);
        })), this._lazyLoadPromise);
      }), e);
    })();
  function a(e) {
    var t = e.id;
    ((o[t] = e), n.Mj.register(e));
    var i = r.getOrCreate(t);
    (n.Mj.setMonarchTokensProvider(t, i.whenLoaded().then(function (e) {
      return e.language;
    })), n.Mj.onLanguage(t, function () {
      i.load().then(function (e) {
        n.Mj.setLanguageConfiguration(t, e.conf);
      });
    }));
  }
};