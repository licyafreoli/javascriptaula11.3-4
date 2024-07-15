const numeros = [1,2,3,4,5,6];

const soma = numeros.reduce ((acumulador,numero) => acumulador + numero);

const calcularQuadrado = numeros.map(numero => numero** 2)

console.log("Array original:", numeros);
console.log("Soma dos numeros:", soma);
console.log("Números elevado ao quadrado:", calcularQuadrado)