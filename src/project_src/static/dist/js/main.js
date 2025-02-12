/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./static/scss/main.scss":
/*!*******************************!*\
  !*** ./static/scss/main.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./static/scss/main.scss?");

/***/ }),

/***/ "./static/js/components/button/button.js":
/*!***********************************************!*\
  !*** ./static/js/components/button/button.js ***!
  \***********************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack:///./static/js/components/button/button.js?");

/***/ }),

/***/ "./static/js/components/dashboard/dashboard.js":
/*!*****************************************************!*\
  !*** ./static/js/components/dashboard/dashboard.js ***!
  \*****************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack:///./static/js/components/dashboard/dashboard.js?");

/***/ }),

/***/ "./static/js/components/sidebar/sidebar.js":
/*!*************************************************!*\
  !*** ./static/js/components/sidebar/sidebar.js ***!
  \*************************************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function() {\n    const sidebarButtons = document.querySelectorAll(\"g-sidebar-button\");\n    const dashboardContent = document.querySelector(\"g-content\");\n\n    sidebarButtons.forEach(function(button) {\n        button.addEventListener(\"click\", function(event) {\n            const url = button.getAttribute(\"href\");\n            \n            if (url) {\n                // Добавляем анимацию ухода вправо\n                dashboardContent.style.animation = \"slideOut 0.5s ease-in forwards\";\n\n                // Дожидаемся завершения анимации перед переходом\n                setTimeout(() => {\n                    window.location.href = url;\n                }, 500); // Время должно совпадать с длительностью анимации slideOut\n            }\n        });\n    });\n});\n\n//# sourceURL=webpack:///./static/js/components/sidebar/sidebar.js?");

/***/ }),

/***/ "./static/js/main.js":
/*!***************************!*\
  !*** ./static/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./static/scss/main.scss\");\n/* harmony import */ var _components_button_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/button/button.js */ \"./static/js/components/button/button.js\");\n/* harmony import */ var _components_button_button_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_button_button_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_dashboard_dashboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dashboard.js */ \"./static/js/components/dashboard/dashboard.js\");\n/* harmony import */ var _components_dashboard_dashboard_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_dashboard_dashboard_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_sidebar_sidebar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sidebar/sidebar.js */ \"./static/js/components/sidebar/sidebar.js\");\n/* harmony import */ var _components_sidebar_sidebar_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_sidebar_sidebar_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n \n\n\n\n\n//# sourceURL=webpack:///./static/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./static/js/main.js");
/******/ 	
/******/ })()
;