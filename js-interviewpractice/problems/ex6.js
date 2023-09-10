// Check if a user exists

const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
        age: 20,
    },
    {
        id: 2,
        name: "John",
        isActive: true,
        age: 18,
    },
    {
        id: 3,
        name: "Mike",
        isActive: false,
        age: 30,
    },
];


const doesUserExist = (name, arr) => arr.some((element) => element.name === name)

// const doesUserExist = (name, arr) => {
//     const index = arr.findIndex((element) => element.name === name );
//     return index > 0
// }

console.log(doesUserExist("John", users))
console.log(doesUserExist("Layla", users))
