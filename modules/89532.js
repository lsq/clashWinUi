module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    EU: () => o,
    Yl: () => s,
    wZ: () => a,
    yN: () => n
  });
  class n {
    constructor(e) {
      this.value = e;
    }
    equals(e) {
      return this.value === e.value;
    }
    contains(e) {
      return (this.equals(e) || "" === this.value || e.value.startsWith(this.value + n.sep));
    }
    intersects(e) {
      return this.contains(e) || e.contains(this);
    }
    append(e) {
      return new n(this.value + n.sep + e);
    }
  }
  function o(e, t) {
    return (!(e.include && !e.include.intersects(t)) && (!e.excludes || !e.excludes.some(i => r(t, i, e.include))) && !(!e.includeSourceActions && n.Source.contains(t)));
  }
  function s(e, t) {
    const i = t.kind ? new n(t.kind) : void 0;
    return (!!(!e.include || (i && e.include.contains(i))) && !(e.excludes && i && e.excludes.some(t => r(i, t, e.include))) && !(!e.includeSourceActions && i && n.Source.contains(i)) && !(e.onlyIncludePreferredActions && !t.isPreferred));
  }
  function r(e, t, i) {
    return !!t.contains(e) && (!i || !t.contains(i));
  }
  ((n.sep = "."), (n.None = new n("@@none@@")), (n.Empty = new n("")), (n.QuickFix = new n("quickfix")), (n.Refactor = new n("refactor")), (n.Source = new n("source")), (n.SourceOrganizeImports = n.Source.append("organizeImports")), (n.SourceFixAll = n.Source.append("fixAll")));
  class a {
    constructor(e, t, i) {
      ((this.kind = e), (this.apply = t), (this.preferred = i));
    }
    static fromUser(e, t) {
      return e && "object" == typeof e ? new a(a.getKindFromUser(e, t.kind), a.getApplyFromUser(e, t.apply), a.getPreferredUser(e)) : new a(t.kind, t.apply, !1);
    }
    static getApplyFromUser(e, t) {
      switch ("string" == typeof e.apply ? e.apply.toLowerCase() : "") {
        case "first":
          return "first";
        case "never":
          return "never";
        case "ifsingle":
          return "ifSingle";
        default:
          return t;
      }
    }
    static getKindFromUser(e, t) {
      return "string" == typeof e.kind ? new n(e.kind) : t;
    }
    static getPreferredUser(e) {
      return "boolean" == typeof e.preferred && e.preferred;
    }
  }
};