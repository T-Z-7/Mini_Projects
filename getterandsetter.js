class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFistName){
        if(typeof newFistName=== "string" && newFistName.length > 0){
            this._firstName = newFistName;
        }
        else{
            console.error("Name must be a strings characters")
        }
    }
    set lastName(newlastName){
            if(typeof newlastName === "string" && newlastName.length > 0){
                this._lastName = newlastName;
            }
            else{
                console.error("Name must be a strings characters")
            }
    }
    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a strings number")
        }
    }

    get firstName(){
        return(this._firstName)
    }
    get lastName(){
        return(this._lastName)
    }
    get age(){
        return(this._age)
    }

    get fullName(){
        return this._firstName + "" + this._lastName;
    }
}


const person1 = new Person("Thaw","Zin",20);

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.fullName);