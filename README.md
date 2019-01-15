# @ianwalter/supports-date-input
> Detect whether the current browser environment supports input[type=date]

[![npm page][npmImage]][npmUrl]

## About

Code originates from [this StackOverflow answer][soUrl].

## Installation

```console
yarn add @ianwalter/supports-date-input
```

## Usage

```js
import supportsDateInput from '@ianwalter/supports-date-input'

// Firefox:
supportsDateInput() // => true

// Internet Explorer:
supportsDateInput() // => false
```

## License

Apache 2.0 with Commons Clause - See [LICENSE][licenseUrl]

&nbsp;

Created by [Ian Walter](https://iankwalter.com)

[npmImage]: https://img.shields.io/npm/v/@ianwalter/supports-date-input.svg
[npmUrl]: https://www.npmjs.com/package/@ianwalter/supports-date-input
[soUrl]: https://stackoverflow.com/a/10199306/894420
[licenseUrl]: https://github.com/ianwalter/supports-date-input/blob/master/LICENSE
