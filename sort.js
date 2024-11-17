const people = [ {name : "Thaw", age : 20, gender : "Male"},
                 {name : "Zin", age : 40, gender : "Male"}, 
                 {name : "Min", age : 28, gender : "Male"}, 
                 {name : "Wai", age : 90, gender : "Female"},
                 {name : "Jack", age : 2, gender : "Male"},]

const result = people.sort((a,b) => a.name.localeCompare(b.name)) // localeCompare = using String to be alphabaticaly

console.log(result);
