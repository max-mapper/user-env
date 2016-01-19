module.exports = function () {
  var env = require('child_process').execSync('sudo -Hiu ' + process.env.USER + ' env').toString()
  if (env) {
    var obj = {}
    env.split('\n').forEach(function (l) {
      var kv = l.split('=')
      var k = kv[0]
      var v = kv.slice(1).join('')
      obj[k] = v
    })
  }
  return obj
}
