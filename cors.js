const obtener= async () => {
    //usl del enpoint o consumir 
    const url = "http://localhost:8081/api/products"
    //credenciales 
    const username = "user"
    const password = "ac9dd212-df9b-4da5-9595-6b957ac65a4a"
    //objeto que contenga opciones de conexion 
    const options = {
        method: "GET",
        headers:{
            "Authorization" : "Basic " + btoa(`${username}:${password}`),
        }
    }
    //fetch para conectarnos 
    const respuesta = await fetch(url, options)
    const productos = await respuesta.json()
    console.log(productos)
    
}

obtener()