
const nombre = "Javier";

let calificaciones = [100, 90, 80, 70, 60, 80, 60, 90];

let promedio = 0;
for (let i = 0; i < calificaciones.length; i++) {
  promedio += calificaciones[i];
}
promedio /= calificaciones.length;

console.log("Hola " + nombre + "!");
console.log("Tus calificaciones son: " + calificaciones);
console.log("Tu promedio es: " + promedio);

if (promedio <= 50 ) {    
  console.log("Tienes que recursar la materia");
} else { (promedio > 50 && promedio < 70)
  console.log("Te vas a segundas oportunidades");
} else { (promedio > 70 && promedio < 75); 
    console.log("Tienes que ir a la recuperacion");
    } else { (promedio > 75 && promedio < 100); 
    console.log("Aprobaste la materia");
    } else { (promedio == 100); 
    console.log("Felicitaciones, eres un genio");
    }