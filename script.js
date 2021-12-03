setInterval(setClock, 1000)
let rotation = 0

const hoursHand = document.getElementById("hourHand");
const minutesHand = document.getElementById("minuteHand");
const secondHand = document.getElementById("secondHand");
function setClock()
{
    const currentDate =  new Date()
    const secondsRatio = currentDate.getSeconds()/60
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
    const hoursRatio = (minutesRatio+currentDate.getHours())/12

    secondHand.style.setProperty('--rotation', secondsRatio*360)
    minutesHand.style.setProperty('--rotation', minutesRatio*360)
    hoursHand.style.setProperty('--rotation', hoursRatio*360)
    
   
} 

