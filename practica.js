
const items = document.getElementById("items")
const botonMas = document.getElementById("botonMas")
const tareas = document.getElementById("tareas")
const borrarTodo = document.getElementById("borrarTodo")
const pendientes = document.getElementById("pendientes")


// 1 - Controlar que el input tenga contenido.
botonMas.addEventListener('click', () => {
  // valores que se ingresan en el input
  if (tareas.value) {

    const agenda = tareas.value
    // crear li 
    tareas.value = null

    const li = document.createElement('li') // <li></li>
    li.setAttribute("class", "margen") // <li class="margen"></li>
    li.textContent = agenda // <li class="margen">{agenda}</li> ---> crear boton de eliminar apenas se crea el li

    const button = document.createElement("button")
    button.textContent = "Eliminar"
    button.addEventListener("click", () => {
      li.remove()

      const varTareas = items.children.length

      pendientes.textContent = "You have " + varTareas + " pending tasks"

    })

    li.appendChild(button)
    items.appendChild(li) // <ul> con los li generados </ul>

    const varTareas = items.children.length

    pendientes.textContent = "You have " + varTareas + " pending tasks"

  }

})

borrarTodo.addEventListener("click", () => {
  items.innerHTML = null
  pendientes.textContent = "You have 0 pending tasks"
})


