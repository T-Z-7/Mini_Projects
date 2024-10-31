// this = reference to the object where This is used 
//        (The object depand on the immediate context)
//        person.name = this.name

const person1 = {
    name : "Jack",
    favFood :  "Burger",
    sayHello : function(){
        console.log(`Hello my name is ${this.name}! `)
    },
    eat : function(){
        console.log(`${this.name} is eating his ${this.favFood}`)
    },
}

person1.sayHello();
person1.eat();