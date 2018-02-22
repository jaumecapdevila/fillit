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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formManager_js__ = __webpack_require__(1);


browser.storage.local.get()
    .then((storedSettings) => {
        if (storedSettings.automaticCheck) {
            Object(__WEBPACK_IMPORTED_MODULE_0__formManager_js__["a" /* fillForms */])(Object(__WEBPACK_IMPORTED_MODULE_0__formManager_js__["b" /* findFormsInCurrentView */])())
        }
    })
    .catch(() => {});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fillForms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return findFormsInCurrentView; });
function findFormsInCurrentView() {
    return document.getElementsByTagName('form');
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

function fillForms(forms) {
    for (const form of forms) {
        const inputs = form.getElementsByTagName('input');
        for (const input of inputs) {
            if (!hasToBeChecked(input)) {
                continue;
            }
            const inputPlaceholder = input.placeholder || defaultValueForType(input.type);
            input.value = inputPlaceholder;
        }
    }
}




/***/ })
/******/ ]);