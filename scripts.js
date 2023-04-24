let todoList = [{inpuTodo:'', inputDate: ''}];

updateStorage();

function updateStorage(){
    if (localStorage.getItem('todoSave')){
        todoList = JSON.parse(localStorage.getItem('todoSave'));
    }
}

function renderTodoList(){
    let todoListHTML = '';    
    todoList.forEach((todoObject, index) => {
    const {inpuTodo, inputDate} = todoObject;
        if(inpuTodo != '' && inputDate != ''){
            const html = `
            <div>${inpuTodo}</div>
            <div>${inputDate}</div>
            <button class="delete-todo-button">Delete</button>`;
            todoListHTML += html;
            localStorage.setItem('todoSave', JSON.stringify(todoList));
        }
    });

    document.querySelector('.show-list').innerHTML = todoListHTML;
   
    deleteFromList();
}
  
renderTodoList();

function deleteFromList(){
    document.querySelectorAll('.delete-todo-button')
    .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            localStorage.setItem('todoSave', JSON.stringify(todoList));
            renderTodoList();
        });
    });
}
 

function addTodoDate(){
    const inpuTodo = document.querySelector('.input-todo').value;
    const inputDate = document.querySelector('.input-date').value;
   
    todoList.push({
        inpuTodo,
        inputDate
    });

    renderTodoList();
}




