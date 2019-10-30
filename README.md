# @ianwalter/supports-date-input
> Detect whether a browser environment or user agent string supports
> input[type=date]

[![npm page][npmImage]][npmUrl]
[![CI][ciImage]][ciUrl]

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

Hippocratic License - See [LICENSE][licenseUrl]

&nbsp;

Created by [Ian Walter](https://ianwalter.dev)

[npmImage]: https://img.shields.io/npm/v/@ianwalter/supports-date-input.svg
[npmUrl]: https://www.npmjs.com/package/@ianwalter/supports-date-input
[ciImage]: https://github.com/ianwalter/supports-date-input/workflows/CI/badge.svg
[ciUrl]: https://github.com/ianwalter/supports-date-input/actions
[soUrl]: https://stackoverflow.com/a/10199306/894420
[licenseUrl]: https://github.com/ianwalter/supports-date-input/blob/master/LICENSE
