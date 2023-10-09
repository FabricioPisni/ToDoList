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

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('excluir')
    deleteButton.innerText = "Excluir"

    todoList.appendChild(tarefa)
    todoList.appendChild(deleteButton)

    container.appendChild(todoList)

    todoAddInput.value = ""
    todoAddInput.focus()

}

function deletar(botao){

    const targetEl = botao.target
    parentEl = targetEl.closest('div')

    if (targetEl.classList.contains('excluir')){
        parentEl.remove()
    }
}

todoAdd.addEventListener('submit', adicionar)

document.addEventListener('click', deletar)