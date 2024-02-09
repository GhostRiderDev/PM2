// function CarritoCompra(compras = []) {
//     this.compras = compras;
//   }
  
//   CarritoCompra.prototype.agregarProducto = function (producto) {
//     this.compras = this.compras.concat(producto);
//     return this.compras.length;
//   };
  
//   CarritoCompra.prototype.calcularTotal = function () {
//     return this.compras.reduce((acc, { precio, cantidad }) => {
//       return acc + precio * cantidad;
//     }, 0);
//   };
  
//   CarritoCompra.prototype.aplicarDescuento = function (porcentaje) {
//     return this.calcularTotal() * ((100 - porcentaje) / 100);
//   };
  
//   const buyCar = new CarritoCompra([]);
  
//   buyCar.agregarProducto({
//     nombre: "Leche",
//     precio: 5000,
//     cantidad: 3,
//   });
  
//   buyCar.agregarProducto({
//     nombre: "Arroz 2 lb",
//     precio: 6000,
//     cantidad: 6,
//   });
  
//   console.log(buyCar.calcularTotal());
//   console.log(buyCar.aplicarDescuento(80));