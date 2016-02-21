# orzo API
The following document explains the usage for orzo.

### orzo.dice([{args}]) ⇒ `number`
Returns a random number between 1 and 6 unless different min/max values are supplied.

#### Parameters
| Params | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| min | number | 1 | Lowest possible random number (inclusive). |
| max | number | 6 | Highest possible random number (inclusive). |


#### Examples
Dice roll between 1 and 6:
```js
orzo.dice() // 4
```

Dice roll between 1 and 20:
```js
orzo.dice({max: 20}) // 13
```

Dice roll between -50 and 50:
```js
orzo.dice({min: -50, max: 50}); // -12
```

### orzo.chars([{args}]) ⇒ `string`
Returns a random set of 10 characters unless a different 'len' is supplied.

#### Parameters
| Params | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| chars | string | a-zA-Z0-9 | The character set for the random string. (Currently only supports string input, not character ranges). |
| len | number | 10 | Length for the random string. |

#### Examples
Generate a random string with the default settings (len: 10, chars: a-zA-Z0-9):
```js
orzo.chars() // FBnQPprZw3
```

Generate a random string with only hex characters with a length of 25:
```js
orzo.chars({len: 25, chars: '0123456789abcdef'}) // ff0b28ef67d91e04c1b707169
```

### orzo.uuid() ⇒ `string`
Returns a valid UUIDv4.

#### Examples
```js
orzo.uuid() // 5287a662-0623-4ff4-8228-3a3b371926a3
```

### orzo.encode({args}) ⇒ `string`
Returns a random set of 10 characters unless a different 'len' is supplied.

#### Parameters
| Params | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| input | string | | The input to convert to the different base. |
| [chars] | string | a-zA-Z0-9 | The character set for the new base. (Currently only supports string input, not character ranges). |

#### Examples
Encode `1999` to base16:
```js
orzo.encode({input: 1999, chars: '0123456789abcdef'}) // 7cf
```

Encode `1999` to base62:
```js
orzo.encode({input: 1999}) // wf
```

### orzo.decode({args}) ⇒ `number`
Returns a random set of 10 characters unless a different 'len' is supplied.

#### Parameters
| Params | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| input | number | | The input to convert back to base10. |
| [chars] | string | a-zA-Z0-9 | The character set used to convert the input. (Currently only supports string input, not character ranges). |

#### Examples
Decode `7cf` from base16 to base10:
```js
orzo.decode({input: '7cf', chars: '0123456789abcdef'}) // 1999
```

Decode `wf` from base62 to base10:
```js
orzo.decode({input: 'wf'}) // 1999
```

### Constants
Various constants exported from orzo.

| Constant | Type | Value |
| --- | --- | --- |
| `orzo.NUMBERS` | String | 0123456789 |
| `orzo.LOWERCASE_CHARACTERS` | String | abcdefghijklmnopqrstuvwxyz |
| `orzo.UPPERCASE_CHARACTERS` | String | ABCDEFGHIJKLMNOPQRSTUVWXYZ |
| `orzo.SPECIAL_CHARACTERS` | String | !@#$%^&*() |
| `orzo.HEX_CHARACTERS` | String | 0123456789abcdef |
