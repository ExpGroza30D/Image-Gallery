document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const largeImage = document.getElementById('largeImage');
    const displayImageDiv = document.querySelector('.display-image');
    const loader = document.getElementById('loader');

    container.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG') {
            largeImage.style.display = 'none';
            loader.style.display = 'block';
            displayImageDiv.style.display = 'block';
            largeImage.src = event.target.src;

            largeImage.onload = function() {
                loader.style.display = 'none';
                largeImage.style.display = 'block';
            }
        }
    });
});
