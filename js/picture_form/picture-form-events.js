import { isEscapeKey } from '../util/util.js';
import {resetScale} from '../picture/picture-scale.js';
import {resetEffects} from '../picture/picture-effect.js';

const createPictureFormEventHandlers = ({pictureForm,uploadFile,cancelUpload}) => {
  const form = document.querySelector(pictureForm);
  const uploadPictureElement = document.querySelector(uploadFile);
  const cancelUploadPictureButtonElement = document.querySelector(cancelUpload);

  uploadPictureElement.addEventListener('change', () => {
    openModal();
  });

  cancelUploadPictureButtonElement.addEventListener('click', () => {
    closeModal();
  });

  const onPopupEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeModal();
    }
  };

  function closeModal() {
    resetScale();
    resetEffects();
    uploadPictureElement.value = '';
    form.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    document.removeEventListener('keydown', onPopupEscKeydown);
  }

  function openModal() {
    form.classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
    document.addEventListener('keydown', onPopupEscKeydown);
  }
};
export {createPictureFormEventHandlers};
