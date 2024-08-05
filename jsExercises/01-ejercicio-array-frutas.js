// Ejercicio: Manejo básico de arrays en JavaScript

// 1. Crea un array llamado 'frutas' con 5 nombres de frutas
let frutas=['Manzana','Pera','Plátano','Melón','Sandía'];

// 2. Imprime el array completo
console.log(frutas);

// 3. Imprime la longitud del array
console.log(frutas.length);

// 4. Accede e imprime el tercer elemento del array
console.log(frutas[2]);

// 5. Añade una fruta al final del array usando push()
console.log('Push');
frutas.push('Mango');
console.log(frutas);

// 6. Elimina el último elemento del array usando pop()
console.log('Pop');
frutas.pop();
console.log(frutas);

// 7. Añade una fruta al principio del array usando unshift()
console.log('Unshift');
frutas.unshift('Caqui');
console.log(frutas);

// 8. Elimina el primer elemento del array usando shift()
console.log('Shift');
frutas.shift()
console.log(frutas);
