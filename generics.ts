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