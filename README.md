# resXClone [![Build Status](https://travis-ci.org/TiagoDanin/resXClone.svg?branch=master)](https://travis-ci.org/TiagoDanin/resXClone) [![Greenkeeper badge](https://badges.greenkeeper.io/TiagoDanin/resXClone.svg)](https://greenkeeper.io/)

[![NPM](https://nodei.co/npm/resxclone.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/resxclone/)

A utility to clone and update xml resources file

# Install

NPM `npm install resxclone`

# CLI

Run `node cli.js --help`

# API

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
