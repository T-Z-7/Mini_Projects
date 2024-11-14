// this = reference to the object where This is used 
//        (The object depand on the immediate context)
//        person.name = this.name

const car1 = {
    name : "Lambo",
    model : "X12B",
    owner : "Thaw Zin",
    releaseDate : "9/12/2028",
    price : 2000000,
    ai : function(){
        console.log(`Hello Mr.${this.owner}. This model is ${this.model} and its release date is ${this.releaseDate}!`);
    }
}

car1.ai();