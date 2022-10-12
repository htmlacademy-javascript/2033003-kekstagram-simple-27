function returnRandomInteger(max,min = 0) {
  if (min < 0 || max < 0 || typeof min !== 'number' || typeof max !== 'number') { return NaN; }
  if (max < min) { [min, max] = [max, min]; }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function verifyStringLength(string, maxStringLength) {
  if (typeof string !== 'string' || typeof maxStringLength !== 'number') { return null; }
  return string.length <= maxStringLength || false;
}


function getRandomArrayElement(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

export{returnRandomInteger,verifyStringLength,getRandomArrayElement};
