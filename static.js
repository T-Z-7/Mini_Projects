// static = keyword that define properties or method that belong to a class itself rather than the object create from the class (class own anything static, not the object)

class User {
    static person(name){
       console.log(`Hello my name is ${name}`);
    }

    static userCount = 0;

    constructor (){
        User.userCount++;
    }
}


User.person("Thaw Zin");

const user1 = new User("ba ba");

console.log(User.userCount)