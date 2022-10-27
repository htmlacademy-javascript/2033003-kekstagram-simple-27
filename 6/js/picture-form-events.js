import { isEscapeKey } from './util.js';

const createEventHandlers = ({pictureForm,uploadFile,cancelUpload}) => {
  const uploadPicture = document.querySelector(uploadFile);
  const cancelUploadPictureButton = document.querySelector(cancelUpload);

  uploadPicture.addEventListener('change', () => {
    openModal();
  });

  cancelUploadPictureButton.addEventListener('click', () => {
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
    uploadPicture.value = '';
    document.querySelector('body').classList.remove('modal-open');
    document.removeEventListener('keydown', onPopupEscKeydown);
  }

  function openModal() {
    document.querySelector(pictureForm).classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
    document.addEventListener('keydown', onPopupEscKeydown);
  }
};
export {createEventHandlers};
