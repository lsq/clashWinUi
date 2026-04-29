const LANGUAGE = "language";
const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z: () => ie
  });
  var n = i(319),
    o = i.n(n),
    s = i(63038),
    r = i.n(s),
    a = i(48926),
    l = i.n(a),
    c = i(59713),
    d = i.n(c),
    h = i(87757),
    u = i.n(h),
    g = (i(24883), i(11442)),
    p = (i(24793), i(57147)),
    f = i(23321);
  function m(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  const v = {
    name: "setting-section",
    props: {
      title: String
    },
    data: function () {
      return {};
    },
    computed: (function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2 ? m(Object(i), !0).forEach(function (t) {
          d()(e, t, i[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : m(Object(i)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
      }
      return e;
    })({}, (0, f.mapState)({})),
    mounted: function () {}
  };
  i(79820);
  var _ = i(51900);
  const b = (0, _.Z)(v, function () {
    var e = this,
      t = e._self._c;
    return e.$slots.default.length ? t("div", {
      staticClass: "main-setting-section"
    }, [t("div", {
      staticClass: "title"
    }, [e._v(e._s(e.title))]), e._v(" "), t("div", {
      staticClass: "content"
    }, [e._t("default")], 2)]) : e._e();
  }, [], !1, null, "18adce47", null).exports;
  var w = i(12436);
  function y(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  function C(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? y(Object(i), !0).forEach(function (t) {
        d()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : y(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  const x = {
    name: "key-capture",
    props: {
      value: {
        type: String,
        default: ""
      },
      placeholder: String
    },
    model: {
      prop: "value",
      event: "change"
    },
    data: function () {
      return {
        isRecording: !1,
        keyChain: []
      };
    },
    watch: {
      isRecording: function (e) {
        e || this.$emit("change", this.shortcut);
      }
    },
    computed: C(C({}, (0, f.mapState)({})), {}, {
      shortcut: function () {
        return this.keyChain.join("+");
      },
      hint: function () {
        const Lg = new Language(modifyState.language);
        return this.isRecording ? Lg.recording() : this.placeholder;
      }
    }),
    methods: {
      handleKeyDown: function (e) {
        if (this.isRecording) {
          var t = e.key;
          13 !== e.keyCode ? t && this.keyChain.push(t) : (this.isRecording = !1);
        }
      },
      handleClick: function () {
        ((this.keyChain = []), (this.isRecording = !0), this.$emit("change", ""));
      },
      handleBlur: function () {
        this.isRecording = !1;
      },
      mounted: function () {}
    },
    mounted: function () {
      this.keyChain = this.value.split("+");
    }
  };
  i(47191);
  const S = (0, _.Z)(x, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return t("div", {
      staticClass: "main-key-capture"
    }, [t("input", {
      class: [e.isRecording ? "recording" : ""],
      style: {
        padding: "10px"
      },
      attrs: {
        placeholder: e.hint,
        readonly: ""
      },
      domProps: {
        value: e.shortcut
      },
      on: {
        click: e.handleClick,
        keydown: e.handleKeyDown,
        blur: e.handleBlur
      }
    }), e._v(" "), t("div", {
      staticClass: "hint",
      class: [e.isRecording ? "" : "hint-hide"]
    }, [e._v("\n    " + Lg.pressEnterStop() + "\n  ")])]);
  }, [], !1, null, "2ddf36e7", null).exports;
  var k = i(17285),
    L = i(62639);
  function N(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  const D = {
    name: "more-hint",
    props: {
      text: String,
      clickable: {
        type: Boolean,
        default: !0
      }
    },
    computed: (function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2 ? N(Object(i), !0).forEach(function (t) {
          d()(e, t, i[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : N(Object(i)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
      }
      return e;
    })({}, (0, f.mapState)({}))
  };
  i(65549);
  const I = (0, _.Z)(D, function () {
    var e = this,
      t = e._self._c;
    return t("div", {
      class: ["main-more-hint", e.clickable ? "clickable" : ""],
      on: {
        click: function (t) {
          return e.$emit("click");
        }
      }
    }, [t("div", {
      staticClass: "text"
    }, [e._v(e._s(e.text))]), e._v(" "), e.clickable ? t("div", {
      staticClass: "tirangle"
    }) : e._e()]);
  }, [], !1, null, "6a8f4af4", null).exports;
  const E = {
    name: "separator"
  };
  i(67664);
  const T = (0, _.Z)(E, function () {
    return (0, this._self._c)("div", {
      staticClass: "main-settings-separator"
    });
  }, [], !1, null, "26bdfd95", null).exports;
  var M = i(51109);
  const A = {
    name: "TrayOrder",
    components: {
      draggable: i.n(M)()
    },
    props: {
      arr: {
        type: Array,
        default: function () {
          return [[], []];
        }
      }
    },
    model: {
      prop: "arr",
      event: "drag"
    },
    watch: {
      arr: {
        handler: function (e) {
          this.array = e;
        },
        deep: !0
      }
    },
    data: function () {
      return {
        array: this.arr
      };
    },
    methods: {
      handleDrag: function (e) {
        this.$emit("drag", this.array);
      }
    },
    mounted: function () {}
  };
  i(15907);
  const O = (0, _.Z)(A, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return t("div", {
      staticClass: "tray-order-main"
    }, [t("div", {
      staticClass: "title"
    }, [e._v(Lg.show() + ":")]), e._v(" "), t("draggable", {
      staticClass: "list left-list",
      attrs: {
        group: "tray",
        list: e.array[0]
      },
      on: {
        change: e.handleDrag
      }
    }, e._l(e.array[0], function (e) {
      return t("img", {
        key: e,
        staticClass: "cursor-move",
        attrs: {
          src: "static/imgs/tray-".concat(e, ".png"),
          alt: ""
        }
      });
    }), 0), e._v(" "), t("div", {
      staticClass: "title"
    }, [e._v(Lg.hide() + ":")]), e._v(" "), t("draggable", {
      staticClass: "list",
      attrs: {
        group: "tray",
        list: e.array[1]
      },
      on: {
        change: e.handleDrag
      }
    }, e._l(e.array[1], function (e) {
      return t("img", {
        key: e,
        staticClass: "cursor-move",
        attrs: {
          src: "static/imgs/tray-".concat(e, ".png"),
          alt: ""
        }
      });
    }), 0)], 1);
  }, [], !1, null, "40749f51", null).exports;
  var P = i(11287),
    R = i(13338),
    F = i(8359),
    B = i(10870),
    V = i(97520),
    W = i(72298),
    H = i(71017),
    z = i.n(H),
    j = i(32081),
    U = null,
    $ = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "code --wait";
      return new Promise(function (n, o) {
        ((U = o), W.ipcRenderer.invoke("app", "getPath", "temp").then(function (s) {
          var r = (0, H.join)(s, "close-to-save.".concat(e));
          ((0, p.writeFileSync)(r, t), (0, j.exec)("".concat(i, " ").concat(r), {
            windowsHide: !0
          }, function (e, t, i) {
            e && o(e);
          }).on("exit", function () {
            n((0, p.readFileSync)(r).toString());
          }));
        }).catch(o));
      });
    },
    K = i(251),
    q = i(83566),
    Z = i(86173),
    G = i.n(Z),
    Y = i(8369),
    Q = i(36336),
    X = i(58511);
  function J(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  function ee(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? J(Object(i), !0).forEach(function (t) {
        d()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : J(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  const te = {
    components: {
      Section: b,
      SimpleInput: w.Z,
      KeyCapture: S,
      MoreHint: I,
      SelectView: k.Z,
      SwitchView: L.Z,
      Separator: T,
      TrayOrder: O,
      Navigator: P.Z,
      Hint: R.Z,
      Info: Q.Z
    },
    data: function () {
      return (P.Z, {
        scrollTop: 0,
        fontFamilyPlaceholder: (0, q.V5)() ? "PingFang SC" : (0, q.Kr)() ? "Microsoft Yahei" : "system-ui",
        isEditingExternal: !1,
        sections: []
      });
    },
    computed: ee(ee({}, (0, f.mapState)({
      detectedInterfaceName: function (e) {
        return e.app.detectedInterfaceName;
      },
      clashPath: function (e) {
        return e.app.clashPath;
      },
      confData: function (e) {
        return e.app.confData;
      }
    })), (0, f.mapGetters)(["clashAxiosClient", "secret"])),
    watch: {
      "sts.profilePath": function () {
        this.refreshCore();
      }
    },
    methods: ee(ee(ee({}, (0, f.mapMutations)({
      saveSettingsObject: "SAVE_SETTINGS_OBJECT",
      setConfData: "SET_CONF_DATA"
    })), (0, f.mapActions)(["getParserLogPath", "getScriptLogPath"])), {}, {
      refreshCore: function () {
        var e = this;
        return l()(u().mark(function t() {
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), e.$parent.handlerRestartClash());
              case 2:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleNavigatToGroup: function (e) {
        var t = this.$refs["mixin-scroll-content"],
          i = t.children[e];
        this.$nextTick(function () {
          t.scrollTop = i.offsetTop - 110;
        });
      },
      cancelExternalEdit: function () {
        U && U();
      },
      edit: function (e) {
        var t = arguments,
          i = this;
        return l()(u().mark(function n() {
          var o, s, r, a, l, c, d, h, g, p, f, m;
          return u().wrap(function (n) {
            for (;;) switch ((n.prev = n.next)) {
              case 0:
                if (((o = t.length > 1 && void 0 !== t[1] ? t[1] : ""), (s = t.length > 2 && void 0 !== t[2] ? t[2] : "yaml"), (r = !1), (n.prev = 3), (a = i.settings), (l = a[e]), (c = a.editor), l || (l = o), 0 !== (d = void 0 === c ? 0 : c))) {
                  n.next = 21;
                  break;
                }
                return ((n.prev = 7), (n.next = 10), i.$code({
                  code: l,
                  language: s,
                  fontSize: i.settings.editorFontSize
                }));
              case 10:
                ((h = n.sent), (g = h.code), (p = void 0 === g ? "" : g), (i.settings[e] = p), (r = p !== l), (n.next = 19));
                break;
              case 17:
                ((n.prev = 17), (n.t0 = n.catch(7)));
              case 19:
                n.next = 37;
                break;
              case 21:
                if (1 !== d) {
                  n.next = 30;
                  break;
                }
                return ((i.isEditingExternal = !0), (n.next = 25), $(s, l));
              case 25:
                ((f = n.sent), (i.settings[e] = f), (r = f !== l), (n.next = 37));
                break;
              case 30:
                if (2 !== d) {
                  n.next = 37;
                  break;
                }
                return ((i.isEditingExternal = !0), (n.next = 34), $(s, l, i.settings.editorCustomCommand || "subl --wait"));
              case 34:
                ((m = n.sent), (i.settings[e] = m), (r = m !== l));
              case 37:
                n.next = 41;
                break;
              case 39:
                ((n.prev = 39), (n.t1 = n.catch(3)));
              case 41:
                return ((i.isEditingExternal = !1), n.abrupt("return", r));
              case 43:
              case "end":
                return n.stop();
            }
          }, n, null, [[3, 39], [7, 17]]);
        }))();
      },
      handleEditBypass: function () {
        var e = this;
        return l()(u().mark(function t() {
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), e.edit("bypassText", g.stringify({
                  bypass: F.Z
                })));
              case 2:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleEditPACContent: function () {
        var e = this;
        return l()(u().mark(function t() {
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), e.edit("pacContentText", B.Z, "javascript"));
              case 2:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleEditMixinYAML: function () {
        var e = this;
        return l()(u().mark(function t() {
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), e.edit("mixinText", "mixin: # object\n"));
              case 2:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleEditMixinJS: function () {
        var e = this;
        return l()(u().mark(function t() {
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ("module.exports.parse = ({ content, name, url }, { yaml, axios, notify }) => {\n  return content\n}", (t.next = 3), e.edit("mixinCode", "module.exports.parse = ({ content, name, url }, { yaml, axios, notify }) => {\n  return content\n}", "javascript"));
              case 3:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleEditUnsafeURLs: function () {
        var e = this;
        return l()(u().mark(function t() {
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), e.edit("unsafeURLsText", "urls: # array\n"));
              case 2:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleEditHeaders: function () {
        var e = this;
        return l()(u().mark(function t() {
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), e.edit("headersText", "headers: # object\n"));
              case 2:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleEditChildProcess: function () {
        var e = this;
        return l()(u().mark(function t() {
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), e.edit("childProcessText", "processes: # array\n"));
              case 2:
                if (!t.sent) {
                  t.next = 4;
                  break;
                }
                e.refreshCore();
              case 4:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleSelectInterface: function () {
        var e = this;
        const Lg = new Language(modifyState.language);
        return l()(u().mark(function t() {
          var i, n, s, a;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.prev = 0), (i = (0, V.r)().map(function (e) {
                  return e.name;
                })), (t.next = 4), e.$select({
                  title: Lg.chooseOutboundInterface(),
                  message: Lg.chooseOutboundInterfaceDescribe(),
                  items: [].concat(o()(i), [Lg.reset()]),
                  isLastDifferent: !0
                }));
              case 4:
                ((n = t.sent), (s = r()(n, 1)), (a = s[0]) === i.length ? (e.settings.interfaceName = "") : (e.settings.interfaceName = i[a]), (t.next = 12));
                break;
              case 10:
                ((t.prev = 10), (t.t0 = t.catch(0)));
              case 12:
              case "end":
                return t.stop();
            }
          }, t, null, [[0, 10]]);
        }))();
      },
      handleEditActionScripts: function () {
        var e = this;
        return l()(u().mark(function t() {
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), e.edit("scriptsText", g.stringify({
                  scripts: {
                    proxy: {},
                    profile: {}
                  }
                })));
              case 2:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleEditSSIDStrategy: function () {
        var e = this;
        return l()(u().mark(function t() {
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), e.edit("ssidStrategyText", "strategy: # object\n"));
              case 2:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleFetchCurrentSSID: function () {
        var e = this;
        const Lg = new Language(modifyState.language);
        return l()(u().mark(function t() {
          var i, n, s, a;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((i = (0, X.S)().reduce(function (e, t) {
                  var i = t.SSID;
                  return (i && e.push(i), e);
                }, [])), (t.next = 3), e.$select({
                  title: Lg.currentSSID(),
                  message: Lg.currentSSIDDescribe(),
                  items: [].concat(o()(i), [Lg.cancel()])
                }));
              case 3:
                ((n = t.sent), (s = r()(n, 1)), (a = s[0]) !== i.length && W.clipboard.writeText(i[a]));
              case 7:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleOpenActionScriptsConsoleFile: function () {
        var e = this;
        return l()(u().mark(function t() {
          var i;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), e.getScriptLogPath());
              case 2:
                ((i = t.sent), (0, p.existsSync)(i) || (0, p.writeFileSync)(i, ""), W.shell.openPath(i));
              case 5:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleEditProfileParsers: function () {
        var e = this;
        return l()(u().mark(function t() {
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), e.edit("profileParsersText", "parsers: # array\n"));
              case 2:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleOpenConsoleFile: function () {
        var e = this;
        return l()(u().mark(function t() {
          var i;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), e.getParserLogPath());
              case 2:
                ((i = t.sent), (0, p.existsSync)(i) || (0, p.writeFileSync)(i, ""), W.shell.openPath(i));
              case 5:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleChooseDefaultIcon: function () {
        var e = this;
        return l()(u().mark(function t() {
          var i;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), e.chooseFileOrPath());
              case 2:
                (i = t.sent) && (e.settings.iconDefault = i);
              case 4:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleChooseSystemProxytOnIcon: function () {
        var e = this;
        return l()(u().mark(function t() {
          var i;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), e.chooseFileOrPath());
              case 2:
                (i = t.sent) && (e.settings.iconSystemProxy = i);
              case 4:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleChooseProfilePath: function () {
        var e = this;
        return l()(u().mark(function t() {
          var i;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), e.chooseFileOrPath(!1));
              case 2:
                (i = t.sent) && (e.settings.profilePath = i);
              case 4:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleSelectTrayScriptPath: function () {
        var e = this;
        return l()(u().mark(function t() {
          var i;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), e.chooseFileOrPath());
              case 2:
                (i = t.sent) && (e.settings.trayScriptPath = i);
              case 4:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleTrayScriptManualRun: function () {
        this.settings.trayScriptManualRunTime = new Date().getTime();
      },
      chooseFileOrPath: function () {
        var e = arguments;
        return l()(u().mark(function t() {
          var i, n;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((i = !(e.length > 0 && void 0 !== e[0]) || e[0]), (t.next = 3), W.ipcRenderer.invoke("dialog", "showOpenDialogSync", {
                  properties: [i ? "openFile" : "openDirectory"]
                }));
              case 3:
                if (!((n = t.sent) && n.length > 0)) {
                  t.next = 6;
                  break;
                }
                return t.abrupt("return", n[0]);
              case 6:
                return t.abrupt("return", void 0);
              case 7:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleReset: function () {
        var e = this;
        const Lg = new Language(modifyState.language);
        return l()(u().mark(function t() {
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.prev = 0), (t.next = 3), e.$alert({
                  title: Lg.warning(),
                  content: Lg.askResetAllSettings(),
                  isShowErrorBtn: !0
                }));
              case 3:
                (e.saveSettingsObject({
                  obj: {}
                }), e.loadSettings(), (t.next = 9));
                break;
              case 7:
                ((t.prev = 7), (t.t0 = t.catch(0)));
              case 9:
              case "end":
                return t.stop();
            }
          }, t, null, [[0, 7]]);
        }))();
      },
      handleOpenGUILog: function () {
        W.shell.openPath((0, H.dirname)(G().transports.file.getFile().path));
      },
      handleOpenGUIDataFolder: function () {
        return l()(u().mark(function e() {
          var t;
          return u().wrap(function (e) {
            for (;;) switch ((e.prev = e.next)) {
              case 0:
                return ((e.next = 2), W.ipcRenderer.invoke("app", "getPath", "userData"));
              case 2:
                ((t = e.sent), W.shell.showItemInFolder(t));
              case 4:
              case "end":
                return e.stop();
            }
          }, e);
        }))();
      },
      handleQuit: function () {
        var e = arguments,
          t = this;
        const Lg = new Language(modifyState.language);
        return l()(u().mark(function i() {
          var n, o;
          return u().wrap(function (i) {
            for (;;) switch ((i.prev = i.next)) {
              case 0:
                return ((n = e.length > 0 && void 0 !== e[0] && e[0]), (i.next = 3), (0, Y.vC)({
                  type: "warning",
                  message: Lg.askQuit(),
                  buttons: [Lg.no(), Lg.yes()]
                }));
              case 3:
                if (((o = i.sent), 0 !== o.response)) {
                  i.next = 7;
                  break;
                }
                return i.abrupt("return");
              case 7:
                n ? W.ipcRenderer.send("cleanup-done") : t.$parent.quit();
              case 8:
              case "end":
                return i.stop();
            }
          }, i);
        }))();
      },
      handlerClearFakeIPCache: function () {
        var e = this;
        return l()(u().mark(function t() {
          var i, n, o, s, r;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), e.clashAxiosClient.post("/cache/fakeip/flush", {}, {
                  validateStatus: function (e) {
                    return !0;
                  }
                }));
              case 2:
                ((i = t.sent), (n = i.status), (o = i.data), (s = (o = void 0 === o ? {} : o).message), (r = void 0 === s ? "" : s), (0, Y.vC)({
                  message: 204 === n ? "Fake IP cache cleared" : "Failed with reason: ".concat(r)
                }));
              case 8:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleGenerateUUIDSecret: function () {
        var e = this;
        const Lg = new Language(modifyState.language);
        return l()(u().mark(function t() {
          var i, n;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.next = 2), (0, Y.vC)({
                  type: "warning",
                  message: Lg.askSetConfig(),
                  buttons: [Lg.no(), Lg.yes()]
                }));
              case 2:
                if (((i = t.sent), 1 !== i.response)) {
                  t.next = 9;
                  break;
                }
                return ((n = (0, K.v4)()), (t.next = 8), (0, Y.F0)(z().join(e.clashPath, "config.yaml"), "secret", n));
              case 8:
                e.reloadElectron();
              case 9:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      }
    }),
    beforeMount: function () {},
    beforeRouteEnter: function (e, t, i) {
      i(function (e) {});
    },
    mounted: function () {
      var e = this.$refs["mixin-scroll-content"].children;
      this.sections = o()(e).map(function (e) {
        return e.children[0].innerText;
      });
    },
    beforeRouteLeave: function (e, t, i) {
      i();
    }
  };
  (i(52611), i(58141));
  const ie = (0, _.Z)(te, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return t("div", {
      staticClass: "main-setting-view"
    }, [t("div", {
      class: ["title", e.isEditingExternal ? "blur" : ""]
    }, [t("div", [e._v(Lg.settings())]), e._v(" "), t("div", {
      staticClass: "btns"
    }, [t("div", {
      staticClass: "btn",
      on: {
        click: e.handleReset
      }
    }, [e._v(Lg.resetAllSettings())]), e._v(" "), t("div", {
      staticClass: "btn clickable btn-force-quit",
      on: {
        click: function (t) {
          return e.handleQuit(!0);
        }
      }
    }, [e._v("\n        " + Lg.forceQuit() + "\n      ")]), e._v(" "), t("div", {
      staticClass: "btn clickable btn-quit",
      on: {
        click: function (t) {
          return e.handleQuit();
        }
      }
    }, [e._v(Lg.quit())])])]), e._v(" "), e.settings ? t("div", {
      ref: "mixin-scroll-content",
      class: ["content",, e.isEditingExternal ? "blur" : ""]
    }, [t("Section", {
      attrs: {
        title: Lg.security()
      }
    }, [t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "relative flex items-center"
    }, [t("div", [e._v(Lg.coreSecret())]), e._v(" "), t("Info", [e._v("\n            " + Lg.coreSecretDscribeFirst() + " "), t("span", {
      staticClass: "quote"
    }, [e._v("secret")]), e._v(" " + Lg.coreSecretDscribeSecond() + "\n            " + Lg.coreSecretDscribeThird() + "\n             "), t("br"), t("br"), e._v(Lg.coreSecretDscribeFourth() + "\n            "), t("span", {
      staticClass: "quote"
    }, [e._v("Home Directory/config.yaml")]), e._v(".\n            "), t("br"), t("br"), e._v(Lg.coreSecretDscribeFifth() + "\n            "), t("ul", [t("li", [t("a", {
      attrs: {
        href: "https://web.archive.org/web/20231001060822/dreamacro.github.io/clash/configuration/configuration-reference.html"
      }
    }, [e._v(Lg.profiles())])])])]), e._v(" "), t("Hint", {
      staticClass: "gird ml-1 items-center",
      attrs: {
        position: "right",
        hint: Lg.recommendGenerateSecret()
      }
    }, ["" === e.secret ? t("span", {
      staticClass: "icon h-fit text-base text-[#FFAD00]"
    }, [e._v("warning")]) : e._e()])], 1), e._v(" "), t("MoreHint", {
      staticClass: "hint",
      attrs: {
        text: "" === e.secret ? Lg.generate() : Lg.update()
      },
      on: {
        click: e.handleGenerateUUIDSecret
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "relative flex items-center"
    }, [t("div", [e._v(Lg.allowUnsafeURLs())]), e._v(" "), t("Info", [e._v("\n            " + Lg.allowUnsafeURLsDescribeFirst()), t("br"), t("br"), e._v("\n\n             "), t("strong", [e._v(Lg.allowUnsafeURLsDescribeSecond())]), e._v(Lg.allowUnsafeURLsDescribeThird() + "\n          ")])], 1), e._v(" "), t("MoreHint", {
      staticClass: "hint",
      attrs: {
        text: Lg.edit()
      },
      on: {
        click: e.handleEditUnsafeURLs
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.disableLoadingAdsLink())]), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.disableLoadingAdsLink,
        callback: function (t) {
          if (t) {
            i(24883).Z.put(i(81518).Z.AD_IMAGES, "");
          }
          e.$set(e.settings, "disableLoadingAdsLink", t);
        },
        expression: "settings.disableLoadingAdsLink"
      }
    })], 1)]), e._v(" "), t("Section", {
      attrs: {
        title: Lg.general()
      }
    }, [t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.settingsEditor())]), e._v(" "), t("Info", [e._v(Lg.settingsEditorFirst()), t("br"), t("br"), e._v(Lg.settingsEditorSecond() + "\n            "), t("strong", [e._v(Lg.custom())]), e._v(Lg.settingsEditorThird() + "\n            " + Lg.settingsEditorFourth()), t("br"), e._v(" "), t("span", {
      staticClass: "quote"
    }, [e._v("code --wait")]), t("br"), e._v(" "), t("span", {
      staticClass: "quote"
    }, [e._v("subl --wait")])])], 1), e._v(" "), t("SelectView", {
      attrs: {
        items: ["CFW", "Visual Studio Code", Lg.custom()]
      },
      model: {
        value: e.settings.editor,
        callback: function (t) {
          e.$set(e.settings, "editor", t);
        },
        expression: "settings.editor"
      }
    })], 1), e._v(" "), 2 === e.settings.editor ? t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.customEditorCommand())]), e._v(" "), t("SimpleInput", {
      staticClass: "input",
      attrs: {
        placeholder: "subl --wait"
      },
      model: {
        value: e.settings.editorCustomCommand,
        callback: function (t) {
          e.$set(e.settings, "editorCustomCommand", t);
        },
        expression: "settings.editorCustomCommand"
      }
    })], 1) : e._e(), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.notifications())]), e._v(" "), t("Info", [e._v(Lg.notificationsDescribe())])], 1), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.showNotifications,
        callback: function (t) {
          e.$set(e.settings, "showNotifications", t);
        },
        expression: "settings.showNotifications"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.silentStart())]), e._v(" "), t("Info", [e._v(Lg.silentStartDescribe())])], 1), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.hideAfterStartup,
        callback: function (t) {
          e.$set(e.settings, "hideAfterStartup", t);
        },
        expression: "settings.hideAfterStartup"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.randomControllerPort())]), e._v(" "), t("Info", [e._v(Lg.randomControllerPortDescribe())])], 1), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.randomControllerPort,
        callback: function (t) {
          e.$set(e.settings, "randomControllerPort", t);
        },
        expression: "settings.randomControllerPort"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.randomMixedPort())]), e._v(" "), t("Info", [e._v(Lg.randomMixedPortDescribeFirst()), t("br"), t("br"), e._v(Lg.randomMixedPortDescribeSecond()), t("a", {
      attrs: {
        href: "https://web.archive.org/web/20231001060822/dreamacro.github.io/clash/configuration/configuration-reference.htmll"
      }
    }, [e._v("mixed-port")]), e._v(Lg.randomMixedPortDescribeThird()), t("span", {
      staticClass: "quote"
    }, [e._v("Home Directory/config.yaml")]), e._v(".")])], 1), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.randomMixedPort,
        callback: function (t) {
          e.$set(e.settings, "randomMixedPort", t);
        },
        expression: "settings.randomMixedPort"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.lightweightMode())]), e._v(" "), t("Info", [e._v(Lg.lightweightModeDescribeStart()), t("br"), t("br"), e._v(Lg.lightweightModeDescribeEnd()), t("strong", [e._v(Lg.serviceMode())]), e._v(".\n            "), t("br"), t("br"), e._v(Lg.forDetails() + "\n            "), t("a", {
      attrs: {
        href: "https://web.archive.org/web/20230304232259/docs.cfw.lbyczf.com/contents/lightweight.html"
      }
    }, [e._v(Lg.docs())]), e._v(".")])], 1), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.lightweightMode,
        callback: function (t) {
          e.$set(e.settings, "lightweightMode", t);
        },
        expression: "settings.lightweightMode"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.guiLogFolder())]), e._v(" "), t("MoreHint", {
      staticClass: "hint",
      attrs: {
        text: Lg.open()
      },
      on: {
        click: e.handleOpenGUILog
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.guiDataFolder())]), e._v(" "), t("MoreHint", {
      staticClass: "hint",
      attrs: {
        text: Lg.open()
      },
      on: {
        click: e.handleOpenGUIDataFolder
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.checkForUpdate())]), e._v(" "), t("Info", [e._v(Lg.checkForUpdateDescribe())])], 1), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.checkForUpdates,
        callback: function (t) {
          e.$set(e.settings, "checkForUpdates", t);
        },
        expression: "settings.checkForUpdates"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.showNewVersionIcon())]), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.showNewVersionIcon,
        callback: function (t) {
          e.$set(e.settings, "showNewVersionIcon", t);
        },
        expression: "settings.showNewVersionIcon"
      }
    })], 1), e._v(" "), e.isMacOS ? t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.automaticUpgrade())]), e._v(" "), t("Info", [e._v(Lg.automaticUpgradeDescribe())])], 1), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.silentUpdate,
        callback: function (t) {
          e.$set(e.settings, "silentUpdate", t);
        },
        expression: "settings.silentUpdate"
      }
    })], 1) : e._e(), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.languageString())]), e._v(" "), t("SelectView", {
      attrs: {
        items: ["简体中文", "English"]
      },
      model: {
        value: i(24883).Z.get(LANGUAGE) === null ? 0 : i(24883).Z.get(LANGUAGE),
        callback: function (t) {
          if (t != i(24883).Z.get(LANGUAGE)) {
            i(24883).Z.put(LANGUAGE, t);
            modifyState.language = t;
            e.$set(e.settings, "language", t);
            require("electron").ipcRenderer.invoke("window", "reload");
          }
        },
        expression: "settings.language"
      }
    })], 1)]), e._v(" "), t("Section", {
      attrs: {
        title: Lg.appearance()
      }
    }, [e.settings.systemTheme ? e._e() : t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.theme())]), e._v(" "), t("SelectView", {
      attrs: {
        items: Lg.themeOption()
      },
      model: {
        value: e.settings.theme,
        callback: function (t) {
          e.$set(e.settings, "theme", t);
        },
        expression: "settings.theme"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.followSystemTheme())]), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.systemTheme,
        callback: function (t) {
          e.$set(e.settings, "systemTheme", t);
        },
        expression: "settings.systemTheme"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.fontFamily())]), e._v(" "), t("SimpleInput", {
      attrs: {
        placeholder: e.fontFamilyPlaceholder
      },
      model: {
        value: e.settings.fontFamily,
        callback: function (t) {
          e.$set(e.settings, "fontFamily", t);
        },
        expression: "settings.fontFamily"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.titleBarText())]), e._v(" "), t("Info", [t("div", [e._v("\n              " + Lg.titleBarTextDescribeFirst() + "\n            ")]), e._v(" "), t("li", [t("b", [e._v("%mode%")]), e._v(" - " + Lg.titleBarTextDescribeSecond())]), e._v(" "), t("li", [t("b", [e._v("%systemProxy%")]), e._v(" - " + Lg.titleBarTextDescribeThird())]), e._v(" "), t("li", [t("b", [e._v("%tun%")]), e._v(" - " + Lg.titleBarTextDescribeFourth())]), e._v(" "), t("li", [t("b", [e._v("%mixin%")]), e._v(" - " + Lg.titleBarTextDescribeFifth())])])], 1), e._v(" "), t("SimpleInput", {
      staticClass: "input",
      attrs: {
        placeholder: Lg.titleBarTextDescribe()
      },
      model: {
        value: e.settings.titleBarText,
        callback: function (t) {
          e.$set(e.settings, "titleBarText", t);
        },
        expression: "settings.titleBarText"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.runTimeFormat())]), e._v(" "), t("SimpleInput", {
      staticClass: "input",
      attrs: {
        placeholder: "hh : mm : ss"
      },
      model: {
        value: e.settings.runTimeFormat,
        callback: function (t) {
          e.$set(e.settings, "runTimeFormat", t);
        },
        expression: "settings.runTimeFormat"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.useSystemEmoji())]), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.useSystemEmoji,
        callback: function (t) {
          e.$set(e.settings, "useSystemEmoji", t);
        },
        expression: "settings.useSystemEmoji"
      }
    })], 1), e._v(" "), e.isWindows ? t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.useModeIcons())]), e._v(" "), t("Info", [e._v(Lg.useModeIcons())])], 1), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.useModeIcons,
        callback: function (t) {
          e.$set(e.settings, "useModeIcons", t);
        },
        expression: "settings.useModeIcons"
      }
    })], 1) : e._e(), e._v(" "), e.isWindows && !e.settings.useModeIcons ? t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.customizeTrayIcon())]), e._v(" "), t("Info", [e._v(Lg.customizeTrayIconDescribe())])], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("SimpleInput", {
      staticClass: "short-input",
      attrs: {
        placeholder: "ICO(.ico) " + Lg.assetpath()
      },
      model: {
        value: e.settings.iconDefault,
        callback: function (t) {
          e.$set(e.settings, "iconDefault", t);
        },
        expression: "settings.iconDefault"
      }
    }), e._v(" "), t("MoreHint", {
      staticClass: "hint",
      attrs: {
        text: Lg.select()
      },
      on: {
        click: e.handleChooseDefaultIcon
      }
    })], 1)]) : e._e(), e._v(" "), e.isWindows && !e.settings.useModeIcons ? t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.customizeTrayIconInProxy())]), e._v(" "), t("Info", [e._v(Lg.customizeTrayIconInProxyDescribe())])], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("SimpleInput", {
      staticClass: "short-input",
      attrs: {
        placeholder: "ICO(.ico) " + Lg.assetpath()
      },
      model: {
        value: e.settings.iconSystemProxy,
        callback: function (t) {
          e.$set(e.settings, "iconSystemProxy", t);
        },
        expression: "settings.iconSystemProxy"
      }
    }), e._v(" "), t("MoreHint", {
      staticClass: "hint",
      attrs: {
        text: Lg.select()
      },
      on: {
        click: e.handleChooseSystemProxytOnIcon
      }
    })], 1)]) : e._e(), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.hideTrayIcon())]), e._v(" "), t("Info", [e._v(Lg.hideTrayIconDescribe())])], 1), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.hideTrayIcon,
        callback: function (t) {
          e.$set(e.settings, "hideTrayIcon", t);
        },
        expression: "settings.hideTrayIcon"
      }
    })], 1), e._v(" "), e.isLinux ? e._e() : t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.trayProxyGroupsStyle())]), e._v(" "), t("Info", [t("div", [e._v(Lg.trayProxyGroupsStyleDescribeFirst() + ":")]), e._v(" "), t("li", [t("b", [e._v(Lg.expand())]), e._v(" - " + Lg.trayProxyGroupsStyleDescribeSecond())]), e._v(" "), t("li", [t("b", [e._v(Lg.submenu())]), e._v(" - " + Lg.trayProxyGroupsStyleDescribeThird())]), e._v(" "), t("li", [t("b", [e._v(Lg.hidden())]), e._v(" - " + Lg.trayProxyGroupsStyleDescribeFourth())])])], 1), e._v(" "), t("SelectView", {
      attrs: {
        items: [Lg.submenu(), Lg.expand(), Lg.hidden()]
      },
      model: {
        value: e.settings.trayProxiesStyle,
        callback: function (t) {
          e.$set(e.settings, "trayProxiesStyle", t);
        },
        expression: "settings.trayProxiesStyle"
      }
    })], 1), e._v(" "), !e.isLinux && [0, 1].includes(e.settings.trayProxiesStyle) ? t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.showTrayProxyDelayIndicator())]), e._v(" "), t("Info", [e._v(Lg.showTrayProxyDelayIndicatorDescribe()), t("br"), e._v(" "), t("br"), e._v("\n            " + Lg.color() + "\n            "), t("li", [t("div", {
      staticClass: "bg-green-400 w-2 h-2 rounded-full inline-block"
    }), e._v("\n              - " + Lg.available() + "\n            ")]), e._v(" "), t("li", [t("div", {
      staticClass: "bg-red-400 w-2 h-2 rounded-full inline-block"
    }), e._v("\n              - " + Lg.timeout() + "\n            ")]), e._v(" "), t("li", [t("div", {
      staticClass: "bg-gray-400 w-2 h-2 rounded-full inline-block"
    }), e._v("\n              - " + Lg.unknown() + "\n            ")])])], 1), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.showTrayProxyDelayIndicator,
        callback: function (t) {
          e.$set(e.settings, "showTrayProxyDelayIndicator", t);
        },
        expression: "settings.showTrayProxyDelayIndicator"
      }
    })], 1) : e._e(), e._v(" "), e.isLinux ? e._e() : t("separator"), e._v(" "), e.isLinux ? e._e() : t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.enhancedTray())]), e._v(" "), t("Info", [e._v(Lg.enhancedTrayDescribeFirst()), t("br"), t("br"), t("b", [e._v("")]), e._v(Lg.enhancedTrayDescribeSecond() + " \n           \n            "), t("a", {
      attrs: {
        href: "https://web.archive.org/web/20230304232259/docs.cfw.lbyczf.com/contents/tray.html"
      }
    }, [e._v(Lg.onlineDocs())])])], 1), e._v(" "), t("TrayOrder", {
      model: {
        value: e.settings.trayOrders,
        callback: function (t) {
          e.$set(e.settings, "trayOrders", t);
        },
        expression: "settings.trayOrders"
      }
    })], 1), e._v(" "), e.isLinux ? e._e() : t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.text())]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("SimpleInput", {
      attrs: {
        placeholder: Lg.textdisplayTray()
      },
      model: {
        value: e.settings.trayText,
        callback: function (t) {
          e.$set(e.settings, "trayText", t);
        },
        expression: "settings.trayText"
      }
    })], 1)]), e._v(" "), e.settings.trayText ? e._e() : t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.script())]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("SimpleInput", {
      staticClass: "short-input",
      attrs: {
        placeholder: Lg.scriptToRun()
      },
      model: {
        value: e.settings.trayScriptPath,
        callback: function (t) {
          e.$set(e.settings, "trayScriptPath", t);
        },
        expression: "settings.trayScriptPath"
      }
    }), e._v(" "), t("MoreHint", {
      staticClass: "hint",
      attrs: {
        text: Lg.select()
      },
      on: {
        click: e.handleSelectTrayScriptPath
      }
    })], 1)]), e._v(" "), !e.settings.trayText && e.settings.trayScriptPath ? t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.scriptInterval())]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("SimpleInput", {
      staticClass: "shorter-input",
      attrs: {
        placeholder: "seconds",
        suffix: "s",
        type: "number"
      },
      model: {
        value: e.settings.trayScriptInterval,
        callback: function (t) {
          e.$set(e.settings, "trayScriptInterval", t);
        },
        expression: "settings.trayScriptInterval"
      }
    }), e._v(" "), t("MoreHint", {
      staticClass: "hint",
      attrs: {
        text: "Manual Run"
      },
      on: {
        click: e.handleTrayScriptManualRun
      }
    })], 1)]) : e._e(), e._v(" "), e.isWindows ? t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.transparent())]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("SimpleInput", {
      staticClass: "shorter-input",
      staticStyle: {
        "margin-right": "10px"
      },
      attrs: {
        placeholder: Lg.foregroundColor()
      },
      model: {
        value: e.settings.trayColorForeground,
        callback: function (t) {
          e.$set(e.settings, "trayColorForeground", t);
        },
        expression: "settings.trayColorForeground"
      }
    }), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.trayColorTransparent,
        callback: function (t) {
          e.$set(e.settings, "trayColorTransparent", t);
        },
        expression: "settings.trayColorTransparent"
      }
    })], 1)]) : e._e()], 1), e._v(" "), e.isLinux ? e._e() : t("Section", {
      attrs: {
        title: Lg.sysProxy()
      }
    }, [e.isWindows ? t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.type())]), e._v(" "), t("Info", [e._v(Lg.typeDescribe()), t("br"), t("br"), e._v("\n            " + Lg.forDetails()), t("br"), e._v(" "), t("ul", [t("li", [t("a", {
      attrs: {
        href: "https://support.microsoft.com/en-us/windows/use-a-proxy-server-in-windows-03096c53-0554-4ffe-b6ab-8b1deee8dae1"
      }
    }, [e._v(Lg.useProxyServerWindows())])])])])], 1), e._v(" "), t("SelectView", {
      attrs: {
        items: ["HTTP", "PAC"]
      },
      model: {
        value: e.settings.systemProxyTypeIndex,
        callback: function (t) {
          e.$set(e.settings, "systemProxyTypeIndex", t);
        },
        expression: "settings.systemProxyTypeIndex"
      }
    })], 1) : e._e(), e._v(" "), e.isWindows && 1 === e.settings.systemProxyTypeIndex ? t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.contentPAC())]), e._v(" "), t("Info", [t("a", {
      attrs: {
        href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file"
      }
    }, [e._v("Learn PAC")]), e._v(" "), t("br"), t("br"), e._v(" "), t("span", {
      staticClass: "quote"
    }, [e._v("%mixed-port%")]), e._v(" is the placeholder of the\n            "), t("strong", [e._v(Lg.port())]), e._v(" in "), t("strong", [e._v(Lg.general())])])], 1), e._v(" "), t("MoreHint", {
      staticClass: "hint",
      attrs: {
        text: Lg.edit()
      },
      on: {
        click: e.handleEditPACContent
      }
    })], 1) : e._e(), e._v(" "), e.isWindows && 1 === e.settings.systemProxyTypeIndex ? t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v("PAC Server Port")]), e._v(" "), t("Info", [e._v("\n            Leave it empty to use a random port."), t("br"), t("br"), e._v(" "), t("strong", [e._v("Restart the APP")]), e._v(" to take effect.\n          ")])], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("SimpleInput", {
      attrs: {
        placeholder: "random",
        type: "number"
      },
      model: {
        value: e.settings.innerServerPort,
        callback: function (t) {
          e.$set(e.settings, "innerServerPort", t);
        },
        expression: "settings.innerServerPort"
      }
    })], 1)]) : e._e(), e._v(" "), 1 !== e.settings.systemProxyTypeIndex || e.isMacOS ? t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.bypassDomain())]), e._v(" "), t("Info", [e._v(Lg.bypassDomainDescribeStart()), t("br"), t("br"), e._v(Lg.bypassDomainDescribeEnd()), t("br"), t("br"), e._v("\n            " + Lg.forDetails()), t("br"), e._v(" "), t("ul", [t("li", [t("a", {
      attrs: {
        href: "https://web.archive.org/web/20230304232259/docs.cfw.lbyczf.com/contents/bypass.html"
      }
    }, [e._v(Lg.onlineDocs())])]), e._v(" "), t("li", [t("a", {
      attrs: {
        href: "https://support.microsoft.com/en-us/windows/use-a-proxy-server-in-windows-03096c53-0554-4ffe-b6ab-8b1deee8dae1"
      }
    }, [e._v(Lg.useProxyServerWindows() + "\n                ")])]), e._v(" "), t("li", [t("a", {
      attrs: {
        href: "https://support.apple.com/guide/mac-help/enter-proxy-server-settings-on-mac-mchlp25912/mac"
      }
    }, [e._v(Lg.enterProxyServerSettingsMac())])]), e._v(" "), t("li", [t("a", {
      attrs: {
        href: "https://source.chromium.org/chromium/chromium/src/+/main:net/proxy_resolution/"
      }
    }, [e._v("Chromium\n                ")])])])])], 1), e._v(" "), t("MoreHint", {
      staticClass: "hint",
      attrs: {
        text: Lg.edit()
      },
      on: {
        click: e.handleEditBypass
      }
    })], 1) : e._e(), e._v(" "), e.isWindows && 1 !== e.settings.systemProxyTypeIndex ? t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.specifyProtocol())]), e._v(" "), t("Info", [e._v(Lg.specifyProtocolDescribeStart()), t("br"), t("br"), e._v(Lg.specifyProtocolDescribeEnd()), t("br"), t("br"), e._v("\n            " + Lg.forDetails()), t("br"), e._v(" "), t("ul", [t("li", [t("a", {
      attrs: {
        href: "https://github.com/python/cpython/pull/26307"
      }
    }, [e._v("python/cpython#26307")])])])])], 1), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.specifyHttpProxyProtocol,
        callback: function (t) {
          e.$set(e.settings, "specifyHttpProxyProtocol", t);
        },
        expression: "settings.specifyHttpProxyProtocol"
      }
    })], 1) : e._e(), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.staticHost())]), e._v(" "), t("Info", [e._v(Lg.staticHostDescribe())])], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("SimpleInput", {
      attrs: {
        placeholder: "127.0.0.1"
      },
      model: {
        value: e.settings.staticSystemProxyHost,
        callback: function (t) {
          e.$set(e.settings, "staticSystemProxyHost", t);
        },
        expression: "settings.staticSystemProxyHost"
      }
    })], 1)])]), e._v(" "), t("Section", {
      attrs: {
        title: Lg.mixin()
      }
    }, [t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.type())]), e._v(" "), t("Info", [t("a", {
      attrs: {
        href: "https://web.archive.org/web/20230304232259/docs.cfw.lbyczf.com/contents/mixin.html"
      }
    }, [e._v(Lg.onlineDocs())])])], 1), e._v(" "), t("SelectView", {
      attrs: {
        items: ["YAML", "JavaScript"]
      },
      model: {
        value: e.settings.mixinType,
        callback: function (t) {
          e.$set(e.settings, "mixinType", t);
        },
        expression: "settings.mixinType"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", [e._v("YAML")]), e._v(" "), t("MoreHint", {
      staticClass: "hint",
      attrs: {
        text: Lg.edit()
      },
      on: {
        click: e.handleEditMixinYAML
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", [e._v("JavaScript")]), e._v(" "), t("MoreHint", {
      staticClass: "hint",
      attrs: {
        text: Lg.edit()
      },
      on: {
        click: e.handleEditMixinJS
      }
    })], 1)]), e._v(" "), t("Section", {
      attrs: {
        title: Lg.proxies()
      }
    }, [t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.proxyItemWidth())]), e._v(" "), t("Info", [e._v(Lg.proxyItemWidthDescribe())])], 1), e._v(" "), t("SimpleInput", {
      attrs: {
        placeholder: "290",
        suffix: "px"
      },
      model: {
        value: e.settings.proxyItemWidth,
        callback: function (t) {
          e.$set(e.settings, "proxyItemWidth", t);
        },
        expression: "settings.proxyItemWidth"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.miniListWidth())]), e._v(" "), t("Info", [e._v(Lg.miniListWidthDescribe())])], 1), e._v(" "), t("SimpleInput", {
      attrs: {
        placeholder: "100(0=" + Lg.hide() + ")",
        suffix: "px"
      },
      model: {
        value: e.settings.proxyMiniListWidth,
        callback: function (t) {
          e.$set(e.settings, "proxyMiniListWidth", t);
        },
        expression: "settings.proxyMiniListWidth"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.orderBy())]), e._v(" "), t("SelectView", {
      attrs: {
        items: Lg.orderByOption()
      },
      model: {
        value: e.settings.proxyOrder,
        callback: function (t) {
          e.$set(e.settings, "proxyOrder", t);
        },
        expression: "settings.proxyOrder"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.delayType())]), e._v(" "), t("Info", [t("li", [t("b", [e._v(Lg.default())]), e._v(" - " + Lg.delayTypeDescribeStart())]), e._v(" "), t("li", [t("b", [e._v(Lg.meanDelay())]), e._v(" - " + Lg.delayTypeDescribeEnd())])])], 1), e._v(" "), t("SelectView", {
      attrs: {
        items: [Lg.default(), Lg.meanDelay()]
      },
      model: {
        value: e.settings.proxyDelayType,
        callback: function (t) {
          e.$set(e.settings, "proxyDelayType", t);
        },
        expression: "settings.proxyDelayType"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.latencyTestURL())]), e._v(" "), t("Info", [e._v(Lg.latencyTestURLDescribe() + "\n           ")])], 1), e._v(" "), t("SimpleInput", {
      attrs: {
        placeholder: "https://www.gstatic.com/generate_204"
      },
      model: {
        value: e.settings.latencyUrl,
        callback: function (t) {
          e.$set(e.settings, "latencyUrl", t);
        },
        expression: "settings.latencyUrl"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.latencyTestTimeout())]), e._v(" "), t("SimpleInput", {
      attrs: {
        type: "number",
        placeholder: "3000",
        suffix: "ms"
      },
      model: {
        value: e.settings.latencyTimeout,
        callback: function (t) {
          e.$set(e.settings, "latencyTimeout", t);
        },
        expression: "settings.latencyTimeout"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.showFilter())]), e._v(" "), t("Info", [e._v(Lg.showFilterDescribe() + "\n           ")])], 1), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.showProxyFilter,
        callback: function (t) {
          e.$set(e.settings, "showProxyFilter", t);
        },
        expression: "settings.showProxyFilter"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.hideUnselectableGroup())]), e._v(" "), t("Info", [e._v(Lg.hideUnselectableGroupDescribe() + "\n            ")])], 1), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.hideUnselectableGroup,
        callback: function (t) {
          e.$set(e.settings, "hideUnselectableGroup", t);
        },
        expression: "settings.hideUnselectableGroup"
      }
    })], 1)]), e._v(" "), t("Section", {
      attrs: {
        title: Lg.connections()
      }
    }, [t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.breakWhenProxyChange())]), e._v(" "), t("Info", [t("div", [e._v("\n              " + Lg.breakWhenProxyChangeDescribeFirst() + "\n            ")]), e._v(" "), t("li", [t("b", [e._v(Lg.breakWhenProxyChangeDescribeSecond())]), e._v(" - " + Lg.breakWhenProxyChangeDescribeThird())]), e._v(" "), t("li", [t("b", [e._v(Lg.breakWhenProxyChangeDescribeFourth())]), e._v(" - " + Lg.breakWhenProxyChangeDescribeFifth())]), e._v(" "), t("li", [t("b", [e._v(Lg.all())]), e._v(" - " + Lg.breakWhenProxyChangeDescribeSeventh())])])], 1), e._v(" "), t("SelectView", {
      attrs: {
        items: Lg.breakWhenProxyChangeOption()
      },
      model: {
        value: e.settings.connProxy,
        callback: function (t) {
          e.$set(e.settings, "connProxy", t);
        },
        expression: "settings.connProxy"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.breakWhenProfileChange())]), e._v(" "), t("Info", [e._v(Lg.breakWhenProfileChangeDescribe() + "\n            ")])], 1), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.connProfile,
        callback: function (t) {
          e.$set(e.settings, "connProfile", t);
        },
        expression: "settings.connProfile"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.breakWhenModeChange())]), e._v(" "), t("Info", [e._v(Lg.breakWhenModeChangeDescribe())])], 1), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.connMode,
        callback: function (t) {
          e.$set(e.settings, "connMode", t);
        },
        expression: "settings.connMode"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.showProcessIfPresent())]), e._v(" "), t("Info", [e._v(Lg.showProcessIfPresentDescribe() + " \n            ")])], 1), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.connShowProcess,
        callback: function (t) {
          e.$set(e.settings, "connShowProcess", t);
        },
        expression: "settings.connShowProcess"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.displayChainType())]), e._v(" "), t("Info", [t("div", [e._v("\n              " + Lg.displayChainTypeDescribe() + "\n            ")]), e._v(" "), t("li", [t("b", [e._v(Lg.proxy())]), e._v(Lg.proxyName())]), e._v(" "), t("li", [t("b", [e._v(Lg.group())]), e._v(Lg.groupName())]), e._v(" "), t("li", [t("b", [e._v(Lg.both())]), e._v(Lg.bothName())])])], 1), e._v(" "), t("SelectView", {
      attrs: {
        items: Lg.displayChainTypeOption()
      },
      model: {
        value: e.settings.connChainType,
        callback: function (t) {
          e.$set(e.settings, "connChainType", t);
        },
        expression: "settings.connChainType"
      }
    })], 1)]), e._v(" "), t("Section", {
      attrs: {
        title: Lg.providers()
      }
    }, [t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.useCFWEditor())]), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.editProfileWithCFWEditor,
        callback: function (t) {
          e.$set(e.settings, "editProfileWithCFWEditor", t);
        },
        expression: "settings.editProfileWithCFWEditor"
      }
    })], 1)]), e._v(" "), t("Section", {
      attrs: {
        title: Lg.outbound()
      }
    }, [t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.interfaceName())]), e._v(" "), t("Info", [e._v(Lg.interfaceNameDescribe() + "\n           ")])], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [e.detectedInterfaceName ? t("MoreHint", {
      staticClass: "interface-hint",
      attrs: {
        text: Lg.detected() + ": ".concat(e.detectedInterfaceName),
        clickable: !1
      }
    }) : e._e(), e._v(" "), t("MoreHint", {
      staticClass: "hint",
      attrs: {
        text: e.settings.interfaceName || Lg.select()
      },
      on: {
        click: e.handleSelectInterface
      }
    })], 1)])]), e._v(" "), t("Section", {
      attrs: {
        title: Lg.childProcesses()
      }
    }, [t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.processes())]), e._v(" "), t("Info", [e._v(Lg.processesDescribe() + ",\n            "), t("a", {
      attrs: {
        href: "https://web.archive.org/web/20230304232259/docs.cfw.lbyczf.com/contents/childprocess.html"
      }
    }, [e._v(Lg.onlineDocs())])])], 1), e._v(" "), t("MoreHint", {
      staticClass: "hint",
      attrs: {
        text: Lg.edit()
      },
      on: {
        click: e.handleEditChildProcess
      }
    })], 1)]), e._v(" "), t("Section", {
      attrs: {
        title: Lg.profiles()
      }
    }, [t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.parsers())]), e._v(" "), t("Info", [e._v(Lg.parsersDescribeStart() + "\n            "), t("a", {
      attrs: {
        href: "https://web.archive.org/web/20230304232259/docs.cfw.lbyczf.com/contents/diff.html"
      }
    }, [e._v("Diff")]), e._v(Lg.parsersDescribeEnd() + "\n            "), t("ul", [t("li", [t("a", {
      attrs: {
        href: "https://web.archive.org/web/20230304232259/docs.cfw.lbyczf.com/contents/parser.html"
      }
    }, [e._v(Lg.onlineDocs())])])])])], 1), e._v(" "), t("MoreHint", {
      staticClass: "hint",
      attrs: {
        text: Lg.edit()
      },
      on: {
        click: e.handleEditProfileParsers
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.consoleOutput())]), e._v(" "), t("MoreHint", {
      staticClass: "hint",
      attrs: {
        text: Lg.openFile()
      },
      on: {
        click: e.handleOpenConsoleFile
      }
    })], 1), e._v(" "), t("separator"), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.folderPath())]), e._v(" "), t("Info", [e._v(Lg.folderPathDescribe())])], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("SimpleInput", {
      staticClass: "short-input",
      attrs: {
        placeholder: Lg.profilesFolderPath()
      },
      model: {
        value: e.settings.profilePath,
        callback: function (t) {
          e.$set(e.settings, "profilePath", t);
        },
        expression: "settings.profilePath"
      }
    }), e._v(" "), t("MoreHint", {
      staticClass: "hint",
      attrs: {
        text: Lg.select()
      },
      on: {
        click: e.handleChooseProfilePath
      }
    })], 1)]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.requestHeaders())]), e._v(" "), t("Info", [e._v(Lg.requestHeadersDescribeFirst()), t("br"), t("br"), e._v("\n            " + Lg.requestHeadersDescribeSecond() + "\n            ")])], 1), e._v(" "), t("MoreHint", {
      staticClass: "hint",
      attrs: {
        text: Lg.edit()
      },
      on: {
        click: e.handleEditHeaders
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.selectAfterUpdated())]), e._v(" "), t("Info", [e._v(Lg.selectAfterUpdatedDescribe())])], 1), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.selectAfterUpdated,
        callback: function (t) {
          e.$set(e.settings, "selectAfterUpdated", t);
        },
        expression: "settings.selectAfterUpdated"
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.updateThroughBuiltInProxy())]), e._v(" "), t("Info", [e._v(Lg.updateThroughBuiltInProxyDescribe())])], 1), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.updateProfileThroughClashProxy,
        callback: function (t) {
          e.$set(e.settings, "updateProfileThroughClashProxy", t);
        },
        expression: "settings.updateProfileThroughClashProxy"
      }
    })], 1)], 1), e._v(" "), t("Section", {
      attrs: {
        title: Lg.logs()
      }
    }, [t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.preload())]), e._v(" "), t("Info", [e._v(Lg.preloadDescribe())])], 1), e._v(" "), t("SimpleInput", {
      attrs: {
        type: "number",
        placeholder: "30",
        suffix: Lg.lines()
      },
      model: {
        value: e.settings.logPreloadLineCount,
        callback: function (t) {
          e.$set(e.settings, "logPreloadLineCount", t);
        },
        expression: "settings.logPreloadLineCount"
      }
    })], 1)]), e._v(" "), t("Section", {
      attrs: {
        title: Lg.ssid()
      }
    }, [t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "relative flex items-center"
    }, [t("div", [e._v(Lg.strategy())]), e._v(" "), t("Info", [t("div", [e._v(Lg.strategyDescribe()), t("a", {
      attrs: {
        href: "https://web.archive.org/web/20230304232259/docs.cfw.lbyczf.com/contents/ssid.html"
      }
    }, [e._v(Lg.onlineDocs())])])])], 1), e._v(" "), t("div", {
      staticClass: "flex-grow"
    }), e._v(" "), t("MoreHint", {
      staticClass: "hint",
      attrs: {
        text: Lg.edit()
      },
      on: {
        click: e.handleEditSSIDStrategy
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "relative flex items-center"
    }, [t("div", [e._v(Lg.getCurrentSSID())]), e._v(" "), t("Info", [t("div", [e._v("\n              " + Lg.getCurrentSSIDDescribe()), t("span", {
      staticClass: "quote"
    }, [e._v(",")])])])], 1), e._v(" "), t("div", {
      staticClass: "flex-grow"
    }), e._v(" "), t("MoreHint", {
      staticClass: "hint",
      attrs: {
        text: Lg.fetch()
      },
      on: {
        click: e.handleFetchCurrentSSID
      }
    })], 1)]), e._v(" "), t("Section", {
      attrs: {
        title: Lg.actions()
      }
    }, [t("div", {
      staticClass: "item"
    }, [t("div", {
      staticClass: "flex items-center"
    }, [t("div", [e._v(Lg.script())]), e._v(" "), t("Info", [e._v(Lg.scriptActionDescribe() + ",\n            "), t("a", {
      attrs: {
        href: "https://web.archive.org/web/20230304232259/docs.cfw.lbyczf.com/contents/actions.html"
      }
    }, [e._v(Lg.onlineDocs())])])], 1), e._v(" "), t("MoreHint", {
      staticClass: "hint",
      attrs: {
        text: Lg.edit()
      },
      on: {
        click: e.handleEditActionScripts
      }
    })], 1), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.consoleOutput())]), e._v(" "), t("MoreHint", {
      staticClass: "hint",
      attrs: {
        text: Lg.openFile()
      },
      on: {
        click: e.handleOpenActionScriptsConsoleFile
      }
    })], 1)]), e._v(" "), t("Section", {
      attrs: {
        title: Lg.shortcut()
      }
    }, [e.isLinux ? e._e() : t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.sysProxy())]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("KeyCapture", {
      staticClass: "input",
      attrs: {
        placeholder: Lg.record()
      },
      model: {
        value: e.settings.shortcutSystemProxy,
        callback: function (t) {
          e.$set(e.settings, "shortcutSystemProxy", t);
        },
        expression: "settings.shortcutSystemProxy"
      }
    })], 1)]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.TUNmode())]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("KeyCapture", {
      staticClass: "input",
      attrs: {
        placeholder: Lg.record()
      },
      model: {
        value: e.settings.shortcutTun,
        callback: function (t) {
          e.$set(e.settings, "shortcutTun", t);
        },
        expression: "settings.shortcutTun"
      }
    })], 1)]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.mixin())]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("KeyCapture", {
      staticClass: "input",
      attrs: {
        placeholder: Lg.record()
      },
      model: {
        value: e.settings.shortcutMixin,
        callback: function (t) {
          e.$set(e.settings, "shortcutMixin", t);
        },
        expression: "settings.shortcutMixin"
      }
    })], 1)]), e._v(" "), t("separator"), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.globalMode())]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("KeyCapture", {
      staticClass: "input",
      attrs: {
        placeholder: Lg.record()
      },
      model: {
        value: e.settings.shortcutGlobalMode,
        callback: function (t) {
          e.$set(e.settings, "shortcutGlobalMode", t);
        },
        expression: "settings.shortcutGlobalMode"
      }
    })], 1)]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.ruleMode())]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("KeyCapture", {
      staticClass: "input",
      attrs: {
        placeholder: Lg.record()
      },
      model: {
        value: e.settings.shortcutRuleMode,
        callback: function (t) {
          e.$set(e.settings, "shortcutRuleMode", t);
        },
        expression: "settings.shortcutRuleMode"
      }
    })], 1)]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.directMode())]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("KeyCapture", {
      staticClass: "input",
      attrs: {
        placeholder: Lg.record()
      },
      model: {
        value: e.settings.shortcutDirectMode,
        callback: function (t) {
          e.$set(e.settings, "shortcutDirectMode", t);
        },
        expression: "settings.shortcutDirectMode"
      }
    })], 1)]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.scriptMode())]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("KeyCapture", {
      staticClass: "input",
      attrs: {
        placeholder: Lg.record()
      },
      model: {
        value: e.settings.shortcutScriptMode,
        callback: function (t) {
          e.$set(e.settings, "shortcutScriptMode", t);
        },
        expression: "settings.shortcutScriptMode"
      }
    })], 1)]), e._v(" "), t("separator"), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.showHieDashboard())]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("KeyCapture", {
      staticClass: "input",
      attrs: {
        placeholder: Lg.record()
      },
      model: {
        value: e.settings.shortcutShowHideDashboard,
        callback: function (t) {
          e.$set(e.settings, "shortcutShowHideDashboard", t);
        },
        expression: "settings.shortcutShowHideDashboard"
      }
    })], 1)]), e._v(" "), e.isLinux ? e._e() : t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.runTrayScript())]), e._v(" "), t("div", {
      staticClass: "item"
    }, [t("KeyCapture", {
      staticClass: "input",
      attrs: {
        placeholder: Lg.record()
      },
      model: {
        value: e.settings.shortcutRunTrayScript,
        callback: function (t) {
          e.$set(e.settings, "shortcutRunTrayScript", t);
        },
        expression: "settings.shortcutRunTrayScript"
      }
    })], 1)])], 1), e._v(" "), t("Section", {
      attrs: {
        title: Lg.settingsEditor()
      }
    }, [t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.fontSize())]), e._v(" "), t("SimpleInput", {
      attrs: {
        type: "number",
        placeholder: "13",
        suffix: "px"
      },
      model: {
        value: e.settings.editorFontSize,
        callback: function (t) {
          e.$set(e.settings, "editorFontSize", t);
        },
        expression: "settings.editorFontSize"
      }
    })], 1)]), e._v(" "), t("Section", {
      attrs: {
        title: Lg.cache()
      }
    }, [t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.fakeIPCache())]), e._v(" "), t("MoreHint", {
      staticClass: "hint",
      attrs: {
        text: Lg.clear()
      },
      on: {
        click: e.handlerClearFakeIPCache
      }
    })], 1)]), e._v(" "), t("Section", {
      attrs: {
        title: Lg.experimentalFeatures()
      }
    }, [e.isMacOS ? t("div", {
      staticClass: "item"
    }, [t("div", [e._v(Lg.dhcpServer())]), e._v(" "), t("SwitchView", {
      model: {
        value: e.settings.enableDHCPServer,
        callback: function (t) {
          e.$set(e.settings, "enableDHCPServer", t);
        },
        expression: "settings.enableDHCPServer"
      }
    })], 1) : e._e()])], 1) : e._e(), e._v(" "), t("navigator", {
      attrs: {
        list: e.sections
      },
      on: {
        select: e.handleNavigatToGroup
      }
    }), e._v(" "), e.isEditingExternal ? t("div", {
      staticClass: "edit-hint"
    }, [t("div", [e._v("\n      " + e._s(["", "Visual Studio Code", "Sublime Text"][e.settings.editor]) + " is\n      launching for editing.\n    ")]), e._v(" "), t("div", [e._v(Lg.closeEditingFileSave())]), e._v(" "), t("div", {
      staticClass: "btn",
      on: {
        click: e.cancelExternalEdit
      }
    }, [e._v(Lg.cancel())])]) : e._e()], 1);
  }, [], !1, null, "fc0cd1de", null).exports;
};
