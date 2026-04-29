module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z: () => l
  });
  var n = i(65321),
    o = i(41264),
    s = i(36248),
    r = i(97295);
  i(74965);
  const a = {
    badgeBackground: o.Il.fromHex("#4D4D4D"),
    badgeForeground: o.Il.fromHex("#FFFFFF")
  };
  class l {
    constructor(e, t) {
      ((this.count = 0), (this.options = t || Object.create(null)), (0, s.jB)(this.options, a, !1), (this.badgeBackground = this.options.badgeBackground), (this.badgeForeground = this.options.badgeForeground), (this.badgeBorder = this.options.badgeBorder), (this.element = (0, n.R3)(e, (0, n.$)(".monaco-count-badge"))), (this.countFormat = this.options.countFormat || "{0}"), (this.titleFormat = this.options.titleFormat || ""), this.setCount(this.options.count || 0));
    }
    setCount(e) {
      ((this.count = e), this.render());
    }
    setTitleFormat(e) {
      ((this.titleFormat = e), this.render());
    }
    render() {
      ((this.element.textContent = (0, r.WU)(this.countFormat, this.count)), (this.element.title = (0, r.WU)(this.titleFormat, this.count)), this.applyStyles());
    }
    style(e) {
      ((this.badgeBackground = e.badgeBackground), (this.badgeForeground = e.badgeForeground), (this.badgeBorder = e.badgeBorder), this.applyStyles());
    }
    applyStyles() {
      if (this.element) {
        const e = this.badgeBackground ? this.badgeBackground.toString() : "",
          t = this.badgeForeground ? this.badgeForeground.toString() : "",
          i = this.badgeBorder ? this.badgeBorder.toString() : "";
        ((this.element.style.backgroundColor = e), (this.element.style.color = t), (this.element.style.borderWidth = i ? "1px" : ""), (this.element.style.borderStyle = i ? "solid" : ""), (this.element.style.borderColor = i));
      }
    }
  }
};