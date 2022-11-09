const returnRandomInteger = (max, min = 0) => {
  if (min < 0 || max < 0 || typeof min !== 'number' || typeof max !== 'number') { return NaN; }
  if (max < min) { [min, max] = [max, min]; }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const verifyStringLength = (string, minStringLength, maxStringLength) => {
  if (typeof string !== 'string' || typeof minStringLength !== 'number' || typeof maxStringLength !== 'number') { return null; }
  return string.length >= minStringLength && string.length <= maxStringLength || false;
};

const getRandomArrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const IsOutOfBoundClick = (evt,element) => evt.composedPath().includes(document.querySelector(element));

const addEventListeners = (arr) => {
  arr.forEach((ele) => {
    if(!ele.selector === 'document'){
      const htmlElement = document.querySelector(ele.selector);
      htmlElement.addEventListener(ele.eventType, ele.cb);
    }else{
      document.addEventListener(ele.eventType, ele.cb);
    }
  });
};

export { returnRandomInteger, verifyStringLength, getRandomArrayElement, isEscapeKey, IsOutOfBoundClick, addEventListeners};
