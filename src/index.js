
// document.addEventListener('DOMContentLoaded', ()=> {
    
//   let form = document.querySelector('form')
//   form.addEventListener('submit',(e) => {
  
//    e.preventDefault()
//    buildToDos(e.target)
//    form.reset()
//   }) 
// })
 

//  function buildToDos(form){
//    let toDo = form.new_task_description.value
//    let toDos = document.getElementById('tasks')
//    let li = document.createElement('li')
//    li.textContent = toDo
//    toDos.appendChild(li)
//  }

document.addEventListener('DOMContentLoaded',(event)=>{
  let form = document.getElementById('create-task-form')
  form.addEventListener('submit',(event)=>{
    event.preventDefault()
    form.reset()
  })
})

let input = document.querySelector('#onSubmit')
input.addEventListener('click',()=>{
  let description = document.querySelector('#new_task_description').value
  let newDescription= Boolean(description) ? description : 'No activity'
  let lists = document.createElement('li')
  lists.textContent = newDescription
  let button = document.createElement('button')
  button.textContent = 'x'
  let toDoList = document.querySelector('#tasks')
  toDoList.appendChild(lists).appendChild(button)
  button.addEventListener('click',()=>{
    let remove = toDoList.removeChild(lists)
  })
})


