# Schoology API

### Install
```bash
npm i schoologyapi
```

### Import
```javascript
// CommonJS
const SchoologyAPI = require("schoologyapi")

// ES Module
import SchoologyAPI from "schoologyapi"
```

### Instantiate
> Get API credentials from https://{district}.schoology.com/api
```javascript
const client = new SchoologyAPI("key", "string")
```

### Request
`request(method, uri, accessToken?, body?)`

`method`: HTTP Verb (GET, POST, PUT, DELETE).

`uri`: Schoology API endpoint uri, already prefixed with `/v1`.

[Optional] `accessToken`: Access token for three-legged OAuth, taken in the shape of `{ key: string, secret: string }`.

[Optional] `body`: JSON body for Schoology API Call (Not allowed for GET requests).

```javascript
await client.request("GET", "/users/13225459")
```

### Format OAuth Token
Takes in an OAuth token string `oauth_token=abcdef&oauth_token_secret=ghijkl`, returns `{ key: "abcdef", secret: "ghijkl" }`.

```javascript
const token = "oauth_token=abcdef&oauth_token_secret=ghijkl"
const { key, secret } = client.format(token)
console.log(key, secret)
```
> `abcdef ghijkl`

### Enjoy!
(Optional)
