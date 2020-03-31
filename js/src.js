var todos[];
var id = 1;

var inputAdd = document.querySelector('addText');
var valAdd = inputAdd.value;


function addTodo(id,valAdd, ){

  var todo = {
      id: id,
      task: valAdd,
      check: false
    }
  todos.push(todo);

}