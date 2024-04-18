// const todos = [];
const listContainer = document.getElementById("todo-container");
// create object todoList
const todoList = {
  input: document.querySelector("input"),
  addBtn: document.querySelector("#todo-add-btn"),
  // define function for adding a new todo item
  addItem: () => {
    // create section with class "todo-item"
    const newItem = document.createElement("section");
    newItem.className = "todo-item";
    // create input field with class and placeholder
    const todoInput = document.createElement("input");
    todoInput.className = "todo-input";
    todoInput.placeholder = "add a tada";
    // Copy the text from the input field and paste it into the newly created input
    todoInput.value = todoList.input.value.trim(); // Trim the input value
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
    deleteBtn.addEventListener("click", () => {
      // Remove the parent element (todo item)
      newItem.remove();
    });
    // Add event listener to the checked button
    function moveItem(action, position) {
      checkBtn.classList[action]("check-btn-checked");
      todoInput.classList[action]("input-checked");
      deleteBtn.classList[action]("delete-btn-disabled");
      listContainer[position](newItem);
    }
    checkBtn.addEventListener("change", () => {
      if (checkBtn.checked) {
        // move todo item to the bottom
        moveItem("add", "appendChild");
      } else {
        // move todo item back to the top
        moveItem("remove", "prepend");
      }
    });
  },
};

// function to handle adding a new todo item
function handleAddTodo() {
  // check if the input field is empty
  if (todoList.input.value.trim() === "") {
    todoList.input.placeholder = "Please add your todo first!";
  } else {
    todoList.addItem();
    todoList.input.value = ""; // clear the input field
  }
}

todoList.addBtn.addEventListener("click", handleAddTodo);

// listen for keydown event on the input field
todoList.input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleAddTodo();
  }
});
