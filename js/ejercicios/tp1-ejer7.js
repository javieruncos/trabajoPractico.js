// ejercicio 7 pedir al usuario 3 numeros y mostrar en pantalla el numero mayor

let numero = parseInt(prompt("ingresa un numero"));
let numero2 = parseInt(prompt("ingresa el segundo un numero"));
let numero3 = parseInt(prompt("ingresa el tercer  numero"));

if (numero > numero2 & numero > numero3){
    document.write("el primer numero ingresado es el mayor: "+ numero)
}else if(numero2 > numero & numero2 > numero3){
    document.write("el segundo numero ingresado es el mayor: " + numero2)
}else if(numero3 > numero & numero3 > numero2){
    document.write("el tercer numero ingresado es el mayor : " + numero3)
}else{
    document.write("todos los numeros son iguales")
}

