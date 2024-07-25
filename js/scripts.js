const thumbnails = document.querySelectorAll('.thumbnail');
const largeImage = document.getElementById('largeImage');
const imageCaption = document.getElementById('imageCaption');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
let currentIndex = 0;
let slideshowInterval;

function updateLargeImage(index) {
    const selectedThumbnail = thumbnails[index];
    largeImage.style.opacity = 0;
    largeImage.style.transform = 'scale(0.9)';
    setTimeout(() => {
        largeImage.src = selectedThumbnail.src;
        imageCaption.textContent = selectedThumbnail.getAttribute('data-caption');
        largeImage.style.opacity = 1;
        largeImage.style.transform = 'scale(1)';
    }, 300);
}

function startSlideshow() {
    slideshowInterval = setInterval(() => {
        currentIndex = (currentIndex < thumbnails.length - 1) ? currentIndex + 1 : 0;
        updateLargeImage(currentIndex);
    }, 3000); // Ganti gambar setiap 3 detik
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
}

function openLightbox() {
    lightboxImage.src = largeImage.src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

thumbnails.forEach((img, index) => {
    img.addEventListener('click', function() {
        currentIndex = index;
        updateLargeImage(currentIndex);
        stopSlideshow(); // Hentikan slideshow saat gambar diklik
    });
});

largeImage.addEventListener('click', openLightbox);
lightboxClose.addEventListener('click', closeLightbox);

prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : thumbnails.length - 1;
    updateLargeImage(currentIndex);
    stopSlideshow(); // Hentikan slideshow saat tombol navigasi diklik
});

nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex < thumbnails.length - 1) ? currentIndex + 1 : 0;
    updateLargeImage(currentIndex);
    stopSlideshow(); // Hentikan slideshow saat tombol navigasi diklik
});

startSlideshow(); // Mulai slideshow saat halaman dimuat
