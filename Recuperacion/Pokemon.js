class Pokemon {
    nombre;
    tipo;
    tipoComb;
    constructor(nombre, tipo, tipoComb){
        this.nombre = nombre;
        this.tipo = tipo;
        this.tipoComb = tipoComb;
    }

}
let listaPokemon = [];

function guardarPokemon() {
    let nombre = document.getElementById("nPok").value;
    let tipo = document.getElementById("tPok").value;
    let tipoComb = document.getElementById("tComb").value;

    if(nombre == "" || tipo == "" || tipoComb == ""){
        alert("Todos los campos son obligatorios");
        return;
    }


    let nuevoPokemon = new Pokemon(nombre, tipo, tipoComb);
    listaPokemon.push(nuevoPokemon);

    alert("Se ha guardado tu nuevo pokemon");
    actualizarTabla(nuevoPokemon);
    document.getElementById("nPok").value="";
    document.getElementById("tPok").value="";
    document.getElementById("tComb").value="";


    
}

function actualizarTabla(nuevoPokemon) {
    // Obtener el cuerpo de la tabla
    var tabla = document.getElementById("tabla-pokemones").getElementsByTagName('tbody')[0];
    
    // Crear una nueva fila
    var fila = tabla.insertRow();
    
    // Crear las celdas con los datos del pokemon
    var celdaNombre = fila.insertCell(0);
    var celdaTipo = fila.insertCell(1);
    var celdaCombate = fila.insertCell(2);
    
    celdaNombre.innerHTML = nuevoPokemon.nombre;
    celdaTipo.innerHTML = nuevoPokemon.tipo;
    celdaCombate.innerHTML = nuevoPokemon.tipoComb;
  }

  function cargarDatos() {
    // Obtener la tabla y limpiar sus filas
    var tabla = document.getElementById("tabla-pokemones");
    tabla.innerHTML = "<tr><th>Nombre</th><th>Tipo</th><th>Tipo de combate</th></tr>";

    // Recorrer todos los elementos del localStorage
    for (var i = 0; i < localStorage.length; i++) {
        // Obtener el nombre del elemento
        var nombre = localStorage.key(i);

        // Obtener la cadena JSON del elemento y convertirla en un objeto
        var pokemonJSON = localStorage.getItem(nombre);
        var pokemon = JSON.parse(pokemonJSON);

        // Agregar una fila a la tabla con los valores del objeto pokemon
        var fila = "<tr><td>" + pokemon.nombre + "</td><td>" + pokemon.tipo + "</td><td>" + pokemon.combate + "</td></tr>";
        tabla.innerHTML += fila;
    }
}

  



  

