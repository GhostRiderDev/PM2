class CarritoCompra {
  constructor(initialCompras = []) {
    // Aqui va el codigo
    this.compras = initialCompras;
  }
  agregarProducto(product = {}) {
    // Aqui va el codigo
    if (!product || Object.keys(product).length === 0) {
      throw new Error("Product empty");
    }
    this.compras.push(product);
    return this.compras.length;
  }
  calcularTotal() {
    return this.compras.reduce(
      (acc, item) => acc + item.cantidad * item.precio,
      0
    );
  }
  aplicarDescuento(percentage = 0) {
    // Aqui va el codigo
    if (typeof percentage !== "number") {
      throw new Error("Invalid type");
    }
    return this.calcularTotal() * ((100 - percentage) / 100);
  }
}

module.exports = CarritoCompra;
