const sumAll = function(firstInt, secondInt) {
    const numbers = [];
    let total = 0;
    let i = firstInt;

    while (i >= firstInt && i <= secondInt || i >= secondInt && i <= firstInt) {
        numbers.push(i)
        i++
    }

    for (let i = 0;  i < numbers.length; i++) {
        total += numbers[i]
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
