
const FROM = 5;
const BEFORE = 4;
const VERIFIABLE_STRING_LENGTH = 20;
const MAX_STRING_LENGTH = 19;

//the first part of the task
function returnRandomInteger(from, before) {
  if(from >= 0 && before >= 0){
    if(from > before){
      [from,before] = [before,from];
    }
    return Math.floor(Math.random() * (before - from + 1)) + from;
  }
  return from / before;
}

console.log(returnRandomInteger(FROM, BEFORE));

//the second part of the task
function checkMaxStringLength(verifiableStringLength, maxStringLength) {
  return verifiableStringLength <= maxStringLength ? 'true' : 'false';
}

checkMaxStringLength(VERIFIABLE_STRING_LENGTH, MAX_STRING_LENGTH);
