var app    = require('./index.js')
var assert = require('assert')

console.log('[+] Executing tests')
console.log('[+] 0% OK')
assert.equal(app.writeXml('a.xml', '<?xml version="1.0" encoding="utf-8"?><resources><string name="name">Tiago</string></resources>'), true)
assert.equal((app.readXml('a.xml')).string.name, ({ string: { name: 'Tiago' } }).string.name)
assert.equal(app.readXml('b.xml'), false)
console.log('[+] 50% OK')
assert.equal((app.updateXml({name:'Tiago'}, {name: 'TiagoDanin'})).name, ({ name: 'TiagoDanin' }).name)
assert.equal((app.updateXml({name:'TiagoDanin'}, {}, '##')).name,  '##' + ({ name: 'TiagoDanin' }).name)
assert.equal(app.createXml({name: 'TiagoDanin'}), `<?xml version="1.0" encoding="utf-8"?>
<resources>
  <string name="name">TiagoDanin</string>
</resources>`)
console.log('[+] 100% OK')