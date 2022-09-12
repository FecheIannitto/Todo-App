// const Eliminar = document.getElementById("Eliminar")
/* .inenerHTML es el metodo de js que permite inyectar codigo HTML en el nodo*/

/*
Eliminar.addEventListener("click", (evento) => {
    // aca pongo lo que quiero hacer cuando se escucha el evento en cuestion
    console.log('federico')

    const Item_List_1 = document.getElementById("Item_List_1")
    Item_List_1.innerHTML = "Federico"
})
*/

/*
  Para escuchar eventos:
    1 - En el HTML ponemos un ID (ej: nodoAguardar) que nos permita encontrar el nodo con getElementById (hay otras formas de hacerlo - ver querySelector)
    2 - Ubicar el nodo (si tiene ID el hatml usamos getElementById) y guardarlo en una constante
      Ej: const nodoAguardar = document.getElementById("nodoAguardar"), donde nodoAguardar es el ID en el HTML
    3 - Con la constante que contiene el nodo, usar el metodo addEventListener, este necesita dos argumentos el evento(se lo pasamos como strin, ejemplo 'click'), y la funcion que le dice que hacer cuando escucha ese evento
      Ej: nodoAguardar.addEventListener('click', () = > {
        // hacer algo
      })
*/
const items = document.getElementById("items")
const botonMas = document.getElementById("botonMas")
const tareas = document.getElementById("tareas")

// 1 - Controlar que el input tenga contenido.
botonMas.addEventListener('click', () => {
  // valores que se ingresan en el input
  const agenda = tareas.value
  // crear li 
  const li = document.createElement('li') // <li></li>
  li.setAttribute("class", "margen") // <li class="margen"></li>
  li.textContent = agenda // <li class="margen">{agenda}</li>
  items.appendChild(li) // <ul> con los li generados </ul>
})

// 2 - Al apretar Clear All se deberia borrar todas las tareas.
// 3 - modificar You have 0 pending tasks para que muestre las tareas pendientes.