const CurrentTime = document.querySelector("h1"),
content = document.querySelector(".content"),
selectmenu = document.querySelectorAll("select"),
SetAlarmBtn = document.querySelector("button")

let alarmTime, isAlarmSet = false;
ringtone = new Audio("./Ebuka-Songs-Calling-My-Name-I-m-A-Soldier-Live-(TrendyBeatz.com).mp3");

for (let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectmenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option =`<option value="${i}">${i}</option>`;
    selectmenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
let ampm = i == 1 ? "AM" : "PM"
    let option =`<option value="${ampm}">${ampm}</option>`;
    selectmenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}
setInterval(() => {
    //getting hour, mins,  secs
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";

    if(h >= 12) {
        h =h - 12;
        ampm = "PM";
    }
    //if hour value is 0, set this value to 12
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    CurrentTime.innerText = `${h}:${m}:${s} ${ampm}`;

    if(alarmTime == `${h}:${m} ${ampm}`) {
       ringtone.play();
       ringtone.loop = true;
    }
}, 1000);

function setAlarm() {
    if (isAlarmSet) { // if is alart is true
        alarmTime = "";// clear the value of alarmtime
        ringtone.pause();// pause the ringtone
        content.classList.remove("disable");
        SetAlarmBtn.innerText = "Set Alarm";
         return isAlarmSet = false; // return isalart value to false
     }

    //getting hour, minute, ampm select tag value
    let time = `${selectmenu[0].value}:${selectmenu[1].value} ${selectmenu[2].value}`;
    
    if (time.includes("Hour") ||time.includes("Minute") || time.includes("AM/PM")) {
        return alert('DONT YOU KNOW WHO AN ALARM WORKS')
    }
    isAlarmSet = true;
    alarmTime = time;
    content.classList.add("disable");
    SetAlarmBtn.innerText = "Clear Alarm";
}

SetAlarmBtn.addEventListener("click", setAlarm);