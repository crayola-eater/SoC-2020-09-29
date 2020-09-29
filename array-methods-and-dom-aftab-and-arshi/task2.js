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

  const ul = document.querySelector("#todo-list");
  ul.appendChild(li);

  input.value = "";
}

document.querySelector("#add-todo").addEventListener("click", addTodo);
