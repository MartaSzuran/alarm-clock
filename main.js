import "./style.css";
import { setupAlarm, currentTime } from "./alarm.js";

document.querySelector("#app").innerHTML = `
  <div>
    <div id='current-time'></div> 
    <form id='alarm-form'>
      <input id='user-alarm' name='alarm' type='time' placeholder='setup alarm' />
      <button type='submit'>⏰</button>
  </div>
`;

document.getElementById("alarm-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const timeFromUser = document.getElementById("user-alarm").value;
  setupAlarm(timeFromUser);
});

function renderClock() {
  const clock = document.getElementById("current-time");
  currentTime(clock);
}

setInterval(renderClock, 1000);
