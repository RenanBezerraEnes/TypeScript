let apples: number = 5
let speed: string = "10km"
let hashName: boolean = true;

let nothingMuch: null = null
let nothing: undefined = undefined



// built in objects
let now: Date = new Date()

// Array
let colors: string[] = ['red', 'green', 'blue']
let myNumbers: number[] = [1,2,3]
let truths: boolean[] = [true,true,false]

// Class
class Car {

}
let car: Car = new Car()

// Object Literal
let point: {x: number, y:number} = {
    x: 10,
    y:20
}


// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

//  When to use annotations
// 1) function that returns the 'any' type

const json = '{"x": 10, "y": 20}'; 
const coordinates: {x:number, y:number} = JSON.parse(json)

console.log(coordinates)


// 2) When we declared a variable on one line and initalizate it later
const words = ["red", "green", "blue"]
let foundWord: boolean

for (let i = 0; i < words.length; i++) {
    if(words[i] === "green") {
        foundWord = true
    }
}


