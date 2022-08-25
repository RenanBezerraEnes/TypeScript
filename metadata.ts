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

@controller
class Plane {
    color:string = 'red'

    @get('/login')
    fly(): void {
        console.log('FLYING');
    }
}

function get(path: string) {
    return function(target: Plane, key: string) {
        Reflect.defineMetadata('path', path, target, key);
    };
}

function controller(target: typeof Plane) {
    for(let key in target.prototype) {
       const path = Reflect.getMetadata('path', target.prototype, key);
       console.log(path);
    }
}
