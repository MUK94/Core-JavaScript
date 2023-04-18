class Animal {
  constructor(color = 'Yellow', energy = 100) {
    this.color = color;
    this.energy = energy;
  }

  isActive() {
    if(this.energy > 0) {
      this.energy -= 20;
      console.log(`Energy is decreasing, currently at: ${this.energy}`);
    }else if(this.energy == 0){
      this.sleep();
    }
  }

  sleep() {
    this.energy += 20;
    console.log(`Energy is increasing, currently at ${this.energy}`);
  }
  getColor() {
    console.log(this.color);
  }
}

// 1st level sub-classes
class Cat extends Animal {
  constructor(color, energy, sound = 'purr', canJumpHigh = true, canClimbTrees = true) {
    super(color, energy)
    this.sound = sound;
    this.canJumpHigh = canJumpHigh;
    this.canClimbTrees = canClimbTrees;
  }
  makeSound() {
    console.log(this.sound);
  }
}
class Bird extends Animal {
  constructor(color, energy, sound = 'chirp', canFly = true) {
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
  }
  makeSound() {
    console.log(this.sound);
  }
}

// 2nd level sub-classes
class HouseCat extends Cat{
  constructor(color, energy, sound = 'meow', canJumpHigh, canClimbTrees, houseCatSound) {
    super(color, energy, sound, canJumpHigh,  canClimbTrees);
    this.houseCatSound = houseCatSound;
  }
  makeSound(option) {
    if(option) {
      super.makeSound();
    }
    console.log(this.houseCatSound);
  }

}
class Tiger extends Cat {
  constructor(color, energy, sound, canJumpHigh, canClimbTrees, tigerSound = 'Roar!') {
    super(color, energy, sound, canJumpHigh,  canClimbTrees);
    this.tigerSound = tigerSound;
  }
  makeSound(option) {
    if(option) {
      super.makeSound();
    }
    console.log(this.tigerSound);
  }
}
class Parrot extends Bird{
  constructor(color, energy, sound, canFly, canTalk = false) {
    super(color, energy, sound, canFly, canTalk);
    this.canTalk = canTalk;
  }
  makeSound(option) {
    if(option) {
      super.makeSound();
    }
    if(this.canTalk) {
      console.log("I am a talking parrot!");
    }
  }
}

// Building Animal Objects
let fiji = new Parrot(false);
let polly = new Parrot(true);

fiji.makeSound();
fiji.makeSound(true);

polly.makeSound();
polly.makeSound(true);

polly.color;
polly.energy;

polly.isActive();

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
// cuddles.makeSound(true); // purr, Roar!