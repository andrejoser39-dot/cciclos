let suma = 0;
let numeroInterrupcion = 0;
let interrumpido = false;

for (let i = 1; i <= 100; i++) {
    // Condición: mayor a 90 y par
    if (i > 90 && i % 2 == 0) {
        numeroInterrupcion = i;
        interrumpido = true;
        break; // Sale del bucle inmediatamente
    }
    
    suma += i;
    console.log("Sumando: " + i + " | Suma parcial: " + suma);
}

console.log("\n-------------------------------------------");
if (interrumpido) {
    console.log("EL CICLO SE INTERRUMPIÓ en el número: " + numeroInterrupcion);
}
console.log("LA SUMA FINAL ES: " + suma);
console.log("-------------------------------------------");
