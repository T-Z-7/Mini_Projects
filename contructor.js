// contructor = special mathod for defining the properties and mathods of the objects(Make a lot of objects within one function)

function car(name , year , owner , model){
    this.name = name, 
    this.year = year,
    this.owner = owner,
    this.model = model;

}

function person(name,gender,age,note){
    this.name = name,
    this.gender = gender,
    this.age = age,
    this.note = note;
}

const car1 = new car("Lambo", 2030 , "Mike" , "B12")
const car2 = new car("Mercedes" , 2012 , "Kai" , "Benz")


const person1 = new person("Thaw Zin", "Male", 20 , "He just trying his best!");

console.log(car1.model);
console.log(`This model is ${car2.model} and name is ${car2.name}.`)

console.log(`His name is ${person1.name} and his age is ${person1.age}. ${person1.note}`);