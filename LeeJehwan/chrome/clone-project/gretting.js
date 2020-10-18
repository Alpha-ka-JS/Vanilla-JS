const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser',
  SHOWING_CN = 'showing';

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmitName(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  greeting.classList.remove(SHOWING_CN);
  form.addEventListener('submit', handleSubmitName);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `🙋‍♀️Hello ${text.toUpperCase()}🙋‍♂️`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function handleGreetingClick() {
  localStorage.removeItem(USER_LS);
  input.value = '';
  askForName();
}

function init() {
  loadName();
  greeting.addEventListener('click', handleGreetingClick);
}

init();
