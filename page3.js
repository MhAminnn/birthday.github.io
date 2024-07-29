document.addEventListener('DOMContentLoaded', function () {
    const greetingText = "Semoga hari ini menjadi awal dari tahun yang penuh kebahagiaan, kesehatan, dan kesuksesan. Doa kami untukmu agar selalu diberikan yang terbaik dalam setiap langkahmu. Selamat ulang tahun, semoga semua impianmu menjadi kenyataan!";
    const delay = 720; // Delay per kata dalam milidetik
    const duration = 25000; // Durasi video dalam milidetik (25 detik)

    const greetingElement = document.getElementById('greeting-text');

    function displayTextWithDelay(text, delay) {
        let index = 0;
        greetingElement.innerHTML = ''; // Clear existing text
        const words = text.split(' ');
        const intervalId = setInterval(() => {
            if (index < words.length) {
                greetingElement.innerHTML += words[index] + ' ';
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, delay);
    }

    displayTextWithDelay(greetingText, delay);

    // Optionally, hide the text while video is playing, if needed
    const video = document.querySelector('.background-video');
    video.addEventListener('ended', function () {
        greetingElement.style.display = 'block'; // Show text after video ends, if needed
    });
});