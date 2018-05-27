# abios
> available calls can be found [here](https://docs.abiosgaming.com/v2/reference).

## Initialization & Use
```js
var AbiosAPI = require('abios')
var api = AbiosAPI({
  clientID: process.env.ABIOS_CLIENT_ID,
  clientSecret: process.env.ABIOS_CLIENT_SECRET
});

api('/series', [
  '&with[]=matches', // matches associated with the series.
  '&with[]=casters', // live streams for the series.
  '&with[]=tournament', // tournament data associated with the series.
  `&order=start`
]).then(list => {
  // do stuff
}).catch(console.error)
```

