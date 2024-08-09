document.addEventListener('DOMContentLoaded', () => {
    // Obtener elementos del DOM
    const downloadIcon = document.querySelector('.download-icon');
    const overlay = document.querySelector('.overlay');
    const closeOverlay = document.querySelector('.close-overlay');
    const platformBoxes = document.querySelectorAll('.platform-box');
    const themeToggleButton = document.querySelector('.theme-toggle');
    const themeIcon = themeToggleButton.querySelector('i'); // Obtener el icono dentro del botón de tema

    // Mostrar el overlay al hacer clic en el ícono de descarga
    if (downloadIcon) {
        downloadIcon.addEventListener('click', () => {
            overlay.style.display = 'flex';
        });
    }

    // Cerrar el overlay al hacer clic en el botón de cerrar
    if (closeOverlay) {
        closeOverlay.addEventListener('click', () => {
            overlay.style.display = 'none';
        });
    }

    // Mostrar alerta o redirigir según la plataforma
    if (platformBoxes.length > 0) {
        platformBoxes.forEach(box => {
            box.addEventListener('click', () => {
                if (box.id === 'windows') {
                    Swal.fire({
                        title: 'Próximamente',
                        text: 'La versión para Windows estará disponible próximamente.',
                        icon: 'info',
                        confirmButtonText: 'Aceptar'
                    });
                } else if (box.id === 'android') {
                    window.location.href = 'app/MG Pelis.apk'; // Ajusta la ruta según sea necesario
                }
            });
        });
    }

    // Cargar el tema guardado desde el almacenamiento local
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }

    // Cambiar el tema al hacer clic en el botón de tema
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            } else {
                localStorage.setItem('theme', 'light');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        });
    }
});
