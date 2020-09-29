const broomCupboard = [2, 4, 1, 3, 7, 5, 8, 6, 10, 9, 0];

const potions = [
  { name: "polyjuice potion", shelf: 2 },
  { name: "draught of living death", shelf: 4 },
  { name: "pepperup potion", shelf: 1 },
  { name: "veritaserum", shelf: 3 },
];

const students = [
  "Cedric Diggory",
  "Padma Patil",
  "Lucius Malfoy",
  "Seamus Finnigan",
  "Lavender Brown",
  "Luna Lovegood",
  "Gregory Goyle",
];

// - The students always put their broomsticks back in the broom cupboard out of order, despite the fact they are each clearly labeled with a number. No matter, sorting numbers is a piece of cauldron cake. Using the .sort() method, rearrange the brooms (numbers) in the broomCupboard array so that they are in ASCENDING order, with broomstick 1 at index 0 and broomstick 10 and index 9.
broomCupboard.sort((a, b) => a - b); // a - b gives ASC, b - a gives DESC

// - Tsk tsk tsk. It looks like Snape can't even sort his own potion cupboard. Using the .sort() method, rearrange the four potions in the 'potions' array so they are in DESCENDING order, with the 'draught of living death' at index 0 and the 'pepperup potion' at index 3.
potions.sort((a, b) => b.shelf - a.shelf);

// - Some students have been kept behind in detention by Professor McGonagall. Obsessed with orderliness, she has asked you to sort the students into alphabetical order. Sort the names in the array in alphebetical order according to their last name.
students.sort((a, b) => {
  const lastName1 = a.slice(a.lastIndexOf(" ") + 1);
  const lastName2 = b.slice(b.lastIndexOf(" ") + 1);

  if (lastName1 > lastName2) {
    return 1;
  } else if (lastName1 < lastName2) {
    return -1;
  }
  return 0;
});
