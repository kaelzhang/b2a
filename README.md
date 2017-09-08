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

`btoa` and `atob` support for node.js or old browsers, with the [Unicode Problems](https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_.22Unicode_Problem.22) fixed.

## Install

```sh
$ npm install b2a
```

## Usage

```js
import {
  atob,
  btoa
} from 'b2a'

btoa('a')          // 'YQ=='
window.btoa('a')   // 'YQ==', works fine with ASCII characters


// Oooooooops!
// In most browsers, calling btoa() on a Unicode string will cause a Character Out Of Range exception.
window.btoa('中文')   // throws InvalidCharacterError

btoa('中文')          // '5Lit5paH'


// Oooooooops!
window.atob('5Lit5paH')      // 'ä¸­æ', oh no!

atob('5Lit5paH')             // '中文', great!
```

## License

MIT
