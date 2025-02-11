// Car Constructor
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add getMakeModel method to Car prototype
Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

// SportsCar Constructor (inherits from Car)
function SportsCar(make, model, topSpeed) {
  // Call the parent constructor to set make and model properties
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit methods from Car
SportsCar.prototype = Object.create(Car.prototype);

// Add getTopSpeed method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Fix the constructor reference to be SportsCar
SportsCar.prototype.constructor = SportsCar;

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
