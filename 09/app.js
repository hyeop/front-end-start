var input = document.querySelector("#inputtext");
var form = document.querySelector(".new-task");
var list = document.querySelector("#list");

function addTodo(event){
    // if(input.value != '' && event.keyCode == 13){
    //     console.log("a");
    // }
    var todo = input.value;
    insertTodo(todo);
    input.value = '';
    event.preventDefault();
}

// input.addEventListener('keydown', addTodo);
form.addEventListener('submit', addTodo);

function insertTodo(todo){
    var str = `<li>
            <button class="delete">×</button>
            <input type="checkbox" class="toggle-checked">
            <span class="text">${todo}</span>
            </li>`;
    list.innerHTML += str;
}

addEventListener('click', function(event){
    if(event.target.classList.value == "delete")
        event.target.parentNode.remove();
})