function saludo(){
    return console.log("Hola perro mundo");
}

saludo();


function saludoAUsuario(nombre){
        return console.log(`Saludos ${nombre}, eres bien perro`);
}

saludoAUsuario(prompt('escribe tu nombre'));


function numeroDoble(numero){
    return console.log(numero * 2);
}
numeroDoble(parseInt(prompt('Escribe un numero perro y yo te lo doblo')));


function promedio(a,b,c){
    return console.log('El promedio es: '+ (a+b+c)/3 + ' PERRO');
}
promedio(parseInt(prompt('Escribe el primer numero perro')),parseInt(prompt('Escribe el segundo numero perro')),parseInt(prompt('Escribe el tercer numero perro')));


function numeroMayor (d,e){
    return d > e ? console.log(`${d} Es mayor que ${e}`): console.log(`${e} Es mayor que ${d}`);
}
numeroMayor(parseInt(prompt('Escribe un numero perro')),parseInt(prompt('Escribe otro numero perro')));


function cuadrado(f){
    return console.log (`El cuadrado de ${f} es: ` + f * f);
}
cuadrado(parseInt(prompt('Escribe un numero perro y te daré su cuadrado')));