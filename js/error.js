import { pictureformParameters as params } from './picture_form/picture-form-parameters.js';
import { addOnPictureFormEscKeydown } from './picture_form/picture-form.js';
import { isEscapeKey,IsOutOfBoundClick, addEventListeners, removeClassFromElement } from './util/util.js';

const bodyElement = document.querySelector('body');
const errorTemplateElement = document.querySelector(params.errorTemplateId);
const errorTemplateClass = errorTemplateElement.content.querySelector(params.errorClass).cloneNode(true);
const errorElementClone = errorTemplateClass.cloneNode(true);
const closeErrorButton = errorElementClone.querySelector(params.errorButton);
const errorFragment = document.createDocumentFragment();

const eventListeners = [{
  selector: closeErrorButton,
  eventType: 'click',
  cb: onHideErrorClick,
}, {
  selector: 'document',
  eventType: 'keydown',
  cb: onErrorElementEscKeydown,
}, {
  selector: 'document',
  eventType: 'click',
  cb: onOutOfBoundClick,
}];

function onHideErrorClick(evt){
  evt.preventDefault();
  closeErrorWindow();
}

function onErrorElementEscKeydown(evt){
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorWindow();
  }
}

function onOutOfBoundClick(evt) {
  if (!IsOutOfBoundClick(evt,params.successInner)) {
    closeErrorWindow();
  }
}

const showErrorSaveAlert = () => {
  addEventListeners(eventListeners);
  showErrorWindow();
};

const showErrorLoadAlert = () => {
  removeClassFromElement(params.successLoadClass,'visually-hidden');
};

function closeErrorWindow() {
  bodyElement.removeChild(errorElementClone);
  document.removeEventListener('keydown', onErrorElementEscKeydown);
  document.removeEventListener('click', onOutOfBoundClick);
  document.removeEventListener('click', onHideErrorClick);
  addOnPictureFormEscKeydown();
}
function showErrorWindow() {
  errorFragment.append(errorElementClone);
  bodyElement.append(errorFragment);
}

export { showErrorSaveAlert, showErrorLoadAlert};
