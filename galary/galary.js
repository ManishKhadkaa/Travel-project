document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const caption = item.querySelector('p').textContent;
            lightboxImg.src = imgSrc;
            lightboxCaption.textContent = caption;
            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
});
