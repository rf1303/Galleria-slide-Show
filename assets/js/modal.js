const galleryButtons = document.querySelectorAll('.gallery__link');
const modal = document.getElementById('artwork-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = modal.querySelector('.modal__close');

let lastFocusedButton = null;

galleryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        lastFocusedButton = btn;
        // ⚡ Ejemplo: insertamos contenido dinámico
        const artworkId = btn.dataset.id;
        modalBody.innerHTML = `<img src="./assets/images/${artworkId}/image.jpg" 
                               alt="${artworkId}">`;

        // Mostrar modal
        modal.classList.remove('hidden');

        // Mover foco al modal
        modal.querySelector('.modal__content').focus();
    });
});

// Cerrar modal con botón
modalClose.addEventListener('click', closeModal);

// Cerrar modal con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

function closeModal() {
    modal.classList.add('hidden');
    // Devolver foco al botón que abrió el modal
    if (lastFocusedButton) {
        lastFocusedButton.focus();
    }
}




