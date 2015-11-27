function CustomError(name, message) {
    Error.captureStackTrace(this);
    this.name = name;
    this.message = message;
}

CustomError.prototype = Object.create(Error.prototype);

function generateRandomNumber(args) {
    args = args || { min: 1, max: 6 };

    if (args.min > args.max) {
        throw new RangeError('Max must be larger than min');
    }

    return Math.floor(Math.random() * (args.max - args.min) + args.min);
}

exports.dice = generateRandomNumber;
