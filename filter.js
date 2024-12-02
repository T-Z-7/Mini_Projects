// .filter() = creates a new array by filtering out elements


let player  = [{name :"Neymar",age : 23, thropy : 8},
               {name :"Ronaldo",age : 30, thropy : 18}, 
               {name :"Messi",age : 29, thropy : 17},
               {name :"Kaka",age : 33, thropy : 10}];

function disply(element){
      return element.thropy > 8;
}

let result = player.filter(disply);

console.log(result);