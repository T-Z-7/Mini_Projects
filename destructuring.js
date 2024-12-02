// destructuring = extract values from array and objects,
//                 then assign them to vaariables in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform objects destructuring



const person ={
    firstName : 'Thaw Zin',
    lastName : 'Min Wai',
    age : 20,
}

function combine({firstName,lastName,age}){
     console.log(`Name : ${firstName} ${lastName}`);
     console.log(`Age : ${age}`);
}
combine(person);