module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    _: () => m
  });
  var n,
    o,
    s = i(48926),
    r = i.n(s),
    a = i(87757),
    l = i.n(a),
    c = i(83566),
    d = i(32081),
    h = i(71017),
    u = i(59273),
    g = i(72298),
    p = (i(54387), "cfw-update".concat((0, c.V5)() ? ".dmg" : ".exe")),
    f = ((n = r()(l().mark(function e(t) {
      var i, n;
      return l().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            return ((e.next = 2), g.ipcRenderer.invoke("app", "getPath", "temp"));
          case 2:
            return ((i = e.sent), (n = (0, h.join)(i, p)), (e.next = 6), g.ipcRenderer.invoke("start-download", t, n));
          case 6:
            return (u.Z.commit("SET_UPDATE_DOWNLOAD_PROGRESS", {
              progress: 0.01
            }), (e.next = 9), new Promise(function (e, t) {
              g.ipcRenderer.on("download", function (i, o, s) {
                ("downloading" === o && u.Z.commit("SET_UPDATE_DOWNLOAD_PROGRESS", {
                  progress: s
                }), "completed" === o && (u.Z.commit("SET_UPDATE_DOWNLOAD_PROGRESS", {
                  progress: null
                }), e(n)), "failed" === o && (u.Z.commit("SET_UPDATE_DOWNLOAD_PROGRESS", {
                  progress: null
                }), t(s)));
              });
            }));
          case 9:
            return e.abrupt("return", e.sent);
          case 10:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function (e) {
      return n.apply(this, arguments);
    }),
    m = ((o = r()(l().mark(function e(t, i) {
      var n, o, s, r;
      return l().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            return ((e.next = 2), f(t));
          case 2:
            if ((n = e.sent)) {
              e.next = 5;
              break;
            }
            return e.abrupt("return");
          case 5:
            return ((e.next = 7), g.ipcRenderer.invoke("app", "getName"));
          case 7:
            return ((o = e.sent), (0, c.V5)() && ((s = (0, d.execSync)("hdiutil attach '".concat(n, "' -nobrowse"))), /\/Volumes\/(Clash for Windows.+?)\n/.test(s) && ((r = RegExp.$1), (0, d.execSync)("rm -rf '/Applications/".concat(o, ".app' && cp -R '/Volumes/").concat(r, "/").concat(o, ".app' '/Applications/").concat(o, ".app'")), (0, d.execSync)("hdiutil eject '/Volumes/".concat(r, "'"), {
              stdio: ["ignore", "ignore", "ignore"]
            }))), e.abrupt("return", n));
          case 10:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function (e, t) {
      return o.apply(this, arguments);
    });
};