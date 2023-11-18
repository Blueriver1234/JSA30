// Khởi tạo DOM - Document Object Model
const mainTitle = document.getElementById("main-title");
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoContainer = document.getElementById("todo-container")

// console.log(mainTitle);

// Thay đôi style thông qua DOM
mainTitle.style.color = "green"

// Thay đôi nội dung của thẻ thông qua DOM
mainTitle.innerText = "JSA 30 - Todo List"


// Hàm trong JS: 
// VD Hàm xin chào
// Cú pháp: 
// function <tên_hàm>(){
//   Khối lệnh
// }

// Lưu ý: Muốn thực thi lệnh trong hàm thì phải gọi hàm


// function sayHello() {
//   alert("Hello")
// }

// sayHello() // Gọi hàm


// Tạo 1 mảng để lưu danh sách todo

// Lấy todo List trong Localstorage ra và Lưu vào biến todoList
let todoList = JSON.parse(localStorage.getItem("todo-list")) || [];
// Khi trong LS chưa có todo-list thì gán bảng mảng rỗng

function addTodo(event) {

  // Chặn sự kiện tải lại trang
  event.preventDefault()

  // Lấy dữ liệu của ô input thông qua DOM
  let todoText = todoInput.value;
  console.log(todoText);

  // Thêm phần tử todoText vào cuối mảng
  todoList.push(todoText);

  // Lưu 
  localStorage.setItem('todo-list', JSON.stringify(todoList));
  
  // Reset lại ở input về rỗng
  todoInput.value = ""

  // Khi Lưu xong thì render lại bằng cách gọi hàm renderTodoList
  renderTodoList();
}

todoContainer.innerHTML = "<li>Ăn cơm</li>"

// Hàm xử lí in ra danh sách todo
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