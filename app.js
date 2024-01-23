function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== "") {
        var li = document.createElement('li');
        li.innerHTML = `
            ${taskInput.value}
            <button onclick="removeTask(this)">Eliminar</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function removeTask(button) {
    var li = button.parentElement;
    li.parentNode.removeChild(li);
}
