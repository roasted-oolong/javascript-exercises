const add = function(intOne, intTwo) {
	return intOne + intTwo;
};

const subtract = function(intOne, intTwo) {
	return intOne - intTwo;
};

const sum = function(array) {
  let total = 0;

  if(array.length < 1 || array == undefined){
    return total;
} else if (array.length >= 1) {
  for (let i = 0; i < array.length; i++) {
    total += array[i]
}
  return total;
}
};

const multiply = function(array) {
  let total = 1;
  
  if(array.length < 1 || array == undefined){
    return total;
} else if (array.length >= 1) {
  for (let i = 0; i < array.length; i++) {
    total *= array[i]
}
  return total;
}
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
	  if (number === 0 || number === 1) {
      return 1;
    } else {
      return (number * factorialize(number - 1));
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
