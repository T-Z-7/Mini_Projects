// class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional 
//         constructor function ex. static keyword, encapsulation , inheritance


class GOAT{
    constructor(name,team,throphy){
           this.name = name;
           this.team = team;
           this.throphy = throphy;
    }

    display(){
        console.log(`This is the GOAT of the football and his name is ${this.name}! 
                     He played at the ${this.team} and named as a ${this.throphy}!`)
    }


}

let Ronaldo = new GOAT("Christiano Ronaldo","Real Madrid","Mr.Championleague");

Ronaldo.display();

