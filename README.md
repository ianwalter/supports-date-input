# @ianwalter/supports-date-input
> Detect whether a browser environment or user agent string supports
> input[type=date]

[![npm page][npmImage]][npmUrl]

## About

Browser code originates from [this StackOverflow answer][soUrl].

## Installation

```console
yarn add @ianwalter/supports-date-input
```

## Usage

Browser:

```js
import supportsDateInput from '@ianwalter/supports-date-input'

// Firefox 65:
supportsDateInput() // => true

// Internet Explorer:
supportsDateInput() // => false
```

Node.js:

```js
const supportsDateInput = require('@ianwalter/supports-date-input')

// Firefox 65:
supportsDateInput(req.get('user-agent')) // => true

// Internet Explorer:
supportsDateInput(req.get('user-agent')) // => false
```

## License

Apache 2.0 with Commons Clause - See [LICENSE][licenseUrl]

&nbsp;

Created by [Ian Walter](https://iankwalter.com)

[npmImage]: https://img.shields.io/npm/v/@ianwalter/supports-date-input.svg
[npmUrl]: https://www.npmjs.com/package/@ianwalter/supports-date-input
[soUrl]: https://stackoverflow.com/a/10199306/894420
[licenseUrl]: https://github.com/ianwalter/supports-date-input/blob/master/LICENSE
