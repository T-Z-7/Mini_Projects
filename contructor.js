// contructor = special mathod for defining the properties and mathods of the objects(Make a lot of objects within one function)

function person(name,age,gender,work){
    this.name = name,
    this.age = age,
    this.gender = gender,
    this.work = work
    this.talk = function(){
        console.log(`${this.name} is talking to ${work}`)
    }
}

const person1 = new person("ThawZin",23,"Male","CitizenPay");
const person2 = new person("Min Min", 20 , "Male","Programmer")


console.log(person2.name);
console.log(person2.age);
console.log(person2.gender);
console.log(person2.work);
person2.talk();
