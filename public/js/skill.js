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

/***/ "./helpers/skills.js":
/*!***************************!*\
  !*** ./helpers/skills.js ***!
  \***************************/
/***/ ((module) => {

eval("module.exports = {\r\n    selectedSkills: (selected = [], options) => {\r\n        let skills = ['HTML5', 'CSS3', 'CSSGrid', 'Flexbox', 'JavaScript', 'JQuery', 'NodeJS', \r\n        'Angular', 'VueJS', 'ReactJS', 'React Hooks', 'Redux', 'Apolo', 'GraphQL', 'TypeScript', \r\n        'PHP', 'Laravel', 'Symfony', 'Python', 'Django', 'ORM', 'Sequelize', 'Mongoose', 'SQL', \r\n        'MVC', 'SASS', 'WordPress', 'TailWindCSS'];\r\n\r\n        let html = \"\";\r\n        skills.forEach(skill => {\r\n            html += `\r\n                <li class=\"text-white font-semibold flex flex- justify-center items-center border border-lime-300 rounded-lg px-3 py-2 hover:cursor-pointer\">${skill}</li>\r\n            `;\r\n        });\r\n        return options.fn().html = html;\r\n    }\r\n}\n\n//# sourceURL=webpack://devjobs/./helpers/skills.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./helpers/skills.js");
/******/ 	
/******/ })()
;