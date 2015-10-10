var response = require('palmettoflow-event').response

module.exports = function (ee) {
  ee.on('/demo/echo', function (e) {
    // echo to the requester
    ee.emit('send', response(e, e.object))
  })
}