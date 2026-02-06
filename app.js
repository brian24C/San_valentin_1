/**
 * Invitación Digital San Valentín - Interactividad
 */

document.addEventListener('DOMContentLoaded', function () {
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
