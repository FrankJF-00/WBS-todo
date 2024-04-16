document.addEventListener("DOMContentLoaded", () => {
    const todoInputElement = document.getElementById("todo-input");
    const todoAddButton = document.getElementById("todo-add-btn");
    const todoListElement = document.querySelector(".todo-list");
  
    function addTodo() {
      const newTodoText = todoInputElement.value.trim();
      if (newTodoText !== "") {
        const todoItem = document.createElement("li");
        todoItem.innerHTML = `
            <div class="view">
                <input class="toggle" type="checkbox">
                <label>${newTodoText}</label>
                <button class="destroy"></button>
            </div>
        `;
        todoListElement.prepend(todoItem);
        todoInputElement.value = "";
      }
    }
  
    todoAddButton.addEventListener("click", addTodo);
  
    todoInputElement.addEventListener("keypress", (event) => {
      const ENTER_KEY = 13;
      if (event.keyCode === ENTER_KEY) {
        addTodo();
      }
    });
  });