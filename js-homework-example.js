class Shelter {
    name;
    address;
    phone;
    animals = [];

    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }

    addAnimalToShelter(animal) {
        this.animals.push(animal);
    }

    showAllAnimals() {
        for (let animal of this.animals) {
            console.log(
                `My name is ${animal.name} and I am ${animal.age} years old. Please adopt me!`
            );
        }
    }
}

class Animal {
    name;
    type;
    age;
    birthDate;

    constructor(name, type, age, birthDate) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.birthDate = birthDate;
    }
}

const shelter = new Shelter(
    'Happy Pets',
    'Strada Animalelor nr. 1',
    '0733445445'
);

console.log(shelter);

const animal1 = new Animal('Doggo', 'Dog', 2, '16.09.2020');
shelter.addAnimalToShelter(animal1);

shelter.showAllAnimals();
