/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manager__ = __webpack_require__(1);


Object(__WEBPACK_IMPORTED_MODULE_0__manager__["a" /* init */])();

// browser.storage.local.get()
//     .then((storedSettings) => {
//         if (storedSettings.automaticCheck) {
//             fillForms(findFormsInCurrentView())
//         }
//     })
//     .catch(() => {});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return init; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(2);


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
  wrapper.firstChild.insertAdjacentHTML('beforebegin', __WEBPACK_IMPORTED_MODULE_0__util__["a" /* htmlButton */]);
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




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const htmlButton = `
  <button class="fillit-btn" aria-label="Fill form">
    <svg height="16" class="codecopy-btn-icon" viewBox="0 0 14 16" version="1.1" width="16" aria-hidden="true">
      <path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path>
    </svg>
  </button>`;
/* harmony export (immutable) */ __webpack_exports__["a"] = htmlButton;



/***/ })
/******/ ]);