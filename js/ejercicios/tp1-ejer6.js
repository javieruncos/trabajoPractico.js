// ejercicio numero 6 pedir al usuario dos numeros y mostrar en pantalla cual es el mayor

// let numero = parseInt(prompt("ingresa un numero"));
// let numero2 = parseInt(prompt("ingresa el segundo numero"))
// if (numero > numero2){
//     document.write(numero);
// }else if(numero<numero2) {
//     document.write(numero2);
// } 
// else{
//     document.write(numero);
// }

let numero1 = parseInt(prompt("ingresa un numero"));
let numero2 = parseInt(prompt("ingresa el segundo numero"));
if (numero1 > numero2){
    document.write("el primer numero es el mayor, numero ingresado: " + numero1);
}else if (numero2 == numero1){
    document.write("los numeros ingresados son iguales: " + numero2)
}else{
    document.write("el segundo numero es el mayor" )
}
