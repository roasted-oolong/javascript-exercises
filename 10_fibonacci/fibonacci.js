const fibonacci = function(num) {
    let sum = 0;
    let i = 0;
    const fibonacciArray = [0, 1]
    
    if (typeof num === "string") {
        let num = Number(num);
    }
    if (Math.sign(num) === -1) {
        return "OOPS";
    }

    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        for (i = 2; i <= num; i++) {
            let sum = fibonacciArray[i-1] + fibonacciArray[i-2]

            if (i === num) {
                return sum;
            } else {
                fibonacciArray.push(sum);
            }
        }
    }
};

// Do not edit below this line
module.exports = fibonacci;
