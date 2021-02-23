function addTaskBtn() {
    return createElement('button', { class: 'add-task' }, 'Add another list')
}

function addTaskInp() {
    return createElement('input', { class: 'add-task-inp hidden', placeholder: 'Enter list title...' })
}

function task() {

    var inp = document.querySelector('.add-task-inp')

    var mainDiv = createElement('div', { class: 'task' }, '')
    var titleDiv = createElement('div', { class: 'title' }, '')
    var titleH3 = createElement('h3', { class: 'title-h3 left' }, inp.value)
    var titleIcon = createElement('i', { class: 'fas fa-ellipsis-h menuicon right' }, '')
    var worksDiv = createElement('div', { class: 'works' }, '')
    var worksNote = createElement('p', { class: 'works-note' }, )
    var addWorkDiv = createElement('div', { class: 'add-work-div' }, '')
    var addWorkBtn = createElement('button', { class: 'add-work-btn show' }, 'Add another card')
    var addWorkIcon = createElement('i', { class: 'fas fa-plus' }, '')
    var addWorkInp = createElement('input', { class: 'add-work-inp hidden', placeholder: 'Enter a title for this card...' })


    titleDiv.appendChild(titleH3)
    titleDiv.appendChild(titleIcon)
    worksDiv.appendChild(worksNote)
    addWorkBtn.appendChild(addWorkIcon)
    addWorkDiv.appendChild(addWorkBtn)
    addWorkDiv.appendChild(addWorkInp)

    mainDiv.appendChild(titleDiv)
    mainDiv.appendChild(worksDiv)
    mainDiv.appendChild(addWorkDiv)

    return mainDiv
}