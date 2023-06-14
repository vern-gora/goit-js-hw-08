// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryListEl = document.querySelector('.gallery');

const galleryItemsEl = galleryItems
  .map(({ preview, original, description }) => {
    let galleryList = `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a></li>`;
    return galleryList;
  })
  .join('');

galleryListEl.insertAdjacentHTML('beforeend', galleryItemsEl);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const galleryItemEl = document.querySelector('.gallery__item');
galleryItemEl.style.listStyle = 'none';
