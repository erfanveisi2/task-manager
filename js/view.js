function addTask() {

    var sec = document.querySelector('.main-add-task')

    sec.appendChild(addTaskBtn())
    sec.appendChild(addTaskInp())

    return sec
}
addTask()

function addWork() {

    var sec = document.querySelector('.main-task')

    sec.appendChild(task())
}

function dyAddTask() {
    var sec = document.querySelector('.main-add-task')
    var btn = document.querySelector('.add-task')
    var inp = document.querySelector('.add-task-inp')

    sec.addEventListener('click', () => {
        btn.classList.add('hidden')
        inp.classList.remove('hidden')
        inp.classList.add('show')
        inp.focus()
    })

    inp.addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
            inp.classList.remove('show')
            inp.classList.add('hidden')
            inp.value = ''
            btn.classList.remove('hidden')
            addWork()

        }
    })
}
dyAddTask()