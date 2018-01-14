//Determine if a string has all unique characters

//Using object 
export function isUnique(str) {
    let uniqueObj = {};
    for (let i = 0; i < str.length; i++) {
      if (uniqueObj[str[i]]) return false;
      else uniqueObj[str[i]] = true;
    }
    return true;
  }
  
  //without additional data structures and non-mutative
  //nested for loops
  export function isUnique2(str) {
    for (let i = 0; i < str.length; i++) {
      for (let j = i+1; j < str.length; j++){
        if (str[i] === str[j]) return false;
      }
    }
    return true;
  }
  
  //recursive, mutative, & without additional data structures
  export function isUnique3(str) {
    if (str.length === 0) return true;
    let currentPosition = str[0];
    str = str.slice(1);
    if (str.includes(currentPosition)) return false;
    else return isUnique2(str);
  }