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
