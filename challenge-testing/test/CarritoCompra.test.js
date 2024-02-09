const CarritoCompra = require("./index");

describe("Class and constructor", () => {
  it("CarritoCompra is a function", () => {
    expect(typeof CarritoCompra).toBe("function");
  });
  it("CarritoCompra have constructor", () => {
    expect(CarritoCompra.constructor).toBeDefined();
  });
  it("If no send data to constructor compras is initialize empty", () => {
    const carrito = new CarritoCompra();
    expect(carrito.compras).toEqual([]);
  });
  it("If send data to constructor compras must contains the products inputs", () => {
    const input = [
      {
        nombre: "Arroz 2 lb",
        precio: 6000,
        cantidad: 6,
      },
      {
        nombre: "Leche",
        precio: 5000,
        cantidad: 3,
      },
    ];
    const carrito = new CarritoCompra(input);
    expect(carrito.compras).toEqual(input);
  });
});

describe("agregarProducto method", () => {
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra([]);
  });

  it("agregarProducto is function", () => {
    expect(typeof carrito.agregarProducto).toBe("function");
  });

  it("If object is not sent, throw error", () => {
    expect(() => carrito.agregarProducto({})).toThrowError(
      new Error("Product empty")
    );
  });

  it("If data is sent, it is added successfully to compras", () => {
    const product = {
      nombre: "Leche",
      precio: 5000,
      cantidad: 3,
    };
    carrito.agregarProducto(product);
    expect(carrito.compras).toContainEqual(product);
  });
});
