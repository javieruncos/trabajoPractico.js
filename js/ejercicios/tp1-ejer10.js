let numero = parseInt(prompt("ingresa un numero"));

if(numero % 2 === 0){
    document.write(true); 
}else if(numero % 3 === 0 ){
    document.write(true);
}else if (numero % 5 === 0){
    document.write(true);
}else if(numero % 7 === 0){
    document.write(true);
}else{
    document.write(false);
}
