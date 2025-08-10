export const sum = (first, second) => {
    return first + second;
};

export const sumAll = (numbers) => {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }

    return total;
};

export const divideAll = (numbers) => {
    let total = 1;
    for (const number of numbers) {
        if (number === 0) {
            throw new Error("Can't divide by zero");
        } else {
            total /= number;
        }
    }

    return total;
};

export const calculate = (numbers, callback) => {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }

    callback(total);
};

export const calculateAndReturn = (numbers, callback) => {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }

    return callback(total);
};