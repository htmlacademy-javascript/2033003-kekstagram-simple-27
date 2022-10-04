
const MIN = 2;
const MAX = 24;
const STRING = 'Проверяемая_строка';
const MAX_STRING_LENGTH = 140;

//the first part of the task
function returnRandomInteger(min, max) {
  if (min < 0 || max < 0 || typeof min !== 'number' || typeof max !== 'number') {return NaN;}
  if(max < min){[min, max] = [max, min];}
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

returnRandomInteger(MIN, MAX);

//the second part of the task
function verifyStringLength(string, maxStringLength) {
  if( typeof string !== 'string'){return null;}
  return string.length <= maxStringLength || false;
}

verifyStringLength(STRING, MAX_STRING_LENGTH);
