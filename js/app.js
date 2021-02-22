function addTaskBtn() {
    return createElement('button', { class: 'add-task' }, 'Add another list')
}

function addTaskInp() {
    return createElement('input', { class: 'add-task-inp hidden', placeholder: 'Enter list title...' })
}

function mainTask() {
    return createElement('div', { class: 'task' })
}

function mainTitle() {
    var div = createElement('div', { class: 'title' })
    var h3 = createElement('h3', { class: 'title=h3 left' })
    var icon = createElement('i', { class: 'fas fa-ellipsis-h menuicon right' })

    div.appendChild(h3)
    div.appendChild(icon)

    return div
}