//variável para novas tasks
//criar uma função para o botão de add-task
//criar uma função para o botão de delete-task
//Transformar o style dos text das tasks marcadas
//? armazenar tasks em display no navegador
//Limpar input depois de usar addNewTask
const taskList = document.getElementById("task-list");
const delButton = document.getElementById;
const defaultDelBtn = document.getElementsByClassName("default-del-button");
const taskChecker = document.getElementsByClassName("task-checker");

//Function to create an entire new task ()
function addNewTask() {
	if (!taskList) {
		return;
	}

	let newTask = document.getElementById("task-input");
	let newDivTask = document.createElement("div");
	newDivTask.classList.add("task");
	let newDivFlex = document.createElement("div");
	newDivFlex.classList.add("task-flex");
	let newChecker = document.createElement("input");
	newChecker.classList.add("task-checker");
	newChecker.type = "checkbox";
	let newTaskContent = document.createElement("label");
	newTaskContent.textContent = newTask.value;
	let newButton = document.createElement("button");
	newButton.classList.add("delete-button");
	newButton.textContent = "⨯";

	taskList.appendChild(newDivTask);
	newDivTask.appendChild(newDivFlex);
	newDivFlex.appendChild(newChecker);
	newDivFlex.appendChild(newTaskContent);
	newDivTask.appendChild(newButton);

	newButton.addEventListener("click", () => 
	{
		delTask(newDivTask);
	});

	newTask.value = "";
}

function delTask(taskToDel) {
	if (taskToDel) {
		taskList.removeChild(taskToDel);
	};
}

function delDefaultTask() {
	for (const element of defaultDelBtn){
		if (element.parentElement){
			element.parentElement.remove();
		}
	};
}

function checkedStyle() {
	if (taskChecker.checked) {
		
	}
}