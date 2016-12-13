SOLUTIONS FOR FREECODECAMP Basic Algorithms


Reverse a String | NO ES6 | :

function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");

// This excersize applies split, join, and reverse functions
// It describes how to convert strings to arrays, and back
==================================================================================
	
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

// This exercise uses a loop and simple algebra
==================================================================================
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

// This exercise applies replace and toLowerCase, and asks to compare strings.
// Solving this also uses reverse string, which is described above

==================================================================================
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

// This exercise applies the split, length, and a loop

==================================================================================
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

==================================================================================
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

// This exercise applies split() and join(), and a loop
// It also modifies part of a string
// It also requires use of toLowercase() and toUppercase()
==================================================================================
Return Largest Numbers in Arrays | NO ES6 |:

function largestOfFour(arr) {
  // You can do this!
  return arr.map(Function.apply.bind(Math.max, null));
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// This exercise uses array indexing syntax which looks like this.
// array[index]
// It also requires you to use a data structure that is two levels deep.
/// i.e. an array containing arrays. Which might be defined like this.
// var arrayArray = [ [ 1, 2, 3 ], [ 4, 5, 6], [ 7, 8, 9];
// Finally this exercise would need to use at least one "for" loop, to process
// all these array, but possibly two "for" loops, one nested in side the other.
// Comparing values to find and keep track of the largest value would also be required.
=========================================================================================
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
// This exercise uses string comparison, but more importantly uses
// substring functions. substr() or substring().
// You would not need a loop, but you would need to do a little match
// with lengths of strings to pull the correct substring.
=========================================================================================
Repeat a string:

function repeatStringNumTimes(str, num) {
  // repeat after me
  var repeated = [];
  for (i = 0; i < num; i++) {
    repeated.push(str);
    }
  return repeated.join('');
}

repeatStringNumTimes("abc", 3);


REPEAT A STRING | ES6 | :

function repeatStringNumTimes(str, num) {
  // repeat after me
  const repeated = [];
  for (i = 0; i < num; i++) {
    repeated.push(str);
    }
  return repeated.join('');
}

// This eercise uses a loop, but also requires building a string peice by peice.
// You can do this by building an array of these strings, and then joining them.
// Or you can use string concatenation to slowly build the string into a larger one.
============================================================================
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

// This exercise requies using an "if" clause. It also needs string concatenation.
// You'll do a little math with the string length and 
// also use substring().
===============================================================================
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

// This exercise requires manipulating a 2 level data structure.
// In this case, an array containing arrays.
// That means it will need at least one loop, but possibly 2 nested loops.
// The split function won't help you here, but the slice() function will.
// And finally, you'll be instoroduced to using an array like a stack
// by using the push() function.
===============================================================================
Slasher Flick | NO ES6 | :

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);

// This is removing things from the start, instead of removing them from the end
// like we did with truncate.
// We're also working with an array here instead of a string.
// So you'll use array manipulation functions splice() or splice().
// YOu just need to understand how to provide the right arguments to those functions.
===============================================================================
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

// This requires building and using a "set". javascript provides
// no native "set" feature. But you can fake it by using various means.
// You might build an array to act as a "set", or use an object.
// Or you might use a combination of sorting, and filtering unique characters.
// A loop is probably required as well.
===============================================================================
Falsy Bouncer | NO ES6 | :

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean);
}

// Requires "if" statements, and what a "falsy" value means/does.
// You'll use filter, to copy an array.
// You might provide an anonymous function to filter().
===============================================================================
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

// this uses a variadric function arguments.
// a loop or filter to process an array.
// possibly an anonymous function to that filter().
===============================================================================
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

// this requires using sort() to sort an array, 
// then looping over the array and using comparison operators
// while tracking the index in the array your dealing with.
===============================================================================
Caesers Cipher:

function rot13(str) {
  // Split str into a character array
  return str.split('')
  // Iterate over each character in the array
    .map.call(str, function(char) {
      // Convert char to a character code
      x = char.charCodeAt(0);
      // Checks if character lies between A-Z
      if (x < 65 || x > 90) {
        return String.fromCharCode(x);  // Return un-converted character
      }
      //N = ASCII 78, if the character code is less than 78, shift forward 13 places
      else if (x < 78) {
        return String.fromCharCode(x + 13);
      }
      // Otherwise shift the character 13 places backward
      return String.fromCharCode(x - 13);
    }).join('');  // Rejoin the array into a string
}

// This requires understanding a little about ascii characters
// or how the computer uses numbers to represent letters. charCodeAt() and fromCharCode()
// A little math will be needed including the use of a modulus (the % operator).
// A loop or map() can be used to modify all the elements in the array.

