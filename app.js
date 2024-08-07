//variável para novas tasks
//criar uma função para o botão de add-task
//criar uma função para o botão de delete-task
//Transformar o style dos text das tasks marcadas
//? armazenar tasks em display no navegador
//Limpar input depois de usar addNewTask
const taskList = document.getElementById("task-list");

var tasks = [
	{ label: "Visit grandma", checked: false },
	{ label: "Study Web Develpment", checked: true },
]

//	Function to create an entire new task.

// 1 - Adicionar um item na lista (task.push(...item))
// 2 - Renderizar cada item da lista tasks

// Essa funcão deve criar os elementos HTML correspondentes
// a uma tarefa na lista (div, checkbox, label, button)
// de acordo com os valores no objeto `task` (parametro da
// função), e inserir a tarefa no DOM HTML
function makeTaskElement (task = {
	label: "",
	checked: false
}) {
	let newDivTask = document.createElement("div");
	newDivTask.classList.add("task");

	let newDivFlex = document.createElement("div");
	newDivFlex.classList.add("task-flex");

	let newChecker = document.createElement("input");
	newChecker.classList.add("task-checker");
	newChecker.type = "checkbox";

	let newTaskContent = document.createElement("label");
	newTaskContent.textContent = task.label;
	console.log({ task })

	let newButton = document.createElement("button");
	newButton.classList.add("delete-button");
	newButton.textContent = "⨯";


	newDivTask.appendChild(newDivFlex);
	newDivFlex.appendChild(newChecker);
	newDivFlex.appendChild(newTaskContent);
	newDivTask.appendChild(newButton);

	// - Task-List
	//  - .task
	//    - .task-flex
	//     - <checkbox>
	//     - <label>
	//    - .button


	return newDivTask;
}

// 1 - Quando for renderizada pela primeira vez
// 2 - Quando novo item for adicionada

function addNewTask() {
	let newTask = document.getElementById("task-input");

	tasks.push({
		label: (newTask || {}).value || "",
		checked: false
	})

	newTask.value = "";
}

function renderTaskList () {
	const taskListEl = document.getElementById("task-list");

	tasks.forEach((task) =>
		taskListEl.appendChild(makeTaskElement(task)))
}

function docReady(fn) {
  if (
		document.readyState === "complete" ||
		document.readyState === "interactive"
	) {
        // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(renderTaskList)