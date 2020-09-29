const animals = [
  "baboon",
  "kangaroo",
  "rhino",
  "frog",
  "beaver",
  "horse",
  "basalisk",
];

// You have an array of lovely animals. Unfortunately, you can only keep the animals that start with the letter `b`. Declare a new variable, `bListAnimals`, which contains only the animals whose name begins with 'b'. Use the `.filter()` method to generate the new array.
const bListAnimals = animals.filter((a) => a.startsWith("b"));
