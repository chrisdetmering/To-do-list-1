'use strict';
const button = document.getElementById('sbmt_btn')
button.addEventListener('click', addtoList);


function addtoList(e) {
  e.preventDefault();

  const myList = document.getElementById("userslist");
  const userinput = document.getElementById("userInput");
  if (userinput.value == '') {
    alert('Please enter your to-do')
  } else {
    const li = document.createElement("li");

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.checked = false;
    checkbox.name = userinput.value;
    checkbox.id = "box";
    checkbox.addEventListener('change', function () {
      li.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    });

    const deleteButton = document.createElement("button");
    deleteButton.id = "deleteButton";
    deleteButton.innerText = "X";
    deleteButton.name = userinput.value;
    deleteButton.addEventListener('click', function () {
      li.remove();
    });

    li.setAttribute('id', userinput.value);
    li.appendChild(document.createTextNode(userinput.value));

    li.appendChild(deleteButton);
    li.appendChild(checkbox);
    myList.appendChild(li);
  }
}


