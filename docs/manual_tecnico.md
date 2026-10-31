# Manual Técnico

## Versión 1.1

### Archivos del sistema

- `src/index.html`: interfaz con el formulario (campos nombre y teléfono, botón Guardar).
- `src/script.js`: lógica del sistema.

### Funciones de `src/script.js`

#### `guardarCliente()`

Lee los campos nombre y teléfono y valida el teléfono con `validarTelefono()`. Si no es válido, muestra el mensaje de error «Teléfono inválido: solo se permiten dígitos del 0 al 9, sin espacios ni símbolos, y no puede quedar vacío.» y corta la ejecución con `return`, por lo que el cliente no se guarda. Si es válido, muestra una confirmación con `alert`.

#### `validarTelefono(tel)` (nuevo en v1.1)

```js
function validarTelefono(tel) {
  return /^[0-9]+$/.test(tel);
}
```

- **Parámetro:** `tel` (texto ingresado en el campo teléfono).
- **Retorna:** `true` si el texto contiene solo dígitos; `false` en cualquier otro caso.

### Expresión regular `/^[0-9]+$/`

| Parte | Significado |
|-------|-------------|
| `^` | Inicio del texto |
| `[0-9]` | Un carácter que sea un dígito del 0 al 9 |
| `+` | Uno o más de los caracteres anteriores (por eso un texto vacío es inválido) |
| `$` | Fin del texto |

Leída completa: «desde el inicio hasta el fin, solo dígitos». Con `.test(tel)` se comprueba si el texto cumple el patrón y devuelve `true` o `false`.

### Cambio asociado

- Ticket #101 (Issue #1 de GitHub): validar formato de teléfono.