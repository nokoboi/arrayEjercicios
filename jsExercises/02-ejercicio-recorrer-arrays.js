// Ejercicio: Recorrer arrays con for y forEach en JavaScript

// 1. Creamos un array de números
let numeros = [1, 6, 86, 43, 1, 43, 52, 100, 22]

// 2. Recorremos el array con un bucle for
// for (i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
// }

// 3. Recorremos el array con forEach
// numeros.forEach(num => {
//     console.log(num)
// });

// 4. Calculamos la suma de los números usando for
let suma = 0;
// for (let i = 0; i < numeros.length; i++) {
//     suma += numeros[i];
// }

// console.log(suma);

// 5. Calculamos la suma de los números usando forEach
numeros.forEach(num => {
    suma+=num;
});
console.log(suma)

// 6. Creamos un nuevo array con los números pares usando for
let pares = [];
// for (let i = 0; i < numeros.length; i++) {
//     if(numeros[i]%2==0){
//         pares.push(numeros[i])
//     }    
// }

// console.log(pares)


// 7. Creamos un nuevo array con los números pares usando forEach
// numeros.forEach(num => {
//     if (num % 2 == 0) {
//         pares.push(num)
//     }
// });

// console.log(pares)

