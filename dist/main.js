/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Name - contact info\n\nfunction createContact() {\n  var contact = document.createElement('div');\n  contact.classList.add('contact');\n  contact.appendChild(contactForm(\"Don Mario\", \"+5491231232\", 'mario@luigipizza.com'));\n  contact.appendChild(contactForm(\"Don Luigi\", \"+5412111223\", 'luigi@luigipizza.com'));\n  return contact;\n}\n;\n\n// contact creation f()-- Name - number - email //inputs\nfunction contactForm(name, number, email) {\n  var contactInput = document.createElement('div');\n  contactInput.classList.add('contact-input');\n  var fullName = document.createElement('h3');\n  fullName.textContent = name;\n  var phone = document.createElement('p');\n  phone.textContent = number;\n  var contactEmail = document.createElement('p');\n  contactEmail.textContent = email;\n  contactInput.appendChild(fullName);\n  contactInput.appendChild(phone);\n  contactInput.appendChild(contactEmail);\n  return contactInput;\n}\nfunction loadContact() {\n  var main = document.getElementById('main');\n  main.textContent = \"\";\n  main.appendChild(createContact());\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-pg/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// home page content - module\n\nfunction createHome() {\n  var home = document.createElement('div');\n  home.classList.add('home');\n  var para1 = document.createElement('p');\n  para1.textContent = \"Ranked the best - est.1922\";\n  var para2 = document.createElement('p');\n  para2.textContent = \"A family-owned pizzeria with roots deeply embedded in Italian heritage, specifically in Napoli, where the art of making authentic pizza has been passed down for generations. At Luigi's we pride ourselves on using only the finest and freshest ingredients, sourced locally whenever possible, to ensure that every bite is a taste of pure deliciousness. The traditional techniques used to make the pizzas are an ode to the classic Italian way of cooking, preserving the integrity of the dish and the culture it represents. At this Luigi's, the passion for creating the best pizza is palpable. The chefs, who are true masters of their craft, put their heart and soul into every pizza they make, using traditional recipes passed down from their ancestors. The result is a beautifully crafted pizza with a perfectly crispy crust, and a generous helping of flavorful toppings, all in perfect harmony.\";\n  var pizzeria = document.createElement('img');\n  pizzeria.src = \"images/pizzeria.jpeg\";\n\n  // add all sections to div created\n  home.appendChild(para1);\n  home.appendChild(para2);\n  home.appendChild(pizzeria);\n  return home;\n}\n\n// add createHome() to main element in HTML\nfunction loadHome() {\n  var main = document.getElementById('main');\n  main.textContent = \"\";\n  main.appendChild(createHome());\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-pg/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n// create page layout through js modules -- Reference accordingly in main.js\n\n// import all parts -- Setup Header--(Navbar -EL's, link) - footer -\n// create main referenced in modules\n\n\n\n\n\n// Create header -- Should be linked to content\nfunction createHeader() {\n  var header = document.createElement('header');\n  header.classList.add('header');\n  var restoLogo = document.createElement('h1');\n  restoLogo.classList.add('resto-name');\n  restoLogo.textContent = \"Luigi's PIZZA\";\n  header.appendChild(restoLogo);\n  // add navbar to header\n  header.appendChild(createNavbar());\n  return header;\n}\n;\nfunction createNavbar() {\n  var navbar = document.createElement('nav');\n\n  // add buttons for each tab-module -- EL, triggers pg load (imported)\n  // check if \"active\" -- assign active to clicked tab\n  var homeBtn = document.createElement('button');\n  homeBtn.classList.add('nav-btn');\n  homeBtn.textContent = 'Home';\n  homeBtn.addEventListener('click', function (e) {\n    if (e.target.classList.contains('active')) return;\n    setActiveBtn(homeBtn);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n  var menuBtn = document.createElement('button');\n  menuBtn.classList.add('nav-btn');\n  menuBtn.textContent = 'Menu';\n  menuBtn.addEventListener('click', function (e) {\n    if (e.target.classList.contains('active')) return;\n    setActiveBtn(menuBtn);\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n  var contactBtn = document.createElement('button');\n  contactBtn.classList.add('nav-btn');\n  contactBtn.textContent = 'Contact';\n  contactBtn.addEventListener('click', function (e) {\n    if (e.target.classList.contains('active')) return;\n    setActiveBtn(contactBtn);\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n  navbar.appendChild(homeBtn);\n  navbar.appendChild(menuBtn);\n  navbar.appendChild(contactBtn);\n  return navbar;\n}\n;\n\n// Set active class to btn clicked + removes active from any other nav-btn\nfunction setActiveBtn(btn) {\n  var _this = this;\n  var btns = document.querySelectorAll('.nav-btn');\n  btns.forEach(function (btn) {\n    if (btn !== _this) {\n      btn.classList.remove('active');\n    }\n  });\n  btn.classList.add('active');\n}\n;\n\n// createMain() -- referenced in each module\nfunction createMain() {\n  var main = document.createElement('div');\n  main.classList.add('main');\n  main.setAttribute('id', 'main');\n  return main;\n}\n;\n\n// createFooter() -- random ©\nfunction createFooter() {\n  var footer = document.createElement('div');\n  footer.classList.add('footer');\n  return footer;\n}\n;\nfunction loadWebsite() {\n  var content = document.getElementById('content');\n  content.appendChild(createHeader());\n  content.appendChild(createMain());\n  content.appendChild(createFooter());\n  setActiveBtn(document.querySelector(\".nav-btn\"));\n  //Load homepage initially\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n;\nloadWebsite();\n\n//# sourceURL=webpack://restaurant-pg/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Menu should contain a couple of varieties of pizza\n\nfunction createMenu() {\n  var menu = document.createElement('div');\n  menu.classList.add('menu');\n\n  // 3 pizza varieties\n\n  menu.appendChild(createMenuItem('Margherita', 5, 'Muzzarella cheese, tomato sauce and fresh basil', './images/margherita.png'));\n  menu.appendChild(createMenuItem('Pepperoni', 7, 'Muzzarella cheese, tomato sauce, imported salami from Italy and a drizzle of spicy olive oil.', './images/pepperoni.png'));\n  menu.appendChild(createMenuItem('Vegetarian', 6, 'Muzzarella cheese, tomato sauce and an arrangement of in season vegetables slightly sauteed beforehand.', './images/vegetarian.png'));\n  return menu;\n}\n\n// create a f() to create each menu item\n// Img - title/name - price - details\n\nfunction createMenuItem(name, price, details, img) {\n  var menuItem = document.createElement('div');\n  menuItem.classList.add('menu-item');\n  var pizzaName = document.createElement('h2');\n  pizzaName.textContent = name;\n  var pizzaPrice = document.createElement('a');\n  pizzaPrice.textContent = \"$ \".concat(price);\n  var pizzaDetails = document.createElement('p');\n  pizzaDetails.textContent = details;\n  var pizzaImg = document.createElement('img');\n  pizzaImg.src = img;\n  pizzaImg.alt = \"\".concat(pizzaName);\n  menuItem.appendChild(pizzaImg);\n  menuItem.appendChild(pizzaName);\n  menuItem.appendChild(pizzaPrice);\n  menuItem.appendChild(pizzaDetails);\n  return menuItem;\n}\nfunction loadMenu() {\n  var main = document.getElementById('main');\n  main.textContent = \"\";\n  main.appendChild(createMenu());\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-pg/./src/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;