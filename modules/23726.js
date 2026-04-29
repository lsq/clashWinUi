const LANGUAGE = "language";
const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    default: () => F
  }));
  var n = i(48926),
    o = i.n(n),
    s = i(319),
    r = i.n(s),
    a = i(59713),
    l = i.n(a),
    c = i(63038),
    d = i.n(c),
    h = i(87757),
    u = i.n(h),
    g = i(57147),
    p = i.n(g),
    f = i(11442),
    m = i.n(f),
    v = i(71017),
    _ = i.n(v),
    b = i(54387),
    w = i.n(b),
    y = i(71893),
    C = i.n(y),
    x = i(24793),
    S = i.n(x),
    k = i(56796),
    L = i(33182),
    N = i(24883),
    D = i(81518),
    I = i(83566),
    E = function (e, t) {
      var i,
        n = null !== (i = N.Z.get(D.Z.MENU_ITEM_ORDER)) && void 0 !== i ? i : [],
        o = n.findIndex(function (t) {
          return t === e.title;
        });
      return -1 === o ? 1 : o - n.findIndex(function (e) {
        return e === t.title;
      });
    },
    T = i(72298);
  function M(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  function A(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? M(Object(i), !0).forEach(function (t) {
        l()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : M(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  var O = {
      mixedPort: function (e) {
        return e.confData["mixed-port"] || 0;
      },
      controllerPort: function (e) {
        var t = e.confData["external-controller"];
        if (t) {
          var i = t.split(":"),
            n = d()(i, 2),
            o = (n[0], n[1]);
          return parseInt(o.trim()) || 0;
        }
        return 0;
      },
      secret: function (e) {
        var t = e.confData.secret,
          i = void 0 === t ? "" : t;
        return i;
      },
      clashAxiosClient: function (e, t) {
        var i = t.controllerPort,
          n = t.secret;
        return i > 0 ? w().create({
          baseURL: "http://127.0.0.1:".concat(i, "/"),
          timeout: 5e3,
          headers: {
            Authorization: "Bearer ".concat(n)
          }
        }) : null;
      },
      clashGotClient: function (e, t) {
        var i = t.controllerPort,
          n = t.secret;
        return i > 0 ? C().extend({
          baseUrl: "http://127.0.0.1:".concat(i),
          headers: {
            Authorization: "Bearer ".concat(n)
          }
        }) : null;
      },
      clashWSClient: function (e, t) {
        return function (e) {
          var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = t.controllerPort,
            o = t.secret;
          if (n > 0) {
            /^\//.test(e) || (e = "/" + e);
            var s = "ws://127.0.0.1:".concat(n).concat(e, "?token=").concat(o).concat(i.length > 0 ? "&".concat(i.join("&")) : "");
            return new k(s);
          }
          return null;
        };
      },
      resourcesPath: function (e) {
        return e.isDevMode ? "" : "" !== e.exePath ? _().join(_().dirname(e.exePath), (0, I.V5)() ? "../Resources" : "./resources") : "";
      },
      filesPath: function (e, t) {
        return "" !== t.resourcesPath ? _().join(t.resourcesPath, "static/files") : "static/files";
      },
      clashBinaryPath: function (e, t) {
        var i,
          n,
          o = ((i = {}), l()(i, I.Ap, _().join(t.filesPath, "win", "ia32")), l()(i, I.J4, _().join(t.filesPath, "win", "x64")), l()(i, I.Vm, _().join(t.filesPath, "win", "arm64")), l()(i, I.Ml, _().join(t.filesPath, "darwin", "x64")), l()(i, I.UD, _().join(t.filesPath, "darwin", "arm64")), l()(i, I.bV, _().join(t.filesPath, "linux", "x64")), l()(i, I.tU, _().join(t.filesPath, "linux", "arm64")), i)[(0, I.$Q)()],
          s = ((n = {}), l()(n, I.Ap, "clash-win32.exe"), l()(n, I.J4, "clash-win64.exe"), l()(n, I.Vm, "clash-win-arm64.exe"), l()(n, I.Ml, "./clash-darwin"), l()(n, I.UD, "./clash-darwin"), l()(n, I.bV, "./clash-linux"), l()(n, I.tU, "./clash-linux"), n)[(0, I.$Q)()];
        return _().join(o, s);
      },
      theme: function (e) {
        if (0 === Object.keys(e.settings).length) return "unknown";
        if (e.settings) {
          var t = e.settings,
            i = t.theme,
            n = void 0 === i ? 0 : i,
            o = t.systemTheme;
          return void 0 !== o && o ? e.shouldUseDarkTheme ? "dark" : "light" : ["light", "dark", "mc", "2077"][n];
        }
        return "light";
      },
      menuItemsWithOrder: function (e) {
        return r()(e.menuItems).sort(E);
      },
      fontFamily: function (e) {
        var t = e.settings,
          i = t.fontFamily,
          n = void 0 === i ? "" : i,
          o = t.useSystemEmoji,
          s = void 0 !== o && o,
          r = n.split(",").map(function (e) {
            return '"'.concat(S().trim(e, ' "'), '"');
          }),
          a = "".concat(r.join(","), ', "Microsoft Yahei", "PingFang SC", "system-ui", 微软雅黑');
        return s ? a : "".concat(a, ', "TwemojiMozilla"');
      }
    },
    P = {
      SET_IS_DEV_MODE: function (e, t) {
        var i = t.isDevMode;
        ((e.isDevMode = i), i && (e.isWindowShow = !0));
      },
      CHANGE_IS_MIXIN_ENABLE: function (e, t) {
        var i = t.isMixin;
        ((modifyState.isMixin = i), "" === e.matchedSSID && N.Z.put(D.Z.IS_MIXIN, i));
        ((e.isMixinEnable = i), "" === e.matchedSSID && N.Z.put(D.Z.IS_MIXIN, i));
      },
      SET_CLASH_PATH: function (e, t) {
        var i = t.path;
        e.clashPath = _().normalize(i);
      },
      SET_CLASH_STATUS: function (e, t) {
        var i = t.status;
        (i !== L.Z.CONNECTED && i !== L.Z.DISCONNECTED) || (e.clashStatus = i);
      },
      SET_PROFILES_PATH: function (e, t) {
        var i = t.path;
        e.profilesPath = _().normalize(i);
      },
      SET_CONF_DATA: function (e, t) {
        var i = t.data;
        e.confData = i;
      },
      LOAD_PROFILES: function (e) {
        var t = p().readFileSync(_().join(e.profilesPath, "list.yml"), "utf8"),
          i = m().parse(t, {
            merge: !0,
            schema: "yaml-1.1"
          }),
          n = i.files,
          o = i.index;
        e.profiles = {
          files: n,
          index: o
        };
      },
      SAVE_PROFILES: function (e) {
        p().writeFileSync(_().join(e.profilesPath, "list.yml"), m().stringify(e.profiles));
      },
      CHANGE_PROFILES: function (e, t) {
        var i = t.profiles;
        e.profiles = A(A({}, e.profiles), {}, {
          files: i
        });
      },
      CHANGE_PROFILES_INDEX: function (e, t) {
        var i = t.index;
        e.profiles = A(A({}, e.profiles), {}, {
          index: i
        });
      },
      CHANGE_PROFILE: function (e, t) {
        var i = t.index,
          n = t.profile;
        if (n) {
          var o = e.profiles.files.slice();
          ((o[i] = n), (e.profiles = A(A({}, e.profiles), {}, {
            files: o
          })));
        }
      },
      DELETE_PROFILE: function (e, t) {
        var i = t.index,
          n = e.profiles.files.slice();
        (n.splice(i, 1), (e.profiles = A(A({}, e.profiles), {}, {
          files: n
        })));
      },
      APPEND_PROFILE: function (e, t) {
        var i = t.profile,
          n = e.profiles.files,
          o = void 0 === n ? [] : n;
        i && (e.profiles = A(A({}, e.profiles), {}, {
          files: [].concat(r()(o), [i])
        }));
      },
      SET_LOG_FILE_PATH: function (e, t) {
        var i = t.path,
          n = _().normalize(i);
        ((e.logFilePath = n), N.Z.put(D.Z.LAST_LOG_FILE_PATH, n));
      },
      SET_EXE_PATH: function (e, t) {
        var i = t.path;
        e.exePath = _().normalize(i);
      },
      APPEND_ERROR: function (e, t) {
        var i = t.error;
        e.errors = [].concat(r()(e.errors), [i]);
      },
      CHANGE_STATUS: function (e, t) {
        var i = t.status;
        e.status = i;
      },
      ADD_AXIOS_FLYING_REQUEST_COUNT: function (e, t) {
        var i = t.count;
        e.clashAxiosFlyingRequestCount += i;
      },
      SET_SETTINGS_OBJECT: function (e, t) {
        var i = t.obj;
        e.settings = i;
      },
      SAVE_SETTINGS_OBJECT: function (e, t) {
        var i = t.obj;
        ((e.settings = i), p().writeFileSync(_().join(e.clashPath, "cfw-settings.yaml"), m().stringify(i)));
      },
      SET_SHOULD_USE_DARK_THEME: function (e, t) {
        var i = t.shouldUseDarkTheme;
        e.shouldUseDarkTheme = i;
      },
      SET_DETECTED_INTERFACE_NAME: function (e, t) {
        var i = t.interfaceName;
        ((e.detectedInterfaceName = i), N.Z.put(D.Z.DETECTED_INTERFACE_NAME, i));
      },
      SET_IS_WINDOW_SHOW: function (e, t) {
        var i = t.isShow;
        e.isWindowShow = i;
      },
      SET_IS_APP_SUSPEND: function (e, t) {
        var i = t.isSuspend;
        e.isAppSuspend = i;
      },
      SET_INNER_SERVER_PORT: function (e, t) {
        var i = t.port;
        e.innerServerPort = i;
      },
      SET_IS_LOCAL_MODE: function (e, t) {
        var i = t.isLocal;
        e.isLocalMode = i;
      },
      SET_IS_LAUNCHING: function (e, t) {
        var i = t.isLaunching;
        e.isLaunching = i;
      },
      SET_MENU_ITEMS: function (e, t) {
        var i = t.items;
        e.menuItems = i;
      },
      SET_UPDATE_DOWNLOAD_PROGRESS: function (e, t) {
        var i = t.progress;
        e.updateDownloadProgress = i;
      },
      SET_IS_SYSTEM_PROXY_ON: function (e, t) {
        var i = t.isOn;
        ((e.isSystemProxyOn = i), "" === e.matchedSSID && N.Z.put(D.Z.SYSTEM_PROXY, i));
      },
      SET_IS_SUB_VIEW_SHOW: function (e, t) {
        t.isShow ? (e.isSubViewShow = !0) : setTimeout(function () {
          e.isSubViewShow = !1;
        }, 50);
      },
      SET_CURRENT_ROUTE_PATH: function (e, t) {
        var i = t.path;
        ((e.currentRoutePath = i), N.Z.put(D.Z.CURRENT_ROUTE_PATH, i));
      },
      ADD_PROFILE_REFRESH_TIMES: function (e, t) {
        var i = t.times,
          n = void 0 === i ? 1 : i;
        e.profileRefreshTimes += n;
      },
      CHANGE_MODE: function (e, t) {
        var i = t.mode;
        ["direct", "rule", "global", "script"].includes(i) && (e.mode = i);
      },
      SET_ROUTER_HIJACK_MAC_ADDRESSES: function (e, t) {
        var i = t.addresses;
        ((e.routerHijackMacAddresses = i), N.Z.put(D.Z.ROUTER_HIJACK_MAC_ADDRESSES, i));
      },
      SET_CURRENT_PROFILE_PAYLOAD: function (e, t) {
        var i = t.payload;
        e.currentProfilePayload = i;
      },
      SET_IS_SILENT_UPGRADED: function (e, t) {
        var i = t.isUpgraded;
        e.isSilentUpgraded = i;
      },
      SET_TUN_SETTINGS: function (e, t) {
        var i = t.settings;
        ((e.tunSettings = i), N.Z.put(D.Z.TUN_SETTINGS, i));
      },
      CHANGE_IS_TUN_ENABLE: function (e, t) {
        var i = t.isTun;
        ((modifyState.isTun = i), "" === e.matchedSSID && N.Z.put(D.Z.IS_TUN, i));
        ((e.isTunEnable = i), "" === e.matchedSSID && N.Z.put(D.Z.IS_TUN, i));
      },
      SET_IS_FIREWALL_RULE_EXIST: function (e, t) {
        var i = t.isExist;
        e.isFirewallRuleExist = i;
      },
      SET_USER_DNS: function (e, t) {
        var i = t.dns;
        e.userDNS = i;
      },
      SET_MATCHED_SSID: function (e, t) {
        var i = t.ssid;
        e.matchedSSID = i;
      }
    },
    R = {
      getMode: function (e) {
        return o()(u().mark(function t() {
          var i, n, o, s, r, a, l;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                if (((i = e.commit), (n = e.getters), !(o = n.clashAxiosClient))) {
                  t.next = 9;
                  break;
                }
                return ((t.next = 5), o.get("/configs").catch(function (e) {}));
              case 5:
                ((s = t.sent), (r = s.status), (a = s.data), 200 === r && ((l = a.mode), i("CHANGE_MODE", {
                  mode: l
                })));
              case 9:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      setMode: function (e, t) {
        return o()(u().mark(function i() {
          var n, o, s, r, a;
          return u().wrap(function (i) {
            for (;;) switch ((i.prev = i.next)) {
              case 0:
                if (((n = e.commit), (o = e.getters), (s = t.mode), !(r = o.clashAxiosClient))) {
                  i.next = 9;
                  break;
                }
                return ((i.next = 6), r.patch("/configs", {
                  mode: s
                }).catch(function (e) {}));
              case 6:
                ((a = i.sent), 204 === a.status && n("CHANGE_MODE", {
                  mode: s
                }));
              case 9:
              case "end":
                return i.stop();
            }
          }, i);
        }))();
      },
      getParserLogPath: function () {
        return o()(u().mark(function e() {
          var t;
          return u().wrap(function (e) {
            for (;;) switch ((e.prev = e.next)) {
              case 0:
                return ((e.next = 2), T.ipcRenderer.invoke("app", "getPath", "temp"));
              case 2:
                return ((t = e.sent), e.abrupt("return", _().join(t, "cfw-parser.log")));
              case 4:
              case "end":
                return e.stop();
            }
          }, e);
        }))();
      },
      getScriptLogPath: function () {
        return o()(u().mark(function e() {
          var t;
          return u().wrap(function (e) {
            for (;;) switch ((e.prev = e.next)) {
              case 0:
                return ((e.next = 2), T.ipcRenderer.invoke("app", "getPath", "temp"));
              case 2:
                return ((t = e.sent), e.abrupt("return", _().join(t, "cfw-script.log")));
              case 4:
              case "end":
                return e.stop();
            }
          }, e);
        }))();
      }
    };
  const Lg = new Language(i(24883).Z.get(LANGUAGE));
  if (modifyState.language === -1) {
    modifyState.language = i(24883).Z.get(LANGUAGE) === null ? 0 : i(24883).Z.get(LANGUAGE);
    require("electron").ipcRenderer.invoke("cfw-language", modifyState.language);
    modifyState.isTun = N.Z.get(D.Z.IS_TUN);
    modifyState.isMixin = N.Z.get(D.Z.IS_MIXIN);
  }
  const F = {
    state: {
      isDevMode: !1,
      clashPath: "",
      clashStatus: L.Z.DISCONNECTED,
      profilesPath: "",
      profiles: {},
      confData: {},
      logFilePath: N.Z.get(D.Z.LAST_LOG_FILE_PATH) || "",
      isMixinEnable: N.Z.get(D.Z.IS_MIXIN) || !1,
      exePath: "",
      errors: [],
      status: L.r.INIT,
      clashAxiosFlyingRequestCount: 0,
      settings: {},
      shouldUseDarkTheme: !1,
      detectedInterfaceName: N.Z.get(D.Z.DETECTED_INTERFACE_NAME) || "",
      isWindowShow: !1,
      isAppSuspend: !1,
      innerServerPort: 0,
      isLocalMode: !0,
      isLaunching: !0,
      menuItems: [{
        title: Lg.general(),
        path: "/home/general"
      }, {
        title: Lg.proxies(),
        path: "/home/proxy"
      }, {
        title: Lg.profiles(),
        path: "/home/server"
      }, {
        title: Lg.logs(),
        path: "/home/log"
      }, {
        title: Lg.connections(),
        path: "/home/connection"
      }, {
        title: Lg.settings(),
        path: "/home/setting"
      }, {
        title: Lg.feedback(),
        path: "/home/about"
      }],
      updateDownloadProgress: null,
      isSystemProxyOn: N.Z.get(D.Z.SYSTEM_PROXY) || !1,
      isSubViewShow: !1,
      currentRoutePath: N.Z.get(D.Z.CURRENT_ROUTE_PATH) || "/home/general",
      profileRefreshTimes: 0,
      mode: "rule",
      routerHijackMacAddresses: N.Z.get(D.Z.ROUTER_HIJACK_MAC_ADDRESSES) || [],
      currentProfilePayload: {},
      isSilentUpgraded: !1,
      tunSettings: N.Z.get(D.Z.TUN_SETTINGS),
      isTunEnable: N.Z.get(D.Z.IS_TUN) || !1,
      isFirewallRuleExist: !1,
      userDNS: null,
      matchedSSID: ""
    },
    getters: O,
    mutations: P,
    actions: R
  };
};
