//
// Object Destructuring
//

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const {name,age,location} = person;

// console.log(`${name} is ${age} and lives in ${location.city}`)


// const book = {
//     title : 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: ' Penguin'
//     }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

// const address = ['1299 S Juniper Street','Philadelphia','Pensylvania','19147'];

// const [,,state] = address;

// console.log(`You are in ${state}`);

const item = ['Coffee (hot)','$2.00','$2.50','$2.75'];

const [coffee,smallPrice,mediumPrice,bigPrice] = item;

console.log(`A medium ${coffee} costs ${mediumPrice}`);