//
// Object Destructuring
//


// const person = {    
//     name: 'Abdul',
//     age: 27,
//     location: {
//         city: 'Ottawa',
//         temp: 22
//     }
// }

// const {name = 'Anonymous', age } = person

// console.log(`${name} is ${age}.`)


// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//      name: 'Penguin'   
//     }
// };

// const { name : publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName); // Penguin, Self-Published


//
// Array Destructuring
//

const address = ['2023 BeaconWood Drive', 'Ottawa', 'Ontario', 'K1J8L7'];

const [, city , province ] = address;

console.log(`You are in ${city} ${province}.`)

const item = ['Coffee (iced)', '$2.00', '$2.51', '$2.75' ];

const [ coffee, , medium ] = item;

//grab first and third items using array destructuring 

console.log(`A medium ${coffee} costs ${medium}`);