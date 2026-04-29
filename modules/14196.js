const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z: () => T
  });
  var n = i(48926),
    o = i.n(n),
    s = i(319),
    r = i.n(s),
    a = i(59713),
    l = i.n(a),
    c = i(87757),
    d = i.n(c),
    h = i(13338),
    u = i(24883),
    g = i(81518),
    p = i(10605),
    f = i.n(p),
    m = i(23321),
    v = i(33182),
    _ = i(71017),
    b = i.n(_),
    w = i(72574),
    y = i(8369),
    C = i(72298);
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
  const k = {
    name: "ConnectionInfoView",
    props: ["connection"],
    components: {
      EscCapture: w.Z
    },
    data: function () {
      return {
        data: {
          speedStr: ""
        }
      };
    },
    watch: {
      infoData: {
        immediate: !0,
        handler: function (e) {
          Object.keys(e).length && (this.data = e);
        }
      },
      connection: {
        handler: function (e, t) {
          if (e && t) {
            var i = {
              upload: e.upload - t.upload,
              download: e.download - t.download
            };
            this.speedStr = this.$parent.calcSpeedText({
              speed: i
            });
          } else this.speedStr = "";
        },
        immediate: !0
      }
    },
    computed: S(S({}, (0, m.mapGetters)(["theme"])), {}, {
      isConnectionClosed: function () {
        return 0 === Object.keys(this.infoData).length;
      },
      infoData: function () {
        var e = this.connection;
        const Lg = new Language(modifyState.language);
        if (!e) return {};
        var t = e.metadata,
          i = "DIRECT" === e.chains[0];
        if (modifyState.language === 0) {
          return {
            主机: t.host,
            网络: e.metadata.network.toUpperCase(),
            流量: "↑".concat((0, y.nM)(e.upload), " ↓").concat((0, y.nM)(e.download)),
            来源: "".concat(t.sourceIP, ":").concat(t.sourcePort, " (").concat(e.metadata.type, ")"),
            目的地: (i ? t.destinationIP : t.host || t.destinationIP) + ":" + t.destinationPort,
            规则: "".concat(e.rule, " (").concat(e.rulePayload, ")"),
            进程路径: e.metadata.processPath,
            模式: e.chains.slice().reverse().join(" - "),
            "DNS 模式": e.metadata.dnsMode,
            开始时间: f()(e.start).format("MM-DD HH:mm:ss")
          };
        } else {
          return {
            Host: t.host,
            Network: e.metadata.network.toUpperCase(),
            Flow: "↑".concat((0, y.nM)(e.upload), " ↓").concat((0, y.nM)(e.download)),
            Source: "".concat(t.sourceIP, ":").concat(t.sourcePort, " (").concat(e.metadata.type, ")"),
            Destination: (i ? t.destinationIP : t.host || t.destinationIP) + ":" + t.destinationPort,
            Rule: "".concat(e.rule, " (").concat(e.rulePayload, ")"),
            "Process Path": e.metadata.processPath,
            Mode: e.chains.slice().reverse().join(" - "),
            "DNS Mode": e.metadata.dnsMode,
            "Start TIme": f()(e.start).format("MM-DD HH:mm:ss")
          };
        }
      }
    }),
    methods: {
      handleCopyVal: function (e) {
        (C.clipboard.writeText(e), (0, y.c0)("Copied to Clipboad!", e, !0));
      }
    },
    mounted: function () {}
  };
  i(96340);
  var L = i(51900);
  const N = (0, L.Z)(k, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return t("EscCapture", {
      staticClass: "main bg-[color:var(--mask-c)]",
      class: ["theme-".concat(e.theme)],
      on: {
        mousedown: function (t) {
          return e.$emit("close");
        },
        esc: function (t) {
          return e.$emit("close");
        }
      }
    }, [t("div", {
      staticClass: "card-main bg-[color:var(--bgc)] text-[color:var(--fgc)]",
      on: {
        mousedown: function (e) {
          e.stopPropagation();
        }
      }
    }, [t("div", {
      staticClass: "card-content"
    }, [t("div", {
      staticClass: "content-title px-4 flex justify-between items-baseline gap-3"
    }, [t("span", [e._v(Lg.connectInfo())]), e._v(" "), t("div", {
      staticClass: "flex-grow"
    }), e._v(" "), e.speedStr ? t("div", {
      staticClass: "text-xs"
    }, [e._v(e._s(e.speedStr))]) : e._e(), e._v(" "), t("div", [e.isConnectionClosed ? t("span", {
      staticClass: "text-sm text-[#D44545]"
    }, [e._v(Lg.close())]) : t("span", {
      staticClass: "text-sm text-[#13AF42]"
    }, [e._v(Lg.alive())])])]), e._v(" "), t("div", {
      staticClass: "w-full h-[1px] bg-gray-300"
    }), e._v(" "), t("div", {
      staticClass: "content-list"
    }, e._l(Object.keys(e.data), function (i, n) {
      return t("div", {
        key: n,
        staticClass: "content-item pl-4 pr-4 pt-2 pb-2"
      }, [t("div", {
        staticClass: "item-key"
      }, [e._v(e._s(i))]), e._v(" "), e.data[i] ? t("div", {
        staticClass: "item-value flex flex-wrap gap-2 opacity-80 font-normal items-center"
      }, [e._v("\n            " + e._s(e.data[i]) + "\n            "), t("div", {
        staticClass: "bg-[color:#64646480] text-white rounded-lg px-2 py-[2px] text-xs h-fit",
        on: {
          click: function (t) {
            return e.handleCopyVal(e.data[i]);
          }
        }
      }, [e._v("\n              " + Lg.copy() + "\n            ")])]) : t("div", [e._v("--")])]);
    }), 0)])])]);
  }, [], !1, null, "947c6bac", null).exports;
  function D(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  function I(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? D(Object(i), !0).forEach(function (t) {
        l()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : D(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  const E = {
    components: {
      Hint: h.Z,
      ConnectionInfoView: N,
      EscCapture: w.Z
    },
    props: [],
    data: function () {
      const Lg = new Language(modifyState.language);
      return {
        isPause: !1,
        searchText: "",
        client: null,
        lastData: {
          uploadTotal: 0,
          downloadTotal: 0,
          connections: []
        },
        data: {
          uploadTotal: 0,
          downloadTotal: 0,
          connections: []
        },
        labels: ['<span class="icon">upload</span><span class="icon">speed</span>', '<span class="icon">download</span><span class="icon">speed</span>', '<span class="icon">upload</span><span class="icon">signal_cellular_alt</span>', '<span class="icon">download</span><span class="icon">signal_cellular_alt</span>', '<span class="icon">schedule</span>', '<span class="icon">map</span>'],
        labelSelected: 4,
        reverseTags: [],
        detailConnectionId: "",
        filterTypes: [{
          title: Lg.sourceIP(),
          key: "sourceIP"
        }, {
          title: Lg.destinationIP(),
          key: "destinationIP"
        }, {
          title: Lg.domain(),
          key: "host"
        }, {
          title: Lg.processPath(),
          key: "processPath"
        }, {
          title: Lg.network(),
          key: "network"
        }, {
          title: Lg.type(),
          key: "type"
        }, {
          title: Lg.sourcePort(),
          key: "sourcePort"
        }, {
          title: Lg.destinationPort(),
          key: "destinationPort"
        }, {
          title: Lg.modeDNS(),
          key: "dnsMode"
        }],
        filterTypeIndex: 0,
        isShowTypeFilter: !1
      };
    },
    watch: {
      searchText: function (e) {
        u.Z.put(g.Z.CONNECTION_MODULE_SEARCH_TEXT, e);
      },
      clashStatus: function (e) {
        (this.client && this.client.terminate(), e === v.Z.CONNECTED && this.setupComponent());
      }
    },
    computed: I(I(I({}, (0, m.mapState)({
      clashStatus: function (e) {
        return e.app.clashStatus;
      }
    })), (0, m.mapGetters)(["clashAxiosClient", "clashWSClient"])), {}, {
      detailConnection: function () {
        var e = this;
        return ((this.detailConnectionId && this.data.connections.find(function (t) {
          return t.id === e.detailConnectionId;
        })) || null);
      },
      searchTextReg: function () {
        try {
          return new RegExp(this.searchText, "i");
        } catch (e) {}
        return null;
      },
      orderedConnections: function () {
        var e,
          t = this;
        if (!this.data) return [];
        var i = function (e) {
            return new Date(e).getTime();
          },
          n = r()(this.data.connections).map(function (e) {
            var i = e.id,
              n = t.lastData.connections.find(function (e) {
                return e.id === i;
              });
            return ((e.speed = n ? {
              upload: e.upload - n.upload,
              download: e.download - n.download
            } : {
              upload: 0,
              download: 0
            }), e);
          }).sort(function (e, n) {
            return 4 === t.labelSelected ? i(e.start) - i(n.start) : 3 === t.labelSelected ? n.download - e.download : 2 === t.labelSelected ? n.upload - e.upload : 1 === t.labelSelected ? n.speed.download - e.speed.download : 0 === t.labelSelected ? n.speed.upload - e.speed.upload : 5 === t.labelSelected ? (n.metadata.host || n.metadata.destinationIP || "").localeCompare(e.metadata.host || e.metadata.destinationIP || "") : 0;
          }),
          o = null != this && null !== (e = this.reverseTags) && void 0 !== e && e[this.labelSelected] ? n.reverse() : n;
        return "" === this.searchText ? o : o.filter(function (e) {
          if (/^(.+?)\=(.+)$/.test(t.searchText)) {
            var i = RegExp.$1,
              n = RegExp.$2,
              o = ((null == e ? void 0 : e.metadata) || {})[i];
            return !!o && o === n;
          }
          return !t.searchTextReg || t.searchTextReg.test((0, y.Mf)(e));
        });
      },
      connTypeLabels: function () {
        var e = this.filterTypes[this.filterTypeIndex].key,
          t = [];
        return (this.data.connections.forEach(function (i) {
          var n = ((null == i ? void 0 : i.metadata) || {})[e];
          t.includes(n) || t.push(n);
        }), t.filter(function (e) {
          return e;
        }).sort());
      }
    }),
    methods: {
      itemStyle: function (e) {
        var t = [];
        return (this.filterTypeIndex === e && t.push("selected"), this.filterTypeIndex !== e && t.push("item-none"), this.filterTypeIndex === e + 1 && t.push("selected-top"), this.filterTypeIndex === e - 1 && t.push("selected-bottom"), t);
      },
      connectionEndpoint: function (e) {
        var t = e.chains,
          i = void 0 === t ? [] : t,
          n = this.settings.connChainType,
          o = void 0 === n ? 0 : n,
          s = i.length;
        return [0, 2].includes(o) && s >= 1 ? i[0] : "";
      },
      connectionProcess: function (e) {
        var t = e.metadata,
          i = (t = void 0 === t ? {} : t).processPath,
          n = void 0 === i ? "" : i;
        try {
          if (n) return b().basename(n);
        } catch (e) {}
        return "";
      },
      connectionGroup: function (e) {
        var t = e.chains,
          i = void 0 === t ? [] : t,
          n = this.settings.connChainType,
          o = void 0 === n ? 0 : n,
          s = i.length;
        return 2 === o && 1 === s ? "" : [1, 2].includes(o) && s >= 1 ? i[s - 1] : "";
      },
      handleLableSelect: function (e) {
        var t;
        this.labelSelected === e ? (this.reverseTags[e] = !(null != this && null !== (t = this.reverseTags) && void 0 !== t && t[e])) : (this.labelSelected = e);
        (u.Z.put(g.Z.CONNECTION_ORDER_INDEX, e), u.Z.put(g.Z.CONNECTION_ORDER_REVERSE_TAGS, this.reverseTags));
      },
      calcLabelClasses: function (e) {
        var t = ["label"];
        return (this.labelSelected === e && (this.reverseTags[e] ? t.push("label-selected-reverse") : t.push("label-selected")), t);
      },
      calcSpeedText: function (e) {
        var t = [];
        if (!e.speed) return "";
        var i = e.speed,
          n = i.upload,
          o = void 0 === n ? 0 : n,
          s = i.download,
          r = void 0 === s ? 0 : s;
        return (0 !== o && t.push("↑".concat(this.traffic(o), "/s")), 0 !== r && t.push("↓".concat(this.traffic(r), "/s")), t.join(" "));
      },
      fromNow: function (e) {
        const Lg = new Language(modifyState.language);
        return f()(e).locale(Lg.locale()).fromNow();
      },
      traffic: function (e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, i = ["B", "KB", "MB", "GB", "TB"], n = 0; ~~(e / 1024) && n < i.length;) ((e /= 1024), n++);
        return "".concat(0 === n ? e : e.toFixed(t), " ").concat(i[n]);
      },
      upperCaseFirst: function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      },
      handleCloseConnection: function (e) {
        var t = this;
        return o()(d().mark(function i() {
          return d().wrap(function (i) {
            for (;;) switch ((i.prev = i.next)) {
              case 0:
                return ((i.next = 2), t.clashAxiosClient.delete("connections/".concat(e)));
              case 2:
              case "end":
                return i.stop();
            }
          }, i);
        }))();
      },
      handleCloseAllConnections: function () {
        var e = this;
        return o()(d().mark(function t() {
          return d().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), Promise.allSettled(e.orderedConnections.map(function (t) {
                  var i = t.id;
                  return e.clashAxiosClient.delete("connections/".concat(i));
                })));
              case 2:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleItemSelected: function (e) {
        var t = e.id;
        this.detailConnectionId = t;
      },
      handleSwitchPauseStatus: function () {
        ((this.isPause = !this.isPause), this.isPause ? this.closeStream() : this.openStream());
      },
      closeStream: function () {
        (this.client && this.client.terminate(), (this.client = null));
      },
      openStream: function () {
        var e = this,
          t = this.clashWSClient("connections");
        t && (t.on("message", function (t) {
          var i = JSON.parse(t);
          ((e.lastData = e.data), (e.data = i));
        }), (this.client = t));
      },
      setupComponent: function () {
        var e, t;
        ((this.labelSelected = null !== (e = u.Z.get(g.Z.CONNECTION_ORDER_INDEX)) && void 0 !== e ? e : 4), (this.reverseTags = null !== (t = u.Z.get(g.Z.CONNECTION_ORDER_REVERSE_TAGS)) && void 0 !== t ? t : []), this.isPause || this.openStream());
      }
    },
    beforeRouteEnter: function (e, t, i) {
      var n;
      i(((n = o()(d().mark(function t(i) {
        var n, o, s;
        return d().wrap(function (t) {
          for (;;) switch ((t.prev = t.next)) {
            case 0:
              (i.setupComponent(), (n = e.query.searchText), (o = void 0 === n ? "" : n), (i.searchText = o ? o.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : null !== (s = u.Z.get(g.Z.CONNECTION_MODULE_SEARCH_TEXT)) && void 0 !== s ? s : ""));
            case 3:
            case "end":
              return t.stop();
          }
        }, t);
      }))), function (e) {
        return n.apply(this, arguments);
      }));
    },
    beforeRouteLeave: function (e, t, i) {
      (this.closeStream(), i());
    }
  };
  i(46029);
  const T = (0, L.Z)(E, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return t("div", {
      staticClass: "main-connection-view relative",
      on: {
        click: function (t) {
          e.isShowTypeFilter = !1;
        }
      }
    }, [t("EscCapture", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: e.isShowTypeFilter,
        expression: "isShowTypeFilter"
      }],
      staticClass: "translate-y-[2px] flex min-w-[500px] w-[calc(100%-200px)] h-[calc(100%-300px)] min-h-[400px] absolute rounded overflow-hidden z-10 shadow-lg text-sm border border-[color:var(--bc)] left-1/2 -translate-x-1/2 top-[32px]",
      on: {
        click: function (e) {
          e.stopPropagation();
        },
        esc: function (t) {
          e.isShowTypeFilter = !1;
        }
      }
    }, [t("div", {
      staticClass: "bg-[color:var(--bgc)] w-fit flex flex-col flex-shrink-0 items-center"
    }, [e._l(e.filterTypes, function (i, n) {
      return t("div", {
        key: i.key,
        staticClass: "h-[40px] px-3 flex items-center justify-center w-full clickable",
        class: e.itemStyle(n),
        on: {
          click: function (t) {
            e.filterTypeIndex = n;
          }
        }
      }, [e._v("\n        " + e._s(i.title) + "\n      ")]);
    }), e._v(" "), t("div", {
      staticClass: "flex-grow bg-[color:var(--mbgc)] w-full",
      class: e.itemStyle(e.filterTypes.length)
    })], 2), e._v(" "), t("div", {
      staticClass: "bg-[color:var(--bgc)] flex-1 flex flex-col overflow-y-auto scrolly"
    }, e._l(e.connTypeLabels, function (i) {
      return t("div", {
        key: i,
        staticClass: "hover:bg-[color:var(--proxy-item-bgc)] h-fit flex items-center break-all py-1 font-normal px-2 clickable gap-x-1",
        on: {
          click: function (t) {
            ((e.searchText = "".concat(e.filterTypes[e.filterTypeIndex].key, "=").concat(i)), (e.isShowTypeFilter = !1));
          }
        }
      }, [t("div", {
        staticClass: "icon text-sm"
      }, [e._v("search")]), e._v(" "), t("div", [e._v(e._s(i))])]);
    }), 0)]), e._v(" "), t("div", {
      staticClass: "header relative"
    }, [e._m(0), e._v(" "), t("div", {
      staticClass: "search-area relative"
    }, [t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.searchText,
        expression: "searchText"
      }],
      ref: "search-text-input",
      staticClass: "search-box",
      attrs: {
        type: Lg.text(),
        placeholder: Lg.search()
      },
      domProps: {
        value: e.searchText
      },
      on: {
        click: function (t) {
          (t.stopPropagation(), (e.isShowTypeFilter = !0), e.$refs["search-text-input"].focus());
        },
        change: function (t) {
          e.isShowTypeFilter = !1;
        },
        input: function (t) {
          t.target.composing || (e.searchText = t.target.value);
        }
      }
    }), e._v(" "), e.searchText ? t("span", {
      staticClass: "icon text-sm absolute right-2 h-full flex top-0 items-center clickable",
      on: {
        click: function (t) {
          (t.stopPropagation(), (e.searchText = ""), e.$refs["search-text-input"].focus(), (e.isShowTypeFilter = !0));
        }
      }
    }, [e._v("close")]) : e._e()]), e._v(" "), t("div", {
      staticClass: "header-right"
    }, [t("div", {
      staticClass: "total-hint"
    }, [e._v("\n        " + e._s(Lg.total() + ": ↑".concat(e.traffic(e.data.uploadTotal, 1), " ↓").concat(e.traffic(e.data.downloadTotal, 1))) + "\n      ")])])]), e._v(" "), t("div", {
      staticClass: "control-view border-b border-b-[color:var(--bc)]"
    }, [t("div", {
      staticClass: "labels overflow-clip justify-between w-full"
    }, [t("Hint", {
      class: e.calcLabelClasses(0),
      attrs: {
        hint: Lg.uploadSpeed()
      },
      on: {
        click: function (t) {
          return e.handleLableSelect(0);
        }
      }
    }, [t("div", {
      staticClass: "flex gap-1"
    }, [t("span", {
      staticClass: "icon"
    }, [e._v("upload")]), t("span", {
      staticClass: "icon"
    }, [e._v("speed")])])]), e._v(" "), t("Hint", {
      class: e.calcLabelClasses(1),
      attrs: {
        hint: Lg.downloadSpeed()
      },
      on: {
        click: function (t) {
          return e.handleLableSelect(1);
        }
      }
    }, [t("div", {
      staticClass: "flex gap-1"
    }, [t("span", {
      staticClass: "icon"
    }, [e._v("download")]), t("span", {
      staticClass: "icon"
    }, [e._v("speed")])])]), e._v(" "), t("Hint", {
      class: e.calcLabelClasses(2),
      attrs: {
        hint: Lg.uploadTraffic()
      },
      on: {
        click: function (t) {
          return e.handleLableSelect(2);
        }
      }
    }, [t("div", {
      staticClass: "flex gap-1"
    }, [t("span", {
      staticClass: "icon"
    }, [e._v("upload")]), t("span", {
      staticClass: "icon"
    }, [e._v("signal_cellular_alt")])])]), e._v(" "), t("Hint", {
      class: e.calcLabelClasses(3),
      attrs: {
        hint: Lg.downloadTraffic()
      },
      on: {
        click: function (t) {
          return e.handleLableSelect(3);
        }
      }
    }, [t("div", {
      staticClass: "flex gap-1"
    }, [t("span", {
      staticClass: "icon"
    }, [e._v("download")]), t("span", {
      staticClass: "icon"
    }, [e._v("signal_cellular_alt")])])]), e._v(" "), t("Hint", {
      class: e.calcLabelClasses(4),
      attrs: {
        hint: Lg.startTime()
      },
      on: {
        click: function (t) {
          return e.handleLableSelect(4);
        }
      }
    }, [t("span", {
      staticClass: "icon"
    }, [e._v("schedule")])]), e._v(" "), t("Hint", {
      class: e.calcLabelClasses(5),
      attrs: {
        hint: Lg.destination()
      },
      on: {
        click: function (t) {
          return e.handleLableSelect(5);
        }
      }
    }, [t("span", {
      staticClass: "icon"
    }, [e._v("computer")])]), e._v(" "), t("div", {
      staticClass: "flex-grow"
    }), e._v(" "), t("div", {
      class: ["close-all-btn", e.isPause ? "button-resume" : "button-pause"],
      on: {
        click: e.handleSwitchPauseStatus
      }
    }, [e._v("\n        " + e._s(e.isPause ? Lg.resume() : Lg.pause()) + "\n      ")]), e._v(" "), t("div", {
      staticClass: "close-all-btn",
      on: {
        click: e.handleCloseAllConnections
      }
    }, [e._v("\n        " + Lg.closeAll() + "\n        "), t("span", [e._v("(" + e._s(e.orderedConnections.length) + ")")])])], 1)]), e._v(" "), t("div", {
      staticClass: "scroll-view"
    }, e._l(e.orderedConnections, function (i) {
      return t("div", {
        key: i.id,
        class: ["conn-item", i.closed ? "conn-item-closed" : ""],
        on: {
          click: function (t) {
            return e.handleItemSelected(i);
          }
        }
      }, [t("div", [t("div", {
        staticClass: "conn-item-top"
      }, [t("div", {
        staticClass: "conn-host"
      }, [e._v("\n            " + e._s(i.metadata.host || i.metadata.destinationIP) + ":" + e._s(i.metadata.destinationPort) + "\n          ")])]), e._v(" "), t("div", {
        staticClass: "conn-labels"
      }, [t("div", {
        staticClass: "conn1"
      }, [e._v("\n            " + e._s(i.metadata.network.toUpperCase()) + "\n          ")]), e._v(" "), t("div", {
        staticClass: "conn2"
      }, [e._v(e._s(i.metadata.type))]), e._v(" "), e.settings.connShowProcess && e.connectionProcess(i) ? t("div", {
        staticClass: "conn7"
      }, [e._v("\n            " + e._s(e.connectionProcess(i)) + "\n          ")]) : e._e(), e._v(" "), e.connectionGroup(i) ? t("div", {
        staticClass: "conn3"
      }, [e._v("\n            " + e._s(e.connectionGroup(i)) + "\n          ")]) : e._e(), e._v(" "), e.connectionEndpoint(i) ? t("div", {
        staticClass: "conn4"
      }, [e._v("\n            " + e._s(e.connectionEndpoint(i)) + "\n          ")]) : e._e(), e._v(" "), t("div", {
        staticClass: "conn5"
      }, [e._v("\n            " + e._s(e.upperCaseFirst(e.fromNow(i.start))) + "\n          ")]), e._v(" "), i.speed.upload || i.speed.download ? t("div", {
        staticClass: "conn6"
      }, [e._v("\n            " + e._s(e.calcSpeedText(i)) + "\n          ")]) : e._e()])]), e._v(" "), i.closed || e.isPause ? e._e() : t("div", {
        staticClass: "close-btn",
        on: {
          click: function (t) {
            return (t.stopPropagation(), e.handleCloseConnection(i.id));
          }
        }
      }, [t("span", {
        staticClass: "icon text flex justify-center items-center w-full h-full"
      }, [e._v("block")])])]);
    }), 0), e._v(" "), e.detailConnectionId ? t("ConnectionInfoView", {
      attrs: {
        connection: e.detailConnection
      },
      on: {
        close: function (t) {
          e.detailConnectionId = "";
        }
      }
    }) : e._e()], 1);
  }, [function () {
    const Lg = new Language(modifyState.language);
    var e = this._self._c;
    return e("div", {
      staticClass: "title"
    }, [e("div", [this._v(Lg.connections())])]);
  }], !1, null, "39b270f2", null).exports;
};