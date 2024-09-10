const repeatString = function(word, times) {
    const string = [];
    i = 0;

    while (i < times) {     
        if (i < times) {
            string.push(word);
        } else {
            break;
        }

        i++;
    };

    return string.join('');
};

// Do not edit below this line
module.exports = repeatString;