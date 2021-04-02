'use strict';

let todoItems = [7, 8, 9];

function addTodolist() {
  const listitem = getElementById("userslist")
  document.getElementById("userslist").innerText = todoItems.forEach(element => document.createElement(listitem))
}


addTodolist();
