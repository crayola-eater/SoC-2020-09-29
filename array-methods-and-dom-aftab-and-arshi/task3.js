// 👉 3a. Create a class in styles.css called "completed" which applies CSS that puts a line horizontally through the middle of the text. Make a function called toggleDone that takes in an event and toggles the class of completed on the event.target (if the element doesn't have class "completed", the function should add it, and if it does, the function should take it away).

function toggleDone(event) {
  event.target.classList.toggle("completed");
}

// 👉 2a. Make another function called checkForDuplicates that takes in a string containing a todo. Within the function, select all of the existing todos already on the page in a NodeList, and turn it into an array. Use an array method to check through them to make sure that the new todo doesn't duplicate any of the todos already in the list. This needs to be case insensitive! Return true from checkForDuplicates if the todo is a duplicate or false if it's not.
function checkForDuplicates(todo) {
  const liElements = [...document.querySelectorAll("li")];
  return liElements.some(
    (li) => li.innerText.toLowerCase() === todo.toLowerCase()
  );
}

// 👉 2b. Call checkForDuplicates within addTodo. If checkForDuplicates returns true, alert "You've already added that to the list!" instead of adding the todo to the page.
function addTodo() {
  const input = document.querySelector("#todo-input");
  const value = input.value.trim();

  if (value.length === 0) {
    return;
  } else if (checkForDuplicates(value)) {
    return alert("You've already added that to the list!");
  }

  const li = document.createElement("li");
  li.classList.add("todo-item");
  li.textContent = value;

  // 👉 3b. Within addTodo, add an event listener on the todo list item to call toggleDone when the list item is clicked.
  li.addEventListener("click", toggleDone);

  const ul = document.querySelector("#todo-list");
  ul.appendChild(li);

  input.value = "";
}

document.querySelector("#add-todo").addEventListener("click", addTodo);

// 👉 3c. To be able to tidy up our list after we've had a productive day, make a function called clearFinishedTodos. In this function, select all of the task list items at once. Use forEach to remove all the items that have the class of "completed"
function clearFinishedTodos() {
  // Longer/Another way to do it would be: [...document.querySelectorAll("#todo-list > li")].filter((li) => li.classList.contains("completed"));
  const completedLiElements = [
    ...document.querySelectorAll("#todo-list > li.completed"),
  ];

  completedLiElements.forEach((li) => {
    li.parentNode.removeChild(li);
  });
}

//👉 3d. Below the list, add a button with the text "Clear finished tasks". Add an event listener to this button that fires clearFinishedTodos when the button is clicked. When you click the button, all of the crossed-off todos should be cleared from the list, leaving only the undone tasks.
document
  .querySelector("#clear-todos")
  .addEventListener("click", clearFinishedTodos);
