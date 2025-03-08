class Task {
    constructor(title, dueDate, dueTime, description) {
        this.title = title = title == null || title.trim() == ""  ? "Untitled" : title;
        this.dueDate = dueDate == null || dueDate.trim() == "" ? "No Due Date" : dueDate;
        this.dueTime = dueTime = dueTime == null || dueTime.trim() == "" ? "No Due Time" : dueTime;
        this.description = description = description == null || description.trim() == "" ? "No Description" : description;
    }
}

let task1 = null;
let task2 = null;
let task3 = null;

const task1Element = document.querySelector("#task-1");
const task2Element = document.querySelector("#task-2");
const task3Element = document.querySelector("#task-3");
const deleteButtons = document.querySelectorAll(".delete-button");
deleteButtons.forEach((button, i) => button.onclick = () => deleteTask(i + 1));

function UpdateTaskElement(element, task) {
    if (task != null) {
        element.style.display = "flex";

        const title = element.querySelector(".task-title");
        const dueDate = element.querySelector(".task-due-date");
        const dueTime = element.querySelector(".task-due-time");
        const description = element.querySelector(".task-description");

        title.innerText = task.title;
        dueDate.innerText = task.dueDate;
        dueTime.innerText = task.dueTime;
        description.innerText = task.description;
    }
    else {
        element.style.display = "none";       
    }
}

const createTaskButton = document.querySelector("#create-task-button");
createTaskButton.addEventListener("click", createTask);

function createTask() {
    const title = document.querySelector("#title-input");
    const dueDate = document.querySelector("#due-date-input");
    const dueTime = document.querySelector("#due-time-input");
    const description = document.querySelector("#description-input");

    const newTask = new Task(title.value, dueDate.value, dueTime.value, description.value);
    
    if (task3 == null) {
        title.value = "";
        dueDate.value = "";
        dueTime.value = "";
        description.value = "";
    }

    if (task1 == null) {
        task1 = newTask;
        UpdateTaskElement(task1Element, newTask);
    }
    else if (task2 == null) {
        task2 = newTask;
        UpdateTaskElement(task2Element, newTask);
    }
    else if (task3 == null) {
        task3 = newTask;
        UpdateTaskElement(task3Element, newTask);
    }
    else {
        alert("You've reached the limit of 3 tasks! Subscribe to Todo+ for more tasks.");
    }
}

function deleteTask(taskID) {
    if (taskID == 1) {
        task1 = task2;
        task2 = task3;
        task3 = null;
    }
    else if (taskID == 2) {
        task2 = task3;
        task3 = null;
    }
    else if (taskID == 3) {
        task3 = null;
    }
    UpdateTaskElement(task1Element, task1);
    UpdateTaskElement(task2Element, task2);
    UpdateTaskElement(task3Element, task3);
}