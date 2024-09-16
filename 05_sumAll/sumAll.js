const sumAll = function(firstInt, secondInt) {
    const numbers = [];
    let total = 0;
    let i = firstInt;
    if (firstInt < 0 || secondInt < 0) return "ERROR";

    while (i >= firstInt && i <= secondInt || i >= secondInt && i <= firstInt) {     
        if (i >= firstInt && i <= secondInt) {
            numbers.push(i)
            i++ 
        } else if (i >= secondInt && i <= firstInt) {
            numbers.push(i)
            i--
        }
    }

    for (let i = 0;  i < numbers.length; i++) {
        total += numbers[i]
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
