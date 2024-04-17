// const todos = [];
const listContainer = document.getElementById("todo-container");
// create object todoList
const todoList = {
  input: document.querySelector("input"),
  // define function for adding a new todo item
  addItem: function newItem() {
    // create section with class "todo-item"
    const newItem = document.createElement("section");
    newItem.className = "todo-item";
    // create input field with class and placeholder
    const todoInput = document.createElement("input");
    todoInput.className = "todo-input";
    todoInput.placeholder = "add a tada";
    // Copy the text from the input field and paste it into the newly created input
    const inputField = document.querySelector("input");
    todoInput.value = inputField.value;
    // create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    // create input type="checkbox"
    const checkBtn = document.createElement("input");
    checkBtn.type = "checkbox";
    checkBtn.className = "check-btn";
    // append all child elements to their parent elements
    newItem.appendChild(todoInput);
    newItem.appendChild(deleteBtn);
    newItem.appendChild(checkBtn);
    listContainer.prepend(newItem);

    // Add event listener to the delete button
    deleteBtn.addEventListener("click", function () {
      newItem.remove(); // Remove the parent element (todo item)
    });
    // Add event lsitener to the checked button
    checkBtn.addEventListener("change", function () {
      if (checkBtn.checked) {
        todoInput.classList.add("input-checked");
        checkBtn.classList.add("check-btn-checked");
      } else {
        checkBtn.classList.remove("check-btn-checked");
        todoInput.classList.remove("input-checked");
      }
    });
  },
};

// function to handle adding a new todo item
function handleAddTodo() {
  // check if the input field is empty
  if (todoList.input.value === "") {
    todoList.input.placeholder = "Please add a todo!";
  } else {
    todoList.addItem();
    todoList.input.value = ""; // clear the input field
  }
}

document
  .querySelector("#todo-add-btn")
  .addEventListener("click", handleAddTodo);

// listen for keydown event on the input field
document.querySelector("input").addEventListener("keydown", (event) => {
  // check if the key pressed is ENTER
  if (event.key === "Enter") {
    handleAddTodo();
  }
});
