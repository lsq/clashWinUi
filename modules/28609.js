module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    a: () => o
  });
  var n = i(73046);
  (i(93998), i(36709));
  function o(e) {
    let t = e.definition;
    for (; t instanceof n.lA;) t = t.definition;
    return `.codicon-${e.id}:before { content: '${t.fontCharacter}'; }`;
  }
};