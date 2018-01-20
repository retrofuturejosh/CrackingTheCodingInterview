export function stringCompression(str) {
  let builder = [];
  let currentChar = str[0];
  let count = 1;

  for(let i = 1; i < str.length; i++) {
    if(str[i] === currentChar) {
      count++;
      continue;
    }
    builder.push(currentChar, count);
    currentChar = str[i];
    count = 1;
  }
  builder.push(currentChar, count);
  let returnStr = builder.join('');
  return (returnStr.length < str.length) ? returnStr : str;
}