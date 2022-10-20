/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*Lista de contactos*/
const miListaDeContacto = ["Luis Garcia", "Miguel Salazar", "Guillermo Morris"];

const nuevoContacto = [];

console.log(miListaDeContacto);

/*crear contacto*/
let crearContacto = {
    Nombre : "Isacc gonzalez",
    Edad : 23,
    Telefono : 3052368595,
    Ubicacion : "Barranquilla",
    Direccion: "Calle 128 g 52-80" 
}
miListaDeContacto.push(crearContacto.Nombre , crearContacto.Edad, crearContacto.Telefono, crearContacto.Ubicacion, crearContacto.Direccion)
console.log(miListaDeContacto);

/*eliminar contacto*/
let = 1;  
const eliminarContacto  = (arr,indice)=>{
    arr.splice(indice,3);
}
let posicion = 0;
for (let i= 0; i < miListaDeContacto.length; i++) {
    const element = miListaDeContacto[i];
    if (element === "Guillermo Morris") {
        posicion = miListaDeContacto[i]
        eliminarContacto(miListaDeContacto,posicion)
    }
}

/*Mostrar contacto*/
console.log(miListaDeContacto);