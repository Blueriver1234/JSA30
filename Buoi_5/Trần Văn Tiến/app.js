const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoContainer = document.getElementById('todo-container');
const todoList = JSON.parse(localStorage.getItem("todo-list")) || [];
function addTodo(event) {
    event.preventDefault()
    let todoText = todoInput.value;
    todoList.push(todoText);
    localStorage.setItem("todo-list", JSON.stringify(todoList));
    todoInput.value = ""
    renderTodoList()
}

function renderTodoList() {
    let htmls = "";

    for (let i = 0; i < todoList.length; i++){
        htmls += "<li>" + todoList[i] + "</li>";
    }
    todoContainer.innerHTML = htmls;
}
renderTodoList()

addBtn.addEventListener('click', function(event) {
    addTodo(event)
})













