const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');

function getTime() {
  const date = new Date();
  const minutes = ('00' + date.getMinutes()).slice(-2);
  const seconds = ('00' + date.getSeconds()).slice(-2);
  const hours_temp = date.getHours();
  const hours =
    hours_temp === 0
      ? '12'
      : hours_temp > 12
      ? ('00' + (hours_temp - 12)).slice(-2)
      : ('00' + hours_temp).slice(-2);
  const meridiem = hours_temp < 13 ? 'AM' : 'PM';
  clockTitle.innerText = `${meridiem} ${hours}:${minutes}:${seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
