import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
let valueObj = {};
let storageKey = 'feedback-form-state';

formEl.addEventListener(
  'input',
  throttle(e => {
    valueObj[e.target.name] = e.target.value;
    localStorage.setItem(storageKey, JSON.stringify(valueObj));
  }, 500)
);

formEl.addEventListener('submit', e => {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(storageKey)));
  e.currentTarget.reset();
  localStorage.removeItem(storageKey);
});

function saveCondition() {
  const getData = localStorage.getItem(storageKey);
  if (getData) {
    const { email, message } = JSON.parse(getData);
    inputEl.value = email !== undefined ? email : '';
    textareaEl.value = message !== undefined ? message : '';
  }
}

saveCondition();
