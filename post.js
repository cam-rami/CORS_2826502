const guardarProducto = async(e) => {
    e.preventDefault()
    //estraer los datos del formulario:


const producto = {
    name : document.querySelector('#name').value,
    description: document.querySelector('#description').value,
    price : document.querySelector('#price').value,
}
const url = "http://localhost:8081/api/products"
        //credenciales 
const username = "admin"
const password = "admin"
        //objeto que contenga opciones de conexion 
const options = {
    method: "POST",
    headers:{
            "Content-Type" : "application/json",
            "Authorization" : "Basic " + btoa(`${username}:${password}`),
            },
            body: JSON.stringify(producto)
        }
        //fetch para conectarnos 
const respuesta = await fetch(url, options)
const productoGuardado = await respuesta.json()
        console.log(productoGuardado)
        alert ("guardado")
}


        //mostrar los productos en la tabla

    const formulario =
    document.querySelector('#formulario')
    formulario.addEventListener('submit',guardarProducto);
        
