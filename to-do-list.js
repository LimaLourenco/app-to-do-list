let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let btnElement = document.querySelector('#app button');

let todolist = JSON.parse(localStorage.getItem('list_todo')) || [];

function RenderToDoList() {
    listElement.innerHTML = '';

    for(todo of todolist) { // for...of specific to an array.
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);
        
        let linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        let pos = todolist.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteToDoList('+ pos +')');

        let linkText = document.createTextNode('Excluir');
        
        linkElement.appendChild(linkText);


        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);

    } // for...of - vai percorrer cada um destes itens do array e retornar dentro da variavel todo.
}
RenderToDoList();

function addTodo() {
    let todoText = inputElement.value;
    todolist.push(todoText);
    inputElement.value = '';
    RenderToDoList();
    saveToStorage(); 
}
btnElement.onclick = addTodo;

function deleteToDoList(pos) {
    todolist.splice(pos, 1);
    RenderToDoList();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todo', JSON.stringify(todolist));
}