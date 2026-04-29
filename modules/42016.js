const LANGUAGE = "language";
const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z: () => qe
  });
  var n = i(63038),
    o = i.n(n),
    s = i(59713),
    r = i.n(s),
    a = i(319),
    l = i.n(a),
    c = i(48926),
    d = i.n(c),
    h = i(87757),
    u = i.n(h),
    g = i(23321),
    p = i(24793),
    f = i.n(p),
    m = i(51109),
    v = i.n(m),
    _ = i(24883),
    b = i(33182),
    w = i(83566),
    y = i(72298);
  function C(e, t) {
    var i = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (!i) {
      if (Array.isArray(e) || (i = (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return x(e, t);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === i && e.constructor && (i = e.constructor.name);
        if ("Map" === i || "Set" === i) return Array.from(e);
        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return x(e, t);
      })(e)) || (t && e && "number" == typeof e.length)) {
        i && (e = i);
        var n = 0,
          o = function () {};
        return {
          s: o,
          n: function () {
            return n >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[n++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: o
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var s,
      r = !0,
      a = !1;
    return {
      s: function () {
        i = i.call(e);
      },
      n: function () {
        var e = i.next();
        return ((r = e.done), e);
      },
      e: function (e) {
        ((a = !0), (s = e));
      },
      f: function () {
        try {
          r || null == i.return || i.return();
        } finally {
          if (a) throw s;
        }
      }
    };
  }
  function x(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
    return n;
  }
  function S(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  function k(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? S(Object(i), !0).forEach(function (t) {
        r()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : S(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  var L = i(75110),
    N = i(71017),
    D = i(57147),
    I = i(24793);
  const E = {
      props: [],
      data: function () {
        return {
          speed: {
            up: 0,
            down: 0
          },
          client: null,
          scriptResult: "",
          intervalID: null,
          trayIconImg: null,
          canvas: null,
          renderedData: null
        };
      },
      watch: {
        clashStatus: function (e) {
          e === b.Z.CONNECTED && (this.setupRequest(), this.updateInterval());
        },
        isWindowShow: function (e) {
          this.setupRequest();
        },
        isAppSuspend: function (e) {
          e || this.setupRequest();
        },
        "settings.trayText": function () {
          this.updateInterval();
        },
        "settings.trayScriptPath": function () {
          this.updateInterval();
        },
        "settings.trayScriptInterval": function () {
          this.updateInterval();
        },
        "settings.trayScriptManualRunTime": function () {
          this.updateInterval();
        },
        "settings.trayOrders": {
          deep: !0,
          handler: function (e, t) {
            I.isEqual(e, t) || this.updateInterval();
          }
        }
      },
      computed: k(k(k({}, (0, g.mapState)(r()({
        confData: function (e) {
          return e.app.confData;
        },
        clashStatus: function (e) {
          return e.app.clashStatus;
        },
        status: function (e) {
          return e.app.status;
        },
        shouldUseDarkTheme: function (e) {
          return e.app.shouldUseDarkTheme;
        },
        isWindowShow: function (e) {
          return e.app.isWindowShow;
        },
        isAppSuspend: function (e) {
          return e.app.isAppSuspend;
        },
        isSystemProxyOn: function (e) {
          return e.app.isSystemProxyOn;
        },
        mode: function (e) {
          return e.app.mode;
        }
      }, "clashStatus", function (e) {
        return e.app.clashStatus;
      }))), (0, g.mapGetters)(["resourcesPath", "clashWSClient"])), {}, {
        trayDisabled: function () {
          var e = this.settings.trayOrders || [[], []];
          return (0 === e[0].length || (1 === e[0].length && "icon" === e[0][0]));
        },
        finalText: function () {
          var e = this.settings.trayText;
          return (void 0 === e ? "" : e) || this.scriptResult;
        },
        colors: function () {
          return {
            light: ["#fff", "#000"],
            dark: ["#2c2a38", "rgb(255, 255, 255)"],
            red: ["#303030", "#ffffff"],
            2077: ["#136377", "#fcec0c"]
          }[this.theme];
        }
      }),
      methods: {
        iconImage: function (e) {
          var t = new Image(69, 69);
          return ((t.src = e), t);
        },
        withUnit: function (e) {
          for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n = ["B/s", "KB/s", "MB/s", "GB/s", "TB/s"], o = 0; ~~(e / 1024) && o < n.length;) ((e /= 1024), o++);
          return (i && e > 999 && (o++, (e /= 1024)), {
            speed: 0 === o ? e : e.toFixed(t),
            unit: n[o]
          });
        },
        stopRequest: function () {
          (this.client && this.client.readyState !== WebSocket.CLOSED && this.client.readyState !== WebSocket.CONNECTING && (this.client.terminate(), (this.client = null)), this.trayIconImg && (this.trayIconImg = null));
        },
        setupRequest: function () {
          var e = this;
          if ((this.stopRequest(), this.isWindowShow || !this.trayDisabled)) {
            var t,
              i = this.clashWSClient("traffic");
            if ((this.trayIconImg || (this.trayIconImg = this.iconImage(N.join(this.resourcesPath, "static/imgs/logo_64_eyes.png"))), i)) {
              var n = this.canvas.getContext("2d"),
                o = function (t, i, n) {
                  var o,
                    s = {
                      trayColorTransparent: i,
                      trayColorForeground: n
                    },
                    r = C(t[0]);
                  try {
                    for (r.s(); !(o = r.n()).done;) {
                      var a = o.value;
                      "icon" === a ? (s.icon = e.trayIconImg) : "traffic" === a ? (s.speed = e.speed) : "status" === a ? ((s.mode = e.mode[0].toUpperCase()), (s.isSystemProxyOn = e.isSystemProxyOn)) : "text" === a && (s.text = e.finalText);
                    }
                  } catch (e) {
                    r.e(e);
                  } finally {
                    r.f();
                  }
                  return s;
                };
              (i.on("message", ((t = d()(u().mark(function t(i) {
                var s, r, a, l, c, d, h, g, p, f, m, v, _, b, w, x, S, k, L, N;
                return u().wrap(function (t) {
                  for (;;) switch ((t.prev = t.next)) {
                    case 0:
                      if (((e.speed = JSON.parse(i)), (s = e.settings), (r = s.trayOrders), (a = void 0 === r ? [[], []] : r), (l = s.trayColorTransparent), (c = s.trayColorForeground), (d = void 0 === c ? "#fff" : c), (h = e.trayDisabled), (g = o(a, l, d)), !I.isEqual(e.renderedData, g))) {
                        t.next = 6;
                        break;
                      }
                      return t.abrupt("return");
                    case 6:
                      if (h) y.ipcRenderer.send("speed-update", "", 60, "");else {
                        ((p = 0), (f = e.withUnit(e.speed.up, 0, !0)), (m = e.withUnit(e.speed.down, 0, !0)), (v = l ? d : e.colors[1]), (_ = v), (b = function (t) {
                          (n.drawImage(e.trayIconImg, t, 0, 69, 69), (p += 69));
                        }), (w = function (t) {
                          ((n.textAlign = "right"), (n.fillStyle = _), (n.font = "26px sans-serif"), (n.lineWidth = 2), (n.strokeStyle = _), n.fillText("".concat(f.speed, " ").concat(f.unit), t + 145, 30), n.fillText("".concat(m.speed, " ").concat(m.unit), t + 145, 58), (n.textAlign = "left"), n.beginPath(), n.moveTo(t + 5, 31), n.lineTo(t + 12, 22), n.lineTo(t + 19, 31), e.speed.up > e.speed.down && n.fill(), n.stroke(), n.beginPath(), n.moveTo(t + 19, 38), n.lineTo(t + 12, 47), n.lineTo(t + 5, 38), e.speed.up < e.speed.down && n.fill(), n.stroke(), (p += 150));
                        }), (x = function (t) {
                          ((n.font = "26px sans-serif"), (n.fillStyle = _), n.fillText(e.mode[0].toUpperCase(), t + 5, 58), e.isSystemProxyOn && n.fillText("S", t + 5, 30), (p += 30));
                        }), (S = function (t) {
                          n.fillStyle = _;
                          var i = t + 10,
                            o = e.finalText,
                            s = 0;
                          if (Array.isArray(o) && o.length >= 2) {
                            n.font = "26px sans-serif";
                            var r = n.measureText(o[0]).width,
                              a = n.measureText(o[1]).width;
                            ((s = r > a ? r : a), n.fillText(o[0], i, 30), n.fillText(o[1], i, 58));
                          } else ((n.font = "40px sans-serif"), (s = n.measureText(o).width), n.fillText(o, i, 50));
                          p += parseInt(s) + 20;
                        }), (k = C(a[0])));
                        try {
                          for (k.s(); !(L = k.n()).done;) "icon" === (N = L.value) ? b(p) : "traffic" === N ? w(p) : "status" === N ? x(p) : "text" === N && S(p);
                        } catch (e) {
                          k.e(e);
                        } finally {
                          k.f();
                        }
                        (0 === a[0].length && b(p), y.ipcRenderer.send("speed-update", e.canvas.toDataURL(), h ? 60 : p, l ? "" : e.colors[0]), (e.renderedData = o(a, l, d)), n.clearRect(0, 0, e.canvas.width, e.canvas.height));
                      }
                    case 7:
                    case "end":
                      return t.stop();
                  }
                }, t);
              }))), function (e) {
                return t.apply(this, arguments);
              })), (this.client = i));
            } else setTimeout(function () {
              e.setupRequest();
            }, 2e3);
          }
        },
        updateInterval: function () {
          var e = this;
          this.intervalID && (clearInterval(this.intervalID), (this.intervalID = null), (this.scriptResult = ""));
          var t,
            i = this.settings,
            n = i.trayText,
            o = void 0 === n ? "" : n,
            s = i.trayScriptInterval,
            r = i.trayScriptPath,
            a = i.trayOrders;
          if ("" === o && r && a[0].includes("text")) {
            var l = ((t = d()(u().mark(function t() {
              var i, n;
              return u().wrap(function (t) {
                for (;;) switch ((t.prev = t.next)) {
                  case 0:
                    return ((i = D.readFileSync(r, "utf8")), (n = L("'use strict';\n".concat(i), r)), (t.next = 4), n.run());
                  case 4:
                    e.scriptResult = t.sent;
                  case 5:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))), function () {
              return t.apply(this, arguments);
            });
            (l(), s > 0 && (this.intervalID = setInterval(l, 1e3 * s)));
          }
          return null;
        }
      },
      mounted: function () {
        ((this.canvas = document.createElement("canvas")), (this.canvas.width = 1e4), this.setupRequest(), this.updateInterval());
      }
    },
    T = E;
  (i(38619), i(38926));
  var M = i(51900);
  const A = (0, M.Z)(T, function () {
    var e = this,
      t = e._self._c;
    return t("div", {
      staticClass: "main-clash-traffic-view"
    }, [t("div", {
      staticClass: "grid"
    }, [t("div", [t("span", {
      staticClass: "bold-icon"
    }, [e._v("↑")]), e._v("\n      " + e._s(e.withUnit(e.speed.up).speed) + "\n      "), t("span", {
      staticClass: "bold-icon"
    }, [e._v(e._s(e.withUnit(e.speed.up).unit))])])]), e._v(" "), t("div", {
      staticClass: "grid"
    }, [t("div", [t("span", {
      staticClass: "bold-icon"
    }, [e._v("↓")]), e._v("\n      " + e._s(e.withUnit(e.speed.down).speed) + "\n      "), t("span", {
      staticClass: "bold-icon"
    }, [e._v("\n        " + e._s(e.withUnit(e.speed.down).unit) + "\n      ")])])])]);
  }, [], !1, null, "4f5120b9", null).exports;
  var O = i(10605),
    P = i.n(O),
    R = i(71289);
  function F(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  const B = {
    props: ["startTime"],
    data: function () {
      return {
        runningTime: "00 : 00 : 00",
        intervalId: null
      };
    },
    watch: {},
    computed: (function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2 ? F(Object(i), !0).forEach(function (t) {
          r()(e, t, i[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : F(Object(i)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
      }
      return e;
    })({}, (0, g.mapState)({})),
    methods: {
      calcRunTime: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "hh : mm : ss",
          t = e.includes("hh"),
          i = e.includes("mm"),
          n = new Date().getTime(),
          o = Math.floor((n - this.startTime) / 1e3),
          s = t || i ? o % 60 : o,
          r = t ? Math.floor(o / 60) % 60 : Math.floor(o / 60),
          a = Math.floor(o / 3600),
          l = function (e) {
            return e < 10 ? "0".concat(e) : "".concat(e);
          };
        return e.replace("hh", l(a)).replace("mm", l(r)).replace("ss", l(s));
      },
      refreshTimeTicking: function () {
        var e = this;
        this.intervalId = R.ZP.add(function () {
          var t = e.settings.runTimeFormat,
            i = void 0 === t ? "hh : mm : ss" : t;
          e.runningTime = e.calcRunTime(i);
        }, 1e3);
      }
    },
    mounted: function () {
      this.refreshTimeTicking(!0);
    }
  };
  i(74360);
  const V = (0, M.Z)(B, function () {
    var e = this,
      t = e._self._c;
    return t("div", {
      attrs: {
        id: "main-run-time-view"
      }
    }, [t("div", {
      staticClass: "timer-text"
    }, [e._v(e._s(e.runningTime))])]);
  }, [], !1, null, "05e7144a", null).exports;
  var W = i(81518),
    H = i(13338);
  function z(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  function j(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? z(Object(i), !0).forEach(function (t) {
        r()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : z(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  const U = {
      props: ["startTime", "profileUpdateFailedURLs", "keyboardClickTimes"],
      data: function () {
        return {
          isAllowSort: !1,
          isShowKeyboardShortcuts: !1,
          keyboardShortcutsIntervalID: null
        };
      },
      components: {
        ClashTrafficView: A,
        RunTimeView: V,
        draggable: v(),
        Hint: H.Z
      },
      watch: {
        keyboardClickTimes: function () {
          var e = this;
          ((this.isShowKeyboardShortcuts = !0), this.keyboardShortcutsIntervalID && clearInterval(this.keyboardShortcutsIntervalID), (this.keyboardShortcutsIntervalID = setInterval(function () {
            ((e.isShowKeyboardShortcuts = !1), clearInterval(e.keyboardShortcutsIntervalID));
          }, 5e3)));
        }
      },
      computed: j(j({}, (0, g.mapGetters)(["menuItemsWithOrder", "clashGotClient"])), {}, {
        selectedIdx: function () {
          var e = this;
          return this.tabs.findIndex(function (t) {
            return t.path === e.$route.path;
          });
        },
        tabs: {
          get: function () {
            return this.menuItemsWithOrder;
          },
          set: function (e) {
            (_.Z.put(W.Z.MENU_ITEM_ORDER, e.map(function (e) {
              return e.title;
            })), this.setMenuItems({
              items: e
            }));
          }
        }
      }),
      methods: j(j({}, (0, g.mapMutations)({
        setMenuItems: "SET_MENU_ITEMS"
      })), {}, {
        handleRightClick: function (e) {
          var t = this;
          const Lg = new Language(modifyState.language);
          return d()(u().mark(function i() {
            return u().wrap(function (i) {
              for (;;) switch ((i.prev = i.next)) {
                case 0:
                  t.$menu([{
                    text: Lg.reorder(),
                    icon: "reorder",
                    click: function () {
                      t.isAllowSort = !0;
                    }
                  }], e);
                case 1:
                case "end":
                  return i.stop();
              }
            }, i);
          }))();
        },
        itemStyle: function (e) {
          var t = [];
          return (this.isAllowSort && t.push("shaking".concat((e % 3) + 1)), this.selectedIdx === e && t.push("selected"), this.selectedIdx !== e && (t.push("selected-none"), t.push("item-none")), this.selectedIdx === e + 1 && t.push("selected-top"), this.selectedIdx === e - 1 && t.push("selected-bottom"), t);
        },
        itemClick: function (e) {
          var t = e.path;
          this.$router.replace({
            path: t
          }).catch(function () {});
        }
      }),
      mounted: function () {}
    },
    $ = U;
  i(44977);
  const K = (0, M.Z)($, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return t("div", {
      class: ["main-main-menu", "item-none", e.isAllowSort ? "item-draggable" : ""],
      on: {
        contextmenu: function (t) {
          return e.handleRightClick.apply(null, arguments);
        }
      }
    }, [t("clash-traffic-view", {
      staticClass: "traffic"
    }), e._v(" "), t("draggable", {
      ref: "list",
      staticClass: "menu",
      attrs: {
        animation: 200,
        "delay-on-touch-only": !0,
        disabled: !e.isAllowSort,
        "drag-class": "drag-item",
        "ghost-class": "ghost-item"
      },
      model: {
        value: e.tabs,
        callback: function (t) {
          e.tabs = t;
        },
        expression: "tabs"
      }
    }, e._l(e.tabs, function (i, n) {
      return t("li", {
        key: n,
        staticClass: "item",
        class: e.itemStyle(n),
        on: {
          click: function (t) {
            return e.itemClick(i);
          }
        }
      }, [t("div", {
        staticClass: "clickable flex items-center justify-center gap-1"
      }, [t("span", {
        staticClass: "text-xs absolute left-3 transition-all",
        style: {
          left: e.isShowKeyboardShortcuts ? "12px" : "-20px"
        }
      }, [e._v(e._s(n + 1))]), e._v(" "), t("span", [e._v(e._s(i.title))]), e._v(" "), e.profileUpdateFailedURLs.length > 0 && Lg.profiles() === i.title ? t("hint", {
        attrs: {
          hint: "At least one profile failed to update while dashboard is closed.",
          position: "right"
        }
      }, [t("span", {
        staticClass: "icon text-sm text-[color:var(--proxy-item-latency-offline-c)]"
      }, [e._v("error")])]) : e._e()], 1)]);
    }), 0), e._v(" "), t("run-time-view", {
      staticClass: "running-time",
      attrs: {
        "start-time": e.startTime
      }
    }), e._v(" "), e.isAllowSort ? t("div", {
      staticClass: "stop-btn",
      on: {
        click: function (t) {
          e.isAllowSort = !1;
        }
      }
    }, [e._v("\n    " + Lg.stopSorting() + "\n  ")]) : e._e()], 1);
  }, [], !1, null, "149ea1bd", null).exports;
  function q(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? q(Object(i), !0).forEach(function (t) {
        r()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : q(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  const G = {
      props: [],
      data: function () {
        return {
          isWinMax: !1,
          isPinned: !1,
          isFullScreen: !1
        };
      },
      computed: Z(Z({}, (0, g.mapState)({
        mode: function (e) {
          return e.app.mode;
        },
        updateDownloadProgress: function (e) {
          return e.app.updateDownloadProgress;
        },
        isSystemProxyOn: function (e) {
          return e.app.isSystemProxyOn;
        },
        isMixinEnable: function (e) {
          return e.app.isMixinEnable;
        },
        isTunEnable: function (e) {
          return e.app.isTunEnable;
        }
      })), {}, {
        percent: function () {
          return this.updateDownloadProgress ? 100 * this.updateDownloadProgress : 0;
        },
        capMode: function () {
          return f().capitalize(this.mode);
        },
        titleText: function () {
          var e;
          return null != this && null !== (e = this.settings) && void 0 !== e && e.titleBarText ? this.settings.titleBarText.replace("%mode%", this.mode).replace("%Mode%", this.capMode).replace("%tun%", this.isTunEnable ? "On" : "Off").replace("%systemProxy%", this.isSystemProxyOn ? "On" : "Off").replace("%mixin%", this.isMixinEnable ? "On" : "Off").replace(/%tun\?(.+?)\:(.+?)%/, "".concat(this.isTunEnable ? "$1" : "$2")).replace(/%systemProxy\?(.+?)\:(.+?)%/, "".concat(this.isSystemProxyOn ? "$1" : "$2")).replace(/%mixin\?(.+?)\:(.+?)%/, "".concat(this.isMixinEnable ? "$1" : "$2")) : "";
        }
      }),
      methods: {
        closeApp: function () {
          y.ipcRenderer.invoke("app", "quit");
        },
        miniApp: function () {
          y.ipcRenderer.invoke("window", "minimize");
        },
        maxApp: function () {
          if (this.isFullScreen) y.ipcRenderer.invoke("window", "setFullScreen", !1);else {
            var e = this.isWinMax ? "unmaximize" : "maximize";
            y.ipcRenderer.invoke("window", e);
          }
        },
        pinApp: function () {
          ((this.isPinned = !this.isPinned), y.ipcRenderer.invoke("window", "setAlwaysOnTop", this.isPinned), _.Z.put(W.Z.IS_PIN_ENABLED, this.isPinned));
        }
      },
      mounted: function () {
        var e = this;
        return d()(u().mark(function t() {
          var i;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((i = (function () {
                  var t = d()(u().mark(function t() {
                    return u().wrap(function (t) {
                      for (;;) switch ((t.prev = t.next)) {
                        case 0:
                          return ((t.next = 2), y.ipcRenderer.invoke("window", "isMaximized"));
                        case 2:
                          e.isWinMax = t.sent;
                        case 3:
                        case "end":
                          return t.stop();
                      }
                    }, t);
                  }));
                  return function () {
                    return t.apply(this, arguments);
                  };
                })()), y.ipcRenderer.on("window-event", (function () {
                  var t = d()(u().mark(function t(n, o) {
                    return u().wrap(function (t) {
                      for (;;) switch ((t.prev = t.next)) {
                        case 0:
                          if (("maximize" === o ? (e.isWinMax = true) : "unmaximize" === o ? (e.isWinMax = false) : "enter-full-screen" === o ? (e.isFullScreen = true) : "leave-full-screen" === o && (e.isFullScreen = false), "show" !== o)) {
                            /** @type {number} */
                            t.next = 4;
                            break;
                          }
                          return ((t.next = 4), i());
                        case 4:
                        case "end":
                          return t.stop();
                      }
                    }, t);
                  }));
                  return function (e, i) {
                    return t.apply(this, arguments);
                  };
                })()), (e.isPinned = _.Z.get(W.Z.IS_PIN_ENABLED) || !1), y.ipcRenderer.invoke("window", "setAlwaysOnTop", e.isPinned), (t.next = 6), i());
              case 6:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      }
    },
    Y = G;
  i(56520);
  const Q = (0, M.Z)(Y, function () {
    var e = this,
      t = e._self._c;
    return t("div", {
      staticClass: "main relative",
      style: {
        color: ["dark"].includes(e.theme) ? "white" : "black"
      }
    }, [t("div", {
      staticClass: "empty"
    }, [t("div", {
      staticClass: "top"
    }, [t("div", {
      staticClass: "left",
      style: {
        width: e.percent + "%"
      }
    }), e._v(" "), t("div", {
      staticClass: "right"
    })]), e._v(" "), t("div", {
      staticClass: "bottom"
    })]), e._v(" "), t("span", {
      staticClass: "fixed left-1/2 -translate-x-1/2 text-xs whitespace-pre"
    }, [e._v("\n    " + e._s(e.titleText) + "\n  ")]), e._v(" "), (!e.isWindows && !e.isLinux) || e.isFullScreen ? e._e() : t("div", {
      staticClass: "clickable close hover:bg-[color:var(--status-close-hover)]",
      style: {
        color: e.isPinned ? "#0C7D9D" : ""
      },
      on: {
        click: e.pinApp
      }
    }, [t("span", {
      staticClass: "icon text-sm"
    }, [e._v("push_pin")])]), e._v(" "), (!e.isWindows && !e.isLinux) || e.isFullScreen ? e._e() : t("div", {
      staticClass: "clickable close hover:bg-[color:var(--status-close-hover)]",
      on: {
        click: e.miniApp
      }
    }, [t("span", {
      staticClass: "icon text-sm -translate-y-1"
    }, [e._v("minimize")])]), e._v(" "), e.isWindows || e.isLinux ? t("div", {
      staticClass: "clickable close hover:bg-[color:var(--status-close-hover)]",
      on: {
        click: e.maxApp
      }
    }, [e.isWinMax || e.isFullScreen ? t("span", {
      staticClass: "icon text-sm"
    }, [e._v("close_fullscreen")]) : t("span", {
      staticClass: "icon text-sm"
    }, [e._v("check_box_outline_blank")])]) : e._e(), e._v(" "), (!e.isWindows && !e.isLinux) || e.isFullScreen ? e._e() : t("div", {
      staticClass: "clickable close hover:bg-[#ff5050d7]",
      on: {
        click: e.closeApp
      }
    }, [t("span", {
      staticClass: "icon text-sm"
    }, [e._v("close")])])]);
  }, [], !1, null, "65878d23", null).exports;
  var X = i(32081),
    J = i.n(X),
    ee = i(86173),
    te = (i(22037), i(57147)),
    ie = i.n(te),
    ne = i(71017),
    oe = i.n(ne),
    se = i(54387),
    re = i.n(se),
    ae = (i(71893), i(11442)),
    le = i.n(ae);
  const ce = require("marked");
  require("util");
  var de = i(72378),
    he = i(8369),
    ue = i(97520),
    ge = i(59273),
    pe = i(10870),
    fe = i(15208),
    me = i.n(i(97495));
  //                     console.log('Full me object:', {
  //   value: me,
  //   type: typeof me,
  //   keys: Object.keys(me || {}),
  //   descriptors: Object.getOwnPropertyDescriptors(me || {})
  // });

  function ve() {
    return _e.apply(this, arguments);
  }
  function _e() {
    return ((_e = d()(u().mark(function e() {
      var t, i, n;
      return u().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            if (((t = ge.Z.state.app.settings.innerServerPort), !(0, he.wi)(t))) {
              e.next = 5;
              break;
            }
            ((i = t), (e.next = 8));
            break;
          case 5:
            return ((e.next = 7), me.a());
          case 7:
            i = e.sent;
          case 8:
            ((n = new fe()).use((function () {
              var e = d()(u().mark(function e(t) {
                var i, n, o;
                return u().wrap(function (e) {
                  for (;;) switch ((e.prev = e.next)) {
                    case 0:
                      ((i = ge.Z.state.app.settings.pacContentText), (n = void 0 === i ? pe.Z : i), /\/pac$/.test(t.path) ? (o = ge.Z.getters.mixedPort) && (t.set("content-type", "application/x-ns-proxy-autoconfig"), (t.body = n.replace(/%mixed-port%/g, o))) : (t.res.statusCode = 404));
                    case 2:
                    case "end":
                      return e.stop();
                  }
                }, e);
              }));
              return function (t) {
                return e.apply(this, arguments);
              };
            })()), n.listen(i, "127.0.0.1"), ge.Z.commit("SET_INNER_SERVER_PORT", {
              port: i
            }));
          case 12:
          case "end":
            return e.stop();
        }
      }, e);
    }))), _e.apply(this, arguments));
  }
  var be,
    we,
    ye = i(419),
    Ce = i(41808),
    xe = i.n(Ce),
    Se = i(19102),
    ke = ((be = d()(u().mark(function e(t) {
      var i, n, o;
      return u().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            return ((i = ["-dns", t.length > 0 ? t.join(",") : "reset"]), (e.next = 3), (0, Se.p)(i));
          case 3:
            return ((n = e.sent), (o = n.success), e.abrupt("return", o));
          case 6:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function (e) {
      return be.apply(this, arguments);
    }),
    Le = ((we = d()(u().mark(function e() {
      var t, i, n, o;
      return u().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            return ((t = ["-dns", "query"]), (e.next = 3), (0, Se.p)(t));
          case 3:
            if (((i = e.sent), (n = i.success), (o = i.output), !n)) {
              e.next = 9;
              break;
            }
            if (!/.+?=(.+?);/.test(o)) {
              e.next = 9;
              break;
            }
            return e.abrupt("return", RegExp.$1.split(",").filter(function (e) {
              return xe().isIP(e);
            }));
          case 9:
            return e.abrupt("return", []);
          case 10:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function () {
      return we.apply(this, arguments);
    }),
    Ne = i(84695),
    De = i(251),
    Ie = (i(51792), i(27458)),
    Ee = i(58511);
  function Te(e, t) {
    var i = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (!i) {
      if (Array.isArray(e) || (i = (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return Me(e, t);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === i && e.constructor && (i = e.constructor.name);
        if ("Map" === i || "Set" === i) return Array.from(e);
        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return Me(e, t);
      })(e)) || (t && e && "number" == typeof e.length)) {
        i && (e = i);
        var n = 0,
          o = function () {};
        return {
          s: o,
          n: function () {
            return n >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[n++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: o
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var s,
      r = !0,
      a = !1;
    return {
      s: function () {
        i = i.call(e);
      },
      n: function () {
        var e = i.next();
        return ((r = e.done), e);
      },
      e: function (e) {
        ((a = !0), (s = e));
      },
      f: function () {
        try {
          r || null == i.return || i.return();
        } finally {
          if (a) throw s;
        }
      }
    };
  }
  function Me(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
    return n;
  }
  function Ae(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  function Oe(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ae(Object(i), !0).forEach(function (t) {
        r()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Ae(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  var Pe = i(24793),
    Re = (i(56796), i(75110)),
    Fe = i(36267),
    Be = i.n(i(97495)),
    Ve = i(48567),
    We = i(63878)("./service_".concat(process.platform)),
    He = We.statusService,
    ze = We.status;
  ((ee.transports.console.format = function (e) {
    return e.data;
  }), (ee.transports.file.format = function (e) {
    return 'time="'.concat(e.date, '" level=').concat(e.level, ' msg="').concat(e.data, '"');
  }), ce.marked.use({
    renderer: {
      text: function (e) {
        return /#(\d+)/.test(e) ? e.replace(/#(\d+)/g, '<a href="https://github.com/Fndroid/clash_for_windows_pkg/issues/'.concat(RegExp.$1, '">#').concat(RegExp.$1, "</a>")) : e;
      }
    }
  }));
  const je = {
    name: "landing-page",
    components: {
      MainMenu: K,
      StatusBar: Q
    },
    data: function () {
      return {
        clash: null,
        userPath: "",
        clashRestfulPort: null,
        clashRestfulSecret: "",
        newVersionInfo: {},
        shwoError: !1,
        showStartup: !1,
        portableMode: !1,
        startTime: null,
        tun2socks: null,
        pkgDownloadProgress: 0,
        networkInterfaces: [],
        configFileWatcher: null,
        profileUpdateFailed: {},
        profileUpdateFailedURLs: [],
        shortcuts: {},
        menuKeyboardClickTimes: 0,
        isUserDNSChanged: !1,
        clashMixedPort: -1
      };
    },
    watch: {
      $route: function (e) {
        var t = e.path;
        (void 0 !== t && this.setCurrentRoutePath({
          path: t
        }), "/home/server" === t && (this.profileUpdateFailedURLs = []));
      },
      isWindowShow: {
        immediate: !0,
        handler: function (e) {
          e ? R.ZP.resumeAll() : R.ZP.pauseAll();
        }
      },
      clashMixedPort: function (e) {
        const Lg = new Language(modifyState.language);
        return d()(u().mark(function t() {
          var i;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                if (0 !== e) {
                  t.next = 5;
                  break;
                }
                return ((t.next = 3), y.ipcRenderer.invoke("window", "isVisible"));
              case 3:
                ((i = t.sent), (0, he.vC)({
                  type: "error",
                  message: "It seems that Port is not listening, you might need to set a new port.",
                  buttons: [i ? Lg.ok() : "Open dashboard", Lg.cancel()]
                }).then(function (e) {
                  var t = e.response;
                  i || 0 !== t || y.ipcRenderer.invoke("window-control", "show");
                }));
              case 5:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      mixedPort: function () {
        (ee.info("mixed-port changed"), this.resetSystemProxySettings());
      },
      controllerPort: function () {
        ee.info("external controller port changed");
      },
      finalInterfaceName: function (e) {
        (ee.info("new outbound interface: ".concat(e)), this.refreshProfile());
      },
      clashStatus: (($e = d()(u().mark(function e(t) {
        const Lg = new Language(modifyState.language);
        return u().wrap(function (e) {
          for (;;) switch ((e.prev = e.next)) {
            case 0:
              if ((ee.info("clash status change to [".concat(t === b.Z.CONNECTED ? Lg.connected() : "断开连接", "]")), y.ipcRenderer.send("clash-core-status-change", t === b.Z.CONNECTED ? 0 : 1), t !== b.Z.CONNECTED)) {
                e.next = 7;
                break;
              }
              return (this.setIsLaunching({
                isLaunching: !1
              }), (e.next = 6), this.refreshProfile().catch(function (e) {}));
            case 6:
              this.addProfileRefreshTimes({
                times: 1
              });
            case 7:
            case "end":
              return e.stop();
          }
        }, e, this);
      }))), function (e) {
        return $e.apply(this, arguments);
      }),
      clashAxiosClient: function (e) {
        var t = this;
        (ee.info("clash axios client changed"), y.ipcRenderer.send("clash-core-info", {
          port: this.controllerPort,
          secret: this.secret
        }), e && (e.interceptors.request.use(function (e) {
          return (t.addClashAxiosFlyingRequestCount({
            count: 1
          }), e);
        }, function (e) {
          return Promise.reject(e);
        }), e.interceptors.response.use(function (e) {
          return (t.addClashAxiosFlyingRequestCount({
            count: -1
          }), e);
        }, function (e) {
          return (t.addClashAxiosFlyingRequestCount({
            count: -1
          }), Promise.reject(e));
        })));
      },
      status: {
        immediate: !0,
        handler: function (e) {
          (this.updateTrayIcon(), y.ipcRenderer.send("system-proxy-changed", e === b.r.SYSTEM_PROXY));
        }
      },
      "settings.hideTrayIcon": {
        immediate: !0,
        handler: function (e) {
          var t = this;
          return d()(u().mark(function i() {
            return u().wrap(function (i) {
              for (;;) switch ((i.prev = i.next)) {
                case 0:
                  return ((i.next = 2), y.ipcRenderer.invoke("tray-create-destroy", e ? "destroy" : "create"));
                case 2:
                  t.updateTrayIcon();
                case 3:
                case "end":
                  return i.stop();
              }
            }, i);
          }))();
        }
      },
      "settings.trayProxiesStyle": {
        immediate: !0,
        handler: function (e) {
          return d()(u().mark(function t() {
            return u().wrap(function (t) {
              for (;;) switch ((t.prev = t.next)) {
                case 0:
                  return ((t.next = 2), y.ipcRenderer.invoke("tray-proxies-style", e || 0));
                case 2:
                case "end":
                  return t.stop();
              }
            }, t);
          }))();
        }
      },
      "settings.showTrayProxyDelayIndicator": {
        immediate: !0,
        handler: function (e) {
          return d()(u().mark(function t() {
            return u().wrap(function (t) {
              for (;;) switch ((t.prev = t.next)) {
                case 0:
                  return ((t.next = 2), y.ipcRenderer.invoke("tray-proxies-icon", e || !1));
                case 2:
                case "end":
                  return t.stop();
              }
            }, t);
          }))();
        }
      },
      "settings.useModeIcons": function (e) {
        this.updateTrayIcon();
      },
      "settings.iconDefault": function (e) {
        this.updateTrayIcon();
      },
      "settings.iconSystemProxy": function (e) {
        this.updateTrayIcon();
      },
      fontFamily: {
        immediate: !0,
        handler: function (e) {
          document.body.style.fontFamily = e;
        }
      },
      "settings.shortcutSystemProxy": function (e, t) {
        var i = this;
        this.rebindShortcut(e, t, d()(u().mark(function e() {
          var t;
          return u().wrap(function (e) {
            for (;;) switch ((e.prev = e.next)) {
              case 0:
                return ((t = !i.isSystemProxyOn), (e.next = 3), i.$setSystemProxy(t, i.confData));
              case 3:
                if (!e.sent) {
                  e.next = 5;
                  break;
                }
                i.setIsSystemProxyOn({
                  isOn: t
                });
              case 5:
              case "end":
                return e.stop();
            }
          }, e);
        })));
      },
      "settings.shortcutTun": function (e, t) {
        var i = this;
        this.rebindShortcut(e, t, d()(u().mark(function e() {
          var t;
          return u().wrap(function (e) {
            for (;;) switch ((e.prev = e.next)) {
              case 0:
                ((t = !i.isTunEnable), i.chagneIsTunEnable({
                  isTun: t
                }), i.refreshProfile(), (0, he.c0)("Shortcut", "TUN Mode: ".concat(t ? "On" : "Off")));
              case 4:
              case "end":
                return e.stop();
            }
          }, e);
        })));
      },
      "settings.shortcutMixin": function (e, t) {
        var i = this;
        this.rebindShortcut(e, t, function () {
          var e = !i.isMixinEnable;
          (i.changeIsMixinEnable({
            isMixin: e
          }), i.refreshProfile(), (0, he.c0)("Shortcut", "Mixin: ".concat(e ? "On" : "Off")));
        });
      },
      "settings.shortcutGlobalMode": function (e, t) {
        var i = this;
        this.rebindShortcut(e, t, d()(u().mark(function e() {
          return u().wrap(function (e) {
            for (;;) switch ((e.prev = e.next)) {
              case 0:
                return ((e.next = 2), i.switchMode("global"));
              case 2:
              case "end":
                return e.stop();
            }
          }, e);
        })));
      },
      "settings.shortcutRuleMode": function (e, t) {
        var i = this;
        this.rebindShortcut(e, t, d()(u().mark(function e() {
          return u().wrap(function (e) {
            for (;;) switch ((e.prev = e.next)) {
              case 0:
                return ((e.next = 2), i.switchMode("rule"));
              case 2:
              case "end":
                return e.stop();
            }
          }, e);
        })));
      },
      "settings.shortcutDirectMode": function (e, t) {
        var i = this;
        this.rebindShortcut(e, t, d()(u().mark(function e() {
          return u().wrap(function (e) {
            for (;;) switch ((e.prev = e.next)) {
              case 0:
                return ((e.next = 2), i.switchMode("direct"));
              case 2:
              case "end":
                return e.stop();
            }
          }, e);
        })));
      },
      "settings.shortcutScriptMode": function (e, t) {
        var i = this;
        this.rebindShortcut(e, t, d()(u().mark(function e() {
          return u().wrap(function (e) {
            for (;;) switch ((e.prev = e.next)) {
              case 0:
                return ((e.next = 2), i.switchMode("script"));
              case 2:
              case "end":
                return e.stop();
            }
          }, e);
        })));
      },
      "settings.shortcutRunTrayScript": function (e, t) {
        this.rebindShortcut(e, t, this.runTrayScript);
      },
      "settings.shortcutShowHideDashboard": function (e, t) {
        this.rebindShortcut(e, t, function () {
          y.ipcRenderer.invoke("window-control", "show-or-hide");
        });
      },
      "settings.systemProxyTypeIndex": function () {
        this.resetSystemProxySettings();
      },
      "settings.pacContentText": function () {
        this.resetSystemProxySettings();
      },
      "settings.bypassText": function () {
        this.resetSystemProxySettings();
      },
      "settings.specifyHttpProxyProtocol": function () {
        this.resetSystemProxySettings();
      },
      "settings.staticSystemProxyHost": function () {
        this.resetSystemProxySettings();
      },
      "settings.enableDHCPServer": function (e) {
        const Lg = new Language(modifyState.language);
        e ? this.setMenuItems({
          items: [].concat(l()(this.menuItems), [{
            title: Lg.router(),
            path: "/home/router"
          }])
        }) : this.setMenuItems({
          items: this.menuItems.filter(function (e) {
            return "Router" !== e.title;
          })
        });
      },
      isMixinEnable: function (e) {
        (this.refreshProfile(), this.updateTrayIcon(), y.ipcRenderer.send("mixin-changed", e));
      },
      "settings.mixinText": function () {
        var e = this.settings.mixinType;
        this.isMixinEnable && 0 === e && this.refreshProfile();
      },
      "settings.mixinCode": function () {
        var e = this.settings.mixinType;
        this.isMixinEnable && 1 === e && this.refreshProfile();
      },
      "settings.mixinType": function () {
        this.refreshProfile();
      },
      "settings.unsafeURLsText": {
        immediate: !0,
        handler: function (e) {
          var t = [];
          try {
            var i = le().parse(e);
            t = (null == i ? void 0 : i.urls) || [];
          } catch (e) {}
          y.ipcRenderer.send("set-allow-unsafe-urls", t);
        }
      },
      "settings.clashAuthentication": function () {
        this.refreshProfile();
      },
      isTunEnable: function (e) {
        (this.updateTrayIcon(), this.refreshProfile(), y.ipcRenderer.send("tun-changed", e));
      },
      tunSettings: function (e) {
        this.isTunEnable && this.refreshProfile();
      },
      isAppSuspend: function (e) {
        e || (this.tun2socks && (ee.info("system resume, restart tun2socks"), this.killSpawned(this.tun2socks), (this.tun2socks = null), this.spawnTun2socks()), this.refreshProfile().then(function (e) {}).catch(function (e) {}));
      },
      innerServerPort: function (e) {
        (console.log("inner port:", e), this.resetSystemProxySettings());
      },
      mode: {
        handler: ((Ue = d()(u().mark(function e(t) {
          var i, n, o, s, r, a;
          return u().wrap(function (e) {
            for (;;) switch ((e.prev = e.next)) {
              case 0:
                if ((this.updateTrayIcon(), y.ipcRenderer.send("mode-changed", t), void 0 === (i = this.settings.connMode) || !i)) {
                  e.next = 6;
                  break;
                }
                return ((e.next = 6), this.clashAxiosClient.delete("connections"));
              case 6:
                ((n = this.profiles), (o = n.files), (s = void 0 === o ? [] : o), (r = n.index), (a = void 0 === r ? -1 : r) >= 0 && s.length > a && this.changeProfile({
                  index: a,
                  profile: Oe(Oe({}, s[a]), {}, {
                    mode: t
                  })
                }));
              case 8:
              case "end":
                return e.stop();
            }
          }, e, this);
        }))), function (e) {
          return Ue.apply(this, arguments);
        }),
        immediate: !0
      }
    },
    computed: Oe(Oe(Oe({}, (0, g.mapState)({
      pfs: function (e) {
        return e.app.profiles;
      },
      devMode: function (e) {
        return e.app.isDevMode;
      },
      profiles: function (e) {
        return e.app.profiles;
      },
      clashPath: function (e) {
        return e.app.clashPath;
      },
      clashStatus: function (e) {
        return e.app.clashStatus;
      },
      confData: function (e) {
        return e.app.confData;
      },
      profilesPath: function (e) {
        return e.app.profilesPath;
      },
      isMixinEnable: function (e) {
        return e.app.isMixinEnable;
      },
      isTunEnable: function (e) {
        return e.app.isTunEnable;
      },
      status: function (e) {
        return e.app.status;
      },
      clashAxiosFlyingRequestCount: function (e) {
        return e.app.clashAxiosFlyingRequestCount;
      },
      logFilePath: function (e) {
        return e.app.logFilePath;
      },
      shouldUseDarkTheme: function (e) {
        return e.app.shouldUseDarkTheme;
      },
      detectedInterfaceName: function (e) {
        return e.app.detectedInterfaceName;
      },
      isAppSuspend: function (e) {
        return e.app.isAppSuspend;
      },
      innerServerPort: function (e) {
        return e.app.innerServerPort;
      },
      isLocalMode: function (e) {
        return e.app.isLocalMode;
      },
      isWindowShow: function (e) {
        return e.app.isWindowShow;
      },
      menuItems: function (e) {
        return e.app.menuItems;
      },
      isSystemProxyOn: function (e) {
        return e.app.isSystemProxyOn;
      },
      isSubViewShow: function (e) {
        return e.app.isSubViewShow;
      },
      currentRoutePath: function (e) {
        return e.app.currentRoutePath;
      },
      mode: function (e) {
        return e.app.mode;
      },
      isSilentUpgraded: function (e) {
        return e.app.isSilentUpgraded;
      },
      tunSettings: function (e) {
        return e.app.tunSettings;
      },
      userDNS: function (e) {
        return e.app.userDNS;
      }
    })), (0, g.mapGetters)(["resourcesPath", "filesPath", "mixedPort", "controllerPort", "secret", "clashAxiosClient", "clashGotClient", "fontFamily", "clashBinaryPath", "menuItemsWithOrder"])), {}, {
      finalInterfaceName: function () {
        var e = this.settings.interfaceName;
        return (void 0 === e ? "" : e) || this.detectedInterfaceName;
      },
      statusHint: function () {
        const Lg = new Language(modifyState.language);
        return this.pkgDownloadProgress > 0 && this.pkgDownloadProgress < 1 ? "Download progress: ".concat((100 * this.pkgDownloadProgress).toFixed(2), "%") : this.clashStatus === b.Z.CONNECTED ? Lg.connected() : this.clashStatus === b.Z.DISCONNECTED ? Lg.disconnected() : void 0;
      },
      statusIcon: function () {
        return {
          "clash-status-icon": !0,
          "clash-running": this.clashStatus === b.Z.CONNECTED,
          "clash-stopped": this.clashStatus === b.Z.DISCONNECTED
        };
      }
    }),
    methods: Oe(Oe(Oe({}, (0, g.mapMutations)({
      setIsDevMode: "SET_IS_DEV_MODE",
      setConfData: "SET_CONF_DATA",
      changeProfile: "CHANGE_PROFILE",
      changeProfileIndex: "CHANGE_PROFILES_INDEX",
      setClashPath: "SET_CLASH_PATH",
      setClashStatus: "SET_CLASH_STATUS",
      loadProfiles: "LOAD_PROFILES",
      setProfilesPath: "SET_PROFILES_PATH",
      setLogFilePath: "SET_LOG_FILE_PATH",
      changeIsMixinEnable: "CHANGE_IS_MIXIN_ENABLE",
      chagneIsTunEnable: "CHANGE_IS_TUN_ENABLE",
      setExePath: "SET_EXE_PATH",
      appendError: "APPEND_ERROR",
      addClashAxiosFlyingRequestCount: "ADD_AXIOS_FLYING_REQUEST_COUNT",
      setShouldUseDarkTheme: "SET_SHOULD_USE_DARK_THEME",
      setDetectedInterfaceName: "SET_DETECTED_INTERFACE_NAME",
      setIsWindowShow: "SET_IS_WINDOW_SHOW",
      setIsAppSuspend: "SET_IS_APP_SUSPEND",
      setIsLocalMode: "SET_IS_LOCAL_MODE",
      setIsLaunching: "SET_IS_LAUNCHING",
      setMenuItems: "SET_MENU_ITEMS",
      setIsSystemProxyOn: "SET_IS_SYSTEM_PROXY_ON",
      setCurrentRoutePath: "SET_CURRENT_ROUTE_PATH",
      addProfileRefreshTimes: "ADD_PROFILE_REFRESH_TIMES",
      setCurrentProfilePayload: "SET_CURRENT_PROFILE_PAYLOAD",
      setIsSilentUpgraded: "SET_IS_SILENT_UPGRADED",
      setIsFirewallRuleExist: "SET_IS_FIREWALL_RULE_EXIST",
      setUserDNS: "SET_USER_DNS",
      setMatchedSSID: "SET_MATCHED_SSID"
    })), (0, g.mapActions)(["setMode"])), {}, {
      setSSIDOptions: function () {
        var e = this;
        return d()(u().mark(function t() {
          var i, n, o, s, r, a, l, c, h;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                if (((i = (function () {
                  var t = d()(u().mark(function t() {
                    var i, n, o;
                    return u().wrap(function (t) {
                      for (;;) switch ((t.prev = t.next)) {
                        case 0:
                          return ((i = _.Z.get(W.Z.IS_MIXIN) || !1), (n = _.Z.get(W.Z.IS_TUN) || !1), (o = _.Z.get(W.Z.SYSTEM_PROXY) || !1), e.changeIsMixinEnable({
                            isMixin: i
                          }), e.chagneIsTunEnable({
                            isTun: n
                          }), (t.next = 7), e.$setSystemProxy(o, e.confData));
                        case 7:
                          if (!t.sent) {
                            t.next = 9;
                            break;
                          }
                          e.setIsSystemProxyOn({
                            isOn: o
                          });
                        case 9:
                        case "end":
                          return t.stop();
                      }
                    }, t);
                  }));
                  return function () {
                    return t.apply(this, arguments);
                  };
                })()), (t.prev = 1), e.setMatchedSSID({
                  ssid: ""
                }), (n = (0, Ee.S)() || []), (o = e.settings.ssidStrategyText), (s = le().parse(o).strategy), ee.info(JSON.stringify({
                  conns: n,
                  ssidStrategy: s
                }, null, 2)), !(r = n.find(function (e) {
                  return e.SSID in s;
                })))) {
                  t.next = 24;
                  break;
                }
                if ((e.setMatchedSSID({
                  ssid: r.SSID
                }), !(a = s[r.SSID]))) {
                  t.next = 22;
                  break;
                }
                if (((l = a.system), (c = a.tun), "boolean" == typeof (h = a.mixin) && e.changeIsMixinEnable({
                  isMixin: h
                }), "boolean" == typeof c && e.chagneIsTunEnable({
                  isTun: c
                }), (t.t0 = "boolean" == typeof l), !t.t0)) {
                  t.next = 20;
                  break;
                }
                return ((t.next = 19), e.$setSystemProxy(l, e.confData));
              case 19:
                t.t0 = t.sent;
              case 20:
                if (!t.t0) {
                  t.next = 22;
                  break;
                }
                e.setIsSystemProxyOn({
                  isOn: l
                });
              case 22:
                t.next = 25;
                break;
              case 24:
                i();
              case 25:
                t.next = 30;
                break;
              case 27:
                ((t.prev = 27), (t.t1 = t.catch(1)), ee.error("failed to set ssid options: ".concat(t.t1)));
              case 30:
                return ((t.prev = 30), t.finish(30));
              case 32:
              case "end":
                return t.stop();
            }
          }, t, null, [[1, 27, 30, 32]]);
        }))();
      },
      resetDNS: function () {
        if (this.isUserDNSChanged && (0, w.V5)()) try {
          var e = this.settings,
            t = e.isUsingResetDNSServers,
            i = void 0 !== t && t,
            n = e.resetDNSServers;
          i ? ke(void 0 === n ? [] : n) : null !== this.userDNS && ke(this.userDNS);
        } catch (e) {
          ee.info("failed to reset dns with error: ".concat(e));
        }
      },
      breakConnections: function (e) {
        var t = this;
        return d()(u().mark(function i() {
          var n, o, s, r, a, l, c, d, h, g;
          return u().wrap(function (i) {
            for (;;) switch ((i.prev = i.next)) {
              case 0:
                if (((n = t.settings.connProxy), 1 !== (o = void 0 === n ? 0 : n))) {
                  i.next = 29;
                  break;
                }
                return ((i.next = 4), t.clashAxiosClient.get("connections"));
              case 4:
                if (((s = i.sent), (r = s.status), (a = s.data), 200 !== r)) {
                  i.next = 27;
                  break;
                }
                ((l = a.connections), (c = Te(void 0 === l ? [] : l)), (i.prev = 10), c.s());
              case 12:
                if ((d = c.n()).done) {
                  i.next = 19;
                  break;
                }
                if (((h = d.value), (g = h.id), !h.chains.includes(e))) {
                  i.next = 17;
                  break;
                }
                return ((i.next = 17), t.clashAxiosClient.delete("connections/".concat(g)));
              case 17:
                i.next = 12;
                break;
              case 19:
                i.next = 24;
                break;
              case 21:
                ((i.prev = 21), (i.t0 = i.catch(10)), c.e(i.t0));
              case 24:
                return ((i.prev = 24), c.f(), i.finish(24));
              case 27:
                i.next = 32;
                break;
              case 29:
                if (2 !== o) {
                  i.next = 32;
                  break;
                }
                return ((i.next = 32), t.clashAxiosClient.delete("connections"));
              case 32:
              case "end":
                return i.stop();
            }
          }, i, null, [[10, 21, 24, 27]]);
        }))();
      },
      persistSelectedProxy: function () {
        var e = this;
        return d()(u().mark(function t() {
          var i, n, s, r, a, l;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                if (!(e.pfs.index > -1)) {
                  t.next = 14;
                  break;
                }
                if (!(n = null === (i = e.pfs.files) || void 0 === i ? void 0 : i[e.pfs.index])) {
                  t.next = 14;
                  break;
                }
                return ((t.prev = 3), (t.next = 6), e.clashAxiosClient.get("/proxies"));
              case 6:
                ((s = t.sent), (r = s.data.proxies), (a = void 0 === r ? {} : r), (l = Object.entries(a).reduce(function (e, t) {
                  var i = o()(t, 2),
                    n = (i[0], i[1]);
                  return ("Selector" === n.type && e.push({
                    name: n.name,
                    now: n.now
                  }), e);
                }, [])), e.changeProfile({
                  index: e.pfs.index,
                  profile: Oe(Oe({}, n), {}, {
                    selected: l
                  })
                }), (t.next = 14));
                break;
              case 12:
                ((t.prev = 12), (t.t0 = t.catch(3)));
              case 14:
              case "end":
                return t.stop();
            }
          }, t, null, [[3, 12]]);
        }))();
      },
      runTrayScript: function () {
        this.settings.trayScriptManualRunTime = new Date().getTime();
      },
      resetSystemProxySettings: Pe.debounce(d()(u().mark(function e() {
        return u().wrap(function (e) {
          for (;;) switch ((e.prev = e.next)) {
            case 0:
              if (!this.isSystemProxyOn) {
                e.next = 3;
                break;
              }
              return ((e.next = 3), this.$setSystemProxy(!0, this.confData));
            case 3:
            case "end":
              return e.stop();
          }
        }, e, this);
      })), 500),
      updateTrayIcon: function () {
        (0, w.Kr)() && (console.log("updateTrayIcon", this.$getTrayIcon(this.status === b.r.SYSTEM_PROXY || this.status === b.r.IS_TUN || this.status === b.r.IS_MIXIN, this.mode)), y.ipcRenderer.send("status-changed", this.$getTrayIcon(this.status === b.r.SYSTEM_PROXY || this.status === b.r.IS_TUN || this.status === b.r.IS_MIXIN, this.mode)));
      },
      setFont: function (e) {
        document.body.style.fontFamily = e || '"Microsoft Yahei", "PingFang SC", "system-ui", 微软雅黑, "TwemojiMozilla"';
      },
      refreshProfile: function () {
        var e = this;
        return d()(u().mark(function t() {
          var n, s, r, a, c, h, g, p, f, m, v, _, b, y, C, x, S, k, L, N, D, I, E, T, M, A, O, P, R, F, B, V, W, H, z, j, U, $, K, q, Z, G, Y, Q, X, te, ne, se, re, ae, ce, de, ue, ge, pe, fe, me, ve, _e, be, we, ye, Ce, xe, Se, Le, Ne, De, Ie, Ee, Te, Me, Ae, Pe, Fe, Ve, We, He, ze, je, Ue, $e;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                if (((n = !1), (s = null), "", (a = e.profiles.index), (h = !1), !((c = void 0 === a ? -1 : a) > -1))) {
                  t.next = 91;
                  break;
                }
                if ((ee.info("restore at index: ".concat(c)), (g = e.profiles.files[c]), (r = oe().join(e.profilesPath, g.time)), (t.prev = 9), null !== (p = le().parse(ie().readFileSync(r, "utf8"), {
                  prettyErrors: !0,
                  strict: !1
                })))) {
                  t.next = 13;
                  break;
                }
                throw new Error("this profile could not be parsed!");
              case 13:
                if (((f = e.settings), (m = f.mixinType), (v = void 0 === m ? 0 : m), (_ = f.mixinText), (b = f.mixinCode), (y = p), e.isTunEnable && (y = Oe(Oe({}, y), (0, he.Sr)(e.tunSettings))), !e.isMixinEnable)) {
                  t.next = 29;
                  break;
                }
                ((t.t0 = v), (t.next = 0 === t.t0 ? 20 : 1 === t.t0 ? 22 : 29));
                break;
              case 20:
                if (_) try {
                  ((C = le().parse(_)), (x = C.mixin), (y = Oe(Oe({}, y), x)));
                } catch (e) {}
                return t.abrupt("break", 29);
              case 22:
                if (!b) {
                  t.next = 28;
                  break;
                }
                return ((S = Re(b)), (k = g.url), (L = void 0 === k ? "" : k), (N = g.name), (t.next = 27), S.parse({
                  content: y,
                  url: L,
                  name: N
                }, {
                  axios: i(54387),
                  yaml: i(11442),
                  notify: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                      i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    (0, he.c0)(e, t, {
                      silent: i
                    });
                  }
                }));
              case 27:
                y = t.sent;
              case 28:
                return t.abrupt("break", 29);
              case 29:
                if (((I = (D = y).dns), (E = void 0 === I ? {} : I), (T = D["interface-name"]), (M = D.tun), (A = void 0 === M ? {} : M), (O = E.enable), (P = void 0 !== O && O), (R = E.listen), (F = A.enable), (B = void 0 !== F && F), (V = A["macOS-auto-detect-interface"]), (W = void 0 !== V && V), (H = A["auto-detect-interface"]), (z = void 0 !== H && H), (j = A["dns-hijack"]), (U = void 0 === j ? [] : j), ($ = A.stack), (0, w.IJ)() || !B || z || W)) {
                  t.next = 40;
                  break;
                }
                if (T) {
                  t.next = 40;
                  break;
                }
                if ((e.detectInterfaceName(), "" === e.finalInterfaceName)) {
                  t.next = 39;
                  break;
                }
                ((y = Oe(Oe({}, y), {}, {
                  "interface-name": e.finalInterfaceName
                })), (t.next = 40));
                break;
              case 39:
                return t.abrupt("return", {
                  success: !1,
                  message: Lg.tunModeEnableButIssue()
                });
              case 40:
                if (!(0, w.Kr)()) {
                  t.next = 57;
                  break;
                }
                if (B) {
                  t.next = 57;
                  break;
                }
                K = !0;
                try {
                  K = J().execSync("netsh interface show interface", {
                    windowsHide: !0
                  }).toString().includes("cfw-tap");
                } catch (e) {}
                if (!(K && E && P && R)) {
                  t.next = 57;
                  break;
                }
                if (((q = R.split(":")[0].trim()), (Z = R.split(":")[1].trim()), !["", "0.0.0.0"].includes(q) || "53" !== Z)) {
                  t.next = 57;
                  break;
                }
                if (((h = !0), T || z)) {
                  t.next = 57;
                  break;
                }
                if ((e.detectInterfaceName(), "" === e.finalInterfaceName)) {
                  t.next = 56;
                  break;
                }
                ((y = Oe(Oe({}, y), {}, {
                  "interface-name": e.finalInterfaceName
                })), (t.next = 57));
                break;
              case 56:
                return t.abrupt("return", {
                  success: !1,
                  message: Lg.modeTAPEnableNoINthisYAML()
                });
              case 57:
                for (Y = (G = y)["proxy-providers"], Q = G["rule-providers"], X = Object.keys(null != Y ? Y : {}).length > 0 || Object.keys(null != Q ? Q : {}).length > 0, te = [], ne = 0, se = Object.entries(null != Y ? Y : {}); ne < se.length; ne++) ((re = o()(se[ne], 2)), re[0], (ae = re[1]), (ce = Oe(Oe({}, (null == ae ? void 0 : ae["<<"]) || {}), ae)), (de = ce.type), (ue = ce.url), "http" === de && ((ge = "./providers/proxy/".concat((0, he.Ll)(ue), ".yaml")), te.push({
                  url: ue,
                  path: ae.path,
                  securePath: ge
                }), (ae.path = ge)));
                for (pe = 0, fe = Object.entries(null != Q ? Q : {}); pe < fe.length; pe++) ((me = o()(fe[pe], 2)), me[0], (ve = me[1]), (_e = Oe(Oe({}, (null == ve ? void 0 : ve["<<"]) || {}), ve)), (be = _e.type), (we = _e.url), "http" === be && ((ye = "./providers/rule/".concat((0, he.Ll)(we), ".yaml")), te.push({
                  url: we,
                  path: ve.path,
                  securePath: ye
                }), (ve.path = ye)));
                for (Ce = function () {
                  var e = o()(Se[xe], 2),
                    t = (e[0], e[1]),
                    i = Oe(Oe({}, (null == t ? void 0 : t["<<"]) || {}), t),
                    n = i.type;
                  i.url;
                  if ("file" === n) {
                    var s = te.find(function (e) {
                      return e.path === t.path;
                    });
                    s && (t.path = s.securePath);
                  }
                }, xe = 0, Se = [].concat(l()(Object.entries(null != Y ? Y : {})), l()(Object.entries(null != Q ? Q : {}))); xe < Se.length; xe++) Ce();
                return ((Le = e.confData), (Ne = Le["log-level"]), (De = Le.ipv6), (t.next = 67), e.clashAxiosClient.put("/configs", {
                  payload: le().stringify(Oe(Oe({}, y), {}, {
                    ipv6: De,
                    "log-level": Ne
                  }))
                }, {
                  validateStatus: function () {
                    return !0;
                  },
                  timeout: X ? 0 : 1e4
                }));
              case 67:
                const Lg = new Language(modifyState.language);
                if (((Ie = t.sent), (Ee = Ie.status), (Te = Ie.data), (n = 204 === Ee), (Me = Te.message), (s = Me || "Switching profile failed with status: ".concat(Ee)), n ? (e.setCurrentProfilePayload({
                  payload: y
                }), X ? e.menuItems.find(function (e) {
                  return Lg.providers() === e.title;
                }) || e.setMenuItems({
                  items: [].concat(l()(e.menuItems), [{
                    title: Lg.providers(),
                    path: "/home/provider"
                  }])
                }) : e.setMenuItems({
                  items: e.menuItems.filter(function (e) {
                    return Lg.providers() !== e.title;
                  })
                })) : e.setCurrentProfilePayload({
                  payload: {}
                }), n)) if (B) {
                  if (((Ae = U.reduce(function (e, t) {
                    var i = t.split(":"),
                      n = o()(i, 2),
                      s = n[0],
                      r = n[1];
                    return (("53" !== r && void 0 !== r) || ("any" === s ? (e = [].concat(l()(e), ["8.8.8.8"])) : /\d+\.\d+\.\d+\.\d+/.test(s) && (e = [].concat(l()(e), [s]))), e);
                  }, [])), Ae.length > 0)) try {
                    (ke(Ae), (e.isUserDNSChanged = !0));
                  } catch (t) {
                    e.isUserDNSChanged = !1;
                  }
                  (0, w.Kr)() && "system" === $ && ((Pe = 0), 7777, (Fe = setInterval(d()(u().mark(function e() {
                    return u().wrap(function (e) {
                      for (;;) switch ((e.prev = e.next)) {
                        case 0:
                          return ((e.next = 2), Be({
                            port: 7777
                          }));
                        case 2:
                          (7777 !== e.sent && J().exec("ipconfig /renew", {
                            windowsHide: !0
                          }), 4 === Pe && clearInterval(Fe), (Pe += 1));
                        case 6:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  })), 2e3)));
                } else e.resetDNS();
                t.next = 84;
                break;
              case 77:
                ((t.prev = 77), (t.t1 = t.catch(9)), ee.warn(Lg.failRestoreLastProfileErr().concat(t.t1)), (Ve = ""), (We = t.t1.linePos) && (He = We.start) && ((ze = He.line), (je = He.col), (Ve = ", on line: ".concat(ze, ", at column: ").concat(je))), (s = "Error: ".concat(t.t1.message).concat(Ve)));
              case 84:
                if (((Ue = g.selected), ($e = g.mode), !n || !Ue)) {
                  t.next = 90;
                  break;
                }
                return (ee.info("restore proxy settings"), (t.next = 89), Promise.allSettled(Ue.map(function (t) {
                  var i = t.name,
                    n = t.now;
                  return e.clashAxiosClient.put("/proxies/" + encodeURIComponent(i), {
                    name: n
                  });
                })));
              case 89:
                t.sent.forEach(function (e, t) {
                  var i = e.status,
                    n = e.reason;
                  "rejected" === i && ee.info(Lg.restoreProxyGroup() + " ".concat(Ue[t].name, " to ").concat(Ue[t].now, " failed with reason: ").concat(n));
                });
              case 90:
                n && $e && e.switchMode($e, !1);
              case 91:
                return (h ? e.spawnTun2socks() : (e.killSpawned(e.tun2socks), (e.tun2socks = null)), t.abrupt("return", {
                  success: n,
                  message: s
                }));
              case 93:
              case "end":
                return t.stop();
            }
          }, t, null, [[9, 77]]);
        }))();
      },
      switchMode: function (e) {
        var t = this;
        return d()(u().mark(function i() {
          return u().wrap(function (i) {
            for (;;) switch ((i.prev = i.next)) {
              case 0:
                return ((i.next = 2), t.setMode({
                  mode: e
                }));
              case 2:
              case "end":
                return i.stop();
            }
          }, i);
        }))();
      },
      showLogsFolder: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.clashPath && /\.log$/.test(this.logFilePath) && (e ? y.shell.openPath(oe().join(this.logFilePath, "..")) : y.shell.showItemInFolder(this.logFilePath));
      },
      open: function (e) {
        y.shell.openExternal(e);
      },
      killClashCore: function () {
        var e = this;
        return d()(u().mark(function t() {
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                if ((e.killSpawned(e.clash), (e.clash = null), _.Z.get(W.Z.IS_LIGHTWEIGHT_MODE_CLOSE) || !1)) {
                  t.next = 6;
                  break;
                }
                return ((t.next = 6), re().get("http://127.0.0.1:53000/stop", {
                  timeout: 1e3
                }).catch(function (e) {}));
              case 6:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handlerRestartClash: function () {
        var e = this;
        return d()(u().mark(function t() {
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), e.killClashCore().catch(function (e) {}));
              case 2:
                return (e.setClashStatus({
                  status: b.Z.DISCONNECTED
                }), (e.shwoError = !1), (t.next = 6), e.spawnClash().catch(function (e) {}));
              case 6:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      spawnClash: function () {
        var e = this;
        const Lg = new Language(modifyState.language);
        return d()(u().mark(function t() {
          var i, n, o, s, r, a, l, c, h;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                if ((ee.info("restarting clash core..."), (i = oe().join(e.clashPath, "logs", "".concat(P()().format("YYYY-MM-DD-HHmmss"), ".log"))), ie().readdir(oe().join(e.clashPath, "logs"), function (t, i) {
                  !t && i.length > 0 && i.forEach(function (t) {
                    /^(.*?)\.log$/.test(t) && P()(RegExp.$1, "YYYY-MM-DD-HHmmss").isBefore(P()().subtract(7, "days")) && ie().unlink(oe().join(e.clashPath, "logs", t), function (e) {});
                  });
                }), (n = _.Z.get(W.Z.IS_LIGHTWEIGHT_MODE_CLOSE) || !1), (t.t0 = n), !t.t0)) {
                  t.next = 11;
                  break;
                }
                return ((t.next = 8), e.getClashStatus());
              case 8:
                ((t.t1 = t.sent), (t.t2 = b.Z.CONNECTED), (t.t0 = t.t1 === t.t2));
              case 11:
                if (!t.t0) {
                  t.next = 13;
                  break;
                }
                return t.abrupt("return");
              case 13:
                if (((o = e.clashBinaryPath), oe().dirname(o), oe().basename(o), (s = e.confData["log-level"]), e.isLocalMode)) {
                  t.next = 26;
                  break;
                }
                return ((t.next = 20), re().post("http://127.0.0.1:53000/start", {
                  path: e.devMode ? (0, ne.join)(process.cwd(), o) : o,
                  cwd: e.clashPath,
                  silent: "silent" === s
                }, {
                  validateStatus: function (e) {
                    return !0;
                  }
                }));
              case 20:
                ((r = t.sent), (a = r.data), 200 === r.status ? e.setLogFilePath({
                  path: a
                }) : (ee.info("fail to spawn in service mode, fallback to local mode"), e.setIsLocalMode({
                  isLocal: !0
                }), e.spawnClash()), (t.next = 34));
                break;
              case 26:
                ((l = []), e.portableMode && (l = ["-d", e.clashPath]), (c = J().spawn(o, l, {
                  windowsHide: !0
                })), (e.clash = c), _.Z.put(W.Z.LAST_CLASH_PID, e.clash.pid), c.stdout.on("data", (function () {
                  var t = d()(u().mark(function t(i) {
                    return u().wrap(function (t) {
                      for (;;) switch ((t.prev = t.next)) {
                        case 0:
                          if (!/INF \[API\] listening addr=/.test(i.toString())) {
                            t.next = 8;
                            break;
                          }
                          return (ee.info("clash core startup success!"), (t.t0 = e), (t.next = 5), e.getClashStatus());
                        case 5:
                          ((t.t1 = t.sent), (t.t2 = {
                            status: t.t1
                          }), t.t0.setClashStatus.call(t.t0, t.t2));
                        case 8:
                          /ERR/.test(i.toString()) && ee.error(Lg.clashCoreFailedStartup());
                        case 9:
                        case "end":
                          return t.stop();
                      }
                    }, t);
                  }));
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })()), c.on("exit", function () {}), "silent" !== s && ((h = ie().createWriteStream(i, {
                  flags: "a"
                })), c.stdout.pipe(h), c.stderr.pipe(h), e.setLogFilePath({
                  path: i
                })));
              case 34:
                return t.abrupt("return");
              case 35:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      sudoRunBAT: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return new Promise(function (i, n) {
          !(function () {
            try {
              return (J().execSync("net session", {
                windowsHide: !0
              }), !0);
            } catch (e) {}
            return !1;
          })() ? (0, de.exec)(e, {
            name: "Clash for Windows"
          }, function (e, n, o) {
            (t && t(void 0 === e), i(void 0 === e));
          }) : J().exec(e, {
            windowsHide: !0
          }, function (e, n, o) {
            (t && t(void 0 === e), i(void 0 === e));
          });
        });
      },
      setupTapDevice: function () {
        var e,
          t,
          i = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          n = oe().join(this.filesPath, "win", "common", "tun2socks"),
          o = ((e = {}), r()(e, w.J4, "amd64"), r()(e, w.Ap, "i386"), r()(e, w.Vm, "i386"), e)[(0, w.$Q)()],
          s = null !== (t = _.Z.get(W.Z.TAP_INFO)) && void 0 !== t ? t : {},
          a = s.ip,
          l = void 0 === a ? "10.0.0.1" : a,
          c = s.subnet,
          d = void 0 === c ? "255.255.255.0" : c,
          h = s.gateway,
          u = void 0 === h ? "10.0.0.0" : h,
          g = oe().join(n, "".concat(i ? "add" : "remove", "_tap_device.bat")),
          p = '"'.concat(g, '" ').concat(o, " ").concat(l, " ").concat(d, " ").concat(u);
        return this.sudoRunBAT(p);
      },
      spawnTun2socks: function () {
        var e = this;
        return d()(u().mark(function t() {
          var i, n, o, s, a, l, c, d, h, g, p, f, m, v, b;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                if (!(0, w.V5)() && !(0, w.IJ)()) {
                  t.next = 2;
                  break;
                }
                return t.abrupt("return");
              case 2:
                if ((ee.info("Spawn go-tun2socks"), e.tun2socks && (e.killSpawned(e.tun2socks), (e.tun2socks = null)), (o = e.mixedPort))) {
                  t.next = 7;
                  break;
                }
                return t.abrupt("return");
              case 7:
                ((s = null !== (i = _.Z.get(W.Z.TAP_INFO)) && void 0 !== i ? i : {}), (a = s.ip), (l = void 0 === a ? "10.0.0.1" : a), (c = s.subnet), (d = void 0 === c ? "255.255.255.0" : c), (h = s.gateway), (p = ["-tunName", "cfw-tap", "-tunDns", l, "-tunAddr", l, "-tunMask", d, "-tunGw", (g = void 0 === h ? "10.0.0.0" : h), "-proxyServer", "127.0.0.1:" + o, "-loglevel", "none"]), (f = ((n = {}), r()(n, w.J4, oe().join(e.filesPath, "win", "x64")), r()(n, w.Ap, oe().join(e.filesPath, "win", "ia32")), r()(n, w.Vm, oe().join(e.filesPath, "win", "ia32")), n)[(0, w.$Q)()]), (e.tun2socks = J().spawn("go-tun2socks.exe", p, {
                  cwd: f,
                  windowsHide: !0
                })), (m = 10));
              case 12:
                if (!m--) {
                  t.next = 27;
                  break;
                }
                if (((t.prev = 13), (v = J().execSync("route print ".concat(g, " mask ").concat(d), {
                  windowsHide: !0
                }).toString()), (b = function (e) {
                  return e.replace(/\./g, "\\.");
                }), !new RegExp("".concat(b(g), "\\s+?").concat(b(d), "[\\s\\S]+").concat(b(l))).test(v))) {
                  t.next = 19;
                  break;
                }
                return (J().execSync("route add 0.0.0.0 mask 0.0.0.0 ".concat(g, " metric 1"), {
                  windowsHide: !0
                }), t.abrupt("break", 27));
              case 19:
                t.next = 23;
                break;
              case 21:
                ((t.prev = 21), (t.t0 = t.catch(13)));
              case 23:
                return ((t.next = 25), (0, he.Dc)(1e3));
              case 25:
                t.next = 12;
                break;
              case 27:
              case "end":
                return t.stop();
            }
          }, t, null, [[13, 21]]);
        }))();
      },
      killSpawned: function (e) {
        if (e) {
          var t = e.pid;
          if (t) try {
            J().execSync((0, w.V5)() || (0, w.IJ)() ? "kill -9 ".concat(t) : "taskkill /F /PID ".concat(t), {
              windowsHide: !0
            });
          } catch (e) {}
        }
      },
      setRoutes: function () {
        var e = this;
        return d()(u().mark(function t() {
          var i, n;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((i = oe().join(e.filesPath, "tun2socks")), (n = oe().join(i, "set_routes.bat")), t.abrupt("return", e.sudoRunBAT('"'.concat(n, '"'))));
              case 3:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      getClashStatus: function () {
        var e = this;
        return d()(u().mark(function t() {
          var i, n, o;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.prev = 0), (t.next = 3), e.clashAxiosClient.get("/configs", {
                  validateStatus: function (e) {
                    return !0;
                  },
                  timeout: 1e3
                }));
              case 3:
                return ((i = t.sent), (n = i.status), (o = i.data), (e.clashMixedPort = (null == o ? void 0 : o["mixed-port"]) || -1), t.abrupt("return", 200 === n ? b.Z.CONNECTED : b.Z.DISCONNECTED));
              case 10:
                return ((t.prev = 10), (t.t0 = t.catch(0)), (e.clashMixedPort = -1), t.abrupt("return", b.Z.DISCONNECTED));
              case 14:
              case "end":
                return t.stop();
            }
          }, t, null, [[0, 10]]);
        }))();
      },
      checkForUpdate: function () {
        var e = this;
        return d()(u().mark(function t() {
          var i, n, o, s, a, l, c, d, h, g, p, f, m, v, _, b, C;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                if (!e.isSilentUpgraded) {
                  t.next = 3;
                  break;
                }
                return (ee.info("silent upgrade done, stop checking"), t.abrupt("return"));
              case 3:
                return ((t.next = 5), y.ipcRenderer.invoke("app", "getVersion"));
              case 5:
                return ((i = t.sent), ee.info("check for app update, current: ".concat(i)), (t.next = 9), re().get("https://raw.githubusercontent.com/Z-Siqi/Clash-for-Windows_Chinese/main/update"));
              case 9:
                if (200 === (n = t.sent).status && ((o = n.data.tag_name), (s = function (e) {
                  var t = 1;
                  return e.split(".").reverse().reduce(function (e, i) {
                    var n = 1 * e + i * t;
                    return ((t *= 1e3), n);
                  }, 0);
                })(o) > s(i))) {
                  ("https://github.com/Z-Siqi/Clash-for-Windows_Chinese/releases", (d = Symbol()), (h = Symbol()), (g = Symbol()), (p = Symbol()), (a = {}), r()(a, d, {}), r()(a, h, {}), r()(a, g, {}), r()(a, p, {}), (f = a), (m = Te(n.data.assets)));
                  try {
                    for (m.s();;) {
                      const v = m.n(); // next
                      if (v.done) break; // end

                      const file = v.value; // current object
                      const name = file.name; // file name
                      if (!name) continue; // skip if name is null

                      if (/\d+\.\d+\.\d+(?:-Opt\.\d+)?-win\.7z/.test(name)) {
                        // Windows x64 package
                        f[d][w.J4] = file;
                      } else if (/\d+\.\d+\.\d+(?:-Opt\.\d+)?-ia32-win\.7z/.test(name)) {
                        // Windows ia32 package
                        f[d][w.Ap] = file;
                      } else if (/\d+\.\d+\.\d+(?:-Opt\.\d+)?-arm64-win\.7z/.test(name)) {
                        // Windows ARM64 package
                        f[d][w.Vm] = file;
                      } else if (/\d+\.\d+\.\d+(?:-Opt\.\d+)?-arm64-mac\.7z/.test(name)) {
                        // macOS ARM64 package
                        f[d][w.UD] = file;
                      } else if (/\d+\.\d+\.\d+(?:-Opt\.\d+)?-mac\.7z/.test(name)) {
                        // macOS x64 package
                        f[d][w.Ml] = file;
                      } else if (/\d+\.\d+\.\d+(?:-Opt\.\d+)?[-\.]ia32\.exe/.test(name)) {
                        // Windows ia32 installer
                        f[h][w.Ap] = file;
                      } else if (/\d+\.\d+\.\d+(?:-Opt\.\d+)?\.arm64\.exe/.test(name)) {
                        // Windows ARM64 installer
                        f[h][w.Vm] = file;
                      } else if (/\d+\.\d+\.\d+(?:-Opt\.\d+)?\.exe/.test(name)) {
                        // Windows x64 installer
                        f[h][w.J4] = file;
                      } else if (/arm64\.dmg/.test(name)) {
                        // macOS ARM64 DMG
                        f[g][w.UD] = file;
                      } else if (/\.dmg/.test(name)) {
                        // macOS x64 DMG
                        f[g][w.Ml] = file;
                      } else if (/x64\-linux\.tar\.gz/.test(name)) {
                        // Linux x64 package
                        f[p][w.bV] = file;
                      }
                    }
                  } catch (e) {
                    m.e(e); // prosess err
                  } finally {
                    m.f(); // end
                  }
                  ((C = function (e) {
                    var t, i;
                    return null == f || null === (t = f[e]) || void 0 === t || null === (i = t[(0, w.$Q)()]) || void 0 === i ? void 0 : i.browser_download_url;
                  }), e.portableMode ? (c = C(d)) : ((0, w.V5)() && (c = C(g)), (0, w.Kr)() && (c = C(h)), (0, w.IJ)() && (c = C(p))), (e.newVersionInfo = {
                    version: o,
                    log: ce.marked.parse(n.data.body),
                    url: c || "https://github.com/Z-Siqi/Clash-for-Windows_Chinese/releases",
                    isPortable: e.portableMode,
                    reactions: (null === (l = n.data) || void 0 === l ? void 0 : l.reactions) || null,
                    reactionClick: function () {
                      var e;
                      y.shell.openExternal(null === (e = n.data) || void 0 === e ? void 0 : e.html_url);
                    }
                  }), (0, w.V5)() && e.settings.silentUpdate && c && (0, Ne._)(c, o).then(function (t) {
                    const Lg = new Language(modifyState.language);
                    (ee.info("upgrade to ".concat(o, " " + Lg.success() + ", " + Lg.path() + ": ").concat(t)), e.setIsSilentUpgraded({
                      isUpgraded: !0
                    }), (e.newVersionInfo = {}));
                  }).catch(function (e) {
                    const Lg = new Language(modifyState.language);
                    ee.info("auto upgrade " + Lg.failedWithError().concat(e));
                  }));
                }
              case 11:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      loadConfData: function () {
        const Lg = new Language(modifyState.language);
        ee.info(Lg.loadDataFromGeneral());
        var e = oe().join(this.clashPath, "config.yaml");
        try {
          var t = ie().readFileSync(e, "utf8").toString(),
            i = le().parse(t, {
              prettyErrors: !0,
              strict: !1
            });
          this.setConfData({
            data: i
          });
        } catch (e) {
          var n = "",
            o = e.linePos;
          if (o) {
            var s = o.start;
            if (s) {
              var r = s.line,
                a = s.col;
              n = ", on line: ".concat(r, ", at column: ").concat(a);
            }
          }
          (this.appendError({
            error: "Error: ".concat(e).concat(n)
          }), ee.warn(Lg.failLoadGeneralCfg().concat(e)));
        }
      },
      mkdirPathSync: function (e) {
        return (e !== oe().dirname(e) && (!!ie().existsSync(e) || (this.mkdirPathSync(oe().dirname(e)) ? (ie().mkdirSync(e), !0) : void 0)));
      },
      initConfigFolder: function () {
        var e = this;
        return d()(u().mark(function t() {
          var i, n, o, s, a, l, c, d, h, g, p, f, m;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                if ((e.mkdirPathSync(e.clashPath), (i = oe().join(e.clashPath, "config.yaml")), (n = oe().join(e.clashPath, "config.yml")), ie().existsSync(n))) {
                  try {
                    ie().unlinkSync(i);
                  } catch (e) {}
                  ie().renameSync(n, i);
                }
                if (ie().existsSync(i) && "" !== ie().readFileSync(i, {
                  encoding: "utf8"
                })) try {
                  void 0 === (o = le().parseDocument(ie().readFileSync(i, "utf8"))).get("mixed-port") && ((s = o.get("port")), (a = o.get("socks-port")), (l = s || a || 7890), o.delete("port"), o.delete("socks-port"), ie().writeFileSync(i, "mixed-port: ".concat(l, "\n").concat(o.toString())));
                } catch (e) {} else (ee.info(new Language(modifyState.language).firstLunach()), ie().writeFileSync(i, le().stringify({
                  "mixed-port": 7890,
                  "allow-lan": !1,
                  "external-controller": "127.0.0.1:9090",
                  secret: (0, De.v4)()
                })));
                if (((c = oe().join(e.filesPath, "default/Country.mmdb")), (d = oe().join(e.clashPath, "Country.mmdb")), ie().existsSync(d) || ie().copyFileSync(c, d), !(0, w.Kr)())) {
                  t.next = 20;
                  break;
                }
                return ((g = ((h = {}), r()(h, w.Ap, "ia32"), r()(h, w.J4, "x64"), r()(h, w.Vm, "arm64"), h)[(0, w.$Q)()]), (p = oe().join(e.filesPath, "win/".concat(g, "/wintun.dll"))), (f = oe().join(e.clashPath, "wintun.dll")), (t.next = 14), (0, he.uQ)());
              case 14:
                if (((t.t0 = t.sent), !t.t0)) {
                  t.next = 17;
                  break;
                }
                t.t0 = ie().existsSync(f);
              case 17:
                if (!t.t0) {
                  t.next = 19;
                  break;
                }
                ie().unlinkSync(f);
              case 19:
                ie().existsSync(f) || ie().copyFileSync(p, f);
              case 20:
                ((m = oe().join(e.clashPath, "logs")), ie().existsSync(m) || ie().mkdirSync(m));
              case 22:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      initProfilesFolder: function () {
        var e = this.profilesPath;
        ie().existsSync(e) || ie().mkdirSync(e);
        var t = oe().join(this.profilesPath, "list.yml");
        ie().existsSync(t) || ie().writeFileSync(t, "files: []\nindex: -1", {
          flag: "ax"
        });
      },
      startChild: function (e) {
        if (!e || !e.hasOwnProperty("command")) return null;
        var t = e.args,
          i = void 0 === t ? [] : t,
          n = e.options,
          o = void 0 === n ? {} : n;
        return J().spawn(e.command, i, Oe(Oe({}, o), {}, {
          windowsHide: !0
        }));
      },
      spawnUserDefindExes: function () {
        if (this.confData) {
          var e = [],
            t = this.settings.childProcessText,
            i = void 0 === t ? "" : t;
          try {
            e = le().parse(i).processes || [];
          } catch (e) {}
          var n = [];
          for (var o in e) {
            var s = e[o],
              r = s.log,
              a = s.options,
              l = (a = void 0 === a ? {} : a).cwd,
              c = this.startChild(e[o]),
              d = c.pid,
              h = c.stderr,
              u = c.stdout;
            (r && l && (h && h.pipe(ie().createWriteStream(oe().join(l, "cfw-child-process-err.log"), {
              flags: "a"
            })), u && u.pipe(ie().createWriteStream(oe().join(l, "cfw-child-process-out.log"), {
              flags: "a"
            }))), n.push(d));
          }
          _.Z.put(W.Z.LAST_USER_EXE_PIDS, n);
        }
      },
      preDownloadAds: function () {
        return d()(u().mark(function e() {
          var t, i, n, o, s;
          return u().wrap(function (e) {
            for (;;) switch ((e.prev = e.next)) {
              case 0:
                return ((e.next = 2), re().get(modifyState.adImages + new Date().getTime()));
              case 2:
                ((t = e.sent), (i = t.status), (n = t.data), 200 === i && (o = n.feedback) && ((s = o), _.Z.put(W.Z.AD_IMAGES, s)));
              case 5:
              case "end":
                return e.stop();
            }
          }, e);
        }))();
      },
      profileUpdater: function () {
        var e = this;
        return d()(u().mark(function t() {
          var i, n, o, s, r, a, c, d;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                if (e.profiles && !e.isAppSuspend) {
                  t.next = 2;
                  break;
                }
                return t.abrupt("return");
              case 2:
                return ((i = function () {
                  return new Date().getTime();
                }), (n = e.profiles.files), (o = (void 0 === n ? [] : n).filter(function (t) {
                  var i = t.interval,
                    n = t.url,
                    o = t.time,
                    s = t.cron,
                    r = void 0 === s ? "" : s;
                  if (!n) return !1;
                  try {
                    var a = P()();
                    if (r && new Ve(r).isMatchDate(a)) return !0;
                    if (i > 0) {
                      var l = ie().statSync(oe().join(e.profilesPath, o)).mtime;
                      if (l) {
                        var c = e.profileUpdateFailed[n];
                        if (void 0 !== c) {
                          if (!P()(c).add(i, "hours").isBefore(a)) return !1;
                          delete e.profileUpdateFailed[n];
                        }
                        return P()(l).add(i, "hours").isBefore(a);
                      }
                    }
                  } catch (e) {}
                  return !1;
                })), (t.next = 7), Promise.allSettled(o.map(function (e) {
                  var t = e.url,
                    i = e.headers;
                  return (0, ye.rF)({
                    url: t,
                    headersString: i
                  });
                })));
              case 7:
                const Lg = new Language(modifyState.language);
                ((s = t.sent), (r = u().mark(function t(n) {
                  var r, a, c, d, h;
                  return u().wrap(function (t) {
                    for (;;) switch ((t.prev = t.next)) {
                      case 0:
                        if (((r = s[n].value), (a = r.success), (c = r.message), (d = r.targetIndex), (h = o[n].url), !a || d !== e.profiles.index)) {
                          t.next = 5;
                          break;
                        }
                        return ((t.next = 5), e.refreshProfile());
                      case 5:
                        (a && e.profileUpdateFailedURLs.includes(h) && (e.profileUpdateFailedURLs = e.profileUpdateFailedURLs.filter(function (e) {
                          return e !== h;
                        })), c && (ee.warn(Lg.failUpdateUrlProfile().concat(h)), (0, he.c0)(Lg.profileUpdateFail(), h), e.profileUpdateFailed.hasOwnProperty(h) || (e.profileUpdateFailed[h] = i()), e.profileUpdateFailedURLs.includes(h) || (e.profileUpdateFailedURLs = [].concat(l()(e.profileUpdateFailedURLs), [h]))));
                      case 7:
                      case "end":
                        return t.stop();
                    }
                  }, t);
                })), (a = 0));
              case 10:
                if (!(a < s.length)) {
                  t.next = 15;
                  break;
                }
                return t.delegateYield(r(a), "t0", 12);
              case 12:
                (a++, (t.next = 10));
                break;
              case 15:
                ((c = e.profiles.files), (d = (void 0 === c ? [] : c).map(function (e) {
                  return e.time;
                })), ie().readdir(oe().join(e.profilesPath), function (t, i) {
                  !t && i.length > 0 && i.forEach(function (t) {
                    if (/^\d+\.yml$/.test(t)) {
                      var i = !1,
                        n = ie().statSync(oe().join(e.profilesPath, t)).mtimeMs;
                      (n && (i = P()(n).isBefore(P()().subtract(1, "month"))), i && !d.includes(t) && ie().unlinkSync(oe().join(e.profilesPath, t)));
                    }
                  });
                }));
              case 18:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      rebindShortcut: function (e, t, i) {
        var n = this;
        return d()(u().mark(function o() {
          var s;
          return u().wrap(function (o) {
            for (;;) switch ((o.prev = o.next)) {
              case 0:
                if (!t) {
                  o.next = 9;
                  break;
                }
                return ((o.prev = 1), (o.next = 4), y.ipcRenderer.invoke("globalShortcut", "unregister", t));
              case 4:
                (delete n.shortcuts[t], (o.next = 9));
                break;
              case 7:
                ((o.prev = 7), (o.t0 = o.catch(1)));
              case 9:
                if (!e) {
                  o.next = 23;
                  break;
                }
                return ((o.prev = 10), (o.next = 13), y.ipcRenderer.invoke("globalShortcut", "register", e));
              case 13:
                return ((o.next = 15), y.ipcRenderer.invoke("globalShortcut", "isRegistered", e));
              case 15:
                return ((s = o.sent) && (n.shortcuts[e] = i), o.abrupt("return", s));
              case 20:
                ((o.prev = 20), (o.t1 = o.catch(10)), console.error(o.t1));
              case 23:
                return o.abrupt("return", !1);
              case 24:
              case "end":
                return o.stop();
            }
          }, o, null, [[1, 7], [10, 20]]);
        }))();
      },
      detectInterfaceName: function () {
        var e = (0, ue.Z)();
        e && e !== this.detectedInterfaceName && this.setDetectedInterfaceName({
          interfaceName: e
        });
      },
      quit: function () {
        var e = this;
        const Lg = new Language(modifyState.language);
        return d()(u().mark(function t() {
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return (ee.info(Lg.appExiting()), (t.next = 3), e.killClashCore());
              case 3:
                if ((e.resetDNS(), (t.prev = 4), !e.isSystemProxyOn)) {
                  t.next = 8;
                  break;
                }
                return ((t.next = 8), e.$setSystemProxy(!1));
              case 8:
                t.next = 12;
                break;
              case 10:
                ((t.prev = 10), (t.t0 = t.catch(4)));
              case 12:
                return ((t.prev = 12), y.ipcRenderer.send("cleanup-done"), t.finish(12));
              case 15:
              case "end":
                return t.stop();
            }
          }, t, null, [[4, 10, 12, 15]]);
        }))();
      }
    }),
    mounted: function () {
      var e = this;
      (window.addEventListener("online", function () {
        (ee.info("network online"), e.detectInterfaceName(), e.refreshProfile());
      }), y.ipcRenderer.on("wlan-status-changed", Pe.debounce(function (t, i) {
        ["ssidDidChangeForWiFiInterfaceWithName", "wlan_notification_acm_connection_complete"].includes(null == i ? void 0 : i.code) && (ee.info("wlan-status-changed: ".concat(JSON.stringify(i))), e.setSSIDOptions());
      }, 200)), y.ipcRenderer.on("wlan-status-listen-error", function (t, i) {
        (ee.error("failed to listen network change nativly: ".concat(i)), window.addEventListener("online", function () {
          e.setSSIDOptions();
        }));
      }), y.ipcRenderer.invoke("wlan-status-wanted"));
    },
    beforeDestroy: function () {},
    beforeMount: function () {
      var e = this;
      return d()(u().mark(function t() {
        var n, o, s, a, c, h, g, p, f, m, v, C, x, S, k, L, N, D, I, E, T, M, A, O, P, R, F, B, V;
        return u().wrap(function (t) {
          for (;;) switch ((t.prev = t.next)) {
            case 0:
              return ((t.next = 2), y.ipcRenderer.invoke("window", "isVisible"));
            case 2:
              return ((n = t.sent), e.setIsWindowShow({
                isShow: n
              }), (e.startTime = new Date().getTime()), (t.t0 = e), (t.next = 8), y.ipcRenderer.invoke("app", "isPackaged"));
            case 8:
              if (((t.t1 = !t.sent), (t.t2 = {
                isDevMode: t.t1
              }), t.t0.setIsDevMode.call(t.t0, t.t2), ee.info(new Language(modifyState.language).appStartWithMode().concat(e.devMode ? "dev" : "production")), e.$router.replace({
                path: e.currentRoutePath
              }).catch(function (e) {}), !e.devMode)) {
                t.next = 17;
                break;
              }
              ((t.t3 = ""), (t.next = 20));
              break;
            case 17:
              return ((t.next = 19), y.ipcRenderer.invoke("app", "getPath", "exe"));
            case 19:
              t.t3 = t.sent;
            case 20:
              ((o = t.t3), e.setExePath({
                path: o
              }), (s = _.Z.get(W.Z.LAST_CLASH_PID)) && e.killSpawned({
                pid: s
              }), (a = _.Z.get(W.Z.LAST_USER_EXE_PIDS) || []), (c = Te(a)));
              try {
                for (c.s(); !(h = c.n()).done;) ((g = h.value), e.killSpawned({
                  pid: g
                }));
              } catch (e) {
                c.e(e);
              } finally {
                c.f();
              }
              return ((t.t4 = e), (t.next = 30), y.ipcRenderer.invoke("nativeTheme", "shouldUseDarkColors"));
            case 30:
              return ((t.t5 = t.sent), (t.t6 = {
                shouldUseDarkTheme: t.t5
              }), t.t4.setShouldUseDarkTheme.call(t.t4, t.t6), y.ipcRenderer.on("native-theme-updated", function (t, i) {
                e.setShouldUseDarkTheme({
                  shouldUseDarkTheme: i
                });
              }), y.ipcRenderer.on("shortcut-pressed", (function () {
                var t = d()(u().mark(function t(i, n) {
                  var o;
                  return u().wrap(function (t) {
                    for (;;) switch ((t.prev = t.next)) {
                      case 0:
                        return ((o = e.shortcuts[n]), (t.next = 3), o());
                      case 3:
                      case "end":
                        return t.stop();
                    }
                  }, t);
                }));
                return function (e, i) {
                  return t.apply(this, arguments);
                };
              })()), y.ipcRenderer.send("clash-core-status-change", 0), y.ipcRenderer.on("break-connections", function (t, i) {
                e.breakConnections(i);
              }), y.ipcRenderer.on("persist-selected-proxy", function () {
                e.persistSelectedProxy();
              }), y.ipcRenderer.on("app-exit", e.quit), y.ipcRenderer.on("power-event", function (t, i) {
                e.setIsAppSuspend({
                  isSuspend: "suspend" === i
                });
              }), y.ipcRenderer.on("system-proxy-changed", (function () {
                var t = d()(u().mark(function t(i, n) {
                  return u().wrap(function (t) {
                    for (;;) switch ((t.prev = t.next)) {
                      case 0:
                        return ((t.next = 2), e.$setSystemProxy(n, e.confData));
                      case 2:
                        if (!t.sent) {
                          t.next = 4;
                          break;
                        }
                        e.setIsSystemProxyOn({
                          isOn: n
                        });
                      case 4:
                      case "end":
                        return t.stop();
                    }
                  }, t);
                }));
                return function (e, i) {
                  return t.apply(this, arguments);
                };
              })()), y.ipcRenderer.send("mixin-changed", e.isMixinEnable), y.ipcRenderer.on("mixin-changed", function (t, i) {
                (e.changeIsMixinEnable({
                  isMixin: i
                }), e.refreshProfile());
              }), y.ipcRenderer.send("tun-changed", e.isTunEnable), y.ipcRenderer.on("tun-changed", function (t, i) {
                (e.chagneIsTunEnable({
                  isTun: i
                }), e.refreshProfile());
              }), y.ipcRenderer.on("run-tray-script", e.runTrayScript), y.ipcRenderer.on("mode-changed", function (t, i) {
                e.switchMode(i);
              }), y.ipcRenderer.on("app-open", (function () {
                const Lg = new Language(modifyState.language);
                var t = d()(u().mark(function t(i, n) {
                  var o, s, r, a, l;
                  return u().wrap(function (t) {
                    for (;;) switch ((t.prev = t.next)) {
                      case 0:
                        if (!n.find(function (e) {
                          return /clash:\/\/install-config\/?\?url=(.+?)(?=$|&)/.test(e);
                        })) {
                          t.next = 11;
                          break;
                        }
                        if (((o = decodeURIComponent(RegExp.$1.trim())), !/^https?:\/\//.test(o))) {
                          t.next = 11;
                          break;
                        }
                        return ((t.next = 5), (0, ye.rF)({
                          url: o
                        }));
                      case 5:
                        ((s = t.sent), (r = s.success), (a = s.message), (l = s.targetIndex), (0, he.c0)("Profile", r ? Lg.profileDownloaded() : a), r && (e.changeProfileIndex({
                          index: l
                        }), e.refreshProfile()));
                      case 11:
                        if (!n.find(function (e) {
                          return /clash:\/\/quit/.test(e);
                        })) {
                          t.next = 14;
                          break;
                        }
                        return ((t.next = 14), e.quit());
                      case 14:
                      case "end":
                        return t.stop();
                    }
                  }, t);
                }));
                return function (e, i) {
                  return t.apply(this, arguments);
                };
              })()), y.ipcRenderer.on("menu-item-change", function (t, i) {
                e.$router.replace({
                  path: "/home/".concat(i)
                });
              }), y.ipcRenderer.on("window-event", function (t, i) {
                if (["show", "hide"].includes(i)) e.setIsWindowShow({
                  isShow: "show" === i
                });else if ("close" === i) {
                  var n = e.settings.lightweightMode;
                  void 0 !== n && n && !e.isLocalMode && (_.Z.put(W.Z.IS_LIGHTWEIGHT_MODE_CLOSE, !0), y.ipcRenderer.send("cleanup-done"));
                }
              }), (t.next = 52), y.ipcRenderer.invoke("app", "getPath", "home"));
            case 52:
              //TODO: Support meta (/.config/clash -> /.config/mihomo)
              return ((p = t.sent), (f = oe().join(o, "../data")), (m = oe().join(p, "/.config/clash")), ie().existsSync(f) && ((m = f), (e.portableMode = !0)), (e.userPath = p), e.setClashPath({
                path: m
              }), (t.next = 60), e.initConfigFolder());
            case 60:
              if ((e.loadConfData(), (0, w.V5)() && Le().then(function (t) {
                e.setUserDNS({
                  dns: t
                });
              }).catch(function (e) {
                ee.info("faile to get user dns setting with error: ".concat(e));
              }), e.loadSettings(), !(0, w.Kr)())) {
                t.next = 73;
                break;
              }
              return ((t.prev = 64), (t.next = 67), ve());
            case 67:
              (ee.info(new Language(modifyState.language).httpStartAt().concat(e.innerServerPort)), (t.next = 73));
              break;
            case 70:
              //t.prev = 70, t.t7 = t.catch(64), ee.info(new Language(modifyState.language).httpFailStart().concat(t.t7));
              t.prev = 70;
              t.t7 = t.catch(64);
              const errorMsg = new Language(modifyState.language).httpFailStart();
              // 👇 关键：使用 .stack 而不是直接拼接 Error 对象
              const fullMessage = errorMsg + "\n" + (t.t7.stack || t.t7.toString());
              ee.info(fullMessage);
            case 73:
              if (((v = _.Z.get(W.Z.IS_LIGHTWEIGHT_MODE_CLOSE) || false), (C = e.settings), (x = C.hideTrayIcon), (S = C.hideAfterStartup), (x || v || !S) && y.ipcRenderer.invoke("window-control", "show"), e.settings.fontFamily, (k = e.settings.profilePath), e.setProfilesPath({
                path: k || oe().join(e.clashPath, "profiles")
              }), e.initProfilesFolder(), e.loadProfiles(), (L = e.settings), (N = L.randomControllerPort), (D = void 0 === N || N), (I = L.randomMixedPort), e.devMode || v)) {
                /** @type {number} */
                t.next = 106;
                break;
              }
              if (((t.prev = 83), !D)) {
                t.next = 94;
                break;
              }
              return ((E = "external-controller"), (t.t8 = "127.0.0.1:"), (t.next = 89), Be.a());
            case 89:
              return ((t.t9 = t.sent), (T = t.t8.concat.call(t.t8, t.t9)), (t.next = 93), (0, he.F0)(oe().join(e.clashPath, "config.yaml"), E, T));
            case 93:
              e.setConfData({
                data: Oe(Oe({}, e.confData), {}, r()({}, E, T))
              });
            case 94:
              if (!I) {
                t.next = 102;
                break;
              }
              return ((M = "mixed-port"), (t.next = 98), Be.a());
            case 98:
              return ((A = t.sent), (t.next = 101), (0, he.F0)(oe().join(e.clashPath, "config.yaml"), M, A));
            case 101:
              e.setConfData({
                data: Oe(Oe({}, e.confData), {}, r()({}, M, A))
              });
            case 102:
              t.next = 106;
              break;
            case 104:
              ((t.prev = 104), (t.t10 = t.catch(83)));
            case 106:
              return ((t.next = 108), He());
            case 108:
              return ((O = t.sent), e.setIsLocalMode({
                isLocal: O !== ze.Active
              }), (P = 0), (R = (function () {
                var t = d()(u().mark(function t() {
                  var i;
                  return u().wrap(function (t) {
                    for (;;) switch ((t.prev = t.next)) {
                      case 0:
                        if ((e.clashStatus === b.Z.CONNECTED && !e.isWindowShow) || !(e.clashAxiosFlyingRequestCount < 5)) {
                          t.next = 12;
                          break;
                        }
                        return ((t.next = 3), e.getClashStatus());
                      case 3:
                        ((i = t.sent), (t.t0 = i), (t.next = t.t0 === b.Z.CONNECTED ? 7 : t.t0 === b.Z.DISCONNECTED ? 9 : 11));
                        break;
                      case 7:
                        return ((P = 0), t.abrupt("break", 11));
                      case 9:
                        return ((P += 1), t.abrupt("break", 11));
                      case 11:
                        P >= (i === b.Z.CONNECTED ? 0 : 5) && ((P = 0), e.setClashStatus({
                          status: i
                        }));
                      case 12:
                      case "end":
                        return t.stop();
                    }
                  }, t);
                }));
                return function () {
                  return t.apply(this, arguments);
                };
              })()), R(), l()(Array(5)).forEach(function (e, t) {
                setTimeout(R, 500 + 500 * t);
              }), setInterval(R, 3e3), (t.next = 117), e.handlerRestartClash());
            case 117:
              const Lg = new Language(modifyState.language);
              if (modifyState.languageInProfile != -1) {
                if (i(24883).Z.get(LANGUAGE) === null) {
                  i(24883).Z.put(LANGUAGE, modifyState.languageInProfile);
                  if (modifyState.languageInProfile != 0) {
                    require("electron").ipcRenderer.invoke("window", "reload");
                  }
                } else if (modifyState.languageInProfile !== i(24883).Z.get(LANGUAGE)) {
                  i(24883).Z.put(LANGUAGE, modifyState.languageInProfile);
                  require("electron").ipcRenderer.invoke("window", "reload");
                }
              }
              if (!e.settings.disableLoadingAdsLink) {
                modifyState.adImages = "https://raw.githubusercontent.com/Fndroid/ads/master/ads_v2.json?t=";
              } else if (i(24883).Z.get(i(81518).Z.AD_IMAGES) != null || i(24883).Z.get(i(81518).Z.AD_IMAGES) != "") {
                i(24883).Z.put(i(81518).Z.AD_IMAGES, "");
              }
              if ((_.Z.put(W.Z.IS_LIGHTWEIGHT_MODE_CLOSE, !1), e.showStartup || ((e.showStartup = !0), (0, w.Kr)() && i(22037).release().startsWith("6.") ? (0, he.c0)("Attention", "The support for Windows 7 will be dropped soon in 2023 due to upstream changes. Click to learn more.", {
                hideWindowOnClick: !0
              }, function () {
                y.shell.openExternal("https://cloud.google.com/blog/products/chrome-enterprise/extending-chrome-on-windows-7-to-support-enterprise-customers");
              }) : (0, he.c0)(Lg.cfwRunInBg(), Lg.enjoyFreedom())), e.detectInterfaceName(), e.setSSIDOptions(), e.spawnUserDefindExes(), e.settings.checkForUpdates && e.checkForUpdate().then(function (e) {}).catch(function (e) {
                return console.error(e);
              }), setInterval(function () {
                e.settings.checkForUpdates && e.checkForUpdate().then(function (e) {}).catch(function (e) {
                  return console.error(e);
                });
              }, 216e5), e.preDownloadAds().then(function (e) {}).catch(function (e) {
                return console.error(e);
              }), setInterval(e.profileUpdater, 6e4), e.profileUpdater(), !(0, w.Kr)())) {
                t.next = 134;
                break;
              }
              return ((t.t11 = e), (t.next = 131), (0, Ie.Qz)());
            case 131:
              ((t.t12 = t.sent), (t.t13 = {
                isExist: t.t12
              }), t.t11.setIsFirewallRuleExist.call(t.t11, t.t13));
            case 134:
              for (Fe.bind(["command+f12", "ctrl+f12"], function () {
                return (y.ipcRenderer.invoke("webContent", "toggleDevTools"), !1);
              }), Fe.bind(["command+w", "ctrl+w"], function (e) {
                if (!e.target.className.split(" ").includes("no-esc")) return (y.ipcRenderer.invoke("window", "close"), !1);
              }), Fe.bind("esc", function (e) {
                if (!e.target.className.split(" ").includes("no-esc")) return (y.ipcRenderer.invoke("window", "close"), !1);
              }, "keydown"), F = function (t) {
                var i = t - 1;
                i >= 0 && i < e.menuItemsWithOrder.length && e.$router.replace({
                  path: e.menuItemsWithOrder[i].path
                }).catch(function (e) {});
              }, B = function (t) {
                Fe.bind("".concat(t), function () {
                  return ((e.menuKeyboardClickTimes += 1), F(t), !1);
                });
              }, V = 1; V <= 9; V++) B(V);
            case 140:
            case "end":
              return t.stop();
          }
        }, t, null, [[64, 70], [83, 104]]);
      }))();
    }
  };
  var Ue, $e;
  const Ke = je;
  (i(5513), i(17613), i(69028));
  const qe = (0, M.Z)(Ke, function () {
    var e = this,
      t = e._self._c;
    return t("div", {
      staticClass: "wrapper bg-[color:var(--bgc)] text-[color:var(--fgc)]"
    }, ["2077" === e.theme ? t("img", {
      staticClass: "cloud opacicy",
      attrs: {
        src: "static/imgs/2077.png"
      }
    }) : e._e(), e._v(" "), "mc" === e.theme ? t("img", {
      staticClass: "cloud opacicy",
      attrs: {
        src: "static/imgs/minecraft.png"
      }
    }) : e._e(), e._v(" "), t("StatusBar"), e._v(" "), t("main", [t("div", {
      staticClass: "left-side"
    }, [t("main-menu", {
      attrs: {
        "download-progress": e.pkgDownloadProgress,
        "start-time": e.startTime,
        profileUpdateFailedURLs: e.profileUpdateFailedURLs,
        "keyboard-click-times": e.menuKeyboardClickTimes
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "right-side"
    }, [t("keep-alive", [e.$route.meta.keepAlive ? t("router-view", {
      on: {
        refreshProfile: e.refreshProfile
      }
    }) : e._e()], 1), e._v(" "), e.$route.meta.keepAlive ? e._e() : t("router-view", {
      on: {
        refreshProfile: e.refreshProfile
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "clash-status-main"
    }, [t("div", {
      class: e.statusIcon
    }), e._v(" "), t("div", {
      staticClass: "clash-status-hint",
      on: {
        click: function () {
          return e.showLogsFolder();
        }
      }
    }, [e._v("\n        " + e._s(e.statusHint) + "\n      ")])])])], 1);
  }, [], !1, null, "68cbbc92", null).exports;
};
