class Pokebola{
    calidad;
    color;
    constructor(calidad, color){
        this.calidad = calidad;
        this.color = color;
    }
}
let listaPokebola = [];

function guardarPokebola() {
    let calidad = document.getElementById("nBol").value;
    let color = document.getElementById("tBol").value;

    if(calidad == "" || color == "" ){
        alert("Todos los campos son obligatorios");
        return;
    }

    let nuevaBola = new Pokebola(calidad, color);
    listaPokebola.push(nuevaBola);

    alert("Se ha guardado tu nueva pokebola");

    actualizarBolas(nuevaBola);
    
    document.getElementById("nBol").value="";
    document.getElementById("tBol").value="";

}


function actualizarBolas(nuevaBola) {
    // Obtener el cuerpo de la tabla
    var tabla = document.getElementById("tabla-bolas").getElementsByTagName('tbody')[0];
    
    // Crear una nueva fila
    var fila = tabla.insertRow();
    
    // Crear las celdas con los datos de la pokebola
    var celdaCalidad = fila.insertCell(0);
    var celdaColor = fila.insertCell(1);
  
    
    celdaCalidad.innerHTML = nuevaBola.calidad;
    celdaColor.innerHTML = nuevaBola.color;
  }
  