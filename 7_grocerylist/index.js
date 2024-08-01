const taskinput = document.querySelector('#taskinput');
const taskcontainer = document.querySelector('.task-container');
function taskFunction() {
    if (taskinput != '') {
        const taskText = taskinput.value.trim();
        const task = document.createElement('p')
        task.innerText = taskText

        taskcontainer.appendChild(task)
        taskinput.value = '';
    }
}

taskinput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        taskFunction();
    }
})