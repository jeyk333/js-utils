//Using filter() method
let arr = ["apple", "mango", "apple",
          "orange", "mango", "mango"];

const removeDuplicatesFilter = (arr) => {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
console.log(removeDuplicatesFilter(arr));

//Using set() method
const removeDuplicatesSet = (arr) => {
    return [...new Set(arr)];
}
console.log(removeDuplicatesSet(arr));

//Using forEach() method
const removeDuplicatesForEach = (arr) => {
    let unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}
console.log(removeDuplicatesForEach(arr));

//Using reduce() method
const removeDuplicatesReduce = (arr) => {
    let unique = arr.reduce(function (acc, curr) {
        if (!acc.includes(curr))
            acc.push(curr);
        return acc;
    }, []);
    return unique;
}
console.log(removeDuplicatesReduce(arr));



//Using indexOf() method
const removeDuplicatesIndexOf = (arr) => {
    let unique = [];
    for (i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
console.log(removeDuplicatesIndexOf(arr));

//Using every() method
const removeDuplicatesEvery = (arr) => {
    let unique = [];
    arr.every(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
        return true; 
    });
    return unique;
}

console.log(removeDuplicatesEvery(arr));
