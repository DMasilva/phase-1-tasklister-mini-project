
document.addEventListener('DOMContentLoaded', ()=> {
    
  let form = document.querySelector('form')
  form.addEventListener('submit',(e) => {
  
   e.preventDefault()
   buildToDos(e.target)
   form.reset()
  }) 
})
 

 function buildToDos(form){
   let toDo = form.new_task_description.value
   let toDos = document.getElementById('tasks')
   let li = document.createElement('li')
   li.textContent = toDo
   toDos.appendChild(li)
 }