// nested Objects = Objects inside of other Objects
//                  Allows you to represent more complex data structure
//                  Child objects is encolse by Parent objects

//                  Person{Address{},Country{}}
//                  Desktop{Monitor{},Mousr{},Keyboard{}}


/*class Address{
    constructor(street,address,country){
        this.street = street;
        this.address = address;
        this.country = country;
    }
}

class Person {
    constructor(name,age,...address){
        this.name = name;
        this.age=age;
        this.address = new Address(...address)
    }
}

const person1 = new Person("ThawZin", 20 , "Yathawady","HM-28","Myanmar");
const person2 = new Person("Mark",23,"LaonRoad","HM-34","England");

console.log(person1.address.street) 
*/


const fruits = [
    {Name : "Apple", Color : "Red" , Calories : 208},
    {Name : "Orange", Color : "Orange" , Calories : 177},
    {Name : "Banana", Color : "Yellow" , Calories : 100},
    {Name : "Coconut", Color : "Green" , Calories : 19},
]

/*const red = fruits.filter(fruit => fruit.Color === "Red");
const yellow = fruits.filter(fruit => fruit.Name === "Orange")
const result = fruits.map(fruit => fruit.Name)
//const pop = fruits.pop();
//const splice = fruits.splice(2,3);
fruits.forEach(fruit => console.log(fruit.Name))*/

const Result = fruits.reduce((mini,fruit) =>                                      // (max - accomulater , fruit - element)
                              fruit.Calories <= mini.Calories ? fruit : mini
                            );

console.log(Result)


