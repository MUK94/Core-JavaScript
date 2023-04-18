/*
//  FUNCTIONS
function listArrayItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] == 'red') {
      // console.log(i*100, "tomato!");
    } else {
      // console.log(i*100, arr[i]);
    }
  }
}

let colors = ["red", "orange", "black", "yellow", "blue", "marron"];
listArrayItems(colors);

// Practice
function letterFinder(word, match) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] == match) {
      // console.log('Found the', match, 'at', i);
    }else {
      // console.log('--No match found at', i);
    }
    
  }
}

letterFinder("test", "t");

// OBJECTS
let house = {
  rooms: 3,
  color: "brown",
  priceUSD: 10000,
}

// console.log(house);

let secondHouse = {};
secondHouse.rooms = 4;
secondHouse.color = "Red";
secondHouse.priceUSD = 20000;

// console.log(secondHouse);

// USING THE BRACKET NOTATION
let thirdHouse = {};
thirdHouse["rooms"] = 8;
thirdHouse["color"] = "blue";
thirdHouse["priceUSD"] = 54032;

// console.log(thirdHouse);

// BRACKET NOTATION Vs DOT NOTATION
let arrOfKeys = ["speed", "altitude", "color"];
let drone = {
  speed: 100,
  altitude: 150,
  color: "blue"
}

for (let i = 0; i < arrOfKeys.length; i++) {
  // console.log(drone[arrOfKeys[i]]);
}

// THE BELOW CODE WON'T WORK
// for (let i = 0; i < drone.length; i++) {
//   console.log(drone[[i]]);
// }

// ARRAYS ARE OBJECTS
let fruits = [];
fruits.push("apple");
fruits.push("pear");

// console.log(fruits);
// console.log(fruits.pop(), fruits)

function arrBuilder(one, two, three) {
  let arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);

  // console.log(arr);
}

arrBuilder("Thierno", "Mouctar", "Balde");

// MATHS OBJECTS
let ele = Math.min(8, 45, 2);
// console.log(ele);

let myRand = Math.random() * 100;
// console.log(Math.ceil(myRand));

// STRINGS 

const myArr = ["Thierno", "Mouctar", "Balde"];
for (let i = 0; i < myArr.length; i++) {
  // console.log(myArr[i]);
  let element = myArr[i];
  for (let j = 0; j < element.length; j++) {
    // console.log(element[j]);
  }
}

// STRINGS
let greet = "hello, ";
let place = "worldo";

console.log(greet.length, place.lastIndexOf("o"), place.charAt(1), "Am".concat("ad".concat("ou")));

console.log("ho-h-o".split("-"));

// Create arrays & objects
let clothes = [];
clothes.push("Jean", "Trouser", "Pants", "T-Shirt", "Jacket");
clothes.pop();
clothes.push("Vest");
// console.log(clothes, clothes[2]);

const favcat = {};
favcat.color = "red";
favcat.coverTitle = true;

favcat.addTwoNum = function (num1, num2) {
  return num1 + num2;
}

// console.log(favcat.addTwoNum(5, 15));

let car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
car.turnTheKey();
car.lightsOn()

var result = "Hello".indexOf('l');
// console.log(result);


var dog = {
  color: "brown",
  height: 30,
  length: 60
};
dog["type"] = "corgi";

// console.log(typeof(dog.type));
*/

// TRY AND CATCH
// try {
//   throw new ReferenceError();
// } catch (error) {
//   // console.log(error)
// }
// console.log('The code will keep running!')

// console.log((10).toString(100));

// Error Handling
// function sum(a, b) {
//   try {
//     if(typeof(a) != 'number') {
//       throw new ReferenceError('The first argument is not a number');
//     } else if(typeof(b) != 'number') {
//       throw new ReferenceError('The second argument is not a number');
//     }else {
//       console.log(a + b);
//     }
//   } catch (err) {
//     console.log('Error:', err);
//   }
// } 

// sum(5, "5");
// console.log("It still work");

function letterFinderDefence(word, match) {
  let condition1 = typeof(word) === 'string' && word.length >= 2;
  let condition2 = typeof(match) === 'string' && match.length == 1;

  // Condition is true
  if(condition1 && condition2) {
    for (let i = 0; i < word.length; i++) {
      if(word[i] == match) {
        console.log('Found', match, 'at', i)
      }else {
        console.log('---No match at', i);
      }
      
    }
  }else {
    console.log("Please pass correct arguments to the function.")
  }
}

letterFinderDefence('cat', 'c');

let err = null;
console.log(err, typeof(err));

// throw new Error();
// console.log("Hello");
try {
  throw new Error();
  console.log('Hello');
} catch(err) {
  console.log('Goodbye');
}

function add(a, b) {
  console.log(a + b)
}

add(3, "4");

try {
  Number(5).toPrecision(300)
  } catch(e) {
  console.log("There was an error")
  }

  var str = "Hello";
  console.log(str.match("jello"));


function meal(animal) {
    animal.food = animal.food + 10;
}

var dog = {
    food: 10
};
meal(dog);
// meal(dog);

console.log(dog.food);


// Week 3 Assignment
// Task 1: Build a function-based console log message generation
var message;
var style;

// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color:${color};`;
    style += `background:${background};`;
    style += `background:${fontSize};`;
    console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    var fontStyle = "color:tomato; font-size:50px";
    if (reason == 'birthday') {
        console.log(`%cHappy birthday`, fontStyle);
    }
    else if (reason == 'champions') {
        console.log(`%cCongrats on the title!`, fontStyle);
    }
    else {
        console.log(message)
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', 'ede6db', '40px', 'Congrats');
celebrateStyler('birthday')

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}
// Call styleAndCelebrate

styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions')