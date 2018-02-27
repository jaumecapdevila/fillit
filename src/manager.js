import {htmlButton} from './util';

function init() {
  const forms = getFormsInCurrentView();
  for (const form of forms) {
    wrapForm(form);
  }
  const buttons = getGeneratedButtons();
  buttons.forEach((button) => {
    fillFormOnClick(button);
  });
}

function getFormsInCurrentView() {
  return document.getElementsByTagName('form');
}

function wrapForm(form) {
  const parent = form.parentNode;
  const wrapper = document.createElement('div');
  parent.replaceChild(wrapper, form);
  wrapper.appendChild(form);
  wrapper.classList.add('fillit-container');
  wrapper.firstChild.insertAdjacentHTML('beforebegin', htmlButton);
}

function fillFormOnClick(button){
  button.addEventListener('click', (event) => {
    const button = event.target;
    const form = button.parentNode.getElementsByTagName('form')[0];
    fillForm(form);
  });
}

function getGeneratedButtons() {
  return document.querySelectorAll('.fillit-btn');
}

function fillForm(form) {
  const inputs = form.getElementsByTagName('input');
  for (const input of inputs) {
      if (!hasToBeChecked(input)) {
          continue;
      }
      const inputPlaceholder = input.placeholder || defaultValueForType(input.type);
      input.value = inputPlaceholder;
  }
}

function defaultValueForType(type) {
    const defaultValues = {
        text: 'Sample text',
        password: 'password',
        email: 'john@doe.com',
        tel: '+00123123123',
        url: 'https://sample-domain.test',
        number: 1,
        range: 1,
        date: Date(),
        color: '#FFFFFF'
    }
    return defaultValues[type];
}

function hasToBeChecked(input) {
    const availableTypes = [
        'text',
        'password',
        'email',
        'tel',
        'url',
        'number',
        'range',
        'date',
        'color',
    ];
    if (availableTypes.indexOf(input.type) != -1) {
        return true;
    }
    return false;
}

export {
    init,
};
