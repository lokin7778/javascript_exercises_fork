const convertToCelsius = function(tempInFarenheit) {

  let tempInCalsuius = (tempInFarenheit-32) * (5/9);
  return Number(tempInCalsuius.toFixed(1));

};

const convertToFahrenheit = function(tempInCalsuius) {

  let tempInFarenheit = ((9/5)*tempInCalsuius) + 32;
  return Number(tempInFarenheit.toFixed(1));

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
