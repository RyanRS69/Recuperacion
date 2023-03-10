var listaPokemon = [];
var listaPokebola = [];
var listaEntrenador = [];


function savePokemon() {
    let nombre = document.getElementById("nPok").value;
    let tipo = document.getElementById("tPok").value;
    let tipoComb = document.getElementById("tComb").value;

    if(nombre == "" || tipo == "" || tipoComb == ""){
        alert("Todos los campos son obligatorios");
        return;
    }

    let nuevoPokemon=new Pokemon(nombre,tipo,tipoComb);
    listaPokemon.push(nuevoPokemon);
    helper.setToLocalStorage("Local",listaPokemon);
    alert("Pokemon guardado exisotsamente");
    document.getElementById("nPok").value= null;
    document.getElementById("tPok").value= null;
    document.getElementById("tComb").value= null;
    
    actualizarTabla(nuevoPokemon);   
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
  

function savePokebola() {
    let calidad = document.getElementById("nBol").value;
    let color = document.getElementById("tBol").value;

    if(calidad == "" || color == "" ){
        alert("Todos los campos son obligatorios");
        return;
    }

    let nuevaBola=new Pokebola(calidad, color);
    listaPokebola.push(nuevaBola);
    helper.setToLocalStorage("Local2",listaPokebola);
    alert("Pokebola guardada exisotsamente");
    document.getElementById("nBol").value= null;
    document.getElementById("tBol").value= null;
    actualizarBolas(nuevaBola);

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

  function saveEntrenador() {
    let name = document.getElementById("nEnt").value;
    let edad = document.getElementById("eEnt").value;
    let pokFav = document.getElementById("pokFav").value;
    let tipoFav = document.getElementById("tFav").value;

    if(name == "" || edad == "" || pokFav == "" || tipoFav == ""){
        alert("Todos los campos son obligatorios");
        return;
    }

    let nuevoEntrenador=new Entrenador(name, edad, pokFav, tipoFav);
    listaEntrenador.push(nuevoEntrenador);
    helper.setToLocalStorage("Local3",listaEntrenador);
    alert( nuevoEntrenador.name + " ahora es entrenador!!");
    document.getElementById("nEnt").value= null;
    document.getElementById("eEnt").value= null;
    document.getElementById("pokFav").value= null;
    document.getElementById("tFav").value= null;

    actualizarMaestros(nuevoEntrenador);
    
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


 