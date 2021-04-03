'use strict';
const button = document.getElementById('sbmt_btn')
button.addEventListener('click', addtoList);

function addtoList(e) {
  e.preventDefault();

  let myList = document.getElementById("userslist");
  let userinput = document.getElementById("userInput");
  let li = document.createElement("li");

  let checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.checked = false;
  checkbox.name = userinput.value;
  checkbox.id = "box"

  let deleteButton = document.createElement("button");
  deleteButton.id = "deleteButton";
  deleteButton.innerText = "X";
  deleteButton.name = userinput.value;

  li.setAttribute('id', userinput.value);
  li.appendChild(document.createTextNode(userinput.value));

  li.appendChild(deleteButton);
  li.appendChild(checkbox);
  myList.appendChild(li);
}




