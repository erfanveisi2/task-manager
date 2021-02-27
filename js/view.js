function addCard() {
    var sec = document.querySelector('.main-add-task')

    sec.appendChild(addCardBtn())
    sec.appendChild(addCardInp())
}
addCard()