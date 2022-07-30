interface Vehicle {
    name: string,
    year: Date,
    broken: boolean
    summary(): string
}

// OBS: This could be a state for example...
const oldCivic = {
    name: 'Civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
}

const printVehicle = (vehicle: Vehicle): void => {
    console.log(vehicle.summary());
}

printVehicle(oldCivic)