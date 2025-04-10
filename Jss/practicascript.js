const form = document.getElementById("transactionForm");

form.addEventListener("submit", function (event) {  
    event.preventDefault(); // Evita el envío del formulario por defecto
    let transactionFormData = new FormData(form); // Crea un objeto FormData con los datos del formulario

    switch (event.submitter.id) {
        case "btnalta":
            
            let botonsubrayado ;
            botonsubrayado = document.createElement("button");
            botonsubrayado.textContent = "terminar";
            botonsubrayado.id = "btnterminar";

            botonsubrayado.addEventListener("click", function() );

            break;
        case "btnmedia":
            console.log("btnmedia");
            break;
        case "btnbaja":
            console.log("btnbaja");
            break;
        default:
            console.log("No valid button selected");
    }
});

function subrayartitulo() {
    let titulo = document.getElementById("Titulo");
    titulo.style.textDecoration = "underline";
}
            
function 