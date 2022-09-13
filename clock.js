export function currentTime(element) {
  let setupTime = new Date();
  let currentHours = setupTime.getHours();
  let currentMinutes = setupTime.getMinutes();
  let currentSeconds = setupTime.getSeconds();
  element.innerHTML = `Current Time: ${castomClock(
    currentHours
  )} : ${castomClock(currentMinutes)} : ${castomClock(currentSeconds)}`;
}

export function castomClock(element) {
  return element < 10 ? `0${element}` : `${element}`;
}
