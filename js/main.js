
const MIN = 2;
const MAX = 24;
const STRING = 'Проверяемая_строка';
const MAX_STRING_LENGTH = 140;
const MAX_COUNT_OBJECTS = 25;
const MIN_RANDOM = 15;
const MAX_RANDOM = 200;
const DESCRIPTIONS = ['фото с отпуска','закат','цветы','пляж'];

function returnRandomInteger(max,min = 0) {
  if (min < 0 || max < 0 || typeof min !== 'number' || typeof max !== 'number') { return NaN; }
  if (max < min) { [min, max] = [max, min]; }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

returnRandomInteger(MIN, MAX);

function verifyStringLength(string, maxStringLength) {
  if (typeof string !== 'string' || typeof maxStringLength !== 'number') { return null; }
  return string.length <= maxStringLength || false;
}

verifyStringLength(STRING, MAX_STRING_LENGTH);

function getRandomArrayElement(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

const createDescriptionPhoto = (integer, maxRandom, minRandom, arrDescriptions) => ({
  id: integer,
  url: `photos/${integer}.jpg`,
  description: getRandomArrayElement(arrDescriptions),
  likes: returnRandomInteger(maxRandom,minRandom),
  comments: returnRandomInteger(maxRandom)
});

const descriptionPhotos = Array.from({ length: MAX_COUNT_OBJECTS }, (_element, index) => createDescriptionPhoto(index + 1, MAX_RANDOM, MIN_RANDOM,DESCRIPTIONS));

// eslint-disable-next-line no-console
console.log(descriptionPhotos);
