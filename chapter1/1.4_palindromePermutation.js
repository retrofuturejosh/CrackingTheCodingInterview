export function palindromePermutation(str) {
  str = str.replace(/ /g, '').toLowerCase();
  let charCount = {};
  let oddCount = 0;

  for(let i = 0; i < str.length; i++) {
    charCount[str[i]] = charCount[str[i]] ? charCount[str[i]] + 1 : 1;
  }

  for(let char in charCount) {
    if(charCount[char] % 2) oddCount++;
    if(oddCount > 1) return false
  }
  return true;
}

export function palindromePermutation2(str) {
  str = str.replace(/ /g, '').toLowerCase();
  let charCount = {};
  let oddCount = 0;

  for(let i = 0; i < str.length; i++) {
    charCount[str[i]] = charCount[str[i]] ? charCount[str[i]] + 1 : 1;
    if(charCount[str[i]] % 2) oddCount++
    else oddCount--;
  }

  return oddCount <= 1;
}