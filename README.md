orzo
====

A library for random events like dice rolls and random strings.


Table of Contents
-----------------

 * [Requirements](#requirements)
 * [Usage](#usage)
 * [Contributing](#contributing)
 * [License](#license)


Requirements
------------
orzo requires the following to run:

 * [Node.js](https://nodejs.org/)
 * [npm](https://www.npmjs.com/) (usually comes with Node.js)


Usage
-----
orzo is easily installed with [npm](https://www.npmjs.com/):
```bash
npm install orzo
```

Then you can load the library into your project with a `require`:
```js
var orzo = require('orzo');
```

The orzo object has the following methods:

### `orzo.dice({ min: 1, max: 6 })`
Returns a random number between the min and max values.

 * `min` is the lowest possible random number (inclusive). (*Number*, **Optional**, Default: 1)
 * `max` is the highest possible random number (inclusive). (*Number*, **Optional**, Default: 6)
 * `return` is a random number (*Number*)

```js
// examples
orzo.dice() // 4
orzo.dice({ max: 20 }) // 13
orzo.dice({ min: -50, max: 50 }); // -12
```

### `orzo.chars({chars: '', len: 10 })`
Returns a random set of characters.

 * `chars` is the character set for the random string. (*String*, **Optional**, Default: 'abcdefghijklmnopqrstuvwxyzABCDEFGHHIJKLMNOPQRSTUVWXUZ0123456789')
 * `len` is the length for the random string. (*Number*, **Optional**, Default: 10)
 * `return` is a string with random characters. (*String*)

```js
// examples
orzo.chars() // FBnQPprZw3
orzo.chars({ len: 25, chars: orzo.HEX_CHARACTERS }) // ff0b28ef67d91e04c1b707169
```

### `orzo.uuid()`
Returns a valid UUIDv4.

 * `returns` a UUIDv4. (*String*)

```js
// example
orzo.uuid() // 5287a662-0623-4ff4-8228-3a3b371926a3
```

### `orzo.encode({ input: '', chars: '' })`
Returns a string encoded in a specified base.

 * `input` is the input to convert to the different base. (*String*)
 * `chars` is the character set for the new base. (*String*, **Optional**, Default: 'abcdefghijklmnopqrstuvwxyzABCDEFGHHIJKLMNOPQRSTUVWXUZ0123456789')
 * `return` is a string in the custom base. (*String*)

```js
// examples

// encode 1999 to base16
orzo.encode({input: 1999, chars: orzo.HEX_CHARACTERS}) // 7cf

// encode 1999 to base62
orzo.encode({input: 1999}) // wf
```

### `orzo.decode({ input: '', chars: '' })`
Returns a string back to base10.

 * `input` is the input to convert to base10. (*String*)
 * `chars` the characters used previously to conver the base. (*String*, **Optional**, Default: 'abcdefghijklmnopqrstuvwxyzABCDEFGHHIJKLMNOPQRSTUVWXUZ0123456789')
 * `return` is a string in base10. (*String*)

```js
// examples

// decode 7cf from base16 to base10
orzo.decode({input: '7cf', chars: orzo.HEX_CHARACTERS}) // 1999

// decode wf from base62 to base10
orzo.decode({input: 'wf'}) // 1999
```

### Constants
Various character sets to use.
 * `orzo.NUMBERS` = 0123456789
 * `orzo.LOWERCASE_CHARACTERS` = abcdefghijklmnopqrstuvwxyz
 * `orzo.UPPERCASE_CHARACTERS` = ABCDEFGHIJKLMNOPQRSTUVWXYZ
 * `orzo.SPECIAL_CHARACTERS` = !@#$%^&*()
 * `orzo.HEX_CHACTERS` = 0123456789abcdef


Contributing
------------
To contribute to orzo, clone this repo locally and commit your code on a new branch. Unit tests are required for all features.


License
-------
orzo is licensed under the MIT license.
Copyright &copy; 2015, Ryen Nelsen

### API
To view the current API, please [click here](https://github.com/RyenNelsen/orzo/blob/master/docs/api.md).
