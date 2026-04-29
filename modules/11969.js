const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z: () => N
  });
  var n = i(48926),
    o = i.n(n),
    s = i(63038),
    r = i.n(s),
    a = i(319),
    l = i.n(a),
    c = i(59713),
    d = i.n(c),
    h = i(87757),
    u = i.n(h),
    g = i(10605),
    p = i.n(g),
    f = i(8369),
    m = i(23321),
    v = i(24793),
    _ = i(33182),
    b = i(72298);
  i(11442);
  const w = require("read-last-lines");
  var y = i(17285),
    C = i(24883),
    x = i(81518);
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
  const Lg = new Language(modifyState.language);
  const L = {
    props: [],
    data: function () {
      return {
        listData: [],
        randomColor: [],
        client: null,
        isAutoScroll: !0,
        dnsRecords: {},
        logLevel: parseInt(C.Z.get(x.Z.LOG_MOUDLE_LEVEL)) || 0,
        logTypeEmoji: {
          info: "✅",
          debug: "🪲",
          warn: "‼️",
          error: "❌"
        },
        searchText: "",
        showDetailItemIDs: [],
        logStyle: parseInt(C.Z.get(x.Z.LOG_MODULE_STYLE)) || 0
      };
    },
    watch: {
      searchText: function (e) {
        C.Z.put(x.Z.LOG_MODULE_SEARCH_TEXT, e);
      },
      isWindowShow: function (e) {
        this.handleWindwEvent(e);
      },
      clashStatus: function (e) {
        (this.closeLogStream(), e === _.Z.CONNECTED && this.openLogStream());
      },
      logStyle: function (e) {
        C.Z.put(x.Z.LOG_MODULE_STYLE, e);
      },
      logLevel: function (e) {
        (this.closeLogStream(), this.openLogStream(), C.Z.put(x.Z.LOG_MOUDLE_LEVEL, e));
      }
    },
    computed: k(k(k({}, (0, m.mapState)({
      isWindowShow: function (e) {
        return e.app.isWindowShow;
      },
      clashStatus: function (e) {
        return e.app.clashStatus;
      },
      mode: function (e) {
        return e.app.mode;
      },
      logFilePath: function (e) {
        return e.app.logFilePath;
      },
      settings: function (e) {
        return e.app.settings;
      }
    })), (0, m.mapGetters)(["clashWSClient"])), {}, {
      logList: function () {
        var e = this;
        return this.searchText && this.searchTextReg ? this.listData.filter(function (t) {
          return e.searchTextReg.test((0, f.Mf)(t));
        }).slice(-200) : this.listData.slice(-200);
      },
      searchTextReg: function () {
        try {
          return new RegExp(this.searchText, "i");
        } catch (e) {}
        return null;
      },
      buttonText: function () {
        return this.client && 1 === this.client.readyState ? Lg.pause() : Lg.start();
      },
      buttonStyle: function () {
        var e = ["button"];
        return (this.client && 1 === this.client.readyState ? e.push("button-off") : e.push("button-on"), e);
      }
    }),
    filters: {
      msgFilter: function (e) {
        return /(TCP|UDP)/.test(e) ? RegExp.$1.trim().toUpperCase() : e;
      }
    },
    methods: k(k({}, (0, m.mapActions)(["getMode"])), {}, {
      isShowDetails: function (e) {
        var t = e.id;
        return (1 === this.logStyle || "" !== this.searchText || this.showDetailItemIDs.includes(t));
      },
      addrFieldStr: function (e) {
        var t = (e || {}).fields,
          i = (void 0 === t ? [] : t).find(function (e) {
            return "rAddr" === e.key;
          });
        return i ? "".concat(i.value) : "";
      },
      copyPayload: function (e) {
        var t = e.fields.find(function (e) {
          return "rAddr" === e.key;
        });
        t && (b.clipboard.writeText(t.value), (0, f.c0)("Copied to Clipboad!", t.value));
      },
      logItemClasses: function (e) {
        var t = ["dark", "2077"].includes(this.theme);
        return {
          debugdark: "debug" === e.type && !t,
          debug: "debug" === e.type && t,
          info: "info" === e.type,
          warn: "warn" === e.type,
          error: "error" === e.type
        };
      },
      randomBGC: function (e) {
        if ("light" === this.theme) {
          var t = this.randomColor.find(function (t) {
            return t.type === e;
          });
          if (t) return {
            color: "rgb(".concat(t.r, ",").concat(t.g, ",").concat(t.b, ")")
          };
          var i = Math.floor(150 * Math.random() + 10),
            n = Math.floor(150 * Math.random() + 10),
            o = Math.floor(150 * Math.random() + 10);
          return (this.randomColor.push({
            type: e,
            r: i,
            g: n,
            b: o
          }), {
            color: "rgb(".concat(i, ",").concat(n, ",").concat(o, ")")
          });
        }
      },
      parseLog: function (e) {
        var t = this,
          i = e.level,
          n = e.message,
          o = e.time,
          s = e.fields;
        this.listData = [].concat(l()(this.listData), [{
          type: i,
          msg: n,
          time: o || p()().format("HH:mm:ss"),
          fields: s.filter(function (e) {
            var i = e.key,
              n = e.value;
            return "mode" !== i && n !== t.mode;
          }),
          id: (0, v.uniqueId)()
        }]);
      },
      openLogStream: function () {
        var e = this,
          t = this.clashWSClient("logs", ["level=".concat(["info", "debug"][this.logLevel]), "format=structured"]);
        t && (t.on("message", function (t) {
          try {
            e.parseLog(JSON.parse(t));
          } catch (e) {
            console.error("failed to parse log", t);
          }
        }), (this.client = t));
      },
      closeLogStream: function () {
        (this.client && this.client.terminate(), (this.client = null));
      },
      handleItemClick: function (e) {
        var t = e.id,
          i = this.showDetailItemIDs.findIndex(function (e) {
            return e === t;
          });
        i > -1 ? this.showDetailItemIDs.splice(i, 1) : this.showDetailItemIDs.push(t);
      },
      handleItemRightClick: function (e, t) {
        var i = this;
        this.isAutoScroll = !1;
        const Lg = new Language(modifyState.language);
        var n = t.fields.find(function (e) {
          return "rAddr" === e.key;
        });
        this.$menu([{
          text: (null == n ? void 0 : n.value) || "Unknown",
          disabled: !0,
          icon: "title"
        }, {
          text: Lg.copy(),
          icon: "content_copy",
          click: function () {
            i.copyPayload(t);
          }
        }], e);
      },
      handleBtnClick: function () {
        this.client ? this.closeLogStream() : this.openLogStream();
      },
      handleClear: function () {
        this.listData = [];
      },
      handleWindwEvent: function (e) {
        e ? this.openLogStream() : this.closeLogStream();
      },
      handleScroll: function (e) {
        var t = e.target;
        if (t) {
          var i = t.scrollTop,
            n = t.scrollHeight,
            o = t.clientHeight;
          this.isAutoScroll = Math.abs(n - i - o) < 1;
        }
      },
      parseStringLog: function (e) {
        var t = this,
          i = e.payload,
          n = e.type,
          o = e.time,
          s = "";
        new RegExp("^([^=]+)( .+=|$)").test(i) && (s = RegExp.$1.trim());
        var a = l()(i.matchAll(/([^\s]+?)=([^=]+)(?= .+=|$)/g)).reduce(function (e, i) {
          var n = r()(i, 3),
            o = n[1],
            s = n[2];
          return "mode" === o && s === t.mode ? e : [].concat(l()(e), [{
            key: o.trim(),
            value: s.trim().replace(/^"|"$/g, "")
          }]);
        }, []);
        return {
          msg: s,
          id: (0, v.uniqueId)(),
          type: n,
          fields: a,
          time: o || p()().format("HH:mm:ss")
        };
      }
    }),
    beforeRouteEnter: function (e, t, i) {
      var n;
      i(((n = o()(u().mark(function e(t) {
        var i, n;
        return u().wrap(function (e) {
          for (;;) switch ((e.prev = e.next)) {
            case 0:
              if (((t.searchText = C.Z.get(x.Z.LOG_MODULE_SEARCH_TEXT) || ""), (i = t.settings.logPreloadLineCount), !((n = i >= 0 ? i : 30) > 0))) {
                e.next = 13;
                break;
              }
              return ((e.prev = 4), (e.next = 7), w.read(t.logFilePath, n));
            case 7:
              (e.sent.split("\n").forEach(function (e) {
                /^(.*?) (.*?) (.+)$/.test(e) && (t.listData = [].concat(l()(t.listData), [t.parseStringLog({
                  payload: RegExp.$3.trim(),
                  type: {
                    ERR: "error",
                    WRN: "warn",
                    INF: "info",
                    DBG: "debug",
                    TRC: "trace",
                    FTL: "fatal"
                  }[RegExp.$2.trim()],
                  time: RegExp.$1.trim()
                })]));
              }), (e.next = 13));
              break;
            case 11:
              ((e.prev = 11), (e.t0 = e.catch(4)));
            case 13:
              (t.getMode(), t.openLogStream(), t.$refs.list.addEventListener("scroll", t.handleScroll));
            case 16:
            case "end":
              return e.stop();
          }
        }, e, null, [[4, 11]]);
      }))), function (e) {
        return n.apply(this, arguments);
      }));
    },
    beforeRouteLeave: function (e, t, i) {
      (this.closeLogStream(), this.$refs.list.removeEventListener("scroll", this.handleScroll), i());
    },
    updated: function () {
      this.$nextTick(function () {
        var e = this.$refs.list;
        e && this.isAutoScroll && (e.scrollTop = e.scrollHeight);
      });
    },
    components: {
      SelectView: y.Z
    }
  };
  (i(74863), i(15586));
  const N = (0, i(51900).Z)(L, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return t("div", {
      staticClass: "main-log-view w-full"
    }, [t("div", {
      staticClass: "title"
    }, [t("div", {
      staticClass: "text flex-shrink-0"
    }, [t("div", [e._v(Lg.requestLogs())]), e._v(" "), t("div", {
      staticClass: "hint"
    }, [e._v(Lg.chains() + ("global" == e._s(e.mode) ? Lg.global() : "rule" == e._s(e.mode) ? Lg.rule() : "direct" == e._s(e.mode) ? Lg.direct() : "script" == e._s(e.mode) ? Lg.script() : e._s(e.mode)))])]), e._v(" "), t("div", {
      staticClass: "relative w-full mx-4",
      attrs: {
        title: e.searchTextReg
      }
    }, [t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.searchText,
        expression: "searchText"
      }],
      ref: "search-text-input",
      staticClass: "outline-none text-base w-full h-[35px] pl-3 pr-6",
      attrs: {
        type: Lg.text(),
        placeholder: Lg.search()
      },
      domProps: {
        value: e.searchText
      },
      on: {
        input: function (t) {
          t.target.composing || (e.searchText = t.target.value);
        }
      }
    }), e._v(" "), e.searchText ? t("span", {
      staticClass: "icon text-sm absolute right-2 h-full flex top-0 items-center clickable",
      on: {
        click: function (t) {
          ((e.searchText = ""), e.$refs["search-text-input"].focus());
        }
      }
    }, [e._v("close")]) : e._e()]), e._v(" "), t("div", {
      staticClass: "btns"
    }, [t("div", {
      staticClass: "flex gap-y-1 flex-col text-base"
    }, [t("SelectView", {
      staticClass: "mr-4",
      attrs: {
        items: Lg.simpleAndDetailed()
      },
      model: {
        value: e.logStyle,
        callback: function (t) {
          e.logStyle = t;
        },
        expression: "logStyle"
      }
    }), e._v(" "), t("SelectView", {
      staticClass: "mr-4",
      attrs: {
        items: Lg.infoAndDebug()
      },
      model: {
        value: e.logLevel,
        callback: function (t) {
          e.logLevel = t;
        },
        expression: "logLevel"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "button button-clear mr-2",
      on: {
        click: e.handleClear
      }
    }, [e._v(Lg.clear())]), e._v(" "), t("div", {
      class: e.buttonStyle,
      on: {
        click: e.handleBtnClick
      }
    }, [e._v(e._s(e.buttonText))])])]), e._v(" "), t("div", {
      ref: "list",
      staticClass: "log-list w-full"
    }, [0 === e.listData.length ? t("div", {
      staticClass: "empty-list"
    }, [t("div", [e._v(Lg.emptyLogList())]), e._v(" "), t("div", [e._v(Lg.refreshBrowserMakeRequest())])]) : e._e(), e._v(" "), e._l(e.logList, function (i) {
      return t("div", {
        key: i.id,
        staticClass: "clickable log-item w-full",
        on: {
          click: function (t) {
            return e.handleItemClick(i);
          },
          contextmenu: function (t) {
            return e.handleItemRightClick(t, i);
          }
        }
      }, [t("div", {
        staticClass: "text-sm w-full"
      }, [t("div", {
        staticClass: "flex justify-between"
      }, [t("div", {
        staticClass: "text-xs",
        class: e.logItemClasses(i)
      }, [e._v("\n            " + e._s(e.logTypeEmoji[i.type]) + "\n            " + e._s(i.msg) + "\n          ")]), e._v(" "), t("div", {
        staticClass: "text-xs opacity-60"
      }, [e._v(e._s(i.time))])]), e._v(" "), e.addrFieldStr(i) ? t("div", {
        staticClass: "text-[14px] flex items-center gap-x-1"
      }, [t("span", {
        staticClass: "opacity-40 text-[10px] rotate-90 inline-block transition-all duration-200 ease-in-out",
        style: {
          transform: e.isShowDetails(i) ? "rotate(180deg)" : ""
        }
      }, [e._v("▲")]), e._v("\n          " + e._s(e.addrFieldStr(i)) + "\n        ")]) : e._e(), e._v(" "), e.isShowDetails(i) ? t("div", {
        staticClass: "flex text-xs flex-wrap gap-x-3"
      }, [e._l(i.fields, function (i) {
        return [["rAddr"].includes(i.key) ? e._e() : t("div", {
          key: i.key,
          staticClass: "flex gap-x-[2px] items-baseline w-fit"
        }, [t("div", {
          staticClass: "text-xs items-baseline text-[color:var(--log-item-payload-c)] flex-shrink-0"
        }, [e._v("\n                " + e._s("lAddr" === i.key ? "FROM" : i.key.toUpperCase()) + "\n              ")]), e._v(" "), t("span", [e._v("⇢")]), e._v(" "), t("div", {
          staticClass: "break-all max-w-full opacity-80"
        }, [e._v("\n                " + e._s(i.value) + "\n              ")])])];
      })], 2) : e._e()])]);
    })], 2)]);
  }, [], !1, null, "6acd51f2", null).exports;
};