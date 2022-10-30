const createPictureSettings = ({ decreaseButtonElement, zoomButtonElement, controlValueElement,
  minLengthAttribute, maxLengthAttribute, scaleContainer, uploadPreviewElement, effectsContainer,inputElement }) => {

  const uploadScaleElement = document.querySelector(scaleContainer);
  const uploadEffectsElement = document.querySelector(effectsContainer);

  const onUploadScale = (evt) => {
    const rowElements = Array.from(evt.currentTarget.children);
    if (evt.target.tagName === 'BUTTON') {
      rowElements.forEach((cellItem) => {

        if (cellItem.classList.contains(controlValueElement)) {
          const pictureSizeValue = Number(cellItem.value.slice(0, -1));
          const maxPictureSizeValue = document.querySelector(`.${controlValueElement}`).getAttribute(maxLengthAttribute);
          const minPictureSizeValue = document.querySelector(`.${controlValueElement}`).getAttribute(minLengthAttribute);
          const stepSize = Number(cellItem.step);

          if (evt.target.classList.contains(decreaseButtonElement)) {
            if (pictureSizeValue > minPictureSizeValue) {
              cellItem.value = `${pictureSizeValue - stepSize}%`;
              document.querySelector(uploadPreviewElement).style.transform = `scale(${cellItem.value.slice(0, -1) / 100})`;
            }
          } else if (evt.target.classList.contains(zoomButtonElement)) {
            if (pictureSizeValue < maxPictureSizeValue) {
              cellItem.value = `${pictureSizeValue + stepSize}%`;
              document.querySelector(uploadPreviewElement).style.transform = `scale(${cellItem.value.slice(0, -1) / 100})`;
            }
          }

        }

      });
    }
  };

  const setSettings = (effectName,isCheked)=>{
    document.querySelector(uploadPreviewElement).classList.add(`effects__preview--${effectName}`);
    if(!isCheked){
      document.querySelector(uploadPreviewElement).classList.remove(`effects__preview--${effectName}`);
    }
    document.querySelector(`input[value="${effectName}"]`).setAttribute('checked', isCheked);
  };

  const onUploadEffects = (evt) => {
    if (evt.target.tagName === 'INPUT') {
      const rowElements = document.querySelectorAll(inputElement);

      rowElements.forEach((_element,index) => {
        if (rowElements[index].type === 'radio' && rowElements[index].checked) {
          setSettings(rowElements[index].value,true);
        } else {
          setSettings(rowElements[index].value,false);

        }
      });

    }
  };

  uploadScaleElement.addEventListener('click', onUploadScale);
  uploadEffectsElement.addEventListener('click', onUploadEffects);
};

export { createPictureSettings };
