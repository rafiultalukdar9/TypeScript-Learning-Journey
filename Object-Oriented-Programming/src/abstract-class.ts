// Abstract Class
abstract class Vehicle {
  constructor(
    public brand: string,
    public speed: number
  ) {}

  // Abstract Method
  abstract start(): void;

  // Regular Method
  getInfo(): void {
    console.log(`Brand: ${this.brand}, Speed: ${this.speed} km/h`);
  }
}

// Child Class
class Car extends Vehicle {
  constructor(brand: string, speed: number, public fuelType: string) {
    super(brand, speed);
  }

  start(): void {
    console.log(`${this.brand} car is starting...`);
  }
}

// Another Child Class
class Bike extends Vehicle {
  constructor(brand: string, speed: number, public hasGear: boolean) {
    super(brand, speed);
  }

  start(): void {
    console.log(`${this.brand} bike is starting...`);
  }
}

// Create Objects
const car = new Car("Toyota", 180, "Petrol");
const bike = new Bike("Yamaha", 120, true);

car.start();
car.getInfo();

bike.start();
bike.getInfo();