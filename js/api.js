import { showErrorLoadAlert } from './error.js';
import { unblockSubmitButton, removeOnPictureFormEscKeydown } from './picture_form/picture-form.js';
import { showSuccessSaveAlert } from './success.js';

const getData = async (onSuccess) => {
  try{
    const response = await fetch('https://27.javascript.pages.academy/kekstagram-simple/data');
    if (!response.ok) {
      throw new Error();
    }
    const pictures = await response.json();
    onSuccess(pictures);
  }catch(error){
    showErrorLoadAlert();
  }
};

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(
      'https://27.javascript.pages.academy/kekstagram-simple',
      {
        method: 'POST',
        body,
      },
    );
    if (response.ok) {
      onSuccess();
      unblockSubmitButton();
      showSuccessSaveAlert();
    } else {
      onFail();
      unblockSubmitButton();
      removeOnPictureFormEscKeydown();
    }
  } catch (error) {
    onFail();
    unblockSubmitButton();
    removeOnPictureFormEscKeydown();
  }
};

export { getData, sendData };
