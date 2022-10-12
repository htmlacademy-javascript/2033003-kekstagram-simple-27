import {returnRandomInteger, getRandomArrayElement} from './util.js';
import {MAX_COUNT_OBJECTS,MIN_RANDOM,MAX_RANDOM,DESCRIPTIONS} from './static-data.js';

const createDataPhoto = (integer, maxRandom, minRandom, arrDescriptions) => ({
  id: integer,
  url: `photos/${integer}.jpg`,
  description: getRandomArrayElement(arrDescriptions),
  likes: returnRandomInteger(maxRandom,minRandom),
  comments: returnRandomInteger(maxRandom)
});

const createDataPhotos = Array.from({ length: MAX_COUNT_OBJECTS }, (_element, index) => createDataPhoto(index + 1, MAX_RANDOM, MIN_RANDOM,DESCRIPTIONS));

export {createDataPhotos};
