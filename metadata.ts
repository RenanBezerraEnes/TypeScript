import 'reflect-metadata'

// const plane = {
//     color: 'red'
// };

// Reflect.defineMetadata('note', 'hi there', plane, 'color')

// const relatedToColor = Reflect.getMetadata('note', plane, 'color')
// console.log(relatedToColor);

// Reflect.defineMetadata('note', 'hi there', plane)
// Reflect.defineMetadata('height', 10, plane)

// const note = Reflect.getMetadata('note', plane)
// const height = Reflect.getMetadata('height', plane)

// console.log(note , height)

class Plane {
    color:string = 'red'

    @markFunction('hi there')
    fly():void {
        console.log('FLYING')
    }
}

function markFunction(secretInfo: string) {
    return function(target: Plane, key: string) {
        Reflect.defineMetadata('secret', secretInfo, target, key)
    }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')
console.log(secret);
