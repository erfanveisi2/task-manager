function dyAddTask() {

    var sec = document.querySelector('.main-add-task')

    sec.appendChild(addTaskBtn())
    sec.appendChild(addTaskInp())

    return sec
}
dyAddTask()