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
  },
};
// button to test functionality
document.querySelector("#todo-add-btn").addEventListener("click", () => {
  todoList.addItem();
});
