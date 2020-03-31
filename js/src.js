var todos = [];
var id = 1;

var inputAdd = document.querySelector('addText');
var textTd = document.querySelector('.taskName')

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
renderHtml()

function renderHtml()  {
textTd.innerHTML ="teste";
addTodo(id,"oi")
 }
//<div id ="bgadd">
//<p> <input id="addText"type="text"> <button  id="bt"/>+</button> </p>
//</div>