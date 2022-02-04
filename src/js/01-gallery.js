import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(({ original, preview, description}) =>
    `<a class="gallery__item" href="${original}">
    <img src="${preview}" class="gallery__image" alt="${description}"/>
    </a>`)
    .join('');

galleryRef.insertAdjacentHTML('afterbegin', galleryMarkup);

const lightboxGallery = new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay:250 });
lightboxGallery.show;