//the first part of the task
const FROM = 3;
const BEFORE = 16;

function returnRandomInteger(from, before) {
  if (before <= from) {
    return NaN;
  }
  const randomeInteger = Math.floor(Math.random() * (before - from)) + from;
  return randomeInteger;
}

returnRandomInteger(FROM, BEFORE);

//the second part of the task
const VERIFIABLE_STRING_LENGTH = 18;
const MAX_STRING_LENGTH = 19;

function checkMaxStringLength(verifiableStringLength, maxStringLength) {
  let result;
  verifiableStringLength = maxStringLength ? result = true : result = false;
  return result;
}

checkMaxStringLength(VERIFIABLE_STRING_LENGTH, MAX_STRING_LENGTH);
