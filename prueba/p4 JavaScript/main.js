//$(document).ready(init);
//function init(){
	var tamanio = prompt("Indique el tamaño del cuadro: ");
	drawSquare(tamanio);
//}

function drawSquare(size){
	for(var i=0; i<size; i++){
		document.write("*");
	}
	for(var j=0; j<size-2; j++){
		document.write("<br />");
		document.write("*");
		for(var i=0; i<size-1; i++){
			document.write("&nbsp;");
		}
		document.write("*");
		document.write("<br />");
	}
	for(var i=0; i<size; i++){
		document.write("*");
	}
} 
