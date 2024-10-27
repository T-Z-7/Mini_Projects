/* .map()= accepts a callback and applies that function to each element of an array , then return a new array.*/

const dates = ["2024-1-10","2024-2-20","2024-3-30"];



function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}}`
}

const formattedDates = dates.map(formatDates);

console.log(formattedDates);