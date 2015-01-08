
var DEFAULT_PROTOCOL = 'http:'
var DEFAULT_PORT = 2000

module.exports = function (addr) {
  addr = addr || {}
  if (typeof addr == 'string'){
    var parts = addr.split(':')
    if (parts.length === 3)
      addr = { protocol: parts[0]+':', host: parts[1].slice(2), port: parts[2]}
    else if (parts .length === 2)
      addr = { host: parts[0], port: parts[1] }
    else
      addr = { host: parts[0] }
  }
  if (!addr.protocol) addr.protocol = DEFAULT_PROTOCOL
  if (!addr.host) throw new Error('BadParam - no host:String or {.host:String}')
  if (!addr.port || +addr.port != addr.port) addr.port = DEFAULT_PORT
  addr.domain = addr.protocol+'//'+addr.host+':'+addr.port
  return addr
}