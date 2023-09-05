document.getElementById("new-task").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = document.getElementById("new-task").value.trim();

  if (taskText.length > 0) {
    const li = document.createElement("li");

    li.innerHTML = `
            <span class="task">${taskText}</span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="removeTask(this)">Remove</button>
        `;

    document.getElementById("task-list").appendChild(li);
    document.getElementById("new-task").value = "";
  }
}

function completeTask(btn) {
  btn.previousElementSibling.classList.toggle("completed");
}

function removeTask(btn) {
  btn.parentElement.remove();
}
