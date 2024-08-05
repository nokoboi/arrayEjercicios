// Ejercicio: Uso del método find en JavaScript

// 1. Creamos un array de objetos que representan libros
let libros=[
    {
        id: 1,
        titulo: 'El señor de los anillos',
        autor: 'Tolkien',
        paginas: 342,
        anio: 1901
    },
    {
        id: 2,
        titulo: 'El imperio final',
        autor: 'Brando Sanderson',
        paginas: 231,
        anio: 2018
    },
    {
        id: 3,
        titulo: 'Green Waters',
        autor: 'Liss Evermore',
        paginas: 130,
        anio: 2023
    },
    {
        id: 4,
        titulo: 'Cartas en el asunto',
        autor: 'Terry Pratchet',
        paginas: 287,
        anio: 1978
    }
]

// 2. Función para encontrar un libro por su ID
function encontrarID(id){
    let libroEncontrado = libros.find(lib => lib.id == id)

    return libroEncontrado;
}

// let idLibro = encontrarID(3)
// if(idLibro != undefined){
//     console.log(`Libro encontrado: ${idLibro.titulo}`);
// }else{
//     console.log('No existe ese libro');
// }


// 3. Función para encontrar un libro por su título (ignorando mayúsculas/minúsculas)
function encontrarTitulo(titulo){
    let libroEncontrado = libros.find(lib => lib.titulo.toLowerCase() == titulo.toLowerCase())

    return libroEncontrado;
}

// let tituLibro = encontrarTitulo('el señor de los anillos')
// if(tituLibro != undefined){
//     console.log('Libro encontrado: ')
//     console.log(tituLibro);
// }else{
//     console.log('No existe ese libro');
// }

// 4. Función para encontrar el primer libro de un autor específico
function encontrarAutor(autor){
    // Esto lo que hace es que aunque no escribamos el nombre completo lo encuentre
    let libroEncontrado = libros.find(lib => lib.autor.toLowerCase().includes(autor.toLowerCase()))

    return libroEncontrado;
}
// let autorLibro = encontrarAutor('liss')
// if(autorLibro != undefined){
//     console.log('Libro encontrado: ')
//     console.log(autorLibro);
// }else{
//     console.log('No existe ese libro');
// }

// 5. Función para encontrar el primer libro publicado después de un año específico
function encontrarPorAnio(anio){
    let libroEncontrado = libros.find(lib=> lib.anio <= anio);
    return libroEncontrado;
}

// let anioLibro = encontrarPorAnio(2015);
// if(anioLibro != undefined){
//     console.log(anioLibro)
// }else{
//     console.log('No hay ningún libro')
// }


// 6. Función para encontrar un libro que cumpla múltiples criterios
function encontrarLibroCriterios(criterios){
    return encontrarLibro = libros.find(lib => {
        for (const propiedad in criterios) {
            if(lib[propiedad] != criterios[propiedad]){
                return false;
            }
        }
        return true
    });
}

let criterio = { autor: 'Tolkien', anio: 1901 };
let libroEncontrado = encontrarLibroCriterios(criterio);
console.log(libroEncontrado);

// 7. Intentar encontrar un libro que no existe
let tituLibro = encontrarTitulo('Perico')
if(tituLibro != undefined){
    console.log('Libro encontrado: ')
    console.log(tituLibro);
}else{
    console.log('No existe ese libro');
}
