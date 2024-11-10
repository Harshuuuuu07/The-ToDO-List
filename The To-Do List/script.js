const todoList = document.getElementById("todoList");
const newToDoInput = document.getElementById("newToDoInput");
const addTodoBtn = document.getElementById("addTodoBtn");

addTodoBtn.addEventListener("click", () => {
    const newTodoText = newToDoInput.value;

    if (newTodoText !== "") {
        const newToDoItem = document.createElement("li");
        newToDoItem.innerText = newTodoText;

        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.innerText = "X";
        deleteTodoBtn.classList.add("delete-todo-btn");

        deleteTodoBtn.addEventListener("click", function () {
            newToDoItem.remove();
        });

        newToDoItem.appendChild(deleteTodoBtn);
        todoList.appendChild(newToDoItem);
        newToDoInput.value = "";
    }
});
