document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    const welcomeModal = document.getElementById('welcomeModal');
    const closeWelcomeBtn = welcomeModal.querySelector('.close');

    // Toggle burger menu
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Modal welcome
    setTimeout(() => {
        welcomeModal.style.display = 'flex';
    }, 1000);

    closeWelcomeBtn.addEventListener('click', () => {
        welcomeModal.style.display = 'none';
        enablePhotoModal(); // Aktifkan modal foto setelah modal welcome ditutup
    });

    window.addEventListener('click', (e) => {
        if (e.target === welcomeModal) {
            welcomeModal.style.display = 'none';
            enablePhotoModal();
        }
    });

    // **MODAL FOTO DETAIL (Akan Aktif Setelah Modal Welcome Ditutup)**
    function enablePhotoModal() {
        const photoModal = document.createElement('div');
        photoModal.classList.add('photo-modal');
        photoModal.style.display = 'none'; // Jangan tampilkan dulu
        photoModal.innerHTML = `
            <div class="photo-modal-content">
                <span class="photo-close">&times;</span>
                <img src="" alt="Foto Detail">
            </div>
        `;
        document.body.appendChild(photoModal);

        const modalImg = photoModal.querySelector('img');
        const closePhotoModal = photoModal.querySelector('.photo-close');

        document.querySelectorAll('.view-btn').forEach(button => {
            button.addEventListener('click', () => {
                const imgSrc = button.closest('.gallery-item').querySelector('img').src;
                modalImg.src = imgSrc;
                photoModal.style.display = 'flex';
            });
        });

        closePhotoModal.addEventListener('click', () => {
            photoModal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === photoModal) {
                photoModal.style.display = 'none';
            }
        });
    }
});
