

function game(){
    let score = 0;

    function increse(points){
        score += points;
        console.log(`The score is increase to ${points}`)
    }

    function decrease(points){
        score -= points;
        console.log(`The score is decrease to ${points}`)
    }

    function current(){
        return console.log(`Current score is ${score}`);
    }

    return {increse,decrease,current};
}

let result = game();

result.increse(3);
result.decrease(1);
result.current();

