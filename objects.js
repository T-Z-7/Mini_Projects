// objects = A collection related properties and/or method 
//           Can represent real world objects(people,products,place)
//           Object = {key:value,
//                     function()}



const person1 = {
    name : "Thaw Zin",
    age : 25,
    gender : "Male",
    sayHello : function(){
        console.log("Hello My name is Thaw Zin.")
    },
    eat : ()=>
        console.log("I'm eating an egg...")
    }


person1.sayHello();
person1.eat();