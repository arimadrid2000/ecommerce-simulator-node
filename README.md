# ecommerce-simulator-node
api rest desarrollada en nodejs que simula la busqueda de un producto en un ecommerce

1. Luego de clonar la API en su ambiente local ejecute el comando `NPM INSTALL` en consola

2. Despues de terminar la instalacion ejecute el comando `NPM RUN DEV` para correr la aplicacion, esta se ejecutara en el puerto 3000 de su ambiente local.

3. Rutas:
   3.1. `https://www.localhost:3000/api/products/all` muestra el listado de todos los productos existentes.
   3.2. `https://www.localhost:3000/api/products?filter={productName}` busca el nombre del producto segun el parametro de busqueda y muestra la lista de coincidencias en pantalla,
         en caso de no encontrar coincidencias muestra un listado de productos sugeridos.
