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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/main.js":
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _myFullPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myFullPage */ \"./app/js/myFullPage.js\");\n/* harmony import */ var _myModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myModal */ \"./app/js/myModal.js\");\n\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  var test = new _myFullPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    selector: \".fixedScroll\",\n    buttonWrap: \".selector-wrap\"\n  });\n  var nextLink = document.querySelector(\".next-link\");\n  nextLink.addEventListener(\"click\", function () {\n    document.querySelectorAll(\".selector-btn\")[1].click();\n  });\n  var popup = new _myModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    modal: \".modal\",\n    overlay: \".modal-overlay\",\n    fade: 100\n  });\n  setTimeout(function () {\n    popup.open(document.querySelector(\".modal-meeting\").innerHTML);\n  }, 5000);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvanMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9qcy9tYWluLmpzPzQzYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpeGVkU2Nyb2xsIGZyb20gXCIuL215RnVsbFBhZ2VcIjtcclxuaW1wb3J0ICBteU1vZGFsIGZyb20gXCIuL215TW9kYWxcIjtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdGxldCB0ZXN0ID0gbmV3IGZpeGVkU2Nyb2xsKHtcclxuXHRcdHNlbGVjdG9yOiBcIi5maXhlZFNjcm9sbFwiLFxyXG5cdFx0YnV0dG9uV3JhcDogXCIuc2VsZWN0b3Itd3JhcFwiXHJcblx0fSk7XHJcblxyXG5cdGxldCBuZXh0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV4dC1saW5rXCIpO1xyXG5cclxuXHRuZXh0TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0b3ItYnRuXCIpWzFdLmNsaWNrKCk7XHJcblx0fSk7XHJcblxyXG5cdGxldCBwb3B1cCA9IG5ldyBteU1vZGFsKHtcclxuXHRcdG1vZGFsOiBcIi5tb2RhbFwiLFxyXG5cdFx0b3ZlcmxheTogXCIubW9kYWwtb3ZlcmxheVwiLFxyXG5cdFx0ZmFkZTogMTAwLFxyXG5cdH0pO1xyXG5cclxuXHRzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRwb3B1cC5vcGVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtbWVldGluZ1wiKS5pbm5lckhUTUwpO1xyXG5cdH0sNTAwMCk7XHJcblxyXG59KTtcclxuXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/js/main.js\n");

/***/ }),

/***/ "./app/js/myFullPage.js":
/*!******************************!*\
  !*** ./app/js/myFullPage.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar fixedScroll =\n/*#__PURE__*/\nfunction () {\n  function fixedScroll(options) {\n    _classCallCheck(this, fixedScroll);\n\n    this.sec = document.querySelectorAll(options.selector);\n    this.current = 0;\n    this.buttonWrap = document.querySelector(options.buttonWrap);\n    this.buttons = [];\n    this.event = this.onWheel.bind(this);\n    this.init();\n  }\n\n  _createClass(fixedScroll, [{\n    key: \"init\",\n    value: function init() {\n      window.addEventListener(\"mousewheel\", this.event);\n\n      for (var i = 0; i < this.sec.length; i++) {\n        var btn = document.createElement(\"button\");\n        btn.classList.add(\"selector-btn\");\n        btn.addEventListener(\"click\", this.prepareScroll.bind(this));\n        this.buttons.push(btn);\n        this.buttonWrap.appendChild(btn);\n      }\n    }\n  }, {\n    key: \"paintBtn\",\n    value: function paintBtn() {\n      this.buttons.forEach(function (btn) {\n        btn.classList.remove(\"active\");\n      });\n      this.buttons[this.current].classList.add(\"active\");\n    }\n  }, {\n    key: \"prepareScroll\",\n    value: function prepareScroll(e) {\n      for (var i = 0; i < this.buttons.length; i++) {\n        if (this.buttons[i] === e.target) this.current = i;\n      }\n\n      this.paintBtn();\n      this.scroll(this.current);\n    }\n  }, {\n    key: \"scroll\",\n    value: function scroll(index) {\n      var offsetTop = this.sec[index].offsetTop;\n      window.scrollTo({\n        top: offsetTop,\n        behavior: \"smooth\"\n      });\n    }\n  }, {\n    key: \"onWheel\",\n    value: function onWheel(e) {\n      var _this = this;\n\n      window.removeEventListener(\"mousewheel\", this.event);\n      e = e || window.event;\n      var delta = e.deltaY || e.detail || e.wheelDelta;\n      if (delta > 0) if (this.current !== this.sec.length - 1) this.current++;\n      if (delta < 0) if (this.current !== 0) this.current--;\n      this.scroll(this.current);\n      this.paintBtn();\n      setTimeout(function () {\n        window.addEventListener(\"mousewheel\", _this.event);\n      }, 400);\n    }\n  }]);\n\n  return fixedScroll;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fixedScroll);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvanMvbXlGdWxsUGFnZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9qcy9teUZ1bGxQYWdlLmpzPzNmMTQiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgZml4ZWRTY3JvbGwge1xyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuXHRcdHRoaXMuc2VjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChvcHRpb25zLnNlbGVjdG9yKTtcclxuXHRcdHRoaXMuY3VycmVudCA9IDA7XHJcblx0XHR0aGlzLmJ1dHRvbldyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuYnV0dG9uV3JhcCk7XHJcblxyXG5cdFx0dGhpcy5idXR0b25zID0gW107XHJcblxyXG5cdFx0dGhpcy5ldmVudCA9IHRoaXMub25XaGVlbC5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIHRoaXMuZXZlbnQpO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlYy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHRcdFx0YnRuLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3Rvci1idG5cIik7XHJcblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5wcmVwYXJlU2Nyb2xsLmJpbmQodGhpcykpO1xyXG5cdFx0XHR0aGlzLmJ1dHRvbnMucHVzaChidG4pO1xyXG5cdFx0XHR0aGlzLmJ1dHRvbldyYXAuYXBwZW5kQ2hpbGQoYnRuKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHBhaW50QnRuKCkge1xyXG5cdFx0dGhpcy5idXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xyXG5cdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmJ1dHRvbnNbdGhpcy5jdXJyZW50XS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cdH1cclxuXHJcblx0cHJlcGFyZVNjcm9sbChlKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnV0dG9ucy5sZW5ndGg7IGkrKylcclxuXHRcdFx0aWYgKHRoaXMuYnV0dG9uc1tpXSA9PT0gZS50YXJnZXQpXHJcblx0XHRcdFx0dGhpcy5jdXJyZW50ID0gaTtcclxuXHRcdHRoaXMucGFpbnRCdG4oKTtcclxuXHRcdHRoaXMuc2Nyb2xsKHRoaXMuY3VycmVudCk7XHJcblx0fVxyXG5cclxuXHRzY3JvbGwoaW5kZXgpIHtcclxuXHRcdGxldCBvZmZzZXRUb3AgPSB0aGlzLnNlY1tpbmRleF0ub2Zmc2V0VG9wO1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKHtcclxuXHRcdFx0dG9wOiBvZmZzZXRUb3AsXHJcblx0XHRcdGJlaGF2aW9yOiBcInNtb290aFwiXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG9uV2hlZWwoZSkge1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIHRoaXMuZXZlbnQpO1xyXG5cdFx0ZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG5cdFx0bGV0IGRlbHRhID0gZS5kZWx0YVkgfHwgZS5kZXRhaWwgfHwgZS53aGVlbERlbHRhO1xyXG5cclxuXHRcdGlmIChkZWx0YSA+IDApXHJcblx0XHRcdGlmICh0aGlzLmN1cnJlbnQgIT09IHRoaXMuc2VjLmxlbmd0aCAtIDEpXHJcblx0XHRcdFx0dGhpcy5jdXJyZW50Kys7XHJcblx0XHRpZiAoZGVsdGEgPCAwKVxyXG5cdFx0XHRpZiAodGhpcy5jdXJyZW50ICE9PSAwKVxyXG5cdFx0XHRcdHRoaXMuY3VycmVudC0tO1xyXG5cclxuXHRcdHRoaXMuc2Nyb2xsKHRoaXMuY3VycmVudCk7XHJcblx0XHR0aGlzLnBhaW50QnRuKCk7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgdGhpcy5ldmVudCl9LCA0MDApO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZml4ZWRTY3JvbGw7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7OztBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/js/myFullPage.js\n");

/***/ }),

/***/ "./app/js/myModal.js":
/*!***************************!*\
  !*** ./app/js/myModal.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar myModal =\n/*#__PURE__*/\nfunction () {\n  function myModal(options) {\n    _classCallCheck(this, myModal);\n\n    this.modal = document.querySelector(options.modal);\n    this.overlay = document.querySelector(options.overlay);\n    this.fadeTime = options.fade;\n    this.init();\n  }\n\n  _createClass(myModal, [{\n    key: \"init\",\n    value: function init() {\n      this.overlay.addEventListener(\"click\", this.close.bind(this));\n    }\n  }, {\n    key: \"fade\",\n    value: function fade(action) {\n      var _this = this;\n\n      var fps = 60,\n          stepOpacity = 1 / fps;\n\n      if (action) {\n        var stepTime = this.fadeTime / fps,\n            opacity = 0;\n        var animate = setInterval(function () {\n          opacity += stepOpacity;\n          _this.overlay.style.opacity = opacity;\n          _this.modal.style.opacity = opacity;\n\n          if (opacity > .9) {\n            clearInterval(animate);\n            _this.overlay.style.opacity = \"1\";\n            _this.modal.style.opacity = \"1\";\n          }\n        }, stepTime);\n      } else {\n        var _stepTime = this.fadeTime / 2 / fps,\n            _opacity = 1;\n\n        var _animate = setInterval(function () {\n          _opacity -= stepOpacity;\n          _this.overlay.style.opacity = _opacity;\n          _this.modal.style.opacity = _opacity;\n\n          if (_opacity < .1) {\n            clearInterval(_animate);\n            _this.overlay.style.display = \"none\";\n            _this.modal.style.display = \"none\";\n          }\n        }, _stepTime);\n      }\n    }\n  }, {\n    key: \"open\",\n    value: function open(content) {\n      this.modal.innerHTML = content;\n      this.overlay.style.display = \"block\";\n      this.modal.style.display = \"flex\";\n      this.fade(true);\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      this.fade(false);\n    }\n  }]);\n\n  return myModal;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (myModal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvanMvbXlNb2RhbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9qcy9teU1vZGFsLmpzPzg1YmQiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgbXlNb2RhbCB7XHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xyXG5cdFx0dGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5tb2RhbCk7XHJcblx0XHR0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMub3ZlcmxheSk7XHJcblx0XHR0aGlzLmZhZGVUaW1lID0gb3B0aW9ucy5mYWRlO1xyXG5cclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jbG9zZS5iaW5kKHRoaXMpKTtcclxuXHR9XHJcblxyXG5cdGZhZGUoYWN0aW9uKSB7XHJcblx0XHRsZXQgZnBzID0gNjAsXHJcblx0XHRcdHN0ZXBPcGFjaXR5ID0gMSAvIGZwcztcclxuXHJcblx0XHRpZiAoYWN0aW9uKSB7XHJcblx0XHRcdGxldCBzdGVwVGltZSA9IHRoaXMuZmFkZVRpbWUgLyBmcHMsXHJcblx0XHRcdFx0b3BhY2l0eSA9IDA7XHJcblxyXG5cdFx0XHRsZXQgYW5pbWF0ZSA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0XHRvcGFjaXR5ICs9IHN0ZXBPcGFjaXR5O1xyXG5cclxuXHRcdFx0XHR0aGlzLm92ZXJsYXkuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XHJcblx0XHRcdFx0dGhpcy5tb2RhbC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcclxuXHJcblx0XHRcdFx0aWYgKG9wYWNpdHkgPiAuOSkge1xyXG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChhbmltYXRlKTtcclxuXHRcdFx0XHRcdHRoaXMub3ZlcmxheS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcblx0XHRcdFx0XHR0aGlzLm1vZGFsLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIHN0ZXBUaW1lKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bGV0IHN0ZXBUaW1lID0gdGhpcy5mYWRlVGltZSAvIDIgLyBmcHMsXHJcblx0XHRcdFx0b3BhY2l0eSA9IDE7XHJcblxyXG5cdFx0XHRsZXQgYW5pbWF0ZSA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0XHRvcGFjaXR5IC09IHN0ZXBPcGFjaXR5O1xyXG5cclxuXHRcdFx0XHR0aGlzLm92ZXJsYXkuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XHJcblx0XHRcdFx0dGhpcy5tb2RhbC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcclxuXHJcblx0XHRcdFx0aWYgKG9wYWNpdHkgPCAuMSkge1xyXG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChhbmltYXRlKTtcclxuXHRcdFx0XHRcdHRoaXMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRcdFx0XHR0aGlzLm1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIHN0ZXBUaW1lKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0b3Blbihjb250ZW50KSB7XHJcblx0XHR0aGlzLm1vZGFsLmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcblxyXG5cdFx0dGhpcy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHR0aGlzLm1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuXHRcdHRoaXMuZmFkZSh0cnVlKTtcclxuXHR9XHJcblxyXG5cdGNsb3NlKCkge1xyXG5cdFx0dGhpcy5mYWRlKGZhbHNlKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG15TW9kYWw7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/js/myModal.js\n");

/***/ })

/******/ });