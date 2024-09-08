
let array = [1, 2, 3, 4, 5]
const shuffled = array.sort(() => Math.random() - 0.5);
console.log(array) // [1, 3, 2, 4, 5]

let arrayTwo = [{id: 0, name: 'Raj'}, {id: 1, name: 'Taj'}, {id: 2, name: 'Saj'}];
const shuffled = arrayTwo.sort(() => Math.random() - 0.5);
console.log(arrayTwo) // [{id: 1, name: 'Taj'}, {id: 0, name: 'Raj'}, {id: 2, name: 'Saj'}];
