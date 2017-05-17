/* global describe, it */
var assert = require('assert')
var React = require('react')
var ReactDOM = require('react-dom')
var util = require('react-dom/test-utils')
var Component = React.createFactory(require('./component'))

describe('react-compat react@15.5.0', function () {
  it('render and simulate a click', function (done) {
    var el = util.renderIntoDocument(Component({
      onClick: function (domEl) {
        assert.equal(domEl.nodeName, 'DIV')
        assert.equal(domEl.className, 'foo')
        done()
      }
    }))
    util.Simulate.click(ReactDOM.findDOMNode(el))
  })
})
