const add = function(sum1, sum2) {
  return sum1 + sum2;
	
};

const subtract = function(sum1, sum2) {
  return sum1 - sum2;
	
};

const sum = function(array) {
  let total = 0; 
  for ( let i = 0; i < array.length; i++){
    total = total + array[i];
  }
  return total;
	
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current, 1);


};

const power = function(a, b) {
  return a **b; 
	
};

const factorial = function(n) {
  let product = 1; 
  for (let i = n; i > 0; i--) {
    product *= i;
  }

  return product;
	
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
