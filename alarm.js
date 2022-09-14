export let alarms = [];

let audio = new Audio("/sounds/alarm.mp3");

let id = 1;

export let ifAlarmsListHasChanged = false;
export let isTimeInputValid = false;

export function timeInputFromUser(timeFromUser) {
  let hourAndMinutesFromInput = timeFromUser.split(":");
  let alarmHourFromInput = parseInt(hourAndMinutesFromInput[0]);
  let alarmMinutesFromInput = parseInt(hourAndMinutesFromInput[1]);
  let alarmTimeInMilisecondsFromInput =
    alarmHourFromInput * 3600000 + alarmMinutesFromInput * 60000;

  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  let currentMinute = currentTime.getMinutes();
  let currentSeconds = currentTime.getSeconds();
  let currentTimeInMilisecondsFromInput =
    currentHour * 3600000 + currentMinute * 60000;

  let diff =
    alarmTimeInMilisecondsFromInput -
    currentTimeInMilisecondsFromInput -
    currentSeconds * 1000;

  if (diff < 0) {
    return (isTimeInputValid = true);
  }

  let alarmTime = new Date();
  alarmTime.setTime(alarmTime.getTime() + diff);
  createNewAlarm(alarmTime, diff);
}

function createNewAlarm(alarmTime, diff) {
  const newAlarm = {
    id: id++,
    alarmTime: alarmTime,
  };
  alarms = [...alarms, newAlarm];
  setAlarm(newAlarm.id, diff);
}

function setAlarm(id, diff) {
  setTimeout(() => {
    alarmIsOn(id);
  }, diff);
}

function alarmIsOn(id) {
  audio.play();
  alarms = alarms.filter((alarm) => alarm.id !== id);
  ifAlarmsListHasChanged = true;
}
