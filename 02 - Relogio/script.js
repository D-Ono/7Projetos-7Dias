let digitalElement = document.querySelector('.digital');
let secondsElement = document.querySelector('.p_s');
let minutesElement = document.querySelector('.p_m');
let hoursElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date(); 
    let hour = now.getHours(); 
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${minute}:${fixZero(second)}`;

    let sDeg = ((360/60) * second) - 90;
    let mDeg = ((360/60) * minute) - 90;
    let hDeg = ((360/12) * hour) - 90;

    secondsElement.style.transform = `rotate(${sDeg}deg)`
    minutesElement.style.transform = `rotate(${mDeg}deg)`
    hoursElement.style.transform = `rotate(${hDeg}deg)`
}

function fixZero(time) {
    return time<10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();