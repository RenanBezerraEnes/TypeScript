const carMakers: string[] = ['ford', 'toyota', 'nissan']
const dates = [new Date(), new Date()]

const carsByMarke: string[][] = [
    ['f150', 'corolla', 'skyline']
]

// help with inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100)

// Help with 'MAP' and so on

carMakers.map((car:string): string => {
    return car.toLocaleUpperCase()
})

