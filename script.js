'use strict';
const button = getElementById("sbmt_btn")
button.addEventListener("click", addtoList);

function addtoList(e) {
  e.preventDefault();

  let myList = document.getElementById("userslist");
  let userinput = document.getElementById("userinput");
  var li = document.createElement("li");

  li.setAttribute('id', userinput.value);
  li.appendChild(document.createTextNode(userinput.value));

  myList.appendChild(li);
}

