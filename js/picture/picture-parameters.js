const pictureParameters = {
  containerClass: '.pictures',
  templateId: '#picture',
  templateClass: '.picture',
  urlClass: '.picture__img',
  likesClass: '.picture__likes',
  commentsClass: '.picture__comments',
};

const pictureScaleParameters = {
  scaleContainer: '.img-upload__scale',
  controlValueElement: 'scale__control--value',
  maxLengthAttribute: 'maxLength',
  minLengthAttribute: 'minLength',
  decreaseButtonElement: 'scale__control--smaller',
  zoomButtonElement: 'scale__control--bigger',
  uploadPreviewClass: '.img-upload__preview',
};

const pictureEffectParameters = {
  effectsContainer: '.effects__list',
  sliderContainer: '.img-upload__effect-level',
  sliderClass: '.effect-level__slider',
  inputElement: 'input[name=\'effect\']',
  sliderValue: 'input[name=\'effect-level\']',
  radioInput: 'effects__radio',
  effects: [{
    name:'none',
    className: '.effects__preview--none',
    filter: 'none',
    min: 0,
    max: 100,
    step: 1,
    display: 'none',
  }, {
    name:'chrome',
    className: '.effects__preview--chrome',
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    display: 'display',
    unit: ''
  }, {
    name:'sepia',
    className: '.effects__preview--sepia',
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    display: 'display',
    unit: ''
  }, {
    name:'marvin',
    className: '.effects__preview--marvin',
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    display: 'display',
    unit: '%'
  }, {
    name:'phobos',
    className: '.effects__preview--phobos',
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    display: 'display',
    unit: 'px'
  }, {
    name:'heat',
    className: '.effects__preview--heat',
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    display: 'display',
    unit: ''
  }]
};
export { pictureParameters, pictureScaleParameters, pictureEffectParameters };
