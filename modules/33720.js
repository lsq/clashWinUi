module.exports = (e, t, i) => {
  "use strict";

  let n;
  (i.d(t, {
    Qc: () => s,
    Th: () => o
  }), (e = i.hmd(e)), (function () {
    function t(e) {
      n = e();
    }
    ((t.amd = !0), (function (i, n) {
      "object" == typeof exports ? (e.exports = n()) : t.amd ? t(n) : ((i = "undefined" != typeof globalThis ? globalThis : i || self).marked = n());
    })(this, function () {
      function e(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          ((n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n));
        }
      }
      function t(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n;
      }
      function i(e, i) {
        var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
        if (n) return (n = n.call(e)).next.bind(n);
        if (Array.isArray(e) || (n = (function (e, i) {
          if (e) {
            if ("string" == typeof e) return t(e, i);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? t(e, i) : void 0);
          }
        })(e)) || (i && e && "number" == typeof e.length)) {
          n && (e = n);
          var o = 0;
          return function () {
            return o >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[o++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var n = {
        exports: {}
      };
      function o() {
        return {
          baseUrl: null,
          breaks: !1,
          extensions: null,
          gfm: !0,
          headerIds: !0,
          headerPrefix: "",
          highlight: null,
          langPrefix: "language-",
          mangle: !0,
          pedantic: !1,
          renderer: null,
          sanitize: !1,
          sanitizer: null,
          silent: !1,
          smartLists: !1,
          smartypants: !1,
          tokenizer: null,
          walkTokens: null,
          xhtml: !1
        };
      }
      n.exports = {
        defaults: {
          baseUrl: null,
          breaks: !1,
          extensions: null,
          gfm: !0,
          headerIds: !0,
          headerPrefix: "",
          highlight: null,
          langPrefix: "language-",
          mangle: !0,
          pedantic: !1,
          renderer: null,
          sanitize: !1,
          sanitizer: null,
          silent: !1,
          smartLists: !1,
          smartypants: !1,
          tokenizer: null,
          walkTokens: null,
          xhtml: !1
        },
        getDefaults: o,
        changeDefaults: function (e) {
          n.exports.defaults = e;
        }
      };
      var s = /[&<>"']/,
        r = /[&<>"']/g,
        a = /[<>"']|&(?!#?\w+;)/,
        l = /[<>"']|&(?!#?\w+;)/g,
        c = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        },
        d = function (e) {
          return c[e];
        };
      var h = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
      function u(e) {
        return e.replace(h, function (e, t) {
          return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "";
        });
      }
      var g = /(^|[^\[])\^/g;
      var p = /[^\w:]/g,
        f = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
      var m = {},
        v = /^[^:]+:\/*[^/]*$/,
        _ = /^([^:]+:)[\s\S]*$/,
        b = /^([^:]+:\/*[^/]*)[\s\S]*$/;
      function w(e, t) {
        m[" " + e] || (v.test(e) ? (m[" " + e] = e + "/") : (m[" " + e] = y(e, "/", !0)));
        var i = -1 === (e = m[" " + e]).indexOf(":");
        return "//" === t.substring(0, 2) ? i ? t : e.replace(_, "$1") + t : "/" === t.charAt(0) ? i ? t : e.replace(b, "$1") + t : e + t;
      }
      function y(e, t, i) {
        var n = e.length;
        if (0 === n) return "";
        for (var o = 0; o < n;) {
          var s = e.charAt(n - o - 1);
          if (s !== t || i) {
            if (s === t || !i) break;
            o++;
          } else o++;
        }
        return e.substr(0, n - o);
      }
      var C = function (e, t) {
          if (t) {
            if (s.test(e)) return e.replace(r, d);
          } else if (a.test(e)) return e.replace(l, d);
          return e;
        },
        x = u,
        S = function (e, t) {
          ((e = e.source || e), (t = t || ""));
          var i = {
            replace: function (t, n) {
              return ((n = (n = n.source || n).replace(g, "$1")), (e = e.replace(t, n)), i);
            },
            getRegex: function () {
              return new RegExp(e, t);
            }
          };
          return i;
        },
        k = function (e, t, i) {
          if (e) {
            var n;
            try {
              n = decodeURIComponent(u(i)).replace(p, "").toLowerCase();
            } catch (e) {
              return null;
            }
            if (0 === n.indexOf("javascript:") || 0 === n.indexOf("vbscript:") || 0 === n.indexOf("data:")) return null;
          }
          t && !f.test(i) && (i = w(t, i));
          try {
            i = encodeURI(i).replace(/%25/g, "%");
          } catch (e) {
            return null;
          }
          return i;
        },
        L = {
          exec: function () {}
        },
        N = function (e) {
          for (var t, i, n = 1; n < arguments.length; n++) for (i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        },
        D = function (e, t) {
          var i = e.replace(/\|/g, function (e, t, i) {
              for (var n = !1, o = t; --o >= 0 && "\\" === i[o];) n = !n;
              return n ? "|" : " |";
            }).split(/ \|/),
            n = 0;
          if ((i[0].trim() || i.shift(), i[i.length - 1].trim() || i.pop(), i.length > t)) i.splice(t);else for (; i.length < t;) i.push("");
          for (; n < i.length; n++) i[n] = i[n].trim().replace(/\\\|/g, "|");
          return i;
        },
        I = y,
        E = function (e, t) {
          if (-1 === e.indexOf(t[1])) return -1;
          for (var i = e.length, n = 0, o = 0; o < i; o++) if ("\\" === e[o]) o++;else if (e[o] === t[0]) n++;else if (e[o] === t[1] && --n < 0) return o;
          return -1;
        },
        T = function (e) {
          e && e.sanitize && !e.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
        },
        M = function (e, t) {
          if (t < 1) return "";
          for (var i = ""; t > 1;) (1 & t && (i += e), (t >>= 1), (e += e));
          return i + e;
        },
        A = n.exports.defaults,
        O = I,
        P = D,
        R = C,
        F = E;
      function B(e, t, i, n) {
        var o = t.href,
          s = t.title ? R(t.title) : null,
          r = e[1].replace(/\\([\[\]])/g, "$1");
        if ("!" !== e[0].charAt(0)) {
          n.state.inLink = !0;
          var a = {
            type: "link",
            raw: i,
            href: o,
            title: s,
            text: r,
            tokens: n.inlineTokens(r, [])
          };
          return ((n.state.inLink = !1), a);
        }
        return {
          type: "image",
          raw: i,
          href: o,
          title: s,
          text: R(r)
        };
      }
      var V = (function () {
          function e(e) {
            this.options = e || A;
          }
          var t = e.prototype;
          return ((t.space = function (e) {
            var t = this.rules.block.newline.exec(e);
            if (t) return t[0].length > 1 ? {
              type: "space",
              raw: t[0]
            } : {
              raw: "\n"
            };
          }), (t.code = function (e) {
            var t = this.rules.block.code.exec(e);
            if (t) {
              var i = t[0].replace(/^ {1,4}/gm, "");
              return {
                type: "code",
                raw: t[0],
                codeBlockStyle: "indented",
                text: this.options.pedantic ? i : O(i, "\n")
              };
            }
          }), (t.fences = function (e) {
            var t = this.rules.block.fences.exec(e);
            if (t) {
              var i = t[0],
                n = (function (e, t) {
                  var i = e.match(/^(\s+)(?:```)/);
                  if (null === i) return t;
                  var n = i[1];
                  return t.split("\n").map(function (e) {
                    var t = e.match(/^\s+/);
                    return null === t ? e : t[0].length >= n.length ? e.slice(n.length) : e;
                  }).join("\n");
                })(i, t[3] || "");
              return {
                type: "code",
                raw: i,
                lang: t[2] ? t[2].trim() : t[2],
                text: n
              };
            }
          }), (t.heading = function (e) {
            var t = this.rules.block.heading.exec(e);
            if (t) {
              var i = t[2].trim();
              if (/#$/.test(i)) {
                var n = O(i, "#");
                this.options.pedantic ? (i = n.trim()) : (n && !/ $/.test(n)) || (i = n.trim());
              }
              var o = {
                type: "heading",
                raw: t[0],
                depth: t[1].length,
                text: i,
                tokens: []
              };
              return (this.lexer.inline(o.text, o.tokens), o);
            }
          }), (t.hr = function (e) {
            var t = this.rules.block.hr.exec(e);
            if (t) return {
              type: "hr",
              raw: t[0]
            };
          }), (t.blockquote = function (e) {
            var t = this.rules.block.blockquote.exec(e);
            if (t) {
              var i = t[0].replace(/^ *> ?/gm, "");
              return {
                type: "blockquote",
                raw: t[0],
                tokens: this.lexer.blockTokens(i, []),
                text: i
              };
            }
          }), (t.list = function (e) {
            var t = this.rules.block.list.exec(e);
            if (t) {
              var i,
                n,
                o,
                s,
                r,
                a,
                l,
                c,
                d,
                h,
                u = t[1].trim(),
                g = u.length > 1,
                p = {
                  type: "list",
                  raw: "",
                  ordered: g,
                  start: g ? +u.slice(0, -1) : "",
                  loose: !1,
                  items: []
                };
              ((u = g ? "\\d{1,9}\\" + u.slice(-1) : "\\" + u), this.options.pedantic && (u = g ? u : "[*+-]"));
              for (var f = new RegExp("^( {0,3}" + u + ")((?: [^\\n]*| *)(?:\\n[^\\n]*)*(?:\\n|$))"); e && !this.rules.block.hr.test(e) && (t = f.exec(e));) {
                ((d = t[2].split("\n")), this.options.pedantic ? ((s = 2), (h = d[0].trimLeft())) : ((s = t[2].search(/[^ ]/)), (s = t[1].length + (s > 4 ? 1 : s)), (h = d[0].slice(s - t[1].length))), (a = !1), (i = t[0]), !d[0] && /^ *$/.test(d[1]) && ((i = t[1] + d.slice(0, 2).join("\n") + "\n"), (p.loose = !0), (d = [])));
                var m = new RegExp("^ {0," + Math.min(3, s - 1) + "}(?:[*+-]|\\d{1,9}[.)])");
                for (r = 1; r < d.length; r++) {
                  if (((c = d[r]), this.options.pedantic && (c = c.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), m.test(c))) {
                    i = t[1] + d.slice(0, r).join("\n") + "\n";
                    break;
                  }
                  if (a) {
                    if (!(c.search(/[^ ]/) >= s) && c.trim()) {
                      i = t[1] + d.slice(0, r).join("\n") + "\n";
                      break;
                    }
                    h += "\n" + c.slice(s);
                  } else (c.trim() || (a = !0), c.search(/[^ ]/) >= s ? (h += "\n" + c.slice(s)) : (h += "\n" + c));
                }
                (p.loose || (l ? (p.loose = !0) : /\n *\n *$/.test(i) && (l = !0)), this.options.gfm && (n = /^\[[ xX]\] /.exec(h)) && ((o = "[ ] " !== n[0]), (h = h.replace(/^\[[ xX]\] +/, ""))), p.items.push({
                  type: "list_item",
                  raw: i,
                  task: !!n,
                  checked: o,
                  loose: !1,
                  text: h
                }), (p.raw += i), (e = e.slice(i.length)));
              }
              ((p.items[p.items.length - 1].raw = i.trimRight()), (p.items[p.items.length - 1].text = h.trimRight()), (p.raw = p.raw.trimRight()));
              var v = p.items.length;
              for (r = 0; r < v; r++) ((this.lexer.state.top = !1), (p.items[r].tokens = this.lexer.blockTokens(p.items[r].text, [])), p.items[r].tokens.some(function (e) {
                return "space" === e.type;
              }) && ((p.loose = !0), (p.items[r].loose = !0)));
              return p;
            }
          }), (t.html = function (e) {
            var t = this.rules.block.html.exec(e);
            if (t) {
              var i = {
                type: "html",
                raw: t[0],
                pre: !this.options.sanitizer && ("pre" === t[1] || "script" === t[1] || "style" === t[1]),
                text: t[0]
              };
              return (this.options.sanitize && ((i.type = "paragraph"), (i.text = this.options.sanitizer ? this.options.sanitizer(t[0]) : R(t[0])), (i.tokens = []), this.lexer.inline(i.text, i.tokens)), i);
            }
          }), (t.def = function (e) {
            var t = this.rules.block.def.exec(e);
            if (t) return (t[3] && (t[3] = t[3].substring(1, t[3].length - 1)), {
              type: "def",
              tag: t[1].toLowerCase().replace(/\s+/g, " "),
              raw: t[0],
              href: t[2],
              title: t[3]
            });
          }), (t.table = function (e) {
            var t = this.rules.block.table.exec(e);
            if (t) {
              var i = {
                type: "table",
                header: P(t[1]).map(function (e) {
                  return {
                    text: e
                  };
                }),
                align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                rows: t[3] ? t[3].replace(/\n$/, "").split("\n") : []
              };
              if (i.header.length === i.align.length) {
                i.raw = t[0];
                var n,
                  o,
                  s,
                  r,
                  a = i.align.length;
                for (n = 0; n < a; n++) /^ *-+: *$/.test(i.align[n]) ? (i.align[n] = "right") : /^ *:-+: *$/.test(i.align[n]) ? (i.align[n] = "center") : /^ *:-+ *$/.test(i.align[n]) ? (i.align[n] = "left") : (i.align[n] = null);
                for (a = i.rows.length, n = 0; n < a; n++) i.rows[n] = P(i.rows[n], i.header.length).map(function (e) {
                  return {
                    text: e
                  };
                });
                for (a = i.header.length, o = 0; o < a; o++) ((i.header[o].tokens = []), this.lexer.inlineTokens(i.header[o].text, i.header[o].tokens));
                for (a = i.rows.length, o = 0; o < a; o++) for (r = i.rows[o], s = 0; s < r.length; s++) ((r[s].tokens = []), this.lexer.inlineTokens(r[s].text, r[s].tokens));
                return i;
              }
            }
          }), (t.lheading = function (e) {
            var t = this.rules.block.lheading.exec(e);
            if (t) {
              var i = {
                type: "heading",
                raw: t[0],
                depth: "=" === t[2].charAt(0) ? 1 : 2,
                text: t[1],
                tokens: []
              };
              return (this.lexer.inline(i.text, i.tokens), i);
            }
          }), (t.paragraph = function (e) {
            var t = this.rules.block.paragraph.exec(e);
            if (t) {
              var i = {
                type: "paragraph",
                raw: t[0],
                text: "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1],
                tokens: []
              };
              return (this.lexer.inline(i.text, i.tokens), i);
            }
          }), (t.text = function (e) {
            var t = this.rules.block.text.exec(e);
            if (t) {
              var i = {
                type: "text",
                raw: t[0],
                text: t[0],
                tokens: []
              };
              return (this.lexer.inline(i.text, i.tokens), i);
            }
          }), (t.escape = function (e) {
            var t = this.rules.inline.escape.exec(e);
            if (t) return {
              type: "escape",
              raw: t[0],
              text: R(t[1])
            };
          }), (t.tag = function (e) {
            var t = this.rules.inline.tag.exec(e);
            if (t) return (!this.lexer.state.inLink && /^<a /i.test(t[0]) ? (this.lexer.state.inLink = !0) : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? (this.lexer.state.inRawBlock = !0) : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
              type: this.options.sanitize ? "text" : "html",
              raw: t[0],
              inLink: this.lexer.state.inLink,
              inRawBlock: this.lexer.state.inRawBlock,
              text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : R(t[0]) : t[0]
            });
          }), (t.link = function (e) {
            var t = this.rules.inline.link.exec(e);
            if (t) {
              var i = t[2].trim();
              if (!this.options.pedantic && /^</.test(i)) {
                if (!/>$/.test(i)) return;
                var n = O(i.slice(0, -1), "\\");
                if ((i.length - n.length) % 2 == 0) return;
              } else {
                var o = F(t[2], "()");
                if (o > -1) {
                  var s = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + o;
                  ((t[2] = t[2].substring(0, o)), (t[0] = t[0].substring(0, s).trim()), (t[3] = ""));
                }
              }
              var r = t[2],
                a = "";
              if (this.options.pedantic) {
                var l = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);
                l && ((r = l[1]), (a = l[3]));
              } else a = t[3] ? t[3].slice(1, -1) : "";
              return ((r = r.trim()), /^</.test(r) && (r = this.options.pedantic && !/>$/.test(i) ? r.slice(1) : r.slice(1, -1)), B(t, {
                href: r ? r.replace(this.rules.inline._escapes, "$1") : r,
                title: a ? a.replace(this.rules.inline._escapes, "$1") : a
              }, t[0], this.lexer));
            }
          }), (t.reflink = function (e, t) {
            var i;
            if ((i = this.rules.inline.reflink.exec(e)) || (i = this.rules.inline.nolink.exec(e))) {
              var n = (i[2] || i[1]).replace(/\s+/g, " ");
              if (!(n = t[n.toLowerCase()]) || !n.href) {
                var o = i[0].charAt(0);
                return {
                  type: "text",
                  raw: o,
                  text: o
                };
              }
              return B(i, n, i[0], this.lexer);
            }
          }), (t.emStrong = function (e, t, i) {
            void 0 === i && (i = "");
            var n = this.rules.inline.emStrong.lDelim.exec(e);
            if (n && (!n[3] || !i.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))) {
              var o = n[1] || n[2] || "";
              if (!o || (o && ("" === i || this.rules.inline.punctuation.exec(i)))) {
                var s,
                  r,
                  a = n[0].length - 1,
                  l = a,
                  c = 0,
                  d = "*" === n[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
                for (d.lastIndex = 0, t = t.slice(-1 * e.length + a); null != (n = d.exec(t));) if ((s = n[1] || n[2] || n[3] || n[4] || n[5] || n[6])) if (((r = s.length), n[3] || n[4])) l += r;else if (!((n[5] || n[6]) && a % 3) || (a + r) % 3) {
                  if (!((l -= r) > 0)) {
                    if (((r = Math.min(r, r + l + c)), Math.min(a, r) % 2)) {
                      var h = e.slice(1, a + n.index + r);
                      return {
                        type: "em",
                        raw: e.slice(0, a + n.index + r + 1),
                        text: h,
                        tokens: this.lexer.inlineTokens(h, [])
                      };
                    }
                    var u = e.slice(2, a + n.index + r - 1);
                    return {
                      type: "strong",
                      raw: e.slice(0, a + n.index + r + 1),
                      text: u,
                      tokens: this.lexer.inlineTokens(u, [])
                    };
                  }
                } else c += r;
              }
            }
          }), (t.codespan = function (e) {
            var t = this.rules.inline.code.exec(e);
            if (t) {
              var i = t[2].replace(/\n/g, " "),
                n = /[^ ]/.test(i),
                o = /^ /.test(i) && / $/.test(i);
              return (n && o && (i = i.substring(1, i.length - 1)), (i = R(i, !0)), {
                type: "codespan",
                raw: t[0],
                text: i
              });
            }
          }), (t.br = function (e) {
            var t = this.rules.inline.br.exec(e);
            if (t) return {
              type: "br",
              raw: t[0]
            };
          }), (t.del = function (e) {
            var t = this.rules.inline.del.exec(e);
            if (t) return {
              type: "del",
              raw: t[0],
              text: t[2],
              tokens: this.lexer.inlineTokens(t[2], [])
            };
          }), (t.autolink = function (e, t) {
            var i,
              n,
              o = this.rules.inline.autolink.exec(e);
            if (o) return ((n = "@" === o[2] ? "mailto:" + (i = R(this.options.mangle ? t(o[1]) : o[1])) : (i = R(o[1]))), {
              type: "link",
              raw: o[0],
              text: i,
              href: n,
              tokens: [{
                type: "text",
                raw: i,
                text: i
              }]
            });
          }), (t.url = function (e, t) {
            var i;
            if ((i = this.rules.inline.url.exec(e))) {
              var n, o;
              if ("@" === i[2]) o = "mailto:" + (n = R(this.options.mangle ? t(i[0]) : i[0]));else {
                var s;
                do {
                  ((s = i[0]), (i[0] = this.rules.inline._backpedal.exec(i[0])[0]));
                } while (s !== i[0]);
                ((n = R(i[0])), (o = "www." === i[1] ? "http://" + n : n));
              }
              return {
                type: "link",
                raw: i[0],
                text: n,
                href: o,
                tokens: [{
                  type: "text",
                  raw: n,
                  text: n
                }]
              };
            }
          }), (t.inlineText = function (e, t) {
            var i,
              n = this.rules.inline.text.exec(e);
            if (n) return ((i = this.lexer.state.inRawBlock ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(n[0]) : R(n[0]) : n[0] : R(this.options.smartypants ? t(n[0]) : n[0])), {
              type: "text",
              raw: n[0],
              text: i
            });
          }), e);
        })(),
        W = L,
        H = S,
        z = N,
        j = {
          newline: /^(?: *(?:\n|$))+/,
          code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
          fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
          hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
          heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
          blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
          list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,
          html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
          def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
          table: W,
          lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
          _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
          text: /^[^\n]+/,
          _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
          _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
        };
      ((j.def = H(j.def).replace("label", j._label).replace("title", j._title).getRegex()), (j.bullet = /(?:[*+-]|\d{1,9}[.)])/), (j.listItemStart = H(/^( *)(bull) */).replace("bull", j.bullet).getRegex()), (j.list = H(j.list).replace(/bull/g, j.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + j.def.source + ")").getRegex()), (j._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"), (j._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/), (j.html = H(j.html, "i").replace("comment", j._comment).replace("tag", j._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex()), (j.paragraph = H(j._paragraph).replace("hr", j.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", j._tag).getRegex()), (j.blockquote = H(j.blockquote).replace("paragraph", j.paragraph).getRegex()), (j.normal = z({}, j)), (j.gfm = z({}, j.normal, {
        table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)\\|?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
      })), (j.gfm.table = H(j.gfm.table).replace("hr", j.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", j._tag).getRegex()), (j.pedantic = z({}, j.normal, {
        html: H("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", j._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: W,
        paragraph: H(j.normal._paragraph).replace("hr", j.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", j.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
      })));
      var U = {
        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
        url: W,
        tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
        link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
        reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
        nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
        reflinkSearch: "reflink|nolink(?!\\()",
        emStrong: {
          lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
          rDelimAst: /\_\_[^_*]*?\*[^_*]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
          rDelimUnd: /\*\*[^_*]*?\_[^_*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
        },
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        br: /^( {2,}|\\)\n(?!\s*$)/,
        del: W,
        text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
        punctuation: /^([\spunctuation])/,
        _punctuation: "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"
      };
      ((U.punctuation = H(U.punctuation).replace(/punctuation/g, U._punctuation).getRegex()), (U.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g), (U.escapedEmSt = /\\\*|\\_/g), (U._comment = H(j._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex()), (U.emStrong.lDelim = H(U.emStrong.lDelim).replace(/punct/g, U._punctuation).getRegex()), (U.emStrong.rDelimAst = H(U.emStrong.rDelimAst, "g").replace(/punct/g, U._punctuation).getRegex()), (U.emStrong.rDelimUnd = H(U.emStrong.rDelimUnd, "g").replace(/punct/g, U._punctuation).getRegex()), (U._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g), (U._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/), (U._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/), (U.autolink = H(U.autolink).replace("scheme", U._scheme).replace("email", U._email).getRegex()), (U._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/), (U.tag = H(U.tag).replace("comment", U._comment).replace("attribute", U._attribute).getRegex()), (U._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/), (U._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/), (U._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/), (U.link = H(U.link).replace("label", U._label).replace("href", U._href).replace("title", U._title).getRegex()), (U.reflink = H(U.reflink).replace("label", U._label).getRegex()), (U.reflinkSearch = H(U.reflinkSearch, "g").replace("reflink", U.reflink).replace("nolink", U.nolink).getRegex()), (U.normal = z({}, U)), (U.pedantic = z({}, U.normal, {
        strong: {
          start: /^__|\*\*/,
          middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
          endAst: /\*\*(?!\*)/g,
          endUnd: /__(?!_)/g
        },
        em: {
          start: /^_|\*/,
          middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
          endAst: /\*(?!\*)/g,
          endUnd: /_(?!_)/g
        },
        link: H(/^!?\[(label)\]\((.*?)\)/).replace("label", U._label).getRegex(),
        reflink: H(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", U._label).getRegex()
      })), (U.gfm = z({}, U.normal, {
        escape: H(U.escape).replace("])", "~|])").getRegex(),
        _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
      })), (U.gfm.url = H(U.gfm.url, "i").replace("email", U.gfm._extended_email).getRegex()), (U.breaks = z({}, U.gfm, {
        br: H(U.br).replace("{2,}", "*").getRegex(),
        text: H(U.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
      })));
      var $ = {
          block: j,
          inline: U
        },
        K = V,
        q = n.exports.defaults,
        Z = $.block,
        G = $.inline,
        Y = M;
      function Q(e) {
        return e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
      }
      function X(e) {
        var t,
          i,
          n = "",
          o = e.length;
        for (t = 0; t < o; t++) ((i = e.charCodeAt(t)), Math.random() > 0.5 && (i = "x" + i.toString(16)), (n += "&#" + i + ";"));
        return n;
      }
      var J = (function () {
          function t(e) {
            ((this.tokens = []), (this.tokens.links = Object.create(null)), (this.options = e || q), (this.options.tokenizer = this.options.tokenizer || new K()), (this.tokenizer = this.options.tokenizer), (this.tokenizer.options = this.options), (this.tokenizer.lexer = this), (this.inlineQueue = []), (this.state = {
              inLink: !1,
              inRawBlock: !1,
              top: !0
            }));
            var t = {
              block: Z.normal,
              inline: G.normal
            };
            (this.options.pedantic ? ((t.block = Z.pedantic), (t.inline = G.pedantic)) : this.options.gfm && ((t.block = Z.gfm), this.options.breaks ? (t.inline = G.breaks) : (t.inline = G.gfm)), (this.tokenizer.rules = t));
          }
          ((t.lex = function (e, i) {
            return new t(i).lex(e);
          }), (t.lexInline = function (e, i) {
            return new t(i).inlineTokens(e);
          }));
          var i,
            n,
            o,
            s = t.prototype;
          return ((s.lex = function (e) {
            var t;
            for (e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), this.blockTokens(e, this.tokens); (t = this.inlineQueue.shift());) this.inlineTokens(t.src, t.tokens);
            return this.tokens;
          }), (s.blockTokens = function (e, t) {
            var i,
              n,
              o,
              s,
              r = this;
            for (void 0 === t && (t = []), this.options.pedantic && (e = e.replace(/^ +$/gm, "")); e;) if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(function (n) {
              return (!!(i = n.call({
                lexer: r
              }, e, t)) && ((e = e.substring(i.raw.length)), t.push(i), !0));
            }))) if ((i = this.tokenizer.space(e))) ((e = e.substring(i.raw.length)), i.type && t.push(i));else if ((i = this.tokenizer.code(e))) ((e = e.substring(i.raw.length)), !(n = t[t.length - 1]) || ("paragraph" !== n.type && "text" !== n.type) ? t.push(i) : ((n.raw += "\n" + i.raw), (n.text += "\n" + i.text), (this.inlineQueue[this.inlineQueue.length - 1].src = n.text)));else if ((i = this.tokenizer.fences(e))) ((e = e.substring(i.raw.length)), t.push(i));else if ((i = this.tokenizer.heading(e))) ((e = e.substring(i.raw.length)), t.push(i));else if ((i = this.tokenizer.hr(e))) ((e = e.substring(i.raw.length)), t.push(i));else if ((i = this.tokenizer.blockquote(e))) ((e = e.substring(i.raw.length)), t.push(i));else if ((i = this.tokenizer.list(e))) ((e = e.substring(i.raw.length)), t.push(i));else if ((i = this.tokenizer.html(e))) ((e = e.substring(i.raw.length)), t.push(i));else if ((i = this.tokenizer.def(e))) ((e = e.substring(i.raw.length)), !(n = t[t.length - 1]) || ("paragraph" !== n.type && "text" !== n.type) ? this.tokens.links[i.tag] || (this.tokens.links[i.tag] = {
              href: i.href,
              title: i.title
            }) : ((n.raw += "\n" + i.raw), (n.text += "\n" + i.raw), (this.inlineQueue[this.inlineQueue.length - 1].src = n.text)));else if ((i = this.tokenizer.table(e))) ((e = e.substring(i.raw.length)), t.push(i));else if ((i = this.tokenizer.lheading(e))) ((e = e.substring(i.raw.length)), t.push(i));else if (((o = e), this.options.extensions && this.options.extensions.startBlock && (function () {
              var t = 1 / 0,
                i = e.slice(1),
                n = void 0;
              (r.options.extensions.startBlock.forEach(function (e) {
                "number" == typeof (n = e.call({
                  lexer: this
                }, i)) && n >= 0 && (t = Math.min(t, n));
              }), t < 1 / 0 && t >= 0 && (o = e.substring(0, t + 1)));
            })(), this.state.top && (i = this.tokenizer.paragraph(o)))) ((n = t[t.length - 1]), s && "paragraph" === n.type ? ((n.raw += "\n" + i.raw), (n.text += "\n" + i.text), this.inlineQueue.pop(), (this.inlineQueue[this.inlineQueue.length - 1].src = n.text)) : t.push(i), (s = o.length !== e.length), (e = e.substring(i.raw.length)));else if ((i = this.tokenizer.text(e))) ((e = e.substring(i.raw.length)), (n = t[t.length - 1]) && "text" === n.type ? ((n.raw += "\n" + i.raw), (n.text += "\n" + i.text), this.inlineQueue.pop(), (this.inlineQueue[this.inlineQueue.length - 1].src = n.text)) : t.push(i));else if (e) {
              var a = "Infinite loop on byte: " + e.charCodeAt(0);
              if (this.options.silent) {
                console.error(a);
                break;
              }
              throw new Error(a);
            }
            return ((this.state.top = !0), t);
          }), (s.inline = function (e, t) {
            this.inlineQueue.push({
              src: e,
              tokens: t
            });
          }), (s.inlineTokens = function (e, t) {
            var i,
              n,
              o,
              s = this;
            void 0 === t && (t = []);
            var r,
              a,
              l,
              c = e;
            if (this.tokens.links) {
              var d = Object.keys(this.tokens.links);
              if (d.length > 0) for (; null != (r = this.tokenizer.rules.inline.reflinkSearch.exec(c));) d.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (c = c.slice(0, r.index) + "[" + Y("a", r[0].length - 2) + "]" + c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
            }
            for (; null != (r = this.tokenizer.rules.inline.blockSkip.exec(c));) c = c.slice(0, r.index) + "[" + Y("a", r[0].length - 2) + "]" + c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
            for (; null != (r = this.tokenizer.rules.inline.escapedEmSt.exec(c));) c = c.slice(0, r.index) + "++" + c.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
            for (; e;) if ((a || (l = ""), (a = !1), !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(function (n) {
              return (!!(i = n.call({
                lexer: s
              }, e, t)) && ((e = e.substring(i.raw.length)), t.push(i), !0));
            })))) if ((i = this.tokenizer.escape(e))) ((e = e.substring(i.raw.length)), t.push(i));else if ((i = this.tokenizer.tag(e))) ((e = e.substring(i.raw.length)), (n = t[t.length - 1]) && "text" === i.type && "text" === n.type ? ((n.raw += i.raw), (n.text += i.text)) : t.push(i));else if ((i = this.tokenizer.link(e))) ((e = e.substring(i.raw.length)), t.push(i));else if ((i = this.tokenizer.reflink(e, this.tokens.links))) ((e = e.substring(i.raw.length)), (n = t[t.length - 1]) && "text" === i.type && "text" === n.type ? ((n.raw += i.raw), (n.text += i.text)) : t.push(i));else if ((i = this.tokenizer.emStrong(e, c, l))) ((e = e.substring(i.raw.length)), t.push(i));else if ((i = this.tokenizer.codespan(e))) ((e = e.substring(i.raw.length)), t.push(i));else if ((i = this.tokenizer.br(e))) ((e = e.substring(i.raw.length)), t.push(i));else if ((i = this.tokenizer.del(e))) ((e = e.substring(i.raw.length)), t.push(i));else if ((i = this.tokenizer.autolink(e, X))) ((e = e.substring(i.raw.length)), t.push(i));else if (this.state.inLink || !(i = this.tokenizer.url(e, X))) {
              if (((o = e), this.options.extensions && this.options.extensions.startInline && (function () {
                var t = 1 / 0,
                  i = e.slice(1),
                  n = void 0;
                (s.options.extensions.startInline.forEach(function (e) {
                  "number" == typeof (n = e.call({
                    lexer: this
                  }, i)) && n >= 0 && (t = Math.min(t, n));
                }), t < 1 / 0 && t >= 0 && (o = e.substring(0, t + 1)));
              })(), (i = this.tokenizer.inlineText(o, Q)))) ((e = e.substring(i.raw.length)), "_" !== i.raw.slice(-1) && (l = i.raw.slice(-1)), (a = !0), (n = t[t.length - 1]) && "text" === n.type ? ((n.raw += i.raw), (n.text += i.text)) : t.push(i));else if (e) {
                var h = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                  console.error(h);
                  break;
                }
                throw new Error(h);
              }
            } else ((e = e.substring(i.raw.length)), t.push(i));
            return t;
          }), (i = t), (o = [{
            key: "rules",
            get: function () {
              return {
                block: Z,
                inline: G
              };
            }
          }]), (n = null) && e(i.prototype, n), o && e(i, o), t);
        })(),
        ee = n.exports.defaults,
        te = k,
        ie = C,
        ne = (function () {
          function e(e) {
            this.options = e || ee;
          }
          var t = e.prototype;
          return ((t.code = function (e, t, i) {
            var n = (t || "").match(/\S*/)[0];
            if (this.options.highlight) {
              var o = this.options.highlight(e, n);
              null != o && o !== e && ((i = !0), (e = o));
            }
            return ((e = e.replace(/\n$/, "") + "\n"), n ? '<pre><code class="' + this.options.langPrefix + ie(n, !0) + '">' + (i ? e : ie(e, !0)) + "</code></pre>\n" : "<pre><code>" + (i ? e : ie(e, !0)) + "</code></pre>\n");
          }), (t.blockquote = function (e) {
            return "<blockquote>\n" + e + "</blockquote>\n";
          }), (t.html = function (e) {
            return e;
          }), (t.heading = function (e, t, i, n) {
            return this.options.headerIds ? "<h" + t + ' id="' + this.options.headerPrefix + n.slug(i) + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n";
          }), (t.hr = function () {
            return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
          }), (t.list = function (e, t, i) {
            var n = t ? "ol" : "ul";
            return ("<" + n + (t && 1 !== i ? ' start="' + i + '"' : "") + ">\n" + e + "</" + n + ">\n");
          }), (t.listitem = function (e) {
            return "<li>" + e + "</li>\n";
          }), (t.checkbox = function (e) {
            return ("<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ");
          }), (t.paragraph = function (e) {
            return "<p>" + e + "</p>\n";
          }), (t.table = function (e, t) {
            return (t && (t = "<tbody>" + t + "</tbody>"), "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n");
          }), (t.tablerow = function (e) {
            return "<tr>\n" + e + "</tr>\n";
          }), (t.tablecell = function (e, t) {
            var i = t.header ? "th" : "td";
            return ((t.align ? "<" + i + ' align="' + t.align + '">' : "<" + i + ">") + e + "</" + i + ">\n");
          }), (t.strong = function (e) {
            return "<strong>" + e + "</strong>";
          }), (t.em = function (e) {
            return "<em>" + e + "</em>";
          }), (t.codespan = function (e) {
            return "<code>" + e + "</code>";
          }), (t.br = function () {
            return this.options.xhtml ? "<br/>" : "<br>";
          }), (t.del = function (e) {
            return "<del>" + e + "</del>";
          }), (t.link = function (e, t, i) {
            if (null === (e = te(this.options.sanitize, this.options.baseUrl, e))) return i;
            var n = '<a href="' + ie(e) + '"';
            return (t && (n += ' title="' + t + '"'), (n += ">" + i + "</a>"));
          }), (t.image = function (e, t, i) {
            if (null === (e = te(this.options.sanitize, this.options.baseUrl, e))) return i;
            var n = '<img src="' + e + '" alt="' + i + '"';
            return (t && (n += ' title="' + t + '"'), (n += this.options.xhtml ? "/>" : ">"));
          }), (t.text = function (e) {
            return e;
          }), e);
        })(),
        oe = (function () {
          function e() {}
          var t = e.prototype;
          return ((t.strong = function (e) {
            return e;
          }), (t.em = function (e) {
            return e;
          }), (t.codespan = function (e) {
            return e;
          }), (t.del = function (e) {
            return e;
          }), (t.html = function (e) {
            return e;
          }), (t.text = function (e) {
            return e;
          }), (t.link = function (e, t, i) {
            return "" + i;
          }), (t.image = function (e, t, i) {
            return "" + i;
          }), (t.br = function () {
            return "";
          }), e);
        })(),
        se = (function () {
          function e() {
            this.seen = {};
          }
          var t = e.prototype;
          return ((t.serialize = function (e) {
            return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
          }), (t.getNextSafeSlug = function (e, t) {
            var i = e,
              n = 0;
            if (this.seen.hasOwnProperty(i)) {
              n = this.seen[e];
              do {
                i = e + "-" + ++n;
              } while (this.seen.hasOwnProperty(i));
            }
            return (t || ((this.seen[e] = n), (this.seen[i] = 0)), i);
          }), (t.slug = function (e, t) {
            void 0 === t && (t = {});
            var i = this.serialize(e);
            return this.getNextSafeSlug(i, t.dryrun);
          }), e);
        })(),
        re = ne,
        ae = oe,
        le = se,
        ce = n.exports.defaults,
        de = x,
        he = (function () {
          function e(e) {
            ((this.options = e || ce), (this.options.renderer = this.options.renderer || new re()), (this.renderer = this.options.renderer), (this.renderer.options = this.options), (this.textRenderer = new ae()), (this.slugger = new le()));
          }
          ((e.parse = function (t, i) {
            return new e(i).parse(t);
          }), (e.parseInline = function (t, i) {
            return new e(i).parseInline(t);
          }));
          var t = e.prototype;
          return ((t.parse = function (e, t) {
            void 0 === t && (t = !0);
            var i,
              n,
              o,
              s,
              r,
              a,
              l,
              c,
              d,
              h,
              u,
              g,
              p,
              f,
              m,
              v,
              _,
              b,
              w,
              y = "",
              C = e.length;
            for (i = 0; i < C; i++) if (((h = e[i]), !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[h.type]) || (!1 === (w = this.options.extensions.renderers[h.type].call({
              parser: this
            }, h)) && ["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(h.type)))) switch (h.type) {
              case "space":
                continue;
              case "hr":
                y += this.renderer.hr();
                continue;
              case "heading":
                y += this.renderer.heading(this.parseInline(h.tokens), h.depth, de(this.parseInline(h.tokens, this.textRenderer)), this.slugger);
                continue;
              case "code":
                y += this.renderer.code(h.text, h.lang, h.escaped);
                continue;
              case "table":
                for (c = "", l = "", s = h.header.length, n = 0; n < s; n++) l += this.renderer.tablecell(this.parseInline(h.header[n].tokens), {
                  header: !0,
                  align: h.align[n]
                });
                for (c += this.renderer.tablerow(l), d = "", s = h.rows.length, n = 0; n < s; n++) {
                  for (l = "", r = (a = h.rows[n]).length, o = 0; o < r; o++) l += this.renderer.tablecell(this.parseInline(a[o].tokens), {
                    header: !1,
                    align: h.align[o]
                  });
                  d += this.renderer.tablerow(l);
                }
                y += this.renderer.table(c, d);
                continue;
              case "blockquote":
                ((d = this.parse(h.tokens)), (y += this.renderer.blockquote(d)));
                continue;
              case "list":
                for (u = h.ordered, g = h.start, p = h.loose, s = h.items.length, d = "", n = 0; n < s; n++) ((v = (m = h.items[n]).checked), (_ = m.task), (f = ""), m.task && ((b = this.renderer.checkbox(v)), p ? m.tokens.length > 0 && "paragraph" === m.tokens[0].type ? ((m.tokens[0].text = b + " " + m.tokens[0].text), m.tokens[0].tokens && m.tokens[0].tokens.length > 0 && "text" === m.tokens[0].tokens[0].type && (m.tokens[0].tokens[0].text = b + " " + m.tokens[0].tokens[0].text)) : m.tokens.unshift({
                  type: "text",
                  text: b
                }) : (f += b)), (f += this.parse(m.tokens, p)), (d += this.renderer.listitem(f, _, v)));
                y += this.renderer.list(d, u, g);
                continue;
              case "html":
                y += this.renderer.html(h.text);
                continue;
              case "paragraph":
                y += this.renderer.paragraph(this.parseInline(h.tokens));
                continue;
              case "text":
                for (d = h.tokens ? this.parseInline(h.tokens) : h.text; i + 1 < C && "text" === e[i + 1].type;) d += "\n" + ((h = e[++i]).tokens ? this.parseInline(h.tokens) : h.text);
                y += t ? this.renderer.paragraph(d) : d;
                continue;
              default:
                var x = 'Token with "' + h.type + '" type was not found.';
                if (this.options.silent) return void console.error(x);
                throw new Error(x);
            } else y += w || "";
            return y;
          }), (t.parseInline = function (e, t) {
            t = t || this.renderer;
            var i,
              n,
              o,
              s = "",
              r = e.length;
            for (i = 0; i < r; i++) if (((n = e[i]), !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[n.type]) || (!1 === (o = this.options.extensions.renderers[n.type].call({
              parser: this
            }, n)) && ["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(n.type)))) switch (n.type) {
              case "escape":
              case "text":
                s += t.text(n.text);
                break;
              case "html":
                s += t.html(n.text);
                break;
              case "link":
                s += t.link(n.href, n.title, this.parseInline(n.tokens, t));
                break;
              case "image":
                s += t.image(n.href, n.title, n.text);
                break;
              case "strong":
                s += t.strong(this.parseInline(n.tokens, t));
                break;
              case "em":
                s += t.em(this.parseInline(n.tokens, t));
                break;
              case "codespan":
                s += t.codespan(n.text);
                break;
              case "br":
                s += t.br();
                break;
              case "del":
                s += t.del(this.parseInline(n.tokens, t));
                break;
              default:
                var a = 'Token with "' + n.type + '" type was not found.';
                if (this.options.silent) return void console.error(a);
                throw new Error(a);
            } else s += o || "";
            return s;
          }), e);
        })(),
        ue = J,
        ge = he,
        pe = V,
        fe = ne,
        me = oe,
        ve = se,
        _e = N,
        be = T,
        we = C,
        ye = n.exports.getDefaults,
        Ce = n.exports.changeDefaults,
        xe = n.exports.defaults;
      function Se(e, t, i) {
        if (null == e) throw new Error("marked(): input parameter is undefined or null");
        if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
        if (("function" == typeof t && ((i = t), (t = null)), (t = _e({}, Se.defaults, t || {})), be(t), i)) {
          var n,
            o = t.highlight;
          try {
            n = ue.lex(e, t);
          } catch (e) {
            return i(e);
          }
          var s = function (e) {
            var s;
            if (!e) try {
              (t.walkTokens && Se.walkTokens(n, t.walkTokens), (s = ge.parse(n, t)));
            } catch (t) {
              e = t;
            }
            return ((t.highlight = o), e ? i(e) : i(null, s));
          };
          if (!o || o.length < 3) return s();
          if ((delete t.highlight, !n.length)) return s();
          var r = 0;
          return (Se.walkTokens(n, function (e) {
            "code" === e.type && (r++, setTimeout(function () {
              o(e.text, e.lang, function (t, i) {
                if (t) return s(t);
                (null != i && i !== e.text && ((e.text = i), (e.escaped = !0)), 0 === --r && s());
              });
            }, 0));
          }), void (0 === r && s()));
        }
        try {
          var a = ue.lex(e, t);
          return (t.walkTokens && Se.walkTokens(a, t.walkTokens), ge.parse(a, t));
        } catch (e) {
          if (((e.message += "\nPlease report this to https://github.com/markedjs/marked."), t.silent)) return ("<p>An error occurred:</p><pre>" + we(e.message + "", !0) + "</pre>");
          throw e;
        }
      }
      return ((Se.options = Se.setOptions = function (e) {
        return (_e(Se.defaults, e), Ce(Se.defaults), Se);
      }), (Se.getDefaults = ye), (Se.defaults = xe), (Se.use = function () {
        for (var e = this, t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
        var o,
          s = _e.apply(void 0, [{}].concat(i)),
          r = Se.defaults.extensions || {
            renderers: {},
            childTokens: {}
          };
        i.forEach(function (t) {
          if ((t.extensions && ((o = !0), t.extensions.forEach(function (e) {
            if (!e.name) throw new Error("extension name required");
            if (e.renderer) {
              var t = r.renderers ? r.renderers[e.name] : null;
              r.renderers[e.name] = t ? function () {
                for (var i = arguments.length, n = new Array(i), o = 0; o < i; o++) n[o] = arguments[o];
                var s = e.renderer.apply(this, n);
                return (!1 === s && (s = t.apply(this, n)), s);
              } : e.renderer;
            }
            if (e.tokenizer) {
              if (!e.level || ("block" !== e.level && "inline" !== e.level)) throw new Error("extension level must be 'block' or 'inline'");
              (r[e.level] ? r[e.level].unshift(e.tokenizer) : (r[e.level] = [e.tokenizer]), e.start && ("block" === e.level ? r.startBlock ? r.startBlock.push(e.start) : (r.startBlock = [e.start]) : "inline" === e.level && (r.startInline ? r.startInline.push(e.start) : (r.startInline = [e.start]))));
            }
            e.childTokens && (r.childTokens[e.name] = e.childTokens);
          })), t.renderer && (function () {
            var e = Se.defaults.renderer || new fe(),
              i = function (i) {
                var n = e[i];
                e[i] = function () {
                  for (var o = arguments.length, s = new Array(o), r = 0; r < o; r++) s[r] = arguments[r];
                  var a = t.renderer[i].apply(e, s);
                  return (!1 === a && (a = n.apply(e, s)), a);
                };
              };
            for (var n in t.renderer) i(n);
            s.renderer = e;
          })(), t.tokenizer && (function () {
            var e = Se.defaults.tokenizer || new pe(),
              i = function (i) {
                var n = e[i];
                e[i] = function () {
                  for (var o = arguments.length, s = new Array(o), r = 0; r < o; r++) s[r] = arguments[r];
                  var a = t.tokenizer[i].apply(e, s);
                  return (!1 === a && (a = n.apply(e, s)), a);
                };
              };
            for (var n in t.tokenizer) i(n);
            s.tokenizer = e;
          })(), t.walkTokens)) {
            var i = Se.defaults.walkTokens;
            s.walkTokens = function (n) {
              (t.walkTokens.call(e, n), i && i(n));
            };
          }
          (o && (s.extensions = r), Se.setOptions(s));
        });
      }), (Se.walkTokens = function (e, t) {
        for (var n, o = function () {
            var e = n.value;
            switch ((t(e), e.type)) {
              case "table":
                for (var o, s = i(e.header); !(o = s()).done;) {
                  var r = o.value;
                  Se.walkTokens(r.tokens, t);
                }
                for (var a, l = i(e.rows); !(a = l()).done;) for (var c, d = i(a.value); !(c = d()).done;) {
                  var h = c.value;
                  Se.walkTokens(h.tokens, t);
                }
                break;
              case "list":
                Se.walkTokens(e.items, t);
                break;
              default:
                Se.defaults.extensions && Se.defaults.extensions.childTokens && Se.defaults.extensions.childTokens[e.type] ? Se.defaults.extensions.childTokens[e.type].forEach(function (i) {
                  Se.walkTokens(e[i], t);
                }) : e.tokens && Se.walkTokens(e.tokens, t);
            }
          }, s = i(e); !(n = s()).done;) o();
      }), (Se.parseInline = function (e, t) {
        if (null == e) throw new Error("marked.parseInline(): input parameter is undefined or null");
        if ("string" != typeof e) throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
        ((t = _e({}, Se.defaults, t || {})), be(t));
        try {
          var i = ue.lexInline(e, t);
          return (t.walkTokens && Se.walkTokens(i, t.walkTokens), ge.parseInline(i, t));
        } catch (e) {
          if (((e.message += "\nPlease report this to https://github.com/markedjs/marked."), t.silent)) return ("<p>An error occurred:</p><pre>" + we(e.message + "", !0) + "</pre>");
          throw e;
        }
      }), (Se.Parser = ge), (Se.parser = ge.parse), (Se.Renderer = fe), (Se.TextRenderer = me), (Se.Lexer = ue), (Se.lexer = ue.lex), (Se.Tokenizer = pe), (Se.Slugger = ve), (Se.parse = Se), Se);
    }));
  })());
  (n.Parser, n.parser);
  var o = n.Renderer,
    s = (n.TextRenderer, n.Lexer, n.lexer, n.Tokenizer, n.Slugger, n.parse);
};