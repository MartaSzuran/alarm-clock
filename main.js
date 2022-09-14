import "./style.css";
import {
  timeInputFromUser,
  alarms,
  ifAlarmsListHasChanged,
  isTimeInputValid,
} from "./alarm.js";
import { currentTime, castomClock } from "./clock.js";

document.querySelector("#app").innerHTML = `
  <div class="container">
    <img src="./public/images/clock.jpg" alt="clock" class='clock-image'/>
    <div id='clock' class="clock"></div> 
    <form id='alarm-form' class='user-input'>
      <input id='user-alarm' name='alarm' type='time' />
      <button type='submit'>New Alarm</button>
    <form>
    <div id='showWentInvalidInput'></div>
    <div id='alarms'></div>
  </div>
`;

function renderClock() {
  const clock = document.getElementById("clock");
  currentTime(clock);
  checkIfAlarmsListHasChanged();
}

setInterval(renderClock, 1000);

document.getElementById("alarm-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const timeFromUser = document.getElementById("user-alarm").value;
  if (timeFromUser) {
    timeInputFromUser(timeFromUser);
    checkIfIsValidTimeInput();
    clearInput();
  }
  createAlarmsList();
});

function clearInput() {
  const userInput = document.getElementById("user-alarm");
  userInput.value = 0;
}

function createAlarmsList() {
  const alarmsList = document.getElementById("alarms");
  while (alarmsList.firstChild) {
    alarmsList.removeChild(alarmsList.lastChild);
  }
  alarms.forEach((alarm) => {
    const alarmDiv = document.createElement("div");
    alarmDiv.innerHTML = `⏰ Alarm setup at : ${castomClock(
      alarm.alarmTime.getHours()
    )} : ${castomClock(alarm.alarmTime.getMinutes())} : ${castomClock(
      alarm.alarmTime.getSeconds()
    )}`;
    alarmsList.append(alarmDiv);
  });
}

function checkIfAlarmsListHasChanged() {
  if (ifAlarmsListHasChanged) {
    createAlarmsList();
  }
}

function checkIfIsValidTimeInput() {
  if (!isTimeInputValid) {
    const info = document.getElementById("showWentInvalidInput");
    info.innerText = "You have to set time in the future!";
    setTimeout(() => (info.innerText = ""), 3000);
  }
}
