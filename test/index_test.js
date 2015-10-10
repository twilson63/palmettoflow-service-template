var test = require('tap').test

var newEvent = require('palmettoflow-event').newEvent
var palmetto = require('palmettoflow-nodejs')
var ee = palmetto()

var svc = require('../')
svc(ee)

test('echo service should return my request', function (t) {
  var ne = newEvent('demo', 'echo', { hello: 'world'})
  ee.on(ne.from, function (e) {
    t.equals(e.object.hello, 'world')
    t.end()
  })
  ee.emit('send', ne)
})