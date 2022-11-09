import { showErrorLoadAlert } from './error.js';
import { unblockSubmitButton } from './picture_form/picture-form.js';

const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }else{
        throw new Error();
      }
    })
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch(() => showErrorLoadAlert());
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        unblockSubmitButton();
      } else {
        onFail();
        unblockSubmitButton();
      }
    })
    .catch(() => {
      onFail();
      unblockSubmitButton();
    });
};

export { getData, sendData };
