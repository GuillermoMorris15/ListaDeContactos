// /* ------------------------------Método de agregar y eliminar datos de un array por medio de funciones------------------------------ */

// /*Lista de contactos*/
const miListaDeContacto = ["Luis Garcia", "Miguel Salazar", "Guillermo Morris", "Mario Gotze", "Benito Suarez", "Maria Lapadula", "Ronaldo de Asis"];

// /* ------------------------------Función crear contacto------------------------------ */
function ingresarDatos(datos){
    miListaDeContacto.push(datos);
}
ingresarDatos("Cristiano Ronaldo")
console.log(miListaDeContacto);



// /* ------------------------------Función elimnar contacto------------------------------ */
function eliminarContacto(posicionDatoAEliminar, numeroDeDatosAEliminar){
    miListaDeContacto.splice(posicionDatoAEliminar, numeroDeDatosAEliminar);
}
eliminarContacto(5,1);
console.log(miListaDeContacto);



// /* ------------------------------Función actulizar------------------------------ */
function actualizarContacto(contactoAActulizar, numeroDeDatosAActulizar, datoActualizado){
    miListaDeContacto.splice(contactoAActulizar, numeroDeDatosAActulizar, datoActualizado);
}
actualizarContacto(5, 1, 'Leo Messi');
console.log(miListaDeContacto);