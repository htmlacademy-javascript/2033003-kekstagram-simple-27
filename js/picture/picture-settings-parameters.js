const pictureSettingsParameters = {
  decreaseButtonElement: 'scale__control--smaller',
  zoomButtonElement: 'scale__control--bigger',
  controlValueElement: 'scale__control--value',
  minLengthAttribute: 'minLength',
  maxLengthAttribute: 'maxLength',
  scaleContainer:'.img-upload__scale',
  uploadPreviewClass:'.img-upload__preview',
  effectsContainer: '.effects__list',
  inputElement: 'input[name=\'effect\']',
  sliderContainer:'.img-upload__effect-level',
  sliderClass: '.effect-level__slider',
  sliderValue:'input[name=\'effect-level\']',
  filters:{
    none:{
      className:'.effects__preview--none',
      filter: 'none',
      display:'none'
    },
    chrome:{
      className:'.effects__preview--chrome',
      filter:'grayscale',
      min:0,
      max:1,
      step:0.1,
      display:'display'
    },
    sepia:{
      className:'.effects__preview--sepia',
      filter:'sepia',
      min:0,
      max:1,
      step:0.1,
      display:'display'
    },
    marvin:{
      className:'.effects__preview--marvin',
      filter:'invert',
      min:0,
      max:100,
      step:1,
      display:'display'
    },
    phobos:{
      className:'.effects__preview--phobos',
      filter:'blur',
      min:0,
      max:3,
      step:0.1,
      display:'display'
    },
    heat:{
      className:'.effects__preview--heat',
      filter:'brightness',
      min:1,
      max:3,
      step:0.1,
      display:'display'
    },
  }
};
export {pictureSettingsParameters};
