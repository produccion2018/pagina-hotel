document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío tradicional del formulario

    // Referencias a los elementos del formulario
    const form = document.getElementById('reservation-form');
    const nombre = document.getElementById('nombre').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const personas = document.getElementById('personas').value;
    const habitaciones = document.getElementById('habitaciones').value;

    // Validación de campos vacíos
    if (!nombre || !checkIn || !checkOut || !personas || !habitaciones) {
        Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'Por favor, completa todos los campos.',
        });
        return; // Si algún campo está vacío, detenemos la ejecución
    }

    // Validación de fechas
    if (new Date(checkIn) >= new Date(checkOut)) {
        Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'La fecha de entrada debe ser anterior a la fecha de salida.',
        });
        return; // Detener si las fechas no son válidas
    }

    // Si todo es válido, mostrar mensaje de éxito
    Swal.fire({
        icon: 'success',
        title: '¡Reserva realizada!',
        text: `Gracias, ${nombre}. Tu reserva para ${personas} persona(s)  ${habitaciones} habitación ha sido confirmada.`,
    }).then(() => {
        // Limpiar el formulario después de la confirmación
        form.reset();
    });
});
