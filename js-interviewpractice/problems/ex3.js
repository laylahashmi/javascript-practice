// Create a counter function which has increment and getValue functionality
// You have a closure when a function reads or modifies the value of a variable
// defined outside its context.

function privateCounter () {
    let count = 0;

    return {
        increment: (val = 2) => {
            count += val;
        },
        getValue: () => {
            return count
        },
    };
};

const counter = privateCounter();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
