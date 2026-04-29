module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    $V: () => d,
    VZ: () => s,
    in: () => r,
    kw: () => c
  });
  var n = i(4669),
    o = i(5976);
  const s = (0, i(72065).yh)("logService");
  var r;
  !(function (e) {
    ((e[(e.Trace = 0)] = "Trace"), (e[(e.Debug = 1)] = "Debug"), (e[(e.Info = 2)] = "Info"), (e[(e.Warning = 3)] = "Warning"), (e[(e.Error = 4)] = "错误"), (e[(e.Critical = 5)] = "Critical"), (e[(e.Off = 6)] = "Off"));
  })(r || (r = {}));
  const a = r.Info;
  class l extends o.JT {
    constructor() {
      (super(...arguments), (this.level = a), (this._onDidChangeLogLevel = this._register(new n.Q5())));
    }
    setLevel(e) {
      this.level !== e && ((this.level = e), this._onDidChangeLogLevel.fire(this.level));
    }
    getLevel() {
      return this.level;
    }
  }
  class c extends l {
    constructor(e = a) {
      (super(), this.setLevel(e));
    }
    trace(e, ...t) {
      this.getLevel() <= r.Trace && console.log("%cTRACE", "color: #888", e, ...t);
    }
    debug(e, ...t) {
      this.getLevel() <= r.Debug && console.log("%cDEBUG", "background: #eee; color: #888", e, ...t);
    }
    info(e, ...t) {
      this.getLevel() <= r.Info && console.log("%c INFO", "color: #33f", e, ...t);
    }
    error(e, ...t) {
      this.getLevel() <= r.Error && console.log("%c  ERR", "color: #f33", e, ...t);
    }
    dispose() {}
  }
  class d extends o.JT {
    constructor(e) {
      (super(), (this.logger = e), this._register(e));
    }
    getLevel() {
      return this.logger.getLevel();
    }
    trace(e, ...t) {
      this.logger.trace(e, ...t);
    }
    debug(e, ...t) {
      this.logger.debug(e, ...t);
    }
    info(e, ...t) {
      this.logger.info(e, ...t);
    }
    error(e, ...t) {
      this.logger.error(e, ...t);
    }
  }
};