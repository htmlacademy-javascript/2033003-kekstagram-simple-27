import { createDataPhotos } from './photo-data.js';
import { MAX_COUNT_OBJECTS } from './CONSTANTS.js';

const photoData = createDataPhotos(MAX_COUNT_OBJECTS);

const parameters = {
  containerClass: '.pictures',
  templateId: '#picture',
  templateClass: '.picture',
  urlClass: '.picture__img',
  likesClass: '.picture__likes',
  commentsClass: '.picture__comments',
};

function creatingPhotoElement(data,params) {
  const pictureContainer = document.querySelector (params.containerClass);//в конце выполнения ошибка по этой строке Uncaught TypeError: Cannot read properties of undefined (reading 'containerClass')
  const pictureTemplate = document.querySelector (params.templateId).content.querySelector (params.templateClass).cloneNode (true);
  const pictureFragment = document.createDocumentFragment ();

  data.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector (params.urlClass).url = url;
    pictureElement.querySelector (params.likesClass).textContent = likes;
    pictureElement.querySelector (params.commentsClass).textContent = comments;
    pictureFragment.append (pictureElement);
  });
  pictureContainer.append(pictureFragment);
}

creatingPhotoElement(photoData,parameters);
export { creatingPhotoElement };

/*
import { createDataPhotos } from './photo-data.js';
import { MAX_COUNT_OBJECTS } from './CONSTANTS.js';

const params = {
  containerClass: '.pictures',
  templateId: '#picture',
  templateClass: '.picture',
  urlClass: '.picture__img',
  likesClass: '.picture__likes',
  commentsClass: '.picture__comments',
};

const photosData = createDataPhotos(MAX_COUNT_OBJECTS);

const creatingPhotoElement = (photoData, parameters) => {
  const photoContainer = document.querySelector (parameters.containerClass);
  const pictureTemplate = document.querySelector (parameters.templateId).content.querySelector (parameters.templateClass).cloneNode (true); //2
  const photoFragment = document.createDocumentFragment ();

  photoData.forEach (({url, likes, comments}) => {
    const photoElement = structuredClone (photoFragment); //3
    photoElement.querySelector (params.urlClass).url = url;
    photoElement.querySelector (params.likesClass).textContent = likes;
    photoElement.querySelector (params.commentsClass).textContent = comments.length;
    photoFragment.append (photoElement);
  });
  photoContainer.append(photoFragment);
};

creatingPhotoElement(photosData,params);
export { creatingPhotoElement };
*/
