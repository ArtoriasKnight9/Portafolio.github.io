const form = document.getElementById("transactionForm");
var inputlimpio = "";

document.getElementById("concentradoRef").addEventListener("click", function(e) {
  if(e.target.classList.contains("btn-eliminar")) {
    eliminarFila(e); // Reutilizamos la misma función
  }
});

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto 

  let transactionFormData = new FormData(form); // Crea un objeto FormData con los datos del formulario
  let tablaRef = document.getElementById("concentradoRef");
  let transactiontableRef = document.getElementById("concentradoRef");
  let newTransactionRowRef = transactiontableRef.insertRow(-1);

  let newtypeCellref = newTransactionRowRef.insertCell(0);
  newtypeCellref.textContent = transactionFormData.get("nombre");
  
  newtypeCellref = newTransactionRowRef.insertCell(1);
  newtypeCellref.textContent = transactionFormData.get("apellido");
  
  newtypeCellref = newTransactionRowRef.insertCell(2);
  newtypeCellref.textContent = transactionFormData.get("calificacion1");
  
  newtypeCellref = newTransactionRowRef.insertCell(3);
  newtypeCellref.textContent = transactionFormData.get("calificacion2");     
  
  newtypeCellref = newTransactionRowRef.insertCell(4);
  newtypeCellref.textContent = transactionFormData.get("calificacion3");
  
  newtypeCellref = newTransactionRowRef.insertCell(5);
  newtypeCellref.textContent = calcularpromedio(transactionFormData); // Llama a la función y pasa el FormData

  // Llama a la función y pasa el FormData
  newtypeCellref.textContent = calcularpromedio(transactionFormData);

  agregarBotonEliminar(newTransactionRowRef); // Agrega el botón de eliminar a la nueva fila

  form.reset(); // Limpia el formulario después de agregar la fila
  
  colorerfila()
  document.getElementById(promedioGeneral) 
  calcularpromediogeneral();
 
  

});

function calcularpromedio(formData) {

  let calif1 = formData.get("calificacion1");
  let calif2 = formData.get("calificacion2");
  let calif3 = formData.get("calificacion3");
  
  // Convierte a números y calcula el promedio
  let promedio = (parseFloat(calif1) + parseFloat(calif2) + parseFloat(calif3)) / 3;
  
  console.log(promedio); // Muestra el promedio en la consola
  return promedio.toFixed(2); // Devuelve el promedio con 2 decimales


}

function calcularpromediogeneral() {
  
let table = document.getElementById("concentradoRef");

if (!table) return;
let rows = table.rows;
let total = 0;
let count = 0;
for (let i = 1; i < rows.length; i++) { // Saltar el header (fila 0)
    let cells = rows[i].cells;
    if (cells.length < 6) continue;
    
    let promedio = parseFloat(cells[5].textContent);
    if (isNaN(promedio)) continue;
    
    total += promedio;
    count++;
  }
let promedioGeneral = total / count;

document.getElementById("promedioGeneral").textContent = "Promedio General: " + promedioGeneral.toFixed(2);

}



function colorerfila() {
  let table = document.getElementById("concentradoRef");
  if (!table) return;
  
  let rows = table.rows;
  for (let i = 1; i < rows.length; i++) { // Saltar el header (fila 0)
    let cells = rows[i].cells;
    if (cells.length < 6) continue;
    
    let promedio = parseFloat(cells[5].textContent);
    if (isNaN(promedio)) continue;
    
    rows[i].style.backgroundColor = promedio >= 70 ? "green" : "red";
  }
}

function agregarBotonEliminar(fila) {
  // Crear celda para el botón
  const celdaBoton = fila.insertCell(-1); // -1 para insertar al final
  
  // Crear el botón
  const botonEliminar = document.createElement('button');
  botonEliminar.textContent = 'Eliminar';
  botonEliminar.className = 'btn-eliminar';
  
  // Asignar evento
  botonEliminar.addEventListener('click', eliminarFila);

  botonEliminar.className = `
  bg-yellow-300 hover:bg-red-500 font-medium
  py-1 px-3 rounded-md 
`;
  
  // Agregar botón a la celda
  celdaBoton.appendChild(botonEliminar);
}

function eliminarFila(event) {
  // Obtener la fila (tr) padre del botón clickeado
  const fila = event.target.closest('tr');
  
  
    fila.remove();
    // Recalcular el promedio general después de eliminar
    calcularpromediogeneral();
    // Reaplicar colores si es necesario
    colorerfila();
  
}