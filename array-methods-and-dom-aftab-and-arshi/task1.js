// 👉 1b. Link [main.js](main.js) to your HTML file. Make a function called addTodo that gets the value of the input field, creates a new list item element with that value as its text and a class of "todo-item" and adds it to the unordered list item element. Using just JavaScript, have this function invoked when the user clicks the button.

function addTodo() {
  const input = document.querySelector("#todo-input");
  const value = input.value.trim();

  if (value.length === 0) {
    return;
  }

  // create new li element
  const li = document.createElement("li");
  li.classList.add("todo-item");
  li.textContent = value;

  // attach to ul
  const ul = document.querySelector("#todo-list");
  ul.appendChild(li);

  input.value = "";
}

document.querySelector("#add-todo").addEventListener("click", addTodo);
