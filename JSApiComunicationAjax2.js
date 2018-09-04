

function comenzar(){
	salida = document.getElementById("salida");
	boton = document.getElementById("boton");
	boton.addEventListener("click", leer, false);
}

function leer(){
	// Variable para indicarle la ruta en donde se encuentra el archivo  aleer el cual se usará como parámetro más adelante
	var ruta = "HTML5/texto.txt";
	// Se llama al constructor para crear la solicitud al servidor
	var solicitud = new XMLHttpRequest();
	// Abro la solicitud,1er parámetro método para pasar info, 2do ruta archivo, 3er si sincrono o asincrono
	solicitud.open("GET", ruta, true);
	// Como en este ejemplo no se va a enviar info se deja null
	solicitud.send(null);
	solicitud.addEventListener("load", mostrarSalida, false);
}

function mostrarSalida(e){
	// El objeto q se desencadena al cargar la solicitud lo mostramos en campo salida en forma de texto
	salida.innerHTML = e.target.responseText;
}

window.addEventListener("load", comenzar, false);