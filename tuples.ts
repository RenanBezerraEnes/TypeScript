// Normal way
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

// Tuple way
type Drink = [string, boolean, number]

const pepsi: Drink = ['brown', true, 40]
const sprite: Drink = ['clear', true, 50]
const tea: Drink = ['red', false, 70]
