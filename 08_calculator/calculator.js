const add = function(intOne, intTwo) {
	return intOne + intTwo;
};

const subtract = function(intOne, intTwo) {
	return intOne - intTwo;
};


const sum = (array) => {
  return array
          .reduce((total, current) => total + current, 0); 
}

// const sum = function(array) {
//   let total = 0;

//   if(array.length < 1 || array == undefined){
//     return total;
// } else if (array.length >= 1) {
//   for (let i = 0; i < array.length; i++) {
//     total += array[i]
// }
//   return total;
// }
// };

const multiply = (array) => {
  return array
          .reduce((total, current) => total * current); 
}

// const multiply = function(array) {
//   let total = 1;
  
//   if(array.length < 1 || array == undefined){
//     return total;
// } else if (array.length >= 1) {
//   for (let i = 0; i < array.length; i++) {
//     total *= array[i]
// }
//   return total;
// }
// };

const power = (base, exponent) => base ** exponent;

const factorial = (number) => number <= 1 ? 1 : number * factorial(number - 1);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
