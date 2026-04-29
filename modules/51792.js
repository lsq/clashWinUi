const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    F: () => C,
    b: () => x
  });
  var n,
    o,
    s = i(319),
    r = i.n(s),
    a = i(63038),
    l = i.n(a),
    c = i(48926),
    d = i.n(c),
    h = i(87757),
    u = i.n(h),
    g = i(58583),
    p = i(54387),
    f = i.n(p),
    m = i(8369),
    v = i(57147),
    _ = i(71017),
    b = i(59273),
    w = (i(72298), i(24793)),
    y = {},
    C = function (e, t) {
      y[e] = t;
    },
    x = function (e) {
      return y[e] || 0;
    },
    S = function (e) {
      return e.map(function (e) {
        return {
          label: e,
          kind: g.languages.CompletionItemKind.Keyword,
          insertText: e,
          insertTextRules: g.languages.CompletionItemInsertTextRule.InsertAsSnippet
        };
      });
    },
    k = ((n = d()(u().mark(function e(t, i, n) {
      var o, s, a, c, h, p, m, v, _, b;
      return u().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            return ((e.prev = 1), (o = t.split(/\r?\n/).reduce(function (e, t) {
              var i = t.match(/name:\s"?(.+?)"?$/) || [],
                n = l()(i, 2),
                o = (n[0], n[1]);
              return (o && e.push(o), e);
            }, ["DIRECT", "REJECT", "GLOBAL"])), (s = (function () {
              var e = d()(u().mark(function e(t) {
                return u().wrap(function (e) {
                  for (;;) switch ((e.prev = e.next)) {
                    case 0:
                      return ((e.next = 2), f().get("https://raw.githubusercontent.com/Fndroid/clash-vscode/master/snippets/".concat(t, ".code-snippets"), {
                        validateStatus: function (e) {
                          return !0;
                        }
                      }));
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
                }, e);
              }));
              return function (t) {
                return e.apply(this, arguments);
              };
            })()), (a = {}), (e.next = 7), s(n));
          case 7:
            if (((c = e.sent), (h = c.status), (p = c.data), 200 === h)) {
              e.next = 19;
              break;
            }
            return ((e.next = 13), s("top"));
          case 13:
            ((m = e.sent), (v = m.status), (_ = m.data), 200 === v && (a = _), (e.next = 20));
            break;
          case 19:
            a = p;
          case 20:
            ((b = Object.entries(a).map(function (e) {
              var t = l()(e, 2),
                s = (t[0], t[1]),
                r = s.prefix,
                a = s.body,
                c = "string" == typeof a ? a : null == a ? void 0 : a.join("\n");
              return {
                label: r,
                kind: g.languages.CompletionItemKind.Snippet,
                insertText: "rules" === n && o.length > 0 ? c.replace(/\:policy/g, "|".concat(o.join(",").replace(/\|/g, "\\\\"), "|")) : c,
                insertTextRules: g.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: i
              };
            })), (e.t0 = n), (e.next = "rules" === e.t0 ? 24 : "proxy-groups" === e.t0 ? 25 : 26));
            break;
          case 24:
          case 25:
            return e.abrupt("return", [].concat(r()(b), r()(S(o))));
          case 26:
            return e.abrupt("return", b);
          case 27:
            return e.abrupt("return", [].concat(r()(b), r()(["proxy-groups", "rules"].includes(n) ? groupNameItems : [])));
          case 30:
            return ((e.prev = 30), (e.t1 = e.catch(1)), e.abrupt("return", []));
          case 33:
          case "end":
            return e.stop();
        }
      }, e, null, [[1, 30]]);
    }))), function (e, t, i) {
      return n.apply(this, arguments);
    });
  g.languages.registerCompletionItemProvider("yaml", {
    provideCompletionItems: ((o = d()(u().mark(function e(t, i) {
      var n, o, s, a, l;
      return u().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            if (((n = t.getValueInRange({
              startLineNumber: 1,
              startColumn: 1,
              endLineNumber: i.lineNumber,
              endColumn: i.column
            })), (o = t.getWordUntilPosition(i)), (s = {
              startLineNumber: i.lineNumber,
              endLineNumber: i.lineNumber,
              startColumn: o.startColumn,
              endColumn: o.endColumn
            }), 1 !== o.startColumn)) {
              e.next = 8;
              break;
            }
            return ((e.next = 6), k(t.getValue(), s, "top"));
          case 6:
            return ((e.t0 = e.sent), e.abrupt("return", {
              suggestions: e.t0
            }));
          case 8:
            if (!((a = r()("\n".concat(n).matchAll(/\n(\S+?)\s*:/g))).length > 0)) {
              e.next = 15;
              break;
            }
            return ((l = a[a.length - 1][1]), (e.next = 13), k(t.getValue(), s, l));
          case 13:
            return ((e.t1 = e.sent), e.abrupt("return", {
              suggestions: e.t1
            }));
          case 15:
            return ((e.next = 17), k(t.getValue(), s, "top"));
          case 17:
            return ((e.t2 = e.sent), e.abrupt("return", {
              suggestions: e.t2
            }));
          case 19:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function (e, t) {
      return o.apply(this, arguments);
    })
  });
  var L,
    N,
    D,
    I = function (e, t) {
      var i = b.Z.state.app.clashPath;
      return (0, _.join)(i, "providers", e, t + ".yaml");
    };
  const Lg = new Language(modifyState.language);
  (g.languages.registerCodeLensProvider("yaml", {
    provideCodeLenses: ((L = d()(u().mark(function e(t) {
      var i, n, o, s, r, a, l, c, d;
      return u().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            ((i = []), (n = 1));
          case 2:
            if (!(n <= t.getLineCount())) {
              e.next = 17;
              break;
            }
            if (((o = t.getLineContent(n)), (s = {
              startLineNumber: n,
              endLineNumber: n,
              startColumn: 1,
              endColumn: 1
            }), !/url:\s(.+?)$/.test(o))) {
              e.next = 14;
              break;
            }
            return ((r = w.trim(RegExp.$1, "\" '")), (e.next = 9), (0, m.Ll)(r));
          case 9:
            ((a = e.sent), (l = I("proxy", a)), (c = I("rule", a)), (d = (0, v.existsSync)(l) ? l : (0, v.existsSync)(c) ? c : "") ? i.push({
              range: s,
              id: n,
              command: {
                id: "openFile",
                title: Lg.showActualFile(),
                arguments: [d]
              }
            }) : i.push({
              range: s,
              id: n,
              command: {
                id: "copyURLMD5",
                title: Lg.copyURLAndMD5(),
                arguments: [a]
              }
            }));
          case 14:
            (n++, (e.next = 2));
            break;
          case 17:
            return e.abrupt("return", {
              lenses: i,
              dispose: function () {}
            });
          case 18:
          case "end":
            return e.stop();
        }
      }, e);
    }))), function (e) {
      return L.apply(this, arguments);
    })
  }), g.editor.registerCommand("openFile", ((N = d()(u().mark(function e(t, n) {
    return u().wrap(function (e) {
      for (;;) switch ((e.prev = e.next)) {
        case 0:
          i(72298).shell.showItemInFolder(n);
        case 1:
        case "end":
          return e.stop();
      }
    }, e);
  }))), function (e, t) {
    return N.apply(this, arguments);
  })), g.editor.registerCommand("copyURLMD5", ((D = d()(u().mark(function e(t, n) {
    return u().wrap(function (e) {
      for (;;) switch ((e.prev = e.next)) {
        case 0:
          (i(72298).clipboard.writeText("".concat(n, ".yaml")), (0, m.vC)({
            title: "MD5 Copied",
            message: "MD5: ".concat(n)
          }));
        case 2:
        case "end":
          return e.stop();
      }
    }, e);
  }))), function (e, t) {
    return D.apply(this, arguments);
  })));
};