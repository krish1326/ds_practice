// Minimum absolute difference in elements of an array.

// -59 -36 -13 1 -53 -92 -2 -96 -54 75

// var divide = function (dividend, divisor) {
//   if (dividend <= Math.pow(-2, 31)) return Math.pow(-2, 31);

//   if (dividend == 0) return 0;

//   if (dividend >= Math.pow(2, 31)) return Math.pow(2, 31) - 1;

//   var isNegativePresent =
//     (dividend < 0 || divisor < 0) && !(dividend < 0 && divisor < 0);
//   let result = isNegativePresent
//     ? -1 * Math.floor(Math.abs(dividend) / Math.abs(divisor))
//     : Math.floor(dividend / divisor);
//   return result;
// };
// console.log(divide(-2147483648, 1));

/**
 *
 * 2 3 false and true ==> false
 * -2 3 true and true ==> true
 * -2 -3 true and false ==> false.
 */
