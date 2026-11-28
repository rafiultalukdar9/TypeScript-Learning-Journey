class Engine {
  start(): void {
    console.log("Engine started");
  }
}

class Car {
  constructor(private engine: Engine) {}

  start(): void {
    this.engine.start();
    console.log("Car started");
  }
}

const engine = new Engine();
const car = new Car(engine);

car.start();