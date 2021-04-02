'use strict';

function addtoList() {
  let myList = document.getElementById("userslist");
  let userinput = document.getElementById("userinput");
  var li = document.createElement("li");

  li.setAttribute('id', userinput.nodeValue);
  li.appendChild(document.createTextNode(userinput.nodeValue));
}

addtoList();
