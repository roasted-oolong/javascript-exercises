const removeFromArray = function() {
    let startingArray = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        if (startingArray.includes(arguments[i])) {
            startingArray.splice((startingArray.indexOf(arguments[i])), 1);
        } else {
            break;
        };
    };
    return startingArray;
};

// Do not edit below this line
module.exports = removeFromArray;
