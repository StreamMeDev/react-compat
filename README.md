# React Runtime Compatibility Layer

[![js-happiness-style](https://img.shields.io/badge/code%20style-happiness-brightgreen.svg)](https://github.com/JedWatson/happiness)

A module to maintain components with broad React version compatibility.  This module can be
used to have React components which are compatible from versions `0.12.0` through `15.5.2`.
As new versions of react come out we will add to this as we go.

## Install

```
$ npm install --save @streammedev/react-compat
```

### With React `>15.5.0`

With newer React's you need to also install `prop-types` and `create-react-class`.

```
$ npm install --save prop-types create-react-class
```

## Usage

```javascript
var React = require('React')
var reactCompat = require('@streammedev/react-compat')

var MyComponent = reactCompat.createClass({
  propTypes: {
    foo: reactCompat.PropTypes.object
  },
  render: function () {
    return <div ref={reactCompat.refSet(this, 'myRef')} onClick={this.doSomething} />
  },
  doSomething: function () {
    var domNode = reactCompat.refGet(this, 'myRef')
    // Do something with the dom node
  }
})
```

## Development

This package follows semver.  When you wish to publish a version run the proper npm command.  For example, if we made a bug fix you can do this:

```
$ npm version patch
$ git push
$ npm publish
```

Here are the other types of version bumps:

- Major (`npm version major`): This is for breaking changes.  Anytime a method is changed or the functionality is modified this bump should be made.
- Minor (`npm version minor`): This is for features additions.  When a new method is added which doesn't affect the behavior of existing features, this bump should be made.
- Patch (`npm version patch`): This is for bug fixes.  Only bump this if it is safe for production code to update wihout being QA'd.  (AKA, almost never)

For each of these you can run a 'pre' version by prepending to the command, ex `npm version preminor`.

All feature development should be done on a branch off `master`.  When a feature is complete and the pull request approved, publish a 'pre' version of the package for testing across environments.  To install that 'pre' version of the package do the following, where the version number contains the correct 'pre' version:

```
$ npm install --save @streamme/react-compat@1.0.0-0
```

Running the tests:

```
$ npm install && npm test
```
