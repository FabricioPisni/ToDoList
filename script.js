const todoAddInput = document.querySelector('.todo-add-input')
const add = document.querySelector('.add')
const todoAdd = document.querySelector('.todo-add')
const container = document.querySelector('.todo-add-container')

function adicionar(task){

    task.preventDefault()

    const inputValue = todoAddInput.value

    const todoList = document.createElement('div')
    todoList.classList.add('todo-list')

    const tarefa = document.createElement('h3')
    tarefa.innerText = inputValue

    const doneButton = document.createElement('button')
    doneButton.classList.add('done')
    doneButton.innerText = "Feito"

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('excluir')
    deleteButton.innerText = "Excluir"

    todoList.appendChild(tarefa)
    todoList.appendChild(doneButton)
    todoList.appendChild(deleteButton)

    container.appendChild(todoList)

    todoAddInput.value = ""
    todoAddInput.focus()

}

function clicar(botao){

    const targetEl = botao.target
    parentEl = targetEl.closest('div')

    if (targetEl.classList.contains('excluir')){
        parentEl.remove()
    }

    else if (targetEl.classList.contains('done')){
        parentEl.classList.toggle('feito')
    }
}

todoAdd.addEventListener('submit', adicionar)

document.addEventListener('click', clicar)