function addTaskBtn() {
    return createElement('button', { class: 'add-task' }, 'Add another list')
}

function addTaskInp() {
    return createElement('input', { class: 'add-task-inp', placeholder: 'Enter list title...' })
}