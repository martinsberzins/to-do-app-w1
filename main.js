//source: https://codepen.io/JohnPaulFich/pen/MXmzzM
var enterButton = document.getElementById("enter");
enterButton.addEventListener("click", addListAfterClick);

var input = document.getElementById("userInput");

var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function addListAfterClick() {
  if (inputLength() > 0) {
    //makes sure that an empty input field doesn't create a li
    createListElement();
  }
}

function createListElement() {
  var li = document.createElement("li"); // creates an element "li"
  li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
  li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-start"
  );
  ul.appendChild(li); //adds li to ul
  input.value = ""; //Reset text input field

  //START STRIKETHROUGH
  // because it's in the function, it only adds it for new items
  function crossOut() {
    li.classList.toggle("done");
  }
  li.addEventListener("click", crossOut);
  //END STRIKETHROUGH

  // START ADD DELETE BUTTON
  var dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X"));
  dBtn.classList.add("btn", "btn-secondary", "btn-sm");
  li.appendChild(dBtn);
  dBtn.addEventListener("click", deleteListItem);
  // END ADD DELETE BUTTON

  //ADD CLASS DELETE (DISPLAY: NONE)
  function deleteListItem() {
    li.classList.add("delete");
  }
  //END ADD CLASS DELETE
}
