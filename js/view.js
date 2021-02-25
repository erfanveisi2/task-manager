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

function work() {

    var sec = document.querySelector('.add-work-div')
    var workSec = document.querySelector('.main-works')

    workSec.appendChild(works())
    sec.before(workSec)

    return sec
}


function dyAddWork() {

    var sec = document.querySelector('.add-work-div')
    var btn = document.querySelector('.add-work-btn')
    var inp = document.querySelector('.add-work-inp')

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
            work()
            inp.value = ''
        }
    })

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
            btn.classList.remove('hidden')
            addWork()
            dyAddWork()
            inp.value = ''

        }
    })
}
dyAddTask()