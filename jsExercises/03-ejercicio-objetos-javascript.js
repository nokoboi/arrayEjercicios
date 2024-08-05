// Ejercicio: Manejo de objetos en JavaScript

// 1. Creamos un objeto que representa a un estudiante
let estudiante ={
    nombre: 'Ana',
    edad: 22,
    carrera: 'Informática',
    asignaturas: ['Programación', 'Bases de datos','Redes'],
    activo: true
}

// 2. Accedemos y mostramos propiedades del objeto
console.log('NOMBRE Y EDAD:')
console.log(estudiante.nombre, estudiante.edad)

// 3. Modificamos una propiedad
console.log('CAMBIAMOS PROPIEDAD')
estudiante.nombre = 'Raúl';
console.log(estudiante)

// 4. Añadimos una nueva propiedad
console.log('AÑADIMOS PROPIEDAD')
estudiante.semestre = 6;
console.log(estudiante)

// 5. Recorremos las propiedades del objeto con for...in
console.log('USO FOR IN DE LAS PROPIEDADES')
for (const clave in estudiante) {
    console.log(`Clave: ${clave} Valor: ${estudiante[clave]}`)
}

// 6. Creamos un método en el objeto
estudiante.presentarse = function(){
    console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y estudio ${this.carrera}`)
}

// 7. Llamamos al método
estudiante.presentarse();

// 8. Creamos un array de objetos
console.log("ARRAY DE OBJETOS")
estudiantes = [
    {
        nombre: 'Ana',
        edad: 22,
        carrera: 'Informática',
        asignaturas: ['Programación', 'Bases de datos','Redes'],
        activo: true
    },
    {
        nombre: 'Kevin',
        edad: 30,
        carrera: 'Informática',
        asignaturas: ['Programación', 'Lenguajes Marcas','Robótica'],
        activo: true
    },
    {
        nombre: 'María',
        edad: 29,
        carrera: 'Lengua',
        asignaturas: ['Sintaxis', 'Literatura','Poemarios'],
        activo: true
    }
]

console.log(estudiantes)

// 9. Recorremos el array de objetos
for (let i = 0; i < estudiantes.length; i++) {
    console.log(`Hola, soy ${estudiantes[i].nombre}, tengo ${estudiantes[i].edad} años y estudio ${estudiantes[i].carrera}`)
    
}

// 10. Buscamos un estudiante por su nombre
console.log('METODO FIND')

let estudianteNom = estudiantes.find(nom => nom.nombre === 'María');
console.log(estudianteNom)

// 11. Funcion que busque un objeto en el array cuyo nombre coincida con el nombre que le pasamos por parametro

function buscarEstudiante(nombre){
    let estudianteNom = estudiantes.find(nom => nom.nombre === nombre);
    
    return estudianteNom;
}

console.log(buscarEstudiante('Antonio'))
