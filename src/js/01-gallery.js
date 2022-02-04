import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallaryBox = document.querySelector('.gallery');
const galleryItemMarkup = createListItemMarkup(galleryItems);
gallaryBox.innerHTML = galleryItemMarkup;
function createListItemMarkup(items) {
return items.map(item => `<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
<img class="gallery__image"
src="${item.preview}"
data-source="${item.original}"
alt="${item.description}"/>
</a>
</div>`).join('');
};
var lightbox = new SimpleLightbox('.gallery a', {});