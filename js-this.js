console.log(this === window);
console.log(window.document);
console.log(this.document);

const pet = {
    type: 'Dog',
    age: 4,
    name: 'Doggo',
    play: function () {
        console.log(this);
        console.log(`${this.name} of age ${this.age} is playing.`);
    },
};

pet.play();

let petPlay = pet.play.bind(pet);
petPlay();

function helloWorld() {
    console.log(this);
    console.log('Hello World');
}

helloWorld();

// ASA DA
const pet1 = {
    type: 'Dog',
    age: 6,
    name: 'Doggo Reloaded',
    play: function () {
        console.log(`${this.name} of age ${this.age} is playing.`);
    },
};

// ASA NU!!!
function play(pet) {
    console.log(`${pet.name} of age ${pet.age} is playing.`);
}

play(pet1);

const pet2 = {
    type: 'Cat',
    age: 10,
    name: 'Tomita',
    play: function () {
        console.log(`${this.name} of age ${this.age} is playing.`);
    },
};

play(pet2);

pet1.play();
pet2.play();
