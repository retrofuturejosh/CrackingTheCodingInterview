// Given two strings, write a method to decide if one is a permutation of the other

//solution
export function isPermutation(str1, str2) {
    if (str1.length !== str2.length) return false;
    let permCheck = {};
    for (let i = 0; i < str1.length; i++) {
      permCheck[str1[i]] = permCheck[str1[i]] ? permCheck[str1[i]]++ : 1;
    }
    for (let i = 0; i < str2.length; i++) {
      if (!permCheck[str2[i]]) return false;
      permCheck[str2[i]]--;
      if (permCheck[str2[i]] < 0) return false;
    }
    return true;
  }


//same solution with notes
function isPermutation2(str1, str2) {
    //make sure strings are same length
    if (str1.length !== str2.length) return false;

    //create object. each character will be a key with the number of times that character appears in the string as value
    let permCheck = {};

    //loop through first string
    for (let i = 0; i < str1.length; i++) {
        //if character already exists, increment by 1
        //if not, set value to 1
        permCheck[str1[i]] = permCheck[str1[i]] ? permCheck[str1[i]]++ : 1;
    }

    //loop through the second string
    for (let i = 0; i < str2.length; i++) {
        //if character is not in permCheck Object, str2 is not a valid permutation
        if (!permCheck[str2[i]]) return false;

        //decrement the value for the current character
        permCheck[str2[i]]--;

        //if value is less than 0, str2 is not a valid permutation
        if (permCheck[str2[i]] < 0) return false;
    }

    //if everything passes, then str2 is a permutation of str1
    return true;
}