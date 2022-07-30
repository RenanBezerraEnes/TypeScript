class Vehicle{
    drive(): void {
        console.log("Hello World")
    }
    honk(): void {
        console.log("VOID VOID")
    }
}

const vehicle = new Vehicle()
vehicle.drive()
vehicle.honk()