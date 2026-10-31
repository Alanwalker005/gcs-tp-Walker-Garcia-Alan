function validarTelefono(tel) {
  return /^[0-9]+$/.test(tel);
}

function guardarCliente() {
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;

  if (!validarTelefono(telefono)) {
    alert("Teléfono inválido: solo se permiten dígitos del 0 al 9, sin espacios ni símbolos, y no puede quedar vacío.");
    return;
  }

  alert(`Cliente guardado | Nombre: ${nombre} | Teléfono: ${telefono}`);
}