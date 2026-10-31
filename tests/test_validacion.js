// Tests de validación de teléfono (Ticket #101)
// Casos de prueba CP-01 a CP-08 de docs/plan_pruebas.md
// Se puede ejecutar con: node tests/test_validacion.js

function validarTelefono(tel) {
  return /^[0-9]+$/.test(tel);
}

let fallos = 0;

function probar(id, descripcion, entrada, esperado) {
  const resultado = validarTelefono(entrada);
  if (resultado === esperado) {
    console.log("OK    - " + id + ": " + descripcion);
  } else {
    console.log("FALLO - " + id + ": " + descripcion);
    fallos++;
  }
}

// Casos válidos
probar("CP-01", "Solo números", "2805316677", true);
probar("CP-02", "Un solo dígito", "5", true);

// Casos inválidos
probar("CP-03", "Letras y números", "2805aew", false);
probar("CP-04", "Solo letras", "aew", false);
probar("CP-05", "Con espacio", "2805 316677", false);
probar("CP-06", "Con guion", "2805-316677", false);
probar("CP-07", "Con símbolo +", "+542805316677", false);
probar("CP-08", "Campo vacío", "", false);

console.log(fallos === 0 ? "\nTodos los tests pasaron" : "\nTests fallidos: " + fallos);