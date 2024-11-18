
document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío tradicional del formulario
    
    // Obtención de los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const personas = document.getElementById('personas').value;
    const habitaciones = document.getElementById('habitaciones').value;

    // Mostrar mensaje de confirmación con SweetAlert2
    Swal.fire({
      title: 'Reserva Confirmada',
      text: `Nombre: ${nombre}\nFecha de Entrada: ${checkIn}\nFecha de Salida: ${checkOut}\nPersonas: ${personas}\nHabitaciones: ${habitaciones}`,
      icon: 'success',
      confirmButtonText: '¡Gracias!',
    }).then(() => {
      // Limpiar los campos después de la confirmación
      document.getElementById('reservation-form').reset();
    });
  });

