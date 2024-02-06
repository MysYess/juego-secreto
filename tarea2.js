function IMC (peso,altura){
    return console.log(peso/(altura*altura));
}
IMC(prompt('Escribe tu peso'), prompt('Escribe tu altura en m'));

let numero2 = 5;
function factorizar (numero){
    if (numero === 0 || numero === 1){
        return console.log(1);
    }else{
        return numero * factorizar(numero-1);
    }
    
}
let resultado2 = factorizar(numero);
console.log(resultado2);


function convertidor (dolar){
    return console.log('Lo que tienes equivale a',dolar * 17.5, 'MXN');
}
convertidor(parseInt(prompt('Escribe cuantos dolares tienes')));

function areaPerimetro (base,altura){
    area = (base*altura);
    perimetro= ((base*2)+(altura*2));
    return console.log (`En tu terreno rectangular el area es de ${area} m2 y el perimetro mide ${perimetro} m`)
}
areaPerimetro(prompt('escribe la base'), prompt('escribe la altura'));

function areaCircular(radio){
    return console.log(`El área de tu sala es de`,(radio*radio)*3.14,'m2');
}
areaCircular(prompt('Cuanto mide el radio'));


function tabla(x){
    i=0;
    while (i<=10){
        console.log(`${x} * ${i} = `,x*i);
        i++;
    }
}
tabla(parseInt(prompt('Escribe el numero del que quieres la tabla')));


function factorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * factorial(numero - 1);
    }
  }
  let numero = parseInt(prompt('Escribe el numero a factorizar'));
  let resultado = factorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);
  