SOLUTIONS FOR FREECODECAMP Basic Algorithms


Reverse a String | NO ES6 | :

function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");


Factorialze a Number:

function factorialize(num) {
  var fact=1;
  for (var i = 2; i <= num; i++)
      fact = fact * i;
  return fact;
}

factorialize(5);


FACTORIRALIZE A NUMBER | ES6 | :

function factorialize(num) {
  let fact=1;
  for (let i = 2; i <= num; i++)
      fact = fact * i;
  return fact;
}

factorialize(5);


Check for Palindromes:

function palindrome(str) {
  var pal = str.replace(/[\W_]/g, "").toLowerCase();// Good luck!
  if (pal === pal.split('').reverse().join('')) {
  return true;
  } else {
    return false;
  }
}

palindrome("eye");


CHECK FOR PALINDROMES | ES6 | :
	
function palindrome(str) {
  const pal = str.replace(/[\W_]/g, "").toLowerCase();// Good luck!
  if (pal === pal.split('').reverse().join('')) {
  return true;
  } else {
    return false;
  }
}

palindrome("eye");


Find the Longest Word in a String:

function findLongestWord(str) {
  strSplit = str.split(' ');
  var longestWord = 0;
  for (var i = 0; i < strSplit.length; i++) {
    if(strSplit[i].length > longestWord) {
	longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


FIND THE LONGEST WORD IN A STRING | ES6 | :

function findLongestWord(str) {
  strSplit = str.split(' ');
  let longestWord = 0;
  for (let i = 0; i < strSplit.length; i++) {
    if(strSplit[i].length > longestWord) {
	longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


Title Case a Sentence:

function titleCase(str) {
  var lower = str.toLowerCase();

  function title(match) {
    return match.replace(match.charAt(0), match.charAt(0).toUpperCase());
  }
  return lower.replace(/\w\S*/g, title);
}

titleCase("I'm a little tea pot");


TITLE CASE A SENTENCE | ES6 | :

function titleCase(str) {
  const lower = str.toLowerCase();

  function title(match) {
    return match.replace(match.charAt(0), match.charAt(0).toUpperCase());
  }
  return lower.replace(/\w\S*/g, title);
}

titleCase("I'm a little tea pot");


Return Largest Numbers in Arrays | NO ES6 |:

function largestOfFour(arr) {
  // You can do this!
  return arr.map(Function.apply.bind(Math.max, null));
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


Confirm the Ending | NO ES6 | :

function confirmEnding(str, target) {

  // "Never give up and good luck will find you."
  // -- Falcor
   if (str.substr(-target.length) === target) {
     return true;
   } else {
     return false;
   }
}

confirmEnding("Bastian", "n");


Repeat a string repeat a string:

function repeatStringNumTimes(str, num) {
  // repeat after me
  var repeated = [];
  for (i = 0; i < num; i++) {
    repeated.push(str);
    }
  return repeated.join('');
}

repeatStringNumTimes("abc", 3);


REPEAT A STRING REPEAT A STRING | ES6 | :

function repeatStringNumTimes(str, num) {
  // repeat after me
  const repeated = [];
  for (i = 0; i < num; i++) {
    repeated.push(str);
    }
  return repeated.join('');
}


Truncate a String | NO ES6 | :

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num && num > 3) {
    return str.slice(0, (num - 3)) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }

}

truncateString("A-tisket a-tasket A green and yellow basket", 11);


Chunky Monkey:

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  var i = 0;
  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


CHUNKY MONKEY | ES6 | :

function chunkArrayInGroups(arr, size) {
  // Break it up.
  const newArr = [];
  let i = 0;
  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


Slasher Flick | NO ES6 | :

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);


Mutations:

function mutation(arr) {
  return arr[1].toLowerCase()
    .split('')
    .every(function(letter) {
      return arr[0].toLowerCase()
        .indexOf(letter) != -1;
    });
}

mutation(["hello", "hey"]);


MUTATIONS | ES6 | :

function mutation(arr) {
  return arr[1].toLowerCase()
    .split('')
    .every(letter => arr[0].toLowerCase().includes(letter));
}

mutation(["hello", "hey"]);


Falsy Bouncer | NO ES6 | :

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean);
}


Seek and Destroy:

function destroyer(arr) {
  // Remove all the values
  args = Array.prototype.slice.call(arguments);
  args.splice(0, 1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

SEEK AND DESTROY | ES6 | :

function destroyer(arr) {
  // Remove all the values
  args = Array.prototype.slice.call(arguments);
  args.splice(0, 1);
  return arr.filter(element => !args.includes(element));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


Where do I Belong | NO ES6 | :

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
    function index(element) {
      return element == num;
    }
    function compareNumbers(a, b) {
    return a - b;
  }

  return arr.sort(compareNumbers).findIndex(index);
}

getIndexToIns([40, 60], 50);


Caesers Cipher: