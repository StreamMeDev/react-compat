var React = require('react')
var reactCompat = require('@streammedev/react-compat')

module.exports = reactCompat.createClass({
  propTypes: {
    onClick: reactCompat.PropTypes.func.isRequired
  },
  render: function () {
    return React.createElement('div', {
      ref: reactCompat.refSet(this, 'foo'),
      className: 'foo',
      onClick: this.onClick
    })
  },
  onClick: function () {
    this.props.onClick(reactCompat.refGet(this, 'foo'))
  }
})
