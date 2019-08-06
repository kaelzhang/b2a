[![Build Status](https://travis-ci.org/kaelzhang/b2a.svg?branch=master)](https://travis-ci.org/kaelzhang/b2a)
[![Coverage](https://codecov.io/gh/kaelzhang/b2a/branch/master/graph/badge.svg)](https://codecov.io/gh/kaelzhang/b2a)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/kaelzhang/b2a?branch=master&svg=true)](https://ci.appveyor.com/project/kaelzhang/b2a)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/b2a.svg)](http://badge.fury.io/js/b2a)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/b2a.svg)](https://www.npmjs.org/package/b2a)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/b2a.svg)](https://david-dm.org/kaelzhang/b2a)
-->

# b2a

`btoa` and `atob` (base64/base64url encoding and decoding) support for node.js or old browsers, with the [Unicode Problems](https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem) fixed.

The common problem of other libraries is that they fail to encode 16-bit strings. Since DOMStrings are 16-bit-encoded strings, in most browsers calling `window.btoa` on a Unicode string will cause a `'Character Out Of Range'` exception if a character exceeds the range of a 8-bit byte (`0x00~0xFF`).

This module will try to reuse `window.atob` and `window.btoa` when possible.

## Install

```sh
$ npm install b2a
```

## Usage

```js
import {
  // Encode a string in base-64
  btoa,
  // Decode a string in base-64
  atob,

  // Encode a string into base64url
  btoau,
  // Decode a base64url-encoded string
  atobu
} from 'b2a'

btoa('a')           // 'YQ=='
window.btoa('a')    // 'YQ==', works fine with ASCII characters


// Oooooooops!
// In most browsers, calling btoa() on a Unicode string
// will cause a Character Out Of Range exception.
window.btoa('中文')  // throws InvalidCharacterError ❌

btoa('中文')         // '5Lit5paH' ✅


// Oooooooops!
window.atob('5Lit5paH')   // 'ä¸­æ', oh no! ❌

atob('5Lit5paH')          // '中文', great! ✅


btoau('μπορούμε')                 // zrzPgM6_z4HOv8-NzrzOtQ==

atobu('zrzPgM6_z4HOv8-NzrzOtQ==') // μπορούμε
```

## `base64url` support since 1.1.0

Since `1.1.0`, `btoau` and `atobu` are introduced to encode and decode in [base64url](https://en.wikipedia.org/wiki/Base64#URL_applications) format.

```js
import {btoau} from 'b2a'

location.href = `https://domain.com/login?return_to=${btoau(location.href)}`
```

## License

MIT
