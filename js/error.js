import { pictureformParameters as params } from './picture_form/picture-form-parameters.js';
import { isEscapeKey,IsOutOfBoundClick, addEventListeners } from './util/util.js';

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
  cb: onPopupEscKeydown,
}, {
  selector: 'document',
  eventType: 'click',
  cb: onOutOfBoundClick,
}];

function onHideErrorClick(evt){
  evt.preventDefault();
  closeErrorWindow();
}

function onPopupEscKeydown(evt){
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorWindow();
  }
}

function onOutOfBoundClick(evt) {
  const withinBoundaries = IsOutOfBoundClick(evt,params.errorInner);
  if (!withinBoundaries) {
    closeErrorWindow();
  }
}

const showErrorSaveAlert = () => {
  addEventListeners(eventListeners);
  showErrorWindow();
};

const showErrorLoadAlert = () => {
  const messageSection = document.querySelector('.success-load');
  messageSection.classList.remove('visually-hidden');
};

function closeErrorWindow() {
  bodyElement.removeChild(errorElementClone);
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', onOutOfBoundClick);
  document.removeEventListener('click', onHideErrorClick);
}
function showErrorWindow() {
  errorFragment.append(errorElementClone);
  bodyElement.append(errorFragment);
}
export { showErrorSaveAlert, showErrorLoadAlert };
