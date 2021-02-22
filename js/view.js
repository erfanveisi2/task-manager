function addTask() {

    var sec = document.querySelector('.main-add-task')

    sec.appendChild(addTaskBtn())
    sec.appendChild(addTaskInp())

    return sec
}
addTask()

function dyAddTask() {
    var sec = document.querySelector('.main-add-task')
    var btn = document.querySelector('.add-task')
    var inp = document.querySelector('.add-task-inp')

    sec.addEventListener('click', () => {
        btn.classList.remove('show')
        btn.classList.add('hidden')
        inp.classList.remove('hidden')
        inp.classList.add('show')
        inp.focus()
    })

    inp.addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
            inp.classList.remove('show')
            inp.classList.add('hidden')
            btn.classList.remove('hidden')
            btn.classList.add('show')
        }
    })
}
dyAddTask()