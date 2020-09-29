# Array Methods Workshop

Write the code for each task in the relevant js file. Change the src attribute of the script tag in `index.html` to run the file you want. To check that the code is working as you think it is, console.log the variables as you move through the tasks.

## Task 1 - Map

```js
const codeCoaches = ["ben", "chris", "tim", "liz", "mell", "tao"];
```

You have an array of code coaches. Unfortunately, someone forgot to capitalise their names.

👉 Write a function that takes in a string and turns it to upper case.

👉 Use the `.map()` method to generate a new array by calling your function on each item in `codeCoaches`. Store the returned value from map in the variable `capitalisedCodeCoaches`,

## Task 2 - Filter

```js
const animals = [
  "baboon",
  "kangaroo",
  "rhino",
  "frog",
  "beaver",
  "horse",
  "basalisk",
];
```

You have an array of lovely animals. Unfortunately, you can only keep the animals that start with the letter `b`. Declare a new variable, `bListAnimals`, which contains only the animals whose name begins with 'b'. Use the `.filter()` method to generate the new array.

## Task 3 - Some

```js
const someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45 6, 7, 23]
```

You have an array which contains some numbers. You would like to find out if any of the numbers are multiples of the following numbers:

- 3
- 5
- 60
- 90

Declare four variables, one for each of the above numbers. Use the `.some()` method to assign a value of true or false to each of the variables, depending on whether there is a multiple of that number in the `someNumbers` array.

## Task 4 - Every, Find, Find Index

```js
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
```

You think you know your seven times table, but you're feeling shakey on your seventy seven times table.

- Using the `.every()` method, check that every number in the `sevenTimesTable` array is a multiple of `7`.

- Check if every number in the `seventySevenTimesTable` array is a multiple of `77` using the `.every()` method.

- Your worst fears have been confirmed. There is a rogue value in your `seventySevenTimesTable` array. Use the `.find()` method to identify which number it is.

- Now that you know which number is incorrect, use the `.findIndex()` method to identify the index of the number.

## Task 5 - Nightclub Mutation (Push, Pop, Shift, Unshift, Splice, Concat)

```js
const queue = [
  "catHorse",
  "dogPig",
  "catHorse",
  "dogPig",
  "kangarooBear",
  "dogPig",
  "catHorse",
  "catHorse",
  "dogPig",
];
```

You run a nightclub for mutated animals. Naturally, when people join the queue for the nightclub, you mutate the 'queue' array and allow them to wait in line. The queue starts at index 0 (this is the front of the queue).

- Yet another 'catHorse' turns up at the nightclub door. Use an array method to add them to the back of the queue.

- The queue is moving ever slowly forwards, and a mutated animal from the front may enter the nightclub. Remove a mutated animal from the front of the queue using an array method.

- Oh my. An 'owlDonkey' has appeared at the door. Put them straight to the front of the queue using an array method.

- The queue really IS moving very slowly. The 'catHorse' at the back of the queue decides to call it a night. Remove the 'catHorse' at the back of the queue using an array method.

- You have received an emergency phone call concerning the 'kangarooBear' in the middle of the queue. Use an array method to remove the 'kangarooBear' from the middle of the queue.

- Classic. A group of 'rabbitSalmon' have decided to form an unofficial queue next to your queue. Using an array method, merge the unofficial queue into the original queue, so that all of the 'rabbitSalmon' are at the back of the queue.

```js
const unofficialQueue = [
  "rabbitSalmon",
  "rabbitSalmon",
  "rabbitSalmon",
  "rabbitSalmon",
];
```

## Task 6 - The Sorting Hat (Sort)

You are the sorting hat. Although you're famous for sorting Hogwart's students into houses, it turns out you can sort almost anything.

```js
const broomCupboard = [2, 4, 1, 3, 7, 5, 8, 6, 10, 9, 0];
```

- The students always put their broomsticks back in the broom cupboard out of order, despite the fact they are each clearly labeled with a number. No matter, sorting numbers is a piece of cauldron cake. Using the .sort() method, rearrange the brooms (numbers) in the broomCupboard array so that they are in ASCENDING order, with broomstick 1 at index 0 and broomstick 10 and index 9.

```js
const potions = [
  { name: "polyjuice potion", shelf: 2 },
  { name: "draught of living death", shelf: 4 },
  { name: "pepperup potion", shelf: 1 },
  { name: "veritaserum", shelf: 3 },
];
```

- Tsk tsk tsk. It looks like Snape can't even sort his own potion cupboard. Using the .sort() method, rearrange the four potions in the 'potions' array so they are in DESCENDING order, with the 'draught of living death' at index 0 and the 'pepperup potion' at index 3.

```js
const students = [
  "Cedric Diggory",
  "Padma Patil",
  "Lucius Malfoy",
  "Seamus Finnigan",
  "Lavender Brown",
  "Luna Lovegood",
  "Gregory Goyle",
];
```

- Some students have been kept behind in detention by Professor McGonagall. Obsessed with orderliness, she has asked you to sort the students into alphabetical order. Sort the names in the array in alphebetical order according to their last name.

## Extra

- delete and repeat each question and solve it again
- research some more methods and learn what they do
