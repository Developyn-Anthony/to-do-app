const taskInput = document.querySelector('.work-input')
const taskButton = document.querySelector('.work-button')
const taskList = document.querySelector('.list')

taskButton.addEventListener("click", addTask)
taskList.addEventListener("click", deleteTask)


// Adding a task function
function addTask(event) {

    event.preventDefault();

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const newTask = document.createElement('li');
    newTask.innerText = taskInput.value;
    newTask.classList.add('taskItem');
    taskDiv.appendChild(newTask);

    if (taskInput.value === "") {
        return null;
    }

    // delete task
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    taskDiv.appendChild(deleteButton);

    taskList.appendChild(taskDiv);

    taskInput.value = "";
}

//delete a task function
function deleteTask(e) {

    const item = e.target;


    if (item.classList[0] === "delete-btn") {
        const task = item.parentElement
        task.remove() 
    }
}