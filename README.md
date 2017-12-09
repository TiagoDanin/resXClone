# resXClone
A utility to clone and update xml resources file

# CLI

Run `node cli.js --help`

# API

**writeXml**
- `writeXml(name, xml)`
e.g `writeXml('a.xml', '<?xml version="1.0" encoding="utf-8"?><resources><string name="settings">Settings</string></resources>')`

**readXml**
- `readXml(name)`
e.g `readXml('a.xml')`

**updateXml**
- `updateXml(stringsOriginal, stringsClone)`
e.g `updateXml({name:'Tiago'}, {name: 'TiagoDanin'})`

**createXml**
- `createXml(strings)`
e.g `createXml({name: 'TiagoDanin'})`