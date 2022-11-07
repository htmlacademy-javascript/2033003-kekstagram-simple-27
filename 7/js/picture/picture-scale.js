import {pictureScaleParameters as params} from'./picture-parameters.js';
import {DEFAULT_SCALE} from'../CONSTANTS.js';

const uploadScaleElement = document.querySelector(params.scaleContainer);
const maxPictureSizeValue = document.querySelector(`.${params.controlValueElement}`).getAttribute(params.maxLengthAttribute);
const minPictureSizeValue = document.querySelector(`.${params.controlValueElement}`).getAttribute(params.minLengthAttribute);

const scaleImage = (scaleValue = DEFAULT_SCALE) =>{
  document.querySelector(params.uploadPreviewClass).style.transform = `scale(${scaleValue / 100})`;
  document.querySelector(`.${params.controlValueElement}`).value = `${scaleValue}%`;
};

const onUploadScaleButtonClick = (evt) => {
  const rowElements = Array.from(evt.currentTarget.children);
  if (evt.target.tagName === 'BUTTON') {
    rowElements.forEach((cellItem) => {

      if (cellItem.classList.contains(params.controlValueElement)) {
        const pictureSizeValue = Number(cellItem.value.slice(0, -1));
        const stepSize = Number(cellItem.step);

        if (evt.target.classList.contains(params.decreaseButtonElement)) {
          if (pictureSizeValue > minPictureSizeValue) {
            const newValue = pictureSizeValue - stepSize;
            scaleImage(newValue);
          }
        } else {
          if (pictureSizeValue < maxPictureSizeValue) {
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
