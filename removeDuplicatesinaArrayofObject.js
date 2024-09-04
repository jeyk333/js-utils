const books = [
    { title: "C++", author: "Bjarne" },
    { title: "Java", author: "James" },
    { title: "Python", author: "Guido" },
    { title: "Java", author: "James" },
];

//Using filter(), map() and includes() method
const ids = books.map(({ title }) => title);
const filtered = books.filter(({ title }, index) =>
    !ids.includes(title, index + 1));
console.log(filtered);

//Using filter() and findIndex() method
const unique = books.filter((obj, index) => {
    return index === books.findIndex(o => obj.title === o.title);
});
console.log(unique);

//Using for in loop
function removeDuplicates() {
    // Declare a new array
    let newArray = [];
    // Declare an empty object
    let uniqueObject = {};

    // Loop for the array elements
    for (let i in books) {

        // Extract the title
        objTitle = books[i]['title'];

        // Use the title as the index
        uniqueObject[objTitle] = books[i];
    }

    // Loop to push unique object into array
    for (i in uniqueObject) {
        newArray.push(uniqueObject[i]);
    }

    // Display the unique objects
    console.log(newArray);
}
removeDuplicates();
