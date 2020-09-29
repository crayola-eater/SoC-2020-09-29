const codeCoaches = ["ben", "chris", "tim", "liz", "mell", "tao"];

// 👉 Write a function that takes in a string and turns it to upper case.
// 👉 Use the `.map()` method to generate a new array by calling your function on each item in `codeCoaches`. Store the returned value from map in the variable `capitalisedCodeCoaches`,
const capitalisedCodeCoaches = codeCoaches.map((coach) => coach.toUpperCase());
