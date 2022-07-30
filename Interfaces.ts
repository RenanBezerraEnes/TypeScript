// interface Vehicle {
//     name: string,
//     year: Date,
//     broken: boolean
//     summary(): string
// }

interface Reportable {
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

// const printVehicle = (vehicle: Reportable): void => {
//     console.log(vehicle.summary());
// }

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
}

printSummary(oldCivic)