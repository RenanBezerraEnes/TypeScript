class Vehicle{
    drive(): void {
        console.log("Hello World")
    }
    honk(): void {
        console.log("VOID VOID")
    }
}

class Car extends Vehicle {
   
}

// const vehicle = new Vehicle()
// vehicle.drive()
// vehicle.honk()

const car = new Car()
car.drive()
car.honk()