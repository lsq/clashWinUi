const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    default: () => f
  }));
  var n = i(48926),
    o = i.n(n),
    s = i(319),
    r = i.n(s),
    a = i(59713),
    l = i.n(a),
    c = i(87757),
    d = i.n(c),
    h = i(23321);
  function u(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  function g(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? u(Object(i), !0).forEach(function (t) {
        l()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : u(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  const p = {
    components: {
      EscCapture: i(72574).Z
    },
    name: "DNSView",
    props: [],
    data: function () {
      return {
        data: [],
        isShow: !1,
        searchHost: "",
        searchType: "A",
        error: "",
        flags: [],
        status: "",
        answers: [],
        authorities: [],
        additionals: [],
        questions: [],
        resolve: null,
        reject: null,
        server: "",
        rttypes: {
          1: "A",
          28: "AAAA",
          5: "CNAME",
          15: "MX",
          2: "NS",
          12: "PTR",
          6: "SOA",
          33: "SRV",
          16: "TXT"
        }
      };
    },
    watch: {},
    computed: g(g({}, (0, h.mapGetters)(["theme", "clashAxiosClient"])), {}, {
      questionMixed: function () {
        var e = this;
        return this.questions.reduce(function (t, i) {
          return (t = [].concat(r()(t), [i.Name, e.rttypes[i.Qtype]]));
        }, []);
      },
      answerMixed: function () {
        var e = this;
        return this.answers.reduce(function (t, i) {
          return (t = [].concat(r()(t), [i.name, i.TTL, e.rttypes[i.type], i.data]));
        }, []);
      },
      authorityMixed: function () {
        var e = this;
        return this.authorities.reduce(function (t, i) {
          return (t = [].concat(r()(t), [i.name, i.TTL, e.rttypes[i.type], i.data]));
        }, []);
      },
      additionalMixed: function () {
        var e = this;
        return this.additionals.reduce(function (t, i) {
          return (t = [].concat(r()(t), [i.name, i.TTL, e.rttypes[i.type], i.data]));
        }, []);
      }
    }),
    methods: {
      show: function () {
        var e = this;
        return ((this.isShow = !0), this.$nextTick(function () {
          e.$refs["search-input"].focus();
        }), new Promise(function (t, i) {
          ((e.resolve = t), (e.reject = i));
        }));
      },
      parseDoHData: function (e) {
        var t = e.Status,
          i = e.TC,
          n = e.RD,
          o = e.RA,
          s = e.AD,
          r = e.CD,
          a = e.Server,
          l = void 0 === a ? "" : a,
          c = e.Question,
          d = void 0 === c ? [] : c,
          h = e.Answer,
          u = void 0 === h ? [] : h,
          g = e.Authority,
          p = void 0 === g ? [] : g,
          f = e.Additional,
          m = void 0 === f ? [] : f;
        ((this.status = {
          0: "NOERROR",
          1: "FORMERR",
          2: "SERVFAIL",
          3: "NXDOMAIN",
          4: "NOTIMP",
          5: "REFUSED",
          6: "YXDOMAIN",
          7: "YXRRSET",
          8: "NXRRSET",
          9: "NOTAUTH",
          10: "NOTZONE",
          11: "DSOTYPENI",
          16: "BADVERS",
          17: "BADKEY",
          18: "BADTIME",
          19: "BADMODE",
          20: "BADNAME",
          21: "BADALG",
          22: "BADTRUNC"
        }[t]), (this.flags = [i ? "tc" : "", n ? "rd" : "", o ? "ra" : "", s ? "ad" : "", r ? "cd" : ""].filter(function (e) {
          return e;
        }).map(function (e) {
          return e.toUpperCase();
        })), (this.answers = u), (this.authorities = p), (this.additionals = m), (this.questions = d), (this.server = l));
      },
      handleSearch: function () {
        var e = this;
        const Lg = new Language(modifyState.language);
        return o()(d().mark(function t() {
          var i, n, o, s, r;
          return d().wrap(function (t) {
            //TODO: maybe can replace en -> cn
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                if (((e.error = ""), (i = function () {
                  ((e.additionals = []), (e.authorities = []), (e.answers = []), (e.questions = []), (e.status = ""), (e.flags = []), (e.server = ""));
                }), !e.searchHost)) {
                  t.next = 18;
                  break;
                }
                return ((t.prev = 3), (t.next = 6), e.clashAxiosClient.get("/dns/query", {
                  params: {
                    name: e.searchHost,
                    type: e.searchType
                  }
                }));
              case 6:
                ((n = t.sent), (o = null == n ? void 0 : n.data), e.parseDoHData(o), (t.next = 16));
                break;
              case 11:
                ((t.prev = 11), (t.t0 = t.catch(3)), (r = t.t0.response), (e.error = (null == r || null === (s = r.data) || void 0 === s ? void 0 : s.message) || t.t0.message), i());
              case 16:
                t.next = 20;
                break;
              case 18:
                ((e.error = Lg.pleaseInputDomain()), i());
              case 20:
              case "end":
                return t.stop();
            }
          }, t, null, [[3, 11]]);
        }))();
      },
      handleKeyDown: function (e) {},
      handleCancel: function () {
        ((this.isShow = !1), this.reject());
      }
    }
  };
  i(51073);
  const f = (0, i(51900).Z)(p, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return e.isShow ? t("EscCapture", {
      staticClass: "main-dns-view bg-[color:var(--mask-c)]",
      class: ["theme-".concat(e.theme)],
      on: {
        esc: e.handleCancel,
        keydown: e.handleKeyDown,
        mousedown: e.handleCancel
      }
    }, [t("div", {
      staticClass: "card-main bg-[color:var(--bgc)] text-[color:var(--fgc)]",
      on: {
        mousedown: function (e) {
          e.stopPropagation();
        }
      }
    }, [t("div", {
      staticClass: "card-content p-4"
    }, [t("div", {
      staticClass: "px-2 text-lg"
    }, [e._v(Lg.queryDNS())]), e._v(" "), t("div", {
      staticClass: "px-2 py-2 flex items-center gap-2"
    }, [t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.searchHost,
        expression: "searchHost"
      }],
      ref: "search-input",
      staticClass: "p-2 py-1 outline-none flex-grow",
      attrs: {
        placeholder: Lg.host()
      },
      domProps: {
        value: e.searchHost
      },
      on: {
        change: e.handleSearch,
        input: function (t) {
          t.target.composing || (e.searchHost = t.target.value);
        }
      }
    }), e._v(" "), t("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.searchType,
        expression: "searchType"
      }],
      staticClass: "p-2 py-1 w-[80px] outline-none",
      attrs: {
        placeholder: Lg.type()
      },
      domProps: {
        value: e.searchType
      },
      on: {
        change: e.handleSearch,
        input: function (t) {
          t.target.composing || (e.searchType = t.target.value);
        }
      }
    }), e._v(" "), t("button", {
      staticClass: "bg-[color:#14A53A] rounded-full text-sm px-4 py-1 text-white",
      on: {
        click: e.handleSearch
      }
    }, [e._v("\n          " + Lg.lookup() + "\n        ")])]), e._v(" "), "" !== e.status ? t("div", {
      staticClass: "px-2 content-items"
    }, [t("div", {
      staticClass: "flex justify-between gap-2"
    }, [t("div", {
      staticClass: "p flex-grow"
    }, [t("span", [e._v(Lg.server())]), e._v(" "), t("div", {
      staticClass: "c"
    }, [e._v(e._s(e.server))])]), e._v(" "), t("div", {
      staticClass: "p"
    }, [t("span", [e._v(Lg.status())]), e._v(" "), t("div", {
      staticClass: "c"
    }, [e._v(e._s(e.status))])]), e._v(" "), t("div", {
      staticClass: "p"
    }, [t("span", [e._v(Lg.flags())]), e._v(" "), t("div", {
      staticClass: "text-sm c flex gap-x-3"
    }, e._l(e.flags, function (i) {
      return t("div", {
        key: i
      }, [e._v("\n                " + e._s(i) + "\n              ")]);
    }), 0)])]), e._v(" "), e.answers.length > 0 ? t("div", {
      staticClass: "p"
    }, [t("span", [e._v("Answer")]), e._v(" "), t("div", {
      staticClass: "text-sm c grid grid-cols-4 gap-x-4",
      staticStyle: {
        "grid-template-columns": "repeat(4, auto)"
      }
    }, e._l(e.answerMixed, function (i, n) {
      return t("div", {
        key: n,
        staticClass: "whitespace-pre-wrap break-all"
      }, [t("div", [e._v(e._s(i))])]);
    }), 0)]) : e._e(), e._v(" "), e.authorities.length > 0 ? t("div", {
      staticClass: "p"
    }, [t("span", [e._v(Lg.authority())]), e._v(" "), t("div", {
      staticClass: "text-sm c grid grid-cols-4 gap-x-4",
      staticStyle: {
        "grid-template-columns": "repeat(4, auto)"
      }
    }, e._l(e.authorityMixed, function (i, n) {
      return t("div", {
        key: n,
        staticClass: "whitespace-pre-wrap break-all"
      }, [t("div", [e._v(e._s(i))])]);
    }), 0)]) : e._e(), e._v(" "), e.additionals.length > 0 ? t("div", {
      staticClass: "p"
    }, [t("span", [e._v("Additional")]), e._v(" "), t("div", {
      staticClass: "text-sm c grid grid-cols-4 gap-x-4",
      staticStyle: {
        "grid-template-columns": "repeat(4, auto)"
      }
    }, e._l(e.additionalMixed, function (i, n) {
      return t("div", {
        key: n,
        staticClass: "whitespace-pre-wrap break-all"
      }, [t("div", [e._v(e._s(i))])]);
    }), 0)]) : e._e()]) : e._e(), e._v(" "), "" === e.status && "" !== e.error ? t("div", {
      staticClass: "error-hint"
    }, [e._v("\n        " + e._s(e.error) + "\n      ")]) : e._e()])])]) : e._e();
  }, [], !1, null, "6e0989c7", null).exports;
};