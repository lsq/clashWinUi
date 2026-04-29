const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z: () => L
  });
  var n = i(48926),
    o = i.n(n),
    s = i(319),
    r = i.n(s),
    a = i(59713),
    l = i.n(a),
    c = i(87757),
    d = i.n(c),
    h = i(72298),
    u = i(23321),
    g = i(24883);
  const p = require("dhcp");
  var f = i.n(p),
    m = i(59273),
    v = i(81518),
    _ = i(63038),
    b = i.n(_),
    w = i(97520);
  const y = {
    name: "RouterConfigView",
    data: function () {
      return {
        interfaces: [],
        selectedName: "",
        localAddress: "",
        rangeFrom: "",
        rangeTo: "",
        netmask: "255.255.255.0",
        defaultRouter: "",
        primaryDns: "8.8.8.8",
        secondlyDns: "1.1.1.1",
        broadAddress: ""
      };
    },
    computed: {
      selectedInterface: function () {
        var e = this;
        return this.interfaces.find(function (t) {
          return t.name === e.selectedName;
        });
      }
    },
    watch: {
      selectedInterface: function (e) {
        var t = e.address;
        ((this.localAddress = t), this.computeFromLocalAddress(t));
      }
    },
    methods: {
      computeFromLocalAddress: function (e) {
        var t = e.split(".");
        4 === t.length && ((this.rangeFrom = [].concat(r()(t.slice(0, 3)), ["100"]).join(".")), (this.rangeTo = [].concat(r()(t.slice(0, 3)), ["200"]).join(".")), (this.defaultRouter = [].concat(r()(t.slice(0, 3)), ["1"]).join(".")), (this.broadAddress = [].concat(r()(t.slice(0, 3)), ["255"]).join(".")));
      },
      handleInterfaceSelect: function () {
        var e = this;
        return o()(d().mark(function t() {
          var i, n, o, s;
          return d().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((i = e.interfaces.map(function (e) {
                  return e.name;
                })), (t.next = 3), e.$select({
                  title: Lg.selectInterface(),
                  message: "",
                  items: i
                }));
              case 3:
                ((n = t.sent), (o = b()(n, 1)), (s = o[0]), (e.selectedName = i[s]));
              case 7:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleContinueClick: function () {
        this.$emit("confirm", {
          localAddress: this.localAddress,
          rangeFrom: this.rangeFrom,
          rangeTo: this.rangeTo,
          netmask: this.netmask,
          defaultRouter: this.defaultRouter,
          primaryDns: this.primaryDns,
          secondlyDns: this.secondlyDns,
          broadAddress: this.broadAddress
        });
      }
    },
    mounted: function () {
      ((this.interfaces = (0, w.r)() || []), this.interfaces.length > 0 && (this.selectedName = this.interfaces[0].name));
    }
  };
  i(91781);
  var C = i(51900);
  function x(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  function S(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? x(Object(i), !0).forEach(function (t) {
        l()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : x(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  const Lg = new Language(modifyState.language);
  const k = {
    name: "RouterView",
    components: {
      ConfigView: (0, C.Z)(y, function () {
        var e = this,
          t = e._self._c;
        return t("div", {
          staticClass: "main-router-config-view bg-[color:var(--mask-c)]",
          on: {
            click: function (t) {
              return e.$emit("close");
            }
          }
        }, [t("div", {
          staticClass: "content bg-[color:var(--bgc)] text-[color:var(--fgc)]",
          on: {
            click: function (e) {
              e.stopPropagation();
            }
          }
        }, [t("div", {
          staticClass: "title"
        }, [e._v(Lg.profiles())]), e._v(" "), t("div", {
          staticClass: "sec"
        }, [t("span", [e._v("Interface")]), e._v(" "), t("input", {
          staticClass: "clickable",
          attrs: {
            readonly: ""
          },
          domProps: {
            value: e.selectedName
          },
          on: {
            click: e.handleInterfaceSelect
          }
        })]), e._v(" "), t("div", {
          staticClass: "sec"
        }, [t("span", [e._v(Lg.localIpAddress())]), e._v(" "), t("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: e.localAddress,
            expression: "localAddress"
          }],
          attrs: {
            type: "text"
          },
          domProps: {
            value: e.localAddress
          },
          on: {
            input: function (t) {
              t.target.composing || (e.localAddress = t.target.value);
            }
          }
        })]), e._v(" "), t("div", {
          staticClass: "sec"
        }, [t("span", [e._v("DHCP IP Range")]), e._v(" "), t("div", {
          staticClass: "flex"
        }, [t("div", [t("span", [e._v("From")]), e._v(" "), t("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: e.rangeFrom,
            expression: "rangeFrom"
          }],
          attrs: {
            type: "text"
          },
          domProps: {
            value: e.rangeFrom
          },
          on: {
            input: function (t) {
              t.target.composing || (e.rangeFrom = t.target.value);
            }
          }
        })]), e._v(" "), t("div", [t("span", [e._v("To")]), e._v(" "), t("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: e.rangeTo,
            expression: "rangeTo"
          }],
          attrs: {
            type: "text"
          },
          domProps: {
            value: e.rangeTo
          },
          on: {
            input: function (t) {
              t.target.composing || (e.rangeTo = t.target.value);
            }
          }
        })])])]), e._v(" "), t("div", {
          staticClass: "sec"
        }, [t("span", [e._v("Netmask")]), e._v(" "), t("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: e.netmask,
            expression: "netmask"
          }],
          attrs: {
            type: "text"
          },
          domProps: {
            value: e.netmask
          },
          on: {
            input: function (t) {
              t.target.composing || (e.netmask = t.target.value);
            }
          }
        })]), e._v(" "), t("div", {
          staticClass: "sec"
        }, [t("span", [e._v("Default Router")]), e._v(" "), t("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: e.defaultRouter,
            expression: "defaultRouter"
          }],
          attrs: {
            type: "text"
          },
          domProps: {
            value: e.defaultRouter
          },
          on: {
            input: function (t) {
              t.target.composing || (e.defaultRouter = t.target.value);
            }
          }
        })]), e._v(" "), t("div", {
          staticClass: "sec"
        }, [t("span", [e._v(Lg.serversDNS())]), e._v(" "), t("div", {
          staticClass: "flex"
        }, [t("div", [t("span", [e._v("Primary")]), e._v(" "), t("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: e.primaryDns,
            expression: "primaryDns"
          }],
          attrs: {
            type: "text"
          },
          domProps: {
            value: e.primaryDns
          },
          on: {
            input: function (t) {
              t.target.composing || (e.primaryDns = t.target.value);
            }
          }
        })]), e._v(" "), t("div", [t("span", [e._v("Alternative")]), e._v(" "), t("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: e.secondlyDns,
            expression: "secondlyDns"
          }],
          attrs: {
            type: "text"
          },
          domProps: {
            value: e.secondlyDns
          },
          on: {
            input: function (t) {
              t.target.composing || (e.secondlyDns = t.target.value);
            }
          }
        })])])]), e._v(" "), t("div", {
          staticClass: "btn clickable",
          on: {
            click: e.handleContinueClick
          }
        }, [e._v("Continue")])])]);
      }, [], !1, null, "0ffa25f2", null).exports
    },
    data: function () {
      return {
        server: null,
        clients: [],
        boundState: {},
        isShowConfigView: !1,
        powersaveBlockerID: 0,
        clientAlias: g.Z.get(v.Z.DHCP_MAC_ALIAS) || {}
      };
    },
    computed: S(S({}, (0, u.mapState)({
      routerHijackMacAddresses: function (e) {
        return e.app.routerHijackMacAddresses;
      },
      currentProfilePayload: function (e) {
        return e.app.currentProfilePayload;
      }
    })), {}, {
      serverRunning: function () {
        return null !== this.server;
      },
      buttonText: function () {
        return this.serverRunning ? Lg.pause() : Lg.start();
      }
    }),
    methods: S(S({}, (0, u.mapMutations)({
      setRouterHijackMacAddresses: "SET_ROUTER_HIJACK_MAC_ADDRESSES"
    })), {}, {
      clientName: function (e) {
        return this.clientAlias[e.chaddr] || e.options[12] || "Unknown";
      },
      handleClientRename: function (e, t) {
        ((this.clientAlias = S(S({}, this.clientAlias), {}, l()({}, t, e.target.value))), g.Z.put(v.Z.DHCP_MAC_ALIAS, this.clientAlias));
      },
      handleGotoConnections: function (e) {
        var t = this.addressFromBound(e);
        t && this.$router.replace({
          path: "/home/connection",
          query: {
            searchText: t
          }
        }).catch(function () {});
      },
      handleStartDHCPServer: function () {
        this.serverRunning ? (this.server && this.server.close(), (this.server = null), (this.clients = []), (this.boundState = {}), h.ipcRenderer.invoke("powerSaveBlocker", "stop", this.powersaveBlockerID)) : (this.isShowConfigView = !0);
      },
      handleConfigConfirm: function (e) {
        var t,
          i,
          n = this;
        this.isShowConfigView = !1;
        var s,
          a = null === (t = this.currentProfilePayload) || void 0 === t || null === (i = t.tun) || void 0 === i ? void 0 : i["dns-hijack"],
          l = (function (e) {
            var t = e.rangeFrom,
              i = e.rangeTo,
              n = e.netmask,
              o = e.defaultRouter,
              s = e.broadcast,
              r = e.localAddress,
              a = e.primaryDns,
              l = e.secondlyDns,
              c = e.hijackDns,
              d = void 0 === c ? [] : c,
              h = f().createServer({
                range: [t, i],
                forceOptions: ["hostname"],
                randomIP: !0,
                static: {},
                netmask: n,
                router: function (e) {
                  var t = m.Z.state.app.routerHijackMacAddresses;
                  return (void 0 === t ? [] : t).includes(e.clientId) ? [r] : [o];
                },
                dns: function (e) {
                  var t = m.Z.state.app.routerHijackMacAddresses;
                  return (void 0 === t ? [] : t).includes(e.clientId) ? d.slice(0, 2) : "" !== l ? [a, l] : [a];
                },
                broadcast: s,
                server: r,
                maxMessageSize: 1500,
                leaseTime: 86400,
                renewalTime: 60,
                rebindingTime: 120,
                bootFile: "",
                hostname: "cfw"
              });
            return (h.on("error", function (e, t) {
              console.log(e, t);
            }), h.listen(), h);
          })(S(S({}, e), {}, {
            hijackDns: a
          }));
        (l.on("message", function (e) {
          var t = e.chaddr;
          void 0 !== n.clients.find(function (e) {
            return e.chaddr === t;
          }) || (n.clients = [].concat(r()(n.clients), [e]));
        }), l.on("bound", function (e) {
          n.boundState = e;
        }), l.on("listening", ((s = o()(d().mark(function e(t) {
          var i;
          return d().wrap(function (e) {
            for (;;) switch ((e.prev = e.next)) {
              case 0:
                return ((i = t.address()), console.log("dhcp server listen at ".concat(i.address, ":").concat(i.port)), (n.server = l), (e.next = 5), h.ipcRenderer.invoke("powerSaveBlocker", "start", "prevent-app-suspension"));
              case 5:
                n.powersaveBlockerID = e.sent;
              case 6:
              case "end":
                return e.stop();
            }
          }, e);
        }))), function (e) {
          return s.apply(this, arguments);
        })));
      },
      handleMacToHijack: function (e) {
        this.routerHijackMacAddresses.includes(e) ? this.setRouterHijackMacAddresses({
          addresses: this.routerHijackMacAddresses.filter(function (t) {
            return t !== e;
          })
        }) : this.setRouterHijackMacAddresses({
          addresses: [].concat(r()(this.routerHijackMacAddresses), [e])
        });
      },
      addressFromBound: function (e) {
        var t = this.boundState[e];
        return t ? t.address : "";
      }
    })
  };
  i(67078);
  const L = (0, C.Z)(k, function () {
    var e = this,
      t = e._self._c;
    return t("div", {
      staticClass: "main-router-view"
    }, [t("div", {
      staticClass: "header"
    }, [t("div", [e._v(Lg.dhcpServer())]), e._v(" "), t("div", {
      staticClass: "btn",
      class: [e.serverRunning ? "btn-stop" : "btn-start"],
      on: {
        click: e.handleStartDHCPServer
      }
    }, [e._v("\n      " + e._s(e.buttonText) + "\n    ")])]), e._v(" "), t("div", {
      staticClass: "list"
    }, e._l(e.clients, function (i) {
      return t("div", {
        key: i.chaddr,
        staticClass: "item",
        attrs: {
          title: i.chaddr
        }
      }, [t("div", {
        staticClass: "left"
      }, [t("div", {
        staticClass: "name clickable"
      }, [t("input", {
        attrs: {
          type: "text"
        },
        domProps: {
          value: e.clientName(i)
        },
        on: {
          change: function (t) {
            return e.handleClientRename(t, i.chaddr);
          }
        }
      })]), e._v(" "), t("div", {
        staticClass: "ip"
      }, [e._v(e._s(e.addressFromBound(i.chaddr) || "--"))])]), e._v(" "), t("div", {
        staticClass: "right"
      }, [e.routerHijackMacAddresses.includes(i.options[61]) ? t("div", {
        staticClass: "btn",
        on: {
          click: function (t) {
            return e.handleGotoConnections(i.chaddr);
          }
        }
      }, [e._v("\n         连接\n        ")]) : e._e(), e._v(" "), t("div", {
        staticClass: "btn hijack-button",
        on: {
          click: function (t) {
            return e.handleMacToHijack(i.options[61]);
          }
        }
      }, [e._v("\n          " + e._s(e.routerHijackMacAddresses.includes(i.options[61]) ? "Clash TUN" : Lg.defaultGateway()) + "\n        ")])])]);
    }), 0), e._v(" "), e.isShowConfigView ? t("config-view", {
      on: {
        close: function (t) {
          e.isShowConfigView = !1;
        },
        confirm: e.handleConfigConfirm
      }
    }) : e._e()], 1);
  }, [], !1, null, "74ff0369", null).exports;
};