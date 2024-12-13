// Error  = An Object that is create to represent a problem that occurs
// Try{}  = Enclose the code that might potentially cause an error
// catch(){} = Catch and handle any thrown error from Try.
// finallu{} = (optional) Always excuted.



try{
    const dividend = Number(window.prompt("Enter your dividend...."));
    const divisor = Number(window.prompt("Enter your divisor..."));

    if(divisor == 0){
         throw new Error("You can't divided by zero!")
    }

    if(isNaN(dividend) || isNaN(divisor)){
        throw new error("Must be a Numebr!")
    }

    const result = dividend / divisor;
    console.log(result);
}

catch(error){
  console.error(error)
}

console.log("You have reach the end!")
