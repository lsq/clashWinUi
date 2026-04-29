module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z: () => a
  });
  var n = i(70538),
    o = i(23321),
    s = i.n(o),
    r = i(11068);
  n.ZP.use(s());
  const a = new (s().Store)({
    modules: r.default,
    strict: !1,
    plugins: [function (e) {
      e.subscribe(function (t) {
        ["CHANGE_PROFILES", "CHANGE_PROFILES_INDEX", "CHANGE_PROFILE", "APPEND_PROFILE", "DELETE_PROFILE"].includes(t.type) && e.commit("SAVE_PROFILES");
      });
    }]
  });
};