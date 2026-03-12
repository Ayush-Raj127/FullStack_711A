let tasks = [];

let taskInput = document.getElementById("taskName");
let priorityInput = document.getElementById("priority");
let taskList = document.getElementById("taskList");

document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
  let name = taskInput.value;
  let priority = priorityInput.value;

  if (name === "") return;

  let task = {
    name: name,
    priority: priority,
    completed: false,
  };

  tasks.push(task);

  taskInput.value = "";

  renderTasks(tasks);
}

function renderTasks(taskArray) {
  taskList.innerHTML = "";

  taskArray.forEach((task, index) => {
    let li = document.createElement("li");

    if (task.completed) {
      li.classList.add("completed");
    }

    li.textContent = task.name + " (" + task.priority + ")";

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    completeBtn.onclick = function () {
      tasks[index].completed = !tasks[index].completed;
      renderTasks(tasks);
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function () {
      tasks.splice(index, 1);
      renderTasks(tasks);
    };

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}

function showAll() {
  renderTasks(tasks);
}

function showCompleted() {
  let completedTasks = tasks.filter((task) => task.completed);
  renderTasks(completedTasks);
}

function showPending() {
  let pendingTasks = tasks.filter((task) => !task.completed);
  renderTasks(pendingTasks);
}