export class ArrayOfNumbers {
    constructor(public collection: number[]) {}

    get(index:number): number {
        return this.collection[index]
    }
}

class ArrayOfStrings { 
    constructor(public collection: string[]) {}

    get(index:number): string {
        return this.collection[index]
    }
}

class ArrayOfGenerics<T> {
    constructor(public collection: T[]) {}
    
    get(index: number): T {
        return this.collection[index]
    }
}

new ArrayOfGenerics<string>(['a', 'b', 'c'])

// Examples generics with functions

// This functions printStrings and printNumbers are not generic and, it's the same code twice, not a good approach
function printStrings(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])   
    }
}

function printNumbers(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])   
    }
}

// Making a generic function and reusable

function printAnything<T>(arr: T[]):void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])   
    }
}

printAnything<string>(['a', 'b', 'c'])
printAnything<number>([2,4,5])