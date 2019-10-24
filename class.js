//Everything here is commented ,remove it to run get output 

// The basic syntax is:

// class MyClass {
//     // class methods
//     constructor() { ... }
//     method1() { ... }
//     method2() { ... }
//     method3() { ... }
//     ...
//   }
// Using New operator
//   Then use new MyClass() to create a new object with all the listed methods.

// The constructor() method is called automatically by new, so we can initialize the object there.

// let cls=new MyClass();
// cls.method1();

// In JavaScript, a class is a kind of a function.(typeof is function)

// class myname{
//     constructor(name){
//         this.name=name;
//         function display(){
//             console.log(name);
           
//         };display();
//     }
// }
// let name=new myname("john")
// console.log(typeof myname); //function
// console.log(typeof name);  //object


//Class Expressions
//just like functions, classes can be defined inside another expression, passed around, returned, assigned etc.
//If a class expression has a name, it’s visible inside the class only:
// let User = class {
//     sayHi() {
//       alert("Hello");
//     }
//   };


// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
// let User = class MyClass {
//     sayHi() {
//       alert(MyClass); // MyClass name is visible only inside the class
//     }
//   };
  
//   new User().sayHi(); // works, shows MyClass definition
  
//   alert(MyClass); // error, MyClass name isn't visible outside of the class  


//getter/setter
// class User {

//     constructor(name) {
//       // invokes the setter
//       this.name = name;
//     }
  
//     get name() {
//       return this._name;
//     }
  
//     set name(value) {
//       if (value.length < 4) {
//         alert("Name is too short.");
//         return;
//       }
//       this._name = value;
//     }
  
//   }
  
//   let user = new User("John");
//   alert(user.name); // John
  
//   user = new User(""); // Name too short.


// ----------------------------------------------------Inheritance-----------------------------------------------------------------
//Syntax :class Child extends Parent

//Animal Class

// class Animal {
//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
//     run(speed) {
//       this.speed += speed;
//       console.log(`${this.name} runs with speed ${this.speed}.`);
//     }
//     stop() {
//       this.speed = 0;
//       console.log(`${this.name} stands still.`);
//     }
//   }
  
//   let animal = new Animal("My animal");

//   //rabbit class 
//   //rbbit extending to animal

//   class Rabbit extends Animal {
//     hide() {
//       console.log(`${this.name} hides!`);
//     }
//   }
  
//   let rabbit = new Rabbit("White Rabbit");
  
//   rabbit.run(5); // White Rabbit runs with speed 5.
//   rabbit.hide(); // White Rabbit hides!

  //Object of Rabbit class have access to both Rabbit methods, such as rabbit.hide(), and also to Animal methods, such as rabbit.run().

  //-------------------------------------------Overriding a method-------------------------------------------

  //But if we specify our own method in Rabbit, such as stop() then it will be used instead.
  //To call parent method ,we use "super" keyword

//   class Rabbit extends Animal {
//     hide() {
//       console.log(`${this.name} hides!`);
//     }
  
//     stop() {
//       super.stop(); // call parent stop
//       this.hide(); // and then hide
//     }
//   }
  
//   let rabbit = new Rabbit("White Rabbit");
  
//   rabbit.run(5); // White Rabbit runs with speed 5.
//   rabbit.stop(); // White Rabbit stands still. White rabbit hides!

