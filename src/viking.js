// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

const soldier1 = new Soldier(1000, 400);
console.log(soldier1);
soldier1.receiveDamage(70);
console.log(soldier1.health);

//Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        console.log(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return 'Odin Owns You All!';
    }
}

const Viking1 = new Viking('Eliel', 500, 400);
console.log(Viking1);
console.log(Viking1.receiveDamage(50));

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return 'A Saxon has died in combat';
        }
    }
    attack() {
        return this.strength;
    }
}

const saxon1 = new Saxon(300, 300);
console.log(saxon1);
console.log(saxon1.receiveDamage(30));

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
        this.saxon.receiveDamage(this.strength);
    }
    vikingAttack() {
        /*  this.saxonArmy.receiveDamage = this.vikingArmy.strength;*/
    }
    saxonAttack() {}
    showStatus() {}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = { Soldier, Viking, Saxon, War };
}