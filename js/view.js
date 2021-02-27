function addCard() {
    var sec = document.querySelector('.main-add-task')

    sec.appendChild(addCardBtn())
    sec.appendChild(addCardInp())
}
addCard()

function card() {
    var sec = document.querySelector('.main-task')
    var div = document.querySelector('.task')

    div.appendChild(firstSec())
    div.appendChild(seSec())
    div.appendChild(thirdSec())

    sec.appendChild(div)
}
card()

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
            inp.value = ''
        }
    })
}
dyAddCard()