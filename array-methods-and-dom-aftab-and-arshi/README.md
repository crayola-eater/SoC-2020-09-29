# Using Array Methods with the DOM

It's time to get organised! Use the following tasks to build a todo list that uses array methods, querySelectorAll, NodeLists, and the DOM to help you keep everything straight and keep track of all those tasks you're juggling.

_Remember to break down the problem into solvable chunks_

## Tasks:

### Part One: Initial Setup and Adding Items

👉 1a. Set up your [index.html](index.html) file. Make sure you include an input field, a button, and a ul element that will contain the todos.

👉 1b. Link [main.js](main.js) to your HTML file. Make a function called addTodo that gets the value of the input field, creates a new list item element with that value as its text and a class of "todo-item" and adds it to the unordered list item element. Using just JavaScript, have this function invoked when the user clicks the button.

### Part Two: Checking for Duplicates

You don't want to be able to accidentally add the same thing to your list twice... No sense making extra work for yourself!

👉 2a. Make another function called checkForDuplicates that takes in a string containing a todo. Within the function, select all of the existing todos already on the page in a NodeList, and turn it into an array. Use an array method to check through them to make sure that the new todo doesn't duplicate any of the todos already in the list. This needs to be case insensitive! Return true from checkForDuplicates if the todo is a duplicate or false if it's not.

👉 2b. Call checkForDuplicates within addTodo. If checkForDuplicates returns true, alert "You've already added that to the list!" instead of adding the todo to the page.

### Part Three: Ticking Off the List

I don't know about you, but a todo list that will only let me add tasks and not cross them off is my personal nightmare. Let's add functionality so you can get that sweet dopamine hit when you can cross a task off of your list.

👉 3a. Create a class in styles.css called "completed" which applies CSS that puts a line horizontally through the middle of the text. Make a function called toggleDone that takes in an event and toggles the class of completed on the event.target (if the element doesn't have class "completed", the function should add it, and if it does, the function should take it away).

👉 3b. Within addTodo, add an event listener on the todo list item to call toggleDone when the list item is clicked.

👉 3c. To be able to tidy up our list after we've had a productive day, make a function called clearFinishedTodos. In this function, select all of the task list items at once. Use forEach to remove all the items that have the class of "completed"

👉 3d. Below the list, add a button with the text "Clear finished tasks". Add an event listener to this button that fires clearFinishedTodos when the button is clicked. When you click the button, all of the crossed-off todos should be cleared from the list, leaving only the undone tasks.

## Bonus:

If you finish the tasks above, you can jazz your todo list up even more to create an impressive portfolio project. Some ideas include:

🌟 Style it up! Beautify your todo list with CSS.

🌟 Add a button next to each task that will delete only that task off of the list (alongside just being able to cross it off).

🌟 Create multiple lists on your page - split your todos out by days of the week, categories (bootcamp, house chores, errands, etc. for example), or multiple people's tasks.

🌟 Add a way to track due dates for each task.
