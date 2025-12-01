let year = 2025;

const leapYears = function (year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
};

let result = leapYears(year);


// Do not edit below this line
module.exports = leapYears;
