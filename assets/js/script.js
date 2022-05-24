var buttonEl = document.querySelector('#save-task');
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    listToDoEl.appendChild(listItemEl);
};

buttonEl.addEventlistener("click", createTaskHandler);

