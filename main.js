/******************
 * YOUR CODE HERE *
 ******************/
function xify(str) {
  let newStr = '';
  for(let i = 0; i < str.length; i++) {
    newStr = newStr + 'x';
  }
  return newStr;
}

function smilify(str) {
  let newStr = '';
  for(let i = 0; i < str.length; i++) {
    newStr = newStr + '😊';
  }
  return newStr;
}

function yellingChars(str) {
  let newStr = '';
  for(let i = 0; i < str.length; i++) {
    newStr = newStr + str[i] + '!';
  }
  return newStr;
}

function indexedChars(str) {
  let newStr = ''
  for(let i = 0; i < str.length; i++) {
    newStr = newStr + i + str[i];
  }
  return newStr;
}

function numberedChars(str) {
  let newStr = '';
  let num = 1;
  for(let i = 0; i < str.length; i++) {
    newStr = newStr + '(' + num + ')' + str[i];
    num++;
  }
  return newStr;
}

function exclaim(str) {
  let newStr = '';
  for(let i = 0; i < str.length; i++) {
    if(str[i] === '.' || str[i] === '?') {
      newStr = newStr + '!';
    }
    else { 
      newStr = newStr + str[i] 
    }
  }
  return newStr;
}

function repeatIt(str, num) {
  let newStr = '';
  for(let i = 0; i < num; i++) {
    newStr = newStr + str;
  }
  return newStr;
}

function truncate(str) {
  let newStr = '';
  if(str.length < 18) {
    for(let i = 0; i < str.length; i++) {
      newStr = newStr + str[i]
    }
  }
  else {
    for(let i = 0; i < str.length; i++) { 
      if(i >= 15) {
      newStr = newStr + '...' 
      break;
    }
    newStr = newStr + str[i];
    }
  }
  return newStr;
}

function ciEmailify(str) {
  let newStr = '';
  for(let i = 0; i < str.length; i++) {
    if(str[i] === ' ') {
      newStr = newStr + '.';
    }
    else newStr = newStr + str[i].toLowerCase();
  }  
  return newStr + '@codeimmersives.com';
}

function reverse(str) {
  let newStr = '';
  for(let i = 0; i < str.length; i++) {
    newStr = str[i] + newStr;
  }
  return newStr;
}

function onlyVowels(str) {
  let newStr = '';
  // let vowels = 'aeiouAEIOU';
  // for(let i = 0; i < str.length; i++) {
  //   if(vowels.includes(str[i])) 
  //   newStr = newStr + str[i];
  // }
  for(let i = 0; i < str.length; i++) {
    if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || 
      str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || 
      str[i] == 'O' || str[i] == 'U') {
        newStr += str[i];
      }
    }
  return newStr;
}

function crazyCase(str) {
  let newStr = '';
  for(let i = 0; i < str.length; i++) {
    if(i % 2 == 1) {
      newStr = newStr + str[i].toUpperCase();
    }
    else if(i % 2 == 0) {
      newStr = newStr + str[i].toLowerCase();
    }
  }
  return newStr;
}

function titleCase(str) {
  let newStr = '';
  for(let i = 0; i < str.length; i++) {
    if(i == 0 || str[i-1] === ' ') {
      newStr = newStr + str[i].toUpperCase()
    }  
    else
      newStr = newStr + str[i].toLowerCase()
    }
    return newStr;
  }

function camelCase(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if(str[i] === ' ') {
      str[i] = ''; 
    }
    else if(str[i-1] === ' ') {
      newStr += str[i].toUpperCase();
    }
    else { 
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}

function crazyCase2ReturnOfCrazyCase(str) {
  let newStr = '';
  let wordsCounter = 0;
  for(let i = 0; i < str.length; i++) {
    if(str[i] !== ' ') {
      wordsCounter++;
    }
    if(wordsCounter % 2 == 0) {
      newStr += str[i].toUpperCase();
    }
    else if(wordsCounter % 2 == 1) {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}

/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  yellingChars,
  indexedChars,
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
