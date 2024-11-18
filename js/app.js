// Datos aleatorios de nombres y comentarios
const nombres = ["Mauro", "Cona", "Pipi", "Ana", "Luis", "Sofía", "Carlos", "María", "Diego", "Lucía"];
const comentarios = [
  "¡Excelente servicio!",
  "Muy satisfecho con los resultados.",
  "Sin duda, lo recomiendo.",
  "Gran atención al detalle.",
  "Superaron mis expectativas.",
  "Un equipo profesional y dedicado.",
  "Un servicio rápido y eficiente.",
  "Me encantó el resultado final.",
  "Definitivamente volveré a contratarlos.",
  "Un trabajo impecable."
];

// Generar colores aleatorios
function generarColorAleatorio() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Crear testimonios dinámicamente
const contenedor = document.getElementById('testimonios');
for (let i = 0; i < 20; i++) {
  const nombre = nombres[Math.floor(Math.random() * nombres.length)];
  const comentario = comentarios[Math.floor(Math.random() * comentarios.length)];
  const colorFondo = generarColorAleatorio();

  const testimonio = document.createElement('div');
  testimonio.className = 'testimonio';
  testimonio.style.backgroundColor = colorFondo;
  testimonio.innerHTML = `
    <div class="nombre">${nombre}</div>
    <div class="comentario">${comentario}</div>
  `;

  contenedor.appendChild(testimonio);
}
