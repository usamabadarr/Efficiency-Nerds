const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-text");
const todoList = document.getElementById("todo-list");
const addImageBtn = document.querySelector("#add-image");
const imageUrlInput = document.querySelector("#image-url");
// const getRandomTask = function (tasksArray);

const themeSwitcher = document.querySelector("#toggle");
const body = document.querySelector("body");

let mode = "light";
body.setAttribute("class", "container-fluid light");

themeSwitcher.addEventListener("click", function (event) {
  console.log(event);
  if (mode === "dark") {
    mode = "light";
    body.setAttribute("class", "container-fluid light");
  } else {
    mode = "dark";
    body.setAttribute("class", "container-fluid dark");
  }
});

// To do List
const todos = [];
console.log(todos);
function renderTodos() {
  todoList.innerHTML = "";
  const storeTodos = JSON.parse(localStorage.getItem("todos"));
  console.log(storeTodos);
  if (storeTodos === null) {
    return;
  }
  for (let i = 0; i < storeTodos.length; i++) {
    const todo = storeTodos[i];

    const list = document.createElement("li");
    list.textContent = todo;
    list.setAttribute("data-index", i);

    const button = document.createElement("button");
    button.textContent = "Done";

    list.appendChild(button);
    todoList.append(list);
  }
}

function storeTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

renderTodos();

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const todoText = todoInput.value.trim();
  if (todoText === "") {
    return;
  }
  console.log(todoText);

  todos.push(todoText);
  todoInput.value = "";

  storeTodos();
  renderTodos();
});

todoList.addEventListener("click", function (event) {
  const element = event.target;

  if (element.matches("button") === true) {
    const index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);

    storeTodos();
    renderTodos();
  }
});
//  end todo

//randomizer
let button = document.getElementById("randomize");
button.addEventListener("click", function (event) {
  let i = Math.floor(Math.random() * todos.length) + 1;
  let randomToDo = todos[i - 1];
  console.log(randomToDo);

  document.getElementById("randomTodo").textContent = randomToDo;

  // alert ("Your task is: "+randomToDo);
});

// timer

let timeLeft = 1200;
let timerId;

function startTimer() {
  timerId = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerId);
      alert("Timer is up!");
    } else {
      const minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      document.getElementById("timer").innerText = `${minutes}:${seconds}`;
      timeLeft--;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
}
