export const palindromePermutation2 = combiner(isPalindrome2, isPermutation);
export const palindromePermutation = combiner(isPalindrome, isPermutation);

function combiner(cb1, cb2) {
  return function(originalStr, str) {
    str = str.toLowerCase();
    let strToCheck = str.replace(/ /g, '');
    return cb1(strToCheck) && cb2(originalStr, str);
  }
}

function isPalindrome(str) {
  let backPointer = str.length-1;
  for(let i = 0; i < str.length; i++) {
    if (backPointer === i || backPointer < i) return true;
    if(str[i] !== str[backPointer]) return false;
    backPointer--;
  }
  return false;
}

function isPalindrome2(str) {
  if(str.length <= 1) return true;
  let front = str.slice(0, 1);
  let back = str.slice(str.length - 1);

  if(front === back){
    return isPalindrome2(str.slice(1, str.length-1));
  }
  return false;
}

function isPermutation(originalStr, str) {
  originalStr = originalStr.toLowerCase();
  let checkPerm = {};

  if(originalStr.length !== str.length) return false;

  for(let i = 0; i < originalStr.length; i++) {
    checkPerm[originalStr[i]] = checkPerm[originalStr[i]] ? checkPerm[originalStr[i]] + 1 : 1;
  }

  for(let i = 0; i < str.length; i++) {
    if(!checkPerm[str[i]]) return false;
    checkPerm[str[i]]--;
    if(checkPerm[str[i]] < 0) return false;
  }

  return true;
}