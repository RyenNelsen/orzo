var NUMBERS = '0123456789';
var LOWERCASE_CHARACTERS = 'abcdefghijklmnopqrstuvwxyz';
var UPPERCASE_CHARACTERS = LOWERCASE_CHARACTERS.toUpperCase();
var SPECIAL_CHARACTERS = '!@#$%^&*()';
var HEX_CHARACTERS = 'abcdef' + NUMBERS;

function CustomError(name, message) {
    Error.captureStackTrace(this);
    this.name = name;
    this.message = message;
}

CustomError.prototype = Object.create(Error.prototype);

/**
 * Generates a random number between 1 and 6 unless different min/max values are supplied.
 * @param  {Object} [args]       Contains the arguments for the random number generator.
 * @param  {number} [args.min=1] Lowest possible random number (inclusive).
 * @param  {number} [args.max=6] Highest possible random number (inclusive).
 * @return {number}              Random number between min and max.
 */
function generateRandomNumber(args) {
    args = args || { };

    args.min = typeof args.min === 'undefined' ? 1 : args.min;
    args.max = typeof args.max === 'undefined' ? 6 : args.max;

    if (args.min > args.max) {
        throw new RangeError('Max must be larger than min');
    }

    return Math.floor(Math.random() * (args.max - args.min + 1) + args.min);
}

/**
 * Generates a random set of 10 characters unless a different 'len' is supplied.
 * @param  {Object} [args]                Contains the arguments for the random string generator.
 * @param  {number} [args.len=10]         Length for the random string.
 * @param  {string} [args.char=a-zA-Z0-9] The character set for the random string.
 * @return {string}                       Random set of characters.
 */
function generateRandomString(args) {
    args = args || { };

    // TODO: Add ability to parse character sets like regex (eg: a-zA-Z)

    args.len = args.len || 10;
    args.chars = args.chars || NUMBERS + LOWERCASE_CHARACTERS + UPPERCASE_CHARACTERS;

    if (args.len < 1) {
        throw new RangeError('\'len\' must be greater than 0');
    }
    if (typeof args.chars !== 'string') {
        throw new TypeError('\'chars\' must be a string');
    }

    var output = '';

    for (var i = 0; i < args.len; i++) {
        output += args.chars[generateRandomNumber({min: 0, max: args.chars.length - 1})];
    }

    return output;
}

/**
 * Generates a valid UUIDv4.
 * @return {string} A valid UUIDv4.
 */
function generateUUIDv4() {
    var output = [];

    for (var i = 0; i < 32; i++) {
        output[i] = generateRandomString({chars: HEX_CHARACTERS, len: 1});
    }

    output[12] = 4;
    output[16] = generateRandomString({chars: 'ab89', len: 1});

    output.splice(20, 0, '-');
    output.splice(16, 0, '-');
    output.splice(12, 0, '-');
    output.splice(8, 0, '-');

    return output.join('');
}

// Constant exports
exports.NUMBERS = NUMBERS;
exports.LOWERCASE_CHARACTERS = LOWERCASE_CHARACTERS;
exports.UPPERCASE_CHARACTERS = UPPERCASE_CHARACTERS;
exports.SPECIAL_CHARACTERS = SPECIAL_CHARACTERS;
exports.HEX_CHARACTERS = HEX_CHARACTERS;

// Function exports
exports.dice = generateRandomNumber;
exports.chars = generateRandomString;
exports.uuid = exports.uuidv4 = generateUUIDv4;
