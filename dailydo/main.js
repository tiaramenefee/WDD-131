document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskContainer = document.getElementById("taskContainer");
    
    let tasks = [];

    function renderTasks() {
        taskContainer.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task.text;
            
            if (task.completed) {
                li.style.textDecoration = "line-through";
            }
            
            const completeButton = document.createElement("button");
            completeButton.textContent = "✔";
            completeButton.addEventListener("click", () => toggleTask(index));
            
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "❌";
            deleteButton.addEventListener("click", () => deleteTask(index));
            
            li.appendChild(completeButton);
            li.appendChild(deleteButton);
            taskContainer.appendChild(li);
        });
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            tasks.push({ text: taskText, completed: false });
            taskInput.value = "";
            renderTasks();
        }
    }

    function toggleTask(index) {
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    }

    addTaskButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });

    renderTasks();
});
