# Plan de Pruebas

## Versión 1.1

### Objetivo

Verificar que el campo "Teléfono" acepte únicamente números (Ticket #101).

### Casos de prueba

| ID | Descripción | Entrada | Resultado esperado |
|----|-------------|---------|--------------------|
| CP-01 | Solo números | `2805316677` | Válido (se guarda) |
| CP-02 | Un solo dígito | `5` | Válido (se guarda) |
| CP-03 | Letras y números | `2805aew` | Inválido (mensaje de error, no se guarda) |
| CP-04 | Solo letras | `aew` | Inválido (mensaje de error, no se guarda) |
| CP-05 | Con espacio | `2805 316677` | Inválido (mensaje de error, no se guarda) |
| CP-06 | Con guion | `2805-316677` | Inválido (mensaje de error, no se guarda) |
| CP-07 | Con símbolo + | `+542805316677` | Inválido (mensaje de error, no se guarda) |
| CP-08 | Campo vacío | (vacío) | Inválido (mensaje de error, no se guarda) |

### Cómo se ejecutan

- **Automáticas:** `tests/test_validacion.js` contiene los casos de prueba que verifican la función `validarTelefono`.
- **Manuales:** abrir `src/index.html`, ingresar cada entrada y comprobar el mensaje.

### Criterio de aceptación

Todos los casos deben dar el resultado esperado.