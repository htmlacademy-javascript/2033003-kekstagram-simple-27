import { pictureformParameters as params } from './picture_form/picture-form-parameters.js';
import { addEventListeners, isEscapeKey, isOutOfBoundClick } from './util/util.js';

const bodyElement = document.querySelector('body');
const successTemplateElement = document.querySelector(params.successTemplateId);
const successCloneTemplateElement = successTemplateElement.content.querySelector(params.successClass).cloneNode(true);
const successCloneElement = successCloneTemplateElement.cloneNode(true);
const closeSuccessButtonElement = successCloneElement.querySelector(params.successButton);
const successFragment = document.createDocumentFragment();

const eventListeners = [{
  selector: closeSuccessButtonElement,
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

function onOutOfBoundClick(evt){
  if (!isOutOfBoundClick(evt,params.successInner)) {
    closeSuccessWindow();
  }
}

function closeSuccessWindow() {
  bodyElement.removeChild(successCloneElement);
  document.removeEventListener('keydown', onSuccessElementEscKeydown);
  document.removeEventListener('click', onOutOfBoundClick);
  document.removeEventListener('click', onHideSuccessClick);
}

const showSuccessWindow = () => {
  successFragment.append(successCloneElement);
  bodyElement.append(successFragment);
};

const showSuccessSaveAlert = () => {
  addEventListeners(eventListeners);
  showSuccessWindow();
};

export { showSuccessSaveAlert };
