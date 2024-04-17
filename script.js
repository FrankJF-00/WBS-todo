// const todos = [];
const listContainer = document.getElementById("todo-container");
// create object todoList
const todoList = {
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
    todoInput.value = inputField.value.trim(); // Trim the input value
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
    // Add event listener to the checked button
    checkBtn.addEventListener("change", function () {
      if (checkBtn.checked) {
        checkBtn.classList.add("check-btn-checked");
        todoInput.classList.add("input-checked");
        deleteBtn.classList.add("delete-btn-disabled");
        listContainer.appendChild(newItem); // Move the todo item to the bottom of the main
      } else {
        checkBtn.classList.remove("check-btn-checked");
        todoInput.classList.remove("input-checked");
        deleteBtn.classList.remove("delete-btn-disabled");
        listContainer.prepend(newItem); // Move the todo item back to the top of the main
      }
    });
  },
};

// function to handle adding a new todo item
function handleAddTodo() {
  // check if the input field is empty
  if (document.querySelector("input").value.trim() === "") {
    alert("Please add a todo!");
  } else {
    todoList.addItem();
    document.querySelector("input").value = ""; // clear the input field
  }
}

// button to test functionality
document.querySelector("#todo-add-btn").addEventListener("click", handleAddTodo);

// listen for keydown event on the input field
document.querySelector("#todo-input").addEventListener("keydown", (event) => {
  // check if the key pressed is ENTER
  if (event.key === "Enter") {
    handleAddTodo();
  }
});
