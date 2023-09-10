// Remove all duplicates in the array


let A = [1, 1, 2, 2, 2, 2, 5, 5];

function noDuplicates (arr) {
    return [...new Set(arr)]
};

console.log(noDuplicates(A))


const uniqueArr = (arr) => {
    const result = [];
    arr.forEach((item) => {
        if (!result.includes(item)) {
            result.push(item);
        }
    });
    return result;
};

console.log(uniqueArr(A))


const noDups = (arr) => {
    return arr.reduce((acc, element) => {
        return acc.includes(element) ? acc : [...acc, element];
    }, []);
};

console.log(noDups(A))
