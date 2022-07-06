let numero = parseInt(prompt("ingresa un numero"));

if(numero % 2 === 0){
    document.write("el numero es divisible por: 2"); 
}else if(numero % 3 === 0 ){
    document.write("el numero es divisible  por : 3");
}else if (numero % 5 === 0){
    document.write("el numero es divisible por : 5");
}else if(numero % 7 === 0){
    document.write("el numero es divisible por 7");
}else{
    document.write("el numero no es divisible por los anteriores");
}
