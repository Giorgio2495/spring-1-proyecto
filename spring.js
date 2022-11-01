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

    user= window.prompt("Ingrese IDe:")
    pw = window.prompt("Ingrese contraseñe: ")   
    
}

if (user == id2 && pw == contraseña2){
        document.write("cliente")

    }
    
else{
    document.write("Datos incorrectos")
}

