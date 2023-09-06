const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask(event) {
  event.preventDefault();

  // Check if input is not empty
  if (taskInput.value.trim() !== "") {
    const task = document.createElement("li");
    task.classList.add("task");

    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";

    const taskContent = document.createElement("input");
    taskContent.type = "text";
    taskContent.value = taskInput.value;

    function removeTask() {
      taskList.removeChild(task);
    }

    const moveUpButton = document.createElement("button");
    moveUpButton.textContent = "↑";
    moveUpButton.classList.add("move-up"); // Add class for styling
    moveUpButton.addEventListener("click", moveTaskUp);

    const moveDownButton = document.createElement("button");
    moveDownButton.textContent = "↓";
    moveDownButton.classList.add("move-down"); // Add class for styling
    moveDownButton.addEventListener("click", moveTaskDown);

    const taskDeleteButton = document.createElement("button");
    taskDeleteButton.textContent = "x";
    taskDeleteButton.classList.add("delete-task"); // Add class for styling
    taskDeleteButton.addEventListener("click", removeTask);

    task.appendChild(moveUpButton);
    task.appendChild(moveDownButton);

    task.appendChild(taskCheckbox);
    task.appendChild(taskContent);
    task.appendChild(taskDeleteButton);

    taskList.appendChild(task);

    taskForm.reset();
  }
}

taskForm.addEventListener("submit", addTask);

function moveTaskUp(event) {
  const task = event.target.parentElement;
  const previousTask = task.previousElementSibling;
  if (previousTask) {
    taskList.insertBefore(task, previousTask);
  }
}

function moveTaskDown(event) {
  const task = event.target.parentElement;
  const nextTask = task.nextElementSibling;
  if (nextTask) {
    taskList.insertBefore(nextTask, task);
  }
}

// document.getElementById("new-task").addEventListener("keyup", function (event) {
//   if (event.key === "Enter") {
//     addTask();
//   }
// });

// function addTask() {
//   const taskText = document.getElementById("new-task").value.trim();

//   if (taskText.length > 0) {
//     const li = document.createElement("li");

//     li.innerHTML = `
//             <span class="task">${taskText}</span>
//             <button onclick="completeTask(this)">Complete</button>
//             <button onclick="removeTask(this)">Remove</button>
//         `;

//     document.getElementById("task-list").appendChild(li);
//     document.getElementById("new-task").value = "";
//   }
// }

// function completeTask(btn) {
//   btn.previousElementSibling.classList.toggle("completed");
// }

// function removeTask(btn) {
//   btn.parentElement.remove();
// }
