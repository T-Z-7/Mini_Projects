 //  super = keyword is use in classes to call the contructor or 
 //          access the properties and methods of a parents (super class)
 //          this = this object 
 //          super = this parent


 class Animal{
     
    constructor(name,age){
      this.name = name;
      this.age = age;
    
    }

    move(speed){
      console.log(`This ${this.name} move with ${speed}.`)
    }
 }

 class Rabbit extends Animal{

    constructor(name,age,runspeed){
         super(name,age);
          
          this.runspeed = runspeed;
    }

    

    run(){
      console.log(`This ${this.name} is running.`)
      super.move(this.runspeed)
    }

 }

 class Fly extends Animal{

    constructor(name,age,flySpeed){
      super(name,age);
        
         this.flySpeed=flySpeed;
    }

    fly(){
       console.log(`This ${this.name} is flying.`)
       super.move(this.flySpeed)
    }

 }

 class Fish extends Animal{

    constructor(name,age,swimSpeed){
      super(name,age);
         
         this.swimSpeed = swimSpeed;
    }

    swim(){
      console.log(`This ${this.name} is swimming`)
      super.move(this.swimSpeed);
    }

 }

 const rabbit = new Rabbit("Rabbit", 1 , "20km");
 const fly = new Fly("Fly", 2 , "10km");
 const fish = new Fish("Fish", 1, "5km" );

 console.log(rabbit.name);
 console.log(rabbit.age);
 console.log(rabbit.runspeed);
 rabbit.run();

 console.log(fish.name);
 console.log(fish.age);
 console.log(fish.swimSpeed);
 fly.fly();

 console.log(fly.name);
 console.log(fly.age);
 console.log(fly.flySpeed);
 fish.swim();