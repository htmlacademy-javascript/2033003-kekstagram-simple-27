import { pictureformParameters as params } from './picture_form/picture-form-parameters.js';
import { addEventListeners, isEscapeKey, IsOutOfBoundClick } from './util/util.js';

const bodyElement = document.querySelector('body');
const successTemplateElement = document.querySelector(params.successTemplateId);
const successTemplateClass = successTemplateElement.content.querySelector(params.successClass).cloneNode(true);
const successElementClone = successTemplateClass.cloneNode(true);
const closeSuccessButton = successElementClone.querySelector(params.successButton);
const successFragment = document.createDocumentFragment();

const eventListeners = [{
  selector: closeSuccessButton,
  eventType: 'click',
  cb: onHideSuccessClick,
}, {
  selector: 'document',
  eventType: 'keydown',
  cb: onSuccessElementEscKeydown,
}, {
  selector: 'document',
  eventType: 'click',
  cb: onOutOfBoundClick,
}];

function onHideSuccessClick(evt){
  evt.preventDefault();
  closeSuccessWindow();
}

function onSuccessElementEscKeydown(evt){
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessWindow();
  }
}

function onOutOfBoundClick(evt) {
  if (!IsOutOfBoundClick(evt,params.successInner)) {
    closeSuccessWindow();
  }
}

function closeSuccessWindow() {
  bodyElement.removeChild(successElementClone);
  document.removeEventListener('keydown', onSuccessElementEscKeydown);
  document.removeEventListener('click', onOutOfBoundClick);
  document.removeEventListener('click', onHideSuccessClick);
}

const showSuccessSaveAlert = () => {
  addEventListeners(eventListeners);
  showSuccessWindow();
};

function showSuccessWindow() {
  successFragment.append(successElementClone);
  bodyElement.append(successFragment);
}


export { showSuccessSaveAlert };
