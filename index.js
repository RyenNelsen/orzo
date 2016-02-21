var NUMBERS = '0123456789';
var LOWERCASE_CHARACTERS = 'abcdefghijklmnopqrstuvwxyz';
var UPPERCASE_CHARACTERS = LOWERCASE_CHARACTERS.toUpperCase();
var SPECIAL_CHARACTERS = '!@#$%^&*()';
var HEX_CHARACTERS = NUMBERS + 'abcdef';

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
function generateRandomNumber() {
  var args = arguments.lenth <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var _args$min = args.min;
  var min = typeof _args$min === 'undefined' ? 1 : _args$min;
  var _args$max = args.max;
  var max = typeof _args$max === 'undefined' ? 6 : _args$max;

  if (min > max) {
    throw new RangeError('Max must be larger than min');
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Generates a random set of 10 characters unless a different 'len' is supplied.
 * @param  {Object} [args]                Contains the arguments for the random string generator.
 * @param  {number} [args.len=10]         Length for the random string.
 * @param  {string} [args.char=a-zA-Z0-9] The character set for the random string.
 * @return {string}                       Random set of characters.
 */
function generateRandomString() {
  var args = arguments.lenth <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var _args$len = args.len;
  var len = typeof _args$len === 'undefined' ? 10 : _args$len;
  var _args$chars = args.chars;
  var chars = typeof _args$chars === 'undefined' ? NUMBERS + LOWERCASE_CHARACTERS + UPPERCASE_CHARACTERS : _args$chars;
  var output = '';

  // TODO: Add ability to parse character sets like regex (eg: a-zA-Z)

  if (len < 1) {
    throw new RangeError('\'len\' must be greater than 0');
  }
  if (typeof chars !== 'string') {
    throw new TypeError('\'chars\' must be a string');
  }

  for (var i = 0; i < len; i++) {
    output += chars[generateRandomNumber({min: 0, max: chars.length - 1})];
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

/**
 * Encodes an base10 input to a custom base of characters.
 * @param  {Object} [args]                Contains the arguments for the encoder.
 * @param  {number} [args.input]          The input to convert to the different base.
 * @param  {string} [args.char=a-zA-Z0-9] The character set for the new base.
 * @return {string}                       The converted input to the new base.
 */
function customBaseEncode() {
  var args = arguments.lenth <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var input = args.input;
  var _args$chars = args.chars;
  var chars = typeof _args$chars === 'undefined' ? NUMBERS + LOWERCASE_CHARACTERS + UPPERCASE_CHARACTERS : _args$chars;
  var base = chars.length;
  var output = '';

  if (typeof input === 'undefined') {
    throw new SyntaxError('input is required');
  } else if (typeof input !== 'number') {
    throw new TypeError('input must be a number');
  }

  while (input) {
    var remainder = input % base;
    input = Math.floor(input / base);
    output = chars[remainder].toString() + output;
  }

  return output;
}

/**
 * Decodes an input from a custom base of characters to base10.
 * @param  {Object} [args]                Contains the arguments for the decoder.
 * @param  {number} [args.input]          The input to convert back to base10.
 * @param  {string} [args.char=a-zA-Z0-9] The character set used to convert the input.
 * @return {number}                       The converted input to base10.
 */
function customBaseDecode() {
  var args = arguments.lenth <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var input = args.input;
  var _args$chars = args.chars;
  var chars = typeof _args$chars === 'undefined' ? NUMBERS + LOWERCASE_CHARACTERS + UPPERCASE_CHARACTERS : _args$chars;
  var base = chars.length;
  var output = 0;

  if (typeof input === 'undefined') {
    throw new SyntaxError('input is required');
  } else if (typeof input !== 'string') {
    throw new TypeError('input must be a string');
  }

  while (input) {
    var i = chars.indexOf(input[0]);
    var pow = input.length - 1;
    output += i * (Math.pow(base, pow));
    input = input.substring(1);
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
exports.uuid = exports.uuidv4 = generateUUIDv4;
exports.encode = customBaseEncode;
exports.decode = customBaseDecode;
