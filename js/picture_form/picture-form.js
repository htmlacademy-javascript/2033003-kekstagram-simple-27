import { addEventListeners, addClassToElement, verifyStringLength, removeClassFromElement,isEscapeKey } from '../util/util.js';
import { resetScale } from '../picture/picture-scale.js';
import { resetEffects } from '../picture/picture-effect.js';
import { pictureformParameters as params } from '../picture_form/picture-form-parameters.js';
import { sendData } from '../api.js';
import { MIN_STRING_LENGTH, MAX_STRING_LENGTH } from '../constants.js';
import { showErrorSaveAlert } from '../error.js';

const mainFormElement = document.querySelector(params.mainForm);

const blockSubmitButton = () => {
  document.querySelector(params.saveButton).disabled = true;
};

const unblockSubmitButton = () => {
  document.querySelector(params.saveButton).disabled = false;
};

const onElementEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onCloseModalClick();
  }
};

const setOnFormSubmit = (async (data) => {
  await sendData(onCloseModalClick, showErrorSaveAlert, new FormData(data));
});

const onSaveFormClick = (evt) => {
  evt.preventDefault();
  const commentElement = document.querySelector(params.commentTextarea);
  const isValid = verifyStringLength(commentElement.value, MIN_STRING_LENGTH, MAX_STRING_LENGTH);
  if (isValid) {
    blockSubmitButton();
    setOnFormSubmit(mainFormElement);
  }
};

const removeOnPictureFormEscKeydown = () =>{
  document.removeEventListener('keydown', onElementEscKeydown);
};

const addOnPictureFormEscKeydown = () =>{
  document.addEventListener('keydown', onElementEscKeydown);
};

const resetForm = () => {
  mainFormElement.reset();
};

function onOpenModalChange() {
  removeClassFromElement(params.pictureForm,'hidden');
  addClassToElement('body','modal-open');
  addOnPictureFormEscKeydown();
}

function onCloseModalClick() {
  resetScale();
  resetEffects();
  resetForm();
  removeOnPictureFormEscKeydown();
  addClassToElement(params.pictureForm,'hidden');
  removeClassFromElement('body','modal-open');
  document.querySelector(params.uploadFile).value = '';
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
