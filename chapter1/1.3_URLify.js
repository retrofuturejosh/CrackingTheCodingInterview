//Replace all spaces in a string with '%20' given a string and the 'true' number of its characters

export function urlify(str, int) {
  //get rid of spaces at the end of string
  str = str.slice(0, int);
  return str.split(' ').join('%20');
}


//for loop / string only solution
export function urlify2(str, int) {
  //get rid of spaces at the end of string
  str = str.slice(0, int);

  //loop through string and replace spaces with %20
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      str = `${str.slice(0, i)}%20${str.slice(i+1)}`;
    }
  }
  return str;
}


//recursive solution for shats and giggles
export function urlify3(str, int, returnStr) {
    //get rid of spaces at the end of string
    str = str.slice(0, int);
    
    //create string to return
    if (!returnStr) returnStr = '';

    //base case
    if(str.length === 0) return returnStr;

    //check to see if next character is space, replace as necessary, add to returnStr
    let nextChar = str[0];
    str = str.slice(1);
    if (nextChar === ' ') nextChar = '%20';
    returnStr += nextChar;

    //call recursively
    return urlify3(str, str.length, returnStr);
}