# ResXClone
[![Node](https://img.shields.io/node/v/resxclone.svg?style=flat-square)](https://npmjs.org/package/resxclone)
[![Version](https://img.shields.io/npm/v/resxclone.svg?style=flat-square)](https://npmjs.org/package/resxclone)
[![Downloads](https://img.shields.io/npm/dt/resxclone.svg?style=flat-square)](https://npmjs.org/package/resxclone)
[![Travis](https://img.shields.io/travis/TiagoDanin/resXClone.svg?branch=master&style=flat-square)](https://travis-ci.org/TiagoDanin/resXClone)

A utility to clone and update xml resources file


## Installation
Module available through the
[npm registry](https://www.npmjs.com/). It can be installed using the
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
# NPM
npm install resxclone --global
# Or Using Yarn
yarn global add resxclone
```

## Documentation
### CLI

Run `resxclone --help`

### API

**writeXml**
- `writeXml(name, xml)`

e.g `writeXml('a.xml', '<?xml version="1.0" encoding="utf-8"?><resources><string name="name">Tiago</string></resources>')`

**readXml**
- `readXml(name)`

e.g `readXml('a.xml')`

**updateXml**
- `updateXml(stringsOriginal, stringsClone, prefix)`

e.g `updateXml({name:'Tiago'}, {name: 'TiagoDanin'}, '##TO-DO')`

**createXml**
- `createXml(strings)`

e.g `createXml({name: 'TiagoDanin'})`

## Tests
To run the test suite, first install the dependencies, then run `test`:

```sh
# NPM
npm test
# Or Using Yarn
yarn test
```

## Dependencies
- [caporal](https://ghub.io/caporal): A full-featured framework for building command line applications (cli) with node.js
- [rdotjson](https://ghub.io/rdotjson): Android String Resource XML Parser
- [xmlbuilder](https://ghub.io/xmlbuilder): An XML builder for node.js


## Contributors
Pull requests and stars are always welcome. For bugs and feature requests, please [create an issue](https://github.com/TiagoDanin/resXClone/issues). [List of all contributors](https://github.com/TiagoDanin/resXClone/graphs/contributors).


## License
[GPL-3.0](LICENSE)
