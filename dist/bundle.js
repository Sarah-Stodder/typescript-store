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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\r\nclass User {\r\n    static createUser() {\r\n        const age = parseInt(document.getElementById(\"age\").value);\r\n        const name = document.getElementById(\"name\").value;\r\n        if (name.length > 0 && age > 0) {\r\n            document.getElementById(\"cartdiv\").style.visibility = \"visible\";\r\n            document.getElementById(\"shop\").style.visibility = \"visible\";\r\n            return new User(name, age);\r\n        }\r\n        return;\r\n    }\r\n    constructor(_name, _age, _cart = [], _id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) {\r\n        this._name = _name;\r\n        this._age = _age;\r\n        this._cart = _cart;\r\n        this._id = _id;\r\n    }\r\n    get age() {\r\n        return this._age;\r\n    }\r\n    get cart() {\r\n        return this._cart;\r\n    }\r\n    get id() {\r\n        return this._id;\r\n    }\r\n    get name() {\r\n        return this._name;\r\n    }\r\n    set age(value) {\r\n        this._age = value;\r\n    }\r\n    set cart(value) {\r\n        this._cart = value;\r\n    }\r\n    set id(value) {\r\n        this._id = value;\r\n    }\r\n    set name(value) {\r\n        this._name = value;\r\n    }\r\n    addToCart(item) {\r\n        this.cart.push(item);\r\n        Shop.updateCart();\r\n    }\r\n    removeFromCart(item) {\r\n        this.cart = this.cart.filter((i) => i.id !== item.id);\r\n        Shop.updateCart();\r\n    }\r\n    removeQuantityFromCart(item, qty) {\r\n        let i = 0;\r\n        while (i < qty) {\r\n            this.cart.splice(this.cart.findIndex((i) => i.id == item.id), 1);\r\n            i++;\r\n        }\r\n        Shop.updateCart();\r\n    }\r\n    cartTotal() {\r\n        let total = 0;\r\n        for (let item of this.cart) {\r\n            total += item.price;\r\n        }\r\n        return total;\r\n    }\r\n    printCart() {\r\n        for (let item of this.cart) {\r\n            console.log(item.name);\r\n        }\r\n    }\r\n    cartElement() {\r\n        const cartEle = document.createElement(\"table\");\r\n        for (const item of new Set(this.cart)) {\r\n            const rmButton = document.createElement(\"button\");\r\n            rmButton.id = `${item.id}-rm1`;\r\n            rmButton.classList.add(\"btn\", \"btn-danger\");\r\n            rmButton.onclick = () => {\r\n                Shop.myUser.removeQuantityFromCart(item, 1);\r\n            };\r\n            rmButton.innerText = \"-1\";\r\n            const rmAllButton = document.createElement(\"button\");\r\n            rmAllButton.id = `${item.id}-rmall`;\r\n            rmAllButton.innerText = \"X\";\r\n            rmAllButton.classList.add(\"btn\", \"btn-dark-red\", \"btn-danger\");\r\n            rmAllButton.onclick = () => {\r\n                Shop.myUser.removeFromCart(item);\r\n            };\r\n            cartEle.innerHTML += `<tr><td><strong>${item.name}</strong></td><td>$${item.price}</td>\r\n                <td>${this.cart.filter((i) => i.id === item.id).length}</td>\r\n                <td>${rmAllButton.outerHTML}</td>\r\n                <td>${rmButton.outerHTML}</td>\r\n                </tr>`;\r\n        }\r\n        cartEle.innerHTML += `<tr id=\"totalbar\"><td><strong>${\"Total:\"}</strong></td><td>$${this.cartTotal().toFixed(2)}</td></tr>`;\r\n        return cartEle;\r\n    }\r\n    addRemoveListeners() {\r\n        for (const item of new Set(this.cart)) {\r\n            const removeOneButton = document.getElementById(`${item.id}-rm1`) || null;\r\n            if (removeOneButton) {\r\n                removeOneButton.onclick = () => {\r\n                    var _a;\r\n                    (_a = Shop.myUser) === null || _a === void 0 ? void 0 : _a.removeQuantityFromCart(item, 1);\r\n                };\r\n            }\r\n            const removeAllButton = document.getElementById(`${item.id}-rmall`) || null;\r\n            if (removeAllButton) {\r\n                removeAllButton.onclick = () => {\r\n                    var _a;\r\n                    (_a = Shop.myUser) === null || _a === void 0 ? void 0 : _a.removeFromCart(item);\r\n                };\r\n            }\r\n        }\r\n    }\r\n}\r\nclass Item {\r\n    constructor(_name, _price, _description, _id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) {\r\n        this._name = _name;\r\n        this._price = _price;\r\n        this._description = _description;\r\n        this._id = _id;\r\n    }\r\n    get description() {\r\n        return this._description;\r\n    }\r\n    get id() {\r\n        return this._id;\r\n    }\r\n    get name() {\r\n        return this._name;\r\n    }\r\n    get price() {\r\n        return this._price;\r\n    }\r\n    set description(value) {\r\n        this._description = value;\r\n    }\r\n    set id(value) {\r\n        this._id = value;\r\n    }\r\n    set name(value) {\r\n        this._name = value;\r\n    }\r\n    set price(value) {\r\n        this._price = value;\r\n    }\r\n    itemElement() {\r\n        const itemBox = document.createElement(\"div\");\r\n        itemBox.innerHTML = `<div class=\"card item-card\" style=\"width: 18rem; height: 18rem;\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">${this.name}</h5>\r\n                <p class=\"card-text\">${this._description}</p>\r\n                <p class=\"card-text\">$${this.price}</p>\r\n                <button class=\"btn btn-primary\" id=\"addToCart\">Add To Cart</button>\r\n                </div>\r\n        </div>`;\r\n        const addToCartButton = itemBox.querySelector(\"#addToCart\");\r\n        addToCartButton.onclick = () => {\r\n            Shop.myUser.addToCart(this);\r\n        };\r\n        return itemBox;\r\n    }\r\n}\r\nclass Shop {\r\n    constructor(_items = []) {\r\n        this._items = _items;\r\n        //create a bunch of items in a list of items\r\n        this.items.push(new Item(\"Nezuko Tamagotchi\", 24.99, \"Train your own demon slayer!\"));\r\n        this.items.push(new Item(\"Blue's Clues Seasoning Shaker Set\", 19.99, \"Mr. Salt, Mrs. Pepper, & Baby Paprika are ready for supper!\"));\r\n        this.items.push(new Item(\"A Christmas Story Throw Blanket\", 49.99, \"Fra-gee-lay, that must be Italian!\"));\r\n        this.items.push(new Item(\"Loungefly Star Wars Darth Vader Floral Mini Backpack\", 79.99, \"Take the darkside where ever you go!\"));\r\n        this.items.push(new Item(\"My Little Occult Book Club-Hardcover\", 14.99, \"Necromancy for Beginners, Caring for Your Demon Cat, and much more!\"));\r\n        this.items.push(new Item(\"How to Lie with Statistics\", 9.99, \"There's a mighty lot of crime around here\"));\r\n        this.showItems();\r\n        Shop.myUser.cart = [];\r\n        Shop.updateCart();\r\n    }\r\n    showItems() {\r\n        for (let item of this.items) {\r\n            document.getElementById(\"shop\").appendChild(item.itemElement());\r\n        }\r\n    }\r\n    static updateCart() {\r\n        var _a;\r\n        const shopdiv = document.getElementById(\"cartdiv\");\r\n        if (Shop.myUser.cart.length <= 0) {\r\n            shopdiv.innerHTML = `<H2 id=\"cart-header\">My Cart</H2>No items in cart`;\r\n        }\r\n        else {\r\n            shopdiv.replaceChildren(Shop.myUser.cartElement());\r\n            shopdiv.innerHTML = ('<H2 id=\"cart-header\">My Cart</H2>' + shopdiv.innerHTML);\r\n            (_a = Shop.myUser) === null || _a === void 0 ? void 0 : _a.addRemoveListeners();\r\n        }\r\n    }\r\n    get items() {\r\n        return this._items;\r\n    }\r\n    set items(value) {\r\n        this._items = value;\r\n    }\r\n    static loginUser(e) {\r\n        var _a;\r\n        e.preventDefault();\r\n        Shop.myUser = User.createUser();\r\n        if (Shop.myUser) {\r\n            (_a = document.getElementById(\"login\")) === null || _a === void 0 ? void 0 : _a.remove();\r\n            new Shop();\r\n        }\r\n    }\r\n}\r\ndocument.getElementById(\"loginbutton\").addEventListener(\"click\", (e) => Shop.loginUser(e));\r\n\n\n//# sourceURL=webpack://webpackshop/./src/index.ts?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack://webpackshop/./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://webpackshop/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nlet getRandomValues;\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://webpackshop/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"unsafeStringify\": () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\n\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();\n}\n\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://webpackshop/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://webpackshop/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://webpackshop/./node_modules/uuid/dist/esm-browser/validate.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;