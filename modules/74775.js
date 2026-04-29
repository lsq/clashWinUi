const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z: () => ge
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
    g = i(10605),
    p = i.n(g),
    f = i(11442),
    m = i.n(f),
    v = i(419),
    _ = i(8369),
    b = i(23321),
    w = i(51109),
    y = i.n(w);
  function C(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  function x(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? C(Object(i), !0).forEach(function (t) {
        d()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : C(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  const S = {
    props: ["type", "data"],
    data: function () {
      return {
        ssCipher: ["aes-128-gcm", "aes-192-gcm", "aes-256-gcm", "chacha20-ietf-poly1305", "aes-128-ctr", "aes-192-ctr", "aes-256-ctr", "aes-128-cfb", "aes-192-cfb", "aes-256-cfb", "chacha20-ietf", "xchacha20", "rc4-md5", "xchacha20-ietf-poly1305"],
        vmessCipher: ["none", "auto", "aes-128-gcm", "chacha20-poly1305"],
        pType: ["ss", "vmess", "socks5", "http"],
        gType: ["url-test", "fallback", "select", "load-balance"],
        vmessType: ["tcp", "ws"],
        groupName: "",
        groupType: "select",
        groupUrl: "https://www.gstatic.com/generate_204",
        groupInterval: 600,
        proxyType: "ss",
        proxyName: "",
        proxyServer: "",
        proxyPort: "",
        proxyChipher: "",
        proxyPassword: "",
        proxyUuid: "",
        proxyAlterid: "",
        proxyObfs: "",
        proxyObfshost: "",
        proxyTls: !1,
        proxyUsername: "",
        alterIdx: -1,
        proxySkipCertVerify: !1,
        proxyNetwork: "tcp",
        proxyWsPath: "",
        proxyWsHeaders: ""
      };
    },
    computed: x({}, (0, b.mapState)({})),
    methods: {
      confirmInput: function () {
        if (0 === this.type) {
          var e = {
            name: this.groupName,
            proxies: [],
            type: this.groupType
          };
          (("url-test" !== this.groupType && "fallback" !== this.groupType && "load-balance" !== this.groupType) || ((e.url = this.groupUrl), (e.interval = this.groupInterval)), this.$emit("inputDone", {
            type: 0,
            content: e,
            index: this.alterIdx
          }));
        } else if (1 === this.type) {
          var t = {
            name: this.proxyName,
            type: this.proxyType,
            server: this.proxyServer,
            port: this.proxyPort
          };
          if ("ss" === this.proxyType) ((t.cipher = this.proxyChipher), (t.password = this.proxyPassword), this.proxyObfs && ((t.plugin = "obfs"), (t["plugin-opts"] = {
            mode: this.proxyObfs,
            host: this.proxyObfshost || "bing.com"
          })));else if ("vmess" === this.proxyType) {
            if (((t.uuid = this.proxyUuid), (t.alterId = this.proxyAlterid), (t.cipher = this.proxyChipher), this.proxyTls && (t.tls = !0), this.proxySkipCertVerify && (t["skip-cert-verify"] = !0), "ws" === this.proxyNetwork)) {
              t.network = "ws";
              var i = {
                path: this.proxyWsPath
              };
              try {
                i = x(x({}, i), {}, {
                  headers: JSON.parse(this.proxyWsHeaders)
                });
              } catch (e) {}
              t["ws-opts"] = i;
            }
          } else ("socks5" !== this.proxyType && "http" !== this.proxyType) || (this.proxyUsername && this.proxyPassword && ((t.username = this.proxyUsername), (t.password = this.proxyPassword)), this.proxyTls && (t.tls = !0), this.proxySkipCertVerify && (t["skip-cert-verify"] = !0));
          this.$emit("inputDone", {
            type: 1,
            content: t,
            index: this.alterIdx
          });
        }
      }
    },
    mounted: function () {
      if (this.data) {
        if (0 === this.type) ((this.groupName = this.data.name), (this.groupType = this.data.type), "url" in this.data && (this.groupUrl = this.data.url), "interval" in this.data && (this.groupInterval = this.data.interval));else if (1 === this.type) {
          if (((this.proxyName = this.data.name), (this.proxyPort = this.data.port), (this.proxyServer = this.data.server), (this.proxyType = this.data.type), "password" in this.data && (this.proxyPassword = this.data.password), "plugin" in this.data)) {
            var e = this.data["plugin-opts"],
              t = void 0 === e ? {} : e,
              i = t.mode,
              n = t.host;
            ((this.proxyObfs = i), (this.proxyObfshost = n));
          }
          ("obfs-host" in this.data && (this.proxyObfshost = this.data["obfs-host"]), "tls" in this.data && (this.proxyTls = this.data.tls), "cipher" in this.data && (this.proxyChipher = this.data.cipher), "uuid" in this.data && (this.proxyUuid = this.data.uuid), "alterId" in this.data && (this.proxyAlterid = this.data.alterId), "skip-cert-verify" in this.data && (this.proxySkipCertVerify = this.data["skip-cert-verify"]), "network" in this.data && (this.proxyNetwork = this.data.network));
          var o = this.data["ws-opts"];
          if (o) {
            "path" in o && (this.proxyWsPath = o.path);
            try {
              "headers" in o && (this.proxyWsHeaders = JSON.stringify(o.headers));
            } catch (e) {}
          }
          "username" in this.data && (this.proxyUsername = this.data.username);
        }
        this.alterIdx = this.data._index;
      }
    }
  };
  (i(34954), i(7840));
  var k = i(51900);
  const L = (0, k.Z)(S, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return t("div", {
      staticClass: "main",
      attrs: {
        id: "main-append-proxy-view"
      }
    }, [0 === e.type ? t("div", {
      staticClass: "input-view"
    }, [t("div", {
      staticClass: "title"
    }, [e._v(e._s(e.data ? "Edit" : "New") + " Proxy Group")]), e._v(" "), t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.groupName,
        expression: "groupName"
      }],
      attrs: {
        type: "text",
        placeholder: "Group Name"
      },
      domProps: {
        value: e.groupName
      },
      on: {
        input: function (t) {
          t.target.composing || (e.groupName = t.target.value);
        }
      }
    }), e._v(" "), t("div", {
      staticClass: "group-type-list"
    }, e._l(e.gType, function (i, n) {
      return t("div", {
        key: n
      }, [t("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: e.groupType,
          expression: "groupType"
        }],
        attrs: {
          type: "radio",
          id: i
        },
        domProps: {
          value: i,
          checked: e._q(e.groupType, i)
        },
        on: {
          change: function (t) {
            e.groupType = i;
          }
        }
      }), e._v(" "), t("label", {
        attrs: {
          for: i
        }
      }, [e._v(e._s(i))])]);
    }), 0), e._v(" "), "select" !== e.groupType ? t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.groupUrl,
        expression: "groupUrl"
      }],
      attrs: {
        type: "text",
        placeholder: "URL"
      },
      domProps: {
        value: e.groupUrl
      },
      on: {
        input: function (t) {
          t.target.composing || (e.groupUrl = t.target.value);
        }
      }
    }) : e._e(), e._v(" "), "select" !== e.groupType ? t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.groupInterval,
        expression: "groupInterval"
      }],
      attrs: {
        type: "text",
        placeholder: "Interval ( Second )"
      },
      domProps: {
        value: e.groupInterval
      },
      on: {
        input: function (t) {
          t.target.composing || (e.groupInterval = t.target.value);
        }
      }
    }) : e._e()]) : 1 === e.type ? t("div", {
      staticClass: "input-view"
    }, [t("div", {
      staticClass: "title"
    }, [e._v(e._s(e.data ? "Edit" : "New") + " Proxy")]), e._v(" "), t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.proxyName,
        expression: "proxyName"
      }],
      attrs: {
        type: "text",
        placeholder: Lg.proxyName()
      },
      domProps: {
        value: e.proxyName
      },
      on: {
        input: function (t) {
          t.target.composing || (e.proxyName = t.target.value);
        }
      }
    }), e._v(" "), t("div", {
      staticClass: "proxy-type-list"
    }, e._l(e.pType, function (i, n) {
      return t("div", {
        key: n
      }, [t("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: e.proxyType,
          expression: "proxyType"
        }],
        attrs: {
          type: "radio",
          id: i
        },
        domProps: {
          value: i,
          checked: e._q(e.proxyType, i)
        },
        on: {
          change: function (t) {
            e.proxyType = i;
          }
        }
      }), e._v(" "), t("label", {
        attrs: {
          for: i
        }
      }, [e._v(e._s(i))])]);
    }), 0), e._v(" "), t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.proxyServer,
        expression: "proxyServer"
      }],
      attrs: {
        type: "text",
        placeholder: Lg.server()
      },
      domProps: {
        value: e.proxyServer
      },
      on: {
        input: function (t) {
          t.target.composing || (e.proxyServer = t.target.value);
        }
      }
    }), e._v(" "), t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.proxyPort,
        expression: "proxyPort"
      }],
      attrs: {
        type: "text",
        placeholder: Lg.port()
      },
      domProps: {
        value: e.proxyPort
      },
      on: {
        input: function (t) {
          t.target.composing || (e.proxyPort = t.target.value);
        }
      }
    }), e._v(" "), "ss" === e.proxyType ? t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.proxyPassword,
        expression: "proxyPassword"
      }],
      attrs: {
        type: "text",
        placeholder: "Password"
      },
      domProps: {
        value: e.proxyPassword
      },
      on: {
        input: function (t) {
          t.target.composing || (e.proxyPassword = t.target.value);
        }
      }
    }) : e._e(), e._v(" "), "vmess" === e.proxyType ? t("div", {
      staticClass: "cipher-list"
    }, e._l(e.vmessCipher, function (i, n) {
      return t("div", {
        key: n
      }, [t("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: e.proxyChipher,
          expression: "proxyChipher"
        }],
        attrs: {
          type: "radio",
          id: i
        },
        domProps: {
          value: i,
          checked: e._q(e.proxyChipher, i)
        },
        on: {
          change: function (t) {
            e.proxyChipher = i;
          }
        }
      }), e._v(" "), t("label", {
        attrs: {
          for: i
        }
      }, [e._v(e._s(i))])]);
    }), 0) : "ss" === e.proxyType ? t("div", {
      staticClass: "cipher-list"
    }, e._l(e.ssCipher, function (i, n) {
      return t("div", {
        key: n
      }, [t("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: e.proxyChipher,
          expression: "proxyChipher"
        }],
        attrs: {
          type: "radio",
          id: i
        },
        domProps: {
          value: i,
          checked: e._q(e.proxyChipher, i)
        },
        on: {
          change: function (t) {
            e.proxyChipher = i;
          }
        }
      }), e._v(" "), t("label", {
        attrs: {
          for: i
        }
      }, [e._v(e._s(i))])]);
    }), 0) : e._e(), e._v(" "), "ss" === e.proxyType ? t("div", {
      staticClass: "ss-list"
    }, [t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.proxyObfs,
        expression: "proxyObfs"
      }],
      attrs: {
        type: "text",
        placeholder: "Obfs (Optional, tls or http)"
      },
      domProps: {
        value: e.proxyObfs
      },
      on: {
        input: function (t) {
          t.target.composing || (e.proxyObfs = t.target.value);
        }
      }
    }), e._v(" "), t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.proxyObfshost,
        expression: "proxyObfshost"
      }],
      attrs: {
        type: "text",
        placeholder: "Obfs-host (Optional)"
      },
      domProps: {
        value: e.proxyObfshost
      },
      on: {
        input: function (t) {
          t.target.composing || (e.proxyObfshost = t.target.value);
        }
      }
    })]) : e._e(), e._v(" "), "vmess" === e.proxyType ? t("div", {
      staticClass: "vmess-list"
    }, [t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.proxyUuid,
        expression: "proxyUuid"
      }],
      attrs: {
        type: "text",
        placeholder: "UUID"
      },
      domProps: {
        value: e.proxyUuid
      },
      on: {
        input: function (t) {
          t.target.composing || (e.proxyUuid = t.target.value);
        }
      }
    }), e._v(" "), t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.proxyAlterid,
        expression: "proxyAlterid"
      }],
      attrs: {
        type: "text",
        placeholder: "AlterId"
      },
      domProps: {
        value: e.proxyAlterid
      },
      on: {
        input: function (t) {
          t.target.composing || (e.proxyAlterid = t.target.value);
        }
      }
    }), e._v(" "), "vmess" === e.proxyType ? t("div", {
      staticClass: "cipher-list"
    }, e._l(e.vmessType, function (i, n) {
      return t("div", {
        key: n
      }, [t("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: e.proxyNetwork,
          expression: "proxyNetwork"
        }],
        attrs: {
          type: "radio",
          id: i
        },
        domProps: {
          value: i,
          checked: e._q(e.proxyNetwork, i)
        },
        on: {
          change: function (t) {
            e.proxyNetwork = i;
          }
        }
      }), e._v(" "), t("label", {
        attrs: {
          for: i
        }
      }, [e._v(e._s(i))])]);
    }), 0) : e._e()]) : e._e(), e._v(" "), "http" === e.proxyType || "socks5" === e.proxyType ? t("div", {
      staticClass: "input-view"
    }, [t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.proxyUsername,
        expression: "proxyUsername"
      }],
      attrs: {
        type: "text",
        placeholder: "User Name (Optional)"
      },
      domProps: {
        value: e.proxyUsername
      },
      on: {
        input: function (t) {
          t.target.composing || (e.proxyUsername = t.target.value);
        }
      }
    }), e._v(" "), t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.proxyPassword,
        expression: "proxyPassword"
      }],
      attrs: {
        type: "text",
        placeholder: "Password (Optional)"
      },
      domProps: {
        value: e.proxyPassword
      },
      on: {
        input: function (t) {
          t.target.composing || (e.proxyPassword = t.target.value);
        }
      }
    })]) : e._e(), e._v(" "), "vmess" === e.proxyType && "ws" === e.proxyNetwork ? t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.proxyWsPath,
        expression: "proxyWsPath"
      }],
      attrs: {
        type: "text",
        placeholder: "ws path"
      },
      domProps: {
        value: e.proxyWsPath
      },
      on: {
        input: function (t) {
          t.target.composing || (e.proxyWsPath = t.target.value);
        }
      }
    }) : e._e(), e._v(" "), "vmess" === e.proxyType && "ws" === e.proxyNetwork ? t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.proxyWsHeaders,
        expression: "proxyWsHeaders"
      }],
      attrs: {
        type: "text",
        placeholder: "ws headers (JSON)"
      },
      domProps: {
        value: e.proxyWsHeaders
      },
      on: {
        input: function (t) {
          t.target.composing || (e.proxyWsHeaders = t.target.value);
        }
      }
    }) : e._e(), e._v(" "), "vmess" === e.proxyType || "socks5" === e.proxyType || "http" === e.proxyType ? t("div", [t("div", [t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.proxyTls,
        expression: "proxyTls"
      }],
      attrs: {
        type: "checkbox",
        id: "vmess-tls"
      },
      domProps: {
        checked: Array.isArray(e.proxyTls) ? e._i(e.proxyTls, null) > -1 : e.proxyTls
      },
      on: {
        change: function (t) {
          var i = e.proxyTls,
            n = t.target,
            o = !!n.checked;
          if (Array.isArray(i)) {
            var s = e._i(i, null);
            n.checked ? s < 0 && (e.proxyTls = i.concat([null])) : s > -1 && (e.proxyTls = i.slice(0, s).concat(i.slice(s + 1)));
          } else e.proxyTls = o;
        }
      }
    }), e._v(" "), t("label", {
      attrs: {
        for: "vmess-tls"
      }
    }, [e._v("TLS")])]), e._v(" "), t("div", [t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.proxySkipCertVerify,
        expression: "proxySkipCertVerify"
      }],
      attrs: {
        type: "checkbox",
        id: "vmess-skip-cert-verify"
      },
      domProps: {
        checked: Array.isArray(e.proxySkipCertVerify) ? e._i(e.proxySkipCertVerify, null) > -1 : e.proxySkipCertVerify
      },
      on: {
        change: function (t) {
          var i = e.proxySkipCertVerify,
            n = t.target,
            o = !!n.checked;
          if (Array.isArray(i)) {
            var s = e._i(i, null);
            n.checked ? s < 0 && (e.proxySkipCertVerify = i.concat([null])) : s > -1 && (e.proxySkipCertVerify = i.slice(0, s).concat(i.slice(s + 1)));
          } else e.proxySkipCertVerify = o;
        }
      }
    }), e._v(" "), t("label", {
      attrs: {
        for: "vmess-skip-cert-verify"
      }
    }, [e._v(Lg.skipCertVerify())])])]) : e._e()]) : e._e(), e._v(" "), t("div", {
      staticClass: "btns"
    }, [t("div", {
      staticClass: "btn cancel",
      on: {
        click: function (t) {
          return e.$emit("inputCancel");
        }
      }
    }, [e._v(Lg.cancel())]), e._v(" "), t("div", {
      staticClass: "btn confirm",
      on: {
        click: e.confirmInput
      }
    }, [e._v(Lg.ok())])])]);
  }, [], !1, null, "f638b328", null).exports;
  var N = i(57147),
    D = i.n(N),
    I = i(71017),
    E = i.n(I);
  function T(e, t) {
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
  var M = "proxy-groups",
    A = "proxies",
    O = "rules";
  const P = {
    props: ["profileName"],
    components: {
      draggable: y(),
      AppendProxyView: L
    },
    data: function () {
      return {
        conf: null,
        specialProxies: [{
          name: "DIRECT"
        }, {
          name: "REJECT"
        }],
        addType: -1,
        addData: null,
        saveBtn: Lg.save()
      };
    },
    computed: (function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2 ? T(Object(i), !0).forEach(function (t) {
          d()(e, t, i[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : T(Object(i)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
      }
      return e;
    })({}, (0, b.mapState)({
      clashPath: function (e) {
        return e.app.clashPath;
      },
      profilesPath: function (e) {
        return e.app.profilesPath;
      }
    })),
    methods: {
      proxy2group: function (e) {
        return e.name;
      },
      removeFromGroup: function (e, t) {
        this.conf[M][e].proxies.splice(t, 1);
      },
      removeFromProxies: function (e, t) {
        e.stopPropagation();
        var i = this.conf[A][t].name;
        (this.conf[A].splice(t, 1), this.conf[M].forEach(function (e) {
          e.proxies = e.proxies.filter(function (e) {
            return e !== i;
          });
        }));
      },
      removeGroup: function (e, t) {
        e.stopPropagation();
        var i = this.conf[M][t].name;
        (this.conf[M].splice(t, 1), this.conf[M].forEach(function (e) {
          e.proxies = e.proxies.filter(function (e) {
            return e !== i;
          });
        }));
      },
      renameGroup: function (e, t) {
        this.conf[M].forEach(function (i) {
          i.proxies = i.proxies.map(function (i) {
            return i === e ? t : i;
          });
        });
      },
      renameRule: function (e, t) {
        this.conf[O] = this.conf[O].map(function (i) {
          if (/\s*MATCH\s*,([^,]*)($|,*|\/\/|#)/.test(i)) {
            if (RegExp.$1.trim() === e.trim()) return "MATCH,".concat(t).concat(RegExp.$2);
          } else if (/([^,]*?),([^,]*?),([^,]*)($|,*|\/\/|#)/.test(i) && RegExp.$3.trim() === e.trim()) return "".concat(RegExp.$1, ",").concat(RegExp.$2, ",").concat(t).concat(RegExp.$4);
          return i;
        });
      },
      handleInputDone: function (e) {
        if (((this.addType = -1), 0 === e.type)) {
          if (-1 === e.index) this.conf[M].push(e.content);else {
            var t = this.conf[M][e.index].proxies,
              i = e.content,
              n = this.conf[M][e.index].name,
              o = e.content.name;
            ((i.proxies = t), (this.conf[M][e.index] = i), this.renameGroup(n, o), this.renameRule(n, o));
          }
        } else if (1 === e.type) if (-1 === e.index) this.conf[A].push(e.content);else {
          var s = e.content.name,
            r = this.conf[A][e.index].name;
          ((this.conf[A][e.index] = e.content), this.renameGroup(r, s), this.renameRule(r, s));
        }
      },
      newGroup: function () {
        ((this.addType = 0), (this.addData = null));
      },
      editGroup: function (e, t) {
        var i = e.type;
        ["url-test", "fallback", "select", "load-balance"].includes(i) ? ((this.addType = 0), (e._index = t), (this.addData = e)) : this.$alert({
          content: Lg.couldNotEditProxyGroupType() + " [".concat(i, "].")
        });
      },
      newProxy: function () {
        ((this.addType = 1), (this.addData = null));
      },
      editProxy: function (e, t) {
        var i = e.type;
        ["ss", "vmess", "http", "socks"].includes(i) ? ((this.addType = 1), (e._index = t), (this.addData = e)) : this.$alert({
          content: Lg.cannotEditProxyType() + " [".concat(i, "].")
        });
      },
      loadData: function () {
        var e = E().join(this.profilesPath, this.profileName),
          t = D().readFileSync(e, "utf8");
        try {
          this.conf = m().parse(t);
        } catch (e) {}
      },
      saveData: function () {
        const Lg = new Language(modifyState.language);
        if (Lg.save() === this.saveBtn) try {
          var e = E().join(this.profilesPath, this.profileName);
          (D().writeFileSync(e, m().stringify(this.conf)), this.$emit("done"));
        } catch (e) {
          this.$emit("error");
        }
      }
    },
    mounted: function () {
      this.loadData();
    }
  };
  (i(60420), i(48619));
  const R = (0, k.Z)(P, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return t("div", {
      staticClass: "main-config-view"
    }, [t("div", {
      staticClass: "floating"
    }, [t("div", {
      staticClass: "hint"
    }, [e._v(Lg.sortDescribe())]), e._v(" "), t("div", {
      staticClass: "floating-right"
    }, [t("div", {
      staticClass: "main-btn save",
      on: {
        click: e.saveData
      }
    }, [e._v(e._s(e.saveBtn))]), e._v(" "), t("div", {
      staticClass: "main-btn reload",
      on: {
        click: function (t) {
          return e.$emit("cancel");
        }
      }
    }, [e._v(Lg.cancel())])])]), e._v(" "), e.conf ? t("div", {
      staticClass: "drag"
    }, [t("div", {
      staticClass: "proxy"
    }, [e._m(0), e._v(" "), t("draggable", {
      staticClass: "dragArea",
      attrs: {
        group: {
          name: "people",
          pull: "clone",
          put: !1,
          revertClone: !0
        },
        clone: e.proxy2group,
        delay: 300,
        animation: 200,
        "delay-on-touch-only": !0
      },
      model: {
        value: e.specialProxies,
        callback: function (t) {
          e.specialProxies = t;
        },
        expression: "specialProxies"
      }
    }, e._l(e.specialProxies, function (i, n) {
      return t("div", {
        key: n,
        staticClass: "proxy-item left-item"
      }, [e._v("\n          " + e._s(i.name) + "\n        ")]);
    }), 0), e._v(" "), t("div", {
      staticClass: "section-title"
    }, [t("h2", [e._v(Lg.proxyGroups())]), e._v(" "), t("div", {
      staticClass: "add-icon",
      on: {
        click: e.newGroup
      }
    }, [e._v(Lg.add())])]), e._v(" "), t("draggable", {
      staticClass: "dragArea",
      attrs: {
        group: {
          name: "people",
          pull: "clone",
          put: !1,
          revertClone: !0
        },
        clone: e.proxy2group,
        delay: 300,
        animation: 200,
        "delay-on-touch-only": !0
      },
      model: {
        value: e.conf["proxy-groups"],
        callback: function (t) {
          e.$set(e.conf, "proxy-groups", t);
        },
        expression: "conf['proxy-groups']"
      }
    }, e._l(e.conf["proxy-groups"], function (i, n) {
      return t("div", {
        key: n,
        staticClass: "proxy-item left-item",
        on: {
          click: function (t) {
            return e.editGroup(i, n);
          }
        }
      }, [t("div", [e._v(e._s(i.name))]), e._v(" "), t("span", {
        staticClass: "icon text-white",
        on: {
          click: function (t) {
            return e.removeGroup(t, n);
          }
        }
      }, [e._v("delete")])]);
    }), 0), e._v(" "), t("div", {
      staticClass: "section-title"
    }, [t("h2", [e._v(Lg.proxies())]), e._v(" "), t("div", {
      staticClass: "add-icon",
      on: {
        click: e.newProxy
      }
    }, [e._v(Lg.add())])]), e._v(" "), t("draggable", {
      staticClass: "dragArea",
      attrs: {
        group: {
          name: "people",
          pull: "clone",
          put: !1,
          revertClone: !0
        },
        clone: e.proxy2group,
        delay: 300,
        animation: 200,
        "delay-on-touch-only": !0
      },
      model: {
        value: e.conf.proxies,
        callback: function (t) {
          e.$set(e.conf, "proxies", t);
        },
        expression: "conf['proxies']"
      }
    }, e._l(e.conf.proxies, function (i, n) {
      return t("div", {
        key: n,
        staticClass: "proxy-item left-item",
        on: {
          click: function (t) {
            return e.editProxy(i, n);
          }
        }
      }, [t("div", [e._v(e._s(i.name))]), e._v(" "), t("span", {
        staticClass: "icon text-white",
        on: {
          click: function (t) {
            return e.removeFromProxies(t, n);
          }
        }
      }, [e._v("delete")])]);
    }), 0)], 1), e._v(" "), t("div", {
      staticClass: "proxy-group"
    }, e._l(e.conf["proxy-groups"], function (i, n) {
      return t("div", {
        key: n
      }, [t("div", {
        staticClass: "section-title"
      }, [t("h2", [e._v(e._s(i.name))]), e._v(" "), t("div", {
        staticClass: "type-icon"
      }, [e._v("( " + e._s(i.type) + " )")])]), e._v(" "), t("draggable", {
        staticClass: "dragArea",
        attrs: {
          group: {
            name: "people"
          },
          scroll: !0,
          scrollSensitivity: 100,
          scrollSpeed: 50,
          delay: 300,
          animation: 200,
          "delay-on-touch-only": !0
        },
        model: {
          value: i.proxies,
          callback: function (t) {
            e.$set(i, "proxies", t);
          },
          expression: "group.proxies"
        }
      }, e._l(i.proxies, function (i, o) {
        return t("div", {
          key: o,
          staticClass: "proxy-item right-item"
        }, [t("div", [e._v(e._s(i))]), e._v(" "), t("span", {
          staticClass: "icon text-white",
          on: {
            click: function (t) {
              return e.removeFromGroup(n, o);
            }
          }
        }, [e._v("delete")])]);
      }), 0)], 1);
    }), 0)]) : e._e(), e._v(" "), -1 !== e.addType ? t("append-proxy-view", {
      attrs: {
        data: e.addData,
        type: e.addType
      },
      on: {
        inputDone: e.handleInputDone,
        inputCancel: function (t) {
          e.addType = -1;
        }
      }
    }) : e._e()], 1);
  }, [function () {
    var e = this._self._c;
    return e("div", {
      staticClass: "section-title"
    }, [e("h2", [this._v(Lg.specialProxies())])]);
  }], !1, null, "9e0b3cf4", null).exports;
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
  function B(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? F(Object(i), !0).forEach(function (t) {
        d()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : F(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  const V = {
    props: ["profileName"],
    data: function () {
      return {
        ruleTypes: ["DOMAIN-SUFFIX", "DOMAIN", "DOMAIN-KEYWORD", "IP-CIDR", "SRC-IP-CIDR", "GEOIP", "PROCESS-NAME", "DST-PORT", "SRC-PORT", "MATCH"],
        selectedType: "",
        proxyGroups: [],
        selectedGroup: "",
        content: ""
      };
    },
    computed: B(B({}, (0, b.mapState)({
      profilesPath: function (e) {
        return e.app.profilesPath;
      }
    })), (0, b.mapGetters)(["clashAxiosClient"])),
    methods: {
      inputDone: function () {
        var e = null;
        ("MATCH" === this.selectedType && this.selectedGroup ? (e = {
          type: this.selectedType,
          payload: "",
          proxy: this.selectedGroup
        }) : this.content && this.selectedType && this.selectedGroup && (e = {
          type: this.selectedType,
          payload: this.content,
          proxy: this.selectedGroup
        }), this.$emit("done", e));
      },
      handleMaskClick: function (e) {
        this.$emit("close");
      }
    },
    mounted: function () {
      try {
        var e = m().parse(D().readFileSync(E().join(this.profilesPath, this.profileName)).toString()),
          t = e.proxies,
          i = void 0 === t ? [] : t,
          n = e["proxy-groups"],
          s = void 0 === n ? [] : n,
          r = i.map(function (e) {
            return e.name;
          }),
          a = s.map(function (e) {
            return e.name;
          });
        this.proxyGroups = ["DIRECT", "REJECT"].concat(o()(a), o()(r));
      } catch (e) {}
    }
  };
  (i(72852), i(20988));
  const W = (0, k.Z)(V, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return t("div", {
      attrs: {
        type: "text/x-template",
        id: "modal-template"
      }
    }, [t("transition", {
      attrs: {
        name: "modal"
      }
    }, [t("div", {
      staticClass: "modal-mask",
      on: {
        mousedown: e.handleMaskClick
      }
    }, [t("div", {
      staticClass: "modal-wrapper"
    }, [t("div", {
      staticClass: "modal-container",
      on: {
        mousedown: function (e) {
          e.stopPropagation();
        }
      }
    }, [t("div", {
      staticClass: "model-title"
    }, [t("div", [e._v(Lg.createNewRule())]), e._v(" "), t("div", {
      staticClass: "rule-floating-btns"
    }, [t("div", {
      staticClass: "rule-floating-ok",
      on: {
        click: e.inputDone
      }
    }, [e._v(Lg.add())]), e._v(" "), t("div", {
      staticClass: "rule-floating-cancel",
      on: {
        click: function (t) {
          return e.$emit("close");
        }
      }
    }, [e._v("\n                " + Lg.cancel() + "\n              ")])])]), e._v(" "), t("div", {
      staticClass: "scroll-view"
    }, ["MATCH" !== e.selectedType ? t("div", {
      staticClass: "rule-section-title"
    }, [e._v("\n              " + Lg.content() + "\n            ")]) : e._e(), e._v(" "), t("div", ["MATCH" !== e.selectedType ? t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.content,
        expression: "content"
      }],
      attrs: {
        placeholder: Lg.eg() + "google.com",
        id: "rule-content",
        type: "text"
      },
      domProps: {
        value: e.content
      },
      on: {
        input: function (t) {
          t.target.composing || (e.content = t.target.value);
        }
      }
    }) : e._e()]), e._v(" "), t("div", {
      staticClass: "rule-section-title"
    }, [e._v(Lg.type())]), e._v(" "), t("div", {
      staticClass: "rule-type-group"
    }, e._l(e.ruleTypes, function (i, n) {
      return t("div", {
        key: n,
        class: {
          "rule-type-item": !0,
          "rule-type-selected": i === e.selectedType
        },
        on: {
          click: function (t) {
            e.selectedType = i;
          }
        }
      }, [e._v("\n                " + e._s(i) + "\n              ")]);
    }), 0), e._v(" "), t("div", {
      staticClass: "rule-section-title"
    }, [e._v(Lg.proxyPolicy())]), e._v(" "), t("div", {
      staticClass: "rule-proxy-group"
    }, e._l(e.proxyGroups, function (i, n) {
      return t("div", {
        key: n,
        class: {
          "rule-proxy-item": !0,
          "rule-proxy-selected": i === e.selectedGroup
        },
        on: {
          click: function (t) {
            e.selectedGroup = i;
          }
        }
      }, [e._v("\n                " + e._s(i) + "\n              ")]);
    }), 0)])])])])])], 1);
  }, [], !1, null, "eea841c4", null).exports;
  function H(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  function z(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? H(Object(i), !0).forEach(function (t) {
        d()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : H(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  var j = i(24793),
    U = [];
  const $ = {
    props: ["profileName"],
    data: function () {
      const Lg = new Language(modifyState.language);
      return {
        listData: [],
        memoryData: [],
        showAlterModel: !1,
        saveBtnText: Lg.save(),
        axiosSource: null,
        filterKeywords: "",
        providers: {}
      };
    },
    components: {
      RuleAlterView: W
    },
    watch: {},
    computed: z(z({}, (0, b.mapState)({
      clashPath: function (e) {
        return e.app.clashPath;
      },
      profiles: function (e) {
        return e.app.profiles;
      },
      profilesPath: function (e) {
        return e.app.profilesPath;
      }
    })), (0, b.mapGetters)(["clashAxiosClient"])),
    methods: {
      handleRuleClick: function (e) {
        var t = this;
        return l()(u().mark(function i() {
          var n, o, s;
          return u().wrap(function (i) {
            for (;;) switch ((i.prev = i.next)) {
              case 0:
                if (((n = e.type), (o = e.payload), "RULE-SET" !== n)) {
                  i.next = 13;
                  break;
                }
                return ((i.prev = 2), (i.next = 5), t.clashAxiosClient.put("/providers/rules/".concat(encodeURIComponent(o))));
              case 5:
                ((s = i.sent), 204 === s.status ? (t.loadData(), (0, _.c0)("Success", "RULE-SET [".concat(o, "] has been updated!"))) : (0, _.c0)("Failed", "RULE-SET [".concat(o, "] update failed(Server Error)!")), (i.next = 13));
                break;
              case 10:
                ((i.prev = 10), (i.t0 = i.catch(2)), (0, _.c0)("Failed", "RULE-SET [".concat(o, "] " + Lg.updateFailedNetErr())));
              case 13:
              case "end":
                return i.stop();
            }
          }, i, null, [[2, 10]]);
        }))();
      },
      fromNow: function (e) {
        return p()(e).locale(Lg.locale()).fromNow();
      },
      providerOfPayload: function (e) {
        var t = this.providers[e];
        return t || null;
      },
      moveItem: function (e, t, i) {
        (this.removeItem(t, i), e ? this.memoryData.unshift(t) : this.memoryData.push(t), (this.listData = this.memoryData.slice(0, 100)));
      },
      randomBGC: function (e) {
        var t = U.find(function (t) {
          return t.type === e;
        });
        if (t) return {
          "background-color": "rgb(".concat(t.r, ",").concat(t.g, ",").concat(t.b, ")")
        };
        var i = Math.floor(100 * Math.random() + 10),
          n = Math.floor(100 * Math.random() + 10),
          o = Math.floor(100 * Math.random() + 10);
        return (U.push({
          type: e,
          r: i,
          g: n,
          b: o
        }), {
          "background-color": "rgb(".concat(i, ",").concat(n, ",").concat(o, ")")
        });
      },
      inputDone: function (e) {
        ((this.showAlterModel = !1), e && (this.memoryData.unshift(e), this.listData.unshift(e)));
      },
      handleFilterKeywordInput: j.debounce(function (e) {
        var t = e.target;
        if (t) {
          var i = t.value;
          ((this.filterKeywords = i), this.loadData());
        }
      }, 500),
      applyRules: function () {
        var e = this;
        const Lg = new Language(modifyState.language);
        return l()(u().mark(function t() {
          var i, n, o, s, r;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                try {
                  ((i = (0, _.EP)(e.memoryData)), (n = i.map(function (e) {
                    var t = e.type,
                      i = e.payload,
                      n = e.proxy,
                      o = e.params,
                      s = void 0 === o ? "" : o;
                    return i ? "".concat(t, ",").concat(i, ",").concat(n).concat(s) : "".concat(t, ",").concat(n);
                  })), (o = E().join(e.profilesPath, e.profileName)), (s = D().readFileSync(o, "utf8")), ((r = m().parse(s)).rules = n), D().writeFileSync(o, m().stringify(r)), e.$emit("done"), (e.saveBtnText = "Done"));
                } catch (t) {
                  (e.$emit("error"), (e.saveBtnText = "Fail"));
                }
                setTimeout(function () {
                  e.saveBtnText = Lg.save();
                }, 3e3);
              case 2:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      removeItem: function (e, t) {
        var i = this.memoryData.findIndex(function (t) {
          return (t.payload === e.payload && t.proxy === e.proxy && t.type === e.type);
        });
        i > -1 && (this.memoryData.splice(i, 1), this.listData.splice(t, 1));
      },
      loadData: function () {
        var e = this;
        return l()(u().mark(function t() {
          var i, n, o, s, a, l, c, d, h, g, p, f;
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((i = E().join(e.profilesPath, e.profileName)), (n = D().readFileSync(i, "utf8")), (t.prev = 2), (t.next = 5), Promise.all([e.clashAxiosClient.get("/rules"), e.clashAxiosClient.get("/providers/rules")]));
              case 5:
                ((o = t.sent), (s = r()(o, 2)), (a = s[0].data), (l = void 0 === a ? {} : a), (c = s[1].data), (d = (c = void 0 === c ? {} : c).providers), (e.providers = d), (h = l.rules), void 0 === h ? [] : h, (g = m().parse(n)), (e.memoryData = g.rules.map(function (e) {
                  var t = e.split(",");
                  return 2 === t.length ? {
                    type: t[0].trim(),
                    payload: "",
                    proxy: t[1].trim(),
                    params: ""
                  } : 3 === t.length ? {
                    payload: t[1].trim(),
                    proxy: t[2].trim(),
                    type: t[0].trim(),
                    params: ""
                  } : 4 === t.length ? {
                    payload: t[1].trim(),
                    proxy: t[2].trim(),
                    type: t[0].trim(),
                    params: ",".concat(t[3])
                  } : null;
                }).filter(function (e) {
                  return e;
                })), "" !== e.filterKeywords ? ((p = e.filterKeywords.trim().split(/\s+/).join("|")), (f = new RegExp(p, "i")), (e.listData = e.memoryData.filter(function (e) {
                  return (f.test(e.proxy) || f.test(e.payload) || f.test(e.type));
                }).slice(0, 100))) : (e.listData = e.memoryData.slice(0, 100)), (t.next = 21));
                break;
              case 19:
                ((t.prev = 19), (t.t0 = t.catch(2)));
              case 21:
              case "end":
                return t.stop();
            }
          }, t, null, [[2, 19]]);
        }))();
      }
    },
    mounted: function () {
      this.loadData();
    },
    destroyed: function () {}
  };
  (i(91924), i(3930));
  const K = (0, k.Z)($, function () {
    var e = this,
      t = e._self._c;
    return t("div", {
      attrs: {
        id: "main-log-view"
      }
    }, [t("div", {
      staticClass: "header"
    }, [t("div", {
      staticClass: "title"
    }, [e._v(Lg.topMatchRule() + "(" + e._s(e.memoryData.length) + ").")]), e._v(" "), t("div", {
      staticClass: "header-btns"
    }, [t("div", {
      staticClass: "btn btn-add md-button",
      on: {
        click: function (t) {
          e.showAlterModel = !0;
        }
      }
    }, [e._v("\n        " + Lg.add() + "\n      ")]), e._v(" "), t("div", {
      staticClass: "btn btn-save md-button",
      on: {
        click: e.applyRules
      }
    }, [e._v("\n        " + e._s(e.saveBtnText) + "\n      ")]), e._v(" "), t("div", {
      staticClass: "btn btn-back md-button",
      on: {
        click: function (t) {
          return e.$emit("cancel");
        }
      }
    }, [e._v("\n        " + Lg.cancel() + "\n      ")])])]), e._v(" "), t("div", {
      staticClass: "filter-view"
    }, [t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.filterKeywords,
        expression: "filterKeywords"
      }],
      attrs: {
        type: "text",
        placeholder: Lg.fiterByKeywords()
      },
      domProps: {
        value: e.filterKeywords
      },
      on: {
        input: [function (t) {
          t.target.composing || (e.filterKeywords = t.target.value);
        }, function (t) {
          return e.handleFilterKeywordInput(t);
        }]
      }
    })]), e._v(" "), t("div", {
      staticClass: "log-list"
    }, e._l(e.listData, function (i, n) {
      return t("div", {
        key: n,
        staticClass: "log-item",
        attrs: {
          title: i.payload
        },
        on: {
          click: function (t) {
            return e.handleRuleClick(i);
          }
        }
      }, [t("div", {
        staticClass: "left"
      }, [t("div", {
        class: ["url", e.providerOfPayload(i.payload) ? "rule-set" : ""]
      }, [e._v("\n          " + e._s(i.payload) + "\n        ")]), e._v(" "), t("div", {
        staticClass: "rule"
      }, [e._v("\n          " + e._s(i.type) + "\n          "), e.providerOfPayload(i.payload) ? t("div", [e._v("\n            Rules: " + e._s(e.providerOfPayload(i.payload).ruleCount) + "\n          ")]) : e._e(), e._v(" "), e.providerOfPayload(i.payload) ? t("div", [e._v("\n            Last Updated:\n            " + e._s(e.fromNow(e.providerOfPayload(i.payload).updatedAt)) + "\n          ")]) : e._e(), e._v(" "), e.providerOfPayload(i.payload) ? t("div", [e._v("\n            " + e._s(e.providerOfPayload(i.payload).vehicleType) + "\n            " + e._s(e.providerOfPayload(i.payload).behavior) + "\n          ")]) : e._e()])]), e._v(" "), t("div", {
        staticClass: "right-main"
      }, [t("div", {
        staticClass: "right",
        style: e.randomBGC(i.proxy)
      }, [e._v("\n          " + e._s(i.proxy) + "\n        ")]), e._v(" "), t("span", {
        staticClass: "icon ctl-icon",
        on: {
          click: function (t) {
            return (t.stopPropagation(), e.moveItem(!0, i, n));
          }
        }
      }, [e._v("north")]), e._v(" "), t("span", {
        staticClass: "icon ctl-icon",
        on: {
          click: function (t) {
            return (t.stopPropagation(), e.moveItem(!1, i, n));
          }
        }
      }, [e._v("south")]), e._v(" "), t("span", {
        staticClass: "icon ctl-icon",
        on: {
          click: function (t) {
            return (t.stopPropagation(), e.removeItem(i, n));
          }
        }
      }, [e._v("delete")])])]);
    }), 0), e._v(" "), e.showAlterModel ? t("rule-alter-view", {
      attrs: {
        "profile-name": e.profileName
      },
      on: {
        close: function (t) {
          e.showAlterModel = !1;
        },
        done: e.inputDone
      }
    }) : e._e()], 1);
  }, [], !1, null, "459dde1e", null).exports;
  const q = require("qrcode");
  var Z = i.n(q),
    G = i(72298);
  const Y = {
    name: "QRCodeView",
    components: {},
    props: {
      url: String
    },
    data: function () {
      return {
        src: "",
        isWithSheme: !0
      };
    },
    watch: {
      isWithSheme: function () {
        this.updateQrcode();
      }
    },
    computed: {
      finalURL: function () {
        return this.isWithSheme ? "clash://install-config?url=".concat(encodeURIComponent(this.url)) : this.url;
      },
      shorternFinalURL: function () {
        return this.finalURL ? (0, _.XW)(this.finalURL, 120) : "";
      }
    },
    methods: {
      handleGoToURL: function () {
        (0, _.fl)(this.url);
      },
      updateQrcode: function () {
        var e = this;
        return l()(u().mark(function t() {
          return u().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                return ((t.prev = 0), (t.next = 3), Z().toDataURL(e.finalURL));
              case 3:
                ((e.src = t.sent), (t.next = 8));
                break;
              case 6:
                ((t.prev = 6), (t.t0 = t.catch(0)));
              case 8:
              case "end":
                return t.stop();
            }
          }, t, null, [[0, 6]]);
        }))();
      }
    },
    mounted: function () {
      this.updateQrcode();
    }
  };
  i(78518);
  const Q = (0, k.Z)(Y, function () {
    var e = this,
      t = e._self._c;
    return t("div", {
      staticClass: "qrcode-view-main",
      on: {
        click: function (t) {
          return e.$emit("hide");
        }
      }
    }, [t("div", {
      staticClass: "content",
      on: {
        click: function (e) {
          e.stopPropagation();
        }
      }
    }, [t("img", {
      attrs: {
        src: e.src,
        alt: ""
      }
    }), e._v(" "), t("div", {
      staticClass: "url",
      on: {
        click: e.handleGoToURL
      }
    }, [e._v("\n      " + e._s(e.shorternFinalURL) + "\n    ")]), e._v(" "), t("div", {
      staticClass: "btn",
      on: {
        click: function (t) {
          e.isWithSheme = !e.isWithSheme;
        }
      }
    }, [e._v("\n      " + e._s(e.isWithSheme ? Lg.delete() : Lg.include()) + " " + Lg.scheme() + "\n    ")])])]);
  }, [], !1, null, "2c37fa0d", null).exports;
  var X = i(13338),
    J = i(1581),
    ee = i(71289);
  function te(e, t) {
    var i = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (!i) {
      if (Array.isArray(e) || (i = (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return ie(e, t);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === i && e.constructor && (i = e.constructor.name);
        if ("Map" === i || "Set" === i) return Array.from(e);
        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return ie(e, t);
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
  function ie(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
    return n;
  }
  function ne(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  function oe(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ne(Object(i), !0).forEach(function (t) {
        d()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ne(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  var se = i(57147),
    re = i(71017),
    ae = i(54387),
    le = i(24793),
    ce = ae.CancelToken,
    de = "manual-stop";
  const he = {
      data: function () {
        return {
          btnType: 0,
          resultHint: Lg.downloadFromURL(),
          editProfileName: "",
          editProfileType: -1,
          fileWatcher: null,
          inputFocus: !1,
          subUrl: "",
          downlodingUrls: {},
          dragSelectedName: "",
          qrcodeURL: "",
          intervalID: null,
          now: p()(),
          loadingProfileIndex: []
        };
      },
      components: {
        draggable: y(),
        ConfigView: R,
        RuleView: K,
        QRCodeView: Q,
        Hint: X.Z
      },
      directives: {
        focus: {
          update: function (e, t) {
            t.value && e.focus();
          }
        }
      },
      computed: oe(oe(oe({}, (0, b.mapState)({
        clashPath: function (e) {
          return e.app.clashPath;
        },
        pfs: function (e) {
          return e.app.profiles;
        },
        confData: function (e) {
          return e.app.confData;
        },
        profilesPath: function (e) {
          return e.app.profilesPath;
        }
      })), (0, b.mapGetters)(["clashAxiosClient"])), {}, {
        profiles: {
          get: function () {
            var e = this.pfs.files;
            return void 0 === e ? [] : e;
          },
          set: function (e) {
            this.changeProfiles({
              profiles: e
            });
          }
        },
        getBtnText: function () {
          return 3 === this.btnType ? Lg.downloading() : 1 === this.btnType ? Lg.error() + "!" : 2 === this.btnType ? Lg.success() + "!" : Lg.download();
        },
        getRightBtnText: function () {
          return Lg.directMode();
        },
        getRightBtnClass: function () {
          return {
            confirm: !0,
            "confirm-right": !0,
            "btn-error": 1 === this.btnType,
            "btn-success": 2 === this.btnType,
            "btn-loading": 3 === this.btnType
          };
        },
        getBtnClass: function () {
          return {
            confirm: !0,
            "confirm-left": !0,
            "btn-error": 1 === this.btnType,
            "btn-success": 2 === this.btnType,
            "btn-loading": 3 === this.btnType
          };
        }
      }),
      methods: oe(oe({}, (0, b.mapMutations)({
        changeProfiles: "CHANGE_PROFILES",
        changeProfilesIndex: "CHANGE_PROFILES_INDEX",
        changeProfile: "CHANGE_PROFILE",
        appendProfile: "APPEND_PROFILE",
        deleteProfile: "DELETE_PROFILE"
      })), {}, {
        handleOpenHomeWeb: function (e) {
          (0, _.fl)(e);
        },
        isProifleExpired: function (e) {
          var t = e.time,
            i = e.interval;
          if (i > 0 && t) try {
            var n = se.statSync(re.join(this.profilesPath, t)).mtime;
            if (n) return p()(n).isBefore(p()().subtract(i, "hours"));
          } catch (e) {}
          return !1;
        },
        parserHint: function (e) {
          var t = e.url,
            i = e.reg;
          return t ? "url (".concat(t.slice(0, 8), "...").concat(t.slice(-20), ")") : i ? "reg (".concat(i, ")") : "";
        },
        matchingParserCount: function (e) {
          var t = this.settings.profileParsersText,
            i = [];
          if (t) try {
            var n = m().parse(t).parsers;
            i = (void 0 === n ? [] : n) || [];
          } catch (e) {}
          var o = e.url;
          return o ? i.filter(function (e) {
            var t = e.url,
              i = e.reg;
            return t ? t === o : i ? new RegExp(i).test(o) : void 0;
          }) : [];
        },
        handleProfileRightClick: function (e, t, i) {
          var n = this;
          return l()(u().mark(function o() {
            var s, r;
            return u().wrap(function (o) {
              for (;;) switch ((o.prev = o.next)) {
                case 0:
                  3 === e.which && ((s = t.url), (r = "" === s), n.$menu([{
                    icon: "home",
                    text: Lg.openWebPage(),
                    hide: !(null != t && t.homeWeb),
                    click: function () {
                      n.handleOpenHomeWeb(t.homeWeb);
                    }
                  }, {
                    icon: "edit",
                    text: Lg.edit(),
                    click: function () {
                      n.openProfile(t);
                    }
                  }, {
                    icon: "edit",
                    text: Lg.editExternally(),
                    click: function () {
                      n.openProfile(t, !0);
                    }
                  }, {
                    icon: "refresh",
                    text: Lg.update(),
                    hide: r,
                    click: function () {
                      n.refreshProfile(t);
                    }
                  }, {
                    text: Lg.showInFolder(),
                    icon: "folder",
                    click: function () {
                      n.openProfileInFolder(t);
                    }
                  }, {
                    icon: "merge_type",
                    text: "Diff",
                    hide: r,
                    click: function () {
                      n.makeDiff(t);
                    }
                  }, {
                    icon: "send",
                    text: Lg.proxies(),
                    click: function () {
                      n.editProfile(t);
                    }
                  }, {
                    icon: "rule",
                    text: Lg.rule(),
                    click: function () {
                      n.editProfileRule(t);
                    }
                  }, {
                    icon: "content_copy",
                    text: Lg.copy(),
                    click: function () {
                      n.handleCopyProfile(t);
                    }
                  }, {
                    icon: "qr_code",
                    text: Lg.qrCode(),
                    hide: r,
                    click: function () {
                      n.handleQrcodeOpen(t);
                    }
                  }, {
                    icon: "account_tree",
                    text: Lg.parsers(),
                    hide: r,
                    click: function () {
                      n.handleParserInfoShow(t);
                    }
                  }, {
                    icon: "code",
                    text: Lg.runScript(),
                    click: function () {
                      n.handleRunScirpt(t);
                    }
                  }, {
                    icon: "settings",
                    text: Lg.settings(),
                    click: function () {
                      n.handleEditItem(i);
                    }
                  }, {
                    icon: "delete",
                    text: Lg.delete(),
                    click: function () {
                      n.handleDeleteProfile(i);
                    }
                  }], e));
                case 1:
                case "end":
                  return o.stop();
              }
            }, o);
          }))();
        },
        openProfileInFolder: function (e) {
          G.shell.showItemInFolder(re.join(this.profilesPath, e.time));
        },
        handleUpdateAllProfiles: function () {
          var e,
            t = te(this.profiles);
          try {
            for (t.s(); !(e = t.n()).done;) {
              var i = e.value;
              this.refreshProfile(i, {
                ignoreSelectAfterUpdated: !0
              });
            }
          } catch (e) {
            t.e(e);
          } finally {
            t.f();
          }
        },
        handleParserInfoShow: function (e) {
          var t = this;
          return l()(u().mark(function i() {
            var n, o, s, a, l, c, d, h, g;
            return u().wrap(function (i) {
              for (;;) switch ((i.prev = i.next)) {
                case 0:
                  return ((n = t.matchingParserCount(e)), (o = n.map(function (e, i) {
                    return "".concat(i + 1, ". ").concat(t.parserHint(e));
                  }).join("\n")), (i.next = 4), t.$select({
                    title: Lg.parsersStart().concat(n.length, Lg.parsersEnd()),
                    message: "".concat(o),
                    items: Lg.parsersOption()
                  }));
                case 4:
                  if (((s = i.sent), (a = r()(s, 1)), 0 !== a[0])) {
                    i.next = 22;
                    break;
                  }
                  return ((l = "profileParsersText"), (c = t.settings[l]) || (c = "parsers: # array\n"), (i.prev = 11), (i.next = 14), t.$code({
                    code: c,
                    language: "yaml",
                    fontSize: t.settings.editorFontSize
                  }));
                case 14:
                  ((d = i.sent), (h = d.code), (g = void 0 === h ? "" : h), (t.settings[l] = g), (i.next = 22));
                  break;
                case 20:
                  ((i.prev = 20), (i.t0 = i.catch(11)));
                case 22:
                case "end":
                  return i.stop();
              }
            }, i, null, [[11, 20]]);
          }))();
        },
        handleRunScirpt: function (e) {
          return l()(u().mark(function t() {
            return u().wrap(function (t) {
              for (;;) switch ((t.prev = t.next)) {
                case 0:
                  (0, J.TX)((0, _.EP)(e), J.lJ);
                case 1:
                case "end":
                  return t.stop();
              }
            }, t);
          }))();
        },
        handleQrcodeOpen: function (e) {
          var t = e.url;
          t && (this.qrcodeURL = t);
        },
        handleDragStart: function () {
          var e = this.pfs.index;
          (void 0 === e ? -1 : e) < 0 || (this.dragSelectedName = this.pfs.files[this.pfs.index].time);
        },
        handleDragEnd: function () {
          var e = this;
          if ("" !== this.dragSelectedName) {
            var t = this.pfs.files.findIndex(function (t) {
              return t.time === e.dragSelectedName;
            });
            this.changeProfilesIndex({
              index: t
            });
          }
        },
        handleCopyProfile: function (e) {
          var t = this;
          const Lg = new Language(modifyState.language);
          return l()(u().mark(function i() {
            var n, o, s, r;
            return u().wrap(function (i) {
              for (;;) switch ((i.prev = i.next)) {
                case 0:
                  return ((n = [{
                    name: Lg.name(),
                    key: "filename",
                    placeholder: Lg.inputNewFileName(),
                    required: !0
                  }]), (i.prev = 1), (i.next = 4), t.$input({
                    title: Lg.duplicateProfile(),
                    data: n
                  }));
                case 4:
                  ((o = i.sent), (s = o.filename), (r = void 0 === s ? "" : s), t.localCopy(r, re.join(t.profilesPath, e.time)), (i.next = 12));
                  break;
                case 10:
                  ((i.prev = 10), (i.t0 = i.catch(1)));
                case 12:
                case "end":
                  return i.stop();
              }
            }, i, null, [[1, 10]]);
          }))();
        },
        handleEditItem: function (e) {
          var t = this;
          const Lg = new Language(modifyState.language);
          return l()(u().mark(function i() {
            var n, o, s, r, a, l, c, d, h, g, p, f, m, v, _, b, w;
            return u().wrap(function (i) {
              for (;;) switch ((i.prev = i.next)) {
                case 0:
                  return ((n = oe({}, t.pfs.files[e])), Lg.editProfileInformation(), (o = n.interval), (s = void 0 === o ? 0 : o), (r = n.cron), (a = void 0 === r ? "" : r), (l = [{
                    key: "name",
                    name: Lg.name(),
                    required: !0,
                    value: n.name
                  }, {
                    key: "url",
                    name: "URL",
                    value: n.url
                  }, {
                    key: "headers",
                    name: Lg.headers(),
                    value: n.headers,
                    placeholder: "key1:value1\nkey2:value2"
                  }, {
                    key: "interval",
                    name: Lg.updateInterval(),
                    validate: function (e) {
                      return /^\d+$/.test(e) ? "" : Lg.updateIntervalMustBeInteger();
                    },
                    value: s
                  }, {
                    key: "cron",
                    name: Lg.updateCron() + "Cron (UNIX)",
                    value: a,
                    placeholder: "0 0 * * *"
                  }]), (i.prev = 4), (i.next = 7), t.$input({
                    title: Lg.editProfileInformation(),
                    data: l
                  }));
                case 7:
                  ((c = i.sent), (d = c.name), (h = void 0 === d ? "" : d), (g = c.url), (p = void 0 === g ? "" : g), (f = c.interval), (m = void 0 === f ? 0 : f), (v = c.cron), (_ = void 0 === v ? "" : v), (b = c.headers), (w = void 0 === b ? "" : b), (n.name = h), (n.url = p), (n.interval = 1 * m), (n.cron = _), (n.headers = w), t.changeProfile({
                    index: e,
                    profile: n
                  }), (i.next = 28));
                  break;
                case 26:
                  ((i.prev = 26), (i.t0 = i.catch(4)));
                case 28:
                case "end":
                  return i.stop();
              }
            }, i, null, [[4, 26]]);
          }))();
        },
        listItemClassNames: function (e) {
          var t = ["list-item"];
          "" === this.pfs.files[e].url && t.push("item-local");
          var i = this.pfs.index;
          return (e === (void 0 === i ? -1 : i) && t.push("item-cur"), t);
        },
        handleURLConfirm: function (e) {
          var t = this;
          return l()(u().mark(function i() {
            return u().wrap(function (i) {
              for (;;) switch ((i.prev = i.next)) {
                case 0:
                  if (13 !== e.keyCode) {
                    i.next = 3;
                    break;
                  }
                  return ((i.next = 3), t.handleDownload());
                case 3:
                case "end":
                  return i.stop();
              }
            }, i);
          }))();
        },
        handleDownload: function () {
          var e = this;
          return l()(u().mark(function t() {
            return u().wrap(function (t) {
              for (;;) switch ((t.prev = t.next)) {
                case 0:
                  if ("" !== e.subUrl) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return");
                case 2:
                  if (3 !== e.btnType) {
                    t.next = 4;
                    break;
                  }
                  return t.abrupt("return");
                case 4:
                  return ((t.prev = 4), (e.btnType = 3), (t.next = 8), e.updateConfig({
                    url: e.subUrl,
                    selectAfterUpdated: !0
                  }));
                case 8:
                  (t.sent ? ((e.subUrl = ""), (e.btnType = 2)) : (e.btnType = 1), (t.next = 15));
                  break;
                case 12:
                  ((t.prev = 12), (t.t0 = t.catch(4)), (e.btnType = 1));
                case 15:
                  setTimeout(function () {
                    e.btnType = 0;
                  }, 3e3);
                case 16:
                case "end":
                  return t.stop();
              }
            }, t, null, [[4, 12]]);
          }))();
        },
        handleImport: function () {
          var e = this;
          return l()(u().mark(function t() {
            var i, n;
            return u().wrap(function (t) {
              for (;;) switch ((t.prev = t.next)) {
                case 0:
                  return ((t.next = 2), G.ipcRenderer.invoke("dialog", "showOpenDialogSync", {
                    properties: ["openFile"]
                  }));
                case 2:
                  (i = t.sent) && i.length > 0 && ((n = i[0]), e.localCopy(re.basename(n), re.resolve(n)));
                case 4:
                case "end":
                  return t.stop();
              }
            }, t);
          }))();
        },
        dropProfile: function (e) {
          (e.preventDefault(), e.stopPropagation());
          var t,
            i = te(e.dataTransfer.files);
          try {
            for (i.s(); !(t = i.n()).done;) {
              var n = t.value;
              this.localCopy(re.basename(n.path), re.resolve(n.path));
            }
          } catch (e) {
            i.e(e);
          } finally {
            i.f();
          }
        },
        dragOverProfile: function (e) {
          (e.preventDefault(), e.stopPropagation());
        },
        editDone: function () {
          var e = this,
            t = this.pfs.files.findIndex(function (t) {
              return t.time === e.editProfileName;
            });
          (t === this.pfs.index && this.switchProfile(t), (this.editProfileName = ""), (this.editProfileType = -1));
        },
        localCopy: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          if ("" !== e) {
            var i = new Date().getTime() + ".yml",
              n = oe({}, this.pfs),
              o = n.files.findIndex(function (t) {
                return t.name === e && "" === t.url;
              });
            if (o > -1 && o < n.files.length) this.$alert({
              content: Lg.localFileAlreadyExist(),
              title: Lg.error()
            });else {
              var s = {
                url: "",
                time: i,
                name: e,
                selected: []
              };
              this.appendProfile({
                profile: s
              });
              var r = re.join(this.clashPath, "config.yaml"),
                a = n.files,
                l = n.index,
                c = void 0 === l ? -1 : l;
              if (c >= 0 && c < a.length) {
                var d = re.join(this.profilesPath, a[c].time);
                se.existsSync(d) && (r = d);
              }
              ("" !== t && (r = t), se.copyFileSync(r, re.join(this.profilesPath, i)));
            }
          }
        },
        handleDeleteProfile: function (e) {
          var t = this;
          return l()(u().mark(function i() {
            var n, o, s, r, a, l, c, d, h, g, p, f, m;
            return u().wrap(function (i) {
              const Lg = new Language(modifyState.language);
              for (;;) switch ((i.prev = i.next)) {
                case 0:
                  return ((n = t.pfs.files[e]), (o = n.name), n.url, (i.next = 3), (0, _.vC)({
                    type: "warning",
                    message: Lg.askDelete() + '"'.concat(o, '"?'),
                    buttons: [Lg.no(), Lg.yes()]
                  }));
                case 3:
                  if (((s = i.sent), 1 === s.response)) {
                    try {
                      for (r = t.pfs.files, a = (void 0 === r ? [] : r)[e].time, l = a.slice(0, -4) + ".base.yml", c = a.slice(0, -4) + ".change.yml", d = 0, h = [a, l, c]; d < h.length; d++) ((g = h[d]), (p = re.join(t.profilesPath, g)), se.existsSync(p) && se.unlinkSync(p));
                    } catch (e) {}
                    (t.deleteProfile({
                      index: e
                    }), (f = t.pfs.index), e === (m = void 0 === f ? -1 : f) ? t.changeProfilesIndex({
                      index: -1
                    }) : e < m && t.changeProfilesIndex({
                      index: m - 1
                    }));
                  }
                case 6:
                case "end":
                  return i.stop();
              }
            }, i);
          }))();
        },
        openProfile: function (e) {
          var t = arguments,
            i = this;
          return l()(u().mark(function n() {
            var o, s, r, a, l;
            return u().wrap(function (n) {
              for (;;) switch ((n.prev = n.next)) {
                case 0:
                  if (((o = t.length > 1 && void 0 !== t[1] && t[1]), (s = re.join(i.profilesPath, e.time)), o)) {
                    n.next = 16;
                    break;
                  }
                  return ((n.prev = 3), (n.next = 6), i.$code({
                    code: se.readFileSync(s).toString(),
                    fontSize: i.settings.editorFontSize
                  }));
                case 6:
                  ((r = n.sent), (a = r.code), (l = void 0 === a ? "" : a), se.writeFileSync(s, l), (n.next = 14));
                  break;
                case 12:
                  ((n.prev = 12), (n.t0 = n.catch(3)));
                case 14:
                  n.next = 17;
                  break;
                case 16:
                  G.shell.openPath(s);
                case 17:
                case "end":
                  return n.stop();
              }
            }, n, null, [[3, 12]]);
          }))();
        },
        handleProfileClick: function (e) {
          var t = this;
          return l()(u().mark(function i() {
            return u().wrap(function (i) {
              for (;;) switch ((i.prev = i.next)) {
                case 0:
                  return ((t.loadingProfileIndex = [].concat(o()(t.loadingProfileIndex), [e])), (i.prev = 1), (i.next = 4), t.switchProfile(e));
                case 4:
                  i.next = 8;
                  break;
                case 6:
                  ((i.prev = 6), (i.t0 = i.catch(1)));
                case 8:
                  t.loadingProfileIndex = t.loadingProfileIndex.filter(function (t) {
                    return t !== e;
                  });
                case 9:
                case "end":
                  return i.stop();
              }
            }, i, null, [[1, 6]]);
          }))();
        },
        switchProfile: function (e) {
          var t = this;
          return l()(u().mark(function i() {
            var n, o, s, r, a, l, c;
            return u().wrap(function (i) {
              for (;;) switch ((i.prev = i.next)) {
                case 0:
                  if (-1 !== e) {
                    i.next = 2;
                    break;
                  }
                  return i.abrupt("return");
                case 2:
                  return ((n = t.pfs.index), t.changeProfilesIndex({
                    index: e
                  }), (i.next = 6), t.$parent.refreshProfile());
                case 6:
                  if (((o = i.sent), (s = o.success), (r = o.message), s)) {
                    i.next = 18;
                    break;
                  }
                  return ((i.next = 12), (0, _.vC)({
                    type: "error",
                    message: Lg.couldNotSwitchProfile(),
                    detail: r || "",
                    buttons: Lg.editInTextMode()
                  }));
                case 12:
                  ((a = i.sent), 1 === a.response && t.openProfile(t.pfs.files[e]), t.changeProfilesIndex({
                    index: -1
                  }), (i.next = 22));
                  break;
                case 18:
                  if (((l = t.settings.connProfile), (c = void 0 !== l && l), e === n || !c)) {
                    i.next = 22;
                    break;
                  }
                  return ((i.next = 22), t.clashAxiosClient.delete("connections"));
                case 22:
                case "end":
                  return i.stop();
              }
            }, i);
          }))();
        },
        refreshProfile: function (e) {
          var t = arguments,
            i = this;
          return l()(u().mark(function n() {
            var o, s, r, a, l, c, h, g, p, f;
            return u().wrap(function (n) {
              for (;;) switch ((n.prev = n.next)) {
                case 0:
                  if (((o = (t.length > 1 && void 0 !== t[1] ? t[1] : {}).ignoreSelectAfterUpdated), (s = void 0 !== o && o), (r = e.url), (a = void 0 === r ? "" : r), (l = e.headers), (c = void 0 === l ? "" : l), "" !== a)) {
                    n.next = 4;
                    break;
                  }
                  return n.abrupt("return");
                case 4:
                  if (!(h = i.downlodingUrls[a])) {
                    n.next = 9;
                    break;
                  }
                  return (h(de), i.$delete(i.downlodingUrls, a), n.abrupt("return"));
                case 9:
                  return ((n.prev = 9), (g = new ce(function (e) {
                    i.downlodingUrls = oe(oe({}, i.downlodingUrls), {}, d()({}, a, e));
                  })), (p = i.settings.selectAfterUpdated), (f = void 0 !== p && p), (n.next = 14), i.updateConfig({
                    url: a,
                    cancelToken: g,
                    selectAfterUpdated: !s && f,
                    headers: c
                  }));
                case 14:
                  n.next = 18;
                  break;
                case 16:
                  ((n.prev = 16), (n.t0 = n.catch(9)));
                case 18:
                  return ((n.prev = 18), i.$delete(i.downlodingUrls, a), n.finish(18));
                case 21:
                case "end":
                  return n.stop();
              }
            }, n, null, [[9, 16, 18, 21]]);
          }))();
        },
        editProfile: function (e) {
          ((this.editProfileName = e.time), (this.editProfileType = 0));
        },
        editProfileRule: function (e) {
          ((this.editProfileName = e.time), (this.editProfileType = 1));
        },
        parseDomain: function (e) {
          var t = "local file";
          try {
            var i = new URL(e),
              n = i.host;
            return "file:" === i.protocol ? t : n || "empty host";
          } catch (e) {}
          return t;
        },
        parseTime: function (e) {
          var t = e.time;
          try {
            var i = se.statSync(re.join(this.profilesPath, t)).mtime;
            return p()(i).locale(Lg.locale()).from(this.now);
          } catch (e) {
            return "missing file";
          }
        },
        updateConfig: function (e) {
          var t = this;
          return l()(u().mark(function i() {
            var n, o, s, r, a, l, c, d, h, g, p;
            return u().wrap(function (i) {
              for (;;) switch ((i.prev = i.next)) {
                case 0:
                  return ((n = e.url), (o = e.headers), (s = void 0 === o ? "" : o), (r = e.cancelToken), (a = void 0 === r ? null : r), (l = e.selectAfterUpdated), (c = void 0 !== l && l), (i.next = 3), (0, v.rF)({
                    url: n,
                    cancelToken: a,
                    headersString: s
                  }).catch(function (e) {}));
                case 3:
                  if (((d = i.sent), (h = d.success), (g = d.message), (p = d.targetIndex), !h)) {
                    i.next = 13;
                    break;
                  }
                  if (!c) {
                    i.next = 11;
                    break;
                  }
                  return ((i.next = 11), t.switchProfile(p).catch(function (e) {}));
                case 11:
                  i.next = 14;
                  break;
                case 13:
                  g.endsWith(de) || t.$alert({
                    content: g
                  });
                case 14:
                  return i.abrupt("return", h);
                case 15:
                case "end":
                  return i.stop();
              }
            }, i);
          }))();
        },
        subInfoArr: function (e) {
          var t = e.upload,
            i = void 0 === t ? 0 : t,
            n = e.download,
            o = void 0 === n ? 0 : n,
            s = e.total,
            r = void 0 === s ? 0 : s,
            a = e.expire,
            l = void 0 === a ? 0 : a;
          if (i >= 0 && o >= 0 && r > 0) {
            var c = [(0, _.nM)(i + o, 1, !1), (0, _.nM)(r, 1, !1)];
            return l ? [].concat(c, [p()(1e3 * l).format("YYYY-MM-DD")]) : c;
          }
          return "";
        },
        subInfoPercent: function (e) {
          var t = e.upload,
            i = void 0 === t ? 0 : t,
            n = e.download,
            o = void 0 === n ? 0 : n,
            s = e.total,
            r = void 0 === s ? 0 : s;
          if (i >= 0 && o >= 0 && r > 0) {
            var a = ((i + o) / r) * 100;
            return {
              "clip-path": "inset(0 ".concat(a <= 100 ? 100 - a : 0, "% 0 0)")
            };
          }
          return {
            "clip-path": "inset(0 100% 0 0)"
          };
        },
        pasteURL: function () {
          ((this.inputFocus = !1), (this.subUrl = G.clipboard.readText()), (this.inputFocus = !0));
        },
        makeDiff: function (e) {
          var t = this;
          return l()(u().mark(function i() {
            var n, o, s, a, c, d, h, g, p, f, m, v;
            return u().wrap(function (i) {
              const Lg = new Language(modifyState.language);
              for (;;) switch ((i.prev = i.next)) {
                case 0:
                  return ((n = e.time), (o = se.readFileSync(re.join(t.profilesPath, n), "utf8").toString()), (s = re.join(t.profilesPath, n.slice(0, -4) + ".base.yml")), (a = re.join(t.profilesPath, n.slice(0, -4) + ".change.yml")), (c = se.existsSync(s) && se.existsSync(a)), (d = c ? Lg.makeChangesAndDelete() : [Lg.initDiffFiles()]), (h = c ? [{}, {
                    color: "mc"
                  }] : []), (i.next = 9), t.$select({
                    title: "Diff",
                    html: Lg.diffDescribe() + ' <a href="https://web.archive.org/web/20230304232259/docs.cfw.lbyczf.com/contents/diff.html">' + Lg.docs() + "</a>",
                    items: d,
                    itemStyles: h
                  }));
                case 9:
                  if (((g = i.sent), (p = r()(g, 1)), (f = p[0]), (m = (function () {
                    var i = l()(u().mark(function i() {
                      var n, o, r, l;
                      return u().wrap(function (i) {
                        for (;;) switch ((i.prev = i.next)) {
                          case 0:
                            return ((n = se.readFileSync(s, "utf8").toString()), (o = se.readFileSync(a, "utf8").toString()), (i.next = 4), t.$diff({
                              base: n,
                              change: o
                            }));
                          case 4:
                            return ((r = i.sent), se.writeFileSync(a, r), (i.next = 8), (0, _.vC)({
                              message: Lg.requestRefresh(),
                              buttons: Lg.requestRefreshOption(),
                              defaultId: 0
                            }));
                          case 8:
                            ((l = i.sent), 0 === l.response && t.refreshProfile(e, {
                              ignoreSelectAfterUpdated: !0
                            }));
                          case 11:
                          case "end":
                            return i.stop();
                        }
                      }, i);
                    }));
                    return function () {
                      return i.apply(this, arguments);
                    };
                  })()), !c)) {
                    i.next = 26;
                    break;
                  }
                  if (0 !== f) {
                    i.next = 18;
                    break;
                  }
                  (m(), (i.next = 24));
                  break;
                case 18:
                  if (1 !== f) {
                    i.next = 24;
                    break;
                  }
                  return ((i.next = 21), (0, _.vC)({
                    type: "warning",
                    message: Lg.askDelete() + Lg.diffFiles() + "?",
                    buttons: [Lg.no(), Lg.yes()]
                  }));
                case 21:
                  ((v = i.sent), 1 === v.response && (se.unlinkSync(s), se.unlinkSync(a)));
                case 24:
                  i.next = 29;
                  break;
                case 26:
                  (se.writeFileSync(s, o), se.writeFileSync(a, o), m());
                case 29:
                case "end":
                  return i.stop();
              }
            }, i);
          }))();
        },
        setupWatcher: function () {
          var e = this,
            t = le.debounce(function (t, i) {
              if (/^\d+(?:\.yml)$/.test(i)) {
                var n = e.pfs.files.findIndex(function (e) {
                  return e.time === i;
                });
                n > -1 && n === e.pfs.index && e.switchProfile(n);
              }
            }, 0);
          this.fileWatcher = se.watch(re.join(this.profilesPath), {}, t);
        },
        removeWatcher: function () {
          this.fileWatcher && this.fileWatcher.close();
        }
      }),
      beforeRouteEnter: function (e, t, i) {
        var n;
        i(((n = l()(u().mark(function e(t) {
          var i;
          return u().wrap(function (e) {
            for (;;) switch ((e.prev = e.next)) {
              case 0:
                if (((t.now = p()()), (t.intervalID = ee.ZP.add(function () {
                  t.now = p()();
                }, 6e4)), t.setupWatcher(), 0 !== (null === (i = t.pfs.files) || void 0 === i ? void 0 : i.length))) {
                  e.next = 7;
                  break;
                }
                return (t.localCopy("config.yaml"), (e.next = 7), t.switchProfile(0));
              case 7:
              case "end":
                return e.stop();
            }
          }, e);
        }))), function (e) {
          return n.apply(this, arguments);
        }));
      },
      beforeRouteLeave: function (e, t, i) {
        for (var n in (this.intervalID && ee.ZP.stop(this.intervalID), this.removeWatcher(), this.downlodingUrls)) {
          (0, this.downlodingUrls[n])(de);
        }
        i();
      }
    },
    ue = he;
  (i(28318), i(51734));
  const ge = (0, k.Z)(ue, function () {
    var e = this,
      t = e._self._c;
    return t("div", {
      attrs: {
        id: "main-server-view"
      },
      on: {
        drop: e.dropProfile,
        dragover: e.dragOverProfile
      }
    }, [e.editProfileName && 0 === e.editProfileType ? t("config-view", {
      attrs: {
        "clash-path": e.clashPath,
        "profile-name": e.editProfileName
      },
      on: {
        cancel: function (t) {
          ((e.editProfileName = ""), (e.editProfileType = -1));
        },
        done: e.editDone,
        error: function (t) {
          ((e.editProfileName = ""), (e.editProfileType = -1));
        }
      }
    }) : e.editProfileName && 1 === e.editProfileType ? t("rule-view", {
      attrs: {
        "clash-path": e.clashPath,
        "profile-name": e.editProfileName
      },
      on: {
        cancel: function (t) {
          ((e.editProfileName = ""), (e.editProfileType = -1));
        },
        done: e.editDone,
        error: function (t) {
          ((e.editProfileName = ""), (e.editProfileType = -1));
        }
      }
    }) : t("div", {
      staticClass: "main"
    }, [t("div", {
      class: ["card", "remote-view"]
    }, [t("div", {
      staticClass: "input-container"
    }, [t("input", {
      directives: [{
        name: "focus",
        rawName: "v-focus",
        value: e.inputFocus,
        expression: "inputFocus"
      }, {
        name: "model",
        rawName: "v-model",
        value: e.subUrl,
        expression: "subUrl"
      }],
      attrs: {
        spellcheck: "false",
        type: "text",
        placeholder: Lg.downloadFromURL()
      },
      domProps: {
        value: e.subUrl
      },
      on: {
        keydown: e.handleURLConfirm,
        input: function (t) {
          t.target.composing || (e.subUrl = t.target.value);
        }
      }
    }), e._v(" "), "" !== e.subUrl ? t("span", {
      staticClass: "icon text-[color:var(--fgc)] opacity-50 clear-icon clickable",
      on: {
        click: function (t) {
          e.subUrl = "";
        }
      }
    }, [e._v("backspace")]) : t("span", {
      staticClass: "icon clear-icon clickable text-[color:var(--fgc)] opacity-50",
      on: {
        click: e.pasteURL
      }
    }, [e._v("content_copy")])]), e._v(" "), t("div", {
      staticClass: "btns-container"
    }, [t("div", {
      class: e.getBtnClass,
      on: {
        click: e.handleDownload
      }
    }, [e._v("\n          " + e._s(e.getBtnText) + "\n        ")]), e._v(" "), t("div", {
      staticClass: "confirm confirm-right update-all-btn",
      on: {
        click: e.handleUpdateAllProfiles
      }
    }, [e._v("\n          " + Lg.updateAll() + "\n        ")]), e._v(" "), t("div", {
      staticClass: "confirm confirm-right",
      on: {
        click: e.handleImport
      }
    }, [e._v(Lg.import())])])]), e._v(" "), t("draggable", {
      ref: "mixin-scroll-content",
      staticClass: "list-view",
      attrs: {
        delay: 300,
        animation: 200,
        "delay-on-touch-only": !0
      },
      on: {
        start: e.handleDragStart,
        end: e.handleDragEnd
      },
      model: {
        value: e.profiles,
        callback: function (t) {
          e.profiles = t;
        },
        expression: "profiles"
      }
    }, [e._l(e.profiles, function (i, n) {
      const updatedTimeCN = "\n                (" + e._s(e.parseTime(i)) + ")\n              ";
      const updatedTimeEN = updatedTimeCN.replace(/前/g, " ago").replace(/几秒/g, "seconds").replace(/秒/g, "seconds").replace(/分钟/g, "minutes").replace(/小时/g, "hours").replace(/天/g, "days").replace(/个月/g, "month").replace(/年/g, "years");
      const updatedTime = modifyState.language === 0 ? updatedTimeCN : updatedTimeEN;
      return t("div", {
        key: n,
        class: ["list-item", n === e.pfs.index ? "item-cur" : ""],
        on: {
          click: function (t) {
            return e.handleProfileClick(n);
          },
          contextmenu: function (t) {
            return e.handleProfileRightClick(t, i, n);
          }
        }
      }, [t("div", {
        staticClass: "indicator relative overflow-clip"
      }, [n === e.pfs.index ? [t("transition", {
        attrs: {
          name: "expand"
        }
      }, [e.loadingProfileIndex.includes(n) ? e._e() : t("div", {
        staticClass: "absolute bg-[color:var(--proxy-item-selected-border-c)] w-full h-full"
      })]), e._v(" "), t("div", {
        staticClass: "bg-[color:var(--proxy-item-selected-border-c)] absolute w-full h-3/5 rounded-[10px] animate-cycle"
      })] : e._e()], 2), e._v(" "), t("div", {
        staticClass: "item-info"
      }, [t("div", {
        staticClass: "item-name"
      }, [t("div", {
        staticClass: "item-name-top"
      }, [t("div", {
        attrs: {
          title: i.name
        }
      }, [e._v(e._s(i.name))])]), e._v(" "), t("div", {
        staticClass: "item-name-bottom flex gap-1 w-full",
        attrs: {
          title: i.url
        }
      }, [t("span", {
        staticClass: "overflow-hidden text-ellipsis"
      }, [e._v(e._s(e.parseDomain(i.url)))]), e._v(" "), t("span", {
        staticClass: "flex-shrink",
        class: {
          "item-time": !0,
          "item-expired": e.isProifleExpired(i)
        }
      }, [e._v(updatedTime)])]), e._v(" "), e.subInfoArr(i.subInfo || {}) ? t("div", {
        staticClass: "item-subinfo"
      }, [t("div", {
        staticClass: "item-subinfo-texts"
      }, e._l(e.subInfoArr(i.subInfo || {}), function (i, n) {
        return t("div", {
          key: n
        }, [e._v("\n                  " + e._s(i) + "\n                ")]);
      }), 0), e._v(" "), t("div", {
        staticClass: "progress"
      }, [t("div", {
        staticClass: "percent",
        style: e.subInfoPercent(i.subInfo || {})
      })])]) : e._e()]), e._v(" "), t("div", {
        staticClass: "h-full flex flex-col justify-center"
      }, ["" !== i.url ? t("Hint", {
        staticClass: "item-icon",
        attrs: {
          hint: Lg.update()
        },
        on: {
          click: function (t) {
            return (t.stopPropagation(), e.refreshProfile(i));
          }
        }
      }, [t("span", {
        staticClass: "icon",
        class: {
          rotating: i.url in e.downlodingUrls
        }
      }, [e._v("refresh")])]) : t("Hint", {
        staticClass: "item-icon",
        attrs: {
          hint: Lg.edit()
        },
        on: {
          click: function (t) {
            return (t.stopPropagation(), e.openProfile(i));
          }
        }
      }, [t("span", {
        staticClass: "icon"
      }, [e._v("code")])])], 1)])]);
    }), e._v(" "), e._l(new Array(20), function (e, i) {
      return t("i", {
        key: "hidden" + i
      });
    })], 2)], 1), e._v(" "), e.qrcodeURL ? t("QRCodeView", {
      attrs: {
        url: e.qrcodeURL
      },
      on: {
        hide: function (t) {
          e.qrcodeURL = "";
        }
      }
    }) : e._e()], 1);
  }, [], !1, null, "820f0efe", null).exports;
};