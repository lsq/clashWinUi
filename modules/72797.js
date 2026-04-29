const VERSION = "0.20.39 Opt-3";
const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z: () => Ne
  });
  var n = i(63038),
    o = i.n(n),
    s = i(48926),
    r = i.n(s),
    a = i(59713),
    l = i.n(a),
    c = i(87757),
    d = i.n(c),
    h = i(23321),
    u = i(71017),
    g = i.n(u),
    p = i(57147),
    f = i.n(p),
    m = i(10605),
    v = i.n(m),
    _ = i(71893),
    b = i.n(_),
    w = i(84695),
    y = i(86173),
    C = i.n(y);
  const x = require("zlib");
  var S = i.n(x);
  const k = require("tar-stream");
  var L = i.n(k),
    N = i(32081),
    D = i(33182),
    I = i(81518),
    E = i(24883),
    T = i(97520),
    M = i(11442),
    A = i.n(M),
    O = i(83566),
    P = i(72298),
    R = i(8369),
    F = i(71289);
  function B(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  const V = {
    props: [],
    data: function () {
      return {
        retries: 0,
        logs: "",
        intervalID: null
      };
    },
    computed: (function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2 ? B(Object(i), !0).forEach(function (t) {
          l()(e, t, i[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : B(Object(i)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
      }
      return e;
    })({}, (0, h.mapState)({
      clashPath: function (e) {
        return e.app.clashPath;
      },
      logFilePath: function (e) {
        return e.app.logFilePath;
      },
      errors: function (e) {
        return e.app.errors;
      }
    })),
    methods: {
      openLogsFolder: function (e) {
        this.$parent.$parent.showLogsFolder(!0);
      },
      openHomeDir: function () {
        this.clashPath && P.shell.openPath(this.clashPath);
      },
      autoFix: function (e) {
        var t = this;
        const Lg = new Language(modifyState.language);
        return r()(d().mark(function e() {
          var i;
          return d().wrap(function (e) {
            for (;;) switch ((e.prev = e.next)) {
              case 0:
                return ((e.next = 2), (0, R.vC)({
                  title: "Clash for Windows",
                  type: "warning",
                  message: Lg.pleaseConfirm(),
                  detail: Lg.cfgWillBeRemoved(),
                  buttons: [Lg.no(), lg.yes()]
                }));
              case 2:
                ((i = e.sent), 1 === i.response && t.$parent.autoFix());
              case 5:
              case "end":
                return e.stop();
            }
          }, e);
        }))();
      }
    },
    mounted: function () {
      var e = this,
        t = function () {
          const Lg = new Language(modifyState.language);
          e.retries += 1;
          if (e.clashPath && e.logFilePath) try {
            var t = (0, p.readFileSync)(e.logFilePath),
              i = t.toString().split("\n").filter(function (e) {
                return /level=fatal/.test(e);
              }).join("\n\n");
            i ? (e.logs = i) : e.errors.length > 0 && (e.logs = e.errors.join("\n"));
          } catch (e) {}
          e.retries > 3 && "" === e.logs && (e.logs = Lg.failedConnectCore());
        };
      ((this.intervalID = F.ZP.add(t, 2e3)), t());
    },
    beforeDestroy: function () {
      this.intervalID && (F.ZP.stop(this.intervalID), (this.intervalID = null));
    }
  };
  (i(63473), i(38245));
  var W = i(51900);
  const H = (0, W.Z)(V, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return t("div", {
      attrs: {
        id: "error-view-main"
      }
    }, [e.logs ? t("div", {
      staticClass: "error-hints"
    }, [t("div", {
      attrs: {
        id: "error-title"
      }
    }, [e._v(Lg.error())]), e._v(" "), t("div", {
      staticClass: "error-content"
    }, [e._v(e._s(e.logs))]), e._v(" "), t("div", {
      staticClass: "error-btns"
    }, [t("div", {
      staticClass: "error-hint",
      on: {
        click: e.openHomeDir
      }
    }, [e._v(Lg.homeDirectory())]), e._v(" "), t("div", {
      staticClass: "error-hint",
      on: {
        click: e.openLogsFolder
      }
    }, [e._v(Lg.logsFolder())]), e._v(" "), t("div", {
      staticClass: "error-hint",
      on: {
        click: e.autoFix
      }
    }, [e._v(Lg.tryRepair())])])]) : t("div", {
      staticClass: "loading-hint"
    }, [e._v(Lg.loading())])]);
  }, [], !1, null, "9ba71ad8", null).exports;
  var z = i(319),
    j = i.n(z),
    U = i(17285),
    $ = i(62639),
    K = i(12436);
  const q = {
    name: "EditListView",
    model: {
      prop: "list",
      event: "changed"
    },
    props: {
      list: {
        type: Array,
        default: function () {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      placeHolder: {
        type: String,
        default: ""
      }
    },
    data: function () {
      return {};
    },
    methods: {
      handleAddItem: function () {
        this.$emit("changed", [].concat(j()(this.list), [""]));
      },
      handleRemoveItem: function (e) {
        this.$emit("changed", [].concat(j()(this.list.slice(0, e)), j()(this.list.slice(e + 1))));
      },
      handleChangeItem: function (e, t) {
        this.$emit("changed", [].concat(j()(this.list.slice(0, t)), [e.target.value], j()(this.list.slice(t + 1))));
      }
    }
  };
  i(46918);
  const Z = (0, W.Z)(q, function () {
    var e = this,
      t = e._self._c;
    return t("div", {
      staticClass: "main-edit-list-view"
    }, [e._l(e.list, function (i, n) {
      return t("div", {
        key: n,
        staticClass: "item"
      }, [t("input", {
        staticClass: "rounded-br-none rounded-tr-none",
        attrs: {
          type: "text",
          disabled: e.disabled,
          placeholder: e.placeHolder
        },
        domProps: {
          value: i
        },
        on: {
          input: function (t) {
            return e.handleChangeItem(t, n);
          }
        }
      }), e._v(" "), e.disabled ? e._e() : t("div", {
        staticClass: "btn btn-remove clickable",
        on: {
          click: function (t) {
            return e.handleRemoveItem(n);
          }
        }
      }, [t("span", {
        staticClass: "icon text-white"
      }, [e._v("remove")])])]);
    }), e._v(" "), e.disabled ? e._e() : t("div", {
      staticClass: "btn btn-add clickable",
      on: {
        click: e.handleAddItem
      }
    }, [t("span", {
      staticClass: "icon text-[#41b883]"
    }, [e._v("add")])])], 2);
  }, [], !1, null, "3ea6d831", null).exports;
  var G = i(72574),
    Y = i(50008),
    Q = i.n(Y),
    X = i(6479),
    J = i.n(X);
  function ee(e) {
    var t = (function (e, t) {
      if ("object" !== Q()(e) || null === e) return e;
      var i = e[Symbol.toPrimitive];
      if (void 0 !== i) {
        var n = i.call(e, t || "default");
        if ("object" !== Q()(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" === Q()(t) ? t : String(t);
  }
  function te(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  function ie(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? te(Object(i), !0).forEach(function (t) {
        l()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : te(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  const ne = {
    name: "EditObjectView",
    model: {
      prop: "object",
      event: "changed"
    },
    props: {
      object: {
        type: Object,
        default: function () {}
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      valuePlaceHolder: {
        type: String,
        default: ""
      },
      keyPlaceHolder: {
        type: String,
        default: ""
      }
    },
    data: function () {
      return {
        addKey: ""
      };
    },
    computed: {},
    methods: {
      handleAddItem: function () {
        "" === this.addKey || this.addKey in this.object || (this.$emit("changed", ie(ie({}, this.object), {}, l()({}, this.addKey, ""))), (this.addKey = ""));
      },
      handleRemoveItem: function (e) {
        var t = this.object,
          i = (t[e], J()(t, [e].map(ee)));
        this.$emit("changed", i);
      },
      handleChangeValue: function (e, t) {
        var i = e.target.value;
        this.$emit("changed", ie(ie({}, this.object), {}, l()({}, t, i)));
      }
    }
  };
  i(60768);
  const oe = (0, W.Z)(ne, function () {
    var e = this,
      t = e._self._c;
    return t("div", {
      staticClass: "main-edit-object-view"
    }, [e._l(Object.entries(this.object), function (i) {
      var n = o()(i, 2),
        s = n[0],
        r = n[1];
      return t("div", {
        key: s,
        staticClass: "item gap-1"
      }, [t("div", {
        staticClass: "max-w-[120px] text-ellipsis overflow-hidden whitespace-normal flex-shrink-0",
        attrs: {
          title: s
        }
      }, [e._v("\n      " + e._s(s) + "\n    ")]), e._v(" "), t("span", [e._v(":")]), e._v(" "), t("input", {
        attrs: {
          type: "text",
          disabled: e.disabled,
          placeholder: e.valuePlaceHolder
        },
        domProps: {
          value: r
        },
        on: {
          input: function (t) {
            return e.handleChangeValue(t, s);
          }
        }
      }), e._v(" "), e.disabled ? e._e() : t("div", {
        staticClass: "btn btn-remove clickable flex-shrink-0",
        on: {
          click: function (t) {
            return e.handleRemoveItem(s);
          }
        }
      }, [t("span", {
        staticClass: "icon text-white"
      }, [e._v("remove")])])]);
    }), e._v(" "), e.disabled ? e._e() : t("div", {
      staticClass: "flex items-center gap-2",
      on: {
        click: e.handleAddItem
      }
    }, [t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.addKey,
        expression: "addKey"
      }],
      attrs: {
        type: "text",
        placeholder: e.keyPlaceHolder
      },
      domProps: {
        value: e.addKey
      },
      on: {
        input: function (t) {
          t.target.composing || (e.addKey = t.target.value);
        }
      }
    }), e._v(" "), t("span", {
      staticClass: "btn btn-add clickable icon text-[#41b883]"
    }, [e._v("add")])])], 2);
  }, [], !1, null, "352b843a", null).exports;
  function se(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  function re(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? se(Object(i), !0).forEach(function (t) {
        l()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : se(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  const ae = {
    name: "TunSettingsView",
    components: {
      SelectView: U.Z,
      SwitchView: $.Z,
      SimpleInput: K.Z,
      EditList: Z,
      EscCapture: G.Z,
      EditObject: oe
    },
    data: function () {
      return {
        ipv6: !1,
        stackType: 0,
        nameServers: [],
        fallbackServers: [],
        defaultNameservers: [],
        fakeIPFilters: [],
        nameserverPolicy: {},
        isAutoDetectInterface: !0,
        interfaceName: "",
        dnsHijacks: [],
        isAutoRedir: !1,
        isAutoRedirAutoRoute: !1
      };
    },
    computed: re(re({}, (0, h.mapState)({
      tunSettings: function (e) {
        return e.app.tunSettings;
      }
    })), {}, {
      obj: function () {
        return (0, R.Sr)(this.$data);
      },
      text: function () {
        return A().stringify(this.obj);
      }
    }),
    watch: {},
    methods: re(re({}, (0, h.mapMutations)({
      setTunSettings: "SET_TUN_SETTINGS"
    })), {}, {
      handleSave: function () {
        (this.setTunSettings({
          settings: this.$data
        }), this.$emit("close"));
      },
      handleReset: function () {
        var e = this;
        return r()(d().mark(function t() {
          return d().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                e.setupComponent({});
              case 1:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleOpenDocument: function () {
        P.shell.openExternal("https://web.archive.org/web/20231001060822/dreamacro.github.io/clash/configuration/configuration-reference.html");
      },
      setupComponent: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ipv6,
          i = e.nameServers,
          n = e.fallbackServers,
          o = e.defaultNameservers,
          s = e.fakeIPFilters,
          r = e.nameserverPolicy,
          a = e.stackType,
          l = e.isAutoDetectInterface,
          c = e.interfaceName,
          d = e.dnsHijacks,
          h = e.isAutoRedir,
          u = e.isAutoRedirAutoRoute;
        ((this.ipv6 = void 0 !== t && t), (this.stackType = [0, 1].includes(a) ? a : 0), (this.nameServers = i || ["8.8.8.8", "1.1.1.1", "94.140.14.14"]), (this.fallbackServers = n || []), (this.defaultNameservers = o || []), (this.fakeIPFilters = s || ["+.stun.*.*", "+.stun.*.*.*", "+.stun.*.*.*.*", "+.stun.*.*.*.*.*", "*.n.n.srv.nintendo.net", "+.stun.playstation.net", "xbox.*.*.microsoft.com", "*.*.xboxlive.com"].concat(j()((0, O.Kr)() ? ["*.msftncsi.com", "*.msftconnecttest.com", "WORKGROUP"] : (0, O.V5)() ? ["apps.apple.com"] : []))), (this.nameserverPolicy = r || {}), (this.isAutoDetectInterface = void 0 === l || l), (this.interfaceName = c || ""), (this.dnsHijacks = d || ["any:53"]), (this.isAutoRedir = void 0 !== h && h), (this.isAutoRedirAutoRoute = void 0 !== u && u));
      }
    }),
    mounted: function () {
      this.setupComponent(this.tunSettings || {});
    },
    beforeDestroy: function () {}
  };
  i(98803);
  const le = (0, W.Z)(ae, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return t("EscCapture", {
      staticClass: "main-tun-settings-view bg-[color:var(--mask-c)]",
      on: {
        esc: function (t) {
          return e.$emit("close");
        },
        mousedown: function (t) {
          return e.$emit("close");
        }
      }
    }, [t("div", {
      staticClass: "content bg-[color:var(--bgc)] text-[color:var(--fgc)]",
      on: {
        mousedown: function (e) {
          e.stopPropagation();
        }
      }
    }, [t("div", {
      staticClass: "title"
    }, [e._v(Lg.modeSettingsTUN())]), e._v(" "), t("div", {
      staticClass: "pannel"
    }, [t("div", {
      staticClass: "left border-[1px] border-[color:var(--bc)]"
    }, [t("div", {
      staticClass: "flex"
    }, [t("div", [e._v("DNS IPv6")]), e._v(" "), t("SwitchView", {
      model: {
        value: e.ipv6,
        callback: function (t) {
          e.ipv6 = t;
        },
        expression: "ipv6"
      }
    })], 1), e._v(" "), t("div", [t("div", [e._v(Lg.serversDNS())]), e._v(" "), t("EditList", {
      attrs: {
        placeHolder: Lg.eg() + "8.8.8.8"
      },
      model: {
        value: e.nameServers,
        callback: function (t) {
          e.nameServers = t;
        },
        expression: "nameServers"
      }
    })], 1), e._v(" "), t("div", [t("div", [e._v(Lg.fallbackDNSServers())]), e._v(" "), t("EditList", {
      attrs: {
        placeHolder: Lg.eg() + "8.8.8.8"
      },
      model: {
        value: e.fallbackServers,
        callback: function (t) {
          e.fallbackServers = t;
        },
        expression: "fallbackServers"
      }
    })], 1), e._v(" "), t("div", [t("div", [e._v(Lg.deaultNameserver())]), e._v(" "), t("EditList", {
      attrs: {
        placeHolder: Lg.eg() + "8.8.8.8"
      },
      model: {
        value: e.defaultNameservers,
        callback: function (t) {
          e.defaultNameservers = t;
        },
        expression: "defaultNameservers"
      }
    })], 1), e._v(" "), t("div", [t("div", [e._v(Lg.fakeIPFilter())]), e._v(" "), t("EditList", {
      attrs: {
        placeHolder: Lg.eg() + "*.lan"
      },
      model: {
        value: e.fakeIPFilters,
        callback: function (t) {
          e.fakeIPFilters = t;
        },
        expression: "fakeIPFilters"
      }
    })], 1), e._v(" "), t("div", [t("div", [e._v(Lg.nameserverPolicy())]), e._v(" "), t("EditObject", {
      attrs: {
        keyPlaceHolder: Lg.domain(),
        valuePlaceHolder: Lg.server()
      },
      model: {
        value: e.nameserverPolicy,
        callback: function (t) {
          e.nameserverPolicy = t;
        },
        expression: "nameserverPolicy"
      }
    })], 1), e._v(" "), t("div", [t("div", [e._v(Lg.hijacksDNS())]), e._v(" "), t("EditList", {
      attrs: {
        placeHolder: Lg.eg() + "any:53"
      },
      model: {
        value: e.dnsHijacks,
        callback: function (t) {
          e.dnsHijacks = t;
        },
        expression: "dnsHijacks"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "flex"
    }, [t("div", [e._v(Lg.stackTUN())]), e._v(" "), t("SelectView", {
      attrs: {
        items: ["gvisor", "system"]
      },
      model: {
        value: e.stackType,
        callback: function (t) {
          e.stackType = t;
        },
        expression: "stackType"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "flex"
    }, [t("div", [e._v(Lg.autoDetectInterface())]), e._v(" "), t("SwitchView", {
      model: {
        value: e.isAutoDetectInterface,
        callback: function (t) {
          e.isAutoDetectInterface = t;
        },
        expression: "isAutoDetectInterface"
      }
    })], 1), e._v(" "), e.isAutoDetectInterface ? e._e() : t("div", {
      staticClass: "flex"
    }, [t("div", [e._v(Lg.interfaceName())]), e._v(" "), t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.interfaceName,
        expression: "interfaceName"
      }],
      attrs: {
        type: "text"
      },
      domProps: {
        value: e.interfaceName
      },
      on: {
        input: function (t) {
          t.target.composing || (e.interfaceName = t.target.value);
        }
      }
    })]), e._v(" "), e.isLinux ? t("div", {
      staticClass: "flex"
    }, [t("div", [e._v("Auto Redir")]), e._v(" "), t("SwitchView", {
      model: {
        value: e.isAutoRedir,
        callback: function (t) {
          e.isAutoRedir = t;
        },
        expression: "isAutoRedir"
      }
    })], 1) : e._e(), e._v(" "), e.isLinux && e.isAutoRedir ? t("div", {
      staticClass: "flex"
    }, [t("div", [e._v("Auto Route(Auto Redir)")]), e._v(" "), t("SwitchView", {
      model: {
        value: e.isAutoRedirAutoRoute,
        callback: function (t) {
          e.isAutoRedirAutoRoute = t;
        },
        expression: "isAutoRedirAutoRoute"
      }
    })], 1) : e._e()]), e._v(" "), t("div", {
      staticClass: "right border-[1px] border-[color:var(--bc)]"
    }, [t("pre", [e._v(e._s(e.text))])])]), e._v(" "), t("div", {
      staticClass: "btns"
    }, [t("div", {
      staticClass: "btn clickable",
      on: {
        click: e.handleReset
      }
    }, [e._v(Lg.reset())]), e._v(" "), t("div", {
      staticClass: "btn clickable",
      on: {
        click: e.handleOpenDocument
      }
    }, [e._v(Lg.docs())]), e._v(" "), t("div", {
      staticClass: "btn clickable",
      on: {
        click: e.handleSave
      }
    }, [e._v(Lg.save())])])])]);
  }, [], !1, null, "b6dface2", null).exports;
  function ce(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  function de(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ce(Object(i), !0).forEach(function (t) {
        l()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ce(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  const he = {
    name: "ResetDNSSettingsView",
    components: {
      SelectView: U.Z,
      SwitchView: $.Z,
      SimpleInput: K.Z,
      EditList: Z,
      EscCapture: G.Z
    },
    data: function () {
      return {
        servers: [],
        isUsingCustom: !1
      };
    },
    computed: de({}, (0, h.mapState)({
      userDNS: function (e) {
        return e.app.userDNS;
      }
    })),
    watch: {},
    methods: de(de({}, (0, h.mapMutations)({})), {}, {
      handleSave: function () {
        ((this.settings.isUsingResetDNSServers = this.isUsingCustom), (this.settings.resetDNSServers = this.servers), this.$emit("close"));
      },
      setupComponent: function () {
        var e = this.settings,
          t = e.isUsingResetDNSServers,
          i = e.resetDNSServers;
        ((this.isUsingCustom = t), (this.servers = i));
      }
    }),
    mounted: function () {
      this.setupComponent();
    },
    beforeDestroy: function () {}
  };
  i(36594);
  const ue = (0, W.Z)(he, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return t("EscCapture", {
      staticClass: "main-tun-settings-view bg-[color:var(--mask-c)]",
      on: {
        esc: function (t) {
          return e.$emit("close");
        },
        mousedown: function (t) {
          return e.$emit("close");
        }
      }
    }, [t("div", {
      staticClass: "content bg-[color:var(--bgc)] text-[color:var(--fgc)]",
      on: {
        mousedown: function (e) {
          e.stopPropagation();
        }
      }
    }, [t("div", {
      staticClass: "title"
    }, [e._v(Lg.resetDNSSettings())]), e._v(" "), t("div", {
      staticClass: "font-normal mb-1 text-sm hint"
    }, [e._v("\n      If "), t("span", [e._v(Lg.enabled())]), e._v(", "), t("span", [e._v(Lg.customServers())]), e._v(" will be used to\n      reset the system DNS after TUN mode is disabled. Otherwise,\n      "), t("span", [e._v("Detected Servers")]), e._v("\n      will be used.\n    ")]), e._v(" "), t("div", {
      staticClass: "pannel"
    }, [t("div", {
      staticClass: "left border-[1px] border-[color:var(--bc)]"
    }, [t("div", {
      staticClass: "flex"
    }, [t("div", [e._v(Lg.enable())]), e._v(" "), t("SwitchView", {
      model: {
        value: e.isUsingCustom,
        callback: function (t) {
          e.isUsingCustom = t;
        },
        expression: "isUsingCustom"
      }
    })], 1), e._v(" "), t("div", [t("div", [e._v("Custom Servers:")]), e._v(" "), t("EditList", {
      model: {
        value: e.servers,
        callback: function (t) {
          e.servers = t;
        },
        expression: "servers"
      }
    })], 1)]), e._v(" "), t("div", {
      staticClass: "right border-[1px] border-[color:var(--bc)]"
    }, [t("div", [t("div", [e._v("Detected Servers:")]), e._v(" "), t("EditList", {
      attrs: {
        disabled: !0
      },
      model: {
        value: e.userDNS,
        callback: function (t) {
          e.userDNS = t;
        },
        expression: "userDNS"
      }
    })], 1)])]), e._v(" "), t("div", {
      staticClass: "btns"
    }, [t("div"), e._v(" "), t("div", {
      staticClass: "btn clickable",
      on: {
        click: e.handleSave
      }
    }, [e._v(Lg.save())])])])]);
  }, [], !1, null, "47896be6", null).exports;
  var ge = i(22037);
  const pe = {
    name: "InterfacesView",
    components: {
      EscCapture: G.Z,
      SelectView: U.Z
    },
    data: function () {
      return {
        interfaces: [],
        ipvIndex: 0
      };
    },
    computed: {
      ifs: function () {
        var e = this;
        return this.interfaces.reduce(function (t, i) {
          var n = i.name,
            o = i.addrs.filter(function (t) {
              return t.family === ["IPv4", "IPv6"][e.ipvIndex];
            });
          return (o.length > 0 && t.push({
            name: n,
            addrs: o
          }), t);
        }, []);
      }
    },
    mounted: function () {
      this.interfaces = Object.entries((0, ge.networkInterfaces)()).map(function (e) {
        var t = o()(e, 2);
        return {
          name: t[0],
          addrs: t[1]
        };
      });
    }
  };
  i(30145);
  const fe = (0, W.Z)(pe, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return t("EscCapture", {
      staticClass: "w-[calc(100%_-_170px)] h-[calc(100%_-_25px)] absolute top-[25px] left-[170px] bg-[color:var(--mask-c)] flex flex-col justify-center items-center",
      on: {
        esc: function (t) {
          return e.$emit("close");
        },
        mousedown: function (t) {
          return e.$emit("close");
        }
      }
    }, [t("div", {
      staticClass: "w-[500px] max-h-[500px] rounded bg-[color:var(--bgc)] text-[color:var(--fgc)] overflow-auto flex flex-col items-center",
      on: {
        mousedown: function (e) {
          e.stopPropagation();
        }
      }
    }, [t("div", {
      staticClass: "flex justify-between w-full bg-[color:var(--bgc)] px-5 py-3 border-[color:var(--bc)] border-b"
    }, [t("span", [e._v(Lg.networkInterfaces())]), e._v(" "), t("SelectView", {
      attrs: {
        items: ["IPv4", "IPv6"]
      },
      model: {
        value: e.ipvIndex,
        callback: function (t) {
          e.ipvIndex = t;
        },
        expression: "ipvIndex"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "list w-full flex-grow flex flex-col gap-2 px-5 py-4"
    }, e._l(e.ifs, function (i) {
      return t("div", {
        key: i.name,
        staticClass: "if-list rounded w-full"
      }, [t("span", {
        staticClass: "text-base w-full text-center"
      }, [e._v(e._s(i.name))]), e._v(" "), e._l(i.addrs, function (i) {
        return t("div", {
          key: i.address,
          staticClass: "text-sm flex flex-col",
          style: {
            color: i.internal ? "#D44545" : "#13AF42"
          }
        }, [t("div", {
          staticClass: "flex"
        }, [t("span", {
          staticClass: "w-[80px]"
        }, [e._v("Address:")]), e._v(" "), t("span", [e._v(e._s(i.address))])]), e._v(" "), t("div", {
          staticClass: "flex"
        }, [t("span", {
          staticClass: "w-[80px]"
        }, [e._v("Netmask:")]), e._v(" "), t("span", [e._v(e._s(i.netmask) + "\n              "), i.cidr ? t("span", [e._v("(" + e._s(i.cidr.split("/")[1]) + ")")]) : e._e()])]), e._v(" "), t("div", {
          staticClass: "flex"
        }, [t("span", {
          staticClass: "w-[80px]"
        }, [e._v("MAC:")]), e._v(" "), t("span", [e._v(e._s(i.mac))])])]);
      })], 2);
    }), 0)])]);
  }, [], !1, null, "d9b850ea", null).exports;
  var me = i(36336),
    ve = i(13338),
    _e = i(27458);
  function be(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  function we(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? be(Object(i), !0).forEach(function (t) {
        l()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : be(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  var ye = i(63878)("./service_".concat(process.platform)),
    Ce = (ye.status, ye.statusService, ye.needUpdate),
    xe = ye.updateService,
    Se = ye.installService,
    ke = ye.uninstallService;
  const Le = {
    components: {
      ErrorView: H,
      TunSettingsView: le,
      ResetDNSSettingsView: ue,
      InterfacesView: fe,
      SwitchView: $.Z,
      SelectView: U.Z,
      InfoIcon: me.Z,
      Hint: ve.Z
    },
    props: [],
    data: function () {
      return {
        iconPath: "static/imgs/logo2.png",
        title: "Clash for Windows",
        isAllowLan: !1,
        bindAddress: "",
        port: 0,
        logLevel: "unknow",
        isIPV6: !1,
        geoipUpdateTime: "",
        systemProxyLoading: !0,
        autoLaunch: E.Z.get(I.Z.AUTO_LAUNCH) || !1,
        autoLaunchLoading: !0,
        protableMode: !1,
        version: "",
        clashCoreVersion: "",
        serviceNeedUpdate: !1,
        isTunSettingsVisible: !1,
        isInterfacesVisible: !1,
        isFetchingFirewallRule: !1,
        isResetDNSSettingsVisible: !1
      };
    },
    watch: {
      status: function () {
        this.setupSwitches();
      },
      isWindowShow: function (e) {
        e && (this.setupComponent(), this.setupSwitches());
      },
      isLaunching: function (e) {
        e || this.setupComponent();
      },
      clashStatus: function (e) {
        e === D.Z.CONNECTED && this.setupComponent();
      },
      clashPath: function () {
        this.serviceNeedUpdate = Ce();
      }
    },
    computed: we(we(we({}, (0, h.mapState)({
      devMode: function (e) {
        return e.app.isDevMode;
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
      isMixinEnable: function (e) {
        return e.app.isMixinEnable;
      },
      isTunEnable: function (e) {
        return e.app.isTunEnable;
      },
      status: function (e) {
        return e.app.status;
      },
      isWindowShow: function (e) {
        return e.app.isWindowShow;
      },
      isLocalMode: function (e) {
        return e.app.isLocalMode;
      },
      isLaunching: function (e) {
        return e.app.isLaunching;
      },
      isSystemProxyOn: function (e) {
        return e.app.isSystemProxyOn;
      },
      isSilentUpgraded: function (e) {
        return e.app.isSilentUpgraded;
      },
      updateDownloadProgress: function (e) {
        return e.app.updateDownloadProgress;
      },
      isFirewallRuleExist: function (e) {
        return e.app.isFirewallRuleExist;
      },
      currentProfilePayload: function (e) {
        return e.app.currentProfilePayload;
      },
      matchedSSID: function (e) {
        return e.app.matchedSSID;
      }
    })), (0, h.mapGetters)(["resourcesPath", "filesPath", "mixedPort", "clashAxiosClient", "controllerPort", "secret"])), {}, {
      autoLaunchHint: function () {
        const Lg = new Language(modifyState.language);
        return (0, O.V5)() ? Lg.startWithMacOS() : (0, O.Kr)() ? Lg.startWithWindows() : (0, O.IJ)() ? Lg.startWithLinux() : void 0;
      },
      isShowNewIcon: function () {
        var e = this.settings.showNewVersionIcon,
          t = void 0 === e || e,
          i = this.$parent.newVersionInfo.url;
        return t && i;
      }
    }),
    methods: we(we({}, (0, h.mapMutations)({
      changeIsMixinEnable: "CHANGE_IS_MIXIN_ENABLE",
      changeIsTunEnable: "CHANGE_IS_TUN_ENABLE",
      setIsLocalMode: "SET_IS_LOCAL_MODE",
      setConfData: "SET_CONF_DATA",
      setIsSystemProxyOn: "SET_IS_SYSTEM_PROXY_ON",
      setIsFirewallRuleExist: "SET_IS_FIREWALL_RULE_EXIST"
    })), {}, {
      handleTitleClick: function () {
        P.ipcRenderer.invoke("window", "reload");
      },
      handleShowDNSQueryDialog: function () {
        this.$dns().catch(function (e) {});
      },
      handleShowScriptTestDialog: function () {
        this.$script({}).catch(function (e) {});
      },
      handlePreviewCurrentPayload: function () {
        this.$code({
          code: A().stringify(this.currentProfilePayload),
          readOnly: !0
        }).catch(function (e) {});
      },
      handleAddFirewallRules: function () {
        var e = this;
        return r()(d().mark(function t() {
          return d().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                if (!e.isFetchingFirewallRule) {
                  t.next = 2;
                  break;
                }
                return t.abrupt("return");
              case 2:
                if (((e.isFetchingFirewallRule = !0), (t.prev = 3), !e.isFirewallRuleExist)) {
                  t.next = 9;
                  break;
                }
                return ((t.next = 7), (0, _e.A7)());
              case 7:
                t.next = 11;
                break;
              case 9:
                return ((t.next = 11), (0, _e.Kz)());
              case 11:
                t.next = 15;
                break;
              case 13:
                ((t.prev = 13), (t.t0 = t.catch(3)));
              case 15:
                return ((t.t1 = e), (t.next = 18), (0, _e.Qz)());
              case 18:
                ((t.t2 = t.sent), (t.t3 = {
                  isExist: t.t2
                }), t.t1.setIsFirewallRuleExist.call(t.t1, t.t3), (e.isFetchingFirewallRule = !1));
              case 22:
              case "end":
                return t.stop();
            }
          }, t, null, [[3, 13]]);
        }))();
      },
      handleEditMixin: function () {
        var e = this;
        const defMixin = 'mixin: # object\n  dns:\n    enable: true\n    listen: :53\n    enhanced-mode: fake-ip\n    nameserver:\n      - 8.8.8.8\n    fallback:\n      - 8.8.4.4\n    fake-ip-filter:\n      - +.stun.*.*\n      - +.stun.*.*.*\n      - +.stun.*.*.*.*\n      - +.stun.*.*.*.*.*\n      - " *.n.n.srv.nintendo.net"\n      - +.stun.playstation.net\n      - xbox.*.*.microsoft.com\n      - "*.*.xboxlive.com"\n      - "*.msftncsi.com"\n      - "*.msftconnecttest.com"\n      - WORKGROUP\n';
        return r()(d().mark(function t() {
          var i, n, o, s, r, a, l, c, h, u;
          return d().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((i = e.settings), (n = i.mixinText), (o = void 0 === n ? defMixin : n), (s = i.mixinType), (r = void 0 === s ? 0 : s), (a = i.mixinCode), (l = void 0 === a ? "module.exports.parse = ({ content, name, url }, { yaml, axios, notify }) => {\n  return content\n}" : a), (t.prev = 1), (t.next = 4), e.$code({
                  code: 0 === r ? o : l,
                  language: 0 === r ? "yaml" : "javascript",
                  fontSize: e.settings.editorFontSize
                }));
              case 4:
                ((c = t.sent), (h = c.code), (u = void 0 === h ? "" : h) !== (0 === r ? o : l) && (0 === r ? (e.settings.mixinText = u) : (e.settings.mixinCode = u)), (t.next = 12));
                break;
              case 10:
                ((t.prev = 10), (t.t0 = t.catch(1)));
              case 12:
              case "end":
                return t.stop();
            }
          }, t, null, [[1, 10]]);
        }))();
      },
      handleEditSSIDStrategyText: function () {
        var e = this;
        return r()(d().mark(function t() {
          var i, n, o, s;
          return d().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((i = e.settings.ssidStrategyText), (t.prev = 1), (t.next = 4), e.$code({
                  code: i,
                  language: "yaml",
                  fontSize: e.settings.editorFontSize
                }));
              case 4:
                ((n = t.sent), (o = n.code), (s = void 0 === o ? "" : o) !== i && ((e.settings.ssidStrategyText = s), e.$parent.setSSIDOptions()), (t.next = 12));
                break;
              case 10:
                ((t.prev = 10), (t.t0 = t.catch(1)));
              case 12:
              case "end":
                return t.stop();
            }
          }, t, null, [[1, 10]]);
        }))();
      },
      installService: function () {
        var e = this;
        const Lg = new Language(modifyState.language);
        return r()(d().mark(function t() {
          var i, n, s, r, a, l, c;
          return d().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((i = [Lg.install(), Lg.uninstall()]), e.serviceNeedUpdate && i.push(Lg.update()), (t.next = 4), e.$select({
                  title: Lg.serviceManagement(),
                  message: Lg.serviceManagementDescribe().concat(e.isLocalMode ? Lg.inactive() : Lg.active()),
                  items: i,
                  subSelectItems: (0, O.Kr)() ? ["schtasks(" + Lg.recommended() + ")", "winsw"] : [],
                  subSelectTitle: Lg.installMethod()
                }));
              case 4:
                if (((n = t.sent), (s = o()(n, 2)), (r = s[0]), (a = s[1]), (t.prev = 8), 0 !== r)) {
                  t.next = 17;
                  break;
                }
                if (e.isLocalMode) {
                  t.next = 14;
                  break;
                }
                return ((t.next = 13), (0, R.vC)({
                  type: "error",
                  message: "The service is already installed."
                }));
              case 13:
                return t.abrupt("return");
              case 14:
                return ((t.next = 16), Se(a));
              case 16:
                e.devMode || e.reloadElectron();
              case 17:
                if (1 !== r) {
                  t.next = 21;
                  break;
                }
                return ((t.next = 20), ke());
              case 20:
                e.devMode || e.reloadElectron();
              case 21:
                if (2 !== r) {
                  t.next = 25;
                  break;
                }
                return ((t.next = 24), xe());
              case 24:
                e.devMode || e.reloadElectron();
              case 25:
                t.next = 35;
                break;
              case 27:
                return ((t.prev = 27), (t.t0 = t.catch(8)), (t.next = 31), e.$select({
                  title: Lg.failTo().concat(i[r].toLowerCase(), Lg.serviceMode()),
                  message: t.t0.message,
                  items: [Lg.reloadAPP(), Lg.cancel()]
                }));
              case 31:
                ((l = t.sent), (c = o()(l, 1)), 0 === c[0] && e.reloadElectron());
              case 35:
              case "end":
                return t.stop();
            }
          }, t, null, [[8, 27]]);
        }))();
      },
      handleAllowLANChange: function () {
        var e = this;
        return r()(d().mark(function t() {
          var i;
          return d().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((i = !e.isAllowLan), (t.next = 3), e.clashAxiosClient.patch("/configs", {
                  "allow-lan": i
                }));
              case 3:
                if (204 !== t.sent.status) {
                  t.next = 9;
                  break;
                }
                return ((e.isAllowLan = i), (t.next = 8), (0, R.F0)(g().join(e.clashPath, "config.yaml"), "allow-lan", i));
              case 8:
                e.setConfData({
                  data: we(we({}, e.confData), {}, {
                    "allow-lan": i
                  })
                });
              case 9:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleIPV6Change: function () {
        var e = this;
        return r()(d().mark(function t() {
          var i, n;
          return d().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((i = !e.isIPV6), (t.next = 3), e.clashAxiosClient.patch("/configs", {
                  ipv6: i
                }));
              case 3:
                if (((n = t.sent), 204 !== n.status)) {
                  t.next = 10;
                  break;
                }
                return ((e.isIPV6 = i), (t.next = 9), (0, R.F0)(g().join(e.clashPath, "config.yaml"), "ipv6", i));
              case 9:
                e.setConfData({
                  data: we(we({}, e.confData), {}, {
                    ipv6: i
                  })
                });
              case 10:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleEditLogLevel: function () {
        var e = this;
        const Lg = new Language(modifyState.language);
        return r()(d().mark(function t() {
          var i, n, s, r, a, l;
          return d().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.prev = 0), (i = ["silent", "error", "warning", "info", "debug"]), (t.next = 4), e.$select({
                  title: Lg.changeLogLevel(),
                  message: Lg.silentDescribe(),
                  items: Lg.logLevelSelection()
                }));
              case 4:
                return ((n = t.sent), (s = o()(n, 1)), (r = s[0]), (a = i[r]), (t.next = 10), e.clashAxiosClient.patch("/configs", {
                  "log-level": a
                }));
              case 10:
                if (((l = t.sent), 204 !== l.status)) {
                  t.next = 17;
                  break;
                }
                return ((e.logLevel = a), (t.next = 16), (0, R.F0)(g().join(e.clashPath, "config.yaml"), "log-level", a));
              case 16:
                e.setConfData({
                  data: we(we({}, e.confData), {}, {
                    "log-level": a
                  })
                });
              case 17:
                t.next = 21;
                break;
              case 19:
                ((t.prev = 19), (t.t0 = t.catch(0)));
              case 21:
              case "end":
                return t.stop();
            }
          }, t, null, [[0, 19]]);
        }))();
      },
      handleMixinSwitchClick: function (e) {
        var t = this;
        return r()(d().mark(function e() {
          return d().wrap(function (e) {
            for (;;) switch ((e.prev = e.next)) {
              case 0:
                t.changeIsMixinEnable({
                  isMixin: !t.isMixinEnable
                });
              case 1:
              case "end":
                return e.stop();
            }
          }, e);
        }))();
      },
      handleTunSwitchClick: function (e) {
        var t = this;
        return r()(d().mark(function e() {
          return d().wrap(function (e) {
            for (;;) switch ((e.prev = e.next)) {
              case 0:
                t.changeIsTunEnable({
                  isTun: !t.isTunEnable
                });
              case 1:
              case "end":
                return e.stop();
            }
          }, e);
        }))();
      },
      handleSystemProxySwitchClick: function () {
        var e = this;
        const Lg = new Language(this.settings.language);
        return r()(d().mark(function t() {
          var i, n, s, r, a;
          return d().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                if (!e.systemProxyLoading) {
                  t.next = 2;
                  break;
                }
                return t.abrupt("return");
              case 2:
                return ((e.systemProxyLoading = !0), (i = !e.isSystemProxyOn), (t.next = 6), e.$setSystemProxy(i, e.confData));
              case 6:
                if (!t.sent) {
                  t.next = 11;
                  break;
                }
                (e.setIsSystemProxyOn({
                  isOn: i
                }), (t.next = 37));
                break;
              case 11:
                if (!(0, O.V5)() || !e.isLocalMode) {
                  t.next = 37;
                  break;
                }
                return ((t.next = 14), (0, R.vC)({
                  type: "error",
                  message: Lg.makeSureYouHave().concat(e.serviceNeedUpdate ? Lg.updated() : Lg.installed(), " " + Lg.serviceModeCtrlSysProxy()),
                  buttons: ["".concat(e.serviceNeedUpdate ? Lg.update() : Lg.install(), " " + Lg.now()), "Later"]
                }));
              case 14:
                if (((n = t.sent), (s = n.response), (t.prev = 16), 0 !== s)) {
                  t.next = 27;
                  break;
                }
                if (!e.serviceNeedUpdate) {
                  t.next = 24;
                  break;
                }
                return ((t.next = 21), xe());
              case 21:
                (e.$parent.devMode || e.reloadElectron(), (t.next = 27));
                break;
              case 24:
                return ((t.next = 26), Se());
              case 26:
                e.$parent.devMode || e.reloadElectron();
              case 27:
                t.next = 37;
                break;
              case 29:
                return ((t.prev = 29), (t.t0 = t.catch(16)), (t.next = 33), e.$select({
                  title: Lg.failTo().concat(e.serviceNeedUpdate ? Lg.update() : Lg.install(), " " + Lg.server()),
                  message: t.t0.message,
                  items: [Lg.reloadAPP(), Lg.cancel()]
                }));
              case 33:
                ((r = t.sent), (a = o()(r, 1)), 0 === a[0] && e.reloadElectron());
              case 37:
                e.systemProxyLoading = !1;
              case 38:
              case "end":
                return t.stop();
            }
          }, t, null, [[16, 29]]);
        }))();
      },
      handleAutoLaunchSwitchClick: function () {
        var e = this;
        return r()(d().mark(function t() {
          var i;
          return d().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                if (((i = !e.autoLaunch), !e.autoLaunchLoading)) {
                  t.next = 3;
                  break;
                }
                return t.abrupt("return");
              case 3:
                ((e.autoLaunchLoading = !0), e.$setAutoLaunch(i), (e.autoLaunch = i), E.Z.put(I.Z.AUTO_LAUNCH, i), (e.autoLaunchLoading = !1));
              case 8:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      installTapDevice: function (e) {
        var t = this;
        const Lg = new Language(modifyState.language);
        return r()(d().mark(function e() {
          var i, n, s, r, a, l, c, h, u, g;
          return d().wrap(function (e) {
            for (;;) switch ((e.prev = e.next)) {
              case 0:
                if (!(0, O.Kr)()) {
                  e.next = 49;
                  break;
                }
                return ((e.prev = 1), (e.next = 4), t.$select({
                  title: Lg.TAPdeviceManagement(),
                  message: Lg.TAPinstallDescribe(),
                  items: [Lg.install(), Lg.uninstall(), Lg.customize()]
                }));
              case 4:
                if (((i = e.sent), (n = o()(i, 1)), 0 !== (s = n[0]))) {
                  e.next = 20;
                  break;
                }
                return ((e.prev = 8), (e.next = 11), t.$parent.setupTapDevice(!0));
              case 11:
                ((0, R.c0)(Lg.success(), Lg.tapDeviceInstalled(), !0), (t.isMixinEnable || t.isTunEnable) && t.$parent.refreshProfile(), (e.next = 18));
                break;
              case 15:
                ((e.prev = 15), (e.t0 = e.catch(8)), (0, R.c0)(Lg.failed(), Lg.notInstallTapDevice(), !0));
              case 18:
                e.next = 45;
                break;
              case 20:
                if (1 !== s) {
                  e.next = 32;
                  break;
                }
                return ((e.prev = 21), (e.next = 24), t.$parent.setupTapDevice(!1));
              case 24:
                ((0, R.c0)(Lg.success(), Lg.tapDeviceRemoved(), !0), (e.next = 30));
                break;
              case 27:
                ((e.prev = 27), (e.t1 = e.catch(21)), (0, R.c0)(Lg.failed(), Lg.notRemoveTapDevice(), !0));
              case 30:
                e.next = 45;
                break;
              case 32:
                if (2 !== s) {
                  e.next = 45;
                  break;
                }
                return ((a = null !== (r = E.Z.get(I.Z.TAP_INFO)) && void 0 !== r ? r : {}), (l = a.ip), (c = a.subnet), (h = a.gateway), (u = [{
                  name: Lg.IPaddress(),
                  key: "ip",
                  placeholder: "10.0.0.1",
                  value: null != l ? l : ""
                }, {
                  name: Lg.subnetMask(),
                  key: "subnet",
                  placeholder: "255.255.255.0",
                  value: null != c ? c : ""
                }, {
                  name: Lg.defaultGateway(),
                  key: "gateway",
                  placeholder: "10.0.0.0",
                  value: null != h ? h : ""
                }]), (e.prev = 35), (e.next = 38), t.$input({
                  title: Lg.deviceTAP(),
                  data: u,
                  hint: Lg.reinstallDescribeWithTAP()
                }));
              case 38:
                ((g = e.sent), E.Z.put(I.Z.TAP_INFO, g), (e.next = 44));
                break;
              case 42:
                ((e.prev = 42), (e.t2 = e.catch(35)));
              case 44:
                t.installTapDevice();
              case 45:
                e.next = 49;
                break;
              case 47:
                ((e.prev = 47), (e.t3 = e.catch(1)));
              case 49:
              case "end":
                return e.stop();
            }
          }, e, null, [[1, 47], [8, 15], [21, 27], [35, 42]]);
        }))();
      },
      openCmdWithProxy: function () {
        var e = this;
        const Lg = new Language(modifyState.language);
        return r()(d().mark(function t() {
          var n, s, r, a, l;
          return d().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                if (((t.prev = 0), !(0, O.V5)() && !(0, O.IJ)())) {
                  t.next = 5;
                  break;
                }
                (e.handlePortClick(), (t.next = 13));
                break;
              case 5:
                if (!(0, O.Kr)()) {
                  t.next = 13;
                  break;
                }
                return ((t.next = 8), e.$select({
                  title: Lg.openTerminalSetProxy(),
                  message: Lg.selectTterminal(),
                  items: ["CMD", "Powershell", "Windows Terminal", Lg.copyCommandsOnly()],
                  checkList: [{
                    key: Lg.runAsAdmin(),
                    value: !1
                  }]
                }));
              case 8:
                ((n = t.sent), (s = o()(n, 2)), (r = s[0]), (a = s[1]), 3 === r ? e.handlePortClick() : ((l = ["cmd", "powershell", "wt"]), (a[0].value ? i(72378).exec : N.exec)("start ".concat(l[r]), {
                  cwd: e.$parent.userPath,
                  windowsHide: !0,
                  env: {
                    http_proxy: "http://127.0.0.1:".concat(e.port),
                    https_proxy: "http://127.0.0.1:".concat(e.port)
                  }
                })));
              case 13:
                t.next = 17;
                break;
              case 15:
                ((t.prev = 15), (t.t0 = t.catch(0)));
              case 17:
              case "end":
                return t.stop();
            }
          }, t, null, [[0, 15]]);
        }))();
      },
      handleEditMixedPort: function () {
        var e = this;
        const Lg = new Language(modifyState.language);
        return r()(d().mark(function t() {
          var i, n, o;
          return d().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((i = [{
                  name: Lg.newPort(),
                  key: "port",
                  placeholder: e.port,
                  value: "",
                  validate: function (e) {
                    return /^\d+$/.test(e) && 1 * e >= 0 && 1 * e <= 65353 ? "" : "Port must be an integer between 0 to 65353";
                  }
                }]), (t.prev = 1), (t.next = 4), e.$input({
                  title: Lg.changeMixedPort(),
                  data: i,
                  hint: "mixed = http + socks"
                }));
              case 4:
                if (((n = t.sent), !(o = n.port))) {
                  t.next = 15;
                  break;
                }
                return ((t.next = 9), e.clashAxiosClient.patch("/configs", {
                  "mixed-port": 1 * o
                }));
              case 9:
                if (204 !== t.sent.status) {
                  t.next = 15;
                  break;
                }
                return ((e.port = 1 * o), (t.next = 14), (0, R.F0)(g().join(e.clashPath, "config.yaml"), "mixed-port", 1 * o));
              case 14:
                e.setConfData({
                  data: we(we({}, e.confData), {}, {
                    "mixed-port": 1 * o
                  })
                });
              case 15:
                t.next = 19;
                break;
              case 17:
                ((t.prev = 17), (t.t0 = t.catch(1)));
              case 19:
                e.setupComponent();
              case 20:
              case "end":
                return t.stop();
            }
          }, t, null, [[1, 17]]);
        }))();
      },
      handleEditBindAddress: function () {
        var e = this;
        const Lg = new Language(modifyState.language);
        return r()(d().mark(function t() {
          var i, n, o;
          return d().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((i = [{
                  name: Lg.newBindAddress(),
                  key: "address",
                  placeholder: e.bindAddress,
                  value: "",
                  validate: function (e) {
                    return "";
                  }
                }]), (t.prev = 1), (t.next = 4), e.$input({
                  title: Lg.changeBindAddress(),
                  data: i,
                  hint: Lg.changeBindAddressDescribe()
                }));
              case 4:
                if (((n = t.sent), !(o = n.address))) {
                  t.next = 15;
                  break;
                }
                return ((t.next = 9), e.clashAxiosClient.patch("/configs", {
                  "bind-address": o
                }));
              case 9:
                if (204 !== t.sent.status) {
                  t.next = 15;
                  break;
                }
                return ((e.bindAddress = o), (t.next = 14), (0, R.F0)(g().join(e.clashPath, "config.yaml"), "bind-address", o));
              case 14:
                e.setConfData({
                  data: we(we({}, e.confData), {}, {
                    "bind-address": o
                  })
                });
              case 15:
                t.next = 19;
                break;
              case 17:
                ((t.prev = 17), (t.t0 = t.catch(1)));
              case 19:
                e.setupComponent();
              case 20:
              case "end":
                return t.stop();
            }
          }, t, null, [[1, 17]]);
        }))();
      },
      handleCopyControllerURL: function () {
        P.shell.openExternal("https://clash.razord.top/#/?host=127.0.0.1&port=".concat(this.controllerPort, "&secret=").concat(encodeURIComponent(this.secret)));
      },
      spawnLoopback: function (e) {
        if ((0, O.Kr)()) {
          var t = g().join(this.filesPath, "win", "common");
          P.shell.openPath(g().join(t, "EnableLoopback.exe"));
        }
      },
      openGithubRelease: function () {
        var e = this;
        const Lg = new Language(modifyState.language);
        return r()(d().mark(function t() {
          var n, s, a;
          return d().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                if (!(0, O.V5)() || !e.isSilentUpgraded) {
                  t.next = 10;
                  break;
                }
                return ((t.next = 3), e.$select({
                  title: Lg.automaticUpgradeCompleted(),
                  message: Lg.askRestartAPP(),
                  items: [Lg.restart(), Lg.cancel()]
                }));
              case 3:
                if (((n = t.sent), (s = o()(n, 1)), 0 !== s[0])) {
                  t.next = 9;
                  break;
                }
                return ((t.next = 9), e.reloadElectron());
              case 9:
                return t.abrupt("return");
              case 10:
                return ((a = (function () {
                  var t = r()(d().mark(function t(n) {
                    var s, r, a, l, c, h, u, g, p, f, m, v, _, b, y, x;
                    return d().wrap(function (t) {
                      for (;;) switch ((t.prev = t.next)) {
                        case 0:
                          return ((s = e.$parent.newVersionInfo), (r = s.url), (a = s.version), (l = s.log), (c = s.isPortable), (h = void 0 !== c && c), (u = s.reactions), (g = s.reactionClick), (t.next = 3), P.ipcRenderer.invoke("app", "getAppPath"));
                        case 3:
                          if (((p = t.sent.startsWith(process.env.ProgramFiles)), !r)) {
                            t.next = 36;
                            break;
                          }
                          return ((t.next = 7), e.$select({
                            title: "".concat(a, Lg.hadBeenReleased()),
                            html: l,
                            reactions: u,
                            reactionClick: g,
                            items: [h || (0, O.IJ)() ? "" : Lg.update(), Lg.download(), Lg.copyURL(), Lg.cancel()]
                          }));
                        case 7:
                          if (((f = t.sent), (m = o()(f, 1)), 0 !== (v = m[0]))) {
                            t.next = 33;
                            break;
                          }
                          if (null === e.updateDownloadProgress) {
                            t.next = 13;
                            break;
                          }
                          return t.abrupt("return");
                        case 13:
                          return ((t.next = 15), (0, w._)(r, a).catch(function (e) {
                            C().info(Lg.upgradeFailedWithErr().concat(e));
                          }));
                        case 15:
                          if (((_ = t.sent), C().info("upgrade asset path: ".concat(_)), !(0, O.V5)())) {
                            t.next = 25;
                            break;
                          }
                          return ((t.next = 20), (0, R.vC)({
                            type: "info",
                            message: Lg.updatedThenRestartAsk(),
                            buttons: [Lg.no(), Lg.yes()]
                          }));
                        case 20:
                          if (((b = t.sent), 1 !== b.response)) {
                            t.next = 25;
                            break;
                          }
                          return ((t.next = 25), e.reloadElectron());
                        case 25:
                          if (!(0, O.Kr)()) {
                            t.next = 31;
                            break;
                          }
                          return ((t.next = 28), (0, R.vC)({
                            type: "info",
                            message: Lg.downloadDoneRunAsk(),
                            buttons: [Lg.no(), Lg.yes()]
                          }));
                        case 28:
                          ((y = t.sent), 1 === y.response && (p ? i(72378).exec("".concat(_, " /S")) : ((x = function () {
                            try {
                              (0, N.spawnSync)(_, ["/S"], {
                                detached: !0,
                                windowsHide: !0
                              });
                            } catch (e) {}
                          })(), setInterval(x, 2e3))));
                        case 31:
                          t.next = 34;
                          break;
                        case 33:
                          1 === v ? P.shell.openExternal(r) : 2 === v && P.clipboard.writeText(r);
                        case 34:
                          t.next = 37;
                          break;
                        case 36:
                          e.$alert({
                            title: Lg.nowVersionUpToDate(),
                            content: Lg.nowVersionUpToDateDescribe()
                          });
                        case 37:
                        case "end":
                          return t.stop();
                      }
                    }, t);
                  }));
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })()), (t.next = 13), e.$parent.checkForUpdate());
              case 13:
                return ((t.next = 15), a());
              case 15:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleHomeDirectoryOpen: function () {
        P.shell.openPath(g().resolve(this.clashPath));
      },
      handleGeoipDatabaseUpdate: function () {
        this.updateGeoipDB();
      },
      handlePortClick: function () {
        var e = this;
        const Lg = new Language(modifyState.language);
        return r()(d().mark(function t() {
          var i, n, s, a, l;
          return d().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                if (((n = (function () {
                  var t = r()(d().mark(function t(i) {
                    var n, o, s, r;
                    return d().wrap(function (t) {
                      for (;;) switch ((t.prev = t.next)) {
                        case 0:
                          return ((n = E.Z.get(I.Z.SYSTEM_PROXY_COMMAND)), (o = [{
                            name: "",
                            key: "command",
                            placeholder: "",
                            value: n || i
                          }]), (t.next = 4), e.$input({
                            title: Lg.copyCommand(),
                            data: o,
                            hint: "",
                            confirmText: "Copy"
                          }).catch(function (e) {}));
                        case 4:
                          return ((s = t.sent), (r = s.command), E.Z.put(I.Z.SYSTEM_PROXY_COMMAND, r || ""), t.abrupt("return", (r || "").replace(/%mixedPort%/g, e.port).replace(/%(.+?)%/g, function (e) {
                            console.log(e.slice(1, -1));
                            var t = ((0, T.r)().find(function (t) {
                              return (t.name === e.slice(1, -1));
                            }) || {}).address;
                            return void 0 === t ? "" : t;
                          })));
                        case 8:
                        case "end":
                          return t.stop();
                      }
                    }, t);
                  }));
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })()), !(0, O.V5)() && !(0, O.IJ)())) {
                  t.next = 7;
                  break;
                }
                return ((t.next = 4), n("export https_proxy=http://127.0.0.1:%mixedPort%;export http_proxy=http://127.0.0.1:%mixedPort%;export all_proxy=socks5://127.0.0.1:%mixedPort%"));
              case 4:
                ((i = t.sent), (t.next = 29));
                break;
              case 7:
                if (!(0, O.Kr)()) {
                  t.next = 29;
                  break;
                }
                return ((t.prev = 8), (t.next = 11), e.$select({
                  title: Lg.copyProxySettingCommands(),
                  message: Lg.selectTterminal(),
                  items: ["CMD", "Powershell", Lg.custom()]
                }));
              case 11:
                if (((s = t.sent), (a = o()(s, 1)), 0 !== (l = a[0]))) {
                  t.next = 18;
                  break;
                }
                ((i = "set http_proxy=http://127.0.0.1:".concat(e.port, " & set https_proxy=http://127.0.0.1:").concat(e.port)), (t.next = 25));
                break;
              case 18:
                if (1 !== l) {
                  t.next = 22;
                  break;
                }
                ((i = '$Env:http_proxy="http://127.0.0.1:'.concat(e.port, '";$Env:https_proxy="http://127.0.0.1:').concat(e.port, '"')), (t.next = 25));
                break;
              case 22:
                return ((t.next = 24), n("export https_proxy=http://127.0.0.1:%mixedPort%;export http_proxy=http://127.0.0.1:%mixedPort%;export all_proxy=socks5://127.0.0.1:%mixedPort%"));
              case 24:
                i = t.sent;
              case 25:
                t.next = 29;
                break;
              case 27:
                ((t.prev = 27), (t.t0 = t.catch(8)));
              case 29:
                i && (P.clipboard.writeText(i), (0, R.c0)(Lg.cmmandsInCopied() + "!", i, !0));
              case 30:
              case "end":
                return t.stop();
            }
          }, t, null, [[8, 27]]);
        }))();
      },
      autoFix: function () {
        var e = this;
        return r()(d().mark(function t() {
          return d().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                try {
                  f().unlinkSync(g().join(e.clashPath, "config.yaml"));
                } catch (e) {}
                try {
                  f().unlinkSync(g().join(e.clashPath, "country.mmdb"));
                } catch (e) {}
                return ((t.next = 4), e.reloadElectron());
              case 4:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      updateGeoipDB: function () {
        var e = this;
        const Lg = new Language(modifyState.language);
        return r()(d().mark(function t() {
          var i, n, o, s, r, a, l, c, h, u, p, m, v, _, w, y, C;
          return d().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                if (!(0, O.Kr)()) {
                  t.next = 3;
                  break;
                }
                return (e.$alert({
                  content: Lg.updatingDbNotAllowedCFW(),
                  title: "Note"
                }), t.abrupt("return"));
              case 3:
                if (((i = e.geoipUpdateTime), !/^Updating/.test(e.geoipUpdateTime))) {
                  t.next = 6;
                  break;
                }
                return t.abrupt("return");
              case 6:
                return ((n = [{
                  name: "MaxMind User License Key",
                  key: "token",
                  placeholder: "",
                  value: E.Z.get(I.Z.GEOIP_TOKEN) || ""
                }, {
                  name: "URL",
                  key: "url",
                  placeholder: "",
                  value: E.Z.get(I.Z.GEOIP_URL) || "https://github.com/Dreamacro/maxmind-geoip/releases/latest/download/Country.mmdb"
                }]), (t.prev = 7), (t.next = 10), e.$input({
                  title: Lg.updateDbGeoIP(),
                  data: n,
                  hint: Lg.inputFieldAlternative()
                }));
              case 10:
                if (((o = t.sent), (s = o.url), (r = void 0 === s ? "" : s), (a = o.token), (l = void 0 === a ? "" : a), E.Z.put(I.Z.GEOIP_TOKEN, l), E.Z.put(I.Z.GEOIP_URL, r), e.clashPath)) {
                  t.next = 19;
                  break;
                }
                return t.abrupt("return");
              case 19:
                if (((c = function (t, i) {
                  (f().ftruncateSync(f().openSync(t, "r+"), i), e.$parent.handlerRestartClash());
                }), !l)) {
                  t.next = 39;
                  break;
                }
                return ((e.geoipUpdateTime = Lg.updating() + "... (0%)"), (t.t0 = g()), (t.next = 25), P.ipcRenderer.invoke("app", "getPath", "temp"));
              case 25:
                ((t.t1 = t.sent), (h = t.t0.join.call(t.t0, t.t1)), g().join(h, "cfw_geoip.tag.gz"), (u = b().stream("https://download.maxmind.com/app/geoip_download?edition_id=GeoLite2-Country&license_key=".concat(l, "&suffix=tar.gz"))).on("downloadProgress", function (t) {
                  var i = "";
                  ((i = 1 === t.percent ? Lg.restartingCore() : Lg.updating() + "... (".concat(Math.round(100 * t.percent), "%)")), (e.geoipUpdateTime = i));
                }), u.on("error", function (t) {
                  (e.$alert({
                    content: Lg.downloadDbErrGeoIP() + ": ".concat(t.name)
                  }), (e.geoipUpdateTime = i));
                }), (p = g().join(e.clashPath, "Country.mmdb")), (m = L().extract()), (v = 0), m.on("entry", function (e, t, i) {
                  (t.on("end", function () {
                    i();
                  }), /GeoLite2-Country\.mmdb$/.test(e.name) ? ((v = e.size), t.pipe(f().createWriteStream(p, {
                    flags: "r+"
                  }))) : t.resume());
                }), m.on("finish", function () {
                  c(p, v);
                }), u.pipe(S().createGunzip()).pipe(m), (t.next = 40));
                break;
              case 39:
                r && ((e.geoipUpdateTime = Lg.updating() + "... (0%)"), (_ = b().stream(r)), (w = 0), _.on("downloadProgress", function (t) {
                  var i = "",
                    n = t.percent,
                    o = t.total;
                  (1 === n ? ((w = o), (i = Lg.restartingCore())) : (i = "Updating... (".concat(Math.round(100 * t.percent), "%)")), (e.geoipUpdateTime = i));
                }), _.on("error", function (t) {
                  (e.$alert({
                    content: Lg.downloadDbErrGeoIP() + ": ".concat(t.name)
                  }), (e.geoipUpdateTime = i));
                }), (y = g().join(e.clashPath, "Country.mmdb")), (C = f().createWriteStream(y, {
                  flags: "r+"
                })).on("finish", function () {
                  c(y, w);
                }), _.pipe(C));
              case 40:
                t.next = 44;
                break;
              case 42:
                ((t.prev = 42), (t.t2 = t.catch(7)));
              case 44:
              case "end":
                return t.stop();
            }
          }, t, null, [[7, 42]]);
        }))();
      },
      setupSwitches: function () {
        ((this.autoLaunchLoading = !1), (this.systemProxyLoading = !1));
      },
      setupComponent: function () {
        var e = this;
        return r()(d().mark(function t() {
          var i, n, s, r, a, l, c, h, u, p;
          return d().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                if (!e.clashAxiosClient) {
                  t.next = 17;
                  break;
                }
                return ((t.prev = 1), (t.next = 4), Promise.all([e.clashAxiosClient.get("/configs"), e.fetchCoreVersion()]));
              case 4:
                ((i = t.sent), (n = o()(i, 1)), (s = n[0]), (r = s.status), (a = s.data), 200 === r && ((l = a["mixed-port"]), (c = a["allow-lan"]), (h = a["log-level"]), (u = a["bind-address"]), (p = a.ipv6), (e.port = l), (e.isAllowLan = c), (e.bindAddress = u), (e.logLevel = h), (e.isIPV6 = p), (e.geoipUpdateTime = v()(f().statSync(g().join(e.clashPath, "Country.mmdb")).mtimeMs).format("YYYY-MM-DD HH:mm"))), (t.next = 15));
                break;
              case 12:
                ((t.prev = 12), (t.t0 = t.catch(1)), console.error(t.t0.stack || t.t0.toString()));
              case 15:
                t.next = 17;
                break;
              case 17:
              case "end":
                return t.stop();
            }
          }, t, null, [[1, 12]]);
        }))();
      },
      fetchCoreVersion: function () {
        var e = this;
        return r()(d().mark(function t() {
          var i, n, o, s;
          return d().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                if (!e.clashAxiosClient) {
                  t.next = 6;
                  break;
                }
                return ((t.next = 3), e.clashAxiosClient.get("/version"));
              case 3:
                ((i = t.sent), (n = i.data) ? ((o = n.premium), (s = n.version), (e.clashCoreVersion = void 0 !== o && void 0 !== s ? "".concat(s, " ").concat(o ? "Premium" : "") : "Unknown")) : (e.clashCoreVersion = "Unknown"));
              case 6:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      }
    }),
    mounted: function () {
      return r()(d().mark(function e() {
        return d().wrap(function (e) {
          for (;;) switch ((e.prev = e.next)) {
            case 0:
            case "end":
              return e.stop();
          }
        }, e);
      }))();
    },
    beforeRouteEnter: function (e, t, i) {
      var n;
      i(((n = r()(d().mark(function e(t) {
        return d().wrap(function (e) {
          for (;;) switch ((e.prev = e.next)) {
            case 0:
              return ((e.t0 = "v"), (e.next = 3), P.ipcRenderer.invoke("app", "getVersion"));
            case 3:
              ((e.t1 = e.sent), (t.version = e.t0.concat.call(e.t0, e.t1)), (t.serviceNeedUpdate = Ce()), t.setupComponent(), setTimeout(t.setupSwitches, 1));
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
      i();
    }
  };
  (i(19259), i(82093));
  const Ne = (0, W.Z)(Le, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return t("div", {
      staticClass: "main-general-view"
    }, [t("div", {
      staticClass: "header"
    }, [t("img", {
      staticClass: "w-[90px] h-[90px] mr-[20px]",
      attrs: {
        src: e.iconPath
      }
    }), e._v(" "), t("div", {
      staticClass: "title"
    }, [t("div", {
      staticClass: "title-name",
      on: {
        click: e.handleTitleClick
      }
    }, [e._v("\n        Clash for Windows\n      ")]), e._v(" "), t("div", {
      staticClass: "version",
      on: {
        click: e.openGithubRelease
      }
    }, [e._v("\n        " + VERSION + "\n        "), e.isShowNewIcon ? t("div", {
      staticClass: "new-version-tag"
    }, [e._v("New")]) : e._e()])])]), e._v(" "), e.isLaunching ? e._e() : t("div", {
      staticClass: "content"
    }, [t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "item-left"
    }, [e._v(Lg.port())]), e._v(" "), t("div", {
      staticClass: "item-right"
    }, [t("Hint", {
      staticClass: "mr-2",
      attrs: {
        hint: Lg.terminal()
      }
    }, [t("span", {
      staticClass: "icon control-icon",
      on: {
        click: function (t) {
          return (t.stopPropagation(), e.openCmdWithProxy());
        }
      }
    }, [e._v("terminal")])]), e._v(" "), t("Hint", {
      attrs: {
        hint: Lg.randomMixedPort()
      }
    }, [t("span", {
      staticClass: "icon control-icon cursor-pointer",
      style: {
        color: e.settings.randomMixedPort ? "#41b883" : "#b3b3b3"
      },
      on: {
        click: function (t) {
          e.settings.randomMixedPort = !e.settings.randomMixedPort;
        }
      }
    }, [e._v("sync" + e._s(e.settings.randomMixedPort ? "" : "_disabled"))])]), e._v(" "), t("div", {
      staticClass: "clickable",
      on: {
        click: e.handleEditMixedPort
      }
    }, [e._v("\n          " + e._s(e.port) + "\n        ")])], 1)]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "item-left"
    }, [t("div", [e._v(Lg.allowLAN())]), e._v(" "), t("info-icon", [e._v("\n          " + Lg.infoAllowLAN() + "\n          "), t("a", {
      attrs: {
        href: "https://github.com/Dreamacro/clash/pull/2818"
      }
    }, [e._v(Lg.inbound())])]), e._v(" "), t("Hint", {
      staticClass: "tun-settings-icon",
      attrs: {
        hint: Lg.networkInterfaces(),
        position: "right"
      },
      on: {
        click: function (t) {
          (t.stopPropagation(), (e.isInterfacesVisible = !0));
        }
      }
    }, [t("span", {
      staticClass: "icon text-[color:var(--general-settings-icon-c)]"
    }, [e._v("device_hub")])])], 1), e._v(" "), t("div", {
      staticClass: "item-right"
    }, [e.bindAddress ? t("div", {
      staticClass: "clickable mr-2",
      on: {
        click: e.handleEditBindAddress
      }
    }, [e._v("\n          " + Lg.bind() + e._s(e.bindAddress) + "\n        ")]) : e._e(), e._v(" "), t("switch-view", {
      attrs: {
        on: e.isAllowLan
      },
      on: {
        change: function (t) {
          return e.handleAllowLANChange(e.isAllowLan);
        }
      }
    })], 1)]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "item-left"
    }, [e._v(Lg.logLevel())]), e._v(" "), t("div", {
      staticClass: "item-right"
    }, [t("div", {
      staticClass: "clickable",
      on: {
        click: e.handleEditLogLevel
      }
    }, [e._v("\n          " + ("silent" == e._s(e.logLevel) ? Lg.silent() : "error" == e._s(e.logLevel) ? Lg.errorS() : "warn" == e._s(e.logLevel) ? Lg.warning() : "warning" == e._s(e.logLevel) ? Lg.warn() : "info" == e._s(e.logLevel) ? Lg.info() : "debug" == e._s(e.logLevel) ? Lg.debug() : e._s(e.logLevel)) + "\n        ")])])]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "item-left"
    }, [e._v("IPv6")]), e._v(" "), t("div", {
      staticClass: "item-right"
    }, [t("switch-view", {
      attrs: {
        on: e.isIPV6
      },
      on: {
        change: function (t) {
          return e.handleIPV6Change(e.isIPV6);
        }
      }
    })], 1)]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "item-left"
    }, [t("div", [e._v(Lg.clashCore())]), e._v(" "), e.isWindows ? t("Hint", {
      staticClass: "tun-settings-icon",
      attrs: {
        hint: Lg.addFirewallRules(),
        position: "right"
      },
      on: {
        click: function (t) {
          return (t.stopPropagation(), e.handleAddFirewallRules.apply(null, arguments));
        }
      }
    }, [e.isFetchingFirewallRule ? t("span", {
      staticClass: "icon text-[color:var(--general-settings-icon-c)] animate-bounce"
    }, [e._v("\n            edit\n          ")]) : t("span", {
      staticClass: "icon text-[color:var(--general-settings-icon-c)]",
      style: {
        color: e.isFirewallRuleExist ? "#41b883" : "#b3b3b3"
      }
    }, [e._v(e._s(e.isFirewallRuleExist ? "verified_user" : "gpp_maybe"))])]) : e._e(), e._v(" "), t("Hint", {
      staticClass: "tun-settings-icon",
      attrs: {
        hint: Lg.previewCfgToClashCore(),
        position: "right"
      },
      on: {
        click: function (t) {
          return (t.stopPropagation(), e.handlePreviewCurrentPayload.apply(null, arguments));
        }
      }
    }, [t("span", {
      staticClass: "icon text-[color:var(--general-settings-icon-c)]"
    }, [e._v("memory")])]), e._v(" "), t("Hint", {
      staticClass: "tun-settings-icon",
      attrs: {
        hint: Lg.useClashCoreSeeHost(),
        position: "right"
      },
      on: {
        click: function (t) {
          return (t.stopPropagation(), e.handleShowDNSQueryDialog.apply(null, arguments));
        }
      }
    }, [t("span", {
      staticClass: "icon text-[color:var(--general-settings-icon-c)]"
    }, [e._v("dns")])]), e._v(" "), t("Hint", {
      staticClass: "tun-settings-icon",
      attrs: {
        hint: Lg.testByScriptMode(),
        position: "right"
      },
      on: {
        click: function (t) {
          return (t.stopPropagation(), e.handleShowScriptTestDialog.apply(null, arguments));
        }
      }
    }, [t("span", {
      staticClass: "icon text-[color:var(--general-settings-icon-c)]"
    }, [e._v("play_arrow")])])], 1), e._v(" "), t("div", {
      staticClass: "item-right"
    }, [t("div", {
      staticClass: "clickable",
      on: {
        click: e.handleCopyControllerURL
      }
    }, [e._v("\n          " + e._s(e.clashCoreVersion) + " (" + e._s(e.controllerPort) + ")\n        ")])])]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "item-left"
    }, [e._v(Lg.homeDirectory())]), e._v(" "), t("div", {
      staticClass: "item-right clickable",
      on: {
        click: e.handleHomeDirectoryOpen
      }
    }, [e._v("\n        " + Lg.openFolder() + "\n      ")])]), e._v(" "), e.isWindows ? e._e() : t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "item-left"
    }, [e._v(Lg.geoIPDatabase())]), e._v(" "), t("div", {
      staticClass: "item-right clickable",
      on: {
        click: e.handleGeoipDatabaseUpdate
      }
    }, [e._v("\n        " + e._s(e.geoipUpdateTime) + "\n      ")])]), e._v(" "), e.isWindows ? t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "item-left"
    }, [e._v(Lg.loopbackUWP())]), e._v(" "), t("div", {
      staticClass: "item-right clickable",
      on: {
        click: function (t) {
          return e.spawnLoopback(t);
        }
      }
    }, [e._v("\n        " + Lg.launchHelper() + "\n      ")])]) : e._e(), e._v(" "), e.isWindows ? t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "item-left"
    }, [e._v(Lg.deviceTAP())]), e._v(" "), t("div", {
      staticClass: "item-right clickable",
      on: {
        click: function (t) {
          return e.installTapDevice(t);
        }
      }
    }, [e._v("\n        " + Lg.manage() + "\n      ")])]) : e._e(), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "item-left"
    }, [e._v(Lg.serviceMode())]), e._v(" "), t("span", {
      staticClass: "icon mt-[2px] ml-[5px]",
      style: {
        color: e.isLocalMode ? "#b3b3b3" : e.serviceNeedUpdate ? "#DE5034" : "#41b883"
      }
    }, [e._v("public")]), e._v(" "), t("div", {
      staticStyle: {
        "flex-grow": "1"
      }
    }), e._v(" "), t("div", {
      staticClass: "item-right clickable",
      on: {
        click: e.installService
      }
    }, [e._v(Lg.manage())])]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "item-left"
    }, [t("div", [e._v(Lg.TUNmode())]), e._v(" "), t("info-icon", [e._v("\n          " + Lg.TUNmodeDescribe() + "\n        ")]), e._v(" "), t("Hint", {
      staticClass: "tun-settings-icon",
      attrs: {
        hint: Lg.settings(),
        position: "right"
      },
      on: {
        click: function (t) {
          (t.stopPropagation(), (e.isTunSettingsVisible = !e.isTunSettingsVisible));
        }
      }
    }, [t("span", {
      staticClass: "icon text-[color:var(--general-settings-icon-c)]"
    }, [e._v("settings")])]), e._v(" "), e.isMacOS ? t("Hint", {
      staticClass: "tun-settings-icon",
      attrs: {
        hint: "System DNS servers that will be set after TUN Mode is disabled",
        position: "right"
      },
      on: {
        click: function (t) {
          (t.stopPropagation(), (e.isResetDNSSettingsVisible = !e.isResetDNSSettingsVisible));
        }
      }
    }, [t("span", {
      staticClass: "icon text-[color:var(--general-settings-icon-c)]"
    }, [e._v("manage_history")])]) : e._e()], 1), e._v(" "), t("switch-view", {
      attrs: {
        on: e.isTunEnable
      },
      on: {
        change: e.handleTunSwitchClick
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "item-left"
    }, [t("div", [e._v(Lg.mixin())]), e._v(" "), t("info-icon", [e._v("\n          " + Lg.mixinAllowsDescribe() + "\n          "), t("a", {
      attrs: {
        href: "https://web.archive.org/web/20230304232259/docs.cfw.lbyczf.com/contents/mixin.html"
      }
    }, [e._v(Lg.onlineDocs())])]), e._v(" "), t("Hint", {
      staticClass: "tun-settings-icon",
      attrs: {
        hint: Lg.editMixinContent(),
        position: "right"
      },
      on: {
        click: function (t) {
          return (t.stopPropagation(), e.handleEditMixin.apply(null, arguments));
        }
      }
    }, [t("span", {
      staticClass: "icon text-[color:var(--general-settings-icon-c)]"
    }, [e._v("settings")])])], 1), e._v(" "), t("switch-view", {
      attrs: {
        on: e.isMixinEnable
      },
      on: {
        change: e.handleMixinSwitchClick
      }
    })], 1), e._v(" "), e.isLinux ? e._e() : t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "item-left"
    }, [e._v(Lg.sysProxy())]), e._v(" "), t("switch-view", {
      attrs: {
        on: e.isSystemProxyOn
      },
      on: {
        change: e.handleSystemProxySwitchClick
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "item-left"
    }, [e._v(e._s(e.autoLaunchHint))]), e._v(" "), t("switch-view", {
      attrs: {
        on: e.autoLaunch
      },
      on: {
        change: e.handleAutoLaunchSwitchClick
      }
    })], 1)]), e._v(" "), e.matchedSSID ? t("div", {
      staticClass: "font-normal text-xs flex items-center justify-center absolute bottom-3 left-[calc(50%+85px)] -translate-x-1/2 gap-x-1 rounded-md bg-[color:var(--proxy-item-bgc)] border-opacity-50 px-3 py-1 clickable !border-b-0",
      on: {
        click: e.handleEditSSIDStrategyText
      }
    }, [t("span", [e._v(Lg.ssidStrategy() + ":")]), e._v(" "), t("span", [e._v(e._s(e.matchedSSID))])]) : e._e(), e._v(" "), e.isLaunching ? t("error-view") : e._e(), e._v(" "), e.isResetDNSSettingsVisible ? t("ResetDNSSettingsView", {
      on: {
        close: function (t) {
          e.isResetDNSSettingsVisible = !1;
        }
      }
    }) : e._e(), e._v(" "), e.isTunSettingsVisible ? t("tun-settings-view", {
      on: {
        close: function (t) {
          e.isTunSettingsVisible = !1;
        }
      }
    }) : e._e(), e._v(" "), e.isInterfacesVisible ? t("interfaces-view", {
      on: {
        close: function (t) {
          e.isInterfacesVisible = !1;
        }
      }
    }) : e._e(), e._v(" "), t("div", {
      staticClass: "empty-div"
    })], 1);
  }, [], !1, null, "357ec510", null).exports;
};
