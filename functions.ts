const add = (a:number, b:number): number => {
    return a + b
}   


// It is important to specify the return type otherwise I can face a problem 
// const subtract = (a:number, b:number) => {
//     a + b
// }   

function divide(a: number, b: number): number {
    return a / b
}

const multiply = function(a:number, b: number): number {
    return a * b
}

const logger = (message: string): void => {
    console.log(message)
}

const error = (message: string): never => {
    throw new Error(message);
}

const throwError = (message: string): string => {
    if(!message) {
        throw new Error(message);
    }
    return message
}