var todos = [];
var id = 1;

var inputAdd = document.querySelector('addText');


function addTodo(id,valAdd ){

  var todo = {
      id: id,
      task: valAdd,
      check: false
    }
  todos.push(todo);
  console.log(todos);
  id++


}
addTodo(id, "text");
