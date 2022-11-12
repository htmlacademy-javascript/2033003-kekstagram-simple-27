import { pictureformParameters as params } from './picture_form/picture-form-parameters.js';
import { addOnPictureFormEscKeydown } from './picture_form/picture-form.js';
import { isEscapeKey,isOutOfBoundClick, addEventListeners, removeClassFromElement } from './util/util.js';

const bodyElement = document.querySelector('body');
const errorTemplateElement = document.querySelector(params.errorTemplateId);
const errorCloneTemplateElement = errorTemplateElement.content.querySelector(params.errorClass).cloneNode(true);
const errorCloneElement = errorCloneTemplateElement.cloneNode(true);
const closeErrorButtonElement = errorCloneElement.querySelector(params.errorButton);
const errorFragment = document.createDocumentFragment();

const eventListeners = [{
  selector: closeErrorButtonElement,
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
  if (!isOutOfBoundClick(evt, params.errorInner)) {
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
  bodyElement.removeChild(errorCloneElement);
  document.removeEventListener('keydown', onErrorElementEscKeydown);
  document.removeEventListener('click', onOutOfBoundClick);
  document.removeEventListener('click', onHideErrorClick);
  addOnPictureFormEscKeydown();
}
function showErrorWindow() {
  errorFragment.append(errorCloneElement);
  bodyElement.append(errorFragment);
}

export { showErrorSaveAlert, showErrorLoadAlert};
