function addCardBtn() {
    return createElement('button', { class: 'add-task' }, 'Add another list')
}

function addCardInp() {
    return createElement('input', { class: 'add-task-inp hidden', placeholder: 'Enter list title...' })
}

function mainDiv() {
    return createElement('div', { class: 'task' }, '')
}

function firstSec() {
    var titleDiv = createElement('div', { class: 'title' }, '')
    var titleH3 = createElement('h3', { class: 'title-h3 left' }, '')
    var titleIcon = createElement('i', { class: 'fas fa-ellipsis-h menuicon right' }, '')

    titleDiv.appendChild(titleH3)
    titleDiv.appendChild(titleIcon)

    return mainDiv().appendChild(titleDiv)
}

function seSec() {
    var worksDiv = createElement('div', { class: 'works' }, '')
    var worksNote = createElement('p', { class: 'workd-note' }, )

    worksDiv.appendChild(worksNote)
    return mainDiv().appendChild(worksDiv)
}

function thirdSec() {
    var addWorkDiv = createElement('div', { class: 'add-work-div' }, 'Add another card')
    var addWorkBtn = createElement('button', { class: 'add-work-btn show' })
    var addWorkIcon = createElement('i', { class: 'fas fa-plus' }, '')
    var addWorkInp = createElement('input', { class: 'add-work-inp- hidden', placeholder: 'Enter a title for this card...' })

    addWorkDiv.appendChild(addWorkIcon)
    addWorkDiv.appendChild(addWorkBtn)
    addWorkDiv.appendChild(addWorkInp)

    return mainDiv().appendChild(addWorkDiv)
}