document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const responseImage = document.getElementById('response-image');
    const responseText = document.getElementById('response-text');
    const response = document.getElementById('response');

    yesButton.addEventListener('click', function() {
        responseImage.src = 'lidah.jpg'; // Ganti dengan path gambar untuk "Iya"
        responseImage.alt = 'Gambar untuk Iya';
        responseText.textContent = 'ga usah yah kan dah gede';
        response.style.opacity = 1;
    });

    noButton.addEventListener('click', function() {
        responseImage.src = 'alhamdulilah.jpg'; // Ganti dengan path gambar untuk "Ga mau"
        responseImage.alt = 'Gambar untuk Ga Mau';
        responseText.textContent = 'alhamdulillah sadar umur';
        response.style.opacity = 1;
    });
});