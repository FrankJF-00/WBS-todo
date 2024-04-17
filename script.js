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
        todoInput.style.textDecoration = "line-through";
        todoInput.style.color = "gray";
        checkBtn.style.opacity = "0.5";
        deleteBtn.style.opacity = "0.5";
      } else {
        todoInput.style.textDecoration = "none";
        todoInput.style.color = "black";
        checkBtn.style.opacity = "1";
        deleteBtn.style.opacity = "1";
      }
    });
  },
};

// function to handle adding a new todo item
function handleAddTodo() {
  // check if the input field is empty
  if (document.querySelector("input").value === "") {
    alert("Write something");
  } else {
    todoList.addItem();
    document.querySelector("input").value = ""; // clear the input field
  }
}

// button to test functionality

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
