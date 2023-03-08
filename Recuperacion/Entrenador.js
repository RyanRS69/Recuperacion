class Entrenador{
    name;
    edad;
    pokFav;
    tipoFav;
    
    constructor(name, edad, pokFav, tipoFav){
        this.name = name;
        this.edad = edad;
        this.pokFav = pokFav;
        this.tipoFav = tipoFav;
    }

}
let listaEntrenador = [];

function guardarEntrenador() {
    let name = document.getElementById("nEnt").value;
    let edad = document.getElementById("eEnt").value;
    let pokFav = document.getElementById("pokFav").value;
    let tipoFav = document.getElementById("tFav").value;

    if(name == "" || edad == "" || pokFav == "" || tipoFav == ""){
        alert("Todos los campos son obligatorios");
        return;
    }

    let nuevoEntrenador = new Entrenador(name, edad, pokFav, tipoFav);
    listaEntrenador.push(nuevoEntrenador);

    alert(nuevoEntrenador.name + " ahora es entrenador!!");

    actualizarMaestros(nuevoEntrenador);
    document.getElementById("nEnt").value = "";
    document.getElementById("eEnt").value = "";
    document.getElementById("pokFav").value = "";
    document.getElementById("tFav").value = "";
}


function actualizarMaestros(nuevoEntrenador) {
    // Obtener el cuerpo de la tabla
    var tabla = document.getElementById("tabla-maestros").getElementsByTagName('tbody')[0];
    
    // Crear una nueva fila
    var fila = tabla.insertRow();
    
    // Crear las celdas con los datos de la pokebola
    var celdaName = fila.insertCell(0);
    var celdaEdad = fila.insertCell(1);
    var celdaFav = fila.insertCell(2);
    var celdaTip = fila.insertCell(3);
  
    
    celdaName.innerHTML = nuevoEntrenador.name;
    celdaEdad.innerHTML = nuevoEntrenador.edad;
    celdaFav.innerHTML = nuevoEntrenador.pokFav;
    celdaTip.innerHTML = nuevoEntrenador.tipoFav;

  
  }