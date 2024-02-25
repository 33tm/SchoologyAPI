# Schoology API

## Install
```shell
npm i schoologyapi
yarn add schoologyapi
pnpm i schoologyapi
bun add schoologyapi
```

## Import
### CommonJS
```javascript
const SchoologyAPI = require("schoologyapi")
```
### ES Module
```javascript
import SchoologyAPI from "schoologyapi"
```

## Instantiate
> https://{district}.schoology.com/api
```javascript
const client = new SchoologyAPI("key", "string")
```

## Request
`await client.request(method, uri, accessToken, body)`
```javascript
await client.request(
    "PUT",
    "/users/12345",
    { key, string },
    { uid: 12345 }
)
```

## Format Token
`{ key: string, string: string }`
```javascript
const token = "oauth_token=abc&oauth_token_secret=def"
const { key, secret } = client.format(token)
```

Enjoy!