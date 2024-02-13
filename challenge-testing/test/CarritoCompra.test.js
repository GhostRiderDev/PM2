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
    expect(() => carrito.agregarProducto({})).toThrow(
      new Error("Product empty")
    );
  });

  it("If properties of object send is not valid, throw error", () => {
    expect(() =>
      carrito
        .agregarProducto({
          nombre: "Arroz",
          precio: 6000,
          cantidad: 5,
        })
        .toThrowError(new Error("invalid product"))
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

describe("calcularTotal method", () => {
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra([
      {
        nombre: "Leche",
        precio: 5000,
        cantidad: 3,
      },
      {
        nombre: "Arroz",
        precio: 6000,
        cantidad: 5,
      },
    ]);
  });

  it("calcularTotal must be is defined", () => {
    expect(carrito.calcularTotal).toBeDefined();
  });
  it("calcularTotal must be type function", () => {
    expect(typeof carrito.calcularTotal).toBe("function");
  });
  it("calcularTotal must be return a number", () => {
    expect(typeof carrito.calcularTotal()).toBe("number");
  });
  it("calcularTotal must bereturn a positive number", () => {
    expect(carrito.calcularTotal()).toBeGreaterThan(-1);
  });
  it("calculartotal must be return 45000", () => {
    expect(carrito.calcularTotal()).toBe(45000);
  });
  it("if data is empty must be return 0", () => {
    carrito = new CarritoCompra([]);
    expect(carrito.calcularTotal()).toBe(0);
  });
});

describe("aplicarDescuento method", () => {
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra([
      {
        nombre: "Leche",
        precio: 5000,
        cantidad: 3,
      },
      {
        nombre: "Arroz",
        precio: 6000,
        cantidad: 5,
      },
    ]);
  });

  it("aplicarDescuento must be is defined", () => {
    expect(carrito.calcularTotal).toBeDefined();
  });
  it("aplicarDescuento must be type function", () => {
    expect(typeof carrito.calcularTotal).toBe("function");
  });
  it("if not send percentage no apply discount", () => {
    expect(carrito.aplicarDescuento()).toBe(45000);
  });
  it("percentage is in % not decimal so apply in %", () => {
    expect(carrito.aplicarDescuento(0.5)).toBe(45000 - (0.5 / 100) * 45000);
  });
  it("if not send type number throw error", () => {
    expect(() => carrito.aplicarDescuento("15%")).toThrow(
      new Error("Invalid type")
    );
  });
  it("if data is success apply discount", () => {
    expect(carrito.aplicarDescuento(50)).toBe(45000 / 2);
  });
});
