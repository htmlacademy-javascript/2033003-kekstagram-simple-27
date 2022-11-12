import { addEventListeners, addClassToElement, isEscapeKey, verifyStringLength, removeClassFromElement } from '../util/util.js';
import { resetScale } from '../picture/picture-scale.js';
import { resetEffects } from '../picture/picture-effect.js';
import { pictureformParameters as params } from '../picture_form/picture-form-parameters.js';
import { sendData } from '../api.js';
import { MIN_STRING_LENGTH, MAX_STRING_LENGTH } from '../CONSTANTS.js';
import { showErrorSaveAlert } from '../error.js';

const bodyElement = document.querySelector('body');
const mainFormElement = document.querySelector(params.mainForm);
const commentElement = document.querySelector(params.commentTextarea);

function blockSubmitButton() {
  document.querySelector(params.saveButton).disabled = true;
}
const unblockSubmitButton = () => {
  document.querySelector(params.saveButton).disabled = false;
};

const setOnFormSubmit = (async (data) => {
  await sendData(onCloseModalClick, showErrorSaveAlert, new FormData(data));
});

const onSaveFormClick = (evt) => {
  evt.preventDefault();
  const isValid = verifyStringLength(commentElement.value, MIN_STRING_LENGTH, MAX_STRING_LENGTH);
  if (isValid) {
    blockSubmitButton();
    setOnFormSubmit(mainFormElement);
  }
};
const onPictureFormEscKeydown = (evt) => {
  if (isEscapeKey(evt) && bodyElement.classList) {
    evt.preventDefault();
    onCloseModalClick();
  }
};

const removeOnPictureFormEscKeydown = () =>{
  document.removeEventListener('keydown', onPictureFormEscKeydown);
};

const addOnPictureFormEscKeydown = () =>{
  document.addEventListener('keydown', onPictureFormEscKeydown);
};

function resetForm() {
  mainFormElement.reset();
}

function onCloseModalClick() {
  resetScale();
  resetEffects();
  resetForm();
  removeOnPictureFormEscKeydown();
  document.querySelector(params.uploadFile).value = '';
  addClassToElement(params.pictureForm,'hidden');
  removeClassFromElement('body','modal-open');
}

function onOpenModalChange() {
  removeClassFromElement(params.pictureForm,'hidden');
  addClassToElement('body','modal-open');
  addOnPictureFormEscKeydown();
}

const eventListeners = [{
  selector: params.cancelUpload,
  eventType: 'click',
  cb: onCloseModalClick,
}, {
  selector: params.uploadFile,
  eventType: 'change',
  cb: onOpenModalChange,
}, {
  selector: params.mainForm,
  eventType: 'submit',
  cb: onSaveFormClick,
}];

addEventListeners(eventListeners);

export { blockSubmitButton, unblockSubmitButton, removeOnPictureFormEscKeydown, addOnPictureFormEscKeydown };
