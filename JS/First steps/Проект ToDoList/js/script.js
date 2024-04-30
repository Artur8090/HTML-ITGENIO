const todo_control = document.querySelector('.todo-control'),
    header_input = document.querySelector('.header-input'),
    todo_list = document.querySelector('.todo-list'),
    todo_completed = document.querySelector('.todo-completed');

let todo_data = [
    {
        value: 'eat', 
        completed: true
    },{
        value: 'sleep', 
        completed: false
    }];
todo_completed.addEventListener('click', addToDo(todo_data));

function addToDo(arr) {
    arr.forEach((item) => {
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
            addToDo(todo_data);
            });
        const btn_todo_remove = li.querySelector('.todo-remove')
        btn_todo_remove.addEventListener('click', function(){
            item.remove();
            addToDo(todo_data)
        })
        });
}
