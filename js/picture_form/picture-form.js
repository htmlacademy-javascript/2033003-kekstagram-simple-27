import { isEscapeKey } from '../util/util.js';
import { resetScale } from '../picture/picture-scale.js';
import { resetEffects } from '../picture/picture-effect.js';
import { pictureformParameters as params } from '../picture_form/picture-form-parameters.js';

const eventListeners = [{
  selector: params.cancelUpload,
  eventType: 'click',
  cb: () => closeModal(),
}, {
  selector: params.uploadFile,
  eventType: 'change',
  cb: () => openModal(),
}];

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function closeModal() {
  resetScale();
  resetEffects();
  document.querySelector(params.uploadFile).value = '';
  document.querySelector(params.pictureForm).classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
}

function openModal() {
  document.querySelector(params.pictureForm).classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
}

const addEventListeners = (arr) => {
  arr.forEach((ele) => {
    const htmlElement = document.querySelector(ele.selector);
    htmlElement.addEventListener(ele.eventType, ele.cb);
  });
};

addEventListeners(eventListeners);

