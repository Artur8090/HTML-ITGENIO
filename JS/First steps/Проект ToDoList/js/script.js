const todo_control = document.querySelector('.todo-control'),
    header_input = document.querySelector('.header-input'),
    todo_list = document.querySelector('.todo-list'),
    todo_completed = document.querySelector('.todo-completed');


    
        if(localStorage.todo_saved !== null){
            todo_data = JSON.parse(localStorage.getItem('todo_saved'))
        } else{
            todo_data = [];
        }

todo_control.addEventListener('submit',function(event){
    console.log(1)
    event.preventDefault();
    
    if(header_input.value.length > 0){
        let new_todo = {value:header_input.value, completed: false}
        todo_data.push(new_todo)
        header_input.value = "";
        addToDo();
    }

})

todo_completed.addEventListener('click', addToDo);

function addToDo() {
    todo_list.textContent = "";
    todo_completed.textContent = "";
    todo_data.forEach((item, index) => {
        let li = document.createElement('li');
        li.innerHTML = `<span class="text-todo">${item.value}</span>
        <div class='todo-buttons'>
            <button class='todo-remove'></button>
            <button class='todo-complete'></button>
        </div>`;
        li.classList.add('todo-item')
        if (item.completed === true) {
            todo_completed.append(li);
        } else {
            todo_list.append(li);
        }
        
        const btn_todo_complete = li.querySelector('.todo-complete');
        btn_todo_complete.addEventListener('click', function() {
            item.completed = !item.completed;  
            addToDo();
        });
        const btn_todo_remove = li.querySelector('.todo-remove')
        btn_todo_remove.addEventListener('click', function(){
            todo_data.splice(index, 1);
            addToDo();
        })
    });
    localStorage.setItem('todo_saved',JSON.stringify(todo_data))
}