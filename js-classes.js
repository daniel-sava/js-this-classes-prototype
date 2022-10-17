class Table {
    color;
    height;
    width;
    length;
    recommendedFor;
    isSold = false;

    constructor(color, height, width, length) {
        this.color = color;
        this.height = height;
        this.width = width;
        this.length = length;

        this.recommendedFor = this.length > 50 ? 5 : 3;
    }

    sell() {
        this.isSold = true;
    }
}

const coffeeTable = new Table('black', 50, 60, 50);

console.log(coffeeTable);
coffeeTable.sell();

if (coffeeTable.isSold) {
    console.log('Masa este vanduta!');
} else {
    console.log('Masa este disponibila!');
}

class ExtensibleTable extends Table {
    isExtensible = true;
    isExtended = false;

    constructor(color, height, width, length) {
        super(color, height, width, length);
    }

    toggleTableExtension() {
        this.isExtended = !this.isExtended;

        console.log(
            this.isExtended ? 'Masa este extinsa' : 'Masa este inchisa'
        );
    }
}

const extensibleTable = new ExtensibleTable('black', 150, 800, 150);
console.log(extensibleTable);

extensibleTable.toggleTableExtension();
extensibleTable.toggleTableExtension();

extensibleTable.sell();
if (extensibleTable.isSold) {
    console.log('Masa este vanduta!');
} else {
    console.log('Masa este disponibila!');
}

// coffeeTable.toggleTableExtension(); NU FUNCTIONEAZA

console.log(typeof coffeeTable);
console.log(typeof extensibleTable);

console.log(coffeeTable instanceof Table);
console.log(coffeeTable instanceof ExtensibleTable);
console.log(extensibleTable instanceof ExtensibleTable);
console.log(extensibleTable instanceof Table);
