/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - when none of the other rules applly 'this' will refer to the window or global object. Using strict will default this to undefined

* 2. Implicit Binding - means that the this keyword will refer to whats left of the dot when dot notation is used to invoke the function 

* 3. New Binding - using the 'new' keyword it crates a new object and 'this' will now refer to the newly created object
 
* 4. Explicit Binding - By using 'call' 'apply' or 'bind' we can explicitly tell the this keyword what to bind to and ignore whats left of the dot

* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function tiger(){
    console.log(this.roar)
}
const roar = 'rawr';

tiger(); // in this case 'this' is undefinded since none of the other rules are applied. 

// Principle 2

// code example for Implicit Binding
let houseHold = {
    resident: 'Polina',
    faveFood: 'Coconut',
    speak: function(){
        console.log(`Hi, my name is ${this.resident} and my favorite food is ${this.faveFood}`);
    }
}
houseHold.speak(); //this would refer to houseHold in the example becasue it is left of the dot

// Principle 3

// code example for New Binding
function Game(favorite){
    this.game = favorite;
}

let favGame = new Game ('God of War');
console.log(`my favorite game is ${favGame.game}`)
// the 'new' keyword created a new object that this now refers to
// Principle 4

// code example for Explicit Binding
function cat(){
    console.log(`${this.name} is a ${this.species} and says ${this.sound}`)
}

let pet = {
    name: 'Leo',
    species: 'cat',
    sound: 'meow'
}

cat.call(pet); // in this example instead of 'this' refering to cat 'this' is able to refer to pet because .call told it to refer to pet instead. 
//When using .bind though, it will create a new function that is permanently bound to a 'this' value