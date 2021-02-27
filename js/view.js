function addCard() {
    var sec = document.querySelector('.main-add-task')

    sec.appendChild(addCardBtn())
    sec.appendChild(addCardInp())
}
addCard()

function card() {
    var sec = document.querySelector('.main-task')

    sec.appendChild(mainCard())

    var mainDiv = document.querySelector('.add-work-div')
    var btn = document.querySelector('.add-work-btn')
    var inp = document.querySelector('.add-work-inp')

    mainDiv.addEventListener('click', () => {
        btn.classList.add('hidden')
        btn.classList.remove('show')
        inp.classList.remove('hidden')
        inp.classList.add('show')
        inp.focus()
    })
    inp.addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
            inp.classList.add('hidden')
            inp.classList.remove('show')
            btn.classList.remove('hidden')
            btn.classList.add('show')
            inp.value = ''
        }
    })
}


function dyAddCard() {
    var sec = document.querySelector('.main-add-task')
    var btn = document.querySelector('.add-task')
    var inp = document.querySelector('.add-task-inp')

    sec.addEventListener('click', () => {
        btn.classList.add('hidden')
        btn.classList.remove('show')
        inp.classList.remove('hidden')
        inp.classList.add('show')
        inp.focus()
    })
    inp.addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
            inp.classList.add('hidden')
            inp.classList.remove('show')
            btn.classList.remove('hidden')
            btn.classList.add('show')
            card()
            inp.value = ''
        }
    })
}
dyAddCard()