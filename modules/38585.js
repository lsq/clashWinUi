const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z: () => N
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
    g = i(23321),
    p = i(10605),
    f = i.n(p),
    m = i(33182),
    v = i(71017);
  const _ = {
    props: {
      text: String,
      size: String,
      isLoading: Boolean
    },
    methods: {
      handleClick: function () {
        this.isLoading || this.$emit("click");
      }
    }
  };
  i(58528);
  var b = i(51900);
  const w = (0, b.Z)(_, function () {
    var e = this,
      t = e._self._c;
    return t("div", {
      staticClass: "main-button-view",
      on: {
        click: e.handleClick
      }
    }, [e.isLoading ? t("div", {
      staticClass: "line"
    }, [t("div", {
      class: ["box", "animation-delay1", "large" === e.size ? "large" : "small"]
    }), e._v(" "), t("div", {
      class: ["box", "animation-delay2", "large" === e.size ? "large" : "small"]
    }), e._v(" "), t("div", {
      class: ["box", "animation-delay3", "large" === e.size ? "large" : "small"]
    }), e._v(" "), t("div", {
      class: ["box", "animation-delay4", "large" === e.size ? "large" : "small"]
    }), e._v(" "), t("div", {
      class: ["box", "animation-delay5", "large" === e.size ? "large" : "small"]
    })]) : t("div", [e._v(e._s(e.text))])]);
  }, [], !1, null, "f3b3ccf8", null).exports;
  var y = i(72298),
    C = i(57147),
    x = i.n(C);
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
        d()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : S(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  const L = {
    components: {
      Button: w,
      Hint: i(13338).Z
    },
    props: [],
    data: function () {
      return {
        providers: [],
        ruleProviders: [],
        updateAbortCtl: new AbortController(),
        healthCheckAbortCtl: new AbortController(),
        errorProviderIndexes: []
      };
    },
    watch: {
      clashStatus: function (e) {
        e === m.Z.CONNECTED && this.fetchData();
      },
      profileRefreshTimes: function () {
        this.fetchData();
      },
      allProviders: function (e) {
        this.errorProviderIndexes = e.reduce(function (e, t, i) {
          return ("" !== t.message && e.push(i), e);
        }, []);
      }
    },
    computed: k(k(k({}, (0, g.mapState)({
      clashPath: function (e) {
        return e.app.clashPath;
      },
      clashStatus: function (e) {
        return e.app.clashStatus;
      },
      profileRefreshTimes: function (e) {
        return e.app.profileRefreshTimes;
      },
      currentProfilePayload: function (e) {
        return e.app.currentProfilePayload;
      },
      settings: function (e) {
        return e.app.settings;
      }
    })), (0, g.mapGetters)(["clashAxiosClient"])), {}, {
      updatingProvidersCount: function () {
        return (this.providers.filter(function (e) {
          return e.isUpdating;
        }).length + this.ruleProviders.filter(function (e) {
          return e.isUpdating;
        }).length);
      },
      failedProvidersCount: function () {
        return this.allProviders.filter(function (e) {
          return "" !== e.message;
        }).length;
      },
      checkingProvidersCount: function () {
        return this.providers.filter(function (e) {
          return e.isChecking;
        }).length;
      },
      allProviders: function () {
        return [].concat(l()(this.providers), l()(this.ruleProviders));
      }
    }),
    methods: {
      fromNowString: function (e) {
        const Lg = new Language(modifyState.language);
        return f()(e).locale(Lg.locale()).fromNow();
      },
      handleLocateFailedProvider: function () {
        if (this.errorProviderIndexes.length > 0 && 0 === this.updatingProvidersCount) {
          var e,
            t = this.errorProviderIndexes[0];
          (null === (e = this.$refs["provider-".concat(t)]) || void 0 === e || e[0].scrollIntoView(), (this.errorProviderIndexes = [].concat(l()(this.errorProviderIndexes.slice(1)), [t])));
        }
      },
      handleAllProvidersUpdate: function () {
        if (this.updatingProvidersCount > 0) return (this.updateAbortCtl.abort(), void (this.updateAbortCtl = new AbortController()));
        for (var e in this.providers) this.handleProviderUpdate(e);
        for (var t in this.ruleProviders) this.handleRuleProviderUpdate(t);
      },
      handleAllProvidersHealthCheck: function () {
        if (this.checkingProvidersCount > 0) return (this.healthCheckAbortCtl.abort(), void (this.healthCheckAbortCtl = new AbortController()));
        for (var e in this.providers) this.handleHealthCheck(e);
      },
      handleHealthCheck: function (e) {
        var t = this;
        return r()(u().mark(function i() {
          var n, o;
          return u().wrap(function (i) {
            for (;;) switch ((i.prev = i.next)) {
              case 0:
                if (((n = t.providers[e]), !(o = n.name))) {
                  i.next = 12;
                  break;
                }
                return (t.$set(t.providers, e, k(k({}, n), {}, {
                  isChecking: !0
                })), (i.prev = 4), (i.next = 7), t.clashAxiosClient.get("/providers/proxies/".concat(encodeURIComponent(o), "/healthcheck"), {
                  timeout: 0,
                  signal: t.healthCheckAbortCtl.signal
                }));
              case 7:
                i.next = 11;
                break;
              case 9:
                ((i.prev = 9), (i.t0 = i.catch(4)));
              case 11:
                t.$set(t.providers, e, k(k({}, n), {}, {
                  isChecking: !1
                }));
              case 12:
              case "end":
                return i.stop();
            }
          }, i, null, [[4, 9]]);
        }))();
      },
      handleProviderUpdate: function (e) {
        var t = this;
        const Lg = new Language(modifyState.language);
        return r()(u().mark(function i() {
          var n, o, s, r, a, l, c, d, h, g, p;
          return u().wrap(function (i) {
            for (;;) switch ((i.prev = i.next)) {
              case 0:
                if (((n = t.providers[e]), (o = n.name), (s = n.vehicleType), (r = n.isUpdating), !["File", "HTTP"].includes(s) || !o || r)) {
                  i.next = 33;
                  break;
                }
                return (t.$set(t.providers, e, k(k({}, n), {}, {
                  isUpdating: !0,
                  message: ""
                })), (i.prev = 4), (i.next = 7), t.clashAxiosClient.put("/providers/proxies/".concat(encodeURIComponent(o)), {}, {
                  validateStatus: function (e) {
                    return !0;
                  },
                  timeout: 0,
                  signal: t.updateAbortCtl.signal
                }));
              case 7:
                if (((a = i.sent), (l = a.status), (c = a.data), 204 !== l)) {
                  i.next = 26;
                  break;
                }
                return ((i.next = 13), t.fetchSingleData("proxies", o));
              case 13:
                if (((i.t1 = d = i.sent), (i.t0 = null !== i.t1), !i.t0)) {
                  i.next = 17;
                  break;
                }
                i.t0 = void 0 !== d;
              case 17:
                if (!i.t0) {
                  i.next = 21;
                  break;
                }
                ((i.t2 = d), (i.next = 22));
                break;
              case 21:
                i.t2 = n;
              case 22:
                ((h = i.t2), t.$set(t.providers, e, k(k({}, h), {}, {
                  isUpdating: !1,
                  message: ""
                })), (i.next = 28));
                break;
              case 26:
                ((g = c.message), (p = void 0 === g ? Lg.couldNotUpdateProvider() : g), t.$set(t.providers, e, k(k({}, n), {}, {
                  isUpdating: !1,
                  message: p
                })));
              case 28:
                i.next = 33;
                break;
              case 30:
                ((i.prev = 30), (i.t3 = i.catch(4)), t.$set(t.providers, e, k(k({}, n), {}, {
                  isUpdating: !1,
                  message: i.t3
                })));
              case 33:
              case "end":
                return i.stop();
            }
          }, i, null, [[4, 30]]);
        }))();
      },
      handleRuleProviderUpdate: function (e) {
        var t = this;
        const Lg = new Language(modifyState.language);
        return r()(u().mark(function i() {
          var n, o, s, r, a, l, c, d, h, g, p;
          return u().wrap(function (i) {
            for (;;) switch ((i.prev = i.next)) {
              case 0:
                if (((n = t.ruleProviders[e]), (o = n.name), (s = n.vehicleType), (r = n.isUpdating), !["File", "HTTP"].includes(s) || !o || r)) {
                  i.next = 33;
                  break;
                }
                return (t.$set(t.ruleProviders, e, k(k({}, n), {}, {
                  isUpdating: !0,
                  message: ""
                })), (i.prev = 4), (i.next = 7), t.clashAxiosClient.put("/providers/rules/".concat(encodeURIComponent(o)), {}, {
                  validateStatus: function (e) {
                    return !0;
                  },
                  timeout: 0,
                  signal: t.updateAbortCtl.signal
                }));
              case 7:
                if (((a = i.sent), (l = a.status), (c = a.data), 204 !== l)) {
                  i.next = 26;
                  break;
                }
                return ((i.next = 13), t.fetchSingleData("rules", o));
              case 13:
                if (((i.t1 = d = i.sent), (i.t0 = null !== i.t1), !i.t0)) {
                  i.next = 17;
                  break;
                }
                i.t0 = void 0 !== d;
              case 17:
                if (!i.t0) {
                  i.next = 21;
                  break;
                }
                ((i.t2 = d), (i.next = 22));
                break;
              case 21:
                i.t2 = n;
              case 22:
                ((h = i.t2), t.$set(t.ruleProviders, e, k(k({}, h), {}, {
                  isUpdating: !1,
                  message: ""
                })), (i.next = 28));
                break;
              case 26:
                ((g = c.message), (p = void 0 === g ? Lg.couldNotUpdateProvider() : g), t.$set(t.ruleProviders, e, k(k({}, n), {}, {
                  isUpdating: !1,
                  message: p
                })));
              case 28:
                i.next = 33;
                break;
              case 30:
                ((i.prev = 30), (i.t3 = i.catch(4)), t.$set(t.ruleProviders, e, k(k({}, n), {}, {
                  isUpdating: !1,
                  message: i.t3
                })));
              case 33:
              case "end":
                return i.stop();
            }
          }, i, null, [[4, 30]]);
        }))();
      },
      handleEditProviderFile: function (e, t) {
        var i,
          n = this,
          o = t.name,
          s = this.settings.editProfileWithCFWEditor,
          a = void 0 !== s && s,
          l = this.currentProfilePayload,
          c = l["rule-providers"],
          d = void 0 === c ? {} : c,
          h = l["proxy-providers"],
          g = {
            rule: d,
            proxy: void 0 === h ? {} : h
          }[e][o],
          p = (g = void 0 === g ? {} : g).path,
          f = ((i = r()(u().mark(function e(t) {
            var i, o, s;
            return u().wrap(function (e) {
              for (;;) switch ((e.prev = e.next)) {
                case 0:
                  if (!a) {
                    e.next = 14;
                    break;
                  }
                  return ((e.prev = 1), (e.next = 4), n.$code({
                    code: x().readFileSync(t).toString(),
                    fontSize: n.settings.editorFontSize
                  }));
                case 4:
                  ((i = e.sent), (o = i.code), (s = void 0 === o ? "" : o), x().writeFileSync(t, s), (e.next = 12));
                  break;
                case 10:
                  ((e.prev = 10), (e.t0 = e.catch(1)));
                case 12:
                  e.next = 15;
                  break;
                case 14:
                  y.shell.openPath(t);
                case 15:
                case "end":
                  return e.stop();
              }
            }, e, null, [[1, 10]]);
          }))), function (e) {
            return i.apply(this, arguments);
          });
        p && ((0, v.isAbsolute)(p) ? f(p) : f((0, v.join)(this.clashPath, p)));
      },
      fetchSingleData: function (e, t) {
        var i = this;
        return r()(u().mark(function n() {
          var o, s, r, a;
          return u().wrap(function (n) {
            for (;;) switch ((n.prev = n.next)) {
              case 0:
                return ((o = "/providers/".concat(e, "/").concat(encodeURIComponent(t))), (n.next = 3), i.clashAxiosClient.get(o, {
                  validateStatus: function () {
                    return !0;
                  },
                  timeout: 0,
                  signal: i.updateAbortCtl.signal
                }));
              case 3:
                return ((s = n.sent), (r = s.status), (a = s.data), n.abrupt("return", 200 === r ? a : null));
              case 7:
              case "end":
                return n.stop();
            }
          }, n);
        }))();
      },
      fetchData: function () {
        var e = this;
        return r()(u().mark(function t() {
          var i, n, s, r, a, l, c, d, h, g, p, f, m, v, _, b, w, y, C, x, S, L, N;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), Promise.all([e.clashAxiosClient.get("/providers/proxies"), e.clashAxiosClient.get("/providers/rules")]));
              case 2:
                if (((i = t.sent), (n = o()(i, 2)), (s = n[0]), (r = s.status), (a = s.data), (l = void 0 === a ? {} : a), (c = n[1]), (d = c.status), (h = c.data), 200 === r)) {
                  for (g = l.providers, p = void 0 === g ? {} : g, f = [], m = 0, v = Object.entries(p); m < v.length; m++) ((_ = o()(v[m], 2)), _[0], (b = _[1]), f.push(k(k({}, b), {}, {
                    isChecking: !1,
                    isUpdating: !1,
                    message: ""
                  })));
                  e.providers = f.filter(function (e) {
                    return ["HTTP", "File"].includes(e.vehicleType);
                  });
                } else e.providers = [];
                if (200 === d) {
                  for (w = h.providers, y = void 0 === w ? {} : w, C = [], x = 0, S = Object.entries(y); x < S.length; x++) ((L = o()(S[x], 2)), L[0], (N = L[1]), C.push(k(k({}, N), {}, {
                    isUpdating: !1,
                    message: ""
                  })));
                  e.ruleProviders = C.filter(function (e) {
                    return ["HTTP", "File"].includes(e.vehicleType);
                  });
                } else e.ruleProviders = [];
              case 13:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      }
    },
    beforeRouteEnter: function (e, t, i) {
      i(function (e) {
        (e.fetchData(), (e.updateAbortCtl = new AbortController()), (e.healthCheckAbortCtl = new AbortController()));
      });
    },
    beforeRouteLeave: function (e, t, i) {
      (this.updateAbortCtl.abort(), this.healthCheckAbortCtl.abort(), i());
    }
  };
  i(99648);
  const N = (0, b.Z)(L, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return t("div", {
      staticClass: "main-provider-view"
    }, [t("div", {
      class: ["card"]
    }, [t("div", {
      staticClass: "header"
    }, [t("div", {
      staticClass: "buttons"
    }, [t("Button", {
      staticClass: "btn",
      style: {
        backgroundColor: e.updatingProvidersCount > 0 ? "#FF5F57" : ""
      },
      attrs: {
        text: e.updatingProvidersCount > 0 ? "Cancel ".concat(e.updatingProvidersCount, " Update").concat(1 === e.updatingProvidersCount ? "" : "s") : Lg.updateAll(),
        isLoading: !1
      },
      on: {
        click: e.handleAllProvidersUpdate
      }
    }), e._v(" "), e.providers.length > 0 ? t("Button", {
      staticClass: "btn",
      style: {
        backgroundColor: e.checkingProvidersCount > 0 ? "#FF5F57" : ""
      },
      attrs: {
        text: e.checkingProvidersCount > 0 ? "Cancel ".concat(e.checkingProvidersCount, " Check").concat(1 === e.checkingProvidersCount ? "" : "s") : Lg.healthCheckAll(),
        isLoading: !1
      },
      on: {
        click: e.handleAllProvidersHealthCheck
      }
    }) : e._e()], 1)]), e._v(" "), t("div", {
      ref: "mixin-scroll-content",
      staticClass: "content"
    }, [e.providers.length > 0 ? [t("div", {
      staticClass: "title"
    }, [e._v(Lg.proxyProviders())]), e._v(" "), t("div", {
      staticClass: "items"
    }, e._l(e.providers, function (i, n) {
      return t("div", {
        key: i.name,
        ref: "provider-".concat(n),
        refInFor: !0,
        staticClass: "provider-item"
      }, [t("div", {
        staticClass: "provider-item-main"
      }, [t("div", [t("div", {
        staticClass: "name-type"
      }, [t("div", {
        staticClass: "name"
      }, [e._v(e._s(i.name))])]), e._v(" "), t("div", {
        staticClass: "update-hint"
      }, [t("div", {
        staticClass: "type"
      }, [e._v("\n                    " + e._s(i.vehicleType) + " (" + e._s(i.proxies.length) + "\n                    Proxies) (" + e._s(e.fromNowString(i.updatedAt)) + ")\n                  ")])]), e._v(" "), t("div", {
        staticClass: "error-hint"
      }, [e._v(e._s(i.message))])]), e._v(" "), t("div", {
        staticClass: "empty"
      }), e._v(" "), t("Hint", {
        staticClass: "icon-btn",
        attrs: {
          hint: "Health check"
        },
        on: {
          click: function (t) {
            return e.handleHealthCheck(n);
          }
        }
      }, [t("span", {
        staticClass: "icon"
      }, [e._v("network_check")])]), e._v(" "), t("Hint", {
        staticClass: "icon-btn",
        attrs: {
          hint: "Edit file"
        },
        on: {
          click: function (t) {
            return e.handleEditProviderFile("proxy", i);
          }
        }
      }, [t("span", {
        staticClass: "icon"
      }, [e._v("code")])]), e._v(" "), "HTTP" === i.vehicleType ? t("Hint", {
        staticClass: "icon-btn",
        attrs: {
          hint: Lg.updateProvider()
        },
        on: {
          click: function (t) {
            return e.handleProviderUpdate(n);
          }
        }
      }, [t("span", {
        staticClass: "icon",
        class: {
          rotating: i.isUpdating
        }
      }, [e._v("refresh")])]) : e._e()], 1)]);
    }), 0)] : e._e(), e._v(" "), e.ruleProviders.length > 0 ? [t("div", {
      staticClass: "title"
    }, [e._v("Rule Providers")]), e._v(" "), t("div", {
      staticClass: "items"
    }, e._l(e.ruleProviders, function (i, n) {
      return t("div", {
        key: i.name,
        ref: "provider-".concat(n + e.providers.length),
        refInFor: !0,
        staticClass: "provider-item"
      }, [t("div", {
        staticClass: "provider-item-main"
      }, [t("div", [t("div", {
        staticClass: "name-type"
      }, [t("div", {
        staticClass: "name"
      }, [e._v("\n                    " + e._s(i.name) + "\n                  ")])]), e._v(" "), t("div", {
        staticClass: "update-hint"
      }, [t("div", {
        staticClass: "type"
      }, [e._v("\n                    " + e._s(i.vehicleType) + "\n                    " + e._s(i.behavior) + " (" + e._s(i.ruleCount) + " Rules)\n                    (" + e._s(e.fromNowString(i.updatedAt)) + ")\n                  ")])]), e._v(" "), t("div", {
        staticClass: "error-hint"
      }, [e._v(e._s(i.message))])]), e._v(" "), t("div", {
        staticClass: "empty"
      }), e._v(" "), t("Hint", {
        staticClass: "icon-btn",
        attrs: {
          hint: "Edit file"
        },
        on: {
          click: function (t) {
            return e.handleEditProviderFile("rule", i);
          }
        }
      }, [t("span", {
        staticClass: "icon"
      }, [e._v("code")])]), e._v(" "), t("Hint", {
        staticClass: "icon-btn",
        attrs: {
          hint: Lg.updateProvider()
        },
        on: {
          click: function (t) {
            return e.handleRuleProviderUpdate(n);
          }
        }
      }, [t("span", {
        staticClass: "icon",
        class: {
          rotating: i.isUpdating
        }
      }, [e._v("refresh")])])], 1)]);
    }), 0)] : e._e()], 2), e._v(" "), e.failedProvidersCount > 0 ? t("div", {
      staticClass: "fixed top-8 bg-opacity-80 right-2 bg-black px-3 py-1 text-white flex items-center gap-2 rounded text-sm clickable",
      on: {
        click: e.handleLocateFailedProvider
      }
    }, [t("span", {
      staticClass: "icon text-sm text-red-500"
    }, [e._v("error")]), e._v("\n      " + e._s(e.failedProvidersCount) + " error" + e._s(1 === e.failedProvidersCount ? "" : "s") + "\n    ")]) : e._e()])]);
  }, [], !1, null, "3e34584d", null).exports;
};