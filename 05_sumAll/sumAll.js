const sumAll = function(firstInt, secondInt) {
    const numbers = [];
    let total = 0;
    let i = firstInt;
    if (Math.sign(firstInt, secondInt) === -1 || Number.isInteger(firstInt, secondInt) === false || typeof(firstInt, secondInt) === "string") return "ERROR";

    while (i >= firstInt && i <= secondInt || i >= secondInt && i <= firstInt) {     
        if (i >= firstInt && i <= secondInt) {
            numbers.push(i)
            i++ 
        } else if (i >= secondInt && i <= firstInt) {
            numbers.push(i)
            i--
        } else {
            return "ERROR";
        }
    }

    for (let i = 0;  i < numbers.length; i++) {
        total += numbers[i]
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
