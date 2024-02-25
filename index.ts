import crypto from "crypto"
import OAuth from "oauth-1.0a"

export default class SchoologyAPI {
    key: string
    secret: string

    constructor(key: string, secret: string) {
        this.key = key
        this.secret = secret
    }

    async request(
        method: "GET" | "POST" | "PUT" | "DELETE",
        uri: string,
        token?: { key: string, secret: string },
        body?: object
    ) {
        const url = `https://api.schoology.com/v1${uri}`

        const oauth = new OAuth({
            consumer: { key: this.key, secret: this.secret },
            signature_method: "HMAC-SHA1",
            hash_function(base, key) {
                return crypto
                    .createHmac("sha1", key)
                    .update(base)
                    .digest("base64")
            }
        })

        return fetch(url, {
            method,
            body: JSON.stringify(body),
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json",
                ...oauth.toHeader(oauth.authorize({ url, method }, token))
            }
        }).then(res => {
            if (!res.ok) throw res.status
            return res.headers.get("content-type")?.includes("application/json") ? res.json() : res.text()
        })
    }

    format(token: string) {
        const [key, secret] = token.match(/(?<=oauth_token=)([^&]*)|(?<=oauth_token_secret=)([^&]*)/g) as [string, string]
        return { key, secret }
    }
}