function Pet(type, age, name, breed = 'unknown') {
    this.type = type;
    this.age = age;
    this.name = name;
    this.breed = breed;

    this.play = function () {
        console.log(`${this.name} of age ${this.age} is playing.`);
    };
}

const pet1 = new Pet('Dog', 5, 'Doggo', 'Bichon');
const pet2 = new Pet('Cat', 10, 'Tomita');
const pet3 = new Pet('Dog', 2, 'Doggo 2.0');

console.log(pet1.breed, pet2.breed, pet3.breed);

pet1.play();
pet2.play();
pet3.play();

function Student(year, age, name) {
    this.year = year;
    this.age = age;
    this.name = name;
    this.enrolledIn = [];

    this.enrollInCourse = function (courseName) {
        this.enrolledIn.push(courseName);
    };
}

const student = new Student(2, 22, 'Ionel');
console.log(student.name);

student.enrollInCourse('IT School - Frontend Development');
student.enrollInCourse('IT School - Backend Development');
student.enrollInCourse('IT School - UI/UX Design');

for (let index = 0; index < student.enrolledIn.length; index++) {
    console.log(`Student has enrolled in: ${student.enrolledIn[index]}.`);
}
