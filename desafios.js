/*let listaGenerica = [];
console.log (listaGenerica);*/
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguagesDeProgramacion.push ('Java', 'Ruby', 'GoLang');
let listaNumeros = [50,30,1000,41,5,10,79,80,70,20,1];
let listaNumeros2 = [0,1,2,3,4,5,6,7,8,9,10];
let suma = 0;
let sumaMayor = 0;

console.log(listaNumeros.length);

print();
margen();
reverso();
margen();
promedio();
margen();
mayorMenor();
margen();
sumaTotal();
margen();
listanueva();
//posicion(parseInt(prompt(`Escribe un numero`)));
margen();
cuadrados();



function margen(){
    console.log('*/*/*/*/*/*/*/*/*/*/*/*/*/*')
}

function print(){
    for (i=0; i<lenguagesDeProgramacion.length; i++){
        console.log(lenguagesDeProgramacion[i]);
    }
}

function reverso(){
    for (i=lenguagesDeProgramacion.length-1; i>=0; i--){
        console.log(lenguagesDeProgramacion[i]);
    }
}

function promedio(){
    for(i=0; i<listaNumeros.length; i++){
        suma = suma + listaNumeros[i]
        }
    let prom = suma/listaNumeros.length;
    console.log(prom);
}

function mayorMenor(){
    let mayor = listaNumeros[0];
    let menor = listaNumeros[0];

    for(i=1; i<=listaNumeros.length; i++){
        if (listaNumeros[i] > mayor){
            mayor = listaNumeros[i];
        }
        if (listaNumeros[i] < menor){
            menor = listaNumeros[i];
        }
        }
        console.log(mayor);
        console.log(menor);
}

function sumaTotal(){
    for(i=0; i<listaNumeros.length; i++){
        sumaMayor = sumaMayor + listaNumeros[i]
        }
  console.log(sumaMayor);
}

function posicion(num){
    for(i=0; i<listaNumeros.length;i++){
        if (num==listaNumeros[i]){
            return console.log(i);
        }
    }
            return console.log(-1);
    }

function listanueva(){
    let listaSumada = [];
    for (i=0; i<listaNumeros.length;i++){
        listaSumada.push(listaNumeros[i]+listaNumeros2[i]);
    }
console.log(listaSumada);
}

function cuadrados(){
    let listaCuadrada = [];
    for (i=0; i<listaNumeros2.length;i++){
        listaCuadrada.push(listaNumeros2[i]*listaNumeros2[i]);
    }
console.log(listaCuadrada);
}