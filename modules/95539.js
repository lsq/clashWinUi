const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    default: () => C
  }));
  var n = i(48926),
    o = i.n(n),
    s = i(59713),
    r = i.n(s),
    a = i(87757),
    l = i.n(a),
    c = (i(11442), i(58583)),
    d = i(23321),
    h = i(13338),
    u = i(83566),
    g = i(8369),
    p = i(72574),
    f = (i(51792), i(81518)),
    m = i(24883),
    v = i(17285),
    _ = i(72298);
  function b(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  function w(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? b(Object(i), !0).forEach(function (t) {
        r()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : b(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  const y = {
    name: "ScriptView",
    props: [],
    components: {
      Hint: h.Z,
      EscCapture: p.Z,
      Navigator,
      SelectView: v.Z
    },
    data: function () {
      return {
        editorCode: null,
        isShow: !1,
        resolve: null,
        reject: null,
        metadata: {
          type: 2,
          network: 0,
          host: "example.com",
          sourceIP: "",
          sourcePort: 7890,
          destinationIP: "",
          destinationPort: 443,
          dnsMode: "normal",
          processPath: "",
          specialProxy: ""
        },
        isLoading: !1
      };
    },
    watch: {
      isShow: function (e) {
        e || (this.editorCode && this.editorCode.dispose(), (this.editorCode = null));
      }
    },
    computed: w(w(w({}, (0, d.mapState)({})), (0, d.mapGetters)(["theme", "clashAxiosClient"])), {}, {
      saveHint: function () {
        const Lg = new Language(modifyState.language);
        return (0, u.V5)() ? "Command+S" : Lg.save() + "(Ctrl+S)";
      },
      mdt: {
        get: function () {
          return this.metadata.type - 2;
        },
        set: function (e) {
          this.metadata.type = e + 2;
        }
      },
      mdd: {
        get: function () {
          return ["normal", "fake-ip", "redir-host"].indexOf(this.metadata.dnsMode);
        },
        set: function (e) {
          this.metadata.dnsMode = ["normal", "fake-ip", "redir-host"][e];
        }
      }
    }),
    methods: {
      show: function () {
        var e = this;
        this.isShow = !0;
        var t = {
            theme: "vs-dark",
            fontFamily: "Consolas, Monaco, Lucida Console, Liberation Mono,\n        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
            automaticLayout: !0,
            fontSize: 14,
            minimap: {
              enabled: !1
            },
            contextmenu: !1,
            scrollbar: {
              verticalScrollbarSize: 12,
              horizontalScrollbarSize: 12
            },
            quickSuggestions: {
              other: !0,
              strings: !0
            },
            smoothScrolling: !0
          },
          i = m.Z.get(f.Z.TEST_SCRIPT_CONTENT) || 'def main(ctx, metadata):\n  ip = ctx.resolve_ip(metadata["host"])\n  if ip == "":\n    return "DIRECT"\n  region = ctx.geoip(ip)\n  if region == \'CN\':\n    return "DIRECT"\n  return "Proxy"';
        return (this.$nextTick(function () {
          ((e.editorCode = c.editor.create(e.$refs["editor-code"], w({
            value: i,
            language: "python"
          }, t))), e.editorCode.addAction({
            id: "test",
            label: "Test",
            run: function () {
              e.test();
            },
            keybindings: [c.KeyMod.CtrlCmd | c.KeyCode.KeyS]
          }), e.editorCode.setSelection(new c.Selection(1, 1, 1, 1)), (e.editorCode.getContribution("editor.linkDetector").openerService._defaultExternalOpener.openExternal = g.fl), e.editorCode.focus());
        }), new Promise(function (t, i) {
          ((e.resolve = t), (e.reject = i));
        }));
      },
      handleSaveClick: function () {
        this.test();
      },
      handleAbortClick: function () {
        var e = this;
        return o()(l().mark(function t() {
          return l().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                e.cancel();
              case 1:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleDocumentClick: function () {
        return o()(l().mark(function e() {
          return l().wrap(function (e) {
            for (;;) switch ((e.prev = e.next)) {
              case 0:
                _.shell.openExternal("https://web.archive.org/web/20230521134903/dreamacro.github.io/clash/premium/script.html");
              case 1:
              case "end":
                return e.stop();
            }
          }, e);
        }))();
      },
      test: function () {
        var e = this;
        const Lg = new Language(modifyState.language);
        return o()(l().mark(function t() {
          var i, n, o, s, r;
          return l().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                if (((i = e.editorCode.getValue()), m.Z.put(f.Z.TEST_SCRIPT_CONTENT, i), !e.resolve)) {
                  t.next = 19;
                  break;
                }
                return ((t.prev = 3), (e.isLoading = !0), (t.next = 7), e.clashAxiosClient.post("/script", {
                  metadata: e.metadata,
                  script: i
                }));
              case 7:
                ((n = t.sent), (o = n.data), (0, g.vC)({
                  type: "none",
                  message: Lg.success() + ", 结果: ".concat(o.result)
                }), (t.next = 16));
                break;
              case 12:
                ((t.prev = 12), (t.t0 = t.catch(3)), (r = t.t0.response), (0, g.vC)({
                  type: "error",
                  message: Lg.failWithError().concat((null == r || null === (s = r.data) || void 0 === s ? void 0 : s.message) || (null == r ? void 0 : r.data) || t.t0.message)
                }));
              case 16:
                return ((t.prev = 16), (e.isLoading = !1), t.finish(16));
              case 19:
              case "end":
                return t.stop();
            }
          }, t, null, [[3, 12, 16, 19]]);
        }))();
      },
      cancel: function () {
        (this.reject(), (this.isShow = !1));
      }
    },
    mounted: function () {},
    beforeDestroy: function () {}
  };
  (i(40433), i(33319));
  const C = (0, i(51900).Z)(y, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return e.isShow ? t("EscCapture", {
      staticClass: "main-script-view line-numbers bg-[color:var(--mask-c)]",
      on: {
        esc: e.handleAbortClick,
        mousedown: function (t) {
          return t.target !== t.currentTarget ? null : e.handleAbortClick.apply(null, arguments);
        }
      }
    }, [t("div", {
      staticClass: "card flex flex-col bg-[color:#1C1C1C] text-white"
    }, [t("div", {
      staticClass: "px-6 pt-3 text-lg"
    }, [e._v(Lg.scriptTest())]), e._v(" "), t("div", {
      staticClass: "metadata pb-3 pt-2 px-6 flex-grow-0 h-fit gap-x-5 grid grid-cols-2 gap-1 text-sm"
    }, [t("div", {
      staticStyle: {
        "grid-column": "1 / -1"
      }
    }, [t("span", [e._v(Lg.type())]), e._v(" "), t("SelectView", {
      staticClass: "theme-dark",
      attrs: {
        items: ["HTTP", "HTTP Connect", "Socks4", "Socks5", "Redir", "TProxy", "TUN", "Tunnel"]
      },
      model: {
        value: e.mdt,
        callback: function (t) {
          e.mdt = t;
        },
        expression: "mdt"
      }
    }), e._v(" "), t("div", {
      staticClass: "flex-grow"
    })], 1), e._v(" "), t("div", [t("span", [e._v(Lg.network())]), e._v(" "), t("SelectView", {
      staticClass: "theme-dark",
      attrs: {
        items: ["TCP", "UDP"]
      },
      model: {
        value: e.metadata.network,
        callback: function (t) {
          e.$set(e.metadata, "network", t);
        },
        expression: "metadata.network"
      }
    })], 1), e._v(" "), t("div", [t("span", [e._v(Lg.modeDNS())]), e._v(" "), t("SelectView", {
      staticClass: "theme-dark",
      attrs: {
        items: ["normal", "fake-ip", "redir-host"]
      },
      model: {
        value: e.mdd,
        callback: function (t) {
          e.mdd = t;
        },
        expression: "mdd"
      }
    })], 1), e._v(" "), t("div", [t("span", [e._v(Lg.host())]), e._v(" "), t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.metadata.host,
        expression: "metadata.host"
      }],
      attrs: {
        type: "text"
      },
      domProps: {
        value: e.metadata.host
      },
      on: {
        input: function (t) {
          t.target.composing || e.$set(e.metadata, "host", t.target.value);
        }
      }
    })]), e._v(" "), t("div", [t("span", [e._v(Lg.sourceIP())]), e._v(" "), t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.metadata.sourceIP,
        expression: "metadata.sourceIP"
      }],
      attrs: {
        type: "text"
      },
      domProps: {
        value: e.metadata.sourceIP
      },
      on: {
        input: function (t) {
          t.target.composing || e.$set(e.metadata, "sourceIP", t.target.value);
        }
      }
    })]), e._v(" "), t("div", [t("span", [e._v(Lg.sourcePort())]), e._v(" "), t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.metadata.sourcePort,
        expression: "metadata.sourcePort"
      }],
      attrs: {
        type: "number"
      },
      domProps: {
        value: e.metadata.sourcePort
      },
      on: {
        input: function (t) {
          t.target.composing || e.$set(e.metadata, "sourcePort", t.target.value);
        }
      }
    })]), e._v(" "), t("div", [t("span", [e._v(Lg.destinationIP())]), e._v(" "), t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.metadata.destinationIP,
        expression: "metadata.destinationIP"
      }],
      attrs: {
        type: "text"
      },
      domProps: {
        value: e.metadata.destinationIP
      },
      on: {
        input: function (t) {
          t.target.composing || e.$set(e.metadata, "destinationIP", t.target.value);
        }
      }
    })]), e._v(" "), t("div", [t("span", [e._v(Lg.destinationPort())]), e._v(" "), t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.metadata.destinationPort,
        expression: "metadata.destinationPort"
      }],
      attrs: {
        type: "number"
      },
      domProps: {
        value: e.metadata.destinationPort
      },
      on: {
        input: function (t) {
          t.target.composing || e.$set(e.metadata, "destinationPort", t.target.value);
        }
      }
    })]), e._v(" "), t("div", [t("span", [e._v(Lg.processPath())]), e._v(" "), t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.metadata.processPath,
        expression: "metadata.processPath"
      }],
      attrs: {
        type: "text"
      },
      domProps: {
        value: e.metadata.processPath
      },
      on: {
        input: function (t) {
          t.target.composing || e.$set(e.metadata, "processPath", t.target.value);
        }
      }
    })])]), e._v(" "), t("div", {
      ref: "editor-code",
      staticClass: "editor-code flex-grow-1"
    }), e._v(" "), t("div", {
      staticClass: "btns"
    }, [t("Hint", {
      staticClass: "abort-btn clickable",
      attrs: {
        hint: Lg.quit()
      },
      on: {
        click: e.handleAbortClick
      }
    }, [t("span", {
      staticClass: "icon text-[20px] text-white"
    }, [e._v("close")])]), e._v(" "), t("Hint", {
      staticClass: "bg-cyan-500 clickable",
      attrs: {
        hint: Lg.docs()
      },
      on: {
        click: e.handleDocumentClick
      }
    }, [t("span", {
      staticClass: "icon text-[20px] text-white"
    }, [e._v("article")])]), e._v(" "), e.isLoading ? t("Hint", {
      staticClass: "bg-gray-500 clickable",
      attrs: {
        hint: "Please wait"
      }
    }, [t("span", {
      staticClass: "icon text-[20px] text-white"
    }, [e._v("pending")])]) : t("Hint", {
      staticClass: "save-btn clickable",
      attrs: {
        hint: e.saveHint
      },
      on: {
        click: e.handleSaveClick
      }
    }, [t("span", {
      staticClass: "icon text-[20px] text-white"
    }, [e._v("play_arrow")])])], 1)])]) : e._e();
  }, [], !1, null, "05227e49", null).exports;
};