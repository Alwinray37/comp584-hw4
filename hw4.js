// Hw 4 

// Basic rules and data types
// Exercise 1: code correction:
    var thisIsANewVariable = 10; //updated to camelCase
    if(thisIsANewVariable == 10) {
        console.log("new variable is", thisIsANewVariable);
    }

// Exercise 2: defining core data types
    let strVariable = `hello with backticks`;
    let numVariable = 12.34;
    let isTrue = true;

// Exercise 3: single line comments
    // this is a single comment describing the variable below is for the current score
    let currentScore = 95;

// Exercise 4: equality comp
    console.log(100=='100');
    console.log(100 === '100');

// Section 2
// Exercise 5: ternary operator
    let isWeekend = false;
    let schedule;
    schedule = isWeekend ? "Day off" : "Work day";
    console.log(schedule);

// Exercise 6: if else structure
    let userAge = 16;

    if(userAge >= 18){
        console.log("Access Granted");
    } else {
        console.log("Access Denied");
    }

// Exercise 7: Logical AND operator
    let hasPermission = true;
    let itemCount = 3;

    if(hasPermission == true && itemCount < 5){
        console.log("Ready to process");
    }

// Exercise 8: for loop
    for(let i = 0; i < 5; i++){
        console.log(i+1);
    }

// Exercise 9: for loop to 9 but break at 7
    for(let i = 0; i <=9; i++){
        console.log(i);
        if(i == 7){
            break;
        }
    }

// Exercise 10: ensuring execution
    let counter = 10;

    do {
        console.log("Running Once");
        counter--;
    } while (counter > 10);

// Section 3
// Exercise 11: function def
    function calculateArea (width, height){
        return width * height;
    }
    let resultArea = calculateArea(5, 10);
    console.log("Area:", resultArea);
    
// Exercise 12: array manipulation
    let fruitList = ['Apple', 'Banana'];

    fruitList.push('Grape');
    fruitList.shift(); //removing the first item in the array
    console.log(fruitList.indexOf('Banana'));
    console.log(fruitList);

// Exercise 13: array copying
    let originalData = [1,2,3,4,5];

    // .slice() method creates a shallow copy without changing the original data
    // this type of copy does not copy nested objects or arrays, so data might be lost or inconsistent
    let clonedData = originalData.slice();
    console.log(clonedData);

// Exercise 14: Object constructor
    function Animal (species, sound){
        this.species = species;
        this.sound = sound;
    }

// Exercise 15: object instantiation
    let dog = new Animal("Canine", "Woof");
    let cat = new Animal("Feline", "Meow");

    let animalArray = [dog, cat];
    console.log(animalArray);