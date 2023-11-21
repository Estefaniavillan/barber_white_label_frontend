import Vue from "vue";
import VueTestUtils from "vue-test-utils";
import jest from "jest";

const productos = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 100,
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 200,
  },
];

describe("mostrarFormularioEditar", () => {
  it("debe mostrar los datos del producto", () => {
    // Moquear la función getProducto()
    const { $store } = Vue.createApp({}).mount();
    VueTestUtils.mock(`$store`, {
      state: {
        productos,
      },
    });

    // Moquear la función getProducto()
    VueTestUtils.mock(
      "./script.js#getProducto",
      () => productos[0]
    );

    // Llamar a la función mostrarFormularioEditar()
    mostrarFormularioEditar(productos[0].id);

    // Comprobar que el formulario de edición muestra los datos del producto correctamente
    expect(document.getElementById("nombre").value).toBe(productos[0].nombre);
    expect(document.getElementById("precio").value).toBe(productos[0].precio);
  });
});

jest.mock("@/firebase/auth", () => {
    const auth = {
      signInWithEmailAndPassword: jest.fn(),
    };
  
    return {
      auth,
    };
  });

jest.mock("@/firebase/auth", () => {
    const auth = {
      signInWithEmailAndPassword: jest.fn(() => Promise.resolve()),
    };
  
    return {
      auth,
    };
  });
  
  jest.mock("@/firebase/auth", () => {
    const auth = {
      signInWithEmailAndPassword: jest.fn(() => Promise.reject(new Error('Error al iniciar sesión'))),
    };
  
    return {
      auth,
    };
  });