// String prototype

String.prototype.formatName = function () {
    const splitName = this.split(' ');
    const familyName = splitName[0];
    let name = '';

    for (let index = 1; index < splitName.length; index++) {
        name += splitName[index] + ' ';
    }

    return `${familyName.toUpperCase()} ${name}`;
};

const name1 = 'Popescu Ionut Andrei';
console.log(name1.formatName());

// Array prototype

Array.prototype.getFirstTwoValues = function () {
    if (this.length < 1) {
        return [];
    }
    if (this.length < 2) {
        return [this[0]];
    }

    return [this[0], this[1]];
};

const arr = [1, 5, 10, 0, -4, 8];
console.log(arr.getFirstTwoValues());

const arr2 = [1, 100];
console.log(arr2.getFirstTwoValues());

const cat = {
    age: 5,
    happiness: 0,
    play: function () {
        this.happiness += 20;
    },
};

const dog = {
    age: 7,
    happiness: 0,
    play: function () {
        this.happiness += 40;
    },
};

const car = {
    km: 200000,
    year: 2000,
};

// Object prototype

Object.prototype.playUntilFullyHappy = function () {
    let timesPlayed = 0;
    while (this.happiness < 100) {
        this.play();
        timesPlayed++;
    }

    console.log(`I am fully happy! We played ${timesPlayed} times.`);
};

cat.playUntilFullyHappy();
dog.playUntilFullyHappy();
car.playUntilFullyHappy();

// Constructor-Functions prototype

function Car(brand, year, km, fuelLevel) {
    this.brand = brand;
    this.year = year;
    this.km = km;
    this.fuelLevel = fuelLevel;

    this.drive = function () {
        console.log(`Driving my ${this.brand}`);
        this.burnFuel(0.4);
    };
}

Car.prototype.burnFuel = function (quantity) {
    this.fuelLevel -= quantity;
    console.log(`New fuel level is ${this.fuelLevel}`);
};

const audi = new Car('Audi', 2012, 145000, 97);
const volkswagen = new Car('Volkswagen', 2010, 250000, 34);

audi.drive();
volkswagen.drive();
