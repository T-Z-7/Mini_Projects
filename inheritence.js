//inheritance = allow a new class to inherit properties nad method from 
//              an existing class(parent -> child )
//              help with code reusability

class Football{
    isPlayer =true;

    Name(){
        console.log(`Hello my name is ${this.name}`)

    }

    Play(){
        console.log(`I'm playing Football.`)
    }
}

class Ronaldo extends Football{
      name = "Ronaldo";

      championLeague (){
        console.log("I got five champions league!")
      }
}

class Neymar extends Football{
    name = "Neymar";

    skillfull(){
        console.log("I'm the most skillfull player")
    }
}

class Messi extends Football{
    name = "Messi";

    worldcup(){
        console.log("I got a World Cup!");
    }
}

const ronaldo = new Ronaldo();
const neymar = new Neymar();
const messi = new Messi();

ronaldo.Name();
ronaldo.Play();
ronaldo.championLeague();

neymar.Name();
neymar.Play();
neymar.skillfull();

messi.Name();
messi.Play();
messi.worldcup();