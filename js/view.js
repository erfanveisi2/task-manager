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