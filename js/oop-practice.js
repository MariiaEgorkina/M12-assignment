// STEP 1

class Cat {
    constructor() {
        console.log("New instance of Cat created");
    }
}

const Dog = class {
    constructor() {
        console.log("New instance of Dog created");
    }
};

// STEP 2
const myCat = new Cat();
const myDog = new Dog();

// STEP 3
class Animal {
    constructor() {
        console.log("The Animal has been created");
    }
}

// STEP 4
class Animal {
    constructor(message) {
        console.log(`The ${message} Animal has been created`);
    }
}

// STEP 5
class Animal {
    constructor(type, breed, color, height, length) {
        this._type = type;
        this._breed = breed;
        this._color = color;
        this._height = height;
        this._length = length;
    }

    speak() {
        const animalType = this.checkType();
        console.log(`The ${animalType} has made a noise!`);
    }

    checkType() {
        if (this._type === 'dog') {
            return 'dog';
        } else {
            return 'cat';
        }
    }
}

// STEP 6
const myAnimal = new Animal('dog', 'Labrador', 'golden', '20 inches', '40 inches');

// STEP 7
for (const property in myAnimal) {
    console.log(property);
}

// STEP 8
myAnimal.speak();

// STEP 9
