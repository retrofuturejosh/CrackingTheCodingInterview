export function oneAway(origStr, str) {
  let difference = origStr.length - str.length;
  if(difference === 1) return checkLengthChange(origStr, str);
  if(difference === -1) return checkLengthChange(str, origStr);
  if(!difference) return checkSameLength(origStr, str);
  return false;
}

function checkSameLength(origStr, str) {
  let changeDetected = false;

  for(let i = 0; i < origStr.length; i++) {
    if(origStr[i] !== str[i]) {
      if(changeDetected) return false;
      changeDetected = true;
    }
  }
  return true;
}

function checkLengthChange(origStr, str, difference) {
  let movePointer = false;
  let pointer;

  for(let i = 0; i <= origStr.length; i++) {
    pointer = movePointer ? i - 1 : i;
    if(origStr[i] !== str[pointer]) {
      if(movePointer) return false;
      else movePointer = true;
    }
  }
  return true;
}