import { createDataPhotos } from './photo-data.js';
import { MAX_COUNT_OBJECTS } from './CONSTANTS.js';

const photosData = createDataPhotos(MAX_COUNT_OBJECTS);

const creatingPhotoElement = () => {
  const pictureContainer = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const photoFragment = document.createDocumentFragment();

  photosData.forEach(({url, likes, comments}) => {
    const photoElement = pictureTemplate.cloneNode(true);

    photoElement.querySelector('.picture__img').url = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments;

    photoFragment.append(photoElement);
  });
  pictureContainer.append(photoFragment);
};

export { creatingPhotoElement };

