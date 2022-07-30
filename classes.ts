class Vehicle{
    protected honk(): void {
        console.log("VOID VOID")
    }
}

class Car extends Vehicle {
    private drive(): void {
    console.log("RUM RUM")
   }

   startDriven(): void {
    this.drive()
    this.honk()
   }
}

// const vehicle = new Vehicle()
// vehicle.drive()
// vehicle.honk()

const car = new Car()
car.startDriven()
// car.honk()