// 1.
const stuInfo = JSON.stringify({
    name: "james",
    roll: 3
});
console.log('q-1.', stuInfo.name);      // undefined

// 3.
const primikas = {
    name: 'keka ferdousi',
    cars: {
        brand: 'toyota'
    }
};
// How will you access the value "toyota" using destructuring?
const { brand } = primikas.cars;
console.log('q-3.', brand);     // toyota

// 15.
const info = {
    data: [
        {
            language: "javascript",
            library: "React"
        }
    ]
};
// How would you access the value "React" from the info object?
const library = info.data[0].library;
console.log(library);