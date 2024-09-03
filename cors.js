const mostrarTblaProductos =(listaProductos) =>{
    //!en esta funcion escrbir instrucciones para monipular el DDM
    // de tal maner QUE EN LA TBODY MUSTRE CADA PRODUCTO  una fila el cuerpo de la tabla 
    const tbody = document.querySelector('table tbody');
    let linea = ''
    listaProductos.forEach(prod => {
        const {id,name, description, price } = prod
        linea = linea + `
        <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${description}</td>
            <td>${price}</td>
        </tr>`
    })

    tbody.innerHTML = linea;

  
}

const obtener= async () => {
    //usl del enpoint o consumir 
    const url = "http://localhost:8081/api/products"
    //credenciales 
    const username = "usurs"
    const password = "usurs"
    //objeto que contenga opciones de conexion 
    const options = {
        method: "GET",
        headers:{
            "Authorization" : "Basic " + btoa(`${username}:${password}`),
        }{}
    }
    //fetch para conectarnos 
    const respuesta = await fetch(url, options)
    const listaProductos = await respuesta.json()
    //mostrar los productos en la tabla
    mostrarTblaProductos(listaProductos)
    
    
}

obtener();