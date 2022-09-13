import "./style.css";
import { timeInputFromUser, alarms } from "./alarm.js";
import { currentTime, castomClock } from "./clock.js";

document.querySelector("#app").innerHTML = `
  <div>
    <div id='clock'></div> 
    <form id='alarm-form'>
      <input id='user-alarm' name='alarm' type='time' />
      <button type='submit'>New Alarm</button>
    <form>
    <div id='alarms'></div>
  </div>
`;

function renderClock() {
  const clock = document.getElementById("clock");
  currentTime(clock);
}

setInterval(renderClock, 1000);

document.getElementById("alarm-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const timeFromUser = document.getElementById("user-alarm").value;
  if (timeFromUser) {
    timeInputFromUser(timeFromUser);
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
    console.log(alarm);
    const alarmDiv = document.createElement("div");
    alarmDiv.innerHTML = `⏰ Alarm setup at : ${castomClock(
      alarm.alarmTime.getHours()
    )} : ${castomClock(alarm.alarmTime.getMinutes())}`;
    alarmsList.append(alarmDiv);
  });
}
