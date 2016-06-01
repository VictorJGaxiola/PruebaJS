var numLlamadas = 0;
function Telefono(numero,marca,color){
	this.numero = numero;
	this.marca = marca;
	this.kolor = color;

	this.marcar = function(numTel){
		numLlamadas = numLlamadas + 1;
	}
}

console.log("Numero de llamadas: "+ numLlamadas);
var tel = new Telefono("3331234567","LG","Rojo");
tel.marcar("3331234567");
console.log("Numero de llamadas: "+ numLlamadas);



// Prototype using Functions 
// 
//function User( firstName, lastName ) {
// this.firstName = firstName;
// this.greetings = function() {
// console.log("Hey hi! I'm " + this.firstName);
// }
// if (typeof lastName !== "undefined") {
// this.name = firstName + " " + lastName;
// }
    
//}
//var ohm = new User("Ohm", "Sainz");
//ohm.greetings();