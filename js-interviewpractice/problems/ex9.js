// //1. Find Max
// arr = [2, 3, 5, 6]
// function findMax(arr) {
//     return Math.max(...arr);
// };
// console.log(findMax(arr))


// //2. Find Palindrome
// function isPalindrome(word) {
//     return word === word.split("").reverse().join("")
// }
// console.log(isPalindrome("hello"))
// console.log(isPalindrome("madam"))


// //3. Reverse a string
// const reverseString = (str) => str.split("").reverse().join("")
// console.log(reverseString("LaylaHashmi"))

// // 4. Take an arr of numbers and return a new arr with only the even numbers
// function evenNumbers(nums) {
//     return nums.filter((num) => num % 2 === 0)
// }
// const nums = [2, 5, 6, 8,9,54,52,51,36,33]
// console.log(evenNumbers(nums))

// //5. Calculate the factorial for a given number
// function findFactorial(num) {
//     if (num <= 1) {
//         return 1;
//     } else {
//         return (num * findFactorial(num - 1))
//     }
// }
// const num = 7

// if (num > 0) {
//     let result = findFactorial(num);
//     console.log(`The factorial of ${num} is ${result}.`)
// }

// //6. Check if a given number is prime

// function isPrime(num) {
//     if (num <= 1) return false;

//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
// console.log(isPrime(23))

// //7. Find the max element in the nested array
// function findMaxElement(nestedArr) {
//     const max = Math.max(...[].concat(...nestedArr));
//     // let max = 0;
//     // for (let arr of nestedArr) {
//     //     for (let num of arr) {
//     //         if (num > max) {
//     //             max = num
//     //         }
//     //     }
//     // }
//     return max;
// }
// console.log(findMaxElement([9, 20, [21, 5, 3], 91, 9, 3, [77, 7, 3]]))
// console.log(findMaxElement([[9, 20], [21, 5, 3], [2, 9, 3], [77, 7, 3]]))

// //8. Return the Fibonacci Sequence up to a given number of terms
// function fibonacci(n) {
//     if (n <= 0) return [];
//     if (n === 1) return 0;

//     const fib = [0, 1]
//     for (i = 2; i <= n; i++) {
//         fib[i] = fib[i-1] + fib[i-2];
//     }
//     // while (fib.length < n) {
//     //     let nextNumber = fib[fib.length-1] + fib[fib.length-2];
//     //     fib.push(nextNumber);
//     // }
//     return fib;
// }
// console.log(fibonacci(9))

// //9. Covert a string to title case (capitalize the first letter of each word)
// function toTitleCase(str) {
//     return str.replace(/\b\w/g, l => l.toUpperCase());
// }
// console.log(toTitleCase("He played the King in a8 and she moved her Queen in c2."))

// //10. A function that takes an array of objects and a key and returns a new
// // array sorted based on the values of that key in ascending order
// let arr = [{"sun": 23, "moon": 76, "water": 45},
// {"sun": 86, "moon": 34, "water": 54},
// {"sun": 98, "moon": 34, "water": 56},
// {"sun": 64, "moon": 76, "water": 44},
// {"sun": 56, "moon": 64, "water": 76}]
// let key = "moon"

// function sortByKey(arr, key) {
//     return arr.sort((a, b) => a[key]-b[key])
// }
// console.log(sortByKey(arr, key))

// //11. Implement a deep clone function in Javascript that creates a copy of a nested
// // object or array without an reference to the original
// const person1 = {
//     "name": "Layla",
//     "age": 26,
//     "spouse": {
//         "name": "Abdullah",
//         "age": 28
//     }
// }
//
// // const person2 = JSON.parse(JSON.stringify(person1));
// const person2 = structuredClone(person1)
// console.log(person1)
// person2.spouse.name = "Random"
// person1.name = "Random"
// console.log(person1)
// console.log(person2)

//12. Take two sorted arrays and merge them into a single sorted array without
// using built in sort function
// function bubbleSort(arr1, arr2) {
//     let mergedArr = [...arr1,...arr2]
//     for (let i = 0; i < mergedArr.length; i++) {
//         for (let j=0; j < mergedArr.length -i -1 ; j++)
//         if (mergedArr[j+1] > mergedArr[j]) {
//             [mergedArr[j+1], mergedArr[j]] = [mergedArr[j], mergedArr[j+1]]
//         }
//     }
//     return mergedArr
// }
//
// console.log(bubbleSort([5, 4, 6], [6, 3, 2]))

//13. Find duplicate elements in a given array
// const dupArray = [14, 23, 6, 6, 14, 56, 87, 14]
//
// const duplicates  = dupArray.filter((ele, index, arr) => arr.indexOf(ele) !== index)
// console.log(duplicates)

//14. Find count of duplicates in an array
// const months = ["May", "Feb", "April", "June", "May", "Feb", "July", "December"];
// const countDuplicates = months.reduce((obj, month) => {
//     if (obj[month] == undefined) {
//         obj[month] =1;
//         return obj;
//     } else {
//         obj[month]++;
//         return obj
//     }
// }, [])
// console.log(countDuplicates)

// //15. Write a function that checks if a given string is a palindrome considering
// // only alphanumeric characters and ignoring case.
// function isPalindrome(str) {
//     let cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     let reversedStr = cleanStr.split('').reverse().join('');
//     return cleanStr === reversedStr;
// }
// console.log(isPalindrome("12madam21"))

// //16. Implement a function to reverse a string without using the
// // built-in reverse() method.
// function reverseStr(str) {
//     let reversed = '';
//     for (let i = str.length-1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }
// console.log(reverseStr("Hello World"))

// //17. Given an array of numbers, write a function to find the largest and
// // smallest numbers in the array.
// function findMinMax(arr) {
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);
//     return [min, max]
// }
// const arr = [14, 23, 6, 6, 14, 56, 87, 14]
// console.log(findMinMax(arr))

// //18. Take an arr of integers as input and return a new arr with only the
// // unique elements.
// function getUniqueElements(arr) {
//     return Array.from(new Set(arr));
// }
// const arr = [14, 23, 6, 6, 14, 56, 87, 14]
// console.log(getUniqueElements(arr))

// //19. Implement a function to find the sum of all the numbers in an array.
// function sumArr(arr) {
//     return arr.reduce((sum, num) => sum + num, 0);
// }
// const arr = [14, 23, 6, 6, 14, 56, 87, 14]
// console.log(sumArr(arr))

// //20. Count the occurrences of each character in the string.
// function countCharOccurence(str) {
//     const count = {};
//     for (let char of str.toLowerCase()) {
//         count[char] = (count[char] || 0) +1;
//     }
//     return count;
// }
// console.log(countCharOccurence("abcdABCDe"))

// //21. Reverses the order of words in a sentence without using the built-in
// // reverse() method.
// function reverseSentence(str) {
//     const words = str.split(" ")
//     const reversed = [];
//     for (let i = words.length - 1; i >= 0; i--) {
//         reversed.push(words[i])
//     }
//     return reversed.join(" ")
// }
// console.log(reverseSentence("The quick brown fox jumped over the fallen tree"))

// //22. Check if a given string is a palindrome (reads the same forwards and backwards)
// // while ignoring whitespace and punctuation.
// function isPalindrome(str) {
//     const cleanedStr = str.replace(/[^\w]/g, '').toLowerCase();
//     const reversedStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversedStr;
// }
// console.log(isPalindrome("-*madam, --racecar, madam!?"))

// //22. Write a function that takes an array of integers and returns the largest
// // difference between any two numbers in the array.
// function largestDifference(arr) {
//     return (Math.max(...arr)) - (Math.min(...arr));
//     // let min = arr[0];
//     // let maxDiff = 0;
//     // for (let i = 1; i < arr.length; i++) {
//     //     if (arr[i] < min) {
//     //     min = arr[i];
//     // } else {
//     //     const diff = arr[i] - min;
//     //     if (diff > maxDiff) {
//     //     maxDiff = diff;
//     //     }
//     // }
//     // }
//     // return maxDiff;
// }
// console.log(largestDifference([14, 23, 6, 6, 14, 56, 87, 14]))

// //23. avg
// function average(numbers){
//     return (numbers.reduce((sum, num) =>
//     sum + num, 0))/numbers.length
// }
// console.log(average([14, 23, 6, 6, 14, 56, 87, 14]))

// //24.find the index of a specific element in an array. If the element
// //  is not found, the function should return -1.
// function indexOfElement(arr, element) {
//     const index = arr.indexOf(element);
//     return index !== -1 ? index : -1;
// }
// const arr = [14, 23, 6, 6, 98, 56, 87, 99]
// const element = 0
// console.log(indexOfElement(arr, element))

// //25.
// arr = [1, 1, 0, -1, -1]
// function plusMinus(arr) {
//     const count = {"p": 0, "n": 0, "z": 0};
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             count["p"]++
//             } else if (arr[i] < 0) {
//                 count["n"]++
//                 } else {
//                     count["z"]++
//                     }
//     }
//     console.log((count["p"]/arr.length).toFixed(6))
//     console.log((count["n"]/arr.length).toFixed(6))
//     console.log((count["z"]/arr.length).toFixed(6))
// }
// console.log(plusMinus(arr))

// //26.
// arr = [1, 3, 5, 7, 9]
// function miniMaxSum(arr) {
//     const sum = arr.reduce((sum, num) => sum + num, 0);
//     console.log((sum-(Math.max(...arr))), (sum-(Math.min(...arr))))
// }
// console.log(miniMaxSum(arr))

// //27. Time conversion to military
// s = "03:01:00PM"
// function timeConversion(s) {
//     let hour = s.slice(0, 2)
//     const min_sec = s.slice(3, 8)
//     const format = s.slice(8)

//     if (format == "AM") {
//         if (hour == "12") {
//             hour = "00";
//         }
//     } else {
//         if (hour !== "12") {
//             let military = parseInt(hour) + 12;
//             hour = military.toString();
//         }
//     }
//     return (`${hour}:${min_sec}`)
// }
// console.log(timeConversion(s))

// //28. There is a collection of input strings and a collection of
// // query strings. For each query string, determine how many times
// // it occurs in the list of input strings. Return an array of the results.
// function matchingStrings(strings, queries) {
//     let results = [];
//     for (let i in queries) {
//         let counter = 0;
//         for (let s in strings) {
//             if (strings[s] == queries[i]) {
//                 counter++;
//             }
//         }
//         results.push(counter);
//         }
//     return results;
//  }
//     // const stringOccurences = strings.reduce(function (acc, string) {
//     // return acc[string]? acc[string]++ : acc[string] = 1, acc}, {});

//     // // for (let i = 0; i < queries.length; i++) {
//     // //     if (stringOccurences.hasOwnProperty(queries[i])) {
//     // //         results.push(stringOccurences[queries[i]])
//     // //     } else {
//     // //         results.push(0)
//     // //     }
//     // // }
//     // // return results

//     // return queries.reduce(function (acc, string) {
//     //     return stringOccurences.hasOwnProperty(string) ?
//     //         acc[string] = stringOccurences[string] : acc[string] = 0, acc}, [])

// const strings = ["ab", "ab", "abc"]
// const queries = ["ab", "abc", "ba"]
// console.log(matchingStrings(strings, queries))

// //29. given an array of integers, where all elements but one occur twice, find
// // the unique element
// function lonelyinteger(a) {
//     return a.filter((item) => a.indexOf(item)===a.lastIndexOf(item))

// //30. every second div needs to be closed
// const closeSecondDivs = (string) => {
//     for (let i = 0; i <string.length; i++) {
//         if (string[i] === '<')
//     }
// }
// closeSecondDivs("Hello")

// //count the number of integers in a string
// const countIntegers = (string) => string.replace(/[^0-9]/g, '').length
// console.log(countIntegers("H6h78jde459!"))

// //count the number of vowels in a string
// const countVowels = (string) => string.replace(/[^aeiou]/gi, '').length
// console.log(countVowels("Hello World, My Aname is Layla"))

// function changeArray(a) {
//     const upperCaseArray = a.map(item => item.toUpperCase());
//     return upperCaseArray.sort()
// }

// console.log(changeArray(['jason', 'justin', 'dan']))

// a = ['Saleo','demo','two', 'Layla'];
// function returnLongestString(a) {
//     let maxLength = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i].length > maxLength) {
//         maxLength = a[i].length;
//    }
//   }
//     const longestStrs = a.filter((str) => str.length === maxLength);

//     return longestStrs;
// }
// console.log(returnLongestString(a))

// function dayOfYear(dt) {
//     const splitDate = dt.split("-").map(Number);
//     return splitDate
//     const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

//     //check fo r leap year
//     // if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     //     daysInMonth[2] = 29;
//     // }

//     // let dayOfYear = day;
//     // for (let i= 1; i < month; i++) {
//     //     dayOfYear += daysInMonth[i];
//     // }
//     // return dayOfYear;
// }

// console.log(dayOfYear("2022-05-24"))

//find the missing ODD number
function missingOddNum(arr) {
    // let completeArr = [arr[0]];
    // for (let i = 0; i < arr.length; i++) {
    //     let value = completeArr[i] + 2;
    //     completeArr.push(value)
    // }
    // return completeArr.filter((num) => !arr.includes(num))
    let missingDigit = [];
    for (let i = arr[0]; i <= arr.at(-1); i++) {
        if (i % 2 !== 0 && !arr.includes(i)) {
            missingDigit.push(i)
        }
    }
    return missingDigit
}

const arr = [5, 7, 11, 13, 15, 17]
console.log(missingOddNum(arr))
