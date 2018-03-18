var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul=document.querySelector("ul");

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress",addListAfterKeyPress);

function inputLength(){
	return input.value.length;
}

function addNewLi(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
}


function addListAfterClick(){
	if (inputLength() > 0){
		addNewLi();
	}
}

function addListAfterKeyPress(){
	if (inputLength() > 0 && event.keyCode===13){
		addNewLi();
	}
}

ul.addEventListener("click", toggleDoneClass);

function toggleDoneClass(){
	ul.classList.toggle("done");
}

