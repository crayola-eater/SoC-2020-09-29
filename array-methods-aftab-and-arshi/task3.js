const someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

/*
You have an array which contains some numbers. You would like to find out if any of the numbers are multiples of the following numbers:

- 3
- 5
- 60
- 90

Declare four variables, one for each of the above numbers. Use the `.some()` method to assign a value of true or false to each of the variables, depending on whether there is a multiple of that number in the `someNumbers` array.
*/

const number1 = someNumbers.some((n) => n % 3 === 0);
const number2 = someNumbers.some((n) => n % 5 === 0);
const number3 = someNumbers.some((n) => n % 60 === 0);
const number4 = someNumbers.some((n) => n % 90 === 0);
