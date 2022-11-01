user = window.prompt("Ingrese ID:")
pw = window.prompt("Ingrese contraseña: ")

nombre1="Agustin"
id1=123456789
contraseña1=1234

nombre2="Giovani"
id2=987654321
contraseña2=4321

let myObj = [nombre1, nombre2];
console.log(myObj);
while (user!=id1 && pw!=contraseña1 && user!=id2 && pw!=contraseña2) {
                 
    user= window.prompt("Usuario no existe\nIngrese ID:")
    pw = window.prompt("Ingrese contraseña:: ")
    if(user==id1 && pw == contraseña1){
        break
    }
    else if(user==id2 && pw == contraseña2){
        break
    }    
}
while (pw!=contraseña1 && pw!=contraseña2 || user!=id1 && pw==contraseña1 ||user!=id2 && pw==contraseña2) {
    user= window.prompt("Usuario no existe\nIngrese ID:")
    pw = window.prompt("Ingrese contraseña:: ")  
    if(user==id1 && pw == contraseña1){
        break
    }
    else if(user==id2 && pw == contraseña2 ){
        break
    }
    else if(pw==contraseña1){
        user= window.prompt("Usuario no existe\nIngrese ID:")
        pw = window.prompt("Ingrese contraseña:: ")
    }
    else if(pw==contraseña2){
        user= window.prompt("Usuario no existe\nIngrese ID:")
        pw = window.prompt("Ingrese contraseña:: ")
    }
    
}
while (user == id1 && pw == contraseña1) {
    sum = 0
    total= 0

    cant1= window.prompt("Ingrese la cantidad de billites de 5 mil que requiere: ")
    cant2= window.prompt("Ingrese la cantidad de billites de 10 mil que requiere: ")
    cant3= window.prompt("Ingrese la cantidad de billites de 20 mil que requiere: ")
    cant4= window.prompt("Ingrese la cantidad de billites de 50 mil que requiere: ")
    cant5= window.prompt("Ingrese la cantidad de billites de 100 mil que requiere: ")

    cantSuma=[cant1*5000,cant2*10000,cant3*20000,cant4*50000,cant5*100000]

    for (let i = 0; i < cantSuma.length; i++) {
        sum += cantSuma[i];
    }

    total=JSON.parse(localStorage.getItem("total"));
    acumulado=JSON.parse(localStorage.getItem("total2"));
    if(total> 0){
        valor=total+sum+acumulado
    }
    else{
        valor=sum
    }   
    console.log(cantSuma);
    console.log(sum);
    console.log(valor);

    localStorage.setItem("total", JSON.stringify(sum));
    localStorage.setItem("total2", JSON.stringify(total));
    /*localStorage.setItem("acumulado", JSON.stringify(total));
    acumulado=JSON.parse(localStorage.getItem("acumulado"));*/

    user= window.prompt("Ingrese IDe:")
    pw = window.prompt("Ingrese contraseñe: ")   
    
}

if (user == id2 && pw == contraseña2){
        document.write("cliente")

    }
    
else{
    document.write("Datos incorrectos")
}

/*if (user1 == "billetesde5"){
    billete=5

} else if (user1 == "billetesde10)"{
    billetes=10

}
else{
    document.write("vuelva a cargar dinero")
    billetes=0
}*/
/*else{
    document.write("no tenemos este topping, lo siento ")
    precio= 0
}else if(topping == "kitkat"){
    precio= 1500
}
/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
/*function Persona(nombre,apellido){

	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = 30;

	this.imprimirPersona = function(){
		return this.nombre + " " + this.apellido + "("+ this.edad +")";
	}


}


var Juan = new Persona("Juan", "Mendoza");


console.log( Juan.imprimirPersona() );
let topping =window.prompt("¿que topping quieres?").toLocaleLowerCase();
let precio = 0.00
let helado = 1900
let precioFinal = 0

if (topping == "oreo"){
    precio = 1000
}else if(topping == "kitkat"){
    precio= 1500
}else if(topping =="brownie"){
    precio= 750
}else if(topping =="lacasitos"){
    precio= 950
}else if(topping =="fresa"){
    precio= 8200
}else{
    document.write("no tenemos este topping, lo siento ")
    precio= 0
}

precioFinal = helado  + precio; 
document.write("el helado cuesta " + precioFinal)



-----------------------------------------------------------------------------

pregunta = window.prompt(" que fruta quieres traducir ")

switch (pregunta) {
    case " manzana":
        document.write(" poma ")
        break;
        case " pera ":
        document.write(" pera dulce ")
        break;
        case " naranja ":
        document.write(" toronja ")
        break;
        case " cereza ":
        document.write(" cherry ")
        break;

    default:
        document.write(" lo siento no tengo esta traduccion ")
        break;
}*/