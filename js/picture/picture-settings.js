const createPictureSettings = ({ decreaseButtonElement, zoomButtonElement, controlValueElement,
  minLengthAttribute, maxLengthAttribute, scaleContainer, uploadPreviewClass, effectsContainer, inputElement, sliderClass, sliderValue, filters, sliderContainer }) => {

  const uploadScaleElement = document.querySelector(scaleContainer);
  const uploadEffectsElement = document.querySelector(effectsContainer);
  const sliderContainerElement = document.querySelector(sliderContainer);
  const sliderElement = document.querySelector(sliderClass);
  const sliderValueElement = document.querySelector(sliderValue);
  const inputElements = document.querySelectorAll(inputElement);
  let selectedEffect = filters[inputElements[0].value];

  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100
    },
    start: 100,
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      }
    }
  });

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
              document.querySelector(uploadPreviewClass).style.transform = `scale(${cellItem.value.slice(0, -1) / 100})`;
            }
          } else if (evt.target.classList.contains(zoomButtonElement)) {
            if (pictureSizeValue < maxPictureSizeValue) {
              cellItem.value = `${pictureSizeValue + stepSize}%`;
              document.querySelector(uploadPreviewClass).style.transform = `scale(${cellItem.value.slice(0, -1) / 100})`;
            }
          }

        }

      });
    }
  };

  const setEffect = (effectName, isCheked) => {
    document.querySelector(uploadPreviewClass).classList.add(`effects__preview--${effectName}`);
    if (!isCheked) {
      document.querySelector(uploadPreviewClass).classList.remove(`effects__preview--${effectName}`);
    }
    document.querySelector(`input[value="${effectName}"]`).checked = isCheked;
  };

  const updateIntensityEffect = () => {
    sliderContainerElement.removeAttribute('style');
    sliderContainerElement.style.display = selectedEffect.display;
    let styleString = `${selectedEffect.filter}(${sliderElement.noUiSlider.get()})`;
    if (selectedEffect.filter === 'invert') {
      styleString = `${selectedEffect.filter}(${sliderElement.noUiSlider.get()}%)`;
    } else if (selectedEffect.filter === 'blur') {
      styleString = `${selectedEffect.filter}(${sliderElement.noUiSlider.get()}px)`;
    }
    document.querySelector(uploadPreviewClass).style.filter = styleString;
  };

  const setIntensityEffect = (effectName) => {
    sliderContainerElement.style.display = filters[effectName].display;
    selectedEffect = filters[effectName];
    if (selectedEffect !== filters.none) {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: filters[effectName].min,
          max: filters[effectName].max
        },
        start: 100,
        step: filters[effectName].step
      });
      updateIntensityEffect();
    } else {
      document.querySelector(uploadPreviewClass).style = filters.none.filter;
    }
  };

  const onUploadEffects = (evt) => {
    if (evt.target.tagName === 'INPUT') {
      inputElements.forEach((_element, index) => {

        if (inputElements[index].type === 'radio' && inputElements[index].checked) {
          setEffect(inputElements[index].value, true);
          setIntensityEffect(inputElements[index].value);
        } else {
          setEffect(inputElements[index].value, false);
          //setIntensityEffect(_element[0].value);
        }
      });
    }
  };

  const onSliderChange = () => {
    sliderValueElement.value = sliderElement.noUiSlider.get();
    updateIntensityEffect();
  };

  uploadScaleElement.addEventListener('click', onUploadScale);
  uploadEffectsElement.addEventListener('change', onUploadEffects);
  sliderElement.noUiSlider.on('update', onSliderChange);
};

export { createPictureSettings };
