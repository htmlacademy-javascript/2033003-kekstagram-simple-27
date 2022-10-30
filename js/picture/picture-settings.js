const createPictureSettings = ({ decreaseButtonElement, zoomButtonElement, controlValueElement,controlValueClass, minLength, maxLength,scaleContainer,uploadPreview}) => {
  const uploadScaleElement = document.querySelector(scaleContainer);

  uploadScaleElement.addEventListener('click', (evt) => delegateFunction(evt));

  function delegateFunction(evt){
    const rowElements = Array.from(evt.currentTarget.children);
    if (evt.target.tagName === 'BUTTON') {
      rowElements.forEach((cellItem) => {

        if (cellItem.classList.contains(controlValueElement)) {
          const pictureSizeValue = Number(cellItem.value.slice(0, -1));
          const maxPictureSizeValue = document.querySelector(controlValueClass).getAttribute(maxLength);
          const minPictureSizeValue = document.querySelector(controlValueClass).getAttribute(minLength);
          const stepSize = Number(cellItem.step);

          if (evt.target.classList.contains(decreaseButtonElement)) {
            if (pictureSizeValue > minPictureSizeValue) {
              cellItem.value = `${pictureSizeValue - stepSize}%`;
              document.querySelector(uploadPreview).style.transform = `scale(${cellItem.value.slice(0, -1) / 100})`;
            }
          } else if (evt.target.classList.contains(zoomButtonElement)) {
            if (pictureSizeValue < maxPictureSizeValue) {
              cellItem.value = `${pictureSizeValue + stepSize}%`;
              document.querySelector(uploadPreview).style.transform = `scale(${cellItem.value.slice(0, -1) / 100})`;
            }
          }

        }

      });
    }
  }
};
export { createPictureSettings };
