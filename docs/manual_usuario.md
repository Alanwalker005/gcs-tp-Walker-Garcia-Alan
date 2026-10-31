# Manual de Usuario

## Versión 1.1

El sistema permite ingresar el nombre y el teléfono de un cliente y guardarlo con el botón "Guardar".

### Validación del campo Teléfono (nuevo en v1.1)

El campo "Teléfono" acepta **únicamente números** (dígitos del 0 al 9), sin espacios ni símbolos, y no puede quedar vacío.

- Si el teléfono contiene letras, espacios, guiones u otros símbolos, o está vacío, el sistema muestra el mensaje **"Teléfono inválido: solo se permiten dígitos del 0 al 9, sin espacios ni símbolos, y no puede quedar vacío."** y **no guarda** el cliente.
- Si el teléfono contiene solo números, el cliente se guarda normalmente.

### Ejemplos

| Teléfono ingresado | Resultado |
|--------------------|-----------|
| `2805316677` | Se guarda el cliente |
| `5` | Se guarda el cliente |
| `2805aew` | Mensaje de error, no se guarda |
| `aew` | Mensaje de error, no se guarda |
| `2805 316677` | Mensaje de error, no se guarda |
| `2805-316677` | Mensaje de error, no se guarda |
| `+542805316677` | Mensaje de error, no se guarda |
| (vacío) | Mensaje de error, no se guarda |