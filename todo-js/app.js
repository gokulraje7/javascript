//selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event listeners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteTodo);

// function
function addTodo(event){
    event.preventDefault();
    //check for blank input
    if(todoInput.value !=""){

        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        
        //complete btn
        const completeButton = document.createElement("button");
        completeButton.innerHTML = '<i class = "fas fa-check"></i>';
        completeButton.classList.add("completed-btn");
        todoDiv.appendChild(completeButton);

        //delete btn
        
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
        trashButton.classList.add("trashed-btn");
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv);
        todoInput.value = "";
    }

}
function deleteTodo(event){
    const item = event.target;
    //delete
    if(item.classList[0] === "trashed-btn"){
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend",() => {
            todo.remove();})
    }

    //check
    if(item.classList[0] === "completed-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}

