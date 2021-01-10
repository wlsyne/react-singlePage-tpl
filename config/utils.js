const os = require('os');
const path = require('path');
const _root = path.resolve(__dirname, '..');

/**
 * Get ip(v4) address
 * @return {String} the ipv4 address or 'localhost'
 */
const getIP = function () {
  var ifaces = os.networkInterfaces();
  var ip = '';
  for (var dev in ifaces) {
    ifaces[dev].forEach(function (details) {
      if (ip === '' && details.family === 'IPv4' && !details.internal) {
        ip = details.address;
        return;
      }
    });
  }
  return ip || "127.0.0.1";
};

const root = function (...args) {
  return path.join(...[_root].concat(args));
}

module.exports = { getIP, root };