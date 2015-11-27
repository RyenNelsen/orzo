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
    args = args || { min: 1, max: 6 };

    if (args.min > args.max) {
        throw new RangeError('Max must be larger than min');
    }

    return Math.floor(Math.random() * (args.max - args.min) + args.min);
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
        output += args.chars[generateRandomNumber({min: 0, max: args.chars.length})];
    }

    return output;
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
