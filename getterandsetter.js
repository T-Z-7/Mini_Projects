class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(correctName){
       if(typeof correctName === "string" && correctName.length > 0){
            this._firstName=correctName;
       }
       else{
         console.error("Name must be string character!");
       }
    }

    set lastName(correctName){
        if(typeof correctName === "string" && correctName.length > 0){
            this._lastName = correctName;
        }
        else{
            console.error("Name must be string character!");
        }
    
    }

    set age(correctage){
        if(typeof correctage === "number" && correctage.length > 0){
            this._age=correctage;
        }
        else{
            console.error("Age must be a Numebr!");
        }
    }
    
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get age(){
        return this._age;
    }

    
}

let person = new Person("Thaw", 23 , 32);

console.log(person);

