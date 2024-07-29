function openPage() {
    const overlay = document.getElementById('overlay');
    overlay.classList.add('active');
    setTimeout(() => {
        window.location.href = 'halaman-baru.html'; // Ubah ini dengan URL halaman baru Anda
    }, 500); // Tunda selama 0.5 detik untuk animasi
}