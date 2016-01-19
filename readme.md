# user-env

Useful for Electron/NW.js apps as GUI apps on OS X that don't inherit the environment of your current user

Inspired by [`fix-path`](https://npmjs.org/fix-path) but instead of modifying `process.env.PATH` this returns the entire `process.ENV` for the currently logged in user (`process.env.USER` by default) or a user you specify

## usage

```js
var userEnv = require('user-env')

// current user
var env = userEnv()

// specific user
var bobEnv = userEnv('bob')
```
