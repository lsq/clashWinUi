module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    default: () => s
  }));
  var n = i(54265),
    o = {};
  n.keys().forEach(function (e) {
    "./index.js" !== e && (o[e.replace(/(\.\/|\.js)/g, "")] = n(e).default);
  });
  const s = o;
};