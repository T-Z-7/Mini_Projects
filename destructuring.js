// destructuring = extract values from array and objects,
//                 then assign them to vaariables in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform objects destructuring



const person1  = {
    firstName : "Thaw",
    lastName : "Zin",
    age : 20,
}

const person2 = {
    firstName : "Christiano",
    lastName : "Ronaldo",
    age : 39,

}

function display ({firstName,lastName,age}){
   console.log(`Name : ${firstName} ${lastName}`);
   console.log(`age : ${age}`)
}

display(person2)