
function calcularPrestamo() {
  const tasaInteres = 0.35; // 35% de interés anual
  
  let monto, plazo;

  // Bucle para obtener un monto válido
  while (isNaN(monto) || monto <= 0) {
      monto = parseFloat(prompt("¿Cuánto dinero necesita?"));
      if (isNaN(monto) || monto <= 0) {
          alert("Por favor, ingrese un monto válido.");
      }
  }

  // Bucle para obtener un plazo válido
  while (isNaN(plazo) || plazo <= 0) {
      plazo = parseInt(prompt("¿En cuántos meses planea pagar el préstamo?"));
      if (isNaN(plazo) || plazo <= 0) {
          alert("Por favor, ingrese un plazo válido.");
      }
  }

  const tasaMensual = tasaInteres / 12;
  const cuotaMensual = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo));
  const totalAPagar = cuotaMensual * plazo;

  alert(`
      Monto del préstamo: $${monto.toFixed(2)}
      Plazo: ${plazo} meses
      Cuota mensual: $${cuotaMensual.toFixed(2)}
      Total a pagar: $${totalAPagar.toFixed(2)}`);
}

// Llama a la función al cargar la página para iniciar el proceso
calcularPrestamo();
