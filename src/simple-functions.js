const sum = function (a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
}

function dontCallMe() {
  console.log('This should not be executed');
}

exports.sum = sum;
exports.subtract = subtract;
