// CODE here for your Lambda Classes
class GameObject {
    constructor (attributes) {
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = this.dimensions;
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

class Humanoid extends CharacterStats{
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

class Hero extends Humanoid{
    super(heroAtt);

    shieldBash() {
        redSkull.healthPoints -= 5;
    }
}

class Villan extends Humanoid {
    super(villAtt);
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
    language: 'German'
  });
  
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log(redSkull.greet());
  console.log(cptAmerica.shieldBash());
  console.log(redSkull.healthPoints);