import '../../vendor/pristine/pristine.min.js';
import { isEscapeKey, verifyStringLength } from '../util/util.js';
import { resetScale } from '../picture/picture-scale.js';
import { resetEffects } from '../picture/picture-effect.js';
import { pictureformParameters as params } from '../picture_form/picture-form-parameters.js';
import { sendData } from '../api.js';
import { MIN_STRING_LENGTH, MAX_STRING_LENGTH } from '../CONSTANTS.js';
import { showSaveErrorAlert } from '../error.js';

const body = document.querySelector('body');
const mainFormElement = document.querySelector(params.mainForm);
const pictureFormElement = document.querySelector(params.pictureForm);
const commentElement = document.querySelector(params.comment);

const eventListeners = [{
  selector: params.cancelUpload,
  eventType: 'click',
  cb: () => closeModal(),
}, {
  selector: params.uploadFile,
  eventType: 'change',
  cb: () => openModal(),
}, {
  selector: params.save,
  eventType: 'click',
  cb: (evt) => saveForm(evt),
}];

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const blockSubmitButton = () =>{
  document.querySelector(params.save).disabled = true;
};
const unblockSubmitButton = () =>{
  document.querySelector(params.save).disabled = false;
};

function saveForm(evt) {
  evt.preventDefault();
  const isValid = verifyStringLength(commentElement.value, MIN_STRING_LENGTH, MAX_STRING_LENGTH);
  if (isValid) {
    blockSubmitButton();
    sendData(
      () => closeModal(),
      () => showSaveErrorAlert(),
      new FormData(mainFormElement),
    );
  }
}
function resetForm() {
  mainFormElement.reset();
}
function closeModal() {
  resetScale();
  resetEffects();
  resetForm();
  document.querySelector(params.uploadFile).value = '';
  pictureFormElement.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
}

function openModal() {
  pictureFormElement.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
}

const addEventListeners = (arr) => {
  arr.forEach((ele) => {
    const htmlElement = document.querySelector(ele.selector);
    htmlElement.addEventListener(ele.eventType, ele.cb);
  });
};

addEventListeners(eventListeners);

export{blockSubmitButton, unblockSubmitButton};
