// Establish functions
const sayHello  = function (name) {
  console.log("Hello, " + name);
}

const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}

const returnSayHello  = function (name) {
  return "Hello, " + name;
}

const greeting = returnSayHello('John');

// Call functions
sayHello();
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

sayHelloToConsole('John'); 
