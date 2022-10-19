import {returnRandomInteger, getRandomArrayElement} from './util.js';
import {MIN_RANDOM,MAX_RANDOM,DESCRIPTIONS} from './CONSTANTS.js';

const createDataPhoto = (integer, maxRandom, minRandom, arrDescriptions) => ({
  id: integer,
  url: `photos/${integer}.jpg`,
  description: getRandomArrayElement(arrDescriptions),
  likes: returnRandomInteger(maxRandom,minRandom),
  comments: returnRandomInteger(maxRandom)
});

const createDataPhotos = (count)=> Array.from({ length: count }, (_element, index) => createDataPhoto(index + 1, MAX_RANDOM, MIN_RANDOM,DESCRIPTIONS));

export {createDataPhotos};
