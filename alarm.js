export function setupAlarm(timeFromUser) {
  const currentTime = new Date();
  console.log(currentTime);
  console.log(timeFromUser);
}

export function currentTime(element) {
  let setupTime = new Date();
  let currentHours = setupTime.getHours();
  let currentMinutes = setupTime.getMinutes();
  let currentSeconds = setupTime.getSeconds();
  element.innerHTML = `Current Time: ${castomClock(
    currentHours
  )} : ${castomClock(currentMinutes)} : ${castomClock(currentSeconds)}`;
}

function castomClock(element) {
  return element < 10 ? `0${element}` : `${element}`;
}
