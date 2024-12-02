

function updateClock(){
    const now = new Date();
    let hour = now.getHours()
    const meridiem = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12; // 24 hour clocking method.
    hour = hour.toString().padStart(2,0);
    const minute = now.getMinutes().toString().padStart(2,0);
    const second = now.getSeconds().toString().padStart(2,0);
    const clockString = `${hour}:${minute}:${second}  ${meridiem}`;
    document.getElementById("clock").textContent = clockString;
}

updateClock();
setInterval(updateClock);