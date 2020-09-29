const sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

const seventySevenTimesTable = [
  77,
  154,
  231,
  308,
  385,
  461,
  538,
  616,
  693,
  770,
];

// - Using the `.every()` method, check that every number in the `sevenTimesTable` array is a multiple of `7`.
console.log(
  'Every number in the "sevenTimesTable" array is a multiple of 7?',
  sevenTimesTable.every((n) => n % 7 === 0)
);

// - Check if every number in the `seventySevenTimesTable` array is a multiple of `77` using the `.every()` method.
console.log(
  'Every number in the "seventySevenTimesTable" array is a multiple of 7?',
  seventySevenTimesTable.every((n) => n % 77 === 0)
);

// - Your worst fears have been confirmed. There is a rogue value in your `seventySevenTimesTable` array. Use the `.find()` method to identify which number it is.
console.log(
  `First rogue value in "seventySevenTimesTable" array (that isn't a multiple of 77) is:`,
  seventySevenTimesTable.find((n) => n % 77 !== 0)
);

// - Now that you know which number is incorrect, use the `.findIndex()` method to identify the index of the number.
console.log(
  `Index of first rogue value in "seventySevenTimesTable" array (that isn't a multiple of 77) is:`,
  seventySevenTimesTable.findIndex((n) => n % 77 !== 0)
);
