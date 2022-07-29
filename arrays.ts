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

// Flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"]
importantDates.push("2050-10-10")
importantDates.push(new Date())

// importantDates.push(1221) -> in this case it will return a error 
// because number type is not defined in the variable importantDates

