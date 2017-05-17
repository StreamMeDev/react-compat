/* global describe, it, before */
var assert = require('assert')
var React = require('react')
var propTypes = require('prop-types')
var TestRenderer = require('react-test-renderer/shallow')
var reactCompat = require('../')

describe('react-compat', function () {
  var renderer
  before(function () {
    renderer = new TestRenderer()
  })

  it('should createClass', function () {
    var C = React.createFactory(reactCompat.createClass({
      render: function () {
        return React.createElement('div')
      }
    }))
    renderer.render(C())
    var c = renderer.getRenderOutput()
    assert.equal(c.type, 'div')
  })

  it('should have PropTypes', function () {
    assert.equal(reactCompat.PropTypes, propTypes)
  })

  it('should have a refSet function', function () {
    assert.equal(typeof reactCompat.refSet, 'function')
    assert.equal(typeof reactCompat.refSet({}, 'foo'), 'function')
    var o = {}
    reactCompat.refSet(o, 'foo')
    assert.equal(typeof o.__setReffoo, 'function')
    o.__setReffoo('bar')
    assert.equal(o.__reffoo, 'bar')
  })

  it('should have a refGet function', function () {
    assert.equal(typeof reactCompat.refGet, 'function')
    assert.equal(typeof reactCompat.refGet({}, 'foo'), 'undefined')
    var o = {}
    reactCompat.refSet(o, 'foo')
    o.__setReffoo('bar')
    assert.equal(reactCompat.refGet(o, 'foo'), 'bar')
  })
})
