import { pictureEffectParameters as paramsEffect} from '../picture/picture-parameters.js';
import { pictureScaleParameters as paramsScale} from '../picture/picture-parameters.js';
import { pictureformParameters as paramsForm} from '../picture_form/picture-form-parameters.js';
import { addClassToElement, removeClassFromElement } from '../util/util.js';

const imageElement = document.querySelector(paramsScale.uploadPreviewClass);
const formElement = document.querySelector(paramsForm.mainForm);
const sliderElement = document.querySelector(paramsEffect.sliderClass);
const effectLevel = document.querySelector(paramsEffect.sliderValue);

const DEFAULT_EFFECT = paramsEffect.effects[0];
let chosenEffect = DEFAULT_EFFECT;

const isDefault = () => chosenEffect === DEFAULT_EFFECT;

const updateSlider = () =>{
  removeClassFromElement(paramsEffect.sliderClass,'hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min:chosenEffect.min,
      max:chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
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

  if(isDefault()){
    addClassToElement(paramsEffect.sliderClass,'hidden');
  }
};

const onFormChange = (evt) =>{
  if(!evt.target.classList.contains(paramsEffect.radioInput)){
    return;
  }
  chosenEffect = paramsEffect.effects.find((effect)=> effect.name === evt.target.value);
  updateSlider();
};

const onSliderUpdate = () =>{
  imageElement.style.filter = 'none';
  imageElement.className = paramsScale.uploadPreviewClassName;
  effectLevel.value = '';
  if(isDefault()){
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  imageElement.style.filter = `${chosenEffect.filter}(${sliderValue}${chosenEffect.unit})`;
  addClassToElement(paramsScale.uploadPreviewClass,`effects__preview--${chosenEffect.name}`);
  effectLevel.value = sliderValue;
};

const resetEffects = () =>{
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(sliderElement,{
  range:{
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect:'lower',
});

updateSlider();

formElement.addEventListener('change', onFormChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export {resetEffects};
