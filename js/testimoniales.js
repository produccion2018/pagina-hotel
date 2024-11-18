const testimonios = [
    { 
      nombre: 'Juan Pérez', 
      imagen: 'https://randomuser.me/api/portraits/men/1.jpg', 
      texto: 'Excelente servicio, muy recomendable para todos los que buscan calidad y atención.' 
    },
    { 
      nombre: 'Ana González', 
      imagen: 'https://randomuser.me/api/portraits/women/1.jpg', 
      texto: 'Estoy muy contenta con el producto, superó todas mis expectativas.' 
    },
    { 
      nombre: 'Carlos Martínez', 
      imagen: 'https://randomuser.me/api/portraits/men/2.jpg', 
      texto: 'Un servicio de primera calidad, sin duda volveré a contratar sus servicios.' 
    },
    { 
      nombre: 'Laura Fernández', 
      imagen: 'https://randomuser.me/api/portraits/women/2.jpg', 
      texto: 'La atención al cliente fue excepcional, muy amables y atentos.' 
    },
    { 
      nombre: 'Mario Díaz', 
      imagen: 'https://randomuser.me/api/portraits/men/3.jpg', 
      texto: 'Muy satisfecho con el resultado, todo salió según lo prometido.' 
    },
    { 
      nombre: 'Luisa Romero', 
      imagen: 'https://randomuser.me/api/portraits/women/3.jpg', 
      texto: 'Un servicio increíble, sin dudas los mejores en lo que hacen.' 
    },
    { 
      nombre: 'Pedro García', 
      imagen: 'https://randomuser.me/api/portraits/men/4.jpg', 
      texto: 'El producto llegó a tiempo y en perfectas condiciones, totalmente recomendado.' 
    },
    { 
      nombre: 'Sofía Herrera', 
      imagen: 'https://randomuser.me/api/portraits/women/4.jpg', 
      texto: 'Un trato personalizado y un excelente resultado final, muy contenta.' 
    },
    { 
      nombre: 'Ricardo López', 
      imagen: 'https://randomuser.me/api/portraits/men/5.jpg', 
      texto: 'Gran experiencia, sin dudas volveré para futuros proyectos.' 
    },
    { 
      nombre: 'Isabel Torres', 
      imagen: 'https://randomuser.me/api/portraits/women/5.jpg', 
      texto: 'Me encantó el servicio, superaron mis expectativas en todo.' 
    },
    { 
      nombre: 'Fernando Sánchez', 
      imagen: 'https://randomuser.me/api/portraits/men/6.jpg', 
      texto: 'Recomiendo completamente este servicio, calidad y rapidez.' 
    },
    { 
      nombre: 'Carolina Pérez', 
      imagen: 'https://randomuser.me/api/portraits/women/6.jpg', 
      texto: 'La atención al cliente fue muy buena y el producto de excelente calidad.' 
    },
    { 
      nombre: 'José Rodríguez', 
      imagen: 'https://randomuser.me/api/portraits/men/7.jpg', 
      texto: 'Todo perfecto, el proceso fue rápido y el producto llegó a tiempo.' 
    },
    { 
      nombre: 'Marta Ramírez', 
      imagen: 'https://randomuser.me/api/portraits/women/7.jpg', 
      texto: 'Súper contenta con el resultado, sin duda seguiré usando sus servicios.' 
    },
    { 
      nombre: 'Javier Martínez', 
      imagen: 'https://randomuser.me/api/portraits/men/8.jpg', 
      texto: 'Un equipo profesional y comprometido, me hicieron sentir cómodo en todo momento.' 
    },
    { 
      nombre: 'Raquel Gómez', 
      imagen: 'https://randomuser.me/api/portraits/women/8.jpg', 
      texto: 'Me encantó cómo resolvieron todo rápidamente, muy eficaces.' 
    },
    { 
      nombre: 'Luis Sánchez', 
      imagen: 'https://randomuser.me/api/portraits/men/9.jpg', 
      texto: 'Estoy muy satisfecho con la atención, siempre están dispuestos a ayudar.' 
    },
    { 
      nombre: 'Carmen Díaz', 
      imagen: 'https://randomuser.me/api/portraits/women/9.jpg', 
      texto: 'Una experiencia genial, el servicio al cliente es top.' 
    },
    { 
      nombre: 'David Martínez', 
      imagen: 'https://randomuser.me/api/portraits/men/10.jpg', 
      texto: 'Recomiendo totalmente sus servicios, una experiencia inmejorable.' 
    },
    { 
      nombre: 'Patricia López', 
      imagen: 'https://randomuser.me/api/portraits/women/10.jpg', 
      texto: 'Totalmente encantada con el trabajo, superaron mis expectativas.' 
    }
  ];
  
  const container = document.getElementById('testimonios-container');
  
  // Función para crear los testimonios
  function mostrarTestimonios() {
    testimonios.forEach((testimonio, index) => {
      const div = document.createElement('div');
      div.classList.add('testimonio');
      
      div.innerHTML = `
        <img src="${testimonio.imagen}" alt="${testimonio.nombre}">
        <h3>${testimonio.nombre}</h3>
        <p>${testimonio.texto}</p>
      `;
      
      container.appendChild(div);
      
      // Animación de aparición
      setTimeout(() => {
        div.classList.add('show');
      }, index * 300);
    });
  }
  
  document.addEventListener('DOMContentLoaded', mostrarTestimonios);
  