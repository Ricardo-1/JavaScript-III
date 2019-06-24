/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. In the Global Scope the value of this will be the window/console object 
* 2. Whenever a function is called by a preceding dot, the object before that dot is this.
* 3. Whenever a constructor function is used this  referes to the specific instance of the object that is created and returned by the constructor function.
* 4. whenever call or apply methods are used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
}

console.log(sayName("Godzilla"))
// Principle 2

// code example for Implicit Binding

const samJackson = {
    name: "Samuel",
    food: "tasty burger",
    speak: function () {
        return `${this.name} thinks the Big Kahuna Burger is a ${this.food}.`;
    }
};
console.log(samJackson.speak());


const jules = {
    name: "Jules",
    wallet: "badMFer",
    speak: function() {
        return `Juels said to the robber "it's the one that says ${this.wallet} on it".`
    }
};

console.log(jules.speak());



/* EXAMPLE 3 for Implicit Binding
const myObj = {
    greeting: "Hello",
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};

console.log(myObj.sayHello("Biggie"))
*/



// Principle 3

// code example for New Binding

function Animal(food) {
    this.food = food;
    this.eat = function() {
        console.log(`This animal likes to eat ${this.food}`);
    }
}

// const zebra = {
//     name: "Zebra",
//     diet: "Grass",
//     eat: function () {
//         console.log("eat");
//     }
// }

const zebra = new Animal("grass");
const lion = new Animal('meat');

console.log(zebra);
console.log(lion);


// zebra.eat();




// EXAMPLE NUMBER 2
// function CordialPerson(greeter) {
//     this.greeting = 'Hello ';
//     this.greeter = greeter;
//     this.speak = function() {
//       console.log(this.greeting + this.greeter);
//       console.log(this);
//     };
//   }
  
//   const jerry = new CordialPerson('Newman');
//   const newman = new CordialPerson('Jerry');
  
//   jerry.speak();
//   newman.speak();

// Principle 4

// code example for Explicit Binding


//HOW DOES THE SKILLS ARRAY END UP AS PARAMS????????
const skills = ['HTML','CSS','JS']

function introduce(params) {
    return `Hello! my name is: ${this.name} and these are my skills: ${params}.`;
}

console.log(introduce.call(jules, skills));


// const useLater = introduce.bind(person,...skils);
// console.log(useLater());
// //Bind stores the this keyword for later use.