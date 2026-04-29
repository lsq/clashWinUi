const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z: () => R
  });
  var n = i(63038),
    o = i.n(n),
    s = i(48926),
    r = i.n(s),
    a = i(319),
    l = i.n(a),
    c = i(59713),
    d = i.n(c),
    h = i(87757),
    u = i.n(h),
    g = i(13338),
    p = i(23321);
  function f(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  const Lg = new Language(modifyState.language);
  const m = {
    components: {
      Hint: g.Z
    },
    props: ["mode"],
    data: function () {
      return {
        modes: ["global", "rule", "direct", "script"],
        hints: ["", Lg.routedAccordingRule(), Lg.goDirectly(), Lg.routedAccordingScript()],
        icons: ["", "", "", ""]
      };
    },
    computed: (function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2 ? f(Object(i), !0).forEach(function (t) {
          d()(e, t, i[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : f(Object(i)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
      }
      return e;
    })({}, (0, p.mapState)({})),
    methods: {
      upperCaseFirstLetter: function (e) {
        return e[0].toUpperCase() + e.slice(1);
      },
      btnTheme: function (e) {
        var t = ["btn"];
        return (this.mode === e.toLowerCase() ? t.push("selected") : t.push("normal"), t);
      },
      switchMode: function (e) {
        var t = this;
        return r()(u().mark(function i() {
          return u().wrap(function (i) {
            for (;;) switch ((i.prev = i.next)) {
              case 0:
                (t.$parent.cancelLatencyTest(), t.$emit("switch", e));
              case 2:
              case "end":
                return i.stop();
            }
          }, i);
        }))();
      }
    }
  };
  i(71176);
  var v = i(51900);
  const _ = (0, v.Z)(m, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return t("div", {
      staticClass: "main",
      attrs: {
        id: "main-mode-switcher"
      }
    }, [t("div", {
      staticClass: "btns"
    }, [t("Hint", {
      staticClass: "gap-x-2 clickable",
      class: e.btnTheme("global"),
      staticStyle: {
        "flex-direction": "row"
      },
      attrs: {
        position: "bottom",
        hint: Lg.routedThroughSelectedProxy()
      },
      on: {
        click: function (t) {
          return e.switchMode("global");
        }
      }
    }, [t("span", [e._v(Lg.global())]), e._v(" "), t("div", {
      staticClass: "icon rotate-90"
    }, [e._v("merge")])]), e._v(" "), t("Hint", {
      staticClass: "gap-x-2 clickable",
      class: e.btnTheme("rule"),
      staticStyle: {
        "flex-direction": "row"
      },
      attrs: {
        position: "bottom",
        hint: Lg.routedAccordingRule()
      },
      on: {
        click: function (t) {
          return e.switchMode("rule");
        }
      }
    }, [t("span", [e._v(Lg.rule())]), e._v(" "), t("div", {
      staticClass: "icon rotate-90"
    }, [e._v("alt_route")])]), e._v(" "), t("Hint", {
      staticClass: "gap-x-2 clickable",
      class: e.btnTheme("direct"),
      staticStyle: {
        "flex-direction": "row"
      },
      attrs: {
        position: "bottom",
        hint: Lg.goDirectly()
      },
      on: {
        click: function (t) {
          return e.switchMode("direct");
        }
      }
    }, [t("span", [e._v(Lg.direct())]), e._v(" "), t("div", {
      staticClass: "icon rotate-90"
    }, [e._v("straight")])]), e._v(" "), t("Hint", {
      staticClass: "gap-x-2 clickable",
      class: e.btnTheme("script"),
      staticStyle: {
        "flex-direction": "row"
      },
      attrs: {
        position: "bottom",
        hint: Lg.routedAccordingScript()
      },
      on: {
        click: function (t) {
          return e.switchMode("script");
        }
      }
    }, [t("span", [e._v(Lg.script())]), e._v(" "), t("div", {
      staticClass: "icon rotate-90"
    }, [e._v("alt_route")])])], 1)]);
  }, [], !1, null, "357c3e79", null).exports;
  var b = i(11287),
    w = i(54387),
    y = i.n(w),
    C = i(24883),
    x = i(81518),
    S = i(24793),
    k = i.n(S),
    L = i(1581),
    N = i(8369),
    D = i(33182);
  const I = require("velocity-animate");
  var E = i.n(I),
    T = i(71289);
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
        d()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : M(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  var O = y().CancelToken;
  const P = {
    props: [],
    data: function () {
      return {
        proxies: [],
        axiosCancelTokens: [],
        showSecIdxs: [],
        hideTimeoutSecNames: [],
        infoItemName: "",
        intervalID: null,
        filterKeyword: "",
        filterKeywordReg: /.*/,
        isShowFilter: !1,
        isScrolling: !1,
        topItemIndex: -1,
        topProxyIndex: -1,
        proxyBlinkIndex: -1,
        groupBlinkIndex: -1,
        testingProxyNames: []
      };
    },
    components: {
      ProxyModeSwitcher: _,
      Navigator: b.Z,
      Hint: g.Z
    },
    watch: {
      clashStatus: function (e) {
        e === D.Z.CONNECTED && this.fetchData();
      },
      filterKeyword: {
        handler: k().debounce(function (e) {
          (C.Z.put(x.Z.PROXY_FILTER_KEYWORD, e), (this.filterKeywordReg = e ? new RegExp(e, "i") : /.*/));
        }, 500)
      },
      profileRefreshTimes: function () {
        this.fetchData();
      },
      proxyBlinkIndex: function () {
        var e = this;
        setTimeout(function () {
          e.proxyBlinkIndex = -1;
        }, 300);
      },
      groupBlinkIndex: function () {
        var e = this;
        setTimeout(function () {
          e.groupBlinkIndex = -1;
        }, 300);
      },
      hideTimeoutSecNames: function (e) {
        C.Z.put(x.Z.PROXY_HIDE_TIMEOUT_SEC_NAMES, e);
      }
    },
    computed: A(A(A({}, (0, p.mapState)({
      clashPath: function (e) {
        return e.app.clashPath;
      },
      pfs: function (e) {
        return e.app.profiles;
      },
      clashStatus: function (e) {
        return e.app.clashStatus;
      },
      confData: function (e) {
        return e.app.confData;
      },
      clashAxiosFlyingRequestCount: function (e) {
        return e.app.clashAxiosFlyingRequestCount;
      },
      profileRefreshTimes: function (e) {
        return e.app.profileRefreshTimes;
      },
      currentMode: function (e) {
        return e.app.mode;
      },
      currentProfilePayload: function (e) {
        return e.app.currentProfilePayload;
      }
    })), (0, p.mapGetters)(["clashAxiosClient"])), {}, {
      delayKeyName: function () {
        var e;
        return ((null === (e = ["delay", "meanDelay"]) || void 0 === e ? void 0 : e[this.settings.proxyDelayType]) || "delay");
      },
      navigatorWidth: function () {
        return this.settings.proxyMiniListWidth;
      },
      proxyItemWidth: function () {
        var e = this.settings.proxyItemWidth;
        return parseInt(e) >= 150 ? "".concat(e, "px") : "290px";
      },
      errorIndexes: function () {
        return this.proxyInMode.reduce(function (e, t, i) {
          var n = t.data;
          t.name;
          return (null != n && n.now && !n.all.find(function (e) {
            return e.name === n.now;
          }).alive && e.push(i), e);
        }, []);
      },
      proxyInMode: function () {
        var e = this.currentMode;
        if ("global" === e) return this.proxies.filter(function (e) {
          return "GLOBAL" === e.name;
        });
        if ("direct" === e) return [];
        var t = this.settings.hideUnselectableGroup,
          i = void 0 !== t && t ? ["Selector"] : ["Selector", "Fallback", "URLTest", "LoadBalance", "Relay"];
        return this.proxies.filter(function (e) {
          return "GLOBAL" !== e.name && i.includes(e.data.type);
        });
      },
      isShowNavigator: function () {
        return 0 !== parseInt(this.settings.proxyMiniListWidth);
      }
    }),
    methods: A(A(A({}, (0, p.mapMutations)({
      changeProfile: "CHANGE_PROFILE"
    })), (0, p.mapActions)(["getMode", "setMode"])), {}, {
      debounceScroll: k().debounce(function () {
        this.isScrolling = !1;
      }, 1e3),
      handleListScroll: function () {
        this.isScrolling = !0;
        var e = this.$refs["mixin-scroll-content"],
          t = this.$refs.list;
        return ((this.topItemIndex = [].concat(l()(t), [{
          offsetTop: 1 / 0
        }]).findIndex(function (t) {
          return t.offsetTop - 120 > e.scrollTop;
        }) - 1), (this.topProxyIndex = l()(t[this.topItemIndex].querySelectorAll(".proxy-item")).findIndex(function (t) {
          return t.offsetTop - 100 > e.scrollTop;
        })), this.debounceScroll());
      },
      handleProxyRightClick: function (e, t) {
        var i = this;
        return r()(u().mark(function n() {
          var o, s;
          return u().wrap(function (n) {
            for (;;) switch ((n.prev = n.next)) {
              case 0:
                ((o = i.proxyInMode.map(function (e) {
                  return e.name;
                }).findIndex(function (e) {
                  return e === t;
                })), (s = [{
                  text: Lg.showConnections(),
                  icon: "list",
                  click: function () {
                    i.$router.replace({
                      path: "/home/connection",
                      query: {
                        searchText: t
                      }
                    }).catch(function () {});
                  }
                }, {
                  text: Lg.runScript(),
                  icon: "code",
                  click: function () {
                    var e = i.currentProfilePayload.proxies,
                      n = (void 0 === e ? [] : e).find(function (e) {
                        return e.name === t;
                      }) || {
                        name: t
                      };
                    (0, L.TX)((0, N.EP)(n), L.ay);
                  }
                }]), o > -1 && s.unshift({
                  text: Lg.scrollGroup(),
                  icon: "travel_explore",
                  click: function () {
                    i.handleNavigatToGroup(o);
                  }
                }), i.$menu(s, e));
              case 4:
              case "end":
                return n.stop();
            }
          }, n);
        }))();
      },
      handleFilterIconClick: function () {
        var e = this;
        ((this.isShowFilter = !this.isShowFilter), this.isShowFilter || (this.filterKeyword = ""), this.$nextTick(function () {
          var t = e.$refs.filterKeyword;
          t && t.focus();
        }));
      },
      checkBtnText: function (e) {
        const Lg = new Language(modifyState.language);
        e.provider;
        var t = e.latency;
        return -1 === t ? "-- ms" : t || Lg.check();
      },
      handleSingleSpeedtest: function (e, t) {
        const Lg = new Language(modifyState.language);
        var i = this;
        return r()(u().mark(function n() {
          var o, s, r, a, c, d, h, g;
          return u().wrap(function (n) {
            for (;;) switch ((n.prev = n.next)) {
              case 0:
                return ((o = e.name), (s = t.name), (r = t.provider), (a = function (e) {
                  var t = i.proxyInMode.find(function (e) {
                    return e.name === o;
                  });
                  if (t) {
                    var n = t.data.all.find(function (e) {
                      return e.name === s;
                    });
                    n && (n.latency = -1 === e ? -1 : e + (/\d/.test(e) ? " ms" : Lg.timeout()));
                  }
                }), i.cancelLatencyTest(), (i.testingProxyNames = [].concat(l()(i.testingProxyNames), [s])), a(-1), (c = ""), (n.prev = 7), (d = i.settings), (h = d.latencyTimeout), (g = d.latencyUrl), (n.next = 11), i.speedtest(s, h || 3e3, g || "https://www.gstatic.com/generate_204", r));
              case 11:
                ((c = n.sent), (n.next = 16));
                break;
              case 14:
                ((n.prev = 14), (n.t0 = n.catch(7)));
              case 16:
                ((i.testingProxyNames = i.testingProxyNames.filter(function (e) {
                  return e !== s;
                })), a(c));
              case 18:
              case "end":
                return n.stop();
            }
          }, n, null, [[7, 14]]);
        }))();
      },
      proxyItemsBeforeAnimate: function (e) {
        e.style.opacity = 0;
      },
      animateDone: function (e) {},
      proxyItemsShowAnimate: function (e, t) {
        E()(e, {
          opacity: 1
        }, {
          duration: 150,
          easing: "ease-in",
          complete: t
        });
      },
      proxyItemsHideAnimate: function (e, t) {
        E()(e, {
          opacity: 0,
          height: 0
        }, {
          complete: t,
          easing: "ease-out",
          duration: 100
        });
      },
      saveShowSecIdxs: function () {
        C.Z.put(x.Z.PROXY_SHOW_SEC_IDXS, this.showSecIdxs);
      },
      handleNavigatToGroup: function (e) {
        (this.showSecIdxs.includes(e) || this.showSecIdxs.push(e), (this.groupBlinkIndex = e));
        var t = this.$refs["mixin-scroll-content"],
          i = this.$refs.list;
        this.$nextTick(function () {
          t.scrollTop = i[e].offsetTop - 120;
        });
      },
      scrollToSelected: function (e) {
        this.proxyBlinkIndex = e;
        var t = this.$refs["selected".concat(e)][0],
          i = this.$refs["mixin-scroll-content"],
          n = t.offsetTop - 160;
        (n < i.scrollTop || n > i.scrollTop + i.clientHeight - 200) && this.$nextTick(function () {
          i.scrollTop = t.offsetTop - 160;
        });
      },
      switchHideTimeout: function (e) {
        var t = this;
        return r()(u().mark(function i() {
          return u().wrap(function (i) {
            for (;;) switch ((i.prev = i.next)) {
              case 0:
                t.hideTimeoutSecNames.includes(e) ? (t.hideTimeoutSecNames = t.hideTimeoutSecNames.filter(function (t) {
                  return t !== e;
                })) : t.hideTimeoutSecNames.push(e);
              case 1:
              case "end":
                return i.stop();
            }
          }, i);
        }))();
      },
      switchVisiable: function (e) {
        var t = this;
        return r()(u().mark(function i() {
          var n, o, s, r, a, l;
          return u().wrap(function (i) {
            for (;;) switch ((i.prev = i.next)) {
              case 0:
                ((o = t.$refs.list), (s = t.$refs["mixin-scroll-content"]), (r = null === (n = o[e]) || void 0 === n ? void 0 : n.childNodes[0]), (a = null == r ? void 0 : r.childNodes[0]), (l = null == r ? void 0 : r.childNodes[2]), t.showSecIdxs.includes(e) ? ((t.showSecIdxs = t.showSecIdxs.filter(function (t) {
                  return t !== e;
                })), t.$nextTick(function () {
                  a.offsetTop > l.offsetTop && (s.scrollTop = r.offsetTop - 112);
                })) : t.showSecIdxs.push(e), t.saveShowSecIdxs());
              case 7:
              case "end":
                return i.stop();
            }
          }, i);
        }))();
      },
      nodeHint: function (e) {
        var t = this.proxies.find(function (t) {
          return t.name === e.name;
        });
        if (!t) return "";
        var i = t.data.type;
        return "Selector" === i || "Fallback" === i || "URLTest" === i ? "".concat(i, " - ").concat(t.data.now) : "LoadBalance" === i ? "".concat(i, " - ").concat(t.data.all.length, " server").concat(t.data.all.length > 1 ? "s" : "") : i;
      },
      cancelLatencyTest: function () {
        this.axiosCancelTokens.length > 0 && (this.axiosCancelTokens.forEach(function (e) {
          e();
        }), (this.axiosCancelTokens = []));
      },
      switchProxy: function (e, t) {
        var i = arguments,
          n = this;
        return r()(u().mark(function o() {
          var s;
          return u().wrap(function (o) {
            for (;;) switch ((o.prev = o.next)) {
              case 0:
                if (!(i.length > 2 && void 0 !== i[2] && i[2])) {
                  o.next = 3;
                  break;
                }
                return o.abrupt("return");
              case 3:
                return (n.cancelLatencyTest(), (o.next = 6), n.clashAxiosClient.put("/proxies/".concat(encodeURIComponent(e)), {
                  name: t
                }));
              case 6:
                204 === o.sent.status && (((s = l()(n.proxies)).find(function (t) {
                  return t.name === e;
                }).data.now = t), (n.proxies = s.length > 500 ? Object.freeze(s) : s), n.$parent.persistSelectedProxy(), n.$parent.breakConnections(e));
              case 8:
              case "end":
                return o.stop();
            }
          }, o);
        }))();
      },
      startLatencyTest: function (e, t) {
        var i = this;
        const Lg = new Language(modifyState.language);
        return r()(u().mark(function n() {
          var o, s, a, c, d, h;
          return u().wrap(function (n) {
            for (;;) switch ((n.prev = n.next)) {
              case 0:
                (i.cancelLatencyTest(), i.showSecIdxs.find(function (e) {
                  return e === t;
                }) || i.showSecIdxs.push(t), (o = i.proxies.find(function (t) {
                  return t.name === e;
                })), (s = i.settings), (a = s.latencyTimeout), (c = s.latencyUrl), (d = o.data.all), (h = t === i.topItemIndex ? [].concat(l()(d.slice(i.topProxyIndex)), l()(d.slice(0, i.topProxyIndex).reverse())) : d).forEach(function (e) {
                  e.latency = -1;
                }), h.forEach((function () {
                  var e = r()(u().mark(function e(t, n) {
                    var o;
                    return u().wrap(function (e) {
                      for (;;) switch ((e.prev = e.next)) {
                        case 0:
                          return ((e.prev = 0), (e.next = 3), i.speedtest(t.name, a || 3e3, c || "https://www.gstatic.com/generate_204", t.provider));
                        case 3:
                          ((o = e.sent), (t.latency = o > 0 ? o + " ms" : Lg.timeout()), (e.next = 10));
                          break;
                        case 7:
                          ((e.prev = 7), (e.t0 = e.catch(0)), (t.latency = Lg.timeout()));
                        case 10:
                        case "end":
                          return e.stop();
                      }
                    }, e, null, [[0, 7]]);
                  }));
                  return function (t, i) {
                    return e.apply(this, arguments);
                  };
                })()));
              case 8:
              case "end":
                return n.stop();
            }
          }, n);
        }))();
      },
      speedtest: function (e) {
        var t = arguments,
          i = this;
        return r()(u().mark(function n() {
          var o, s, r, a, l, c, d, h;
          return u().wrap(function (n) {
            for (;;) switch ((n.prev = n.next)) {
              case 0:
                return ((o = t.length > 1 && void 0 !== t[1] ? t[1] : 1e3), (s = t.length > 2 && void 0 !== t[2] ? t[2] : "https://www.gstatic.com/generate_204"), (r = t.length > 3 ? t[3] : void 0), (a = encodeURIComponent(e)), (l = r ? "/providers/proxies/".concat(encodeURIComponent(r.name), "/").concat(a, "/healthcheck") : "/proxies/".concat(a, "/delay")), (n.next = 7), i.clashAxiosClient(l, {
                  params: {
                    timeout: o,
                    url: s
                  },
                  cancelToken: new O(function (e) {
                    i.axiosCancelTokens.push(e);
                  }),
                  timeout: 0
                }));
              case 7:
                if (((c = n.sent), !(d = c.data))) {
                  n.next = 12;
                  break;
                }
                return ((h = d[i.delayKeyName]), n.abrupt("return", h || 0));
              case 12:
                return n.abrupt("return", 0);
              case 13:
              case "end":
                return n.stop();
            }
          }, n);
        }))();
      },
      handleModeSwitch: function (e) {
        var t = this;
        return r()(u().mark(function i() {
          return u().wrap(function (i) {
            for (;;) switch ((i.prev = i.next)) {
              case 0:
                return ((i.prev = 0), (i.next = 3), t.setMode({
                  mode: e
                }));
              case 3:
                i.next = 7;
                break;
              case 5:
                ((i.prev = 5), (i.t0 = i.catch(0)));
              case 7:
              case "end":
                return i.stop();
            }
          }, i, null, [[0, 5]]);
        }))();
      },
      findProvider: function (e, t) {
        for (var i in e) {
          var n = e[i],
            o = n.proxies,
            s = (void 0 === o ? [] : o).find(function (e) {
              return e.name === t;
            });
          if (s) return [n, s];
        }
        return [null, {}];
      },
      fetchData: function () {
        var e = this;
        const Lg = new Language(modifyState.language);
        return r()(u().mark(function t() {
          var i, n, s, r, a, l, c, d, h, g, p;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                if (((i = Number.MAX_SAFE_INTEGER), e.clashAxiosClient)) {
                  t.next = 3;
                  break;
                }
                return t.abrupt("return");
              case 3:
                return ((t.next = 5), Promise.all([e.clashAxiosClient.get("/proxies"), e.clashAxiosClient.get("/providers/proxies", {
                  validateStatus: function (e) {
                    return !0;
                  }
                })]));
              case 5:
                ((n = t.sent), (s = o()(n, 2)), (r = s[0]), (a = s[1]), (l = a.data), (c = (void 0 === l ? {} : l).providers), (d = void 0 === c ? {} : c), (h = r.data.proxies), (g = h.GLOBAL.all), (e.viewData = h), (p = Object.keys(h).map(function (t) {
                  return (h[t].hasOwnProperty("all") || (h[t].all = [h[t].now]), (h[t].all = h[t].all.map(function (t) {
                    var n = null,
                      s = h[t];
                    if (void 0 === s) {
                      var r = e.findProvider(d, t),
                        a = o()(r, 2),
                        l = a[0],
                        c = a[1],
                        u = 0,
                        g = c.history,
                        p = void 0 === g ? [] : g,
                        f = c.udp,
                        m = void 0 !== f && f,
                        v = c.alive;
                      return {
                        name: t,
                        provider: l,
                        latency: (n = p.length > 0 ? 0 === (u = p[p.length - 1][e.delayKeyName]) ? Lg.timeout() : "".concat(u, " ms") : ""),
                        delay: u || i,
                        udp: m,
                        alive: void 0 === v || v
                      };
                    }
                    var _ = 0;
                    return (s && s.history.length > 0 && (n = 0 === (_ = s.history[s.history.length - 1][e.delayKeyName]) ? Lg.timeout() : "".concat(_, " ms")), e.testingProxyNames.includes(t) && (n = -1), {
                      name: t,
                      provider: null,
                      latency: n,
                      delay: _ || i,
                      udp: (null == s ? void 0 : s.udp) || !1,
                      alive: void 0 === (null == s ? void 0 : s.alive) || (null == s ? void 0 : s.alive)
                    });
                  }).sort(function (n, o) {
                    var s = e.settings.proxyOrder,
                      r = void 0 === s ? 0 : s;
                    if (1 === r && "Fallback" !== h[t].type) {
                      var a = n.delay,
                        l = void 0 === a ? i : a,
                        c = o.delay;
                      return l - (void 0 === c ? i : c);
                    }
                    if (2 === r) {
                      var d = n.name,
                        u = o.name;
                      return d.localeCompare(u);
                    }
                    return !0;
                  })), {
                    name: t,
                    data: h[t]
                  });
                }).sort(function (e, t) {
                  return g.indexOf(e.name) - g.indexOf(t.name);
                })), (e.proxies = p.length > 500 ? Object.freeze(p) : p));
              case 16:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      }
    }),
    beforeRouteEnter: function (e, t, i) {
      var n;
      i(((n = r()(u().mark(function e(t) {
        return u().wrap(function (e) {
          for (;;) switch ((e.prev = e.next)) {
            case 0:
              return (t.getMode(), (t.showSecIdxs = C.Z.get(x.Z.PROXY_SHOW_SEC_IDXS) || []), (t.hideTimeoutSecNames = C.Z.get(x.Z.PROXY_HIDE_TIMEOUT_SEC_NAMES) || []), (t.filterKeyword = C.Z.get(x.Z.PROXY_FILTER_KEYWORD) || ""), (t.isShowFilter = "" !== t.filterKeyword), (t.intervalID = T.ZP.add(r()(u().mark(function e() {
                return u().wrap(function (e) {
                  for (;;) switch ((e.prev = e.next)) {
                    case 0:
                      if (t.isScrolling || !(t.clashAxiosFlyingRequestCount < 5)) {
                        e.next = 3;
                        break;
                      }
                      return ((e.next = 3), Promise.allSettled([t.getMode(), t.fetchData()]).catch(function (e) {}));
                    case 3:
                    case "end":
                      return e.stop();
                  }
                }, e);
              })), 5e3)), (e.next = 8), t.fetchData().catch(function (e) {}));
            case 8:
            case "end":
              return e.stop();
          }
        }, e);
      }))), function (e) {
        return n.apply(this, arguments);
      }));
    },
    beforeRouteLeave: function (e, t, i) {
      (this.intervalID && T.ZP.stop(this.intervalID), this.cancelLatencyTest(), i());
    }
  };
  (i(24860), i(53614));
  const R = (0, v.Z)(P, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return t("div", {
      attrs: {
        id: "main-proxy-view"
      }
    }, [t("proxy-mode-switcher", {
      attrs: {
        mode: e.currentMode
      },
      on: {
        switch: e.handleModeSwitch
      }
    }), e._v(" "), t("div", {
      ref: "mixin-scroll-content",
      staticClass: "scroll-view",
      on: {
        scroll: function (t) {
          return e.handleListScroll();
        }
      }
    }, [e._l(e.proxyInMode, function (i, n) {
      return t("div", {
        key: i.name,
        ref: "list",
        refInFor: !0
      }, [t("div", {
        staticClass: "proxy-list"
      }, [t("div", {
        class: ["proxy-section", e.groupBlinkIndex === n ? "flick" : ""],
        on: {
          click: function (t) {
            return e.switchVisiable(n);
          }
        }
      }, [t("div", {
        staticClass: "proxy-section-name"
      }, [t("div", {
        staticClass: "proxy-section-name-left"
      }, [e._v(e._s(i.name))]), e._v(" "), t("div", {
        staticClass: "proxy-hint-type",
        class: ["Selector" === i.data.type ? "proxy-hint-type-selector" : ""]
      }, [e._v("\n              " + e._s(i.data.type[0]) + "\n            ")]), e._v(" "), i.data.now ? t("div", {
        staticClass: "proxy-hint-line"
      }) : e._e(), e._v(" "), i.data.now ? t("div", {
        staticClass: "proxy-hint"
      }, [e._v("\n              " + e._s(i.data.now) + "\n            ")]) : e._e()]), e._v(" "), t("div", {
        staticClass: "proxy-section-right"
      }, [e.showSecIdxs.includes(n) ? t("Hint", {
        staticClass: "sec-icon clickable",
        attrs: {
          hint: Lg.scrollToProxy(),
          position: "top"
        },
        on: {
          click: function (t) {
            return (t.stopPropagation(), e.scrollToSelected(n));
          }
        }
      }, [t("span", {
        staticClass: "icon"
      }, [e._v("travel_explore")])]) : e._e(), e._v(" "), t("Hint", {
        staticClass: "sec-icon clickable",
        attrs: {
          hint: Lg.showHieTimedOutProxies(),
          position: "top"
        },
        on: {
          click: function (t) {
            return (t.stopPropagation(), e.switchHideTimeout(i.name));
          }
        }
      }, [t("span", {
        staticClass: "icon"
      }, [e._v("report" + e._s(e.hideTimeoutSecNames.includes(i.name) ? "_off" : ""))])]), e._v(" "), t("Hint", {
        staticClass: "sec-icon clickable",
        attrs: {
          hint: Lg.testLatency(),
          position: "top"
        },
        on: {
          click: function (t) {
            return (t.stopPropagation(), e.startLatencyTest(i.name, n));
          }
        }
      }, [t("span", {
        staticClass: "icon"
      }, [e._v("network_check")])]), e._v(" "), ["rule", "script"].includes(e.currentMode) ? t("Hint", {
        staticClass: "sec-icon clickable",
        attrs: {
          hint: "Show/hide proxies",
          position: "left"
        },
        on: {
          click: function (t) {
            return (t.stopPropagation(), e.switchVisiable(n));
          }
        }
      }, [t("span", {
        staticClass: "icon"
      }, [e._v("visibility" + e._s(e.showSecIdxs.includes(n) ? "" : "_off"))])]) : e._e()], 1)]), e._v(" "), t("transition", {
        attrs: {
          name: "fall-fade"
        }
      }, [!["rule", "script"].includes(e.currentMode) || e.showSecIdxs.includes(n) ? t("div", {
        staticClass: "proxy-items"
      }, [e._l(i.data.all, function (o, s) {
        return t("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: (!e.hideTimeoutSecNames.includes(i.name) || Lg.timeout() !== o.latency) && e.filterKeywordReg.test(o.name),
            expression: "\n                (!hideTimeoutSecNames.includes(proxy.name) ||\n                  node.latency !== 'Timeout') &&\n                filterKeywordReg.test(node.name)\n              "
          }],
          key: o.name + i.name + s,
          ref: o.name === i.data.now ? "selected".concat(n) : "",
          refInFor: !0,
          staticClass: "proxy-item",
          class: {
            selected: o.name === i.data.now,
            clickable: "Selector" === i.data.type,
            flick: o.name === i.data.now && n === e.proxyBlinkIndex
          },
          style: [{
            width: e.proxyItemWidth
          }],
          on: {
            click: function (t) {
              return e.switchProxy(i.name, o.name, "Selector" !== i.data.type);
            },
            contextmenu: function (t) {
              return e.handleProxyRightClick(t, o.name);
            }
          }
        }, [t("div", {
          staticClass: "indicator"
        }), e._v(" "), t("div", {
          staticClass: "info"
        }, [t("div", {
          staticClass: "left"
        }, [t("div", {
          staticClass: "item-name",
          class: {
            offline: !o.alive
          }
        }, [e._v("\n                    " + e._s(o.name) + "\n                  ")]), e._v(" "), t("div", {
          staticClass: "item-bottom"
        }, [t("div", {
          staticClass: "item-hint"
        }, [e._v("\n                      " + e._s(o.provider ? "Provider: ".concat(o.provider.name) : e.nodeHint(o)) + "\n                    ")]), e._v(" "), o.udp ? t("div", {
          staticClass: "item-udp"
        }, [e._v("UDP")]) : e._e()])]), e._v(" "), -1 === o.latency ? t("div", {
          staticClass: "time"
        }, [e._v("- ms")]) : t("div", {
          class: {
            offline: Lg.timeout() === o.latency,
            online: ![Lg.timeout(), -1, null, void 0, ""].includes(o.latency),
            time: !0
          },
          on: {
            click: [function (t) {
              return e.handleSingleSpeedtest(i, o);
            }, function (e) {
              e.stopPropagation();
            }]
          }
        }, [e._v("\n                  " + e._s(e.checkBtnText(o)) + "\n                ")])])]);
      }), e._v(" "), e._l(new Array(20), function (i, n) {
        return t("i", {
          key: n,
          style: {
            width: e.proxyItemWidth
          }
        });
      })], 2) : e._e()])], 1)]);
    }), e._v(" "), e.isShowNavigator ? t("navigator", {
      attrs: {
        list: e.proxyInMode.map(function (e) {
          return e.name;
        }),
        "error-indexes": e.errorIndexes,
        index: e.topItemIndex,
        width: e.navigatorWidth
      },
      on: {
        select: e.handleNavigatToGroup
      }
    }) : e._e(), e._v(" "), null === e.proxyInMode && "direct" !== this.currentMode ? t("div", [t("div", {
      staticClass: "fake-section"
    }), e._v(" "), t("div", {
      staticClass: "proxy-items proxy-list"
    }, e._l(new Array(12), function (e, i) {
      return t("div", {
        key: i,
        staticClass: "fake-item"
      }, [t("div")]);
    }), 0)]) : e._e(), e._v(" "), 0 === e.proxyInMode.length && "direct" !== this.currentMode ? t("div", {
      staticClass: "empty-hint"
    }, [t("div", [e._v(Lg.noProxyGroupInProfile())]), e._v(" "), t("div", [e._v("\n        " + Lg.profileDescribeStart() + "\n        "), t("span", {
      on: {
        click: function (t) {
          return e.$router.replace({
            path: "/home/server"
          });
        }
      }
    }, [e._v(Lg.profiles())]), e._v("\n        " + Lg.profileDescribeEnd() + "\n      ")])]) : e._e(), e._v(" "), "direct" === this.currentMode ? t("div", {
      staticClass: "empty-hint text-lg"
    }, [e._v("\n      " + Lg.allTrafficGoDirectly() + "\n    ")]) : e._e()], 2), e._v(" "), e.settings.showProxyFilter ? t("div", {
      staticClass: "filter-keyword"
    }, [t("transition", {
      attrs: {
        name: "move-right"
      }
    }, [e.isShowFilter ? t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.filterKeyword,
        expression: "filterKeyword"
      }],
      ref: "filterKeyword",
      attrs: {
        spellcheck: "false",
        type: "text"
      },
      domProps: {
        value: e.filterKeyword
      },
      on: {
        input: function (t) {
          t.target.composing || (e.filterKeyword = t.target.value);
        }
      }
    }) : e._e()]), e._v(" "), t("div", {
      on: {
        click: e.handleFilterIconClick
      }
    }, [e.isShowFilter ? t("span", {
      staticClass: "icon text-white"
    }, [e._v("close")]) : t("span", {
      staticClass: "icon text-white"
    }, [e._v("filter_list")])])], 1) : e._e()], 1);
  }, [], !1, null, "0729f95b", null).exports;
};