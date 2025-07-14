
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const listItem = document.createElement("li");
  listItem.textContent = taskText;

  listItem.addEventListener("click", () => {
    listItem.style.textDecoration = "line-through";
  });

  document.getElementById("taskList").appendChild(listItem);
  input.value = "";
}
