class Vehicle{
    // Special function for arguments -> line 11
    constructor(public color: string) {}

    protected honk(): void {
        console.log("VOID VOID")
    }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color);


class Car extends Vehicle {
    constructor(public wheels: number, color: string){
        super(color)
    }

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

const car = new Car(4, "BLUE")
car.startDriven()
// car.honk()