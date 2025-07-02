function MostrarMensaje() {
  const nombre = document.getElementById("nombre").value;
  const mensaje = nombre.trim()
    ? `Hola, ${nombre}! ¡Gracias por visitar nuestra página!.`
    : "Por favor, ingresa tu nombre.";
  document.getElementById("mensaje").textContent = mensaje;
}
