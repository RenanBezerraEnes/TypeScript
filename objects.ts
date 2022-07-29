const profile = {
    name: "alex",
    age: 20,
    coords: {
        lat:0,
        lng:15
    },
    // Using function to set a new age
    setAge(age: number ): void {
        this.age = age
    }
}

// Using destructuring
const {age, name}: {age: number, name: string} = profile

const {coords: {lat, lng}}: {coords: {lat: number, lng: number}} = profile
