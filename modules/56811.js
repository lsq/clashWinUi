module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    T: () => r
  });
  var n = i(65321),
    o = i(73046);
  const s = new RegExp(`(\\\\)?\\$\\((${o.dT.iconNameExpression}(?:${o.dT.iconModifierExpression})?)\\)`, "g");
  function r(e) {
    const t = new Array();
    let i,
      n = 0,
      o = 0;
    for (; null !== (i = s.exec(e));) {
      ((o = i.index || 0), t.push(e.substring(n, o)), (n = (i.index || 0) + i[0].length));
      const [, s, r] = i;
      t.push(s ? `$(${r})` : a({
        id: r
      }));
    }
    return (n < e.length && t.push(e.substring(n)), t);
  }
  function a(e) {
    const t = n.$("span");
    return (t.classList.add(...o.dT.asClassNameArray(e)), t);
  }
};