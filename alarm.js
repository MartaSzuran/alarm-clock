export let alarms = [];

let id = 1;

export function timeInputFromUser(timeFromUser) {
  let hourAndMinutesFromInput = timeFromUser.split(":");
  let alarmHourFromInput = parseInt(hourAndMinutesFromInput[0]);
  let alarmMinutesFromInput = parseInt(hourAndMinutesFromInput[1]);
  let alarmTimeInMilisecondsFromInput =
    alarmHourFromInput * 3600000 + alarmMinutesFromInput * 60000;
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  let currentMinute = currentTime.getMinutes();
  let currentTimeInMilisecondsFromInput =
    currentHour * 3600000 + currentMinute * 60000;
  let diff =
    alarmTimeInMilisecondsFromInput - currentTimeInMilisecondsFromInput;
  let alarmTime = new Date();
  alarmTime.setTime(alarmTime.getTime() + diff);
  createNewAlarm(alarmTime);
}

function createNewAlarm(alarmTime) {
  const newAlarm = {
    id: id++,
    alarmTime: alarmTime,
  };
  alarms = [...alarms, newAlarm];
}
