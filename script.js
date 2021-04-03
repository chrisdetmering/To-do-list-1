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
  checkbox.value = 1;
  checkbox.name = userinput.value;
  checkbox.id = "box"


  li.setAttribute('id', userinput.value);
  li.appendChild(document.createTextNode(userinput.value));

  li.appendChild(checkbox);
  myList.appendChild(li);

}


