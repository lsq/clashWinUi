module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z: () => n
  });
  const n = 'function FindProxyForURL(url, host) {\n  return "PROXY 127.0.0.1:%mixed-port%; SOCKS5 127.0.0.1:%mixed-port%; DIRECT;"\n}';
};