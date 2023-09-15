document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //selectors
  const taskForm = document.querySelector("#create-task-form");
  const newTask = document.querySelector("#tasks");
  const input = document.querySelector("#new-task-description");
  //eventListeners
  taskForm.addEventListener("submit", addTask);

  //functions
  function addTask(e){
   e.preventDefault();
   //create a new task
   const newTaskLi = document.createElement("li");
   newTaskLi.classList.add("new-task");
   //new task = to input value
   newTaskLi.textContent = input.value;
   //append child
   newTask.appendChild(newTaskLi);
   //create delete button
   const deleteItem = document.createElement("button");
   deleteItem.classList.add("delete-btn");
   deleteItem.textContent = "X";
   //append delete button to the new task
   newTaskLi.appendChild(deleteItem);
   deleteItem.addEventListener("click", e=>{
      newTaskLi.remove(input.value);
   })
  }
 


});
