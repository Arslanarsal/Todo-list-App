const input = document.querySelector(".input input");
const button = document.querySelector(".input button");
const ul = document.querySelector(".data ul");

let todoListData = [];

// load data from storrage
let renderTodoList = function () {
  todoListData = getTodoData();
  todoListData.forEach((data) => {
    let li = document.createElement("li");
    li.innerHTML = data;
    document.querySelector(".data ul").appendChild(li);
  });
};

//Save Data in local storage
let = addTodoListToLS = (data) => {
  return localStorage.setItem("todoList", JSON.stringify(data));
};

//Get Data from local storage
let getTodoData = () => {
  let data = JSON.parse(localStorage.getItem("todoList"));
  return Array.isArray(data) ? data : [];
};

button.addEventListener("click", () => {
  todoListData = getTodoData();
  let data = input.value.trim();
  input.value = "";

  if (data.length && !todoListData.includes(data)) {
    todoListData.push(data);
    addTodoListToLS(todoListData);
    let li = document.createElement("li");
    li.innerHTML = data;
    ul.appendChild(li);
  }
});

ul.addEventListener("click", (e) => {
  let remove = e.target;

  if (remove.tagName === "LI") {
    remove.remove();
    let updatedlis = [];
    updatedlis = todoListData.filter(
      (curdata) => curdata !== remove.textContent
    );
    todoListData = updatedlis;
    addTodoListToLS(todoListData);
  }
});

renderTodoList();
