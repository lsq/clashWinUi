module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    D: () => s
  });
  var n = i(16268),
    o = i(1432);
  const s = {
    clipboard: {
      writeText: o.tY || (document.queryCommandSupported && document.queryCommandSupported("copy")) || !!(navigator && navigator.clipboard && navigator.clipboard.writeText),
      readText: o.tY || !!(navigator && navigator.clipboard && navigator.clipboard.readText)
    },
    keyboard: o.tY || n.$W ? 0 : navigator.keyboard || n.G6 ? 1 : 2,
    touch: "ontouchstart" in window || navigator.maxTouchPoints > 0,
    pointerEvents: window.PointerEvent && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0)
  };
};