'use strict';
document.getElementById('submitButton')
.addEventListener('click', displayTodo);

function displayTodo(e) {
  e.preventDefault();

  const myList = document.getElementById("usersList");
  const userInput = document.getElementById("userInput");
  const text = userInput.value;

  if (text == '') {
    alert('Please enter your to-do')
    return; 
  } 
  const li = document.createElement("li");
  const deleteButton = createDeleteTodoButton(li); 
  const checkbox = createCheckBox(li)

  li.appendChild(document.createTextNode(text));
  li.appendChild(deleteButton);
  li.appendChild(checkbox);
  myList.appendChild(li);

   userInput.value = ""
}


function createCheckBox(todoListItem) { 
  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.checked = false;
  checkbox.id = "box";
  checkbox.addEventListener('change', function () {
    todoListItem.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
  });

  return checkbox; 
}

function createDeleteTodoButton(todoListItem) { 
  const deleteButton = document.createElement("button");
    deleteButton.id = "deleteButton";
    deleteButton.innerText = "X";
    deleteButton.addEventListener('click', function () {
      todoListItem.remove();
    });

    return deleteButton; 
}

