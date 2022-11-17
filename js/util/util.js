const returnRandomInteger = (max, min = 0) => {
  if (min < 0 || max < 0 || typeof min !== 'number' || typeof max !== 'number') { return NaN; }
  if (max < min) { [min, max] = [max, min]; }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const verifyStringLength = (string, minStringLength, maxStringLength) => {
  if (typeof string !== 'string' || typeof minStringLength !== 'number' || typeof maxStringLength !== 'number') { return null; }
  return string.length >= minStringLength && string.length <= maxStringLength || false;
};

const getRandomArrayElement = (elements) => elements[Math.floor(Math.random() * elements.length)];
const isEscapeKey = (evt) => evt.key === 'Escape';
const isOutOfBoundClick = (evt, element) => evt.composedPath().includes(document.querySelector(element));

const addEventListeners = (elements) => {
  elements.forEach((element) => {
    if (element.selector === 'document') {
      document.addEventListener(element.eventType, element.cb);
    } else if (typeof element.selector === 'object') {
      element.selector.addEventListener(element.eventType, element.cb);
    } else {
      const htmlElement = document.querySelector(element.selector);
      htmlElement.addEventListener(element.eventType, element.cb);
    }
  });
};

const addClassToElement = (parameter, className) => {
  const htmlElement = document.querySelector(parameter);
  htmlElement.classList.add(className);
};

const removeClassFromElement = (parameter, className) => {
  const htmlElement = document.querySelector(parameter);
  htmlElement.classList.remove(className);
};


export {
  returnRandomInteger, verifyStringLength, getRandomArrayElement,
  isEscapeKey, isOutOfBoundClick, addEventListeners,
  addClassToElement, removeClassFromElement
};
