/* global describe, it */
var assert = require('assert')
var React = require('react/addons')
var util = React.addons.TestUtils
var Component = React.createFactory(require('./component'))

describe('react-compat react@0.13.0', function () {
  it('render and simulate a click', function (done) {
    var el = util.renderIntoDocument(Component({
      onClick: function (domEl) {
        assert.equal(domEl.nodeName, 'DIV')
        assert.equal(domEl.className, 'foo')
        done()
      }
    }))
    util.Simulate.click(el.getDOMNode())
  })
})
