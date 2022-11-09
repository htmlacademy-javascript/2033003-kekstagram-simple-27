import { showErrorLoadAlert } from './error.js';
import { unblockSubmitButton } from './picture_form/picture-form.js';

async function getPictures() {
  const response = await fetch('https://27.javascript.pages.academy/kekstagram-simple/data');
  if (!response.ok) {
    throw new Error();
  }
  const pictures = await response.json();
  return pictures;
}

const getData = (onSuccess) => {
  getPictures()
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch(() => showErrorLoadAlert());
};

async function sendPictures(onSuccess, onFail, body) {
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
  } else {
    onFail();
    unblockSubmitButton();
  }
}

const sendData = (onSuccess, onFail, body) => {
  sendPictures(onSuccess, onFail, body)
    .catch(() => {
      onFail();
      unblockSubmitButton();
    });
};

export { getData, sendData };
