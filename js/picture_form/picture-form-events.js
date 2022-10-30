import { isEscapeKey } from '../util/util.js';

const createPictureFormEventHandlers = ({pictureForm,uploadFile,cancelUpload}) => {
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
    document.querySelector(pictureForm).classList.add('hidden');
    uploadPictureElement.value = '';
    document.querySelector('body').classList.remove('modal-open');
    document.removeEventListener('keydown', onPopupEscKeydown);
  }

  function openModal() {
    document.querySelector(pictureForm).classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
    document.addEventListener('keydown', onPopupEscKeydown);
  }
};
export {createPictureFormEventHandlers};
