module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    AJ: () => b,
    QG: () => I,
    Qr: () => N,
    R6: () => C,
    Sq: () => P,
    Uc: () => n,
    _K: () => E,
    _l: () => y,
    f: () => k,
    fK: () => L,
    jY: () => x,
    kz: () => O,
    mY: () => _,
    n_: () => A,
    rn: () => D,
    sb: () => S
  });
  var n,
    o = i(63580),
    s = i(70666),
    r = i(11640),
    a = i(50187),
    l = i(51200),
    c = i(88216),
    d = i(84144),
    h = i(94565),
    u = i(38819),
    g = i(49989),
    p = i(89872),
    f = i(10829),
    m = i(98401),
    v = i(43557);
  class _ {
    constructor(e) {
      ((this.id = e.id), (this.precondition = e.precondition), (this._kbOpts = e.kbOpts), (this._menuOpts = e.menuOpts), (this._description = e.description));
    }
    register() {
      if ((Array.isArray(this._menuOpts) ? this._menuOpts.forEach(this._registerMenuItem, this) : this._menuOpts && this._registerMenuItem(this._menuOpts), this._kbOpts)) {
        const e = Array.isArray(this._kbOpts) ? this._kbOpts : [this._kbOpts];
        for (const t of e) {
          let e = t.kbExpr;
          this.precondition && (e = e ? u.Ao.and(e, this.precondition) : this.precondition);
          const i = {
            id: this.id,
            weight: t.weight,
            args: t.args,
            when: e,
            primary: t.primary,
            secondary: t.secondary,
            win: t.win,
            linux: t.linux,
            mac: t.mac
          };
          g.W.registerKeybindingRule(i);
        }
      }
      h.P.registerCommand({
        id: this.id,
        handler: (e, t) => this.runCommand(e, t),
        description: this._description
      });
    }
    _registerMenuItem(e) {
      d.BH.appendMenuItem(e.menuId, {
        group: e.group,
        command: {
          id: this.id,
          title: e.title,
          icon: e.icon,
          precondition: this.precondition
        },
        when: e.when,
        order: e.order
      });
    }
  }
  class b extends _ {
    constructor() {
      (super(...arguments), (this._implementations = []));
    }
    addImplementation(e, t, i) {
      return (this._implementations.push({
        priority: e,
        name: t,
        implementation: i
      }), this._implementations.sort((e, t) => t.priority - e.priority), {
        dispose: () => {
          for (let e = 0; e < this._implementations.length; e++) if (this._implementations[e].implementation === i) return void this._implementations.splice(e, 1);
        }
      });
    }
    runCommand(e, t) {
      const i = e.get(v.VZ);
      i.trace(`Executing Command '${this.id}' which has ${this._implementations.length} bound.`);
      for (const n of this._implementations) {
        const o = n.implementation(e, t);
        if (o) {
          if ((i.trace(`Command '${this.id}' was handled by '${n.name}'.`), "boolean" == typeof o)) return;
          return o;
        }
      }
      i.trace(`The Command '${this.id}' was not handled by any implementation.`);
    }
  }
  class w extends _ {
    constructor(e, t) {
      (super(t), (this.command = e));
    }
    runCommand(e, t) {
      return this.command.runCommand(e, t);
    }
  }
  class y extends _ {
    static bindToContribution(e) {
      return class extends y {
        constructor(e) {
          (super(e), (this._callback = e.handler));
        }
        runEditorCommand(t, i, n) {
          e(i) && this._callback(e(i), n);
        }
      };
    }
    runCommand(e, t) {
      const i = e.get(r.$),
        n = i.getFocusedCodeEditor() || i.getActiveCodeEditor();
      if (n) return n.invokeWithinContext(e => {
        if (e.get(u.i6).contextMatchesRules((0, m.f6)(this.precondition))) return this.runEditorCommand(e, n, t);
      });
    }
  }
  class C extends y {
    constructor(e) {
      (super(C.convertOptions(e)), (this.label = e.label), (this.alias = e.alias));
    }
    static convertOptions(e) {
      let t;
      function i(t) {
        return (t.menuId || (t.menuId = d.eH.EditorContext), t.title || (t.title = e.label), (t.when = u.Ao.and(e.precondition, t.when)), t);
      }
      return ((t = Array.isArray(e.menuOpts) ? e.menuOpts : e.menuOpts ? [e.menuOpts] : []), Array.isArray(e.contextMenuOpts) ? t.push(...e.contextMenuOpts.map(i)) : e.contextMenuOpts && t.push(i(e.contextMenuOpts)), (e.menuOpts = t), e);
    }
    runEditorCommand(e, t, i) {
      return (this.reportTelemetry(e, t), this.run(e, t, i || {}));
    }
    reportTelemetry(e, t) {
      e.get(f.b).publicLog2("editorActionInvoked", {
        name: this.label,
        id: this.id
      });
    }
  }
  class x extends C {
    constructor() {
      (super(...arguments), (this._implementations = []));
    }
    addImplementation(e, t) {
      return (this._implementations.push([e, t]), this._implementations.sort((e, t) => t[0] - e[0]), {
        dispose: () => {
          for (let e = 0; e < this._implementations.length; e++) if (this._implementations[e][1] === t) return void this._implementations.splice(e, 1);
        }
      });
    }
    run(e, t, i) {
      for (const n of this._implementations) {
        const o = n[1](e, t, i);
        if (o) {
          if ("boolean" == typeof o) return;
          return o;
        }
      }
    }
  }
  function S(e, t) {
    h.P.registerCommand(e, function (e, ...i) {
      const [n, o] = i;
      ((0, m.p_)(s.o.isUri(n)), (0, m.p_)(a.L.isIPosition(o)));
      const r = e.get(l.q).getModel(n);
      if (r) {
        const e = a.L.lift(o);
        return t(r, e, ...i.slice(2));
      }
      return e.get(c.S).createModelReference(n).then(e => new Promise((n, s) => {
        try {
          n(t(e.object.textEditorModel, a.L.lift(o), i.slice(2)));
        } catch (e) {
          s(e);
        }
      }).finally(() => {
        e.dispose();
      }));
    });
  }
  function k(e, t) {
    h.P.registerCommand(e, function (e, ...i) {
      const [n] = i;
      (0, m.p_)(s.o.isUri(n));
      const o = e.get(l.q).getModel(n);
      return o ? t(o, ...i.slice(1)) : e.get(c.S).createModelReference(n).then(e => new Promise((n, o) => {
        try {
          n(t(e.object.textEditorModel, i.slice(1)));
        } catch (e) {
          o(e);
        }
      }).finally(() => {
        e.dispose();
      }));
    });
  }
  function L(e) {
    return (T.INSTANCE.registerEditorCommand(e), e);
  }
  function N(e) {
    const t = new e();
    return (T.INSTANCE.registerEditorAction(t), t);
  }
  function D(e) {
    return (T.INSTANCE.registerEditorAction(e), e);
  }
  function I(e) {
    T.INSTANCE.registerEditorAction(e);
  }
  function E(e, t) {
    T.INSTANCE.registerEditorContribution(e, t);
  }
  !(function (e) {
    ((e.getEditorCommand = function (e) {
      return T.INSTANCE.getEditorCommand(e);
    }), (e.getEditorActions = function () {
      return T.INSTANCE.getEditorActions();
    }), (e.getEditorContributions = function () {
      return T.INSTANCE.getEditorContributions();
    }), (e.getSomeEditorContributions = function (e) {
      return T.INSTANCE.getEditorContributions().filter(t => e.indexOf(t.id) >= 0);
    }), (e.getDiffEditorContributions = function () {
      return T.INSTANCE.getDiffEditorContributions();
    }));
  })(n || (n = {}));
  class T {
    constructor() {
      ((this.editorContributions = []), (this.diffEditorContributions = []), (this.editorActions = []), (this.editorCommands = Object.create(null)));
    }
    registerEditorContribution(e, t) {
      this.editorContributions.push({
        id: e,
        ctor: t
      });
    }
    getEditorContributions() {
      return this.editorContributions.slice(0);
    }
    getDiffEditorContributions() {
      return this.diffEditorContributions.slice(0);
    }
    registerEditorAction(e) {
      (e.register(), this.editorActions.push(e));
    }
    getEditorActions() {
      return this.editorActions.slice(0);
    }
    registerEditorCommand(e) {
      (e.register(), (this.editorCommands[e.id] = e));
    }
    getEditorCommand(e) {
      return this.editorCommands[e] || null;
    }
  }
  function M(e) {
    return (e.register(), e);
  }
  ((T.INSTANCE = new T()), p.B.add("editor.contributions", T.INSTANCE));
  const A = M(new b({
    id: "undo",
    precondition: void 0,
    kbOpts: {
      weight: 0,
      primary: 2104
    },
    menuOpts: [{
      menuId: d.eH.MenubarEditMenu,
      group: "1_do",
      title: o.N({
        key: "miUndo",
        comment: ["&& denotes a mnemonic"]
      }, "&&Undo"),
      order: 1
    }, {
      menuId: d.eH.CommandPalette,
      group: "",
      title: o.N("undo", "Undo"),
      order: 1
    }]
  }));
  M(new w(A, {
    id: "default:undo",
    precondition: void 0
  }));
  const O = M(new b({
    id: "redo",
    precondition: void 0,
    kbOpts: {
      weight: 0,
      primary: 2103,
      secondary: [3128],
      mac: {
        primary: 3128
      }
    },
    menuOpts: [{
      menuId: d.eH.MenubarEditMenu,
      group: "1_do",
      title: o.N({
        key: "miRedo",
        comment: ["&& denotes a mnemonic"]
      }, "&&Redo"),
      order: 2
    }, {
      menuId: d.eH.CommandPalette,
      group: "",
      title: o.N("redo", "Redo"),
      order: 1
    }]
  }));
  M(new w(O, {
    id: "default:redo",
    precondition: void 0
  }));
  const P = M(new b({
    id: "editor.action.selectAll",
    precondition: void 0,
    kbOpts: {
      weight: 0,
      kbExpr: null,
      primary: 2079
    },
    menuOpts: [{
      menuId: d.eH.MenubarSelectionMenu,
      group: "1_basic",
      title: o.N({
        key: "miSelectAll",
        comment: ["&& denotes a mnemonic"]
      }, "&&Select All"),
      order: 1
    }, {
      menuId: d.eH.CommandPalette,
      group: "",
      title: o.N("selectAll", "Select All"),
      order: 1
    }]
  }));
};