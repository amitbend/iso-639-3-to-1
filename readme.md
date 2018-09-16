# iso-639-3-to-1 [![Build Status][build-badge]][build-page]

Converting between iso-639-3 to iso-639-1 language codes.

For languages without iso-639-1 that have a "macro language", It will return the "macro language" iso-639-1 code (if exists)

## Installation

[npm][]:

```bash
npm install --save iso-639-3-to-1
```

## Usage

```javascript
const convert3To1 = require('iso-639-3-to-1')
let iso639code = 'cmn';
let result = convert3To1(iso639code);
// result = 'zh'
```

## License

[MIT][license] © [Amitbend][author]
<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/iso-639-3.svg

[build-page]: https://travis-ci.org/wooorm/iso-639-3

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[iso]: http://www-01.sil.org/iso639-3

[type]: #type

[scope]: #scope