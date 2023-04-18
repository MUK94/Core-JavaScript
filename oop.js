class Animal {
  constructor(name, color, weight) {
    this.name = name;
    this.color = color;
    this.weight = weight
  }

  description() {
    console.log(`My animal name's: ${this.name}, color's ${this.color}, and weighs ${this.weight}`);
  }
}

class Bird extends Animal{
  
}

const eagle = new Bird("Winter Eagle", "Mixed", "20Kg");
eagle.description();
// console.log(eagle);

// Custom constructors
function IceCream(flavor) {
  this.flavor = flavor;
  this.meltIt = function () {
    console.log(`The ${this.flavor} icecream has melted`);
  }
}

let kiwiIceCream = new IceCream("kiwi");
let appleIceCream = new IceCream("apple");
// console.log(kiwiIceCream, appleIceCream);

// Creating Classes

class Train {
  constructor (color, lightsOn) {
    this.color = color,
    this.lightsOn = lightsOn
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightStatus() {
    console.log(`Lights on?`, this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    let proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

let train1 = new Train('red', 'true');
train1.toggleLights();
train1.lightStatus();
train1.getSelf();
train1.getPrototype();

class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log(`High speed status: ${this.highSpeedOn}`);
  }
  toggleLights() {
    super.toggleLights();
    super.lightStatus();
    console.log(`Lights are 100% operational`)
  }
}

let train2 = new Train('blue', false);
let highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train2.toggleLights();
train2.lightStatus();
highSpeed1.toggleLights();
highSpeed1.toggleHighSpeed();
highSpeed1.getSelf();
highSpeed1.getPrototype();

// Using class instance as another class' constructor's property
class StationaryBike {
  constructor(position, gears) {
    this.position = position;
    this.gears = gears;
  }
}

class Treadmill {
  constructor(position, modes) {
    this.position = position;
    this.modes = modes;
  }
}

class Gym {
  constructor(openHrs, stationaryBikePos, treadmillPos) {
    this.openHrs = openHrs;
    this.stationaryBikePos = new StationaryBike(stationaryBikePos, 8);
    this.treadmillPos = new Treadmill(treadmillPos, 5);
  }
}

let boxingGym = new Gym("7-22", "right corner", "left corner");
console.log(boxingGym.openHrs);
console.log(boxingGym.stationaryBikePos);
console.log(boxingGym.treadmillPos);

// Default Parameters
/*
Additionally, this approach really shines when building inheritance hierarchies using classes, 
as it makes it possible to provide only the custom properties in the sub-class, 
while still accepting all the default parameters from the super-class constructor */
class NoDefaultParams {
  constructor(num1, num2, num3, string1, bool1) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.string1 = string1;
    this.bool1 = bool1;
  }
  calculate() {
    if(this.bool1) {
      console.log(this.string1, this.num1 + this.num2 + this.num3);
      return;
    }
    return "The value of bool1 is correct";
  }
}

let fail = new NoDefaultParams(1,2,3, false);
fail.calculate();

// Assigning defaul values
class WithDefaultParams {
  constructor(num1=1, num2=2, num3=3, string1="Result:", bool1 = true) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.string1 = string1;
    this.bool1 = bool1;
  }
  calculate() {
    if(this.bool1) {
      console.log(this.string1, this.num1 + this.num2 + this.num3);
      return;
    }
    return "The value of bool1 is correct";
  }
}

let better = new WithDefaultParams();
better.calculate();