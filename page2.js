document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nameForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const nameInput = document.getElementById('nameInput').value.trim().toLowerCase(); // Ubah input menjadi huruf kecil
        const correctNames = ['fulan']; // Nama yang benar dalam huruf kecil
        
        if (correctNames.includes(nameInput)) {
            window.location.href = 'page3.html'; // Ganti dengan halaman selanjutnya
        } else {
            alert('Penyusup! anda bukan fulan.');
        }
    });
});