import {pictureScaleParameters as params} from'./picture-parameters.js';
import {DEFAULT_SCALE} from'../constants.js';

const uploadScaleElement = document.querySelector(params.scaleContainer);
const maxPictureSizeValueElement = document.querySelector(`.${params.controlValueElement}`).getAttribute(params.maxLengthAttribute);
const minPictureSizeValueElement = document.querySelector(`.${params.controlValueElement}`).getAttribute(params.minLengthAttribute);

const scaleImage = (scaleValue = DEFAULT_SCALE) =>{
  document.querySelector(params.uploadPreviewClass).style.transform = `scale(${scaleValue / 100})`;
  document.querySelector(`.${params.controlValueElement}`).value = `${scaleValue}%`;
};

const onUploadScaleButtonClick = (evt) => {
  const rows = Array.from(evt.currentTarget.children);
  if (evt.target.tagName === 'BUTTON') {
    rows.forEach((cellItem) => {

      if (cellItem.classList.contains(params.controlValueElement)) {
        const pictureSizeValue = Number(cellItem.value.slice(0, -1));
        const stepSize = Number(cellItem.step);
        const isDecreaseButton = evt.target.classList.contains(params.decreaseButtonElement);

        if (isDecreaseButton) {
          if (pictureSizeValue > minPictureSizeValueElement) {
            const newValue = pictureSizeValue - stepSize;
            scaleImage(newValue);
          }
        } else {
          if (pictureSizeValue < maxPictureSizeValueElement) {
            const newValue = pictureSizeValue + stepSize;
            scaleImage(newValue);
          }
        }

      }

    });
  }
};

const resetScale = () =>{
  scaleImage();
};

uploadScaleElement.addEventListener('click', onUploadScaleButtonClick);
export {resetScale};
