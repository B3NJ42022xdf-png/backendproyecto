// ============================================
// Ejercicios de JavaScript: Carrito de compras
// Archivo: EjercicioSemana1/carrito.js
// ============================================

// Ejercicio 1:
// Creamos un arreglo llamado "productos" con 4 productos.
// Cada producto es un objeto con las propiedades "nombre" y "precio".
const productos = [
  { nombre: 'Cuaderno', precio: 45 },
  { nombre: 'Lápiz', precio: 12 },
  { nombre: 'Mochila', precio: 350 },
  { nombre: 'Calculadora', precio: 280 }
];

// Ejercicio 2:
// Usamos la propiedad length para saber cuántos productos hay.
console.log('Cantidad de productos: ' + productos.length);

// Ejercicio 3:
// El primer producto está en la posición 0 del arreglo.
// El último producto está en la posición (length - 1).
console.log('Primer producto:', productos[0]);
console.log('Último producto:', productos[productos.length - 1]);

// Ejercicio 4:
// Declaramos "total" en 0 y recorremos el arreglo con un ciclo for
// para ir sumando el precio de cada producto.
let total = 0;

for (let i = 0; i < productos.length; i++) {
  total = total + productos[i].precio;
}

// Mostramos el resultado final de la suma.
console.log('Total de la compra: $' + total);
