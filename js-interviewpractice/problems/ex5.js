//Write a function which gets an array and an element and returns an array with this element at the end

const numbers = [1, 2]
function addToArray (arr, element) {
    return [...arr, element]
}
// const newNumbers = addToArray(numbers, "wassup")
// console.log(newNumbers)
// console.log(numbers)


// Write a function to concatenate two arrays
function mergeArrays (arr1, arr2) {
    return [...arr1,...arr2]
}

const arr1 = [6, 4, 3];
const arr2 = [52, 2, 5];
const result = mergeArrays(arr1, arr2);
console.log(result, arr1, arr2)
