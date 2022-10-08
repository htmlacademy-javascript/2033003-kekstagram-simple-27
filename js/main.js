
const MIN = 2;
const MAX = 24;
const STRING = 'Проверяемая_строка';
const MAX_STRING_LENGTH = 140;
const MAX_COUNT = 25;

function returnRandomInteger(min, max) {
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

const createDescriptionPhoto = (integer) => ({
  id: integer,
  url: `photos/${integer}.jpg`,
  description: 'фото с отпуска',
  likes: returnRandomInteger(15, 200),
  comments: returnRandomInteger(0, 200)
});

const descriptionPhotos = Array.from({ length: MAX_COUNT }, (_element, index) => createDescriptionPhoto(index + 1));

// eslint-disable-next-line no-console
console.log(descriptionPhotos);
