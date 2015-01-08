# SSB Address

standard address-string parser for secure scuttlebutt

```js
var addr = require('ssb-address')

addr('localhost')
// => { protocol: 'http:', host: 'localhost', port: 2000, domain: 'http://localhost:2000' }
addr('localhost:8080')
// => { protocol: 'http:', host: 'localhost', port: 8080, domain: 'http://localhost:8080' }
addr('https://localhost')
// => { protocol: 'https:', host: 'localhost', port: 2000, domain: 'https://localhost:2000' }
addr('https://localhost:8080')
// => { protocol: 'https:', host: 'localhost', port: 8080, domain: 'https://localhost:8080' }
addr({ host: 'localhost' })
// => { protocol: 'http:', host: 'localhost', port: 2000, domain: 'http://localhost:2000' }
```

MIT license