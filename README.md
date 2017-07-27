# go-latest [![NPM version](https://badge.fury.io/js/go-latest.svg)](https://npmjs.org/package/go-latest)   [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)   [![Dependency Status](https://dependencyci.com/github/doesdev/go-latest/badge)](https://dependencyci.com/github/doesdev/go-latest)

> Get latest GO version tag

## local install

```sh
$ npm install --save go-latest
```

## cli install

```sh
$ npm install --global go-latest
```

## programmatic usage

```js
const goLatest = require('go-latest')
goLatest().then(console.log).catch(console.error)
```

## cli usage

```sh
$ go-latest
# 1.7.3
```

## License

MIT © [Andrew Carpenter](https://github.com/doesdev)
