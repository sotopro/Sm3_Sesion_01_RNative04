// aquarium limit
let popLimit = 20;

let fish = 0;

while (fish < popLimit) {
  fish++;
  console.log(`There's room for ${popLimit - fish} more fish.`);
} 

// initiate an infinite loop
// while (true) {
//     // execute code foreve
// }

// set a condition to true
const iceCapsAreMelting = true;
let polarBears = 8;
while(iceCapsAreMelting) {
    console.log(`There are ${polarBears} polar bears.`);
    polarBears--;
    if(polarBears === 0) {
        console.log("There are no polar bears left.")
        break;
    }
}

// Set variable to 0
let x = 0;

do {
    x ++;
    console.log(x);
} while (false);

let i = 0;

// do {
//     console.log('hello world!');
//     i ++;
// } while (i < 5);

// for loop

//for (initialization; condition; final expression/ incremetation) {
    // execute code
//}

// for (; ; i++) {
//     if(i > 5){
//         break
//     }
//     console.log(i);
// }
for (let i = 0; i < 10; i++){
    console.log(i);
};

// initialize empty array
const arrayExample = [];

for (let i = 0; i < 6; i++) {
    arrayExample.push(i);
    console.log(arrayExample)
}

let fishList = ['goldfish', 'clownfish', 'catfish', 'bluegill', 'pufferfish'];

for (let i = 0; i < fishList.length; i++) {
    console.log(fishList[i]);
}

const shark = {
    species: 'hammerhead',
    color: 'gray',
    numberOfTeeth: Infinity
}

for (attribute in shark) {
    console.log(attribute);
}

for (let fishAttribute of fishList) {
    console.log(fishAttribute);
}

for (let [index, fishAttribute] of fishList.entries()) {
    console.log(index, fishAttribute)
}

const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    maritalStatus: 'married'
}

for (let info in person) {
    console.log(`${info}: ${person[info]}`)
}

const animals = ['dog', 'cat', 'bird', 'fish', 'lizard'];

animals.forEach((animal) => {
    console.log(animal)
});
