import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
let valueObj = {};
let storageKey = 'feedback-form-state';

formEl.addEventListener('input', e => {
  valueObj[e.target.name] = e.target.value;
  localStorage.setItem(storageKey, JSON.stringify(valueObj));
});

function saveCondition() {
  const getData = localStorage.getItem(storageKey);
  if (getData) {
    const { email, message } = JSON.parse(getData);
    formEl.elements.email.value = email;
    formEl.elements.message.value = message;
  } else {
    formEl.elements.email.value = null;
    formEl.elements.message.value = null;
  }
}

saveCondition();

formEl.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.clear();
  e.target.reset();
});
