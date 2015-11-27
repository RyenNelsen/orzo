function CustomError(name, message) {
    Error.captureStackTrace(this);
    this.name = name;
    this.message = message;
}

CustomError.prototype = Object.create(Error.prototype);

/**
 * Generates a random number between 1 and 6 unless different min/max values are supplied.
 * @param  {Object} [args]       Contains the arguments for the random number generateRandomNumber
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

exports.dice = generateRandomNumber;
