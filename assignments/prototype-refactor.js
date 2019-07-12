/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// CODE here for your Lambda Classes
class GameObject {
  constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game`;
  }
}

class CharacterStats extends GameObject {
  constructor(stats) {
    super(stats);
    this.healthPoints = stats.healthPoints;
  }

  takeDamage() {
    console.log(`${this.name} took damage.`);
  }
}

class Humanoid extends CharacterStats {
  constructor(hum) {
    super(hum);
    this.team = hum.team;
    this.weapons = hum.weapons;
    this.language = hum.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}

class Hero extends Humanoid {
  constructor(heroAtt) {
    super(heroAtt);
  }

  shieldBash() {
    redSkull.healthPoints -= 5;
    if(redSkull.healthPoints >= 0) {
      redSkull.dead = true;
    }
  }
}

class Villan extends Humanoid {
  constructor(villAtt) {
    super(villAtt);
    this.dead = false;
  }
}

const mage = new Humanoid({
  createdAt: '2019, 7, 9',
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

const cptAmerica = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 6,
  },
  healthPoints: 15,
  name: 'Captain America',
  team: 'America',
  weapons: [
    'shield',
    'Super Strength Drugs',
  ],
  language: 'English'
});

const redSkull = new Villan({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 1.5,
    height: 5,
  },
  healthPoints: 5,
  name: 'Red Skull',
  team: 'Hydra',
  weapons: [
    'gun'
  ],
  language: 'German',
  dead: false
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
mage.takeDamage(); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log(redSkull.greet());
cptAmerica.shieldBash();
console.log(redSkull.healthPoints);
console.log(redSkull.dead);
  