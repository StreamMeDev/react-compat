var React = require('react')
var semver = require('semver')

var _createReactClass
var _propTypes
var _refSet
var _refGet

// Hack for future support of react without React.createClass
if (semver.satisfies(React.version, '>=15.5.0')) {
  _createReactClass = require('create' + '-react-class')
  _propTypes = require('prop' + '-types')
} else {
  _createReactClass = React.createClass
  _propTypes = React.PropTypes
}

// Refs are handled different ways in different versions of react
if (semver.satisfies(React.version, '>=0.14.0')) {
  _refSet = function (_this, refName) {
    _this['__setRef' + refName] = _this['__setRef' + refName] || function (ref) {
      _this['__ref' + refName] = ref
    }
    return _this['__setRef' + refName]
  }
  _refGet = function (_this, refName) {
    return _this['__ref' + refName]
  }
} else if (semver.satisfies(React.version, '>=0.13.0')) {
  _refSet = function (_this, refName) {
    _this['__setRef' + refName] = _this['__setRef' + refName] || function (ref) {
      _this['__ref' + refName] = ref
    }
    return _this['__setRef' + refName]
  }
  _refGet = function (_this, refName) {
    return _this['__ref' + refName] && _this['__ref' + refName].getDOMNode()
  }
} else {
  _refSet = function (_this, refName) {
    return refName
  }
  _refGet = function (_this, refName) {
    return _this.refs[refName] && _this.refs[refName].getDOMNode()
  }
}

module.exports = {
  createClass: _createReactClass,
  PropTypes: _propTypes,
  refSet: _refSet,
  refGet: _refGet
}
