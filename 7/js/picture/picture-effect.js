import { pictureEffectParameters as paramsEffect} from '../picture/picture-parameters.js';
import { pictureScaleParameters as paramsScale} from '../picture/picture-parameters.js';
import { pictureformParameters as paramsForm} from '../picture_form/picture-form-parameters.js';

const image = document.querySelector(paramsScale.uploadPreviewClass);
const form = document.querySelector(paramsForm.mainForm);
const sliderElement = document.querySelector(paramsEffect.sliderClass);
const effectLevel = document.querySelector(paramsEffect.sliderValue);

const DEFAULT_EFFECT = paramsEffect.effects[0];
let chosenEffect = DEFAULT_EFFECT;

const isDefault = () => chosenEffect === DEFAULT_EFFECT;

const updateSlider = () =>{
  sliderElement.classList.remove('hidden');
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
    sliderElement.classList.add('hidden');
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
  image.style.filter = 'none';
  image.className = 'img-upload__preview';
  effectLevel.value = '';
  if(isDefault()){
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  image.style.filter = `${chosenEffect.filter}(${sliderValue}${chosenEffect.unit})`;
  image.classList.add(`effects__preview--${chosenEffect.name}`);
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

form.addEventListener('change', onFormChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);
export {resetEffects};
