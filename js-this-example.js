const car = {
    brand: 'Mercedes',
    model: 'C-Class',
    year: 2014,
    fuelLevel: 87,
    isTrunkOpen: false,
    drive: function (inside = false) {
        console.log('Driving');

        if (inside) {
            this.burnFuel(0.6);
        } else {
            this.burnFuel(0.4);
        }
    },
    burnFuel: function (quantity) {
        this.fuelLevel -= quantity;
        console.log(`New fuel level: ${this.fuelLevel}`);
    },
    toggleTrunk: function () {
        this.isTrunkOpen = !this.isTrunkOpen;
        console.log(
            this.isTrunkOpen ? 'Trunk is now open' : 'Trunk is now closed'
        );
    },
};

// car.drive(true);

// for (let currentFuel = car.fuelLevel; car.fuelLevel > 0; currentFuel -= 0) {
//     car.drive();
// }

while (car.fuelLevel > 0) {
    car.drive();

    if (car.fuelLevel > 70 && car.fuelLevel < 80) {
        car.toggleTrunk();
    }
}
