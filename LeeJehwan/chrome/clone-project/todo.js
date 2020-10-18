const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const pendingList = document.querySelector('.js-pending');
const finishedList = document.querySelector('.js-finished');
const todoList = document.querySelector('.todo-list');

const PENDING_LS = 'pending';
const FINISHIED_LS = 'finished';

const showList = 'todolist-show';

let pending = [];
let finished = [];

function saveList(status) {
  if (status === PENDING_LS) {
    localStorage.setItem(PENDING_LS, JSON.stringify(pending));
  } else {
    localStorage.setItem(FINISHIED_LS, JSON.stringify(finished));
  }
}

function handleSubmit(e) {
  e.preventDefault();
  printList(toDoInput.value, PENDING_LS);
  toDoInput.value = '';
  checkHideList();
}

function checkHideList() {
  if (pending.length === 0 && finished.length === 0) {
    todoList.classList.remove(showList);
  } else {
    todoList.classList.add(showList);
  }
}

function handlePendingDelete(e) {
  const btn = e.currentTarget;
  const target = btn.parentNode.parentNode;
  pendingList.removeChild(target);
  const cleanedPending = pending.filter((list) => {
    return list.id !== target.id;
  });
  pending = cleanedPending;
  saveList(PENDING_LS);
  checkHideList();
}

function handleFinishedDelete(e) {
  const btn = e.currentTarget;
  const target = btn.parentNode.parentNode;
  finishedList.removeChild(target);
  const cleanedFinished = finished.filter((list) => {
    return list.id !== target.id;
  });
  finished = cleanedFinished;
  saveList(FINISHIED_LS);
  checkHideList();
}

function handleFinishToDo(e) {
  const text = e.currentTarget.parentNode.parentNode.firstChild.innerText;
  handlePendingDelete(e);
  printList(text, FINISHIED_LS);
  checkHideList();
}

function handleBackToPending(e) {
  const text = e.currentTarget.parentNode.parentNode.firstChild.innerText;
  handleFinishedDelete(e);
  printList(text, PENDING_LS);
  checkHideList();
}

function printList(text, status) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = text;
  const firstBtn = document.createElement('button');
  firstBtn.innerHTML = `<i class="fas fa-eraser"></i>`;
  firstBtn.classList.add('remove');
  const secondBtn = document.createElement('button');
  const newId = Date.now() + (Math.random() * 100000).toFixed();
  if (status === PENDING_LS) {
    secondBtn.innerHTML = '<i class="fas fa-check"></i>';
    firstBtn.addEventListener('click', handlePendingDelete);
    secondBtn.addEventListener('click', handleFinishToDo);
    secondBtn.classList.add('check');
  } else {
    secondBtn.innerHTML = '<i class="fas fa-backspace"></i>';
    firstBtn.addEventListener('click', handleFinishedDelete);
    secondBtn.addEventListener('click', handleBackToPending);
    secondBtn.classList.add('back');
  }
  const div = document.createElement('div');
  li.appendChild(span);
  div.appendChild(firstBtn);
  div.appendChild(secondBtn);
  li.appendChild(div);
  li.id = newId;

  const newList = {
    id: newId,
    text: text,
  };

  if (status === PENDING_LS) {
    pendingList.appendChild(li);
    pending.push(newList);
  } else {
    finishedList.appendChild(li);
    finished.push(newList);
  }
  saveList(status);
}

function loadList(status) {
  const loadedList = localStorage.getItem(status);
  if (loadedList !== null) {
    if (loadedList.length !== 0) todoList.classList.add(showList);
    const parsedList = JSON.parse(loadedList);
    parsedList.forEach((toDo) => {
      printList(toDo.text, status);
    });
  }
}

function init() {
  loadList(PENDING_LS);
  loadList(FINISHIED_LS);
  checkHideList();
  toDoForm.addEventListener('submit', handleSubmit);
}

init();
