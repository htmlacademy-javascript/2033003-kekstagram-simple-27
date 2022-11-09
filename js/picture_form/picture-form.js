import { isEscapeKey, verifyStringLength } from '../util/util.js';
import { resetScale } from '../picture/picture-scale.js';
import { resetEffects } from '../picture/picture-effect.js';
import { pictureformParameters as params } from '../picture_form/picture-form-parameters.js';
import { sendData } from '../api.js';
import { MIN_STRING_LENGTH, MAX_STRING_LENGTH } from '../CONSTANTS.js';
import { showErrorSaveAlert } from '../error.js';

const body = document.querySelector('body');
const mainFormElement = document.querySelector(params.mainForm);
const pictureFormElement = document.querySelector(params.pictureForm);
const commentElement = document.querySelector(params.comment);


function blockSubmitButton() {
  document.querySelector(params.save).disabled = true;
}
const unblockSubmitButton = () => {
  document.querySelector(params.save).disabled = false;
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
  if (isEscapeKey(evt) && body.classList) {
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
  pictureFormElement.classList.add('hidden');
  body.classList.remove('modal-open');
}

function onOpenModalChange() {
  pictureFormElement.classList.remove('hidden');
  body.classList.add('modal-open');
  addOnPictureFormEscKeydown();
}

const addEventListeners = (arr) => {
  arr.forEach((ele) => {
    const htmlElement = document.querySelector(ele.selector);
    htmlElement.addEventListener(ele.eventType, ele.cb);
  });
};

const eventListeners = [{
  selector: params.cancelUpload,
  eventType: 'click',
  cb: () => onCloseModalClick(),
}, {
  selector: params.uploadFile,
  eventType: 'change',
  cb: () => onOpenModalChange(),
}, {
  selector: params.mainForm,
  eventType: 'submit',
  cb: (evt) => onSaveFormClick(evt),
}];

addEventListeners(eventListeners);

export { blockSubmitButton, unblockSubmitButton, removeOnPictureFormEscKeydown, addOnPictureFormEscKeydown };
