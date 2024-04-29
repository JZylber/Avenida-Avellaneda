let producto = prompt("Ingrese el producto");
let cantidad = prompt("Ingrese la cantidad");
let precio = 0;
if (producto === "pantalon") {
  precio = calcularPrecioTotal(cantidad, 1500, 1000, 3);
} else if (producto === "remera") {
  precio = calcularPrecioTotal(cantidad, 800, 600, 6);
} else if (producto === "medias") {
  precio = calcularPrecioTotal(cantidad, 300, 200, 12);
} else if (producto === "calzonzillo" || producto === "bombacha") {
  precio = calcularPrecioTotal(cantidad, 500, 350, 12);
}
alert(`El precio total es de ${precio}p`);
