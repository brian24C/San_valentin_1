/**
 * Invitación Digital San Valentín - Interactividad
 */

document.addEventListener('DOMContentLoaded', function () {
  // ¿Quieres ser mi San Valentín? — Sí / No
  var mensajesNo = [
    'Yo sé que quieres...',
    'Seguro que sí quieres, dime que sí 💕',
    'Vamos, no me hagas sufrir... ¡dime que sí!',
    '¿En serio no? Intenta otra vez 😏',
    'Yo sabía que te gustaría. ¡Pulsa Sí!',
    'No cuentes hasta tres... ¡Sí!',
    'Mi corazón dice que vas a decir que sí 💖',
    'Última oportunidad: ¡Sí!',
    'No te creo. Pulsa Sí y lo celebramos.'
  ];
  var indiceNo = 0;
  var yaDijoSi = false;
  var escalaSi = 1;
  var btnSi = document.getElementById('btn-valentin-si');
  var btnNo = document.getElementById('btn-valentin-no');
  var mensajeEl = document.getElementById('mensaje-valentin');

  if (btnSi && btnNo && mensajeEl) {
    btnSi.addEventListener('click', function () {
      if (yaDijoSi) return;
      yaDijoSi = true;
      mensajeEl.textContent = '¡Yo sabía que sí querías! 💕';
      mensajeEl.classList.add('animate-pulse');
      btnNo.style.display = 'none';
    });
    btnNo.addEventListener('click', function () {
      if (yaDijoSi) return;
      mensajeEl.textContent = mensajesNo[indiceNo % mensajesNo.length];
      indiceNo++;
      // Cada "No" agranda el botón Sí (máximo 2.5x para que sea gracioso pero no se salga)
      escalaSi = Math.min(escalaSi + 0.15, 2.5);
      btnSi.style.transform = 'scale(' + escalaSi + ')';
    });
  }

  // Botones REDIMIR de cupones
  document.querySelectorAll('.btn-redimir').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var cupon = this.getAttribute('data-cupon');
      var textoOriginal = this.innerHTML;
      this.innerHTML = '¡Canjeado! <span class="material-symbols-outlined text-sm">check_circle</span>';
      this.disabled = true;
      this.classList.add('opacity-75', 'cursor-not-allowed');
      // Opcional: volver a habilitar después de unos segundos (solo efecto visual)
      var self = this;
      setTimeout(function () {
        self.innerHTML = textoOriginal;
        self.disabled = false;
        self.classList.remove('opacity-75', 'cursor-not-allowed');
      }, 2500);
    });
  });

  // Descargar invitación (abre ventana de impresión para guardar como PDF)
  var btnDescargar = document.getElementById('btn-descargar');
  if (btnDescargar) {
    btnDescargar.addEventListener('click', function () {
      window.print();
    });
  }

  // Confirmar asistencia (mensaje de agradecimiento)
  var btnConfirmar = document.getElementById('btn-confirmar');
  if (btnConfirmar) {
    btnConfirmar.addEventListener('click', function () {
      alert('¡Gracias por confirmar! Te espero con todo el amor del mundo.');
    });
  }
});
