const convertToCelsius = function(Fahrenheit) {
  let Celcius = (Fahrenheit -32) * 5/9
  return (Math.round(Celcius * 10)/10);
};

const convertToFahrenheit = function(Celsius) {
  let Fahrenheit = (Celsius * 1.8) + 32
  return (Math.round(Fahrenheit * 10)/10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
