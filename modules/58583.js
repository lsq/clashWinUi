module.exports = (e, t, i) => {
  var n;
  ((self.MonacoEnvironment = ((n = {
    editorWorkerService: "editor.worker.js"
  }), {
    globalAPI: !1,
    getWorkerUrl: function (e, t) {
      var o = i.p,
        s = (o ? o.replace(/\/$/, "") + "/" : "") + n[t];
      if (/^((http:)|(https:)|(file:)|(\/\/))/.test(s)) {
        var r = String(window.location),
          a = r.substr(0, r.length - window.location.hash.length - window.location.search.length - window.location.pathname.length);
        if (s.substring(0, a.length) !== a) {
          /^(\/\/)/.test(s) && (s = window.location.protocol + s);
          var l = new Blob(["/*" + t + '*/importScripts("' + s + '");'], {
            type: "application/javascript"
          });
          return URL.createObjectURL(l);
        }
      }
      return s;
    }
  })), i(29477), i(17355), i(17084), i(84594), i(62015), i(9093), i(53832), i(77956), i(89098), i(76522), i(18728), i(42834), i(7441), i(81372), i(92142), i(62943), i(23111), i(44818), i(42698), i(62097), i(92729), i(10365), i(67247), i(19646), i(83554), i(80638), i(87586), i(43818), i(97830), i(42408), i(80674), i(34800), i(38486), i(40517), i(97720), i(78944), i(98936), i(45048), i(4454), i(81955), i(93379), i(88250), i(15662), i(19720), i(77847), i(31725), i(70185), i(43497), i(99453), i(60661), (e.exports = i(86211)), i(94199), i(43763), i(83187));
};