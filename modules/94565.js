module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    H: () => l,
    P: () => c
  });
  var n = i(4669),
    o = i(53725),
    s = i(5976),
    r = i(91741),
    a = i(98401);
  const l = (0, i(72065).yh)("commandService"),
    c = new (class {
      constructor() {
        ((this._commands = new Map()), (this._onDidRegisterCommand = new n.Q5()), (this.onDidRegisterCommand = this._onDidRegisterCommand.event));
      }
      registerCommand(e, t) {
        if (!e) throw new Error("invalid command");
        if ("string" == typeof e) {
          if (!t) throw new Error("invalid command");
          return this.registerCommand({
            id: e,
            handler: t
          });
        }
        if (e.description) {
          const t = [];
          for (let i of e.description.args) t.push(i.constraint);
          const i = e.handler;
          e.handler = function (e, ...n) {
            return ((0, a.D8)(n, t), i(e, ...n));
          };
        }
        const {
          id: i
        } = e;
        let n = this._commands.get(i);
        n || ((n = new r.S()), this._commands.set(i, n));
        let o = n.unshift(e),
          l = (0, s.OF)(() => {
            o();
            const e = this._commands.get(i);
            (null == e ? void 0 : e.isEmpty()) && this._commands.delete(i);
          });
        return (this._onDidRegisterCommand.fire(i), l);
      }
      registerCommandAlias(e, t) {
        return c.registerCommand(e, (e, ...i) => e.get(l).executeCommand(t, ...i));
      }
      getCommand(e) {
        const t = this._commands.get(e);
        if (t && !t.isEmpty()) return o.$.first(t);
      }
      getCommands() {
        const e = new Map();
        for (const t of this._commands.keys()) {
          const i = this.getCommand(t);
          i && e.set(t, i);
        }
        return e;
      }
    })();
  c.registerCommand("noop", () => {});
};