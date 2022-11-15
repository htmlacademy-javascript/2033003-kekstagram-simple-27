import {returnRandomInteger, getRandomArrayElement} from '../util/util.js';
import {MAX_COUNT_OBJECTS,MIN_RANDOM,MAX_RANDOM,DESCRIPTIONS} from '../CONSTANTS.js';

const createDataPhoto = (integer, maxRandom, minRandom, descriptions) => ({
  id: integer,
  url: `photos/${integer}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: returnRandomInteger(maxRandom,minRandom),
  comments: returnRandomInteger(maxRandom)
});

const createDataPhotos = ()=> Array.from({ length: MAX_COUNT_OBJECTS }, (_element, index) => createDataPhoto(index + 1, MAX_RANDOM, MIN_RANDOM,DESCRIPTIONS));

export {createDataPhotos};
