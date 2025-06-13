document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.querySelector('.countdown');
    const targetDate = new Date(countdownElement.getAttribute('data-time')).getTime();
  
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      // Calcula días, horas, minutos y segundos
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Actualiza el contenido del elemento
      countdownElement.textContent = `${days} dias - ${hours} horas - ${minutes} min - ${seconds} seg`;
  
      // Si el conteo termina
      if (distance < 0) {
        clearInterval(interval);
        countdownElement.textContent = "¡Tiempo expirado!";
      }
    };
  
    // Actualiza el conteo cada segundo
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Llama a la función para que muestre el conteo inmediatamente
  });
  