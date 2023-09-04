

var inp = document.getElementById('inp')
var todoList = document.getElementById('todoList')
var arr = [];
function addTodo() {

    if (inp.value === '') return;

    arr.push(inp.value)
    inp.value = '';

    render()
}

function render() {
    todoList.innerHTML = '';
    for (var i = 0; i < arr.length; i++) {
        todoList.innerHTML += `<li class="listItem"> <span class="listContent">${arr[i]}</span>
        <button onclick="editList(${i})"><i class="fa-solid fa-pen-to-square"></i></button>
        <button onclick="dltList(${i})"><i class="fa-solid fa-trash"></i></button>
    </li>`

    }
    // console.log(arr)
}

function editList(indexNum) {
    arr[indexNum] = prompt("Enter new value")
    render()
}

function dltList(indexNum) {
    arr.splice(indexNum, 1);
    render()

}


