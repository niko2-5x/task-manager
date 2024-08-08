const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("task-input");

//	Function to create an entire new task and save	//
//	it at the local storage, so the page can be     //
//	reloaded withou information loss.               //

function addNewTask() {
	if (taskInput.value === "") {
		alert("You must insert a task.");
	} else {
		let newTask = document.createElement("li");
		newTask.innerHTML = taskInput.value;
		
		taskList.appendChild(newTask);

		let delButton = document.createElement("span");
		delButton.innerHTML = "\u00d7";

		newTask.appendChild(delButton);
	}

	taskInput.value = "";
	saveData();
}

//	Make possible for the user to add the new task 	//
//	by pressing down the "Enter" key.              	//

document.addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
			addNewTask();
	}
});

taskList.addEventListener("click", function(elClicked){
	if (elClicked.target.tagName === "LI"){
		elClicked.target.classList.toggle("checked-task");
		saveData();
	} 
	else if (elClicked.target.tagName === "SPAN"){
		elClicked.target.parentElement.remove();
		saveData()
	}
}, false);

//	Create a function to save the tasks at the list	//
//	at the local storage.                         	//

function saveData() {
	localStorage.setItem("data", taskList.innerHTML);
}

//	Event that calls the previously stored items	  //
//	by the moment the window loads.               	//

window.addEventListener('load', function() {
	taskList.innerHTML = localStorage.getItem("data");
});