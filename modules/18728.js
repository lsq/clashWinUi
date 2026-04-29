const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    CoreEditingCommands: () => N,
    CoreEditorCommand: () => b,
    CoreNavigationCommands: () => C,
    EditorScroll_: () => w,
    RevealLine_: () => y
  }));
  var n = i(63580),
    o = i(16268),
    s = i(98401),
    r = i(85152),
    a = i(16830),
    l = i(11640),
    c = i(33181),
    d = i(50187),
    h = i(24314);
  class u {
    static columnSelect(e, t, i, n, o, s) {
      let r = Math.abs(o - i) + 1,
        a = i > o,
        l = n > s,
        u = n < s,
        g = [];
      for (let o = 0; o < r; o++) {
        let r = i + (a ? -o : o),
          p = c.io.columnFromVisibleColumn2(e, t, r, n),
          f = c.io.columnFromVisibleColumn2(e, t, r, s),
          m = c.io.visibleColumnFromColumn2(e, t, new d.L(r, p)),
          v = c.io.visibleColumnFromColumn2(e, t, new d.L(r, f));
        if (u) {
          if (m > s) continue;
          if (v < n) continue;
        }
        if (l) {
          if (v > n) continue;
          if (m < s) continue;
        }
        g.push(new c.rS(new h.e(r, p, r, p), 0, new d.L(r, f), 0));
      }
      if (0 === g.length) for (let e = 0; e < r; e++) {
        const n = i + (a ? -e : e),
          o = t.getLineMaxColumn(n);
        g.push(new c.rS(new h.e(n, o, n, o), 0, new d.L(n, o), 0));
      }
      return {
        viewStates: g,
        reversed: a,
        fromLineNumber: i,
        fromVisualColumn: n,
        toLineNumber: o,
        toVisualColumn: s
      };
    }
    static columnSelectLeft(e, t, i) {
      let n = i.toViewVisualColumn;
      return (n > 0 && n--, u.columnSelect(e, t, i.fromViewLineNumber, i.fromViewVisualColumn, i.toViewLineNumber, n));
    }
    static columnSelectRight(e, t, i) {
      let n = 0;
      const o = Math.min(i.fromViewLineNumber, i.toViewLineNumber),
        s = Math.max(i.fromViewLineNumber, i.toViewLineNumber);
      for (let i = o; i <= s; i++) {
        const o = t.getLineMaxColumn(i),
          s = c.io.visibleColumnFromColumn2(e, t, new d.L(i, o));
        n = Math.max(n, s);
      }
      let r = i.toViewVisualColumn;
      return (r < n && r++, this.columnSelect(e, t, i.fromViewLineNumber, i.fromViewVisualColumn, i.toViewLineNumber, r));
    }
    static columnSelectUp(e, t, i, n) {
      const o = n ? e.pageSize : 1,
        s = Math.max(1, i.toViewLineNumber - o);
      return this.columnSelect(e, t, i.fromViewLineNumber, i.fromViewVisualColumn, s, i.toViewVisualColumn);
    }
    static columnSelectDown(e, t, i, n) {
      const o = n ? e.pageSize : 1,
        s = Math.min(t.getLineCount(), i.toViewLineNumber + o);
      return this.columnSelect(e, t, i.fromViewLineNumber, i.fromViewVisualColumn, s, i.toViewVisualColumn);
    }
  }
  var g = i(31380),
    p = i(83814),
    f = i(23582),
    m = i(29102),
    v = i(38819),
    _ = i(49989);
  class b extends a._l {
    runEditorCommand(e, t, i) {
      const n = t._getViewModel();
      n && this.runCoreEditorCommand(n, i || {});
    }
  }
  var w, y, C;
  (!(function (e) {
    ((e.description = {
      description: "Scroll editor in the given direction",
      args: [{
        name: "Editor scroll argument object",
        description: "Property-value pairs that can be passed through this argument:\n\t\t\t\t\t* 'to': A mandatory direction value.\n\t\t\t\t\t\t```\n\t\t\t\t\t\t'up', 'down'\n\t\t\t\t\t\t```\n\t\t\t\t\t* 'by': Unit to move. Default is computed based on 'to' value.\n\t\t\t\t\t\t```\n\t\t\t\t\t\t'line', 'wrappedLine', 'page', 'halfPage'\n\t\t\t\t\t\t```\n\t\t\t\t\t* 'value': Number of units to move. Default is '1'.\n\t\t\t\t\t* 'revealCursor': If 'true' reveals the cursor if it is outside view port.\n\t\t\t\t",
        constraint: function (e) {
          if (!s.Kn(e)) return !1;
          const t = e;
          return (!!s.HD(t.to) && !(!s.o8(t.by) && !s.HD(t.by)) && !(!s.o8(t.value) && !s.hj(t.value)) && !(!s.o8(t.revealCursor) && !s.jn(t.revealCursor)));
        },
        schema: {
          type: "object",
          required: ["to"],
          properties: {
            to: {
              type: "string",
              enum: ["up", "down"]
            },
            by: {
              type: "string",
              enum: ["line", "wrappedLine", "page", "halfPage"]
            },
            value: {
              type: "number",
              default: 1
            },
            revealCursor: {
              type: "boolean"
            }
          }
        }
      }]
    }), (e.RawDirection = {
      Up: "up",
      Down: "down"
    }), (e.RawUnit = {
      Line: "line",
      WrappedLine: "wrappedLine",
      Page: "page",
      HalfPage: "halfPage"
    }), (e.parse = function (t) {
      let i, n;
      switch (t.to) {
        case e.RawDirection.Up:
          i = 1;
          break;
        case e.RawDirection.Down:
          i = 2;
          break;
        default:
          return null;
      }
      switch (t.by) {
        case e.RawUnit.Line:
          n = 1;
          break;
        case e.RawUnit.WrappedLine:
          n = 2;
          break;
        case e.RawUnit.Page:
          n = 3;
          break;
        case e.RawUnit.HalfPage:
          n = 4;
          break;
        default:
          n = 2;
      }
      return {
        direction: i,
        unit: n,
        value: Math.floor(t.value || 1),
        revealCursor: !!t.revealCursor,
        select: !!t.select
      };
    }));
  })(w || (w = {})), (function (e) {
    ((e.description = {
      description: "Reveal the given line at the given logical position",
      args: [{
        name: "Reveal line argument object",
        description: "Property-value pairs that can be passed through this argument:\n\t\t\t\t\t* 'lineNumber': A mandatory line number value.\n\t\t\t\t\t* 'at': Logical position at which line has to be revealed.\n\t\t\t\t\t\t```\n\t\t\t\t\t\t'top', 'center', 'bottom'\n\t\t\t\t\t\t```\n\t\t\t\t",
        constraint: function (e) {
          if (!s.Kn(e)) return !1;
          const t = e;
          return (!(!s.hj(t.lineNumber) && !s.HD(t.lineNumber)) && !(!s.o8(t.at) && !s.HD(t.at)));
        },
        schema: {
          type: "object",
          required: ["lineNumber"],
          properties: {
            lineNumber: {
              type: ["number", "string"]
            },
            at: {
              type: "string",
              enum: ["top", "center", "bottom"]
            }
          }
        }
      }]
    }), (e.RawAtArgument = {
      Top: "top",
      Center: "center",
      Bottom: "bottom"
    }));
  })(y || (y = {})));
  class x {
    constructor(e) {
      (e.addImplementation(1e4, "code-editor", (e, t) => {
        const i = e.get(l.$).getFocusedCodeEditor();
        return !(!i || !i.hasTextFocus()) && this._runEditorCommand(e, i, t);
      }), e.addImplementation(1e3, "generic-dom-input-textarea", (e, t) => {
        const i = document.activeElement;
        return (!!(i && ["input", "textarea"].indexOf(i.tagName.toLowerCase()) >= 0) && (this.runDOMCommand(), !0));
      }), e.addImplementation(0, "generic-dom", (e, t) => {
        const i = e.get(l.$).getActiveCodeEditor();
        return !!i && (i.focus(), this._runEditorCommand(e, i, t));
      }));
    }
    _runEditorCommand(e, t, i) {
      const n = this.runEditorCommand(e, t, i);
      return n || !0;
    }
  }
  !(function (e) {
    class t extends b {
      constructor(e) {
        (super(e), (this._inSelectionMode = e.inSelectionMode));
      }
      runCoreEditorCommand(e, t) {
        (e.model.pushStackElement(), e.setCursorStates(t.source, 3, [p.P.moveTo(e, e.getPrimaryCursorState(), this._inSelectionMode, t.position, t.viewPosition)]), e.revealPrimaryCursor(t.source, !0));
      }
    }
    ((e.MoveTo = (0, a.fK)(new t({
      id: "_moveTo",
      inSelectionMode: !1,
      precondition: void 0
    }))), (e.MoveToSelect = (0, a.fK)(new t({
      id: "_moveToSelect",
      inSelectionMode: !0,
      precondition: void 0
    }))));
    class i extends b {
      runCoreEditorCommand(e, t) {
        e.model.pushStackElement();
        const i = this._getColumnSelectResult(e, e.getPrimaryCursorState(), e.getCursorColumnSelectData(), t);
        (e.setCursorStates(t.source, 3, i.viewStates.map(e => c.Vi.fromViewState(e))), e.setCursorColumnSelectData({
          isReal: !0,
          fromViewLineNumber: i.fromLineNumber,
          fromViewVisualColumn: i.fromVisualColumn,
          toViewLineNumber: i.toLineNumber,
          toViewVisualColumn: i.toVisualColumn
        }), i.reversed ? e.revealTopMostCursor(t.source) : e.revealBottomMostCursor(t.source));
      }
    }
    ((e.ColumnSelect = (0, a.fK)(new (class extends i {
      constructor() {
        super({
          id: "columnSelect",
          precondition: void 0
        });
      }
      _getColumnSelectResult(e, t, i, n) {
        const o = e.model.validatePosition(n.position),
          s = e.coordinatesConverter.validateViewPosition(new d.L(n.viewPosition.lineNumber, n.viewPosition.column), o);
        let r = n.doColumnSelect ? i.fromViewLineNumber : s.lineNumber,
          a = n.doColumnSelect ? i.fromViewVisualColumn : n.mouseColumn - 1;
        return u.columnSelect(e.cursorConfig, e, r, a, s.lineNumber, n.mouseColumn - 1);
      }
    })())), (e.CursorColumnSelectLeft = (0, a.fK)(new (class extends i {
      constructor() {
        super({
          id: "cursorColumnSelectLeft",
          precondition: void 0,
          kbOpts: {
            weight: 0,
            kbExpr: m.u.textInputFocus,
            primary: 3599,
            linux: {
              primary: 0
            }
          }
        });
      }
      _getColumnSelectResult(e, t, i, n) {
        return u.columnSelectLeft(e.cursorConfig, e, i);
      }
    })())), (e.CursorColumnSelectRight = (0, a.fK)(new (class extends i {
      constructor() {
        super({
          id: "cursorColumnSelectRight",
          precondition: void 0,
          kbOpts: {
            weight: 0,
            kbExpr: m.u.textInputFocus,
            primary: 3601,
            linux: {
              primary: 0
            }
          }
        });
      }
      _getColumnSelectResult(e, t, i, n) {
        return u.columnSelectRight(e.cursorConfig, e, i);
      }
    })())));
    class s extends i {
      constructor(e) {
        (super(e), (this._isPaged = e.isPaged));
      }
      _getColumnSelectResult(e, t, i, n) {
        return u.columnSelectUp(e.cursorConfig, e, i, this._isPaged);
      }
    }
    ((e.CursorColumnSelectUp = (0, a.fK)(new s({
      isPaged: !1,
      id: "cursorColumnSelectUp",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 3600,
        linux: {
          primary: 0
        }
      }
    }))), (e.CursorColumnSelectPageUp = (0, a.fK)(new s({
      isPaged: !0,
      id: "cursorColumnSelectPageUp",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 3595,
        linux: {
          primary: 0
        }
      }
    }))));
    class l extends i {
      constructor(e) {
        (super(e), (this._isPaged = e.isPaged));
      }
      _getColumnSelectResult(e, t, i, n) {
        return u.columnSelectDown(e.cursorConfig, e, i, this._isPaged);
      }
    }
    ((e.CursorColumnSelectDown = (0, a.fK)(new l({
      isPaged: !1,
      id: "cursorColumnSelectDown",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 3602,
        linux: {
          primary: 0
        }
      }
    }))), (e.CursorColumnSelectPageDown = (0, a.fK)(new l({
      isPaged: !0,
      id: "cursorColumnSelectPageDown",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 3596,
        linux: {
          primary: 0
        }
      }
    }))));
    class g extends b {
      constructor() {
        super({
          id: "cursorMove",
          precondition: void 0,
          description: p.N.description
        });
      }
      runCoreEditorCommand(e, t) {
        const i = p.N.parse(t);
        i && this._runCursorMove(e, t.source, i);
      }
      _runCursorMove(e, t, i) {
        (e.model.pushStackElement(), e.setCursorStates(t, 3, g._move(e, e.getCursorStates(), i)), e.revealPrimaryCursor(t, !0));
      }
      static _move(e, t, i) {
        const n = i.select,
          o = i.value;
        switch (i.direction) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
            return p.P.simpleMove(e, t, i.direction, n, o, i.unit);
          case 11:
          case 13:
          case 12:
          case 14:
            return p.P.viewportMove(e, t, i.direction, n, o);
          default:
            return null;
        }
      }
    }
    ((e.CursorMoveImpl = g), (e.CursorMove = (0, a.fK)(new g())));
    class f extends b {
      constructor(e) {
        (super(e), (this._staticArgs = e.args));
      }
      runCoreEditorCommand(e, t) {
        let i = this._staticArgs;
        (-1 === this._staticArgs.value && (i = {
          direction: this._staticArgs.direction,
          unit: this._staticArgs.unit,
          select: this._staticArgs.select,
          value: e.cursorConfig.pageSize
        }), e.model.pushStackElement(), e.setCursorStates(t.source, 3, p.P.simpleMove(e, e.getCursorStates(), i.direction, i.select, i.value, i.unit)), e.revealPrimaryCursor(t.source, !0));
      }
    }
    ((e.CursorLeft = (0, a.fK)(new f({
      args: {
        direction: 0,
        unit: 0,
        select: !1,
        value: 1
      },
      id: "cursorLeft",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 15,
        mac: {
          primary: 15,
          secondary: [288]
        }
      }
    }))), (e.CursorLeftSelect = (0, a.fK)(new f({
      args: {
        direction: 0,
        unit: 0,
        select: !0,
        value: 1
      },
      id: "cursorLeftSelect",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 1039
      }
    }))), (e.CursorRight = (0, a.fK)(new f({
      args: {
        direction: 1,
        unit: 0,
        select: !1,
        value: 1
      },
      id: "cursorRight",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 17,
        mac: {
          primary: 17,
          secondary: [292]
        }
      }
    }))), (e.CursorRightSelect = (0, a.fK)(new f({
      args: {
        direction: 1,
        unit: 0,
        select: !0,
        value: 1
      },
      id: "cursorRightSelect",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 1041
      }
    }))), (e.CursorUp = (0, a.fK)(new f({
      args: {
        direction: 2,
        unit: 2,
        select: !1,
        value: 1
      },
      id: "cursorUp",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 16,
        mac: {
          primary: 16,
          secondary: [302]
        }
      }
    }))), (e.CursorUpSelect = (0, a.fK)(new f({
      args: {
        direction: 2,
        unit: 2,
        select: !0,
        value: 1
      },
      id: "cursorUpSelect",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 1040,
        secondary: [3088],
        mac: {
          primary: 1040
        },
        linux: {
          primary: 1040
        }
      }
    }))), (e.CursorPageUp = (0, a.fK)(new f({
      args: {
        direction: 2,
        unit: 2,
        select: !1,
        value: -1
      },
      id: "cursorPageUp",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 11
      }
    }))), (e.CursorPageUpSelect = (0, a.fK)(new f({
      args: {
        direction: 2,
        unit: 2,
        select: !0,
        value: -1
      },
      id: "cursorPageUpSelect",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 1035
      }
    }))), (e.CursorDown = (0, a.fK)(new f({
      args: {
        direction: 3,
        unit: 2,
        select: !1,
        value: 1
      },
      id: "cursorDown",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 18,
        mac: {
          primary: 18,
          secondary: [300]
        }
      }
    }))), (e.CursorDownSelect = (0, a.fK)(new f({
      args: {
        direction: 3,
        unit: 2,
        select: !0,
        value: 1
      },
      id: "cursorDownSelect",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 1042,
        secondary: [3090],
        mac: {
          primary: 1042
        },
        linux: {
          primary: 1042
        }
      }
    }))), (e.CursorPageDown = (0, a.fK)(new f({
      args: {
        direction: 3,
        unit: 2,
        select: !1,
        value: -1
      },
      id: "cursorPageDown",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 12
      }
    }))), (e.CursorPageDownSelect = (0, a.fK)(new f({
      args: {
        direction: 3,
        unit: 2,
        select: !0,
        value: -1
      },
      id: "cursorPageDownSelect",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 1036
      }
    }))), (e.CreateCursor = (0, a.fK)(new (class extends b {
      constructor() {
        super({
          id: "createCursor",
          precondition: void 0
        });
      }
      runCoreEditorCommand(e, t) {
        let i;
        i = t.wholeLine ? p.P.line(e, e.getPrimaryCursorState(), !1, t.position, t.viewPosition) : p.P.moveTo(e, e.getPrimaryCursorState(), !1, t.position, t.viewPosition);
        const n = e.getCursorStates();
        if (n.length > 1) {
          const o = i.modelState ? i.modelState.position : null,
            s = i.viewState ? i.viewState.position : null;
          for (let i = 0, r = n.length; i < r; i++) {
            const r = n[i];
            if ((!o || r.modelState.selection.containsPosition(o)) && (!s || r.viewState.selection.containsPosition(s))) return (n.splice(i, 1), e.model.pushStackElement(), void e.setCursorStates(t.source, 3, n));
          }
        }
        (n.push(i), e.model.pushStackElement(), e.setCursorStates(t.source, 3, n));
      }
    })())), (e.LastCursorMoveToSelect = (0, a.fK)(new (class extends b {
      constructor() {
        super({
          id: "_lastCursorMoveToSelect",
          precondition: void 0
        });
      }
      runCoreEditorCommand(e, t) {
        const i = e.getLastAddedCursorIndex(),
          n = e.getCursorStates(),
          o = n.slice(0);
        ((o[i] = p.P.moveTo(e, n[i], !0, t.position, t.viewPosition)), e.model.pushStackElement(), e.setCursorStates(t.source, 3, o));
      }
    })())));
    class v extends b {
      constructor(e) {
        (super(e), (this._inSelectionMode = e.inSelectionMode));
      }
      runCoreEditorCommand(e, t) {
        (e.model.pushStackElement(), e.setCursorStates(t.source, 3, p.P.moveToBeginningOfLine(e, e.getCursorStates(), this._inSelectionMode)), e.revealPrimaryCursor(t.source, !0));
      }
    }
    ((e.CursorHome = (0, a.fK)(new v({
      inSelectionMode: !1,
      id: "cursorHome",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 14,
        mac: {
          primary: 14,
          secondary: [2063]
        }
      }
    }))), (e.CursorHomeSelect = (0, a.fK)(new v({
      inSelectionMode: !0,
      id: "cursorHomeSelect",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 1038,
        mac: {
          primary: 1038,
          secondary: [3087]
        }
      }
    }))));
    class _ extends b {
      constructor(e) {
        (super(e), (this._inSelectionMode = e.inSelectionMode));
      }
      runCoreEditorCommand(e, t) {
        (e.model.pushStackElement(), e.setCursorStates(t.source, 3, this._exec(e.getCursorStates())), e.revealPrimaryCursor(t.source, !0));
      }
      _exec(e) {
        const t = [];
        for (let i = 0, n = e.length; i < n; i++) {
          const n = e[i],
            o = n.modelState.position.lineNumber;
          t[i] = c.Vi.fromModelState(n.modelState.move(this._inSelectionMode, o, 1, 0));
        }
        return t;
      }
    }
    ((e.CursorLineStart = (0, a.fK)(new _({
      inSelectionMode: !1,
      id: "cursorLineStart",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 0,
        mac: {
          primary: 287
        }
      }
    }))), (e.CursorLineStartSelect = (0, a.fK)(new _({
      inSelectionMode: !0,
      id: "cursorLineStartSelect",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 0,
        mac: {
          primary: 1311
        }
      }
    }))));
    class C extends b {
      constructor(e) {
        (super(e), (this._inSelectionMode = e.inSelectionMode));
      }
      runCoreEditorCommand(e, t) {
        (e.model.pushStackElement(), e.setCursorStates(t.source, 3, p.P.moveToEndOfLine(e, e.getCursorStates(), this._inSelectionMode, t.sticky || !1)), e.revealPrimaryCursor(t.source, !0));
      }
    }
    ((e.CursorEnd = (0, a.fK)(new C({
      inSelectionMode: !1,
      id: "cursorEnd",
      precondition: void 0,
      kbOpts: {
        args: {
          sticky: !1
        },
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 13,
        mac: {
          primary: 13,
          secondary: [2065]
        }
      },
      description: {
        description: "Go to End",
        args: [{
          name: "args",
          schema: {
            type: "object",
            properties: {
              sticky: {
                description: n.N("stickydesc", "Stick to the end even when going to longer lines"),
                type: "boolean",
                default: !1
              }
            }
          }
        }]
      }
    }))), (e.CursorEndSelect = (0, a.fK)(new C({
      inSelectionMode: !0,
      id: "cursorEndSelect",
      precondition: void 0,
      kbOpts: {
        args: {
          sticky: !1
        },
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 1037,
        mac: {
          primary: 1037,
          secondary: [3089]
        }
      },
      description: {
        description: "Select to End",
        args: [{
          name: "args",
          schema: {
            type: "object",
            properties: {
              sticky: {
                description: n.N("stickydesc", "Stick to the end even when going to longer lines"),
                type: "boolean",
                default: !1
              }
            }
          }
        }]
      }
    }))));
    class S extends b {
      constructor(e) {
        (super(e), (this._inSelectionMode = e.inSelectionMode));
      }
      runCoreEditorCommand(e, t) {
        (e.model.pushStackElement(), e.setCursorStates(t.source, 3, this._exec(e, e.getCursorStates())), e.revealPrimaryCursor(t.source, !0));
      }
      _exec(e, t) {
        const i = [];
        for (let n = 0, o = t.length; n < o; n++) {
          const o = t[n],
            s = o.modelState.position.lineNumber,
            r = e.model.getLineMaxColumn(s);
          i[n] = c.Vi.fromModelState(o.modelState.move(this._inSelectionMode, s, r, 0));
        }
        return i;
      }
    }
    ((e.CursorLineEnd = (0, a.fK)(new S({
      inSelectionMode: !1,
      id: "cursorLineEnd",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 0,
        mac: {
          primary: 291
        }
      }
    }))), (e.CursorLineEndSelect = (0, a.fK)(new S({
      inSelectionMode: !0,
      id: "cursorLineEndSelect",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 0,
        mac: {
          primary: 1315
        }
      }
    }))));
    class k extends b {
      constructor(e) {
        (super(e), (this._inSelectionMode = e.inSelectionMode));
      }
      runCoreEditorCommand(e, t) {
        (e.model.pushStackElement(), e.setCursorStates(t.source, 3, p.P.moveToBeginningOfBuffer(e, e.getCursorStates(), this._inSelectionMode)), e.revealPrimaryCursor(t.source, !0));
      }
    }
    ((e.CursorTop = (0, a.fK)(new k({
      inSelectionMode: !1,
      id: "cursorTop",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 2062,
        mac: {
          primary: 2064
        }
      }
    }))), (e.CursorTopSelect = (0, a.fK)(new k({
      inSelectionMode: !0,
      id: "cursorTopSelect",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 3086,
        mac: {
          primary: 3088
        }
      }
    }))));
    class L extends b {
      constructor(e) {
        (super(e), (this._inSelectionMode = e.inSelectionMode));
      }
      runCoreEditorCommand(e, t) {
        (e.model.pushStackElement(), e.setCursorStates(t.source, 3, p.P.moveToEndOfBuffer(e, e.getCursorStates(), this._inSelectionMode)), e.revealPrimaryCursor(t.source, !0));
      }
    }
    ((e.CursorBottom = (0, a.fK)(new L({
      inSelectionMode: !1,
      id: "cursorBottom",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 2061,
        mac: {
          primary: 2066
        }
      }
    }))), (e.CursorBottomSelect = (0, a.fK)(new L({
      inSelectionMode: !0,
      id: "cursorBottomSelect",
      precondition: void 0,
      kbOpts: {
        weight: 0,
        kbExpr: m.u.textInputFocus,
        primary: 3085,
        mac: {
          primary: 3090
        }
      }
    }))));
    class N extends b {
      constructor() {
        super({
          id: "editorScroll",
          precondition: void 0,
          description: w.description
        });
      }
      runCoreEditorCommand(e, t) {
        const i = w.parse(t);
        i && this._runEditorScroll(e, t.source, i);
      }
      _runEditorScroll(e, t, i) {
        const n = this._computeDesiredScrollTop(e, i);
        if (i.revealCursor) {
          const o = e.getCompletelyVisibleViewRangeAtScrollTop(n);
          e.setCursorStates(t, 3, [p.P.findPositionInViewportIfOutside(e, e.getPrimaryCursorState(), o, i.select)]);
        }
        e.setScrollTop(n, 0);
      }
      _computeDesiredScrollTop(e, t) {
        if (1 === t.unit) {
          const i = e.getCompletelyVisibleViewRange(),
            n = e.coordinatesConverter.convertViewRangeToModelRange(i);
          let o;
          o = 1 === t.direction ? Math.max(1, n.startLineNumber - t.value) : Math.min(e.model.getLineCount(), n.startLineNumber + t.value);
          const s = e.coordinatesConverter.convertModelPositionToViewPosition(new d.L(o, 1));
          return e.getVerticalOffsetForLineNumber(s.lineNumber);
        }
        let i;
        i = 3 === t.unit ? e.cursorConfig.pageSize * t.value : 4 === t.unit ? Math.round(e.cursorConfig.pageSize / 2) * t.value : t.value;
        const n = (1 === t.direction ? -1 : 1) * i;
        return e.getScrollTop() + n * e.cursorConfig.lineHeight;
      }
    }
    ((e.EditorScrollImpl = N), (e.EditorScroll = (0, a.fK)(new N())), (e.ScrollLineUp = (0, a.fK)(new (class extends b {
      constructor() {
        super({
          id: "scrollLineUp",
          precondition: void 0,
          kbOpts: {
            weight: 0,
            kbExpr: m.u.textInputFocus,
            primary: 2064,
            mac: {
              primary: 267
            }
          }
        });
      }
      runCoreEditorCommand(t, i) {
        e.EditorScroll._runEditorScroll(t, i.source, {
          direction: 1,
          unit: 2,
          value: 1,
          revealCursor: !1,
          select: !1
        });
      }
    })())), (e.ScrollPageUp = (0, a.fK)(new (class extends b {
      constructor() {
        super({
          id: "scrollPageUp",
          precondition: void 0,
          kbOpts: {
            weight: 0,
            kbExpr: m.u.textInputFocus,
            primary: 2059,
            win: {
              primary: 523
            },
            linux: {
              primary: 523
            }
          }
        });
      }
      runCoreEditorCommand(t, i) {
        e.EditorScroll._runEditorScroll(t, i.source, {
          direction: 1,
          unit: 3,
          value: 1,
          revealCursor: !1,
          select: !1
        });
      }
    })())), (e.ScrollLineDown = (0, a.fK)(new (class extends b {
      constructor() {
        super({
          id: "scrollLineDown",
          precondition: void 0,
          kbOpts: {
            weight: 0,
            kbExpr: m.u.textInputFocus,
            primary: 2066,
            mac: {
              primary: 268
            }
          }
        });
      }
      runCoreEditorCommand(t, i) {
        e.EditorScroll._runEditorScroll(t, i.source, {
          direction: 2,
          unit: 2,
          value: 1,
          revealCursor: !1,
          select: !1
        });
      }
    })())), (e.ScrollPageDown = (0, a.fK)(new (class extends b {
      constructor() {
        super({
          id: "scrollPageDown",
          precondition: void 0,
          kbOpts: {
            weight: 0,
            kbExpr: m.u.textInputFocus,
            primary: 2060,
            win: {
              primary: 524
            },
            linux: {
              primary: 524
            }
          }
        });
      }
      runCoreEditorCommand(t, i) {
        e.EditorScroll._runEditorScroll(t, i.source, {
          direction: 2,
          unit: 3,
          value: 1,
          revealCursor: !1,
          select: !1
        });
      }
    })())));
    class D extends b {
      constructor(e) {
        (super(e), (this._inSelectionMode = e.inSelectionMode));
      }
      runCoreEditorCommand(e, t) {
        (e.model.pushStackElement(), e.setCursorStates(t.source, 3, [p.P.word(e, e.getPrimaryCursorState(), this._inSelectionMode, t.position)]), e.revealPrimaryCursor(t.source, !0));
      }
    }
    ((e.WordSelect = (0, a.fK)(new D({
      inSelectionMode: !1,
      id: "_wordSelect",
      precondition: void 0
    }))), (e.WordSelectDrag = (0, a.fK)(new D({
      inSelectionMode: !0,
      id: "_wordSelectDrag",
      precondition: void 0
    }))), (e.LastCursorWordSelect = (0, a.fK)(new (class extends b {
      constructor() {
        super({
          id: "lastCursorWordSelect",
          precondition: void 0
        });
      }
      runCoreEditorCommand(e, t) {
        const i = e.getLastAddedCursorIndex(),
          n = e.getCursorStates(),
          o = n.slice(0),
          s = n[i];
        ((o[i] = p.P.word(e, s, s.modelState.hasSelection(), t.position)), e.model.pushStackElement(), e.setCursorStates(t.source, 3, o));
      }
    })())));
    class I extends b {
      constructor(e) {
        (super(e), (this._inSelectionMode = e.inSelectionMode));
      }
      runCoreEditorCommand(e, t) {
        (e.model.pushStackElement(), e.setCursorStates(t.source, 3, [p.P.line(e, e.getPrimaryCursorState(), this._inSelectionMode, t.position, t.viewPosition)]), e.revealPrimaryCursor(t.source, !1));
      }
    }
    ((e.LineSelect = (0, a.fK)(new I({
      inSelectionMode: !1,
      id: "_lineSelect",
      precondition: void 0
    }))), (e.LineSelectDrag = (0, a.fK)(new I({
      inSelectionMode: !0,
      id: "_lineSelectDrag",
      precondition: void 0
    }))));
    class E extends b {
      constructor(e) {
        (super(e), (this._inSelectionMode = e.inSelectionMode));
      }
      runCoreEditorCommand(e, t) {
        const i = e.getLastAddedCursorIndex(),
          n = e.getCursorStates(),
          o = n.slice(0);
        ((o[i] = p.P.line(e, n[i], this._inSelectionMode, t.position, t.viewPosition)), e.model.pushStackElement(), e.setCursorStates(t.source, 3, o));
      }
    }
    ((e.LastCursorLineSelect = (0, a.fK)(new E({
      inSelectionMode: !1,
      id: "lastCursorLineSelect",
      precondition: void 0
    }))), (e.LastCursorLineSelectDrag = (0, a.fK)(new E({
      inSelectionMode: !0,
      id: "lastCursorLineSelectDrag",
      precondition: void 0
    }))), (e.ExpandLineSelection = (0, a.fK)(new (class extends b {
      constructor() {
        super({
          id: "expandLineSelection",
          precondition: void 0,
          kbOpts: {
            weight: 0,
            kbExpr: m.u.textInputFocus,
            primary: 2090
          }
        });
      }
      runCoreEditorCommand(e, t) {
        (e.model.pushStackElement(), e.setCursorStates(t.source, 3, p.P.expandLineSelection(e, e.getCursorStates())), e.revealPrimaryCursor(t.source, !0));
      }
    })())), (e.CancelSelection = (0, a.fK)(new (class extends b {
      constructor() {
        super({
          id: "cancelSelection",
          precondition: m.u.hasNonEmptySelection,
          kbOpts: {
            weight: 0,
            kbExpr: m.u.textInputFocus,
            primary: 9,
            secondary: [1033]
          }
        });
      }
      runCoreEditorCommand(e, t) {
        (e.model.pushStackElement(), e.setCursorStates(t.source, 3, [p.P.cancelSelection(e, e.getPrimaryCursorState())]), e.revealPrimaryCursor(t.source, !0));
      }
    })())), (e.RemoveSecondaryCursors = (0, a.fK)(new (class extends b {
      constructor() {
        super({
          id: "removeSecondaryCursors",
          precondition: m.u.hasMultipleSelections,
          kbOpts: {
            weight: 1,
            kbExpr: m.u.textInputFocus,
            primary: 9,
            secondary: [1033]
          }
        });
      }
      runCoreEditorCommand(e, t) {
        (e.model.pushStackElement(), e.setCursorStates(t.source, 3, [e.getPrimaryCursorState()]), e.revealPrimaryCursor(t.source, !0), (0, r.i7)(n.N("removedCursor", "Removed secondary cursors")));
      }
    })())), (e.RevealLine = (0, a.fK)(new (class extends b {
      constructor() {
        super({
          id: "revealLine",
          precondition: void 0,
          description: y.description
        });
      }
      runCoreEditorCommand(e, t) {
        const i = t,
          n = i.lineNumber || 0;
        let o = "number" == typeof n ? n + 1 : parseInt(n) + 1;
        o < 1 && (o = 1);
        const s = e.model.getLineCount();
        o > s && (o = s);
        const r = new h.e(o, 1, o, e.model.getLineMaxColumn(o));
        let a = 0;
        if (i.at) switch (i.at) {
          case y.RawAtArgument.Top:
            a = 3;
            break;
          case y.RawAtArgument.Center:
            a = 1;
            break;
          case y.RawAtArgument.Bottom:
            a = 4;
        }
        const l = e.coordinatesConverter.convertModelRangeToViewRange(r);
        e.revealRange(t.source, !1, l, a, 0);
      }
    })())), (e.SelectAll = new (class extends x {
      constructor() {
        super(a.Sq);
      }
      runDOMCommand() {
        (o.vU && (document.activeElement.focus(), document.activeElement.select()), document.execCommand("selectAll"));
      }
      runEditorCommand(e, t, i) {
        const n = t._getViewModel();
        n && this.runCoreEditorCommand(n, i);
      }
      runCoreEditorCommand(e, t) {
        (e.model.pushStackElement(), e.setCursorStates("keyboard", 3, [p.P.selectAll(e, e.getPrimaryCursorState())]));
      }
    })()), (e.SetSelection = (0, a.fK)(new (class extends b {
      constructor() {
        super({
          id: "setSelection",
          precondition: void 0
        });
      }
      runCoreEditorCommand(e, t) {
        (e.model.pushStackElement(), e.setCursorStates(t.source, 3, [c.Vi.fromModelSelection(t.selection)]));
      }
    })())));
  })(C || (C = {}));
  const S = v.Ao.and(m.u.textInputFocus, m.u.columnSelection);
  function k(e, t) {
    _.W.registerKeybindingRule({
      id: e,
      primary: t,
      when: S,
      weight: 1
    });
  }
  function L(e) {
    return (e.register(), e);
  }
  var N;
  (k(C.CursorColumnSelectLeft.id, 1039), k(C.CursorColumnSelectRight.id, 1041), k(C.CursorColumnSelectUp.id, 1040), k(C.CursorColumnSelectPageUp.id, 1035), k(C.CursorColumnSelectDown.id, 1042), k(C.CursorColumnSelectPageDown.id, 1036), (function (e) {
    class t extends a._l {
      runEditorCommand(e, t, i) {
        const n = t._getViewModel();
        n && this.runCoreEditingCommand(t, n, i || {});
      }
    }
    ((e.CoreEditingCommand = t), (e.LineBreakInsert = (0, a.fK)(new (class extends t {
      constructor() {
        super({
          id: "lineBreakInsert",
          precondition: m.u.writable,
          kbOpts: {
            weight: 0,
            kbExpr: m.u.textInputFocus,
            primary: 0,
            mac: {
              primary: 301
            }
          }
        });
      }
      runCoreEditingCommand(e, t, i) {
        (e.pushUndoStop(), e.executeCommands(this.id, f.u.lineBreakInsert(t.cursorConfig, t.model, t.getCursorStates().map(e => e.modelState.selection))));
      }
    })())), (e.Outdent = (0, a.fK)(new (class extends t {
      constructor() {
        super({
          id: "outdent",
          precondition: m.u.writable,
          kbOpts: {
            weight: 0,
            kbExpr: v.Ao.and(m.u.editorTextFocus, m.u.tabDoesNotMoveFocus),
            primary: 1026
          }
        });
      }
      runCoreEditingCommand(e, t, i) {
        (e.pushUndoStop(), e.executeCommands(this.id, f.u.outdent(t.cursorConfig, t.model, t.getCursorStates().map(e => e.modelState.selection))), e.pushUndoStop());
      }
    })())), (e.Tab = (0, a.fK)(new (class extends t {
      constructor() {
        super({
          id: "tab",
          precondition: m.u.writable,
          kbOpts: {
            weight: 0,
            kbExpr: v.Ao.and(m.u.editorTextFocus, m.u.tabDoesNotMoveFocus),
            primary: 2
          }
        });
      }
      runCoreEditingCommand(e, t, i) {
        (e.pushUndoStop(), e.executeCommands(this.id, f.u.tab(t.cursorConfig, t.model, t.getCursorStates().map(e => e.modelState.selection))), e.pushUndoStop());
      }
    })())), (e.DeleteLeft = (0, a.fK)(new (class extends t {
      constructor() {
        super({
          id: "deleteLeft",
          precondition: void 0,
          kbOpts: {
            weight: 0,
            kbExpr: m.u.textInputFocus,
            primary: 1,
            secondary: [1025],
            mac: {
              primary: 1,
              secondary: [1025, 294, 257]
            }
          }
        });
      }
      runCoreEditingCommand(e, t, i) {
        const [n, o] = g.A.deleteLeft(t.getPrevEditOperationType(), t.cursorConfig, t.model, t.getCursorStates().map(e => e.modelState.selection), t.getCursorAutoClosedCharacters());
        (n && e.pushUndoStop(), e.executeCommands(this.id, o), t.setPrevEditOperationType(2));
      }
    })())), (e.DeleteRight = (0, a.fK)(new (class extends t {
      constructor() {
        super({
          id: "deleteRight",
          precondition: void 0,
          kbOpts: {
            weight: 0,
            kbExpr: m.u.textInputFocus,
            primary: 20,
            mac: {
              primary: 20,
              secondary: [290, 276]
            }
          }
        });
      }
      runCoreEditingCommand(e, t, i) {
        const [n, o] = g.A.deleteRight(t.getPrevEditOperationType(), t.cursorConfig, t.model, t.getCursorStates().map(e => e.modelState.selection));
        (n && e.pushUndoStop(), e.executeCommands(this.id, o), t.setPrevEditOperationType(3));
      }
    })())), (e.Undo = new (class extends x {
      constructor() {
        super(a.n_);
      }
      runDOMCommand() {
        document.execCommand("undo");
      }
      runEditorCommand(e, t, i) {
        if (t.hasModel() && !0 !== t.getOption(80)) return t.getModel().undo();
      }
    })()), (e.Redo = new (class extends x {
      constructor() {
        super(a.kz);
      }
      runDOMCommand() {
        document.execCommand("redo");
      }
      runEditorCommand(e, t, i) {
        if (t.hasModel() && !0 !== t.getOption(80)) return t.getModel().redo();
      }
    })()));
  })(N || (N = {})));
  class D extends a.mY {
    constructor(e, t, i) {
      (super({
        id: e,
        precondition: void 0,
        description: i
      }), (this._handlerId = t));
    }
    runCommand(e, t) {
      const i = e.get(l.$).getFocusedCodeEditor();
      i && i.trigger("keyboard", this._handlerId, t);
    }
  }
  function I(e, t) {
    (L(new D("default:" + e, e)), L(new D(e, e, t)));
  }
  const Lg = new Language(modifyState.language);
  (I("type", {
    description: Lg.type(),
    args: [{
      name: "args",
      schema: {
        type: "object",
        required: ["text"],
        properties: {
          text: {
            type: "string"
          }
        }
      }
    }]
  }), I("replacePreviousChar"), I("compositionType"), I("compositionStart"), I("compositionEnd"), I("paste"), I("cut"));
};